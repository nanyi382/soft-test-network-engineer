/* ==========================================================================
 * 题库自动更新脚本（GitHub Actions 定时调用）
 * 调用 DeepSeek API（OpenAI 兼容格式）按考点生成原创单选题，追加到 data/auto.js，
 * 并同步更新 index.html / app.js / sw.js。commit+push 由 workflow 完成。
 * 用法：DEEPSEEK_API_KEY=... node scripts/generate-quiz.js
 * 可选环境变量：MODEL（默认 deepseek-chat）、CATS_PER_RUN（默认 2）、
 *              PER_CAT（默认 10）、LLM_API_URL（默认 DeepSeek 官方端点，可换其他兼容服务）
 * ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const API_URL = process.env.LLM_API_URL || 'https://api.deepseek.com/chat/completions';
const API_KEY = process.env.DEEPSEEK_API_KEY;
const MODEL = process.env.MODEL || 'deepseek-chat';
const CATS_PER_RUN = Number(process.env.CATS_PER_RUN || 2);   // 每次几个考点
const PER_CAT = Number(process.env.PER_CAT || 10);            // 每个考点几道题

const DATA_DIR = 'data';
const AUTO_JSON = path.join(DATA_DIR, 'auto.json');
const AUTO_JS = path.join(DATA_DIR, 'auto.js');

const ALL_CATS = [
  '计算机网络体系结构', '数据通信基础', '局域网与以太网', '广域网技术',
  '网络互联与 IP 编址', '交换技术', '路由协议', '无线网络',
  '网络安全', '网络管理', '网络操作系统', '网络规划与设计'
];

if (!API_KEY) {
  console.error('缺少环境变量 DEEPSEEK_API_KEY');
  process.exit(1);
}

/* ---------- 工具 ---------- */
function readAllData() {
  return fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.js'))
    .map(f => fs.readFileSync(path.join(DATA_DIR, f), 'utf8'))
    .join('\n');
}

function maxId(src) {
  const ids = [...src.matchAll(/id:\s*(\d+)/g)].map(m => +m[1]);
  return ids.length ? Math.max(...ids) : 0;
}

function categoryCounts(src) {
  const c = {};
  for (const m of src.matchAll(/category:\s*"([^"]+)"/g)) c[m[1]] = (c[m[1]] || 0) + 1;
  return c;
}

function pickCategories(src) {
  const counts = categoryCounts(src);
  // 选出题最少的考点，实现轮换覆盖
  return ALL_CATS.slice().sort((a, b) => (counts[a] || 0) - (counts[b] || 0)).slice(0, CATS_PER_RUN);
}

async function callLLM(category, perCat) {
  const system = [
    '你是一名软考（计算机技术与软件专业技术资格）中级「网络工程师」考试的命题专家。',
    '请针对指定的考点编写高质量、答案唯一的单选题。要求：',
    '1. 题目为原创表述，不照抄任何真题原文；考点与答案必须准确、无争议。',
    '2. 每题 4 个选项，格式为 "A. xxx"、"B. xxx"、"C. xxx"、"D. xxx"；正确选项的字母要随机分散（不能总是 A）。',
    '3. 每题附一句准确、简洁的解析。',
    '4. 只输出一个 JSON 数组，不要任何解释文字、不要 markdown 代码块。',
    '   数组元素结构：{"question":"题干","options":["A. ..","B. ..","C. ..","D. .."],"answer":0,"explanation":"解析"}，answer 是正确选项下标（0=A,1=B,2=C,3=D）。'
  ].join('\n');

  const user = `请为考点「${category}」编写 ${perCat} 道单选题。只输出 JSON 数组。`;

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 120000);

  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      signal: ctrl.signal,
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user }
        ],
        temperature: 0.5,
        max_tokens: 8192
      })
    });
  } finally {
    clearTimeout(timer);
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API 请求失败 ${res.status}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  const content = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!content) throw new Error('API 响应中没有内容');
  return content;
}

function extractJson(text) {
  const i = text.indexOf('[');
  const j = text.lastIndexOf(']');
  if (i < 0 || j <= i) throw new Error('AI 输出中未找到 JSON 数组');
  return JSON.parse(text.slice(i, j + 1));
}

function validate(questions, expected) {
  if (!Array.isArray(questions)) throw new Error('AI 输出不是数组');
  if (questions.length !== expected) throw new Error(`题数不符：期望 ${expected}，得到 ${questions.length}`);
  for (const q of questions) {
    if (!q || typeof q.question !== 'string' || !q.question) throw new Error('题目缺少 question');
    if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error('题目选项不是 4 个');
    const a = Number(q.answer);
    if (!Number.isInteger(a) || a < 0 || a > 3) throw new Error('answer 下标非法');
    if (typeof q.explanation !== 'string' || !q.explanation) throw new Error('题目缺少解析');
  }
  return questions;
}

/* ---------- 主流程 ---------- */
async function main() {
  const src = readAllData();
  const nextId = maxId(src) + 1;
  const cats = pickCategories(src);

  console.log(`本次考点：${cats.join('、')}，各 ${PER_CAT} 题，起始 id=${nextId}`);

  const old = fs.existsSync(AUTO_JSON) ? JSON.parse(fs.readFileSync(AUTO_JSON, 'utf8')) : [];
  const fresh = [];

  for (const cat of cats) {
    let qs;
    try {
      qs = validate(extractJson(await callLLM(cat, PER_CAT)), PER_CAT);
    } catch (e) {
      console.warn(`考点「${cat}」首次生成失败，重试一次：`, e.message);
      qs = validate(extractJson(await callLLM(cat, PER_CAT)), PER_CAT);
    }
    qs.forEach(q => {
      fresh.push({
        id: nextId + fresh.length,
        type: 'single',
        category: cat,
        question: q.question,
        options: q.options,
        answer: Number(q.answer),
        explanation: q.explanation
      });
    });
  }

  const merged = old.concat(fresh);
  fs.writeFileSync(AUTO_JSON, JSON.stringify(merged, null, 2));

  const js = '/* 自动更新的章节练习题（由 GitHub Actions 每周自动生成，勿手改） */\n'
    + 'window.QUESTIONS = window.QUESTIONS || [];\n'
    + '(function () {\n  const A = ' + JSON.stringify(merged) + ';\n  A.forEach(q => window.QUESTIONS.push(q));\n})();\n';
  fs.writeFileSync(AUTO_JS, js);

  // index.html：加入 auto.js 脚本（幂等）
  let html = fs.readFileSync('index.html', 'utf8');
  if (!html.includes('data/auto.js')) {
    html = html.replace(
      '<script src="data/paper4.js"></script>',
      '<script src="data/paper4.js"></script>\n  <script src="data/auto.js"></script>'
    );
    fs.writeFileSync('index.html', html);
  }

  // app.js：远程同步文件列表加入 auto.js（幂等）
  let app = fs.readFileSync('app.js', 'utf8');
  if (!app.includes("'data/auto.js'")) {
    app = app.replace("'data/paper4.js']", "'data/paper4.js', 'data/auto.js']");
    fs.writeFileSync('app.js', app);
  }

  // sw.js：ASSETS 加入 auto.js + CACHE 版本号 +1（幂等，版本号每次运行 +1）
  let sw = fs.readFileSync('sw.js', 'utf8');
  if (!sw.includes("'./data/auto.js'")) {
    sw = sw.replace("  './data/chapters.js'", "  './data/auto.js',\n  './data/chapters.js'");
  }
  sw = sw.replace(/const CACHE = 'npe-v(\d+)';/, (_, v) => `const CACHE = 'npe-v${+v + 1}';`);
  fs.writeFileSync('sw.js', sw);

  console.log(`完成：新增 ${fresh.length} 题，auto.json 累计 ${merged.length} 题。`);
}

main().catch(e => { console.error('更新失败：', e.message); process.exit(1); });

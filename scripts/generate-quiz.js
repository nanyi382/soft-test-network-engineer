/* ==========================================================================
 * 题库自动更新脚本（GitHub Actions 定时调用）
 * 作用：调用 Anthropic API 按考点生成原创单选题，追加到 data/auto.js，
 *       并同步更新 index.html / app.js / sw.js。commit+push 由 workflow 完成。
 * 用法：ANTHROPIC_API_KEY=... node scripts/generate-quiz.js
 * ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const API_URL = process.env.ANTHROPIC_API_URL || 'https://api.anthropic.com/v1/messages';
const MODEL = process.env.MODEL || 'claude-sonnet-5-5';
const API_KEY = process.env.ANTHROPIC_API_KEY;
const COUNT = Number(process.env.COUNT || 20);            // 每次生成题数（偶数，按考点平分）
const CATS_PER_RUN = Number(process.env.CATS_PER_RUN || 2);

const DATA_DIR = 'data';
const AUTO_JSON = path.join(DATA_DIR, 'auto.json');
const AUTO_JS = path.join(DATA_DIR, 'auto.js');

const ALL_CATS = [
  '计算机网络体系结构', '数据通信基础', '局域网与以太网', '广域网技术',
  '网络互联与 IP 编址', '交换技术', '路由协议', '无线网络',
  '网络安全', '网络管理', '网络操作系统', '网络规划与设计'
];

if (!API_KEY) {
  console.error('缺少环境变量 ANTHROPIC_API_KEY');
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
  // 选出现次数最少的考点，实现轮换覆盖
  return ALL_CATS.slice().sort((a, b) => (counts[a] || 0) - (counts[b] || 0)).slice(0, CATS_PER_RUN);
}

async function callAnthropic(cats, perCat) {
  const system = [
    '你是一名软考（计算机技术与软件专业技术资格）中级「网络工程师」考试的命题专家。',
    '请针对指定的考点编写高质量、答案唯一的单选题。要求：',
    '1. 题目为原创表述，不照抄任何真题原文；考点与答案必须准确、无争议。',
    '2. 每题 4 个选项，格式为 "A. xxx"、"B. xxx"、"C. xxx"、"D. xxx"；正确选项的字母要随机分散（不能总是 A）。',
    '3. 每题附一句准确、简洁的解析。',
    '4. 只输出一个 JSON 数组，不要任何解释文字、不要 markdown 代码块。',
    '   数组元素结构：{"category":"考点名","question":"题干","options":["A. ..","B. ..","C. ..","D. .."],"answer":0,"explanation":"解析"}，answer 是正确选项下标（0=A,1=B,2=C,3=D）。'
  ].join('\n');

  const catList = cats.map((c, i) => `考点${i + 1}「${c}」`).join('、');
  const user = `请为以下考点各编写 ${perCat} 道单选题，共 ${cats.length * perCat} 题：${catList}。只输出 JSON 数组。`;

  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 180000);

  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      signal: ctrl.signal,
      headers: {
        'content-type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 20000,
        temperature: 0.5,
        system,
        messages: [{ role: 'user', content: user }]
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
  return data.content.filter(b => b.type === 'text').map(b => b.text).join('');
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
    if (!q || typeof q.category !== 'string' || typeof q.question !== 'string') throw new Error('题目缺少 category/question');
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
  const perCat = Math.floor(COUNT / CATS_PER_RUN);
  const expected = perCat * CATS_PER_RUN;

  console.log(`本次考点：${cats.join('、')}，各 ${perCat} 题，共 ${expected} 题，起始 id=${nextId}`);

  let questions;
  try {
    questions = validate(extractJson(await callAnthropic(cats, perCat)), expected);
  } catch (e) {
    console.warn('首次生成失败，重试一次：', e.message);
    questions = validate(extractJson(await callAnthropic(cats, perCat)), expected);
  }

  // 分配 id 与类型（章节练习题，无 paper 字段）
  const old = fs.existsSync(AUTO_JSON) ? JSON.parse(fs.readFileSync(AUTO_JSON, 'utf8')) : [];
  const fresh = questions.map((q, i) => ({
    id: nextId + i,
    type: 'single',
    category: cats[Math.min(Math.floor(i / perCat), cats.length - 1)],
    question: q.question,
    options: q.options,
    answer: Number(q.answer),
    explanation: q.explanation
  }));

  const merged = old.concat(fresh);
  fs.writeFileSync(AUTO_JSON, JSON.stringify(merged, null, 2));

  // 重新生成 auto.js
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

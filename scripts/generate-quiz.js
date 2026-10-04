/* ==========================================================================
 * 题库自动更新脚本 v2（GitHub Actions 定时调用，DeepSeek API）
 *
 * 两种模式（环境变量 TASK 控制）：
 *   TASK=chapter（默认，每周）：生成章节练习题（选择题 + 案例题）追加到 data/auto.js
 *   TASK=paper  （每月）：生成一整套模拟卷，创建 data/paperN.js
 *
 * 截止日期：超过 DEADLINE（默认 2027-01-01）后自动停止更新（空跑退出）。
 * 用法：DEEPSEEK_API_KEY=... TASK=chapter node scripts/generate-quiz.js
 * ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const API_URL = process.env.LLM_API_URL || 'https://api.deepseek.com/chat/completions';
const API_KEY = process.env.DEEPSEEK_API_KEY;
const MODEL = process.env.MODEL || 'deepseek-chat';
const TASK = process.env.TASK || 'chapter';
const DEADLINE = process.env.DEADLINE || '2027-01-01';

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

// 截止日期判断
if (Date.now() >= new Date(DEADLINE + 'T00:00:00Z').getTime()) {
  console.log(`已到截止日期 ${DEADLINE}，自动更新停止。`);
  process.exit(0);
}

/* ---------- 工具 ---------- */
function readAllData() {
  return fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.js'))
    .map(f => fs.readFileSync(path.join(DATA_DIR, f), 'utf8'))
    .join('\n');
}

function maxId(src) {
  const ids = [...src.matchAll(/["']?id["']?\s*:\s*(\d+)/g)].map(m => +m[1]);
  return ids.length ? Math.max(...ids) : 0;
}

function categoryCounts(src) {
  const c = {};
  for (const m of src.matchAll(/["']?category["']?\s*:\s*"([^"]+)"/g)) c[m[1]] = (c[m[1]] || 0) + 1;
  return c;
}

function pickCategories(src, n) {
  const counts = categoryCounts(src);
  return ALL_CATS.slice().sort((a, b) => (counts[a] || 0) - (counts[b] || 0)).slice(0, n);
}

function currentPaperCount() {
  const src = fs.readFileSync(path.join(DATA_DIR, 'papers.js'), 'utf8');
  const m = src.match(/\{ id: "paper(\d+)"/g);
  return m ? Math.max(...m.map(x => +x.match(/paper(\d+)/)[1])) : 0;
}

/* ---------- 通用 AI 调用 ---------- */
async function chat(system, user) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 120000);
  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'content-type': 'application/json', 'authorization': `Bearer ${API_KEY}` },
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
    const b = await res.text();
    throw new Error(`API ${res.status}: ${b.slice(0, 300)}`);
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

/* ---------- 选择题 ---------- */
function singleSystem() {
  return [
    '你是一名软考（计算机技术与软件专业技术资格）中级「网络工程师」考试命题专家。',
    '请依据历年真题的高频考点与典型题型编写单选题，题目为原创表述（不照抄真题原文）。要求：',
    '1. 考点与答案必须准确、无争议；每道题都必须有准确解析。',
    '2. 每题 4 个选项，格式 "A. xxx"…"D. xxx"；正确选项字母随机分散（不能总是 A）。',
    '3. 只输出一个 JSON 数组，不要解释文字、不要 markdown 代码块。',
    '   元素结构：{"category":"考点名","question":"题干","options":["A. ..","B. ..","C. ..","D. .."],"answer":0,"explanation":"解析"}，answer 是正确选项下标（0=A…3=D）。'
  ].join('\n');
}

function validateSingles(questions, expected) {
  if (!Array.isArray(questions) || questions.length !== expected) {
    throw new Error(`题数不符：期望 ${expected}，得到 ${questions && questions.length}`);
  }
  for (const q of questions) {
    if (!q || typeof q.question !== 'string' || !q.question) throw new Error('题目缺少 question');
    if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error('选项不是 4 个');
    const a = Number(q.answer);
    if (!Number.isInteger(a) || a < 0 || a > 3) throw new Error('answer 下标非法');
    if (typeof q.explanation !== 'string' || !q.explanation) throw new Error('缺少解析');
    if (typeof q.category !== 'string' || !q.category) throw new Error('缺少考点');
  }
  return questions;
}

// 生成一批选择题，并二次校验（自查）答案，返回 [{category,question,options,answer,explanation}]
async function genSingles(catHint, count) {
  const sys = singleSystem();
  const user = `请围绕考点「${catHint}」编写 ${count} 道单选题。只输出 JSON 数组。`;
  let qs;
  try {
    qs = validateSingles(extractJson(await chat(sys, user)), count);
  } catch (e) {
    console.warn(`生成失败，重试一次：`, e.message);
    qs = validateSingles(extractJson(await chat(sys, user)), count);
  }
  // 二次校验：让 AI 逐题核对 answer 与解析，确保答案正确真实、解析与答案一致
  try {
    const fixSys = [
      '你是软考网络工程师命题审核专家。对下面每道单选题逐一核对：',
      '1. answer 下标指向的选项是否确实是唯一正确答案（结合网络工程专业知识严格判断，不能与解析矛盾）；',
      '2. 解析是否与 answer 一致、无事实性错误；',
      '3. 题干、选项是否存在歧义或知识点错误。',
      '只输出修正后的完整 JSON 数组（格式与输入完全一致）；正确的题原样保留，错误的题修正 answer 或 explanation。'
    ].join('\n');
    const fixed = validateSingles(extractJson(await chat(fixSys, JSON.stringify(qs))), count);
    qs = fixed;
  } catch (e) {
    console.warn('自查失败，沿用原始结果：', e.message);
  }
  return qs;
}

/* ---------- 案例题 ---------- */
function validateCase(obj) {
  if (!obj || typeof obj.question !== 'string' || !obj.question) throw new Error('案例题缺少 question');
  if (!Array.isArray(obj.parts) || obj.parts.length === 0) throw new Error('案例题缺少 parts');
  obj.parts.forEach((p, i) => {
    if (!p || typeof p.prompt !== 'string' || !p.prompt) throw new Error(`parts[${i}] 缺少 prompt`);
    if (p.type !== 'fill' && p.type !== 'qa') throw new Error(`parts[${i}] type 非法`);
    if (p.type === 'fill' && (!Array.isArray(p.blanks) || p.blanks.length === 0)) throw new Error(`parts[${i}] fill 缺少 blanks`);
    if (p.type === 'qa' && (typeof p.reference !== 'string' || !p.reference)) throw new Error(`parts[${i}] qa 缺少 reference`);
    if (!p.score) p.score = 3;
  });
  return obj;
}

// 生成案例题，返回 [{category,question,parts}]
async function genCases(catHint, count) {
  const sys = [
    '你是一名软考中级「网络工程师」考试命题专家。请依据历年真题的高频考点编写案例分析题，题目为原创表述。',
    '只输出一个 JSON 数组（不要解释、不要 markdown），元素结构：',
    '{"category":"考点名","question":"【案例背景】……（含具体场景/拓扑/数据）","parts":[',
    '  {"prompt":"小题（1）题干","type":"fill","blanks":["可接受答案1","可接受答案2"],"score":3,"explanation":"解析"},',
    '  {"prompt":"小题（2）题干","type":"qa","reference":"参考答案要点","score":5,"explanation":"评分要点与解析"}',
    ']}',
    '每道案例题 3~4 个小题，fill 与 qa 混合；blanks 里列出该空的多种可接受写法；每个小题都要有 explanation。'
  ].join('\n');
  const user = `请围绕考点「${catHint}」编写 ${count} 道案例分析题。只输出 JSON 数组。`;
  let cs;
  try {
    cs = extractJson(await chat(sys, user));
  } catch (e) {
    console.warn(`案例题生成失败，重试一次：`, e.message);
    cs = extractJson(await chat(sys, user));
  }
  if (!Array.isArray(cs) || cs.length !== count) throw new Error(`案例题数不符：期望 ${count}，得到 ${cs && cs.length}`);
  return cs.map(c => validateCase(c));
}

/* ---------- 落盘：auto.js（章节题追加） ---------- */
function writeAuto(newQuestions) {
  const old = fs.existsSync(AUTO_JSON) ? JSON.parse(fs.readFileSync(AUTO_JSON, 'utf8')) : [];
  const merged = old.concat(newQuestions);
  fs.writeFileSync(AUTO_JSON, JSON.stringify(merged, null, 2));
  const js = '/* 自动更新的章节练习题（由 GitHub Actions 每周自动生成，勿手改） */\n'
    + 'window.QUESTIONS = window.QUESTIONS || [];\n'
    + '(function () {\n  const A = ' + JSON.stringify(merged) + ';\n  A.forEach(q => window.QUESTIONS.push(q));\n})();\n';
  fs.writeFileSync(AUTO_JS, js);
  return merged.length;
}

/* ---------- 落盘：整套模拟卷 ---------- */
function writePaper(paperNo, singles, cases) {
  const P = `paper${paperNo}`;
  const singleArr = singles.map((q, i) => ({
    id: 100000 + paperNo * 100 + i + 1,
    type: 'single', category: q.category, paper: P,
    question: q.question, options: q.options, answer: Number(q.answer), explanation: q.explanation
  }));
  const caseArr = cases.map((c, i) => ({
    id: 200000 + paperNo * 100 + i + 1,
    type: 'case', category: c.category, paper: P,
    question: c.question, parts: c.parts
  }));

  const file = `/* 真题模拟卷（${paperNo}）：${singleArr.length} 选择 + ${caseArr.length} 案例（AI 自动生成） */\n`
    + 'window.QUESTIONS = window.QUESTIONS || [];\n'
    + '(function () {\n  const P = ' + JSON.stringify(P) + ';\n  const A = ' + JSON.stringify(singleArr, null, 2) + ';\n  A.forEach(q => window.QUESTIONS.push(q));\n})();\n\n'
    + 'window.QUESTIONS = window.QUESTIONS || [];\n'
    + '(function () {\n  const P = ' + JSON.stringify(P) + ';\n  const C = ' + JSON.stringify(caseArr, null, 2) + ';\n  C.forEach(q => window.QUESTIONS.push(q));\n})();\n';
  fs.writeFileSync(path.join(DATA_DIR, `${P}.js`), file);

  // papers.js 增加元数据
  let papers = fs.readFileSync(path.join(DATA_DIR, 'papers.js'), 'utf8');
  papers = papers.replace(/^(\s*)\];\s*$/m, `$1  { id: "${P}", name: "真题模拟卷（${paperNo}）", cover: "综合 · 全考点（AI 生成）" }\n$1];`);
  fs.writeFileSync(path.join(DATA_DIR, 'papers.js'), papers);
  return P;
}

/* ---------- 更新关联文件（幂等） ---------- */
function syncRefs(newDataFile) {
  // index.html
  let html = fs.readFileSync('index.html', 'utf8');
  if (!html.includes(newDataFile)) {
    html = html.replace('<script src="data/chapters.js"></script>', `<script src="data/${newDataFile}"></script>\n  <script src="data/chapters.js"></script>`);
    fs.writeFileSync('index.html', html);
  }
  // app.js：远程同步列表 + 首页试卷数
  let app = fs.readFileSync('app.js', 'utf8');
  if (!app.includes(`'data/${newDataFile}'`)) {
    app = app.replace("'data/chapters.js']", `'data/chapters.js', 'data/${newDataFile}']`);
  }
  const paperCnt = currentPaperCount();
  app = app.replace(/(<div class="desc">)(\d+)( 套全真真题卷)/, (_, a, b, c) => a + paperCnt + c);
  fs.writeFileSync('app.js', app);
  // sw.js：ASSETS + CACHE +1
  let sw = fs.readFileSync('sw.js', 'utf8');
  if (!sw.includes(`'./data/${newDataFile}'`)) {
    sw = sw.replace("  './data/chapters.js'", `  './data/${newDataFile}',\n  './data/chapters.js'`);
  }
  sw = sw.replace(/const CACHE = 'npe-v(\d+)';/, (_, v) => `const CACHE = 'npe-v${+v + 1}';`);
  fs.writeFileSync('sw.js', sw);
}

/* ---------- 模式：章节题 ---------- */
async function runChapter() {
  const src = readAllData();
  const nextId = maxId(src) + 1;
  const cats = pickCategories(src, 2);
  const perCat = Number(process.env.PER_CAT || 10);
  const casePerCat = Number(process.env.CASE_PER_CAT || 1);

  console.log(`[章节题] 考点：${cats.join('、')}，各 ${perCat} 选择 + ${casePerCat} 案例，起始 id=${nextId}`);

  const fresh = [];
  for (const cat of cats) {
    const singles = await genSingles(cat, perCat);
    singles.forEach(q => fresh.push({ id: nextId + fresh.length, type: 'single', category: cat, question: q.question, options: q.options, answer: Number(q.answer), explanation: q.explanation }));

    const cases = await genCases(cat, casePerCat);
    cases.forEach(c => fresh.push({ id: nextId + fresh.length, type: 'case', category: cat, question: c.question, parts: c.parts }));
  }

  const total = writeAuto(fresh);
  syncRefs('auto.js');
  console.log(`完成：新增 ${fresh.length} 题，auto 累计 ${total} 题。`);
}

/* ---------- 模式：整套模拟卷 ---------- */
async function runPaper() {
  const paperNo = currentPaperCount() + 1;
  const singleCount = Number(process.env.PAPER_SINGLE || 75);
  const caseCount = Number(process.env.PAPER_CASE || 5);
  console.log(`[模拟卷] 生成真题模拟卷（${paperNo}）：${singleCount} 选择 + ${caseCount} 案例`);

  const singles = [];
  const perBatch = 15;
  const batches = Math.ceil(singleCount / perBatch);
  for (let b = 0; b < batches; b++) {
    const n = Math.min(perBatch, singleCount - singles.length);
    const catHint = ALL_CATS[b % ALL_CATS.length] + ' 等综合考点';
    const qs = await genSingles(catHint, n);
    qs.forEach(q => singles.push(q));
  }

  const cases = [];
  const caseBatch = 5;
  const caseBatches = Math.ceil(caseCount / caseBatch);
  for (let b = 0; b < caseBatches; b++) {
    const n = Math.min(caseBatch, caseCount - cases.length);
    const cs = await genCases(ALL_CATS[b % ALL_CATS.length] + ' 等综合考点', n);
    cs.forEach(c => cases.push(c));
  }

  const P = writePaper(paperNo, singles, cases);
  syncRefs(`${P}.js`);
  console.log(`完成：生成 ${P}（${singles.length} 选择 + ${cases.length} 案例）。`);
}

/* ---------- 入口 ---------- */
(async () => {
  try {
    if (TASK === 'paper') await runPaper();
    else await runChapter();
  } catch (e) {
    console.error('更新失败：', e.message);
    process.exit(1);
  }
})();

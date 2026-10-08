/* ==========================================================================
 * 题库自动更新脚本 v3（GitHub Actions 定时调用，DeepSeek API）
 *
 * 三种模式（环境变量 TASK 控制）：
 *   TASK=chapter（默认，每周）：全部 10 章各生成 10 选择 + 1 案例，追加到 data/auto.js
 *   TASK=fill             ：把每一章补到 TARGET_PER_CAT（默认 100）题
 *   TASK=paper  （每月）  ：生成一整套模拟卷，创建 data/paperN.js
 *
 * 章节清单来自 data/chapters_meta.js（官方《网络工程师教程（第 6 版）》目录），
 * 每章带上大纲子考点提示，保证题目严格落在本章考纲范围内。
 *
 * 截止日期：超过 DEADLINE（默认 2027-01-01）后自动停止更新（空跑退出）。
 * 用法：DEEPSEEK_API_KEY=... TASK=chapter node scripts/generate-quiz.js
 * ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const API_URL = process.env.LLM_API_URL || 'https://api.deepseek.com/chat/completions';
const API_KEY = process.env.DEEPSEEK_API_KEY;
const MODEL = process.env.MODEL || 'deepseek-chat';
const TASK = process.env.TASK || 'chapter';
const DEADLINE = process.env.DEADLINE || '2027-01-01';

const DATA_DIR = 'data';
const AUTO_JSON = path.join(DATA_DIR, 'auto.json');
const AUTO_JS = path.join(DATA_DIR, 'auto.js');
const MANIFEST_JS = path.join(DATA_DIR, 'manifest.js');

/* 章节练习的题池文件（都是不带 paper 字段的章节题） */
const CHAPTER_POOL_FILES = ['chapters.js', 'auto.js', 'case_config.js'];

/* ---------- 章节目录（单一事实来源 data/chapters_meta.js） ---------- */
function loadChapters() {
  const src = fs.readFileSync(path.join(DATA_DIR, 'chapters_meta.js'), 'utf8');
  const sandbox = {};
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(src, sandbox, { filename: 'chapters_meta.js' });
  const list = sandbox.CHAPTERS || [];
  if (!list.length) throw new Error('data/chapters_meta.js 里没有 window.CHAPTERS');
  return list;
}

/* 参与生成的正文章节（排除「配置命令专项」这类 no 为 null 的专项入口） */
function syllabusChapters() {
  return loadChapters().filter((c) => c.no);
}

/* 章节练习现有题池（只取不带 paper 的章节题） */
function chapterPool() {
  const sandbox = {};
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  ['papers.js', 'chapters_meta.js'].concat(CHAPTER_POOL_FILES).forEach((f) => {
    const p = path.join(DATA_DIR, f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), sandbox, { filename: f });
  });
  return (sandbox.QUESTIONS || []).filter((q) => !q.paper);
}

function chapterCounts() {
  const counts = {};
  chapterPool().forEach((q) => { counts[q.category] = (counts[q.category] || 0) + 1; });
  return counts;
}

/* ---------- 数据文件清单（供 index.html / sw.js 引用） ---------- */
// 扫描 data/ 目录，凡是有 window.QUESTIONS / PAPERS / CHAPTERS 的都算数据文件，
// 避免手工维护漏文件（papers.js 挂的是 PAPERS、chapters_meta.js 挂的是 CHAPTERS）
function listDataFiles() {
  const all = fs.readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.js') && f !== 'manifest.js')
    .filter((f) => /window\.(QUESTIONS|PAPERS|CHAPTERS)\s*=/.test(fs.readFileSync(path.join(DATA_DIR, f), 'utf8')));
  const head = ['papers.js', 'chapters_meta.js'].filter((f) => all.includes(f));
  const rest = all.filter((f) => !head.includes(f)).sort();
  return head.concat(rest).map((f) => 'data/' + f);
}

const MAX_ID_RE = /["']?id["']?\s*:\s*(\d+)/g;

function readAllData() {
  return fs.readdirSync(DATA_DIR)
    .filter((f) => f.endsWith('.js'))
    .map((f) => fs.readFileSync(path.join(DATA_DIR, f), 'utf8'))
    .join('\n');
}

function maxId(src) {
  const ids = [...src.matchAll(MAX_ID_RE)].map((m) => +m[1]);
  return ids.length ? Math.max(...ids) : 0;
}

function currentPaperCount() {
  const src = fs.readFileSync(path.join(DATA_DIR, 'papers.js'), 'utf8');
  const m = src.match(/\{ id: "paper(\d+)"/g);
  return m ? Math.max(...m.map((x) => +x.match(/paper(\d+)/)[1])) : 0;
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
  const raw = text.slice(i, j + 1);
  try {
    return JSON.parse(raw);
  } catch (e) {
    // 容错：去掉 JSON 中不合法的尾随逗号
    return JSON.parse(raw.replace(/,\s*([\]}])/g, '$1'));
  }
}

/* ---------- 选择题 ---------- */
function singleSystem() {
  return [
    '你是一名软考（计算机技术与软件专业技术资格）中级「网络工程师」考试命题专家。',
    '请依据历年真题的高频考点与典型题型编写单选题，题目为原创表述（不照抄真题原文）。要求：',
    '1. 考点与答案必须准确、无争议；每道题都必须有准确解析。',
    '2. 每题 4 个选项，格式 "A. xxx"…"D. xxx"。正确选项的位置必须在本批题目里',
    '   均匀分布在 A/B/C/D 四个位置上，各约 25%，绝对不要集中在 A 或 B。',
    '3. 解析里不要用「选项 A/选项 B」这种方式指代选项，直接复述选项内容，',
    '   避免选项顺序调整后解析与选项对不上。',
    '4. 只输出一个 JSON 数组，不要解释文字、不要 markdown 代码块。',
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

/* 取某章已有题目的题干，喂给模型避免重复出题。
   实测不带这个提示时，868 道自动生成题里有 83 道与已有题目重复。 */
const STEM_LIMIT = 150;
function stemsOf(category) {
  return chapterPool()
    .filter((q) => q.category === category)
    .map((q) => String(q.question).replace(/\s+/g, ' ').slice(0, 50))
    .slice(-STEM_LIMIT);
}

function stemBlock(stems) {
  if (!stems || !stems.length) return '';
  return `\n\n以下题目已经存在，新题不得与它们重复（题干相同、或只是换个说法问同一个知识点都算重复）：\n`
    + stems.map((s) => `- ${s}`).join('\n');
}

// 生成一批选择题，并二次校验（自查）答案，返回 [{category,question,options,answer,explanation}]
async function genSingles(catHint, count, existing) {
  const sys = singleSystem();
  const user = `请围绕考点「${catHint}」编写 ${count} 道单选题。只输出 JSON 数组。` + stemBlock(existing);
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
  return cs.map((c) => validateCase(c));
}

/* ---------- 落盘：auto.js（章节题追加） ---------- */
function writeAuto(newQuestions) {
  const old = fs.existsSync(AUTO_JSON) ? JSON.parse(fs.readFileSync(AUTO_JSON, 'utf8')) : [];
  const merged = old.concat(newQuestions);
  fs.writeFileSync(AUTO_JSON, JSON.stringify(merged, null, 2));
  const js = '/* 自动更新的章节练习题（由 GitHub Actions 自动生成，勿手改） */\n'
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

/* ---------- 同步关联文件（以 data/manifest.js 为单一事实来源） ----------
 * 之前这里用 `replace("'data/chapters.js']", ...)` 改 app.js 的硬编码清单，
 * 锚点永远匹配不到（chapters.js 在数组中间），导致新题库文件从未被加进
 * APK 的远程同步列表 —— 这就是「真题模拟卷（四）及之后 0 题」的根因。
 * 现在改为：扫描 data/ 目录生成清单，再据此重写 index.html 的 script 标签。 */
function syncRefs() {
  const files = listDataFiles();
  const changed = [];

  // 1) data/manifest.js —— 单一事实来源
  const manifest = '/* 题库数据文件清单（单一事实来源）\n'
    + ' *\n'
    + ' * 三处引用本清单，加题库文件时只需维护这里：\n'
    + ' *   1. index.html 的 <script> 标签（网页版加载）\n'
    + ' *   2. sw.js 的 ASSETS（用 importScripts 读本文件，离线缓存）\n'
    + ' *   3. app.js 的 syncRemoteQuiz()（APK 联网同步）\n'
    + ' *\n'
    + ' * 同时挂在 window（页面）和 self（Service Worker）上，两种环境都能读。\n'
    + ' * 由 scripts/generate-quiz.js 的 syncRefs() 自动维护，勿手改。 */\n'
    + '(function (g) {\n'
    + '  g.DATA_FILES = [\n'
    + files.map((f) => `    '${f}'`).join(',\n') + '\n'
    + '  ];\n'
    + '})(typeof self !== \'undefined\' ? self : this);\n';
  const oldManifest = fs.existsSync(MANIFEST_JS) ? fs.readFileSync(MANIFEST_JS, 'utf8') : '';
  if (oldManifest !== manifest) {
    fs.writeFileSync(MANIFEST_JS, manifest);
    changed.push('data/manifest.js');
  }

  // 2) index.html —— 按标记块重写 script 标签，不再靠脆弱字符串锚点
  const BEGIN = '  <!-- DATA_SCRIPTS:BEGIN（由 scripts/generate-quiz.js 生成，勿手改） -->';
  const END = '  <!-- DATA_SCRIPTS:END -->';
  let html = fs.readFileSync('index.html', 'utf8');
  const block = [BEGIN]
    .concat(['  <script src="data/manifest.js"></script>'])
    .concat(files.map((f) => `  <script src="${f}"></script>`))
    .concat([END])
    .join('\n');
  const re = new RegExp(BEGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s\\S]*?' + END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  if (re.test(html)) {
    const next = html.replace(re, block);
    if (next !== html) { html = next; fs.writeFileSync('index.html', html); changed.push('index.html'); }
  } else {
    console.warn('⚠ index.html 里没找到 DATA_SCRIPTS 标记块，跳过 script 标签同步');
  }

  // 3) sw.js —— 资源清单由 importScripts(manifest.js) 读取，这里只需 bump 缓存版本
  let sw = fs.readFileSync('sw.js', 'utf8');
  const bumped = sw.replace(/const CACHE = 'npe-v(\d+)';/, (_, v) => `const CACHE = 'npe-v${+v + 1}';`);
  if (bumped !== sw) { fs.writeFileSync('sw.js', bumped); changed.push('sw.js(CACHE)'); }

  console.log('同步关联文件：' + (changed.length ? changed.join('、') : '无变化'));
  return files;
}

/* ---------- 把一批新题转成题目对象 ---------- */
function toQuestionObjs(cat, singles, cases, startId) {
  const out = [];
  const nextId = () => startId + out.length;
  singles.forEach((q) => out.push({
    id: nextId(), type: 'single', category: cat,
    question: q.question, options: q.options, answer: Number(q.answer), explanation: q.explanation
  }));
  cases.forEach((c) => out.push({
    id: nextId(), type: 'case', category: cat, question: c.question, parts: c.parts
  }));
  return out;
}

/* ---------- 模式：章节题（每周一轮全章节） ---------- */
async function runChapter() {
  const chapters = syllabusChapters();
  const perCat = Number(process.env.PER_CAT || 10);
  const casePerCat = Number(process.env.CASE_PER_CAT || 1);

  const src = readAllData();
  const nextId = maxId(src) + 1;
  console.log(`[章节题] ${chapters.length} 章，各 ${perCat} 选择 + ${casePerCat} 案例，起始 id=${nextId}`);

  let total = 0;
  const fresh = [];
  for (const ch of chapters) {
    const hint = `${ch.name}（本章考纲要点：${ch.summary}）`;
    const singles = await genSingles(hint, perCat, stemsOf(ch.name));
    const cases = await genCases(hint, casePerCat);
    const objs = toQuestionObjs(ch.name, singles, cases, nextId + fresh.length);
    fresh.push(...objs);
    console.log(`  ${ch.name}：+${objs.length} 题`);
  }

  total = writeAuto(fresh);
  syncRefs();
  console.log(`完成：新增 ${fresh.length} 题，auto 累计 ${total} 题。`);
}

/* ---------- 模式：补齐到每章目标题量 ---------- */
async function runFill() {
  const chapters = syllabusChapters();
  const target = Number(process.env.TARGET_PER_CAT || 100);
  const batch = Number(process.env.BATCH || 10);
  const casePerCat = Number(process.env.CASE_PER_CAT || 1);

  const counts = chapterCounts();
  console.log(`[补齐] 目标每章 ${target} 题`);
  chapters.forEach((ch) => {
    console.log(`  ${ch.name}：现有 ${counts[ch.name] || 0} 题，缺 ${Math.max(0, target - (counts[ch.name] || 0))} 题`);
  });

  const src = readAllData();
  let nextId = maxId(src) + 1;
  let addedTotal = 0;

  for (const ch of chapters) {
    let need = target - (counts[ch.name] || 0);
    if (need <= 0) { console.log(`\n${ch.name}：已达标，跳过`); continue; }
    console.log(`\n${ch.name}：开始补 ${need} 题`);
    const hint = `${ch.name}（本章考纲要点：${ch.summary}）`;

    // 选择题分批生成；每批落盘一次，中途失败也不丢已生成的题
    const singleNeed = Math.max(0, need - casePerCat);
    for (let got = 0; got < singleNeed; got += batch) {
      const n = Math.min(batch, singleNeed - got);
      try {
        // 每批重新取一次已有题干：上一批刚写入的题也会进到避重清单里
        const singles = await genSingles(hint, n, stemsOf(ch.name));
        const objs = toQuestionObjs(ch.name, singles, [], nextId);
        nextId += objs.length;
        writeAuto(objs);
        addedTotal += objs.length;
        console.log(`  选择题 +${objs.length}（本章累计 ${got + objs.length}/${singleNeed}）`);
      } catch (e) {
        console.error(`  选择题批次失败，跳过：${e.message}`);
      }
    }

    // 案例题
    if (casePerCat > 0 && need > 0) {
      try {
        const cases = await genCases(hint, casePerCat);
        const objs = toQuestionObjs(ch.name, [], cases, nextId);
        nextId += objs.length;
        writeAuto(objs);
        addedTotal += objs.length;
        console.log(`  案例题 +${objs.length}`);
      } catch (e) {
        console.error(`  案例题生成失败，跳过：${e.message}`);
      }
    }
  }

  syncRefs();
  const after = chapterCounts();
  console.log('\n补齐完成，新增 %d 题。各章现有题数：', addedTotal);
  chapters.forEach((ch) => console.log(`  ${ch.name}：${after[ch.name] || 0}`));
}

/* ---------- 模式：整套模拟卷 ---------- */
async function runPaper() {
  const chapters = syllabusChapters();
  const paperNo = currentPaperCount() + 1;
  const singleCount = Number(process.env.PAPER_SINGLE || 75);
  const caseCount = Number(process.env.PAPER_CASE || 5);
  console.log(`[模拟卷] 生成真题模拟卷（${paperNo}）：${singleCount} 选择 + ${caseCount} 案例`);

  const hintOf = (i) => `${chapters[i % chapters.length].name}（本章考纲要点：${chapters[i % chapters.length].summary}）`;

  const singles = [];
  const perBatch = 15;
  const batches = Math.ceil(singleCount / perBatch);
  for (let b = 0; b < batches; b++) {
    const n = Math.min(perBatch, singleCount - singles.length);
    const qs = await genSingles(hintOf(b) + ' 等综合考点', n);
    qs.forEach((q) => singles.push(q));
  }

  const cases = [];
  const caseBatch = 5;
  const caseBatches = Math.ceil(caseCount / caseBatch);
  for (let b = 0; b < caseBatches; b++) {
    const n = Math.min(caseBatch, caseCount - cases.length);
    const cs = await genCases(hintOf(b) + ' 等综合考点', n);
    cs.forEach((c) => cases.push(c));
  }

  const P = writePaper(paperNo, singles, cases);
  syncRefs();
  console.log(`完成：生成 ${P}（${singles.length} 选择 + ${cases.length} 案例）。`);
}

/* ---------- 入口 ---------- */
if (require.main === module) {
  (async () => {
    try {
      if (!API_KEY) {
        console.error('缺少环境变量 DEEPSEEK_API_KEY');
        process.exit(1);
      }
      if (Date.now() >= new Date(DEADLINE + 'T00:00:00Z').getTime()) {
        console.log(`已到截止日期 ${DEADLINE}，自动更新停止。`);
        process.exit(0);
      }
      if (TASK === 'paper') await runPaper();
      else if (TASK === 'fill') await runFill();
      else await runChapter();
    } catch (e) {
      console.error('更新失败：', e.message);
      process.exit(1);
    }
  })();
}

/* 供本地校验使用：node -e "require('./scripts/generate-quiz.js').syncRefs()" */
module.exports = {
  listDataFiles, syncRefs, chapterCounts, syllabusChapters, maxId, readAllData, loadChapters
};

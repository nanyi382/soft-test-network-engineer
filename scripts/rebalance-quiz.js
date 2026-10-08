/* ==========================================================================
 * 题库后处理：去重 + 配平答案分布
 *
 * 背景：AI 批量生成会犯两类系统性错误——
 *   1. 重复出题（同一章内反复出同一道题，实测自动生成 868 题里 83 题重复）
 *   2. 选项答案偏向 A/B（实测 A 28.8% / B 44.6% / C 22.1% / D 4.4%，
 *      学生只要蒙 B 就能对将近一半）
 *
 * 处理方式：
 *   1. 按归一化题干去重（保留首次出现，与历史手写题库章节一起比对）
 *   2. 在【安全子集】内重排选项顺序，把正确答案的分布拉均匀
 *
 * 安全护栏——以下题目的选项顺序必须保持原样，一律不动：
 *   - 解析里引用了选项字母（"选项 A 描述的是…"）
 *   - 选项含「以上都/都不/均不/全都」这类必须排最后的兜底项
 *   - 题干提到「选项」二字
 *   - 四个选项是纯数字且升序（顺序本身有意义）
 *
 * 修改 data/auto.json（源）并据此重写 data/auto.js。
 * 用法：node scripts/rebalance-quiz.js [--dry]
 * ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DRY = process.argv.includes('--dry');
const DATA_DIR = path.join(__dirname, '..', 'data');
const AUTO_JSON = path.join(DATA_DIR, 'auto.json');
const AUTO_JS = path.join(DATA_DIR, 'auto.js');

/* 归一化题干：去空白、去结尾的「（　）」占位、去标点差异 */
function normStem(s) {
  return String(s || '')
    .replace(/\s/g, '')
    .replace(/[（(]\s*[）)]/g, '')
    .replace(/[，。；：、,.;:]/g, '');
}

/* 选项含兜底项（必须排在最后，不能参与打乱） */
const TAIL_OPT = /(以上都|以上均|都不对|均不正确|全都|全部正确|以上皆|以上选项)/;

/* 解析引用了选项字母 */
const LETTER_REF = /(^|[^A-Za-z])[ABCD][）)、．.：:，,]/;

/* 四个选项都是纯数字且升序 */
function isAscendingNumeric(options) {
  const nums = options.map((o) => String(o).replace(/^[A-D][.、．]\s*/, '').trim());
  if (!nums.every((n) => /^\d+(\.\d+)?$/.test(n))) return false;
  const vals = nums.map(Number);
  return vals.every((v, i) => i === 0 || v > vals[i - 1]);
}

function isMovable(q) {
  if (q.type !== 'single') return false;
  if (!Array.isArray(q.options) || q.options.length !== 4) return false;
  // 四个选项都必须带 "A. " 前缀，否则重排后字母序号会对不上
  if (!q.options.every((o) => /^[A-D][.、．]/.test(o))) return false;
  if (LETTER_REF.test(q.explanation || '')) return false;
  if (q.options.some((o) => TAIL_OPT.test(o))) return false;
  if (/选项/.test(q.question || '')) return false;
  if (isAscendingNumeric(q.options)) return false;
  return true;
}

/* 把选项按 perm 重排，同时修正 answer 下标 */
function applyPerm(q, perm) {
  // perm[i] = 新位置 i 上放原位置 perm[i] 的选项
  const options = perm.map((src) => {
    const text = q.options[src];
    const letter = 'ABCD'[perm.indexOf(src)];
    return text.replace(/^[A-D](?=[.、．])/, letter);
  });
  const answer = perm.indexOf(q.answer);
  return { ...q, options, answer };
}

/* 用一个固定种子的伪随机洗牌，保证可复现 */
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ==========================================================================
 * 配平核心：把一批选择题里「可安全重排」的那些，重新指派正确答案的下标，
 * 使 A/B/C/D 尽量均分。返回 id -> 新题 的 Map（顺序未变的题也在里面）。
 * ========================================================================== */
function balanceSingles(singles, seed) {
  const before = [0, 0, 0, 0];
  singles.forEach((q) => { if (q.answer >= 0 && q.answer <= 3) before[q.answer]++; });

  const fixed = singles.filter((q) => !isMovable(q));
  const movable = singles.filter(isMovable);

  // 固定题的答案先占掉配额，可移动的题再去填平缺口
  const budget = [0, 0, 0, 0];
  fixed.forEach((q) => { budget[q.answer]++; });

  const rnd = mulberry32(seed);
  const targets = movable.map(() => 0);
  const order = movable.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {          // 打乱派发顺序，避免系统性偏移
    const j = Math.floor(rnd() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  order.forEach((i) => {
    let best = 0;
    for (let k = 1; k < 4; k++) if (budget[k] < budget[best]) best = k;
    const ties = [0, 1, 2, 3].filter((k) => budget[k] === budget[best]);
    const pick = ties[Math.floor(rnd() * ties.length)];
    targets[i] = pick;
    budget[pick]++;
  });

  const after = [0, 0, 0, 0];
  let moved = 0;
  const out = new Map();
  singles.forEach((q) => {
    const i = movable.indexOf(q);
    if (i < 0) { after[q.answer]++; out.set(q.id, q); return; }
    const want = targets[i];
    if (want === q.answer) { after[q.answer]++; out.set(q.id, q); return; }
    // 把原答案挪到 want 位置，其余选项按原顺序填充剩下的槽位
    const rest = [0, 1, 2, 3].filter((k) => k !== q.answer);
    const slots = [0, 1, 2, 3].filter((k) => k !== want);
    const perm = [];
    perm[want] = q.answer;
    slots.forEach((slot, idx) => { perm[slot] = rest[idx]; });
    moved++;
    const nq = applyPerm(q, perm);
    after[nq.answer]++;
    out.set(nq.id, nq);
  });

  const pct = (a) => a.map((x) => (100 * x / singles.length).toFixed(1) + '%').join(' / ');
  return { out, moved, before, after, movable: movable.length, fixed: fixed.length, pct };
}

/* ---------- 历史手写文件 data/chapters.js ---------- */
// 实测这 120 道题里 119 道答案是 A（99%），必须一并配平。
// 文件是「题组 + 用例组」两段式，按原顺序重组，保留题面内容不动。
function rebalanceChaptersFile(dry) {
  const CH = path.join(__dirname, '..', 'data', 'chapters.js');
  if (!fs.existsSync(CH)) return;
  const sb = {};
  sb.window = sb;
  vm.createContext(sb);
  vm.runInContext(fs.readFileSync(CH, 'utf8'), sb, { filename: 'chapters.js' });
  const all = sb.QUESTIONS || [];
  const singles = all.filter((q) => q.type === 'single');
  const cases = all.filter((q) => q.type !== 'single');

  const r = balanceSingles(singles, 20261009);
  console.log('\n[data/chapters.js] 选择题 %d 道（可重排 %d，保持原样 %d）',
    singles.length, r.movable, r.fixed);
  console.log('  答案分布 前：A/B/C/D = %s (%s)', r.before.join(' / '), r.pct(r.before));
  console.log('  答案分布 后：A/B/C/D = %s (%s)', r.after.join(' / '), r.pct(r.after));
  console.log('  重新指派答案的题：%d 道', r.moved);
  if (dry) return;

  // 按章节目录归组输出，顺带修掉迁移后过期的旧章节注释
  const order = loadChapterOrder();
  const groupOf = (q) => q.category;
  const byCat = new Map();
  singles.forEach((q) => {
    const c = groupOf(q);
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(r.out.get(q.id) || q);
  });
  const cats = [...order.filter((c) => byCat.has(c)), ...[...byCat.keys()].filter((c) => !order.includes(c))];

  const lines = [];
  lines.push('/* 章节模拟题：' + singles.length + ' 选择 + ' + cases.length + ' 案例（每章 10 选择 + 1 案例） */');
  lines.push('window.QUESTIONS = window.QUESTIONS || [];');
  lines.push('(function () {');
  lines.push('  const A = [');
  cats.forEach((c, ci) => {
    lines.push('    // ========== ' + c + ' ==========');
    byCat.get(c).forEach((q) => {
      lines.push('    ' + JSON.stringify({
        id: q.id, type: q.type, category: q.category,
        question: q.question, options: q.options, answer: q.answer, explanation: q.explanation
      }) + ',');
    });
    if (ci < cats.length - 1) lines.push('');
  });
  lines.push('  ];');
  lines.push('  A.forEach(q => window.QUESTIONS.push(q));');
  lines.push('})();');
  lines.push('');
  lines.push('window.QUESTIONS = window.QUESTIONS || [];');
  lines.push('(function () {');
  lines.push('  const C = [');
  cases.forEach((q) => lines.push('    ' + JSON.stringify(q) + ','));
  lines.push('  ];');
  lines.push('  C.forEach(q => window.QUESTIONS.push(q));');
  lines.push('})();');
  fs.writeFileSync(CH, lines.join('\n') + '\n');
  console.log('  已重写 data/chapters.js');
}

/* 章节显示顺序（用于分组注释） */
function loadChapterOrder() {
  try {
    return loadChapters().map((c) => c.name);
  } catch (e) {
    return [];
  }
}

function main() {
  if (!fs.existsSync(AUTO_JSON)) {
    console.error('找不到 data/auto.json');
    process.exit(1);
  }
  const auto = JSON.parse(fs.readFileSync(AUTO_JSON, 'utf8'));

  /* ---------- 1. 去重 ---------- */
  // 先装入历史手写题库的题干，自动生成的题不能与之重复
  const sb = {};
  sb.window = sb;
  vm.createContext(sb);
  ['chapters.js', 'case_config.js'].forEach((f) => {
    const p = path.join(DATA_DIR, f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, 'utf8'), sb, { filename: f });
  });
  const seen = new Set((sb.QUESTIONS || []).map((q) => normStem(q.question)));

  const kept = [];
  const dropped = [];
  auto.forEach((q) => {
    const k = normStem(q.question);
    if (seen.has(k)) { dropped.push(q); return; }
    seen.add(k);
    kept.push(q);
  });
  console.log('去重：原 %d 题 → 保留 %d 题，删除重复 %d 题', auto.length, kept.length, dropped.length);

  /* ---------- 2. 配平答案分布 ---------- */
  const singles = kept.filter((q) => q.type === 'single');
  const r = balanceSingles(singles, 20261008);
  console.log('配平：选择题 %d 道，其中可安全重排 %d 道，保持原样 %d 道',
    singles.length, r.movable, r.fixed);
  console.log('  答案分布 前：A/B/C/D = %s (%s)', r.before.join(' / '), r.pct(r.before));
  console.log('  答案分布 后：A/B/C/D = %s (%s)', r.after.join(' / '), r.pct(r.after));
  console.log('  重新指派答案的题：%d 道', r.moved);

  const rebuilt = kept.map((q) => r.out.get(q.id) || q);

  /* ---------- 3. 历史手写文件 ---------- */
  rebalanceChaptersFile(DRY);

  if (DRY) { console.log('\n--dry 模式，未写入文件。'); return; }

  /* ---------- 3. 落盘 ---------- */
  fs.writeFileSync(AUTO_JSON, JSON.stringify(rebuilt, null, 2));
  const js = '/* 自动更新的章节练习题（由 GitHub Actions 自动生成，勿手改） */\n'
    + 'window.QUESTIONS = window.QUESTIONS || [];\n'
    + '(function () {\n  const A = ' + JSON.stringify(rebuilt) + ';\n  A.forEach(q => window.QUESTIONS.push(q));\n})();\n';
  fs.writeFileSync(AUTO_JS, js);
  console.log('\n已写入 data/auto.json 与 data/auto.js（%d 题）。', rebuilt.length);
}

main();

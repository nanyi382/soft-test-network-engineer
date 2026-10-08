/* 题库完整性校验（本地用，不参与构建）
 * 用法：node scripts/verify-quiz.js
 * 检查：各章题量、重复题、答案分布、解析缺失、试卷完整性、题型结构。 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_DIR = path.join(__dirname, '..', 'data');
const sandbox = {};
sandbox.window = sandbox;
vm.createContext(sandbox);
fs.readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.js') && f !== 'manifest.js')
  .forEach((f) => vm.runInContext(fs.readFileSync(path.join(DATA_DIR, f), 'utf8'), sandbox, { filename: f }));

const Q = sandbox.QUESTIONS || [];
const PAPERS = sandbox.PAPERS || [];
const CHAPTERS = sandbox.CHAPTERS || [];
const pool = Q.filter((q) => !q.paper);

console.log('总题数 %d | 章节练习 %d | 试卷 %d | 章节元数据 %d', Q.length, pool.length, PAPERS.length, CHAPTERS.length);

let bad = 0;
const fail = (m) => { bad++; console.log('  ✗ ' + m); };

/* 1. 各章题量 */
console.log('\n=== 各章题量 ===');
const counts = {};
pool.forEach((q) => { counts[q.category] = (counts[q.category] || 0) + 1; });
CHAPTERS.filter((c) => c.no).forEach((c) => {
  const n = counts[c.name] || 0;
  console.log('  第 %s 章 %s : %d', String(c.no).padStart(2), c.name, n);
  if (n === 0) fail(`第 ${c.no} 章「${c.name}」没有题目`);
});

/* 2. 重复题（题干归一化后比较，跨章也算） */
console.log('\n=== 重复题干 ===');
const norm = (s) => String(s).replace(/\s/g, '').replace(/[（(].*?[）)]$/, '');
const seen = new Map();
const dups = [];
Q.forEach((q) => {
  const k = norm(q.question);
  if (seen.has(k)) dups.push([seen.get(k), q]);
  else seen.set(k, q);
});
console.log('  重复题干：%d 组', dups.length);
dups.slice(0, 8).forEach(([a, b]) => {
  console.log('    id %s(%s) ≈ id %s(%s) : %s', a.id, a.category, b.id, b.category, String(a.question).slice(0, 42));
});
if (dups.length > Q.length * 0.02) fail(`重复题干过多（${dups.length} 组 / ${Q.length} 题）`);

/* 3. 答案分布（只看章节练习选择题） */
console.log('\n=== 答案分布（章节练习选择题）===');
const sels = pool.filter((q) => q.type === 'single');
const dist = [0, 0, 0, 0];
sels.forEach((q) => { if (q.answer >= 0 && q.answer <= 3) dist[q.answer]++; });
console.log('  A:%d B:%d C:%d D:%d（共 %d 题）', dist[0], dist[1], dist[2], dist[3], sels.length);
dist.forEach((n, i) => {
  const pct = n / sels.length;
  if (pct > 0.5 || pct < 0.1) fail(`${'ABCD'[i]} 占比异常：${(pct * 100).toFixed(1)}%`);
});

/* 4. 结构完整性 */
console.log('\n=== 结构完整性 ===');
let noExp = 0, badOpt = 0, badAns = 0, badCase = 0, emptyQ = 0;
Q.forEach((q) => {
  if (!q.question || !String(q.question).trim()) emptyQ++;
  if (q.type === 'single') {
    if (!Array.isArray(q.options) || q.options.length !== 4) badOpt++;
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) badAns++;
    if (!q.explanation || !String(q.explanation).trim()) noExp++;
  } else if (q.type === 'case') {
    const parts = q.parts;
    if (!Array.isArray(parts) || !parts.length) badCase++;
    else if (parts.some((p) => !p.prompt || (p.type === 'fill' ? !p.blanks || !p.blanks.length : !p.reference))) badCase++;
  } else badCase++;
});
console.log('  空题干 %d | 选项数异常 %d | 答案下标非法 %d | 缺解析 %d | 案例结构异常 %d', emptyQ, badOpt, badAns, noExp, badCase);
if (noExp) fail(`有 ${noExp} 道题缺解析`);
if (badOpt || badAns || badCase || emptyQ) fail('存在结构异常的题目');

/* 5. id 唯一性 */
console.log('\n=== id 唯一性 ===');
const ids = Q.map((q) => q.id);
const dupIds = ids.filter((v, i) => ids.indexOf(v) !== i);
console.log('  重复 id：%s', dupIds.length ? [...new Set(dupIds)].slice(0, 10).join(', ') : '无');
if (dupIds.length) fail(`有 ${dupIds.length} 个重复 id`);

/* 6. 试卷完整性 */
console.log('\n=== 试卷完整性 ===');
const empty = [];
PAPERS.forEach((p) => { if (!Q.filter((q) => q.paper === p.id).length) empty.push(p.id); });
console.log('  空卷：%s', empty.length ? empty.join(', ') : '无');
if (empty.length) fail(`有 ${empty.length} 套空卷`);

/* 7. 目录外分类 */
console.log('\n=== 目录外分类 ===');
const known = new Set(CHAPTERS.map((c) => c.name));
const orphan = {};
pool.forEach((q) => { if (!known.has(q.category)) orphan[q.category] = (orphan[q.category] || 0) + 1; });
const ok = Object.keys(orphan);
console.log('  %s', ok.length ? ok.map((k) => `${k}(${orphan[k]})`).join(', ') : '无');
if (ok.length) fail('章节练习里有目录外的分类');

console.log('\n%s', bad ? `✗ 共 ${bad} 项检查未通过` : '✓ 全部检查通过');
process.exit(bad ? 1 : 0);

/* ==========================================================================
 * 把根目录的 web 资产同步到 www/（Capacitor 的 webDir，即 APK 的 web 包）。
 *
 * 为什么需要这个脚本：www/ 以前是手工拷贝的副本，没有任何自动化，长期漂移
 * ——漏了 data/case_config.js、index.html 少 script 标签、sw.js 停在旧版本、
 * app.js 是旧版缺题号导航。这就是 APK 上「真题模拟卷（四）及之后 0 题」的
 * 一半成因。现在打包前跑一次，保证 APK 里的内容与根目录一致。
 *
 * 用法：npm run sync-www
 * ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const WWW = path.join(ROOT, 'www');

/* 需要同步的文件与目录（相对于根目录） */
const ENTRIES = [
  'index.html',
  'app.js',
  'style.css',
  'sw.js',
  'manifest.webmanifest',
  'icons',
  'data'
];

/* www/ 里由 Capacitor 自己维护、不能被覆盖的东西 */
const PROTECTED = new Set(['plugins', 'cordova.js', 'cordova_plugins.js', 'config.xml', 'assets']);

function copyEntry(rel) {
  const src = path.join(ROOT, rel);
  const dest = path.join(WWW, rel);
  if (!fs.existsSync(src)) {
    console.warn(`  跳过（不存在）：${rel}`);
    return;
  }
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      if (PROTECTED.has(name)) continue;
      copyEntry(path.join(rel, name));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function main() {
  if (!fs.existsSync(WWW)) {
    console.error('没有找到 www/ 目录（Capacitor 的 webDir），请先执行 cap add android。');
    process.exit(1);
  }

  console.log('同步 web 资产到 www/ …');
  ENTRIES.forEach((rel) => {
    copyEntry(rel);
    console.log(`  ✓ ${rel}`);
  });

  // 核对：www/data 的文件必须与 index.html 引用的清单一致
  const html = fs.readFileSync(path.join(WWW, 'index.html'), 'utf8');
  const refs = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map((m) => m[1]);
  const missing = refs.filter((r) => !fs.existsSync(path.join(WWW, r)));
  if (missing.length) {
    console.error('\n✗ www/ 里缺少 index.html 引用的文件：', missing.join('、'));
    process.exit(1);
  }
  console.log(`\n完成：www/ 内 index.html 引用的 ${refs.length} 个题库文件全部存在。`);
}

main();

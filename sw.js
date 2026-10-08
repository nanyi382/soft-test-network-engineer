/* Service Worker：离线可用 + 题库自动更新。
 *
 * 设计要点：
 *  1. 数据文件清单只维护一份（data/manifest.js），本文件用 importScripts 读取，
 *     避免出现「HTML 引用了新题库、SW 没缓存」的两份清单不同步问题。
 *  2. 题库（data/*.js）与页面导航走【网络优先】：在线时永远拿到最新题目，
 *     离线时回退缓存。其余静态资源仍是缓存优先，保证秒开。
 *  3. install 逐个文件缓存（allSettled），任何一个文件 404 都不会让整个
 *     Service Worker 卡在 waiting 状态、导致老缓存永久生效。
 *
 * 改了代码/题库要强制刷新时，把下面 CACHE 版本号加一即可。 */
const CACHE = 'npe-v14';

/* 核心外壳资源（必须存在）；题库文件清单从 manifest.js 读取 */
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/icon.svg',
  './data/manifest.js'
];

/* 读取单一事实来源的题库清单；失败时退化为「只缓存核心外壳」，
   题库文件会在首次访问时被运行时缓存补上，不影响可用性。 */
let DATA_ASSETS = [];
try {
  importScripts('./data/manifest.js');
  if (self.DATA_FILES && self.DATA_FILES.length) {
    DATA_ASSETS = self.DATA_FILES.map((f) => './' + f);
  }
} catch (e) {
  DATA_ASSETS = [];
}

const ASSETS = CORE_ASSETS.concat(DATA_ASSETS);

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // 逐个缓存：某个文件缺失不会连累其余文件，也不会让 install 失败
    const results = await Promise.allSettled(ASSETS.map((url) => cache.add(url)));
    const failed = results
      .map((r, i) => (r.status === 'rejected' ? ASSETS[i] : null))
      .filter(Boolean);
    if (failed.length) console.warn('[SW] 以下资源缓存失败，将在首次访问时补上：', failed);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    const oldCaches = keys.filter((k) => k !== CACHE);
    const isUpdate = oldCaches.length > 0;
    await Promise.all(oldCaches.map((k) => caches.delete(k)));
    await self.clients.claim();
    // 是「版本升级」而非首次安装时，通知已打开的页面刷新一次，立即用上新题库
    if (isUpdate) {
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((c) => c.postMessage({ type: 'SW_UPDATED', cache: CACHE }));
    }
  })());
});

/* 题库数据文件（路径含 /data/）：网络优先 */
function isDataRequest(url) {
  return url.pathname.indexOf('/data/') !== -1;
}

async function networkFirst(req) {
  try {
    const res = await fetch(req);
    if (res && res.status === 200) {
      const clone = res.clone();
      caches.open(CACHE).then((c) => c.put(req, clone));
    }
    return res;
  } catch (err) {
    const hit = await caches.match(req);
    if (hit) return hit;
    if (req.mode === 'navigate') {
      const fallback = await caches.match('./index.html');
      if (fallback) return fallback;
    }
    throw err;
  }
}

async function cacheFirst(req) {
  const hit = await caches.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res && res.status === 200) {
      const clone = res.clone();
      caches.open(CACHE).then((c) => c.put(req, clone));
    }
    return res;
  } catch (err) {
    if (req.mode === 'navigate') {
      const fallback = await caches.match('./index.html');
      if (fallback) return fallback;
    }
    throw err;
  }
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;

  // 题库与页面导航：网络优先，保证题库能自动更新；离线回退缓存
  if (isDataRequest(url) || e.request.mode === 'navigate') {
    e.respondWith(networkFirst(e.request));
    return;
  }
  e.respondWith(cacheFirst(e.request));
});

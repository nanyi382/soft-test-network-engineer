/* 本地静态服务器：零依赖。用于以 http://localhost 方式运行，
   从而启用 PWA 的「安装成 App」与离线缓存能力。 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const ROOT = __dirname;
const NO_OPEN = process.env.NO_OPEN === '1';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

function start(port, attemptsLeft) {
  const server = http.createServer((req, res) => {
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    } catch (e) {
      res.writeHead(400); res.end('Bad Request'); return;
    }
    if (pathname === '/') pathname = '/index.html';
    const filePath = path.normalize(path.join(ROOT, pathname));
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('Forbidden'); return; }
    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); res.end('404 Not Found'); return; }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attemptsLeft > 0) {
      start(port + 1, attemptsLeft - 1);
    } else {
      console.error('启动失败：', err.message);
      process.exit(1);
    }
  });

  server.listen(port, () => {
    const url = 'http://localhost:' + port;
    console.log('============================================');
    console.log('  软考网络工程师刷题 已启动');
    console.log('  地址：' + url);
    console.log('  服务已在后台运行；停止请运行「停止刷题.vbs」。');
    console.log('  提示：首次打开后，可在浏览器地址栏右侧点「安装」图标，');
    console.log('  把它安装成独立 App（桌面 / 开始菜单会生成图标）。');
    console.log('============================================');
    openBrowser(url);
    try { fs.writeFileSync(path.join(ROOT, 'server.pid'), String(process.pid)); } catch (e) {}
  });
}

function openBrowser(url) {
  if (NO_OPEN) return;
  const cmd = process.platform === 'win32'
    ? 'start "" "' + url + '"'
    : process.platform === 'darwin' ? 'open "' + url + '"' : 'xdg-open "' + url + '"';
  exec(cmd);
}

function isPortOpen(port, cb) {
  const net = require('net');
  const s = net.connect({ port, host: '127.0.0.1' }, () => { s.destroy(); cb(true); });
  s.on('error', () => cb(false));
}

// 若已有实例在运行（端口被占），直接打开浏览器并退出，避免重复启动后台进程
const BASE_PORT = 8000;
isPortOpen(BASE_PORT, (open) => {
  if (open) {
    console.log('检测到已有实例运行，直接打开浏览器。');
    openBrowser('http://localhost:' + BASE_PORT);
    process.exit(0);
  }
  start(BASE_PORT, 10);
});

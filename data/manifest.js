/* 题库数据文件清单（单一事实来源）
 *
 * 三处引用本清单，加题库文件时只需维护这里：
 *   1. index.html 的 <script> 标签（网页版加载）
 *   2. sw.js 的 ASSETS（用 importScripts 读本文件，离线缓存）
 *   3. app.js 的 syncRemoteQuiz()（APK 联网同步）
 *
 * 同时挂在 window（页面）和 self（Service Worker）上，两种环境都能读。
 * 由 scripts/generate-quiz.js 的 syncRefs() 自动维护，勿手改。 */
(function (g) {
  g.DATA_FILES = [
    'data/papers.js',
    'data/chapters_meta.js',
    'data/auto.js',
    'data/case_config.js',
    'data/chapters.js',
    'data/paper1.js',
    'data/paper2.js',
    'data/paper3.js',
    'data/paper4.js',
    'data/real_papers.js'
  ];
})(typeof self !== 'undefined' ? self : this);

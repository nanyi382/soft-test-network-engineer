/* ==========================================================================
 * 软考中级网络工程师刷题 — 核心逻辑
 * 依赖：window.QUESTIONS（题库）、window.PAPERS（试卷元数据）
 * ========================================================================== */

(function () {
  'use strict';

  /* ===================== 工具函数 ===================== */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function norm(s) {
    return String(s == null ? '' : s).trim().replace(/\s+/g, '').toLowerCase();
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ===================== 存储层 ===================== */
  const Store = (() => {
    let ok = false;
    try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); ok = true; } catch (e) { ok = false; }
    const mem = {};
    return {
      ok,
      get(key, def) {
        if (ok) { try { const v = localStorage.getItem(key); return v == null ? def : JSON.parse(v); } catch (e) { return def; } }
        return key in mem ? mem[key] : def;
      },
      set(key, val) {
        if (ok) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
        else { mem[key] = val; }
      },
      getWrong() { return this.get('npe.wrong', []); },
      setWrong(list) { this.set('npe.wrong', list); },
      getFavorite() { return this.get('npe.favorite', []); },
      setFavorite(list) { this.set('npe.favorite', list); },
      getStats() { return this.get('npe.stats', {}); },
      setStats(obj) { this.set('npe.stats', obj); },
      getDoneIds() { return this.get('npe.doneIds', []); },
      setDoneIds(list) { this.set('npe.doneIds', list); },
      remove(key) {
        if (ok) { try { localStorage.removeItem(key); } catch (e) {} }
        else { delete mem[key]; }
      },
    };
  })();

  /* ===================== 题库查询 ===================== */
  const QUIZ = {
    all() { return window.QUESTIONS || []; },
    byId(id) { return this.all().find(q => q.id === id); },
    byCategory(cat) { return this.all().filter(q => q.category === cat); },
    byPaper(paper) { return this.all().filter(q => q.paper === paper); },
    chapterQuestions() { return this.all().filter(q => !q.paper); },
    singleOf(list) { return list.filter(q => q.type === 'single'); },
    caseOf(list) { return list.filter(q => q.type === 'case'); },
    categories() {
      const seen = [];
      this.all().forEach(q => { if (q.category && seen.indexOf(q.category) < 0) seen.push(q.category); });
      return seen;
    },
    questionScore(q) { // 满分
      if (q.type === 'single') return 1;
      return q.parts.reduce((s, p) => s + (p.score || 0), 0);
    },
  };

  /* ===================== 错题 / 收藏 / 统计 ===================== */
  function addWrong(id) {
    const w = Store.getWrong();
    if (w.indexOf(id) < 0) { w.push(id); Store.setWrong(w); }
  }
  function removeWrong(id) {
    Store.setWrong(Store.getWrong().filter(x => x !== id));
  }
  function toggleFavorite(id) {
    let f = Store.getFavorite();
    if (f.indexOf(id) >= 0) { f = f.filter(x => x !== id); }
    else { f.push(id); }
    Store.setFavorite(f);
  }
  function isFavorite(id) { return Store.getFavorite().indexOf(id) >= 0; }

  // 记录一次答题统计：correct 表示该题是否「全对」
  function recordStat(q, correct) {
    const stats = Store.getStats();
    const cat = q.category || '未分类';
    const c = stats[cat] || { done: 0, correct: 0 };
    c.done += 1;
    if (correct) c.correct += 1;
    stats[cat] = c;
    Store.setStats(stats);

    const done = Store.getDoneIds();
    if (done.indexOf(q.id) < 0) { done.push(q.id); Store.setDoneIds(done); }
  }

  /* ===================== 判分 =====================
   * 返回 { parts: [{ok, score, got}], total, got, correct }  */
  function judgeSingle(q, userAns) {
    const ok = userAns === q.answer;
    return { correct: ok, got: ok ? 1 : 0, total: 1 };
  }
  function judgeCase(q, userAns, selfGrade) {
    // userAns: 数组（对应 parts 索引，fill 为字符串，qa 为文本）
    // selfGrade: 对象 { partIndex: 'full'|'half'|'zero' }，仅 qa 需要
    let got = 0, total = 0;
    const parts = q.parts.map((p, i) => {
      const score = p.score || 0;
      total += score;
      if (p.type === 'fill') {
        const ans = norm(userAns && userAns[i]);
        const ok = ans !== '' && p.blanks.some(b => norm(b) === ans);
        const g = ok ? score : 0;
        got += g;
        return { ok, got: g, score };
      } else { // qa
        const g = selfGrade && selfGrade[i];
        let got2 = 0;
        if (g === 'full') got2 = score;
        else if (g === 'half') got2 = Math.round(score * 0.5 * 10) / 10;
        got += got2;
        return { ok: g === 'full', got: got2, score, self: true };
      }
    });
    return { correct: got >= total - 1e-9, got, total, parts };
  }

  /* ===================== 全局状态 ===================== */
  const state = {
    view: 'home',
    // 练习模式
    practice: { list: [], index: 0, answers: {}, selfGrade: {}, title: '', backTo: null, done: false },
    // 考试模式
    exam: { paperId: null, part: null, list: [], answers: {}, selfGrade: {}, timeLeft: 0, timer: null, submitted: false, deadline: null },
  };
  const examRecorded = new Set(); // 考试中已记录过错题/统计的题目 id

  /* ===================== 进度持久化（断点续做） ===================== */
  const KEY_PRACTICE = 'npe.progress.practice';
  const KEY_EXAM = 'npe.progress.exam';

  function saveProgress() {
    // practice.backTo 是函数、exam.timer 是句柄，JSON 序列化时自动丢弃，恢复时重建
    if (state.practice && !state.practice.done && state.practice.list.length) {
      Store.set(KEY_PRACTICE, state.practice);
    } else {
      Store.remove(KEY_PRACTICE);
    }
    if (state.exam && !state.exam.submitted && state.exam.list.length) {
      Store.set(KEY_EXAM, state.exam);
    } else {
      Store.remove(KEY_EXAM);
    }
  }

  // 返回应恢复的视图名（'__practice' / '__exam'），无则返回 null
  function restoreProgress() {
    const p = Store.get(KEY_PRACTICE, null);
    if (p && p.list && p.list.length && !p.done) {
      p.backTo = null;
      if (confirm('检测到上次未完成的「' + (p.title || '练习') + '」，是否继续？')) {
        state.practice = p;
        return '__practice';
      }
      Store.remove(KEY_PRACTICE);
    }
    const e = Store.get(KEY_EXAM, null);
    if (e && e.list && e.list.length && !e.submitted) {
      e.timer = null;
      if (e.deadline) e.timeLeft = Math.max(0, Math.round((e.deadline - Date.now()) / 1000));
      if (confirm('检测到上次未交卷的模拟考试「' + (e.name || '') + '」，是否继续？')) {
        state.exam = e;
        examRecorded.clear();
        return '__exam';
      }
      Store.remove(KEY_EXAM);
    }
    return null;
  }

  /* ===================== 视图切换 ===================== */
  function showView(name) {
    state.view = name;
    $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === name));
    const app = $('#app');
    app.innerHTML = '';
    RENDER[name](app);
    window.scrollTo(0, 0);
  }

  /* ===================== 首页 ===================== */
  function renderHome(app) {
    const total = QUIZ.all().length;
    const done = Store.getDoneIds().length;
    const stats = Store.getStats();
    let doneCnt = 0, correctCnt = 0;
    Object.values(stats).forEach(c => { doneCnt += c.done; correctCnt += c.correct; });
    const rate = doneCnt ? Math.round(correctCnt / doneCnt * 100) : 0;

    app.innerHTML = `
      <div class="stats-grid">
        <div class="stat"><div class="num">${total}</div><div class="label">题目总数</div></div>
        <div class="stat"><div class="num">${done}</div><div class="label">已刷题数</div></div>
        <div class="stat accent"><div class="num">${rate}%</div><div class="label">总正确率</div></div>
        <div class="stat"><div class="num">${Store.getWrong().length}</div><div class="label">错题数</div></div>
        <div class="stat"><div class="num">${Store.getFavorite().length}</div><div class="label">收藏数</div></div>
      </div>
      <div class="menu-grid">
        <div class="menu-item" data-go="chapter"><div class="icon">📚</div><div class="title">章节练习</div><div class="desc">按考点分类，逐题刷 + 即时解析</div></div>
        <div class="menu-item" data-go="random"><div class="icon">🎲</div><div class="title">随机刷题</div><div class="desc">从章节题库随机抽题</div></div>
        <div class="menu-item" data-go="exam"><div class="icon">📝</div><div class="title">模拟考试</div><div class="desc">历年真题 + 模拟卷，限时判分</div></div>
        <div class="menu-item" data-go="wrong"><div class="icon">❌</div><div class="title">错题本</div><div class="desc">${Store.getWrong().length} 道错题待重刷</div></div>
        <div class="menu-item" data-go="favorite"><div class="icon">⭐</div><div class="title">收藏</div><div class="desc">${Store.getFavorite().length} 道重点题</div></div>
      </div>`;

    $$('.menu-item', app).forEach(el => {
      el.addEventListener('click', () => showView(el.dataset.go));
    });
  }

  /* ===================== 章节练习 ===================== */
  function renderChapter(app) {
    const stats = Store.getStats();

    // 章节来源：优先用 data/chapters_meta.js 的大纲目录（有稳定顺序和「第 N 章」编号），
    // 再追加题库里出现、但目录未收录的 category，保证不丢题
    const entries = (window.CHAPTERS || []).map(m => ({
      cat: m.name, no: m.no, summary: m.summary || ''
    }));
    const known = new Set(entries.map(e => e.cat));
    QUIZ.categories().forEach(c => {
      if (!known.has(c)) entries.push({ cat: c, no: null, summary: '' });
    });

    const rows = entries.map(e => {
      const qs = QUIZ.byCategory(e.cat).filter(q => !q.paper);
      if (!qs.length) return '';
      const s = stats[e.cat] || { done: 0, correct: 0 };
      const pct = s.done ? Math.round(s.correct / s.done * 100) : 0;
      const title = e.no ? `第 ${e.no} 章 ${e.cat}` : e.cat;
      return `
        <div class="chapter-item" data-cat="${esc(e.cat)}">
          <div style="flex:1">
            <div class="name">${esc(title)}</div>
            ${e.summary ? `<div class="count">${esc(e.summary)}</div>` : ''}
            <div class="count">共 ${qs.length} 题 · 已做 ${s.done} · 正确率 ${pct}%</div>
            <div class="bar"><i style="width:${pct}%"></i></div>
          </div>
          <div class="muted">›</div>
        </div>`;
    }).join('');

    app.innerHTML = `
      <div class="card"><h2>📚 章节练习</h2><p class="muted">章节依据官方《网络工程师教程（第 6 版）》目录（配套 2024 审定版考试大纲）。答一题即时判分并显示解析。</p></div>
      <div class="chapter-list">${rows || '<div class="empty">暂无章节题目</div>'}</div>`;

    $$('.chapter-item', app).forEach(el => {
      el.addEventListener('click', () => {
        const cat = el.dataset.cat;
        const e = entries.find(x => x.cat === cat) || { no: null };
        const label = e.no ? `第 ${e.no} 章 ${cat}` : cat;
        const list = shuffle(QUIZ.byCategory(cat).filter(q => !q.paper));
        startPractice(list, `章节练习 · ${label}`, () => showView('chapter'));
      });
    });
  }

  /* ===================== 随机刷题 ===================== */
  function renderRandom(app) {
    const pool = QUIZ.chapterQuestions();
    app.innerHTML = `
      <div class="card"><h2>🎲 随机刷题</h2>
        <p class="muted">从章节题库（${pool.length} 题）中随机抽题练习，可选抽题数量。</p>
        <div style="margin-top:14px">
          <label class="muted small">抽题数量：</label>
          <select id="rand-count" style="padding:8px 12px;border-radius:8px;border:1px solid var(--border);font-size:15px">
            <option value="10">10 题</option>
            <option value="20" selected>20 题</option>
            <option value="30">30 题</option>
            <option value="50">50 题</option>
            <option value="-1">全部（${pool.length} 题）</option>
          </select>
        </div>
        <button class="btn primary" id="rand-start" style="margin-top:14px">开始随机刷题</button>
      </div>`;

    $('#rand-start', app).addEventListener('click', () => {
      const n = parseInt($('#rand-count', app).value, 10);
      const list = shuffle(pool);
      const picked = n === -1 ? list : list.slice(0, n);
      startPractice(picked, '随机刷题', () => showView('random'));
    });
  }

  /* ===================== 模拟考试 ===================== */
  function renderExam(app) {
    const papers = window.PAPERS || [];
    const cards = papers.map(p => {
      const qs = QUIZ.byPaper(p.id);
      const singles = QUIZ.singleOf(qs).length;
      const cases = QUIZ.caseOf(qs).length;
      // 题数为 0 说明该卷的题库文件没被加载（多为旧缓存所致），给明确的提示与补救入口
      const actions = (singles + cases === 0)
        ? `<div class="muted small" style="margin-top:10px">⚠ 该卷题库未加载，通常是浏览器缓存了旧版本</div>
           <div style="margin-top:10px"><button class="btn" data-reload="1">重新加载题库</button></div>`
        : `<div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
             ${singles > 0 ? `<button class="btn primary" data-am="${esc(p.id)}">上午场（150 分钟）</button>` : ''}
             ${cases > 0 ? `<button class="btn" data-pm="${esc(p.id)}">下午场（150 分钟）</button>` : ''}
           </div>`;
      return `
        <div class="card">
          <div>
            <h2 style="margin:0">${esc(p.name)}</h2>
            <div class="muted small" style="margin-top:4px">${esc(p.cover)}</div>
            <div class="muted small">上午场 ${singles} 选择 · 下午场 ${cases} 案例</div>
          </div>
          ${actions}
        </div>`;
    }).join('');

    const emptyCount = papers.filter(p => QUIZ.byPaper(p.id).length === 0).length;

    app.innerHTML = `
      <div class="card"><h2>📝 模拟考试</h2>
        <p class="muted">共 ${papers.length} 套卷，每套分上午场（75 选择）与下午场（5 案例），各 150 分钟，45 分及格。交卷后判分并可回看解析。</p>
        ${emptyCount ? `<p class="muted small">⚠ 有 ${emptyCount} 套卷的题库未加载，可点卷面下方「重新加载题库」修复。</p>` : ''}
      </div>
      ${cards || '<div class="empty">暂无试卷</div>'}`;

    $$('[data-am]', app).forEach(b => b.addEventListener('click', () => startExam(b.dataset.am, 'am')));
    $$('[data-pm]', app).forEach(b => b.addEventListener('click', () => startExam(b.dataset.pm, 'pm')));
    $$('[data-reload]', app).forEach(b => b.addEventListener('click', () => reloadQuizData()));
  }

  // 清掉 Service Worker 与缓存后重载，用于修复「题库版本过旧」的情况
  async function reloadQuizData() {
    try {
      if (window.caches && caches.keys) {
        const keys = await caches.keys();
        await Promise.all(keys.map(k => caches.delete(k)));
      }
      if (navigator.serviceWorker && navigator.serviceWorker.getRegistrations) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map(r => r.unregister()));
      }
    } catch (e) { /* 清理失败也直接刷新 */ }
    location.reload();
  }

  /* ===================== 错题本 ===================== */
  function renderWrong(app) {
    const wrong = Store.getWrong().map(id => QUIZ.byId(id)).filter(Boolean);
    if (!wrong.length) {
      app.innerHTML = '<div class="empty">🎉 暂无错题，继续加油！</div>';
      return;
    }
    const items = wrong.map(q => `
      <div class="list-item" data-id="${q.id}">
        <div class="q">${esc(q.question.length > 60 ? q.question.slice(0, 60) + '…' : q.question)}</div>
        <div class="meta"><span class="tag">${esc(q.category)}</span><span>${q.type === 'single' ? '选择题' : '案例题'}</span>${q.paper ? '<span>真题卷</span>' : ''}</div>
      </div>`).join('');

    app.innerHTML = `
      <div class="card"><h2>❌ 错题本</h2><p class="muted">共 ${wrong.length} 道错题，重刷答对（案例题得满分）后自动移出。</p></div>
      ${items}`;

    $$('.list-item', app).forEach(el => {
      el.addEventListener('click', () => {
        const list = wrong;
        const idx = list.findIndex(q => q.id === Number(el.dataset.id));
        startPractice(list, '错题重刷', () => showView('wrong'), idx);
      });
    });
  }

  /* ===================== 收藏 ===================== */
  function renderFavorite(app) {
    const fav = Store.getFavorite().map(id => QUIZ.byId(id)).filter(Boolean);
    if (!fav.length) {
      app.innerHTML = '<div class="empty">⭐ 暂无收藏，做题时点「收藏」即可加入。</div>';
      return;
    }
    const items = fav.map(q => `
      <div class="list-item" data-id="${q.id}">
        <div class="q">${esc(q.question.length > 60 ? q.question.slice(0, 60) + '…' : q.question)}</div>
        <div class="meta"><span class="tag">${esc(q.category)}</span><span>${q.type === 'single' ? '选择题' : '案例题'}</span></div>
      </div>`).join('');

    app.innerHTML = `
      <div class="card"><h2>⭐ 收藏</h2><p class="muted">共 ${fav.length} 道收藏题，点击可复习。</p></div>
      ${items}`;

    $$('.list-item', app).forEach(el => {
      el.addEventListener('click', () => {
        const idx = fav.findIndex(q => q.id === Number(el.dataset.id));
        startPractice(fav, '收藏复习', () => showView('favorite'), idx);
      });
    });
  }

  /* ===================== 练习模式（逐题） ===================== */
  function startPractice(list, title, backTo, startIndex) {
    if (!list.length) { alert('当前没有题目'); return; }
    state.practice = { list, index: startIndex || 0, answers: {}, selfGrade: {}, title, backTo, done: false };
    showView('__practice');
  }

  // 题号导航：显示每道题的作答状态，点击可自由跳转
  function practiceNavHtml(p, cur) {
    return p.list.map((q, i) => {
      const ans = p.answers[q.id];
      let cls = 'qnav-item';
      if (ans == null) cls += ' qnav-un';
      else if (q.type === 'single') cls += ans === q.answer ? ' qnav-ok' : ' qnav-no';
      else cls += ' qnav-done'; // 案例题：已作答（问答可能还需自评）
      if (i === cur) cls += ' qnav-cur';
      return `<button class="${cls}" data-nav="${i}">${i + 1}</button>`;
    }).join('');
  }

  function renderPractice(app) {
    const p = state.practice;
    const q = p.list[p.index];
    if (!q) { state.practice.done = true; renderPracticeDone(app); return; }

    const idx = p.index;
    const total = p.list.length;
    const isSingle = q.type === 'single';
    const answered = p.answers[q.id] != null;

    let body = '';
    if (isSingle) {
      body = `
        <div class="tag">${esc(q.category)}</div>
        <div class="question-text">${esc(q.question)}</div>
        <div class="options">
          ${q.options.map((opt, i) => {
            const letter = 'ABCD'[i];
            const cls = answered ? '' : '';
            return `<button class="option" data-opt="${i}" ${answered ? 'disabled' : ''}>
              <span class="key">${letter}</span><span>${esc(opt.replace(/^[A-D][.．]\s*/, ''))}</span></button>`;
          }).join('')}
        </div>
        <div style="margin-top:16px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <button class="btn" id="prev-btn" ${idx === 0 ? 'disabled' : ''}>← 上一题</button>
          <span style="flex:1"></span>
          <button class="btn" id="fav-btn">${isFavorite(q.id) ? '★ 已收藏' : '☆ 收藏'}</button>
          <button class="btn primary" id="submit-btn" ${answered ? 'style="display:none"' : ''}>确认答案</button>
          <button class="btn success" id="next-btn" ${idx === total - 1 ? 'disabled' : ''}>下一题 →</button>
        </div>
        <div id="explain-box"></div>`;
    } else {
      // 案例题
      const parts = q.parts.map((part, i) => {
        if (part.type === 'fill') {
          return `
            <div style="margin-bottom:14px">
              <div style="font-weight:600;margin-bottom:6px">${esc(part.prompt)}</div>
              <input class="fill-input" data-fill="${i}" placeholder="输入答案" ${answered ? 'disabled' : ''} value="${answered ? esc(p.answers[q.id][i] || '') : ''}">
            </div>`;
        } else {
          return `
            <div style="margin-bottom:14px">
              <div style="font-weight:600;margin-bottom:6px">${esc(part.prompt)}</div>
              <textarea class="fill-input" data-qa="${i}" rows="3" placeholder="写下你的答案（提交后自评）" ${answered ? 'disabled' : ''}>${answered ? esc(p.answers[q.id][i] || '') : ''}</textarea>
            </div>`;
        }
      }).join('');

      body = `
        <div class="tag">${esc(q.category)}</div>
        <div class="case-bg">${esc(q.question)}</div>
        ${q.diagram ? `<div class="diagram">${q.diagram}</div>` : ''}
        ${parts}
        <div style="margin-top:8px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <button class="btn" id="prev-btn" ${idx === 0 ? 'disabled' : ''}>← 上一题</button>
          <span style="flex:1"></span>
          <button class="btn" id="fav-btn">${isFavorite(q.id) ? '★ 已收藏' : '☆ 收藏'}</button>
          <button class="btn primary" id="submit-btn" ${answered ? 'style="display:none"' : ''}>提交答案</button>
          <button class="btn success" id="next-btn" ${idx === total - 1 ? 'disabled' : ''}>下一题 →</button>
        </div>
        <div id="explain-box"></div>`;
    }

    app.innerHTML = `
      <div class="card">
        <div class="quiz-head">
          <div><span class="muted">${esc(p.title)}</span> · 第 <b>${idx + 1}</b> / ${total} 题</div>
          <div style="display:flex;gap:6px">
            <button class="btn ghost btn-sm" id="submit-all-btn">交卷</button>
            <button class="btn ghost btn-sm" id="quit-btn">退出</button>
          </div>
        </div>
        <div class="bar"><i style="width:${(idx / total * 100).toFixed(1)}%"></i></div>
        <div class="qnav">${practiceNavHtml(p, idx)}</div>
        <div style="margin-top:14px">${body}</div>
      </div>`;

    $('#quit-btn', app).addEventListener('click', () => { p.backTo ? p.backTo() : showView('home'); });
    $('#submit-all-btn', app).addEventListener('click', () => { p.done = true; renderPracticeDone(app); });
    $('#fav-btn', app).addEventListener('click', (e) => {
      toggleFavorite(q.id);
      e.target.textContent = isFavorite(q.id) ? '★ 已收藏' : '☆ 收藏';
    });
    $('#prev-btn', app).addEventListener('click', () => {
      if (p.index > 0) { p.index--; renderPractice(app); }
    });
    $$('.qnav-item', app).forEach(btn => {
      btn.addEventListener('click', () => { p.index = Number(btn.dataset.nav); renderPractice(app); });
    });

    if (!answered) {
      if (isSingle) {
        let selected = null;
        $$('.option', app).forEach(opt => opt.addEventListener('click', () => {
          $$('.option', app).forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          selected = Number(opt.dataset.opt);
        }));
        $('#submit-btn', app).addEventListener('click', () => {
          if (selected == null) { alert('请先选择一个答案'); return; }
          submitPracticeAnswer(q, selected);
        });
      } else {
        $('#submit-btn', app).addEventListener('click', () => {
          const arr = [];
          $$('[data-fill]', app).forEach(inp => arr[Number(inp.dataset.fill)] = inp.value);
          $$('[data-qa]', app).forEach(ta => arr[Number(ta.dataset.qa)] = ta.value);
          submitPracticeAnswer(q, arr);
        });
      }
    } else {
      if (isSingle) {
        $$('.option', app).forEach((opt, i) => {
          if (i === q.answer) opt.classList.add('correct');
          if (i === p.answers[q.id]) opt.classList.add('wrong');
        });
        renderSingleExplain(app, q, p.answers[q.id]);
      } else {
        renderCaseExplain(app, q, p.answers[q.id]);
      }
    }

    $('#next-btn', app).addEventListener('click', () => {
      if (p.index < total - 1) { p.index++; renderPractice(app); }
    });

    saveProgress();
  }

  function submitPracticeAnswer(q, ans) {
    const p = state.practice;
    p.answers[q.id] = ans;
    if (q.type === 'single') {
      const ok = ans === q.answer;
      recordStat(q, ok);
      if (ok) removeWrong(q.id); else addWrong(q.id);
    }
    // 案例题在问答自评完成后记录（见 renderCaseExplain）
    renderPractice($('#app'));
  }

  function renderSingleExplain(app, q, ans) {
    const ok = ans === q.answer;
    const box = $('#explain-box', app);
    if (!box) return;
    box.innerHTML = `
      <div class="explain ${ok ? 'ok' : 'no'}">
        <div class="head">${ok ? '✔ 回答正确' : '✘ 回答错误'}</div>
        <div>正确答案：${esc(q.options[q.answer])}</div>
        <div style="margin-top:6px">${esc(q.explanation || '暂无解析')}</div>
      </div>`;
  }

  function renderCaseExplain(app, q, ans) {
    const box = $('#explain-box', app);
    if (!box) return;
    const selfGrade = state.practice.selfGrade[q.id] || (state.practice.selfGrade[q.id] = {});

    function hasPendingQa() {
      return q.parts.some((p, i) => p.type === 'qa' && !selfGrade[i]);
    }

    function draw() {
      const r = judgeCase(q, ans, selfGrade);
      const rows = q.parts.map((part, i) => {
        const pr = r.parts[i];
        if (part.type === 'fill') {
          return `<div style="margin-bottom:10px">
            <div>${pr.ok ? '✔' : '✘'} ${esc(part.prompt)}</div>
            <div class="muted small">参考答案：${esc(part.blanks.join(' 或 '))}${pr.ok ? '' : ' · 你的答案：' + esc((ans && ans[i]) || '（空）')}</div>
            ${part.explanation ? `<div class="small" style="margin-top:3px">解析：${esc(part.explanation)}</div>` : ''}
          </div>`;
        } else {
          const g = selfGrade[i];
          const icon = g === 'full' ? '✔' : g === 'half' ? '◐' : g === 'zero' ? '✘' : '·';
          const label = g === 'full' ? '答对了' : g === 'half' ? '部分对' : g === 'zero' ? '答错了' : '';
          return `<div style="margin-bottom:10px">
            <div>${icon} ${esc(part.prompt)}</div>
            <div class="muted small">参考答案：${esc(part.reference || '')}</div>
            ${g ? `<div class="small">已自评：${label}</div>` : `
              <div style="margin-top:6px;display:flex;gap:6px">
                <button class="btn btn-sm sg-btn" data-pi="${i}" data-grade="full">答对了</button>
                <button class="btn btn-sm sg-btn" data-pi="${i}" data-grade="half">部分对</button>
                <button class="btn btn-sm sg-btn" data-pi="${i}" data-grade="zero">答错了</button>
              </div>`}
            ${part.explanation ? `<div class="small" style="margin-top:3px">解析：${esc(part.explanation)}</div>` : ''}
          </div>`;
        }
      }).join('');

      box.innerHTML = `
        <div class="explain ${r.correct ? 'ok' : 'no'}">
          <div class="head">本题得分：${r.got} / ${r.total} ${r.correct ? '（全对）' : ''}${hasPendingQa() ? ' · 请完成问答自评' : ''}</div>
          ${rows}
        </div>`;

      $$('.sg-btn', box).forEach(btn => {
        btn.addEventListener('click', () => {
          selfGrade[Number(btn.dataset.pi)] = btn.dataset.grade;
          if (!hasPendingQa()) {
            const rr = judgeCase(q, ans, selfGrade);
            recordStat(q, rr.correct);
            if (rr.correct) removeWrong(q.id); else addWrong(q.id);
          }
          draw();
          saveProgress();
        });
      });
    }

    draw();
  }

  function renderPracticeDone(app) {
    const p = state.practice;
    let correct = 0;
    p.list.forEach(q => {
      const ans = p.answers[q.id];
      if (ans == null) return;
      if (q.type === 'single') { if (ans === q.answer) correct++; }
      else { if (judgeCase(q, ans, p.selfGrade[q.id] || {}).correct) correct++; }
    });
    const answered = p.list.filter(q => p.answers[q.id] != null).length;
    const rate = answered ? Math.round(correct / answered * 100) : 0;

    app.innerHTML = `
      <div class="card center">
        <h2>🎉 本轮完成</h2>
        <div style="font-size:40px;font-weight:700;color:var(--primary);margin:10px 0">${rate}%</div>
        <p class="muted">共 ${p.list.length} 题，已作答 ${answered} 题，全对 ${correct} 题</p>
        <div style="margin-top:18px;display:flex;gap:10px;justify-content:center">
          <button class="btn" id="done-back">返回</button>
          <button class="btn primary" id="done-again">再来一轮</button>
        </div>
      </div>`;
    $('#done-back', app).addEventListener('click', () => { p.backTo ? p.backTo() : showView('home'); });
    $('#done-again', app).addEventListener('click', () => {
      const list = shuffle(p.list);
      startPractice(list, p.title, p.backTo);
    });

    saveProgress();
  }

  /* ===================== 考试模式 ===================== */
  function startExam(paperId, part) {
    const paper = (window.PAPERS || []).find(p => p.id === paperId);
    let list;
    if (part === 'am') list = QUIZ.singleOf(QUIZ.byPaper(paperId));
    else list = QUIZ.caseOf(QUIZ.byPaper(paperId));
    if (!list.length) { alert('该场次暂无题目'); return; }

    state.exam = {
      paperId, part,
      name: (paper ? paper.name : '') + (part === 'am' ? ' · 上午场' : ' · 下午场'),
      list, answers: {}, selfGrade: {},
      timeLeft: 150 * 60, timer: null, submitted: false,
      deadline: Date.now() + 150 * 60 * 1000,
    };
    examRecorded.clear();
    showView('__exam');
  }

  function examSingleExplainHtml(q, chosen, ok) {
    return `<div class="explain ${ok ? 'ok' : 'no'}" style="margin-top:10px">
      <div class="head">${ok ? '✔ 回答正确' : '✘ 回答错误'}</div>
      <div>正确答案：${esc(q.options[q.answer])}</div>
      <div style="margin-top:6px">${esc(q.explanation || '')}</div>
    </div>`;
  }
  function examFillExplainHtml(q, pi, val, ok) {
    const part = q.parts[pi];
    return `<div class="small" style="margin-top:5px;padding:6px 8px;border-radius:6px;background:${ok ? 'var(--success-weak)' : 'var(--danger-weak)'};color:${ok ? 'var(--success)' : 'var(--danger)'}">
      <b>${ok ? '✔ 正确' : '✘ 错误'}</b> 参考：${esc(part.blanks.join(' 或 '))}${ok ? '' : ' · 你的答案：' + esc(val || '（空）')}
      ${part.explanation ? '<div style="margin-top:3px">解析：' + esc(part.explanation) + '</div>' : ''}
    </div>`;
  }
  function examQaExplainHtml(q, pi, val) {
    const part = q.parts[pi];
    return `<div class="small" style="margin-top:5px;padding:6px 8px;border-radius:6px;background:var(--primary-weak);color:var(--primary)">
      <b>参考答案：</b>${esc(part.reference || '')}
      ${part.explanation ? '<div style="margin-top:3px">解析：' + esc(part.explanation) + '</div>' : ''}
      <div style="margin-top:3px">评分：交卷后逐题自评</div>
    </div>`;
  }

  function renderExamView(app) {
    const e = state.exam;
    const qs = e.list;

    // 题目卡片
    const cards = qs.map((q, qi) => {
      let inner = '';
      if (q.type === 'single') {
        inner = `<div class="question-text">${qi + 1}. ${esc(q.question)}</div>
          <div class="options">${q.options.map((opt, i) => `
            <button class="option" data-qi="${qi}" data-opt="${i}">
              <span class="key">${'ABCD'[i]}</span><span>${esc(opt.replace(/^[A-D][.．]\s*/, ''))}</span></button>`).join('')}
          </div>
          <div class="exam-explain" data-qi="${qi}"></div>`;
      } else {
        inner = `<div class="case-bg">${esc(q.question)}</div>
          ${q.parts.map((p, pi) => p.type === 'fill'
            ? `<div style="margin-bottom:12px"><div style="font-weight:600">${esc(p.prompt)}</div>
                <input class="fill-input" data-qi="${qi}" data-fill="${pi}" placeholder="输入答案">
                <div class="exam-fill-explain" data-qi="${qi}" data-fill="${pi}"></div></div>`
            : `<div style="margin-bottom:12px"><div style="font-weight:600">${esc(p.prompt)}</div>
                <textarea class="fill-input" data-qi="${qi}" data-qa="${pi}" rows="3" placeholder="写下你的答案"></textarea>
                <div class="exam-qa-explain" data-qi="${qi}" data-qa="${pi}"></div></div>`
          ).join('')}`;
      }
      return `<div class="card"><div class="tag green">${esc(q.category)}</div>${inner}</div>`;
    }).join('');

    app.innerHTML = `
      <div style="position:sticky;top:0;z-index:40;background:var(--bg);padding:8px 0;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
        <div><span class="muted">${esc(e.name)}</span><br><b>共 ${qs.length} 题</b></div>
        <div class="timer" id="exam-timer"></div>
        <button class="btn primary" id="exam-submit">交卷</button>
      </div>
      ${cards}
      <div class="card center"><button class="btn primary btn-block" id="exam-submit2">交卷并判分</button></div>`;

    // 计时
    clearInterval(e.timer);
    updateExamTimer();
    e.timer = setInterval(() => { if (!state.exam.submitted) { e.timeLeft--; updateExamTimer(); if (e.timeLeft <= 0) submitExam(); } }, 1000);

    function updateExamTimer() {
      const el = $('#exam-timer', app);
      if (!el) return;
      const m = Math.floor(e.timeLeft / 60), s = e.timeLeft % 60;
      el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      el.classList.toggle('warn', e.timeLeft <= 5 * 60);
    }

    // 绑定选择：答完立即显示对错与解析（交卷后仍统一判分、计入统计）
    $$('.option[data-qi]', app).forEach(opt => {
      opt.addEventListener('click', () => {
        const qi = Number(opt.dataset.qi);
        const q = qs[qi];
        const box = $(`.exam-explain[data-qi="${qi}"]`, app);
        if (box && box.childElementCount > 0) return; // 本题已作答并显示解析，锁定
        const chosen = Number(opt.dataset.opt);
        e.answers[q.id] = chosen;
        const ok = chosen === q.answer;
        $$(`.option[data-qi="${qi}"]`, app).forEach(o => {
          o.classList.remove('selected');
          o.disabled = true;
          if (Number(o.dataset.opt) === q.answer) o.classList.add('correct');
          else if (Number(o.dataset.opt) === chosen) o.classList.add('wrong');
        });
        if (box) box.innerHTML = examSingleExplainHtml(q, chosen, ok);
        saveProgress();
      });
    });

    // 案例题填空：失焦时即时判分并显示对错与解析
    $$('[data-fill]', app).forEach(inp => {
      inp.addEventListener('blur', () => {
        const qi = Number(inp.dataset.qi), pi = Number(inp.dataset.fill);
        const q = qs[qi];
        const part = q.parts[pi];
        const val = inp.value;
        (e.answers[q.id] = e.answers[q.id] || [])[pi] = val;
        const ok = val.trim() !== '' && part.blanks.some(b => norm(b) === norm(val));
        const box = $(`.exam-fill-explain[data-qi="${qi}"][data-fill="${pi}"]`, app);
        if (box) box.innerHTML = examFillExplainHtml(q, pi, val, ok);
        saveProgress();
      });
    });

    // 案例题问答：失焦时即时显示参考答案与解析（评分交卷后自评）
    $$('[data-qa]', app).forEach(ta => {
      ta.addEventListener('blur', () => {
        const qi = Number(ta.dataset.qi), pi = Number(ta.dataset.qa);
        const q = qs[qi];
        const part = q.parts[pi];
        const val = ta.value;
        (e.answers[q.id] = e.answers[q.id] || [])[pi] = val;
        const box = $(`.exam-qa-explain[data-qi="${qi}"][data-qa="${pi}"]`, app);
        if (box && val.trim() !== '') box.innerHTML = examQaExplainHtml(q, pi, val);
        saveProgress();
      });
    });

    // 恢复已作答状态（断点续做）
    qs.forEach((q, qi) => {
      if (q.type === 'single') {
        const chosen = e.answers[q.id];
        if (chosen == null) return;
        $$(`.option[data-qi="${qi}"]`, app).forEach(o => {
          o.classList.remove('selected');
          o.disabled = true;
          if (Number(o.dataset.opt) === q.answer) o.classList.add('correct');
          else if (Number(o.dataset.opt) === chosen) o.classList.add('wrong');
        });
        const box = $(`.exam-explain[data-qi="${qi}"]`, app);
        if (box) box.innerHTML = examSingleExplainHtml(q, chosen, chosen === q.answer);
      } else {
        q.parts.forEach((part, pi) => {
          const val = (e.answers[q.id] || [])[pi];
          if (val == null) return;
          if (part.type === 'fill') {
            const inp = $(`.fill-input[data-qi="${qi}"][data-fill="${pi}"]`, app);
            if (inp) inp.value = val;
            const ok = val.trim() !== '' && part.blanks.some(b => norm(b) === norm(val));
            const box = $(`.exam-fill-explain[data-qi="${qi}"][data-fill="${pi}"]`, app);
            if (box) box.innerHTML = examFillExplainHtml(q, pi, val, ok);
          } else {
            const ta = $(`.fill-input[data-qi="${qi}"][data-qa="${pi}"]`, app);
            if (ta) ta.value = val;
            const box = $(`.exam-qa-explain[data-qi="${qi}"][data-qa="${pi}"]`, app);
            if (box && val.trim() !== '') box.innerHTML = examQaExplainHtml(q, pi, val);
          }
        });
      }
    });

    $('#exam-submit', app).addEventListener('click', () => { if (confirm('确定交卷？交卷后将无法修改答案。')) submitExam(); });
    $('#exam-submit2', app).addEventListener('click', () => { if (confirm('确定交卷？交卷后将无法修改答案。')) submitExam(); });

    saveProgress();
  }

  function submitExam() {
    const e = state.exam;
    if (e.submitted) return;
    e.submitted = true;
    clearInterval(e.timer);
    saveProgress();

    // 收集填空/问答答案
    const app = $('#app');
    $$('[data-fill]', app).forEach(inp => {
      const qi = Number(inp.dataset.qi), pi = Number(inp.dataset.fill);
      const q = e.list[qi];
      (e.answers[q.id] = e.answers[q.id] || [])[pi] = inp.value;
    });
    $$('[data-qa]', app).forEach(ta => {
      const qi = Number(ta.dataset.qi), pi = Number(ta.dataset.qa);
      const q = e.list[qi];
      (e.answers[q.id] = e.answers[q.id] || [])[pi] = ta.value;
    });

    renderExamResult(app);
  }

  function renderExamResult(app) {
    const e = state.exam;
    let total = 0;
    e.list.forEach(q => total += QUIZ.questionScore(q));

    function computeScore() {
      let got = 0;
      e.list.forEach(q => {
        if (q.type === 'single') got += judgeSingle(q, e.answers[q.id]).got;
        else got += judgeCase(q, e.answers[q.id], e.selfGrade[q.id] || {}).got;
      });
      return Math.round(got * 10) / 10;
    }

    // 记录无需自评的题（选择题 / 纯填空案例题）；含问答的案例题在自评后记录
    e.list.forEach(q => {
      const hasQa = q.type === 'case' && q.parts.some(p => p.type === 'qa');
      if (hasQa) return;
      const res = q.type === 'single'
        ? judgeSingle(q, e.answers[q.id])
        : judgeCase(q, e.answers[q.id], {});
      recordStat(q, res.correct);
      if (res.correct) removeWrong(q.id); else addWrong(q.id);
    });

    const pass = total >= 75 ? 45 : Math.round(total * 0.6); // 及格线 60%
    const got = computeScore();
    const isPass = got >= pass;

    const rows = e.list.map((q, qi) => {
      if (q.type === 'single') {
        const ok = e.answers[q.id] === q.answer;
        return `<div class="card">
          <div class="quiz-head"><span class="tag green">${qi + 1} · 选择题</span><span>${ok ? '✔' : '✘'}</span></div>
          <div class="question-text">${esc(q.question)}</div>
          <div class="muted">你的答案：${e.answers[q.id] == null ? '（未作答）' : esc(q.options[e.answers[q.id]])}</div>
          <div class="muted">正确答案：${esc(q.options[q.answer])}</div>
          <div class="explain ${ok ? 'ok' : 'no'}" style="margin-top:10px"><div>${esc(q.explanation || '')}</div></div>
        </div>`;
      } else {
        const partsHtml = q.parts.map((p, pi) => {
          const ua = e.answers[q.id] && e.answers[q.id][pi];
          if (p.type === 'fill') {
            const ok = ua != null && p.blanks.some(b => norm(b) === norm(ua));
            return `<div style="margin-bottom:10px">
              <div>${ok ? '✔' : '✘'} ${esc(p.prompt)}</div>
              <div class="muted small">你的答案：${ua == null || ua === '' ? '（未作答）' : esc(ua)} · 参考：${esc(p.blanks.join(' 或 '))}</div>
              ${p.explanation ? `<div class="small">${esc(p.explanation)}</div>` : ''}</div>`;
          } else {
            const g = (e.selfGrade[q.id] || {})[pi];
            return `<div style="margin-bottom:10px" data-sg-q="${q.id}" data-sg-p="${pi}">
              <div>${esc(p.prompt)}</div>
              <div class="muted small">你的答案：${ua == null || ua === '' ? '（未作答）' : esc(ua)}</div>
              <div class="muted small">参考答案：${esc(p.reference || '')}</div>
              <div style="margin-top:6px;display:flex;gap:6px">
                <button class="btn btn-sm sg-btn" data-grade="full">答对了</button>
                <button class="btn btn-sm sg-btn" data-grade="half">部分对</button>
                <button class="btn btn-sm sg-btn" data-grade="zero">答错了</button>
              </div>
              ${p.explanation ? `<div class="small" style="margin-top:4px">${esc(p.explanation)}</div>` : ''}</div>`;
          }
        }).join('');
        return `<div class="card">
          <div class="quiz-head"><span class="tag green">${qi + 1} · 案例题</span></div>
          <div class="case-bg">${esc(q.question)}</div>
          ${partsHtml}</div>`;
      }
    }).join('');

    app.innerHTML = `
      <div class="card center">
        <h2>📋 考试结束</h2>
        <div class="score-ring ${isPass ? 'score-pass' : 'score-fail'}" id="score-ring">${got}</div>
        <div style="font-size:16px;font-weight:600">${isPass ? '✔ 及格' : '✘ 未及格'}（及格线 ${pass} 分）</div>
        <p class="muted small">满分 ${total} 分 · 选择题与填空已自动判分，问答请在下方逐题自评后刷新总分</p>
        <div style="margin-top:16px"><button class="btn" id="exam-back">返回首页</button></div>
      </div>
      <div class="card"><h2>逐题解析</h2></div>
      ${rows}`;

    $('#exam-back', app).addEventListener('click', () => showView('home'));

    // 问答自评
    $$('.sg-btn', app).forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = Number(btn.closest('[data-sg-q]').dataset.sgQ);
        const pi = Number(btn.closest('[data-sg-q]').dataset.sgP);
        const q = e.list.find(x => x.id === qid);
        const grade = btn.dataset.grade;
        (e.selfGrade[qid] = e.selfGrade[qid] || {})[pi] = grade;

        // 更新按钮态
        const wrap = btn.closest('[data-sg-q]');
        $$('.sg-btn', wrap).forEach(b => b.classList.remove('primary'));
        btn.classList.add('primary');

        // 更新得分
        const g = computeScore();
        const ring = $('#score-ring', app);
        ring.textContent = g;
        ring.classList.toggle('score-pass', g >= pass);
        ring.classList.toggle('score-fail', g < pass);

        // 计入错题/统计（qa 自评后再记录该题）
        recordAfterSelfGrade(qid);
      });
    });
  }

  // 案例题含问答时，需等自评完成后才记录错题与统计
  function recordAfterSelfGrade(qid) {
    const e = state.exam;
    const q = e.list.find(x => x.id === qid);
    if (!q) return;
    const sg = e.selfGrade[qid] || {};
    const hasPendingQa = q.parts.some((p, i) => p.type === 'qa' && !sg[i]);
    if (hasPendingQa || examRecorded.has(qid)) return;
    examRecorded.add(qid);
    const res = judgeCase(q, e.answers[qid], sg);
    recordStat(q, res.correct);
    if (res.correct) removeWrong(qid); else addWrong(qid);
  }

  /* ===================== 渲染路由 ===================== */
  const RENDER = {
    home: renderHome,
    chapter: renderChapter,
    random: renderRandom,
    exam: renderExam,
    wrong: renderWrong,
    favorite: renderFavorite,
    __practice: renderPractice,
    __exam: renderExamView,
  };

  /* ===================== 远程题库同步（APK 联网时拉取最新题库） ===================== */
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = url;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('load fail: ' + url)); };
      document.head.appendChild(s);
    });
  }

  async function syncRemoteQuiz() {
    // 仅原生 App（APK）需要远程同步；网页版本身就是最新的
    const isNative = window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform();
    if (!isNative) return;

    const REMOTE = 'https://nanyi382.github.io/soft-test-network-engineer/';
    // 文件清单来自单一事实来源 data/manifest.js，不再硬编码，
    // 避免「拉到了新版 papers.js、却没拉对应的题库文件」导致卷面 0 题
    const files = (window.DATA_FILES && window.DATA_FILES.length)
      ? window.DATA_FILES.slice()
      : ['data/papers.js', 'data/chapters_meta.js', 'data/paper1.js', 'data/paper2.js',
         'data/paper3.js', 'data/paper4.js', 'data/auto.js', 'data/real_papers.js',
         'data/chapters.js', 'data/case_config.js'];

    const backupQ = window.QUESTIONS || [];
    const backupP = window.PAPERS || [];
    const backupC = window.CHAPTERS || [];
    // QUESTIONS 置空数组（各数据文件会往它 push）；PAPERS/CHAPTERS 置 null，
    // 这样内置文件里的 `window.PAPERS = window.PAPERS || [...]` 才会重新赋值
    window.QUESTIONS = [];
    window.PAPERS = null;
    window.CHAPTERS = null;

    const failed = [];
    for (const f of files) {
      try {
        await loadScript(REMOTE + f);
      } catch (e) {
        // 单个文件拉取失败：回退到 App 内置的那一份，不影响其余文件
        failed.push(f);
        try { await loadScript(f); } catch (e2) { /* 内置也没有则该文件跳过 */ }
      }
    }
    if (failed.length) console.warn('[题库同步] 以下文件远程拉取失败，已用内置版本兜底：', failed);

    // 全部失败（内置也没恢复出来）→ 用启动时的备份兜底
    if (!window.QUESTIONS.length) {
      window.QUESTIONS = backupQ;
      window.PAPERS = backupP;
      window.CHAPTERS = backupC;
    }
  }

  /* ===================== 初始化 ===================== */
  async function init() {
    // 导航
    $$('.nav-btn').forEach(b => {
      b.addEventListener('click', () => {
        // 从练习/考试中途离开时的提示
        if ((state.view === '__practice' && !state.practice.done) || (state.view === '__exam' && !state.exam.submitted)) {
          if (!confirm('当前进度尚未完成，确定要离开吗？')) return;
        }
        showView(b.dataset.view);
      });
    });
    await syncRemoteQuiz();
    const restored = restoreProgress();
    showView(restored || 'home');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

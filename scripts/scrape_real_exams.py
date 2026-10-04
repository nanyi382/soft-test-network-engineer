# -*- coding: utf-8 -*-
"""每周自动抓取信管网网络工程师「上午综合知识」真题选择题，补解析后追加到题库。

设计目标（幂等、可反复跑）：
- 从真题汇总页 https://www.cnitpm.com/zhenti/wg.html 自动发现各期次（无需维护硬编码列表）；
- 与 data/real_papers.js 中已导入的 paper id（real2025a 等）对比，只处理「缺失」的期次；
- 题干+四选项+官方答案字母来自信管网（免费），解析由 DeepSeek 补写（答案保持官方，风险低）；
- 无免费答案的期次（估分/未公开）会返回 0 题，自动跳过，下期再试。

在 GitHub Actions 中运行（secret DEEPSEEK_API_KEY）；本地运行需设置 DEEPSEEK_API_KEY 环境变量。
"""
import re, os, sys, json, time, urllib.request

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'data')
LIST_URL = 'https://www.cnitpm.com/zhenti/wg.html'
BASE = 'https://www.cnitpm.com/pm1/'
API_URL = 'https://api.deepseek.com/chat/completions'
MODEL = 'deepseek-chat'
BATCH = 20
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0 Safari/537.36'}

SYSTEM = (
    '你是软考中级「网络工程师」讲师。下面是一批单选题，每道题已给出题干、四个选项和官方正确答案字母。'
    '请为每道题做两件事：'
    '1) 从下列分类中为该题选择一个最贴切的 category：'
    '[计算机网络体系结构, 数据通信基础, 局域网与以太网, 广域网技术, 网络互联与IP编址, 交换技术, 路由协议, 无线网络, 网络安全, 网络管理, 网络操作系统, 网络规划与设计, 计算机基础与软件工程, 专业英语]；'
    '2) 写一条准确、简洁的解析（30~80字），说明该正确答案的依据或关键知识点，涉及计算的给出简要计算过程。'
    '答案字母已确定且正确，解析必须与之一致，不得出现与答案矛盾的内容。'
    '只输出一个 JSON 数组，元素为 {"category":"...","explanation":"..."}，顺序与输入一一对应，不要输出任何其它文字。'
)


def http_get(url, timeout=60):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read().decode('utf-8', 'ignore')


def to_text(html):
    html = re.sub(r'<script.*?</script>', '', html, flags=re.S | re.I)
    html = re.sub(r'<style.*?</style>', '', html, flags=re.S | re.I)
    html = re.sub(r'<br[^>]*>', '\n', html, flags=re.I)
    html = re.sub(r'</p>|</div>|</li>|</tr>|</td>', '\n', html, flags=re.I)
    html = re.sub(r'<[^>]+>', '', html)
    html = html.replace('&nbsp;', ' ')
    html = re.sub(r'[ \t　]+', ' ', html)
    html = re.sub(r'\n\s*\n+', '\n', html)
    return [l.strip() for l in html.split('\n') if l.strip()]


def parse_am(lines):
    """解析上午选择题。返回 [{num, question, options:[A,B,C,D], answer:'A'}...]"""
    qs = []
    cur = None
    for line in lines:
        m = re.match(r'^(\d{1,2})[、.．]\s*(.*)$', line)
        if m:
            if cur and len(cur['options']) == 4:
                qs.append(cur)
            cur = {'num': int(m.group(1)), 'question': m.group(2).strip(), 'options': [], 'answer': None}
            continue
        if cur is None:
            continue
        m2 = re.match(r'^([A-Da-d])[．.、:：]\s*(.*)$', line)
        if m2 and len(cur['options']) < 4:
            cur['options'].append(m2.group(2).strip())
            continue
        m3 = re.match(r'^【?信管网参考答案】?\s*[:：]?\s*([A-Da-d])\s*$', line)
        if m3:
            cur['answer'] = m3.group(1).upper()
            continue
        if not cur['answer'] and len(cur['options']) == 0 and cur['question']:
            cur['question'] += line
    if cur and len(cur['options']) == 4:
        qs.append(cur)
    return qs


def discover():
    """从真题汇总页解析出各期次 (year, half, pmid)，按页面顺序（新→旧）返回。"""
    html = http_get(LIST_URL)
    found, seen = [], set()
    for block in re.findall(r'<li[^>]*>(.*?)</li>', html, flags=re.S | re.I):
        m_year = re.search(r'(\d{4})年(上|下)半年', block)
        # 上午场=综合知识；老期次写「（上午综合知识真题）」，新期次写「（综合知识真题）」
        if not (m_year and re.search(r'（(?:上午)?综合知识真题）', block)):
            continue
        pm = re.findall(r'pm1/([a-z0-9]+)\.html', block, flags=re.I)
        if not pm:
            continue
        key = m_year.group(1) + m_year.group(2)
        if key not in seen:
            seen.add(key)
            found.append((m_year.group(1), m_year.group(2), pm[0]))
    return found


def existing_papers():
    path = os.path.join(DATA_DIR, 'real_papers.js')
    if not os.path.exists(path):
        return set()
    return set(re.findall(r'real\d{4}[ab]', open(path, encoding='utf-8').read()))


def read_max_id():
    m = 0
    for f in os.listdir(DATA_DIR):
        if f.endswith('.js'):
            txt = open(os.path.join(DATA_DIR, f), encoding='utf-8').read()
            ids = [int(x) for x in re.findall(r'["\']?id["\']?\s*:\s*(\d+)', txt)]
            if ids:
                m = max(m, max(ids))
    return m


def chat(user_content):
    body = json.dumps({
        'model': MODEL,
        'messages': [{'role': 'system', 'content': SYSTEM}, {'role': 'user', 'content': user_content}],
        'temperature': 0.3, 'max_tokens': 8192
    }, ensure_ascii=False).encode('utf-8')
    req = urllib.request.Request(API_URL, data=body, headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + os.environ['DEEPSEEK_API_KEY']
    })
    with urllib.request.urlopen(req, timeout=180) as r:
        data = json.loads(r.read().decode('utf-8'))
    return data['choices'][0]['message']['content']


def extract_json(text):
    i, j = text.find('['), text.rfind(']')
    if i < 0 or j <= i:
        raise ValueError('无 JSON 数组')
    return json.loads(text[i:j + 1])


def enrich(qs):
    """为一批题补 category + explanation，返回与原顺序一致的 [{category, explanation}]。"""
    out = [{'category': '计算机网络体系结构', 'explanation': '（解析略）'}] * len(qs)
    for b in range(0, len(qs), BATCH):
        chunk = qs[b:b + BATCH]
        items = [{'num': q['num'], 'question': q['question'], 'options': q['options'], 'answer': q['answer']} for q in chunk]
        user = json.dumps(items, ensure_ascii=False)
        resp = None
        for attempt in range(2):
            try:
                resp = extract_json(chat(user))
                break
            except Exception as e:
                print(f'    批次 {b} 第 {attempt + 1} 次失败：{e}')
                time.sleep(3)
        if isinstance(resp, list) and len(resp) == len(chunk):
            for i, r in enumerate(resp):
                out[b + i] = {
                    'category': str(r.get('category', '')).strip() or '计算机网络体系结构',
                    'explanation': str(r.get('explanation', '')).strip() or '（解析略）'
                }
        time.sleep(1)
    return out


def append_paper(pid, name, questions, next_id):
    """把一个期次的题追加到 data/real_papers.js，返回新的 next_id。"""
    arr = []
    for q in questions:
        arr.append({
            'id': next_id,
            'type': 'single',
            'category': q['category'],
            'paper': pid,
            'question': q['question'],
            'options': ['%s. %s' % (chr(65 + i), o) for i, o in enumerate(q['options'])],
            'answer': ord(q['answer']) - ord('A'),
            'explanation': q['explanation']
        })
        next_id += 1
    block = ('(function () {\n'
             '  const P = "%s";\n'
             '  const A = %s;\n'
             '  A.forEach(q => window.QUESTIONS.push(q));\n'
             '})();') % (pid, json.dumps(arr, ensure_ascii=False, indent=2))
    path = os.path.join(DATA_DIR, 'real_papers.js')
    header = '/* 历年真题·上午综合知识（真实真题，由信管网整理，AI 补写解析） */\nwindow.QUESTIONS = window.QUESTIONS || [];\n'
    if os.path.exists(path):
        txt = open(path, encoding='utf-8').read().rstrip()
        if 'window.QUESTIONS = window.QUESTIONS || [];' not in txt:
            txt = header + txt
        txt += '\n\n' + block + '\n'
    else:
        txt = header + '\n' + block + '\n'
    open(path, 'w', encoding='utf-8').write(txt)
    return next_id


def update_papers(meta_list):
    """把新卷元数据插入 papers.js 第一个 real 卷之前（保持最新在前），并同步 index.html。"""
    entries = ',\n'.join('  { id: "%s", name: "%s", cover: "%s" }' % (p['id'], p['name'], p['cover']) for p in meta_list)
    path = os.path.join(DATA_DIR, 'papers.js')
    pp = open(path, encoding='utf-8').read()
    idx = pp.find('{ id: "real')
    if idx == -1:
        pp = re.sub(r'\n\];\s*$', ',\n' + entries + '\n];', pp, count=1)
    else:
        prefix, rest = pp[:idx].rstrip(), pp[idx:].lstrip()
        pp = prefix + ',\n' + entries + ',\n  ' + rest
    open(path, 'w', encoding='utf-8').write(pp)

    # 确保 index.html 引用了 real_papers.js（幂等）
    html_path = os.path.join(os.path.dirname(DATA_DIR), 'index.html')
    html = open(html_path, encoding='utf-8').read()
    if 'data/real_papers.js' not in html:
        html = html.replace('<script src="data/chapters.js"></script>',
                            '<script src="data/real_papers.js"></script>\n  <script src="data/chapters.js"></script>')
        open(html_path, 'w', encoding='utf-8').write(html)


def bump_cache():
    sw_path = os.path.join(os.path.dirname(DATA_DIR), 'sw.js')
    sw = open(sw_path, encoding='utf-8').read()
    sw = re.sub(r"const CACHE = 'npe-v(\d+)';", lambda m: "const CACHE = 'npe-v%d';" % (int(m.group(1)) + 1), sw)
    open(sw_path, 'w', encoding='utf-8').write(sw)


def main():
    if not os.environ.get('DEEPSEEK_API_KEY'):
        print('缺少 DEEPSEEK_API_KEY，跳过本次更新。')
        return

    existing = existing_papers()
    entries = discover()
    if not entries:
        print('未能从真题列表页解析出任何期次，跳过。')
        return

    print('已导入期次：%s' % (', '.join(sorted(existing)) if existing else '（无）'))
    next_id = read_max_id() + 1
    added = 0
    new_meta = []

    for year, half, pmid in entries:
        pid = 'real%s%s' % (year, 'a' if half == '上' else 'b')
        if pid in existing:
            continue
        key = year + half
        print('发现新期次 %s（%s），抓取…' % (key, pmid))
        try:
            lines = to_text(http_get(BASE + pmid + '.html'))
            qs = parse_am(lines)
            qs = [q for q in qs if q['answer'] and len(q['options']) == 4 and q.get('question')]
        except Exception as e:
            print('  %s 抓取失败：%s' % (key, e))
            continue
        if not qs:
            print('  %s 无免费答案（未公开或估分模式），跳过。' % key)
            continue

        enriched = enrich(qs)
        for q, e in zip(qs, enriched):
            q['category'] = e['category']
            q['explanation'] = e['explanation']
        next_id = append_paper(pid, '%s年%s半年真题·上午场' % (year, '上' if half == '上' else '下'), qs, next_id)
        new_meta.append({'id': pid, 'name': '%s年%s半年真题·上午场' % (year, '上' if half == '上' else '下'),
                         'cover': '历年真题 · 上午综合知识 · %d 题' % len(qs)})
        existing.add(pid)
        added += 1
        print('  %s 完成：%d 题。' % (key, len(qs)))
        time.sleep(1.5)

    if new_meta:
        update_papers(new_meta)
        bump_cache()
    print('完成：本次新增 %d 套真题。' % added)


if __name__ == '__main__':
    main()

# -*- coding: utf-8 -*-
"""一次性迁移：把题库里的 category 从项目自创的 12 类，
改成官方《网络工程师教程（第 6 版）》的 10 章目录。

只改 category 字段的取值，不动题目内容。可重复执行（幂等）。
用法：python scripts/migrate_chapters.py
"""
import json
import os
import re
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

# 旧 category -> 新章节（教程第 6 版目录）
MAP = {
    '计算机网络体系结构': '计算机网络概论',
    '数据通信基础': '数据通信基础',
    '局域网与以太网': '局域网',
    '交换技术': '局域网',
    '无线网络': '无线通信网',
    '广域网技术': '网络互连',
    '网络互联与 IP 编址': '网络互连',
    '网络互联与IP编址': '网络互连',      # 历年真题里的写法（IP 前后无空格）
    '路由协议': '网络互连',
    '网络安全': '网络安全',
    '网络操作系统': '网络操作系统与应用服务器',
    '网络管理': '网络管理',
    '网络规划与设计': '网络规划和设计',
    '配置命令专项': '配置命令专项',   # 保持独立的专项练习入口
    # 历年真题里还有一个「计算机基础与软件工程」分类，对应考试大纲的
    # 「计算机系统知识」「系统开发和运行基础知识」两个知识域。教程第 6 版
    # 没有这一章，所以不并入 10 章目录，原样保留（只出现在模拟考试的题目标签上）。
}

# 需要迁移的数据文件（"category": "xxx" 形式）
TARGETS = [
    'data/chapters.js', 'data/auto.js', 'data/case_config.js',
    'data/paper1.js', 'data/paper2.js', 'data/paper3.js', 'data/paper4.js',
    'data/real_papers.js',
]

# 匹配 category 字段的两种写法：category: "X"（JS）与 "category": "X"（JSON）
CAT_RE = re.compile(r'(?P<pre>(?:"category"|category)\s*:\s*)"(?P<val>[^"]*)"')


def migrate_text(text):
    """按 MAP 替换 category 取值，返回 (新文本, 命中次数)。"""
    hits = [0]

    def repl(m):
        old = m.group('val')
        new = MAP.get(old)
        if new is None or new == old:
            return m.group(0)
        hits[0] += 1
        return '%s"%s"' % (m.group('pre'), new)

    return CAT_RE.sub(repl, text), hits[0]


def main():
    total = 0
    for rel in TARGETS:
        path = os.path.join(ROOT, rel.replace('/', os.sep))
        if not os.path.exists(path):
            print('跳过（不存在）:', rel)
            continue
        with open(path, 'r', encoding='utf-8') as f:
            src = f.read()
        out, n = migrate_text(src)
        if n:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(out)
        print('%-24s 改写 %4d 处' % (rel, n))
        total += n

    # auto.json 是 auto.js 的源文件，必须同步改，否则下次自动更新会把旧分类写回来
    aj = os.path.join(ROOT, 'data', 'auto.json')
    if os.path.exists(aj):
        with open(aj, 'r', encoding='utf-8') as f:
            data = json.load(f)
        n = 0
        for q in data:
            old = q.get('category')
            new = MAP.get(old, old)
            if new != old:
                q['category'] = new
                n += 1
        with open(aj, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print('%-24s 改写 %4d 处' % ('data/auto.json', n))
        total += n

    print('\n合计改写 %d 处。' % total)

    # 迁移后统计各章题数
    counts = {}
    for rel in TARGETS:
        path = os.path.join(ROOT, rel.replace('/', os.sep))
        if not os.path.exists(path):
            continue
        with open(path, 'r', encoding='utf-8') as f:
            for m in CAT_RE.finditer(f.read()):
                v = m.group('val')
                counts[v] = counts.get(v, 0) + 1
    print('\n各章题数（含试卷题）：')
    for k, v in sorted(counts.items(), key=lambda x: -x[1]):
        print('  %-28s %5d' % (k, v))


if __name__ == '__main__':
    main()

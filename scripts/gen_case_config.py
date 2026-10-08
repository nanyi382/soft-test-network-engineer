# -*- coding: utf-8 -*-
"""生成「配置命令专项」案例题：eNSP 风格拓扑图(SVG) + 华为命令填空。
输出 data/case_config.js。运行时把输出写到项目 data 目录即可。
"""
import json, os, sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

# ---------------- SVG 绘制辅助 ----------------

def _router(x, y, name):
    """路由器：蓝色圆形 + 双向箭头"""
    return (
        f'<g>'
        f'<circle cx="{x}" cy="{y}" r="24" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>'
        f'<path d="M {x-11} {y-5} L {x+11} {y-5} M {x+11} {y-5} L {x+8} {y-9} M {x+11} {y-5} L {x+8} {y-1} '
        f'M {x+11} {y+5} L {x-11} {y+5} M {x-11} {y+5} L {x-8} {y+1} M {x-11} {y+5} L {x-8} {y+9}" '
        f'stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
        f'<text x="{x}" y="{y+47}" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2937">{name}</text>'
        f'</g>'
    )

def _switch(x, y, name):
    """交换机：青色圆角矩形 + 上下箭头"""
    return (
        f'<g>'
        f'<rect x="{x-24}" y="{y-16}" width="48" height="32" rx="6" fill="#14b8a6" stroke="#0f766e" stroke-width="2"/>'
        f'<path d="M {x-14} {y-6} L {x+14} {y-6} M {x+14} {y-6} L {x+10} {y-10} M {x+14} {y-6} L {x+10} {y-2} '
        f'M {x+14} {y+6} L {x-14} {y+6} M {x-14} {y+6} L {x-10} {y+2} M {x-14} {y+6} L {x-10} {y+10}" '
        f'stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
        f'<text x="{x}" y="{y+49}" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2937">{name}</text>'
        f'</g>'
    )

def _pc(x, y, name):
    """PC：显示器 + 底座"""
    return (
        f'<g>'
        f'<rect x="{x-18}" y="{y-20}" width="36" height="26" rx="3" fill="#e5e7eb" stroke="#6b7280" stroke-width="2"/>'
        f'<rect x="{x-6}" y="{y+6}" width="12" height="10" fill="#9ca3af"/>'
        f'<rect x="{x-12}" y="{y+16}" width="24" height="4" rx="1" fill="#9ca3af"/>'
        f'<text x="{x}" y="{y+47}" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2937">{name}</text>'
        f'</g>'
    )

def _server(x, y, name):
    """服务器：竖长盒 + 指示灯"""
    return (
        f'<g>'
        f'<rect x="{x-16}" y="{y-24}" width="32" height="48" rx="4" fill="#8b5cf6" stroke="#6d28d9" stroke-width="2"/>'
        f'<circle cx="{x-7}" cy="{y-14}" r="2.5" fill="#4ade80"/>'
        f'<circle cx="{x-7}" cy="{y-6}" r="2.5" fill="#4ade80"/>'
        f'<circle cx="{x-7}" cy="{y+2}" r="2.5" fill="#fbbf24"/>'
        f'<rect x="{x+1}" y="{y-16}" width="8" height="30" rx="2" fill="#6d28d9"/>'
        f'<text x="{x}" y="{y+56}" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2937">{name}</text>'
        f'</g>'
    )

def _cloud(x, y, name):
    """云(Internet)"""
    return (
        f'<g>'
        f'<ellipse cx="{x}" cy="{y}" rx="34" ry="22" fill="#d1d5db" stroke="#6b7280" stroke-width="2"/>'
        f'<ellipse cx="{x-10}" cy="{y+6}" rx="18" ry="14" fill="#d1d5db" stroke="none"/>'
        f'<ellipse cx="{x+12}" cy="{y+4}" rx="16" ry="12" fill="#d1d5db" stroke="none"/>'
        f'<text x="{x}" y="{y+48}" text-anchor="middle" font-size="13" font-weight="700" fill="#1f2937">{name}</text>'
        f'</g>'
    )

def _link(x1, y1, x2, y2, label=''):
    """连线（两端点之间的线 + 中间标签）"""
    mx, my = (x1 + x2) / 2, (y1 + y2) / 2
    out = [f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="#94a3b8" stroke-width="2.5"/>']
    if label:
        # 给标签加白底，避免被线遮住
        out.append(
            f'<rect x="{mx-52}" y="{my-12}" width="104" height="20" rx="4" fill="#fff" opacity="0.9"/>'
            f'<text x="{mx}" y="{my+3}" text-anchor="middle" font-size="11" font-weight="600" fill="#334155">{label}</text>'
        )
    return ''.join(out)

def render_topo(devices, links):
    """devices: [{type, x, y, name}]；links: [{a, b, label}]"""
    xs = [d['x'] for d in devices]
    ys = [d['y'] for d in devices]
    pad = 70
    w = max(xs) - min(xs) + pad * 2
    h = max(ys) - min(ys) + pad * 2
    dx, dy = pad - min(xs), pad - min(ys)

    body = []
    # 先画连线
    for lnk in links:
        a = next(d for d in devices if d['name'] == lnk['a'])
        b = next(d for d in devices if d['name'] == lnk['b'])
        body.append(_link(a['x'] + dx, a['y'] + dy, b['x'] + dx, b['y'] + dy, lnk.get('label', '')))
    # 再画设备（覆盖线端）
    for d in devices:
        cx, cy = d['x'] + dx, d['y'] + dy
        if d['type'] == 'router':
            body.append(_router(cx, cy, d['name']))
        elif d['type'] == 'switch':
            body.append(_switch(cx, cy, d['name']))
        elif d['type'] == 'pc':
            body.append(_pc(cx, cy, d['name']))
        elif d['type'] == 'server':
            body.append(_server(cx, cy, d['name']))
        elif d['type'] == 'cloud':
            body.append(_cloud(cx, cy, d['name']))

    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'style="width:100%;height:auto;max-width:560px;display:block;margin:0 auto">'
        f'<rect width="{w}" height="{h}" fill="#f8fafc" rx="10"/>'
        + ''.join(body) + '</svg>'
    )
    return svg

# ---------------- 场景数据 ----------------
# 每场景：category, question(背景), devices, links, parts
SCENES = [
    # 1 接口 IP 配置
    dict(category='网络互联与IP编址',
         question='【案例背景】如图，路由器 AR1 与 AR2 通过 GE0/0/0 接口互连，需要配置接口 IP 地址并实现 PC1 与 PC2 的跨网段互通。',
         devices=[dict(type='pc', x=60, y=180, name='PC1'),
                  dict(type='router', x=200, y=180, name='AR1'),
                  dict(type='router', x=420, y=180, name='AR2'),
                  dict(type='pc', x=560, y=180, name='PC2')],
         links=[dict(a='PC1', b='AR1', label='192.168.1.0/24'),
                dict(a='AR1', b='AR2', label='10.1.1.0/24'),
                dict(a='AR2', b='PC2', label='192.168.2.0/24')],
         parts=[
            dict(prompt='（1）进入 AR1 系统视图的命令是？', type='fill', blanks=['system-view', 'system view'], score=2,
                 explanation='华为设备从用户视图进入系统视图使用 system-view 命令，进入后提示符变为 [AR1]。'),
            dict(prompt='（2）进入 AR1 的 GE0/0/0 接口视图的命令是？', type='fill', blanks=['interface GigabitEthernet0/0/0', 'interface GE0/0/0', 'interface g0/0/0'], score=3,
                 explanation='华为接口命名：GigabitEthernet0/0/0（千兆口），可缩写为 GE0/0/0，进入接口后配置 IP。'),
            dict(prompt='（3）在 GE0/0/0 上配置 IP 地址 10.1.1.1/24 的命令是？', type='fill', blanks=['ip address 10.1.1.1 255.255.255.0', 'ip address 10.1.1.1 24'], score=3,
                 explanation='接口下 ip address 地址 掩码 配置 IP，掩码可写点分十进制 255.255.255.0 或前缀 24。'),
            dict(prompt='（4）开启该接口（默认接口可能处于 shutdown 状态）的命令是？', type='fill', blanks=['undo shutdown', 'undo shut'], score=2,
                 explanation='华为接口默认可能关闭，需 undo shutdown 开启，否则接口 down、无法通信。'),
            dict(prompt='（5）在 AR1 上配置到达 PC2 网段 192.168.2.0/24 的静态路由，下一跳为 10.1.1.2 的命令是？', type='fill',
                 blanks=['ip route-static 192.168.2.0 255.255.255.0 10.1.1.2', 'ip route-static 192.168.2.0 24 10.1.1.2'], score=4,
                 explanation='静态路由格式：ip route-static 目的网段 掩码 下一跳地址。AR2 上同理回程路由到 192.168.1.0/24。'),
         ]),
    # 2 VLAN 划分
    dict(category='交换技术',
         question='【案例背景】如图，交换机 LSW1 下接财务部 PC1（VLAN 10）与技术部 PC2（VLAN 20），并通过干道与 LSW2 相连。请完成 VLAN 划分配置。',
         devices=[dict(type='pc', x=70, y=120, name='PC1'),
                  dict(type='pc', x=70, y=260, name='PC2'),
                  dict(type='switch', x=240, y=190, name='LSW1'),
                  dict(type='switch', x=430, y=190, name='LSW2')],
         links=[dict(a='PC1', b='LSW1', label='VLAN 10'),
                dict(a='PC2', b='LSW1', label='VLAN 20'),
                dict(a='LSW1', b='LSW2', label='Trunk')],
         parts=[
            dict(prompt='（1）在 LSW1 上一次性创建 VLAN 10 和 VLAN 20 的命令是？', type='fill', blanks=['vlan batch 10 20', 'vlan batch 10 20 '], score=3,
                 explanation='华为批量创建 VLAN 用 vlan batch 10 20；创建单个 VLAN 用 vlan 10。'),
            dict(prompt='（2）将连接 PC1 的接口 GE0/0/1 配置为 Access 并划入 VLAN 10 的两条命令是？', type='fill',
                 blanks=['port link-type access,port default vlan 10', 'port link-type access 和 port default vlan 10'], score=4,
                 explanation='接口下先 port link-type access 设置端口类型为接入，再 port default vlan 10 指定默认 VLAN。'),
            dict(prompt='（3）将 LSW1 与 LSW2 之间的接口配置为 Trunk 并放行 VLAN 10、20 的两条命令是？', type='fill',
                 blanks=['port link-type trunk,port trunk allow-pass vlan 10 20', 'port link-type trunk 和 port trunk allow-pass vlan 10 20'], score=4,
                 explanation='Trunk 干道用 port link-type trunk 设置，再用 port trunk allow-pass vlan 10 20 放行指定 VLAN。'),
            dict(prompt='（4）查看交换机 VLAN 配置信息的命令是？', type='fill', blanks=['display vlan', 'display vlan 10'], score=2,
                 explanation='display vlan 查看所有 VLAN 及端口归属；display vlan 10 查看单个 VLAN。'),
         ]),
    # 3 三层交换机 VLAN 间路由
    dict(category='交换技术',
         question='【案例背景】如图，使用三层交换机 LSW1 实现 VLAN 10 与 VLAN 20 之间的路由互通，PC1、PC2 的网关均指向 LSW1 的 VLANIF 接口。',
         devices=[dict(type='pc', x=90, y=120, name='PC1'),
                  dict(type='pc', x=90, y=270, name='PC2'),
                  dict(type='switch', x=330, y=195, name='LSW1')],
         links=[dict(a='PC1', b='LSW1', label='192.168.10.0/24'),
                dict(a='PC2', b='LSW1', label='192.168.20.0/24')],
         parts=[
            dict(prompt='（1）在三层交换机上创建 VLAN 10、20 的命令是？', type='fill', blanks=['vlan batch 10 20'], score=2,
                 explanation='与二层交换机相同，用 vlan batch 10 20 批量创建。'),
            dict(prompt='（2）进入 VLAN 10 的三层接口（VLANIF）的命令是？', type='fill', blanks=['interface Vlanif10', 'interface vlanif 10'], score=3,
                 explanation='三层交换机通过 VLANIF 接口（SVI）为 VLAN 提供网关，interface Vlanif10 进入。'),
            dict(prompt='（3）为 VLANIF 10 配置网关 IP 192.168.10.1/24 的命令是？', type='fill', blanks=['ip address 192.168.10.1 24', 'ip address 192.168.10.1 255.255.255.0'], score=3,
                 explanation='VLANIF 下配置 ip address 192.168.10.1 24，作为 PC1 所在网段网关。'),
            dict(prompt='（4）简述三层交换机实现 VLAN 间路由的原理。', type='qa',
                 reference='每个 VLAN 对应一个 VLANIF 三层接口并配置网关 IP，三层交换机内部通过路由（直连路由）在不同 VLANIF 之间转发三层报文，从而实现不同 VLAN 网段的互通，无需外接路由器。', score=4,
                 explanation='三层交换机 = 二层交换 + 三层路由，VLANIF 接口充当各 VLAN 的网关，靠直连路由完成 VLAN 间转发。'),
         ]),
    # 4 OSPF 多区域
    dict(category='路由协议',
         question='【案例背景】如图，园区网三台路由器运行 OSPF，R1、R2 位于骨干区域 Area 0，R2、R3 位于 Area 1。请完成 OSPF 配置实现全网互通。',
         devices=[dict(type='router', x=90, y=180, name='R1'),
                  dict(type='router', x=310, y=180, name='R2'),
                  dict(type='router', x=530, y=180, name='R3')],
         links=[dict(a='R1', b='R2', label='Area 0 · 10.1.1.0/24'),
                dict(a='R2', b='R3', label='Area 1 · 10.1.2.0/24')],
         parts=[
            dict(prompt='（1）在 R1 上启用 OSPF 进程 1 并指定 Router-ID 为 1.1.1.1 的命令是？', type='fill',
                 blanks=['ospf 1 router-id 1.1.1.1', 'ospf 1'], score=3,
                 explanation='ospf 1 进入 OSPF 进程 1，router-id 1.1.1.1 显式指定路由器标识，建议手工指定以避免选举不确定。'),
            dict(prompt='（2）在 R1 上进入骨干区域 Area 0 的命令是？', type='fill', blanks=['area 0'], score=2,
                 explanation='OSPF 区域划分：area 0 表示骨干区域，所有区域必须与 Area 0 相连。'),
            dict(prompt='（3）将 R1 直连网段 10.1.1.0/24 宣告进 Area 0 的命令是？', type='fill',
                 blanks=['network 10.1.1.0 0.0.0.255', 'network 10.1.1.0 0.0.0.255 area 0'], score=4,
                 explanation='OSPF 用反掩码（wildcard）宣告网络，/24 对应反掩码 0.0.0.255。R2 上需分别把两个网段宣告到 Area 0 和 Area 1。'),
            dict(prompt='（4）查看 OSPF 邻居状态（是否建立 Full）的命令是？', type='fill', blanks=['display ospf peer', 'display ospf peer brief'], score=2,
                 explanation='display ospf peer 查看 OSPF 邻居，邻居状态为 Full 表示邻接关系建立成功。'),
         ]),
    # 5 静态路由 + 默认路由
    dict(category='路由协议',
         question='【案例背景】如图，企业内网 AR1 通过 AR2 连接互联网。要求内网通过默认路由访问外网，同时 AR2 上配置到内网网段的回程静态路由。',
         devices=[dict(type='pc', x=80, y=180, name='PC1'),
                  dict(type='router', x=230, y=180, name='AR1'),
                  dict(type='router', x=410, y=180, name='AR2'),
                  dict(type='cloud', x=560, y=180, name='Internet')],
         links=[dict(a='PC1', b='AR1', label='192.168.1.0/24'),
                dict(a='AR1', b='AR2', label='10.1.1.0/24'),
                dict(a='AR2', b='Internet', label='公网')],
         parts=[
            dict(prompt='（1）在 AR1 上配置默认路由（下一跳 10.1.1.2）的命令是？', type='fill',
                 blanks=['ip route-static 0.0.0.0 0.0.0.0 10.1.1.2', 'ip route-static 0.0.0.0 0 10.1.1.2'], score=4,
                 explanation='默认路由即目的网段 0.0.0.0 掩码 0.0.0.0，匹配所有未知目的，将流量交给下一跳 10.1.1.2。'),
            dict(prompt='（2）在 AR2 上配置到达内网 192.168.1.0/24 的静态路由（下一跳 10.1.1.1）的命令是？', type='fill',
                 blanks=['ip route-static 192.168.1.0 255.255.255.0 10.1.1.1'], score=4,
                 explanation='回程静态路由保证 AR2 能把发往内网的报文送回 AR1。'),
            dict(prompt='（3）查看 AR1 路由表的命令是？', type='fill', blanks=['display ip routing-table'], score=2,
                 explanation='display ip routing-table 查看 IPv4 路由表，可看到直连路由与静态路由条目。'),
            dict(prompt='（4）简述静态路由与默认路由的区别。', type='qa',
                 reference='静态路由是手工指定到某个具体目的网段的路径；默认路由（0.0.0.0/0）是一种特殊的静态路由，匹配所有无法在路由表中找到精确匹配的目的地址，通常用于指向出口/互联网。', score=4,
                 explanation='默认路由是静态路由的特例，兜底匹配所有未知目的，常用于出口路由。'),
         ]),
    # 6 ACL
    dict(category='网络安全',
         question='【案例背景】如图，要求用 ACL 禁止财务网段 192.168.1.0/24 访问服务器 10.0.0.1，同时允许技术网段 192.168.2.0/24 正常访问。',
         devices=[dict(type='pc', x=70, y=110, name='PC1'),
                  dict(type='pc', x=70, y=270, name='PC2'),
                  dict(type='switch', x=230, y=190, name='LSW1'),
                  dict(type='router', x=400, y=190, name='AR1'),
                  dict(type='server', x=560, y=190, name='Server')],
         links=[dict(a='PC1', b='LSW1', label='192.168.1.0/24'),
                dict(a='PC2', b='LSW1', label='192.168.2.0/24'),
                dict(a='LSW1', b='AR1', label=''),
                dict(a='AR1', b='Server', label='10.0.0.1')],
         parts=[
            dict(prompt='（1）创建高级 ACL 3000 的命令是？', type='fill', blanks=['acl 3000', 'acl number 3000'], score=2,
                 explanation='高级 ACL 编号范围 3000~3999，可匹配源/目的地址、协议、端口。'),
            dict(prompt='（2）编写规则禁止 192.168.1.0/24 访问主机 10.0.0.1 的命令是？', type='fill',
                 blanks=['rule 5 deny ip source 192.168.1.0 0.0.0.255 destination 10.0.0.1 0'], score=4,
                 explanation='rule 5 deny ip source 源地址 反掩码 destination 目的地址 反掩码。目的为单主机反掩码为 0。'),
            dict(prompt='（3）编写规则允许其他流量通过的默认放行命令是？', type='fill',
                 blanks=['rule 10 permit ip', 'rule permit ip'], score=2,
                 explanation='华为 ACL 末尾默认 deny all，需显式 rule permit ip 放行其他流量。'),
            dict(prompt='（4）将该 ACL 应用到连接 LSW1 的接口 GE0/0/0 的入方向，命令是？', type='fill',
                 blanks=['traffic-filter inbound acl 3000', 'traffic-filter inbound acl 3000 '], score=4,
                 explanation='接口下 traffic-filter inbound acl 3000 对进入该接口的流量调用 ACL 3000 过滤。'),
            dict(prompt='（5）简述基本 ACL 与高级 ACL 的主要区别。', type='qa',
                 reference='基本 ACL（2000~2999）只能基于源 IP 地址过滤；高级 ACL（3000~3999）可基于源/目的 IP、协议类型、端口号等五元组精细过滤。', score=4,
                 explanation='高级 ACL 匹配粒度更细，功能更强，但资源开销更大。'),
         ]),
    # 7 DHCP
    dict(category='网络操作系统',
         question='【案例背景】如图，AR1 作为 DHCP 服务器，为其接口 GE0/0/1 所在网段 192.168.1.0/24 的 PC 动态分配地址，采用接口地址池方式。',
         devices=[dict(type='pc', x=100, y=180, name='PC1'),
                  dict(type='switch', x=270, y=180, name='LSW1'),
                  dict(type='router', x=440, y=180, name='AR1')],
         links=[dict(a='PC1', b='LSW1', label=''),
                dict(a='LSW1', b='AR1', label='192.168.1.0/24')],
         parts=[
            dict(prompt='（1）全局启用 DHCP 功能的命令是？', type='fill', blanks=['dhcp enable'], score=2,
                 explanation='必须先在系统视图执行 dhcp enable 全局开启 DHCP，否则后续配置不生效。'),
            dict(prompt='（2）在接口 GE0/0/1 上配置 IP 192.168.1.1/24 并采用接口地址池分配的命令是？', type='fill',
                 blanks=['dhcp select interface'], score=3,
                 explanation='接口下先 ip address 192.168.1.1 24，再 dhcp select interface 表示用该接口地址池给下挂网段分配。'),
            dict(prompt='（3）若采用全局地址池，创建名为 pool1 的地址池命令是？', type='fill', blanks=['ip pool pool1'], score=2,
                 explanation='ip pool pool1 创建全局地址池并进入地址池视图。'),
            dict(prompt='（4）在地址池中指定分配网段与网关的命令是？', type='fill',
                 blanks=['network 192.168.1.0 mask 255.255.255.0,gateway-list 192.168.1.1'], score=4,
                 explanation='地址池下 network 指定网段，gateway-list 指定下发网关，dns-list 指定 DNS。'),
            dict(prompt='（5）简述 DHCP 客户端获取地址的 DORA 四步过程。', type='qa',
                 reference='Discover（广播发现服务器）→ Offer（服务器回应提供 IP 等参数）→ Request（客户端请求使用该地址）→ Ack（服务器确认分配）。', score=4,
                 explanation='DORA = Discover、Offer、Request、Ack，是 DHCP 分配的标准握手流程。'),
         ]),
    # 8 STP
    dict(category='交换技术',
         question='【案例背景】如图，三台交换机 LSW1、LSW2、LSW3 形成环路，需要启用生成树协议 STP 消除二层环路，并指定 LSW1 为根桥。',
         devices=[dict(type='switch', x=160, y=120, name='LSW1'),
                  dict(type='switch', x=420, y=120, name='LSW2'),
                  dict(type='switch', x=290, y=290, name='LSW3')],
         links=[dict(a='LSW1', b='LSW2', label='GE0/0/1'),
                dict(a='LSW1', b='LSW3', label='GE0/0/2'),
                dict(a='LSW2', b='LSW3', label='GE0/0/2')],
         parts=[
            dict(prompt='（1）在三台交换机上全局启用 STP 的命令是？', type='fill', blanks=['stp enable'], score=2,
                 explanation='系统视图下 stp enable 全局启用生成树协议。'),
            dict(prompt='（2）将 LSW1 指定为根桥的命令是？', type='fill', blanks=['stp root primary'], score=3,
                 explanation='stp root primary 将本交换机优先级强制设为 0，使其成为根桥。'),
            dict(prompt='（3）查看 STP 状态、确认哪些端口被阻塞的命令是？', type='fill', blanks=['display stp', 'display stp brief'], score=2,
                 explanation='display stp / display stp brief 查看 STP 运行状态及端口角色（Root/Designated/Blocked）。'),
            dict(prompt='（4）简述 STP 消除环路的基本原理。', type='qa',
                 reference='STP 通过选举根桥、根端口、指定端口，将冗余链路上的端口阻塞（Blocked），使物理环路在逻辑上变成无环树形结构；当活动链路故障时再重新计算、恢复被阻塞端口，实现冗余备份。', score=4,
                 explanation='STP 把环形拓扑剪成树，阻塞冗余端口防广播风暴，链路故障时可快速切换。'),
         ]),
    # 9 Eth-Trunk 链路聚合
    dict(category='交换技术',
         question='【案例背景】如图，交换机 LSW1 与 LSW2 之间用两条物理链路（GE0/0/1、GE0/0/2）相连，需配置 Eth-Trunk 链路聚合，实现带宽叠加与链路备份。',
         devices=[dict(type='switch', x=180, y=180, name='LSW1'),
                  dict(type='switch', x=440, y=180, name='LSW2')],
         links=[dict(a='LSW1', b='LSW2', label='GE0/0/1'),
                dict(a='LSW1', b='LSW2', label='GE0/0/2')],
         parts=[
            dict(prompt='（1）在 LSW1 上创建编号为 1 的 Eth-Trunk 接口的命令是？', type='fill', blanks=['interface Eth-Trunk 1'], score=3,
                 explanation='interface Eth-Trunk 1 创建聚合接口并进入其视图。'),
            dict(prompt='（2）设置该聚合为静态 LACP 模式的命令是？', type='fill', blanks=['mode lacp-static'], score=3,
                 explanation='mode lacp-static 指定静态 LACP 模式；manual load-balance 为手工负载分担模式。'),
            dict(prompt='（3）将物理接口 GE0/0/1 加入 Eth-Trunk 1 的命令是？', type='fill', blanks=['eth-trunk 1'], score=3,
                 explanation='进入物理接口 GE0/0/1 视图后执行 eth-trunk 1，把它加入聚合组；GE0/0/2 同理。'),
            dict(prompt='（4）简述链路聚合的主要作用。', type='qa',
                 reference='把多条物理链路捆绑成一条逻辑链路：提高链路带宽（负载分担）、实现链路冗余备份（单条故障不影响业务）、简化管理。', score=4,
                 explanation='Eth-Trunk 兼具带宽叠加与备份能力，是提高链路可靠性的常用手段。'),
         ]),
    # 10 NAT
    dict(category='网络安全',
         question='【案例背景】如图，企业内网 192.168.1.0/24 需通过 AR1 的 NAT 功能访问互联网，公网地址池为 100.1.1.1~100.1.1.10。请完成 NAT 配置。',
         devices=[dict(type='pc', x=80, y=180, name='PC1'),
                  dict(type='router', x=260, y=180, name='AR1'),
                  dict(type='cloud', x=460, y=180, name='Internet')],
         links=[dict(a='PC1', b='AR1', label='192.168.1.0/24'),
                dict(a='AR1', b='Internet', label='100.1.1.1/30')],
         parts=[
            dict(prompt='（1）创建基本 ACL 2000 匹配内网网段的命令是？', type='fill',
                 blanks=['acl 2000', 'acl number 2000'], score=2,
                 explanation='基本 ACL 编号 2000~2999，用于匹配源地址。'),
            dict(prompt='（2）在 ACL 2000 中放行内网 192.168.1.0/24 的规则是？', type='fill',
                 blanks=['rule 5 permit source 192.168.1.0 0.0.0.255', 'rule permit source 192.168.1.0 0.0.0.255'], score=3,
                 explanation='rule 5 permit source 192.168.1.0 0.0.0.255 匹配内网源地址，供 NAT 调用。'),
            dict(prompt='（3）定义公网地址池（组 1，100.1.1.1~100.1.1.10）的命令是？', type='fill',
                 blanks=['nat address-group 1 100.1.1.1 100.1.1.10'], score=3,
                 explanation='系统视图 nat address-group 组号 起始地址 结束地址 定义 NAT 公网地址池。'),
            dict(prompt='（4）在出接口上做 NAPT（地址池方式）的命令是？', type='fill',
                 blanks=['nat outbound 2000 address-group 1', 'nat outbound 2000 address-group 1 '], score=4,
                 explanation='出接口视图 nat outbound 2000 address-group 1 表示对匹配 ACL 2000 的内网流量做地址转换并复用地址池。'),
            dict(prompt='（5）若改用 Easy IP（直接用出接口公网地址）方式，命令是？', type='fill',
                 blanks=['nat outbound 2000'], score=3,
                 explanation='Easy IP 用出接口自身的公网地址做 NAPT，命令为 nat outbound 2000，适用于公网地址只有接口地址的场景。'),
         ]),
]

# ---------------- 生成 data/case_config.js ----------------

def esc_js(s):
    return json.dumps(s, ensure_ascii=False)

def build():
    start_id = 4001
    out = []
    out.append('/* 配置命令专项案例题：eNSP 拓扑图 + 华为命令填空 */')
    out.append('window.QUESTIONS = window.QUESTIONS || [];')
    out.append('(function () {')
    out.append('  const C = [')
    for i, sc in enumerate(SCENES):
        qid = start_id + i
        diagram = render_topo(sc['devices'], sc['links'])
        out.append('    {')
        out.append('      id: %d, type: "case", category: "配置命令专项",' % qid)
        out.append('      question: %s,' % esc_js(sc['question']))
        out.append('      diagram: %s,' % esc_js(diagram))
        out.append('      parts: [')
        for p in sc['parts']:
            if p['type'] == 'fill':
                out.append('        { prompt: %s, type: "fill", blanks: %s, score: %d, explanation: %s },' % (
                    esc_js(p['prompt']), esc_js(p['blanks']), p['score'], esc_js(p['explanation'])))
            else:
                out.append('        { prompt: %s, type: "qa", reference: %s, score: %d, explanation: %s },' % (
                    esc_js(p['prompt']), esc_js(p['reference']), p['score'], esc_js(p['explanation'])))
        out.append('      ]')
        out.append('    },')
    out.append('  ];')
    out.append('  C.forEach(q => window.QUESTIONS.push(q));')
    out.append('})();')
    return '\n'.join(out) + '\n'

if __name__ == '__main__':
    js = build()
    target = os.path.join(os.path.dirname(__file__), '..', 'data', 'case_config.js')
    target = os.path.abspath(target)
    with open(target, 'w', encoding='utf-8') as f:
        f.write(js)
    print('已生成:', target)
    print('场景数:', len(SCENES), '| 起始 id:', 4001)
    # 简单校验
    nq = js.count('id: 40')
    print('题目块数:', js.count('type: "case"'))

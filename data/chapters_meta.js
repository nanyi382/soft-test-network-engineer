/* 章节目录（严格依据官方《网络工程师教程（第 6 版）》目录，2024.10 出版，
 * 配套 2024 年审定通过的《网络工程师考试大纲》，自 2025 年上半年考试起执行）。
 *
 * 题目对象的 category 字段即这里的 name；章节练习按下表顺序展示。
 * 专项练习（no 为 null）不参与编号，排在章节之后。 */
window.CHAPTERS = [
  {
    no: 1,
    name: '计算机网络概论',
    summary: '计算机网络概念与分类、拓扑结构、OSI 参考模型与 TCP/IP 参考模型、各层功能与协议、标准化组织与标准'
  },
  {
    no: 2,
    name: '数据通信基础',
    summary: '信道特性与传输速率、香农定理与奈奎斯特定理、调制与编码（ASK/FSK/PSK/QPSK）、PCM 与抽样定理、传输介质、多路复用、光纤交换网络（EPON/GPON）'
  },
  {
    no: 3,
    name: '局域网',
    summary: 'IEEE 802 体系结构、以太网与 CSMA/CD、最小帧长、高速局域网、网络连接设备、VLAN 与 802.1Q、生成树协议 STP/RSTP、链路聚合'
  },
  {
    no: 4,
    name: '无线通信网',
    summary: '无线局域网 IEEE 802.11 与 WLAN 组网、无线个人网与蓝牙、移动通信 4G/5G 关键技术、无线网络安全'
  },
  {
    no: 5,
    name: '网络互连',
    summary: 'IP 地址与子网划分、IPv4/IPv6、ARP/ICMP、路由原理与路由协议（RIP/OSPF/BGP）、广域网技术（PPP/HDLC/帧中继）、NAT 与地址转换'
  },
  {
    no: 6,
    name: '网络安全',
    summary: '安全技术与安全协议、加密与认证、访问控制、防火墙/IDS/IPS/UTM、Web 安全防范、APT 与 DDoS 攻击防护、VPN'
  },
  {
    no: 7,
    name: '网络操作系统与应用服务器',
    summary: 'Windows 与 Linux（含国产操作系统）基本管理与命令、用户与权限管理、DNS/DHCP/Web/FTP 等应用服务器配置、开源 Web 服务器与中间件'
  },
  {
    no: 8,
    name: '组网技术',
    summary: '交换机与路由器配置、VLAN/Trunk/Eth-Trunk、静态路由与动态路由配置、ACL、NAT、DHCP、STP 等设备配置命令与组网方案'
  },
  {
    no: 9,
    name: '网络管理',
    summary: '网络管理功能域、SNMP 协议与管理信息库 MIB、网络管理命令与工具、网络故障的诊断定位和处理、网络性能与可靠性'
  },
  {
    no: 10,
    name: '网络规划和设计',
    summary: '结构化综合布线系统、网络需求分析与设计、层次化网络设计、IP 地址规划、项目管理基础知识'
  },
  {
    no: null,
    name: '配置命令专项',
    summary: '带 eNSP 拓扑图的组网配置案例：接口与 IP、VLAN、VLAN 间路由、OSPF、静态路由、ACL、DHCP、STP、Eth-Trunk、NAT 的华为设备命令'
  }
];

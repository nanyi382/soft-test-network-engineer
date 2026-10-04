/* 真题模拟卷（四）：75 选择 + 5 案例 */
window.QUESTIONS = window.QUESTIONS || [];
(function () {
  const P = "paper4";
  const A = [
    // —— 计算机网络体系结构 ——
    { id: 401, type: "single", category: "计算机网络体系结构", paper: P, question: "TCP 协议释放连接采用的握手过程是（　）。", options: ["A. 两次握手", "B. 三次握手", "C. 四次挥手", "D. 无需握手"], answer: 2, explanation: "TCP 释放连接采用四次挥手（FIN→ACK→FIN→ACK），双方各自关闭发送通道，因此比建立连接多一次交互。" },
    { id: 402, type: "single", category: "计算机网络体系结构", paper: P, question: "OSI 参考模型中，位于网络层之上、会话层之下的是（　）。", options: ["A. 传输层", "B. 表示层", "C. 数据链路层", "D. 应用层"], answer: 0, explanation: "OSI 从下到上为：物理、数据链路、网络、传输、会话、表示、应用。网络层之上是传输层，会话层之下也是传输层。" },
    { id: 403, type: "single", category: "计算机网络体系结构", paper: P, question: "HTTP 协议默认使用的端口号是（　）。", options: ["A. 443", "B. 80", "C. 21", "D. 25"], answer: 1, explanation: "HTTP 默认端口 80，HTTPS 默认端口 443，FTP 为 21，SMTP 为 25。" },
    { id: 404, type: "single", category: "计算机网络体系结构", paper: P, question: "下列协议中，负责将邮件从客户端发送到邮件服务器的是（　）。", options: ["A. POP3", "B. IMAP", "C. SMTP", "D. HTTP"], answer: 2, explanation: "SMTP（简单邮件传输协议）负责发送邮件；POP3 和 IMAP 用于从服务器收取邮件。" },
    { id: 405, type: "single", category: "计算机网络体系结构", paper: P, question: "在 TCP/IP 体系中，ICMP 协议属于（　）层。", options: ["A. 应用层", "B. 传输层", "C. 网络层", "D. 网络接口层"], answer: 2, explanation: "ICMP 是网络层协议，封装在 IP 报文中，用于传递差错和控制信息，如 ping、tracert 均依赖 ICMP。" },
    { id: 406, type: "single", category: "计算机网络体系结构", paper: P, question: "TCP 首部中，用于表示 SYN、FIN、ACK 等控制信息的字段是（　）。", options: ["A. 标志位", "B. 窗口大小", "C. 序号", "D. 校验和"], answer: 0, explanation: "标志位字段包含 SYN（同步）、FIN（结束）、ACK（确认）、RST（复位）等控制标志，用于连接管理和状态控制。" },
    { id: 407, type: "single", category: "计算机网络体系结构", paper: P, question: "下列应用层协议中，默认使用 UDP 端口 69 的是（　）。", options: ["A. FTP", "B. TFTP", "C. DNS", "D. SNMP"], answer: 1, explanation: "TFTP（简单文件传输协议）基于 UDP，默认端口 69；FTP 基于 TCP 端口 21；DNS 端口 53；SNMP 端口 161。" },

    // —— 数据通信基础 ——
    { id: 408, type: "single", category: "数据通信基础", paper: P, question: "香农定理描述的是（　）信道的极限信息传输速率。", options: ["A. 有噪声", "B. 无噪声", "C. 光纤", "D. 无线"], answer: 0, explanation: "香农定理 C=W·log2(1+S/N) 描述有噪声信道的极限容量；奈奎斯特定理描述无噪声信道的码元速率上限。" },
    { id: 409, type: "single", category: "数据通信基础", paper: P, question: "异步传输中，每个字符前后的起始位和停止位的作用是（　）。", options: ["A. 实现收发双方的位同步", "B. 检错", "C. 加密", "D. 复用"], answer: 0, explanation: "异步传输以字符为单位，用起始位和停止位界定字符边界，实现收发双方的位同步，无需共享时钟。" },
    { id: 410, type: "single", category: "数据通信基础", paper: P, question: "PCM 编码中，为避免混叠失真，抽样频率应满足（　）。", options: ["A. 奈奎斯特抽样定理", "B. 香农定理", "C. 摩尔定律", "D. 海明规则"], answer: 0, explanation: "奈奎斯特抽样定理要求抽样频率不低于信号最高频率的两倍，否则会产生混叠失真。" },
    { id: 411, type: "single", category: "数据通信基础", paper: P, question: "下列编码方式中，通过比较相邻码元判断跳变、自带同步且抗干扰较好的是（　）。", options: ["A. 差分曼彻斯特编码", "B. NRZ", "C. AMI", "D. 归零码"], answer: 0, explanation: "差分曼彻斯特编码根据相邻码元间是否跳变表示数据，具有自同步能力且对极性反转不敏感。" },
    { id: 412, type: "single", category: "数据通信基础", paper: P, question: "与单模光纤相比，多模光纤的纤芯直径（　）。", options: ["A. 更大", "B. 更小", "C. 相同", "D. 无规律"], answer: 0, explanation: "多模光纤纤芯较粗（50/62.5μm），可传输多种模式的光，成本低、距离短；单模光纤纤芯细（约 9μm），只传单一模式，距离远。" },
    { id: 413, type: "single", category: "数据通信基础", paper: P, question: "ADSL 接入方式的上下行速率特点是（　）。", options: ["A. 下行速率大于上行速率", "B. 上行速率大于下行速率", "C. 上下行速率相同", "D. 无规律"], answer: 0, explanation: "ADSL（非对称数字用户线）下行速率远高于上行速率，符合用户下载多于上传的使用习惯。" },

    // —— 局域网与以太网 ——
    { id: 414, type: "single", category: "局域网与以太网", paper: P, question: "IEEE 802.3 标准主要规范的是（　）技术。", options: ["A. 以太网", "B. 令牌环", "C. 无线局域网", "D. 蓝牙"], answer: 0, explanation: "IEEE 802.3 是以太网标准，802.5 是令牌环，802.11 是无线局域网，802.15 是蓝牙。" },
    { id: 415, type: "single", category: "局域网与以太网", paper: P, question: "以太网的最小帧长（不含前导码）为（　）字节。", options: ["A. 64", "B. 46", "C. 1500", "D. 1518"], answer: 0, explanation: "以太网最小帧长 64 字节，用于保证 CSMA/CD 冲突检测能在帧发送完成前感知冲突；其中数据字段最小 46 字节。" },
    { id: 416, type: "single", category: "局域网与以太网", paper: P, question: "VLAN 干道（Trunk）使用的标准封装协议是（　）。", options: ["A. 802.1Q", "B. 802.1D", "C. 802.1p", "D. 802.1x"], answer: 0, explanation: "802.1Q 是 VLAN 干道封装的标准协议，通过在帧中插入 VLAN 标签标识所属 VLAN；ISL 是 Cisco 私有协议。" },
    { id: 417, type: "single", category: "局域网与以太网", paper: P, question: "生成树协议（STP）的主要作用是（　）。", options: ["A. 防止网络环路", "B. 负载均衡", "C. 数据加密", "D. 提高带宽"], answer: 0, explanation: "STP 通过逻辑上阻塞冗余链路、选举根桥，消除二层环路，防止广播风暴和 MAC 表震荡。" },
    { id: 418, type: "single", category: "局域网与以太网", paper: P, question: "以太网交换机通过（　）来学习 MAC 地址与端口的对应关系。", options: ["A. 源 MAC 地址", "B. 目的 MAC 地址", "C. IP 地址", "D. 端口号"], answer: 0, explanation: "交换机收到帧时记录其源 MAC 地址与接收端口的对应关系，从而逐步构建 MAC 地址表用于转发。" },
    { id: 419, type: "single", category: "局域网与以太网", paper: P, question: "千兆以太网 1000BASE-T 使用的传输介质是（　）。", options: ["A. 4 对双绞线", "B. 单模光纤", "C. 同轴电缆", "D. 无线"], answer: 0, explanation: "1000BASE-T 使用 4 对五类及以上双绞线传输，最大距离 100 米；1000BASE-LX/SX 使用光纤。" },

    // —— 广域网技术 ——
    { id: 420, type: "single", category: "广域网技术", paper: P, question: "PPP 协议中，负责建立、配置和测试数据链路的是（　）。", options: ["A. LCP", "B. NCP", "C. PAP", "D. CHAP"], answer: 0, explanation: "LCP（链路控制协议）负责链路的建立、配置和测试；NCP 用于协商网络层协议参数；PAP/CHAP 用于身份认证。" },
    { id: 421, type: "single", category: "广域网技术", paper: P, question: "帧中继相比 X.25 最大的改进是（　）。", options: ["A. 简化纠错、降低时延", "B. 增加纠错", "C. 降低传输速率", "D. 取消虚电路"], answer: 0, explanation: "帧中继基于可靠的数字线路，省略了 X.25 的逐段差错重传，只做检错不做纠错，从而大幅降低时延、提高吞吐量。" },
    { id: 422, type: "single", category: "广域网技术", paper: P, question: "HDLC 中，用于传送用户数据的帧是（　）。", options: ["A. I 帧", "B. S 帧", "C. U 帧", "D. F 帧"], answer: 0, explanation: "I 帧（信息帧）承载用户数据；S 帧（监控帧）用于差错和流量控制；U 帧（无编号帧）用于链路管理。" },
    { id: 423, type: "single", category: "广域网技术", paper: P, question: "ISDN 基本速率接口（BRI）的通道组成是（　）。", options: ["A. 2B+D", "B. 30B+D", "C. 23B+D", "D. 1B+D"], answer: 0, explanation: "BRI 由 2 条 64kbps 的 B 信道和 1 条 16kbps 的 D 信道组成，即 2B+D；PRI 为 30B+D（欧洲）或 23B+D（北美）。" },
    { id: 424, type: "single", category: "广域网技术", paper: P, question: "ATM 信元的固定长度是（　）字节。", options: ["A. 53", "B. 64", "C. 48", "D. 1500"], answer: 0, explanation: "ATM 信元固定 53 字节，其中 5 字节信元头加 48 字节净荷，固定长度便于高速硬件交换。" },
    { id: 425, type: "single", category: "广域网技术", paper: P, question: "下列技术中，属于分组交换的是（　）。", options: ["A. X.25", "B. 传统电话交换", "C. 模拟电视广播", "D. 无线电广播"], answer: 0, explanation: "X.25 是典型的分组交换技术，把数据分成分组存储转发；传统电话交换属于电路交换。" },

    // —— 网络互联与 IP 编址 ——
    { id: 426, type: "single", category: "网络互联与 IP 编址", paper: P, question: "IPv6 地址的长度是（　）位。", options: ["A. 128", "B. 32", "C. 64", "D. 256"], answer: 0, explanation: "IPv6 地址为 128 位，通常用 8 组 4 位十六进制数表示，如 2001:db8::1；IPv4 为 32 位。" },
    { id: 427, type: "single", category: "网络互联与 IP 编址", paper: P, question: "地址 192.168.1.0/26 所在网络的网络地址是（　）。", options: ["A. 192.168.1.0", "B. 192.168.1.64", "C. 192.168.1.128", "D. 192.168.1.192"], answer: 0, explanation: "/26 表示子网掩码 255.255.255.192，网络位占用第 4 字节前 2 位，192.168.1.0 落在 0~63 子网段，网络地址为 192.168.1.0。" },
    { id: 428, type: "single", category: "网络互联与 IP 编址", paper: P, question: "下列地址中，属于 C 类私有地址的是（　）。", options: ["A. 192.168.1.1", "B. 10.1.1.1", "C. 172.16.1.1", "D. 8.8.8.8"], answer: 0, explanation: "C 类私有地址范围 192.168.0.0~192.168.255.255；10.0.0.0/8 是 A 类私有，172.16.0.0/12 是 B 类私有，8.8.8.8 是公网 DNS。" },
    { id: 429, type: "single", category: "网络互联与 IP 编址", paper: P, question: "IP 数据报首部中，用于防止数据报在路由环路中无限循环的字段是（　）。", options: ["A. TTL（生存时间）", "B. 校验和", "C. 标识", "D. 协议"], answer: 0, explanation: "TTL 字段每经过一个路由器减 1，减到 0 时数据报被丢弃，防止其在网络中无限循环。" },
    { id: 430, type: "single", category: "网络互联与 IP 编址", paper: P, question: "NAT 技术的主要作用是（　）。", options: ["A. 实现私有地址与公网地址的转换", "B. 数据加密", "C. 网络加速", "D. 负载均衡"], answer: 0, explanation: "NAT（网络地址转换）将内网私有地址转换为公网地址访问互联网，解决了 IPv4 地址短缺问题，同时隐藏内网结构。" },
    { id: 431, type: "single", category: "网络互联与 IP 编址", paper: P, question: "ICMP 中，用于测试目标主机可达性的是（　）报文。", options: ["A. 回显请求/回显应答", "B. 重定向", "C. 超时", "D. 目的不可达"], answer: 0, explanation: "ping 命令发送 ICMP 回显请求（Echo Request），目标主机回复回显应答（Echo Reply），以此检测连通性。" },
    { id: 432, type: "single", category: "网络互联与 IP 编址", paper: P, question: "无类域间路由（CIDR）的核心思想是（　）。", options: ["A. 打破地址类别、支持可变长子网掩码", "B. 固定 A/B/C 类", "C. 只支持 A 类", "D. 取消子网掩码"], answer: 0, explanation: "CIDR 用「前缀长度」代替固定类别，如 192.168.0.0/22，支持 VLSM 和路由聚合，提高地址利用率。" },

    // —— 交换技术 ——
    { id: 433, type: "single", category: "交换技术", paper: P, question: "二层交换机转发数据帧的依据是（　）。", options: ["A. MAC 地址表", "B. 路由表", "C. ARP 表", "D. DNS 表"], answer: 0, explanation: "二层交换机根据 MAC 地址表查找目的 MAC 对应的端口进行转发，不处理 IP 层信息。" },
    { id: 434, type: "single", category: "交换技术", paper: P, question: "VLAN 的作用不包括（　）。", options: ["A. 提高物理带宽", "B. 隔离广播域", "C. 增强安全性", "D. 便于网络管理"], answer: 0, explanation: "VLAN 可隔离广播域、增强安全、便于管理，但不会提高物理链路的带宽，带宽由物理介质决定。" },
    { id: 435, type: "single", category: "交换技术", paper: P, question: "在交换机上查看 VLAN 配置信息的命令是（　）。", options: ["A. show vlan", "B. show ip route", "C. show arp", "D. show mac-address"], answer: 0, explanation: "show vlan 显示交换机上已创建的 VLAN 及各端口所属关系；show ip route 查看路由表，show arp 查看 ARP 表。" },
    { id: 436, type: "single", category: "交换技术", paper: P, question: "三层交换机相比二层交换机增加的核心功能是（　）。", options: ["A. 广播隔离", "B. 基于 IP 的路由转发", "C. MAC 地址学习", "D. 帧转发"], answer: 1, explanation: "三层交换机在二层交换基础上集成了路由功能，可根据 IP 地址在 VLAN 之间转发数据，实现线速路由。" },
    { id: 437, type: "single", category: "交换技术", paper: P, question: "链路聚合（Eth-Trunk）的主要作用是（　）。", options: ["A. 增加带宽并提供链路冗余", "B. 数据加密", "C. 隔离广播", "D. 路由选择"], answer: 0, explanation: "链路聚合将多条物理链路捆绑成一条逻辑链路，既增加带宽又提供链路备份，实现负载分担和故障恢复。" },
    { id: 438, type: "single", category: "交换技术", paper: P, question: "STP 中，根桥的选举依据是（　）。", options: ["A. 桥 ID（优先级+MAC）最小", "B. 桥 ID 最大", "C. IP 地址最小", "D. 端口数量最多"], answer: 0, explanation: "根桥选举比较桥 ID（由桥优先级和 MAC 地址组成），桥 ID 最小者成为根桥。" },

    // —— 路由协议 ——
    { id: 439, type: "single", category: "路由协议", paper: P, question: "RIP 协议规定的最大跳数是（　）。", options: ["A. 15", "B. 16", "C. 100", "D. 255"], answer: 0, explanation: "RIP 以跳数作为度量，最大 15 跳，16 跳表示不可达，因此 RIP 只适用于小型网络。" },
    { id: 440, type: "single", category: "路由协议", paper: P, question: "OSPF 中，区域 0 被称为（　）。", options: ["A. 骨干区域", "B. 普通区域", "C. 末节区域", "D. 完全末节区域"], answer: 0, explanation: "OSPF 必须有一个骨干区域（Area 0），其他区域必须直接或通过虚链路连接到骨干区域。" },
    { id: 441, type: "single", category: "路由协议", paper: P, question: "BGP 使用的传输层协议是（　）。", options: ["A. TCP", "B. UDP", "C. ICMP", "D. IGMP"], answer: 0, explanation: "BGP 基于 TCP（端口 179）建立可靠连接，交换路由信息，适用于自治系统之间的大规模路由。" },
    { id: 442, type: "single", category: "路由协议", paper: P, question: "华为设备中，静态路由的默认优先级是（　）。", options: ["A. 60", "B. 1", "C. 0", "D. 100"], answer: 0, explanation: "华为设备静态路由默认优先级为 60，直连路由为 0，OSPF 为 10，RIP 为 100；数值越小越优先。" },
    { id: 443, type: "single", category: "路由协议", paper: P, question: "OSPF 路由器之间交换链路状态信息使用（　）。", options: ["A. LSA", "B. Hello 报文", "C. 路由表", "D. MAC 地址"], answer: 0, explanation: "OSPF 通过泛洪 LSA（链路状态通告）交换链路状态信息，各路由器据此构建一致的链路状态数据库。" },
    { id: 444, type: "single", category: "路由协议", paper: P, question: "下列路由协议中，属于距离矢量协议的是（　）。", options: ["A. RIP", "B. OSPF", "C. IS-IS", "D. 都不是"], answer: 0, explanation: "RIP 是距离矢量协议，按跳数度量、周期广播路由表；OSPF 和 IS-IS 都是链路状态协议。" },

    // —— 无线网络 ——
    { id: 445, type: "single", category: "无线网络", paper: P, question: "IEEE 802.11 标准主要用于（　）。", options: ["A. 无线局域网", "B. 蓝牙", "C. 城域网", "D. 个域网"], answer: 0, explanation: "IEEE 802.11 是无线局域网（WLAN）标准，规定了物理层和 MAC 层的实现。" },
    { id: 446, type: "single", category: "无线网络", paper: P, question: "WLAN 中，用于标识一个无线网络的名称是（　）。", options: ["A. SSID", "B. BSSID", "C. MAC", "D. IP"], answer: 0, explanation: "SSID（服务集标识）是无线网络的名称，终端通过它识别并接入指定网络；BSSID 是 AP 的 MAC 地址。" },
    { id: 447, type: "single", category: "无线网络", paper: P, question: "下列无线加密标准中，安全性最高的是（　）。", options: ["A. WPA3", "B. WEP", "C. WPA", "D. 无加密"], answer: 0, explanation: "WPA3 采用 SAE 认证和更强的加密算法，安全性高于 WPA/WPA2；WEP 早已被破解，安全性最弱。" },
    { id: 448, type: "single", category: "无线网络", paper: P, question: "802.11n 相比 802.11g 的主要改进是（　）。", options: ["A. 引入 MIMO、速率更高", "B. 只支持 2.4GHz", "C. 取消加密", "D. 降低功率"], answer: 0, explanation: "802.11n 引入 MIMO（多入多出）和信道绑定技术，同时支持 2.4GHz 和 5GHz，速率较 802.11g 大幅提升。" },
    { id: 449, type: "single", category: "无线网络", paper: P, question: "Wi-Fi 6 对应的 IEEE 标准是（　）。", options: ["A. 802.11ax", "B. 802.11ac", "C. 802.11n", "D. 802.11g"], answer: 0, explanation: "Wi-Fi 6 对应 802.11ax，引入 OFDMA、1024-QAM 等技术，提升高密度场景下的效率和容量。" },
    { id: 450, type: "single", category: "无线网络", paper: P, question: "无线接入点 AP 在 OSI 模型中工作在（　）层。", options: ["A. 数据链路层", "B. 物理层", "C. 网络层", "D. 传输层"], answer: 0, explanation: "AP 相当于无线交换机，根据 MAC 地址转发帧，工作在数据链路层，将无线站点接入有线网络。" },

    // —— 网络安全 ——
    { id: 451, type: "single", category: "网络安全", paper: P, question: "对称加密相比非对称加密的主要优点是（　）。", options: ["A. 加解密速度快", "B. 密钥分发简单", "C. 无需密钥", "D. 抗破解更强"], answer: 0, explanation: "对称加密算法简单、运算快，适合大量数据加密；非对称加密速度慢但便于密钥分发，常结合使用。" },
    { id: 452, type: "single", category: "网络安全", paper: P, question: "数字签名技术主要提供的安全服务是（　）。", options: ["A. 不可否认性和完整性", "B. 机密性", "C. 可用性", "D. 访问控制"], answer: 0, explanation: "数字签名用发送方私钥加密摘要，接收方用公钥验证，实现身份认证、数据完整性和不可否认性。" },
    { id: 453, type: "single", category: "网络安全", paper: P, question: "防火墙通常部署在网络中的（　）位置。", options: ["A. 内网与公网的边界", "B. 内网核心交换机", "C. 终端主机", "D. 服务器内部"], answer: 0, explanation: "防火墙部署在内网与公网（或不同安全区域）的边界，依据安全策略过滤进出流量。" },
    { id: 454, type: "single", category: "网络安全", paper: P, question: "IPSec 中，AH 协议提供的主要安全服务是（　）。", options: ["A. 数据完整性和认证", "B. 数据机密性", "C. 数据压缩", "D. 带宽管理"], answer: 0, explanation: "AH（认证头）提供数据完整性校验和源认证，不加密数据；ESP 提供机密性和完整性。" },
    { id: 455, type: "single", category: "网络安全", paper: P, question: "下列攻击中，属于拒绝服务（DoS）攻击的是（　）。", options: ["A. SYN Flood", "B. 中间人攻击", "C. 会话劫持", "D. 口令猜测"], answer: 0, explanation: "SYN Flood 通过发送大量伪造的 SYN 请求耗尽服务器资源，使其无法响应正常请求，属典型的 DoS 攻击。" },
    { id: 456, type: "single", category: "网络安全", paper: P, question: "HTTPS 协议默认使用的端口号是（　）。", options: ["A. 443", "B. 80", "C. 21", "D. 25"], answer: 0, explanation: "HTTPS 是 HTTP over SSL/TLS，默认端口 443；HTTP 端口 80，FTP 端口 21，SMTP 端口 25。" },
    { id: 457, type: "single", category: "网络安全", paper: P, question: "入侵检测系统（IDS）的主要功能是（　）。", options: ["A. 检测并告警入侵行为", "B. 主动阻断攻击", "C. 数据加密", "D. 路由转发"], answer: 0, explanation: "IDS 旁路监听网络流量，检测异常或攻击行为并告警，不主动阻断；主动阻断是 IPS（入侵防御系统）的功能。" },

    // —— 网络管理 ——
    { id: 458, type: "single", category: "网络管理", paper: P, question: "SNMP 默认使用的传输层协议是（　）。", options: ["A. UDP", "B. TCP", "C. ICMP", "D. IGMP"], answer: 0, explanation: "SNMP 基于 UDP，管理站用端口 162 接收 Trap，代理用端口 161 监听请求，开销小、适合网络管理。" },
    { id: 459, type: "single", category: "网络管理", paper: P, question: "SNMP 中，管理站向代理查询某个变量值使用的报文是（　）。", options: ["A. Get", "B. Set", "C. Trap", "D. Inform"], answer: 0, explanation: "Get 用于管理站向代理查询变量值；Set 用于设置；Trap 是代理主动向管理站上报事件。" },
    { id: 460, type: "single", category: "网络管理", paper: P, question: "网络管理 FCAPS 五个功能域不包括（　）。", options: ["A. 路由", "B. 故障管理", "C. 配置管理", "D. 安全管理"], answer: 0, explanation: "FCAPS 包括故障（Fault）、配置（Configuration）、计费（Accounting）、性能（Performance）、安全（Security）五个域，路由不属于管理功能域。" },
    { id: 461, type: "single", category: "网络管理", paper: P, question: "在 Windows 中，查看本机路由表的命令是（　）。", options: ["A. route print", "B. ipconfig", "C. ping", "D. tracert"], answer: 0, explanation: "route print 显示本机路由表；ipconfig 查看 IP 配置，ping 测连通性，tracert 追踪路径。" },
    { id: 462, type: "single", category: "网络管理", paper: P, question: "tracert 命令利用 ICMP 的（　）机制来逐跳追踪路径。", options: ["A. TTL 超时", "B. 回显应答", "C. 重定向", "D. 目的不可达"], answer: 0, explanation: "tracert 依次递增 TTL 发送探测包，沿途路由器在 TTL 减为 0 时返回超时报文，从而得知每一跳地址。" },
    { id: 463, type: "single", category: "网络管理", paper: P, question: "衡量网络传输延迟的常用指标是（　）。", options: ["A. 往返时延（RTT）", "B. 带宽", "C. 吞吐量", "D. 抖动"], answer: 0, explanation: "往返时延 RTT 是数据从发送到收到确认的时间，直观反映网络延迟；带宽、吞吐量衡量速率，抖动衡量延迟波动。" },

    // —— 网络操作系统 ——
    { id: 464, type: "single", category: "网络操作系统", paper: P, question: "Linux 中，列出当前目录下文件列表的命令是（　）。", options: ["A. ls", "B. cd", "C. cat", "D. rm"], answer: 0, explanation: "ls 列出目录内容；cd 切换目录，cat 查看文件内容，rm 删除文件。" },
    { id: 465, type: "single", category: "网络操作系统", paper: P, question: "Linux 中，修改文件权限的命令是（　）。", options: ["A. chmod", "B. chown", "C. chgrp", "D. passwd"], answer: 0, explanation: "chmod 修改文件读写执行权限；chown 修改属主，chgrp 修改属组，passwd 修改密码。" },
    { id: 466, type: "single", category: "网络操作系统", paper: P, question: "Windows Server 中，提供用户账户和域管理功能的是（　）。", options: ["A. Active Directory", "B. DNS", "C. DHCP", "D. IIS"], answer: 0, explanation: "Active Directory（活动目录）集中管理域中的用户、计算机和资源；DNS 做域名解析，DHCP 分配 IP，IIS 提供 Web 服务。" },
    { id: 467, type: "single", category: "网络操作系统", paper: P, question: "Linux 中，测试到目标主机的网络连通性使用（　）命令。", options: ["A. ping", "B. ifconfig", "C. netstat", "D. telnet"], answer: 0, explanation: "ping 发送 ICMP 回显请求测试连通性；ifconfig 查看接口，netstat 查看连接，telnet 远程登录。" },
    { id: 468, type: "single", category: "网络操作系统", paper: P, question: "Windows 中，清除本地 DNS 缓存的命令是（　）。", options: ["A. ipconfig /flushdns", "B. ipconfig /renew", "C. ipconfig /release", "D. ipconfig /displaydns"], answer: 0, explanation: "ipconfig /flushdns 清除 DNS 解析缓存；/renew 更新 DHCP 租约，/release 释放地址，/displaydns 显示缓存。" },
    { id: 469, type: "single", category: "网络操作系统", paper: P, question: "Linux 系统中，拥有最高权限的管理员账户是（　）。", options: ["A. root", "B. admin", "C. guest", "D. user"], answer: 0, explanation: "root 是 Linux 的超级用户，拥有系统全部权限；admin/guest/user 是普通账户名。" },

    // —— 网络规划与设计 ——
    { id: 470, type: "single", category: "网络规划与设计", paper: P, question: "分层网络设计中，核心层的主要职责是（　）。", options: ["A. 高速转发数据", "B. 接入终端用户", "C. 实施访问控制", "D. 策略路由"], answer: 0, explanation: "核心层负责全网数据的高速转发，要求高性能、高可靠，不承担用户接入和复杂策略；接入层连接终端，汇聚层实施策略。" },
    { id: 471, type: "single", category: "网络规划与设计", paper: P, question: "综合布线系统中，连接各楼层设备间到中心机房的子系统是（　）。", options: ["A. 干线子系统", "B. 水平子系统", "C. 工作区子系统", "D. 设备间子系统"], answer: 0, explanation: "干线（垂直）子系统连接设备间与楼层配线间，承担楼宇主干传输；水平子系统连接配线间到工作区信息点。" },
    { id: 472, type: "single", category: "网络规划与设计", paper: P, question: "网络冗余设计中，部署双机热备属于（　）冗余。", options: ["A. 设备冗余", "B. 链路冗余", "C. 电源冗余", "D. 数据冗余"], answer: 0, explanation: "双机热备通过备份关键设备实现设备级冗余，主设备故障时备用设备自动接管。" },
    { id: 473, type: "single", category: "网络规划与设计", paper: P, question: "服务器集群中，负载均衡的主要目的是（　）。", options: ["A. 分担流量、提高可用性", "B. 数据加密", "C. 数据备份", "D. 网络监控"], answer: 0, explanation: "负载均衡把请求分发到多台服务器，既分担流量避免单点过载，又在一台故障时继续提供服务，提高可用性。" },
    { id: 474, type: "single", category: "网络规划与设计", paper: P, question: "在 IP 地址规划中，服务器通常应采用（　）地址。", options: ["A. 静态 IP", "B. DHCP 动态分配", "C. 随机", "D. 临时"], answer: 0, explanation: "服务器需要固定的 IP 地址供客户端访问，因此应配置静态 IP；若用 DHCP 动态分配则地址可能变化导致无法访问。" },
    { id: 475, type: "single", category: "网络规划与设计", paper: P, question: "星型拓扑结构的主要缺点是（　）。", options: ["A. 中心节点故障会影响全网", "B. 布线量少", "C. 成本低", "D. 易于扩展"], answer: 0, explanation: "星型拓扑中所有节点都连到中心节点，中心节点一旦故障将导致全网瘫痪，这是其最主要缺点。" }
  ];
  A.forEach(q => window.QUESTIONS.push(q));
})();

/* 案例题 */
window.QUESTIONS = window.QUESTIONS || [];
(function () {
  const P = "paper4";
  const C = [
    {
      id: 1301, type: "case", category: "无线网络", paper: P,
      question: "【案例背景】某公司办公区需要部署无线网络，办公区面积约 300 平方米，要求无线信号覆盖所有工位，并实现员工移动办公时的漫游。现有无线 AP 若干台，需规划信道和 SSID。",
      parts: [
        { prompt: "（1）在 2.4GHz 频段，为避免相互干扰，相邻 AP 通常应使用哪三个互不重叠的信道？", type: "fill", blanks: ["1、6、11", "1 6 11", "1,6,11", "1/6/11"], score: 4, explanation: "2.4GHz 频段中 1、6、11 三个信道互不重叠，是常用的复用信道，相邻 AP 应错开使用以避免同频干扰。" },
        { prompt: "（2）员工在不同 AP 覆盖区域间移动时能无缝切换，这一过程称为？", type: "fill", blanks: ["漫游", "无线漫游", "roaming"], score: 3, explanation: "无线漫游指终端在移动过程中自动从当前 AP 切换到信号更强的相邻 AP，切换过程对上层应用透明。" },
        { prompt: "（3）为保证无线安全，除 WPA3 加密外，还可通过哪种方式隐藏网络名称？", type: "fill", blanks: ["关闭 SSID 广播", "隐藏 SSID", "关闭SSID广播"], score: 3, explanation: "关闭 SSID 广播后，无线网络名称不被主动广播，终端需手动输入 SSID 才能接入，可一定程度上提高安全性。" },
        { prompt: "（4）简述无线网络规划中信道规划的基本原则。", type: "qa", reference: "相邻 AP 使用互不重叠的信道（2.4GHz 用 1/6/11，5GHz 用不重叠信道），尽量减小同频干扰和邻频干扰；根据覆盖范围合理设置发射功率，避免过强功率造成越区干扰；必要时结合现场勘测调整信道和功率。", score: 5, explanation: "信道规划的核心是减少干扰、保证覆盖和容量，需兼顾信道复用距离与发射功率，做到覆盖无盲区、干扰最小化。" }
      ]
    },
    {
      id: 1302, type: "case", category: "网络安全", paper: P,
      question: "【案例背景】某单位内网有一台 Web 服务器 10.0.0.10，现要求在防火墙上配置访问控制策略：允许外网访问该服务器的 80 端口，拒绝外网访问服务器的其他所有端口，并记录访问日志。",
      parts: [
        { prompt: "（1）在防火墙上允许外网访问服务器 80 端口，应在安全策略中设置的目的端口是？", type: "fill", blanks: ["80", "http", "HTTP"], score: 3, explanation: "Web 服务默认使用 TCP 80 端口（HTTP），允许访问 80 端口即放行 Web 流量。" },
        { prompt: "（2）上述场景中，把 Web 服务器放在防火墙的哪个区域（DMZ 还是内网）更安全？", type: "fill", blanks: ["DMZ", "隔离区", "DMZ区"], score: 4, explanation: "对外提供服务的服务器应放在 DMZ（隔离区），与外网和内网都隔离，即使服务器被攻破也不会直接危及内网。" },
        { prompt: "（3）简述防火墙中「默认拒绝」安全策略的含义。", type: "qa", reference: "默认拒绝指防火墙对未被显式允许的流量一律丢弃，只放行策略中明确允许的通信，遵循最小权限原则，可最大限度减少攻击面。", score: 5, explanation: "默认拒绝是安全加固的基本原则，通过白名单方式放行合法流量，避免因策略遗漏而放行未授权访问。" },
        { prompt: "（4）为及时发现针对 Web 服务器的攻击，除防火墙外还应部署什么设备？", type: "qa", reference: "可部署入侵检测/防御系统（IDS/IPS）和 Web 应用防火墙（WAF），对 HTTP 流量进行深度检测，识别 SQL 注入、XSS 等 Web 攻击并告警或阻断。", score: 3, explanation: "传统防火墙主要基于 IP/端口过滤，难以识别应用层攻击，需结合 IDS/IPS 和 WAF 提供应用层防护。" }
      ]
    },
    {
      id: 1303, type: "case", category: "网络管理", paper: P,
      question: "【案例背景】某公司网络管理员发现某台主机 192.168.1.50 无法访问互联网，需要按层次化思路排查故障。该主机与网关、DNS 服务器之间通过交换机连接。",
      parts: [
        { prompt: "（1）首先应测试主机到网关的连通性，应使用什么命令？", type: "fill", blanks: ["ping", "ping 192.168.1.1"], score: 3, explanation: "ping 网关地址可检测主机与网关的链路连通性，是故障排查的第一步。" },
        { prompt: "（2）若 ping 网关正常但无法打开网页，且能 ping 通公网 IP，最可能的原因是？", type: "fill", blanks: ["DNS 故障", "域名解析失败", "DNS解析失败"], score: 4, explanation: "能 ping 通公网 IP 说明路由和连通性正常，无法打开网页说明域名无法解析为 IP，是 DNS 故障的典型表现。" },
        { prompt: "（3）在 Windows 中，跟踪数据包到达目标所经过路径的命令是？", type: "fill", blanks: ["tracert", "tracert 目标地址"], score: 3, explanation: "tracert 逐跳显示数据包经过的路由器，用于定位网络故障发生在哪一段。" },
        { prompt: "（4）简述网络故障排查的一般顺序。", type: "qa", reference: "遵循自下而上（物理层→链路层→网络层→应用层）或自顶而下的顺序逐层排查：先检查物理连接和指示灯，再检查 IP 配置（IP、掩码、网关、DNS），再测连通性（ping 网关、公网、域名），最后检查应用和服务。", score: 5, explanation: "分层排查可快速缩小故障范围，避免盲目操作；先确认基础连通性，再定位到具体层次和服务。" }
      ]
    },
    {
      id: 1304, type: "case", category: "交换技术", paper: P,
      question: "【案例背景】某企业核心交换机上划分了 VLAN 10、VLAN 20、VLAN 30，三层交换机作为各 VLAN 的网关，现要求 VLAN 10 不能访问 VLAN 20，但能访问 VLAN 30。",
      parts: [
        { prompt: "（1）在三层交换机上，VLAN 间通信需要配置的虚拟接口是？", type: "fill", blanks: ["VLANIF", "Vlanif", "SVI"], score: 4, explanation: "VLANIF（Cisco 称 SVI）是 VLAN 的三层虚拟接口，配置 IP 地址后作为该 VLAN 的网关，实现 VLAN 间路由。" },
        { prompt: "（2）要实现 VLAN 10 禁止访问 VLAN 20，应在三层交换机上配置什么来过滤流量？", type: "fill", blanks: ["ACL", "访问控制列表", "acl"], score: 4, explanation: "在三层交换机上配置 ACL（访问控制列表），并应用到相应 VLANIF 接口，可基于源/目的地址过滤 VLAN 间流量。" },
        { prompt: "（3）在交换机上把接口 GigabitEthernet0/0/1 划入 VLAN 10，需依次执行哪两条命令？", type: "fill", blanks: ["port link-type access 和 port default vlan 10"], score: 5, explanation: "华为交换机上先执行 port link-type access 设置端口为接入类型，再执行 port default vlan 10 划入 VLAN 10。" },
        { prompt: "（4）简述二层交换机与三层交换机在 VLAN 间通信中的角色差异。", type: "qa", reference: "二层交换机只能在同一 VLAN 内根据 MAC 转发，无法实现 VLAN 间通信；三层交换机具备路由功能，通过 VLANIF 接口作为网关，在 VLAN 之间转发数据，实现跨 VLAN 互通。", score: 3, explanation: "跨 VLAN 通信必须经过三层路由，二层交换机无此能力，需借助三层交换机或路由器实现。" }
      ]
    },
    {
      id: 1305, type: "case", category: "网络规划与设计", paper: P,
      question: "【案例背景】某单位申请到一个 B 类网络 172.16.0.0/16，现有 8 个部门，每个部门约 200 台主机，需要为每个部门划分一个子网，并留有余量便于扩展。",
      parts: [
        { prompt: "（1）为满足每个部门 200 台主机，每个子网至少需要借用主机位中的多少位作为子网位？", type: "fill", blanks: ["3", "3位", "三位"], score: 4, explanation: "200 台主机需主机位 ≥8 位（2^8-2=254≥200），从 /16 借位划分 8 个子网需子网位 ≥3 位（2^3=8），此时子网掩码为 /19，主机位 13 位，远超需求。" },
        { prompt: "（2）借用 3 位子网位后，子网掩码应写为？", type: "fill", blanks: ["255.255.224.0", "/19", "19"], score: 4, explanation: "原 /16 借用 3 位变为 /19，即 255.255.224.0（第三个字节前 3 位为 1）。" },
        { prompt: "（3）第一个子网的网络地址是多少？", type: "fill", blanks: ["172.16.0.0", "172.16.0.0/19"], score: 3, explanation: "子网位为 0 的第一个子网网络地址为 172.16.0.0，掩码 /19。" },
        { prompt: "（4）简述划分子网时需要考虑的主要因素。", type: "qa", reference: "需考虑当前及未来扩展的主机数量（确定主机位）、子网数量（确定子网位）、地址利用率、路由汇总需求、IP 地址是否私有/公网、以及网络拓扑和管理需要等。", score: 4, explanation: "合理的子网规划既要满足当前规模，又要预留扩展空间，同时兼顾地址利用率和管理便利性。" }
      ]
    }
  ];
  C.forEach(q => window.QUESTIONS.push(q));
})();

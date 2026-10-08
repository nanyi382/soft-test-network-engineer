/* 真题模拟卷（一）：75 选择 + 5 案例 */
window.QUESTIONS = window.QUESTIONS || [];
(function () {
  const P = "paper1";
  const A = [
    // —— 计算机网络体系结构 ——
    { id: 101, type: "single", category: "计算机网络概论", paper: P, question: "在 OSI 参考模型中，负责为分组在网络上选择路由、实现逻辑寻址的是哪一层？", options: ["A. 网络层", "B. 数据链路层", "C. 传输层", "D. 会话层"], answer: 0, explanation: "网络层负责逻辑寻址和路由选择，典型设备是路由器，核心协议是 IP。数据链路层负责物理寻址（MAC），传输层负责端到端可靠传输。" },
    { id: 102, type: "single", category: "计算机网络概论", paper: P, question: "TCP/IP 协议族中，传输层的两个核心协议是（　）。", options: ["A. IP 和 ICMP", "B. TCP 和 UDP", "C. ARP 和 RARP", "D. HTTP 和 FTP"], answer: 1, explanation: "传输层核心协议是 TCP（面向连接、可靠）和 UDP（无连接、不可靠）。IP、ICMP、ARP 属于网络层；HTTP、FTP 属于应用层。" },
    { id: 103, type: "single", category: "计算机网络概论", paper: P, question: "下列协议中，属于应用层协议的是（　）。", options: ["A. TCP", "B. UDP", "C. FTP", "D. IP"], answer: 2, explanation: "FTP（文件传输协议）运行在应用层。TCP、UDP 是传输层，IP 是网络层。" },
    { id: 104, type: "single", category: "计算机网络概论", paper: P, question: "OSI 参考模型中，将比特流组织成帧、并进行差错检测的是（　）。", options: ["A. 物理层", "B. 数据链路层", "C. 网络层", "D. 传输层"], answer: 1, explanation: "数据链路层将物理层的比特流封装成帧，通过帧尾的 FCS 进行差错检测，并提供 MAC 寻址。" },
    { id: 105, type: "single", category: "计算机网络概论", paper: P, question: "在 OSI 模型中，传输层的数据单元称为（　）。", options: ["A. 帧", "B. 分组", "C. 报文段", "D. 比特"], answer: 2, explanation: "传输层的协议数据单元 PDU 称为报文段（Segment）。数据链路层是帧，网络层是分组/包，物理层是比特。" },
    { id: 106, type: "single", category: "计算机网络概论", paper: P, question: "TCP 协议建立连接采用的握手过程是（　）。", options: ["A. 两次握手", "B. 三次握手", "C. 四次握手", "D. 不需要握手"], answer: 1, explanation: "TCP 采用三次握手建立连接（SYN→SYN+ACK→ACK），以保证双方收发能力正常、同步初始序号。" },
    { id: 107, type: "single", category: "计算机网络概论", paper: P, question: "下列协议中，基于 UDP 的应用层协议是（　）。", options: ["A. HTTP", "B. FTP", "C. DNS", "D. SMTP"], answer: 2, explanation: "DNS 查询通常使用 UDP（端口 53），也支持 TCP。HTTP、FTP、SMTP 均基于 TCP。" },
    { id: 108, type: "single", category: "计算机网络概论", paper: P, question: "TCP 报文头中，用于流量控制的字段是（　）。", options: ["A. 序号", "B. 确认号", "C. 窗口大小", "D. 校验和"], answer: 2, explanation: "窗口（Window）字段用于流量控制，表示接收方还能接收的字节数；序号和确认号用于可靠传输和重传。" },
    { id: 109, type: "single", category: "计算机网络概论", paper: P, question: "在 TCP/IP 模型中，ARP 协议的作用是（　）。", options: ["A. 将域名解析为 IP 地址", "B. 将 IP 地址解析为 MAC 地址", "C. 将 MAC 地址解析为 IP 地址", "D. 检测主机是否可达"], answer: 1, explanation: "ARP 将 IP 地址解析为 MAC 地址；RARP 反向解析；DNS 解析域名；ICMP（ping）检测可达性。" },
    { id: 110, type: "single", category: "计算机网络概论", paper: P, question: "OSI 七层模型中，提供端到端可靠传输、负责报文分段与重组的是（　）。", options: ["A. 网络层", "B. 传输层", "C. 会话层", "D. 表示层"], answer: 1, explanation: "传输层提供端到端的连接、可靠传输、流量控制和分段重组。TCP 是其典型协议。" },
    // —— 数据通信基础 ——
    { id: 111, type: "single", category: "数据通信基础", paper: P, question: "在数据通信中，将数字信号转换为模拟信号以便在电话线上传输的技术称为（　）。", options: ["A. 编码", "B. 调制", "C. 解调", "D. 复用"], answer: 1, explanation: "调制（Modulation）是把数字信号转换为模拟信号；解调是反向过程；调制解调器（Modem）同时完成两者。" },
    { id: 112, type: "single", category: "数据通信基础", paper: P, question: "衡量数据传输速率的常用单位中，1Mbps 表示（　）。", options: ["A. 每秒 1000 字节", "B. 每秒 1024 比特", "C. 每秒 10^6 比特", "D. 每秒 10^6 字节"], answer: 2, explanation: "Mbps 表示每秒兆比特（10^6 比特/秒），是通信速率的常用单位，注意与字节单位 MB（兆字节）区分。" },
    { id: 113, type: "single", category: "数据通信基础", paper: P, question: "通信方式中，数据只能在一个方向上传送，称为（　）。", options: ["A. 单工", "B. 半双工", "C. 全双工", "D. 异步"], answer: 0, explanation: "单工只能单向传输（如广播）；半双工可双向但不能同时；全双工可同时双向传输。" },
    { id: 114, type: "single", category: "数据通信基础", paper: P, question: "在数字传输中，采用差分曼彻斯特编码的主要优点之一是（　）。", options: ["A. 传输速率更高", "B. 自带时钟、抗干扰强", "C. 不需要线路", "D. 减少带宽"], answer: 1, explanation: "曼彻斯特/差分曼彻斯特编码通过每比特中部的跳变携带时钟信息，便于接收方同步，抗干扰能力强，但带宽利用率减半。" },
    { id: 115, type: "single", category: "数据通信基础", paper: P, question: "下列传输介质中，抗电磁干扰能力最强的是（　）。", options: ["A. 双绞线", "B. 同轴电缆", "C. 光纤", "D. 电话线"], answer: 2, explanation: "光纤以光信号传输，不受电磁干扰，带宽高、传输距离远，抗干扰能力最强。" },
    { id: 116, type: "single", category: "数据通信基础", paper: P, question: "把多条低速信道复用为一条高速信道的技术是（　）。", options: ["A. 调制", "B. 编码", "C. 复用", "D. 交换"], answer: 2, explanation: "复用（Multiplexing）把多条低速信道合并成一条高速信道，常见有频分复用 FDM、时分复用 TDM、波分复用 WDM。" },
    { id: 117, type: "single", category: "数据通信基础", paper: P, question: "在串行通信中，以起始位和停止位来界定字符的传输方式称为（　）。", options: ["A. 同步传输", "B. 异步传输", "C. 并行传输", "D. 基带传输"], answer: 1, explanation: "异步传输用起始位和停止位界定每个字符，字符间可不同步；同步传输以时钟同步连续传送数据块。" },
    { id: 118, type: "single", category: "数据通信基础", paper: P, question: "PCM（脉冲编码调制）的三个基本步骤依次是（　）。", options: ["A. 采样、量化、编码", "B. 量化、采样、编码", "C. 编码、采样、量化", "D. 采样、编码、量化"], answer: 0, explanation: "PCM 将模拟信号数字化需依次经过采样（Sampling）、量化（Quantizing）、编码（Coding）三步。" },
    // —— 局域网与以太网 ——
    { id: 119, type: "single", category: "局域网", paper: P, question: "传统共享式以太网采用哪种介质访问控制方法？", options: ["A. CSMA/CA", "B. CSMA/CD", "C. 令牌环", "D. TDMA"], answer: 1, explanation: "传统以太网采用 CSMA/CD（载波监听多路访问/冲突检测），无线局域网采用 CSMA/CA（冲突避免）。" },
    { id: 120, type: "single", category: "局域网", paper: P, question: "以太网帧的最小长度（不含前导码）是（　）。", options: ["A. 46 字节", "B. 64 字节", "C. 512 字节", "D. 1518 字节"], answer: 1, explanation: "以太网帧最小 64 字节（含目的/源地址、类型、数据 46~1500、FCS），最大 1518 字节。" },
    { id: 121, type: "single", category: "局域网", paper: P, question: "以太网交换机工作在 OSI 的（　）层。", options: ["A. 物理层", "B. 数据链路层", "C. 网络层", "D. 传输层"], answer: 1, explanation: "交换机基于 MAC 地址转发帧，工作在数据链路层；路由器基于 IP 地址转发，工作在网络层。" },
    { id: 122, type: "single", category: "局域网", paper: P, question: "IEEE 802.3 标准定义的局域网是（　）。", options: ["A. 以太网", "B. 令牌环", "C. 无线局域网", "D. FDDI"], answer: 0, explanation: "IEEE 802.3 定义以太网（CSMA/CD）；802.5 令牌环；802.11 无线局域网；FDDI 由 ANSI 定义。" },
    { id: 123, type: "single", category: "局域网", paper: P, question: "MAC 地址的长度是（　）位。", options: ["A. 32", "B. 48", "C. 64", "D. 128"], answer: 1, explanation: "MAC 地址（物理地址）长度 48 位，通常表示为 6 组十六进制数，如 00-1A-2B-3C-4D-5E。" },
    { id: 124, type: "single", category: "局域网", paper: P, question: "快速以太网 100BASE-TX 使用的传输介质是（　）。", options: ["A. 同轴电缆", "B. 5 类双绞线", "C. 光纤", "D. 电话线"], answer: 1, explanation: "100BASE-TX 使用两对 5 类双绞线，最远 100 米；100BASE-FX 使用光纤。" },
    // —— 网络互联与 IP 编址 ——
    { id: 125, type: "single", category: "网络互连", paper: P, question: "IPv4 地址中，C 类地址的默认子网掩码是（　）。", options: ["A. 255.0.0.0", "B. 255.255.0.0", "C. 255.255.255.0", "D. 255.255.255.255"], answer: 2, explanation: "A 类默认掩码 255.0.0.0，B 类 255.255.0.0，C 类 255.255.255.0。C 类地址前 3 字节为网络位。" },
    { id: 126, type: "single", category: "网络互连", paper: P, question: "IP 地址 192.168.1.0/26 可划分为几个子网，每个子网最多容纳多少台主机？", options: ["A. 2 个子网，62 台", "B. 4 个子网，62 台", "C. 4 个子网，64 台", "D. 2 个子网，126 台"], answer: 1, explanation: "C 类默认 /24，借 2 位做子网位得 2^2=4 个子网；主机位剩 6 位，每子网主机 2^6-2=62 台。" },
    { id: 127, type: "single", category: "网络互连", paper: P, question: "下列 IP 地址中，属于私有地址的是（　）。", options: ["A. 172.32.1.1", "B. 192.168.10.1", "C. 11.0.0.1", "D. 172.15.1.1"], answer: 1, explanation: "私有地址段：10.0.0.0/8、172.16.0.0/12（172.16~172.31）、192.168.0.0/16。192.168.10.1 属于私有地址。" },
    { id: 128, type: "single", category: "网络互连", paper: P, question: "子网掩码 255.255.255.224 对应的前缀长度（CIDR）是（　）。", options: ["A. /26", "B. /27", "C. /28", "D. /29"], answer: 1, explanation: "255.255.255.224 的二进制前 27 位为 1，对应 /27，主机位 5 位，每子网 30 台主机。" },
    { id: 129, type: "single", category: "网络互连", paper: P, question: "ICMP 协议的主要用途是（　）。", options: ["A. 文件传输", "B. 差错报告与控制信息", "C. 邮件发送", "D. 网页浏览"], answer: 1, explanation: "ICMP（网际控制报文协议）用于传递差错报告和控制信息，如 ping 使用的回显请求/应答、目标不可达等。" },
    { id: 130, type: "single", category: "网络互连", paper: P, question: "IPv6 地址的长度是（　）位。", options: ["A. 32", "B. 64", "C. 128", "D. 256"], answer: 2, explanation: "IPv6 地址长度为 128 位，通常表示为 8 组十六进制数，如 2001:db8::1。" },
    { id: 131, type: "single", category: "网络互连", paper: P, question: "NAT 技术的主要作用是（　）。", options: ["A. 加密数据", "B. 解决 IPv4 地址不足、隐藏内部网络", "C. 提高网速", "D. 防止病毒"], answer: 1, explanation: "NAT（网络地址转换）把内部私有地址转换为公网地址，缓解 IPv4 地址枯竭，同时隐藏内部网络结构。" },
    { id: 132, type: "single", category: "网络互连", paper: P, question: "IP 首部中 TTL 字段的作用是（　）。", options: ["A. 标识上层协议", "B. 防止分组在网络中无限循环", "C. 表示优先级", "D. 校验首部"], answer: 1, explanation: "TTL（生存时间）每经过一个路由器减 1，减到 0 时分组被丢弃，防止分组在网络中无限循环。" },
    { id: 133, type: "single", category: "网络互连", paper: P, question: "在无分类编址中，地址块 10.0.0.0/8 共有多少个可用主机地址？", options: ["A. 2^24 - 2", "B. 2^24", "C. 2^8 - 2", "D. 2^16 - 2"], answer: 0, explanation: "/8 主机位 24 位，主机地址数为 2^24 - 2（去掉全 0 网络地址和全 1 广播地址）。" },
    // —— 路由协议 ——
    { id: 134, type: "single", category: "网络互连", paper: P, question: "RIP 协议基于哪种算法计算路由？", options: ["A. 距离矢量算法", "B. 链路状态算法", "C. 路径矢量算法", "D. 最短路径优先"], answer: 0, explanation: "RIP 采用距离矢量算法，以跳数（hop）为度量，最大 15 跳。OSPF 采用链路状态算法（SPF）。" },
    { id: 135, type: "single", category: "网络互连", paper: P, question: "RIP 协议的最大有效跳数是（　）。", options: ["A. 8", "B. 15", "C. 16", "D. 255"], answer: 1, explanation: "RIP 以跳数衡量距离，最大 15 跳，16 跳表示不可达，因此 RIP 只适用于小型网络。" },
    { id: 136, type: "single", category: "网络互连", paper: P, question: "OSPF 协议属于下列哪类路由协议？", options: ["A. 距离矢量", "B. 链路状态", "C. 路径矢量", "D. 静态"], answer: 1, explanation: "OSPF（开放最短路径优先）是链路状态路由协议，采用 Dijkstra（SPF）算法，收敛快、支持分层区域。" },
    { id: 137, type: "single", category: "网络互连", paper: P, question: "BGP 协议用于（　）。", options: ["A. 局域网内部", "B. 自治系统之间", "C. 同一路由器内部", "D. 家庭网络"], answer: 1, explanation: "BGP（边界网关协议）是自治系统（AS）之间的路由协议，属于路径矢量协议，是互联网核心路由协议。" },
    { id: 138, type: "single", category: "网络互连", paper: P, question: "OSPF 中，一台路由器根据什么计算最短路径树？", options: ["A. 跳数", "B. 链路状态数据库（LSDB）", "C. 带宽利用率", "D. 延迟"], answer: 1, explanation: "OSPF 路由器通过交换 LSA 建立链路状态数据库（LSDB），再以 SPF 算法计算到各网络的最短路径树。" },
    { id: 139, type: "single", category: "网络互连", paper: P, question: "静态路由的默认管理距离（AD）通常比动态路由更小，这表示（　）。", options: ["A. 优先级更低", "B. 优先级更高，更优先被使用", "C. 度量更大", "D. 不可用"], answer: 1, explanation: "管理距离（AD）越小优先级越高。静态路由默认 AD 为 1，直连为 0，动态协议较大，因此静态路由优先。" },
    { id: 140, type: "single", category: "网络互连", paper: P, question: "路由器转发 IP 分组的依据是（　）。", options: ["A. MAC 地址", "B. 路由表中的目标网络地址", "C. 端口号", "D. 主机名"], answer: 1, explanation: "路由器根据目的 IP 地址查找路由表，选择最佳路径（最长前缀匹配）转发分组。" },
    { id: 141, type: "single", category: "网络互连", paper: P, question: "在 OSPF 中，区域 0（骨干区域）的作用是（　）。", options: ["A. 连接所有其他区域", "B. 存放用户数据", "C. 提供 DHCP", "D. 无特殊作用"], answer: 0, explanation: "OSPF 中所有非骨干区域都必须与骨干区域（Area 0）相连，骨干区域负责区域间路由信息的传递。" },
    // —— 交换技术 ——
    { id: 142, type: "single", category: "局域网", paper: P, question: "VLAN 的作用是（　）。", options: ["A. 提高网速", "B. 在二层逻辑上隔离广播域", "C. 加密传输", "D. 增加端口数量"], answer: 1, explanation: "VLAN（虚拟局域网）在二层把交换机逻辑划分为多个广播域，隔离广播、增强安全性。" },
    { id: 143, type: "single", category: "局域网", paper: P, question: "IEEE 802.1Q 标准用于（　）。", options: ["A. 无线局域网", "B. VLAN 干道封装", "C. 生成树", "D. 链路聚合"], answer: 1, explanation: "IEEE 802.1Q 是 VLAN 干道（Trunk）封装标准，在以太网帧中插入 4 字节 VLAN 标签；STP 是 802.1D。" },
    { id: 144, type: "single", category: "局域网", paper: P, question: "生成树协议（STP）的主要作用是（　）。", options: ["A. 提高带宽", "B. 消除二层环路", "C. 加快转发", "D. 实现路由"], answer: 1, explanation: "STP 通过阻塞冗余链路消除二层交换网络中的环路，防止广播风暴，同时提供链路冗余备份。" },
    { id: 145, type: "single", category: "局域网", paper: P, question: "交换机通过什么表实现帧的转发？", options: ["A. 路由表", "B. MAC 地址表", "C. ARP 表", "D. DNS 表"], answer: 1, explanation: "交换机学习源 MAC 地址建立 MAC 地址表，转发时查表按目的 MAC 决定从哪个端口转发；未知则泛洪。" },
    { id: 146, type: "single", category: "局域网", paper: P, question: "三层交换机与二层交换机相比，其特点是（　）。", options: ["A. 只有更多端口", "B. 具备路由功能", "C. 只支持无线", "D. 只能工作在物理层"], answer: 1, explanation: "三层交换机在二层交换基础上具备 IP 路由转发能力，可实现 VLAN 间路由，转发性能高于路由器。" },
    { id: 147, type: "single", category: "局域网", paper: P, question: "VLAN 间的通信必须经过（　）。", options: ["A. 二层交换机", "B. 路由器或三层交换机", "C. 集线器", "D. 中继器"], answer: 1, explanation: "不同 VLAN 属于不同网段，VLAN 间通信需要三层设备（路由器或三层交换机）进行路由转发。" },
    // —— 网络安全 ——
    { id: 148, type: "single", category: "网络安全", paper: P, question: "对称加密算法中，加密和解密使用（　）。", options: ["A. 不同的密钥", "B. 相同的密钥", "C. 公开密钥", "D. 不需要密钥"], answer: 1, explanation: "对称加密（如 DES、AES）加密和解密使用同一密钥；非对称加密使用公钥/私钥对。" },
    { id: 149, type: "single", category: "网络安全", paper: P, question: "下列算法中，属于非对称加密算法的是（　）。", options: ["A. DES", "B. AES", "C. RSA", "D. RC4"], answer: 2, explanation: "RSA 是典型的非对称（公钥）加密算法；DES、AES、RC4 均为对称加密算法。" },
    { id: 150, type: "single", category: "网络安全", paper: P, question: "数字签名主要提供（　）。", options: ["A. 数据保密性", "B. 数据完整性和不可否认性", "C. 访问控制", "D. 防火墙功能"], answer: 1, explanation: "数字签名用发送方私钥加密摘要，接收方用公钥验证，保证数据完整性、身份认证和不可否认性。" },
    { id: 151, type: "single", category: "网络安全", paper: P, question: "防火墙通常部署在（　）。", options: ["A. 内部网络与外部网络的边界", "B. 任意两台主机之间", "C. 交换机内部", "D. 路由器芯片内"], answer: 0, explanation: "防火墙部署在内部网络与外部（不可信）网络的边界，依据安全策略过滤进出的数据流量。" },
    { id: 152, type: "single", category: "网络安全", paper: P, question: "VPN 的核心功能是（　）。", options: ["A. 提高本地网速", "B. 在公共网络上建立安全的加密通道", "C. 存储数据", "D. 管理域名"], answer: 1, explanation: "VPN（虚拟专用网）利用隧道和加密技术在公共网络上建立安全的逻辑专用通道。" },
    { id: 153, type: "single", category: "网络安全", paper: P, question: "HTTPS 是在 HTTP 基础上增加了（　）协议。", options: ["A. SSL/TLS", "B. IPsec", "C. SSH", "D. SNMP"], answer: 0, explanation: "HTTPS 通过 SSL/TLS 对 HTTP 通信进行加密和身份认证，默认端口 443。" },
    { id: 154, type: "single", category: "网络安全", paper: P, question: "下列攻击中，属于拒绝服务攻击的是（　）。", options: ["A. SQL 注入", "B. DDoS", "C. 钓鱼", "D. 木马"], answer: 1, explanation: "DDoS（分布式拒绝服务）通过大量请求耗尽目标资源使其无法正常服务；SQL 注入、钓鱼、木马属于其他攻击类型。" },
    // —— 网络管理 ——
    { id: 155, type: "single", category: "网络管理", paper: P, question: "SNMP 协议运行在（　）之上。", options: ["A. TCP", "B. UDP", "C. IP 直接", "D. ICMP"], answer: 1, explanation: "SNMP（简单网络管理协议）基于 UDP，代理端口 161，管理站接收 Trap 的端口 162。" },
    { id: 156, type: "single", category: "网络管理", paper: P, question: "SNMP 中，管理信息库（MIB）用于（　）。", options: ["A. 存储被管理对象的信息", "B. 加密数据", "C. 路由选择", "D. 域名解析"], answer: 0, explanation: "MIB 是层次化、结构化的被管对象集合，每个对象有唯一 OID，供管理站查询和设置。" },
    { id: 157, type: "single", category: "网络管理", paper: P, question: "用于测试主机之间连通性的命令是（　）。", options: ["A. ping", "B. tracert", "C. netstat", "D. ipconfig"], answer: 0, explanation: "ping 发送 ICMP 回显请求测试连通性；tracert 跟踪路由；netstat 查看连接；ipconfig 查看 IP 配置。" },
    { id: 158, type: "single", category: "网络管理", paper: P, question: "在 Windows 中，用于跟踪数据包到达目标所经路由的命令是（　）。", options: ["A. ping", "B. tracert", "C. ipconfig", "D. arp"], answer: 1, explanation: "tracert（Linux 为 traceroute）逐跳显示数据包到达目标经过的路由器路径。" },
    { id: 159, type: "single", category: "网络管理", paper: P, question: "网络管理的五大功能域（FCAPS）不包括（　）。", options: ["A. 故障管理", "B. 配置管理", "C. 计费管理", "D. 加密管理"], answer: 3, explanation: "FCAPS 指故障（Fault）、配置（Configuration）、计费（Accounting）、性能（Performance）、安全（Security）管理，无加密管理。" },
    // —— 无线网络 ——
    { id: 160, type: "single", category: "无线通信网", paper: P, question: "IEEE 802.11 标准定义的是（　）。", options: ["A. 以太网", "B. 无线局域网", "C. 蓝牙", "D. 光纤通信"], answer: 1, explanation: "IEEE 802.11 定义无线局域网（WLAN）标准，常见 802.11a/b/g/n/ac/ax 等。" },
    { id: 161, type: "single", category: "无线通信网", paper: P, question: "无线局域网通常采用的频段是（　）。", options: ["A. 2.4GHz 和 5GHz", "B. 900MHz", "C. 100MHz", "D. 1GHz"], answer: 0, explanation: "WLAN 主要使用 2.4GHz 和 5GHz 两个 ISM 免授权频段，802.11n/ac/ax 等标准在不同频段工作。" },
    { id: 162, type: "single", category: "无线通信网", paper: P, question: "无线网络的介质访问控制采用（　）。", options: ["A. CSMA/CD", "B. CSMA/CA", "C. 令牌", "D. 轮询"], answer: 1, explanation: "无线网络因无法可靠检测冲突，采用 CSMA/CA（冲突避免），通过 RTS/CTS 等机制减少冲突。" },
    { id: 163, type: "single", category: "无线通信网", paper: P, question: "WPA2 相比 WEP 的主要改进是（　）。", options: ["A. 传输更快", "B. 更强的加密与认证（AES/802.1X）", "C. 无需密码", "D. 支持更多设备"], answer: 1, explanation: "WPA2 采用 AES 加密和 802.1X 认证（或 PSK），安全性远高于易被破解的 WEP。" },
    // —— 网络规划与设计 ——
    { id: 164, type: "single", category: "网络规划和设计", paper: P, question: "网络拓扑结构中，可靠性最高、任一点故障不影响全网通信的是（　）。", options: ["A. 总线型", "B. 星型", "C. 环型", "D. 全互联（网状）型"], answer: 3, explanation: "网状（全互联）拓扑任意两点直连，冗余最高、可靠性最好，但成本高；星型中心点故障影响大。" },
    { id: 165, type: "single", category: "网络规划和设计", paper: P, question: "综合布线系统中，连接各楼层配线架与楼层信息插座之间的子系统是（　）。", options: ["A. 建筑群子系统", "B. 垂直（干线）子系统", "C. 水平子系统", "D. 设备间子系统"], answer: 2, explanation: "水平子系统连接楼层配线间（FD）与工作区信息插座；垂直子系统连接设备间与各楼层配线间。" },
    { id: 166, type: "single", category: "网络规划和设计", paper: P, question: "网络设计时，为关键业务提供冗余备份属于（　）。", options: ["A. 可靠性设计", "B. 安全性设计", "C. 可扩展性设计", "D. 经济性设计"], answer: 0, explanation: "通过冗余链路、冗余设备、负载均衡等手段提高网络可靠性，保证关键业务不中断。" },
    // —— 网络操作系统 ——
    { id: 167, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "DHCP 协议的作用是（　）。", options: ["A. 域名解析", "B. 自动分配 IP 地址等配置", "C. 文件传输", "D. 邮件发送"], answer: 1, explanation: "DHCP 自动为客户端分配 IP 地址、子网掩码、网关、DNS 等配置，基于 UDP，端口 67/68。" },
    { id: 168, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "DNS 的作用是（　）。", options: ["A. 分配 IP", "B. 将域名解析为 IP 地址", "C. 加密", "D. 路由"], answer: 1, explanation: "DNS（域名系统）把便于记忆的域名解析为 IP 地址，基于 UDP/TCP 端口 53。" },
    { id: 169, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "FTP 协议默认使用的两个端口是（　）。", options: ["A. 20 和 21", "B. 80 和 443", "C. 25 和 110", "D. 23 和 22"], answer: 0, explanation: "FTP 控制连接使用 21 端口，数据传输使用 20 端口（主动模式）。80/443 为 HTTP/HTTPS。" },
    { id: 170, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "在 Linux 中，查看网络接口配置信息的命令是（　）。", options: ["A. ifconfig / ip addr", "B. dir", "C. cat", "D. ls"], answer: 0, explanation: "Linux 中 ifconfig（或新命令 ip addr）查看网络接口配置；Windows 对应 ipconfig。" },
    // —— 广域网技术 ——
    { id: 171, type: "single", category: "网络互连", paper: P, question: "PPP 协议工作在哪一层？", options: ["A. 物理层", "B. 数据链路层", "C. 网络层", "D. 应用层"], answer: 1, explanation: "PPP（点对点协议）是数据链路层协议，用于点对点链路，支持认证、多协议封装。" },
    { id: 172, type: "single", category: "网络互连", paper: P, question: "HDLC 是（　）。", options: ["A. 面向字符的同步协议", "B. 面向比特的同步协议", "C. 异步协议", "D. 路由协议"], answer: 1, explanation: "HDLC（高级数据链路控制）是面向比特的同步数据链路层协议，广泛用于广域网。" },
    { id: 173, type: "single", category: "网络互连", paper: P, question: "帧中继（Frame Relay）工作在 OSI 的（　）层。", options: ["A. 物理层", "B. 数据链路层", "C. 网络层", "D. 传输层"], answer: 1, explanation: "帧中继是数据链路层技术，通过虚电路（DLCI）提供面向连接的分组交换。" },
    { id: 174, type: "single", category: "网络互连", paper: P, question: "下列广域网技术中，采用异步传输模式、固定 53 字节信元的是（　）。", options: ["A. 帧中继", "B. ATM", "C. X.25", "D. PPP"], answer: 1, explanation: "ATM（异步传输模式）使用固定长度 53 字节的信元（5 字节头 + 48 字节载荷）进行传输。" },
    { id: 175, type: "single", category: "网络互连", paper: P, question: "X.25 协议栈中，负责分组层功能的是（　）。", options: ["A. 物理层", "B. 帧层（LAPB）", "C. 分组层（PLP）", "D. 应用层"], answer: 2, explanation: "X.25 分三层：物理层、数据链路层（LAPB）、分组层（PLP），其中 PLP 负责虚电路和分组传输。" },
  ];
  A.forEach(q => window.QUESTIONS.push(q));
})();

/* —— 案例题 —— */
(function () {
  const P = "paper1";
  const C = [
    {
      id: 1001, type: "case", category: "网络规划和设计", paper: P,
      question: "【案例背景】某企业申请到一个 C 类网络地址 192.168.10.0/24，公司有 4 个部门，需要将网络平均划分为 4 个子网，分别分配给各部门使用，并要求子网之间相互隔离。",
      parts: [
        { prompt: "（1）需要从主机位借用多少位来划分出 4 个子网？", type: "fill", blanks: ["2", "2位", "两位"], score: 3, explanation: "2^n ≥ 4，n=2，即需借用 2 位主机位作为子网位，可划分 2^2=4 个子网。" },
        { prompt: "（2）划分后的子网掩码是多少？", type: "fill", blanks: ["255.255.255.192", "/26", "26"], score: 4, explanation: "默认 /24 借用 2 位后变为 /26，即 255.255.255.192。" },
        { prompt: "（3）每个子网最多可容纳多少台可用主机？", type: "fill", blanks: ["62", "62台"], score: 4, explanation: "主机位剩 6 位，可用主机数 = 2^6 - 2 = 62（去除网络地址和广播地址）。" },
        { prompt: "（4）简述划分子网的主要作用。", type: "qa", reference: "隔离广播域、减少广播流量；便于分部门管理；提高网络安全性和可控性；提高 IP 地址利用效率。", score: 4, explanation: "划分子网将大的广播域拆分为多个小子网，缩小广播域范围，减少广播风暴影响，同时便于按部门进行权限隔离和管理。" }
      ]
    },
    {
      id: 1002, type: "case", category: "局域网", paper: P,
      question: "【案例背景】某公司使用 Cisco 交换机组建局域网，需要在交换机上划分 VLAN 10（财务部）和 VLAN 20（技术部），把接口 FastEthernet0/1 划入 VLAN 10，并实现交换机之间的 VLAN 干道互连。",
      parts: [
        { prompt: "（1）在全局配置模式下，创建 VLAN 10 的命令是？", type: "fill", blanks: ["vlan 10", "vlan10"], score: 3, explanation: "在全局配置模式输入 vlan 10 进入 VLAN 配置子模式，即创建了 VLAN 10。" },
        { prompt: "（2）将接口 FastEthernet0/1 设置为 Access 并划入 VLAN 10 的命令是？", type: "fill", blanks: ["switchport access vlan 10", "switchport access vlan10"], score: 4, explanation: "进入接口后先 switchport mode access，再 switchport access vlan 10 将其划入 VLAN 10。" },
        { prompt: "（3）将交换机之间的互连端口配置为 Trunk 干道的命令是？", type: "fill", blanks: ["switchport mode trunk", "switchport trunk encapsulation dot1q"], score: 4, explanation: "switchport mode trunk 将端口配置为 Trunk，默认使用 802.1Q 封装承载多个 VLAN。" },
        { prompt: "（4）简述 Access 端口与 Trunk 端口的区别。", type: "qa", reference: "Access 端口只属于一个 VLAN，用于连接终端设备，帧不带 VLAN 标签；Trunk 端口可承载多个 VLAN 的数据，通过 802.1Q 标签区分，用于交换机之间或交换机与路由器之间互连。", score: 4, explanation: "Access 面向终端、单 VLAN、去标签；Trunk 面向设备互联、多 VLAN、加标签，这是两者核心区别。" }
      ]
    },
    {
      id: 1003, type: "case", category: "网络互连", paper: P,
      question: "【案例背景】某园区网有三台路由器 R1、R2、R3 运行 OSPF 协议，需要将直连网络宣告进 OSPF 进程 1 的区域 0，实现全网互通。",
      parts: [
        { prompt: "（1）在 R1 上启用 OSPF 进程 1 并宣告网络 192.168.1.0/24 到区域 0 的命令是？", type: "fill", blanks: ["network 192.168.1.0 0.0.0.255 area 0"], score: 5, explanation: "OSPF 使用反掩码（wildcard）宣告网络，0.0.0.255 对应 /24，最后 area 0 指定所属区域。" },
        { prompt: "（2）OSPF 报文直接封装在 IP 中，其使用的 IP 协议号是多少？", type: "fill", blanks: ["89"], score: 3, explanation: "OSPF 的 IP 协议号为 89，直接封装在 IP 报文中，不使用 TCP 或 UDP。" },
        { prompt: "（3）简述 OSPF 相比 RIP 的主要优点。", type: "qa", reference: "OSPF 是链路状态协议，收敛快；无 15 跳限制，支持大型网络；支持 VLSM 和无类路由；支持区域划分与路由汇总，可扩展性好。", score: 4, explanation: "RIP 跳数限制、逐跳收敛慢且不支持无类路由，OSPF 在收敛速度、可扩展性和地址规划灵活性上全面优于 RIP。" },
        { prompt: "（4）什么是 OSPF 中的 DR 和 BDR？", type: "qa", reference: "DR（指定路由器）和 BDR（备份指定路由器）是在广播多路访问网络（如以太网）中选举产生的，DR 负责与其他路由器建立邻接关系并泛洪 LSA，BDR 在 DR 失效时接替。", score: 3, explanation: "通过选举 DR/BDR 减少全互联邻接数量，降低 LSA 泛洪开销，提高网络效率。" }
      ]
    },
    {
      id: 1004, type: "case", category: "网络安全", paper: P,
      question: "【案例背景】某企业要求在路由器上配置访问控制列表（ACL），禁止 192.168.10.0/24 网段访问服务器 10.0.0.1，其他流量正常放行，并将 ACL 应用到连接该网段的接口。",
      parts: [
        { prompt: "（1）标准 ACL 的编号范围是？", type: "fill", blanks: ["1-99", "1~99", "1到99", "1-99扩展1-99"], score: 3, explanation: "标准 ACL 编号 1~99（扩展为 1300~1999），只能基于源地址过滤；扩展 ACL 编号 100~199。" },
        { prompt: "（2）编写扩展 ACL 拒绝 192.168.10.0 网段访问主机 10.0.0.1 的命令。", type: "fill", blanks: ["access-list 100 deny ip 192.168.10.0 0.0.0.255 host 10.0.0.1"], score: 5, explanation: "扩展 ACL 需指定协议（ip）、源地址及反掩码、目的地址（host 10.0.0.1 表示精确主机）。" },
        { prompt: "（3）将该 ACL 应用到接口 FastEthernet0/1 的入方向的命令是？", type: "fill", blanks: ["ip access-group 100 in"], score: 4, explanation: "进入接口后使用 ip access-group 编号 方向 应用 ACL，in 表示对进入接口的流量生效。" },
        { prompt: "（4）简述标准 ACL 与扩展 ACL 的主要区别。", type: "qa", reference: "标准 ACL 只检查源 IP 地址，编号 1~99；扩展 ACL 可检查源/目的地址、协议类型、端口号等，编号 100~199，过滤更精细。", score: 3, explanation: "扩展 ACL 匹配粒度更细，可基于五元组过滤，但配置更复杂、对设备性能开销更大。" }
      ]
    },
    {
      id: 1005, type: "case", category: "网络操作系统与应用服务器", paper: P,
      question: "【案例背景】某主机配置 IP 192.168.1.100/24、网关 192.168.1.1，能 ping 通网关，但无法打开网页，经排查发现是域名解析失败。",
      parts: [
        { prompt: "（1）能 ping 通网关但无法解析域名，首先应检查哪项配置？", type: "fill", blanks: ["DNS", "DNS服务器", "DNS地址", "DNS配置"], score: 3, explanation: "能 ping 通网关说明网络连通正常，无法解析域名通常是 DNS 配置错误或 DNS 服务器不可达。" },
        { prompt: "（2）在 Windows 中查看本机完整 IP 配置（含 DNS）的命令是？", type: "fill", blanks: ["ipconfig /all", "ipconfig/all"], score: 3, explanation: "ipconfig /all 显示完整的 TCP/IP 配置，包括 IP、子网掩码、网关、DNS 服务器等信息。" },
        { prompt: "（3）简述 DHCP 客户端获取 IP 地址的 DORA 过程。", type: "qa", reference: "Discover（客户端广播发现 DHCP 服务器）→ Offer（服务器响应提供 IP 等参数）→ Request（客户端请求使用该 IP）→ Ack（服务器确认分配）。", score: 5, explanation: "DORA 四步：发现、提供、请求、确认，是 DHCP 地址分配的标准握手过程。" },
        { prompt: "（4）简述 DNS 递归查询与迭代查询的区别。", type: "qa", reference: "递归查询：DNS 服务器代替客户端向其他服务器查询，最终把结果返回给客户端；迭代查询：DNS 服务器只返回下一级 DNS 服务器的地址，由客户端自己继续查询。", score: 4, explanation: "递归查询由服务器完成全流程查询；迭代查询服务器只给出线索，客户端逐级查询。" }
      ]
    }
  ];
  C.forEach(q => window.QUESTIONS.push(q));
})();

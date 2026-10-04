/* 真题模拟卷（二）：75 选择 + 5 案例 */
window.QUESTIONS = window.QUESTIONS || [];
(function () {
  const P = "paper2";
  const A = [
    // —— 局域网与以太网 ——
    { id: 201, type: "single", category: "局域网与以太网", paper: P, question: "CSMA/CD 中，发生冲突后各站点采用哪种退避机制？", options: ["A. 立即重发", "B. 二进制指数退避算法", "C. 随机等待固定时间", "D. 优先级排队"], answer: 1, explanation: "CSMA/CD 检测到冲突后采用二进制指数退避算法，随机延迟后重发，冲突次数越多退避时间越长。" },
    { id: 202, type: "single", category: "局域网与以太网", paper: P, question: "交换机的三种转发方式中，延迟最小的是（　）。", options: ["A. 存储转发", "B. 直通转发", "C. 碎片隔离", "D. 快速转发"], answer: 1, explanation: "直通转发（Cut-through）只读取目的 MAC 地址（前 6 字节）即转发，延迟最小，但不做差错检测；存储转发延迟最大但最可靠。" },
    { id: 203, type: "single", category: "局域网与以太网", paper: P, question: "一个交换机所有端口默认处于同一个（　）域。", options: ["A. 冲突域", "B. 广播域", "C. 路由域", "D. 自治系统"], answer: 1, explanation: "交换机默认所有端口属于同一广播域（同一 VLAN），但每个端口是一个独立的冲突域；路由器隔离广播域。" },
    { id: 204, type: "single", category: "局域网与以太网", paper: P, question: "以太网帧中，用于标识上层协议类型的字段是（　）。", options: ["A. 前导码", "B. 类型/长度字段", "C. FCS", "D. 源 MAC 地址"], answer: 1, explanation: "以太网帧的类型/长度字段（Type/Length）标识上层协议（如 0x0800 表示 IPv4）或数据长度。" },
    { id: 205, type: "single", category: "局域网与以太网", paper: P, question: "千兆以太网 IEEE 802.3z 中，1000BASE-SX 使用的介质是（　）。", options: ["A. 双绞线", "B. 多模光纤", "C. 单模光纤", "D. 同轴电缆"], answer: 1, explanation: "1000BASE-SX 使用多模光纤（短波长 850nm）；1000BASE-LX 用长波长（单模或多模）；1000BASE-T 用双绞线。" },
    { id: 206, type: "single", category: "局域网与以太网", paper: P, question: "集线器（Hub）工作在 OSI 的（　）层。", options: ["A. 物理层", "B. 数据链路层", "C. 网络层", "D. 传输层"], answer: 0, explanation: "集线器是物理层设备，只对信号进行再生放大，所有端口共享同一冲突域和广播域。" },
    { id: 207, type: "single", category: "局域网与以太网", paper: P, question: "万兆以太网 10GBASE-R 标准规定的介质访问控制方式是（　）。", options: ["A. CSMA/CD", "B. 全双工点对点，无 CSMA/CD", "C. 令牌", "D. 轮询"], answer: 1, explanation: "万兆以太网只支持全双工光纤传输，不再使用 CSMA/CD，采用点对点全双工链路。" },
    // —— 数据通信基础 ——
    { id: 208, type: "single", category: "数据通信基础", paper: P, question: "循环冗余校验（CRC）属于（　）差错检测方法。", options: ["A. 奇偶校验", "B. 冗余码校验", "C. 海明码", "D. 双工校验"], answer: 1, explanation: "CRC 通过生成多项式计算冗余码附加到数据后，接收方用同一多项式校验，检测能力远强于奇偶校验。" },
    { id: 209, type: "single", category: "数据通信基础", paper: P, question: "海明码（Hamming Code）的主要功能是（　）。", options: ["A. 只能检错", "B. 既能检错也能纠错", "C. 只能纠错不能检错", "D. 加密"], answer: 1, explanation: "海明码通过加入足够冗余位，不仅能检测错误，还能定位并纠正单比特错误。" },
    { id: 210, type: "single", category: "数据通信基础", paper: P, question: "在模拟信道上传输数字信号，需要经过（　）。", options: ["A. 调制解调器", "B. 交换机", "C. 路由器", "D. 网桥"], answer: 0, explanation: "调制解调器（Modem）在发送端把数字信号调制成模拟信号，接收端解调还原，实现数字信号在模拟信道上的传输。" },
    { id: 211, type: "single", category: "数据通信基础", paper: P, question: "波特率（Baud）表示的是（　）。", options: ["A. 每秒传输的比特数", "B. 每秒传输的码元（信号）数", "C. 每秒传输的字节数", "D. 每秒传输的字符数"], answer: 1, explanation: "波特率是每秒传输的码元数；比特率是每秒传输的比特数。一个码元可携带多位信息时，比特率 = 波特率 × log2(电平数)。" },
    { id: 212, type: "single", category: "数据通信基础", paper: P, question: "频分复用（FDM）是把多路信号按（　）划分复用。", options: ["A. 时间片", "B. 频率", "C. 波长", "D. 码型"], answer: 1, explanation: "FDM 将信道按频率划分为多个子信道，各路信号占用不同频段；时分复用 TDM 按时间片划分。" },
    { id: 213, type: "single", category: "数据通信基础", paper: P, question: "在数字数据编码中，不归零码（NRZ）的缺点是（　）。", options: ["A. 带宽太高", "B. 缺乏同步信息，长串 0/1 时难同步", "C. 只能传模拟信号", "D. 抗干扰差"], answer: 1, explanation: "NRZ 电平不中途跳变，当出现连续 0 或 1 时接收方难以提取时钟同步信息。" },
    // —— 交换技术 ——
    { id: 214, type: "single", category: "交换技术", paper: P, question: "生成树协议中，交换机之间通过交换（　）报文来选举根桥。", options: ["A. BPDU", "B. ARP", "C. ICMP", "D. Hello"], answer: 0, explanation: "STP 通过 BPDU（网桥协议数据单元）交换信息，比较桥 ID 选举根桥，进而确定根端口、指定端口和阻塞端口。" },
    { id: 215, type: "single", category: "交换技术", paper: P, question: "STP 选举根桥的依据是（　）。", options: ["A. MAC 地址最大", "B. 桥 ID 最小", "C. 端口号最小", "D. 带宽最大"], answer: 1, explanation: "根桥由桥 ID（优先级 + MAC 地址）最小者当选，桥 ID 越小越优先。" },
    { id: 216, type: "single", category: "交换技术", paper: P, question: "链路聚合（EtherChannel）的作用是（　）。", options: ["A. 增加带宽并提供链路冗余", "B. 隔离广播", "C. 划分 VLAN", "D. 路由选择"], answer: 0, explanation: "链路聚合把多条物理链路绑定为一条逻辑链路，实现带宽叠加和链路冗余备份。" },
    { id: 217, type: "single", category: "交换技术", paper: P, question: "VLAN 的默认最大数量（IEEE 802.1Q）是（　）。", options: ["A. 256", "B. 1024", "C. 4094", "D. 65535"], answer: 2, explanation: "802.1Q 的 VLAN ID 字段为 12 位，理论 0~4095，其中 0 和 4095 保留，可用 VLAN 为 1~4094。" },
    { id: 218, type: "single", category: "交换技术", paper: P, question: "交换机端口安全（Port Security）的作用是（　）。", options: ["A. 限制端口可学习的 MAC 地址数量", "B. 加密数据", "C. 提高转发速度", "D. 划分 VLAN"], answer: 0, explanation: "端口安全限制某端口能学习/绑定的 MAC 地址数量，防止 MAC 地址泛洪攻击和非法接入。" },
    { id: 219, type: "single", category: "交换技术", paper: P, question: "快速生成树协议（RSTP）相对 STP 的主要改进是（　）。", options: ["A. 收敛速度更快", "B. 支持更多 VLAN", "C. 支持无线", "D. 无环检测"], answer: 0, explanation: "RSTP（802.1w）引入端口角色扩展和快速切换机制，收敛时间从 STP 的数十秒缩短到几秒以内。" },
    // —— 网络安全 ——
    { id: 220, type: "single", category: "网络安全", paper: P, question: "下列算法中，用于生成消息摘要（哈希）的是（　）。", options: ["A. RSA", "B. SHA-256", "C. AES", "D. DES"], answer: 1, explanation: "SHA-256 是哈希（散列）算法，用于生成固定长度摘要；RSA 是公钥加密，AES/DES 是对称加密。" },
    { id: 221, type: "single", category: "网络安全", paper: P, question: "数字证书中不包含的内容是（　）。", options: ["A. 证书持有者公钥", "B. 证书颁发机构签名", "C. 持有者私钥", "D. 有效期"], answer: 2, explanation: "数字证书包含持有者身份、公钥、CA 签名、有效期等，绝不包含私钥（私钥由持有者秘密保存）。" },
    { id: 222, type: "single", category: "网络安全", paper: P, question: "IPsec 协议族中，用于提供数据加密（保密性）的是（　）。", options: ["A. AH", "B. ESP", "C. IKE", "D. GRE"], answer: 1, explanation: "ESP（封装安全载荷）提供加密和可选认证；AH 只提供完整性认证不加密；IKE 负责密钥协商。" },
    { id: 223, type: "single", category: "网络安全", paper: P, question: "入侵检测系统（IDS）与防火墙的主要区别是（　）。", options: ["A. IDS 是主动阻断，防火墙是被动监测", "B. IDS 侧重检测记录，防火墙侧重访问控制", "C. 功能完全相同", "D. IDS 工作在物理层"], answer: 1, explanation: "防火墙基于规则对流量进行允许/拒绝的访问控制；IDS 监测网络/主机活动，检测入侵行为并告警，通常不主动阻断。" },
    { id: 224, type: "single", category: "网络安全", paper: P, question: "SSL/TLS 协议主要用于（　）。", options: ["A. 保证传输层以上应用的安全通信", "B. 分配 IP 地址", "C. 路由选择", "D. 域名解析"], answer: 0, explanation: "SSL/TLS 位于传输层和应用层之间，为 HTTP、FTP 等应用提供加密、认证和完整性保护。" },
    { id: 225, type: "single", category: "网络安全", paper: P, question: "对称加密算法 DES 的密钥长度是（　）位。", options: ["A. 56", "B. 64", "C. 128", "D. 256"], answer: 0, explanation: "DES 的有效密钥长度为 56 位（另有 8 位校验位共 64 位），因密钥过短已被 AES 取代。" },
    // —— 网络管理 ——
    { id: 226, type: "single", category: "网络管理", paper: P, question: "SNMPv3 相比 SNMPv1/v2 的主要增强是（　）。", options: ["A. 增加了安全机制（认证与加密）", "B. 速度更快", "C. 支持更多设备", "D. 无需 MIB"], answer: 0, explanation: "SNMPv3 增加了基于用户的安全模型（USM），提供认证、加密和访问控制，解决了前两版明文社区名的安全问题。" },
    { id: 227, type: "single", category: "网络管理", paper: P, question: "在 Windows 中查看本机路由表的命令是（　）。", options: ["A. route print", "B. ipconfig", "C. ping", "D. netstat"], answer: 0, explanation: "route print 显示本机路由表；ipconfig 查看 IP 配置；ping 测试连通性；netstat 查看连接状态。" },
    { id: 228, type: "single", category: "网络管理", paper: P, question: "netstat 命令中，用于查看所有连接和监听端口的参数是（　）。", options: ["A. -a", "B. -r", "C. -n", "D. -e"], answer: 0, explanation: "netstat -a 显示所有活动连接和监听端口；-r 显示路由表；-n 以数字形式显示地址和端口。" },
    { id: 229, type: "single", category: "网络管理", paper: P, question: "网络管理员发现某主机能获得 IP 但无法上网，最可能的原因是（　）。", options: ["A. 默认网关配置错误", "B. 网卡驱动问题", "C. 屏幕分辨率", "D. 键盘故障"], answer: 0, explanation: "能获得 IP 说明 DHCP 和链路正常，无法上网通常是默认网关配置错误或网关不可达。" },
    { id: 230, type: "single", category: "网络管理", paper: P, question: "下列属于性能管理内容的是（　）。", options: ["A. 监控网络吞吐量、响应时间和利用率", "B. 修改用户密码", "C. 划分 VLAN", "D. 计费"], answer: 0, explanation: "性能管理监控和优化网络性能指标（吞吐量、延迟、利用率、错误率等）；计费是独立功能域。" },
    // —— 无线网络 ——
    { id: 231, type: "single", category: "无线网络", paper: P, question: "WLAN 中，SSID 的作用是（　）。", options: ["A. 标识无线网络名称", "B. 加密数据", "C. 分配 IP", "D. 路由"], answer: 0, explanation: "SSID（服务集标识符）是无线网络的名称，用于区分不同的无线网络，客户端据此选择接入。" },
    { id: 232, type: "single", category: "无线网络", paper: P, question: "802.11n 引入的能显著提升吞吐率的关键技术是（　）。", options: ["A. MIMO", "B. 蓝牙", "C. 红外", "D. CDMA"], answer: 0, explanation: "802.11n 引入 MIMO（多入多出）多天线技术，通过空间复用和信道绑定（40MHz）大幅提升速率。" },
    { id: 233, type: "single", category: "无线网络", paper: P, question: "无线 AP（接入点）工作在 OSI 的（　）层。", options: ["A. 物理层", "B. 数据链路层", "C. 网络层", "D. 传输层"], answer: 1, explanation: "无线 AP 本质是无线交换机/网桥，基于 MAC 地址转发，工作在数据链路层，连接无线客户端到有线网络。" },
    { id: 234, type: "single", category: "无线网络", paper: P, question: "WPA3 相比 WPA2 引入的改进是（　）。", options: ["A. SAE 更安全的密钥协商", "B. 去掉加密", "C. 只支持 2.4G", "D. 更慢"], answer: 0, explanation: "WPA3 采用 SAE（对等实体同时认证）替代 PSK，抵抗离线字典攻击，并强化了前向保密。" },
    // —— 网络操作系统 ——
    { id: 235, type: "single", category: "网络操作系统", paper: P, question: "在 Linux 中，用于修改文件权限的命令是（　）。", options: ["A. chmod", "B. chown", "C. ls", "D. mv"], answer: 0, explanation: "chmod 修改文件权限（如 chmod 755 file）；chown 修改属主；ls 列目录；mv 移动/重命名。" },
    { id: 236, type: "single", category: "网络操作系统", paper: P, question: "Windows Server 中，用于集中管理域用户和资源的服务是（　）。", options: ["A. Active Directory", "B. DHCP", "C. DNS", "D. FTP"], answer: 0, explanation: "Active Directory（活动目录）集中管理域中的用户、计算机、组策略等资源，提供统一认证。" },
    { id: 237, type: "single", category: "网络操作系统", paper: P, question: "Linux 中，用于测试 DNS 解析的命令是（　）。", options: ["A. nslookup", "B. ping", "C. ifconfig", "D. netstat"], answer: 0, explanation: "nslookup（或 dig）查询 DNS 解析；ping 测试连通性；ifconfig 看网络接口。" },
    { id: 238, type: "single", category: "网络操作系统", paper: P, question: "HTTP 协议默认使用的端口是（　）。", options: ["A. 80", "B. 443", "C. 21", "D. 25"], answer: 0, explanation: "HTTP 默认 80 端口；HTTPS 443；FTP 21；SMTP 25。" },
    { id: 239, type: "single", category: "网络操作系统", paper: P, question: "在 Linux 中，重启网络服务的常用命令是（　）。", options: ["A. service network restart", "B. reboot", "C. shutdown", "D. exit"], answer: 0, explanation: "service network restart（或 systemctl restart network）重启网络服务；reboot 重启系统；exit 退出。" },
    // —— 广域网技术 ——
    { id: 240, type: "single", category: "广域网技术", paper: P, question: "PPP 协议中，用于认证的协议是（　）。", options: ["A. PAP 和 CHAP", "B. TCP 和 UDP", "C. RIP 和 OSPF", "D. HTTP 和 FTP"], answer: 0, explanation: "PPP 支持 PAP（口令认证）和 CHAP（挑战握手认证）两种认证方式，CHAP 更安全。" },
    { id: 241, type: "single", category: "广域网技术", paper: P, question: "帧中继中，用于标识虚电路的标识符是（　）。", options: ["A. DLCI", "B. VPI/VCI", "C. MAC", "D. IP"], answer: 0, explanation: "帧中继用 DLCI 标识虚电路；ATM 用 VPI/VCI；DLCI 只具有本地意义。" },
    { id: 242, type: "single", category: "广域网技术", paper: P, question: "ATM 信元的净荷长度是（　）字节。", options: ["A. 5", "B. 48", "C. 53", "D. 64"], answer: 1, explanation: "ATM 信元共 53 字节：5 字节信头 + 48 字节净荷（载荷）。" },
    { id: 243, type: "single", category: "广域网技术", paper: P, question: "下列广域网技术中，属于分组交换且面向连接的是（　）。", options: ["A. 电路交换", "B. X.25", "C. 广播", "D. 共享以太网"], answer: 1, explanation: "X.25 是面向连接的分组交换技术，通过虚电路提供可靠传输；电路交换是另一种交换方式。" },
    // —— 网络互联与 IP 编址 ——
    { id: 244, type: "single", category: "网络互联与 IP 编址", paper: P, question: "IPv6 中，链路本地地址的前缀是（　）。", options: ["A. FE80::/10", "B. FF00::/8", "C. 2000::/3", "D. FC00::/7"], answer: 0, explanation: "IPv6 链路本地地址前缀 FE80::/10，用于同链路通信；FF00::/8 组播；2000::/3 全球单播；FC00::/7 唯一本地。" },
    { id: 245, type: "single", category: "网络互联与 IP 编址", paper: P, question: "IPv6 地址 2001:0db8:0000:0000:0000:0000:0000:0001 可简写为（　）。", options: ["A. 2001:db8::1", "B. 2001:db8:0:1", "C. 2001::db8::1", "D. 2001:db8::0:1"], answer: 0, explanation: "IPv6 省略规则：前导 0 省略、连续全 0 段用 :: 表示（只能一次），简写为 2001:db8::1。" },
    { id: 246, type: "single", category: "网络互联与 IP 编址", paper: P, question: "ARP 协议广播的报文属于（　）。", options: ["A. 单播", "B. 广播", "C. 组播", "D. 任播"], answer: 1, explanation: "ARP 请求以广播方式发送（目标 MAC 为 FF-FF-FF-FF-FF-FF），应答以单播返回。" },
    { id: 247, type: "single", category: "网络互联与 IP 编址", paper: P, question: "将私有地址 192.168.0.0/16 映射为一个公网地址，多个内部主机共享该公网地址的技术是（　）。", options: ["A. 静态 NAT", "B. 动态 NAT", "C. PAT（端口复用）", "D. 桥接"], answer: 2, explanation: "PAT（NAPT）通过端口复用，使多个内部主机共用一个公网 IP 上网，是家庭/企业最常用的 NAT 形式。" },
    // —— 路由协议 ——
    { id: 248, type: "single", category: "路由协议", paper: P, question: "路由器学习到同一目标网络的多条路由时，优先选择（　）。", options: ["A. 管理距离最大", "B. 管理距离最小", "C. 度量最大", "D. 随机"], answer: 1, explanation: "不同来源路由先比管理距离（AD），值越小越优先；同协议再比度量值。" },
    { id: 249, type: "single", category: "路由协议", paper: P, question: "OSPF 中，用于在邻居之间建立和维护邻接关系的报文是（　）。", options: ["A. Hello", "B. DBD", "C. LSR", "D. LSU"], answer: 0, explanation: "OSPF 通过周期性发送 Hello 报文发现邻居、选举 DR/BDR 并维护邻接关系。" },
    { id: 250, type: "single", category: "路由协议", paper: P, question: "路由汇总（聚合）的主要作用是（　）。", options: ["A. 减少路由表条目、提高效率", "B. 增加路由表", "C. 加密路由", "D. 提高网速"], answer: 0, explanation: "路由汇总把多个连续子网合并为一条汇总路由，减少路由表规模和路由更新流量，提高收敛效率。" },
    // —— 网络安全（续） ——
    { id: 251, type: "single", category: "网络安全", paper: P, question: "包过滤防火墙主要根据（　）进行访问控制。", options: ["A. 源/目的 IP、端口和协议", "B. 文件名", "C. 用户姓名", "D. 网页内容"], answer: 0, explanation: "包过滤防火墙检查 IP 报文头部，根据源/目的 IP、端口、协议类型等信息按规则决定放行或丢弃。" },
    { id: 252, type: "single", category: "网络安全", paper: P, question: "公钥基础设施（PKI）的核心组成不包括（　）。", options: ["A. 认证中心 CA", "B. 数字证书", "C. 注册机构 RA", "D. 以太网交换机"], answer: 3, explanation: "PKI 由 CA、RA、证书库、密钥备份恢复系统等组成，用于数字证书的签发与管理，与交换设备无关。" },
    { id: 253, type: "single", category: "网络安全", paper: P, question: "下列安全设备中，能根据应用层内容过滤流量的是（　）。", options: ["A. 包过滤防火墙", "B. 应用代理（应用层）网关", "C. 集线器", "D. 中继器"], answer: 1, explanation: "应用代理网关工作在应用层，能解析应用协议内容（如 HTTP、FTP）进行细粒度过滤，安全性高但性能开销大。" },
    { id: 254, type: "single", category: "网络安全", paper: P, question: "Kerberos 认证系统中，负责签发票据的核心组件是（　）。", options: ["A. KDC（密钥分发中心）", "B. Web 服务器", "C. 路由器", "D. DNS"], answer: 0, explanation: "Kerberos 通过 KDC（含 AS 认证服务器和 TGS 票据授权服务器）签发票据实现第三方认证。" },
    { id: 255, type: "single", category: "网络安全", paper: P, question: "数据加密的目的是保证信息的（　）。", options: ["A. 保密性", "B. 可用性", "C. 可靠性", "D. 可扩展性"], answer: 0, explanation: "加密通过算法将明文变为密文，保证信息在传输/存储中的保密性；可用性靠冗余和高可用设计保障。" },
    // —— 网络管理（续） ——
    { id: 256, type: "single", category: "网络管理", paper: P, question: "SNMP 管理站从代理获取信息的操作是（　）。", options: ["A. Get/GetNext", "B. Trap", "C. Set", "D. Inform"], answer: 0, explanation: "Get/GetNext 由管理站发起，向代理查询 MIB 对象值；Trap 由代理主动上报事件；Set 修改值。" },
    { id: 257, type: "single", category: "网络管理", paper: P, question: "用于检查网络连通性和计算往返延迟的命令是（　）。", options: ["A. ping", "B. arp", "C. route", "D. hostname"], answer: 0, explanation: "ping 通过 ICMP 回显请求/应答测试连通性并统计往返时间（RTT）。" },
    { id: 258, type: "single", category: "网络管理", paper: P, question: "在网络故障诊断中，遵循的分层排查思路通常从（　）开始。", options: ["A. 物理层", "B. 应用层", "C. 传输层", "D. 表示层"], answer: 0, explanation: "故障排查一般自底向上（物理层→数据链路层→网络层→……），先确认物理连接、链路是否正常。" },
    // —— 计算机网络体系结构 ——
    { id: 259, type: "single", category: "计算机网络体系结构", paper: P, question: "UDP 协议的特点是（　）。", options: ["A. 面向连接、可靠", "B. 无连接、不可靠但开销小", "C. 面向连接、不可靠", "D. 无连接、可靠"], answer: 1, explanation: "UDP 无连接、不保证可靠交付、无流量控制和重传，但头部小、效率高，适合实时应用。" },
    { id: 260, type: "single", category: "计算机网络体系结构", paper: P, question: "TCP 首部中，用于标识数据属于哪个应用进程的字段是（　）。", options: ["A. 端口号", "B. 序号", "C. 窗口", "D. 校验和"], answer: 0, explanation: "源/目的端口号用于标识两端应用进程，结合 IP 地址形成套接字，实现进程间通信。" },
    { id: 261, type: "single", category: "计算机网络体系结构", paper: P, question: "在 OSI 模型中，负责建立、管理和终止会话的是（　）。", options: ["A. 会话层", "B. 表示层", "C. 应用层", "D. 传输层"], answer: 0, explanation: "会话层负责会话的建立、管理和终止；表示层负责数据格式转换、加密压缩；应用层为用户服务。" },
    { id: 262, type: "single", category: "计算机网络体系结构", paper: P, question: "下列属于传输层协议端口号范围的是（　）。", options: ["A. 0~65535", "B. 0~1023", "C. 1024~49151", "D. 1~255"], answer: 0, explanation: "端口号用 16 位表示，范围 0~65535；其中 0~1023 为知名端口，1024~49151 注册端口，49152~65535 动态端口。" },
    // —— 数据通信基础（续） ——
    { id: 263, type: "single", category: "数据通信基础", paper: P, question: "基带传输与频带传输的区别在于（　）。", options: ["A. 基带直接传数字信号，频带需调制到载波", "B. 基带只能传模拟", "C. 频带不能传数据", "D. 两者完全相同"], answer: 0, explanation: "基带传输直接把数字信号送入信道（如以太网）；频带传输把数字信号调制到载波后传输（如 ADSL、有线电视网）。" },
    { id: 264, type: "single", category: "数据通信基础", paper: P, question: "在 CRC 校验中，校验位数等于生成多项式的（　）。", options: ["A. 最高次数", "B. 最高次数加 1", "C. 系数", "D. 常数项"], answer: 0, explanation: "CRC 校验位（冗余码）的位数等于生成多项式 G(x) 的最高次数，如 G(x)=x^16+... 则校验 16 位。" },
    { id: 265, type: "single", category: "数据通信基础", paper: P, question: "双绞线中，为了减少串扰，常用的绞合方式是（　）。", options: ["A. 两根线平行", "B. 两根线按一定节距绞合", "C. 三根线绞合", "D. 不绞合"], answer: 1, explanation: "双绞线把两根绝缘导线按一定节距绞合，利用电磁抵消原理减少线间串扰和外部干扰。" },
    // —— 网络规划与设计 ——
    { id: 266, type: "single", category: "网络规划与设计", paper: P, question: "网络生命周期中，需求分析之后紧接着的步骤是（　）。", options: ["A. 逻辑设计", "B. 物理设计", "C. 实施", "D. 运维"], answer: 0, explanation: "网络设计通常流程：需求分析→逻辑设计（拓扑、地址、协议）→物理设计（设备选型、布线）→实施→运维。" },
    { id: 267, type: "single", category: "网络规划与设计", paper: P, question: "综合布线系统中，垂直干线子系统常用的传输介质是（　）。", options: ["A. 光缆或大对数铜缆", "B. 普通电话线", "C. 同轴电缆", "D. 无线"], answer: 0, explanation: "垂直干线连接设备间与楼层配线间，距离长、带宽要求高，常用多模/单模光缆或大对数铜缆。" },
    { id: 268, type: "single", category: "网络规划与设计", paper: P, question: "核心层网络设计的首要目标是（　）。", options: ["A. 高速转发和可靠性", "B. 接入终端", "C. 保存配置", "D. 提供认证"], answer: 0, explanation: "核心层（三层模型）专注高速、可靠地转发流量，应避免复杂策略；接入层负责终端接入；汇聚层负责策略和汇聚。" },
    // —— 无线网络（续） ——
    { id: 269, type: "single", category: "无线网络", paper: P, question: "蓝牙（Bluetooth）技术工作在（　）频段。", options: ["A. 2.4GHz", "B. 5GHz", "C. 900MHz", "D. 60GHz"], answer: 0, explanation: "蓝牙工作在 2.4GHz ISM 频段，采用跳频扩频（FHSS）技术，用于短距离设备互连。" },
    { id: 270, type: "single", category: "无线网络", paper: P, question: "在无线局域网中，隐藏节点问题的解决机制是（　）。", options: ["A. RTS/CTS", "B. CSMA/CD", "C. 令牌", "D. 优先级队列"], answer: 0, explanation: "RTS/CTS 握手由发送方先发请求、接收方回应，让周围节点感知传输，缓解隐藏节点导致的冲突。" },
    // —— 网络操作系统（续） ——
    { id: 271, type: "single", category: "网络操作系统", paper: P, question: "Linux 中，超级用户 root 的 UID 是（　）。", options: ["A. 0", "B. 1", "C. 100", "D. 500"], answer: 0, explanation: "Linux 中 root 用户的 UID 固定为 0，拥有最高权限；普通用户 UID 一般从 1000（或 500）开始。" },
    { id: 272, type: "single", category: "网络操作系统", paper: P, question: "在 Windows 中，将共享文件夹挂载为网络驱动器可使用（　）。", options: ["A. net use", "B. ping", "C. ipconfig", "D. tracert"], answer: 0, explanation: "net use 命令可连接共享资源并映射为本地盘符，如 net use Z: \\\\server\\share。" },
    { id: 273, type: "single", category: "网络操作系统", paper: P, question: "DNS 资源记录中，表示邮件交换服务器的是（　）。", options: ["A. A 记录", "B. MX 记录", "C. CNAME 记录", "D. PTR 记录"], answer: 1, explanation: "MX 记录指定邮件服务器；A 记录映射域名到 IPv4；CNAME 是别名；PTR 用于反向解析。" },
    // —— 广域网技术（续） ——
    { id: 274, type: "single", category: "广域网技术", paper: P, question: "PPP 帧中，用于透明传输转义控制的字符填充方式使用了（　）。", options: ["A. 字节填充（0x7D）", "B. 比特填充", "C. 不加处理", "D. 压缩"], answer: 0, explanation: "PPP 是面向字节协议，采用字节填充，用转义字符 0x7D 处理与标志 0x7E 冲突的数据；HDLC 则采用比特填充。" },
    { id: 275, type: "single", category: "广域网技术", paper: P, question: "下列技术中，提供高质量电路仿真、面向连接且基于信元交换的是（　）。", options: ["A. ATM", "B. 以太网", "C. 令牌环", "D. WiFi"], answer: 0, explanation: "ATM 面向连接、基于固定长度信元交换，提供 QoS 保证，适合承载语音、视频等实时业务。" },
  ];
  A.forEach(q => window.QUESTIONS.push(q));
})();

/* —— 案例题 —— */
(function () {
  const P = "paper2";
  const C = [
    {
      id: 1101, type: "case", category: "交换技术", paper: P,
      question: "【案例背景】某园区网交换机间存在冗余链路，但未启用生成树协议，近期网络频繁出现广播风暴导致全网瘫痪。网管决定启用 STP 并优化根桥配置。",
      parts: [
        { prompt: "（1）在 Cisco 交换机上查看生成树状态的命令是？", type: "fill", blanks: ["show spanning-tree", "show spanning-tree vlan 1"], score: 4, explanation: "show spanning-tree 显示生成树的状态、根桥、端口角色和优先级等信息。" },
        { prompt: "（2）将某台核心交换机指定为根桥（以 VLAN 1 为例）的命令是？", type: "fill", blanks: ["spanning-tree vlan 1 root primary", "spanning-tree vlan 1 priority 4096"], score: 4, explanation: "spanning-tree vlan 1 root primary 会自动把优先级降到低于当前根桥，使其当选根桥。" },
        { prompt: "（3）简述广播风暴的成因及其危害。", type: "qa", reference: "成因：二层网络存在物理环路，广播帧在环路上被不断复制转发形成循环；危害：耗尽链路带宽和交换机 CPU 资源，导致网络瘫痪。", score: 4, explanation: "环路使广播帧无限循环复制，流量指数级增长，最终拖垮网络，这正是 STP 需要消除环路的原因。" },
        { prompt: "（4）简述 STP 端口从 Blocking 到 Forwarding 的状态迁移过程。", type: "qa", reference: "Blocking（阻塞）→ Listening（监听）→ Learning（学习）→ Forwarding（转发），从阻塞到转发需经过约 50 秒（默认）。", score: 3, explanation: "STP 端口经历阻塞、监听、学习、转发四个状态，逐步收敛，避免过早转发造成临时环路。" }
      ]
    },
    {
      id: 1102, type: "case", category: "网络安全", paper: P,
      question: "【案例背景】某电子商务网站需要对传输的数据进行加密保护，并保证客户端能够验证网站身份，决定部署 HTTPS 并采用公钥基础设施（PKI）签发数字证书。",
      parts: [
        { prompt: "（1）对称加密算法 AES 支持的密钥长度有哪几种？", type: "fill", blanks: ["128,192,256", "128/192/256", "128、192、256", "128 192 256"], score: 3, explanation: "AES 支持 128、192、256 位三种密钥长度，密钥越长越安全。" },
        { prompt: "（2）RSA 属于哪一类加密算法？", type: "fill", blanks: ["非对称加密", "非对称加密算法", "公钥加密", "非对称"], score: 3, explanation: "RSA 是非对称（公钥）加密算法，使用一对公钥/私钥，公钥加密、私钥解密。" },
        { prompt: "（3）简述对称加密与非对称加密的主要区别。", type: "qa", reference: "对称加密加解密用同一密钥，速度快、密钥管理困难；非对称加密使用公钥/私钥对，速度慢、密钥分发方便，通常两者结合使用。", score: 5, explanation: "实际系统中常用非对称加密安全地协商/分发会话密钥，再用对称加密高效加密数据，兼顾安全与性能。" },
        { prompt: "（4）简述浏览器访问 HTTPS 网站时，如何验证服务器证书。", type: "qa", reference: "浏览器获取服务器证书后，用内置的受信任 CA 公钥验证证书签名，检查证书是否在有效期内、域名是否匹配、是否被吊销，验证通过后建立加密会话。", score: 4, explanation: "证书链验证依赖信任的根 CA，通过逐级验证签名确认证书真实性，再完成 SSL/TLS 密钥协商。" }
      ]
    },
    {
      id: 1103, type: "case", category: "网络管理", paper: P,
      question: "【案例背景】某企业网络规模扩大，需要部署基于 SNMP 的网络管理系统，对交换机、路由器等设备的运行状态进行集中监控。",
      parts: [
        { prompt: "（1）SNMP 代理（Agent）默认监听哪个 UDP 端口？", type: "fill", blanks: ["161"], score: 3, explanation: "SNMP 代理默认在 UDP 161 端口监听管理站的查询请求；管理站接收 Trap 使用 162 端口。" },
        { prompt: "（2）SNMP 管理站接收设备主动上报的 Trap 报文使用哪个端口？", type: "fill", blanks: ["162"], score: 3, explanation: "Trap 由代理主动发送到管理站的 UDP 162 端口，用于报告异常事件。" },
        { prompt: "（3）简述 SNMP 中 Get 操作与 Trap 机制的区别。", type: "qa", reference: "Get 由管理站主动发起，向代理查询 MIB 对象值，属于轮询方式；Trap 由代理主动上报重要事件，属于异步通知方式，实时性更好。", score: 5, explanation: "轮询方式周期查询但实时性差、开销大；Trap 事件驱动、及时，但需配合轮询保证可靠性。" },
        { prompt: "（4）列出网络管理的五大功能域（FCAPS）。", type: "qa", reference: "故障管理、配置管理、计费管理、性能管理、安全管理。", score: 4, explanation: "FCAPS 是 ISO 定义的网络管理五大功能域，是网络管理系统的基本框架。" }
      ]
    },
    {
      id: 1104, type: "case", category: "局域网与以太网", paper: P,
      question: "【案例背景】某公司对局域网进行升级改造，计划用交换机替换原有的集线器，以解决网络性能低下、冲突频繁的问题。",
      parts: [
        { prompt: "（1）交换机的每个端口是一个独立的什么域？", type: "fill", blanks: ["冲突域", "冲突"], score: 4, explanation: "交换机每个端口独立，端口之间不共享冲突域，从而隔离冲突，这是其优于集线器的关键。" },
        { prompt: "（2）路由器可以隔离什么域？", type: "fill", blanks: ["广播域", "广播"], score: 4, explanation: "路由器基于 IP 转发，默认不转发广播，因此能隔离广播域；交换机不能隔离广播域。" },
        { prompt: "（3）简述集线器与交换机在工作原理上的主要区别。", type: "qa", reference: "集线器是物理层设备，所有端口共享带宽和冲突域，采用广播方式转发；交换机是数据链路层设备，基于 MAC 地址表定向转发，每端口独立带宽和冲突域。", score: 4, explanation: "交换机通过 MAC 地址学习和定向转发，避免了集线器的冲突和带宽共享问题，显著提高性能。" },
        { prompt: "（4）简述以太网交换机学习 MAC 地址的过程。", type: "qa", reference: "交换机收到帧时记录源 MAC 地址与接收端口到 MAC 地址表；转发时查表按目的 MAC 从对应端口转发，未知目的 MAC 则向除接收端口外的所有端口泛洪。", score: 3, explanation: "源地址学习、目的地址转发、未知泛洪，是交换机转发的基本三原则。" }
      ]
    },
    {
      id: 1105, type: "case", category: "无线网络", paper: P,
      question: "【案例背景】某办公楼需部署无线局域网，覆盖多个楼层，要求无线网络稳定、安全，并支持员工移动办公。",
      parts: [
        { prompt: "（1）无线局域网采用的主要 IEEE 标准是？", type: "fill", blanks: ["802.11", "IEEE 802.11"], score: 3, explanation: "IEEE 802.11 是无线局域网标准族，涵盖 802.11a/b/g/n/ac/ax 等。" },
        { prompt: "（2）目前安全性较好的无线加密认证标准是？", type: "fill", blanks: ["WPA2", "WPA3", "WPA2/WPA3", "WPA2或WPA3"], score: 4, explanation: "WPA2（AES）和 WPA3（SAE）是当前推荐的安全标准，安全性远高于已淘汰的 WEP。" },
        { prompt: "（3）隐藏 SSID 是否能真正保证无线网络安全？为什么？", type: "qa", reference: "不能。隐藏 SSID 只是不在信标帧中广播网络名，但通过抓包分析仍可发现该网络，且会给合法用户接入带来不便，不能替代加密认证。", score: 4, explanation: "SSID 隐藏仅是弱混淆手段，真正的安全仍需依靠 WPA2/WPA3 加密和强口令。" },
        { prompt: "（4）部署多个无线 AP 时，为避免信道干扰应如何规划？", type: "qa", reference: "相邻 AP 应使用互不重叠的信道（2.4GHz 常用 1、6、11），并合理设置发射功率和覆盖范围，避免同频干扰。", score: 4, explanation: "2.4GHz 频段互不重叠信道为 1、6、11，蜂窝式规划让相邻小区信道错开，减少干扰、提升容量。" }
      ]
    }
  ];
  C.forEach(q => window.QUESTIONS.push(q));
})();

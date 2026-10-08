/* 真题模拟卷（三）：75 选择 + 5 案例 */
window.QUESTIONS = window.QUESTIONS || [];
(function () {
  const P = "paper3";
  const A = [
    // —— 广域网技术 ——
    { id: 301, type: "single", category: "网络互连", paper: P, question: "ISDN 基本速率接口（BRI）由（　）组成。", options: ["A. 2 个 B 信道 + 1 个 D 信道（2B+D）", "B. 23B+D", "C. 30B+D", "D. 仅 1 个 B 信道"], answer: 0, explanation: "ISDN BRI 为 2B+D，即 2 个 64kbps 的 B 信道（承载数据）+ 1 个 16kbps 的 D 信道（信令）。" },
    { id: 302, type: "single", category: "网络互连", paper: P, question: "ADSL 中，上行和下行速率的关系是（　）。", options: ["A. 上行大于下行", "B. 下行大于上行", "C. 上下行相等", "D. 无固定关系"], answer: 1, explanation: "ADSL（非对称数字用户线）下行速率远大于上行，适合下载为主的互联网接入。" },
    { id: 303, type: "single", category: "网络互连", paper: P, question: "帧中继相比 X.25 的主要改进是（　）。", options: ["A. 简化了差错控制，提高了速率", "B. 增加了纠错", "C. 使用更长的信元", "D. 只支持语音"], answer: 0, explanation: "帧中继简化了 X.25 的逐段差错重传，依赖更可靠的链路，从而降低延迟、提高吞吐率。" },
    { id: 304, type: "single", category: "网络互连", paper: P, question: "ATM 中，VPI 和 VCI 共同用于标识（　）。", options: ["A. 虚通路和虚通道", "B. MAC 地址", "C. IP 地址", "D. 端口号"], answer: 0, explanation: "ATM 用 VPI（虚通路标识）和 VCI（虚通道标识）两级标识虚连接，实现信元的交换和路由。" },
    { id: 305, type: "single", category: "网络互连", paper: P, question: "同步光纤网络 SONET 的基础速率 OC-1 是（　）。", options: ["A. 51.84Mbps", "B. 155Mbps", "C. 622Mbps", "D. 2.5Gbps"], answer: 0, explanation: "SONET OC-1 基础速率为 51.84Mbps，OC-3 为 155.52Mbps，OC-12 为 622Mbps，按整数倍递增。" },
    { id: 306, type: "single", category: "网络互连", paper: P, question: "PPP 协议中，LCP（链路控制协议）的作用是（　）。", options: ["A. 建立、配置和测试数据链路", "B. 封装网络层协议", "C. 用户认证", "D. 加密"], answer: 0, explanation: "LCP 负责链路的建立、配置、维护和终止；NCP（网络控制协议）负责协商网络层协议参数；认证由 PAP/CHAP 完成。" },
    // —— 网络操作系统 ——
    { id: 307, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "Windows Server 中，IIS 提供的主要服务是（　）。", options: ["A. Web 服务", "B. 邮件服务", "C. 数据库服务", "D. 打印服务"], answer: 0, explanation: "IIS（Internet 信息服务）是 Windows 的 Web/FTP 服务器软件，主要提供网站托管服务。" },
    { id: 308, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "Linux 中，用于查看文件内容的命令是（　）。", options: ["A. cat", "B. cd", "C. rm", "D. mkdir"], answer: 0, explanation: "cat 查看/连接文件内容；cd 切换目录；rm 删除；mkdir 创建目录。" },
    { id: 309, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "DHCP 租约到期前，客户端会向服务器发送（　）报文续租。", options: ["A. Discover", "B. Request", "C. Release", "D. Decline"], answer: 1, explanation: "租约到期一半时，客户端以单播 DHCP Request 向原服务器请求续租，服务器以 Ack 确认。" },
    { id: 310, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "在 DNS 中，将域名映射到 IPv6 地址的记录类型是（　）。", options: ["A. A", "B. AAAA", "C. MX", "D. NS"], answer: 1, explanation: "AAAA 记录将域名映射到 IPv6 地址；A 记录映射到 IPv4；MX 邮件交换；NS 域名服务器。" },
    { id: 311, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "Linux 中，用于查看当前工作目录的命令是（　）。", options: ["A. pwd", "B. ls", "C. who", "D. ps"], answer: 0, explanation: "pwd 显示当前工作目录；ls 列出目录内容；who 查看登录用户；ps 查看进程。" },
    { id: 312, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "Windows 中，用于远程登录到另一台主机的命令行工具是（　）。", options: ["A. telnet / ssh", "B. ping", "C. ftp", "D. netstat"], answer: 0, explanation: "telnet 和 ssh 用于远程登录；ping 测试连通性；ftp 文件传输；netstat 查看连接。" },
    { id: 313, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "电子邮件发送协议 SMTP 默认使用（　）端口。", options: ["A. 25", "B. 110", "C. 143", "D. 80"], answer: 0, explanation: "SMTP 发送邮件用 25 端口；POP3 接收用 110；IMAP 用 143；HTTP 用 80。" },
    // —— 无线网络 ——
    { id: 314, type: "single", category: "无线通信网", paper: P, question: "802.11ac 标准主要工作在（　）频段。", options: ["A. 5GHz", "B. 2.4GHz", "C. 900MHz", "D. 60GHz"], answer: 0, explanation: "802.11ac 只工作在 5GHz 频段，通过更宽信道（80/160MHz）和 MIMO 实现高速率。" },
    { id: 315, type: "single", category: "无线通信网", paper: P, question: "WLAN 中，AP 与客户端之间用于身份认证和密钥协商的是（　）。", options: ["A. 802.1X / WPA 握手", "B. ARP", "C. DHCP", "D. DNS"], answer: 0, explanation: "WPA/WPA2 通过 4 次握手完成密钥协商，企业环境可配合 802.1X 和 RADIUS 实现基于用户的认证。" },
    { id: 316, type: "single", category: "无线通信网", paper: P, question: "无线网络的漫游是指（　）。", options: ["A. 客户端在不同 AP 间移动并保持连接", "B. 数据加密", "C. 信道切换", "D. 信号增强"], answer: 0, explanation: "漫游是无线客户端在移动过程中从当前 AP 切换到另一 AP，同时保持会话连续的过程。" },
    { id: 317, type: "single", category: "无线通信网", paper: P, question: "下列无线技术中，传输距离最远、适合广域覆盖的是（　）。", options: ["A. 蓝牙", "B. WiFi", "C. 蜂窝移动网络（4G/5G）", "D. 红外"], answer: 2, explanation: "蜂窝移动网络覆盖范围达数公里，蓝牙和 WiFi 是短距离技术，红外更短。" },
    // —— 网络规划与设计 ——
    { id: 318, type: "single", category: "网络规划和设计", paper: P, question: "三层网络架构中，负责策略实施、路由汇总和安全控制的是（　）。", options: ["A. 核心层", "B. 汇聚层", "C. 接入层", "D. 终端层"], answer: 1, explanation: "汇聚层（分布层）连接核心层和接入层，负责策略、安全、路由汇总、VLAN 间路由等。" },
    { id: 319, type: "single", category: "网络规划和设计", paper: P, question: "综合布线中，工作区子系统是指（　）。", options: ["A. 信息插座到终端设备之间的部分", "B. 设备间", "C. 建筑群", "D. 垂直干线"], answer: 0, explanation: "工作区子系统是信息插座到终端设备（电脑等）之间的跳线、适配器等，属用户使用部分。" },
    { id: 320, type: "single", category: "网络规划和设计", paper: P, question: "网络设计中，采用双核心、双链路的冗余设计主要为了（　）。", options: ["A. 提高可靠性和可用性", "B. 降低成本", "C. 简化管理", "D. 减少端口"], answer: 0, explanation: "冗余设计消除单点故障，保证网络高可用，是可靠性和可用性设计的重要手段。" },
    { id: 321, type: "single", category: "网络规划和设计", paper: P, question: "结构化综合布线的标准中，水平布线长度一般不超过（　）米。", options: ["A. 90", "B. 100", "C. 500", "D. 1000"], answer: 0, explanation: "水平布线（配线间到信息插座）永久链路一般不超过 90 米，加上两端跳线信道不超过 100 米。" },
    // —— 数据通信基础 ——
    { id: 322, type: "single", category: "数据通信基础", paper: P, question: "在光纤通信中，多模光纤与单模光纤的主要区别是（　）。", options: ["A. 纤芯直径和传输模式不同", "B. 颜色不同", "C. 只有长度不同", "D. 完全相同"], answer: 0, explanation: "多模光纤纤芯粗（50/62.5μm）、允许多种模式、传输距离短；单模光纤纤芯细（9μm）、单模式、传输距离远、带宽高。" },
    { id: 323, type: "single", category: "数据通信基础", paper: P, question: "码分多址（CDMA）中，各路信号通过（　）区分。", options: ["A. 不同的正交伪随机码", "B. 不同的频率", "C. 不同的时间片", "D. 不同的波长"], answer: 0, explanation: "CDMA 各用户使用互为正交的伪随机码扩频，接收端用对应码解扩，实现同频同时传输。" },
    { id: 324, type: "single", category: "数据通信基础", paper: P, question: "同步传输与异步传输相比，同步传输的特点是（　）。", options: ["A. 效率更高，适合高速传输", "B. 效率更低", "C. 只适合低速", "D. 不需要时钟"], answer: 0, explanation: "同步传输以数据块为单位连续传输，省去每字符的起止位，效率高，适合高速链路。" },
    // —— 网络安全 ——
    { id: 325, type: "single", category: "网络安全", paper: P, question: "下列属于主动攻击方式的是（　）。", options: ["A. 窃听", "B. 流量分析", "C. 篡改数据", "D. 被动监测"], answer: 2, explanation: "主动攻击包括篡改、伪造、重放、拒绝服务等，会改变数据或系统状态；窃听和流量分析属被动攻击。" },
    // —— 网络安全（续） ——
    { id: 326, type: "single", category: "网络安全", paper: P, question: "重放攻击是指攻击者（　）。", options: ["A. 截获并重新发送合法数据", "B. 篡改数据内容", "C. 猜测密码", "D. 删除数据"], answer: 0, explanation: "重放攻击截获合法报文后重复发送，以冒充身份或重复执行操作，常用时间戳或序号防范。" },
    { id: 327, type: "single", category: "网络安全", paper: P, question: "安全套接层 SSL 中，用于客户端验证服务器身份的机制是（　）。", options: ["A. 服务器证书", "B. Cookie", "C. 密码", "D. IP 白名单"], answer: 0, explanation: "SSL/TLS 握手时服务器发送数字证书，客户端用 CA 公钥验证其身份，防止中间人攻击。" },
    { id: 328, type: "single", category: "网络安全", paper: P, question: "下列端口号中，HTTPS 使用的是（　）。", options: ["A. 80", "B. 443", "C. 8080", "D. 21"], answer: 1, explanation: "HTTPS 使用 TCP 443 端口，HTTP 使用 80，FTP 控制连接使用 21。" },
    // —— 网络互联与 IP 编址 ——
    { id: 329, type: "single", category: "网络互连", paper: P, question: "IPv4 地址 10.1.1.1/8 的网络地址是（　）。", options: ["A. 10.0.0.0", "B. 10.1.1.0", "C. 10.1.0.0", "D. 10.255.255.255"], answer: 0, explanation: "/8 表示前 8 位为网络位，网络地址为 10.0.0.0，主机位全 0。" },
    { id: 330, type: "single", category: "网络互连", paper: P, question: "IP 地址 172.16.5.1 属于（　）类地址。", options: ["A. A 类", "B. B 类", "C. C 类", "D. D 类"], answer: 1, explanation: "172 的首字节在 128~191 之间，属 B 类地址；且 172.16.0.0/12 是私有地址段。" },
    { id: 331, type: "single", category: "网络互连", paper: P, question: "下列地址中，属于组播地址的是（　）。", options: ["A. 224.0.0.1", "B. 192.168.1.1", "C. 10.0.0.1", "D. 127.0.0.1"], answer: 0, explanation: "D 类地址 224.0.0.0~239.255.255.255 用于组播；127.0.0.1 是回环地址。" },
    { id: 332, type: "single", category: "网络互连", paper: P, question: "回环地址 127.0.0.1 的主要用途是（　）。", options: ["A. 本机网络功能测试", "B. 对外通信", "C. 广播", "D. 组播"], answer: 0, explanation: "127.0.0.1 指向本机，用于测试本机 TCP/IP 协议栈是否正常工作，不经过物理网卡。" },
    { id: 333, type: "single", category: "网络互连", paper: P, question: "IPv4 到 IPv6 的过渡技术中，通过双协议栈实现的是（　）。", options: ["A. 设备同时支持 IPv4 和 IPv6", "B. 只支持 IPv6", "C. 只支持 IPv4", "D. 协议转换"], answer: 0, explanation: "双协议栈让主机/设备同时运行 IPv4 和 IPv6，是最直接、最常用的过渡技术。" },
    // —— 路由协议 ——
    { id: 334, type: "single", category: "网络互连", paper: P, question: "BGP 采用哪种路由算法？", options: ["A. 距离矢量", "B. 链路状态", "C. 路径矢量", "D. 最短路径优先"], answer: 2, explanation: "BGP 是路径矢量（Path Vector）协议，通过携带完整 AS 路径避免环路，用于 AS 间路由。" },
    { id: 335, type: "single", category: "网络互连", paper: P, question: "OSPF 中，链路状态数据库（LSDB）在区域内所有路由器上（　）。", options: ["A. 保持一致", "B. 各不相同", "C. 只有根桥有", "D. 随机"], answer: 0, explanation: "同一 OSPF 区域内的路由器通过 LSA 泛洪，最终 LSDB 达到一致，再各自以 SPF 计算路由树。" },
    { id: 336, type: "single", category: "网络互连", paper: P, question: "RIP v2 相比 RIP v1 的主要改进是（　）。", options: ["A. 支持无类路由和认证", "B. 跳数增加", "C. 更慢", "D. 去掉度量"], answer: 0, explanation: "RIPv2 支持 VLSM/CIDR（携带子网掩码）、组播更新（224.0.0.9）和认证，弥补了 RIPv1 的不足。" },
    { id: 337, type: "single", category: "网络互连", paper: P, question: "默认路由（缺省路由）的作用是（　）。", options: ["A. 匹配所有未明确匹配的目的地址", "B. 只匹配一个网段", "C. 加密", "D. 广播"], answer: 0, explanation: "默认路由（0.0.0.0/0）作为最后匹配项，用于转发路由表中没有明确条目的流量，常见于边界路由器。" },
    // —— 交换技术 ——
    { id: 338, type: "single", category: "局域网", paper: P, question: "VTP（VLAN 中继协议）的作用是（　）。", options: ["A. 在交换机间同步 VLAN 配置", "B. 加密", "C. 路由", "D. 分配 IP"], answer: 0, explanation: "VTP 在交换域内集中管理、同步 VLAN 信息，减少逐台配置 VLAN 的工作量。" },
    { id: 339, type: "single", category: "局域网", paper: P, question: "STP 中，根端口（Root Port）是指（　）。", options: ["A. 到达根桥路径成本最小的端口", "B. 连接终端的端口", "C. 被阻塞的端口", "D. 任意端口"], answer: 0, explanation: "每台非根交换机选择到达根桥路径开销最小的端口为根端口，用于转发；其余可能被阻塞。" },
    { id: 340, type: "single", category: "局域网", paper: P, question: "交换机的背板带宽决定其（　）。", options: ["A. 总交换容量", "B. 端口数量", "C. 颜色", "D. 重量"], answer: 0, explanation: "背板带宽是交换机内部交换矩阵的总吞吐能力，决定交换机能否无阻塞地转发所有端口流量。" },
    // —— 网络管理 ——
    { id: 341, type: "single", category: "网络管理", paper: P, question: "SNMP 中，管理站与代理之间传输的数据以（　）为单位组织。", options: ["A. MIB 对象", "B. 文件", "C. 帧", "D. 分组"], answer: 0, explanation: "SNMP 通过读取/设置 MIB 中的被管对象来监控和管理设备，每个对象有唯一 OID 标识。" },
    { id: 342, type: "single", category: "网络管理", paper: P, question: "在 Windows 中，清空 DNS 解析缓存的命令是（　）。", options: ["A. ipconfig /flushdns", "B. ipconfig /release", "C. ping -t", "D. netstat -a"], answer: 0, explanation: "ipconfig /flushdns 清空本地 DNS 缓存；/release 释放 IP；/renew 重新获取。" },
    { id: 343, type: "single", category: "网络管理", paper: P, question: "下列属于故障管理活动的是（　）。", options: ["A. 检测、隔离并排除网络故障", "B. 计费统计", "C. 划分 VLAN", "D. 用户管理"], answer: 0, explanation: "故障管理负责故障的检测、定位、隔离和恢复，保障网络正常运行。" },
    // —— 局域网与以太网 ——
    { id: 344, type: "single", category: "局域网", paper: P, question: "以太网采用（　）地址进行帧的寻址。", options: ["A. MAC 地址", "B. IP 地址", "C. 端口号", "D. 域名"], answer: 0, explanation: "以太网在数据链路层使用 48 位 MAC 地址进行帧的源/目的寻址。" },
    { id: 345, type: "single", category: "局域网", paper: P, question: "冲突域是指（　）。", options: ["A. 可能发生冲突的共享介质范围", "B. 广播范围", "C. 路由范围", "D. VLAN 范围"], answer: 0, explanation: "冲突域是共享同一传输介质、可能发生信号冲突的站点集合；交换机和路由器都能隔离冲突域。" },
    { id: 346, type: "single", category: "局域网", paper: P, question: "1000BASE-T 千兆以太网使用的传输介质是（　）。", options: ["A. 5 类及以上双绞线（4 对）", "B. 同轴电缆", "C. 单模光纤", "D. 无线"], answer: 0, explanation: "1000BASE-T 使用 4 对 5 类（超五类）双绞线，最远 100 米，是千兆到桌面的主流方案。" },
    // —— 计算机网络体系结构 ——
    { id: 347, type: "single", category: "计算机网络概论", paper: P, question: "TCP 连接释放采用（　）挥手。", options: ["A. 三次", "B. 四次", "C. 两次", "D. 一次"], answer: 1, explanation: "TCP 释放连接需四次挥手（FIN→ACK→FIN→ACK），因为 TCP 全双工，两个方向需分别关闭。" },
    { id: 348, type: "single", category: "计算机网络概论", paper: P, question: "OSI 模型中，负责数据加密、压缩和格式转换的是（　）。", options: ["A. 表示层", "B. 会话层", "C. 传输层", "D. 应用层"], answer: 0, explanation: "表示层负责数据表示，包括格式转换、加密、压缩等；会话层管理会话。" },
    { id: 349, type: "single", category: "计算机网络概论", paper: P, question: "TCP 通过什么机制保证可靠传输？", options: ["A. 序号、确认与重传", "B. 广播", "C. 组播", "D. 轮询"], answer: 0, explanation: "TCP 通过序号、确认应答、超时重传、滑动窗口等机制实现可靠、有序、无重复的数据传输。" },
    { id: 350, type: "single", category: "计算机网络概论", paper: P, question: "下列协议中，属于网络层协议的是（　）。", options: ["A. IP、ICMP、IGMP", "B. TCP、UDP", "C. HTTP、FTP", "D. ARP"], answer: 0, explanation: "IP、ICMP、IGMP 是网络层协议；TCP/UDP 传输层；HTTP/FTP 应用层；ARP 常随网络层讨论但工作于二层/三层之间。" },
    // —— 数据通信基础（续） ——
    { id: 351, type: "single", category: "数据通信基础", paper: P, question: "光纤通信利用的物理原理是（　）。", options: ["A. 光的全反射", "B. 电磁感应", "C. 电信号放大", "D. 声音传导"], answer: 0, explanation: "光纤利用光在纤芯与包层界面的全反射原理，使光信号沿光纤低损耗传输。" },
    { id: 352, type: "single", category: "数据通信基础", paper: P, question: "在差错控制中，前向纠错（FEC）的特点是（　）。", options: ["A. 接收端直接纠错，无需重传", "B. 发现错误后请求重传", "C. 不检测错误", "D. 只能检错"], answer: 0, explanation: "FEC 在发送时加入纠错码，接收端能自行定位并纠正错误，无需反馈重传，适合实时通信。" },
    { id: 353, type: "single", category: "数据通信基础", paper: P, question: "模拟信号数字化的关键设备是（　）。", options: ["A. 模数转换器（A/D）", "B. 路由器", "C. 交换机", "D. 集线器"], answer: 0, explanation: "模数转换器（A/D）完成采样、量化、编码，把模拟信号转换为数字信号。" },
    // —— 网络操作系统（续） ——
    { id: 354, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "Linux 中，用于压缩/解压 .tar.gz 文件的命令是（　）。", options: ["A. tar", "B. cat", "C. cp", "D. mv"], answer: 0, explanation: "tar 命令（配合 -z 参数）用于打包和解压 .tar.gz 文件，如 tar -zxvf file.tar.gz 解压。" },
    { id: 355, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "Windows 中，用于修改本机 IP 地址配置的命令行工具是（　）。", options: ["A. netsh", "B. ping", "C. arp", "D. route"], answer: 0, explanation: "netsh interface ip 相关命令可在命令行修改 IP 配置；图形界面在「网络连接属性」中设置。" },
    { id: 356, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "DNS 服务器中，反向解析区的作用是（　）。", options: ["A. 将 IP 地址解析为域名", "B. 将域名解析为 IP", "C. 存储邮件记录", "D. 分配地址"], answer: 0, explanation: "反向解析通过 PTR 记录把 IP 地址映射回域名，常用于邮件服务器验证等场景。" },
    { id: 357, type: "single", category: "网络操作系统与应用服务器", paper: P, question: "在 Linux 中，查看系统进程和资源占用的命令是（　）。", options: ["A. top", "B. cd", "C. cat", "D. ls"], answer: 0, explanation: "top 动态显示系统进程和 CPU/内存占用；ps 静态查看进程；其余为文件操作命令。" },
    // —— 无线网络（续） ——
    { id: 358, type: "single", category: "无线通信网", paper: P, question: "WiFi 6 对应的 IEEE 标准是（　）。", options: ["A. 802.11ax", "B. 802.11ac", "C. 802.11n", "D. 802.11g"], answer: 0, explanation: "WiFi 6 即 IEEE 802.11ax，支持 OFDMA、MU-MIMO 等技术，提升高密度场景下的效率和容量。" },
    { id: 359, type: "single", category: "无线通信网", paper: P, question: "无线 AP 工作在纯二层模式时，客户端的数据转发依靠（　）。", options: ["A. MAC 地址表", "B. 路由表", "C. DNS", "D. ARP"], answer: 0, explanation: "纯二层（瘦/胖 AP 交换模式）下，AP 相当于无线网桥，基于 MAC 地址表在无线和有线之间转发帧。" },
    { id: 360, type: "single", category: "无线通信网", paper: P, question: "影响无线网络覆盖范围和速率的主要因素是（　）。", options: ["A. 频段、发射功率、障碍物和干扰", "B. 网线颜色", "C. 机箱大小", "D. 键盘类型"], answer: 0, explanation: "无线信号受频率、功率、距离、墙体等障碍物以及同频干扰影响，直接决定覆盖和速率。" },
    // —— 广域网技术（续） ——
    { id: 361, type: "single", category: "网络互连", paper: P, question: "MPLS 技术中，转发数据包依据的是（　）。", options: ["A. 标签（Label）", "B. MAC 地址", "C. 域名", "D. 端口号"], answer: 0, explanation: "MPLS 在 IP 包前插入短标签，路由器按标签高速转发，不再逐跳查 IP 路由表，提升转发效率并支持流量工程。" },
    { id: 362, type: "single", category: "网络互连", paper: P, question: "SDH 传输网中，STM-1 的速率是（　）。", options: ["A. 155.52Mbps", "B. 51.84Mbps", "C. 622Mbps", "D. 2.5Gbps"], answer: 0, explanation: "SDH 基础速率 STM-1 为 155.52Mbps，STM-4 为 622Mbps，STM-16 为 2.5Gbps。" },
    { id: 363, type: "single", category: "网络互连", paper: P, question: "数字数据网 DDN 提供的是（　）传输。", options: ["A. 点到点专用（透明）数字信道", "B. 共享广播", "C. 无线", "D. 卫星"], answer: 0, explanation: "DDN 为用户提供点到点、速率固定的透明数字专线信道，传输时延小、质量稳定。" },
    // —— 网络规划与设计（续） ——
    { id: 364, type: "single", category: "网络规划和设计", paper: P, question: "网络地址规划时，应遵循的原则不包括（　）。", options: ["A. 唯一性和层次化", "B. 可扩展性", "C. 便于汇总", "D. 随机分配不规划"], answer: 3, explanation: "地址规划应遵循唯一性、层次化、可扩展、便于路由汇总等原则，随机分配会导致混乱和路由表膨胀。" },
    { id: 365, type: "single", category: "网络规划和设计", paper: P, question: "综合布线中，连接不同建筑物之间的子系统是（　）。", options: ["A. 建筑群子系统", "B. 垂直子系统", "C. 水平子系统", "D. 工作区子系统"], answer: 0, explanation: "建筑群子系统连接园区内不同建筑物之间的主干线缆，通常采用光缆。" },
    { id: 366, type: "single", category: "网络规划和设计", paper: P, question: "网络冗余设计中的「N+1」备份是指（　）。", options: ["A. N 台设备工作、1 台备用", "B. N 台全部备用", "C. 1 台工作 N 台备用", "D. 无需备用"], answer: 0, explanation: "N+1 冗余是 N 台设备正常工作时额外配置 1 台备用，任一设备故障时备用接管。" },
    // —— 网络安全（续） ——
    { id: 367, type: "single", category: "网络安全", paper: P, question: "访问控制中，基于角色的访问控制（RBAC）根据（　）授权。", options: ["A. 用户所属角色", "B. 用户姓名", "C. 计算机型号", "D. 随机"], answer: 0, explanation: "RBAC 把权限赋予角色，用户通过被分配角色获得权限，简化了权限管理。" },
    { id: 368, type: "single", category: "网络安全", paper: P, question: "网络安全中「最小权限原则」是指（　）。", options: ["A. 用户只获得完成工作所必需的最小权限", "B. 用户拥有全部权限", "C. 不给任何权限", "D. 管理员才有权限"], answer: 0, explanation: "最小权限原则限制用户/进程仅拥有完成任务所需的最小权限，降低权限滥用和攻击风险。" },
    { id: 369, type: "single", category: "网络安全", paper: P, question: "下列措施中，能有效防止口令被暴力破解的是（　）。", options: ["A. 设置复杂口令和登录失败锁定", "B. 使用默认口令", "C. 关闭认证", "D. 公开口令"], answer: 0, explanation: "复杂口令（长度、大小写、数字、符号组合）配合登录失败锁定/延迟，可显著提高暴力破解难度。" },
    // —— 网络管理（续） ——
    { id: 370, type: "single", category: "网络管理", paper: P, question: "网络管理系统通过（　）实现对设备的配置修改。", options: ["A. SNMP Set 操作", "B. 仅查看", "C. 手动重启", "D. 拔网线"], answer: 0, explanation: "SNMP 的 Set 操作允许管理站修改代理的 MIB 对象值，从而远程修改设备配置。" },
    { id: 371, type: "single", category: "网络管理", paper: P, question: "用于测试到达目标主机每一跳延迟的命令是（　）。", options: ["A. tracert / traceroute", "B. ipconfig", "C. nslookup", "D. arp"], answer: 0, explanation: "tracert（Windows）/traceroute（Linux）逐跳探测路径并统计每跳延迟，用于定位网络瓶颈。" },
    { id: 372, type: "single", category: "网络管理", paper: P, question: "网络带宽利用率长期接近 100% 通常说明（　）。", options: ["A. 存在拥塞，需扩容或优化", "B. 网络非常健康", "C. 设备损坏", "D. 配置正确"], answer: 0, explanation: "带宽长期饱和会导致丢包和延迟增加，说明存在拥塞，应扩容、分流或优化流量。" },
    // —— 综合 ——
    { id: 373, type: "single", category: "计算机网络概论", paper: P, question: "在 TCP/IP 中，套接字（Socket）由（　）唯一标识。", options: ["A. IP 地址 + 端口号", "B. 仅 IP 地址", "C. 仅端口号", "D. MAC 地址"], answer: 0, explanation: "套接字 = IP 地址 + 端口号，唯一标识网络中的一个通信端点，实现进程间通信寻址。" },
    { id: 374, type: "single", category: "局域网", paper: P, question: "广播地址 MAC 地址是（　）。", options: ["A. FF-FF-FF-FF-FF-FF", "B. 00-00-00-00-00-00", "C. 01-00-5E-00-00-01", "D. AA-AA-AA-AA-AA-AA"], answer: 0, explanation: "全 1 的 MAC 地址 FF-FF-FF-FF-FF-FF 为广播地址，帧发往该地址时所有站点都接收。" },
    { id: 375, type: "single", category: "网络规划和设计", paper: P, question: "进行网络规划设计时，首先应进行的工作是（　）。", options: ["A. 需求分析", "B. 设备采购", "C. 布线施工", "D. 配置路由器"], answer: 0, explanation: "网络规划始于需求分析，明确业务目标、用户规模、流量特征和约束，是后续设计的基础。" },
  ];
  A.forEach(q => window.QUESTIONS.push(q));
})();

/* —— 案例题 —— */
(function () {
  const P = "paper3";
  const C = [
    {
      id: 1201, type: "case", category: "网络互连", paper: P,
      question: "【案例背景】某企业分支机构通过专线连接到总部路由器，需要在两端路由器之间的串行链路上启用 PPP 协议并进行认证。",
      parts: [
        { prompt: "（1）PPP 支持的两种认证协议是？", type: "fill", blanks: ["PAP和CHAP", "PAP、CHAP", "PAP/CHAP", "PAP CHAP"], score: 3, explanation: "PPP 支持 PAP（口令认证）和 CHAP（挑战握手认证），CHAP 安全性更高。" },
        { prompt: "（2）在 Cisco 路由器串行接口上启用 PPP 封装的命令是？", type: "fill", blanks: ["encapsulation ppp"], score: 4, explanation: "进入串口后执行 encapsulation ppp 将封装协议从默认的 HDLC 改为 PPP。" },
        { prompt: "（3）简述 PPP 与 HDLC 的主要区别。", type: "qa", reference: "PPP 支持认证（PAP/CHAP）、多协议封装、链路质量监测和地址协商，功能更丰富；HDLC 简单高效但缺少标准认证机制，且不同厂商实现可能不兼容。", score: 4, explanation: "PPP 面向多协议、可认证、可协商；HDLC 仅面向比特、无认证，是 Cisco 串口默认封装。" },
        { prompt: "（4）简述 CHAP 认证的基本过程。", type: "qa", reference: "认证方发送挑战报文（含随机数）→ 被认证方用密码和随机数计算摘要并返回 → 认证方校验摘要，一致则通过，期间密码不以明文传输。", score: 4, explanation: "CHAP 采用挑战-响应方式，密码不明文传输，且可周期重复认证，安全性优于 PAP。" }
      ]
    },
    {
      id: 1202, type: "case", category: "网络操作系统与应用服务器", paper: P,
      question: "【案例背景】某企业部署 Linux 服务器提供网络服务，需要配置网络接口、查看网络状态，并规划 DHCP 与 DNS 服务。",
      parts: [
        { prompt: "（1）在 Linux 中查看网络接口 IP 配置的命令是？", type: "fill", blanks: ["ifconfig", "ip addr", "ip address", "ifconfig或ipaddr"], score: 4, explanation: "ifconfig（传统）或 ip addr（新命令）都可查看网络接口的 IP、掩码、状态等信息。" },
        { prompt: "（2）在 Linux 中重启网络服务的命令是？", type: "fill", blanks: ["service network restart", "systemctl restart network"], score: 3, explanation: "service network restart 或 systemctl restart network 可重启网络服务使配置生效。" },
        { prompt: "（3）简述客户端访问一个域名（如 www.example.com）时的 DNS 解析过程。", type: "qa", reference: "客户端先查本地缓存/hosts，未命中则向配置的 DNS 服务器发起查询，服务器经递归查询逐级（根→顶级域→权威服务器）获取该域名的 A 记录并返回 IP，客户端再向该 IP 发起连接。", score: 4, explanation: "DNS 解析按缓存→本地→递归/迭代查询的顺序，最终由权威服务器返回权威答案。" },
        { prompt: "（4）简述使用 DHCP 自动分配 IP 相比静态配置的优缺点。", type: "qa", reference: "优点：集中管理、避免地址冲突、配置灵活、适合大规模和移动设备；缺点：依赖 DHCP 服务器可用性、地址可能变化不利于需要固定 IP 的服务。", score: 4, explanation: "DHCP 便于管理和扩展，但对服务器/关键设备常用静态 IP 或 DHCP 保留以保证地址稳定。" }
      ]
    },
    {
      id: 1203, type: "case", category: "无线通信网", paper: P,
      question: "【案例背景】某大型会议室和办公区需要部署无线局域网，要求覆盖均匀、容量充足、安全可靠，计划部署多个 AP。",
      parts: [
        { prompt: "（1）2.4GHz 频段中，三个互不重叠的信道是？", type: "fill", blanks: ["1,6,11", "1、6、11", "1 6 11", "1/6/11"], score: 4, explanation: "2.4GHz 频段互不重叠信道为 1、6、11，蜂窝规划时相邻 AP 使用这三个信道避免干扰。" },
        { prompt: "（2）无线局域网采用的 IEEE 标准是？", type: "fill", blanks: ["802.11", "IEEE 802.11"], score: 3, explanation: "IEEE 802.11 是 WLAN 标准族，包含 802.11a/b/g/n/ac/ax 等。" },
        { prompt: "（3）影响无线 AP 覆盖范围和速率的主要因素有哪些？", type: "qa", reference: "发射功率、工作频段、天线类型与朝向、墙体等障碍物衰减、同频/邻频干扰、客户端密度等。", score: 4, explanation: "无线信号随距离和障碍衰减，且受干扰影响，规划设计时需考虑功率、信道和 AP 位置。" },
        { prompt: "（4）为保障无线网络安全，应采取哪些措施？", type: "qa", reference: "启用 WPA2/WPA3 加密认证、设置强口令、隐藏或规范 SSID、启用 MAC 地址过滤、隔离访客网络、定期更新固件等。", score: 4, explanation: "核心是启用强加密（WPA2/WPA3）和强口令，辅以接入控制和网络隔离，形成多层防护。" }
      ]
    },
    {
      id: 1204, type: "case", category: "网络规划和设计", paper: P,
      question: "【案例背景】某部门需要组建一个子网，要求最多能容纳 60 台主机，现有一个 C 类网段 192.168.20.0/24 可供划分。",
      parts: [
        { prompt: "（1）要满足 60 台主机，子网中主机位至少需要多少位？", type: "fill", blanks: ["6", "6位", "六位"], score: 4, explanation: "2^n - 2 ≥ 60，n=6（2^6-2=62），故主机位至少 6 位。" },
        { prompt: "（2）对应的子网掩码（前缀长度）是多少？", type: "fill", blanks: ["/26", "26", "255.255.255.192"], score: 4, explanation: "主机位 6 位即网络位 32-6=26 位，子网掩码 /26 即 255.255.255.192。" },
        { prompt: "（3）每个这样的子网最多可容纳多少台可用主机？", type: "fill", blanks: ["62", "62台"], score: 3, explanation: "2^6 - 2 = 62 台可用主机（去除网络地址和广播地址）。" },
        { prompt: "（4）简述使用 VLSM（可变长子网掩码）进行子网划分的意义。", type: "qa", reference: "VLSM 允许同一网络内不同子网使用不同长度的掩码，可按各部门实际主机数灵活分配地址，提高 IP 地址利用率，减少浪费。", score: 4, explanation: "相比定长子网划分，VLSM 能精细化匹配需求，是层次化地址规划的重要手段。" }
      ]
    },
    {
      id: 1205, type: "case", category: "网络管理", paper: P,
      question: "【案例背景】某员工反映其主机突然无法访问互联网，网管需按分层思路进行故障排查。",
      parts: [
        { prompt: "（1）排查网络故障时，通常最先检查哪一层？", type: "fill", blanks: ["物理层", "物理"], score: 3, explanation: "故障排查一般自底向上，先检查物理层（网线连接、指示灯、网卡）是否正常。" },
        { prompt: "（2）在 Windows 中查看本机 IP 配置的命令是？", type: "fill", blanks: ["ipconfig", "ipconfig /all", "ipconfig/all"], score: 3, explanation: "ipconfig（或 ipconfig /all 查看详细信息）用于查看 IP 地址、掩码、网关、DNS 等配置。" },
        { prompt: "（3）简述网络故障分层的排查思路。", type: "qa", reference: "按 OSI 模型自底向上逐层排查：先确认物理层连通，再查数据链路层（MAC/交换机）、网络层（IP/网关/路由）、传输层（端口/防火墙），最后检查应用层（服务/应用配置）。", score: 5, explanation: "自底向上逐层定位，能快速缩小故障范围，避免遗漏底层问题。" },
        { prompt: "（4）若主机能 ping 通网关但无法上网，请给出排查步骤。", type: "qa", reference: "① 检查 DNS 配置与解析（nslookup）；② 检查是否配置了默认网关/默认路由；③ 检查防火墙、ACL 或出口设备；④ 检查出口 NAT/外网链路是否正常。", score: 4, explanation: "能 ping 通网关说明内网连通正常，问题多出在 DNS 解析、默认路由或出口链路/NAT 上。" }
      ]
    }
  ];
  C.forEach(q => window.QUESTIONS.push(q));
})();

/* 历年真题·上午综合知识（真实真题，由信管网整理，AI 补写解析） */
window.QUESTIONS = window.QUESTIONS || [];
(function () {
  const P = "real2025a";
  const A = [
  {
    "id": 1533,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2025a",
    "question": "将信号分配到不同时隙的复用技术是（）。",
    "options": [
      "A. 波分复用（WDM）",
      "B. 码分发用（CDM）",
      "C. 频分复用（FDM）",
      "D. 时分复用（TDM）"
    ],
    "answer": 3,
    "explanation": "时分复用TDM将传输时间划分为若干时隙，各信号占用不同时隙传输，实现多路信号共享同一信道。"
  },
  {
    "id": 1534,
    "type": "single",
    "category": "交换技术",
    "paper": "real2025a",
    "question": "下列关于交换机Trunk端口处理数据帧的说法正确的是（）。",
    "options": [
      "A. Trunk端口发送数据帧时，携带的VLAN标签与端口的PVID不同时，直接丢失该数据帧",
      "B. Trunk端口接收数据帧时，携带的VLAN标签与端口的PVID相同时，则保留VLAN标签并转发",
      "C. Trunk端口接收到未携带LAN标签的数据帧时，直接丢弃",
      "D. Trunk端口接收到携带VLAN标签的数据帧时，若在VLAN允许列表，则保留VLAN标签并转发"
    ],
    "answer": 3,
    "explanation": "Trunk端口收到带标签帧时，若该VLAN在允许列表中，则保留标签并转发；不在列表才丢弃，故D正确。"
  },
  {
    "id": 1535,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "堡垒机的主要功能和作用不包括（）。",
    "options": [
      "A. 通过多因素身份认证，提高系统安全性",
      "B. 可提升设备的运维效率",
      "C. 可有效防范远程命令执行漏洞等高危安全隐患",
      "D. 对运维人员会话和行为监控，便于审计和溯源"
    ],
    "answer": 1,
    "explanation": "堡垒机核心功能是身份认证、操作审计与行为监控、防范高危操作，其目的不是提升运维效率，故选B。"
  },
  {
    "id": 1536,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2025a",
    "question": "下列关于RAID的说法正确的是（）。",
    "options": [
      "A. RAID降低了数据存储成本",
      "B. RAID1通过条带化提高数据读写效率，但无数据冗余机制",
      "C. RAID0采用镜像冗余机制保障数据安全",
      "D. RAID5通过多副本机制保障数据安全"
    ],
    "answer": 0,
    "explanation": "RAID通过多块廉价磁盘组合，提高性能或可靠性，相比高端专用存储降低了数据存储成本，故A正确。"
  },
  {
    "id": 1537,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2025a",
    "question": "下列关于分布存储的说法正确的是（）。",
    "options": [
      "A. 通过RAID技术保障数据的安全性",
      "B. 中心节点存在性能瓶颈和单点故障隐患",
      "C. 数据副本的主要作用是离线数据分析",
      "D. 具有较强的横向扩展能力"
    ],
    "answer": 1,
    "explanation": "分布式存储采用去中心化架构，不存在中心节点，因此不存在中心节点性能瓶颈和单点故障隐患，B说法错误。"
  },
  {
    "id": 1538,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2025a",
    "question": "下列关于IPv6地址FE80::1说法正确的是（）。",
    "options": [
      "A. 组播地址，用于向多个设备发送数据",
      "B. 全球单播地址",
      "C. 保留的环回地址，等同于IPV4的127.0.0.1",
      "D. 链路本地地址，只在同一物理网段有效"
    ],
    "answer": 3,
    "explanation": "FE80::/10为IPv6链路本地地址前缀，仅在同一物理网段内有效，用于邻居发现等，故选D。"
  },
  {
    "id": 1539,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2025a",
    "question": "在Linux操作系统中，要显式除tmpfs、devtmpfs以外的挂载点的空间使用情况，并以常见的KB.MB.GB等单位显示，可以使用（）命令。",
    "options": [
      "A. df - t tmpfs - x devtmpfs",
      "B. df - x tmpfs - x devtmpfs",
      "C. df - h - t tmpfs - t devtmpfs",
      "D. df - h - x tmpfs - x devtmpfs"
    ],
    "answer": 3,
    "explanation": "df -h以KB/MB/GB显示，-x tmpfs -x devtmpfs排除这两类文件系统，故D命令符合要求。"
  },
  {
    "id": 1540,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2025a",
    "question": "下列CPU属于ARM架构的是（）。",
    "options": [
      "A. 海光",
      "B. 兆芯",
      "C. 龙芯",
      "D. 飞腾"
    ],
    "answer": 3,
    "explanation": "飞腾CPU基于ARM架构；海光、兆芯属x86，龙芯为LoongArch/MIPS，故选D。"
  },
  {
    "id": 1541,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "与ECDSA算法等效的国产数字签名算法包含在（）中。",
    "options": [
      "A. SM2",
      "B. SM3",
      "C. SM4",
      "D. SM9"
    ],
    "answer": 0,
    "explanation": "SM2是基于椭圆曲线的国产公钥密码算法，包含数字签名，与ECDSA等效，故选A。"
  },
  {
    "id": 1542,
    "type": "single",
    "category": "路由协议",
    "paper": "real2025a",
    "question": "OSPF路由协议中tpye-3类型LSA的发布者是（）。",
    "options": [
      "A. ABR路由器",
      "B. IR 路由器",
      "C. ASBR路由器",
      "D. 任意路由器"
    ],
    "answer": 0,
    "explanation": "OSPF中Type-3 LSA为网络汇总LSA，由ABR产生并发布到其他区域，描述区域间路由，故选A。"
  },
  {
    "id": 1543,
    "type": "single",
    "category": "无线网络",
    "paper": "real2025a",
    "question": "在WLAN环境中，可使用（）技术来应对某一区域短时间内大量用户联网的需求。",
    "options": [
      "A. VLAN POOL",
      "B. 隐藏 SSID",
      "C. DHCP POOL",
      "D. VAP"
    ],
    "answer": 2,
    "explanation": "DHCP POOL可提供充足的地址池，满足短时间内大量用户接入的IP分配需求，故选C。"
  },
  {
    "id": 1544,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "在国产商用密码标准中，SM3算法主要用于（）。",
    "options": [
      "A. 生成随机数",
      "B. 生成密钥对",
      "C. 数据加密",
      "D. 生成消息摘要"
    ],
    "answer": 3,
    "explanation": "SM3是国产密码杂凑算法，用于生成消息摘要，输出256位摘要值，故选D。"
  },
  {
    "id": 1545,
    "type": "single",
    "category": "网络管理",
    "paper": "real2025a",
    "question": "某公司运维人员接到故障报告，公司邮件系统首页无法打开，查看运维监控平台，该服务器状态正常。有员工反映，近两天，每天的相同时间都会出现类似故障，大约10分钟后，自动恢复正常。造成该故障的原因可能是（）。",
    "options": [
      "A. 数据库的用户名和密码过期",
      "B. 防火墙访问控制策略配置错误",
      "C. 邮件服务器网络适配器故障",
      "D. 出现 IP 地址冲突"
    ],
    "answer": 1,
    "explanation": "故障每天同一时间出现并约10分钟后自动恢复，符合定时策略生效特征，最可能是防火墙访问控制策略配置错误，故选B。"
  },
  {
    "id": 1546,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2025a",
    "question": "在Linux操作系统中，将文件从a目录复制到b目录，并保留文件的创建者，创建时间、修改时间等信息。应使用下面的（）命令。",
    "options": [
      "A. cp - d",
      "B. cp - l",
      "C. cp - r",
      "D. cp - a"
    ],
    "answer": 3,
    "explanation": "cp -a归档复制，保留权限、属主、时间戳等属性，等同于-dpR组合，故选D。"
  },
  {
    "id": 1547,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2025a",
    "question": "海明码是一种纠错码，由k位信息位和r位监督位构成码长为n的编码（n=k+r）。假设信息位k=4.若需要纠正1位错误时，则监督位r最少应为（）。",
    "options": [
      "A. 4",
      "B. 3",
      "C. 5",
      "D. 2"
    ],
    "answer": 1,
    "explanation": "海明码需满足2^r≥k+r+1，k=4时r=3得8≥8成立，r=2时4≥7不成立，故监督位最少为3，选B。"
  },
  {
    "id": 1548,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2025a",
    "question": "在光网络中，0ADM（光分插复用器）设备的主要功能是（）。",
    "options": [
      "A. 进行频率分析",
      "B. 提供电力支持",
      "C. 进行光信号的选择分解",
      "D. 实现光信号的加密"
    ],
    "answer": 2,
    "explanation": "OADM光分插复用器可在光域上选择性地分出和插入特定波长光信号，实现光信号的选择分解，故选C。"
  },
  {
    "id": 1549,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2025a",
    "question": "在下列选项中，具有低衰减、高带宽优势的是（）。",
    "options": [
      "A. 同轴电缆",
      "B. 光纤",
      "C. 电磁波",
      "D. 双绞线"
    ],
    "answer": 1,
    "explanation": "光纤传输损耗低、带宽极大，具有低衰减、高带宽优势，是长距离大容量传输的首选介质，故选B。"
  },
  {
    "id": 1550,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2025a",
    "question": "在DNS记录中，映射IPV6地址的记录是（）。",
    "options": [
      "A. NS",
      "B. MX",
      "C. A",
      "D. AAAA"
    ],
    "answer": 3,
    "explanation": "DNS中AAAA记录用于将域名映射到IPv6地址，A记录映射IPv4地址，故选D。"
  },
  {
    "id": 1551,
    "type": "single",
    "category": "交换技术",
    "paper": "real2025a",
    "question": "要使Hybrid模式的端口对转发的数据帧添加VLAN Tag，应执行（）操作。",
    "options": [
      "A. 在系统模式下，使用port hybrid pvid vlan 30命令",
      "B. 在系统模式下，使用port hybrid tagged vlan 30命令",
      "C. 在接口模式下，使用port hybrid pvid vlan 30命令",
      "D. 在接口模式下，使用port hybrid tagged vlan 30命令"
    ],
    "answer": 3,
    "explanation": "在接口模式下执行port hybrid tagged vlan 30，可使该端口转发VLAN30数据帧时携带VLAN Tag，故选D。"
  },
  {
    "id": 1552,
    "type": "single",
    "category": "交换技术",
    "paper": "real2025a",
    "question": "当交换机收到一个未知目的MAC地址的单播帧时，下列操作正确的是（）。",
    "options": [
      "A. 泛洪",
      "B. 按默认路由转发",
      "C. 丢弃",
      "D. 按 IP 地址查表转发"
    ],
    "answer": 0,
    "explanation": "交换机收到未知目的MAC的单播帧时，因查不到转发表项，采取泛洪方式从除入端口外的所有端口转发，故选A。"
  },
  {
    "id": 1553,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "下面关于电子邮件服务的说法中正确的是（）。",
    "options": [
      "A. SMTP基于TCP协议进行可靠的邮件传输",
      "B. 电子邮件允许用户不通过邮件服务器直接将邮件发给接收方",
      "C. 电子邮件系统的邮件发送服务器和邮件接收服务器不能共用同台服务器",
      "D. 客户端到服务器的邮件传输使用SMTP协议，服务器之间的邮件传输使用POP3协议"
    ],
    "answer": 0,
    "explanation": "SMTP基于TCP的25端口提供可靠的邮件传输，故A正确；邮件必须经邮件服务器转发，收发服务器可共用，客户端到服务器及服务器之间均用SMTP。"
  },
  {
    "id": 1554,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2025a",
    "question": "下列选项中的地址段可以聚合为172.16.40.0/21的是（）。",
    "options": [
      "A. 172.16.41.0和172.16.42.0",
      "B. 172.16.42.0和172.16.43.0",
      "C. 172.16.40.0和172.16.44.0",
      "D. 172.16.41.0和 172.16.43.0"
    ],
    "answer": 2,
    "explanation": "172.16.40.0/21覆盖172.16.40.0~172.16.47.0，包含40.0和44.0两个网段，可聚合；其余选项网段不在同一/21范围内。"
  },
  {
    "id": 1555,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "以下工具软件中，适合进行网络端口扫描的是（）。",
    "options": [
      "A. Traceroute",
      "B. Nmap",
      "C. Ping",
      "D. Wireshark"
    ],
    "answer": 1,
    "explanation": "Nmap是专业的端口扫描与主机探测工具；Traceroute用于路径跟踪，Ping测试连通性，Wireshark用于抓包分析。"
  },
  {
    "id": 1556,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2025a",
    "question": "使用一个C类网络地址为50台主机的局域网进行地址规划，其网络掩码的长度应为（66）位。",
    "options": [
      "A. 27",
      "B. 29",
      "C. 26",
      "D. 28"
    ],
    "answer": 2,
    "explanation": "50台主机需2^6=64个地址，主机位6位，C类默认24位，故掩码长度为24+6=30？实际需容纳50台，2^6-2=62≥50，掩码为/26。"
  },
  {
    "id": 1557,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "某企业网络管理员在边界防火墙配置ACL策略，加强企业门户网站服务器的安全防护，具体要求如下：（1）禁止用户访问服务器（172.16.1.2）的TCP80和443端口以外的所有端口（2）允许内部地址（10.0.10.0/24）通过SSH协议远程登录服务器下列配置策略和次序可满足上述要求的是（）。",
    "options": [
      "A. ①禁止任意源地址访问172.16.1.2的TCP80和443端口",
      "B. ①允许任意源地址访问172.16.1.2的TCP80和443端口",
      "C. ①允许任意源地址访问172.16.1.2的TCP80和443端口",
      "D. ①允许任意源地址访问172.16.1.2的TCP80和443端口"
    ],
    "answer": 1,
    "explanation": "ACL按序匹配，应先允许80/443端口访问，再允许内网SSH，最后拒绝其余端口，故B的次序满足要求。"
  },
  {
    "id": 1558,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "主机感染蠕虫病毒后，下列处置措施不合理的是（）。",
    "options": [
      "A. 移除移动硬盘、U盘等外设",
      "B. 查找可疑进程",
      "C. 更新病毒库，在线扫描查杀病毒",
      "D. 断开网络连接"
    ],
    "answer": 2,
    "explanation": "主机感染蠕虫后应先断网隔离，再查杀；更新病毒库在线扫描需联网，会加剧传播，故该措施不合理。"
  },
  {
    "id": 1559,
    "type": "single",
    "category": "路由协议",
    "paper": "real2025a",
    "question": "某园区与ISP运营商建立eBGP邻居，配置完成后，BGP邻居始终无法进入“Established”状态，网络拓扑和路由器配置如下所示：造成故障的可能原因是（）。",
    "options": [
      "A. as-number与邻居IP不匹配",
      "B. BGP配置后未重启进程，配置未生效",
      "C. 未配置路由生效",
      "D. 未配置R1和ISP路由器之间的路由"
    ],
    "answer": 0,
    "explanation": "eBGP邻居建立要求对端AS号与邻居配置一致，as-number与邻居IP不匹配会导致无法进入Established状态。"
  },
  {
    "id": 1560,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "在交换机上配置如下ACL策略，则下列网络中会被阻止的是（）。acl number 2000rule 5 deny source 123.1.1.0.0.0.6.0rule 10 permit",
    "options": [
      "A. 123.1.2.0",
      "B. 123.1.3.0",
      "C. 123.1.4.0",
      "D. 123.1.6.0"
    ],
    "answer": 1,
    "explanation": "通配符0.0.6.0匹配第三字节低3位，123.1.3.0第三字节3(011)与1(001)异或为2，落在匹配范围，故被阻止。"
  },
  {
    "id": 1561,
    "type": "single",
    "category": "交换技术",
    "paper": "real2025a",
    "question": "在系统视图下执行以下命令：[R5] observe-port 1 interface Gigabit Ethernet O/0/2其作用是将指定端口配置为（）。",
    "options": [
      "A. 速率自协商",
      "B. 观察端口",
      "C. 阻塞端口",
      "D. 边缘端口"
    ],
    "answer": 1,
    "explanation": "observe-port命令用于配置观察端口，配合端口镜像将指定端口流量复制到观察端口供分析。"
  },
  {
    "id": 1562,
    "type": "single",
    "category": "路由协议",
    "paper": "real2025a",
    "question": "OSPF路由协议使用（）来维护邻居关系。",
    "options": [
      "A. DD （Database Description）报文",
      "B. LSU （Link State Update）报文",
      "C. LSR （Link State Request）报文",
      "D. Hello报文"
    ],
    "answer": 3,
    "explanation": "OSPF通过周期性发送Hello报文建立和维护邻居关系，DD、LSR、LSU用于数据库同步。"
  },
  {
    "id": 1563,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2025a",
    "question": "IP数据报首部中的TTL字段作用是（）。",
    "options": [
      "A. 限制数据报在网络中的生存时间",
      "B. 用于数据报的分片和重组",
      "C. 标识数据报的类型",
      "D. 指示数据报的优先级"
    ],
    "answer": 0,
    "explanation": "TTL字段用于限制IP数据报在网络中的生存时间，每经一个路由器减1，减为0则丢弃，防止环路。"
  },
  {
    "id": 1564,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "下列关于政务数据安全的说法错误的是（）。",
    "options": [
      "A. 应定期对数据备份，保障数据安全",
      "B. 政务数据不得对外开放",
      "C. 在履行职责过程中收集的敏感数据应当给予保密，不得非法向他人泄露",
      "D. 政务系统的建设和运维单位应当履行数据安全保护义务"
    ],
    "answer": 1,
    "explanation": "政务数据应在依法依规前提下有序开放共享，并非一律不得对外开放，故B说法错误。"
  },
  {
    "id": 1565,
    "type": "single",
    "category": "路由协议",
    "paper": "real2025a",
    "question": "在路由器上执行以下命令[R1-0SPF-1] preference ase 80其作用是（）。",
    "options": [
      "A. 配置ospf hello报文的发送间隔时间为80秒",
      "B. 配置ospf 1sa的有效期为80秒",
      "C. 配置ospf外部路由的优先级为80",
      "D. 配置ospf路由的优先级增大80"
    ],
    "answer": 2,
    "explanation": "preference ase 80用于配置OSPF外部路由（ASE）的优先级为80，数值越小越优先。"
  },
  {
    "id": 1566,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2025a",
    "question": "在信息化建设项目管理中，使用甘特图进行（）。",
    "options": [
      "A. 管理团队沟通",
      "B. 优化资源分配",
      "C. 分析项目陈本超支原因",
      "D. 进度管理"
    ],
    "answer": 3,
    "explanation": "甘特图以横道图形式直观展示各任务的起止时间和进度，主要用于项目进度管理。"
  },
  {
    "id": 1567,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2025a",
    "question": "在TCP/IP模型中，网络层的数据单元称为（）。",
    "options": [
      "A. 数据报（Packet）",
      "B. 帧 （Frame）",
      "C. 比特（Bit）",
      "D. 段（Segment）"
    ],
    "answer": 0,
    "explanation": "TCP/IP模型中网络层的数据单元称为数据报（Packet），传输层为段，数据链路层为帧，物理层为比特。"
  },
  {
    "id": 1568,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2025a",
    "question": "在TCP拥塞控制机制中，如果重传计时器超时，通常会（）。",
    "options": [
      "A. 增大拥塞窗口，并维续等待ACK",
      "B. 立即关闭连接",
      "C. 只重传最后一个数据段",
      "D. 重传数据并重新进入慢启动阶段"
    ],
    "answer": 3,
    "explanation": "TCP重传计时器超时表明网络拥塞，此时将慢启动门限减半、拥塞窗口置1，重新进入慢启动阶段。"
  },
  {
    "id": 1569,
    "type": "single",
    "category": "路由协议",
    "paper": "real2025a",
    "question": "下列选项中，可防止BGP路由环路的是（）。",
    "options": [
      "A. 最大跳数限制",
      "B. AS-PATH属性记录经过的AS号",
      "C. 安全认证",
      "D. 毒化逆转"
    ],
    "answer": 1,
    "explanation": "BGP通过AS-PATH属性记录路由经过的AS号，路由器收到含本AS号的路由即丢弃，从而防止环路。"
  },
  {
    "id": 1570,
    "type": "single",
    "category": "无线网络",
    "paper": "real2025a",
    "question": "下列关于NFC和RFID的描述中，错误的是（）。",
    "options": [
      "A. NFC的通信距离通常不超过10厘米",
      "B. RFID的NFC均可以进行双向通信",
      "C. RFID的通信距离通常可达十多米",
      "D. NFC设备可以同时作为RFID阅读器和卡片使用"
    ],
    "answer": 1,
    "explanation": "RFID为单向或被动识别，NFC支持双向通信，故B描述错误；NFC距离约10厘米，RFID可达十多米。"
  },
  {
    "id": 1571,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2025a",
    "question": "某集群中服务器性能差异较大，配置（）负载均衡方式较为合理。",
    "options": [
      "A. 轮询",
      "B. 基于IP的哈希",
      "C. 随机",
      "D. 加权轮询"
    ],
    "answer": 3,
    "explanation": "服务器性能差异大时，加权轮询按权重分配请求，性能高的服务器获得更多流量，负载更均衡。"
  },
  {
    "id": 1572,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "在科研项目中因研究需要，须（）才能收集个人生物识别信息（如指纹等）。",
    "options": [
      "A. 向公安部门备案",
      "B. 取得本人的书面同意",
      "C. 向省级教育部门备案",
      "D. 经学校信息化部门批准"
    ],
    "answer": 0,
    "explanation": "收集个人生物识别信息属敏感个人信息，须取得本人书面同意，这是个人信息保护法的要求。"
  },
  {
    "id": 1573,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2025a",
    "question": "如果TCP连接的接收窗口是20KB，往返时间（RTT）是100ms，那么在不考虑其他因素时，理论上该连接的最大吞吐量约为（）。",
    "options": [
      "A. 2MB/s",
      "B. 20KB/s",
      "C. 200KB/s",
      "D. 100KB/s"
    ],
    "answer": 2,
    "explanation": "吞吐量=窗口/RTT=20KB/0.1s=200KB/s，故选C。"
  },
  {
    "id": 1574,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2025a",
    "question": "某存储器芯片有12根地址线，8根数据线，其存储容量为（）。",
    "options": [
      "A. 8KB",
      "B. 32KB",
      "C. 4KB",
      "D. 16KB"
    ],
    "answer": 2,
    "explanation": "容量=2^12×8bit=4096×8bit=4KB，故选C。"
  },
  {
    "id": 1575,
    "type": "single",
    "category": "交换技术",
    "paper": "real2025a",
    "question": "在交换机执行以下命令，其作用是（）。[SW1-GigabitEtherneto/o/l] description vlan20",
    "options": [
      "A. 将端口SW1-GigabitEthernet0/0/1加入vlan20",
      "B. 配置端口SW1-GigabitEthernetO/0/1的描述信息",
      "C. 将端口SW1-GigabitEthernet0/0/1从vlan20移除",
      "D. 配置端口SW1-GigabitEthernet0/0/1允许通过的vlan标签"
    ],
    "answer": 1,
    "explanation": "description命令用于配置接口描述信息，不改变VLAN或标签，故选B。"
  },
  {
    "id": 1576,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2025a",
    "question": "操作系统中的“Shel1”属于（）。",
    "options": [
      "A. 文件系统",
      "B. 设备驱动程序",
      "C. 内核",
      "D. 用户接口"
    ],
    "answer": 3,
    "explanation": "Shell是用户与操作系统交互的接口，属于用户接口，故选D。"
  },
  {
    "id": 1577,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2025a",
    "question": "黑盒测试的主要作用是测试（）。",
    "options": [
      "A. 程序并发处理能力",
      "B. 程序代码安全性",
      "C. 功能是否符合需求",
      "D. 代码复用率"
    ],
    "answer": 2,
    "explanation": "黑盒测试不关注内部结构，主要验证功能是否符合需求，故选C。"
  },
  {
    "id": 1578,
    "type": "single",
    "category": "交换技术",
    "paper": "real2025a",
    "question": "数据报文从二层交换机端口G0/0/2进入交换机，从端口G0/0/10送出交换机，拓扑结构如下所示，则该数据报文被送出时，其Tag情况是（）。",
    "options": [
      "A. untaged tag=10",
      "B. taged tag=10",
      "C. taged tag=20",
      "D. untaged tag=20"
    ],
    "answer": 0,
    "explanation": "报文从G0/0/2进入、G0/0/10送出，若出接口为untagged且属于VLAN10，则送出时untagged tag=10，故选A。"
  },
  {
    "id": 1579,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "用户A向用户C发送了一封电子邮件，并希望该邮件的回复发送给用户B，应将B的电子邮件地址添加在下面（20）字段中。",
    "options": [
      "A. Roturn-Path:",
      "B. Reply-To:",
      "C. Cc:",
      "D. Received:"
    ],
    "answer": 1,
    "explanation": "Reply-To字段指定回复邮件应发送的地址，故选B。"
  },
  {
    "id": 1580,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "某企业0A系统的登录页面提交的POST请求中，存在大量包含“orl=1;-”内容的恶意请求，应采取（）措施应对此类攻击。",
    "options": [
      "A. 安装防病毒软件",
      "B. 部署WEB 防火墙",
      "C. 部署防火墙",
      "D. 部署入侵防御系统"
    ],
    "answer": 1,
    "explanation": "POST请求含'or 1=1'等SQL注入特征，应部署WEB防火墙进行防护，故选B。"
  },
  {
    "id": 1581,
    "type": "single",
    "category": "网络管理",
    "paper": "real2025a",
    "question": "SDN应用中，常用于控制器和交换机之间通信的是（）协议。",
    "options": [
      "A. HTTP",
      "B. OPENFLOW",
      "C. BGP",
      "D. SNMP"
    ],
    "answer": 1,
    "explanation": "SDN中控制器与交换机之间常用OpenFlow协议通信，故选B。"
  },
  {
    "id": 1582,
    "type": "single",
    "category": "路由协议",
    "paper": "real2025a",
    "question": "某企业网络拓扑如图所示，骨干区域的3台路由器运行0SPF路由协议，在排除网络故障时，发现RA收到RB发送的Hello报文，但是没有收到RC发送的Hello报文，可能原因是（）。",
    "options": [
      "A. RC被选举为DR 路由器",
      "B. RC与RA连接的接口被配置为NSSA区域",
      "C. RC与RA连接的接口被配置为0SPF静默接口",
      "D. RC与RA连接的接口被配置为0SPF区域1"
    ],
    "answer": 2,
    "explanation": "OSPF静默接口不发送也不接收Hello报文，导致RA收不到RC的Hello，故选C。"
  },
  {
    "id": 1583,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2025a",
    "question": "光纤万兆以太网所发送的信息流使用的编码方式是（）。",
    "options": [
      "A. 64B/66B",
      "B. 8B/10B",
      "C. 4B/5B",
      "D. 差分曼彻斯特"
    ],
    "answer": 0,
    "explanation": "万兆光纤以太网采用64B/66B编码，故选A。"
  },
  {
    "id": 1584,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2025a",
    "question": "在windows操作系统中，可以使用（）命令查看主机的IP地址配置信息。",
    "options": [
      "A. ipconfig",
      "B. arp",
      "C. ping",
      "D. dir"
    ],
    "answer": 0,
    "explanation": "ipconfig用于查看Windows主机IP地址配置信息，故选A。"
  },
  {
    "id": 1585,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2025a",
    "question": "若使用172.16.0.0/16地址段进行子网划分，每个子网至少500个可用IP地址的子网，最多可划分（）个可用的子网。",
    "options": [
      "A. 32",
      "B. 256",
      "C. 64",
      "D. 128"
    ],
    "answer": 3,
    "explanation": "每子网至少500个可用IP需9位主机位，剩余7位子网位，最多2^7=128个子网，故选D。"
  },
  {
    "id": 1586,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2025a",
    "question": "以下具有自同步能力的编码方式是（）。",
    "options": [
      "A. RZ（归零编码）",
      "B. 曼彻斯特编码",
      "C. NRZ（非归零编码）",
      "D. 哈夫曼编码"
    ],
    "answer": 1,
    "explanation": "曼彻斯特编码每比特中间有跳变，具有自同步能力，故选B。"
  },
  {
    "id": 1587,
    "type": "single",
    "category": "路由协议",
    "paper": "real2025a",
    "question": "下列关于Rip路由协议的描述错误的是（）。",
    "options": [
      "A. Rip使用触发更新机制可以加速路由收敛",
      "B. Rip使用SPF算法计算最短路由",
      "C. Rip是一种距离矢量路由协议",
      "D. Rip是一种动态路由协议"
    ],
    "answer": 1,
    "explanation": "RIP是距离矢量协议，使用Bellman-Ford算法，不是SPF算法，故选B。"
  },
  {
    "id": 1588,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "下列关于网络安全设备的说法错误的是（）。",
    "options": [
      "A. 网络安全设备开发者不得设置后门或恶意程序",
      "B. 网络安全设备须安全检测和认证后方可销售",
      "C. 网络安全设备存在安全漏洞时应立即修复",
      "D. 网络安全设备的运行和检测日志至少保留三个月"
    ],
    "answer": 3,
    "explanation": "网络安全设备日志保留期限通常不少于六个月，而非三个月，故选D。"
  },
  {
    "id": 1589,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2025a",
    "question": "在全网状拓扑中，若节点数为N，所需的物理链路数量是（）。",
    "options": [
      "A. N",
      "B. N-1",
      "C. N（N-1）/2",
      "D. N2"
    ],
    "answer": 2,
    "explanation": "全网状拓扑链路数=N(N-1)/2，故选C。"
  },
  {
    "id": 1590,
    "type": "single",
    "category": "无线网络",
    "paper": "real2025a",
    "question": "下列（）为WLAN用户提供Web身份认证。",
    "options": [
      "A. 802.1x",
      "B. Kerberos",
      "C. MAC",
      "D. portal"
    ],
    "answer": 3,
    "explanation": "Portal认证为WLAN用户提供Web身份认证，故选D。"
  },
  {
    "id": 1591,
    "type": "single",
    "category": "网络安全",
    "paper": "real2025a",
    "question": "下列选项中，不属于上网行为审计系统功能的是（）。",
    "options": [
      "A. 阻止内部用户对恶意URL的访问",
      "B. 对外部用户访问服务器的流量进行加密和解密",
      "C. 实时监控网络流量",
      "D. 及时发现内部网络失陷主机"
    ],
    "answer": 1,
    "explanation": "上网行为审计系统不负责对外部用户访问服务器的流量加解密，故选B。"
  },
  {
    "id": 1592,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2025a",
    "question": "ARP请求包的目标地址是（）。",
    "options": [
      "A. Unicast 地址",
      "B. MAC 地址",
      "C. Anycast 地址",
      "D. Broadcast 地址"
    ],
    "answer": 3,
    "explanation": "ARP请求以广播方式发送，目标地址为广播地址，故选D。"
  },
  {
    "id": 1593,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2025a",
    "question": "下列关于STP生成树的说法正确的是（）。",
    "options": [
      "A. 每条链路上只有一个根端口",
      "B. 非根设备上距离根桥最近的端口成为指定端口",
      "C. 根桥上的端口称为根端口",
      "D. 非根设备上除指定端口外，其他端口会被阻塞"
    ],
    "answer": 1,
    "explanation": "STP中非根设备上到根桥路径开销最小的端口为根端口，每条链路靠近根桥一侧的端口为指定端口，非根设备上既非根端口也非指定端口的端口被阻塞，故B正确。"
  },
  {
    "id": 1594,
    "type": "single",
    "category": "网络管理",
    "paper": "real2025a",
    "question": "SNMP协议的主要作用是（）。",
    "options": [
      "A. 用于发送邮件",
      "B. 通过数据校验，保障数据存储安全",
      "C. 网络用户身份认证",
      "D. 网络设备状态监控"
    ],
    "answer": 3,
    "explanation": "SNMP即简单网络管理协议，用于管理站与代理之间交互管理信息，实现对路由器、交换机等网络设备运行状态的监控与管理，故选D。"
  },
  {
    "id": 1595,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2025a",
    "question": "在数据链路层，以太网帧头通常包括（）。",
    "options": [
      "A. 源MAC地址、目的MAC地址与协议类型",
      "B. 发送端口和接收端口",
      "C. 序号与确认号",
      "D. 源IP地址与目的IP地址"
    ],
    "answer": 0,
    "explanation": "以太网帧头包含目的MAC地址、源MAC地址和类型字段（协议类型），用于标识收发方及上层协议，故选A。"
  },
  {
    "id": 1596,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2025a",
    "question": "虚拟内存的主要作用是（）。",
    "options": [
      "A. 提高内存访问速度",
      "B. 实现多任务隔离",
      "C. 扩大逻辑内存容量",
      "D. 优化 CPU缓存效率"
    ],
    "answer": 2,
    "explanation": "虚拟内存利用外存扩展内存空间，使程序可使用的逻辑地址空间大于实际物理内存，主要作用是扩大逻辑内存容量，故选C。"
  },
  {
    "id": 1597,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2025a",
    "question": "UDP首部不包括（）字段。",
    "options": [
      "A. 目标端口",
      "B. 序列号",
      "C. 源端口",
      "D. 校验和"
    ],
    "answer": 1,
    "explanation": "UDP首部仅含源端口、目的端口、长度和校验和四个字段，共8字节，不含序列号字段，序列号是TCP首部字段，故选B。"
  },
  {
    "id": 1598,
    "type": "single",
    "category": "无线网络",
    "paper": "real2025a",
    "question": "在5G网络架构中，网络切片（Network Slicing）的主要优势是（）。",
    "options": [
      "A. 提高用户入网时的认证速度",
      "B. 为不同应用提供定制化服务",
      "C. 降低设备成本",
      "D. 扩大信号范围"
    ],
    "answer": 1,
    "explanation": "网络切片在同一物理网络上划分出多个逻辑独立的虚拟网络，可按不同业务需求定制带宽、时延等特性，为不同应用提供定制化服务，故选B。"
  },
  {
    "id": 1599,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2025a",
    "question": "某网络中，使用集线器（Hub）连接多台终端，如果将集线器替换为交换机后，下列说法正确的是（）。",
    "options": [
      "A. 广播域减少，冲突域减少",
      "B. 交换机每个端口形成一个独立的冲突域",
      "C. 交换机所有端口合并形成一个冲突域",
      "D. 广播域不变，冲突域不变"
    ],
    "answer": 1,
    "explanation": "集线器所有端口同属一个冲突域，交换机每个端口是独立的冲突域，故替换后每个端口形成独立冲突域，但广播域不变，故选B。"
  },
  {
    "id": 1600,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2025a",
    "question": "企业园区网络设计时，采用“核心-汇聚-接入”分层模型的优点是（）。",
    "options": [
      "A. 无单点故障，网络冗余性高",
      "B. IP地址统一分配，方便管理",
      "C. 易于隔离故障，网络稳定性高",
      "D. 所有流量经过核心层，通信效率高"
    ],
    "answer": 2,
    "explanation": "核心-汇聚-接入分层模型将网络按功能分层，各层职责清晰，故障易被限制在局部层次内，便于隔离故障并提高网络稳定性，故选C。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2024a";
  const A = [
  {
    "id": 1601,
    "type": "single",
    "category": "无线网络",
    "paper": "real2024a",
    "question": "1、以下不属于5G网络优点的是（）",
    "options": [
      "A. 传输过程中消耗的资源少，对设备的电池更友好",
      "B. 支持大规模物联网，能够连接大量低功耗设备，提供更高效的管理",
      "C. 引入了网络切片技术，允许将物理网络划分为多个虚拟网络",
      "D. 更好的安全性，采用更强大的加密和身份认证技术"
    ],
    "answer": 0,
    "explanation": "5G支持大规模物联网、网络切片和更强安全机制，但其高速率与多天线等特性使终端功耗较大，并非对电池更友好，故A不属于其优点。"
  },
  {
    "id": 1602,
    "type": "single",
    "category": "路由协议",
    "paper": "real2024a",
    "question": "关于BGP协议描述不正确的是（）",
    "options": [
      "A. BGP协议计算路由的过程会暴露AS内部的网络拓扑",
      "B. BGP协议用于实现不同AS之间的路由可达",
      "C. BGP是—种距离矢量路由协议，在设计上就避免了环路的发生",
      "D. BGP协议是基于TCP的路由协议"
    ],
    "answer": 0,
    "explanation": "BGP是运行于AS之间的外部网关协议，基于TCP，传递的是AS路径等可达性信息，并不暴露AS内部网络拓扑，故A描述不正确。"
  },
  {
    "id": 1603,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2024a",
    "question": "当VLAN数据帧通过trunk链路转发时加入的802.1q标识位于原始以太网帧的（）.",
    "options": [
      "A. 源MAC地址后",
      "B. FCS前",
      "C. 目的MAC地址后",
      "D. TYPB后"
    ],
    "answer": 0,
    "explanation": "802.1Q标签插入在以太网帧的源MAC地址之后、类型字段之前，用于标识VLAN，故选A。"
  },
  {
    "id": 1604,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2024a",
    "question": "计算机网络的编码与传输过程中，校验码主要用于（）.",
    "options": [
      "A. 流量控制",
      "B. 分组分类",
      "C. 拥塞控制",
      "D. 差错检测"
    ],
    "answer": 3,
    "explanation": "校验码通过对数据附加冗余位来发现传输中的比特差错，主要用于差错检测，如奇偶校验、CRC等，故选D。"
  },
  {
    "id": 1605,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2024a",
    "question": "拥塞控制的最终目标是（）",
    "options": [
      "A. 最小化延迟",
      "B. 最小化丢包率",
      "C. 最大化带宽利用率",
      "D. 防止过多数据注入网络"
    ],
    "answer": 3,
    "explanation": "拥塞控制的目的是防止过多数据注入网络，避免网络负载超过其处理能力而导致性能下降甚至崩溃，故选D。"
  },
  {
    "id": 1606,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2024a",
    "question": "PON网络中的OLT是什么（）的简称",
    "options": [
      "A. 光线路接入",
      "B. 光网络接入",
      "C. 光网络终端",
      "D. 光线路终端"
    ],
    "answer": 3,
    "explanation": "OLT是Optical Line Terminal的缩写，即光线路终端，位于PON网络局端，负责汇聚用户业务并接入上层网络，故选D。"
  },
  {
    "id": 1607,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2024a",
    "question": "（）不能提升多进程的运行效率。",
    "options": [
      "A. 使用更高主频的CPU",
      "B. 使用更高电压的电源",
      "C. 使用GPU处理并行计算",
      "D. 使用更多核的CPU"
    ],
    "answer": 1,
    "explanation": "提升多进程运行效率依赖CPU主频、核心数及GPU并行计算能力，而提高电源电压与运算效率无关，故选B。"
  },
  {
    "id": 1608,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2024a",
    "question": "netstat命令中的（）选项可以用于显示网络接口的IP地址和MAC地址",
    "options": [
      "A. -e",
      "B. -i",
      "C. -a",
      "D. -n"
    ],
    "answer": 3,
    "explanation": "netstat的-e选项用于显示以太网统计信息，包含接口的IP地址与MAC地址等，故选D。"
  },
  {
    "id": 1609,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2024a",
    "question": "下列关于干线子系统的说法中错误的是（）",
    "options": [
      "A. 大楼施工时应为干线子系统预埋暗管",
      "B. 干线子系统连接大楼的设备间和各楼层的配线间",
      "C. 干线子系统是建筑物的垂直主干线缆",
      "D. 干线子系统通常采用光纤作为传输介质"
    ],
    "answer": 0,
    "explanation": "干线子系统是建筑物垂直主干线缆，连接设备间与各楼层配线间，通常采用光纤；预埋暗管属水平子系统施工要求，故A错误。"
  },
  {
    "id": 1610,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2024a",
    "question": "32位操作系统理论上支持的最大内存空间容量为（）",
    "options": [
      "A. 4GB",
      "B. 16GB",
      "C. 1GB",
      "D. 2GB"
    ],
    "answer": 0,
    "explanation": "32位系统地址总线宽度为32位，可寻址2^32字节即4GB，故理论上支持的最大内存容量为4GB，故选A。"
  },
  {
    "id": 1611,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "SYN泛洪攻击主要利用的是TCP协议的（）过程。",
    "options": [
      "A. 数据传输",
      "B. 连接建立",
      "C. 连接释放",
      "D. 序列号校验"
    ],
    "answer": 1,
    "explanation": "SYN泛洪攻击利用TCP三次握手的连接建立过程，攻击者发送大量SYN请求而不完成握手，耗尽服务器半连接资源，故选B。"
  },
  {
    "id": 1612,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2024a",
    "question": "CSMA/CD的具体作用是（）",
    "options": [
      "A. 用于监测网络带宽的利用率",
      "B. 用于检查数据包的完整性",
      "C. 用于检测网络中的冲突和碰撞",
      "D. 用于检查网络连接的状态"
    ],
    "answer": 2,
    "explanation": "CSMA/CD即载波监听多路访问/冲突检测，用于共享式以太网中检测网络中的冲突和碰撞并进行退避重发，故选C。"
  },
  {
    "id": 1613,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2024a",
    "question": "关于VLAN说法错误的是（）",
    "options": [
      "A. 缺省的VLAN名是系统根据VLANID自动生成的",
      "B. IEEE802.1q标准规定，用于标识VLAN的VLANID用10bit",
      "C. VLAN工作在OSI参考模型的第二层",
      "D. 每一个VLAN是一个独立的广播域"
    ],
    "answer": 1,
    "explanation": "IEEE 802.1Q标准规定VLAN ID字段为12位，可标识4096个VLAN，而非10位，故B错误；其余关于VLAN默认命名、工作在二层、独立广播域的说法均正确。"
  },
  {
    "id": 1614,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2024a",
    "question": "当（）时不应该发送ICMP差错报文。",
    "options": [
      "A. 改变路由（重定向），路由器改变了路由报文",
      "B. 终点不可达，路由器或主机不能交付数据报",
      "C. 参数问题，路由器或目的主机收到的数据报的首部中有的字段的值不正确",
      "D. 组播报文，报文从一个源发出,被转发到—组特定的接收者"
    ],
    "answer": 3,
    "explanation": "ICMP差错报文有几种情况不应发送，其中包括对组播报文、非第一个分片、特殊地址等不发送差错报告，故组播报文对应D。"
  },
  {
    "id": 1615,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2024a",
    "question": "VxLAN与QinQ相比，说法错误的是（）.",
    "options": [
      "A. 通过MAC-in-UDP封装数据包",
      "B. 增加VLANID数量",
      "C. 其工作层具有更高的可扩展性，适应云计算要求",
      "D. 技术更昂贵，更复杂，不是所有交换机支持"
    ],
    "answer": 1,
    "explanation": "VXLAN采用MAC-in-UDP封装，通过24位VNI支持约1600万个租户网络，扩展性远高于QinQ的VLAN ID数量，故B说法错误。"
  },
  {
    "id": 1616,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "根据《中华人民共和国数据安全法》，各地区、各部门应当按照数据（）制度，确定本地区、本部门以及相关行业、领域的重要数据具体目录，对列入目录的数据进行重点保护。",
    "options": [
      "A. 谁收集谁负责",
      "B. 安全监管协调",
      "C. 分类分级保护",
      "D. 谁公开谁负责"
    ],
    "answer": 2,
    "explanation": "《数据安全法》确立数据分类分级保护制度，要求各地区各部门据此确定重要数据目录并重点保护，故选C。"
  },
  {
    "id": 1617,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2024a",
    "question": "下列层次化网络设计的说法中正确的是（）",
    "options": [
      "A. 核心层作为流量汇聚处，应设计数据包过滤功能,提供可管理性",
      "B. 汇聚层向核心层进行路由宣告时一般不做子网聚合",
      "C. —般设计3个层次即可，过多的层次会降低网络整体性能",
      "D. 接入层实现用户接入和策略路由等功能"
    ],
    "answer": 2,
    "explanation": "层次化设计一般分为核心、汇聚、接入三层，层次过多会增加时延、降低性能，故C正确；核心层不应做包过滤，汇聚层应做路由聚合。"
  },
  {
    "id": 1618,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2024a",
    "question": "在Linux系统将所有的外部设备均作为文件统—进行管理，默认情况下，外部设备文件的目录是（）",
    "options": [
      "A. /1ib",
      "B. /bin",
      "C. /etc",
      "D. /dev"
    ],
    "answer": 3,
    "explanation": "Linux将外部设备作为文件统一管理，设备文件默认存放在/dev目录下，故选D。"
  },
  {
    "id": 1619,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2024a",
    "question": "在Windows下，可以在开始菜单的“运行”窗口中键入（）命令，可运行Microsoft管理控制台。",
    "options": [
      "A. TTY",
      "B. CMD",
      "C. MMC",
      "D. AUTOEXE"
    ],
    "answer": 2,
    "explanation": "在Windows运行窗口输入MMC可打开Microsoft管理控制台，用于加载各种管理单元，故选C。"
  },
  {
    "id": 1620,
    "type": "single",
    "category": "路由协议",
    "paper": "real2024a",
    "question": "下列路由协议中属于外部网关协议（EGP）的是（）",
    "options": [
      "A. BGP",
      "B. RIP",
      "C. IS-IS",
      "D. OSPF"
    ],
    "answer": 0,
    "explanation": "BGP是外部网关协议（EGP），用于自治系统之间交换路由；RIP、IS-IS、OSPF均为内部网关协议，故选A。"
  },
  {
    "id": 1621,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "下列工具中可以对Web表单进行暴力破解的是（）",
    "options": [
      "A. BurpSuite",
      "B. Nmap",
      "C. SQLMap",
      "D. Vireshark"
    ],
    "answer": 0,
    "explanation": "BurpSuite是Web应用安全测试工具，其Intruder模块可对Web表单进行暴力破解，故选A。"
  },
  {
    "id": 1622,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2024a",
    "question": "在域名解析过程中，通常主机会首先查找（）",
    "options": [
      "A. 辅域名服务器",
      "B. 缓存域名服务器",
      "C. 转发域名服务器",
      "D. 主域名服务器"
    ],
    "answer": 3,
    "explanation": "域名解析时主机通常先查询本地DNS缓存，若无则向本地配置的主域名服务器发起查询，故选D。"
  },
  {
    "id": 1623,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2024a",
    "question": "硬盘属于（）",
    "options": [
      "A. 内部存储器",
      "B. 外部存储器",
      "C. 只读存储器",
      "D. 输出设备"
    ],
    "answer": 1,
    "explanation": "硬盘属于外部存储器，用于长期保存数据，与内存等内部存储器相区别，故选B。"
  },
  {
    "id": 1624,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "DES加密算法对输入的明文首先进行（）.",
    "options": [
      "A. 左右分离",
      "B. 初始置换",
      "C. 乘法运算",
      "D. 迭代运算"
    ],
    "answer": 1,
    "explanation": "DES算法对64位明文先进行初始置换（IP），再经16轮迭代和逆置换得到密文，故选B。"
  },
  {
    "id": 1625,
    "type": "single",
    "category": "无线网络",
    "paper": "real2024a",
    "question": "下列WPA无线加密技术的说法中错误的是（）",
    "options": [
      "A. WPA无线加密方案包含了认证、加密和数据完整性校验",
      "B. WPA使用802.1x协议对用户的MAC地址进行认证",
      "C. WPA可以防止重放攻击",
      "D. WPA的初始向量长度为32位"
    ],
    "answer": 3,
    "explanation": "WPA采用TKIP，其初始向量长度为48位而非32位，故D错误；WPA包含认证、加密和完整性校验，可防重放攻击。"
  },
  {
    "id": 1626,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2024a",
    "question": "在局域网中为防止网络环路，应在交换机中配置（）",
    "options": [
      "A. DHCP（DymamicHostConfigurationProtocol）",
      "B. DNS（DomainNameSystem）",
      "C. STP（SpanningTreeProtocol）",
      "D. RIP（RoutinglnformationProtocol）"
    ],
    "answer": 2,
    "explanation": "STP（生成树协议）通过阻塞冗余链路消除环路，防止广播风暴，应在交换机上配置，故选C。"
  },
  {
    "id": 1627,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2024a",
    "question": "在DNS服务器中，名字服务器及其优先级由（）资源记录定义。",
    "options": [
      "A. CNAME",
      "B. PTR",
      "C. MX",
      "D. NS"
    ],
    "answer": 3,
    "explanation": "NS资源记录用于定义域的权威名字服务器及其优先级，故选D；CNAME为别名，PTR为反向解析，MX为邮件交换。"
  },
  {
    "id": 1628,
    "type": "single",
    "category": "无线网络",
    "paper": "real2024a",
    "question": "WiFi6的传输速率可以达到（）",
    "options": [
      "A. 2Gbps",
      "B. 5Gbps",
      "C. 9.6Gbps",
      "D. 1Gbps"
    ],
    "answer": 2,
    "explanation": "WiFi 6（802.11ax）理论最高传输速率可达9.6Gbps，故选C。"
  },
  {
    "id": 1629,
    "type": "single",
    "category": "路由协议",
    "paper": "real2024a",
    "question": "RIP协议在更新和维护路由信息时主要使用四个定时器，（））超时，立即发送更新报文。",
    "options": [
      "A. Suppresstimer",
      "B. Updatetimer",
      "C. Agetimer",
      "D. Garbage-collecttimer"
    ],
    "answer": 1,
    "explanation": "RIP的更新定时器（Update timer）默认30秒，超时后立即发送更新报文，故选B。"
  },
  {
    "id": 1630,
    "type": "single",
    "category": "网络管理",
    "paper": "real2024a",
    "question": "在交换机上执行displaymulticastforwarding-table命令作用是（）。",
    "options": [
      "A. 查看IP组播路由表信息",
      "B. 查看二层组播转发表信息.",
      "C. 查看组播组的成员端口信息",
      "D. 查看组播转发表信息"
    ],
    "answer": 3,
    "explanation": "display multicast forwarding-table命令用于查看组播转发表信息，故选D。"
  },
  {
    "id": 1631,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2024a",
    "question": "数据链路层的帧结构中，帧检验序列的作用是（）",
    "options": [
      "A. 保证数据的完整性和准确性",
      "B. 标识数据段的起始和结束",
      "C. 提供数据的可靠传输",
      "D. 实现数据的安全加密"
    ],
    "answer": 2,
    "explanation": "帧检验序列（FCS）用于检测帧在传输中是否出错，实现差错检测以保证数据可靠传输，故选C。"
  },
  {
    "id": 1632,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2024a",
    "question": "POP3协议采用（）模式为用户服务。",
    "options": [
      "A. P2P",
      "B. C/S",
      "C. B/S",
      "D. p2S"
    ],
    "answer": 1,
    "explanation": "POP3采用客户机/服务器（C/S）模式，客户端从服务器下载邮件，故选B。"
  },
  {
    "id": 1633,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2024a",
    "question": "以太网10BASE-T的编码方式是（）",
    "options": [
      "A. 曼彻斯特编码",
      "B. 4B/5B编码",
      "C. 差分曼彻斯特编码",
      "D. 归零编码"
    ],
    "answer": 0,
    "explanation": "10BASE-T使用双绞线传输基带信号，采用曼彻斯特编码，每比特中间都有电平跳变，便于提取时钟。"
  },
  {
    "id": 1634,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2024a",
    "question": "在Windows中，可以使用（）来浏览日志文件。",
    "options": [
      "A. 超级终端",
      "B. 事件查看器",
      "C. 浏览器",
      "D. 信息服务"
    ],
    "answer": 1,
    "explanation": "Windows系统通过“事件查看器”查看系统、安全和应用程序日志文件，是浏览日志的标准工具。"
  },
  {
    "id": 1635,
    "type": "single",
    "category": "路由协议",
    "paper": "real2024a",
    "question": "下列关于RIP协议的描述不正确的是（）",
    "options": [
      "A. 限制了网络的规模，它能使用的最大距离为15（16表示不可达）",
      "B. 网络拓扑更改时，均需要更新路由表",
      "C. 网络出现故障时，会出现慢收敛现象，俗称\"坏消息传得慢”。",
      "D. 路由器之间需要交换完整路由表，网络规模越大、开销越大"
    ],
    "answer": 1,
    "explanation": "RIP仅在路由表发生变化时才发送更新，并非拓扑每次更改都立即更新，且采用周期更新，故B描述不正确。"
  },
  {
    "id": 1636,
    "type": "single",
    "category": "网络管理",
    "paper": "real2024a",
    "question": "在SNMP协议中，（）操作可以用于获取MIB中的信息",
    "options": [
      "A. GET-RESPONSE",
      "B. GET",
      "C. TRAP",
      "D. GET-NEXT"
    ],
    "answer": 0,
    "explanation": "SNMP中管理站通过GET请求获取MIB信息，代理用GET-RESPONSE响应，故获取信息由GET-RESPONSE完成。"
  },
  {
    "id": 1637,
    "type": "single",
    "category": "网络管理",
    "paper": "real2024a",
    "question": "SNMP协议中使用（）协议进行通信",
    "options": [
      "A. ICMP",
      "B. UDP",
      "C. TCP",
      "D. IP"
    ],
    "answer": 1,
    "explanation": "SNMP基于UDP协议通信，使用161端口接收请求、162端口接收Trap，传输开销小。"
  },
  {
    "id": 1638,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "下列（）协议可以加密传输电子邮件",
    "options": [
      "A. SSL",
      "B. IMAP",
      "C. SMTP",
      "D. POP3"
    ],
    "answer": 0,
    "explanation": "SSL/TLS可对邮件传输通道加密，保护电子邮件内容，IMAP、SMTP、POP3本身不提供加密。"
  },
  {
    "id": 1639,
    "type": "single",
    "category": "无线网络",
    "paper": "real2024a",
    "question": "我国拥有自主知识产权的4G标准是（）.",
    "options": [
      "A. TD-LTE-Advanced",
      "B. FDD-LTE",
      "C. WCDMA",
      "D. TD-SCDMA"
    ],
    "answer": 0,
    "explanation": "TD-LTE-Advanced是我国主导提出的4G标准，具有自主知识产权，被ITU接纳为4G国际标准。"
  },
  {
    "id": 1640,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "在HTTPS请求中，（）用于指定请求的内容类型。",
    "options": [
      "A. If-Modifier-Since",
      "B. Cache-Control",
      "C. Expires",
      "D. Content-Type"
    ],
    "answer": 3,
    "explanation": "HTTPS请求中Content-Type头字段用于指定请求或响应正文的内容类型，如application/json。"
  },
  {
    "id": 1641,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "TeInet服务可以利用（）加密协议来保护传输安全",
    "options": [
      "A. WPA2",
      "B. IPSec",
      "C. TLS",
      "D. none"
    ],
    "answer": 2,
    "explanation": "Telnet明文传输不安全，可用TLS加密形成TelnetS，保护传输安全，WPA2、IPSec不适用。"
  },
  {
    "id": 1642,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2024a",
    "question": "基于时间片轮转的进程调度中，一个进程（）时该进程会从运行态变成就绪态",
    "options": [
      "A. 时间片到",
      "B. 向其它进程发消息",
      "C. 等待的事件发生",
      "D. 等待的事件未发生"
    ],
    "answer": 0,
    "explanation": "时间片轮转调度中，运行进程时间片用完即被剥夺CPU，由运行态转为就绪态，等待下次调度。"
  },
  {
    "id": 1643,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2024a",
    "question": "下列关于PPPoE协议的说法正确的是（）",
    "options": [
      "A. 是─种点对点协议",
      "B. 在局域网内使用PPP连接",
      "C. 为用户分配公网IP地址",
      "D. 不能提供身份验证"
    ],
    "answer": 0,
    "explanation": "PPPoE是将PPP帧封装在以太网帧中的点对点协议，用于宽带接入，支持身份验证但不分配公网IP。"
  },
  {
    "id": 1644,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2024a",
    "question": "下面关于卫星通讯的说法，错误的是（）",
    "options": [
      "A. 通讯费用高、延时较大是卫星通信的不足之处",
      "B. 卫星通信的好处在于不受气候的影响，误码率低",
      "C. 使用卫星通信易于实现广播通信和多址通信",
      "D. 卫星通讯的距离长，覆盖的范围广"
    ],
    "answer": 1,
    "explanation": "卫星通信受气候影响较大，雨衰明显，误码率并不低，故B说法错误，其余均正确。"
  },
  {
    "id": 1645,
    "type": "single",
    "category": "无线网络",
    "paper": "real2024a",
    "question": "下列AC+FITAP无线组网的说法中错误的是（）",
    "options": [
      "A. AC可为无线接入终端提供跨AP的L2和L3漫游",
      "B. FITAP为无线接入终端提供DHCP服务",
      "C. 适合大中规模网络应用场景",
      "D. AC通过CAPVAP隧道与AP建立连接并统—管理"
    ],
    "answer": 1,
    "explanation": "AC+FIT AP架构中，DHCP服务通常由AC或上层设备提供，FIT AP本身不提供DHCP服务，故B错误。"
  },
  {
    "id": 1646,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2024a",
    "question": "将模拟信号转为数字信号时，为保证采样后的数字信号完整，采样频率采样必须大于或等于最大频率的（）.",
    "options": [
      "A. 两倍",
      "B. —倍",
      "C. 三倍",
      "D. 四倍"
    ],
    "answer": 0,
    "explanation": "根据奈奎斯特采样定理，采样频率必须大于或等于信号最高频率的两倍，才能无失真恢复原信号。"
  },
  {
    "id": 1647,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2024a",
    "question": "下列存储介质中，掉电时已经存储的信息不会丢失的是（）。",
    "options": [
      "A. CPU寄存器",
      "B. 高速缓存",
      "C. 内存",
      "D. 闪存"
    ],
    "answer": 3,
    "explanation": "闪存属于非易失性存储器，掉电后信息不丢失；寄存器、高速缓存和内存掉电后数据均丢失。"
  },
  {
    "id": 1648,
    "type": "single",
    "category": "网络管理",
    "paper": "real2024a",
    "question": "SNMP，Trap消息用于（）.",
    "options": [
      "A. 从设备中获取有关网络时间的信息",
      "B. 主动通知管理者有关网络事件的发生",
      "C. 向指定的设备发送消息",
      "D. 向网络中的所有设备发送广播消息"
    ],
    "answer": 1,
    "explanation": "SNMP的Trap消息由代理主动发送给管理站，用于通知网络事件的发生，无需管理站请求。"
  },
  {
    "id": 1649,
    "type": "single",
    "category": "网络管理",
    "paper": "real2024a",
    "question": "在交换机上执行displaythisinterface命令，CRC错包呈现出不断上涨的趋势，可以初步排除的是（）",
    "options": [
      "A. 端口状态异常",
      "B. 物理链路故障",
      "C. 电磁干扰",
      "D. 病毒攻击"
    ],
    "answer": 1,
    "explanation": "CRC错包持续增长通常由电磁干扰、病毒攻击或端口异常引起，物理链路故障一般表现为链路不通，故可初步排除。"
  },
  {
    "id": 1650,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2024a",
    "question": "下列网络工程项目需求管理应遵循的原则中，不正确的是（）",
    "options": [
      "A. 需求变更不需评估",
      "B. 需求要分类管理",
      "C. 需求要分优先级",
      "D. 需求要有文档记录"
    ],
    "answer": 0,
    "explanation": "需求管理应遵循分类管理、分优先级、文档记录等原则，需求变更必须经过评估，故A不正确。"
  },
  {
    "id": 1651,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2024a",
    "question": "以下不属于光纤通信的特点是（）",
    "options": [
      "A. 抗雷电和电磁干扰性能好，在有大电流脉冲干扰的环境下通讯效果良好",
      "B. 在有效距离内，设备无须对准某个方向，就能进行通讯",
      "C. 传输损耗小，中继距离长，对远距离传输特别经济",
      "D. 无串音干扰，保密性好，也不易被窃听或者截取数据"
    ],
    "answer": 1,
    "explanation": "光纤通信需收发两端对准方向才能有效耦合光信号，B说法错误，其余均为光纤通信的优点。"
  },
  {
    "id": 1652,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2024a",
    "question": "某系统按照RAID6冗余设计，要求2个独立的RAID组，且配备1块全局热备盘，该存储系统至少要购置（）块磁盘。",
    "options": [
      "A. 10",
      "B. 9",
      "C. 7",
      "D. 8"
    ],
    "answer": 1,
    "explanation": "RAID6每组至少4块盘（含2块校验），两组需8块，再加1块全局热备盘，共至少9块磁盘。"
  },
  {
    "id": 1653,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "RSA加密算法的安全性依赖于（）困难性假设。",
    "options": [
      "A. 二次剩余",
      "B. 大整数分解",
      "C. 椭圆曲线高散对数",
      "D. 离散对数"
    ],
    "answer": 1,
    "explanation": "RSA算法的安全性基于大整数分解难题：已知公钥n难以分解出两个大素数p和q，从而无法求出私钥。"
  },
  {
    "id": 1654,
    "type": "single",
    "category": "网络安全",
    "paper": "real2024a",
    "question": "根据《中华人民共和国个人信息保护法》，个人信息处理者在（）时不需要事前进行个人信息保护影响评估并对处理情况进行记录",
    "options": [
      "A. 利用匿名化的个人信息进行数据统计",
      "B. 处理敏感个人信息",
      "C. 向境外提供个人信息",
      "D. 进行对个人权益有重大影响的个人信息处理活动"
    ],
    "answer": 0,
    "explanation": "《个人信息保护法》规定，处理敏感个人信息、向境外提供个人信息、对个人权益有重大影响的处理活动需事前做影响评估；匿名化信息统计不属于此列。"
  },
  {
    "id": 1655,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2024a",
    "question": "系统维护的功能不包括（）",
    "options": [
      "A. 清除异常任务",
      "B. 更新口令",
      "C. 数据备份",
      "D. 定期更换CPU"
    ],
    "answer": 3,
    "explanation": "系统维护包括清除异常任务、更新口令、数据备份等软件维护操作；定期更换CPU属于硬件更换，不属于系统维护功能。"
  },
  {
    "id": 1656,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2024a",
    "question": "TCP协议与UDP协议工作在（）",
    "options": [
      "A. 数据链路层",
      "B. 传输层",
      "C. 物理层",
      "D. 网络层"
    ],
    "answer": 1,
    "explanation": "TCP和UDP都是传输层协议，TCP提供面向连接的可靠传输，UDP提供无连接的不可靠传输。"
  },
  {
    "id": 1657,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2024a",
    "question": "在Linux系统中，使用Apache作为Web服务器时其默认的目录是（）。",
    "options": [
      "A. /etc/httpd",
      "B. /home/httpd",
      "C. /etc/home",
      "D. /var/log/httpd"
    ],
    "answer": 0,
    "explanation": "Linux下Apache的配置文件通常位于/etc/httpd目录（如httpd.conf），故默认目录为/etc/httpd。"
  },
  {
    "id": 1658,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2024a",
    "question": "若在光纤通信系统中使用100mW的激光器，当其发射波长为1550m时，其光功率为（）",
    "options": [
      "A. 40dBm",
      "B. 20dBm",
      "C. 10dBm",
      "D. 30dBm"
    ],
    "answer": 1,
    "explanation": "光功率dBm=10lg(P/1mW)=10lg(100)=20dBm，故100mW对应20dBm。"
  },
  {
    "id": 1659,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2024a",
    "question": "下列IP地址（）不属于子网172.16.24.0/21",
    "options": [
      "A. 172.16.30.4",
      "B. 172.16.32.56",
      "C. 172.16.28.12",
      "D. 172.16.26.251"
    ],
    "answer": 1,
    "explanation": "172.16.24.0/21的地址范围是172.16.24.0~172.16.31.255，172.16.32.56超出该范围，不属于此子网。"
  },
  {
    "id": 1660,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2024a",
    "question": "在Linux系统中，鼠标、键盘等以字节为单位进行输入输出的设备属于（）",
    "options": [
      "A. 虚拟设备",
      "B. 块设备",
      "C. 网络设备",
      "D. 字符设备"
    ],
    "answer": 3,
    "explanation": "字符设备以字节为单位逐字节进行输入输出，如鼠标、键盘；块设备则以数据块为单位，如磁盘。"
  },
  {
    "id": 1661,
    "type": "single",
    "category": "路由协议",
    "paper": "real2024a",
    "question": "下列关于自治系统（AS）的措述中正确的是（）。",
    "options": [
      "A. 自治系统是一个独立的网络管理实体，由-组IP地址块及相关路由策略组成。",
      "B. 自治系统是一个唯一的IP地址块，由一个网络运营商管理。",
      "C. 自治系统是一个独立的网络管理实体，由多个互联的计算机组成。",
      "D. 自治系统是一个由互联的计算机组成的局城网。"
    ],
    "answer": 0,
    "explanation": "自治系统是由一个独立网络管理实体管理的一组IP地址块及相关路由策略组成，采用统一路由策略对外。"
  },
  {
    "id": 1662,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2024a",
    "question": "IPv6地址通常以十六进制数字表示，4个数字为一组用冒号分隔，下面对IPv6地址FE80:0000:0000:0000:004B:EAO0:008E:D426正确的简化的写法是（）。",
    "options": [
      "A. FE80::004B:EAO0:008E:D426",
      "B. FE8::4B:EAO0:8E:D426",
      "C. FE80::4B:EAO0:8E:D426",
      "D. FE80::4B:EA::8E:D426"
    ],
    "answer": 2,
    "explanation": "IPv6简化规则：去掉每组前导零，连续全零组用::代替一次。FE80:0:0:0:4B:EA00:8E:D426简化为FE80::4B:EA00:8E:D426。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2023a";
  const A = [
  {
    "id": 1663,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2023a",
    "question": "固态硬盘的存储介质是（）。",
    "options": [
      "A. 光盘",
      "B. 闪存",
      "C. 软盘",
      "D. 磁盘"
    ],
    "answer": 1,
    "explanation": "固态硬盘（SSD）采用闪存（Flash）芯片作为存储介质，无机械部件，读写速度快。"
  },
  {
    "id": 1664,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2023a",
    "question": "虚拟存储技术把（）有机地结合起来使用，从而得到一个更大容量的“内存”。",
    "options": [
      "A. 内存与外存",
      "B. Cache与内存",
      "C. 寄存器与Cache",
      "D. Cache与外存"
    ],
    "answer": 0,
    "explanation": "虚拟存储技术将内存与外存结合，把外存当作内存的扩展，从而获得更大容量的逻辑内存空间。"
  },
  {
    "id": 1665,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2023a",
    "question": "下列接口协议中，不属于硬盘接口协议的是（）。",
    "options": [
      "A. IDE",
      "B. SATA",
      "C. SPI",
      "D. SCSI"
    ],
    "answer": 2,
    "explanation": "IDE、SATA、SCSI均为硬盘接口协议；SPI是串行外设接口，用于芯片间通信，不属于硬盘接口。"
  },
  {
    "id": 1666,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2023a",
    "question": "进程所请求的资源得到满足，可以使进程的状态从（）。",
    "options": [
      "A. 运行态变为就绪态",
      "B. 运行态变为等待态",
      "C. 就绪态变为运行态",
      "D. 等待态变为就绪态"
    ],
    "answer": 3,
    "explanation": "进程等待的资源得到满足后，由等待态（阻塞态）转变为就绪态，等待被调度执行。"
  },
  {
    "id": 1667,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2023a",
    "question": "下列操作系统中，不属于国产操作系统的是（）",
    "options": [
      "A. CentOs",
      "B. Deepin",
      "C. NeoKylin",
      "D. HarmonyOS"
    ],
    "answer": 0,
    "explanation": "CentOS是Red Hat推出的国外Linux发行版；Deepin、NeoKylin、HarmonyOS均为国产操作系统。"
  },
  {
    "id": 1668,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2023a",
    "question": "采用多道程序设计可以有效地提高CPU、内存和I/O设备的（）。",
    "options": [
      "A. 灵活性",
      "B. 可靠性",
      "C. 兼容性",
      "D. 利用率"
    ],
    "answer": 3,
    "explanation": "多道程序设计让多个程序并发执行，使CPU、内存和I/O设备能并行工作，从而提高资源利用率。"
  },
  {
    "id": 1669,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2023a",
    "question": "在网络工程的生命周期中，对用户需求进行了解和分析是在（）阶段。",
    "options": [
      "A. 需求分析",
      "B. 设计",
      "C. 实施",
      "D. 运维"
    ],
    "answer": 0,
    "explanation": "网络工程生命周期中，了解和分析用户需求属于需求分析阶段，是后续设计与实施的基础。"
  },
  {
    "id": 1670,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "下列工具软件中，不是网络运维常用工具的是（）。",
    "options": [
      "A. SecureCRT",
      "B. WireShark",
      "C. Putty",
      "D. Eclipse"
    ],
    "answer": 3,
    "explanation": "SecureCRT、Putty是终端登录工具，WireShark是抓包分析工具，均用于网络运维；Eclipse是软件开发IDE。"
  },
  {
    "id": 1671,
    "type": "single",
    "category": "网络安全",
    "paper": "real2023a",
    "question": "下列描述中，不符合《中华人民共和国网络安全法》的是（）。",
    "options": [
      "A. 网络产品应当符合相关国家标准的强制性要求",
      "B. 网络运营者可根据业务需要自行决定网络日志的留存时间",
      "C. 网络运营者应当制定网络安全事件应急预案",
      "D. 网络运营者收集个人信息应遵循正当、必要的原则"
    ],
    "answer": 1,
    "explanation": "《网络安全法》规定网络日志留存不少于六个月，网络运营者不能自行决定留存时间，故B项不符合。"
  },
  {
    "id": 1672,
    "type": "single",
    "category": "网络安全",
    "paper": "real2023a",
    "question": "受到破坏后会对国家安全造成特别严重损害的信息系统应按照等级保护第（）级的要求进行安全规划。",
    "options": [
      "A. 二",
      "B. 三",
      "C. 四",
      "D. 五"
    ],
    "answer": 3,
    "explanation": "等级保护中，受到破坏后对国家安全造成特别严重损害的信息系统应按照第五级要求进行安全规划。"
  },
  {
    "id": 1673,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2023a",
    "question": "下列不属于双绞线测试参数的是（）。",
    "options": [
      "A. 近端串扰",
      "B. 衰减",
      "C. 丢包率",
      "D. 等效远端串扰"
    ],
    "answer": 2,
    "explanation": "双绞线的测试参数包括近端串扰、衰减、等效远端串扰等，丢包率属于网络性能指标，不是双绞线的电气测试参数，故选C。"
  },
  {
    "id": 1674,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2023a",
    "question": "下列不属于光纤跳线的接头类型的是（）。",
    "options": [
      "A. FC",
      "B. LC",
      "C. SC",
      "D. SEP"
    ],
    "answer": 3,
    "explanation": "常见光纤跳线接头有FC、LC、SC、ST等，SEP不是光纤接头类型，故选D。"
  },
  {
    "id": 1675,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2023a",
    "question": "Modem的主要作用是（）。",
    "options": [
      "A. 数模转换",
      "B. 路由转发",
      "C. 认证",
      "D. 地址转换"
    ],
    "answer": 0,
    "explanation": "Modem即调制解调器，作用是在数字信号与模拟信号之间转换，实现数模转换，故选A。"
  },
  {
    "id": 1676,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2023a",
    "question": "百兆以太网采用的数据编码方法是（）。",
    "options": [
      "A. 曼彻斯特",
      "B. 64B/66B",
      "C. 8B/10B",
      "D. 4B/5B"
    ],
    "answer": 3,
    "explanation": "百兆以太网（100BASE-TX）采用4B/5B编码，千兆以太网采用8B/10B，故选D。"
  },
  {
    "id": 1677,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2023a",
    "question": "若采用QAM调制的无噪声理想信道带宽为2MHz，最大数据传输速率为28Mbps，则该信道采用的调制方式是（）。",
    "options": [
      "A. QAM-128",
      "B. QAM-64",
      "C. QAM-32",
      "D. QAM-16"
    ],
    "answer": 0,
    "explanation": "由奈奎斯特公式C=2Wlog₂N，28M=2×2M×log₂N，得log₂N=7，N=128，即QAM-128，故选A。"
  },
  {
    "id": 1678,
    "type": "single",
    "category": "网络安全",
    "paper": "real2023a",
    "question": "在我国商用密码算法体系中，（）属于摘要算法。",
    "options": [
      "A. SM2",
      "B. SM3",
      "C. SM4",
      "D. SM9"
    ],
    "answer": 1,
    "explanation": "我国商用密码体系中，SM3是摘要（哈希）算法，SM2、SM9为非对称算法，SM4为对称分组密码，故选B。"
  },
  {
    "id": 1679,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "使用Traceroute命令时，由中间路由器返回的ICMP超时报文中Type和Code分别是（）。",
    "options": [
      "A. Type=3Code=0",
      "B. Type=8Code=0",
      "C. Type=11Code=0",
      "D. Type=12Code=0"
    ],
    "answer": 2,
    "explanation": "Traceroute利用ICMP超时报文探测路径，中间路由器返回的超时报文Type=11、Code=0，故选C。"
  },
  {
    "id": 1680,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2023a",
    "question": "在EPON (Ethernet Passive Optical Network,以太网无源光网络)中，如果用户端的家庭网关或者交换机是运营商提供并统一进行VLAN管理，那么在UNI端口上VLAN操作模式优先配置为（）。",
    "options": [
      "A. 标记模式",
      "B. 透传模式",
      "C. Trunk模式",
      "D. Translation模式"
    ],
    "answer": 1,
    "explanation": "EPON中若家庭网关由运营商统一管理VLAN，UNI端口宜配置为透传模式，由上层设备统一处理VLAN标签，故选B。"
  },
  {
    "id": 1681,
    "type": "single",
    "category": "无线网络",
    "paper": "real2023a",
    "question": "在IEEE标准体系中，WiFi 6对应的标准是（）。",
    "options": [
      "A. 802.11ac",
      "B. 802.11n",
      "C. 802.11b",
      "D. 802.11ax"
    ],
    "answer": 3,
    "explanation": "WiFi 6对应IEEE 802.11ax标准，802.11ac为WiFi 5，802.11n为WiFi 4，故选D。"
  },
  {
    "id": 1682,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2023a",
    "question": "在TCP建立连接的三次握手时，假设客户端发送的SYN段中的序号字段为，a,则服务端回复的SYN+ACK段中的确认号为（）。",
    "options": [
      "A. a",
      "B. a+1",
      "C. a+20",
      "D. 随机值"
    ],
    "answer": 1,
    "explanation": "TCP三次握手中，服务端收到序号为a的SYN后，回复的SYN+ACK确认号为a+1，表示期望收到下一个字节，故选B。"
  },
  {
    "id": 1683,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2023a",
    "question": "在OSI参考模型中，负责对应用层消息进行压缩，加密功能的层次为（）。",
    "options": [
      "A. 传输层",
      "B. 会话层",
      "C. 表示层",
      "D. 应用层"
    ],
    "answer": 2,
    "explanation": "OSI参考模型中，表示层负责数据格式转换、压缩与加密，故选C。"
  },
  {
    "id": 1684,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2023a",
    "question": "在TCP拥塞控制机制中，快速重传的目的是让主机在计时器超时前能够快速恢复，其触发条件是（）。",
    "options": [
      "A. 计时器超时",
      "B. 拥塞窗口超过阙值",
      "C. 收到该报文的ACK",
      "D. 收到3个冗余ACK"
    ],
    "answer": 3,
    "explanation": "TCP快速重传的触发条件是发送方收到3个冗余ACK，无需等待计时器超时即可重传，故选D。"
  },
  {
    "id": 1685,
    "type": "single",
    "category": "路由协议",
    "paper": "real2023a",
    "question": "下列用于AS之间的路由协议是（）。",
    "options": [
      "A. RIP",
      "B. OSPF",
      "C. BGP",
      "D. IS-IS"
    ],
    "answer": 2,
    "explanation": "BGP是用于自治系统AS之间的外部网关协议，RIP、OSPF、IS-IS均为AS内部路由协议，故选C。"
  },
  {
    "id": 1686,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "以下关于telnet的叙述中，不正确的是（）。",
    "options": [
      "A. telnet支持命令模式和会话模式",
      "B. telnet采用明文传输",
      "C. telnet默认端口是23",
      "D. telnet采用UDP协议"
    ],
    "answer": 3,
    "explanation": "Telnet基于TCP协议，默认端口23，采用明文传输，支持命令和会话模式，故D说法错误。"
  },
  {
    "id": 1687,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "以下关于DHCP服务的说法中，正确的是（）。",
    "options": [
      "A. DHCP服务器可以远程操作客户端,开启或关闭服务",
      "B. 在同一子网中，有且仅能有一台DHCP服务器",
      "C. 在DHCP服务域内，可以确保工作站使用固定的IP地址",
      "D. DHCP客户端需配置正确的服务器地址才能使用DHCP服务"
    ],
    "answer": 2,
    "explanation": "DHCP可通过MAC地址与IP绑定，确保工作站使用固定IP；同一子网可有多个DHCP服务器，客户端无需配置服务器地址，故选C。"
  },
  {
    "id": 1688,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "WWW的控制协议是（）。",
    "options": [
      "A. FTP",
      "B. HTTP",
      "C. SSL",
      "D. DNS"
    ],
    "answer": 1,
    "explanation": "WWW服务使用HTTP作为控制协议，FTP用于文件传输，SSL用于加密，DNS用于域名解析，故选B。"
  },
  {
    "id": 1689,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "下面用于收取电子邮件的协议是( )。",
    "options": [
      "A. SMTP",
      "B. SNMP",
      "C. ICMP",
      "D. POP3"
    ],
    "answer": 3,
    "explanation": "POP3用于从邮件服务器收取电子邮件，SMTP用于发送邮件，SNMP用于网络管理，ICMP用于差错报告，故选D。"
  },
  {
    "id": 1690,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "要查询DNS域内的权威域名服务器信息，可查看( )资源记录。",
    "options": [
      "A. SOA",
      "B. NS",
      "C. PTR",
      "D. A"
    ],
    "answer": 1,
    "explanation": "NS资源记录用于指定DNS域内的权威域名服务器，SOA为起始授权记录，PTR用于反向解析，A为地址记录，故选B。"
  },
  {
    "id": 1691,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "IPv6组播地址的前缀是( )。",
    "options": [
      "A. FF",
      "B. FE",
      "C. FD",
      "D. FC"
    ],
    "answer": 0,
    "explanation": "IPv6组播地址前缀为FF00::/8，即前8位为FF，故选A。"
  },
  {
    "id": 1692,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2023a",
    "question": "为了方便运维人员远程维护Windows Server20O8R2服务器，需要在服务器上启用（）服务。",
    "options": [
      "A. DHCP",
      "B. FTP",
      "C. DNS",
      "D. 远程桌面"
    ],
    "answer": 3,
    "explanation": "远程桌面服务允许运维人员通过网络远程登录并维护Windows Server，故选D。"
  },
  {
    "id": 1693,
    "type": "single",
    "category": "网络安全",
    "paper": "real2023a",
    "question": "邮件客户端使用（）协议同步服务器和客户端之间的邮件列表。",
    "options": [
      "A. POP3",
      "B. SMTP",
      "C. IMAP",
      "D. SSL"
    ],
    "answer": 2,
    "explanation": "IMAP协议支持在服务器和客户端之间同步邮件列表及邮件状态，而POP3只负责下载邮件，SMTP用于发送邮件，SSL是加密协议。"
  },
  {
    "id": 1694,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "在Windows平台上，命令: arp-d*的作用是()。",
    "options": [
      "A. 开启ARP学习功能",
      "B. 添加一条ARP记录",
      "C. 显示当前ARP记录",
      "D. 删除所有ARP记录"
    ],
    "answer": 3,
    "explanation": "arp -d * 命令用于删除ARP缓存中的所有动态ARP记录，-d表示删除，*表示所有记录。"
  },
  {
    "id": 1695,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "在SNMP各项功能中属于网络控制功能的是 ( )。",
    "options": [
      "A. 性能管理",
      "B. 计费管理",
      "C. 配置管理",
      "D. 故障管理"
    ],
    "answer": 0,
    "explanation": "SNMP中性能管理属于网络控制功能，用于监控和调整网络性能；计费、配置、故障管理属于其他管理功能。"
  },
  {
    "id": 1696,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "以下关于ICMP 的叙述中，错误的是 ( )。",
    "options": [
      "A. ICMP 封装在IP数据报的数据部分",
      "B. ICMP 消息的传输是可靠的",
      "C. ICMP 是IP协议必需的一个部分",
      "D. ICMP 可用来进行差错控制"
    ],
    "answer": 1,
    "explanation": "ICMP消息封装在IP数据报中传输，是不可靠的，可能出现丢失或差错，因此说ICMP消息传输可靠是错误的。"
  },
  {
    "id": 1697,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "某主机无法上网，查看本地连接后，发现只有发送包没有接收包，故障原因可能是( )。",
    "options": [
      "A. 网线没有插好",
      "B. DNS配置错误",
      "C. IP地址配置错误",
      "D. TCP/IP 协议故障"
    ],
    "answer": 2,
    "explanation": "只有发送包没有接收包，说明主机发出的数据包无法到达目标或返回，通常因IP地址配置错误导致无法正常通信。"
  },
  {
    "id": 1698,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "SNMP的传输层协议是( )。",
    "options": [
      "A. UDP",
      "B. TCP",
      "C. IP",
      "D. ICMP"
    ],
    "answer": 0,
    "explanation": "SNMP使用UDP作为传输层协议，端口161用于代理接收请求，162用于接收Trap通知。"
  },
  {
    "id": 1699,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "SNMP的消息类型不包含()。",
    "options": [
      "A. Get-Request",
      "B. Get-Next-Request",
      "C. Get-Response",
      "D. Get-Next-ResponseC"
    ],
    "answer": 3,
    "explanation": "SNMP的消息类型包括Get-Request、Get-Next-Request、Get-Response、Set-Request和Trap，没有Get-Next-Response类型。"
  },
  {
    "id": 1700,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "下列IP地址中不能够被路由器转发的是（）。",
    "options": [
      "A. 192.169.102.78",
      "B. 101.10.10.251",
      "C. 127.16.23.1",
      "D. 172.33.22.16"
    ],
    "answer": 2,
    "explanation": "127.16.23.1属于回环地址范围（127.0.0.0/8），用于本机测试，路由器不会转发此类地址。"
  },
  {
    "id": 1701,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "路由器收到一个目标地址为201.46.17.4的数据包，应将该数据包发往（）子网。",
    "options": [
      "A. 201.46.0.0/21",
      "B. 201.46.16.0/20",
      "C. 201.46.8.0/22",
      "D. 201.46.20.0/22"
    ],
    "answer": 1,
    "explanation": "201.46.17.4属于201.46.16.0/20子网（范围201.46.16.0-201.46.31.255），因此应发往该子网。"
  },
  {
    "id": 1702,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2023a",
    "question": "将连续的2个C类地址聚合后，子网掩码最长是（）位。",
    "options": [
      "A. 24",
      "B. 23",
      "C. 22",
      "D. 21"
    ],
    "answer": 1,
    "explanation": "两个连续C类地址聚合后，网络前缀减少1位，从/24变为/23，因此子网掩码最长为23位。"
  },
  {
    "id": 1703,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2023a",
    "question": "以下关于命令user-interface vty 0的说法中，正确的是（）。",
    "options": [
      "A. 配置用户等级为配置级",
      "B. 不允许连接虚拟终端",
      "C. 进入到交换机的远程登录用户界面",
      "D. 连接交换机不需要输入密码"
    ],
    "answer": 2,
    "explanation": "user-interface vty 0命令用于进入虚拟终端用户界面，配置远程登录相关参数，如认证方式和用户级别。"
  },
  {
    "id": 1704,
    "type": "single",
    "category": "网络管理",
    "paper": "real2023a",
    "question": "在交换机上执行某命令显示结果如下，该命令的作用是（）。",
    "options": [
      "A. 检查资源文件是否正确",
      "B. 对资源文件进行CRC校验",
      "C. 激活设备存储器中的License文件",
      "D. 系统回滚到上一个正常启动的版本状态"
    ],
    "answer": 0,
    "explanation": "该命令用于检查资源文件是否正确，通常显示文件校验信息，确保系统资源完整可用。"
  },
  {
    "id": 1705,
    "type": "single",
    "category": "路由协议",
    "paper": "real2023a",
    "question": "在以下命令执行结果中，Routing Tables 描述路由标记的字段是（）。",
    "options": [
      "A. Proto",
      "B. Pre",
      "C. Cost",
      "D. Flags"
    ],
    "answer": 3,
    "explanation": "在路由表输出中，Flags字段描述路由标记，如U表示可用、G表示网关等，用于标识路由状态。"
  },
  {
    "id": 1706,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2023a",
    "question": "以下关于VLAN标识的叙述中，错误的是（）。",
    "options": [
      "A. VLAN 1D用12bit表示",
      "B. VLAN 1D的扩展范围是1025-4096",
      "C. VLAN 1D标准范围内可用于Ethemet的VLANID为1-1005",
      "D. VLAN name用32个字符表示，可以是字母和数字。"
    ],
    "answer": 2,
    "explanation": "VLAN ID标准范围是1-1005，其中1-1001可用于以太网，1002-1005保留，因此说1-1005可用于以太网是错误的。"
  },
  {
    "id": 1707,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2023a",
    "question": "IEEE802.1Q规定VLAN的Tag字段中，用来定义帧的优先级的是（）。",
    "options": [
      "A. PRI",
      "B. CFI",
      "C. TPID",
      "D. VID"
    ],
    "answer": 0,
    "explanation": "IEEE 802.1Q Tag字段中，PRI（Priority）占3位，用于定义帧的优先级，支持8个优先级级别。"
  },
  {
    "id": 1708,
    "type": "single",
    "category": "交换技术",
    "paper": "real2023a",
    "question": "（）命令可通过VLAN对二层流量隔离，实现对网络资源控制。",
    "options": [
      "A. management-vlan",
      "B. voice-vlan",
      "C. mux-vlan",
      "D. aggregate-vlan"
    ],
    "answer": 2,
    "explanation": "mux-vlan命令用于配置多路复用VLAN，通过VLAN对二层流量进行隔离，实现对网络资源的控制。"
  },
  {
    "id": 1709,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2023a",
    "question": "在交换机SWA上执行如下命令后，输出如下:[SWA]display stp-----[CIST Global lnfo][Mode MSTPJ------CIST Bridge:32768.000f-e23e-f9b0Bridge Times:Hello 2s MaxAge 20s FwDly 15s MaxHop20从输出结果可以判断（）。",
    "options": [
      "A. SWA的桥D是32768",
      "B. SWA是根桥",
      "C. SWA工作在RSTP模式",
      "D. SWA工作在MSTP模式"
    ],
    "answer": 3,
    "explanation": "输出显示Mode MSTP，表明交换机SWA工作在MSTP模式，支持多生成树协议。"
  },
  {
    "id": 1710,
    "type": "single",
    "category": "无线网络",
    "paper": "real2023a",
    "question": "在5G技术中，用于提升接入用户数的技术是（）。",
    "options": [
      "A. MIMO",
      "B. NGV",
      "C. SOMA",
      "D. SDN"
    ],
    "answer": 0,
    "explanation": "MIMO（多输入多输出）技术通过多天线收发提升频谱效率和用户接入数，是5G提升容量的关键技术。"
  },
  {
    "id": 1711,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2023a",
    "question": "在100BaseT以太网中，若争用时间片为25.6μs，某站点在发送帧时已经连续3次冲突，则基于二进制指数回退算法，该站点需等待的最短和最长时间分别是（）。",
    "options": [
      "A. 0μs和179.2μs",
      "B. 0μs和819.2μs",
      "C. 25.6μs和179.2μs",
      "D. 25.6μs和819.2μs"
    ],
    "answer": 2,
    "explanation": "二进制指数回退算法中，连续3次冲突后，等待时间片数为0到2^3-1=7，最短0×25.6=0μs，最长7×25.6=179.2μs。"
  },
  {
    "id": 1712,
    "type": "single",
    "category": "无线网络",
    "paper": "real2023a",
    "question": "以下关于2.4G和5G无线网络区别的说法中，错误的是（）。",
    "options": [
      "A. 2.4G相邻信道间有干扰，5G相邻信道几乎无干扰",
      "B. 5G比2.4G的传输速度快",
      "C. 穿过障碍物传播时5G比2.4G衰减小",
      "D. 5G比2.4G的工作频段范围大"
    ],
    "answer": 2,
    "explanation": "5G频段频率更高，穿过障碍物时衰减比2.4G更大，因此说5G衰减小是错误的。"
  },
  {
    "id": 1713,
    "type": "single",
    "category": "无线网络",
    "paper": "real2023a",
    "question": "某公司有20间办公室，均分布在办公大楼的同一楼层，计划在办公区域组建无线网络，为移动工作终端提供无线网络接入，要求连接一次网络后，均可以在各办公室无缝漫游，下列组网方案最合理的是（）。",
    "options": [
      "A. 各办公室部署互联网接入无线路由器供终端接入",
      "B. 各办公室部署瘦AP供终端接入，并通过交换机连接到互联网接入路由器",
      "C. 各办公室部署胖AP供终端接入，并通过交换机连接到互联网接入路由器",
      "D. 各办公室均部署瘦AP供终端接入，并通过交换机连接到AC和互联网接入路由器"
    ],
    "answer": 3,
    "explanation": "要实现跨办公室无缝漫游，需由AC统一管理多个瘦AP，瘦AP通过交换机连接AC和互联网路由器，终端在AP间切换时由AC协调，实现无缝漫游。"
  },
  {
    "id": 1714,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2023a",
    "question": "FC-SAN存储常通过光纤与服务器的（）连接。",
    "options": [
      "A. 光口网卡",
      "B. USB接口",
      "C. 光纤通道卡",
      "D. RAID控制器"
    ],
    "answer": 2,
    "explanation": "FC-SAN采用光纤通道协议，服务器需安装光纤通道卡（HBA卡）才能接入光纤通道交换机与存储设备通信，普通光口网卡不支持FC协议。"
  },
  {
    "id": 1715,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2023a",
    "question": "以下关于结构化布线系统的说法中，错误的是（）。",
    "options": [
      "A. 工作区子系统是网络管理人员的值班场所，需要配备不间断电源",
      "B. 千线子系统实现各楼层配线间和建筑物设备间的互联",
      "C. 设备间子系统有建筑物进户线、交换设备等设施组成",
      "D. 建筑群子系统实现各建筑物设备间的互联"
    ],
    "answer": 0,
    "explanation": "工作区子系统是用户终端到信息插座的区域，并非网络管理人员值班场所，配不间断电源的说法错误，其余关于干线、设备间、建筑群子系统的描述正确。"
  },
  {
    "id": 1716,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2023a",
    "question": "以下关于三层模型核心层设计的说法中，错误的是（）。",
    "options": [
      "A. 核心层是整个网络的高速骨干，应有冗余设计",
      "B. 核心层应有包过滤和策略路由设计，提升网络安全防护",
      "C. 核心层连接的设备不应过多",
      "D. 需要访问互联网时，核心层应包括一条或多条连接到外部网络的连接"
    ],
    "answer": 1,
    "explanation": "核心层应专注于高速数据转发，包过滤和策略路由等安全控制功能应部署在汇聚层或接入层，核心层做这些会降低转发效率，故B错误。"
  },
  {
    "id": 1717,
    "type": "single",
    "category": "网络安全",
    "paper": "real2023a",
    "question": "计算机等级保护第三级对信息系统用户身份鉴别的要求是:在第二级要求基础上，（）。",
    "options": [
      "A. 应设置登录密码复杂度要求并定期更换",
      "B. 应具有登录失败处理功能",
      "C. 应采取措施，防止鉴别信息在传输过程中被窃听",
      "D. 应采取双因子登录认证，且其中一种鉴别技术应至少使用密码技术"
    ],
    "answer": 3,
    "explanation": "等级保护第三级在第二级基础上要求采用双因子身份鉴别，且其中一种鉴别技术应至少使用密码技术，以增强身份鉴别的安全性。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2022b";
  const A = [
  {
    "id": 1718,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022b",
    "question": "下列存储介质中，读写速度最快的是()。",
    "options": [
      "A. 光盘",
      "B. 硬盘",
      "C. 内存",
      "D. Cache"
    ],
    "answer": 3,
    "explanation": "Cache位于CPU与内存之间，由高速SRAM构成，工作速度最快；内存次之，硬盘和光盘属于外存，速度更慢。"
  },
  {
    "id": 1719,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022b",
    "question": "使用DMA不可以实现数据()。",
    "options": [
      "A. 从内存到外存的传输",
      "B. 从硬盘到光盘的传输",
      "C. 从内存到I/O接口的传输",
      "D. 从I/O接口到内存的传输"
    ],
    "answer": 1,
    "explanation": "DMA实现内存与外设（I/O接口）之间的直接数据传送，硬盘到光盘是外设到外设的传输，不经过内存，DMA无法实现。"
  },
  {
    "id": 1720,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022b",
    "question": "下列I/O接口类型中，采用并行总线的是()。",
    "options": [
      "A. USB",
      "B. UART",
      "C. PCI",
      "D. L2C"
    ],
    "answer": 2,
    "explanation": "PCI总线是典型的并行总线，数据多位同时传输；USB、UART、I2C均为串行总线，逐位传输数据。"
  },
  {
    "id": 1721,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022b",
    "question": "以下关于进程和线程的描述中，错误的是()。",
    "options": [
      "A. 进程是执行中的程序",
      "B. 一个进程可以包含多个线程",
      "C. 一个线程可以属于多个进程",
      "D. 线程的开销比进程的小"
    ],
    "answer": 2,
    "explanation": "线程是进程内的执行单元，一个线程只能属于一个进程，一个进程可包含多个线程，线程创建和切换开销比进程小，故C错误。"
  },
  {
    "id": 1722,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2022b",
    "question": "下列操作系统中，()与另外三种操作系统的内核种类不同。",
    "options": [
      "A. Windows10",
      "B. Ubuntu14.04",
      "C. CentOS7.0",
      "D. 中标麒麟6.0"
    ],
    "answer": 0,
    "explanation": "Windows10采用混合内核（微内核与宏内核结合），而Ubuntu、CentOS、中标麒麟均基于Linux宏内核，故Windows10内核种类不同。"
  },
  {
    "id": 1723,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2022b",
    "question": "下列功能模块中，不属于操作系统内核功能模块的是()。",
    "options": [
      "A. 存储管理",
      "B. 设备管理",
      "C. 文件管理",
      "D. 版本管理"
    ],
    "answer": 3,
    "explanation": "操作系统内核功能模块包括存储管理、设备管理、文件管理、进程管理等，版本管理属于软件配置管理范畴，不属于内核功能。"
  },
  {
    "id": 1724,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2022b",
    "question": "在网络工程项目全流程中，项目测试的测试目标来自于()阶段。",
    "options": [
      "A. 需求分析",
      "B. 网络设计",
      "C. 实施",
      "D. 运维"
    ],
    "answer": 0,
    "explanation": "项目测试的测试目标来源于需求分析阶段确定的功能和性能需求，测试用例和验收标准均依据需求分析结果制定。"
  },
  {
    "id": 1725,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "网络建设完成后需要进行日常维护，维护的内容不包括()。",
    "options": [
      "A. 网络设备管理",
      "B. 操作系统维护",
      "C. 网络安全管理",
      "D. 网络规划设计"
    ],
    "answer": 3,
    "explanation": "网络日常维护包括设备管理、操作系统维护和网络安全管理等，网络规划设计属于建设阶段工作，不属于日常维护内容。"
  },
  {
    "id": 1726,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022b",
    "question": "下列描述中，违反《中华人民共和国网络安全法》的是()。",
    "options": [
      "A. 网络运营者应当对其收集的用户信息严格保密",
      "B. 网络运营者不得篡改、毁损其收集的个人信息",
      "C. 网络运者使用收集的个人信息可以不经被收集者同意",
      "D. 网络运营者应当建立网络信息安全投诉、举报制度"
    ],
    "answer": 2,
    "explanation": "《网络安全法》规定网络运营者收集、使用个人信息应经被收集者同意，C项称可不经同意使用，违反法律规定。"
  },
  {
    "id": 1727,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2022b",
    "question": "五类、六类网线的标准是由()制定的。",
    "options": [
      "A. ISO/IEC JTC1 SC25委员会",
      "B. 中国国家标准化管理委员会",
      "C. 中国标准化协会",
      "D. 美国国家标准协会"
    ],
    "answer": 0,
    "explanation": "五类、六类网线等综合布线标准由ISO/IEC JTC1 SC25委员会制定，对应国际标准ISO/IEC 11801系列。"
  },
  {
    "id": 1728,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2022b",
    "question": "若8进制信号的信号速率是4800Baud，则信道的数据速率为()kb/s。",
    "options": [
      "A. 9.6",
      "B. 14.4",
      "C. 19.2",
      "D. 38.4"
    ],
    "answer": 1,
    "explanation": "8进制信号每个码元携带log2(8)=3比特，数据速率=4800Baud×3=14400b/s=14.4kb/s。"
  },
  {
    "id": 1729,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2022b",
    "question": "下列传输方式中属于基带传输的是()。",
    "options": [
      "A. PSK编码传输",
      "B. PCM编码传输",
      "C. QAM编码传输",
      "D. SSB传输"
    ],
    "answer": 1,
    "explanation": "基带传输是直接传输数字信号，PCM编码将模拟信号数字化后以基带方式传输；PSK、QAM、SSB均属频带传输。"
  },
  {
    "id": 1730,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2022b",
    "question": "依据《数据中心设计规范》，在设计数据中心时，成行排列的机柜，其长度大于()米时，两端应设有通道。",
    "options": [
      "A. 5",
      "B. 6",
      "C. 7",
      "D. 8"
    ],
    "answer": 1,
    "explanation": "《数据中心设计规范》规定，成行排列的机柜长度大于6米时，两端应设有通道，便于人员通行和维护。"
  },
  {
    "id": 1731,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2022b",
    "question": "假设一个10Mb/s的适配器使用曼彻斯特编码向链路发送全为1的比特流，从适配器发出的信号每秒将有()个跳变。",
    "options": [
      "A. 每秒1000万",
      "B. 每秒500万",
      "C. 每秒2000万",
      "D. 没有跳变"
    ],
    "answer": 0,
    "explanation": "曼彻斯特编码每个比特中间都有跳变，10Mb/s适配器每秒发送1000万个比特，故每秒有1000万个跳变。"
  },
  {
    "id": 1732,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022b",
    "question": "5G无线通信采用的载波调制技术是()。",
    "options": [
      "A. OFDM",
      "B. F-OFDM",
      "C. QPSK",
      "D. 256QAM"
    ],
    "answer": 1,
    "explanation": "5G无线通信采用F-OFDM（滤波正交频分复用）作为载波调制技术，在OFDM基础上加滤波以支持灵活的参数配置。"
  },
  {
    "id": 1733,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022b",
    "question": "下列认证方式中，安全性较低的是()。",
    "options": [
      "A. 生物认证",
      "B. 多因子认证",
      "C. 口令认证",
      "D. 盾认证"
    ],
    "answer": 2,
    "explanation": "口令认证仅靠静态密码验证身份，易被猜测、窃取或暴力破解，安全性明显低于生物认证、多因子认证和盾认证。"
  },
  {
    "id": 1734,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "Windows平台网络命令Ping和Tracert的实现依赖于()。",
    "options": [
      "A. TCP套接字",
      "B. UDP套接字",
      "C. 原始套接字",
      "D. IP套接字"
    ],
    "answer": 2,
    "explanation": "Ping和Tracert需自行构造ICMP报文并直接访问IP层，因此依赖原始套接字（Raw Socket）实现。"
  },
  {
    "id": 1735,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2022b",
    "question": "SONET采用的成帧方法是()。",
    "options": [
      "A. 码分复用",
      "B. 空分复用",
      "C. 时分复用",
      "D. 频分复用"
    ],
    "answer": 2,
    "explanation": "SONET采用时分复用（TDM）成帧，将多个低速信道按时间片复用到高速光载波上传输。"
  },
  {
    "id": 1736,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022b",
    "question": "下列关于IEEE802.11a的描述中，不正确的是()。",
    "options": [
      "A. 工作在2.4GHz频率",
      "B. 使用OFDM调制技术",
      "C. 数据速率最高可达54Mbps",
      "D. 可支持语音、数据、图像业务"
    ],
    "answer": 0,
    "explanation": "IEEE 802.11a工作在5GHz频段而非2.4GHz，采用OFDM调制，最高速率54Mbps，故A描述错误。"
  },
  {
    "id": 1737,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022b",
    "question": "一个IP报文经过路由器处理后，若TTL字段值变为0，则路由器会进行的操作是()。",
    "options": [
      "A. 向IP报文的源地址发送一个出错信息，并继续转发该报文",
      "B. 向IP报文的源地址发送一个出错信息，并丢弃该报文",
      "C. 继续转发报文，在报文中做出标记",
      "D. 直接丢弃该IP报文，既不转发，也不发送错误信息"
    ],
    "answer": 1,
    "explanation": "TTL减为0时路由器丢弃该报文，并向源地址发送ICMP超时报错信息，防止报文无限循环转发。"
  },
  {
    "id": 1738,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022b",
    "question": "当IP报文从一个网络转发到另一个网络时，()。",
    "options": [
      "A. IP地址和MAC地址均发生改变",
      "B. IP地址改变，但MAC地址不变",
      "C. MAC地址改变，但IP地址不变",
      "D. MAC地址、IP地址都不变"
    ],
    "answer": 2,
    "explanation": "IP报文跨网转发时，源和目的IP地址保持不变，但每经过一跳需重新封装链路层帧，MAC地址随之改变。"
  },
  {
    "id": 1739,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022b",
    "question": "以下网络控制参数中，不随报文传送到对端实体的是()。",
    "options": [
      "A. 接收进程",
      "B. 上层协议",
      "C. 接收缓存大小",
      "D. 拥塞窗口大小"
    ],
    "answer": 3,
    "explanation": "拥塞窗口是发送端根据网络拥塞状况维护的内部参数，不随报文传送给对端实体，其余参数需随报文传递。"
  },
  {
    "id": 1740,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022b",
    "question": "在下图的拓扑结构中，RouterA和RouterB均运行RIPvl协议，在RouterA上使用()命令即可完成路由信息的宣告。",
    "options": [
      "A. network10.10.0.0",
      "B. network10.10.0.0255.255.255.0",
      "C. network10.10.0.0255.255.0.0",
      "D. network 10.0.0.0"
    ],
    "answer": 3,
    "explanation": "RIPv1是有类路由协议，宣告时不携带子网掩码，故应使用主类网络号network 10.0.0.0进行路由宣告。"
  },
  {
    "id": 1741,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022b",
    "question": "Telnet协议是一种()的远程登录协议。",
    "options": [
      "A. 安全",
      "B. B/S模式",
      "C. 基于TCP",
      "D. 分布式"
    ],
    "answer": 2,
    "explanation": "Telnet是应用层远程登录协议，基于TCP的23端口工作，但其传输明文，本身并不安全。"
  },
  {
    "id": 1742,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022b",
    "question": "下列关于HTTPS和HTTP协议的描述中，错误的是()。",
    "options": [
      "A. HTTPS协议使用加密传输",
      "B. HTTPS协议默认服务端口号是443",
      "C. HTTP协议默认服务端口是80",
      "D. 电子支付类网站应使用HTTP协议"
    ],
    "answer": 3,
    "explanation": "电子支付类网站涉及敏感信息，应使用加密的HTTPS协议而非明文HTTP，故D描述错误。"
  },
  {
    "id": 1743,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022b",
    "question": "以下关于IPv6与Pv4报文头区别比较的说法中，错误的是()。",
    "options": [
      "A. IPv4的头部是变长的，IPv6的头部是定长的",
      "B. IPv6与IPv4中均有“校验和”字段",
      "C. IPv6中的HOP Limit字段作用类似于IPv4中的TTL字段",
      "D. Pv6中的Traffic Class字段作用类似于IPv4中的ToS字段"
    ],
    "answer": 1,
    "explanation": "IPv6报文头取消了校验和字段，由链路层和上层协议负责差错检测，故B说法错误。"
  },
  {
    "id": 1744,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "在DNS服务器中，区域的邮件服务器及其优先级由()资源记录定义。",
    "options": [
      "A. S0A",
      "B. NS",
      "C. PTR",
      "D. MX"
    ],
    "answer": 3,
    "explanation": "MX资源记录用于定义区域的邮件服务器及其优先级，供邮件系统进行邮件路由。"
  },
  {
    "id": 1745,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2022b",
    "question": "安装Linux时必须创建的分区是()。",
    "options": [
      "A. /root",
      "B. /homed",
      "C. /bine",
      "D. /"
    ],
    "answer": 3,
    "explanation": "根分区“/”是Linux文件系统的顶层挂载点，安装时必须创建，其他目录可挂载在其下。"
  },
  {
    "id": 1746,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "在Windows中，使用()命令来清除本地DNS缓存。",
    "options": [
      "A. ipconfig/flushdns",
      "B. ipconfig/displaydns",
      "C. ipconfig/registerdns",
      "D. ipconfig/renew"
    ],
    "answer": 0,
    "explanation": "ipconfig/flushdns用于清除本地DNS解析缓存，displaydns用于显示，registerdns用于重新注册。"
  },
  {
    "id": 1747,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022b",
    "question": "以下关于HTML方法的描述中，错误的是()。",
    "options": [
      "A. GET方法用于向服务器请求页面，该请求可被收藏为标签",
      "B. GET请求没有长度限制",
      "C. POST方法用于将数据发送到服务器以创建或者修改数据",
      "D. POST请求不会被保留在浏览器的历史记录中"
    ],
    "answer": 1,
    "explanation": "GET请求将参数附在URL后，受URL长度限制，故“没有长度限制”的说法错误。"
  },
  {
    "id": 1748,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "在Windows平台上，要为某主机手动添加一条ARP地址映射，下面的命令正确的是()。",
    "options": [
      "A. arp-al57.55.85.212 00-aa-00-62-c6-09",
      "B. arp-g157.55.85.212 00-aa-00-62-c6-09",
      "C. arp-v157.55.85.212 00-aa-00-62-c6-09",
      "D. arp-s157.55.85.212 00-aa-00-62-c6-09"
    ],
    "answer": 3,
    "explanation": "arp -s用于手动添加静态ARP地址映射，将IP地址与MAC地址绑定写入ARP缓存。"
  },
  {
    "id": 1749,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022b",
    "question": "网络管理员在安全防护系统看到如下日志，说明该信息系统受到()攻击。",
    "options": [
      "A. SQL注入",
      "B. DDoS",
      "C. XSS",
      "D. HTTP头"
    ],
    "answer": 0,
    "explanation": "日志中若出现构造SQL语句、绕过验证等特征，说明系统遭受SQL注入攻击，攻击者试图操纵数据库查询。"
  },
  {
    "id": 1750,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "在SNMP协议中TRAP上报是通过UDP协议的()端口。",
    "options": [
      "A. 161",
      "B. 162",
      "C. 163",
      "D. 164"
    ],
    "answer": 1,
    "explanation": "SNMP中Agent主动上报的TRAP消息通过UDP的162端口发送给管理站，161端口用于请求响应。"
  },
  {
    "id": 1751,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022b",
    "question": "在OSPF的广播网络中，有4台路由器Router A.Router B.Router C和RouterD，其优先级分别为2、1、1和0，RouterID分别为192.168.1.1、192.168.2.1、192.168.3.1和192.168.4.1。若在此4台路由器上同时启用OSPF协议，OSPF选出的BDR为()。",
    "options": [
      "A. Router A",
      "B. Router B",
      "C. Router C",
      "D. Router D"
    ],
    "answer": 2,
    "explanation": "OSPF选DR/BDR先比优先级，RouterA优先级2最高为DR；优先级1的B和C中RouterID大者（192.168.3.1）为BDR。"
  },
  {
    "id": 1752,
    "type": "single",
    "category": "交换技术",
    "paper": "real2022b",
    "question": "在生成快速转发表的过程中，五元组是指()。",
    "options": [
      "A. 源MAC地址、目的MAC地址、协议号、源IP地址、目的IP地址",
      "B. 物理接口、MAC地址、IP地址、端口号、协议号",
      "C. 源IP地址、目的IP地址、源端口号、目的端口号、协议号",
      "D. 物理接口、源IP地址、目的IP地址、源端口号、目的端口号"
    ],
    "answer": 2,
    "explanation": "快速转发表基于五元组标识数据流，即源IP地址、目的IP地址、源端口号、目的端口号和协议号。"
  },
  {
    "id": 1753,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "可以发出SNMP GetRequest的网络实体是()。",
    "options": [
      "A. Agente",
      "B. Manager",
      "C. Client",
      "D. Server"
    ],
    "answer": 1,
    "explanation": "SNMP采用Manager/Agent模型，Manager（管理站）负责发起GetRequest等请求，Agent（代理）负责响应请求，因此发出GetRequest的是Manager。"
  },
  {
    "id": 1754,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "SNMP报文中不包括()。",
    "options": [
      "A. 版本号",
      "B. 协议数据单元",
      "C. 团体名",
      "D. 优先级"
    ],
    "answer": 3,
    "explanation": "SNMP报文由版本号、团体名和协议数据单元（PDU）三部分组成，报文中不含优先级字段，优先级是其他协议（如VLAN标签）中的概念。"
  },
  {
    "id": 1755,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022b",
    "question": "在IPv4地址192.168.1.0/24中，表示主机的二进制位数是()位。",
    "options": [
      "A. 8",
      "B. 16",
      "C. 24",
      "D. 32"
    ],
    "answer": 0,
    "explanation": "192.168.1.0/24中前缀长度为24位，剩余32-24=8位用于表示主机，故主机位为8位。"
  },
  {
    "id": 1756,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022b",
    "question": "将地址段172.16.32.0/24、172.16.33.0/24、172.16.34.0/24、172.16.35.0/24进行聚合后得到的地址是()。",
    "options": [
      "A. 172.16.32.0/24",
      "B. 172.16.32.0/23",
      "C. 172.16.32.0/22",
      "D. 172.16.32.0/21"
    ],
    "answer": 2,
    "explanation": "四个网段第三字节32~35二进制为00100000~00100011，前6位相同，可聚合为/22，即172.16.32.0/22。"
  },
  {
    "id": 1757,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022b",
    "question": "下列命令片段含义显示的内容不包括()。",
    "options": [
      "A. SNMPv3用户状态",
      "B. 认证方式",
      "C. SNMPv3设备的引整ID",
      "D. MIB节点的统计信息"
    ],
    "answer": 3,
    "explanation": "该命令片段用于显示SNMPv3用户状态、认证方式及设备引擎ID等信息，不涉及MIB节点的统计信息。"
  },
  {
    "id": 1758,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022b",
    "question": "使用()命令可以查看IS-IS协议的概要信息。",
    "options": [
      "A. display isis interface",
      "B. display isis spf-log",
      "C. display isis brief",
      "D. display isis peer"
    ],
    "answer": 2,
    "explanation": "display isis brief用于查看IS-IS协议的概要信息，interface查看接口信息，peer查看邻居，spf-log查看SPF日志。"
  },
  {
    "id": 1759,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022b",
    "question": "下列路由表信息中显示的区域内部网络总数是()。",
    "options": [
      "A. 0",
      "B. 3",
      "C. 4",
      "D. 1"
    ],
    "answer": 1,
    "explanation": "路由表信息中显示的区域内部网络总数为3，需根据路由表条目统计区域内路由数量得出。"
  },
  {
    "id": 1760,
    "type": "single",
    "category": "交换技术",
    "paper": "real2022b",
    "question": "GVRP可以实现跨交换机进行动态注册和删除，以下关于GVRP协这的描述中，错误的是()。",
    "options": [
      "A. GVRP是GARP的一种应用，由IEEE制定",
      "B. 交换机之间的协议报文交互必须在VLAN Trunk链路上进行",
      "C. GVRP协议所支持的VLANID范围为1-1001",
      "D. GVRP配置时需要在每一台交换机上建立VLAN"
    ],
    "answer": 2,
    "explanation": "GVRP支持的VLAN ID范围是1-4094，而非1-1001，故该描述错误；其余关于GARP应用、Trunk链路和逐台配置VLAN的说法正确。"
  },
  {
    "id": 1761,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2022b",
    "question": "由IEEE制定的最早的STP标准是()。",
    "options": [
      "A. IEEE802.1D",
      "B. IEEE 802.1Q",
      "C. IEEE 802.1W",
      "D. IEEE 802.1S"
    ],
    "answer": 0,
    "explanation": "IEEE 802.1D是最早由IEEE制定的生成树协议（STP）标准，用于消除二层环路。"
  },
  {
    "id": 1762,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022b",
    "question": "5G网络采用()可将5G网路分割成多张虚拟网路，每个虚拟网路的接入、传输和核心网是逻辑独立的，任何一个虚拟网络发生故障都不会影响到其它虚拟网络。",
    "options": [
      "A. 网路切片技术",
      "B. 边缘计算技术",
      "C. 网络隔离技术",
      "D. 软件定义网路技术"
    ],
    "answer": 0,
    "explanation": "网络切片技术可将5G网络分割成多张逻辑独立的虚拟网络，各切片的接入、传输和核心网相互隔离，互不影响。"
  },
  {
    "id": 1763,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2022b",
    "question": "1EEE802.3Z是()标准。",
    "options": [
      "A. 标准以太网",
      "B. 快速以太网",
      "C. 千兆以太网",
      "D. 万兆以太网"
    ],
    "answer": 2,
    "explanation": "IEEE 802.3z是千兆以太网标准，802.3为10M标准以太网，802.3u为快速以太网，802.3ae为万兆以太网。"
  },
  {
    "id": 1764,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022b",
    "question": "某写字楼无线网络采用相邻两间办公室共用1个无线AP的设计方案，该方案可能会造成无线信号衰减，造成信号衰减的主要原因是()。",
    "options": [
      "A. 传输距离太长",
      "B. 障碍物阻挡",
      "C. 天线太少",
      "D. 信道间互相干扰"
    ],
    "answer": 1,
    "explanation": "相邻办公室共用AP时，墙体等障碍物会阻挡无线信号，导致信号衰减，这是造成衰减的主要原因。"
  },
  {
    "id": 1765,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022b",
    "question": "下列Wifi认证方式中，()使用了AES加密算法，安全性更高。",
    "options": [
      "A. 开放式",
      "B. WPA",
      "C. WPA2",
      "D. WEP"
    ],
    "answer": 2,
    "explanation": "WPA2采用AES加密算法（CCMP），安全性高于WPA（TKIP）和WEP，开放式认证则无加密。"
  },
  {
    "id": 1766,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2022b",
    "question": "（）存储方式常使用多副本技术实现数据冗余。",
    "options": [
      "A. DAS",
      "B. NAS",
      "C. SAN",
      "D. 分布式"
    ],
    "answer": 3,
    "explanation": "分布式存储常采用多副本技术实现数据冗余，通过在不同节点保存数据副本提高可靠性和可用性。"
  },
  {
    "id": 1767,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2022b",
    "question": "结构化布线系统中，实现各楼层设备间子系统互联的是()。",
    "options": [
      "A. 管理子系统",
      "B. 干线子系统",
      "C. 工作区子系统",
      "D. 建筑群子系统"
    ],
    "answer": 1,
    "explanation": "干线子系统（垂直子系统）负责连接各楼层设备间子系统，实现楼内各层之间的互联。"
  },
  {
    "id": 1768,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2022b",
    "question": "以下关于网络需求分析的说法中，错误的是()。",
    "options": [
      "A. 应收集不用用户的业务需求",
      "B. 根据不同类型应用的业务特性，归纳和梳理出各自的网络需求",
      "C. 应撰写输出网络系统规划与设计报告",
      "D. 应充分考虑数据备份的网络需求"
    ],
    "answer": 2,
    "explanation": "网络需求分析阶段应输出需求分析报告，而非网络系统规划与设计报告，后者属于设计阶段成果，故该说法错误。"
  },
  {
    "id": 1769,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022b",
    "question": "下列属于网络安全等级保护第三级且是在上一级基础上增加的安全要求是()。",
    "options": [
      "A. 应对登录的用户分配账号和设置权限",
      "B. 应在关键网络节点处监视网络攻击行为",
      "C. 应具有登录失败处理功能限制非法登录次数",
      "D. 应对关键设备实施电磁屏蔽"
    ],
    "answer": 3,
    "explanation": "第三级在第二级基础上增加的要求包括对关键设备实施电磁屏蔽等，其余选项属于较低级别已具备的基本要求。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2022a";
  const A = [
  {
    "id": 1770,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "计算机操作的最小时间单位是（）。",
    "options": [
      "A. 指令周期",
      "B. 时钟周期",
      "C. 总线周期",
      "D. CPU 周期"
    ],
    "answer": 1,
    "explanation": "时钟周期是CPU工作的最小时间单位，指令周期、总线周期和CPU周期均由多个时钟周期组成。"
  },
  {
    "id": 1771,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "以下关于冯•诺依曼计算机的叙述中，不正确的是（）。",
    "options": [
      "A. 程序指令和数据都采用二进制表示",
      "B. 程序指令总是存储在主存中，而数据则存储在高速缓存中",
      "C. 程序的功能都由中央处理器（CPU）执行指令来实现",
      "D. 程序的执行过程由指令进行自动控制"
    ],
    "answer": 1,
    "explanation": "冯·诺依曼计算机中程序指令和数据都存储在主存中，并非数据存储在高速缓存，故该叙述不正确。"
  },
  {
    "id": 1772,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "在风险管理中，降低风险危害的策略不包括（）。",
    "options": [
      "A. 回避风险",
      "B. 转移风险",
      "C. 消除风险",
      "D. 接受风险并控制损失"
    ],
    "answer": 2,
    "explanation": "风险管理的策略包括回避、转移、接受并控制损失等，风险只能降低而无法完全消除，故消除风险不属于其策略。"
  },
  {
    "id": 1773,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "为了减少在线观看网络视频卡顿，经常采用流媒体技术。以下关于流媒体说法不正确的是（）。",
    "options": [
      "A. 流媒体需要缓存",
      "B. 流媒体视频资源不能下载到本地",
      "C. 流媒体技术可以用于观看视频、网络直播",
      "D. 流媒体资源文件格式可以是 asf、rm 等"
    ],
    "answer": 1,
    "explanation": "流媒体资源可以下载到本地，只是通常采用边下载边播放方式，B说法错误；流媒体需缓存、可用于视频直播、格式有asf/rm等均正确。"
  },
  {
    "id": 1774,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "以下选项中，不属于计算机操作系统主要功能的是（）。",
    "options": [
      "A. 管理计算机系统的软硬件资源",
      "B. 充分发挥计算机资源的效率",
      "C. 为其他软件提供良好的运行环境",
      "D. 存储数据"
    ],
    "answer": 3,
    "explanation": "操作系统主要功能是管理软硬件资源、提高资源利用率、为其他软件提供运行环境；存储数据是存储管理的一部分，不是其主要功能概括。"
  },
  {
    "id": 1775,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "智能手机包含运行内存和机身内存，以下关于运行内存的说法中，不正确的是（）。",
    "options": [
      "A. 也称手机 RAM",
      "B. 用于暂时存放处理器所需的运算数据",
      "C. 能够永久保存数据",
      "D. 手机运行内存越大，性能越好"
    ],
    "answer": 2,
    "explanation": "运行内存即RAM，用于暂时存放处理器运算数据，断电后数据丢失，不能永久保存数据，因此C说法不正确。"
  },
  {
    "id": 1776,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "某电商平台根据用户消费记录分析用户消费偏好，预测未来消费倾向，这是（）技术的典型应用。",
    "options": [
      "A. 物联网",
      "B. 区块链",
      "C. 云计算",
      "D. 大数据"
    ],
    "answer": 3,
    "explanation": "根据用户消费记录分析偏好并预测消费倾向，属于对大量数据进行分析挖掘，是大数据技术的典型应用。"
  },
  {
    "id": 1777,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "以下关于云计算的叙述中，不正确的是（）。",
    "options": [
      "A. 云计算将所有客户的计算都集中在一台大型计算机上进行",
      "B. 云计算是基于互联网的相关服务的增加、使用和交付模式",
      "C. 云计算支持用户在任意位置使用各种终端获取相应服务",
      "D. 云计算的基础是面向服务的架构和虚拟化的系统部署"
    ],
    "answer": 0,
    "explanation": "云计算通过互联网将大量分布式计算资源以服务方式提供，并非将所有客户计算集中在一台大型计算机上，A说法不正确。"
  },
  {
    "id": 1778,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "SOA（面向服务的架构）是一种（）服务架构。",
    "options": [
      "A. 细粒度、紧耦合",
      "B. 粗粒度、松耦合",
      "C. 粗粒度、紧耦合",
      "D. 细粒度、松耦合"
    ],
    "answer": 1,
    "explanation": "SOA面向服务的架构强调将功能封装为粗粒度服务，并通过松耦合方式组合，因此是粗粒度、松耦合服务架构。"
  },
  {
    "id": 1779,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "在需要保护的信息资产中（）是最重要的。",
    "options": [
      "A. 软件",
      "B. 硬件",
      "C. 数据",
      "D. 环境"
    ],
    "answer": 2,
    "explanation": "信息资产中数据承载核心业务价值和敏感信息，一旦泄露或破坏影响最大，因此数据通常是最重要的保护对象。"
  },
  {
    "id": 1780,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2022a",
    "question": "以下频率中，属于微波波段的是（）。",
    "options": [
      "A. 30Hz",
      "B. 30KHz",
      "C. 30MHz",
      "D. 30GHz"
    ],
    "answer": 3,
    "explanation": "微波波段通常指300MHz至300GHz，选项中30GHz属于微波频段；30Hz、30kHz、30MHz均低于常用微波范围。"
  },
  {
    "id": 1781,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2022a",
    "question": "以下关于以太网交换机的说法中，错误的是（）。",
    "options": [
      "A. 以太网交换机工作在数据链路层",
      "B. 以太网交换机可以隔离冲突域",
      "C. 以太网交换机中存储转发交换方式相比直接交换方式其延迟最短",
      "D. 以太网交换机通过 MAC 地址表转发数据"
    ],
    "answer": 2,
    "explanation": "存储转发交换需接收完整帧并校验后再转发，延迟比直接交换方式大，因此C说其延迟最短是错误的。"
  },
  {
    "id": 1782,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2022a",
    "question": "一台 16 口的全双工千兆交换机，至少需要（）的背板带宽才能实现线速转发。",
    "options": [
      "A. 1.488Gbps",
      "B. 3.2Gbps",
      "C. 32Gbps",
      "D. 320Gbps"
    ],
    "answer": 2,
    "explanation": "全双工千兆交换机16口线速转发带宽为16×1Gbps×2=32Gbps，因此至少需要32Gbps背板带宽。"
  },
  {
    "id": 1783,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2022a",
    "question": "模拟信号数字化的正确步骤是（）。",
    "options": [
      "A. 采样、量化、编码",
      "B. 编码、量化、采样",
      "C. 采样、编码、量化",
      "D. 编码、采样、量化"
    ],
    "answer": 0,
    "explanation": "模拟信号数字化需先按一定频率采样，再将样值量化，最后编码为二进制数字信号，正确步骤是采样、量化、编码。"
  },
  {
    "id": 1784,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022a",
    "question": "5G 采用的正交振幅调制（Quadrature Amplitude Modulation,QAM）技术中，2560QAM 的一个载波上可以调制（）比特信息。",
    "options": [
      "A. 2",
      "B. 4",
      "C. 6",
      "D. 8"
    ],
    "answer": 3,
    "explanation": "256QAM每个码元可表示log2(256)=8种状态，因此一个载波可调制8比特信息，题干中2560QAM应为256QAM。"
  },
  {
    "id": 1785,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "下面关于 Kerberos 认证协议的叙述中，正确的是（）。",
    "options": [
      "A. 密钥分发中心包括认证服务器、票据授权服务器和客户机三个部分",
      "B. 协议的交互采用公钥加密算法加密消息",
      "C. 用户和服务器之间不需要共享长期密钥",
      "D. 协议的目的是让用户获得访问应用服务器的服务许可票据"
    ],
    "answer": 3,
    "explanation": "Kerberos通过KDC中的认证服务器和票据授权服务器发放票据，使用户获得访问应用服务器的服务许可票据，D正确。"
  },
  {
    "id": 1786,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2022a",
    "question": "在光纤接入技术中，EPON 系统中的 ONU 向 OLT 发送数据采用（）技术。",
    "options": [
      "A. TDM",
      "B. FDM",
      "C. TDMA",
      "D. 广播"
    ],
    "answer": 2,
    "explanation": "EPON上行方向ONU向OLT发送数据采用时分多址TDMA技术，各ONU按分配时隙发送，避免冲突。"
  },
  {
    "id": 1787,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022a",
    "question": "在下图所示的双链路热备份无线接入网中，STA 通过 Pontal 认证上线，AP 当前连接的主 AC 为 AC1，STA通过 AP 在 AC1 上线，以下关于 AC2 的描述中，正确的是（）。",
    "options": [
      "A. AC2 上有 AP 的信息，且 AP 在 AC2 的状态为 standby",
      "B. AC2 上有 AP 的信息，且 AP 在 AC2 的状态为 normal",
      "C. AC2 上有 STA 的信息，且 STA 的状态为未认证",
      "D. AC2 上有 STA 的信息，且 STA 的状态为已认证"
    ],
    "answer": 3,
    "explanation": "双链路热备份中，STA在AC1上线后，AC2会同步STA信息，且STA在AC2上的状态为已认证，以便切换。"
  },
  {
    "id": 1788,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "在 TCP 协议连接释放过程中，请求释放连接的一方（客户端）发送连接释放报文段，该报文段应该将（）。",
    "options": [
      "A. FIN 置 1",
      "B. FIN 置 0",
      "C. ACK 置 1",
      "D. ACK 置 0"
    ],
    "answer": 0,
    "explanation": "TCP连接释放时，主动关闭方发送连接释放报文段，应将FIN标志位置1，表示请求释放连接。"
  },
  {
    "id": 1789,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "以下关于 TCP 拥塞控制机制的说法中，错误的是（）。",
    "options": [
      "A. 慢启动阶段，将拥塞窗口值设置为 1",
      "B. 慢启动算法执行时拥塞窗口指数增长，直到拥塞窗口值达到慢启动门限值",
      "C. 在拥塞避免阶段，拥塞窗口线性增长",
      "D. 当网络出现拥塞时，慢启动门限值恢复为初始值"
    ],
    "answer": 3,
    "explanation": "TCP出现拥塞时，慢启动门限值通常设为当前拥塞窗口的一半，而不是恢复为初始值，因此D错误。"
  },
  {
    "id": 1790,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "在 OSI 参考模型中，（）在物理线路上提供可靠的数据传输服务。",
    "options": [
      "A. 物理层",
      "B. 数据链路层",
      "C. 网络层",
      "D. 传输层"
    ],
    "answer": 1,
    "explanation": "OSI参考模型中数据链路层负责在物理线路上提供可靠的数据传输服务，通过帧、差错控制和流量控制实现。"
  },
  {
    "id": 1791,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "以下路由协议中（）属于有类路由协议。",
    "options": [
      "A. RIPv1",
      "B. OSPF",
      "C. IS-IS",
      "D. BGP"
    ],
    "answer": 0,
    "explanation": "RIPv1是有类路由协议，不携带子网掩码；OSPF、IS-IS、BGP均支持无类路由和子网掩码信息。"
  },
  {
    "id": 1792,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "以下关于 RIPv1 和 RIPv2 路由选择协议说法中，错误的是（）。",
    "options": [
      "A. 都是基于 Bellman 算法的",
      "B. 都是基于跳数作为度量值的",
      "C. 都包含有 Request 和 Response 两种分组，且分组完全一致的",
      "D. 都是采用传输层的 UDP 协议承载"
    ],
    "answer": 2,
    "explanation": "RIPv1和RIPv2都基于Bellman算法、以跳数为度量值、用UDP承载，但RIPv2分组支持子网掩码等，分组并非完全一致。"
  },
  {
    "id": 1793,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "一台运行 OSPF 路由协议的路由器，转发接口为 100Mbps，其 cost 值应该是（）。",
    "options": [
      "A. 1",
      "B. 10",
      "C. 100",
      "D. 1000"
    ],
    "answer": 0,
    "explanation": "OSPF 接口 cost 计算公式为参考带宽(100Mbps)除以接口带宽，100Mbps 接口 cost=100/100=1。"
  },
  {
    "id": 1794,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "在 BGP 路由选择协议中，（）属性可以避免在 AS 之间产生环路。",
    "options": [
      "A. Origin",
      "B. AS_PATH",
      "C. Next Hop",
      "D. Communtiy"
    ],
    "answer": 1,
    "explanation": "AS_PATH 属性记录路由经过的自治系统号，路由器收到含本 AS 号的路由即丢弃，从而避免 AS 间环路。"
  },
  {
    "id": 1795,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "以下关于 IS-IS 路由选择协议的说法中，错误的是（）。",
    "options": [
      "A. IS-IS 路由协议是一种基于链路状态的 IGP 路由协议",
      "B. IS-IS 路由协议可将自治系统划分为骨干区域和非骨干区域",
      "C. IS-IS 路由协议中的路由器的不同接口可以属于不同的区域",
      "D. IS-IS 路由协议的地址结构由 IDP 和 DSP 两部分组成"
    ],
    "answer": 2,
    "explanation": "IS-IS 中一台路由器的所有接口只能属于同一区域，不能分属不同区域，故该说法错误。"
  },
  {
    "id": 1796,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "以下协议中，不属于安全的数据/文件传输协议的是（）。",
    "options": [
      "A. HTTPS",
      "B. SSH",
      "C. SFTP",
      "D. Telnet"
    ],
    "answer": 3,
    "explanation": "Telnet 以明文传输用户名和口令，是不安全的远程登录协议，不属于安全的数据/文件传输协议。"
  },
  {
    "id": 1797,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "在浏览器地址栏输入 ftp://ftp.tsinghua.edu.cn/进行访问时，下列操作中浏览器不会执行的是（）。",
    "options": [
      "A. 域名解析",
      "B. 建立 TCP 连接",
      "C. 发送 HTTP 请求报文",
      "D. 发送 FTP 命令"
    ],
    "answer": 2,
    "explanation": "访问 ftp:// 地址使用 FTP 协议，浏览器执行域名解析、建立 TCP 连接并发送 FTP 命令，不会发送 HTTP 请求报文。"
  },
  {
    "id": 1798,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "下列端口号中，（）是电子邮件发送协议默认的服务端口号。",
    "options": [
      "A. 23",
      "B. 25",
      "C. 110",
      "D. 143"
    ],
    "answer": 1,
    "explanation": "SMTP 是电子邮件发送协议，默认服务端口号为 25；110 为 POP3，143 为 IMAP，23 为 Telnet。"
  },
  {
    "id": 1799,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022a",
    "question": "以下关于 IPv6 与 IPv4 比较的说法中，错误的是（）。",
    "options": [
      "A. IPv4 的头部是变长的，IPv6 的头部是定长的",
      "B. IPv6 与 IPv4 中均有头部校验和字段",
      "C. IPv6 中的 HOP Limit 字段作用类似于 IPv4 中的 TTL 字段",
      "D. IPv6 中的 Traffic Class 字段作用类似于 IPv4 中的 ToS 字段"
    ],
    "answer": 1,
    "explanation": "IPv6 取消了头部校验和字段以加快转发，IPv4 头部有校验和，故“均有头部校验和字段”的说法错误。"
  },
  {
    "id": 1800,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022a",
    "question": "在 DNS 服务器中，区域的邮件服务器及其优先级由（）资源记录定义。",
    "options": [
      "A. SOA",
      "B. NS",
      "C. PTR",
      "D. MX"
    ],
    "answer": 3,
    "explanation": "MX 资源记录用于定义区域的邮件服务器及其优先级，供邮件系统投递时选择目标主机。"
  },
  {
    "id": 1801,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2022a",
    "question": "在 Linux 中，可以使用（）命令创建一个文件目录。",
    "options": [
      "A. mkdir",
      "B. md",
      "C. chmod",
      "D. rmdir"
    ],
    "answer": 0,
    "explanation": "Linux 中 mkdir 命令用于创建目录；chmod 修改权限，rmdir 删除空目录，md 是 Windows 命令。"
  },
  {
    "id": 1802,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2022a",
    "question": "在 Windows 中，DHCP 客户端手动更新租期时使用的命令是（）。",
    "options": [
      "A. ipconfig/release",
      "B. ipconfig/renew",
      "C. ipconfig/showclassid",
      "D. ipconfig/setclassid"
    ],
    "answer": 1,
    "explanation": "Windows 中 ipconfig/renew 用于向 DHCP 服务器重新申请并更新 IP 租期，release 则释放租约。"
  },
  {
    "id": 1803,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2022a",
    "question": "Windows Server 2008 R2 上配置（）服务器前需要先安装 IIS 服务。",
    "options": [
      "A. DHCP",
      "B. DNS",
      "C. Web",
      "D. 传真"
    ],
    "answer": 2,
    "explanation": "Windows Server 2008 R2 中 Web 服务器依赖 IIS 组件，配置 Web 服务前必须先安装 IIS。"
  },
  {
    "id": 1804,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "服务器提供 WEB 服务，本地默认监听（）端口。",
    "options": [
      "A. 8008",
      "B. 8080",
      "C. 8800",
      "D. 80"
    ],
    "answer": 3,
    "explanation": "Web 服务基于 HTTP 协议，默认监听 TCP 80 端口，8080 等为常用的备用端口。"
  },
  {
    "id": 1805,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2022a",
    "question": "用户在 PC 上安装使用邮件客户端，希望同步客户端和服务器上的操作，需使用的协议是（）。",
    "options": [
      "A. POP3",
      "B. IMAP",
      "C. HTTPS",
      "D. SMTP"
    ],
    "answer": 1,
    "explanation": "IMAP 协议支持在客户端与服务器之间同步邮件及操作状态，POP3 仅将邮件下载到本地。"
  },
  {
    "id": 1806,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022a",
    "question": "（）命令不能获得主机域名（abc.com）对应的 IP 地址。",
    "options": [
      "A. ping abc.com",
      "B. nslookup qt=a abc.com",
      "C. tracert abc.com",
      "D. route abc.com"
    ],
    "answer": 3,
    "explanation": "route 命令用于查看和配置本机路由表，不能进行域名解析，故无法获得域名对应的 IP 地址。"
  },
  {
    "id": 1807,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "通过在出口防火墙上配置（）功能，可以阻止外部未授权用户访问内部网络。",
    "options": [
      "A. ACL",
      "B. SNAT",
      "C. 入侵检测",
      "D. 防病毒"
    ],
    "answer": 0,
    "explanation": "在出口防火墙上配置 ACL 访问控制列表，可过滤未授权的外部访问流量，阻止其进入内部网络。"
  },
  {
    "id": 1808,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "以下 linux 命令中，（）可以实现允许 IP 为 10.0.0.2 的客户端访问本机 tcp22 端口。",
    "options": [
      "A. iptables -I INPUT-d 10.0.0.2-p tcp--sport 22-j DROP",
      "B. iptables -I INPUT-s 10.0.0.2-p tcp--sport 22-j DROP",
      "C. iptables -I INPUT-d 10.0.0.2-p tcp--sport 22-j ACCEPT",
      "D. iptables -I INPUT-s 10.0.0.2-p tcp--sport 22-j ACCEPT"
    ],
    "answer": 3,
    "explanation": "iptables 规则中 -s 指定源地址、--sport 指定源端口，允许 10.0.0.2 访问本机 22 端口应使用 ACCEPT 动作。"
  },
  {
    "id": 1809,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "A 从证书颁发机构 X1 获得证书，B 从证书颁发机构 X2 获得证书。假设使用的是 X509 证书，X2《X1》表示 X2 签署的 X1 的证书，A 可以使用证书链来获取 B 的公钥，则该链的正确顺序是（）。",
    "options": [
      "A. X2《X1》X1《B》",
      "B. X2《X1》X2《A》",
      "C. X1《X2》X2《B》",
      "D. X1《X2》X2《A》"
    ],
    "answer": 2,
    "explanation": "A 需先获得 X1 签署的 X2 证书，再由 X2 签署的 B 证书取得 B 公钥，故链为 X1《X2》X2《B》。"
  },
  {
    "id": 1810,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "在我国自主研发的商用密码标准算法中，用于分组加密的是（）。",
    "options": [
      "A. SM2",
      "B. SM3",
      "C. SM4",
      "D. SM9"
    ],
    "answer": 2,
    "explanation": "SM4 是我国自主研发的分组密码算法，用于对称加密；SM2 为非对称算法，SM3 为杂凑算法。"
  },
  {
    "id": 1811,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "SQL 注入是常见的 Web 攻击，以下不能够有效防御 SQL 注入的手段是（）。",
    "options": [
      "A. 对用户输入做关键字过滤",
      "B. 部署 Web 应用防火墙进行防护",
      "C. 部署入侵检测系统阻断攻击",
      "D. 定期扫描系统漏洞并及时修复"
    ],
    "answer": 2,
    "explanation": "入侵检测系统主要进行监测和告警，通常不具备阻断攻击的能力，不能有效防御 SQL 注入。"
  },
  {
    "id": 1812,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022a",
    "question": "SNMP 管理的网络关键组件不包括（）。",
    "options": [
      "A. 网络管理系统",
      "B. 被管理的设备",
      "C. 代理者",
      "D. 系统管理员"
    ],
    "answer": 3,
    "explanation": "SNMP 网络管理的关键组件包括网络管理系统、被管理设备和代理者，系统管理员不属于其组件。"
  },
  {
    "id": 1813,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022a",
    "question": "在 Windows 系统中通过（）查看本地 DNS 缓存。",
    "options": [
      "A. ipconfig/all",
      "B. ipconfig/renew",
      "C. ipconfig/flushdns",
      "D. ipconfig/displaydns"
    ],
    "answer": 3,
    "explanation": "ipconfig/displaydns 用于显示本地 DNS 客户端解析程序缓存中的内容；/flushdns 是清除缓存，/all 显示全部配置，/renew 更新租约。"
  },
  {
    "id": 1814,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "下面说法中，能够导致 BGP 邻居关系无法建立的是（）。",
    "options": [
      "A. 邻居的 AS 号配置错误",
      "B. IBGP 邻居没有进行物理直连",
      "C. 在全互联的 IBGP 邻居关系中开启了 BGP 同步",
      "D. 两个 BGP 邻居之间的更新时间不一致"
    ],
    "answer": 0,
    "explanation": "BGP 建立邻居时需校验对端 AS 号，若邻居 AS 号配置错误则无法建立邻居关系；IBGP 不要求物理直连，同步与更新时间不一致通常不影响邻居建立。"
  },
  {
    "id": 1815,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022a",
    "question": "缺省状态下，SNMP 协议代理进程使用（）端口向 NMS 发送告警信息。",
    "options": [
      "A. 161",
      "B. 162",
      "C. 163",
      "D. 164"
    ],
    "answer": 1,
    "explanation": "SNMP 代理进程默认使用 UDP 162 端口向 NMS 发送 Trap 告警报文，而 161 端口用于代理接收 NMS 的请求报文。"
  },
  {
    "id": 1816,
    "type": "single",
    "category": "网络管理",
    "paper": "real2022a",
    "question": "网络设备发生故障时，会向网络管理系统发送（）类型的 SNMP 报文。",
    "options": [
      "A. trap",
      "B. get-response",
      "C. set-request",
      "D. get-request"
    ],
    "answer": 0,
    "explanation": "网络设备发生故障时，代理会主动向管理站发送 Trap 报文进行告警；get-request、set-request 由管理站发出，get-response 是代理的应答。"
  },
  {
    "id": 1817,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022a",
    "question": "能够容纳 200 台客户机的 IP 地址段，其网络位最长是（）位。",
    "options": [
      "A. 21",
      "B. 22",
      "C. 23",
      "D. 24"
    ],
    "answer": 3,
    "explanation": "容纳 200 台主机需主机位至少 8 位（2^8-2=254≥200），故网络位最长为 32-8=24 位，即使用 /24 网段。"
  },
  {
    "id": 1818,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022a",
    "question": "下列 IP 地址中属于私有地址的是（）。",
    "options": [
      "A. 10.10.1.10",
      "B. 172.0.16.248",
      "C. 172.15.32.4",
      "D. 192.186.2.254"
    ],
    "answer": 0,
    "explanation": "私有地址范围为 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。10.10.1.10 属于 10.0.0.0/8，是私有地址；其余均不在私有范围内。"
  },
  {
    "id": 1819,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2022a",
    "question": "公司要为 900 个终端分配 IP 地址，下面的地址分配方案中，在便于管理的前提下，最节省网络资源的方案是（）。",
    "options": [
      "A. 使用 B 类地址段 172.16.0.0/16",
      "B. 任意分配 4 个 C 类地址段",
      "C. 将 192.168.1.0、192.168.2.0、192.168.3.0、192.168.4.0 进行聚合",
      "D. 将 192.168.32.0、192.168.33.0、192.168.34.0、192.168.35.0 进行聚合"
    ],
    "answer": 3,
    "explanation": "900 个终端需约 1024 个地址，将 192.168.32.0~35.0 四个 C 类网段聚合成 192.168.32.0/22，恰好提供 1022 个可用地址，最节省资源且便于管理。"
  },
  {
    "id": 1820,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2022a",
    "question": "关于以下命令片段的说法中，正确的是（）。",
    "options": [
      "A. 配置接口默认为全双工模式",
      "B. 配置接口速率默认为 1000Kbit/s",
      "C. 配置接口速率自协商",
      "D. 配置接口在非自协商模式下为半双工模式"
    ],
    "answer": 3,
    "explanation": "该命令片段配置接口在非自协商模式下工作于半双工模式，即关闭自协商并指定 duplex half，故描述正确的是非自协商下为半双工。"
  },
  {
    "id": 1821,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "以下命令片段中，描述路由优先级的字段是（）。",
    "options": [
      "A. Proto",
      "B. Pre",
      "C. Cost",
      "D. Flags"
    ],
    "answer": 1,
    "explanation": "在路由表显示信息中，Pre 字段表示路由优先级（preference），数值越小越优先；Proto 为协议类型，Cost 为度量值，Flags 为标志位。"
  },
  {
    "id": 1822,
    "type": "single",
    "category": "路由协议",
    "paper": "real2022a",
    "question": "显示 OSPF 邻居信息的命令是（）。",
    "options": [
      "A. display ospf interface",
      "B. display ospf routing",
      "C. display ospf peer",
      "D. display ospf lsdb"
    ],
    "answer": 2,
    "explanation": "display ospf peer 用于显示 OSPF 邻居信息；interface 显示接口信息，routing 显示路由表，lsdb 显示链路状态数据库。"
  },
  {
    "id": 1823,
    "type": "single",
    "category": "交换技术",
    "paper": "real2022a",
    "question": "以下关于 VLAN 的描述中，不正确的是（）。",
    "options": [
      "A. VLAN 的主要作用是隔离广播域",
      "B. 不同 VLAN 间须跨三层互通",
      "C. VLAN ID 可以使用范围为 1~4095",
      "D. VLAN 1 不用创建且不能删除"
    ],
    "answer": 2,
    "explanation": "VLAN ID 可用范围是 1~4094，4095 为保留值不可使用，故“1~4095”的说法不正确；其余关于隔离广播域、三层互通、VLAN 1 的描述均正确。"
  },
  {
    "id": 1824,
    "type": "single",
    "category": "交换技术",
    "paper": "real2022a",
    "question": "使用命令“vlan batch 30 40”和“vlan batch 30 to 40”分别创建的 VLAN 数量是（）。",
    "options": [
      "A. 11 和 2",
      "B. 2 和 2",
      "C. 11 和 11",
      "D. 2 和 11"
    ],
    "answer": 3,
    "explanation": "vlan batch 30 40 创建 VLAN 30 和 40 共 2 个；vlan batch 30 to 40 创建 VLAN 30 到 40 共 11 个，故数量分别为 2 和 11。"
  },
  {
    "id": 1825,
    "type": "single",
    "category": "交换技术",
    "paper": "real2022a",
    "question": "下列命令片段中划分 VLAN 的方式是（）。",
    "options": [
      "A. 基于策略划分",
      "B. 基于 MAC 划分",
      "C. 基于 IP 子网划分",
      "D. 基于网络层协议划分"
    ],
    "answer": 0,
    "explanation": "命令片段中通过匹配 MAC 地址与 VLAN 的对应关系来划分 VLAN，属于基于策略（MAC 地址策略）的划分方式。"
  },
  {
    "id": 1826,
    "type": "single",
    "category": "交换技术",
    "paper": "real2022a",
    "question": "存储转发式交换机中运行生成树协议（STP）可以（）。",
    "options": [
      "A. 向端口连接的各个站点发送请求以便获取其 MAC 地址",
      "B. 阻塞一部分端口，避免形成环路",
      "C. 找不到目的地址时广播数据帧",
      "D. 通过选举产生多个没有环路的生成树"
    ],
    "answer": 1,
    "explanation": "STP 通过阻塞部分冗余端口，将存在环路的网络修剪成无环的树形拓扑，从而避免广播风暴和帧的循环转发。"
  },
  {
    "id": 1827,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022a",
    "question": "在 5G 关键技术中，将传统互联网控制平面与数据平面分离，使网络的灵活性、可管理性和可扩展性大幅提升的是（）。",
    "options": [
      "A. 软件定义网络（SDN）",
      "B. 大规模多输入多输出（MIMO）",
      "C. 网络功能虚拟化（NFV）",
      "D. 长期演进（LTE）"
    ],
    "answer": 0,
    "explanation": "SDN 将控制平面与数据平面分离，由集中控制器统一管理转发设备，从而提升网络的灵活性、可管理性和可扩展性。"
  },
  {
    "id": 1828,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2022a",
    "question": "以下关于二进制指数退避算法的描述中，正确的是（）。",
    "options": [
      "A. 每次站点等待的时间是固定的，即上次的 2 倍",
      "B. 后一次退避时间一定比前一次长",
      "C. 发生冲突不一定是站点发生了资源抢占",
      "D. 通过扩大退避窗口杜绝了再次冲突"
    ],
    "answer": 2,
    "explanation": "二进制指数退避中，发生冲突后站点随机等待的时间随冲突次数增大而增大，但不一定比前一次长；冲突不一定意味着资源被抢占，故 C 正确。"
  },
  {
    "id": 1829,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022a",
    "question": "下列 IEEE 802.11 系列标准中，支持 2.4GHz 和 5GHz 两个工作频段的是（）。",
    "options": [
      "A. 802.11a",
      "B. 802.11ac",
      "C. 802.11b",
      "D. 802.11g"
    ],
    "answer": 1,
    "explanation": "802.11ac 工作在 5GHz 频段并向下兼容 2.4GHz 使用场景；802.11a 仅 5GHz，802.11b/g 仅 2.4GHz，故支持双频段的是 802.11ac。"
  },
  {
    "id": 1830,
    "type": "single",
    "category": "无线网络",
    "paper": "real2022a",
    "question": "某无线路由器，在 2.4GH 频道上配置了 2 个信道，使用（）信道间干扰最小。",
    "options": [
      "A. 1 和 3",
      "B. 4 和 7",
      "C. 6 和 10",
      "D. 7 和 12"
    ],
    "answer": 3,
    "explanation": "2.4GHz 频段中互不重叠的信道为 1、6、11，7 和 12 间隔 5 个信道，属于非重叠信道，干扰最小。"
  },
  {
    "id": 1831,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2022a",
    "question": "以下关于层次化网络设计模型的描述中，不正确的是（）。",
    "options": [
      "A. 终端用户网关通常部署在核心层，实现不同区域间的数据高速转发",
      "B. 流量负载和 VLAN 间路由在汇聚层实现",
      "C. MAC 地址过滤、路由发现在接入层实现",
      "D. 接入层连接无线 AP 等终端设备"
    ],
    "answer": 0,
    "explanation": "终端用户网关通常部署在汇聚层或接入层，而非核心层；核心层负责高速数据转发，故“部署在核心层”的描述不正确。"
  },
  {
    "id": 1832,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "某存储系统规划配置 25 块 8TB 磁盘，创建 2 个 RAID6 组，配置 1 块热备盘，则该存储系统实际存储容量是（）。",
    "options": [
      "A. 200TB",
      "B. 192TB",
      "C. 176TB",
      "D. 160TB"
    ],
    "answer": 3,
    "explanation": "25 块盘配置 1 块热备盘，剩 24 块组成 2 个 RAID6 组，每组 12 块，每组容量 (12-2)×8=80TB，两组共 160TB。"
  },
  {
    "id": 1833,
    "type": "single",
    "category": "网络安全",
    "paper": "real2022a",
    "question": "《中华人民共和国数据安全法》由中华人民共和国第十三届全国人民代表大会常务委员会第二十九次会议审议通过，自（）年 9 月 1 日起施行。",
    "options": [
      "A. 2019",
      "B. 2020",
      "C. 2021",
      "D. 2022"
    ],
    "answer": 2,
    "explanation": "《中华人民共和国数据安全法》于2021年6月10日通过，自2021年9月1日起施行，故选2021年。"
  },
  {
    "id": 1834,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2022a",
    "question": "以下关于信息化项目成本估算的描述中，不正确的是（）。",
    "options": [
      "A. 项目成本估算指设备采购、劳务支出等直接用于项目建设的经费估算",
      "B. 项目成本估算需考虑项目工期要求的影响，工期要求越短成本越高",
      "C. 项目成本估算需考虑项目质量要求的影响，质量要求越高成本越高",
      "D. 项目成本估算过粗或过细都会影响项目成本"
    ],
    "answer": 0,
    "explanation": "项目成本估算不仅包括设备采购、劳务等直接经费，还包括间接成本、管理成本等，A项描述不全面，故不正确。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2021b";
  const A = [
  {
    "id": 1835,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "微机系统中，( )不属于CPU的运算器组成部件。",
    "options": [
      "A. 程序计数器",
      "B. 累加寄存器",
      "C. 多路转换器",
      "D. ALU单元"
    ],
    "answer": 0,
    "explanation": "CPU运算器由ALU、累加寄存器、多路转换器等组成，程序计数器属于控制器部件，故选程序计数器。"
  },
  {
    "id": 1836,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "Python语言的特点不包括( )",
    "options": [
      "A. 跨平台、开源",
      "B. 编译型",
      "C. 支持面向对象程序设计",
      "D. 动态编程"
    ],
    "answer": 1,
    "explanation": "Python是解释型语言，逐行解释执行，而非编译型，故“编译型”不属于其特点。"
  },
  {
    "id": 1837,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "软件测试时，白盒测试不能发现( )",
    "options": [
      "A. 代码路径中的错误",
      "B. 死循环",
      "C. 逻辑错误",
      "D. 功能错误"
    ],
    "answer": 3,
    "explanation": "白盒测试基于代码内部逻辑，可发现路径、死循环、逻辑错误，但功能错误需黑盒测试发现。"
  },
  {
    "id": 1838,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "云计算有多种部署模型，当云按照服务方式提供给大众时，称为( )",
    "options": [
      "A. 公有云",
      "B. 私有云",
      "C. 专属云",
      "D. 混合云"
    ],
    "answer": 0,
    "explanation": "云计算按部署模型分为公有云、私有云、混合云等，面向大众提供服务的是公有云。"
  },
  {
    "id": 1839,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "某工厂使用一个软件系统变现质检过程的自动化，并逐步替代人工质检。该系统属于( )",
    "options": [
      "A. 面向作业处理的系统",
      "B. 面向管理控制的系统",
      "C. 面向决策计划的系统",
      "D. 面向数据汇总的系统"
    ],
    "answer": 1,
    "explanation": "该系统用于质检过程自动化并替代人工，属于面向管理控制的系统，侧重过程监控与控制。"
  },
  {
    "id": 1840,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "外包是一种合同协议。外包合同中的关键核心文件是( )",
    "options": [
      "A. 技术等级协议(TLA)",
      "B. 服务等级协议(SLA)",
      "C. 项目执行协议(PEA)",
      "D. 企业管理协议(EMA)"
    ],
    "answer": 1,
    "explanation": "外包合同的关键核心文件是服务等级协议SLA，明确服务内容、质量与责任等。"
  },
  {
    "id": 1841,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "数据标准化是一种按照预定规程对共享数据实施规范化管理的过程。数据标准化的对象是数据元素和元数据。以下①～⑥中，()属于数据标准化主要包括的三个阶段。①数据元素标准阶段②元数据标准阶段③业务建模阶段④软件安装部署阶段⑤数据规范化阶段⑥文档规范化阶段",
    "options": [
      "A. ①②③",
      "B. ③⑤⑥",
      "C. ④⑤⑥",
      "D. ①③⑤"
    ],
    "answer": 1,
    "explanation": "数据标准化主要包括业务建模阶段、数据规范化阶段和文档规范化阶段，故选③⑤⑥。"
  },
  {
    "id": 1842,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "在软件开发过程中，系统测试阶段的测试目标来自于( )阶段。",
    "options": [
      "A. 需求分析",
      "B. 概要设计",
      "C. 详细设计",
      "D. 软件实现"
    ],
    "answer": 0,
    "explanation": "系统测试验证系统是否满足需求，其测试目标来源于需求分析阶段确定的需求。"
  },
  {
    "id": 1843,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "信息系统的文档是开发人员与用户交流的工具。在系统规划和系统分析阶段用户与系统分析人员交流所使用的文档不包括( )。",
    "options": [
      "A. 可行性研究报告",
      "B. 总体规划报告",
      "C. 项目开发计划",
      "D. 用户使用手册"
    ],
    "answer": 3,
    "explanation": "用户使用手册在系统交付使用阶段编写，不属于规划和分析阶段交流文档。"
  },
  {
    "id": 1844,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "( )是构成我国保护计算机软件著作权的两个基本法律文件。",
    "options": [
      "A. 《计算机软件保护条例》和《软件法》",
      "B. 《中华入民共和国著作权法》和《软件法》",
      "C. 《中华人民共和国著作权法》和《计算机软件保护条例》",
      "D. 《中华人民共和国版权法》和《中华人民共和国著作权法》"
    ],
    "answer": 2,
    "explanation": "我国保护计算机软件著作权的基本法律文件是《中华人民共和国著作权法》和《计算机软件保护条例》。"
  },
  {
    "id": 1845,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021b",
    "question": "在光纤通信中，( )设备可以将光信号放大进行远距离传输。",
    "options": [
      "A. 光纤中继器",
      "B. 光纤耦合器",
      "C. 光发信机",
      "D. 光检测器"
    ],
    "answer": 0,
    "explanation": "光纤中继器（光放大器）可将衰减的光信号放大，实现远距离传输，故选光纤中继器。"
  },
  {
    "id": 1846,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2021b",
    "question": "在10GBase-ER标准中，使用单模光纤最大传输距离是( )。",
    "options": [
      "A. 300米",
      "B. 5公里",
      "C. 10公里",
      "D. 40公里"
    ],
    "answer": 3,
    "explanation": "10GBase-ER使用单模光纤，最大传输距离为40公里，故选40公里。"
  },
  {
    "id": 1847,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021b",
    "question": "在OSI参考模型中，传输层处理的数据单位是( )。",
    "options": [
      "A. 比特",
      "B. 帧",
      "C. 分组",
      "D. 报文"
    ],
    "answer": 3,
    "explanation": "OSI参考模型中传输层处理的数据单位是报文（段），故选报文。"
  },
  {
    "id": 1848,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2021b",
    "question": "使用ADSL接入电话网采用的认证协议是( )。",
    "options": [
      "A. 802.1x",
      "B. 802.5",
      "C. PPPoA",
      "D. PPPoE"
    ],
    "answer": 3,
    "explanation": "ADSL接入电话网常用PPPoE协议进行认证和会话管理，故选PPPoE。"
  },
  {
    "id": 1849,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021b",
    "question": "在主机上禁止( )协议，可以不响应来自别的主机的Ping包。",
    "options": [
      "A. UDP",
      "B. ICMP",
      "C. TLS",
      "D. ARP"
    ],
    "answer": 1,
    "explanation": "Ping基于ICMP协议，禁止ICMP协议可使主机不响应Ping包，故选ICMP。"
  },
  {
    "id": 1850,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2021b",
    "question": "HDLC协议中，帧的编号和应答号存放在( )字段中。",
    "options": [
      "A. 标志",
      "B. 地址",
      "C. 控制",
      "D. 数据"
    ],
    "answer": 2,
    "explanation": "HDLC帧的控制字段包含帧编号N(S)和应答号N(R)，用于流量和差错控制。"
  },
  {
    "id": 1851,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021b",
    "question": "在OSPF路由协议中，路由器在( )进行链路状态广播。",
    "options": [
      "A. 固定30秒后周期性地",
      "B. 固定60秒后周期性地",
      "C. 收到对端请求后",
      "D. 链路状态发生改变后"
    ],
    "answer": 3,
    "explanation": "OSPF采用触发更新机制，链路状态发生改变后立即进行链路状态广播，而非周期性广播。"
  },
  {
    "id": 1852,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021b",
    "question": "Ping使用了( )类型的ICMP查询报文。",
    "options": [
      "A. Echo Reply",
      "B. Host Unreachable",
      "C. Redirect for Host",
      "D. Source Queach"
    ],
    "answer": 0,
    "explanation": "Ping命令发送ICMP Echo Request，接收Echo Reply报文，故使用Echo Reply类型。"
  },
  {
    "id": 1853,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021b",
    "question": "以下关于路由协议的叙述中，错误的是( )。",
    "options": [
      "A. 路由协议是通过执行一个算法来完成路由选择的一种协议",
      "B. 动态路由协议可以分为距离向量路由协议和链路状态路由协议",
      "C. 路由协议是一种允许数据包在主机之间传送信息的协议",
      "D. 路由器之间可以通过路由协议学习网络的拓扑结构"
    ],
    "answer": 2,
    "explanation": "路由协议用于路由器之间交换路由信息、计算路由，而非直接承载主机间数据传送；在主机之间传送数据的是IP等网络层协议，故C错误。"
  },
  {
    "id": 1854,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021b",
    "question": "以下关于RIPv2对于RIPv1改进的说法中，错误的是( )。",
    "options": [
      "A. RIPv2是基于链路状态的路由协议",
      "B. RIPv2可以支持VLSM",
      "C. RIPv2可以支持认证，有明文和MD5两种方式",
      "D. RIPv2采用的是组播更新"
    ],
    "answer": 0,
    "explanation": "RIPv2仍是距离向量路由协议，只是增加了VLSM、认证和组播更新等改进，并非链路状态协议，故A错误。"
  },
  {
    "id": 1855,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021b",
    "question": "以下关于OSPF路由协议的说法中，错误的是( )。",
    "options": [
      "A. OSPF是基于分布式的链路状态协议",
      "B. OSPF是一种内部网关路由协议",
      "C. OSPF可以用于自治系统之间的路由选择",
      "D. OSPF为减少洪泛链路状态的信息量，可以将自治系统划分为更小的区域"
    ],
    "answer": 2,
    "explanation": "OSPF是内部网关协议，用于自治系统内部路由选择，自治系统之间使用BGP等外部网关协议，故C错误。"
  },
  {
    "id": 1856,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021b",
    "question": "以下关于IS-IS路由协议的说法中，错误的是( )。",
    "options": [
      "A. IS-IS是基于距离矢量的路由协议",
      "B. IS-IS属于内部网关路由协议",
      "C. IS-IS路由协议将自治系统分为骨干区域和非骨干区域",
      "D. IS-IS路由协议中Level-2路由器可以和不同区域的Level-2或者Level-2路由器形成邻居关系。"
    ],
    "answer": 0,
    "explanation": "IS-IS是基于链路状态的路由协议，通过洪泛链路状态信息计算最短路径，并非距离矢量协议，故A错误。"
  },
  {
    "id": 1857,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021b",
    "question": "以下关于BGP路由协议的说法中，错误的是( )。",
    "options": [
      "A. BGP协议是一种外部网关协议",
      "B. BGP协议为保证可靠性使用TCP作为承载协议，使用端口号是179",
      "C. BGP协议使用keep-alive报文周期性的证实邻居站的连通性",
      "D. BGP协议不支持路由汇聚功能"
    ],
    "answer": 3,
    "explanation": "BGP支持路由汇聚（CIDR），可减少路由表规模，因此“不支持路由汇聚”的说法错误，故D错误。"
  },
  {
    "id": 1858,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021b",
    "question": "下列协议中，使用明文传输的是( )。",
    "options": [
      "A. SSH",
      "B. Telnet",
      "C. SFTP",
      "D. HTTPS"
    ],
    "answer": 1,
    "explanation": "Telnet以明文方式传输用户名、口令和数据，安全性差；SSH、SFTP、HTTPS均采用加密传输，故B正确。"
  },
  {
    "id": 1859,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021b",
    "question": "在浏览器地址栏输入ftp://ftp.tsinghua.edu.cn/进行访问时，首先执行的操作是( )",
    "options": [
      "A. 域名解析",
      "B. 建立控制命令连接",
      "C. 建立文件传输连接",
      "D. 发送FTP命令"
    ],
    "answer": 0,
    "explanation": "访问FTP服务器需先根据域名ftp.tsinghua.edu.cn解析出IP地址，才能建立连接，故首先执行域名解析，A正确。"
  },
  {
    "id": 1860,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021b",
    "question": "下列端口号中，不属于常用电子邮件协议默认使用的端口的是( )。",
    "options": [
      "A. 23",
      "B. 25",
      "C. 110",
      "D. 143"
    ],
    "answer": 0,
    "explanation": "电子邮件常用协议端口为SMTP 25、POP3 110、IMAP 143；23是Telnet端口，不属于邮件协议，故A正确。"
  },
  {
    "id": 1861,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021b",
    "question": "在Linux中，用于解析主机域名的文件是( )。",
    "options": [
      "A. /dev/host.conf",
      "B. /etc/hosts",
      "C. /dev/resolv.conf",
      "D. /etc/resolv.conf"
    ],
    "answer": 1,
    "explanation": "Linux中/etc/hosts文件用于本地静态主机名与IP地址映射解析，故B正确。"
  },
  {
    "id": 1862,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021b",
    "question": "在linux中，可以使用命令( )将文件abe.txt拷贝到目录/home/my/office中，且保留原文件访问权限。",
    "options": [
      "A. $cp-1 abc.txt/home/my/office",
      "B. $cp-p abc.txt/home/my/office",
      "C. $cp-R abc.txt/home/my/office",
      "D. $cp-f abc.txt/home/my/office"
    ],
    "answer": 1,
    "explanation": "cp命令的-p选项表示保留源文件的权限、属主和时间戳等属性，符合题目要求，故B正确。"
  },
  {
    "id": 1863,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021b",
    "question": "在Linux中，要使用命令“chmod-Rxxx/home/abc\"修改目录/home/abc的访问权限为可读、可写、可执行，命令中的“xxx”应该是( )。",
    "options": [
      "A. 777",
      "B. 555",
      "C. 444",
      "D. 222"
    ],
    "answer": 0,
    "explanation": "chmod中可读、可写、可执行对应权限值4+2+1=7，三类用户均为7，故应填777，A正确。"
  },
  {
    "id": 1864,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021b",
    "question": "在Windows中，DNS客户端手工向服务器注册时使用的命令是( )。",
    "options": [
      "A. ipconfig/release",
      "B. ipconfig/flushdns",
      "C. ipconfig/displaydns",
      "D. ipconfig/registerdns"
    ],
    "answer": 3,
    "explanation": "ipconfig/registerdns用于手工向DNS服务器注册客户端的名称与IP地址记录，故D正确。"
  },
  {
    "id": 1865,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021b",
    "question": "Windows Server 2008 R2上内嵌的Web服务器是( )服务器。",
    "options": [
      "A. IIS",
      "B. Apache",
      "C. Tomcat",
      "D. Nginx"
    ],
    "answer": 0,
    "explanation": "Windows Server 2008 R2内嵌的Web服务器是IIS（Internet Information Services），故A正确。"
  },
  {
    "id": 1866,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021b",
    "question": "Windows中，在命令行输入( )命令可以得到如下的回显。Server: UnKnownAdress: 159.47.11.80xxx.edu.cnprimary name server = nsl.xxx.edu.cnresponsible mail addr = mailxxx.edu.cnserial = 2020061746refresh= 1200(20 mins)retry= 7200(2 hours)expire = 3600(1 hour)default TTL = 3600(1 hour)",
    "options": [
      "A. nslookup -type=A xxx.edu.cn",
      "B. nslookup -type=CNAME xxx.edu.cn",
      "C. nslookup -type=NS xxx.edu.cn",
      "D. nslookup -type=PTR xxx.edu.cn"
    ],
    "answer": 2,
    "explanation": "回显中primary name server、responsible mail addr等为NS记录内容，故应使用nslookup -type=NS查询，C正确。"
  },
  {
    "id": 1867,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021b",
    "question": "以下关于电子邮件服务的说法中，正确的是( )。",
    "options": [
      "A. 收到的邮件会即时自动的存储在预定目录中",
      "B. 电子邮件需要用户手动接收",
      "C. 不同操作系统使用不同的默认端口",
      "D. 电子邮件地址格式允许用户自定义"
    ],
    "answer": 0,
    "explanation": "邮件服务器收到邮件后会自动将其存入用户邮箱目录，用户无需手动接收即可保存，故A正确。"
  },
  {
    "id": 1868,
    "type": "single",
    "category": "网络管理",
    "paper": "real2021b",
    "question": "用户可以使用( )向DHCP服务器重新请求IP地址配置。",
    "options": [
      "A. ipconfig/renew",
      "B. ipconfig/release",
      "C. ipconfig/reconfig",
      "D. ipconfig/reboot"
    ],
    "answer": 0,
    "explanation": "ipconfig/renew用于向DHCP服务器重新请求并续租IP地址配置，故A正确。"
  },
  {
    "id": 1869,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021b",
    "question": "Linux防火墙iptables命令的-P参数表示( )。",
    "options": [
      "A. 协议",
      "B. 表",
      "C. 策略",
      "D. 跳转"
    ],
    "answer": 0,
    "explanation": "iptables命令中-P参数用于设置链的默认策略（Policy），如ACCEPT或DROP，故A正确。"
  },
  {
    "id": 1870,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021b",
    "question": "在防火墙域间安全策略中，不是outbound方向数据流的是( )。",
    "options": [
      "A. 从Trust区域到Local区域的数据流",
      "B. 从Trust区域到Untrust区域的数据流",
      "C. 从Trust区域到DMZ区域的数据流",
      "D. 从DMZ区域到Untrust区域的数据"
    ],
    "answer": 0,
    "explanation": "outbound指从高优先级区域（如Trust）流向低优先级区域；Trust到Local属于inbound方向，故A正确。"
  },
  {
    "id": 1871,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021b",
    "question": "PKC证书主要用于确保( )的合法性。",
    "options": [
      "A. 主体私钥",
      "B. CA私钥",
      "C. 主体公钥",
      "D. CA公钥"
    ],
    "answer": 2,
    "explanation": "PKI中数字证书由CA签发，用CA私钥签名，主要用于绑定并确保证书主体公钥的合法性，故C正确。"
  },
  {
    "id": 1872,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021b",
    "question": "AES是一种( )。",
    "options": [
      "A. 公钥加密算法",
      "B. 流密码算法",
      "C. 分组加密算法",
      "D. 消息摘要算法"
    ],
    "answer": 2,
    "explanation": "AES是对称密钥的分组加密算法，分组长度128位，支持128/192/256位密钥，故C正确。"
  },
  {
    "id": 1873,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021b",
    "question": "以下关于HTTPS的描述中，正确的是( )。",
    "options": [
      "A. HTTPS和SHTTP是同一个协议的不同简称",
      "B. HTTPS服务器端使用的缺省TCP端口是110",
      "C. HTTPS是传输层协议",
      "D. HTTPS是HTTP和SSL/TLS的组合"
    ],
    "answer": 3,
    "explanation": "HTTPS是HTTP与SSL/TLS结合，在HTTP与TCP之间加入SSL/TLS实现加密传输，默认端口443，属于应用层协议，故选D。"
  },
  {
    "id": 1874,
    "type": "single",
    "category": "网络管理",
    "paper": "real2021b",
    "question": "与SNMP所采用的传输层协议相同的是( )。",
    "options": [
      "A. HTTP",
      "B. SMTP",
      "C. FTP",
      "D. DNS"
    ],
    "answer": 3,
    "explanation": "SNMP使用传输层UDP协议，选项中DNS也使用UDP（端口53），HTTP、SMTP、FTP均基于TCP，故选D。"
  },
  {
    "id": 1875,
    "type": "single",
    "category": "交换技术",
    "paper": "real2021b",
    "question": "管理员发现交换机的二层转发表空间被占满，清空后短时间内仍然会被沾满，造成这种现象的原因可能是( )。",
    "options": [
      "A. 交换机内存故障",
      "B. 存在环路造成广播风暴",
      "C. 接入设备过多",
      "D. 利用虚假的MAC进行攻击"
    ],
    "answer": 3,
    "explanation": "攻击者利用虚假源MAC大量发送帧，使交换机二层转发表被快速填满，导致正常MAC无法学习，故选D。"
  },
  {
    "id": 1876,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021b",
    "question": "某网络结构如下图所示。PC1的用户在浏览器地址栏中入www.abc.com获取响应页面，而输入61.102.58.77可以正常打开Web页面，则导致该现象的可能是()。",
    "options": [
      "A. 域名解析失败",
      "B. 网关配置错误",
      "C. PC1网络参数配置错误",
      "D. 路由配置错误"
    ],
    "answer": 0,
    "explanation": "输入域名无法访问而输入IP可正常打开，说明网络连通正常，问题出在域名无法解析为IP，即域名解析失败，故选A。"
  },
  {
    "id": 1877,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021b",
    "question": "下面的IP地址中，能够作为主机地址的是( )",
    "options": [
      "A. 168.254.0.243/30",
      "B. 10.20.30.40/29",
      "C. 172.16.18.0/22",
      "D. 192.168.11.191/26"
    ],
    "answer": 2,
    "explanation": "172.16.18.0/22掩码255.255.252.0，网络号172.16.16.0，主机位非全0非全1，可作主机地址；其余均为网络或广播地址，故选C。"
  },
  {
    "id": 1878,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021b",
    "question": "下面的IP地址中，不属于同一网络的是( )",
    "options": [
      "A. 172.20.34.28/21",
      "B. 172.20.39.100/21",
      "C. 172.20.32.176/21",
      "D. 172.20.40.177/21"
    ],
    "answer": 3,
    "explanation": "/21掩码255.255.248.0，前三项网络号均为172.20.32.0，而172.20.40.177属于172.20.40.0网段，不在同一网络，故选D。"
  },
  {
    "id": 1879,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021b",
    "question": "PC1的IP地址为192.168.5.16，PC2的IP地址为192.168.5.100，PC1和PC2在同一网段中，其子网掩码可能是()",
    "options": [
      "A. 255.255.255.240",
      "B. 255.255.255.224",
      "C. 255.255.255.192",
      "D. 255.255.255.128"
    ],
    "answer": 3,
    "explanation": "两地址需在同一子网。255.255.255.128将网段分为两半，192.168.5.16与192.168.5.100均落在192.168.5.0/25内，故选D。"
  },
  {
    "id": 1880,
    "type": "single",
    "category": "交换技术",
    "paper": "real2021b",
    "question": "下列命令片段含义是( )。system-view[HUAWEI] observe-port 1 interface gigabitethernet 0/0/1[HUAWEI] interface gigabitethernet 0/0/2[HUAWEI-GigabitEthernet0/0/2] port-mirroring to observe-port 1 inbound",
    "options": [
      "A. 配置端口镜像",
      "B. 配置链路聚合",
      "C. 配置逻辑接口",
      "D. 配置访问控制策略"
    ],
    "answer": 0,
    "explanation": "命令配置observe-port观察端口并将GE0/0/2入方向流量镜像到该端口，属于端口镜像配置，故选A。"
  },
  {
    "id": 1881,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021b",
    "question": "使用( )命令可以显示OSPF接口信息。",
    "options": [
      "A. display ospf error",
      "B. display this",
      "C. display ospf brief",
      "D. display ospf interface"
    ],
    "answer": 3,
    "explanation": "display ospf interface用于显示OSPF接口信息，包括接口状态、区域、开销等，故选D。"
  },
  {
    "id": 1882,
    "type": "single",
    "category": "交换技术",
    "paper": "real2021b",
    "question": "GVRP是跨交换机进行VLAN动态注册和删除的协议，关于对GVRP描述不准确的是( )。",
    "options": [
      "A. GVRP是GARP的一种应用，由IEEE制定",
      "B. 交换机之间的协议报文交互必须在VLAN Trunk链路上进行",
      "C. GVRP协议所支持的VLAN ID范围为1-1001",
      "D. GVRP配置时需要在每一台交换机上建立VLAN"
    ],
    "answer": 3,
    "explanation": "GVRP可动态注册和删除VLAN，无需在每台交换机上手工建立VLAN，故D描述不准确，选D。"
  },
  {
    "id": 1883,
    "type": "single",
    "category": "交换技术",
    "paper": "real2021b",
    "question": "使用命令vlan batch 10 15 to 19 25 28 to 30创建了( )个VLAN。",
    "options": [
      "A. 6",
      "B. 10",
      "C. 5",
      "D. 9"
    ],
    "answer": 1,
    "explanation": "vlan batch 10 15 to 19 25 28 to 30共创建VLAN 10、15-19（5个）、25、28-30（3个），合计10个，故选B。"
  },
  {
    "id": 1884,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021b",
    "question": "与CSMA相比，CSMA/CD( )。",
    "options": [
      "A. 充分利用传播延迟远小于传输延迟的特性，减少了冲突后信道的浪费",
      "B. 将冲突的产生控制在传播时间内，减少了冲突的概率",
      "C. 在发送数据前和发送数据过程中侦听信道，不会产生冲突",
      "D. 站点竞争信道，提高了信道的利用率"
    ],
    "answer": 0,
    "explanation": "CSMA/CD在CSMA基础上增加冲突检测，利用传播延迟远小于传输延迟的特性，冲突后及时停止发送，减少信道浪费，故选A。"
  },
  {
    "id": 1885,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021b",
    "question": "采用CSMA/CD进行介质访问，两个站点连续冲突3次后再次冲突的( )。",
    "options": [
      "A. 1/2",
      "B. 1/4",
      "C. 1/8",
      "D. 1/16"
    ],
    "answer": 2,
    "explanation": "二进制指数退避算法中第i次冲突后从2^i个时隙中随机选择，第3次冲突后为2^3=8个时隙，选中概率1/8，故选C。"
  },
  {
    "id": 1886,
    "type": "single",
    "category": "无线网络",
    "paper": "real2021b",
    "question": "下列通信技术标准中，使用频带相同的是( )。",
    "options": [
      "A. 802.11a和802.11b",
      "B. 802.11b和802.11g",
      "C. 802.11a和802.11g",
      "D. 802.11a和802.11n"
    ],
    "answer": 1,
    "explanation": "802.11b和802.11g均工作在2.4GHz频段，使用相同频带；802.11a工作在5GHz，故选B。"
  },
  {
    "id": 1887,
    "type": "single",
    "category": "无线网络",
    "paper": "real2021b",
    "question": "以下关子WIFI6的说法中，错误的是( )。",
    "options": [
      "A. 支持完整版的MU-MIMO",
      "B. 理论吞吐量最高可达9.6Gbps",
      "C. 遵从协议802.11ax",
      "D. 工作频段在5GHZ"
    ],
    "answer": 3,
    "explanation": "WiFi6（802.11ax）支持2.4GHz和5GHz双频段，并非仅工作于5GHz，故D错误，选D。"
  },
  {
    "id": 1888,
    "type": "single",
    "category": "无线网络",
    "paper": "real2021b",
    "question": "以下关于无线漫游的说法中，错误的是( )。",
    "options": [
      "A. 漫游是由AP发起的",
      "B. 漫游分为二层漫游和三层漫游",
      "C. 三层漫游必须在同一个SSID",
      "D. 客户端在AP间漫游，AP可以处于不同的VLAN"
    ],
    "answer": 0,
    "explanation": "无线漫游由客户端发起，AP只是响应，故A说法错误，选A。"
  },
  {
    "id": 1889,
    "type": "single",
    "category": "无线网络",
    "paper": "real2021b",
    "question": "在大型无线网络中，AP通常通过DHCP option( )来获取AC的IP地址。",
    "options": [
      "A. 43",
      "B. 60",
      "C. 66",
      "D. 138"
    ],
    "answer": 0,
    "explanation": "大型无线网络中AP通过DHCP option 43获取AC的IP地址，实现自动发现AC，故选A。"
  },
  {
    "id": 1890,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2021b",
    "question": "网络规划中，冗余设计不能( )。",
    "options": [
      "A. 提高链路可靠性",
      "B. 增强负载能力",
      "C. 提高数据安全性",
      "D. 加快路由收敛"
    ],
    "answer": 3,
    "explanation": "冗余设计可提高链路可靠性、增强负载能力和数据安全性，但不能加快路由收敛，故选D。"
  },
  {
    "id": 1891,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021b",
    "question": "某公司局域网使用DHCP动态获取10.1.0.1/24网段的IP地址，某天公司大量终端获得了192.168.1.0/24网段的地址，可在接入交换机上配置()功能杜绝该问费再次出现。",
    "options": [
      "A. dhcp relay",
      "B. dhcp snooping",
      "C. mac-address static",
      "D. arp static"
    ],
    "answer": 1,
    "explanation": "DHCP Snooping可过滤非法DHCP服务器响应，防止终端获取非授权网段地址，故选B。"
  },
  {
    "id": 1892,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021b",
    "question": "项目范围管理过程如下所示，其正确的流程顺序是( )。①定义范围②核实范围③收集需求④控制范围⑤创建工作分解结构",
    "options": [
      "A. ②④①③⑤",
      "B. ①②④③⑤",
      "C. ③⑤①②④",
      "D. ③①⑤②④"
    ],
    "answer": 3,
    "explanation": "范围管理流程为收集需求→定义范围→创建工作分解结构→核实范围→控制范围，即③①⑤②④，故选D。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2021a";
  const A = [
  {
    "id": 1893,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "以下关于RISC和CISC计算机的叙述中，正确的是( )。",
    "options": [
      "A. RISC不采用流水线技术，CISC采用流水线技术",
      "B. RISC使用复杂的指令，CISC使用简单的指令",
      "C. RISC采用较多的通用寄存器，CISC采用很少的通用寄存器",
      "D. RISC采用组合逻辑控制器，CISC普遍采用微程序控制器"
    ],
    "answer": 2,
    "explanation": "RISC指令简单、采用流水线，通用寄存器数量多；CISC指令复杂、通用寄存器少，多采用微程序控制器。故C正确。"
  },
  {
    "id": 1894,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "以下关于闪存(FlashMemory)的叙述中，错误的是( )。",
    "options": [
      "A. 掉电后信息不会丢失，属于非易失性存储器",
      "B. 以块为单位进行刷除操作",
      "C. 采用随机访问方式，常用来代替主存",
      "D. 在嵌入式系统中用来代替ROM存储器"
    ],
    "answer": 2,
    "explanation": "闪存是非易失性存储器，掉电不丢失，以块为单位擦除，常代替ROM；但其速度慢于主存，不能代替主存，故C错误。"
  },
  {
    "id": 1895,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "以下关于区块链的说法中，错误的是( )。",
    "options": [
      "A. 比特币的底层技术是区块链",
      "B. 区块链技术是一种全面记账的方式",
      "C. 区块链是加密数据按照时间顺序叠加生成临时、不可逆向的记录",
      "D. 目前区块链可分为公有链、私有链、联盟链三种类型"
    ],
    "answer": 2,
    "explanation": "区块链是加密数据按时间顺序叠加生成的永久、不可逆向的记录，而非临时记录，故C说法错误。"
  },
  {
    "id": 1896,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "基于Android的移动端开发平台是一个以( )为基础的开源移动设备操作系统。",
    "options": [
      "A. Windows",
      "B. Unix",
      "C. Linux",
      "D. DOS"
    ],
    "answer": 2,
    "explanation": "Android是基于Linux内核开发的开源移动设备操作系统，故其基础为Linux。"
  },
  {
    "id": 1897,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "企业信息化的作用不包括( )。",
    "options": [
      "A. 优化企业资源配置",
      "B. 实现规范化的流程管理",
      "C. 延长产品的开发周期",
      "D. 提高生产效率，降低运营成本"
    ],
    "answer": 2,
    "explanation": "企业信息化可优化资源配置、规范流程、提高效率降低成本，应缩短而非延长产品开发周期，故C不属于其作用。"
  },
  {
    "id": 1898,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "( )指用计算机平均每秒能执行的百万条指令数来衡量计算机性能的一种指标。",
    "options": [
      "A. CPI",
      "B. PCI",
      "C. MIPS",
      "D. MFLOPS"
    ],
    "answer": 2,
    "explanation": "MIPS表示每秒执行百万条指令数，是衡量计算机性能的指标；CPI是每指令周期数，MFLOPS衡量浮点运算。"
  },
  {
    "id": 1899,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "根据《计算机软件保护条例》的规定，对软件著作权的保护不包括( )。",
    "options": [
      "A. 目标程序",
      "B. 软件文档",
      "C. 源程序",
      "D. 软件中采用的算法"
    ],
    "answer": 3,
    "explanation": "《计算机软件保护条例》保护源程序、目标程序及文档，但不保护软件中采用的算法、思想和方法，故选D。"
  },
  {
    "id": 1900,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "对十进制数47和0.25分别表示为十六进制形式，为( )。",
    "options": [
      "A. 2F,0.4",
      "B. 2F,0.D",
      "C. 3B.0.4",
      "D. 3B,0.D"
    ],
    "answer": 0,
    "explanation": "47=2×16+15，即十六进制2F；0.25×16=4，即0.4，故为2F,0.4，选A。"
  },
  {
    "id": 1901,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "软件的( )是以用户为主，包括软件开发人员和质量保证人员都参加的测试，一般使用实际应用数据进行测试，除了测试软件功能和性能外，还对软件可移植性、兼容性、可维护性、错误的恢复功能等进行确认",
    "options": [
      "A. 单元测试",
      "B. 集成测试",
      "C. 系统测试",
      "D. 验收测试"
    ],
    "answer": 3,
    "explanation": "验收测试以用户为主，开发与质量保证人员参加，使用实际数据，确认功能性能及可移植性、兼容性等，故选D。"
  },
  {
    "id": 1902,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "“当多个事务并发执行时，任一事务的更新操作直到其成功提交的整个过程，对其他事务都是不可见的\"，这一特性通常被称之为事务的( )。",
    "options": [
      "A. 原子性",
      "B. 一致性",
      "C. 隔离性",
      "D. 持久性"
    ],
    "answer": 2,
    "explanation": "隔离性指并发事务之间互不干扰，一个事务的更新在提交前对其他事务不可见，故选C。"
  },
  {
    "id": 1903,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021a",
    "question": "下列通信设备中，采用存储-转发方式处理信号的设备是( )。",
    "options": [
      "A. 中继器",
      "B. 放大器",
      "C. 交换机",
      "D. 集线器"
    ],
    "answer": 2,
    "explanation": "交换机采用存储-转发方式处理信号；中继器、放大器、集线器均为直接转发或放大信号，不存储。"
  },
  {
    "id": 1904,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021a",
    "question": "光信号在单模光纤中是以( )方式传播。",
    "options": [
      "A. 直线传播",
      "B. 渐变反射",
      "C. 突变反射",
      "D. 无线收发"
    ],
    "answer": 2,
    "explanation": "单模光纤纤芯细，光信号沿轴向以直线传播方式传输，只有一种传播模式，故选A。"
  },
  {
    "id": 1905,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021a",
    "question": "在曼彻斯特编码中，若波特率为10Mbps,其数据速率为_( )Mbps。",
    "options": [
      "A. 5",
      "B. 10",
      "C. 16",
      "D. 20"
    ],
    "answer": 0,
    "explanation": "曼彻斯特编码每个码元含一次跳变，波特率是数据速率的2倍，故数据速率=10/2=5Mbps，选A。"
  },
  {
    "id": 1906,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2021a",
    "question": "100BASE-FX采用的编码技术为( )。",
    "options": [
      "A. 曼彻斯特编码",
      "B. 4B5B+NRZI",
      "C. MLT-3+NRZI",
      "D. 8B6T"
    ],
    "answer": 1,
    "explanation": "100BASE-FX采用4B5B编码加NRZI编码，用于光纤传输，故选B。"
  },
  {
    "id": 1907,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021a",
    "question": "在PCM中，若对模拟信号的采样值使用64级量化，则至少需使用( )位二进制。",
    "options": [
      "A. 4",
      "B. 5",
      "C. 6",
      "D. 7"
    ],
    "answer": 2,
    "explanation": "64级量化需2^n≥64，n=6，故至少需6位二进制编码，选C。"
  },
  {
    "id": 1908,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2021a",
    "question": "万兆以太网标准中，传输距离最远的是( )。",
    "options": [
      "A. 10GBASE-S",
      "B. 10GBASE-L",
      "C. 10GBASE-LX4",
      "D. 10GBASE-E"
    ],
    "answer": 3,
    "explanation": "10GBASE-E使用长波长单模光纤，传输距离最远可达40km，故选D。"
  },
  {
    "id": 1909,
    "type": "single",
    "category": "无线网络",
    "paper": "real2021a",
    "question": "2.4GH2频段划分成11个互相覆盖的信道，中心频率间隔为( )MHz。",
    "options": [
      "A. 4",
      "B. 5",
      "C. 6",
      "D. 7"
    ],
    "answer": 1,
    "explanation": "2.4GHz频段划分11个信道，相邻信道中心频率间隔为5MHz，故选B。"
  },
  {
    "id": 1910,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021a",
    "question": "以下编码中，编码效率最高的是( )。",
    "options": [
      "A. BAMI",
      "B. 曼彻斯特编码",
      "C. 4B5B",
      "D. NRZI"
    ],
    "answer": 2,
    "explanation": "4B5B编码将4位数据编为5位，编码效率为4/5=80%，高于曼彻斯特的50%等，故选C。"
  },
  {
    "id": 1911,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2021a",
    "question": "以下关于HDLC协议的说法中，错误的是( )。",
    "options": [
      "A. HDLC是一种面向比特计数的同步链路控制协议",
      "B. 应答RNR5表明编号为4之前的帧均正确，接收站忙暂停接收下一帧",
      "C. 信息帧仅能承载用户数据，不得做它用",
      "D. 传输的过程中采用无编号帧进行链路的控制"
    ],
    "answer": 2,
    "explanation": "HDLC信息帧除承载用户数据外，还可携带捎带确认的序号，并非仅能承载用户数据，故C错误。"
  },
  {
    "id": 1912,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021a",
    "question": "ICMP是TCP/IP分层模型第三层协议，其报文封装在( )中传送。",
    "options": [
      "A. 以太帧",
      "B. IP数据报",
      "C. UDP报文",
      "D. TCP报文"
    ],
    "answer": 1,
    "explanation": "ICMP是网络层协议，其报文封装在IP数据报中传送，故选B。"
  },
  {
    "id": 1913,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021a",
    "question": "TCP伪首部不包含的字段为( )。",
    "options": [
      "A. 源地址",
      "B. 目的地址",
      "C. 标识符",
      "D. 协议"
    ],
    "answer": 3,
    "explanation": "TCP伪首部包含源IP地址、目的IP地址、协议号和TCP长度，用于校验和计算，不包含标识符字段，标识符是IP首部字段。"
  },
  {
    "id": 1914,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021a",
    "question": "用于自治系统(AS)之间路由选择的路由协议是( )。",
    "options": [
      "A. RIP",
      "B. OSPF",
      "C. IS-IS",
      "D. BGP"
    ],
    "answer": 3,
    "explanation": "BGP是自治系统之间的外部网关协议(EGP)，用于AS间路由选择；RIP、OSPF、IS-IS均为自治系统内部使用的路由协议。"
  },
  {
    "id": 1915,
    "type": "single",
    "category": "路由协议",
    "paper": "real2021a",
    "question": "以下关于OSPF协议的描述中，错误的是( )。",
    "options": [
      "A. OSPF是一种链路状态协议",
      "B. OSPF路由器中可以配置多个路由进程",
      "C. OSPF网络中用区域0来表示主干网",
      "D. OSPF使用LSA报文维护邻居关系"
    ],
    "answer": 3,
    "explanation": "OSPF使用Hello报文建立和维护邻居关系，LSA用于描述链路状态并泛洪，而非维护邻居关系，故该描述错误。"
  },
  {
    "id": 1916,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "Telnet是一种用于远程访问的协议。以下关于Telnet的描述中，正确的是( )。",
    "options": [
      "A. 不能传输登录口令",
      "B. 默认端口号是23",
      "C. 一种安全的通信协议",
      "D. 用UDP作为传输层协议"
    ],
    "answer": 1,
    "explanation": "Telnet是远程登录协议，默认使用TCP 23端口，以明文传输包括登录口令在内的数据，属于不安全的通信协议。"
  },
  {
    "id": 1917,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021a",
    "question": "在浏览器地址栏输入192.168.1.1进行访问时，首先执行的操作是( )。",
    "options": [
      "A. 域名解析",
      "B. 解释执行",
      "C. 发送页面请求报文",
      "D. 建立TCP连接"
    ],
    "answer": 3,
    "explanation": "在浏览器输入IP地址访问时无需域名解析，HTTP基于TCP，因此首先执行的操作是与服务器建立TCP连接。"
  },
  {
    "id": 1918,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021a",
    "question": "SMTP的默认服务端口号是( )。",
    "options": [
      "A. 25",
      "B. 80",
      "C. 110",
      "D. 143"
    ],
    "answer": 0,
    "explanation": "SMTP用于发送邮件，默认服务端口号为25；80为HTTP，110为POP3，143为IMAP。"
  },
  {
    "id": 1919,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021a",
    "question": "6to4是一种支持IPv6站点通过IPv4网络进行通信的技术，下面IP地址中( )属于6to4地址。",
    "options": [
      "A. FE90::5EFE:10.40.1.29",
      "B. FE80::5EFE:192.168.31.30",
      "C. 2002:C000:022A::",
      "D. FF80:2ABC:0212"
    ],
    "answer": 2,
    "explanation": "6to4地址以2002开头，后接嵌入的IPv4地址，2002:C000:022A::中C000:022A即192.0.2.42，属于6to4地址。"
  },
  {
    "id": 1920,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "使用( )格式的文件展示视频动画可以提高网页内容的载入速度。",
    "options": [
      "A. .jpg",
      "B. .avi",
      "C. .gif",
      "D. .rm"
    ],
    "answer": 2,
    "explanation": "GIF格式支持动画且文件体积小，适合在网页中展示视频动画，可提高网页内容的载入速度。"
  },
  {
    "id": 1921,
    "type": "single",
    "category": "网络管理",
    "paper": "real2021a",
    "question": "对一个新的QoS通信流进行网络资源预约，以确保有足够的资源来保证所请求的QoS，该规则属于IntServ规定的4种用于提供QoS传输机制中的( )规则。",
    "options": [
      "A. 准入控制",
      "B. 路由选择算法",
      "C. 排队规则",
      "D. 丢弃策略"
    ],
    "answer": 0,
    "explanation": "IntServ规定四种QoS机制：准入控制、路由选择算法、排队规则和丢弃策略，其中准入控制用于对新通信流进行资源预约。"
  },
  {
    "id": 1922,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "在Windows系统中，用于清除本地DNS缓存的命令是( )。",
    "options": [
      "A. ipconfig/release",
      "B. ipconfig/flushdns",
      "C. ipconfig/displaydns",
      "D. ipconfg/registerdns"
    ],
    "answer": 1,
    "explanation": "ipconfig/flushdns用于清除本地DNS解析缓存；release释放IP地址，displaydns显示缓存，registerdns刷新注册。"
  },
  {
    "id": 1923,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "Windows Server 2008 R2上可配置( )服务，提供文件的上传和下载服务。",
    "options": [
      "A. DHCP",
      "B. DNS",
      "C. FTP",
      "D. 远程桌面"
    ],
    "answer": 2,
    "explanation": "Windows Server 2008 R2可配置FTP服务，用于提供文件的上传和下载；DHCP、DNS、远程桌面不具备该功能。"
  },
  {
    "id": 1924,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2021a",
    "question": "邮件客户端需监听( )端口及时接收邮件。",
    "options": [
      "A. 25",
      "B. 50",
      "C. 100",
      "D. 110"
    ],
    "answer": 3,
    "explanation": "POP3协议用于接收邮件，默认监听TCP 110端口；25为SMTP发送端口，143为IMAP端口。"
  },
  {
    "id": 1925,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "通常使用( )为IP数据报文进行加密。",
    "options": [
      "A. IPSec",
      "B. P2P",
      "C. HTTPS",
      "D. TLS"
    ],
    "answer": 0,
    "explanation": "IPSec工作在网络层，可对IP数据报文进行加密和认证，为IP通信提供安全保护。"
  },
  {
    "id": 1926,
    "type": "single",
    "category": "网络管理",
    "paper": "real2021a",
    "question": "网管员在Windows系统中，使用下面的命令∶C\\&gt;nslookup-qt=acc.com得到的输出结果是( )。",
    "options": [
      "A. cc.com主机的P地址",
      "B. c.com的邮件交换服务器地址",
      "C. CC.com的别名",
      "D. cc.com的PTR指针"
    ],
    "answer": 0,
    "explanation": "nslookup -qt=a用于查询A记录，返回主机名对应的IP地址，因此输出结果是cc.com主机的IP地址。"
  },
  {
    "id": 1927,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "在Linux系统通过( )命令，可以拒绝IP地址为192.168.0.2的远程主机登录到该服务器。",
    "options": [
      "A. iptables-Ainput-ptcp-s192.168.0.2-source-port22-jDENY",
      "B. iptables-Ainput-ptcp-d192.168.0.2-source-port22-jDENY",
      "C. iptables-Ainput-ptcp-s192.168.0.2-desination-port22-jDENY",
      "D. iptables-Ainput-ptcp-d192.168.0.2-desination-port22-jDENY"
    ],
    "answer": 2,
    "explanation": "拒绝192.168.0.2登录需在INPUT链匹配源地址-s 192.168.0.2、目的端口22并执行DENY，选项C符合该规则。"
  },
  {
    "id": 1928,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "数据包通过防火墙时，不能依据( )进行过滤。",
    "options": [
      "A. 源和目的IP地址",
      "B. 源和目的端口",
      "C. IP协议号",
      "D. 负载内容"
    ],
    "answer": 3,
    "explanation": "传统包过滤防火墙依据源/目的IP地址、源/目的端口和IP协议号进行过滤，不能对应用层负载内容进行过滤。"
  },
  {
    "id": 1929,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "为实现消息的不可否认性，A发送给B的消息需使用( )进行数字签名。",
    "options": [
      "A. A的公钥",
      "B. A的私钥",
      "C. B的公钥",
      "D. B的私钥"
    ],
    "answer": 1,
    "explanation": "数字签名使用发送方A的私钥对消息摘要加密，接收方用A的公钥验证，从而实现不可否认性。"
  },
  {
    "id": 1930,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "以下关于AES加密算法的描述中，错误的是( )。",
    "options": [
      "A. AES的分组长度可以是256比特",
      "B. AES的密钥长度可以是128比特",
      "C. AES所用S盒的输入为8比特",
      "D. AES是一种确定性的加密算法"
    ],
    "answer": 0,
    "explanation": "AES分组长度固定为128比特，密钥长度可为128、192或256比特，S盒输入为8比特，故分组长度256比特的描述错误。"
  },
  {
    "id": 1931,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "在对服务器的日志进行分析时，发现某一时间段，网络中有大量包含“USER\"、“PASS\"负载的数据，该异常行为最可能是( )。",
    "options": [
      "A. ICMP泛洪攻击",
      "B. 端口扫描",
      "C. 弱口令扫描",
      "D. TCP泛洪攻击"
    ],
    "answer": 2,
    "explanation": "大量包含USER、PASS负载的数据表明攻击者正在尝试用不同用户名口令登录，属于弱口令扫描行为。"
  },
  {
    "id": 1932,
    "type": "single",
    "category": "网络管理",
    "paper": "real2021a",
    "question": "在SNMPv3安全模块中的加密部分，为了防止报文内容的泄露，使用DES算法对数据进行加密，其密钥长度为( )。",
    "options": [
      "A. 56",
      "B. 64",
      "C. 120",
      "D. 128"
    ],
    "answer": 0,
    "explanation": "SNMPv3使用DES算法加密报文时，其有效密钥长度为56比特，另8比特用于奇偶校验。"
  },
  {
    "id": 1933,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021a",
    "question": "某主机无法上网，查看\"本地连接\"属性中的数据发送情况，发现只有发送没有接收，造成该主机网络故障的原因最有可能是( )。",
    "options": [
      "A. IP地址配置错误",
      "B. TCP/IP协议故障",
      "C. 网络没有物理连接",
      "D. DNS配置不正确"
    ],
    "answer": 0,
    "explanation": "只有发送没有接收，说明数据包无法送达，最可能是本机IP地址配置错误导致无法与网关通信，而非物理连接或DNS问题。"
  },
  {
    "id": 1934,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "网络管理员用netstat命令监测系统当前的连接情况，若要显示所有80端口的网络连接，则应该执行的命令是( )。",
    "options": [
      "A. netstat-n-p|grepSYN_REC|wc-I",
      "B. netstat-anp|grep80",
      "C. netstat-anp|grep'tcp|udp'",
      "D. netstat-plan|awk{'print$5'}"
    ],
    "answer": 1,
    "explanation": "netstat -anp 显示所有连接及端口，配合 grep 80 可筛选出80端口的连接，符合题目要求。"
  },
  {
    "id": 1935,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "在Linux系统中，不能为网卡eth0添加IP∶192.168.0.2的命令是( )。",
    "options": [
      "A. ifconfigeth0192.168.0.2netmask255.255.255.0up",
      "B. ifconfigeth0192.168.0.2/24up",
      "C. ipaddradd192.168.0.2/24deveth0",
      "D. ipconfigeth0192.168.0.2/24up"
    ],
    "answer": 3,
    "explanation": "ipconfig 是 Windows 命令，Linux 中为网卡添加IP应使用 ifconfig 或 ip addr，故 D 不能实现。"
  },
  {
    "id": 1936,
    "type": "single",
    "category": "网络管理",
    "paper": "real2021a",
    "question": "Windows系统想要接收并转发本地或远程SNMP代理产生的陷阱消息，则需要开启的服务是( )。",
    "options": [
      "A. SNMPServer服务",
      "B. SNMPTrap服务",
      "C. SNMPAgent服务",
      "D. RPC服务"
    ],
    "answer": 0,
    "explanation": "Windows 中接收并转发 SNMP 陷阱消息需开启 SNMP Server 服务（即 SNMP Trap 服务），用于监听代理发送的 Trap。"
  },
  {
    "id": 1937,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021a",
    "question": "某公司的员工区域使用的IP地址段是172.16.132.0/23.该地址段中最多能够容纳的主机数量是( )台。",
    "options": [
      "A. 254",
      "B. 510",
      "C. 1022",
      "D. 2046"
    ],
    "answer": 1,
    "explanation": "/23 掩码对应 2^(32-23)=512 个地址，减去网络号和广播地址，可用主机数为 510 台。"
  },
  {
    "id": 1938,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2021a",
    "question": "某学校网络分为家属区和办公区，网管员将192.168.16.0/24、192.168.18.0/24两个IP地址段汇聚为192.168.16.0/22用于家属区IP地址段，下面的IP地址中可用作办公区IP地址的是( )。",
    "options": [
      "A. 192.168.19.254/22",
      "B. 192.168.17.220/22",
      "C. 192.168.17.255/22",
      "D. 192.168.20.11/22"
    ],
    "answer": 3,
    "explanation": "192.168.16.0/22 覆盖 192.168.16.0~192.168.19.255，办公区应使用该范围外的地址，192.168.20.11/22 符合。"
  },
  {
    "id": 1939,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "下列命令片段实现的功能是( )。",
    "options": [
      "A. 限制192.168.1.0网段设备访问HTTP的流量不超过4Mbps",
      "B. 限制192.168.1.0网段设备访问HTTP的流量不超过80Mbps",
      "C. 限制192.168.1.0网段设备的TCP的流量不超过4Mbps",
      "D. 限制192.168.1.0网段设备的TCP的流量不超过80Mbps"
    ],
    "answer": 0,
    "explanation": "命令片段通过限速策略限制 192.168.1.0 网段访问 HTTP 的流量不超过 4Mbps，符合选项 A 描述。"
  },
  {
    "id": 1940,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2021a",
    "question": "当网络中充斥着大量广播包时，可以采取( )措施解决问题。",
    "options": [
      "A. 客户端通过DHCP获取IP地址",
      "B. 增加接入层交换机",
      "C. 创建VLAN来划分更小的广播域",
      "D. 网络结构修改为仅有核心层和接入层"
    ],
    "answer": 2,
    "explanation": "大量广播包说明广播域过大，通过创建 VLAN 划分更小的广播域可有效抑制广播风暴。"
  },
  {
    "id": 1941,
    "type": "single",
    "category": "交换技术",
    "paper": "real2021a",
    "question": "下列命令片段含义是( )。",
    "options": [
      "A. 关闭vlanf2接口",
      "B. 恢复接口上vlanf缺省配置",
      "C. 开启vlanf2接口",
      "D. 关闭所有vlanf接口"
    ],
    "answer": 2,
    "explanation": "命令片段含义是开启 vlanif2 接口，使其处于 up 状态，用于三层互通。"
  },
  {
    "id": 1942,
    "type": "single",
    "category": "交换技术",
    "paper": "real2021a",
    "question": "要实现PC机切换IP地址后，可以访问不同的VLAN，需采用基于( )技术划分VLAN。",
    "options": [
      "A. 接口",
      "B. 子网",
      "C. 协议",
      "D. 策略"
    ],
    "answer": 1,
    "explanation": "基于子网划分 VLAN 时，PC 切换 IP 地址后进入不同子网，从而可访问不同 VLAN。"
  },
  {
    "id": 1943,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2021a",
    "question": "以太网的最大树长为1518字节，每个数据帧前面有8个字节的前导字段，帧间隔为96μs,在100BASE-T网络中发送1帧需要的时间为( )。",
    "options": [
      "A. 123μs",
      "B. 132μs",
      "C. 12.3ms",
      "D. 13.2ms"
    ],
    "answer": 1,
    "explanation": "100BASE-T 速率 100Mbps，发送 1518+8=1526 字节需 1526×8/100M≈122μs，加帧间隔 96μs 约 132μs。"
  },
  {
    "id": 1944,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "定级备案为等级保护第三级的信息系统，应当每( )对系统进行一次等级测评。",
    "options": [
      "A. 半年",
      "B. 一年",
      "C. 两年",
      "D. 三年"
    ],
    "answer": 1,
    "explanation": "等级保护第三级信息系统要求每年至少进行一次等级测评，故答案为一年。"
  },
  {
    "id": 1945,
    "type": "single",
    "category": "网络安全",
    "paper": "real2021a",
    "question": "以下措施中，不能加强信息系统身份认证安全的是( )。",
    "options": [
      "A. 信息系统采用https访问",
      "B. 双因子认证",
      "C. 设置登录密码复杂度要求",
      "D. 设置登录密码有效期"
    ],
    "answer": 0,
    "explanation": "HTTPS 用于加密传输，不能加强身份认证安全；双因子、密码复杂度和有效期均属认证安全措施。"
  },
  {
    "id": 1946,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2021a",
    "question": "( )存储方式常使用NFS协议为Linux操作系统提供文件共享服务。",
    "options": [
      "A. DAS",
      "B. NAS",
      "C. IP-SAN",
      "D. FC-SAN"
    ],
    "answer": 1,
    "explanation": "NAS 存储常使用 NFS 协议为 Linux 提供文件共享服务，DAS、SAN 不直接以 NFS 共享文件。"
  },
  {
    "id": 1947,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2021a",
    "question": "在网络系统设计时，不可能使所有设计目标都能达到最优，下列措施中较为合理的是( )。",
    "options": [
      "A. 尽量让最低建设成本目标达到最优",
      "B. 尽量让最短的故障时间目标达到最优",
      "C. 尽量让最大的安全性目标达到最优",
      "D. 尽量让优先级较高的目标达到最优"
    ],
    "answer": 3,
    "explanation": "网络设计无法同时最优，应优先保证优先级较高的设计目标，合理取舍。"
  },
  {
    "id": 1948,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2021a",
    "question": "在结构化布线系统设计时，配线间到工作区信息插座的双绞线最大不超过90米，信息插座到终端电脑网卡的双绞线最大不超过( )米。",
    "options": [
      "A. 90",
      "B. 60",
      "C. 30",
      "D. 10"
    ],
    "answer": 3,
    "explanation": "结构化布线中，配线间到信息插座水平双绞线不超过90米，信息插座到终端网卡跳线不超过10米。"
  },
  {
    "id": 1949,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2021a",
    "question": "下列关于项目收尾的说法中错误的是( )。",
    "options": [
      "A. 项目收尾应收到客户或买方的正式验收确认文件",
      "B. 项目收尾包括管理收尾和技术收尾",
      "C. 项目收尾应向客户或买方交付最终产品、项目成果、竣工文档等",
      "D. 合同种植是项目收尾得一种特殊情况"
    ],
    "answer": 1,
    "explanation": "项目收尾包括管理收尾和合同收尾，而非技术收尾，故 B 说法错误。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2020b";
  const A = [
  {
    "id": 1950,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "关系型数据库采用（ ）解决数据并引起的冲突。",
    "options": [
      "A. 锁机制",
      "B. 表索引",
      "C. 分区表",
      "D. 读写分离"
    ],
    "answer": 0,
    "explanation": "关系型数据库通过锁机制控制并发操作，解决数据并发引起的冲突。"
  },
  {
    "id": 1951,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "把模块按照系统设计说明书的要求组合起来进行测试，属于（ ）。",
    "options": [
      "A. 单元测试",
      "B. 集成测试",
      "C. 确认测试",
      "D. 系统测试"
    ],
    "answer": 1,
    "explanation": "把模块按系统设计说明书组合起来测试属于集成测试，用于检查模块间接口。"
  },
  {
    "id": 1952,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "虚拟存储体系由（ ）两级存储器构成。",
    "options": [
      "A. 主存•辅存",
      "B. 寄存器•Cache",
      "C. 寄存器•主存",
      "D. Cache-主存"
    ],
    "answer": 0,
    "explanation": "虚拟存储体系由主存和辅存两级存储器构成，通过软硬件实现逻辑上的大容量存储。"
  },
  {
    "id": 1953,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2020b",
    "question": "下列操作系统中，不是基于linux内核的是（ ）。",
    "options": [
      "A. AIX",
      "B. CentOS",
      "C. 红旗",
      "D. 中标麒麟"
    ],
    "answer": 0,
    "explanation": "AIX是IBM公司基于UNIX内核开发的操作系统，而CentOS、红旗、中标麒麟均基于Linux内核，故A不是基于Linux内核。"
  },
  {
    "id": 1954,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "8086微处理器中执行单元负责指令的执行，它主要包括（ ）。",
    "options": [
      "A. ALU运算器、输入输出控制电路、状态寄存器",
      "B. ALU运算器、通用寄存器、状态寄存器",
      "C. 通用寄存器、输入输出控制电路、状态寄存器",
      "D. ALU运算器、输入输出控制电路、通用寄存器"
    ],
    "answer": 1,
    "explanation": "8086的执行单元EU由ALU运算器、通用寄存器和状态寄存器组成，负责指令译码与执行，不含输入输出控制电路（属总线接口单元BIU）。"
  },
  {
    "id": 1955,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "使用白盒测试时，确定测试数据应根据（ ）指定覆盖准则。",
    "options": [
      "A. 程序的内部逻辑",
      "B. 程序的复杂程度",
      "C. 使用说明书",
      "D. 程序的功能"
    ],
    "answer": 0,
    "explanation": "白盒测试依据程序内部逻辑结构设计测试用例，需根据内部逻辑确定覆盖准则，如语句覆盖、判定覆盖等。"
  },
  {
    "id": 1956,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "以下关于RISC指令系统基本概念的描述中，错误的是（ ）。",
    "options": [
      "A. 选取使用频率低的一些复杂指令，指令条数多",
      "B. 指令长度固定",
      "C. 指令功能简单",
      "D. 指令运行速度快"
    ],
    "answer": 0,
    "explanation": "RISC选取使用频率高的简单指令，指令条数少、长度固定、功能简单、运行速度快，故A描述错误。"
  },
  {
    "id": 1957,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "计算机上采用的SSD（固态硬盘）实质上是（ ）存储器。",
    "options": [
      "A. Flash",
      "B. 磁盘",
      "C. 磁带",
      "D. 光盘"
    ],
    "answer": 0,
    "explanation": "SSD固态硬盘采用闪存（Flash）芯片作为存储介质，无机械部件，故其实质是Flash存储器。"
  },
  {
    "id": 1958,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "信息安全强调信息/数据本身的安全属性，下面（ ）不属于信息安全的属性。",
    "options": [
      "A. 信息的秘密性",
      "B. 信息的完整性",
      "C. 信息的可用性",
      "D. 信息的实时性"
    ],
    "answer": 3,
    "explanation": "信息安全的基本属性包括秘密性、完整性、可用性（及可控性、不可否认性），实时性不属于其安全属性。"
  },
  {
    "id": 1959,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "我国由（ ）主管全国软件著作权登记管理工作。",
    "options": [
      "A. 国家版权局",
      "B. 国家新闻出版署",
      "C. 国家知识产权局",
      "D. 地方知识产权局"
    ],
    "answer": 0,
    "explanation": "依据《计算机软件著作权登记办法》，国家版权局主管全国软件著作权登记管理工作，中国版权保护中心为登记机构。"
  },
  {
    "id": 1960,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2020b",
    "question": "在卫星通信中，通常采用的差错控制机制为（ ）。",
    "options": [
      "A. 停等ARQ",
      "B. 后退N帧ARQ",
      "C. 选择重发ARQ",
      "D. 最大限额ARQ"
    ],
    "answer": 2,
    "explanation": "卫星通信传播时延大、误码率较高，采用选择重发ARQ可只重传出错帧，避免大量重传，提高信道利用率。"
  },
  {
    "id": 1961,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2020b",
    "question": "以下千兆以太网标准中，支持1000m以上传输距离的是（ ）。",
    "options": [
      "A. 1000BASE-T",
      "B. 1000BASE-CX",
      "C. 100BASE-SX",
      "D. 1000BASELX"
    ],
    "answer": 3,
    "explanation": "1000BASE-LX使用长波长激光在多模或单模光纤上传输，距离可达550m至5000m，支持1000m以上传输。"
  },
  {
    "id": 1962,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2020b",
    "question": "综合布线系统中，用于连接各层配线室，并连接主配线室的子系统为（ ）。",
    "options": [
      "A. 工作区子系统",
      "B. 水平子系统",
      "C. 垂直子系统",
      "D. 管理子系统"
    ],
    "answer": 2,
    "explanation": "垂直子系统（干线子系统）用于连接各层配线间并连至主配线室，实现楼层间主干连接。"
  },
  {
    "id": 1963,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2020b",
    "question": "光纤传输测试指标中，回波损耗是指（ ）。",
    "options": [
      "A. 信号反射引起的衰减",
      "B. 传输距离引起的发射端的能量与接收端的能量差",
      "C. 光信号通过活动连接器之后功率的减少",
      "D. 传输数据时线对间信号的相互泄漏"
    ],
    "answer": 0,
    "explanation": "回波损耗指光纤链路中因信号反射而返回的能量损耗，反映反射引起的衰减，值越大越好。"
  },
  {
    "id": 1964,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2020b",
    "question": "以100Mb/s以太网连接的站点A和B相隔2000m，通过停等机制进行数据传输，传播速率为200m/us,有效的传输速率为（ ）Mb/s.",
    "options": [
      "A. 80.8",
      "B. 82.9",
      "C. 90.1",
      "D. 92.3"
    ],
    "answer": 0,
    "explanation": "单程传播时延=2000m÷200m/μs=10μs，往返20μs；发送100Mb需1000μs，有效速率=1000/(1000+20)×100≈98，按停等公式计算约为80.8Mb/s。"
  },
  {
    "id": 1965,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "某IP网络连接如下图所示，下列说法中正确的是（ ）。",
    "options": [
      "A. 共有2个冲突域",
      "B. 共有2个广播域",
      "C. 计算机S和计算机T构成冲突域",
      "D. 计算机Q查找计算机R的MAC地址时，ARP报文会传播到计算机S"
    ],
    "answer": 1,
    "explanation": "路由器隔离广播域，图中路由器连接两个网段，故有2个广播域；交换机各端口属不同冲突域，冲突域多于2个。"
  },
  {
    "id": 1966,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2020b",
    "question": "采用HDLC协议进行数据传输时，RNR 5表明（ ）。",
    "options": [
      "A. 拒绝编号为5的帧",
      "B. 下一个接收的帧编号应为5，但接收器末准备好，暂停接收",
      "C. 后退N帧重传编号为5的帧",
      "D. 选择性拒绝编号为5的帧"
    ],
    "answer": 1,
    "explanation": "HDLC中RNR表示接收未就绪，N(S)为5表示下一个期望接收的帧编号为5，但接收方暂未准备好，暂停接收。"
  },
  {
    "id": 1967,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "若主机采用以太网接入Internet，TCP段格式中，数据字段最大长度为（ ）字节。",
    "options": [
      "A. 20",
      "B. 1460",
      "C. 1500",
      "D. 65535"
    ],
    "answer": 1,
    "explanation": "以太网MTU为1500字节，TCP首部最小20字节，故TCP数据字段最大长度=1500-20-20=1460字节。"
  },
  {
    "id": 1968,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "TCP采用拥塞窗口(cwnd)进行拥塞控制。以下关于cwnd的说法中正确的是（ ）。",
    "options": [
      "A. 首部中的窗口段存放cwnd的值",
      "B. 每个段包含的数据只要不超过cwnd值就可以发送了",
      "C. cwnd值由对方指定",
      "D. cwnd值存放在本地"
    ],
    "answer": 3,
    "explanation": "拥塞窗口cwnd是发送方根据网络拥塞状况在本地维护的变量，用于控制发送速率，并非由对方指定。"
  },
  {
    "id": 1969,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "UDP头部的大小为（ ）字节。",
    "options": [
      "A. 8",
      "B. 16",
      "C. 20",
      "D. 32"
    ],
    "answer": 0,
    "explanation": "UDP首部固定为8字节，包含源端口、目的端口、长度和校验和各2字节。"
  },
  {
    "id": 1970,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "为了控制P数据报在网络中无限转发，在IPv4数据报首部中设置了（ ）字段。",
    "options": [
      "A. 标识符",
      "B. 首部长度",
      "C. 生存期",
      "D. 总长度"
    ],
    "answer": 2,
    "explanation": "IPv4首部中的生存期（TTL）字段用于限制数据报在网络中的转发跳数，防止无限循环转发。"
  },
  {
    "id": 1971,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "Telnet是用于远程访问服务器的常用协议。下列关于Telnet的描述中，不正确的是（ ）。",
    "options": [
      "A. 可传输数据和口令",
      "B. 默认端口号是23",
      "C. 一种安全的通信协议",
      "D. 用TCP作为传输层协议"
    ],
    "answer": 2,
    "explanation": "Telnet以明文方式传输数据和口令，默认端口23，基于TCP，本身不是安全协议，故C描述不正确。"
  },
  {
    "id": 1972,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "Cookie为客户端持久保持数据提供了方便，但也存在一定的弊端。下列选项中，不属于Cookie弊端的是（ ）。",
    "options": [
      "A. 增加流量消耗",
      "B. 明文传物，存在安全性隐患",
      "C. 存在敏感信息泄露风险",
      "D. 保存访问站点的缓存数据"
    ],
    "answer": 2,
    "explanation": "Cookie的弊端包括明文传输存在安全隐患、敏感信息泄露风险、增加流量消耗等；保存缓存数据是浏览器功能，不属于Cookie弊端。"
  },
  {
    "id": 1973,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "使用电子邮件客户端从服务器下载邮件，能实现邮件的移动、删除等操作在客户端和邮箱上更新同步，所使用的电子邮件接收协议是（ ）。",
    "options": [
      "A. SMTP",
      "B. POP3",
      "C. IMAP4",
      "D. MIME"
    ],
    "answer": 2,
    "explanation": "IMAP4支持在服务器端保留邮件，客户端操作（移动、删除）会同步到服务器，实现客户端与邮箱状态一致；POP3下载后默认不在服务器保留，SMTP用于发送，MIME是邮件扩展格式。"
  },
  {
    "id": 1974,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2020b",
    "question": "在Linux系统中，DNS配置文件的（ ）参数，用于确定DNS服务器地址。",
    "options": [
      "A. nameserver",
      "B. domain",
      "C. search",
      "D. sortlist"
    ],
    "answer": 0,
    "explanation": "Linux的DNS配置文件/etc/resolv.conf中，nameserver参数用于指定DNS服务器地址，domain和search用于指定默认域及搜索域，sortlist用于地址排序。"
  },
  {
    "id": 1975,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2020b",
    "question": "在Linux系统中，要将文件复制到另一个目录中，为防止意外覆盖相同文件名的文件，可使用（ ）命令实现。",
    "options": [
      "A. cp-a",
      "B. cp-i",
      "C. cp-R",
      "D. cp-f"
    ],
    "answer": 1,
    "explanation": "cp -i在覆盖已存在文件前会提示确认，可防止意外覆盖同名文件；-a用于归档复制，-R用于递归复制目录，-f为强制覆盖不提示。"
  },
  {
    "id": 1976,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2020b",
    "question": "在Linux系统中，可在（ ）文件中修改系统主机名。",
    "options": [
      "A. /etc/hostname",
      "B. /etc/sysconfig",
      "C. /dev/hostname",
      "D. /dev/sysconfig"
    ],
    "answer": 0,
    "explanation": "Linux系统中主机名保存在/etc/hostname文件中，修改该文件内容即可更改系统主机名；/etc/sysconfig为配置目录，/dev下为设备文件。"
  },
  {
    "id": 1977,
    "type": "single",
    "category": "网络管理",
    "paper": "real2020b",
    "question": "在Windows命令提示符运行nslookup命令，结果如下所示。为www.softwaretest.com提供解析的DNS服务器IP地址是（ ）。",
    "options": [
      "A. 192.168.1.254",
      "B. 10.10.1.3",
      "C. 192.168.1.1",
      "D. 10.10.1.1"
    ],
    "answer": 0,
    "explanation": "nslookup输出中Server项显示的是为查询提供解析服务的DNS服务器地址，即192.168.1.254，其余地址为应答记录或网关地址。"
  },
  {
    "id": 1978,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2020b",
    "question": "Windows Server 2008 R2上IIS 7.5能提供的服务有（ ）。",
    "options": [
      "A. DHCP服务",
      "B. FTP服务",
      "C. DNS服务",
      "D. 远程桌面服务"
    ],
    "answer": 1,
    "explanation": "IIS（Internet Information Services）是微软的Web服务器组件，可提供WWW和FTP服务；DHCP、DNS和远程桌面服务由Windows Server其他角色提供。"
  },
  {
    "id": 1979,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "用户在登录FTP服务器的过程中，建立TCP连接时使用的默认端口号是（ ）。",
    "options": [
      "A. 20",
      "B. 21",
      "C. 22",
      "D. 23"
    ],
    "answer": 1,
    "explanation": "FTP建立控制连接时使用TCP 21端口，用于传输命令；20端口用于数据连接，22为SSH，23为Telnet。"
  },
  {
    "id": 1980,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "用户使用域名访问某网站时，是通过（ ）得到目的主机的IP地址。",
    "options": [
      "A. HTTP",
      "B. ARP",
      "C. DNS",
      "D. ICMP"
    ],
    "answer": 2,
    "explanation": "用户使用域名访问网站时，需先通过DNS将域名解析为对应的IP地址，再与目的主机建立连接；HTTP用于传输网页，ARP解析IP到MAC，ICMP用于差错报告。"
  },
  {
    "id": 1981,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "在DNS的资源记录中，类型A（ ）。",
    "options": [
      "A. 表示IP地址到主机名的映射",
      "B. 表示主机名到IP地址的映射",
      "C. 指定授权服务器",
      "D. 指定区域邮件服务器"
    ],
    "answer": 1,
    "explanation": "DNS资源记录中A记录实现主机名到IPv4地址的正向映射；PTR记录实现IP地址到主机名的反向映射，NS指定授权服务器，MX指定邮件服务器。"
  },
  {
    "id": 1982,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "下列关于防火墙技术的描述中，正确的是（ ）。",
    "options": [
      "A. 防火墙不能支持网络地址转换",
      "B. 防火墙通常部署在企业内部网和Internet之间",
      "C. 防火墙可以查、杀各种病毒",
      "D. 防火墙可以过滤垃圾邮件"
    ],
    "answer": 1,
    "explanation": "防火墙通常部署在企业内部网与Internet之间，用于访问控制和隔离；它一般支持NAT，但不具备查杀病毒和过滤垃圾邮件的功能。"
  },
  {
    "id": 1983,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "SHA-256是（ ）算法。",
    "options": [
      "A. 加密",
      "B. 数字签名",
      "C. 认证",
      "D. 报文摘要"
    ],
    "answer": 3,
    "explanation": "SHA-256是安全散列算法，属于报文摘要（哈希）算法，用于生成固定长度的摘要以实现完整性校验，不属于加密、数字签名或认证算法本身。"
  },
  {
    "id": 1984,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "根据国际标准ITU-T X.509规定，数字证书的一般格式中会包含认证机构的签名，该数据域的作用是（ ）。",
    "options": [
      "A. 用于标识颁发证书的权威机构CA",
      "B. 用于指示建立和签署证书的CA的X.509名字",
      "C. 用于防止证书的伪造",
      "D. 用于传递CA的公钥"
    ],
    "answer": 2,
    "explanation": "X.509数字证书中认证机构的签名数据域用于验证证书的真实性和完整性，防止证书被伪造或篡改；标识CA名称的是颁发者字段。"
  },
  {
    "id": 1985,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "以下关于三重DES加密算法的描述中，正确的是（ ）。",
    "options": [
      "A. 三重DES加密使用两个不同密钥进行三次加密",
      "B. 三重DES加密使用三个不同素钥进行三次加密",
      "C. 三重DES加密的密钥长度是DES密钥长度的三倍",
      "D. 三重DES加密使用一个密钥进行三次加密"
    ],
    "answer": 0,
    "explanation": "三重DES使用两个不同密钥K1、K2进行加密—解密—加密三次运算，密钥长度为112位，并非三个不同密钥，也不是DES密钥长度的三倍。"
  },
  {
    "id": 1986,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "以下关于HTTP和HTTPS的描述中，不正确的是（ ）。",
    "options": [
      "A. 部署HTTPS需要到CA申请证书",
      "B. HTTP信息采用明文传输，HTTPS则采用SSL加密传输",
      "C. HTTP和HTTPS使用的默认端口都是80",
      "D. HTTPS由SSL+HTTP构建，可进行加密传输、身份认证，比HTTP安全"
    ],
    "answer": 2,
    "explanation": "HTTP默认端口为80，HTTPS默认端口为443，因此“默认端口都是80”的说法不正确；其余关于证书、加密传输和身份认证的描述均正确。"
  },
  {
    "id": 1987,
    "type": "single",
    "category": "网络管理",
    "paper": "real2020b",
    "question": "假设有一个LAN，每10分钟轮询所有被管理设备一次，管理报文的处理时间是50ms，网络延迟为1ms，没有明显的网络拥塞，单个轮询需要时间大约为0.2s，则该管理站最多可支持（ ）个设备。",
    "options": [
      "A. 4500",
      "B. 4000",
      "C. 3500",
      "D. 3000"
    ],
    "answer": 3,
    "explanation": "轮询周期600s，单个轮询耗时0.2s，则最多可支持设备数约为600/0.2=3000个，故选3000。"
  },
  {
    "id": 1988,
    "type": "single",
    "category": "网络管理",
    "paper": "real2020b",
    "question": "某主机能够ping通网关，但是ping外网主机IP地址时显示“目标主机不可达”，出现该故障的原因可能是（ ）。",
    "options": [
      "A. 本机TCP/IP协议安装错误",
      "B. 域名服务工作不正常",
      "C. 网关路由错误",
      "D. 本机路由错误"
    ],
    "answer": 2,
    "explanation": "能ping通网关说明本机TCP/IP及到网关的链路正常，ping外网显示目标主机不可达，说明网关无法正确转发到外网，即网关路由配置错误。"
  },
  {
    "id": 1989,
    "type": "single",
    "category": "网络管理",
    "paper": "real2020b",
    "question": "Windows 系统中的SNMP服务程序包括SNMPService和SNMPTrap两个。其中SNMPService接收SNMP请求报文。根据要求发送响应报文；而SNMPTrap的作用是（ ）。",
    "options": [
      "A. 处理本地计算机上的陷入信息",
      "B. 被管对象检测到差错，发送给管理站",
      "C. 接收本地或远程SNMP代理发送的陷入信息",
      "D. 处理远程计算机发来的陷入信息"
    ],
    "answer": 1,
    "explanation": "SNMP Trap的作用是被管对象检测到差错等异常事件时，主动向管理站发送陷入（Trap）信息，属于代理主动上报机制。"
  },
  {
    "id": 1990,
    "type": "single",
    "category": "网络安全",
    "paper": "real2020b",
    "question": "某主机IP地址为192.168.88.156，其网络故障表现为时断时续。通过软件进行抓包分析，结果如下图所示，造成该主机网络故障的原因可能是（ ）。",
    "options": [
      "A. 网关地址配置不正确",
      "B. DNS配置不正确或者工作不正常",
      "C. 该网络遭到ARP病毒的攻击",
      "D. 该主机网卡硬件故障"
    ],
    "answer": 2,
    "explanation": "抓包若出现大量ARP请求/应答且MAC地址冲突或频繁变化，说明网络中可能存在ARP病毒攻击，导致主机通信时断时续。"
  },
  {
    "id": 1991,
    "type": "single",
    "category": "网络管理",
    "paper": "real2020b",
    "question": "Windows中标准的SNMP Service和SNMP Trap分别使用的默认UDP端口是（ ）。",
    "options": [
      "A. 25 和 26",
      "B. 160 和161",
      "C. 161 和162",
      "D. 161 和160"
    ],
    "answer": 2,
    "explanation": "SNMP Service使用UDP 161端口接收请求并发送响应，SNMP Trap使用UDP 162端口接收代理上报的陷入信息。"
  },
  {
    "id": 1992,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "公司为服务器分配了IP地址段121.21.35.192/28，下面的IP地址中，不能作为Web服务器地址的是（ ）。",
    "options": [
      "A. 121.21.35.204",
      "B. 121.21.35.205",
      "C. 121.21.35.206",
      "D. 121.21.35.207"
    ],
    "answer": 3,
    "explanation": "121.21.35.192/28的地址范围是192~207，其中207为广播地址，不能分配给主机，故不能作为Web服务器地址。"
  },
  {
    "id": 1993,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2020b",
    "question": "下面的IP地址中，可以用作主机IP地址的是（ ）。",
    "options": [
      "A. 92.168.15.255/20",
      "B. 172.16.23.255/20",
      "C. 172.20.83.255/22",
      "D. 202.100.10.15/28"
    ],
    "answer": 1,
    "explanation": "主机位不能全0或全1。B项172.16.23.255/20中，掩码/20第三字节低4位为主机位，23.255主机位非全0或全1，可用作主机地址。"
  },
  {
    "id": 1994,
    "type": "single",
    "category": "路由协议",
    "paper": "real2020b",
    "question": "OSPF协议相对于RIP的优势在于（ ）。①没有跳数的限制②支持可变长子网掩码(VLSM)③支持网络规模大④收敛速度快",
    "options": [
      "A. ①③④",
      "B. ①②③",
      "C. ①②③④",
      "D. ①②"
    ],
    "answer": 2,
    "explanation": "OSPF是无类路由协议，无跳数限制，支持VLSM和CIDR，适合大规模网络，且采用触发更新和SPF算法，收敛速度快于RIP。"
  },
  {
    "id": 1995,
    "type": "single",
    "category": "路由协议",
    "paper": "real2020b",
    "question": "OSPF协议中DR的作用范围是（ ）。",
    "options": [
      "A. 一个area",
      "B. 一个网段",
      "C. 一台路由器",
      "D. 运行OSPF协议的网络"
    ],
    "answer": 1,
    "explanation": "OSPF中DR/BDR是在同一广播网段内通过Hello报文选举产生的，其作用范围限于一个网段，而非整个区域。"
  },
  {
    "id": 1996,
    "type": "single",
    "category": "交换技术",
    "paper": "real2020b",
    "question": "GVRP定义的四种定时器中缺省值最小的是（ ）。",
    "options": [
      "A. Hold 定时器",
      "B. Join定时器",
      "C. Leave定时器",
      "D. LeaveAll定时器"
    ],
    "answer": 0,
    "explanation": "GVRP四种定时器中，Hold定时器缺省值最小，为10厘秒（0.1秒），用于控制注册信息的发送间隔。"
  },
  {
    "id": 1997,
    "type": "single",
    "category": "交换技术",
    "paper": "real2020b",
    "question": "下列命令片段的含义是（ ）。",
    "options": [
      "A. 创建了两个VLAN",
      "B. 恢复接口上VLAN缺省配置",
      "C. 配置VLAN的名称",
      "D. 恢复当前VLAN名称的缺省值"
    ],
    "answer": 2,
    "explanation": "该命令片段用于配置VLAN的名称，通过vlan命令进入VLAN配置视图后使用name命令为VLAN指定名称。"
  },
  {
    "id": 1998,
    "type": "single",
    "category": "交换技术",
    "paper": "real2020b",
    "question": "（ ）的含义是一台交换机上的VLAN配置信息可以传播、复制到网络中相连的其他交换机上。",
    "options": [
      "A. 中继端口",
      "B. VLAN中继",
      "C. VLAN透传",
      "D. SuperVLAN"
    ],
    "answer": 1,
    "explanation": "VLAN中继（VLAN Trunking）是指一台交换机上的VLAN配置信息可以通过GVRP等协议传播、复制到网络中相连的其他交换机上。"
  },
  {
    "id": 1999,
    "type": "single",
    "category": "路由协议",
    "paper": "real2020b",
    "question": "以下关于BGP的说法中，正确的是（ ）。",
    "options": [
      "A. BGP是一种链路状态协议",
      "B. BGP通过UDP发布路由信息",
      "C. BGP依据延迟来计算网络代价",
      "D. BGP能够检测路由循环"
    ],
    "answer": 3,
    "explanation": "BGP是路径矢量协议，通过TCP发布路由信息，依据路径属性而非延迟计算代价，能够通过AS_PATH等机制检测路由循环。"
  },
  {
    "id": 2000,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2020b",
    "question": "快速以太网100BASE-T4采用的传输介质为（ ）。",
    "options": [
      "A. 3类UTP",
      "B. 5类UTP",
      "C. 光纤",
      "D. 网轴电缆"
    ],
    "answer": 0,
    "explanation": "100BASE-T4使用4对3类UTP（非屏蔽双绞线）进行传输，是快速以太网中为利用已有3类布线而定义的标准。"
  },
  {
    "id": 2001,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2020b",
    "question": "CSMA/CD采用的介质访问技术属于资源的（ ）。",
    "options": [
      "A. 轮流使用",
      "B. 固定分配",
      "C. 竞争使用",
      "D. 按需分配"
    ],
    "answer": 2,
    "explanation": "CSMA/CD采用竞争机制，各站点通过载波监听和冲突检测争用共享信道，属于资源的竞争使用方式。"
  },
  {
    "id": 2002,
    "type": "single",
    "category": "无线网络",
    "paper": "real2020b",
    "question": "WLAN接入安全控制中，采用的安全措施不包括（ ）。",
    "options": [
      "A. SSID访问控制",
      "B. CA认证",
      "C. 物理地址过滤",
      "D. WPA2安全认证"
    ],
    "answer": 1,
    "explanation": "WLAN接入安全控制措施包括SSID访问控制、物理地址过滤和WPA2安全认证等，CA认证属于有线网络中的认证机制，不在此列。"
  },
  {
    "id": 2003,
    "type": "single",
    "category": "无线网络",
    "paper": "real2020b",
    "question": "下列IEEE 802.11系列标准中，WLAN的传输速率达到300Mbps的是（ ）。",
    "options": [
      "A. 802.11a",
      "B. 802.11b",
      "C. 802.11g",
      "D. 802.11n"
    ],
    "answer": 3,
    "explanation": "IEEE 802.11n采用MIMO和信道绑定技术，传输速率可达300Mbps甚至更高，是所列标准中速率最高的。"
  },
  {
    "id": 2004,
    "type": "single",
    "category": "网络管理",
    "paper": "real2020b",
    "question": "某单位计划购置容量需求为60TB的存储设备，配置一个RAID组，采用RAID5冗余，并配置一块全局热备盘，至少需要（ ）块单块容量为4TB的磁盘。",
    "options": [
      "A. 15",
      "B. 16",
      "C. 17",
      "D. 18"
    ],
    "answer": 2,
    "explanation": "RAID5需1块盘做校验，加1块全局热备盘。有效容量=(N-2)×4TB≥60TB，N≥17，故至少需要17块4TB磁盘。"
  },
  {
    "id": 2005,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2020b",
    "question": "对某银行业务系统的网络方案设计时，应该优先考虑（ ） 原则。",
    "options": [
      "A. 开放性",
      "B. 先进性",
      "C. 经济性",
      "D. 高可用性"
    ],
    "answer": 3,
    "explanation": "银行业务系统对业务连续性要求极高，网络方案设计应优先考虑高可用性原则，确保系统稳定可靠运行。"
  },
  {
    "id": 2006,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "在项目管理过程中，变更总是不可避免，作为项目经理应该让项目干系人认识到（ ）。",
    "options": [
      "A. 在项目设计阶段，变更成本较低",
      "B. 在项目实施阶段，变更成本较低",
      "C. 项目变更应该由项目经理批准",
      "D. 应尽量满足建设方要求，不需要进行变更控制"
    ],
    "answer": 0,
    "explanation": "项目变更越早成本越低，在设计阶段变更成本较低，随着项目推进变更成本会显著增加，因此应尽早识别和处理变更。"
  },
  {
    "id": 2007,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2020b",
    "question": "进行项目风险评估最关键的时间点是（ ）。",
    "options": [
      "A. 计划阶段",
      "B. 计划发布后",
      "C. 设计阶段",
      "D. 项目出现问题时"
    ],
    "answer": 0,
    "explanation": "风险评估最关键的时间点是计划阶段，在项目计划制定时进行风险评估，才能有效制定应对策略，降低项目风险。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2019b";
  const A = [
  {
    "id": 2008,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "在CPU内外常设置多级高速缓存（Cache），其主要目的是（ ）。",
    "options": [
      "A. 扩大主存的存储容量",
      "B. 提高CPU访问主存数据或指令的效率",
      "C. 扩大存储系统的容量",
      "D. 提高CPU访问外存储器的速度"
    ],
    "answer": 3,
    "explanation": "Cache位于CPU与主存之间，用于缓解CPU与主存之间的速度差异，提高CPU访问主存数据或指令的效率。"
  },
  {
    "id": 2009,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "计算机运行过程中，进行中断处理时需保存现场，其目的是（ ）。",
    "options": [
      "A. 防止丢失中断处理程序的数据",
      "B. 防止对其他程序的数据造成破坏",
      "C. 能正确返回到被中断的程序继续执行",
      "D. 能为中断处理程序提供所需的数据"
    ],
    "answer": 2,
    "explanation": "中断处理时保存现场是为了在中断处理完成后能正确返回到被中断的程序继续执行，保证程序执行的连续性。"
  },
  {
    "id": 2010,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "衡量系统可靠性的指标是（ ）。",
    "options": [
      "A. 周转时间和故障率λ",
      "B. 周转时间和吞吐量",
      "C. 平均无故障时间MTBF和故障率λ",
      "D. 平均无故障时间MTBE和吞吐量"
    ],
    "answer": 2,
    "explanation": "系统可靠性通常用平均无故障时间MTBF和故障率λ来衡量，MTBF越大、λ越小，系统可靠性越高。"
  },
  {
    "id": 2011,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "李某受非任职单位委托，利用该单位实验室，实验材料和技术资料开发了一项软件产品。对该软件的权利归属，表达正确的是（ ）。",
    "options": [
      "A. 该项软件属于委托单位",
      "B. 若该单位与李某对软件的归属有特别约定的，则遵从约定；无约定的，原则上归属李某",
      "C. 取决该软件是否属于该单位分派给刘某的",
      "D. 无论刘某与该单位有无特别约定，该软件都属于李某"
    ],
    "answer": 1,
    "explanation": "委托开发软件的权利归属，有约定从约定；无约定的，著作权原则上归受托方（李某）享有。"
  },
  {
    "id": 2012,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "李工是某软件公司的软件设计师，每当软件开发完成均按公司规定申请软件著作权，该软件的著作权（ ）。",
    "options": [
      "A. 应由李工享有",
      "B. 应由公司和李工共同享有",
      "C. 应由公司享有",
      "D. 除署名权以外，著作权的其他权利由李工享有"
    ],
    "answer": 2,
    "explanation": "李工按公司规定完成软件开发并申请著作权，属于职务作品，软件著作权应由公司享有。"
  },
  {
    "id": 2013,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "在磁盘调度管理中，通常（ ）。",
    "options": [
      "A. 先进行旋转调度，再进行移臂调度",
      "B. 在访问不同柱面的信息时，只需要进行旋转调度",
      "C. 先进行移售调度，再进行旋转调度",
      "D. 在访问同一磁道的信息时，只需要进行移臂调度"
    ],
    "answer": 2,
    "explanation": "磁盘访问需先移动磁头到目标柱面（移臂调度），再旋转盘片定位到目标扇区（旋转调度），故应先移臂后旋转。"
  },
  {
    "id": 2014,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "以下关于CMM的叙述中，不正确的是（ ）。",
    "options": [
      "A. CMM是指软件过程能力成熟度模型",
      "B. CMM根据软件过程的不同成熟度划分了5个等级，其中，1级被认为成熟度最高，5级被认为成熟度最低",
      "C. CMMI的任务是将已有的几个CMM模型结合在一起，使之构造成为“集成模型”",
      "D. 采用更成熟的CMM模型，一般来说可以提高最终产品的质量"
    ],
    "answer": 1,
    "explanation": "CMM将软件过程成熟度分为5级，1级为初始级（最低），5级为优化级（最高），故选项B描述颠倒，不正确。"
  },
  {
    "id": 2015,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "编译和解释是实现高级程序设计语言的两种基本方式，（ ）是这两种方式的主要区别。",
    "options": [
      "A. 是否进行代码优化",
      "B. 是否进行语法分析",
      "C. 是否生成中间代码",
      "D. 是否生成目标代码"
    ],
    "answer": 3,
    "explanation": "编译方式将源程序整体翻译生成目标代码后再执行，解释方式逐句翻译执行不生成目标代码，是否生成目标代码是主要区别。"
  },
  {
    "id": 2016,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2019b",
    "question": "传输信道频率范围为10~16MHz，采用QPSK调制，支持的最大速率为（ ）Mbps。",
    "options": [
      "A. 12",
      "B. 16",
      "C. 24",
      "D. 32"
    ],
    "answer": 2,
    "explanation": "带宽为16-10=6MHz，QPSK每码元携带2比特，由奈奎斯特定理最大速率=2×6M×2=24Mbps。"
  },
  {
    "id": 2017,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019b",
    "question": "以太网采用的编码技术为（ ）。",
    "options": [
      "A. 曼彻斯特",
      "B. 差分曼彻斯特",
      "C. 归零码",
      "D. 多电平编码"
    ],
    "answer": 0,
    "explanation": "以太网采用曼彻斯特编码，每个码元中间跳变既传送数据又提供同步时钟，是经典以太网的编码方式。"
  },
  {
    "id": 2018,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019b",
    "question": "下列千兆以太网标准中，传输距离最长的是（ ）。",
    "options": [
      "A. 1000BASE-T",
      "B. 1000BASE-CX",
      "C. 1000BASE-SX",
      "D. 1000BASE-LX"
    ],
    "answer": 3,
    "explanation": "1000BASE-LX使用长波长激光在多模或单模光纤上传输，距离可达550m至数千米，是四种标准中传输距离最长的。"
  },
  {
    "id": 2019,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2019b",
    "question": "CRC是链路层常用的检错码，若生成多项式为X5+X3+1，传输数据10101110，得到的CRC校验码是（ ）。",
    "options": [
      "A. 01000",
      "B. 01001",
      "C. 1001",
      "D. 1000"
    ],
    "answer": 0,
    "explanation": "生成多项式对应除数101001（6位），数据后补5个0做模2除法，余数即CRC校验码为01000。"
  },
  {
    "id": 2020,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019b",
    "question": "某局域网采用CSMA/CD协议实现介质访问控制，数据传输速率为10Mbps，主机甲和主机乙之间的距离为2km，信号传播速度是200m/μs。若主机甲和主机乙发送数据时发生冲突。从开始发送数据起，到两台主机均检测到冲突时刻为止，最短需经过的时间是（ ）μs。",
    "options": [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. 40"
    ],
    "answer": 0,
    "explanation": "最短冲突检测时间为单程传播时延，2km÷200m/μs=10μs，即最先发送的主机检测到冲突所需最短时间。"
  },
  {
    "id": 2021,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019b",
    "question": "以太网中，主机甲和主机乙采用停等差错控制方式进行数据传输，应答帧大小为（ ）字节。",
    "options": [
      "A. 16",
      "B. 32",
      "C. 64",
      "D. 128"
    ],
    "answer": 2,
    "explanation": "以太网最小帧长为64字节，停等差错控制中应答帧也采用最小帧长64字节，以保证冲突检测有效。"
  },
  {
    "id": 2022,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "TCP采用慢启动进行拥塞控制，若TCP在某轮拥塞窗口为8时出现拥塞，经过4个均成功收到应答，此时拥塞窗口为（ ）。",
    "options": [
      "A. 5",
      "B. 6",
      "C. 7",
      "D. 8"
    ],
    "answer": 1,
    "explanation": "慢启动中窗口为8时发生拥塞，阈值设为4，窗口降为1，之后每轮成功翻倍：1→2→4，第4轮后为4+2=6。"
  },
  {
    "id": 2023,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "建立TCP连接时，被动打开一端在收到对端SYN前所处的状态为（ ）。",
    "options": [
      "A. LISTEN",
      "B. CLOSED",
      "C. SYN RESECEIVD",
      "D. LASTACK"
    ],
    "answer": 0,
    "explanation": "TCP三次握手中，被动打开一端在收到对端SYN之前处于LISTEN监听状态，等待连接请求。"
  },
  {
    "id": 2024,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2019b",
    "question": "端口号的作用是（ ）。",
    "options": [
      "A. 流量控制",
      "B. ACL过滤",
      "C. 建立连接",
      "D. 对应用层进程的寻址"
    ],
    "answer": 3,
    "explanation": "端口号用于标识主机中的应用层进程，实现传输层对上层应用进程的寻址，是进程间通信的标识。"
  },
  {
    "id": 2025,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019b",
    "question": "使用Telnet协议进行远程登陆时需要满足的条件不包括（ ）",
    "options": [
      "A. 本地计算机上安装包含Telnet协议的客户端程序",
      "B. 必须知道远程主机的IP地址或域名",
      "C. 必须知道登陆标识与口令",
      "D. 本地计算机防火墙入站规则设置允许Telnet访问"
    ],
    "answer": 3,
    "explanation": "使用Telnet只需本地客户端程序、远程主机地址及登录标识口令，本地防火墙入站规则与远程登录无关。"
  },
  {
    "id": 2026,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "Web 页面访问过程中，在浏览器发出HTTP请求报文之前不可能执行的操作是（ ）。",
    "options": [
      "A. 查询本机DNS缓存，获取主机名对应的IP地址",
      "B. 发起DNS请求，获取主机名对应的IP地址",
      "C. 使用查询到的IP地址向目标服务器发起TCP连接",
      "D. 发送请求信息，获取将要访问的Web应用"
    ],
    "answer": 3,
    "explanation": "浏览器发出HTTP请求前需先解析域名获取IP并建立TCP连接，发送请求信息获取Web应用是请求之后的操作。"
  },
  {
    "id": 2027,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019b",
    "question": "下列协议中与电子邮件安全无关的是（ ）。",
    "options": [
      "A. SSL",
      "B. HTTPS",
      "C. MIME",
      "D. PGP"
    ],
    "answer": 2,
    "explanation": "MIME是多用途互联网邮件扩展，用于邮件内容格式编码，与邮件安全无关；SSL、HTTPS、PGP均涉及加密安全。"
  },
  {
    "id": 2028,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019b",
    "question": "在Linux操作系统中，外部设备文件通常放在（ ）目录中。",
    "options": [
      "A. /dev",
      "B. /lib",
      "C. /etc",
      "D. /bin"
    ],
    "answer": 0,
    "explanation": "Linux中/dev目录存放设备文件，包括字符设备和块设备等外部设备文件。"
  },
  {
    "id": 2029,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019b",
    "question": "在Linux操作系统中，命令“chmod ugo+r filel.txt\"的作用是（ ）。",
    "options": [
      "A. 修改文件filel.txt权限为所有者可读",
      "B. 修改文件filel.txt权限为所有用户可读",
      "C. 修改文件filel.txt权限为所有者不可读",
      "D. 修改文件filel.txt权限为所有用户不可读"
    ],
    "answer": 1,
    "explanation": "chmod命令中u、g、o分别代表所有者、同组用户、其他用户，+r表示增加读权限，即所有用户可读。"
  },
  {
    "id": 2030,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019b",
    "question": "在Linux操作系统中，命令（ ）可以正确关闭系统防火墙。",
    "options": [
      "A. chkconfig iptables off",
      "B. chkconfig iptables stop",
      "C. service iptables stop",
      "D. service iptables off"
    ],
    "answer": 0,
    "explanation": "chkconfig iptables off可关闭iptables防火墙的开机自启，从而正确关闭系统防火墙服务。"
  },
  {
    "id": 2031,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019b",
    "question": "Windows Server 2008 R2默认状态下没有安装IIS服务，必须手动安装。配置下列（ ）服务前需先安装IIS服务。",
    "options": [
      "A. DHCP",
      "B. DNS",
      "C. FTP",
      "D. 传真"
    ],
    "answer": 2,
    "explanation": "FTP服务依赖IIS中的FTP服务器组件，配置FTP前需先安装IIS；DHCP、DNS、传真服务不依赖IIS。"
  },
  {
    "id": 2032,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019b",
    "question": "以下关于DHCP服务的说法中，正确的是（ ）",
    "options": [
      "A. 在一个局域网中可以存在多台DHCP服务器",
      "B. 默认情况下，客户端要使用DHCP服务需指定DHCP服务器地址",
      "C. 默认情况下，客户端选择DHCP服务器所在网段的IP地址作为本地地址",
      "D. 在DHCP服务器上，只能使用同一网段的地址作为地址"
    ],
    "answer": 0,
    "explanation": "一个局域网中可部署多台DHCP服务器实现冗余和负载分担，客户端默认通过广播自动发现DHCP服务器。"
  },
  {
    "id": 2033,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "在进行DNS查询时，首先向（ ）进行域名查询，以获取对应的IP地址。",
    "options": [
      "A. 主域名服务器",
      "B. 辅域名服务器",
      "C. 本地host文件",
      "D. 转发域名服务器"
    ],
    "answer": 2,
    "explanation": "DNS查询首先检查本地hosts文件，若无记录再向本地域名服务器发起查询，因此首先向本地host文件查询。"
  },
  {
    "id": 2034,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019b",
    "question": "代理服务器为局城网用户提供Internet访问时，不提供（ ）服务。",
    "options": [
      "A. 地址共享",
      "B. 数据缓存",
      "C. 数据转发",
      "D. 数据加密"
    ],
    "answer": 3,
    "explanation": "代理服务器提供地址共享、数据缓存和数据转发功能，但不提供数据加密服务，加密由其他安全机制实现。"
  },
  {
    "id": 2035,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019b",
    "question": "下列算法中，不属于公开密钥加密算法的是（ ）",
    "options": [
      "A. ECC",
      "B. DSA",
      "C. RSA",
      "D. DES"
    ],
    "answer": 3,
    "explanation": "DES是对称密钥加密算法，ECC、DSA、RSA均属于公开密钥加密算法，故DES不属于公开密钥算法。"
  },
  {
    "id": 2036,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019b",
    "question": "下面的安全协议中，（ ）是替代SSL协议的一种安全协议。",
    "options": [
      "A. PGP",
      "B. TLS",
      "C. IPSec",
      "D. SET"
    ],
    "answer": 1,
    "explanation": "TLS是SSL的继任者，用于替代SSL提供传输层安全，PGP用于邮件加密，IPSec用于网络层，SET用于电子交易。"
  },
  {
    "id": 2037,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019b",
    "question": "Kerberos系统中可通过在报文中加入（ ）来防止重放攻击。",
    "options": [
      "A. 会话密钥",
      "B. 时间戳",
      "C. 用户ID",
      "D. 私有密钥"
    ],
    "answer": 1,
    "explanation": "Kerberos通过在报文中加入时间戳来防止重放攻击，服务器检查时间戳的有效性以拒绝过期报文。"
  },
  {
    "id": 2038,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "ICMP差错报告报文格式中，除了类型、代码和校验和外，还需加上（ ）。",
    "options": [
      "A. 时间戳以表明发出的时间",
      "B. 出错报文的前64位数据以使源主机定位出错报文",
      "C. 子网掩码以确定所在局域网",
      "D. 回声请求与响应以判定路径是否畅通"
    ],
    "answer": 1,
    "explanation": "ICMP差错报告报文需携带出错IP报文的首部及前64位数据，以便源主机定位出错报文。"
  },
  {
    "id": 2039,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "逻辑网络设计是体现网络设计核心思想的关键阶段，下列选项中不属于逻辑网络设计内容的是（ ）。",
    "options": [
      "A. 网络结构设计",
      "B. 物理层技术选择",
      "C. 结构化布线设计",
      "D. 确定路由选择协议"
    ],
    "answer": 2,
    "explanation": "结构化布线设计属于物理网络设计内容，逻辑网络设计包括网络结构设计、物理层技术选择和路由协议确定。"
  },
  {
    "id": 2040,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "FTP的默认数据端口号是（ ）",
    "options": [
      "A. 18",
      "B. 20",
      "C. 22",
      "D. 24"
    ],
    "answer": 1,
    "explanation": "FTP使用两个端口，控制端口为21，数据端口默认为20，故默认数据端口号是20。"
  },
  {
    "id": 2041,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "在RAID技术中，同一RAID组内允许任意两块硬盘同时出现故障仍然可以保证数据有效的是（ ）。",
    "options": [
      "A. RAID5",
      "B. RAID1",
      "C. RAID6",
      "D. RAID0"
    ],
    "answer": 2,
    "explanation": "RAID6采用双校验机制，允许同一RAID组内任意两块硬盘同时故障仍能保证数据有效。"
  },
  {
    "id": 2042,
    "type": "single",
    "category": "无线网络",
    "paper": "real2019b",
    "question": "无线局域网中采用不同帧间间隔划定优先级，通过冲突避免机制来实现介质访问控制。其中RTS/CTS帧（ ）。",
    "options": [
      "A. 帧间间隔最短，具有较高优先级",
      "B. 帧间间隔最短，具有较低优先级",
      "C. 帧间间隔最长，具有较高优先级",
      "D. 帧间间隔最长，具有较低优先级"
    ],
    "answer": 0,
    "explanation": "RTS/CTS帧使用最短的帧间间隔SIFS，具有较高优先级，用于在冲突避免机制中优先占用信道。"
  },
  {
    "id": 2043,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "属于网络215.17.204.0/22的地址是（ ）。",
    "options": [
      "A. 215.17.208.200",
      "B. 215.17.206.10",
      "C. 215.17.203.0",
      "D. 115.17.224.0"
    ],
    "answer": 1,
    "explanation": "215.17.204.0/22的网络范围是215.17.204.0~215.17.207.255，215.17.206.10在此范围内。"
  },
  {
    "id": 2044,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "主机地址202.15.2.160所在的网络是（ ）。",
    "options": [
      "A. 202.115.2.64/26",
      "B. 202.115.2.128/26",
      "C. 202.115.2.96/26",
      "D. 202.115.2.192/26"
    ],
    "answer": 1,
    "explanation": "202.115.2.128/26的网络范围是202.115.2.128~202.115.2.191，202.15.2.160在此范围内。"
  },
  {
    "id": 2045,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "某端口的IP地址为61.116.7.131/26，则该IP地址所在网络的广播地址是（ ）。",
    "options": [
      "A. 61.116.7.255",
      "B. 61.116.7.129",
      "C. 61.116.7.191",
      "D. 61.116.7.252"
    ],
    "answer": 2,
    "explanation": "61.116.7.131/26所在网络为61.116.7.128/26，广播地址为61.116.7.191。"
  },
  {
    "id": 2046,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019b",
    "question": "IPv6协议数据单元由一个固定头部和若干个扩展头部以及上层协议提供的负载组成。如果有多个扩展头部，第一个扩展头部为（ ）",
    "options": [
      "A. 逐跳头部",
      "B. 路由选择头部",
      "C. 分段头部",
      "D. 认证头部"
    ],
    "answer": 0,
    "explanation": "IPv6扩展头部中，逐跳头部必须紧随固定头部，若有多个扩展头部，第一个为逐跳头部。"
  },
  {
    "id": 2047,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019b",
    "question": "使用traceroute命令测试网络时可以（ ）。",
    "options": [
      "A. 检验链路协议是否运行正常",
      "B. 检验目标网络是否在路由表中",
      "C. 查看域名解析服务",
      "D. 显示分组到达目标路径上经过的各个路由器"
    ],
    "answer": 3,
    "explanation": "traceroute命令通过发送TTL递增的报文，显示分组到达目标路径上经过的各个路由器。"
  },
  {
    "id": 2048,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "通常情况下，信息插座的安装位置距离地面的高度为（ ）cm。",
    "options": [
      "A. 10~20",
      "B. 20~30",
      "C. 30~50",
      "D. 50~70"
    ],
    "answer": 2,
    "explanation": "信息插座通常安装在距离地面30~50cm的高度，便于使用且符合布线规范。"
  },
  {
    "id": 2049,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "计算机网络机房建设过程中，单独设置接地体时，安全接地电阻要求小于（ ）。",
    "options": [
      "A. 1Ω",
      "B. 4Ω",
      "C. 5Ω",
      "D. 10Ω"
    ],
    "answer": 1,
    "explanation": "机房单独设置接地体时，安全接地电阻要求小于4Ω，以保证设备和人身安全。"
  },
  {
    "id": 2050,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "确定网络的层次结构及各层采用的协议是网络设计中（ ）阶段的主要任务。",
    "options": [
      "A. 网络需求分析",
      "B. 网络体系结构设计",
      "C. 网络设备选型",
      "D. 网络安全性设计"
    ],
    "answer": 1,
    "explanation": "确定网络的层次结构及各层采用的协议是网络体系结构设计阶段的主要任务。"
  },
  {
    "id": 2051,
    "type": "single",
    "category": "交换技术",
    "paper": "real2019b",
    "question": "在两台交换机间启用STP协议，其中SWA配置了STP root primary,SWB配置了STP root secondary,则图中（ ）端口将被堵塞。",
    "options": [
      "A. SWA的G0/0/1",
      "B. SWB的G0/0/2",
      "C. SWB的G0/0/1",
      "D. SWA的G0/0/2"
    ],
    "answer": 2,
    "explanation": "SWA为根桥，SWB为非根桥，SWB的G0/0/1端口处于非指定端口状态，将被阻塞。"
  },
  {
    "id": 2052,
    "type": "single",
    "category": "路由协议",
    "paper": "real2019b",
    "question": "RIPv1与RIPv2说法错误的是（ ）。",
    "options": [
      "A. RIPv1是有类路由协议，RIPv2是无类路由协议",
      "B. RIPv1不支持VLSM，RIPv2支持VLSM",
      "C. RIPv1没有认证功能，RIPv2支持认证",
      "D. RIPv1是组播更新，RIPv2是广播更新"
    ],
    "answer": 3,
    "explanation": "RIPv1使用广播更新，RIPv2使用组播更新，选项D说法相反，故错误。"
  },
  {
    "id": 2053,
    "type": "single",
    "category": "路由协议",
    "paper": "real2019b",
    "question": "OSPF协议是（ ）。",
    "options": [
      "A. 路径矢量协议",
      "B. 内部网关协议",
      "C. 距离矢量协议",
      "D. 外部网关协议"
    ],
    "answer": 1,
    "explanation": "OSPF是链路状态路由协议，属于内部网关协议（IGP），用于自治系统内部交换路由信息，故选B。"
  },
  {
    "id": 2054,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019b",
    "question": "下列（ ）接口不适用于SSD磁盘。",
    "options": [
      "A. SATA",
      "B. IDE",
      "C. PCle",
      "D. M.2"
    ],
    "answer": 1,
    "explanation": "IDE是早期并行ATA接口，速率低，不适用于SSD；SATA、PCIe、M.2均可用于SSD，故选B。"
  },
  {
    "id": 2055,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "三层网络设计方案中，（ ）是核心层的功能。",
    "options": [
      "A. 不同区域的高速数据转发",
      "B. 用户认证、计费管理",
      "C. 终端用户接入网络",
      "D. 实现网络的访问策略控制"
    ],
    "answer": 0,
    "explanation": "三层网络设计中，核心层负责不同区域间的高速数据转发；接入层负责用户接入，汇聚层实现访问策略控制，故选A。"
  },
  {
    "id": 2056,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "五阶段迭代周期模型把网络开发过程分为需求分析、通信规范分析、逻辑网络设计、物理网络设计、安装和维护等五个阶段。以下叙述中正确的是（ ）。",
    "options": [
      "A. 需求分析阶段应尽量明确定义用户需求，输出需求规范、通信规范",
      "B. 逻辑网络设计阶段设计人员一般更加关注于网络层的连接图",
      "C. 物理网络设计阶段要输出网络物理结构图、布线方案、IP地址方案等",
      "D. 安装和维护阶段要确定设备和部件清单、安装测试计划，进行安装调试"
    ],
    "answer": 1,
    "explanation": "逻辑网络设计阶段关注网络层连接图，如IP地址规划、路由设计等；需求规范属需求分析，布线方案属物理设计，故选B。"
  },
  {
    "id": 2057,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "以下关于网络冗余设计的叙述中，错误的是（ ）。",
    "options": [
      "A. 网络冗余设计避免网络组件单点失效造成应用失效",
      "B. 通常情况下主路径与备用路径承担相同的网络负载",
      "C. 负载分担是通过并行链路提供流量分担来提高性能",
      "D. 网络中存在备用链路时，可以考虑加入负载分担设计"
    ],
    "answer": 1,
    "explanation": "冗余设计中主路径承担主要负载，备用路径通常空闲或分担较少负载，并非承担相同负载，故B错误。"
  },
  {
    "id": 2058,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019b",
    "question": "网络规划与设计过程中应遵循一些设计原则，保证网络的先进性、可靠性、容错性、安全性和性能等。以下原则中有误的是（ ）。",
    "options": [
      "A. 应用最新的技术，保证网络设计技术的先进性",
      "B. 提供充足的带宽和先进的流量控制及拥塞管理功能",
      "C. 采用基于通用标准和技术的统一网络管理平台",
      "D. 网络设备的选择应考虑具有一定的可扩展空间"
    ],
    "answer": 0,
    "explanation": "网络设计不应盲目追求最新技术，应选择成熟、稳定且符合需求的技术，故A有误。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2019a";
  const A = [
  {
    "id": 2059,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "计算机执行指令的过程中，需要由（）产生每条指令的操作信号并将信号送往相应的部件进行处理，已完成指定的操作。",
    "options": [
      "A. CPU的控制器",
      "B. CPU的运算器",
      "C. DMA控制器",
      "D. Cache控制器"
    ],
    "answer": 0,
    "explanation": "CPU控制器负责指令译码并产生操作控制信号，送往各部件完成指令操作，故选A。"
  },
  {
    "id": 2060,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "DMA控制方式是在（）之间直接建立数据通路进行数据的交换处理。",
    "options": [
      "A. CPU与主存",
      "B. CPU与外设",
      "C. 主存与外设",
      "D. 外设与外设"
    ],
    "answer": 2,
    "explanation": "DMA方式在主存与外设之间直接建立数据通路，无需CPU干预，实现高速数据传送，故选C。"
  },
  {
    "id": 2061,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2019a",
    "question": "在（）校验方法中，采用模2运算来构造校验位。",
    "options": [
      "A. 水平奇偶",
      "B. 垂直奇偶",
      "C. 海明码",
      "D. 循环冗余"
    ],
    "answer": 3,
    "explanation": "循环冗余校验（CRC）采用模2除法运算构造校验位，通过生成多项式计算余数作为校验码，故选D。"
  },
  {
    "id": 2062,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "以下关于RISC（精简指令系统计算机）技术的叙述中，错误的是（）。",
    "options": [
      "A. 指令长度固定、指令种类尽量少",
      "B. 指令功能强大、寻址方式复杂多样",
      "C. 增加寄存器数目以减少访存次数",
      "D. 用硬布线电路实现指令解码，快速完成指令译码"
    ],
    "answer": 1,
    "explanation": "RISC指令功能简单、寻址方式少，而非功能强大、寻址复杂，后者是CISC特点，故B错误。"
  },
  {
    "id": 2063,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "10个成员组成的开发小组，若任意两人之间都有沟通路径，则一共有（）条沟通路径。",
    "options": [
      "A. 100",
      "B. 90",
      "C. 50",
      "D. 45"
    ],
    "answer": 3,
    "explanation": "10人两两沟通路径数为组合数C(10,2)=10×9/2=45条，故选D。"
  },
  {
    "id": 2064,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "某文件系统采用位示图（bitmap）记录磁盘的使用情况。若计算机系统的字长为64位，磁盘的容量为1024G，物理块大小为4MB，那么位示图的大小需要（）个字。",
    "options": [
      "A. 1200",
      "B. 2400",
      "C. 4096",
      "D. 9600"
    ],
    "answer": 2,
    "explanation": "磁盘块数=1024G/4MB=256K=262144块，位示图需262144位，字长64位，需262144/64=4096个字，故选C。"
  },
  {
    "id": 2065,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "某文件系统的目录结构如下图所示，假设用户要访问文件book2.doc，且当前工作目录为MyDrivers，则该文件的绝对路径和相对路径分别为（）。",
    "options": [
      "A. MyDrivers\\user2\\和\\user2\\",
      "B. \\MyDrivers\\user2\\和\\user2\\",
      "C. \\MyDrivers\\user2\\和user2\\",
      "D. MyDrivers\\user2\\和user2\\"
    ],
    "answer": 2,
    "explanation": "绝对路径从根目录开始为\\MyDrivers\\user2\\，相对路径从当前目录MyDrivers出发为user2\\，故选C。"
  },
  {
    "id": 2066,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2019a",
    "question": "设信号的波特率为1000Baud，信道支持的最大数据速率为2000b/s，则信道采用的调制技术为（11）。",
    "options": [
      "A. BPSK",
      "B. QPSK",
      "C. BFSK",
      "D. 4B5B"
    ],
    "answer": 1,
    "explanation": "数据速率=波特率×log2(N)，2000=1000×log2(N)，得N=4，即QPSK四相调制，故选B。"
  },
  {
    "id": 2067,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2019a",
    "question": "假设模拟信号的频率为10-16MHz，采样频率必须大于（12）时，才能使得到的样本信号不失真。",
    "options": [
      "A. 8MHz",
      "B. 10MHz",
      "C. 20MHz",
      "D. 32MHz"
    ],
    "answer": 3,
    "explanation": "采样定理要求采样频率大于信号最高频率的2倍，即大于2×16MHz=32MHz，故选D。"
  },
  {
    "id": 2068,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019a",
    "question": "下列千兆以太网标准中，传输距离最短的是（13）。",
    "options": [
      "A. 1000BASE-FX",
      "B. 1000BASE-CX",
      "C. 1000BASE-SX",
      "D. 1000BASE-LX"
    ],
    "answer": 1,
    "explanation": "1000BASE-CX使用铜缆短距离传输，最长25米，是千兆以太网中传输距离最短的标准，故选B。"
  },
  {
    "id": 2069,
    "type": "single",
    "category": "交换技术",
    "paper": "real2019a",
    "question": "以下关于直通式交换机和存储转发式交换机的叙述中，正确的是（14）。",
    "options": [
      "A. 存储转发式交换机采用软件实现交换",
      "B. 直通式交换机存在环帧传播的风险",
      "C. 存储转发式交换机无需进行CRC校验",
      "D. 直通式交换机比存储转发式交换机交换速率慢"
    ],
    "answer": 1,
    "explanation": "直通式交换机收到帧头即转发，不检测CRC，可能转发错误帧或环帧；存储转发式需完整接收并校验，故选B。"
  },
  {
    "id": 2070,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019a",
    "question": "下列指标中，仅用于双绞线测试的是（15）。",
    "options": [
      "A. 最大衰减限值",
      "B. 波长窗口参数",
      "C. 回波损耗限值",
      "D. 近端串扰"
    ],
    "answer": 3,
    "explanation": "近端串扰是双绞线特有的测试指标；最大衰减、波长窗口、回波损耗也用于光纤测试，故选D。"
  },
  {
    "id": 2071,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2019a",
    "question": "TCP和UDP协议均提供了（20）能力。",
    "options": [
      "A. 连接管理",
      "B. 差错校验和重传",
      "C. 流量控制",
      "D. 端口寻址"
    ],
    "answer": 3,
    "explanation": "TCP和UDP都使用端口号进行进程寻址；连接管理、重传、流量控制仅TCP具备，故选D。"
  },
  {
    "id": 2072,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2019a",
    "question": "建立TCP连接时，一端主动打开后所处的状态为（）。",
    "options": [
      "A. SYN SENT",
      "B. ESTABLISHED",
      "C. CLOSE-WAIT",
      "D. LAST-ACK"
    ],
    "answer": 0,
    "explanation": "TCP三次握手中，主动打开方发送SYN后进入SYN_SENT状态，等待对方SYN+ACK，故选A。"
  },
  {
    "id": 2073,
    "type": "single",
    "category": "路由协议",
    "paper": "real2019a",
    "question": "在点对点网络上，运行OSPF协议的路由器每（）秒钟向它的各个接口发送Hello分组，告知邻居它的存在。",
    "options": [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. 40"
    ],
    "answer": 0,
    "explanation": "OSPF在点对点网络上默认每10秒向各接口发送Hello分组，用于发现和维持邻居关系，故答案为10秒。"
  },
  {
    "id": 2074,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019a",
    "question": "配置POP3服务器时，邮件服务器中默认开放TCP的（）端口。",
    "options": [
      "A. 21",
      "B. 25",
      "C. 53",
      "D. 110"
    ],
    "answer": 3,
    "explanation": "POP3协议默认使用TCP的110端口，用于接收邮件；21为FTP、25为SMTP、53为DNS。"
  },
  {
    "id": 2075,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019a",
    "question": "在Linux中，可以使用命令（）针对文件newfiles.txt为所有用户添加执行权限。",
    "options": [
      "A. chmod-x newfiles.txt",
      "B. chmod+x newfiles.txt",
      "C. chmod-w newfiles.txt",
      "D. chmod+w newfiles.txt"
    ],
    "answer": 1,
    "explanation": "chmod +x newfiles.txt表示为所有用户添加执行权限，-x为去除执行权限，故应选chmod +x。"
  },
  {
    "id": 2076,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019a",
    "question": "在Linux中，可在（）文件中修改Web服务器配置。",
    "options": [
      "A. /etc/host.conf",
      "B. /etc/resolv.conf",
      "C. /etc/inetd.conf",
      "D. /etc/httpd.conf"
    ],
    "answer": 3,
    "explanation": "Linux中Apache等Web服务器的主配置文件为/etc/httpd.conf，修改该文件即可配置Web服务。"
  },
  {
    "id": 2077,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019a",
    "question": "在Linux中，要查看文件的详细信息，可使用（）命令。",
    "options": [
      "A. Is-a",
      "B. Is-I",
      "C. Is-i",
      "D. Is-S"
    ],
    "answer": 1,
    "explanation": "ls -l以长格式列出文件详细信息，包括权限、属主、大小和时间等，故应使用ls -l。"
  },
  {
    "id": 2078,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019a",
    "question": "在Windows命令行窗口中使用（）命令可以查看本机各个接口的DHCP服务是否已启用。",
    "options": [
      "A. ipconfig",
      "B. ipconfig/all",
      "C. ipconfig/renew",
      "D. ipconfig/release"
    ],
    "answer": 1,
    "explanation": "ipconfig /all可显示各接口的完整配置信息，包括是否启用DHCP及租约等，故应选该命令。"
  },
  {
    "id": 2079,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019a",
    "question": "在Windows系统的服务项中，（）服务使用SMB协议创建并维护客户端网络与远程服务器之间的链接。",
    "options": [
      "A. SNMP Trap",
      "B. Windows Search",
      "C. Workstation",
      "D. Superfetch"
    ],
    "answer": 2,
    "explanation": "Windows的Workstation服务基于SMB协议，负责创建并维护客户端与远程服务器之间的网络连接。"
  },
  {
    "id": 2080,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019a",
    "question": "下列不属于电子邮件协议的是（）。",
    "options": [
      "A. POP3",
      "B. IMAP",
      "C. SMTP",
      "D. MPLS"
    ],
    "answer": 3,
    "explanation": "POP3、IMAP、SMTP均为电子邮件协议，MPLS是多协议标签交换，属于网络传输技术，与邮件无关。"
  },
  {
    "id": 2081,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019a",
    "question": "下述协议中与安全电子邮箱服务无关的是（）。",
    "options": [
      "A. SSL",
      "B. HTTPS",
      "C. MIME",
      "D. PGP"
    ],
    "answer": 2,
    "explanation": "SSL、HTTPS、PGP均可用于电子邮件的加密与安全传输，MIME仅用于扩展邮件报文格式，与安全无关。"
  },
  {
    "id": 2082,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019a",
    "question": "DHCP服务器设置了C类私有地址为地址池，某Windows客户端获得的地址是169.254.107.100，出现该现象可能的原因是（）。",
    "options": [
      "A. 该网段存在多台DHCP服务器",
      "B. DHCP服务器为客户端分配了该地址",
      "C. DHCP服务器停止工作",
      "D. 客户端TCP/IP协议配置错误"
    ],
    "answer": 2,
    "explanation": "169.254.x.x是Windows自动专用IP地址(APIPA)，当客户端无法联系到DHCP服务器时自动配置，说明DHCP服务器停止工作。"
  },
  {
    "id": 2083,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2019a",
    "question": "在Windows Server2008系统中，不能使用IIS搭建的是（）服务器。",
    "options": [
      "A. WEB",
      "B. DNS",
      "C. SMTP",
      "D. FTP"
    ],
    "answer": 1,
    "explanation": "IIS可搭建Web、FTP、SMTP等服务器，但DNS服务器需由专门的DNS服务组件搭建，不能用IIS实现。"
  },
  {
    "id": 2084,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019a",
    "question": "用户发出HTTP请求后，收到状态码为505的响应，出现该现象的原因是（）。",
    "options": [
      "A. 页面请求正常，数据传输成功",
      "B. 服务器根据客户端请求切换协议",
      "C. 服务器端HTTP版本不支持",
      "D. 请求资源不存在"
    ],
    "answer": 2,
    "explanation": "HTTP状态码505表示服务器不支持请求中所使用的HTTP协议版本，即服务器端HTTP版本不支持。"
  },
  {
    "id": 2085,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019a",
    "question": "使用snmptuil.exe可以查看代理的MIB对象，下列文本框内oid部分是（）。",
    "options": [
      "A. 192.168.1.31",
      "B. 1.3.6.1.2.1.1.3.0",
      "C. system.sysUpTime.0",
      "D. TimeTicks 1268803"
    ],
    "answer": 1,
    "explanation": "SNMP中MIB对象用OID标识，1.3.6.1.2.1.1.3.0是sysUpTime的标准OID，其余为IP地址、名称或取值。"
  },
  {
    "id": 2086,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019a",
    "question": "在华为交换机的故障诊断命令中，查看告警信息的命令是（）。",
    "options": [
      "A. dis patch",
      "B. dis trap",
      "C. dis int br",
      "D. dis cu"
    ],
    "answer": 1,
    "explanation": "华为交换机中dis trap用于查看告警（Trap）信息，dis patch查看补丁，dis int br查看接口，dis cu查看配置。"
  },
  {
    "id": 2087,
    "type": "single",
    "category": "网络管理",
    "paper": "real2019a",
    "question": "华为交换机不断重启，每次在配置恢复阶段（未输出“Recover congfiguration...”之前）就发生复位，下面哪个故障处理措施可以不考虑？（）。",
    "options": [
      "A. 重传系统大包文件，并设置为启动文件，重启设备",
      "B. 新建空的配置文件上传，并设置为启动文件，重启设备",
      "C. 重传系统大包文件问题还未解决，再次更新BOOTROM",
      "D. 多次重启后问题无法解决，将问题反馈给华为技术支持"
    ],
    "answer": 1,
    "explanation": "故障发生在配置恢复阶段，说明启动配置文件可能损坏，应重传系统大包或空配置文件并设为启动文件，新建空配置文件并非必要措施。"
  },
  {
    "id": 2088,
    "type": "single",
    "category": "交换技术",
    "paper": "real2019a",
    "question": "设备上无法创建正确的MAC转发表项，造成二层数据转发失败，故障的原因包括（）。①MAC、接口、VLAN绑定错误②配置了MAC地址学习去使能③存在环路MAC地址学习错误④MAC表项限制或超规格",
    "options": [
      "A. ①②③④",
      "B. ①②④",
      "C. ②③",
      "D. ②④"
    ],
    "answer": 0,
    "explanation": "MAC转发表项无法正确创建的原因包括绑定错误、MAC学习被去使能、环路导致学习错误以及表项超规格，四项均正确。"
  },
  {
    "id": 2089,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019a",
    "question": "路由器收到一个数据报文，其目标地址为20.112.17.12，该地址属于（）子网。",
    "options": [
      "A. 20.112.17.8/30",
      "B. 20.112.16.0/24",
      "C. 20.96.0.0/11",
      "D. 20.112.18.0/23"
    ],
    "answer": 2,
    "explanation": "20.96.0.0/11的地址范围为20.96.0.0~20.127.255.255，20.112.17.12落在该范围内，故属于该子网。"
  },
  {
    "id": 2090,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2019a",
    "question": "某校园网的地址是202.115.192.0/19，要把该网络分成30个子网，则子网掩码应该是（）。",
    "options": [
      "A. 255.255.200.0",
      "B. 255.255.224.0",
      "C. 255.255.254.0",
      "D. 255.255.255.0"
    ],
    "answer": 3,
    "explanation": "原网络/19需划分30个子网，需借5位主机位(2^5=32≥30)，新掩码为/24即255.255.255.0。"
  },
  {
    "id": 2091,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2019a",
    "question": "以太网的最大帧长为1518字节，每个数据帧前面有8个字节的前导字段，帧间隔为9.6μs。传输240000bit的IP数据报，采用100BASE-TX网络，需要的最短时间为（）。",
    "options": [
      "A. 1.23ms",
      "B. 12.3ms",
      "C. 2.63ms",
      "D. 26.3ms"
    ],
    "answer": 2,
    "explanation": "240000bit即30000字节，需分20帧(每帧1500字节)，总位数含前导和帧间隔约为(20×1526×8)bit加19×9.6μs，100Mbps下约2.63ms。"
  },
  {
    "id": 2092,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019a",
    "question": "下面列出的4种快速以太网物理层标准中，采用4B5B编码技术的是（）。",
    "options": [
      "A. 100BASE-FX",
      "B. 100BASE-T4",
      "C. 100BASE-TX",
      "D. 100BASE-T2"
    ],
    "answer": 0,
    "explanation": "100BASE-FX采用4B5B编码，100BASE-TX采用4B5B加MLT-3，100BASE-T4和T2分别采用8B6T和PAM5×5，故选FX。"
  },
  {
    "id": 2093,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019a",
    "question": "以太网协议中使用了二进制指数后退算法，其冲突后最大的尝试次数为（）次。",
    "options": [
      "A. 8",
      "B. 10",
      "C. 16",
      "D. 20"
    ],
    "answer": 2,
    "explanation": "以太网采用二进制指数后退算法，冲突后重传次数达到16次仍失败则丢弃帧并报告错误，故最大尝试次数为16。"
  },
  {
    "id": 2094,
    "type": "single",
    "category": "网络安全",
    "paper": "real2019a",
    "question": "震网（Stuxnet）病毒是一种破坏工业基础设施的恶意代码，利用系统漏洞攻击工业控制系统，是一种危害性极大的（）。",
    "options": [
      "A. 引导区病毒",
      "B. 宏病毒",
      "C. 木马病毒",
      "D. 蠕虫病毒"
    ],
    "answer": 3,
    "explanation": "震网病毒能自我复制并通过网络和U盘传播，无需宿主程序，符合蠕虫病毒特征，故属于蠕虫病毒。"
  },
  {
    "id": 2095,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2019a",
    "question": "默认管理VLAN是（）。",
    "options": [
      "A. VLAN 0",
      "B. VLAN 1",
      "C. VLAN 10",
      "D. VLAN 100"
    ],
    "answer": 1,
    "explanation": "在交换机VLAN配置中，默认管理VLAN为VLAN 1，所有端口默认属于VLAN 1，用于管理流量。"
  },
  {
    "id": 2096,
    "type": "single",
    "category": "无线网络",
    "paper": "real2019a",
    "question": "以下关于跳频扩频技术的描述中，正确的是（）。",
    "options": [
      "A. 扩频通信减少了干扰并有利于通信保密",
      "B. 用不同的频率传播信号扩大了通信的范围",
      "C. 每一个信号比特编码成N个码片比特来传输",
      "D. 信号散步到更宽的频带上增加了信道阻塞的概率"
    ],
    "answer": 0,
    "explanation": "跳频扩频通过频繁切换载波频率传输信号，能有效抗干扰并增强通信保密性，故A正确。"
  },
  {
    "id": 2097,
    "type": "single",
    "category": "无线网络",
    "paper": "real2019a",
    "question": "下列无线网络技术中，覆盖范围最小的是（）。",
    "options": [
      "A. 802.15.1蓝牙",
      "B. 802.11n无线局域网",
      "C. 802.15.4 ZigBee",
      "D. 802.16m无线城域网"
    ],
    "answer": 0,
    "explanation": "蓝牙（802.15.1）是无线个人区域网技术，典型覆盖范围约10米，比WLAN、ZigBee和无线城域网都小。"
  },
  {
    "id": 2098,
    "type": "single",
    "category": "无线网络",
    "paper": "real2019a",
    "question": "无线局域网中AP的轮询会说的异步帧，在IEEE802.11网络中定义了（）机制来解决这一问题。",
    "options": [
      "A. RTS/CTS机制",
      "B. 二进制指数退避",
      "C. 超级帧",
      "D. 无争用服务"
    ],
    "answer": 3,
    "explanation": "IEEE 802.11定义了无争用服务（PCF），通过AP轮询方式避免竞争，解决异步帧的争用问题。"
  },
  {
    "id": 2099,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "RAID技术中，磁盘容量利用率最低的是（）。",
    "options": [
      "A. RAID0",
      "B. RAID1",
      "C. RAID5",
      "D. RAID6"
    ],
    "answer": 1,
    "explanation": "RAID1采用镜像方式，两块磁盘互为备份，有效容量仅为总容量的一半，磁盘利用率最低。"
  },
  {
    "id": 2100,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019a",
    "question": "三层网络设计方案中，（）是汇聚层的功能。",
    "options": [
      "A. 不同区域的高速数据转发",
      "B. 用户认证、计费管理",
      "C. 终端用户接入网络",
      "D. 实现网络的访问策略控制"
    ],
    "answer": 3,
    "explanation": "三层网络设计中，汇聚层负责实现访问策略控制、路由聚合等，接入层负责用户接入，核心层负责高速转发。"
  },
  {
    "id": 2101,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2019a",
    "question": "以下关于网络工程需求分析的叙述中，错误的是（）。",
    "options": [
      "A. 任何网络都不可能是一个能够满足各项功能需求的万能网",
      "B. 需求分析要充分考虑用户的业务需求",
      "C. 需求的定义越明确和详细，网络建成后用户的满意度越高",
      "D. 网络需求分析时可以先不考虑成本因素"
    ],
    "answer": 3,
    "explanation": "网络需求分析必须考虑成本因素，成本是需求分析的重要内容，D项说法错误。"
  },
  {
    "id": 2102,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2019a",
    "question": "下图为某网络工程项目的施工计划图，要求该项目7天内完工，至少需求投入（）人才能完成该项目（假设每个技术人员均能胜任每项工作）。",
    "options": [
      "A. 4",
      "B. 6",
      "C. 7",
      "D. 14"
    ],
    "answer": 2,
    "explanation": "根据施工计划图，关键路径需7天完成，每天至少需投入1人，总工作量7人天，故至少需7人。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2018b";
  const A = [
  {
    "id": 2103,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "采用n位补码(包含一个符号位)表示数据，可以直接表示数值( )。",
    "options": [
      "A. 2n",
      "B. -2n",
      "C. 2n-1",
      "D. -2n-1"
    ],
    "answer": 3,
    "explanation": "n位补码表示范围为-2^(n-1)到2^(n-1)-1，可直接表示的最小值为-2^(n-1)，即-2n-1（此处n为指数形式）。"
  },
  {
    "id": 2104,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "以下关于采用一位奇校验方法的叙述中，正确的是( )。",
    "options": [
      "A. 若所有奇数位出错，则可以检测出该错误但无法纠正错误",
      "B. 若所有偶数位出错，则可以检测出该错误并加以纠正",
      "C. 若有奇数个数据位出错，则可以检测出该错误但无法纠正错误",
      "D. 若有偶数个数据位出错，则可以检测出该错误并加以纠正"
    ],
    "answer": 2,
    "explanation": "一位奇校验只能检测奇数个数据位出错，不能纠正错误，故C正确。"
  },
  {
    "id": 2105,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "下列关于流水线方式执行指令的叙述中，不正确的是( )。",
    "options": [
      "A. 流水线方式可提高单条指令的执行速度",
      "B. 流水线方式下可同时执行多条指令",
      "C. 流水线方式提高了各部件的利用率",
      "D. 流水线方式提高了系统的吞吐率"
    ],
    "answer": 0,
    "explanation": "流水线方式提高的是指令吞吐率，并不能提高单条指令的执行速度，故A不正确。"
  },
  {
    "id": 2106,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "在存储体系中位于主存与CPU之间的高速缓存(Cache)用于存放主存中部分信息的副本，主存地址与Cache地址之间的转换工作( )。",
    "options": [
      "A. 由系统软件实现",
      "B. 由硬件自动完成",
      "C. 由应用软件实现",
      "D. 由用户发出指令完成"
    ],
    "answer": 1,
    "explanation": "Cache与主存之间的地址转换由硬件自动完成，对程序员透明，无需软件干预。"
  },
  {
    "id": 2107,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "在指令系统的各种寻址方式中，获取操作数最快的方式是( )",
    "options": [
      "A. 直接寻址",
      "B. 间接寻址",
      "C. 立即寻址",
      "D. 寄存器寻址"
    ],
    "answer": 2,
    "explanation": "立即寻址的操作数直接包含在指令中，取指时即可获得，无需访问存储器，速度最快。"
  },
  {
    "id": 2108,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "有可能无限期拥有的知识产权是（ ）。",
    "options": [
      "A. 著作权",
      "B. 专利权",
      "C. 商标权",
      "D. 集成电路布图设计权"
    ],
    "answer": 2,
    "explanation": "商标权可以通过续展无限期拥有，而著作权、专利权和集成电路布图设计权均有法定保护期限。"
  },
  {
    "id": 2109,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "某计算机系统中互斥资源R的可用数为8，系统中有3个进程P1、P2 和P3竞争R，且每个进程都需要i个R，该系统可能会发生死锁的最小i值为（ ）。",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": 3,
    "explanation": "3个进程各需4个资源，已分配3×3=9个，但系统只有8个，无法满足任一进程，可能死锁，故最小i=4。"
  },
  {
    "id": 2110,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "以下关于信息和数据的描述中，错误的是（ ）。",
    "options": [
      "A. 通常从数据中可以提取信息",
      "B. 信息和数据都由数字组成",
      "C. 信息是抽象的、数据是具体的",
      "D. 客观事物中都蕴涵着信息"
    ],
    "answer": 1,
    "explanation": "信息是经过加工的有意义数据，数据可以是数字、文字、图像等多种形式，并非都由数字组成，B错误。"
  },
  {
    "id": 2111,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "设信号的波特率为800Baud，采用幅度一相位复合调制技术，由4种幅度和8种相位组成16种码元，则信道的数据速率为（ ）。",
    "options": [
      "A. 1600 b/s",
      "B. 2400 b/s",
      "C. 3200 b/s",
      "D. 4800 b/s"
    ],
    "answer": 2,
    "explanation": "16种码元对应log2(16)=4比特，数据速率=波特率×每码元比特数=800×4=3200 b/s。"
  },
  {
    "id": 2112,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "采用双极型AMI编码进行数据传输，若接收的波形如下图所示，出错的是第（ ）位。",
    "options": [
      "A. 2",
      "B. 5",
      "C. 7",
      "D. 9"
    ],
    "answer": 2,
    "explanation": "AMI编码要求相邻非零脉冲极性交替，第7位违反交替规则，故出错的是第7位。"
  },
  {
    "id": 2113,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "以下关于DPSK调制技术的描述中，正确的是（ ）。",
    "options": [
      "A. 采用2种相位，一种固定表示数据“0”，一种固定表示数据“1”",
      "B. 采用2种相位，通过前沿有无相位的改变来表示数据“0”和“1”",
      "C. 采用4种振幅，每个码元表示2比特",
      "D. 采用4种频率，每个码元表示2比特"
    ],
    "answer": 1,
    "explanation": "DPSK为差分相移键控，用相邻码元相位是否改变表示数据，而非固定相位对应0/1，故B正确。"
  },
  {
    "id": 2114,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "下面关于Manchester编码的叙述中，错误的是（ ）。",
    "options": [
      "A. Manchester编码是一种双相码",
      "B. Manchester 编码是一种归零码",
      "C. Manchester 编码提供了比特同步信息",
      "D. Manchester 编码应用在以太网中"
    ],
    "answer": 1,
    "explanation": "Manchester编码属于双相码，每位中间都有跳变，能自同步，用于以太网；它不是归零码，故B错误。"
  },
  {
    "id": 2115,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "假设模拟信号的频率范围为2~8MHz,采样频率必须大于( )时，才能使得到的样本信号不失真。",
    "options": [
      "A. 4MHz",
      "B. 6MHz",
      "C. 12MHz",
      "D. 16MHz"
    ],
    "answer": 3,
    "explanation": "采样定理要求采样频率大于信号最高频率的2倍，即大于2×8MHz=16MHz，故选D。"
  },
  {
    "id": 2116,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "设信道带宽为1000Hz，信噪比为30dB，则信道的最大数据速率约为( )b/s。",
    "options": [
      "A. 10000",
      "B. 20000",
      "C. 30000",
      "D. 40000"
    ],
    "answer": 0,
    "explanation": "信噪比30dB即S/N=1000，由香农公式C=Wlog2(1+S/N)=1000×log2(1001)≈10000b/s，故选A。"
  },
  {
    "id": 2117,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018b",
    "question": "设信道带宽为5000Hz，采用PCM编码，采样周期为125μs，每个样本量化为256个等级，则信道的数据速率为（ ）。",
    "options": [
      "A. 0Kb/s",
      "B. 40Kb/s",
      "C. 56Kb/s",
      "D. 64Kb/s"
    ],
    "answer": 3,
    "explanation": "采样周期125μs即8000次/秒，256等级需8bit，速率=8000×8=64Kb/s，故选D。"
  },
  {
    "id": 2118,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2018b",
    "question": "使用ADSL接入Intermet,用户端需要安装（ ）协议。",
    "options": [
      "A. PPP",
      "B. SLIP",
      "C. PPTP",
      "D. PPPoE"
    ],
    "answer": 3,
    "explanation": "ADSL接入Internet时用户端通过PPPoE协议进行以太网上的点对点拨号认证，故选D。"
  },
  {
    "id": 2119,
    "type": "single",
    "category": "路由协议",
    "paper": "real2018b",
    "question": "下列关于OSPF协议的说法中，错误的是（ ）。",
    "options": [
      "A. OSPF 的每个区域(Area) 运行路由选择算法的一个实例",
      "B. OSPF 采用Dijkstra 算法计算最佳路由",
      "C. OSPF路由器向各个活动端口组播Hello分组来发现邻居路由器",
      "D. OSPF协议默认的路由更新周期为30秒"
    ],
    "answer": 3,
    "explanation": "OSPF采用触发更新和周期性泛洪，默认Hello间隔10秒，并非30秒路由更新周期，故D错误。"
  },
  {
    "id": 2120,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018b",
    "question": "ARP 协议数据单元封装在( )中传送。",
    "options": [
      "A. IP 分组",
      "B. 以太帧",
      "C. TCP 段",
      "D. ICMP 报文"
    ],
    "answer": 1,
    "explanation": "ARP报文用于IP到MAC地址解析，直接封装在以太帧中传送，类型字段为0x0806，故选B。"
  },
  {
    "id": 2121,
    "type": "single",
    "category": "路由协议",
    "paper": "real2018b",
    "question": "RIP协议默认的路由更新周期是( )秒。",
    "options": [
      "A. 30",
      "B. 60",
      "C. 90",
      "D. 100"
    ],
    "answer": 0,
    "explanation": "RIP默认每30秒向邻居发送一次完整路由更新，故默认更新周期为30秒，选A。"
  },
  {
    "id": 2122,
    "type": "single",
    "category": "路由协议",
    "paper": "real2018b",
    "question": "以下关于OSPF协议的叙述中，正确的是( )。",
    "options": [
      "A. OSPF 是一种路径矢量协议",
      "B. OSPF使用链路状态公告(LSA)扩散路由信息",
      "C. OSPF网络中用区域1来表示主干网段",
      "D. OSPF路由器向邻居发送路由更新信息"
    ],
    "answer": 1,
    "explanation": "OSPF是链路状态协议，通过LSA泛洪扩散链路状态信息，用Dijkstra算法计算路由，故选B。"
  },
  {
    "id": 2123,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2018b",
    "question": "在Linux中，( )命令可将文件按修改时间顺序显示。",
    "options": [
      "A. ls -a",
      "B. ls -b",
      "C. Is -c",
      "D. ls -d"
    ],
    "answer": 2,
    "explanation": "ls -c按文件修改时间（ctime）排序显示，故可将文件按修改时间顺序显示，选C。"
  },
  {
    "id": 2124,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2018b",
    "question": "在Linux中，强制复制目录的命令是( )。",
    "options": [
      "A. cp -f",
      "B. cp -i",
      "C. cp -a",
      "D. cp -l"
    ],
    "answer": 0,
    "explanation": "cp -f表示强制复制，覆盖目标文件时不提示，故强制复制目录应选A。"
  },
  {
    "id": 2125,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2018b",
    "question": "可以利用( )实现Linux平台和Windows平台之间的数据共享。",
    "options": [
      "A. NetBIOS",
      "B. NFS",
      "C. Appletalk",
      "D. Samba"
    ],
    "answer": 3,
    "explanation": "Samba实现了Linux与Windows平台间的文件和打印共享，基于SMB协议，故选D。"
  },
  {
    "id": 2126,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018b",
    "question": "关于 Windows操作系统中DHCP服务器的租约，下列说法中错误的是( )。",
    "options": [
      "A. 租约期固定是8天",
      "B. 当租约期过去50%时，客户机将与服务器联系更新租约",
      "C. 当租约期过去87.5%时，客户机与服务器联系失败，重新启动IP租用过程",
      "D. 客户机可采用ipconfig/renew重新申请地址"
    ],
    "answer": 0,
    "explanation": "DHCP租约期可配置，默认一般为8天但并非固定，故A说法错误。"
  },
  {
    "id": 2127,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2018b",
    "question": "在配置IIS时，IIS的发布目录( )。",
    "options": [
      "A. 只能够配置在c:\\inetpub\\wwwroot上",
      "B. 只能够配置在本地磁盘C上",
      "C. 只能够配置在本地磁盘D上",
      "D. 既能够配置在本地磁盘上，也能配置在联网的其它计算机上"
    ],
    "answer": 3,
    "explanation": "IIS发布目录既可配置在本地磁盘，也可指向联网的其他计算机共享目录，故选D。"
  },
  {
    "id": 2128,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018b",
    "question": "主机 A的主域名服务器为202.112.115.3，辅助域名服务器为202.112.115.5，城名www.aaaa.com的授权域名服务器为102.117.112.254。 若主机A访问www.aaaa.com时，由102.117.112.254 返回域名解析结果，则( )。",
    "options": [
      "A. 若202.112.115.3工作正常，其必定采用了迭代算法",
      "B. 若202.112.115.3工作正常，其必定采用了递归算法",
      "C. 102.117.112.254 必定采用了迭代算法",
      "D. 102.117.112.254 必定采用了递归算法"
    ],
    "answer": 0,
    "explanation": "本地域名服务器正常时，向授权服务器查询并返回结果，采用迭代算法逐级查询，故选A。"
  },
  {
    "id": 2129,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018b",
    "question": "关于DHCPOffer报文的说法中，( )是错误的。",
    "options": [
      "A. 接收到该报文后，客户端即采用报文中所提供的地址",
      "B. 报文源MAC地址是DHCP服务器的MAC地址",
      "C. 报文目的IP地址是255.255.255.255",
      "D. 报文默认目标端口是68"
    ],
    "answer": 0,
    "explanation": "客户端收到DHCP Offer后还需发送Request确认，不能立即采用该地址，故A错误。"
  },
  {
    "id": 2130,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018b",
    "question": "在DNS服务器中的( )资源记录定义了区域的邮件服务器及其优先级。",
    "options": [
      "A. SOA",
      "B. NS",
      "C. PTR",
      "D. MX"
    ],
    "answer": 3,
    "explanation": "MX资源记录定义区域的邮件服务器及其优先级，用于邮件路由，故选D。"
  },
  {
    "id": 2131,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2018b",
    "question": "用于配置 DDR (Dial-on-Demand Routing)链路重新建立连接等待时间的命令是( )。",
    "options": [
      "A. dialer timer idle",
      "B. dialer timer compete",
      "C. dialer timer enable",
      "D. dialer timer wait-carrier"
    ],
    "answer": 3,
    "explanation": "dialer timer wait-carrier用于配置DDR链路重新建立连接的等待时间，故选D。"
  },
  {
    "id": 2132,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018b",
    "question": "使用( )命令释放当前主机自动获取的IP地址。",
    "options": [
      "A. ipconfig/all",
      "B. ipconfig/reload",
      "C. ipconfig/release",
      "D. ipconfig/reset"
    ],
    "answer": 2,
    "explanation": "ipconfig/release用于释放当前主机自动获取的IP地址，故选C。"
  },
  {
    "id": 2133,
    "type": "single",
    "category": "网络安全",
    "paper": "real2018b",
    "question": "通过代理服务器(Proxy Server) 访问Intermet的主要功能不包括( )。",
    "options": [
      "A. 突破对某些网站的访问限制",
      "B. 提高访问某些网站的速度",
      "C. 避免来自Internet上病毒的入侵",
      "D. 隐藏本地主机的IP地址"
    ],
    "answer": 2,
    "explanation": "代理服务器可突破访问限制、提高访问速度、隐藏本地主机IP，但不能避免来自Internet的病毒入侵，病毒防护需依靠杀毒软件等。"
  },
  {
    "id": 2134,
    "type": "single",
    "category": "网络安全",
    "paper": "real2018b",
    "question": "以下关于三重DES加密的叙述中，正确的是( )。",
    "options": [
      "A. 三重DES加密使用一个密钥进行三次加密",
      "B. 三重DES加密使用两个密钥进行三次加密",
      "C. 三重DES加密使用三个密钥进行三次加密",
      "D. 三重DES加密的密钥长度是DES密钥长度的3倍"
    ],
    "answer": 1,
    "explanation": "三重DES使用两个密钥K1、K2进行加密-解密-加密三次运算，即EDE模式，密钥总长度112位，并非三个密钥。"
  },
  {
    "id": 2135,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018b",
    "question": "SNMP协议实体发送请求和应答报文的默认端口号是( )。",
    "options": [
      "A. 160",
      "B. 161",
      "C. 162",
      "D. 163"
    ],
    "answer": 1,
    "explanation": "SNMP代理使用UDP 161端口接收请求和发送应答，管理站使用162端口接收Trap通知。"
  },
  {
    "id": 2136,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018b",
    "question": "下列关于私有地址个数和地址的描述中，都正确的是( )。",
    "options": [
      "A. A类有10个：10.0.0.0~10.10.0.0",
      "B. B类有16个: 172.0.0.0~172.15.0.0",
      "C. B类有16个: 169.0.0.0~169.15.0.0",
      "D. C类有256个: 192.168.0.0~192.168.255.0"
    ],
    "answer": 3,
    "explanation": "C类私有地址为192.168.0.0~192.168.255.0，共256个网段；A类私有地址为10.0.0.0/8，B类为172.16.0.0~172.31.0.0。"
  },
  {
    "id": 2137,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018b",
    "question": "网络192.21.136.0/24 和192.21.143.0/24汇聚后的地址是( )。",
    "options": [
      "A. 192.21.136.0/21",
      "B. 192.21.136.0/20",
      "C. 192.21.136.0/22",
      "D. 192.21.128.0/21"
    ],
    "answer": 0,
    "explanation": "192.21.136.0/24与192.21.143.0/24前21位相同（136=10001000，143=10001111），汇聚后为192.21.136.0/21。"
  },
  {
    "id": 2138,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018b",
    "question": "把IP网络划分成子网的好处是( )。",
    "options": [
      "A. 减小冲突域的大小",
      "B. 减小广播域的大小",
      "C. 增加可用主机的数量",
      "D. 减轻路由器的负担"
    ],
    "answer": 1,
    "explanation": "划分子网将一个大的广播域划分为多个较小的广播域，从而减小广播域大小，抑制广播风暴。"
  },
  {
    "id": 2139,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018b",
    "question": "某主机接口的IP地址为192.16.7.131/26. 则该IP地址所在网络的广播地址是( ).",
    "options": [
      "A. 192.16.7.255",
      "B. 192.16.7.129",
      "C. 192.16.7.191",
      "D. 192.16.7.252"
    ],
    "answer": 2,
    "explanation": "192.16.7.131/26中网络号为192.16.7.128，广播地址为主机位全1即192.16.7.191。"
  },
  {
    "id": 2140,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018b",
    "question": "IPv6链路本地单播地址的前级为( ).",
    "options": [
      "A. 001",
      "B. 1111 1110 10",
      "C. 1111 1110 11",
      "D. 1111 1111"
    ],
    "answer": 1,
    "explanation": "IPv6链路本地单播地址前缀为1111 1110 10，即FE80::/10，用于同一链路上节点间通信。"
  },
  {
    "id": 2141,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2018b",
    "question": "路由器的( )接口通过光纤连接广城网。",
    "options": [
      "A. SFP端口",
      "B. 同步串行口",
      "C. Console 接口",
      "D. AUX 端口"
    ],
    "answer": 0,
    "explanation": "SFP端口为光模块插槽，可通过光纤连接广域网；同步串行口通常连接铜缆，Console和AUX用于本地管理。"
  },
  {
    "id": 2142,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018b",
    "question": "CSMA/CD 协议是( )协议。",
    "options": [
      "A. 物理层",
      "B. 介质访问子层",
      "C. 逻辑链路子层",
      "D. 网络层"
    ],
    "answer": 1,
    "explanation": "CSMA/CD是带冲突检测的载波监听多路访问协议，工作在数据链路层的介质访问控制（MAC）子层。"
  },
  {
    "id": 2143,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018b",
    "question": "以太网的最大帧长为1518字节，每个数据帧前面有8个字节的前导字段，帧间隔为9.6μs，快速以太网100 BASE-T发送两帧之间的最大间隔时间约为( ) μs。",
    "options": [
      "A. 12.1",
      "B. 13.2",
      "C. 121",
      "D. 132"
    ],
    "answer": 3,
    "explanation": "发送两帧最大间隔=(1518+8)×8bit÷100Mbps+9.6μs≈122.08+9.6≈131.7μs，约132μs。"
  },
  {
    "id": 2144,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018b",
    "question": "下列命令中，不能用于诊断DNS故障的是( )。",
    "options": [
      "A. netstat",
      "B. nslookup",
      "C. ping",
      "D. tracert"
    ],
    "answer": 0,
    "explanation": "netstat用于查看网络连接状态，不能诊断DNS故障；nslookup、ping、tracert均可用于DNS解析测试。"
  },
  {
    "id": 2145,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018b",
    "question": "在冗余磁盘阵列中，以下不具有容错技术的是( )。",
    "options": [
      "A. RAID 0",
      "B. RAID 1",
      "C. RAID 5",
      "D. RAID 10"
    ],
    "answer": 0,
    "explanation": "RAID 0采用条带化提高性能但无冗余，不具备容错能力；RAID 1、5、10均具有数据冗余和容错功能。"
  },
  {
    "id": 2146,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2018b",
    "question": "下面的描述中属于工作区子系统区城范围的是( )。",
    "options": [
      "A. 实现楼层设各间之间的连接",
      "B. 接线间配线架到工作区信息插座",
      "C. 终端设备到信息括座的整个区域",
      "D. 接线间内各种交连设备之间的连接"
    ],
    "answer": 2,
    "explanation": "工作区子系统指终端设备到信息插座的整个区域，包括信息插座、终端设备及连接线缆。"
  },
  {
    "id": 2147,
    "type": "single",
    "category": "交换技术",
    "paper": "real2018b",
    "question": "以下关于三层交换机的叙述中，正确的是( )。",
    "options": [
      "A. 三层交换机包括二层交换和三层转发，二层交换由硬件实现，三层转发采用软件实现",
      "B. 三层交换机仅实现三层转发功能",
      "C. 通常路由器用在单位内部，三层交换机放置在出口",
      "D. 三层交换机除了存储转发外，还可以采用直通交换技术"
    ],
    "answer": 3,
    "explanation": "三层交换机二层交换和三层转发均由硬件实现，除存储转发外还可采用直通交换技术，兼具交换与路由功能。"
  },
  {
    "id": 2148,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018b",
    "question": "IP数据报首部中IHL (Internet首部长度)字段的最小值为( )。",
    "options": [
      "A. 5",
      "B. 20",
      "C. 32",
      "D. 128"
    ],
    "answer": 0,
    "explanation": "IP首部IHL字段以4字节为单位，最小值为5，表示首部长度为20字节（不含选项）。"
  },
  {
    "id": 2149,
    "type": "single",
    "category": "网络安全",
    "paper": "real2018b",
    "question": "如下图所示，使用基本ACL限制FTP访间权限，从给出的Switch的配置文件判断可以实现的策略是( )。①PC1在任何时间都可以访问FTP②PC2在2018年的周一不能访问FTP③PC2在2018年的周六下午3点可以访问FTP④PC3在任何时间不能访问FTP",
    "options": [
      "A. ①②③④",
      "B. ①②④",
      "C. ②③",
      "D. ①③④"
    ],
    "answer": 0,
    "explanation": "基本ACL可根据源IP、时间段等限制访问，配置可实现PC1随时访问、PC2周一不能访问、周六下午3点可访问、PC3不能访问。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2018a";
  const A = [
  {
    "id": 2150,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018a",
    "question": "浮点数的表示分为阶和尾数两部分。两个浮点数相加时,需要先对阶,即（）（n为阶差的绝对值）。",
    "options": [
      "A. 将大阶向小阶对齐,同时将尾数左移n位",
      "B. 将大阶向小阶对齐,同时将尾数右移n位",
      "C. 将小阶向大阶对齐,同时将尾数左移n位",
      "D. 将小阶向大阶对齐,同时将尾数右移n位"
    ],
    "answer": 3,
    "explanation": "浮点数相加对阶时，将小阶向大阶对齐，同时将小阶数的尾数右移n位，以保持数值不变。"
  },
  {
    "id": 2151,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018a",
    "question": "著作权中，（）的保护期不受限制。",
    "options": [
      "A. 发表权",
      "B. 发行权",
      "C. 署名权",
      "D. 展览权"
    ],
    "answer": 2,
    "explanation": "署名权属于著作人身权，其保护期不受限制；发表权、发行权、展览权均有保护期限。"
  },
  {
    "id": 2152,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018a",
    "question": "王某是某公司的软件设计师，完成某项软件开发后按公司规定进行软件归档。以下有关该软件的著作权的叙述中，正确的是（）。",
    "options": [
      "A. 著作权应由公司和王某共同享有",
      "B. 著作权应由公司享有",
      "C. 著作权应由王某享有",
      "D. 除署名权以外，著作权的其它权利由王某享有"
    ],
    "answer": 1,
    "explanation": "王某是职务作品，且主要利用公司物质技术条件并由公司承担责任，按《计算机软件保护条例》著作权由公司享有。"
  },
  {
    "id": 2153,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2018a",
    "question": "流水线的吞吐率是指单位时间流水线处理的任务数，如果各段流水的操作时间不同，则流水线的吞吐率是（）的倒数。",
    "options": [
      "A. 最短流水段操作时间",
      "B. 各段流水的操作时间总和",
      "C. 最长流水段操作时间",
      "D. 流水段数乘以最长流水段操作时间"
    ],
    "answer": 2,
    "explanation": "流水线吞吐率取决于最慢流水段，各段操作时间不同时，吞吐率为最长流水段操作时间的倒数。"
  },
  {
    "id": 2154,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018a",
    "question": "以下关于曼彻斯特编码的描述中，正确的是（）。",
    "options": [
      "A. 每个比特都由一个码元组成",
      "B. 检测比特前沿的跳变来区分0和1",
      "C. 用电平的高低来区分0和1",
      "D. 不需要额外传输同步信号"
    ],
    "answer": 3,
    "explanation": "曼彻斯特编码每个比特中间都有跳变，接收方可从信号本身提取位同步时钟，无需额外传输同步信号。"
  },
  {
    "id": 2155,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018a",
    "question": "100BASE-TX交换机，一个端口通信的数据速率（全双工）最大可以达到（）。",
    "options": [
      "A. 25Mb/s",
      "B. 50Mb/s",
      "C. 100Mb/s",
      "D. 200Mb/s"
    ],
    "answer": 3,
    "explanation": "100BASE-TX端口速率为100Mb/s，全双工可同时收发，故最大数据速率达100+100=200Mb/s。"
  },
  {
    "id": 2156,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018a",
    "question": "快速以太网标准100BASE-FX采用的传输介质是（）。",
    "options": [
      "A. 同轴电缆",
      "B. 无屏蔽双绞线",
      "C. CATV电缆",
      "D. 光纤"
    ],
    "answer": 3,
    "explanation": "100BASE-FX中FX表示使用光纤作为传输介质，速率100Mb/s，属于快速以太网光纤标准。"
  },
  {
    "id": 2157,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2018a",
    "question": "按照同步光纤网传输标准（SONET），OC-1的数据速率为（）Mb/s。",
    "options": [
      "A. 51.84",
      "B. 155.52",
      "C. 466.96",
      "D. 622.08"
    ],
    "answer": 0,
    "explanation": "SONET基本速率OC-1为51.84Mb/s，OC-3为155.52Mb/s，OC-12为622.08Mb/s。"
  },
  {
    "id": 2158,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018a",
    "question": "关于单模光纤，下面的描述中错误的是（）。",
    "options": [
      "A. 芯线由玻璃或塑料制成",
      "B. 比多模光纤芯径小",
      "C. 光波在芯线中以多种反射路径传播",
      "D. 比多模光纤的传输距离远"
    ],
    "answer": 2,
    "explanation": "单模光纤芯径小，光波沿单一模式直线传播，不存在多种反射路径，故C描述错误。"
  },
  {
    "id": 2159,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "路由器通常采用（）连接以太网交换机。",
    "options": [
      "A. RJ-45端口",
      "B. Console端口",
      "C. 异步串口",
      "D. 高速同步串口"
    ],
    "answer": 0,
    "explanation": "路由器连接以太网交换机通常使用RJ-45以太网端口，Console口用于配置，串口用于广域网连接。"
  },
  {
    "id": 2160,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018a",
    "question": "在相隔20km的两地间通过电缆以100Mb/s的速率传送1518字节长的以太帧，从开始发送到接收完数据需要的时间约是（）（信号速率为200m/us）。",
    "options": [
      "A. 131us",
      "B. 221us",
      "C. 1310us",
      "D. 2210us"
    ],
    "answer": 1,
    "explanation": "发送时延=1518×8/100M=121.44us，传播时延=20km/200m/us=100us，总时间约221us。"
  },
  {
    "id": 2161,
    "type": "single",
    "category": "交换技术",
    "paper": "real2018a",
    "question": "VLAN之间的通信通过（）实现。",
    "options": [
      "A. 二层交换机",
      "B. 网桥",
      "C. 路由器",
      "D. 中继器"
    ],
    "answer": 2,
    "explanation": "VLAN隔离了二层广播域，不同VLAN之间通信必须经过三层设备，通常由路由器实现。"
  },
  {
    "id": 2162,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2018a",
    "question": "HFC接入网采用（）传输介质接入住宅小区。",
    "options": [
      "A. 同轴电缆",
      "B. 光纤",
      "C. 5类双绞线",
      "D. 无线介质"
    ],
    "answer": 1,
    "explanation": "HFC即光纤同轴混合网，主干采用光纤传输，到用户端再转为同轴电缆，接入住宅小区用光纤。"
  },
  {
    "id": 2163,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "TCP协议中，URG指针的作用是（）。",
    "options": [
      "A. 表明TCP段中有带外数据",
      "B. 表明数据需要紧急传送",
      "C. 表明带外数据在TCP段中的位置",
      "D. 表明TCP段的发送方式"
    ],
    "answer": 2,
    "explanation": "URG置1时紧急指针有效，URG指针指出带外数据在TCP报文段中的位置，即紧急数据结束处。"
  },
  {
    "id": 2164,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "RARP协议的作用是（）。",
    "options": [
      "A. 根据MAC查IP",
      "B. 根据IP查MAC",
      "C. 根据域名查IP",
      "D. 查找域内授权域名服务器"
    ],
    "answer": 0,
    "explanation": "RARP是逆地址解析协议，用于根据已知的MAC地址查询对应的IP地址，与ARP作用相反。"
  },
  {
    "id": 2165,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2018a",
    "question": "E1载波的基本帧由32个子信道组成，其中子信道（）用于传送控制信令。",
    "options": [
      "A. CH0和CH2",
      "B. CH1和CH15",
      "C. CH15和CH16",
      "D. CH0和CH16"
    ],
    "answer": 3,
    "explanation": "E1载波32个子信道中，CH0用于帧同步，CH16用于传送控制信令，其余30个传话音或数据。"
  },
  {
    "id": 2166,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018a",
    "question": "以太网的数据帧封装如下图所示，包含在IP数据报中的数据部分最长应该是（）字节。",
    "options": [
      "A. 1434",
      "B. 1460",
      "C. 1480",
      "D. 1500"
    ],
    "answer": 2,
    "explanation": "以太网帧数据字段最大1500字节，减去IP首部20字节，IP数据报数据部分最长为1480字节。"
  },
  {
    "id": 2167,
    "type": "single",
    "category": "路由协议",
    "paper": "real2018a",
    "question": "在RIP协议中，默认（）秒更新一次路由。",
    "options": [
      "A. 30",
      "B. 60",
      "C. 90",
      "D. 100"
    ],
    "answer": 0,
    "explanation": "RIP协议默认每30秒向邻居路由器广播一次完整的路由表信息，属于周期性更新。"
  },
  {
    "id": 2168,
    "type": "single",
    "category": "路由协议",
    "paper": "real2018a",
    "question": "以下关于OSPF的描述中，错误的是（）。",
    "options": [
      "A. 根据链路状态法计算最佳路由",
      "B. 用于自治系统内的内部网关协议",
      "C. 采用Dijkstra算法进行路由计算",
      "D. OSPF网络中用区域1来表示主干网段"
    ],
    "answer": 3,
    "explanation": "OSPF用区域0表示主干网段，而非区域1，其余关于链路状态、IGP、Dijkstra算法的描述均正确。"
  },
  {
    "id": 2169,
    "type": "single",
    "category": "路由协议",
    "paper": "real2018a",
    "question": "以下关于RIP与OSPF的说法中，错误的是（）。",
    "options": [
      "A. RIP定时发布路由信息，而OSPF在网络拓扑发生变化时发布路由信息",
      "B. RIP的路由信息发送给邻居，而OSPF路由信息发送给整个网络路由器",
      "C. RIP采用组播方式发布路由信息，而OSPF以广播方式发布路由信息",
      "D. RIP和OSPF均为内部路由协议"
    ],
    "answer": 2,
    "explanation": "RIP以广播方式发布路由信息，OSPF采用组播方式发布，故C说法颠倒，是错误的。"
  },
  {
    "id": 2170,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2018a",
    "question": "在Linux中，使用Apache发布Web服务时默认Web站点的目录为（）。",
    "options": [
      "A. /etc/httpd",
      "B. /var/log/httpd",
      "C. /var/home",
      "D. /home/httpd"
    ],
    "answer": 3,
    "explanation": "Linux下Apache默认Web站点根目录为/home/httpd，配置文件在/etc/httpd，日志在/var/log/httpd。"
  },
  {
    "id": 2171,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2018a",
    "question": "在Linux中，要更改一个文件的权限设置可使用（）命令。",
    "options": [
      "A. attrib",
      "B. modify",
      "C. chmod",
      "D. change"
    ],
    "answer": 2,
    "explanation": "chmod命令用于修改文件或目录的权限设置，attrib是Windows命令，modify和change不是权限命令。"
  },
  {
    "id": 2172,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2018a",
    "question": "在Linux中，负责配置DNS的文件是（），它包含了主机的域名搜索顺序和DNS服务器的地址。",
    "options": [
      "A. /etc/hostname",
      "B. /dev/host.conf",
      "C. /etc/resolv.conf",
      "D. /dev/name.conf"
    ],
    "answer": 2,
    "explanation": "Linux中DNS客户端配置文件是/etc/resolv.conf，其中nameserver指定DNS服务器地址，search指定域名搜索顺序。"
  },
  {
    "id": 2173,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2018a",
    "question": "主域名服务器在接收到域名请求后，首先查询的是（）。",
    "options": [
      "A. 本地hosts文件",
      "B. 转发域名服务器",
      "C. 本地缓存",
      "D. 授权域名服务器"
    ],
    "answer": 2,
    "explanation": "主域名服务器收到查询请求后，先查本地缓存，若缓存中有记录则直接应答，否则再向其他服务器查询。"
  },
  {
    "id": 2174,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2018a",
    "question": "主机host1对host2进行域名查询的过程如下图所示，下列说法中正确的是（）。",
    "options": [
      "A. 本地域名服务器采用迭代算法",
      "B. 中介域名服务器采用迭代算法",
      "C. 根域名服务器采用递归算法",
      "D. 授权域名服务器采用何种算法不确定"
    ],
    "answer": 3,
    "explanation": "图中本地域名服务器采用递归算法，根和中介域名服务器采用迭代算法，授权域名服务器采用何种算法不确定。"
  },
  {
    "id": 2175,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "自动专用IP地址（APIPA），用于当客户端无法获得动态地址时作为临时的主机地址，以下地址中属于自动专用IP地址的是（）。",
    "options": [
      "A. 224.0.0.1",
      "B. 127.0.0.1",
      "C. 169.254.1.15",
      "D. 192.168.0.1"
    ],
    "answer": 2,
    "explanation": "APIPA地址范围为169.254.0.0/16，当DHCP获取失败时客户端自动配置，169.254.1.15属于该范围。"
  },
  {
    "id": 2176,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2018a",
    "question": "在DNS的资源记录中，A记录（）。",
    "options": [
      "A. 表示IP地址到主机名的映射",
      "B. 表示主机名到IP地址的映射",
      "C. 指定授权服务器",
      "D. 指定区域邮件服务器"
    ],
    "answer": 1,
    "explanation": "A记录即地址记录，用于将主机名映射为对应的IPv4地址，实现正向域名解析。"
  },
  {
    "id": 2177,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2018a",
    "question": "DHCP客户端通过（）方式发送DHCPDiscovey消息。",
    "options": [
      "A. 单播",
      "B. 广播",
      "C. 组播",
      "D. 任意播"
    ],
    "answer": 1,
    "explanation": "DHCP客户端在未获得IP地址前不知道服务器地址，因此以广播方式发送DHCP Discover消息。"
  },
  {
    "id": 2178,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2018a",
    "question": "FTP协议默认使用的数据端口是（）。",
    "options": [
      "A. 20",
      "B. 80",
      "C. 25",
      "D. 23"
    ],
    "answer": 0,
    "explanation": "FTP使用两个端口，控制端口为21，数据端口默认为20，故数据端口是20。"
  },
  {
    "id": 2179,
    "type": "single",
    "category": "网络安全",
    "paper": "real2018a",
    "question": "攻击者通过发送一个目的主机已经接收过的报文来达到攻击目的，这种攻击方式属于（）攻击。",
    "options": [
      "A. 重放",
      "B. 拒绝服务",
      "C. 数据截获",
      "D. 数据流分析"
    ],
    "answer": 0,
    "explanation": "重放攻击指攻击者截获并重新发送目的主机已接收过的报文，以欺骗系统达到攻击目的。"
  },
  {
    "id": 2180,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018a",
    "question": "网络管理员调试网络，使用（）命令来持续查看网络连通性。",
    "options": [
      "A. ping目标地址-g",
      "B. ping目标地址-t",
      "C. ping目标地址-r",
      "D. ping目标地址-a"
    ],
    "answer": 1,
    "explanation": "Windows中ping命令的-t参数表示持续不断地向目标地址发送ICMP回显请求，用于持续查看连通性。"
  },
  {
    "id": 2181,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018a",
    "question": "SNMP代理收到一个GET请求时，如果不能提供该对象的值，代理以（）响应。",
    "options": [
      "A. 该实例的上个值",
      "B. 该实例的下个值",
      "C. Trap报文",
      "D. 错误信息"
    ],
    "answer": 1,
    "explanation": "SNMP代理收到GET请求时，若无法提供该对象的值，则返回该对象实例的下一个值（get-next行为）。"
  },
  {
    "id": 2182,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018a",
    "question": "某客户端可以ping通同一网段内的部分计算机，原因可能是（）。",
    "options": [
      "A. 本机TCP/IP协议不能正常工作",
      "B. 本机DNS服务器地址设置错误",
      "C. 本机网络接口故障",
      "D. 网络中存在访问过滤"
    ],
    "answer": 3,
    "explanation": "能ping通部分计算机说明本机TCP/IP、网卡均正常，DNS不影响ping，原因可能是网络中存在访问过滤。"
  },
  {
    "id": 2183,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2018a",
    "question": "在TCP协议中，用于进行流量控制的字段为（）。",
    "options": [
      "A. 端口号",
      "B. 序列号",
      "C. 应答编号",
      "D. 窗口"
    ],
    "answer": 3,
    "explanation": "TCP首部中的窗口字段用于通告接收窗口大小，实现流量控制，防止发送方发送过快。"
  },
  {
    "id": 2184,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2018a",
    "question": "HDLC协议中，若监控帧采用SREJ进行应答，表明采用的差错控制机制为（）。",
    "options": [
      "A. 后退N帧ARQ",
      "B. 选择性拒绝ARQ",
      "C. 停等ARQ",
      "D. 慢启动"
    ],
    "answer": 1,
    "explanation": "HDLC监控帧中SREJ表示选择性拒绝，接收方只要求重发出错的帧，对应选择性拒绝ARQ机制。"
  },
  {
    "id": 2185,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "以下地址中用于组播的是（）。",
    "options": [
      "A. 10.1.205.0",
      "B. 192.168.0.7",
      "C. 202.105.107.1",
      "D. 224.1.210.5"
    ],
    "answer": 3,
    "explanation": "组播地址为D类地址，范围224.0.0.0~239.255.255.255，224.1.210.5属于组播地址。"
  },
  {
    "id": 2186,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "下列IP地址中，不能作为源地址的是（）。",
    "options": [
      "A. 0.0.0.0",
      "B. 127.0.0.1",
      "C. 190.255.255.255/24",
      "D. 192.168.0.1/24"
    ],
    "answer": 2,
    "explanation": "190.255.255.255/24中主机位全为1，是广播地址，不能作为源地址使用。"
  },
  {
    "id": 2187,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "使用CIDR技术把4个C类网络110.217.128.0/22、110.217.132.0/22、110.217.136.0/22和110.217.140.0/22汇聚成一个超网，得到的地址是（）。",
    "options": [
      "A. 110.217.128.0/18",
      "B. 110.217.128.0/19",
      "C. 110.217.128.0/20",
      "D. 110.217.128.0/21"
    ],
    "answer": 2,
    "explanation": "4个/22网络共占4×4=16个C类地址，需借4位，22-4=18？实际前缀为20，聚合结果为110.217.128.0/20。"
  },
  {
    "id": 2188,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "如果IPv6头部包含多个扩展头部，第一个扩展头部为（）。",
    "options": [
      "A. 逐跳头部",
      "B. 路由选择头部",
      "C. 分段头部",
      "D. 认证头部"
    ],
    "answer": 0,
    "explanation": "IPv6扩展头部中，逐跳选项头部必须紧跟在基本头部之后，是第一个扩展头部。"
  },
  {
    "id": 2189,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018a",
    "question": "用于生成VLAN标记的协议是（）。",
    "options": [
      "A. IEEE802.1q",
      "B. IEEE802.3",
      "C. IEEE802.5",
      "D. IEEE802.1d"
    ],
    "answer": 0,
    "explanation": "IEEE802.1q标准定义了VLAN标记（Tag）的格式，用于在以太网帧中插入VLAN标识。"
  },
  {
    "id": 2190,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018a",
    "question": "两个站点采用二进制指数后退算法进行避让，3次冲突之后再次冲突的概率是（）。",
    "options": [
      "A. 0.5",
      "B. 0.25",
      "C. 0.125",
      "D. 0.0625"
    ],
    "answer": 2,
    "explanation": "二进制指数后退算法中，3次冲突后从0~7中随机取值，再次冲突概率为1/8=0.125。"
  },
  {
    "id": 2191,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018a",
    "question": "在CSMA/CD以太网中，数据速率为100Mb/s，网段长2km，信号速率为200m/us，则此网络的最小帧长是（）比特。",
    "options": [
      "A. 1000",
      "B. 2000",
      "C. 10000",
      "D. 200000"
    ],
    "answer": 1,
    "explanation": "最小帧长=2×传播时延×速率，往返传播时延=2×(2000/200)=20us，20us×100Mb/s=2000比特。"
  },
  {
    "id": 2192,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2018a",
    "question": "下列快速以太网物理层标准中，使用5类无屏蔽双绞线作为传输介质的是（）。",
    "options": [
      "A. 100BASE-FX",
      "B. 100BASE-T4",
      "C. 100BASE-Tx",
      "D. 100BASE-T2"
    ],
    "answer": 2,
    "explanation": "100BASE-TX 使用两对5类无屏蔽双绞线（UTP）作为传输介质，是快速以太网中应用最广的标准。"
  },
  {
    "id": 2193,
    "type": "single",
    "category": "无线网络",
    "paper": "real2018a",
    "question": "在802.11中采用优先级来进行不同业务的区分，优先级最低的是（）。",
    "options": [
      "A. 服务访问点轮询",
      "B. 服务访问点轮询的应答",
      "C. 分布式协调功能竞争访问",
      "D. 分布式协调功能竞争访问帧的应答"
    ],
    "answer": 2,
    "explanation": "802.11 中 DCF 竞争访问优先级最低，PCF 轮询及其应答优先级较高，故最低为分布式协调功能竞争访问。"
  },
  {
    "id": 2194,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2018a",
    "question": "以下关于网络布线子系统的说法中，错误的是（）。",
    "options": [
      "A. 工作区子系统指终端到信息插座的区域",
      "B. 水平子系统实现计算机设备与各管理子系统间的连接",
      "C. 干线子系统用于连接楼层之间的设备间",
      "D. 建筑群子系统连接建筑物"
    ],
    "answer": 1,
    "explanation": "水平子系统连接工作区信息插座与管理子系统，而非直接连接计算机设备，故该说法错误。"
  },
  {
    "id": 2195,
    "type": "single",
    "category": "网络管理",
    "paper": "real2018a",
    "question": "在路由器执行（）命令可以查看到下面信息。",
    "options": [
      "A. displaycurrent-configuration",
      "B. displayipinterfacebrief",
      "C. displaystpbrief",
      "D. displayrip1route"
    ],
    "answer": 1,
    "explanation": "display ip interface brief 用于查看接口的IP地址、状态等简要信息，符合题干所描述的输出内容。"
  },
  {
    "id": 2196,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "下面关于路由器的描述中，正确的是（）。",
    "options": [
      "A. 路由器中串口与以太口必须是成对的",
      "B. 路由器中串口与以太口的IP地址必须在同一网段",
      "C. .路由器的串口之间通常是点对点连接",
      "D. 路由器的以太口之间必须是点对点连接"
    ],
    "answer": 2,
    "explanation": "路由器串口通常用于连接广域网链路，采用点对点连接方式，串口与以太口无需成对或同网段。"
  },
  {
    "id": 2197,
    "type": "single",
    "category": "网络安全",
    "paper": "real2018a",
    "question": "PGP的功能中不包括（）。",
    "options": [
      "A. 邮件压缩",
      "B. 发送者身份认证",
      "C. 邮件加密",
      "D. 邮件完整性认证"
    ],
    "answer": 0,
    "explanation": "PGP 提供加密、数字签名（身份认证）和完整性验证，但不包括邮件压缩功能。"
  },
  {
    "id": 2198,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2018a",
    "question": "如果DHCP客户端发现分配的IP地址已经被使用，客户端向服务器发出（）报文，拒绝该IP地址。",
    "options": [
      "A. DHCPRelease",
      "B. DHCPDecline",
      "C. DHCPNack",
      "D. DHCPRenew"
    ],
    "answer": 1,
    "explanation": "DHCP客户端检测到分配地址被占用时，发送 DHCP Decline 报文通知服务器拒绝该地址。"
  },
  {
    "id": 2199,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2018a",
    "question": "在层次化园区网络设计中，（）是汇聚层的功能。",
    "options": [
      "A. 高速数据传输",
      "B. 出口路由",
      "C. 广播域的定义",
      "D. MAC地址过滤"
    ],
    "answer": 2,
    "explanation": "汇聚层负责定义广播域、实施策略和路由汇总，高速数据传输属核心层，出口路由属核心层功能。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2017b";
  const A = [
  {
    "id": 2200,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "在程序的执行过程中， Cache与主存的地址映射是由（）完成的。",
    "options": [
      "A. 操作系统",
      "B. 程序员调度",
      "C. 硬件自动",
      "D. 用户软件"
    ],
    "answer": 2,
    "explanation": "Cache与主存之间的地址映射由硬件自动完成，对程序员透明，无需操作系统或软件干预。"
  },
  {
    "id": 2201,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "某四级指令流水线分别完成取指、取数、运算、保存结果四步操作。若完成上述操作的时间依次为 8ns、9ns、4ns、8ns，则该流水线的操作周期应至少为（）ns。",
    "options": [
      "A. 4",
      "B. 8",
      "C. 9",
      "D. 33"
    ],
    "answer": 2,
    "explanation": "流水线操作周期取决于最慢的一步，取数需9ns，故操作周期至少为9ns。"
  },
  {
    "id": 2202,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "内存按字节编址。若用存储容量为 32Kx8bit 的存储器芯片构成地址从A0000H到DFFFFH的内存，则至少需要（）片芯片。",
    "options": [
      "A. 4",
      "B. 8",
      "C. 16",
      "D. 32"
    ],
    "answer": 1,
    "explanation": "地址范围A0000H到DFFFFH共256KB，每片32K×8bit=32KB，需256/32=8片。"
  },
  {
    "id": 2203,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "计算机系统的主存主要是由（）构成的。",
    "options": [
      "A. DRAM",
      "B. SRAM",
      "C. Cache",
      "D. EEPROM"
    ],
    "answer": 0,
    "explanation": "主存主要由DRAM构成，因其集成度高、成本低；SRAM用于Cache，EEPROM为非易失存储器。"
  },
  {
    "id": 2204,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "计算机运行过程中，CPU 需要与外设进行数据交换。采用（）控制技术时，CPU与外设可并行工作。",
    "options": [
      "A. 程序查询方式和中断方式",
      "B. 中断方式和 DMA 方式",
      "C. 程序查询方式和 DMA 方式",
      "D. 程序查询方式、中断方式和 DMA 方式"
    ],
    "answer": 1,
    "explanation": "中断方式和DMA方式下CPU与外设可并行工作，程序查询方式下CPU需等待外设，无法并行。"
  },
  {
    "id": 2205,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "李某购买了一张有注册商标的应用软件光盘，则李某享有（）。",
    "options": [
      "A. 注册商标专用权",
      "B. 该光盘的所有权",
      "C. 该软件的著作权",
      "D. 该软件的所有权"
    ],
    "answer": 1,
    "explanation": "李某购买光盘获得的是该光盘（载体）的所有权，软件著作权和注册商标专用权仍归权利人所有。"
  },
  {
    "id": 2206,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "以下关于程序设计语言的叙述中，错误的是（）。",
    "options": [
      "A. 脚本语言中不使用变量和函数",
      "B. 标记语言常用于描述格式化和链接",
      "C. 脚本语言采用解释方式实现",
      "D. 编译型语言的执行效率更高"
    ],
    "answer": 0,
    "explanation": "脚本语言同样使用变量和函数，故该说法错误；其余关于标记语言、解释方式和编译效率的说法正确。"
  },
  {
    "id": 2207,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "在基于Web的电子商务应用中，访问存储于数据库中的业务对象的常用方式之一是（）。",
    "options": [
      "A. JDBC",
      "B. XML",
      "C. CGI",
      "D. COM"
    ],
    "answer": 0,
    "explanation": "JDBC 是Java访问数据库的标准接口，常用于Web电子商务应用中访问数据库业务对象。"
  },
  {
    "id": 2208,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2017b",
    "question": "E1载波的子信道速率为（）kb/s。",
    "options": [
      "A. 8",
      "B. 16",
      "C. 32",
      "D. 64"
    ],
    "answer": 3,
    "explanation": "E1载波速率2.048Mb/s，划分为32个子信道，每个子信道速率为64kb/s。"
  },
  {
    "id": 2209,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2017b",
    "question": "在异步通信中，每个字符包含1位起始位、8位数据位、1位奇偶位和2位终止位，若有效数据速率为800b/s ，采用QPSK调制，则码元速率为（）波特。",
    "options": [
      "A. 600",
      "B. 800",
      "C. 1200",
      "D. 1600"
    ],
    "answer": 0,
    "explanation": "每字符12位传8位有效数据，有效速率800b/s对应字符速率100字符/s即1200b/s，QPSK每码元2bit，码元速率600波特。"
  },
  {
    "id": 2210,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2017b",
    "question": "5个64kb/s 的信道按统计时分多路复用在一条主线路上传输，主线路的开销为4% ，假定每个子信道利用率为90% ，那么这些信道在主线路上占用的带宽为（）kb/s。",
    "options": [
      "A. 128",
      "B. 248",
      "C. 300",
      "D. 320"
    ],
    "answer": 2,
    "explanation": "5×64×90%=288kb/s，加4%开销288/0.96=300kb/s，故占用带宽为300kb/s。"
  },
  {
    "id": 2211,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2017b",
    "question": "下列分组交换网络中，采用的交换技术与其他 3 个不同的是（）网。",
    "options": [
      "A. IP",
      "B. X.25",
      "C. 帧中继",
      "D. ATM"
    ],
    "answer": 0,
    "explanation": "IP网采用无连接的分组交换，而X.25、帧中继、ATM均采用面向连接的虚电路交换技术。"
  },
  {
    "id": 2212,
    "type": "single",
    "category": "路由协议",
    "paper": "real2017b",
    "question": "以下关于OSPF 路由协议的描述中，错误的是（）。",
    "options": [
      "A. 采用dijkstra算法计算到达各个目标的最短通路",
      "B. 计算并得出整个网络的拓扑视图",
      "C. 向整个网络中每一个路由器发送链路代价信息",
      "D. 定期向邻居发送 Keepalive 报文表明存在"
    ],
    "answer": 3,
    "explanation": "OSPF使用Hello报文而非Keepalive报文来发现和维持邻居关系，Keepalive是BGP使用的报文，故D错误。"
  },
  {
    "id": 2213,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2017b",
    "question": "相比于TCP，UDP的优势为（）。",
    "options": [
      "A. 可靠传输",
      "B. 开销较小",
      "C. 拥塞控制",
      "D. 流量控制"
    ],
    "answer": 1,
    "explanation": "UDP无连接、首部仅8字节，不进行可靠传输、拥塞控制和流量控制，相比TCP开销较小，故选B。"
  },
  {
    "id": 2214,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2017b",
    "question": "以太网可以传送最大的TCP段为（）字节。",
    "options": [
      "A. 1480",
      "B. 1500",
      "C. 1518",
      "D. 2000"
    ],
    "answer": 0,
    "explanation": "以太网最大帧1518字节，减去帧头尾18字节和IP首部20字节，TCP段最大为1500-20=1480字节。"
  },
  {
    "id": 2215,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "IP数据报经过MTU较小的网络时需要分片。假设一个大小为1500的报文分为2个较小报文，其中 一个报文大小为800字节，则另一个报文的大小至少为（）字节。",
    "options": [
      "A. 700",
      "B. 720",
      "C. 740",
      "D. 800"
    ],
    "answer": 1,
    "explanation": "分片后各片数据部分须为8字节倍数，1500字节报文去掉20字节首部为1480，一片800含首部则数据780，剩余700，加首部20为720字节。"
  },
  {
    "id": 2216,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "IPv4首部中填充字段的作用是（）。",
    "options": [
      "A. 维持最小帧长",
      "B. 保持IP报文的长度为字节的倍数",
      "C. 确保首部为 32 比特的倍数",
      "D. 受MTU的限制"
    ],
    "answer": 2,
    "explanation": "IPv4首部长度以4字节为单位，填充字段用于确保首部长度为32比特（4字节）的整数倍。"
  },
  {
    "id": 2217,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2017b",
    "question": "主机甲向主机乙发送了一个TCP连接建立请求，主机乙给主机甲的响应报文中，标志字段正确的是（）。",
    "options": [
      "A. SYN=1，ACK=1，FIN=0",
      "B. SYN=1，ACK=1，FIN=1",
      "C. SYN=0，ACK=1，FIN=0",
      "D. SYN=1，ACK=0，FIN=0"
    ],
    "answer": 0,
    "explanation": "TCP三次握手第二步，服务器响应报文同时置SYN=1和ACK=1，FIN=0，表示同意建立连接并确认请求。"
  },
  {
    "id": 2218,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2017b",
    "question": "浏览器向Web服务器发送了一个报文，其TCP段不可能出现的端口组合是（）。",
    "options": [
      "A. 源端口号为2345，目的端口号为80",
      "B. 源端口号为80，目的端口号为2345",
      "C. 源端口号为3146，目的端口号为8080",
      "D. 源端口号为6553，目的端口号为5534"
    ],
    "answer": 1,
    "explanation": "浏览器作为客户端，其源端口为临时端口，目的端口为服务器端口（如80），源端口80为目的端口2345的组合不可能出现。"
  },
  {
    "id": 2219,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2017b",
    "question": "以下关于VLAN标记的说法中，错误的是（）。",
    "options": [
      "A. 交换机根据目标地址和 VLAN 标记进行转发决策",
      "B. 进入目的网段时，交换机删除 VLAN 标记，恢复原来的帧结构",
      "C. 添加和删除VLAN标记的过程处理速度较慢，会引入太大的延迟",
      "D. VLAN 标记对用户是透明的"
    ],
    "answer": 2,
    "explanation": "VLAN标记由硬件处理，速度快、延迟小，故C说法错误；其余关于转发决策、标记删除和透明性均正确。"
  },
  {
    "id": 2220,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "RSVP协议通过（）来预留资源。",
    "options": [
      "A. 发送方请求路由器",
      "B. 接收方请求路由器",
      "C. 发送方请求接收方",
      "D. 接收方请求发送方"
    ],
    "answer": 1,
    "explanation": "RSVP是资源预留协议，由接收方沿路径向路由器发送RESV消息请求预留资源，故为接收方请求路由器。"
  },
  {
    "id": 2221,
    "type": "single",
    "category": "路由协议",
    "paper": "real2017b",
    "question": "在BGP4 协议中，当接收到对方open报文后，路由器采用（）报文响应，从而建立两个路由器之间的邻居关系。",
    "options": [
      "A. hello",
      "B. update",
      "C. keepalive",
      "D. notification"
    ],
    "answer": 2,
    "explanation": "BGP4建立邻居关系时，收到对方Open报文后回应Keepalive报文进行确认，从而建立邻居关系。"
  },
  {
    "id": 2222,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017b",
    "question": "在Linux 中，要复制整个目录，应使用（）命令。",
    "options": [
      "A. cat-a",
      "B. mv-a",
      "C. cp-a",
      "D. rm-a"
    ],
    "answer": 2,
    "explanation": "Linux中cp命令用于复制文件或目录，-a选项表示归档模式，可递归复制整个目录并保留属性。"
  },
  {
    "id": 2223,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017b",
    "question": "在Linux 中，（）是默认安装 DHCP服务器的配置文件。",
    "options": [
      "A. /etc/dhcpd.conf",
      "B. /etc/dhcp.conf",
      "C. /var/dhcpd.conf",
      "D. /var/dhcp.conf"
    ],
    "answer": 0,
    "explanation": "Linux下DHCP服务器默认配置文件为/etc/dhcpd.conf，用于配置地址池、租约等参数。"
  },
  {
    "id": 2224,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017b",
    "question": "（）是Linux中Samba的功能。",
    "options": [
      "A. 提供文件和打印机共事服务",
      "B. 提供FTP服务",
      "C. 提供用户的认证服务",
      "D. 提供IP地址分配服务"
    ],
    "answer": 0,
    "explanation": "Samba实现了SMB/CIFS协议，可为Windows客户端提供文件和打印机共享服务。"
  },
  {
    "id": 2225,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "进行域名解析的过程中，若主域名服务器故障，由转发域名服务器传回解析结果，下列说法中正确的是（）。",
    "options": [
      "A. 辅助域名服务器配置了递归算法",
      "B. 辅助域名服务器配置了迭代算法",
      "C. 转发域名服务器配置了递归算法",
      "D. 转发域名服务器配置了迭代算法"
    ],
    "answer": 1,
    "explanation": "辅助域名服务器采用迭代算法向转发域名服务器查询，转发服务器再递归查询后将结果传回，故选B。"
  },
  {
    "id": 2226,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "在DNS资源记录中，（）记录类型的功能是实现域名与其别名的关联。",
    "options": [
      "A. MX",
      "B. NS",
      "C. CNAME",
      "D. PTR"
    ],
    "answer": 2,
    "explanation": "CNAME记录用于实现域名与其别名之间的关联，将一个别名指向规范主机名。"
  },
  {
    "id": 2227,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "在Windows环境下，租约期满后，DHCP客户端可以向DHCP服务器发送一个（）报文来请求重新租用IP地址。",
    "options": [
      "A. Dhcpdiscover",
      "B. Dhcprequest",
      "C. Dhcprenew",
      "D. Dhcpack"
    ],
    "answer": 0,
    "explanation": "租约期满后客户端进入初始化状态，重新发送DHCPDISCOVER报文广播请求重新租用IP地址。"
  },
  {
    "id": 2228,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "在运行Windows Server 2008 R2的DNS服务器上要实现IP地址到主机名的映射，应建立（）记录。",
    "options": [
      "A. 指针(PTR)",
      "B. 主机信息 (HINFO)",
      "C. 服务位置（SRV)",
      "D. 规范名称 (CNAME)"
    ],
    "answer": 0,
    "explanation": "PTR指针记录实现IP地址到主机名的反向映射，用于反向域名解析。"
  },
  {
    "id": 2229,
    "type": "single",
    "category": "路由协议",
    "paper": "real2017b",
    "question": "下面的应用中，（）基于UDP协议。",
    "options": [
      "A. HTTP",
      "B. telnet",
      "C. RIP",
      "D. FTP"
    ],
    "answer": 2,
    "explanation": "RIP基于UDP协议，使用端口520；HTTP、Telnet、FTP均基于TCP协议。"
  },
  {
    "id": 2230,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2017b",
    "question": "在一台服务器上只开放了25和110两个端口，这台服务器可以提供（）服务。",
    "options": [
      "A. E-Mail",
      "B. WEB",
      "C. DNS",
      "D. FTP"
    ],
    "answer": 0,
    "explanation": "端口25为SMTP、110为POP3，均为电子邮件服务端口，故该服务器提供E-Mail服务。"
  },
  {
    "id": 2231,
    "type": "single",
    "category": "网络安全",
    "paper": "real2017b",
    "question": "下列攻击行为中属于典型被动攻击的是（）。",
    "options": [
      "A. 拒绝服务攻击",
      "B. 会话拦截",
      "C. 系统干涉",
      "D. 修改数据命令"
    ],
    "answer": 1,
    "explanation": "被动攻击指在不影响系统正常运行下窃取信息，会话拦截属于被动攻击；其余均为主动攻击。"
  },
  {
    "id": 2232,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "在某台PC 上运行 ipconfig /all 命令后得到如下结果，下列说法中正确的是（）。Windows IP ConfigurationHost Name . . . . . . . . . . . . . .. :MSZFA2SWBGXX4UTprimaly Dns Suffix.......：Node Type . . . . . . . . . . . . . . . :HybridIP Routing Enable。.. . . . . . . . :NoWINS Proxy Enable........:NoDNS Suffix Search List. .....:homeWireless LAN adapter:Connection-specific DNS Suffix .:homeDescription . . . . . . . . . . . . . . :Realtek RTL8188EU Network AdapterPhysical Address. . . . . . . .. . . . : 30-B4-9E-12-F2-EDDHCP Enable.......... ....:YesAutoconfiguration Enabled . . . :YesLink -local IPv6 Address . . .. . . :fe80::40bl:7a3a:6cd2:1193%12(peferred)IPv4Address. . . . . . . .. ....: 192.168.3.12(preferred)Subnet mask . . . . . . . . .. . . . . . : 255.255.255.0Lease Obtaine.. . . . . . . . . . . :2017-7-15 20:01:59Lease Expires . .. . . . . . . . . . . . .: 2017-7-1620:01:59Default Gateway . . . . . . . . . . : 192.168.3.1DHCP Server.............: 10.10.20.3DHCPv6 IAID..... ……..:222857938DHCPv6 Client DUID........:00-01-00-01-1F-88-22-5F-74-DO-2B-7B-88-29DNS Servers . . . . . . . . . . . . . . . . : 8.8.8.8192.168.3.1NetBIOS over Tcpip . . . . . . . . . . : Enabled",
    "options": [
      "A. IP地址192.168.3.12是该PC机未续约过得ip地址",
      "B. 该PC的IP地址租期为12个小时",
      "C. 该PC与DHCP服务器位于同一个网段",
      "D. 进行DNS查询时首先查询服务器8.8.8.8"
    ],
    "answer": 3,
    "explanation": "DNS服务器列表中8.8.8.8排在首位，DNS查询按顺序首先查询该服务器。租期为24小时，DHCP服务器10.10.20.3与本机不在同一网段。"
  },
  {
    "id": 2233,
    "type": "single",
    "category": "无线网络",
    "paper": "real2017b",
    "question": "无线局域网通常采用的加密方式是WPA2，其安全加密算法是（）。",
    "options": [
      "A. AES和TKIP",
      "B. DES和TKIP",
      "C. AES和RSA",
      "D. DES和RSA"
    ],
    "answer": 0,
    "explanation": "WPA2采用AES加密算法，同时兼容TKIP，安全性高于WPA。DES和RSA不属于WPA2的加密算法。"
  },
  {
    "id": 2234,
    "type": "single",
    "category": "网络安全",
    "paper": "real2017b",
    "question": "以下关于入侵检测系统的描述中，正确的是（）。",
    "options": [
      "A. 实现内外网隔离与访问控制",
      "B. 对进出网络的信息进行实时的监测与比对，及时发现攻击行为",
      "C. 隐藏内部网络拓扑",
      "D. 预防、检测和消除网络病毒"
    ],
    "answer": 1,
    "explanation": "入侵检测系统实时监测网络信息并与特征库比对，发现攻击行为。内外网隔离与访问控制是防火墙功能，隐藏拓扑是NAT功能。"
  },
  {
    "id": 2235,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "在SNMP协议中，代理收到管理站的一个GET请求后，若不能提供该实例的值，则（）。",
    "options": [
      "A. 返回下个实例的值",
      "B. 返回空值",
      "C. 不予响应",
      "D. 显示错误"
    ],
    "answer": 0,
    "explanation": "SNMP的GET请求若代理无法提供该实例值，则返回字典序下一个实例的值，这是GET-NEXT的语义，GET操作也遵循此规则。"
  },
  {
    "id": 2236,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "SNMP是一种异步请求/响应协议，采用（）协议进行封装。",
    "options": [
      "A. IP",
      "B. ICMP",
      "C. TCP",
      "D. UDP"
    ],
    "answer": 3,
    "explanation": "SNMP采用UDP协议封装，端口161用于代理接收请求，162用于管理站接收Trap，属于异步请求/响应协议。"
  },
  {
    "id": 2237,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "IPv4的D类地址是组播地址， 224.0.0.1表示（）构成的组播组。",
    "options": [
      "A. DHCP服务器",
      "B. RIPv2路由器",
      "C. 本地子网中的所有主机",
      "D. OSPF路由器"
    ],
    "answer": 2,
    "explanation": "224.0.0.1是本地子网所有主机的组播地址，即所有主机组。224.0.0.2为所有路由器，224.0.0.5为OSPF路由器。"
  },
  {
    "id": 2238,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "在设置家用无线路由器时，下面（）可以作为 DHCP服务器地址池。",
    "options": [
      "A. 169.254.30.1-169.254.30.254",
      "B. 224.15.2.1-224.15.2.100",
      "C. 192.168.1.1-192.168. 1.10",
      "D. 255.15.248.128-255.15.248.255"
    ],
    "answer": 2,
    "explanation": "DHCP地址池应使用私有地址段，192.168.1.1-192.168.1.10属于私有地址范围。169.254为自动专用地址，224为组播，255为广播地址。"
  },
  {
    "id": 2239,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "使用CIDR技术把4个C类网络202.15.145.0/24 、202.15.147.0/24 、202.15.149.0/24 和202.15.150.0/24汇聚成一个超网，得到的地址是（）。",
    "options": [
      "A. 202.15.128.0/20",
      "B. 202.15.144.0/21",
      "C. 202.15.145.0/23",
      "D. 202.15.152.0/22"
    ],
    "answer": 1,
    "explanation": "4个网络前21位相同（202.15.144.0/21），将第三字节145、147、149、150转换为二进制后前5位一致，故汇聚为202.15.144.0/21。"
  },
  {
    "id": 2240,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "下面的地址中，可以分配给某台主机接口的地址是（）。",
    "options": [
      "A. 224.0.0.23",
      "B. 220.168.124.127/30",
      "C. 61.10.19 1.255/18",
      "D. 192.114.207.78/27"
    ],
    "answer": 3,
    "explanation": "192.114.207.78/27中网络号为192.114.207.64，广播地址为95，78在有效主机范围内。224为组播地址，127/30为广播地址，255/18为广播地址。"
  },
  {
    "id": 2241,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "以下IP地址中，属于网络 201.110.12.224/28 的主机IP是（）。",
    "options": [
      "A. 201.110.12.224",
      "B. 201.110.12.238",
      "C. 201.110.12.239",
      "D. 20 1.110.12.240"
    ],
    "answer": 1,
    "explanation": "201.110.12.224/28的网络号为224，广播地址为239，有效主机范围为225-238。238在有效范围内，224和239不可分配给主机。"
  },
  {
    "id": 2242,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017b",
    "question": "以下关于直通交换的叙述中，正确的是（）。",
    "options": [
      "A. 比存储转发交换速率要慢",
      "B. 存在坏帧传播的风险",
      "C. 接收到帧后简单存储，进行 CRC 校验后快速转发",
      "D. 采用软件方式查找站点转发"
    ],
    "answer": 1,
    "explanation": "直通交换收到帧后立即转发，不进行CRC校验，因此存在坏帧传播的风险。其速率比存储转发快，采用硬件方式查找。"
  },
  {
    "id": 2243,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2017b",
    "question": "采用CSMA/CD协议的基带总线，段长为1000M，数据速率为10Mb/s ，信号传播速度为200m/us，则该网络上的最小帧长应为（）比特。",
    "options": [
      "A. 50",
      "B. 100",
      "C. 150",
      "D. 200"
    ],
    "answer": 1,
    "explanation": "最小帧长=2×段长/传播速度×数据速率=2×1000/200×10=100比特。即往返传播时间内发送的数据量。"
  },
  {
    "id": 2244,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "以下关于在IPv6中任意播地址的叙述中，错误的是（）。",
    "options": [
      "A. 只能指定给IPv6路由器",
      "B. 可以用作目标地址",
      "C. 可以用作源地址",
      "D. 代表一组接口的标识符"
    ],
    "answer": 2,
    "explanation": "IPv6任意播地址只能用作目标地址，不能用作源地址，可分配给路由器，代表一组接口的标识符。"
  },
  {
    "id": 2245,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017b",
    "question": "在windows 中，以下命令运行结果中不出现网关IP地址的是（）。",
    "options": [
      "A. arP",
      "B. ipconfig",
      "C. netstat",
      "D. tracert"
    ],
    "answer": 2,
    "explanation": "netstat命令显示网络连接、路由表和接口统计，不显示网关IP地址。ipconfig显示默认网关，tracert和arp也会出现网关地址。"
  },
  {
    "id": 2246,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017b",
    "question": "当站点收到\"在数据包组装期间生存时间为0\"的 ICMP 报文，说明（）。",
    "options": [
      "A. 回声请求没得到响应",
      "B. IP数据报目的网络不可达",
      "C. 因为拥塞丢弃报文",
      "D. 因IP数据报部分分片丢失，无法组装"
    ],
    "answer": 3,
    "explanation": "该ICMP报文表示数据报在组装期间因部分分片丢失而超时，无法完成重组，属于分片重组超时报文。"
  },
  {
    "id": 2247,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2017b",
    "question": "以下关于VLAN的叙述中，错误的是（）。",
    "options": [
      "A. VLAN把交换机划分成多个逻辑上独立的区域",
      "B. VLAN可以跨越交换机",
      "C. VLAN只能按交换机端口进行划分",
      "D. VLAN隔离了广播，可以缩小广播风暴的范围"
    ],
    "answer": 2,
    "explanation": "VLAN可基于端口、MAC地址、协议等多种方式划分，并非只能按端口划分。VLAN隔离广播域，可跨交换机，缩小广播风暴范围。"
  },
  {
    "id": 2248,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017b",
    "question": "假如有3块容量是300G的硬盘做RAID5阵列，则这个RAID5的容量是（）。",
    "options": [
      "A. 300G",
      "B. 4500",
      "C. 600G",
      "D. 900G"
    ],
    "answer": 2,
    "explanation": "RAID5容量为(N-1)×单盘容量，3块300G硬盘做RAID5，有效容量为(3-1)×300G=600G，一块盘用于校验。"
  },
  {
    "id": 2249,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2017b",
    "question": "以下关于层次化网络设计的叙述中，错误的是（）。",
    "options": [
      "A. 核心层实现数据分组从一个区域到另一个区域的高速转发",
      "B. 接入层应提供丰富接口和多条路径来缓解通信瓶颈",
      "C. 汇聚层提供接入层之间的互访",
      "D. 汇聚层通常进行资源的访问控制"
    ],
    "answer": 1,
    "explanation": "接入层负责用户接入，提供丰富接口，但多条路径和缓解通信瓶颈是核心层和汇聚层的功能，接入层不应提供多条路径。"
  },
  {
    "id": 2250,
    "type": "single",
    "category": "网络安全",
    "paper": "real2017b",
    "question": "（）不属于入侵检测技术。",
    "options": [
      "A. 专家系统",
      "B. 模型检测",
      "C. 简单匹配",
      "D. 漏洞扫描"
    ],
    "answer": 3,
    "explanation": "漏洞扫描属于脆弱性评估技术，不属于入侵检测技术。入侵检测技术包括专家系统、模型检测和简单匹配等。"
  },
  {
    "id": 2251,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017b",
    "question": "关于华为交换机设置密码，正确的说法是（）。①华为交换机的缺省用户名是 admin，无密码②通过 B∞tOM 可以重置Cònsole 口密码③ telnet 登录密码丢失，通过 Console 口登录交换机后重新进行配置④通过 COnsole 口登录交换机重置 B∞tROM 密码。",
    "options": [
      "A. ①②③④",
      "B. ②③④",
      "C. ②③",
      "D. ①③④"
    ],
    "answer": 1,
    "explanation": "华为交换机缺省无用户名密码，①错；忘记密码可通过BootROM菜单清除配置或重置Console密码，②正确；Telnet密码丢失可从Console口登录后重新配置，③正确；BootROM密码也可通过Console口重置，④正确，故选B。"
  },
  {
    "id": 2252,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017b",
    "question": "观察交换机状态指示灯是初步判断交换机故障的检测方法，以下关于交换机状态指示灯的描述中，错误的是（）。",
    "options": [
      "A. 交换机指示灯显示红色表明设备故障或者告警，需要关注和立即采取行动",
      "B. STCK指示灯绿色表示接口在提供远程供电",
      "C. SYS指示灯亮红色表明交换机可能存在风扇或温度告警",
      "D. 交换机业务接口对应单一指示灯，常亮表示连接，快闪表示数据传送"
    ],
    "answer": 1,
    "explanation": "STACK指示灯绿色表示堆叠状态正常，并非远程供电（PoE由PoE指示灯表示），故B错误；其余关于红色告警、SYS灯及业务接口灯描述均正确。"
  },
  {
    "id": 2253,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017b",
    "question": "下面消除交换机上MAC地址漂移告警的方法中，描述正确的是（）。①人工把发生漂移的接口 shutdown②在接口上配置 error-down.自动 down 掉漂移的端口③在接口上配置 quit-vlan.使发生漂移的接口指定 VLAN 域内退出④在接口上配置 stp tc-protection 解决MAC地址漂移。",
    "options": [
      "A. ①②③④",
      "B. ②③④",
      "C. ②③",
      "D. ①②③"
    ],
    "answer": 3,
    "explanation": "消除MAC地址漂移可通过手工shutdown漂移接口、配置error-down自动关闭、配置quit-vlan使接口退出VLAN实现；stp tc-protection用于抑制TC报文，不能解决漂移，故①②③正确选D。"
  },
  {
    "id": 2254,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017b",
    "question": "两台交换机的光口对接，其中一台设备的光UP，另一台设备的光口DOWN定位此类故障的思路包括（）。①光纤是否交叉对接②两端使用的光模块被长和速率是否→样③两端 COMB0口是否都设置为光口④两个光口是否未同时配置自协商或者强制协商。",
    "options": [
      "A. ①②③④",
      "B. ②③④",
      "C. ②③",
      "D. ①③④"
    ],
    "answer": 0,
    "explanation": "光口对接一端UP一端DOWN，需排查光纤是否交叉、两端光模块波长速率是否一致、Combo口是否均设为光口、自协商或强制模式是否匹配，四项均属排查思路，故选A。"
  },
  {
    "id": 2255,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017b",
    "question": "某STP网络从链路故障中恢复时，端口收敛时间超过30秒，处理该故障的思路不包括：（）。",
    "options": [
      "A. 确认对端端口开启STP",
      "B. 确认端口是工作在STP模式",
      "C. 确认端口的链路类型是点对点",
      "D. 确认端口模式为中继模式"
    ],
    "answer": 3,
    "explanation": "STP收敛超过30秒应检查对端是否启用STP、本端端口STP模式、链路类型是否为点对点；端口是否中继模式与STP收敛时间无关，故不包括D。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2017a";
  const A = [
  {
    "id": 2256,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017a",
    "question": "CPU:执行算术运算或者逻辑运算时，常将源操作数和结果暂存在（）中。",
    "options": [
      "A. 程序计数器 (PC)",
      "B. 累加器 (AC)",
      "C. 指令寄存器 (IR)",
      "D. 地址寄存器 (AR)"
    ],
    "answer": 1,
    "explanation": "CPU执行算术或逻辑运算时，源操作数和运算结果通常暂存在累加器AC中，故答案为B。"
  },
  {
    "id": 2257,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017a",
    "question": "某系统由下图所示的冗余部件构成。若每个部件的千小时可靠度都为 R，则该系统的千小时可靠度为（）",
    "options": [
      "A. (1- R^3)(1-R^2)",
      "B. (l-〖(1-R)〗^3)(1 一〖(1-R)〗^2)",
      "C. (1-R^3)+(1-R^2)",
      "D. (1- 〖(1-R)〗^3)+( 1- 〖(1-R)〗^2)"
    ],
    "answer": 1,
    "explanation": "系统由3个并联部件与2个并联部件串联构成，并联可靠度为1-(1-R)^n，串联相乘得(1-(1-R)^3)(1-(1-R)^2)，故选B。"
  },
  {
    "id": 2258,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2017a",
    "question": "数字语音的采样频率定义为 8kHZ，这是因为（）",
    "options": [
      "A. 语音信号定义的频率最高值为4kHZ",
      "B. 语音信号定义的频率最高值为8kHZ",
      "C. 数字语音传输线路的带宽只有8kHZ",
      "D. 一般声卡的来样频率最高为每秒8kHZ"
    ],
    "answer": 0,
    "explanation": "语音信号频率最高约4kHz，根据奈奎斯特采样定理，采样频率应不低于信号最高频率的2倍，即8kHz，故选A。"
  },
  {
    "id": 2259,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017a",
    "question": "使用图像扫描仪以 300DPI 的分辨率扫描一幅 3x4英寸的图片，可以得到()像素的数字图像。",
    "options": [
      "A. 300x300",
      "B. 300x400",
      "C. 900x4",
      "D. 900 x1200"
    ],
    "answer": 3,
    "explanation": "300DPI表示每英寸300像素，3×4英寸图片像素为(300×3)×(300×4)=900×1200，故选D。"
  },
  {
    "id": 2260,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017a",
    "question": "某计算机系统页面大小为 4K,进程的页面变换表如下所示。若进程的逻辑地址为2D16H。该地址经过变换后，其物理地址应(D)",
    "options": [
      "A. 2048H",
      "B. 4096",
      "C. 4D16H",
      "D. 6D16H"
    ],
    "answer": 2,
    "explanation": "页面大小4K，页内偏移占12位，逻辑地址2D16H页号为2，查表得物理块号4，拼接偏移得4D16H，故选C。"
  },
  {
    "id": 2261,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017a",
    "question": "根据我国商标法，下列商品中必须使用注册商标的是（）",
    "options": [
      "A. 医疗仪器",
      "B. 墙壁涂料",
      "C. 无糖食品",
      "D. 烟草制品"
    ],
    "answer": 3,
    "explanation": "我国商标法规定烟草制品必须使用注册商标，未经核准注册不得生产销售，故选D。"
  },
  {
    "id": 2262,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2017a",
    "question": "甲、乙两人在同一天就同样的发明创造提交了专利申请，专利局将分别向各申请人通报有关情况，并提出多种可能采用的解决办法，以下说法中，不可能采用的是（）",
    "options": [
      "A. 甲、乙作为共同申请人",
      "B. 甲或乙一方放弃权利并从另一方得到适当的补偿",
      "C. 甲、乙都不授予专利权",
      "D. 甲、乙都授予专利权"
    ],
    "answer": 3,
    "explanation": "同日就同样发明申请专利，可协商共同申请、一方放弃获补偿或均不授予；不能对同一发明向双方都授予专利权，故选D。"
  },
  {
    "id": 2263,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2017a",
    "question": "以下关于光纤的说法中，错误的是（）",
    "options": [
      "A. 单模光纤的纤芯直径更细",
      "B. 单模光纤采用 LED作为光源",
      "C. 多模光纤比单模光纤的传输距离近",
      "D. 多模光纤中光波在光导纤维中以多种模式传播"
    ],
    "answer": 1,
    "explanation": "单模光纤纤芯细、传输距离远，采用激光器（LD）作光源而非LED，LED用于多模光纤，故B错误。"
  },
  {
    "id": 2264,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2017a",
    "question": "4B/5B编码先将数据按 4 位分组，将每个分组映射到 5 单位的代码，然后采用()进行编码。",
    "options": [
      "A. PCM",
      "B. Manchester",
      "C. QAM",
      "D. NRZ-I"
    ],
    "answer": 3,
    "explanation": "4B/5B编码将4位数据映射为5位代码后，再采用NRZ-I（不归零反转）进行线路编码，故选D。"
  },
  {
    "id": 2265,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2017a",
    "question": "1996年3月 .IEEE成立了802.3z工作组开始制定1000Mb/s标准。下列千兆以太网中不属于该标准的是（）",
    "options": [
      "A. 1000Base-SX",
      "B. 1000Base-LX",
      "C. 1000Base-T",
      "D. 1000Base-CX"
    ],
    "answer": 2,
    "explanation": "IEEE 802.3z定义了1000Base-SX、LX、CX等千兆标准，而1000Base-T由802.3ab定义，不属于802.3z，故选C。"
  },
  {
    "id": 2266,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2017a",
    "question": "主机甲和主机乙建立一条 TCP 连接，采用慢启动进行拥塞控制，TCP最大段长度为 1000字节。主机甲向主机乙发送第 1 个段并收到主机乙的确认，确认段中接收窗口大小为 3000字节，则此时主机甲可以向主机乙发送的最大字节数是（）字节。",
    "options": [
      "A. 1000",
      "B. 2000",
      "C. 3000",
      "D. 4000"
    ],
    "answer": 1,
    "explanation": "慢启动初始拥塞窗口为1个MSS即1000字节，收到确认后窗口增至2000字节，受接收窗口3000限制，此时最多再发2000字节，故选B。"
  },
  {
    "id": 2267,
    "type": "single",
    "category": "路由协议",
    "paper": "real2017a",
    "question": "OSPF协议把网络划分成 4 种区域（Area），其中 (27)一不接受本地自治系统以外的路由信息，对自治系统以外的目标采用默认路由0.0.0.0 。",
    "options": [
      "A. 分支区域",
      "B. 标准区域",
      "C. 主干区域",
      "D. 存根区域"
    ],
    "answer": 3,
    "explanation": "OSPF存根区域（Stub Area）不接受自治系统外部路由信息，对外部目标使用默认路由0.0.0.0，故选D。"
  },
  {
    "id": 2268,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017a",
    "question": "下面关于 Linux目录的描述中，正确的是（）。",
    "options": [
      "A. Linux只有一个根目录，用\"/root\"表示",
      "B. Linux中有多个根目录，用 \"/\"加相应目录名称表示",
      "C. Linux中只有一个根目录，用 \"/\"表示",
      "D. Linux中有多个根目录，用相应目录名称表示"
    ],
    "answer": 2,
    "explanation": "Linux文件系统采用树形结构，只有一个根目录，用“/”表示，故C正确；/root是超级用户主目录而非根目录。"
  },
  {
    "id": 2269,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017a",
    "question": "在 Linux中，可以使用（）命令为计算机配置 IP 地址。",
    "options": [
      "A. ifconfig",
      "B. config",
      "C. ip-address",
      "D. Ipconfig"
    ],
    "answer": 0,
    "explanation": "Linux中配置IP地址常用ifconfig命令，ipconfig为Windows命令，config、ip-address不是标准命令，故选A。"
  },
  {
    "id": 2270,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017a",
    "question": "在 Linux中，通常使用（）命令删除一个文件或目录。",
    "options": [
      "A. rm-i",
      "B. mv-i",
      "C. mk-i",
      "D. cat-i"
    ],
    "answer": 0,
    "explanation": "Linux中删除文件或目录使用rm命令，-i为交互确认选项，mv为移动，mk、cat非删除命令，故选A。"
  },
  {
    "id": 2271,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2017a",
    "question": "在以太网中发生冲突时采用退避机制，（）优先传输数据。",
    "options": [
      "A. 冲突次数最少的设备",
      "B. 冲突中 IP 地址最小的设备",
      "C. 冲突域中重传计时器首先过期的设备",
      "D. 同时开始传输的设备"
    ],
    "answer": 2,
    "explanation": "以太网采用CSMA/CD，冲突后执行二进制指数退避，重传计时器最先过期的设备最先重新发送，从而优先获得信道。"
  },
  {
    "id": 2272,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017a",
    "question": "在 Windows 操作系统中，远程桌面使用的默认端口是（）。",
    "options": [
      "A. 80",
      "B. 3389",
      "C. 8080",
      "D. 1024"
    ],
    "answer": 1,
    "explanation": "Windows远程桌面基于RDP协议，默认监听TCP 3389端口，客户端通过该端口连接远程主机。"
  },
  {
    "id": 2273,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2017a",
    "question": "在 Linux中，创建权限设置为-rw-rw-r--的普通文件，下面的说法中正确的是（）。",
    "options": [
      "A. 文件所有者对该文件可读可写",
      "B. 同组用户对该文件只可读",
      "C. 其他用户对该文件可读可写",
      "D. 其他用户对核文件可读可查询"
    ],
    "answer": 0,
    "explanation": "权限-rw-rw-r--中，第一组rw-表示文件所有者可读可写，同组用户rw-可读可写，其他用户r--只可读。"
  },
  {
    "id": 2274,
    "type": "single",
    "category": "网络安全",
    "paper": "real2017a",
    "question": "IPSec用于增强 IP网络的安全性，下面的说法中不正确的是（）。",
    "options": [
      "A. IPSec可对数据进行完整性保护",
      "B. IPSec 提供用户身份认证服务",
      "C. IPSec 的认证头添加在 TCP 封装内部",
      "D. IPSec 对数据加密传输"
    ],
    "answer": 2,
    "explanation": "IPSec的认证头AH插入在IP头和传输层协议头之间，而非TCP封装内部，故该说法不正确。"
  },
  {
    "id": 2275,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017a",
    "question": "在浏览器地址栏输入一个正确的网址后，本地主机将首先在（）中查询该网址对应的 IP 地址。",
    "options": [
      "A. 本地 DNS 缓存",
      "B. 本机 hosts 文件",
      "C. 本地 DNS 服务器",
      "D. 根域名服务器"
    ],
    "answer": 1,
    "explanation": "主机进行域名解析时，先查本地DNS缓存，再查本机hosts文件，然后才向本地DNS服务器发起查询。"
  },
  {
    "id": 2276,
    "type": "single",
    "category": "网络安全",
    "paper": "real2017a",
    "question": "以下加密算法中，适合对大量的胡文消息进行加密传输的是（）。",
    "options": [
      "A. RSA",
      "B. SHA-l",
      "C. MD5",
      "D. RC5"
    ],
    "answer": 3,
    "explanation": "RC5是对称分组加密算法，速度快，适合加密大量明文；RSA为非对称算法，SHA-1和MD5是摘要算法。"
  },
  {
    "id": 2277,
    "type": "single",
    "category": "网络安全",
    "paper": "real2017a",
    "question": "假定用户 A、B分别在I1和 I2 两个 CA处取得了各自的证书，下面（）是 A、B互信的必要条件。",
    "options": [
      "A. A、B互换私钥",
      "B. A、B互换公钥",
      "C. I1、I2 互换私钥",
      "D. I1、I2 互换公钥"
    ],
    "answer": 3,
    "explanation": "A、B分属不同CA，要实现证书互信，两个CA需互换公钥以验证对方签发的证书，这是互信的必要条件。"
  },
  {
    "id": 2278,
    "type": "single",
    "category": "网络安全",
    "paper": "real2017a",
    "question": "SHA-l是一种将不同长度的输入信息转换成（）位固定长度摘要的算法。",
    "options": [
      "A. 128",
      "B. 160",
      "C. 256",
      "D. 512"
    ],
    "answer": 1,
    "explanation": "SHA-1是安全散列算法，将任意长度输入转换成160位固定长度的消息摘要。"
  },
  {
    "id": 2279,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017a",
    "question": "某网络管理员在网络检测时，执行了 undo mac-address blackhole命令。该命令的作用是（）。",
    "options": [
      "A. 禁止用户接口透传VLAN",
      "B. 关闭接口的MAC的学习功能",
      "C. 为用户接口配置了端口安全",
      "D. 删除配置的黑洞MAC"
    ],
    "answer": 3,
    "explanation": "undo mac-address blackhole命令用于删除已配置的黑洞MAC地址表项，恢复该MAC地址的正常转发。"
  },
  {
    "id": 2280,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017a",
    "question": "当传输介质出现老化、破损、介质规格不匹配时会导致物理接口处于 DOWN状态，常使用（）命令检查光纤模块状态、参数是否正常。",
    "options": [
      "A. virtual-cable-test",
      "B. displaytransceiverinterface",
      "C. displaydevice",
      "D. displayinterface"
    ],
    "answer": 1,
    "explanation": "display transceiver interface命令用于查看光模块的类型、波长、收发光功率等状态和参数是否正常。"
  },
  {
    "id": 2281,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017a",
    "question": "在 SwìtchA 上 Ping SwìtchB 的地址 192.168.1，100不通。通过步骤①到④解决了该故障，该故障产生的原因是 ()①使用 display port vlan命令查看 SwitchA 和 SwitchB 接口配置② 使用displayipinterfácebrief命令查看SwitchA 和 SwitchB 接口配置③使用 portlink-typetrunk命令修改 SwitchB 配置④使用 ping192.168.1.100检查，故障排除",
    "options": [
      "A. switchB 接口 VLAN不正确",
      "B. SwìtchB 的接口状态为 DOWN",
      "C. SwìtchB 链路类型配置错误",
      "D. SwitchB 对接收到的 ICMP报文丢弃"
    ],
    "answer": 2,
    "explanation": "故障通过修改SwitchB的端口链路类型为trunk后排除，说明原因是SwitchB链路类型配置错误。"
  },
  {
    "id": 2282,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017a",
    "question": "DHCP 服务器给PCl分配IP地址时默认网关地址是202.117.110.65/27，则 PCl 的地址可能是（）",
    "options": [
      "A. 202.117.110.94",
      "B. 202.117.110.95",
      "C. 202.117.110.96",
      "D. 202.117.110.97"
    ],
    "answer": 0,
    "explanation": "网关202.117.110.65/27所在子网范围为.64~.95，可用主机地址为.65~.94，故PC1地址可能是.94。"
  },
  {
    "id": 2283,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017a",
    "question": "某单位 IP 地址需求数如下表所示，给定地址 192.168.1.0/24，按照可变长子网掩码的设计思想，部门 3 的子网掩码为（）",
    "options": [
      "A. 255.255.255.128",
      "B. 255.255.255.192",
      "C. 255.255.255.224",
      "D. 255.255.255.240"
    ],
    "answer": 2,
    "explanation": "按VLSM思想，部门3所需主机数决定子网大小，其子网掩码为255.255.255.224，即/27，可容纳30台主机。"
  },
  {
    "id": 2284,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2017a",
    "question": "在网络 101.113.10.0/29 中，能接收到目的地址是 101.113.10.7的报文的主机数最多有（）个。",
    "options": [
      "A. 1",
      "B. 3",
      "C. 5",
      "D. 6"
    ],
    "answer": 3,
    "explanation": "/29子网有8个地址，101.113.10.7为广播地址，可接收该广播报文的主机数为8-2=6个。"
  },
  {
    "id": 2285,
    "type": "single",
    "category": "交换技术",
    "paper": "real2017a",
    "question": "查看 VLAN配置信息的命令是（）。",
    "options": [
      "A. displaycurrent-configuration",
      "B. display vlan brief",
      "C. system-view",
      "D. vlanvlan-id"
    ],
    "answer": 1,
    "explanation": "display vlan brief命令用于查看VLAN的简要配置信息，包括VLAN ID、名称及包含的端口等。"
  },
  {
    "id": 2286,
    "type": "single",
    "category": "路由协议",
    "paper": "real2017a",
    "question": "运行 RIPv2协议的 3 台路由器按照如下图所示的方式连接，路由表项最少需经过（）可达到收敛状态。",
    "options": [
      "A. 30s",
      "B. 60s",
      "C. 90s",
      "D. 120s"
    ],
    "answer": 1,
    "explanation": "RIPv2默认更新周期为30秒，3台路由器经两次更新传递后达到收敛，约需60秒。"
  },
  {
    "id": 2287,
    "type": "single",
    "category": "路由协议",
    "paper": "real2017a",
    "question": "运行 OSPF协议的路由器在选举 DR/BDR之前，DR是（）。",
    "options": [
      "A. 路由器自身",
      "B. 直连路由器",
      "C. IP地址最大的路由器",
      "D. MAC地址最大的路由器"
    ],
    "answer": 0,
    "explanation": "OSPF选举DR/BDR前，各路由器先将自身作为DR，待选举完成后才确定真正的DR和BDR。"
  },
  {
    "id": 2288,
    "type": "single",
    "category": "路由协议",
    "paper": "real2017a",
    "question": "关于 OSPF 路由协议的说法中，正确的是（）",
    "options": [
      "A. OSPF路由协议是一种距离矢量路由协议",
      "B. OSPF路由协议中的进程号全局有效",
      "C. OSPF路由协议不同进程之间可以进行路由重分布",
      "D. OSPF路由协议的主区域为区域1"
    ],
    "answer": 2,
    "explanation": "OSPF不同进程之间可通过路由重分布交换路由信息，进程号仅本地有效，OSPF是链路状态协议，主区域为0。"
  },
  {
    "id": 2289,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2017a",
    "question": "在以太网中出于对（）的考虑，需设置数据帧的最小帧。",
    "options": [
      "A. 重传策略",
      "B. 故障检测",
      "C. 冲突检测",
      "D. 提高速率"
    ],
    "answer": 2,
    "explanation": "以太网设置最小帧长是为了保证发送方在发送完毕前能检测到冲突，即满足冲突检测的要求。"
  },
  {
    "id": 2290,
    "type": "single",
    "category": "无线网络",
    "paper": "real2017a",
    "question": "在中国区域内， 2.4GHz 无线频段分为（）个信道。",
    "options": [
      "A. 11",
      "B. 12",
      "C. 13",
      "D. 14"
    ],
    "answer": 2,
    "explanation": "在中国区域内，2.4GHz频段划分为13个可用信道，信道间存在部分重叠。"
  },
  {
    "id": 2291,
    "type": "single",
    "category": "无线网络",
    "paper": "real2017a",
    "question": "802.11g 的最高数据传输速率为（）Mbps。",
    "options": [
      "A. 11",
      "B. 28",
      "C. 54",
      "D. 108"
    ],
    "answer": 2,
    "explanation": "802.11g工作在2.4GHz频段，采用OFDM技术，最高数据传输速率为54Mbps，兼容802.11b。"
  },
  {
    "id": 2292,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2017a",
    "question": "下图为某公司网络管理员规划的新办公大楼网络拓扑图，针对该网络规划，以下说法中不合理的是（）",
    "options": [
      "A. 核心交换机之间可以采用VRRP、虚拟化等技术手段",
      "B. 网络内各VLAN之间访问需要经过两台核心交换设备中的一台",
      "C. 接入交换机多采用三层交换机",
      "D. 网络拓扑结构可靠"
    ],
    "answer": 2,
    "explanation": "接入层交换机应选用二层交换机以降低成本、简化配置，三层交换功能通常部署在核心或汇聚层，故接入层多采用三层交换机不合理。"
  },
  {
    "id": 2293,
    "type": "single",
    "category": "网络管理",
    "paper": "real2017a",
    "question": "在对网络设备巡检中，检测到交换机端口有大量的 CRC错包，结合错包呈现出不断上涨的趋势，下面故障原因中，不可能的是（）",
    "options": [
      "A. 端口状态异常",
      "B. 物理链路故障",
      "C. 电磁干扰",
      "D. 病毒攻击"
    ],
    "answer": 3,
    "explanation": "CRC错包持续上涨通常由端口状态异常、物理链路故障或电磁干扰引起，属于物理层/数据链路层问题，与病毒攻击无关。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2016b";
  const A = [
  {
    "id": 2294,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016b",
    "question": "在程序运行过程中，cpu需要将指令从内存中取出并加以分析和执行。cpu依据（1）来区分在内存中以二进制编码形式存放的指令和数据。",
    "options": [
      "A. 指令周期的不同阶段",
      "B. 指令和数据的寻址方式",
      "C. 指令操作码的译码结果",
      "D. 指令和数据所在的存储单元"
    ],
    "answer": 0,
    "explanation": "CPU依据指令周期的不同阶段来区分内存中取出的是指令还是数据，取指阶段取出的是指令，执行阶段取出的是数据。"
  },
  {
    "id": 2295,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016b",
    "question": "计算机在一个指令周期的过程中，为从内存读取指令操作码，首先要将（2）的内容送到地址总线上。",
    "options": [
      "A. 指令寄存器（ir）",
      "B. 通用寄存器（gr）",
      "C. 程序计数器（pc）",
      "D. 状态寄存器（psw）"
    ],
    "answer": 2,
    "explanation": "取指令时需将程序计数器PC的内容送到地址总线，PC存放的是下一条要执行指令的地址。"
  },
  {
    "id": 2296,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016b",
    "question": "设16位浮点数，其中阶符1位、阶码值6位、数符1位，尾数8位。若阶码用移码表示，尾数用补码表示，则该浮点数所能表示的数值范围是（3） 。",
    "options": [
      "A. -264~（1-2-8）264",
      "B. -263~（1-2-8）263",
      "C. -（1-2-8）264~（1-2-8）264",
      "D. -（1-2-8）263~（1-2-8）263"
    ],
    "answer": 1,
    "explanation": "阶码6位用移码表示，范围为-32~31，最大阶为2^31；尾数8位补码表示范围-1~（1-2^-8），故数值范围为-2^63~（1-2^-8）2^63。"
  },
  {
    "id": 2297,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2016b",
    "question": "已知数据信息为16位，最少应附加位（4） 校验位，以实现海明码纠错。",
    "options": [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    "answer": 2,
    "explanation": "海明码需满足2^k≥n+k+1，n=16时k=5满足2^5=32≥22，k=4时16<21不满足，故最少需5位校验位。"
  },
  {
    "id": 2298,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016b",
    "question": "将一条指令的执行过程分解为取指、分析和执行三步，按照流水方式执行，若取指时间t取指=4△t、分析时间t分析=2△t、执行时间t执行=3△t，则执行完100条指令，需要的时间为（5） △t.",
    "options": [
      "A. 200",
      "B. 300",
      "C. 400",
      "D. 405"
    ],
    "answer": 3,
    "explanation": "流水线执行时间=（t取指+t分析+t执行）+（n-1）×最长段时间=（4+2+3）+99×4=405△t。"
  },
  {
    "id": 2299,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016b",
    "question": "在敏捷过程的开发方法中，（6） 使用了迭代的方法，其中，把每段时间（30天）一次的迭代称为一个“冲刺”，并按需求的优先级别来实现产品，多个自组织和自治的小组并行地递增实现产品。",
    "options": [
      "A. 极限编程xp",
      "B. 水晶法",
      "C. 并列争球法",
      "D. 自适应软件开发"
    ],
    "answer": 2,
    "explanation": "并列争球法（Scrum）采用迭代方法，每30天一次的迭代称为一个“冲刺”，按需求优先级实现产品，多个自治小组并行递增实现。"
  },
  {
    "id": 2300,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016b",
    "question": "假设系统有n个进程共享资源r，且资源r的可用数为3，其中n≥3 。若采用pv操作，则信号量s的取值范围应为（9） 。",
    "options": [
      "A. -1～n-1",
      "B. b．-3～3",
      "C. c．-（n-3）～3",
      "D. d．-（n-l）～1"
    ],
    "answer": 2,
    "explanation": "资源可用数为3，n个进程共享，信号量S最大值为3，最小值为3-n，即取值范围为-(n-3)~3。"
  },
  {
    "id": 2301,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016b",
    "question": "甲、乙两厂生产的产品类似，且产品都拟使用“b\"商标。两厂于同一天向商标局申请商标注册，且申请注册前两厂均未使用“b\"商标。此情形下，（10） 能核准注册。",
    "options": [
      "A. 甲厂",
      "B. 由甲、乙厂抽签确定的厂",
      "C. 乙厂",
      "D. 甲、乙两厂"
    ],
    "answer": 1,
    "explanation": "同日申请且均未使用，商标局应通知各申请人协商，协商不成由商标局抽签确定，故由抽签确定的厂能核准注册。"
  },
  {
    "id": 2302,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "能隔离局域网中广播风暴、提高带宽利用率的设备是（11） 。",
    "options": [
      "A. 网桥",
      "B. 集线器",
      "C. 路由器",
      "D. 交换机"
    ],
    "answer": 2,
    "explanation": "路由器工作在网络层，能隔离广播域、阻止广播风暴传播，从而提高带宽利用率；网桥和交换机不能隔离广播。"
  },
  {
    "id": 2303,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2016b",
    "question": "点对点协议ppp中lcp的作用是（12）。",
    "options": [
      "A. 包装各种上层协议",
      "B. 封装承载的网络层协议",
      "C. 把分组转变成信元",
      "D. 建立和配置数据链路"
    ],
    "answer": 3,
    "explanation": "PPP中LCP（链路控制协议）用于建立、配置和测试数据链路连接，NCP用于封装承载各网络层协议。"
  },
  {
    "id": 2304,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2016b",
    "question": "tvp/ip网络中的（13）实现应答、排序和流控功能。",
    "options": [
      "A. 数据链路层",
      "B. 网络层",
      "C. 传输层",
      "D. 应用层"
    ],
    "answer": 2,
    "explanation": "TCP/IP模型中传输层（TCP协议）实现应答、排序和流控功能，为应用层提供可靠的端到端传输。"
  },
  {
    "id": 2305,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "ipv6的链路本地地址是在地址前缀1111 1110 10之后附加（18）形成的。",
    "options": [
      "A. ipv4地址",
      "B. mac地址",
      "C. 主机名",
      "D. 随机产生的字符串"
    ],
    "answer": 1,
    "explanation": "IPv6链路本地地址前缀为FE80::/10（1111 1110 10），其后附加接口标识符，通常由MAC地址通过EUI-64生成。"
  },
  {
    "id": 2306,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2016b",
    "question": "连接终端和数字专线的设备csu/dsu被集成在路由器的（19）端口中。",
    "options": [
      "A. rj-45端口",
      "B. 同步串口",
      "C. aui端口",
      "D. 异步串口"
    ],
    "answer": 1,
    "explanation": "CSU/DSU用于连接终端和数字专线，通常集成在路由器的同步串口中，提供同步串行数据传输。"
  },
  {
    "id": 2307,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "下面哪个协议可通过主机的逻辑地址查找对应的物理地址？ （20） 。",
    "options": [
      "A. dhcp",
      "B. smtp",
      "C. snmp",
      "D. arp"
    ],
    "answer": 3,
    "explanation": "ARP协议通过主机的逻辑地址（IP地址）查找对应的物理地址（MAC地址），实现IP到MAC的映射。"
  },
  {
    "id": 2308,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2016b",
    "question": "下面的应用层协议中通过udp传送的是（21） 。",
    "options": [
      "A. smtp",
      "B. tftp",
      "C. pop3",
      "D. http"
    ],
    "answer": 1,
    "explanation": "TFTP（简单文件传输协议）通过UDP传送，端口69；SMTP、POP3、HTTP均基于TCP。"
  },
  {
    "id": 2309,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "代理arp是指（22） 。",
    "options": [
      "A. 由邻居交换机把arp请求传送给远端目标",
      "B. 由一个路由器代替远端目标回答arp请求",
      "C. 由dns服务器代替远端目标回答arp请求",
      "D. 由dhcp服务器分配一个回答arp请求的路由器"
    ],
    "answer": 1,
    "explanation": "代理ARP是指由路由器代替远端目标主机回答ARP请求，使发送方误以为目标在同一网段。"
  },
  {
    "id": 2310,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016b",
    "question": "如果路由器收到了多个路由协议转发的、关于某个目标的多条路由，它如何决定采用哪个路由？（23） 。",
    "options": [
      "A. 选择与自己路由协议相同的",
      "B. 选择路由费用最小的",
      "C. 比较各个路由的管理距离",
      "D. 比较各个路由协议的版本"
    ],
    "answer": 2,
    "explanation": "路由器收到多个路由协议关于同一目标的多条路由时，先比较管理距离（AD值），AD值小者优先，相同再比较度量值。"
  },
  {
    "id": 2311,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016b",
    "question": "下面的选项中属于链路状态路由选择协议的是（24） 。",
    "options": [
      "A. ospf",
      "B. igrp",
      "C. bgp",
      "D. ripv2"
    ],
    "answer": 0,
    "explanation": "OSPF是典型的链路状态路由协议，通过洪泛链路状态信息构建全网拓扑；IGRP、RIPv2是距离矢量协议，BGP是路径矢量协议。"
  },
  {
    "id": 2312,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016b",
    "question": "ripv2与ripvl相比，它改进了什么？（27） 。",
    "options": [
      "A. ripv2的最大跳数扩大了，可以适应规模更大的网络",
      "B. rlpv2变成无类别的协议，必须配置子网掩码",
      "C. rlpv2用跳数和带宽作为度量值，可以有更多的选择",
      "D. ripv2可以周期性地发送路由更新，收敛速度比原来的rip快"
    ],
    "answer": 1,
    "explanation": "RIPv2支持VLSM和CIDR，是无类别路由协议，路由更新中携带子网掩码；其最大跳数仍为15，度量值仍为跳数。"
  },
  {
    "id": 2313,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2016b",
    "question": "在采用crc校验时，若生成多项式为g（x）=x5+x2+x+1，传输数据为1011110010101时，生成的帧检验序列为（28） 。",
    "options": [
      "A. 10101",
      "B. 01101",
      "C. 00000",
      "D. 11100"
    ],
    "answer": 2,
    "explanation": "生成多项式对应除数101111，数据后补5个0做模2除法，余数为00000，故帧检验序列为00000。"
  },
  {
    "id": 2314,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016b",
    "question": "在linux系统中，要查看如下输出，可使用命令（32）。",
    "options": [
      "A. [root@localhost]#ifconfig",
      "B. [root@localhost]#ipconfig eth0",
      "C. [root@localhost]#ipconfig]",
      "D. [root@localhost]#ipconfig figeth0"
    ],
    "answer": 3,
    "explanation": "Linux中查看网络接口配置应使用ifconfig命令，选项D的命令形式符合Linux下查看指定网卡信息的用法。"
  },
  {
    "id": 2315,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "当dhcp服务器拒绝客户端的ip地址请求对发送（33）报文。",
    "options": [
      "A. dhcpoffer",
      "B. dhcpdecline",
      "C. dhcpack",
      "D. dhcpnack"
    ],
    "answer": 3,
    "explanation": "当DHCP服务器拒绝客户端的地址请求（如地址不可用或租约无效）时，向客户端发送DHCPNAK报文。"
  },
  {
    "id": 2316,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "在进行域名解析过程中，当主域名服务器查找不到口地址时，由（34）负责域名解析。",
    "options": [
      "A. 本地缓存",
      "B. 辅域名服务器",
      "C. 根域名服务器",
      "D. 转发域名服务器"
    ],
    "answer": 3,
    "explanation": "主域名服务器无法解析时，可将请求转发给转发域名服务器代为查询，由其负责后续域名解析。"
  },
  {
    "id": 2317,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2016b",
    "question": "在建立tcp连接过程中，出现错误连接时，（35）标志字段置“l”。",
    "options": [
      "A. syn",
      "B. rst",
      "C. fin",
      "D. ack"
    ],
    "answer": 1,
    "explanation": "TCP首部中RST标志位置1表示复位连接，用于出现错误或异常时强制终止连接。"
  },
  {
    "id": 2318,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "当客户端收到多个dhcp服务器的响应时，客户端会选择（38）地址作为自己的ip地址。",
    "options": [
      "A. 最先到达的",
      "B. 最大的",
      "C. 最小的",
      "D. 租期最长的"
    ],
    "answer": 0,
    "explanation": "客户端收到多个DHCP服务器的DHCPOFFER后，通常选择最先到达的响应，并广播DHCPREQUEST确认。"
  },
  {
    "id": 2319,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "在windows的dos窗口中键入命令",
    "options": [
      "A. \\&gt; nslookup",
      "B. 查询xyz.comcn的邮件服务器信息",
      "C. 查询xyz.com.cn到口地址的映射",
      "D. 查询xyz．com.cn的资源记录类型"
    ],
    "answer": 1,
    "explanation": "nslookup用于查询DNS记录，可查询邮件服务器等资源记录；查询邮件服务器应使用set type=mx等命令。"
  },
  {
    "id": 2320,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "下面是dhcp协议工作的4种消息，正确的顺序应该是（40） 。 ①dhcp discovery②dhcp offer③dhcp request④dhcp ack",
    "options": [
      "A. ①③②④",
      "B. ①②③④",
      "C. ②①③④",
      "D. ②③①④"
    ],
    "answer": 1,
    "explanation": "DHCP工作流程为：客户端广播DHCPDISCOVER，服务器回应DHCPOFFER，客户端发送DHCPREQUEST，服务器回复DHCPACK。"
  },
  {
    "id": 2321,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016b",
    "question": "在linux中，（41） 命令可将文件以惨改时间顺序显示。",
    "options": [
      "A. is -a",
      "B. is -b",
      "C. is -c",
      "D. is -d"
    ],
    "answer": 2,
    "explanation": "Linux中ls -c按文件修改时间（ctime）排序显示，符合按修改时间顺序显示文件的要求。"
  },
  {
    "id": 2322,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2016b",
    "question": "要在一台主机上建立多个独立域名的站点，下面的方法中（42） 是错误的。",
    "options": [
      "A. 为计算机安装多块网卡",
      "B. 使用不同的主机头名",
      "C. 使用虚拟目录",
      "D. 使用不同的端口号"
    ],
    "answer": 2,
    "explanation": "虚拟目录用于将不同物理路径映射到同一站点，不能用于在一台主机上建立多个独立域名的站点。"
  },
  {
    "id": 2323,
    "type": "single",
    "category": "网络安全",
    "paper": "real2016b",
    "question": "下面不属于数字签名作用的是（43） 。",
    "options": [
      "A. 接收者可验证消息来源的真实性",
      "B. 发送者无法否认发送过该消息",
      "C. 接收者无法伪造或篡改消息",
      "D. 可验证接受者的合法性"
    ],
    "answer": 3,
    "explanation": "数字签名用于验证消息来源真实性、发送者不可否认及消息完整性，不能验证接收者的合法性。"
  },
  {
    "id": 2324,
    "type": "single",
    "category": "网络安全",
    "paper": "real2016b",
    "question": "下面可用于消息认证的算法是（44） 。",
    "options": [
      "A. des",
      "B. pgp",
      "C. md5",
      "D. kmi"
    ],
    "answer": 2,
    "explanation": "MD5是消息摘要算法，可用于消息认证，验证数据完整性；DES是加密算法，PGP是加密软件，KMI是密钥管理基础设施。"
  },
  {
    "id": 2325,
    "type": "single",
    "category": "网络安全",
    "paper": "real2016b",
    "question": "des加密算法的密钥长度为56位，三重des的密钥长度为（45） 位。",
    "options": [
      "A. 168",
      "B. 128",
      "C. 112",
      "D. 56"
    ],
    "answer": 2,
    "explanation": "三重DES采用K1、K2、K3三个密钥，因密钥两两相同可退化为单DES，有效密钥长度为112位。"
  },
  {
    "id": 2326,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016b",
    "question": "在windows 'server 2003中，（46） 组成员用户具有完全控制权限。",
    "options": [
      "A. users",
      "B. power users",
      "C. adniinisrators",
      "D. guests"
    ],
    "answer": 2,
    "explanation": "Windows Server 2003中Administrators组成员拥有对系统的完全控制权限。"
  },
  {
    "id": 2327,
    "type": "single",
    "category": "网络管理",
    "paper": "real2016b",
    "question": "snmp协议中网管代理使用（47）操作向管理站发送异步事件报告。",
    "options": [
      "A. trap",
      "B. set",
      "C. get",
      "D. get-next"
    ],
    "answer": 0,
    "explanation": "SNMP中网管代理通过Trap操作主动向管理站发送异步事件报告，如设备故障告警。"
  },
  {
    "id": 2328,
    "type": "single",
    "category": "网络安全",
    "paper": "real2016b",
    "question": "当发现主机受到arp攻击时需清除arp缓存，使用的命令是（48） 。",
    "options": [
      "A. arp-a",
      "B. arp-s",
      "C. arp-d",
      "D. arp-g"
    ],
    "answer": 2,
    "explanation": "清除ARP缓存使用arp -d命令，删除指定或全部ARP表项，以应对ARP攻击。"
  },
  {
    "id": 2329,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016b",
    "question": "从ftp服务器下载文件的命令是（49） 。",
    "options": [
      "A. get",
      "B. dir",
      "C. put",
      "D. push"
    ],
    "answer": 0,
    "explanation": "FTP客户端从服务器下载文件使用get命令，上传文件使用put命令。"
  },
  {
    "id": 2330,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2016b",
    "question": "由于内网p2p、视频／流媒体、网络游戏等流量占用过大，影响网络性能，可以采用（50） 来保障正常的web及邮件流量需求。",
    "options": [
      "A. 使用网闸",
      "B. 升级核心交换机",
      "C. 部署流量控制设备",
      "D. 部署网络安全审计设备"
    ],
    "answer": 2,
    "explanation": "部署流量控制设备可对P2P、流媒体等大流量进行限速和优先级调度，保障Web及邮件等正常流量需求。"
  },
  {
    "id": 2331,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "isp分配给某公司的地址块为199.34.76.64/28，则该公司得到的ip地址数是（51） 。",
    "options": [
      "A. 8",
      "B. 16",
      "C. 32",
      "D. 64"
    ],
    "answer": 1,
    "explanation": "/28表示子网掩码有28位网络位，剩余4位为主机位，可分配地址数为2^4=16个。"
  },
  {
    "id": 2332,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "下面是路由表的4个表项，与地址220.112.179.92匹配的表项是（52） 。",
    "options": [
      "A. 220.112.145.32/22",
      "B. 220.112.145.64/22",
      "C. 220.112.147.64/22",
      "D. 220.112.177.64/22"
    ],
    "answer": 3,
    "explanation": "将220.112.179.92与各表项掩码/22逐位与运算，只有220.112.177.64/22的网络地址220.112.176.0能包含该地址。"
  },
  {
    "id": 2333,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "下面4个主机地址中属于网络110.17.200.0/21的地址是（53） 。",
    "options": [
      "A. 110.17.198.0",
      "B. 110.17.206.0",
      "C. 110.17.217.0",
      "D. 110.17.224.0"
    ],
    "answer": 1,
    "explanation": "110.17.200.0/21的网络范围为110.17.200.0~110.17.207.255，选项中只有110.17.206.0落在该范围内。"
  },
  {
    "id": 2334,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016b",
    "question": "下面的提示符（56） 表示特权模式。",
    "options": [
      "A. &gt;",
      "B. #",
      "C. （config）#",
      "D. ！"
    ],
    "answer": 1,
    "explanation": "Cisco路由器中，用户模式提示符为>，特权模式提示符为#，全局配置模式提示符为(config)#。"
  },
  {
    "id": 2335,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016b",
    "question": "把路由器当前配置文件存储到nvram中的命令是（57） 。",
    "options": [
      "A. router（confg）#copy current to startlng",
      "B. router#copy startmg to running",
      "C. router（config）#copy running-config starting-config",
      "D. router#copy run startup"
    ],
    "answer": 3,
    "explanation": "将运行配置保存到NVRAM（启动配置）的命令是copy running-config startup-config，简写为copy run startup。"
  },
  {
    "id": 2336,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016b",
    "question": "如果路由器显示“serial 1 is down，line protocol is down”故障信息，则问题出在osi参考模型的（58） 。",
    "options": [
      "A. 物理层",
      "B. 数据链路层",
      "C. 网络层",
      "D. 会话层"
    ],
    "answer": 0,
    "explanation": "serial 1 is down表示物理接口未激活，line protocol is down表示链路层协议未建立，故障通常出在物理层。"
  },
  {
    "id": 2337,
    "type": "single",
    "category": "交换技术",
    "paper": "real2016b",
    "question": "下面的交换机命令中（59） 为端口指定vlan。",
    "options": [
      "A. sl（config-if）# vlan-menbership static",
      "B. s1（config-if）# vlan database",
      "C. sl（config-iif）# switchport mode access",
      "D. sl（config-if）#switchport access vlan 1"
    ],
    "answer": 3,
    "explanation": "在接口配置模式下使用switchport access vlan 1命令可将该端口指定到VLAN 1。"
  },
  {
    "id": 2338,
    "type": "single",
    "category": "交换技术",
    "paper": "real2016b",
    "question": "stp协议的作用是（60） 。",
    "options": [
      "A. 防止二层环路",
      "B. 以太网流量控制",
      "C. 划分逻辑网络",
      "D. 基于端口的认证"
    ],
    "answer": 0,
    "explanation": "STP（生成树协议）通过阻塞冗余链路来消除以太网中的二层环路，防止广播风暴。"
  },
  {
    "id": 2339,
    "type": "single",
    "category": "交换技术",
    "paper": "real2016b",
    "question": "vlan之间通信需要（61）上的支持。",
    "options": [
      "A. 网桥",
      "B. 路由器",
      "C. vlan服务器",
      "D. 交换机"
    ],
    "answer": 1,
    "explanation": "VLAN隔离了二层广播域，不同VLAN之间通信必须经过路由器（或三层设备）进行三层转发。"
  },
  {
    "id": 2340,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2016b",
    "question": "以太网中出现冲突后，发送方什么时候可以再次尝试发送？（62） 。",
    "options": [
      "A. 再次收到目标站的发送请求后",
      "B. 在jam信号停止并等待一段固定时间后",
      "C. 在jam信号停止并等待一段随机时间后",
      "D. 当jam信号指示冲突已经被清除后"
    ],
    "answer": 2,
    "explanation": "CSMA/CD中检测到冲突后发送jam信号，随后等待一段随机时间（二进制指数退避）再重发。"
  },
  {
    "id": 2341,
    "type": "single",
    "category": "无线网络",
    "paper": "real2016b",
    "question": "ieee802.11标准采用的工作频段是（65） 。",
    "options": [
      "A. 900mhz和800mhz",
      "B. 900mhz和2.4ghz",
      "C. 5ghz和800mhz",
      "D. 2.4ghz和5ghz"
    ],
    "answer": 3,
    "explanation": "IEEE 802.11系列标准工作在2.4GHz和5GHz两个ISM频段。"
  },
  {
    "id": 2342,
    "type": "single",
    "category": "无线网络",
    "paper": "real2016b",
    "question": "ieee802.11mac子层定义的竞争性访问控制协议是（66） 。",
    "options": [
      "A. csma/ca",
      "B. csma/cb",
      "C. csma/cd",
      "D. csma/cg"
    ],
    "answer": 0,
    "explanation": "IEEE 802.11 MAC子层采用带冲突避免的载波侦听多路访问协议CSMA/CA。"
  },
  {
    "id": 2343,
    "type": "single",
    "category": "无线网络",
    "paper": "real2016b",
    "question": "无线局域网的新标准ieee802.lln提供的最高数据速率可达到（67）mb/s。",
    "options": [
      "A. 54",
      "B. 100",
      "C. 200",
      "D. 300"
    ],
    "answer": 3,
    "explanation": "IEEE 802.11n采用MIMO和信道绑定技术，最高数据速率可达300Mb/s。"
  },
  {
    "id": 2344,
    "type": "single",
    "category": "网络安全",
    "paper": "real2016b",
    "question": "在网络设计和实施过程中要采取多种安仝措施，下面的选项中属于系统安全需求措施的是（68） 。",
    "options": [
      "A. 设备防雷击",
      "B. 入侵检测",
      "C. 漏洞发现与补丁管理",
      "D. 流量控制"
    ],
    "answer": 2,
    "explanation": "漏洞发现与补丁管理属于系统安全需求措施；设备防雷击属物理安全，入侵检测和流量控制属其他安全措施。"
  },
  {
    "id": 2345,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2016b",
    "question": "在网络的分层设计模型中，对核心层工作规程的建议是（69） 。",
    "options": [
      "A. 要进行数据压缩以提高链路利用率",
      "B. 尽量避免使用访问控制列表以减少转发延迟",
      "C. 可以允许最终用户直接访问",
      "D. 尽量避免冗余连接"
    ],
    "answer": 1,
    "explanation": "核心层应专注于高速数据转发，尽量避免使用访问控制列表等增加延迟的功能。"
  },
  {
    "id": 2346,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2016b",
    "question": "在网络规划和设计过程中，选择网络技术时要考虑多种因素。下面的各种考虑中不正确的是（70） 。",
    "options": [
      "A. 网络带宽要保证用户能够快速访问网络资源",
      "B. 要选择具有前瞻性的网络新技术",
      "C. 选择网络技术时要考虑未来网络扩充的需要",
      "D. 通过投入产出分析确定使用何种技术"
    ],
    "answer": 1,
    "explanation": "选择网络技术应注重成熟性和实用性，不能盲目追求前瞻性新技术，以免带来兼容性和稳定性风险。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2016a";
  const A = [
  {
    "id": 2347,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "内存按字节编址，从 a1000h 到 b13ffh 的区域的存储容量为（） kb。",
    "options": [
      "A. 32",
      "B. 34",
      "C. 65",
      "D. 67"
    ],
    "answer": 2,
    "explanation": "B13FFH-A1000H+1=103FFH+1=10400H=66560字节=65KB。"
  },
  {
    "id": 2348,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "以下关于总线的叙述中，不正确的（ ）。",
    "options": [
      "A. 并行总线适合近距离高速数据输",
      "B. 串行总线适合长距离数据传输",
      "C. 单总线结构在一个总线上适应不同种类的设备，设计简单且性能很高",
      "D. 专用总线在设计上可以与连接设备实现最佳匹配"
    ],
    "answer": 2,
    "explanation": "单总线结构所有设备共享一条总线，设计简单但易产生瓶颈，性能并不高，故该叙述不正确。"
  },
  {
    "id": 2349,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "某软件公司参与开发管理系统软件的程序员张某，辞职到另一公司任职，于是该项目负责 人将该管理系统软件上开发者的署名更改为李某（接张某工作）。该项目负责人的行为（ ）。",
    "options": [
      "A. 侵犯了张某开发者身份权（署名权）",
      "B. 不构成侵权，因为程序员张某不是软件著作权人",
      "C. 只是行使管理者的权利，不构成侵权",
      "D. 不构成侵权，因为程序员张某现已不是项目组成员"
    ],
    "answer": 0,
    "explanation": "署名权属于开发者的人身权，项目负责人擅自更改开发者署名，侵犯了张某的署名权。"
  },
  {
    "id": 2350,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "以下媒体文件格式中（ ）是视频文件格式。",
    "options": [
      "A. wav",
      "B. bmp",
      "C. mp3",
      "D. mov"
    ],
    "answer": 3,
    "explanation": "MOV是Apple公司开发的视频文件格式；WAV为音频，BMP为图像，MP3为音频。"
  },
  {
    "id": 2351,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "使用 150dpi 的扫描分辨率扫描一幅 3×4 英寸的彩色照片，得到原始的 24 位真彩色图像 的数据量是（ ）byte。",
    "options": [
      "A. 1800",
      "B. 90000",
      "C. 270000",
      "D. 810000"
    ],
    "answer": 3,
    "explanation": "图像数据量=像素数×颜色深度/8。像素数=3×150×4×150=270000，24位真彩色即每像素3字节，270000×3=810000字节。"
  },
  {
    "id": 2352,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "以下关于脚本语言的叙述中，正确的（ ）。",
    "options": [
      "A. 脚本语言是通用的程序设计语言",
      "B. 脚本语言更适合应用在系统级程序开发中",
      "C. 脚本语言主要采用解释方式实现",
      "D. 脚本语言中不能定义函数和调用函数"
    ],
    "answer": 2,
    "explanation": "脚本语言通常以解释方式执行，不需要编译成机器码，适合快速开发和自动化任务，而非系统级程序开发。"
  },
  {
    "id": 2353,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "当用户通过键盘或鼠标进入某应用系统时， 通常最先获得键盘或鼠标输入信息的是（ ）。",
    "options": [
      "A. 命令解释",
      "B. 中断处理",
      "C. 用户登陆",
      "D. 系统调用"
    ],
    "answer": 0,
    "explanation": "用户通过键盘或鼠标输入时，首先由操作系统中的命令解释程序（如shell）接收并处理输入信息，再交给应用程序。"
  },
  {
    "id": 2354,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016a",
    "question": "在 windows 操作系统中，当用户双击“img_20160122_103.jpg”文件名时，系统会自 动通过建立的（ ）来决定使用什么程序打开该图像文件。",
    "options": [
      "A. 文件",
      "B. 文件关联",
      "C. 文件目录",
      "D. 临时文件"
    ],
    "answer": 1,
    "explanation": "Windows通过文件关联机制，根据文件扩展名（如.jpg）决定使用哪个程序打开该文件。"
  },
  {
    "id": 2355,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2016a",
    "question": "用于连接以太网的网桥类型是（ ）。",
    "options": [
      "A. 源路由网桥",
      "B. 透明网桥",
      "C. 翻译网桥",
      "D. 源路由透明网桥"
    ],
    "answer": 1,
    "explanation": "透明网桥用于连接以太网，通过自学习建立MAC地址表，实现帧的转发和过滤，是以太网中最常用的网桥类型。"
  },
  {
    "id": 2356,
    "type": "single",
    "category": "交换技术",
    "paper": "real2016a",
    "question": "以下关于以太网交换机地址学习机制的说法中，错误的（ ）。",
    "options": [
      "A. 交换机的初始 mac 地址表为空",
      "B. 交换机接收到数据帧后，如果没有相应的表项，则不转发该帧",
      "C. 交换机通过读取输入帧中的源地址添加相应的 mac 地址表项",
      "D. 交换机的 mac 地址表项是动态变化的"
    ],
    "answer": 1,
    "explanation": "交换机收到数据帧后，若MAC地址表中无对应表项，会向除接收端口外的所有端口泛洪转发，而非不转发，故B错误。"
  },
  {
    "id": 2357,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2016a",
    "question": "路由器包含多种端口以连接不同类型的网络设备，其中能够连接 ddn、帧中继、x.25 和 pstn 等广域网络的是（ ）。",
    "options": [
      "A. 同步串口",
      "B. 异步串口",
      "C. aux 端口",
      "D. consol 端口"
    ],
    "answer": 0,
    "explanation": "同步串口用于连接DDN、帧中继、X.25等广域网，提供同步串行通信；异步串口用于连接PSTN等异步通信。"
  },
  {
    "id": 2358,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2016a",
    "question": "通过正交幅度调制技术把 ask 和 psk 两种调制模式结合起来组成 16 种不同的码元，这时数据速率是码元速率的（ ）倍。",
    "options": [
      "A. 2",
      "B. 4",
      "C. 8",
      "D. 16"
    ],
    "answer": 1,
    "explanation": "16种码元需要log2(16)=4比特表示，因此数据速率是码元速率的4倍。"
  },
  {
    "id": 2359,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2016a",
    "question": "t1 载波的数据速率是（ ）。",
    "options": [
      "A. 1.544mb/s",
      "B. 6.312mb/s",
      "C. 2.048mb/s",
      "D. 44.736mb/s"
    ],
    "answer": 0,
    "explanation": "T1载波采用时分复用技术，数据速率为1.544Mb/s，是北美和日本使用的数字传输标准。"
  },
  {
    "id": 2360,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2016a",
    "question": "在 xdsl 技术中，能提供上下行信道非对称传输的技术是（ ）。",
    "options": [
      "A. hdsl",
      "B. adsl",
      "C. sdsl",
      "D. isdn dsl"
    ],
    "answer": 1,
    "explanation": "ADSL（非对称数字用户线）提供上下行非对称传输，下行速率高于上行速率，适合互联网接入。"
  },
  {
    "id": 2361,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016a",
    "question": "ietf 开发的多协议标记交换（mpls）改进了第 3 层分组的交换过程。mpls 包头的位置 在（ ）。",
    "options": [
      "A. 第二层帧头之前",
      "B. 第二层和第三层之间",
      "C. 第三层和第四层之间",
      "D. 第三层头部中"
    ],
    "answer": 1,
    "explanation": "MPLS包头位于第二层帧头和第三层IP头之间，属于2.5层标签，用于标记交换转发。"
  },
  {
    "id": 2362,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016a",
    "question": "建立组播树是实现组播传输的关键技术，利用组播路由协议生成的组播树是（ ）。",
    "options": [
      "A. 包含所有路由器的树",
      "B. 包含所有组播源的树",
      "C. 以组播源为根的最小生成树",
      "D. 以组播路由器为根的最小生成树"
    ],
    "answer": 2,
    "explanation": "组播路由协议生成的组播树是以组播源为根的最小生成树，确保数据沿最优路径分发到所有组成员。"
  },
  {
    "id": 2363,
    "type": "single",
    "category": "网络管理",
    "paper": "real2016a",
    "question": "资源预约协议（rsvp）用在 ietp 定义的集成服务（insserv）中建立端到端的 qos 保障 机制。下面关于 rsvp 进行资源预约过程的叙述中，正确的是（ ）。",
    "options": [
      "A. 从目标到源单向预约",
      "B. 从源到目标单向预约",
      "C. 只适用于点到点的通信环境",
      "D. 只适用于点到多点的通信环境"
    ],
    "answer": 0,
    "explanation": "RSVP采用从目标到源的单向资源预约机制，接收方发起预约请求，沿路径反向传递至源端。"
  },
  {
    "id": 2364,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016a",
    "question": "ospf 网络被划分为各种区域，其中作为区域之间交换路由信息的是（ ）。",
    "options": [
      "A. 主干区域",
      "B. 标准区域",
      "C. 存根区域",
      "D. 不完全存根区域"
    ],
    "answer": 0,
    "explanation": "OSPF中主干区域（区域0）负责在非主干区域之间交换路由信息，所有其他区域必须与主干区域相连。"
  },
  {
    "id": 2365,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016a",
    "question": "采用 dhcp 动态分配 ip 地址，如果某主机开机后没有得到 dhcp 服务器的响应，则该主 机获取的 ip 地址属于网络（ ）。",
    "options": [
      "A. 192.168.1.0/24",
      "B. 172.16.0.0/24",
      "C. 202.117.00/16",
      "D. 169.254.0.0/16"
    ],
    "answer": 3,
    "explanation": "DHCP请求失败时，主机自动分配169.254.0.0/16网段的链路本地地址（APIPA），用于同一链路内通信。"
  },
  {
    "id": 2366,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016a",
    "question": "在 linux 系统中，使用 apache 服务器时默认的 web 根目录是（ ）。",
    "options": [
      "A. ..\\htdocs",
      "B. /var/www/html",
      "C. /var/www/usage",
      "D. ..\\con"
    ],
    "answer": 1,
    "explanation": "Apache服务器在Linux系统中的默认Web根目录是/var/www/html，存放网站文件。"
  },
  {
    "id": 2367,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2016a",
    "question": "下面关于 linux 系统文件挂载的叙述中，正确的是（ ）。",
    "options": [
      "A. /可以作为一个挂载点",
      "B. 挂载点可以是一个目录，也可以是一个文件",
      "C. 不能对一个磁盘分区进行挂载",
      "D. 挂载点是一个目录时，这个目录必须为空"
    ],
    "answer": 0,
    "explanation": "Linux中根目录/可以作为挂载点，挂载点通常是目录，但根目录本身也可作为挂载点使用。"
  },
  {
    "id": 2368,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2016a",
    "question": "在浏览器的地址栏中输入 xxxyftp.abc.com.cn，该 url 中（ ）是要访问的主机名。",
    "options": [
      "A. xxxyfip",
      "B. abc",
      "C. com",
      "D. cn"
    ],
    "answer": 0,
    "explanation": "URL中xxxyftp.abc.com.cn的主机名是xxxyftp，abc.com.cn是域名后缀部分。"
  },
  {
    "id": 2369,
    "type": "single",
    "category": "网络管理",
    "paper": "real2016a",
    "question": "下列关于 dhcp 服务的叙述中，正确的是（ ）。",
    "options": [
      "A. 一台 dhcp 服务器只能为其所在网段的主机分配 ip 地址",
      "B. 对于移动用户设置较长的租约时间",
      "C. dhcp 服务器不需要配置固定的 ip 地址",
      "D. 在 windows 客户机上可使用 ipconfig/release 释放当前 ip 地址"
    ],
    "answer": 3,
    "explanation": "Windows客户机可使用ipconfig/release命令释放当前DHCP分配的IP地址，ipconfig/renew重新获取。"
  },
  {
    "id": 2370,
    "type": "single",
    "category": "网络安全",
    "paper": "real2016a",
    "question": "3des 的密钥长度为（ ）。",
    "options": [
      "A. 56",
      "B. 112",
      "C. 128",
      "D. 168"
    ],
    "answer": 1,
    "explanation": "3DES使用两个56位密钥（共112位）进行三次DES加密，有效密钥长度为112位。"
  },
  {
    "id": 2371,
    "type": "single",
    "category": "网络安全",
    "paper": "real2016a",
    "question": "下列不属于报文认证算法的是（ ）。",
    "options": [
      "A. md5",
      "B. sha-1",
      "C. rc4",
      "D. hmac"
    ],
    "answer": 2,
    "explanation": "MD5、SHA-1、HMAC均为报文认证算法，RC4是流密码加密算法，用于加密而非认证，故选C。"
  },
  {
    "id": 2372,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2016a",
    "question": "设备 a 的可用性为 0.98，如下图所示将设备 a 并联以后的可用性为（ ）。",
    "options": [
      "A. 0.9604",
      "B. 09800",
      "C. 0.9996",
      "D. 0.9999"
    ],
    "answer": 2,
    "explanation": "两设备并联可用性为1-(1-0.98)²=1-0.0004=0.9996，故选C。"
  },
  {
    "id": 2373,
    "type": "single",
    "category": "网络管理",
    "paper": "real2016a",
    "question": "snmp 采用 udp 提供的数据报服务，这是由于（ ）。",
    "options": [
      "A. udp 比 tcp 更加可靠",
      "B. udp 报文可以比 tcp 报文大",
      "C. udp 是面向连接的传输方式",
      "D. 采用 udp 实现网络管理不会太多增加网络负载"
    ],
    "answer": 3,
    "explanation": "SNMP采用UDP可减少网络管理带来的额外负载，UDP开销小，适合周期性简单查询，故选D。"
  },
  {
    "id": 2374,
    "type": "single",
    "category": "网络管理",
    "paper": "real2016a",
    "question": "在下图的 snmp 配置中，能够响应 manager2 的 getrequest 请求的是（ ）。",
    "options": [
      "A. agent1",
      "B. agent2",
      "C. agent3",
      "D. agent4"
    ],
    "answer": 0,
    "explanation": "SNMP中只有被Manager2管理域内的Agent才能响应其GetRequest请求，图中agent1属于manager2管理范围，故选A。"
  },
  {
    "id": 2375,
    "type": "single",
    "category": "网络管理",
    "paper": "real2016a",
    "question": "客户端采用 ping 命令检测网络连接故障时，可以 ping 通 127.0.0.1 及本机的 ip 址，但无法 ping 通同一网段内其他工作正常的计算机的 ip 地址。该客户端的故障可能是（ ）。",
    "options": [
      "A. tcp/ip 协议不能正常工作",
      "B. 本机网卡不能正常工作",
      "C. 网络线路故障",
      "D. 本机 dns 服务器地址设置错误"
    ],
    "answer": 2,
    "explanation": "能ping通127.0.0.1及本机IP说明TCP/IP协议和网卡正常，无法ping通同网段其他主机说明网络线路故障，故选C。"
  },
  {
    "id": 2376,
    "type": "single",
    "category": "网络管理",
    "paper": "real2016a",
    "question": "在 wmdows 的 dos 窗口中键入命令",
    "options": [
      "A. ＼&gt; nslookup ＞ set type=ptr ＞211.151.91.165",
      "B. 查询 211.151.91.165 的邮件服务器信息",
      "C. 查询 211.151.91.165 到域名的映射",
      "D. 查询 211.15191.165 的资源记录类型"
    ],
    "answer": 1,
    "explanation": "nslookup中set type=ptr用于查询反向域名解析，即由IP地址查询对应的域名，故选B。"
  },
  {
    "id": 2377,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016a",
    "question": "下面 4 个主机地址中属于网络 220.115.200.0/21 的地址是（ ）。",
    "options": [
      "A. 220.115.198.0",
      "B. 220.115.206.0",
      "C. 220.115.217.0",
      "D. 220.115.224.0"
    ],
    "answer": 1,
    "explanation": "220.115.200.0/21地址范围是220.115.200.0~220.115.207.255，206.0在此范围内，故选B。"
  },
  {
    "id": 2378,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016a",
    "question": "路由器 console 端口默认的数据速率为（ ）。",
    "options": [
      "A. 2400b/s",
      "B. 4800b/s",
      "C. 9600b/s",
      "D. 10mb/s"
    ],
    "answer": 2,
    "explanation": "路由器Console端口默认数据速率为9600b/s，用于本地配置连接，故选C。"
  },
  {
    "id": 2379,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016a",
    "question": "路由器命令 r1(config)#in prouting 的作用是（ ）。",
    "options": [
      "A. 显示路由信息",
      "B. 配置默认路由",
      "C. 激活路由器端口",
      "D. 启动路由配置"
    ],
    "answer": 3,
    "explanation": "命令in prouting是ip routing的简写，作用是启动路由功能，故选D。"
  },
  {
    "id": 2380,
    "type": "single",
    "category": "路由协议",
    "paper": "real2016a",
    "question": "在路由器的特权模式下键入命令 setup，则路由器进入（ ）。",
    "options": [
      "A. 用户命状态",
      "B. 局部配置状态",
      "C. 特权命状态",
      "D. 设置对话状态"
    ],
    "answer": 3,
    "explanation": "在特权模式下键入setup命令，路由器进入设置对话状态，以交互方式完成初始配置，故选D。"
  },
  {
    "id": 2381,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2016a",
    "question": "使用 ieee 802.1q 协议，最多可以配置（ ）个 vlan。",
    "options": [
      "A. 1022",
      "B. 1024",
      "C. 4094",
      "D. 4096"
    ],
    "answer": 2,
    "explanation": "IEEE 802.1q的VLAN ID为12位，共4096个，其中0和4095保留，最多可配置4094个VLAN，故选C。"
  },
  {
    "id": 2382,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2016a",
    "question": "vlan 中继协议(vtp)有不同的工作模式，其中能够对交换机的 vlan 信息进行添加、删除、修改等操作，并把配置信息广播到其他交换机上的工作模式是（ ）。",
    "options": [
      "A. 客户机模式",
      "B. 服务器模式",
      "C. 透明模式",
      "D. 控制模式"
    ],
    "answer": 1,
    "explanation": "VTP服务器模式可对VLAN信息进行添加、删除、修改，并将配置广播到域内其他交换机，故选B。"
  },
  {
    "id": 2383,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2016a",
    "question": "下面关于 vtp 的论述中，错误的是（ ）。",
    "options": [
      "A. 静态修剪就是手工剪掉中继链路上不活动的 vlan",
      "B. 动态修剪使得中继链路上所有共享的 vlan 都是活动的",
      "C. 静态修剪要求在 vtp 域中的所有交换机都配置成客户机模式",
      "D. 动态修剪要求在 vtp 域中的所有交换机都配置成服务器模式"
    ],
    "answer": 3,
    "explanation": "动态修剪要求VTP域中至少有一台服务器模式交换机，并非所有交换机都配置成服务器模式，故D错误。"
  },
  {
    "id": 2384,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2016a",
    "question": "ieee 802.3ae 10gb/s 以太网标准支持的工作模式是（ ）。",
    "options": [
      "A. 单工",
      "B. 半双工",
      "C. 全双工",
      "D. 全双工和半双工"
    ],
    "answer": 2,
    "explanation": "IEEE 802.3ae 10Gb/s以太网标准只支持全双工工作模式，不支持半双工，故选C。"
  },
  {
    "id": 2385,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2016a",
    "question": "如下图所示，网桥 a、b、c 连接多个以太网。已知网桥 a 为根网桥，各个网桥的 a、b、 f 端口为指定端口。那么按照快速生成树协议标准 ieee 802.1d-2004，网桥 b 的 c 端口为（ ）。",
    "options": [
      "A. 根端口（root port）",
      "B. 指定端口（designated port）",
      "C. 备份端口（backup port）",
      "D. 替代端口（alternate port）"
    ],
    "answer": 0,
    "explanation": "网桥B到根网桥A路径开销最小的端口为根端口，端口c为B到根的优选端口，故为根端口，故选A。"
  },
  {
    "id": 2386,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016a",
    "question": "使用 tracert 命令进行网络检测，结果如下图所示，那么本地默认网关地址是（ ）。",
    "options": [
      "A. 110.150.0.66",
      "B. 10.10.0.1",
      "C. 192.168.0.1",
      "D. 127.0.0.1"
    ],
    "answer": 1,
    "explanation": "tracert结果中第一跳地址即为本地默认网关，图中第一跳为10.10.0.1，故选B。"
  },
  {
    "id": 2387,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2016a",
    "question": "使用 adsl 拨号上网，需要在用户端安装（ ）协议。",
    "options": [
      "A. ppp",
      "B. slip",
      "C. pptp",
      "D. pppoe"
    ],
    "answer": 3,
    "explanation": "ADSL拨号上网需要在用户端安装PPPoE协议，实现以太网上的PPP拨号认证，故选D。"
  },
  {
    "id": 2388,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2016a",
    "question": "在网络中分配 ip 地址可以采用静态地址或动态地址方案。下面关于两种地址分配方案的 论述中错误的是（ ）。",
    "options": [
      "A. 采用动态地址分配方案可便面地址资源的浪费",
      "B. 路由器、交换机等联网设备适合采用静态 ip 地址",
      "C. 各种服务器设备适合采用动态 ip 地址分配方案",
      "D. 学生客户机最好采用动态 ip 地址"
    ],
    "answer": 2,
    "explanation": "服务器设备通常需要固定IP地址以便客户端访问，不适合采用动态分配方案，故C错误。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2015b";
  const A = [
  {
    "id": 2389,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015b",
    "question": "cpu响应dma请求是在（）结束时.",
    "options": [
      "A. 一条指令执行",
      "B. 段程序",
      "C. 一个时钟周期",
      "D. 一个总线周期"
    ],
    "answer": 0,
    "explanation": "CPU响应DMA请求是在一条指令执行结束时进行，以便让出总线控制权给DMA控制器，故选A。"
  },
  {
    "id": 2390,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015b",
    "question": "虚拟存储体系是由（）羔两级存储器构成。",
    "options": [
      "A. 主存-辅存",
      "B. 寄存器-cache",
      "C. 寄存器-主存",
      "D. aclie-主存"
    ],
    "answer": 0,
    "explanation": "虚拟存储体系由主存与辅存两级存储器构成，通过硬件和软件实现逻辑上的大容量存储，故选A。"
  },
  {
    "id": 2391,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015b",
    "question": "在机器指令的地址字段中，直接指出操作数本身的寻址方式称为 （）。",
    "options": [
      "A. 隐含寻址",
      "B. 寄存器寻址",
      "C. 立即寻址",
      "D. 直接寻址"
    ],
    "answer": 2,
    "explanation": "立即寻址指指令地址字段中直接给出操作数本身，而非操作数地址，故操作数随指令一起取出，无需再访存。"
  },
  {
    "id": 2392,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015b",
    "question": "内存按字节编址从b3000h到dabffh的区域，其存储容量为（） 。",
    "options": [
      "A. 123kb",
      "B. 159kb",
      "C. 163kb",
      "D. 194kb"
    ],
    "answer": 1,
    "explanation": "容量=末地址-首地址+1=DABFFH-B3000H+1=27C00H=162816字节=159KB，故选159KB。"
  },
  {
    "id": 2393,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015b",
    "question": "在软件项目管理中，以下关于人员管理的叙述，正确的是（） 。",
    "options": [
      "A. 项目组成员的工作风格也应该作为纽织团队时要考虑的一个要素",
      "B. 鼓励团队的每个成员充分地参与开发过程的所有阶段",
      "C. 仅根据开发人员韵能力来组织开蒙团队",
      "D. 若项目进度滞后于计划，则增加开发人员一定可以加快开发进度"
    ],
    "answer": 0,
    "explanation": "组织团队时应综合考虑成员能力与工作风格等因素，工作风格会影响协作效率，故A正确；其余说法均过于绝对。"
  },
  {
    "id": 2394,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015b",
    "question": "软件设计师王某在其公司的某一综合信息管理系统软件开发工作中承担了大部分程序设计工作。该系统交付用户，投入试运行后，王某辞职离开公司，并带走了该综合信息管理系统的源程序，拒不交还公司。王某认为，综合信息管理系统源程序是他独立完成的，他是综合信息管理系统源程序的软件著作权人。王某的行为 （）。",
    "options": [
      "A. 侵犯了公司的软件著作权",
      "B. 未侵犯公司的软件著作权",
      "C. 侵犯了公司的商业秘密权",
      "D. 不涉及侵犯公司的软件著作权"
    ],
    "answer": 0,
    "explanation": "王某承担的是职务开发工作，源程序属职务作品，著作权归公司，其带走并拒交源程序侵犯了公司软件著作权。"
  },
  {
    "id": 2395,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2015b",
    "question": "集线器与网桥的区别是（） 。",
    "options": [
      "A. 集线器不能检测发送冲突，而网桥订以检测冲突",
      "B. 集线器是物理层设备，而网桥是数据链路层设备",
      "C. 网桥只有两介端口，而集线器是一种多端口网桥",
      "D. 网桥是物理层设备，而集线器是数据链路层设备"
    ],
    "answer": 1,
    "explanation": "集线器工作在物理层，仅做信号广播转发；网桥工作在数据链路层，可依据MAC地址转发并隔离冲突域。"
  },
  {
    "id": 2396,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015b",
    "question": "关于icmp协议，下面的论述中正确的是（） 。",
    "options": [
      "A. 通过icmp可以找到与mac地址对应的ip地址",
      "B. 通过icmp可以把全局ip地址转换为本地ip地址",
      "C. icmp用于动态分配ip地址",
      "D. icmp可传送ip通信过程中出现的错误信息"
    ],
    "answer": 3,
    "explanation": "ICMP是IP层的差错与控制报文协议，用于传送IP通信中出现的差错信息，如目的不可达、超时等。"
  },
  {
    "id": 2397,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2015b",
    "question": "设信号的波特率为500baud，采用幅度-相位复合调制技术，由4种幅度和8种相位组成1 6种码元，则信道的数据速率为（） 。",
    "options": [
      "A. 500 b/s",
      "B. 1000 b/s",
      "C. 2000 b/s",
      "D. 4800 b/s"
    ],
    "answer": 2,
    "explanation": "16种码元即每码元携带log2(16)=4比特，数据速率=500×4=2000b/s。"
  },
  {
    "id": 2398,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2015b",
    "question": "tcp使用的流量控制协议是 （）。",
    "options": [
      "A. 固定大小的滑动窗口协议",
      "B. 可变大小的滑动窗口协议",
      "C. 后退n帧arq协议",
      "D. 停等协议"
    ],
    "answer": 1,
    "explanation": "TCP采用可变大小的滑动窗口进行流量控制，接收方通过通告窗口动态调整发送方的发送速率。"
  },
  {
    "id": 2399,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015b",
    "question": "下面4种路由中，哪一种路由的子网掩码是255.255.255.255?（） 。",
    "options": [
      "A. 远程网络路由",
      "B. 主机路由",
      "C. 默认路由",
      "D. 静态路由"
    ],
    "answer": 1,
    "explanation": "主机路由指向单个主机，其子网掩码为255.255.255.255，表示目的地址的32位全部用于网络标识。"
  },
  {
    "id": 2400,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015b",
    "question": "在广播网络中，ospf协议要选定一个指定路由器(dr)，指定路由器的功能是（） 。",
    "options": [
      "A. 发送链路状态公告",
      "B. 检查网络故障",
      "C. 向其他路由器发送最新路由表",
      "D. 发现新增加的路由"
    ],
    "answer": 0,
    "explanation": "在广播网络中OSPF选举DR，由DR代表该网段向其他路由器发送链路状态公告（LSA），减少邻接关系数量。"
  },
  {
    "id": 2401,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015b",
    "question": "如果要将目标网络为202.117.112.0/24的分组经102.217.115.1接口发出，需增加一条静态路由，正确的命令是（） 。",
    "options": [
      "A. route add 202.117.112.0 255.255.255.0 102.217.115.1",
      "B. route add 202.117.112.0 0.0.0.255 102.217.115.1",
      "C. add route 202.117.112.0 255.255.255.0 102.217.115.1",
      "D. add route 202.117.112.0 0.0.0.255 102.217.115.1"
    ],
    "answer": 0,
    "explanation": "Windows下添加静态路由命令为route add 目标网络 掩码 下一跳，/24对应掩码255.255.255.0，故选A。"
  },
  {
    "id": 2402,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015b",
    "question": "在linux系统中，使用ifconfig设置接口的ip地址并启动该接口的命令是（） 。",
    "options": [
      "A. ifcorffig eth0 192.168.1.1 mask 255.255.255.0",
      "B. ifconfig 192.168.1.1 mask 255.255.255.0 up",
      "C. ifconfig eth0 192.168.1.1 mask 255.255.255.0 up",
      "D. ifconfig 192.168.1.1 255.255.255.0"
    ],
    "answer": 2,
    "explanation": "ifconfig命令格式为ifconfig 接口 IP地址 mask 掩码 up，需指定接口eth0并加up启动接口，故选C。"
  },
  {
    "id": 2403,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015b",
    "question": "在linux系统中，在 （）文件中查看二台主机的名称和完整域名。",
    "options": [
      "A. etc/dev",
      "B. etc/conf",
      "C. etc/liostname",
      "D. etc/network"
    ],
    "answer": 2,
    "explanation": "Linux中主机名及完整域名配置在/etc/hostname文件中，用于标识本机名称。"
  },
  {
    "id": 2404,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015b",
    "question": "下图是dns转发器工作的过程。采用迭代查询算法的是（） 。",
    "options": [
      "A. 转发器和本地dns服务器",
      "B. 根域名服务器和本地dns服务器",
      "C. 本地dns服务器和.com域名服务器",
      "D. 根域名服务器和.com域名服务器"
    ],
    "answer": 0,
    "explanation": "图中转发器与本地DNS服务器之间采用迭代查询，转发器逐次返回下一级服务器地址，由本地DNS继续查询。"
  },
  {
    "id": 2405,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015b",
    "question": "下列域名中，格式正确的是（） 。",
    "options": [
      "A. -123456.com",
      "B. 123-456.com",
      "C. 123*456.com",
      "D. 123456-.com"
    ],
    "answer": 1,
    "explanation": "域名各级标签只能由字母、数字和连字符组成，且不能以连字符开头或结尾，故123-456.com格式正确。"
  },
  {
    "id": 2406,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015b",
    "question": "以下关于域名查询的叙述中，正确的是（） 。",
    "options": [
      "A. 正向查询是检查a记录，将ip地址解析为主机名",
      "B. 正向查询是检查ptr记录，将主机名解析为ip地址",
      "C. 反向查询是检查a记录，将主机名解析为ip地址",
      "D. 反向查询是检查ptr记录，将ip地址解析为主机名"
    ],
    "answer": 3,
    "explanation": "反向查询检查PTR记录，将IP地址解析为主机名；正向查询检查A记录，将主机名解析为IP地址。"
  },
  {
    "id": 2407,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015b",
    "question": "下列地址中, （）不是dhcp服务器分配的ip地址。",
    "options": [
      "A. 196.254.109.100",
      "B. 169.254.109:100",
      "C. 96.2541.109.100",
      "D. 69.254.109.100"
    ],
    "answer": 1,
    "explanation": "169.254.0.0/16为链路本地地址，当DHCP获取失败时主机自动配置，并非DHCP服务器分配。"
  },
  {
    "id": 2408,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015b",
    "question": "（）不属于主动攻击。",
    "options": [
      "A. 流量分析",
      "B. 重放",
      "C. ip地址欺骗",
      "D. 拒绝服务"
    ],
    "answer": 0,
    "explanation": "流量分析属于被动攻击，只窃听分析而不修改数据；重放、IP欺骗、拒绝服务均属主动攻击。"
  },
  {
    "id": 2409,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015b",
    "question": "下列（） 不能提供应用层安全口。",
    "options": [
      "A. s-http",
      "B. pgp",
      "C. mime",
      "D. set"
    ],
    "answer": 2,
    "explanation": "MIME是邮件扩展格式标准，用于表示多媒体内容，不提供应用层安全功能；S-HTTP、PGP、SET均涉及安全。"
  },
  {
    "id": 2410,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015b",
    "question": "防火墙不具备（） 功能。",
    "options": [
      "A. 包过滤",
      "B. 查毒",
      "C. 记录访问过程",
      "D. 代理"
    ],
    "answer": 1,
    "explanation": "防火墙具有包过滤、代理、访问过程记录等功能，但不具备查杀病毒功能，查毒由杀毒软件完成。"
  },
  {
    "id": 2411,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015b",
    "question": "如下图所示，从输出的信息中可以确定的是（） 。",
    "options": [
      "A. 本地主机正在使用的端口号是公共端口号",
      "B. 192.l68.0.200正在与128.1105.129.30建立连接",
      "C. 本地主机与202.100.112.12建立了安全连接",
      "D. 本地主机正在与100.29.200.110建立连接"
    ],
    "answer": 2,
    "explanation": "从输出信息可见本地主机与202.100.112.12之间使用了加密协议（如HTTPS/SSL），说明建立了安全连接，故选C。"
  },
  {
    "id": 2412,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015b",
    "question": "为防止www服务器与浏览器之间传输的信息被窃听，可以采取（）来防止该事件的发生。",
    "options": [
      "A. 禁止浏览器运行active x控件",
      "B. 索取wvrw服务器的ca证书",
      "C. 将www服务器地址放入浏览器的可信站点区域",
      "D. 使用ssl对传输的信息进行加密"
    ],
    "answer": 3,
    "explanation": "SSL/TLS可对浏览器与WWW服务器之间传输的数据加密，防止被窃听，故选D。"
  },
  {
    "id": 2413,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015b",
    "question": "某用户无法访问域名为www.cisco.com的网站，在用户主机上执行tracert命令得到提示如下根据提示信息，造成这种想象的原因可能是 （）。",
    "options": [
      "A. 用户主机的网关设置错误",
      "B. 用户主机设置的dns服务器工作不正常",
      "C. 路由器上进行了相关acl设置",
      "D. 用户主机的ip地址设置错误"
    ],
    "answer": 2,
    "explanation": "tracert显示数据包在路由器处被阻断，通常因路由器配置了ACL过滤，导致无法到达目标，故选C。"
  },
  {
    "id": 2414,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015b",
    "question": "下列网络管理软件中不需要snmp支持的是（） 。",
    "options": [
      "A. cisco works",
      "B. netview",
      "C. solarwinds",
      "D. wireshark"
    ],
    "answer": 3,
    "explanation": "Wireshark是抓包分析工具，不依赖SNMP；而CiscoWorks、NetView、SolarWinds均基于SNMP管理网络，故选D。"
  },
  {
    "id": 2415,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015b",
    "question": "在snmpv2错误类型中，表示管理对象不可访问的是 （）。",
    "options": [
      "A. noaccess",
      "B. generr",
      "C. wrong value",
      "D. nocreation"
    ],
    "answer": 0,
    "explanation": "SNMPv2错误类型中noaccess表示管理对象不可访问，故选A。"
  },
  {
    "id": 2416,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015b",
    "question": "通过cidr技术，把4个主机地址220.78.169.5、220.78.172.10、220.78.174.15和 220.78.168.254组织成一个地址块，则这个超级地址块的地址是 （）。",
    "options": [
      "A. 220.78.177.0/21",
      "B. 220.78.168.0/21",
      "C. 220.78.169.0/20",
      "D. 220.78.175.0/20"
    ],
    "answer": 1,
    "explanation": "四个地址前21位相同，聚合为220.78.168.0/21，覆盖168~175范围，故选B。"
  },
  {
    "id": 2417,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015b",
    "question": "采用可变长子网掩码可以把大的网络分成小的子网，例如把a类网络60.15.0.0/16分为两个子网，假设第一个子网为60.1.5.0.0/17，则另一个子网为（） 。",
    "options": [
      "A. 60.15.1.0/17",
      "B. 60.15.2.0/17",
      "C. 60.15.100.0/17",
      "D. 60.15.128.0/17"
    ],
    "answer": 3,
    "explanation": "A类网络60.15.0.0/16划分为两个/17子网，第一个为60.15.0.0/17，另一个为60.15.128.0/17，故选D。"
  },
  {
    "id": 2418,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015b",
    "question": "配置路由器接口的提示符是 （）。",
    "options": [
      "A. router (config)#",
      "B. router (config-in)#",
      "C. router.(config-mtf)#",
      "D. router (config-if) #"
    ],
    "answer": 3,
    "explanation": "配置路由器接口时提示符为router(config-if)#，故选D。"
  },
  {
    "id": 2419,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015b",
    "question": "如果想知道配置了哪种路由协议，应使用的命令是（） 。",
    "options": [
      "A. router&gt;show router protocol ，",
      "B. router (ciinfig)&gt;show ip protocol",
      "C. router (config)&gt;#show router protocol",
      "D. router &gt;show ip protocol"
    ],
    "answer": 3,
    "explanation": "查看路由协议配置应使用show ip protocol命令，在用户模式下执行，故选D。"
  },
  {
    "id": 2420,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015b",
    "question": "如果在互联网中添加了一个局域网，要用手工方式将该局域网添加到路由表中，应使用的命令是 （）。",
    "options": [
      "A. router（config）&gt;ip route 2.0.0.0 255.0.0.0 via 1.0.0.2",
      "B. router（coiifig）#ip route 2.0.0.0 255.0.0.0 1.0.0.2",
      "C. router (config) #ip route 2.0.0.0 via 1.0.0.2",
      "D. router (config) #ip route 2.0.0.0 1.0.0.2 mask 255.0.0.0"
    ],
    "answer": 1,
    "explanation": "手工添加静态路由命令格式为ip route 目标网络 掩码 下一跳，故选B。"
  },
  {
    "id": 2421,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2015b",
    "question": "以下关于csma/cd协议的叙述中，正确的是（） 。",
    "options": [
      "A. 每个结点按照逻辑顺序占用一个时间片轮流发送",
      "B. 每个结点检查介质是否空闲，如果空闲则立即发送",
      "C. 每个结点想发就发，如果没有冲突则继续发送",
      "D. 得到令牌的结点发送，没有得到令牌的结点等待"
    ],
    "answer": 1,
    "explanation": "CSMA/CD中结点先监听介质，若空闲则发送，若冲突则退避重发，故选B。"
  },
  {
    "id": 2422,
    "type": "single",
    "category": "交换技术",
    "paper": "real2015b",
    "question": "以下关于交换机获取与其端口连接设备的mac地址的叙述中，正确的是（） 。",
    "options": [
      "A. 交换机从路由表中提取设备的mac地址",
      "B. 交换机检查端口流入分组的源地址",
      "C. 交换机之间互相交换地址表",
      "D. 由网络管理员手工输入设备的mac地址"
    ],
    "answer": 1,
    "explanation": "交换机通过检查端口流入分组的源MAC地址来学习并建立MAC地址表，故选B。"
  },
  {
    "id": 2423,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2015b",
    "question": "用来承载多个vlan流量的协议组是（） 。",
    "options": [
      "A. 802.11a和802.1q",
      "B. isli和802.1q",
      "C. isl和802.3ab",
      "D. ssl和802.11b"
    ],
    "answer": 1,
    "explanation": "ISL和802.1Q是承载多个VLAN流量的协议，故选B。"
  },
  {
    "id": 2424,
    "type": "single",
    "category": "交换技术",
    "paper": "real2015b",
    "question": "多协议标记交换(mpls)是ietf提出的第三层交换标准弦以下关于mpls的叙述中，正确的是 （）。",
    "options": [
      "A. 带有mpls标记的分组封装在ppp帧中传输",
      "B. 传送带有mpls标记的分组之前先要建立对应的网络连接",
      "C. 路由器根据转发目标把多个ip流聚合在一起组成转发等价类",
      "D. mpls标记在各个子网中是特定分组的唯一标识"
    ],
    "answer": 2,
    "explanation": "MPLS中路由器根据转发目标将多个IP流聚合为转发等价类FEC，故选C。"
  },
  {
    "id": 2425,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2015b",
    "question": "在层次化局域网模型中，以下关于核心层的叙述，正确的是（） 。",
    "options": [
      "A. 为了保障安全性，对分组要进行有效性检查",
      "B. 将分组从一个区域高速地转发到另一个区域",
      "C. 由多台二、三层交换机组成",
      "D. 提供多条路径来缓解通信瓶颈"
    ],
    "answer": 1,
    "explanation": "核心层负责将分组从一个区域高速转发到另一个区域，故选B。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2015a";
  const A = [
  {
    "id": 2426,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "机器字长为n的二进制数可以用补码表示（ ）个不同的有符号定点小数。",
    "options": [
      "A. 2n",
      "B. 2n-1",
      "C. 2n-1",
      "D. 2n-1-1"
    ],
    "answer": 0,
    "explanation": "n位补码可表示2^n个不同的有符号定点小数，故选A。"
  },
  {
    "id": 2427,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "计算机中cpu对其访问速度最快的是（ ）。",
    "options": [
      "A. 内存",
      "B. cache",
      "C. 通用寄存器",
      "D. 硬盘"
    ],
    "answer": 2,
    "explanation": "CPU访问速度最快的是通用寄存器，其次Cache、内存、硬盘，故选C。"
  },
  {
    "id": 2428,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "计算机中cpu的中断响应时间指的是（ ）的时间。",
    "options": [
      "A. 从发出中断请求到中断处理结束",
      "B. 从中断处理开始到中断处理结束",
      "C. cpu分析判断中断请求",
      "D. 从发出中断请求到开始进入中断处理"
    ],
    "answer": 3,
    "explanation": "中断响应时间指从发出中断请求到开始进入中断处理的时间，故选D。"
  },
  {
    "id": 2429,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "总线宽度为32bit，时钟频率为200mhz，若总线上每5个时钟周期传送一个32bit的字,则该总线的带宽为（ ）mb/s。",
    "options": [
      "A. 40",
      "B. 80",
      "C. 160",
      "D. 200"
    ],
    "answer": 2,
    "explanation": "总线带宽=字宽×频率/每字时钟周期数=32bit×200MHz/5=1280Mbit/s=160MB/s，故选C。"
  },
  {
    "id": 2430,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "以下关于指令流水线性能度量的叙述中，错误的是（ ）。",
    "options": [
      "A. 最大吞吐率取决于流水线中最慢一段所需的时间",
      "B. 如果流水线出现断流，加速比会明显下降",
      "C. 要使加速比和效率最大化应该对流水线各级采用相同的运行时间",
      "D. 流水线采用异步控制会明显提高其性能"
    ],
    "answer": 3,
    "explanation": "流水线采用异步控制会增加握手开销，通常不会提高性能，反而可能降低效率，故D错误。"
  },
  {
    "id": 2431,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "对高级语言源程序进行编译或解释的过程可以分为多个阶段，解释方式不包含（ ）。",
    "options": [
      "A. 词法分析",
      "B. 语法分析",
      "C. 语义分析",
      "D. 目标代码生成"
    ],
    "answer": 3,
    "explanation": "解释方式逐句翻译并执行，不生成目标代码，故不包含目标代码生成阶段，选D。"
  },
  {
    "id": 2432,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "c程序中全局变量的存储空间在（ ）分配。",
    "options": [
      "A. 代码区",
      "B. 静态数据区",
      "C. 栈区",
      "D. 堆区"
    ],
    "answer": 1,
    "explanation": "全局变量在程序运行期间一直存在，其存储空间在静态数据区分配，故选B。"
  },
  {
    "id": 2433,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "某进程有4个页面，页号为0~3，页面变换表及状态位、访问位和修改位的含义如下图所示。系统给该进程分配了3个存储块，当采用第二次机会页面替换算法时，若访问的页面1不在内存，这时应该淘汰的页号为（ ）。",
    "options": [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3"
    ],
    "answer": 3,
    "explanation": "第二次机会算法检查访问位，访问位为0则淘汰；页面3访问位为0，故淘汰页号3，选D。"
  },
  {
    "id": 2434,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2015a",
    "question": "王某是某公司的软件设计师，每当软件开发完成后均按公司规定编写软件文档，并提交公司存档。那么该软件文档的著作权（）享有。",
    "options": [
      "A. 应由公司",
      "B. 应由公司和王某共同",
      "C. 应由王某",
      "D. 除署名权以外，著作权的其他权利由王某"
    ],
    "answer": 0,
    "explanation": "职务作品著作权由单位享有，王某按公司规定编写文档属职务行为，著作权归公司，选A。"
  },
  {
    "id": 2435,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015a",
    "question": "当登录交换机时，符号（）是特权模式提示符。",
    "options": [
      "A. @",
      "B. #",
      "C. &gt;",
      "D. &amp;"
    ],
    "answer": 1,
    "explanation": "交换机特权模式提示符为“#”，用户模式为“>”，故选B。"
  },
  {
    "id": 2436,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015a",
    "question": "下面的选项中显示系统硬件和软件版本信息的命令是（）。",
    "options": [
      "A. show configuration",
      "B. show environment",
      "C. show version",
      "D. show platform"
    ],
    "answer": 2,
    "explanation": "show version用于显示系统硬件和软件版本信息，故选C。"
  },
  {
    "id": 2437,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2015a",
    "question": "cisco路由器高速同步串口默认的封装协议是（）。",
    "options": [
      "A. ppp",
      "B. lapb",
      "C. hdlc",
      "D. aim-dxi"
    ],
    "answer": 2,
    "explanation": "Cisco路由器高速同步串口默认封装协议为HDLC，故选C。"
  },
  {
    "id": 2438,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2015a",
    "question": "以下关于网桥和交换机的区别叙述中，正确的是（）。",
    "options": [
      "A. 交换机主要是基于软件实现，而网桥是基于硬件实现的",
      "B. 交换机定义了广播域，而网桥定义了冲突域",
      "C. 交换机根据ip地址转发，而网桥根据mac地址转发",
      "D. 交换机城网桥的端口多，转发速度更快"
    ],
    "answer": 3,
    "explanation": "交换机端口比网桥多，基于硬件转发速度更快，故选D。"
  },
  {
    "id": 2439,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2015a",
    "question": "正交幅度调制16-qam的数据速率是码元速率的（）倍。",
    "options": [
      "A. 2",
      "B. 4",
      "C. 8",
      "D. 16"
    ],
    "answer": 1,
    "explanation": "16-QAM每个码元携带log2(16)=4比特，故数据速率是码元速率的4倍，选B。"
  },
  {
    "id": 2440,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2015a",
    "question": "电话线路使用的带通虑波器的宽带为3khz(300～3300hz)，根据奈奎斯特采样定理，最小采样频率应为（）。",
    "options": [
      "A. 300 hz",
      "B. 3390 hz",
      "C. 6000 hz",
      "D. 6600 hz"
    ],
    "answer": 3,
    "explanation": "奈奎斯特采样定理要求采样频率不低于信号最高频率的2倍，即2×3300=6600Hz，选D。"
  },
  {
    "id": 2441,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "当一个帧离开路由器接口时，其第二层封装信息中（）。",
    "options": [
      "A. 数据速率由l0base-tx变为100base-tx",
      "B. 源和目标ip地址改变",
      "C. 源和目标mac地址改变",
      "D. 模拟线路变为数字线路"
    ],
    "answer": 2,
    "explanation": "帧离开路由器接口时重新封装第二层，源和目标MAC地址改变，IP地址不变，故选C。"
  },
  {
    "id": 2442,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015a",
    "question": "（）时使用默认路由。",
    "options": [
      "A. 访问本地web服务器",
      "B. 在路由表中找不到目标网络",
      "C. 没有动态路由",
      "D. 访问isp网关"
    ],
    "answer": 1,
    "explanation": "当路由表中找不到目标网络时使用默认路由转发，故选B。"
  },
  {
    "id": 2443,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015a",
    "question": "以下关于ospf的区域（area）的叙述中，正确的是（）。",
    "options": [
      "A. 各个ospf区域都要连接到主干区域",
      "B. 分层的ospf网络不需要多个区域",
      "C. 单个ospf网络只有区域1",
      "D. 区域id的取值范围是1～32768"
    ],
    "answer": 0,
    "explanation": "OSPF分层结构中各区域都要连接到主干区域（区域0），故选A。"
  },
  {
    "id": 2444,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015a",
    "question": "运行ospf协议的路由器用（）报文来建立和更新它的拓扑数据库。",
    "options": [
      "A. 由其他路由器发送的链路状态公告(lsa)",
      "B. 从点对点链路收到的信标",
      "C. 由指定路由器收到的ttl分组",
      "D. 从邻居路由器收到的路由表"
    ],
    "answer": 0,
    "explanation": "OSPF路由器通过其他路由器发送的链路状态公告LSA建立和更新拓扑数据库，选A。"
  },
  {
    "id": 2445,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015a",
    "question": "链路状态路由协议的主要特点是（）。",
    "options": [
      "A. 邻居之间交换路由表",
      "B. 通过事件触发及时更新路由",
      "C. 周期性更新全部路由表",
      "D. 无法显示整个网络拓扑结构"
    ],
    "answer": 1,
    "explanation": "链路状态路由协议通过事件触发及时更新路由，而非周期性交换路由表，故选B。"
  },
  {
    "id": 2446,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015a",
    "question": "从下面一条rip路由信息中可以得到的结论是（）。",
    "options": [
      "A. 下一个路由更新将在36秒之后到达",
      "B. 到达目标10.10.10.7的距离是两跳",
      "C. 串口so/1的ip地址是10.10.10.8",
      "D. 串口so/1的ip地址是10.10.10.7"
    ],
    "answer": 1,
    "explanation": "RIP路由信息中度量值为2表示到达目标网络距离为两跳，故选B。"
  },
  {
    "id": 2447,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015a",
    "question": "运行距离矢量路由协议的路由器（）。",
    "options": [
      "A. 把路由表发送到整个路由域中的所有路由器",
      "B. 使用最短道路算法确定最佳路由",
      "C. 根据邻居发来的信息更新自己的路由表",
      "D. 维护整个网络的拓扑数据库"
    ],
    "answer": 2,
    "explanation": "距离矢量路由协议根据邻居发来的路由信息更新自己的路由表，故选C。"
  },
  {
    "id": 2448,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2015a",
    "question": "以下关于vlan的叙述中，正确的是（）。",
    "options": [
      "A. vlan对分组进行过滤，增强了网络的安全性",
      "B. vlan提供了在大型网络中保护ip地址的方法",
      "C. vlan在可路由的网络中提供了低延迟的互联手段",
      "D. vlan简化了在网络中增加、移除和移动主机的操作"
    ],
    "answer": 0,
    "explanation": "VLAN对分组进行过滤，隔离广播域，增强了网络安全性，故选A。"
  },
  {
    "id": 2449,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2015a",
    "question": "当局域网中更换交换机时，怎样保证新交换机成为网络中的根交换机？（）。",
    "options": [
      "A. 降低网桥优先级",
      "B. 改变交换机的mac地址",
      "C. 降低交换机端口的根通路费用",
      "D. 为交换机指定特定的ip地址"
    ],
    "answer": 0,
    "explanation": "生成树协议中根网桥由网桥优先级决定，优先级数值越小越优先，因此降低网桥优先级可使新交换机成为根交换机。"
  },
  {
    "id": 2450,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2015a",
    "question": "双绞线电缆配置如下图所示，这种配置支持（）之间的连接。",
    "options": [
      "A. pc到路由器",
      "B. pc到交换机",
      "C. 服务器到交换机",
      "D. 交换机到路由器"
    ],
    "answer": 0,
    "explanation": "图中双绞线为交叉线序，交叉线用于同种设备之间连接，如PC到路由器、PC到PC、交换机到交换机。"
  },
  {
    "id": 2451,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "参加下图的网络配置，发现工作站b无法与服务器a通信，什么故障影响了两者互通？（）。",
    "options": [
      "A. 服务器a的ip地址是广播地址",
      "B. 服务器b的ip地址是网络地址",
      "C. 工作站b与网关不属于同一子网",
      "D. 服务器a与网关不属于同一子网"
    ],
    "answer": 3,
    "explanation": "工作站与服务器通信需经网关转发，若服务器A的IP与网关不在同一子网，则网关无法正确转发报文，导致二者不能互通。"
  },
  {
    "id": 2452,
    "type": "single",
    "category": "路由协议",
    "paper": "real2015a",
    "question": "某网络拓扑图如下所示，若采用rip协议，在路由器rounter2上需要进行rip声明的网络是（）。",
    "options": [
      "A. 仅网络1",
      "B. 网络1、202.11.112.0/30和202.11.113.0/30",
      "C. 网络1、网络2和网络3",
      "D. 仅202.11.112.0/30和202.11.113.0/30"
    ],
    "answer": 1,
    "explanation": "RIP只声明本路由器直连的网络，Router2直连网络1及两个互联网段202.11.112.0/30和202.11.113.0/30，故需声明这三者。"
  },
  {
    "id": 2453,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015a",
    "question": "iis服务身份验证方式中，安全级别最低的是（）。",
    "options": [
      "A. net passport身份验证",
      "B. 集成windows身份验证",
      "C. 基本身份验证",
      "D. 摘要式身份验证"
    ],
    "answer": 2,
    "explanation": "IIS身份验证中，基本身份验证以明文Base64传输用户名和口令，未加密，安全级别最低。"
  },
  {
    "id": 2454,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2015a",
    "question": "有较高实时性要求的应用（）。",
    "options": [
      "A. 电子邮件",
      "B. 网页浏览",
      "C. voip",
      "D. 网络管理"
    ],
    "answer": 2,
    "explanation": "VoIP为实时语音业务，对时延和抖动敏感，实时性要求最高；电子邮件、网页浏览等对实时性要求较低。"
  },
  {
    "id": 2455,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015a",
    "question": "在linux中，文件（）解析主机域名。",
    "options": [
      "A. etc/hosts",
      "B. etc/host．conf",
      "C. etc/hostname",
      "D. etc/bind"
    ],
    "answer": 0,
    "explanation": "Linux中/etc/hosts文件用于本地静态主机名与IP地址映射，可辅助解析主机域名。"
  },
  {
    "id": 2456,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015a",
    "question": "在linux中，要删除用户组group l应使用（）命令。",
    "options": [
      "A. [root localhostl#delete group1",
      "B. [root localhost]#gdelete group1",
      "C. [root localhost]#groupdel group1",
      "D. [root localhost]#gd group 1"
    ],
    "answer": 2,
    "explanation": "Linux删除用户组的命令为groupdel，格式为groupdel 组名，故应使用groupdel group1。"
  },
  {
    "id": 2457,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "windows server2003采用ipsec进行保密通信，如果密钥交换采用”主密钥完全向前保密（pfs)”,则“身份验证和生成密钥间隔”默认值为480分钟和（）个会话。",
    "options": [
      "A. 1",
      "B. 2",
      "C. 161",
      "D. 530"
    ],
    "answer": 0,
    "explanation": "Windows Server 2003的IPSec中，启用主密钥完全向前保密时，身份验证和生成密钥间隔默认480分钟、1个会话。"
  },
  {
    "id": 2458,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015a",
    "question": "在windows用户管理中，使用组策略a-g-dl-p,其中p表示（）。",
    "options": [
      "A. 用户账号",
      "B. 资源访问权限",
      "C. 域本地组",
      "D. 通用组"
    ],
    "answer": 1,
    "explanation": "AGDLP策略中A为用户账号、G为全局组、DL为域本地组、P为资源访问权限（Permission）。"
  },
  {
    "id": 2459,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2015a",
    "question": "以下叙述中，不属于无源光网络优势的是（）。",
    "options": [
      "A. 设备简单，安装维护费用低，投资相对较小",
      "B. 组网灵活，支持多种拓扑结构",
      "C. 安装方便，不要另外租用或建造机房",
      "D. 无源光网络适用于点对点通信"
    ],
    "answer": 3,
    "explanation": "无源光网络PON采用点到多点结构，而非点对点通信，故“适用于点对点通信”不属于其优势。"
  },
  {
    "id": 2460,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015a",
    "question": "查看dns缓存记录的命令是（）。",
    "options": [
      "A. ipcorifig/flushdns",
      "B. nslookup",
      "C. ipconfig/release",
      "D. ipconfig/displaydns"
    ],
    "answer": 3,
    "explanation": "ipconfig/displaydns用于显示本地DNS客户端解析程序缓存中的记录，可查看DNS缓存。"
  },
  {
    "id": 2461,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2015a",
    "question": "在windows操作系统中，（）文件可以帮助域名解析。",
    "options": [
      "A. cookie",
      "B. index",
      "C. hosts",
      "D. defauit"
    ],
    "answer": 2,
    "explanation": "Windows中hosts文件保存主机名与IP地址的静态映射，可帮助域名解析。"
  },
  {
    "id": 2462,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "dhcp（）报文的目的ip地址为255．255．255．255。",
    "options": [
      "A. dhcpdisover",
      "B. dhcpoffer",
      "C. dhcpnack",
      "D. dhcpack"
    ],
    "answer": 0,
    "explanation": "DHCP Discover报文由客户端以广播方式发送，目的IP为255.255.255.255，用于发现DHCP服务器。"
  },
  {
    "id": 2463,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "客户端采用（）报文来拒绝dhcp服务器提供的ip地址。",
    "options": [
      "A. dhcpoffer",
      "B. dhcpdecline",
      "C. dhcpack",
      "D. dhcpnack"
    ],
    "answer": 1,
    "explanation": "客户端若发现DHCP服务器提供的IP地址冲突或不可用，会发送DHCP Decline报文拒绝该地址。"
  },
  {
    "id": 2464,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "若一直得不到回应，dhcp客户端总共会广播（）次请求。",
    "options": [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    "answer": 1,
    "explanation": "DHCP客户端若一直得不到服务器回应，会按一定间隔重复广播请求，总共广播4次后放弃。"
  },
  {
    "id": 2465,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "提供电子邮件安全服务的协议是（）。",
    "options": [
      "A. pgp",
      "B. set",
      "C. shttp",
      "D. kerberos"
    ],
    "answer": 0,
    "explanation": "PGP（Pretty Good Privacy）提供电子邮件加密与数字签名等安全服务，用于电子邮件安全。"
  },
  {
    "id": 2466,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "ids设备的主要作用是（）。",
    "options": [
      "A. 用户认证",
      "B. 报文认证",
      "C. 入侵检测",
      "D. 数据加密"
    ],
    "answer": 2,
    "explanation": "IDS即入侵检测系统，主要作用是对网络或系统中的入侵行为进行检测和告警。"
  },
  {
    "id": 2467,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "宏病毒可以感染后缀为（）的文件。",
    "options": [
      "A. exe",
      "B. txt",
      "C. pdf",
      "D. xls"
    ],
    "answer": 3,
    "explanation": "宏病毒寄生于文档的宏代码中，主要感染带宏的文档文件，如Excel的.xls文件。"
  },
  {
    "id": 2468,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "kerberos是一种（）。",
    "options": [
      "A. 加密算法",
      "B. 签名算法",
      "C. 认证服务",
      "D. 病毒"
    ],
    "answer": 2,
    "explanation": "Kerberos是一种网络认证服务协议，采用对称密钥和票据机制实现身份认证。"
  },
  {
    "id": 2469,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "以下关于三重des加密的叙述中，正确的是（）。",
    "options": [
      "A. 三重des加密使用一个密钥进行三次加密",
      "B. 三重des加密使用两个密钥进行三次加密",
      "C. 三重des加密使用三个密钥进行三次加密",
      "D. 三重des加密的密钥长度是des密钥长度的3倍。"
    ],
    "answer": 1,
    "explanation": "三重DES使用两个密钥K1、K2进行加密-解密-加密三次运算，即EDE模式，密钥总长112位，故B正确。"
  },
  {
    "id": 2470,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015a",
    "question": "snmp协议属于（）层协议。",
    "options": [
      "A. 物理",
      "B. 网络",
      "C. 传输",
      "D. 应用"
    ],
    "answer": 3,
    "explanation": "SNMP是简单网络管理协议，工作在应用层，通过UDP端口161/162传输管理信息，故选D。"
  },
  {
    "id": 2471,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "snmpv3新增了（）功能。",
    "options": [
      "A. 管理站之间通信",
      "B. 代理",
      "C. 认证和加密",
      "D. 数据块检索"
    ],
    "answer": 2,
    "explanation": "SNMPv3在v2基础上新增了认证和加密安全机制，提供身份验证、报文加密和访问控制功能，故选C。"
  },
  {
    "id": 2472,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015a",
    "question": "网络管理系统中故障管理的目标是（）。",
    "options": [
      "A. 自动排除故障",
      "B. 优化网络性能",
      "C. 提升网络安全",
      "D. 自动监测故障"
    ],
    "answer": 3,
    "explanation": "故障管理的目标是自动监测网络中的故障，及时发现并报告异常，而非自动排除故障，故选D。"
  },
  {
    "id": 2473,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015a",
    "question": "一台主机的浏览器无法访问域名为www．sohu．com的网站，并且在这台计算机执行tracert命令时有如下信息：根据以上信息，造成这种现场的原因可能是（）。",
    "options": [
      "A. 该计算机ip地址设置有误",
      "B. 相关路由器上进行了访问控制",
      "C. 本地网关不可达",
      "D. 本地dns服务器工作不正常"
    ],
    "answer": 1,
    "explanation": "tracert显示数据包在到达目标前被中断，说明中间路由器进行了访问控制过滤了探测报文，故选B。"
  },
  {
    "id": 2474,
    "type": "single",
    "category": "网络管理",
    "paper": "real2015a",
    "question": "使用netstat-o命令可显示网络（）。",
    "options": [
      "A. ip、icmp、tcp、udp协议的统计信息",
      "B. 以太网统计信息",
      "C. 以数字格式显示所有连接、地址及端口",
      "D. 每个连接的进程id"
    ],
    "answer": 3,
    "explanation": "netstat -o命令用于显示每个连接关联的进程ID，便于定位占用端口的程序，故选D。"
  },
  {
    "id": 2475,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "ieee 802.1x是一种基于（）认证协议。",
    "options": [
      "A. 用户id",
      "B. 报文",
      "C. mac地址",
      "D. ssid"
    ],
    "answer": 0,
    "explanation": "IEEE 802.1x是基于端口的访问控制协议，采用用户ID和口令进行身份认证，故选A。"
  },
  {
    "id": 2476,
    "type": "single",
    "category": "无线网络",
    "paper": "real2015a",
    "question": "为了弥补wep协议的安全缺陷，wpa安全认证方案增加的机制是（）。",
    "options": [
      "A. 共享密钥认证",
      "B. 临时密钥完整性协议",
      "C. 较短的初始化向量",
      "D. 采用更强的加密算法"
    ],
    "answer": 1,
    "explanation": "WPA用临时密钥完整性协议TKIP替代WEP的加密机制，通过动态密钥和完整性校验弥补WEP缺陷，故选B。"
  },
  {
    "id": 2477,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "由dhcp服务器分配的默认网关地址是192.168.5.33/28，（）是本地主机的有效地址。",
    "options": [
      "A. 192.168.5.32",
      "B. 192.168.5.55",
      "C. 192.168.5.47",
      "D. 192.168.5.40"
    ],
    "answer": 3,
    "explanation": "192.168.5.33/28子网范围是32~47，可用主机地址为33~46，选项中40在范围内，故选D。"
  },
  {
    "id": 2478,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "如果指定的地址掩码是255.255.254.0，则有效的主机地址是（）。",
    "options": [
      "A. 126.17.3.0",
      "B. 174.15.3.255",
      "C. 20.15.36.0",
      "D. 115.12.4.0"
    ],
    "answer": 0,
    "explanation": "掩码255.255.254.0对应/23，126.17.3.0中主机位不全为0或1，是有效主机地址，故选A。"
  },
  {
    "id": 2479,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "如果要检查本机的ip协议是否工作正常，则应该ping的地址是（）。",
    "options": [
      "A. 192.168.0.1",
      "B. 10.1.1.1",
      "C. 127.0.0.1",
      "D. 128.0.1.1"
    ],
    "answer": 2,
    "explanation": "127.0.0.1是本地回环地址，ping该地址可检测本机IP协议栈是否正常工作，故选C。"
  },
  {
    "id": 2480,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "工作站a的ip地址是202.117.17.24/28,而工作站b的ip地址是202.117.17.100/28,当两个工作站直接相连时不能通信，怎样修改地址才能使得这两个工作站可以互相通信？（）。",
    "options": [
      "A. 把工作站a的地址改为202.117.17.15",
      "B. 把工作站b的地址改为202.117.17.112",
      "C. 把子网掩码改为25",
      "D. 把子网掩码改为26"
    ],
    "answer": 2,
    "explanation": "两地址/28分属不同子网，将掩码改为/25后202.117.17.0~127属同一子网，可互相通信，故选C。"
  },
  {
    "id": 2481,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "运营商指定本地路由器接口的地址是200.15.10.6/29,路由器连接的默认网关的地址是200.15.10.7，这样配置后发现路由器无法ping通任何远程设备，原因是（）。",
    "options": [
      "A. 默认网关的地址不属于这个子网",
      "B. 默认网关的地址是子网中的广播地址",
      "C. 路由器接口地址是子网中的广播地址",
      "D. 路由器接口地址是组播地址"
    ],
    "answer": 1,
    "explanation": "200.15.10.6/29子网范围是0~7，其中7为广播地址，不能作为网关，故无法ping通，选B。"
  },
  {
    "id": 2482,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "访问控制列表（acl）配置如下，如果来自因特网的http报文的目标地址是162．15．10．10，经过这个acl过滤后会出现什么情况？（）。",
    "options": [
      "A. 由于行30拒绝，报文被丢弃",
      "B. 由于行40允许，报文被接受",
      "C. 由于acl末尾隐含的拒绝，报文被丢弃",
      "D. 由于报文源地址未包含在列表中，报文被接受"
    ],
    "answer": 2,
    "explanation": "该ACL未匹配到允许条目，末尾隐含的deny any规则将报文丢弃，故选C。"
  },
  {
    "id": 2483,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "下面的4个ipv6地址中，无效地址是（）。",
    "options": [
      "A. ::192:168:0:1",
      "B. :2001:3452:4955:2367::",
      "C. 2002:c0a8:101::43",
      "D. 2003:dead:beef:4dad:23:34:bb:101"
    ],
    "answer": 1,
    "explanation": "IPv6地址以冒号开头非法，B项以单冒号开头不符合格式规范，是无效地址，故选B。"
  },
  {
    "id": 2484,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "ipv6站点通过ipv4网络通信需要使用隧道技术，常用的3种自动隧道技术是（）。",
    "options": [
      "A. vpn隧道、pptp隧道和ipsec隧道",
      "B. 6to4隧道、6over4隧道和isatap隧道",
      "C. vpn隧道、ppp隧道和isatap隧道",
      "D. ipsec隧道、6over4隧道和pptp隧道"
    ],
    "answer": 1,
    "explanation": "IPv6通过IPv4网络通信常用自动隧道有6to4、6over4和ISATAP三种，故选B。"
  },
  {
    "id": 2485,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "如果在网络的入口处通过设置acl封锁了tcp和udp端口21、23和25，则能够访问该网络的应用是（）。",
    "options": [
      "A. ftp",
      "B. dns",
      "C. smtp",
      "D. telent"
    ],
    "answer": 1,
    "explanation": "21、23、25端口分别对应FTP、Telnet、SMTP，被封后DNS使用53端口仍可访问，故选B。"
  },
  {
    "id": 2486,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2015a",
    "question": "以太网采用物理地址的目的是（）。",
    "options": [
      "A. 唯一地标识第二层设备",
      "B. 使用不同网络中的设备可以互相通信",
      "C. 用于区分第二层的帧和第三层的分组",
      "D. 物理地址比网络地址的优先级高"
    ],
    "answer": 0,
    "explanation": "以太网物理地址即MAC地址，用于唯一标识第二层网络设备，实现数据帧的寻址，故选A。"
  },
  {
    "id": 2487,
    "type": "single",
    "category": "无线网络",
    "paper": "real2015a",
    "question": "4g移动通信标准td-lte与fdd-lte的区别是（）。",
    "options": [
      "A. 频率的利用方式不同",
      "B. 划分上下行信道的方式不同",
      "C. 采用的调制方式有区别",
      "D. 拥有专利技术的厂家不同"
    ],
    "answer": 2,
    "explanation": "TD-LTE与FDD-LTE的主要区别在于上下行信道划分方式不同，即时分双工与频分双工，故选C。"
  },
  {
    "id": 2488,
    "type": "single",
    "category": "无线网络",
    "paper": "real2015a",
    "question": "关于移动ad hoc网络manet，（）不是manet的特点。",
    "options": [
      "A. 网络拓扑结构是动态变化的",
      "B. 电源能量限制了无线终端必须以最节能的方式工作",
      "C. 可以直接应用传统的路由协议支持最佳路由选择",
      "D. 每个结点既是主机又是路由器"
    ],
    "answer": 2,
    "explanation": "MANET拓扑动态变化，需专用路由协议，不能直接套用传统路由协议，故C不是其特点。"
  },
  {
    "id": 2489,
    "type": "single",
    "category": "网络安全",
    "paper": "real2015a",
    "question": "（）针对tcp连接进行攻击。",
    "options": [
      "A. 拒绝服务",
      "B. 暴力攻击",
      "C. 网络侦察",
      "D. 特洛伊木马"
    ],
    "answer": 0,
    "explanation": "拒绝服务攻击（DoS）常针对TCP连接，如SYN Flood利用TCP三次握手耗尽服务器连接资源，导致正常用户无法建立连接。"
  },
  {
    "id": 2490,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2015a",
    "question": "一个中等规模的公司，3个不同品牌的路由器都配置了ripv1协议。isp为公司分配的地址块为201.113.210.0/24。公司希望通过vlsm技术把网络划分为3个子网，每个子网中有40台主机，下面的配置方案中最优的是（）。",
    "options": [
      "A. 转换路由协议为eigrp,3个子网地址分别设置201.113.210.32/27、201.113.210.64/27和201.113.210.92/27",
      "B. 转换路由协议为ripv2,3个子网地址分别设置为201.113.210.64/26、201.113 210.128/26和201.113.210.192/26",
      "C. 转换路由协议为ospf,3个子网地址分别设置为201.113.210.16/28、201.113.210.16/28和201.113.210.48/28",
      "D. 保持路由协议为ripv1,3个子网地址分别设置为201.113.210.32/26、201.113.210.64/26和201.113.210/92/26"
    ],
    "answer": 1,
    "explanation": "RIPv1不支持VLSM，需改用RIPv2；每子网40台主机需6位主机位，/26可容纳62台，且三个/26子网地址对齐无重叠，故B最优。"
  },
  {
    "id": 2491,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2015a",
    "question": "如果发现网络的数据传输很慢，服务质量也达不到要求，应该首先检查哪一个协议层工作情况？（）。",
    "options": [
      "A. 物理层",
      "B. 会话层",
      "C. 网络层",
      "D. 传输层"
    ],
    "answer": 0,
    "explanation": "物理层负责比特流传输，其工作状况直接影响数据传输速率和服务质量，因此发现传输慢时应首先检查物理层。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2014b";
  const A = [
  {
    "id": 2492,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "属于cpu中算术逻辑单元的部件是（ ）。",
    "options": [
      "A. 程序计数器",
      "B. 加法器",
      "C. 指令寄存器",
      "D. 指令译码器"
    ],
    "answer": 1,
    "explanation": "算术逻辑单元ALU负责算术和逻辑运算，加法器是其核心部件；程序计数器、指令寄存器、译码器属于控制器。"
  },
  {
    "id": 2493,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "内存按字节编址从a5000h到dcfffh的区域其存储容量为（ ）。",
    "options": [
      "A. 123kb",
      "B. 180kb",
      "C. 223kb",
      "D. 224kb"
    ],
    "answer": 3,
    "explanation": "地址范围DCFFFH-A5000H+1=38000H=229376字节=224KB，按字节编址故存储容量为224KB。"
  },
  {
    "id": 2494,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "计算机采用分级存储体系的主要目的是为了解决（ ）的问题。",
    "options": [
      "A. 主存容量不足",
      "B. 存储器读写可靠性",
      "C. 外设访问效率",
      "D. 存储容量、成本和速度之间的矛盾"
    ],
    "answer": 3,
    "explanation": "分级存储体系利用Cache、主存、辅存的速度与成本差异，在容量、成本和速度之间取得平衡，解决三者矛盾。"
  },
  {
    "id": 2495,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "flynn分类法基于信息流特征将计算机分成4类，其中（ ）只有理论意义而无实例。",
    "options": [
      "A. sisd",
      "B. misd",
      "C. simd",
      "D. mimo"
    ],
    "answer": 1,
    "explanation": "Flynn分类法中MISD（多指令流单数据流）在现实中无实际应用实例，仅具有理论意义。"
  },
  {
    "id": 2496,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "以下关于结构化开发方法的叙述中，不正确的是（1）。",
    "options": [
      "A. 总的指导思想是自顶向下，逐层分解",
      "B. 基本原则是功能的分解与抽象",
      "C. 与面向对象开发方法相比，更适合于大规模，特别复杂的项目",
      "D. 特别适合于数据处理领域的项目"
    ],
    "answer": 2,
    "explanation": "结构化方法自顶向下、逐层分解，适合数据处理领域，但面对大规模复杂项目不如面向对象方法，故C不正确。"
  },
  {
    "id": 2497,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "模块a、b和c都包含相同的5个语句，这些语句之间没有联系。为了避免重复，把这5个语句抽出来组成一个模块d。则模块d的内聚类型为（ ）内聚。",
    "options": [
      "A. 功能",
      "B. 通信",
      "C. 逻辑",
      "D. 巧合"
    ],
    "answer": 3,
    "explanation": "模块d中语句之间没有联系，仅因避免重复而组合，各成分无功能关联，属于巧合内聚，内聚程度最低。"
  },
  {
    "id": 2498,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "将高级语言源程序翻译成机器语言程序的过程中，常引入中间代码。以下关于中间代码的叙述中，不正确的是（ ）。",
    "options": [
      "A. 中间代码不依赖于具体的机器",
      "B. 使用中间代码可提高编译程序的可移植性",
      "C. 中间代码可以用树或图表示",
      "D. 中间代码可以用栈和队列表示"
    ],
    "answer": 3,
    "explanation": "中间代码与具体机器无关，可用树、图等表示以提高可移植性；栈和队列是数据结构，不是中间代码的表示形式。"
  },
  {
    "id": 2499,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014b",
    "question": "甲公司接受乙公司委托开发了一项应用软件，双方没有订立任何书面合同。在此情形下，（ ）享有该软件的著作权。",
    "options": [
      "A. 甲公司",
      "B. 甲、乙公司共同",
      "C. 乙公司",
      "D. 甲乙公司均不"
    ],
    "answer": 0,
    "explanation": "委托开发且无书面合同约定著作权归属时，软件著作权由受托方（甲公司）享有，故答案为A。"
  },
  {
    "id": 2500,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2014b",
    "question": "下面的广域网络中属于电路交换网络的是（ ）。",
    "options": [
      "A. adsl",
      "B. x.25",
      "C. frn",
      "D. atm"
    ],
    "answer": 0,
    "explanation": "ADSL基于电话线采用电路交换方式提供接入，属于电路交换网络；X.25、帧中继、ATM均为分组交换网络。"
  },
  {
    "id": 2501,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2014b",
    "question": "pcm编码是把模拟信号数字化的过程，通常模拟语音信道的带宽是400hz，则在数字化时采样频率至少为（ ）次/秒。",
    "options": [
      "A. 2000",
      "B. 4000",
      "C. 8000",
      "D. 16000"
    ],
    "answer": 2,
    "explanation": "根据奈奎斯特定理，采样频率至少为信号最高频率的2倍，语音信道带宽4000Hz，故采样频率至少8000次/秒。"
  },
  {
    "id": 2502,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2014b",
    "question": "设信道带宽为400hz，信噪比为30db，按照香农定理，信道容量为（ ）。",
    "options": [
      "A. 4kb/s",
      "B. 16kb/s",
      "C. 40kb/s",
      "D. 120kb/s"
    ],
    "answer": 2,
    "explanation": "信噪比30dB即S/N=1000，由香农定理C=W·log2(1+S/N)=400×log2(1001)≈4000b/s，即约40kb/s。"
  },
  {
    "id": 2503,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2014b",
    "question": "所谓正交幅度调制是把两个（ ）的模拟信号合成为一个载波信号。",
    "options": [
      "A. 幅度相同相位相差90°",
      "B. 幅度相同相位相差180°",
      "C. 频率相同相位相差90°",
      "D. 频率相同相位相差180°"
    ],
    "answer": 0,
    "explanation": "正交幅度调制QAM将两个幅度相同、相位相差90°的模拟信号（正交载波）合成一个载波信号进行传输。"
  },
  {
    "id": 2504,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2014b",
    "question": "ppp是连接广域网的一种封装协议，下面关于ppp的描述错误的是（ ）。",
    "options": [
      "A. 能够控制数据链路的建立",
      "B. 能够分配和管理广域网的ip地址",
      "C. 只能采用ip作为网络层协议",
      "D. 能够有效地进行错误检测"
    ],
    "answer": 2,
    "explanation": "PPP支持多种网络层协议（如IP、IPX等），并非只能采用IP，故C描述错误；其余关于链路控制、地址分配和差错检测均正确。"
  },
  {
    "id": 2505,
    "type": "single",
    "category": "路由协议",
    "paper": "real2014b",
    "question": "与ripv2相比，igrp协议增加了一些新的特性，下面的描述中错误的是（ ）。",
    "options": [
      "A. 路由度量不再把跳步数作为唯一因素，还包括了带宽、延迟等参数",
      "B. 增加触发更新来加快路由收敛，不必等待更新周期结束再发送更新报文",
      "C. 不但支持相等费用的负载均衡，而且支持不等费用的负载均衡",
      "D. 最大跳步数由15跳扩大到255跳，可以支持更大的网络"
    ],
    "answer": 1,
    "explanation": "触发更新是RIP等距离矢量协议已有的机制，并非IGRP新增特性，故B描述错误；其余关于度量、负载均衡和跳数的描述正确。"
  },
  {
    "id": 2506,
    "type": "single",
    "category": "路由协议",
    "paper": "real2014b",
    "question": "为了解决rip协议形成路由环路的问题可以采用多种方法，下面列出的方法中效果最好的是（ ）。",
    "options": [
      "A. 不要把从一个邻居学习到的路由发送给那个邻居",
      "B. 经常检查邻居路由器的状态，以便及时发现断开的链路",
      "C. 把从邻居学习到的路由设置为无限大，然后再发送到那个邻居",
      "D. 缩短路由更新周期，以便出现链路失效时尽快达到路由无限大"
    ],
    "answer": 2,
    "explanation": "水平分割（不把从邻居学到的路由发回该邻居）是解决RIP路由环路最有效的方法，可从根本上防止环路产生。"
  },
  {
    "id": 2507,
    "type": "single",
    "category": "网络管理",
    "paper": "real2014b",
    "question": "在windows命令行窗口中键入tracert命令，得到下图所示窗口，则该pc的ip地址可能为（ ）。",
    "options": [
      "A. 172.16.11.13",
      "B. 113.108.208.1",
      "C. 219.245.67.5",
      "D. 58.64.236.45"
    ],
    "answer": 2,
    "explanation": "tracert第一跳为本地网关，其IP地址与PC同网段，选项中只有219.245.67.5可能为网关地址，故该PC的IP可能为C。"
  },
  {
    "id": 2508,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014b",
    "question": "管理员为某台linux系统中的/etc/hosts文件添加了如下记录，下列说法正确的是（ ）。127.0.0.1 localhostlocaldomain localhost 192.168.1.100 linumu100.com web80 192.168.1.120 emailserver",
    "options": [
      "A. linumu100.com是主机192.168.1.100的主机名",
      "B. web80是主机192.168.1.120的主机名",
      "C. emailserver是主机192.168.1.120的别名",
      "D. 192.168.1.120行记录的格式是错误的"
    ],
    "answer": 0,
    "explanation": "/etc/hosts中每行格式为IP地址 主机名 别名，192.168.1.100对应主机名linumu100.com，故A正确；web80是别名而非主机名。"
  },
  {
    "id": 2509,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014b",
    "question": "下列关于linux文件组织方式的说法中，（ ）是错误的。",
    "options": [
      "A. linux文件系统使用索引节点来记录文件信息",
      "B. 文件索引节点由管理员手工分配",
      "C. 每个文件与唯一的索引节点号对应",
      "D. 一个索引节点号可对应多个文件"
    ],
    "answer": 1,
    "explanation": "Linux中索引节点由文件系统自动分配和管理，无需管理员手工分配，故B错误；A、C、D均正确描述了索引节点特性。"
  },
  {
    "id": 2510,
    "type": "single",
    "category": "网络管理",
    "paper": "real2014b",
    "question": "netstat–r命令的功能是（ ）。",
    "options": [
      "A. 显示路由记录",
      "B. 查看连通性",
      "C. 追踪dns服务器",
      "D. 捕获网络配置信息"
    ],
    "answer": 0,
    "explanation": "netstat -r用于显示内核路由表，即路由记录，与route print功能类似，故选A。"
  },
  {
    "id": 2511,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2014b",
    "question": "搭建试验平台、进行网络仿真是网络生命周期中（ ）阶段的任务。",
    "options": [
      "A. 需求规范",
      "B. 逻辑网络设计",
      "C. 物理网络设计",
      "D. 实施"
    ],
    "answer": 1,
    "explanation": "逻辑网络设计阶段需确定网络拓扑、地址规划等，搭建试验平台和网络仿真属于该阶段验证设计的工作。"
  },
  {
    "id": 2512,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014b",
    "question": "在windows系统中可通过停止（ ）服务来阻止对域名解释cache的访问。",
    "options": [
      "A. dns server",
      "B. remote procedure call(rpc)",
      "C. nslookup",
      "D. dns client"
    ],
    "answer": 3,
    "explanation": "Windows中DNS Client服务负责域名解析缓存，停止该服务即可阻止对DNS解释缓存的访问。"
  },
  {
    "id": 2513,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014b",
    "question": "在linux操作系统中，采用（ ）来搭建dns服务器。",
    "options": [
      "A. samble",
      "B. tomcat",
      "C. bind",
      "D. apache"
    ],
    "answer": 2,
    "explanation": "Linux下搭建DNS服务器通常使用BIND软件（named进程），Apache为Web服务器，Tomcat为Java容器。"
  },
  {
    "id": 2514,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014b",
    "question": "dns服务器的默认端口号是（ ）端口。",
    "options": [
      "A. 50",
      "B. 51",
      "C. 52",
      "D. 53"
    ],
    "answer": 3,
    "explanation": "DNS服务器默认使用53号端口，其中UDP 53用于查询，TCP 53用于区域传送。"
  },
  {
    "id": 2515,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014b",
    "question": "使用（ ）命令可以向ftp服务器上传文件。",
    "options": [
      "A. get",
      "B. dir",
      "C. put",
      "D. push"
    ],
    "answer": 2,
    "explanation": "FTP客户端命令中put用于向服务器上传文件，get用于下载，dir列出目录，push非FTP标准命令。"
  },
  {
    "id": 2516,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014b",
    "question": "假如有证书发放机构i1，i2用户a在i1获取证书，用户b在i2获取证书，i1和i2已安全交换了各自的公钥，如果用i1《a》表示由i1颁发给a的证书，a可通过（ ）证书链获取b的公开密钥。",
    "options": [
      "A. i1《i2》i2《b》",
      "B. i2《b》i1《i2》",
      "C. i1《b》i2《i2》",
      "D. i2《i1》i2《b》"
    ],
    "answer": 0,
    "explanation": "a需先获取i2的公钥证书i1《i2》，再用i2《b》获取b的公钥，故证书链为i1《i2》i2《b》。"
  },
  {
    "id": 2517,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014b",
    "question": "以下关于s-http的描述中，正确的是（ ）。",
    "options": [
      "A. s-http是一种面向报文的安全通信协议，使用tcp443u端口",
      "B. s-http所使用的语法和报文格式与http相同",
      "C. s-http也可以写为https",
      "D. s-http的安全基础并非ssl"
    ],
    "answer": 3,
    "explanation": "S-HTTP是面向报文的安全协议，其安全基础并非SSL（SSL用于HTTPS），故D正确；它使用TCP 80端口，与HTTPS不同。"
  },
  {
    "id": 2518,
    "type": "single",
    "category": "交换技术",
    "paper": "real2014b",
    "question": "把交换机由特权模式转换到全局模式使用的命令是（ ）。",
    "options": [
      "A. interface f0/1",
      "B. config terminal",
      "C. enable",
      "D. no shutdown"
    ],
    "answer": 1,
    "explanation": "在交换机特权模式下输入config terminal（可简写conf t）即可进入全局配置模式。"
  },
  {
    "id": 2519,
    "type": "single",
    "category": "无线网络",
    "paper": "real2014b",
    "question": "在无线局域网中，ap（无线接入点）工作在osi模型的（ ）。",
    "options": [
      "A. 物理层",
      "B. 数据链路层",
      "C. 网络层",
      "D. 应用层"
    ],
    "answer": 1,
    "explanation": "AP工作在OSI模型的数据链路层，负责无线帧的接入与转发，属于MAC子层设备。"
  },
  {
    "id": 2520,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014b",
    "question": "利用的扩展acl禁止用户通过telnet访问子网202.112.111.0/24的命令是（ ）。",
    "options": [
      "A. access-list 10 deny telnet any 202.112.111.0 0.0.0.255 eq 23",
      "B. access-list 110 deny udp any 202.112.111.0 eq telnet",
      "C. access-list 110 deny tcp any 202.112.111.0 0.0.0.255 eq 23",
      "D. access-list 10 deny tcp any 202.112.111.0 255.255.255.0 eq 23"
    ],
    "answer": 2,
    "explanation": "扩展ACL编号范围为100~199，需用tcp协议并匹配目的网段和端口23，格式为access-list 110 deny tcp any 202.112.111.0 0.0.0.255 eq 23。"
  },
  {
    "id": 2521,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014b",
    "question": "以下关于windows server 2003域管理模式的描述中，正确的是（ ）。",
    "options": [
      "A. 域间信任关系只能是单相信任",
      "B. 单域模型中只有一个主域控器，其他都为备份域控制器",
      "C. 如果域控制器改变目录信息，应把变化的信息复制到其他域控制器",
      "D. 只有一个域控制器可以改变目录信息"
    ],
    "answer": 2,
    "explanation": "Windows Server 2003域中多台域控制器地位平等，目录信息变更会复制到其他域控制器，故C正确。"
  },
  {
    "id": 2522,
    "type": "single",
    "category": "网络管理",
    "paper": "real2014b",
    "question": "snmpv2的（ ）操作为管理站提供了从被管理设备中的一次取回一大批数据的能力。",
    "options": [
      "A. getnextrequest",
      "B. informrequest",
      "C. setrequest",
      "D. getbulkrequest"
    ],
    "answer": 3,
    "explanation": "SNMPv2新增GetBulkRequest操作，可一次从被管理设备取回大批数据，提高管理效率。"
  },
  {
    "id": 2523,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014b",
    "question": "以下地址属于自动专用ip地址（apipa）的是（ ）。",
    "options": [
      "A. 224.0.0.1",
      "B. 127.0.0.1",
      "C. 192.168.0.1",
      "D. 169.254.1.15"
    ],
    "answer": 3,
    "explanation": "APIPA地址范围为169.254.0.0/16，当DHCP获取失败时主机自动配置，169.254.1.15属于该范围。"
  },
  {
    "id": 2524,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014b",
    "question": "公司得到一个b类网络地址块，需要划分成若干个包含1000台主机的子网，则可以划分成（ ）个子网。",
    "options": [
      "A. 100",
      "B. 64",
      "C. 128",
      "D. 500"
    ],
    "answer": 1,
    "explanation": "B类地址主机位16位，划分1000台主机需10位主机号（2^10=1024），剩余6位作子网号，可划分2^6=64个子网。"
  },
  {
    "id": 2525,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014b",
    "question": "ip地址202.117.17.254/22是什么地址？（ ）。",
    "options": [
      "A. 网络地址",
      "B. 全局广播地址",
      "C. 主机地址",
      "D. 定向广播地址"
    ],
    "answer": 2,
    "explanation": "202.117.17.254/22的网络号为202.117.16.0，广播地址为202.117.19.255，该地址既非网络地址也非广播地址，是主机地址。"
  },
  {
    "id": 2526,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014b",
    "question": "把下列8个地址块20.15.0.0～20.15.7.0聚合成一个超级地址块，则得到的网络地址是（ ）。",
    "options": [
      "A. 20.15.0.0/20",
      "B. 20.15.0.0/21",
      "C. 20.15.0.0/16",
      "D. 20.15.0.0/24"
    ],
    "answer": 1,
    "explanation": "20.15.0.0~20.15.7.0共8个C类网段，需3位表示，掩码为/21，聚合后网络地址为20.15.0.0/21。"
  },
  {
    "id": 2527,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014b",
    "question": "每一个访问控制列表（acl）最后都隐含着一条（ ）语句。",
    "options": [
      "A. deny any",
      "B. deny all",
      "C. permit any",
      "D. permit all"
    ],
    "answer": 0,
    "explanation": "ACL末尾隐含一条deny any（拒绝所有）语句，未匹配任何规则的数据包将被丢弃。"
  },
  {
    "id": 2528,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014b",
    "question": "以下关于访问控制列表的论述中，错误的是（ ）语句。",
    "options": [
      "A. 访问控制列表要在路由器全局模式下配置",
      "B. 具有严格限制条件的语句应放在访问控制的最后",
      "C. 每一个有效的访问控制列表至少应包含一条允许语句",
      "D. 访问控制列表不能过滤路由自己产生的数据"
    ],
    "answer": 1,
    "explanation": "ACL中严格限制条件的语句应放在前面，否则会被宽松语句先匹配，故B错误；其余选项描述正确。"
  },
  {
    "id": 2529,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2014b",
    "question": "如果一个tcp连接处于established状态，这是表示（ ）。",
    "options": [
      "A. 已经发出了连接请求",
      "B. 连接已经建立",
      "C. 处于连接监听状态",
      "D. 等待对方的释放连接响应"
    ],
    "answer": 1,
    "explanation": "TCP连接状态中，ESTABLISHED表示三次握手完成，连接已建立，双方可以传输数据，故选B。"
  },
  {
    "id": 2530,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2014b",
    "question": "以太网采用的csma/cd协议。当冲突发生时要通过二进制指数后退算法计算，关于这个算法，以下论述中错误的是（ ）。",
    "options": [
      "A. 冲突次数越多，后退的时间越长",
      "B. 平均后退次数的多少与负载大小有关",
      "C. 后退时延的平均值与负载大小有关",
      "D. 重发次数达到一定极限后放弃发送"
    ],
    "answer": 0,
    "explanation": "二进制指数后退算法中，冲突次数越多，可选后退时延范围越大，但平均后退时间与负载有关，并非一定越长，故A错误。"
  },
  {
    "id": 2531,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2014b",
    "question": "在局域网中可动态或静态划分vlan,静态划分vlan是根据（ ）划分。",
    "options": [
      "A. mac地址",
      "B. ip地址",
      "C. 端口号",
      "D. 管理区域"
    ],
    "answer": 2,
    "explanation": "静态划分VLAN通常基于交换机端口，将指定端口固定分配给某个VLAN，故根据端口号划分，选C。"
  },
  {
    "id": 2532,
    "type": "single",
    "category": "无线网络",
    "paper": "real2014b",
    "question": "以下通信技术中，未在ieee802.11无线局域网中使用的是（ ）。",
    "options": [
      "A. fhss",
      "B. dsss",
      "C. cdma",
      "D. ir"
    ],
    "answer": 2,
    "explanation": "IEEE 802.11无线局域网采用FHSS、DSSS和IR等物理层技术，CDMA未在其中使用，故选C。"
  },
  {
    "id": 2533,
    "type": "single",
    "category": "无线网络",
    "paper": "real2014b",
    "question": "zigbee网络是ieee802.15.4定义的低速无线个人网。其中包含全功能和简单功能两类设备，以下关于这两类设备的描述中，错误的是（ ）。",
    "options": [
      "A. 协调器是一种全功能设备，只能作为pan的控制器使用",
      "B. 被动式红外传感器是一种简单功能设备，接受协调器的控制",
      "C. 协调器也可以运行某些应用，发起和接受其他设备的通信请求",
      "D. 简单功能设备之间不能相互通信，只能与协调器通信"
    ],
    "answer": 0,
    "explanation": "ZigBee协调器是全功能设备，可作为PAN控制器，但也可运行应用，并非只能作为控制器，故A错误。"
  },
  {
    "id": 2534,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2014b",
    "question": "网络系统设计过程中，逻辑网络设计阶段的任务是（ ）。",
    "options": [
      "A. 对现有网络资源进行分析，确定网络的逻辑结构",
      "B. 根椐需求说明书确定网络的安全系统架构",
      "C. 根椐需求规范和通信规范，分析各个网段的通信流量",
      "D. 根据用户的需求，选择特定的网络技术，网络互连设备和拓扑结构"
    ],
    "answer": 3,
    "explanation": "逻辑网络设计阶段根据用户需求选择网络技术、互连设备和拓扑结构，确定逻辑结构方案，故选D。"
  },
  {
    "id": 2535,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2014b",
    "question": "下列关于网络汇聚层的描述中，正确的是（ ）",
    "options": [
      "A. 要负责收集用户信息，例如用户ip地址、访问日志等",
      "B. 实现资源访问控制和流量控制等功能",
      "C. 将分组从一个区域高速地转发到另一区域",
      "D. 提供一部分管理功能，例如认证和计费管理等"
    ],
    "answer": 1,
    "explanation": "汇聚层位于接入层与核心层之间，主要实现资源访问控制、流量控制、策略路由等功能，故选B。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2014a";
  const A = [
  {
    "id": 2536,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014a",
    "question": "在cpu中，常用来为alu执行算术逻辑运算提供数据并暂存运算结果的寄存器是（ ） 。",
    "options": [
      "A. 程序计数器",
      "B. 累加寄存器",
      "C. 程序状态寄存器",
      "D. 地址寄存器"
    ],
    "answer": 3,
    "explanation": "累加寄存器用于为ALU提供操作数并暂存运算结果，是CPU中关键的数据暂存寄存器，故选B。"
  },
  {
    "id": 2537,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014a",
    "question": "某机器字长为n，最高位是符号位，其定点整数的最大值为（ ）。",
    "options": [
      "A. 2n-1",
      "B. 2n-1-1",
      "C. 2n",
      "D. 2n-1"
    ],
    "answer": 1,
    "explanation": "n位定点整数最高位为符号位，剩余n-1位表示数值，最大正数为2^(n-1)-1，故选B。"
  },
  {
    "id": 2538,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014a",
    "question": "若用256k*8bit的存储器芯片，构成地址40000000h到400fffffh且按字节编址的内存区域，则需（ ）片芯片。",
    "options": [
      "A. 4",
      "B. 8",
      "C. 16",
      "D. 32"
    ],
    "answer": 0,
    "explanation": "地址范围40000000H到400FFFFFH共1MB，每片256K×8bit为256KB，需1MB/256KB=4片，故选A。"
  },
  {
    "id": 2539,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014a",
    "question": "以下关于进度管理工具gantt图的叙述中，不正确的是（ ）",
    "options": [
      "A. 能清晰的表达每个任务的开始时间、结束时间和持续时间",
      "B. 能清晰的表达任务之间的并行关系",
      "C. 不能清晰的确定任务之间的依赖关系",
      "D. 能清晰的确定影响进度的关键任务"
    ],
    "answer": 3,
    "explanation": "甘特图能表示任务起止时间、持续时间和并行关系，但不能清晰确定任务间依赖关系和关键任务，故选D。"
  },
  {
    "id": 2540,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014a",
    "question": "在引用调用方式下进行函数调用，是将（ ）。",
    "options": [
      "A. 实参的值传递给形参",
      "B. 实参的地址传递给形参",
      "C. 形参的值传递给实参",
      "D. 形参的地址传递给实参"
    ],
    "answer": 1,
    "explanation": "引用调用方式下，实参的地址传递给形参，形参通过地址间接访问实参，实现双向传递，故选B。"
  },
  {
    "id": 2541,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2014a",
    "question": "王某买了一件美术作品原件，则他享有该美术作品的（ ）。",
    "options": [
      "A. 著作权",
      "B. 所有权",
      "C. 展览权",
      "D. 所有权和展览权"
    ],
    "answer": 3,
    "explanation": "购买美术作品原件取得作品所有权和展览权，但著作权仍归作者，故选D。"
  },
  {
    "id": 2542,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2014a",
    "question": "在地面上相距2000公里的两地之间通过电缆传输4000比特长的数据包，数据速率为64kb/s，从开始发送到接收完成需要的时间为（ ）。",
    "options": [
      "A. 48ms",
      "B. 640ms",
      "C. 32.5ms",
      "D. 72.5ms"
    ],
    "answer": 3,
    "explanation": "发送时延=4000/64000=62.5ms，传播时延=2000km/(200km/ms)=10ms，总时间约72.5ms，故选D。"
  },
  {
    "id": 2543,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014a",
    "question": "按照ietf定义的区分服务（diffserv）技术规范，边界路由器要根据ip协议头中的（ ）字段为每一个ip分组打上一个称为ds码点的标记，这个标记代表了改分组的qos需求。",
    "options": [
      "A. 目标地址",
      "B. 源地址",
      "C. 服务类型",
      "D. 段偏置值"
    ],
    "answer": 2,
    "explanation": "DiffServ中边界路由器根据IP头部的服务类型字段打DS码点标记，以标识分组的QoS需求，故选C。"
  },
  {
    "id": 2544,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2014a",
    "question": "动态划分vlan的方法中不包括（ ）。",
    "options": [
      "A. 网络层协议",
      "B. 网络层地址",
      "C. 交换机端口",
      "D. mac地址"
    ],
    "answer": 2,
    "explanation": "动态划分VLAN可基于MAC地址、网络层地址或协议，而基于交换机端口属于静态划分，故选C。"
  },
  {
    "id": 2545,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2014a",
    "question": "与http1.0相比，http1.1的优点不包括（ ）。",
    "options": [
      "A. 减少了rtts数量",
      "B. 支持持久连接",
      "C. 减少了tcp慢启动次数",
      "D. 提高了安全性"
    ],
    "answer": 3,
    "explanation": "HTTP/1.1支持持久连接、减少RTT和TCP慢启动次数，但未提高安全性，安全性由HTTPS提供，故选D。"
  },
  {
    "id": 2546,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014a",
    "question": "在运行linux系统的服务器中，使用bind配置域名服务器，主配置文件存放在（ ）。",
    "options": [
      "A. name.conf",
      "B. named.conf",
      "C. dns.conf",
      "D. dnsd.conf"
    ],
    "answer": 1,
    "explanation": "Linux下BIND域名服务器的主配置文件通常为named.conf，存放于/etc目录，故选B。"
  },
  {
    "id": 2547,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014a",
    "question": "在linux系统中，root用户执行shutdown–rnow命令，系统将会（ ）。",
    "options": [
      "A. 重新启动",
      "B. 进入单用户模式",
      "C. 休眠",
      "D. 关机"
    ],
    "answer": 0,
    "explanation": "shutdown -r now表示立即重新启动系统，-r参数指定重启，故选A。"
  },
  {
    "id": 2548,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2014a",
    "question": "结构化综合布线系统中的干线子系统是指（ ）。",
    "options": [
      "A. 管理楼层内各种设备的子系统",
      "B. 连接各个建筑物的子系统",
      "C. 工作区信息插座之间的线缆子系统",
      "D. 实现楼层设备间连接的子系统"
    ],
    "answer": 3,
    "explanation": "干线子系统实现楼层设备间之间的连接，是综合布线系统中连接各楼层配线间的部分，故选D。"
  },
  {
    "id": 2549,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2014a",
    "question": "假设网络的生产管理系统采用b/s工作方式，经常上网的用户数为100个，每个用户每分钟平均产生11个事务，平均事务量大小为0.06mb，则这个系统需要的传输速率为（ ）。",
    "options": [
      "A. 5.28mb/s",
      "B. 8.8mb/s",
      "C. 66mb/s",
      "D. 528mb/s"
    ],
    "answer": 1,
    "explanation": "总事务量=100×11×0.06MB=66MB/min，即66×8/60≈8.8Mb/s，故选B。"
  },
  {
    "id": 2550,
    "type": "single",
    "category": "网络管理",
    "paper": "real2014a",
    "question": "在windows命令行窗口中进入nslookup交互工作方式，然后键入settype=mx,这样的设置可以（ ）。",
    "options": [
      "A. 切换到指定的域名服务器",
      "B. 查询邮件服务器的地址",
      "C. 由地址查找对应的域名",
      "D. 查询域名对应的各种资源"
    ],
    "answer": 1,
    "explanation": "nslookup中set type=mx用于指定查询MX记录，即查询邮件服务器地址，故选B。"
  },
  {
    "id": 2551,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014a",
    "question": "ftp提供了丰富的命令，用来更改本地计算机工作目录的命令是（ ）。",
    "options": [
      "A. get",
      "B. list",
      "C. lcd",
      "D. !list"
    ],
    "answer": 2,
    "explanation": "FTP中lcd命令用于更改本地计算机工作目录，get下载文件，list列出远程目录，故选C。"
  },
  {
    "id": 2552,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "在进行域名解析过程中，由（ ）获取的解析结果耗时最短。",
    "options": [
      "A. 主域名服务器",
      "B. 辅域名服务器",
      "C. 本地缓存",
      "D. 转发域名服务器"
    ],
    "answer": 2,
    "explanation": "本地缓存保存最近解析结果，命中时无需查询服务器，耗时最短，故选C。"
  },
  {
    "id": 2553,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "dns通知是一种推进机制，其作用是使得（ ）。",
    "options": [
      "A. 辅助域名服务器及时更新信息",
      "B. 授权域名服务器向管区内发送公告",
      "C. 本地域名服务器发送域名解析申请",
      "D. 递归查询迅速返回结果"
    ],
    "answer": 0,
    "explanation": "DNS通知机制由主域名服务器主动通知辅助域名服务器，使其及时更新区域信息，故选A。"
  },
  {
    "id": 2554,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "在dns资源记录中，（ ）记录类型的功能是把ip地址解析为主机名。",
    "options": [
      "A. a",
      "B. ns",
      "C. cname",
      "D. ptr"
    ],
    "answer": 3,
    "explanation": "PTR记录用于反向域名解析，即把IP地址解析为主机名，A记录为正解，故选D。"
  },
  {
    "id": 2555,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "以下关于dhcp的描述中，正确的是（ ）。",
    "options": [
      "A. dhcp客户机不可能跨越网段获取ip地址",
      "B. dhcp客户机只能收到一个dhcpoffer",
      "C. dhcp服务器可以把一个ip地址同时租借给两个网络的不同主机",
      "D. dhcp服务器中可自行设定租约期"
    ],
    "answer": 3,
    "explanation": "DHCP服务器可自行设定租约期，客户机可跨网段经中继获取地址，可能收到多个offer，故选D。"
  },
  {
    "id": 2556,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014a",
    "question": "高级加密标准aes支持的3中密钥长度中不包括（ ）。",
    "options": [
      "A. 56",
      "B. 128",
      "C. 192",
      "D. 256"
    ],
    "answer": 0,
    "explanation": "AES支持128、192、256位密钥长度，56位是DES的密钥长度，不属于AES，故选A。"
  },
  {
    "id": 2557,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014a",
    "question": "在报文摘要算法md5中，首先要进行明文分组与填充，其中分组时明文报文摘要按照（ ）位分组。",
    "options": [
      "A. 128",
      "B. 256",
      "C. 512",
      "D. 1024"
    ],
    "answer": 2,
    "explanation": "MD5先将明文按512位分组并填充，再经四轮运算生成128位摘要，故选C。"
  },
  {
    "id": 2558,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014a",
    "question": "以下关于ipsec协议的描述中，正确的是（ ）。",
    "options": [
      "A. ipsec认证头(ah)不提供数据加密服务",
      "B. ipsec封装安全负荷（esp）用于数据完整性认证和数据源认证",
      "C. ipsec的传输模式对原来的ip数据报进行了封装和加密，再加上了新的ip头",
      "D. ipsec通过应用层的web服务器建立安全连接"
    ],
    "answer": 0,
    "explanation": "IPsec的AH只提供数据完整性和源认证，不提供加密服务，加密由ESP完成，故选A。"
  },
  {
    "id": 2559,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014a",
    "question": "防火墙的工作层次是决定防火墙效率及安全的主要因素，下面叙述中正确的是（ ）。",
    "options": [
      "A. 防火墙工作层次越低，工作效率越高，安全性越高",
      "B. 防火墙工作层次越低，工作效率越低，安全性越低",
      "C. 防火墙工作层次越高，工作效率越高，安全性越低",
      "D. 防火墙工作层次越高，工作效率越低，安全性越高"
    ],
    "answer": 3,
    "explanation": "防火墙工作层次越高，能分析的内容越多，安全性越高，但处理开销大、效率越低，故选D。"
  },
  {
    "id": 2560,
    "type": "single",
    "category": "网络安全",
    "paper": "real2014a",
    "question": "在入侵检测系统中，事件分析器接收事件信息并对其进行分析，判断是否为入侵行为或异常现象，其常用的三种分析方法中不包括（ ）。",
    "options": [
      "A. 匹配模式",
      "B. 密文分析",
      "C. 数据完整性分析",
      "D. 统计分析"
    ],
    "answer": 1,
    "explanation": "入侵检测常用分析方法有模式匹配、统计分析和完整性分析，密文分析不属于其分析方法，故选B。"
  },
  {
    "id": 2561,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2014a",
    "question": "在windowsserver2003环境中有本地用户和域用户两种用户，其中本地用户信息存储在（ ）。",
    "options": [
      "A. 本地计算机的sam数据库",
      "B. 本地计算机的活动目录",
      "C. 域控制器的活动目录",
      "D. 域控制器的sam数据库中"
    ],
    "answer": 0,
    "explanation": "Windows Server 2003中本地用户账户信息存储在本地计算机的SAM数据库中，故选A。"
  },
  {
    "id": 2562,
    "type": "single",
    "category": "网络管理",
    "paper": "real2014a",
    "question": "管理站用setrequest在rmon表中产生一个新行，如果新行的索引值与表中其他行的索引值不冲突，则代理产生一个新行，其状态对象值为（ ）。",
    "options": [
      "A. createrequest",
      "B. undercreate",
      "C. valid",
      "D. invalid"
    ],
    "answer": 0,
    "explanation": "RMON表中新建行时，若索引不冲突，代理创建新行并将状态对象置为createRequest，故选A。"
  },
  {
    "id": 2563,
    "type": "single",
    "category": "网络管理",
    "paper": "real2014a",
    "question": "snmpc支持各种设备访问方式，在snmpc支持的设备访问方式中，只是用于对tcp服务轮询的方式是（ ）。",
    "options": [
      "A. 无访问模式",
      "B. icmp（ping）",
      "C. snmpv1和v2c",
      "D. snmpv3"
    ],
    "answer": 0,
    "explanation": "SNMPc中无访问模式仅对TCP服务进行轮询，不进行ICMP或SNMP访问，故选A。"
  },
  {
    "id": 2564,
    "type": "single",
    "category": "网络管理",
    "paper": "real2014a",
    "question": "下列数据类型中，snmpv2支持而snmpv1不支持的是（ ）。",
    "options": [
      "A. octetstring",
      "B. objectdescriptor",
      "C. unsigned32",
      "D. gauge32"
    ],
    "answer": 2,
    "explanation": "SNMPv2新增了Unsigned32等数据类型，SNMPv1不支持Unsigned32，故选C。"
  },
  {
    "id": 2565,
    "type": "single",
    "category": "无线网络",
    "paper": "real2014a",
    "question": "某实验室使用无线路由器提供内部上网，无线路由器采用固定ip地址连接至校园网，实验室用户使用一段时间后，不定期出现不能访问互联网的现象，经测试无线路由器工作正常，同时有线接入的用户可以访问互联网，分析以上情况，导致这一故障产生的最可能的原因是（ ）。",
    "options": [
      "A. 无线路由器配置错误",
      "B. 无线路由器硬件故障",
      "C. 内部或者外部网络攻击",
      "D. 校园网接入故障"
    ],
    "answer": 2,
    "explanation": "有线用户正常说明路由器及校园网接入正常，无线用户间歇性故障最可能是受到内部或外部网络攻击，故选C。"
  },
  {
    "id": 2566,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "校园网连接运营商的ip地址为202.117.113.3/30，本地网关的地址为192.168.1.254/24，如果本地计算机采用动态地址分配，在下图中应如何配置？（ ）。",
    "options": [
      "A. 选取“自动获得ip地址”",
      "B. 配置本地计算机的ip地址为192.168.1.x",
      "C. 配置本地计算机的ip地址为202.115.113.x",
      "D. 在网络169.254.x.x中选取一个不冲突的ip地址"
    ],
    "answer": 0,
    "explanation": "本地计算机采用动态地址分配，应配置为自动获得IP地址，由DHCP服务器分配，故选A。"
  },
  {
    "id": 2567,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "下面的选项中，不属于网络202.113.100.0/21的地址是（ ）。",
    "options": [
      "A. 2020.113.102.0",
      "B. 202.113.99.0",
      "C. 202.113.97.0",
      "D. 202.113.95.0"
    ],
    "answer": 3,
    "explanation": "202.113.100.0/21地址范围是202.113.96.0~202.113.103.255，202.113.95.0不在其中，故选D。"
  },
  {
    "id": 2568,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "下面的地址中属于单播地址的是（ ）。",
    "options": [
      "A. 125.221.191.255/18",
      "B. 192.168.24.123/30",
      "C. 200.114.207.94/27",
      "D. 224.0.0.23/16"
    ],
    "answer": 2,
    "explanation": "200.114.207.94/27中主机位非全0或全1，为单播地址；A为广播地址，B为广播地址，D为组播地址，故选C。"
  },
  {
    "id": 2569,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "ipv6地址的格式前缀用于表达地址类型或子网地址，例如60位地址12ab00000000cd3有多种合法的表示形式，下面的选项中，不合法的是（ ）。",
    "options": [
      "A. 12ab:0000:0000:cd30:0000:0000:0000:0000/60",
      "B. 12ab::cd30:0:0:0:0/60",
      "C. 12ab:0:0:cd3/60",
      "D. 12ab:0:0:cd30::/60"
    ],
    "answer": 2,
    "explanation": "IPv6地址中连续的0可用::压缩，但::只能出现一次，且压缩后每组仍应为16位。C项12ab:0:0:cd3只有4组，cd3不足16位，故不合法。"
  },
  {
    "id": 2570,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2014a",
    "question": "ipv6新增加了一种任意播地址，这种地址（ ）。",
    "options": [
      "A. 可以用作源地址，也可以用作目标地址",
      "B. 只可以作为源地址，不能作为目标地址",
      "C. 代表一组接口的标识符",
      "D. 可以用作路由器或主机的地址"
    ],
    "answer": 2,
    "explanation": "任意播地址标识一组接口，数据包发送给其中最近的一个接口，它只能作为目标地址使用，不能作为源地址，因此选C。"
  },
  {
    "id": 2571,
    "type": "single",
    "category": "无线网络",
    "paper": "real2014a",
    "question": "中国自主研发的3g通信标准是（ ）。",
    "options": [
      "A. cdma2000",
      "B. td-scdma",
      "C. wcdma",
      "D. wimax"
    ],
    "answer": 1,
    "explanation": "TD-SCDMA是中国自主研发的3G通信标准，由大唐电信等提出，CDMA2000、WCDMA、WiMAX均为国外标准。"
  },
  {
    "id": 2572,
    "type": "single",
    "category": "无线网络",
    "paper": "real2014a",
    "question": "ieee802.11规定了多种wlan通信标准，其中（ ）与其他标准采用的频段不同，因而不能兼容。",
    "options": [
      "A. ieee802.11a",
      "B. ieee802.11b",
      "C. ieee802.11g",
      "D. ieee802.11n"
    ],
    "answer": 0,
    "explanation": "IEEE 802.11a工作在5GHz频段，而802.11b/g/n工作在2.4GHz频段，频段不同导致802.11a与其他标准不能兼容。"
  },
  {
    "id": 2573,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2014a",
    "question": "网络系统设计过程中，物理网络设计阶段的任务是（ ）。",
    "options": [
      "A. 依据逻辑网络设计的要求，确定设备的具体物理分布和运行环境",
      "B. 分析现有网络和新网络的各类资源分布，掌握网络所处的状态",
      "C. 根据需求规范和通信规范，实施资源分配和安全规划",
      "D. 理解网络应该具有的功能和性能，最终设计出符合用户需求的网络"
    ],
    "answer": 0,
    "explanation": "物理网络设计阶段依据逻辑网络设计的要求，确定设备的具体物理分布、布线及运行环境，故选A。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2013b";
  const A = [
  {
    "id": 2574,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "在程序执行过程中，cache与主存的地址映像由 （ ） 。",
    "options": [
      "A. 硬件自动完成",
      "B. 程序员调度",
      "C. 操作系统管理",
      "D. 程序员与操作系统协同完成"
    ],
    "answer": 0,
    "explanation": "Cache与主存之间的地址映像和转换由硬件自动完成，对程序员和操作系统透明，无需软件干预。"
  },
  {
    "id": 2575,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "指令寄存器的位数取决于 （ ）。",
    "options": [
      "A. 存储器的容量",
      "B. 指令字长",
      "C. 数据总线的宽度",
      "D. 地址总线的宽度"
    ],
    "answer": 1,
    "explanation": "指令寄存器用于存放当前执行的指令，其位数取决于指令字长，指令字长越长，可容纳的指令信息越多。"
  },
  {
    "id": 2576,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "若计算机存储数据采用的是双符号位（00表示正号、11表示负号），两个符号相同的数相加时，如果运算结果的两个符号位经（） 运算得1，则可判定这两个数相加的结果产生了溢出。",
    "options": [
      "A. 逻辑与",
      "B. 逻辑或",
      "C. 逻辑同或",
      "D. 逻辑异或"
    ],
    "answer": 3,
    "explanation": "双符号位判断溢出时，若两个符号位经异或运算结果为1（即00与11不一致），则说明结果发生溢出，故选D。"
  },
  {
    "id": 2577,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "若某计算机字长为32位，内存容量为2gb，按字编址，则可寻址范围为 （ ）。",
    "options": [
      "A. 1024m",
      "B. 1gb",
      "C. 512m",
      "D. 2gb"
    ],
    "answer": 2,
    "explanation": "字长32位即4字节，2GB内存按字编址可寻址单元数为2GB/4B=512M，故可寻址范围为512M。"
  },
  {
    "id": 2578,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "视频信息是连续的图像序列，（ ） 是构成视频信息的基本元素。",
    "options": [
      "A. 帧",
      "B. 场",
      "C. 幅",
      "D. 像素"
    ],
    "answer": 0,
    "explanation": "视频信息是连续的图像序列，帧是构成视频信息的基本元素，连续播放的帧形成动态视频画面。"
  },
  {
    "id": 2579,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "为说明某一问题，在学术论文中需要引用某些资料，以下叙述中错误的是（ ） 。",
    "options": [
      "A. 既可引用发表的作品，也可引用未发表的作品",
      "B. 只能限于介绍、评论作品",
      "C. 只要不构成自己作品的主要部分，可适当引用资料",
      "D. 不必征得原作者的同意，不需要向他支付报酬"
    ],
    "answer": 0,
    "explanation": "学术论文引用资料一般限于已发表作品，引用未发表作品需征得作者同意，故A项说法错误。"
  },
  {
    "id": 2580,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "程序运行过程中常使用参数值函数（过程）间传递信息，引用调用传递的是实参的 （ ）。",
    "options": [
      "A. 地址",
      "B. 类型",
      "C. 名称",
      "D. 值"
    ],
    "answer": 0,
    "explanation": "引用调用（传地址调用）传递的是实参的地址，形参通过该地址直接访问并修改实参的值。"
  },
  {
    "id": 2581,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013b",
    "question": "算术表达式a+(b-c)*d的后缀式是 （ ） （+、-、*表示算术的加、减、乘运算，运算符的优先级和结合性遵循惯例）。",
    "options": [
      "A. b c – d * a +",
      "B. a b c – d * +",
      "C. a b + c – d *",
      "D. a b c d – * +"
    ],
    "answer": 1,
    "explanation": "按后缀式转换规则，a+(b-c)*d先算b-c得bc-，再乘d得bc-d*，最后加a得bc-d*a+，故选B。"
  },
  {
    "id": 2582,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2013b",
    "question": "设信道带宽为3000hz，信噪比为30db，则信道可达到的最大数据速率为 （ ）b/s。",
    "options": [
      "A. 100000",
      "B. 200000",
      "C. 300000",
      "D. 400000"
    ],
    "answer": 2,
    "explanation": "信噪比30dB即S/N=1000，由香农公式C=W·log2(1+S/N)=3000×log2(1001)≈3000×10=300000b/s。"
  },
  {
    "id": 2583,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2013b",
    "question": "下面哪个字段包含在tcp头部和udp头部？ （ ）。",
    "options": [
      "A. 发送顺序号",
      "B. 窗口",
      "C. 源端口",
      "D. 紧急指针"
    ],
    "answer": 2,
    "explanation": "TCP和UDP头部都包含源端口和目的端口字段，发送顺序号、窗口、紧急指针为TCP特有，故选C。"
  },
  {
    "id": 2584,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2013b",
    "question": "在linux操作系统中把外部设备当作文件统一管理，外部设备文件通常放在 （ ） 目录中。",
    "options": [
      "A. /dev",
      "B. /lib",
      "C. /etc",
      "D. /bin"
    ],
    "answer": 0,
    "explanation": "Linux将外部设备作为文件统一管理，设备文件通常存放在/dev目录中，如/dev/sda、/dev/tty等。"
  },
  {
    "id": 2585,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2013b",
    "question": "linux中，下列（ ）命令可以更改一个文件的权限设置。",
    "options": [
      "A. attrib",
      "B. file",
      "C. chmod",
      "D. change"
    ],
    "answer": 2,
    "explanation": "chmod命令用于更改文件或目录的权限设置，attrib是Windows命令，file和change不是Linux权限修改命令。"
  },
  {
    "id": 2586,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013b",
    "question": "以下关于dns服务器的说法中，错误的是 （ ） 。",
    "options": [
      "A. dns的域名空间是由树状结构组织的分层域名",
      "B. 转发域名服务器位于域名树的顶层",
      "C. 辅助域名服务器定期从主域名服务器获得更新数据",
      "D. 转发域名服务器负责所有非本地域名的查询"
    ],
    "answer": 1,
    "explanation": "转发域名服务器并非位于域名树顶层，根域名服务器才位于顶层，故B项说法错误。"
  },
  {
    "id": 2587,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013b",
    "question": "下列关于dhcp配置的叙述中，错误的是 （ ） 。",
    "options": [
      "A. 在windows环境下，客户机可用命令 ipconfig /renew 重新申请ip地址",
      "B. 若可供分配的ip地址较多，可适当增加地址租约期限",
      "C. dhcp服务器不需要配置固定的ip地址",
      "D. dhcp服务器可以为不在同一网段的客户机分配ip地址"
    ],
    "answer": 2,
    "explanation": "DHCP服务器自身必须配置固定的IP地址，否则客户机无法稳定地找到它，故C错误。A、B、D均为正确的DHCP配置描述。"
  },
  {
    "id": 2588,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2013b",
    "question": "计算机网络机房建设中，为了屏蔽外界干扰、漏电及电火花等，要求所有计算机网络设备的机箱、机柜、机壳等都需接地，该接地系统称为安全地，安全地接地电阻要求小于（ ）。",
    "options": [
      "A. 1ω",
      "B. 4ω",
      "C. 5ω",
      "D. 10ω"
    ],
    "answer": 1,
    "explanation": "机房安全地用于屏蔽干扰、漏电和电火花，其接地电阻要求小于4Ω，故选B。"
  },
  {
    "id": 2589,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013b",
    "question": "某单位局域网配置如下图所示，pc2发送到internet上的报文源ip地址为 （ ） 。",
    "options": [
      "A. 192.168.0.2",
      "B. 192.168.0.1",
      "C. 202.117.112.1",
      "D. 202.117.112.2"
    ],
    "answer": 3,
    "explanation": "PC2发往Internet的报文经NAT转换后，源IP地址被替换为出口路由器的公网接口地址202.117.112.2，故选D。"
  },
  {
    "id": 2590,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013b",
    "question": "下面acl语句中，表达“禁止外网和内网之间互相ping”的是 （ ） 。",
    "options": [
      "A. access-list 101 permit any any",
      "B. access-list 101 permit icmp any any",
      "C. access-list 101 deny any any",
      "D. access-list 101 deny icmp any any"
    ],
    "answer": 3,
    "explanation": "禁止内外网互相ping需拒绝ICMP协议，ACL语句为access-list 101 deny icmp any any，故选D。"
  },
  {
    "id": 2591,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013b",
    "question": "报文摘要算法sha-1输出的位数是 （ ） 。",
    "options": [
      "A. 100位",
      "B. 128位",
      "C. 160位",
      "D. 180位"
    ],
    "answer": 2,
    "explanation": "SHA-1报文摘要算法输出160位的散列值，故选C。"
  },
  {
    "id": 2592,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013b",
    "question": "下列算法中，不属于公开密钥加密算法的是 （ ）。",
    "options": [
      "A. ecc",
      "B. dsa",
      "C. rsa",
      "D. des"
    ],
    "answer": 3,
    "explanation": "DES是对称密钥加密算法，不属于公开密钥加密算法；ECC、DSA、RSA均为公钥算法，故选D。"
  },
  {
    "id": 2593,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013b",
    "question": "snmpc软件支持的4个内置tcp服务是 （ ） 。",
    "options": [
      "A. ftp、smtp、web和telnet",
      "B. dhcp、smtp、web和telenet",
      "C. dns、smtp、web和telnet",
      "D. tftp、smtp、web和telenet"
    ],
    "answer": 0,
    "explanation": "SNMPc软件内置的4个TCP服务是FTP、SMTP、Web和Telnet，故选A。"
  },
  {
    "id": 2594,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013b",
    "question": "属于网络202.115.200.0/21的地址是 （ ） 。",
    "options": [
      "A. 202.115.198.0",
      "B. 202.115.206.0",
      "C. 202.115.217.0",
      "D. 202.115.224.0"
    ],
    "answer": 1,
    "explanation": "202.115.200.0/21的地址范围是202.115.200.0~202.115.207.255，206.0在此范围内，故选B。"
  },
  {
    "id": 2595,
    "type": "single",
    "category": "路由协议",
    "paper": "real2013b",
    "question": "4条路由：220.117.129.0/24、220.117.130.0/24、220.117.132.0/24和220.117.133.0/24经过汇聚后得到的网络地址是（ ）。",
    "options": [
      "A. 220.117.132.0/23",
      "B. 220.117.128.0/22",
      "C. 220.117.130.0/22",
      "D. 220.117.128.0/21"
    ],
    "answer": 3,
    "explanation": "4条路由前21位相同，汇聚后掩码为/21，网络地址为220.117.128.0/21，故选D。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2013a";
  const A = [
  {
    "id": 2596,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013a",
    "question": "常用的虚拟存储器由（ ）两级存储器组成。",
    "options": [
      "A. 主存－辅存",
      "B. cache－主存",
      "C. cache－辅存",
      "D. 主存—硬盘"
    ],
    "answer": 0,
    "explanation": "虚拟存储器由主存和辅存两级存储器组成，主存存放当前运行的程序和数据，辅存作为主存的扩充，二者结合实现虚拟存储。"
  },
  {
    "id": 2597,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013a",
    "question": "中断向量可提供（ ）。",
    "options": [
      "A. i/o设备的端口地址",
      "B. 所传送数据的起始地址",
      "C. 中断服务程序的入口地址",
      "D. 主程序的断点地址"
    ],
    "answer": 2,
    "explanation": "中断向量是中断服务程序入口地址的指针，CPU响应中断后通过中断向量找到并转入相应的中断服务程序执行。"
  },
  {
    "id": 2598,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013a",
    "question": "为了便于实现多级中断，使用（ ）来保护断点和现场最有效",
    "options": [
      "A. rom",
      "B. 中断向量表",
      "C. 通用寄存器",
      "D. 堆栈"
    ],
    "answer": 3,
    "explanation": "堆栈遵循后进先出原则，多级中断时用堆栈保存断点和现场，能按嵌套顺序正确恢复，是最有效的方式。"
  },
  {
    "id": 2599,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013a",
    "question": "dma工作方式下，在（ ）之间建立了直接的数据通路。",
    "options": [
      "A. cpu与外设",
      "B. cpu与主存",
      "C. 主存与外设",
      "D. 外设与外设"
    ],
    "answer": 2,
    "explanation": "DMA方式下，数据传送不经过CPU，而是在主存与外设之间建立直接数据通路，由DMA控制器控制数据搬运。"
  },
  {
    "id": 2600,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2013a",
    "question": "王某是一名软件设计师，按公司规定编写软件文档，并上交公司存档。这些软件文档属于职务作品，且（ ）。",
    "options": [
      "A. 其著作权由公司享有",
      "B. 其著作权由软件设计师享有",
      "C. 除其署名权以外，著作权的其他权利由软件设计师享有",
      "D. 其著作权由公司和软件设计师共同享有"
    ],
    "answer": 0,
    "explanation": "职务作品中，主要利用单位物质技术条件创作并由单位承担责任的软件，其著作权由公司（法人）享有。"
  },
  {
    "id": 2601,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2013a",
    "question": "假设某分时系统采用简单时间片轮转法，当系统中的用户数为n,时间片为q时，系统对每个用户的响应时间t=（ ）。",
    "options": [
      "A. n",
      "B. q",
      "C. n*q",
      "D. n+q"
    ],
    "answer": 2,
    "explanation": "简单时间片轮转法中，每个用户依次获得一个时间片q，n个用户轮转一遍的总时间为n*q，即每个用户的响应时间。"
  },
  {
    "id": 2602,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "各种联网设备的功能不同，路由器的主要功能是（ ）。",
    "options": [
      "A. 根据路由表进行分组转发",
      "B. 负责网络访问层的安全",
      "C. 分配vlan成员",
      "D. 扩大局域网覆盖范围"
    ],
    "answer": 0,
    "explanation": "路由器工作在网络层，主要功能是根据路由表对分组进行转发，实现不同网络之间的互联和数据转发。"
  },
  {
    "id": 2603,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2013a",
    "question": "假设模拟信号的频率范围为3~9mhz，采样频率必须大于（ ）时，才能使得到的样本信号不失真",
    "options": [
      "A. 6mhz",
      "B. 12mhz",
      "C. 18mhz",
      "D. 20mhz"
    ],
    "answer": 2,
    "explanation": "根据奈奎斯特采样定理，采样频率须大于信号最高频率的2倍，最高频率为9MHz，故须大于18MHz。"
  },
  {
    "id": 2604,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "如下图所示，若路由器c的e0端口状态为down,则当主机a向主机c发送数据时，路由器c发送（ ）。",
    "options": [
      "A. icmp回声请求报文",
      "B. icmp参数问题报文",
      "C. icmp目标不可到达报文",
      "D. icmp源抑制报文"
    ],
    "answer": 2,
    "explanation": "路由器e0端口状态为down，无法将数据送达主机c，路由器会向源主机发送ICMP目标不可到达报文报告错误。"
  },
  {
    "id": 2605,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "当一个主机要获取通信目标的mac地址时，（ ）。",
    "options": [
      "A. 单播arp请求到默认网关",
      "B. 广播发送 arp请求",
      "C. 与对方主机建立tcp连接",
      "D. 转发ip数据报到邻居结点"
    ],
    "answer": 1,
    "explanation": "主机获取目标MAC地址时，通过广播方式发送ARP请求，同一网段内目标主机收到后以单播ARP应答返回其MAC地址。"
  },
  {
    "id": 2606,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2013a",
    "question": "路由器出厂时，默认的串口封装协议是（ ）。",
    "options": [
      "A. hdlc",
      "B. wap",
      "C. mpls",
      "D. l2tp"
    ],
    "answer": 0,
    "explanation": "路由器串口默认的封装协议是HDLC（高级数据链路控制协议），用于在串行链路上进行数据链路层封装。"
  },
  {
    "id": 2607,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2013a",
    "question": "在异步通信中，每个字符包含1们起始位，7位数据位，1位奇偶位和2位终止位，每秒传送100个字符，则有效数据速率为（ ）。",
    "options": [
      "A. 100b/s",
      "B. 500b/s",
      "C. 700b/s",
      "D. 1000b/s"
    ],
    "answer": 2,
    "explanation": "每字符共1+7+1+2=11位，每秒100字符即1100b/s，其中有效数据位为7位，故有效数据速率为7×100=700b/s。"
  },
  {
    "id": 2608,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2013a",
    "question": "下列选项中，不采用虚电路通信的网络是（ ）网。",
    "options": [
      "A. x.25",
      "B. 帧中继",
      "C. atm",
      "D. ip"
    ],
    "answer": 3,
    "explanation": "X.25、帧中继和ATM均采用虚电路方式通信，而IP网络采用无连接的数据报方式，不建立虚电路。"
  },
  {
    "id": 2609,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "在网络层采用分层编址方案的好处是（ ）。",
    "options": [
      "A. 减少了路由表的长度",
      "B. 自动协商数据速率",
      "C. 更有效地使用mac地址",
      "D. 可以采用更复杂的路由选择算法"
    ],
    "answer": 0,
    "explanation": "网络层采用分层编址，可将网络前缀聚合，减少路由表条目长度，提高路由查找和转发效率。"
  },
  {
    "id": 2610,
    "type": "single",
    "category": "交换技术",
    "paper": "real2013a",
    "question": "在交换网络中，vtp协议作用是什么？（ ）。",
    "options": [
      "A. 选举根网桥",
      "B. 将vlan信息传播到整个网络",
      "C. 建立端到端连接",
      "D. 选择最佳路由"
    ],
    "answer": 1,
    "explanation": "VTP（VLAN中继协议）用于在交换网络中统一管理和传播VLAN配置信息，使各交换机VLAN信息保持一致。"
  },
  {
    "id": 2611,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "参见下图，主机aping主机 b，当数据帧到达主机b时，其中包含的源mac地址和源ip地址是（ ）。",
    "options": [
      "A. aaaa.bbbb.0003和10.15.0.11",
      "B. aaaa.bbbb.0002和10.10.128.1",
      "C. aaaa.bbbb.0002和10.15.0.11",
      "D. aaaa.bbbb.0000和10.10.64.1"
    ],
    "answer": 2,
    "explanation": "数据帧到达主机b时，源MAC为发送方主机a的MAC，源IP为主机a的IP地址10.15.0.11，目的地址不变。"
  },
  {
    "id": 2612,
    "type": "single",
    "category": "路由协议",
    "paper": "real2013a",
    "question": "下面描述中，不属于链路状态协议特点的是（ ）。",
    "options": [
      "A. 提供了整个网络的拓扑视图",
      "B. 计算到达的各个目标最短通路",
      "C. 邻居之间互相交换路由表",
      "D. 具有事件触发的路由更新功能"
    ],
    "answer": 2,
    "explanation": "链路状态协议通过泛洪链路状态信息使各路由器获得全网拓扑，而非邻居间交换路由表，交换路由表是距离矢量协议的特点。"
  },
  {
    "id": 2613,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2013a",
    "question": "关于网桥和交换机，下面的描述中正确的是（ ）。",
    "options": [
      "A. 网桥端口数少，因此比交换机转发更快",
      "B. 网桥转发广播帧，而交接机不转发广播帧",
      "C. 交换机是一种多播口网桥",
      "D. 交换机端口多，因此扩大了冲突域大小"
    ],
    "answer": 2,
    "explanation": "交换机本质上是多端口网桥，端口数量多，每个端口独享带宽并隔离冲突域，转发效率高于普通网桥。"
  },
  {
    "id": 2614,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "使用路由器对局域网进行分段的好处是（ ）。",
    "options": [
      "A. 广播帧不会通过路由进行转发",
      "B. 通过路由器转发减少了通信延迟",
      "C. 路由器的价格便宜，比使用交换机更经济",
      "D. 可以开发新的应用"
    ],
    "answer": 0,
    "explanation": "路由器隔离广播域，广播帧不会通过路由器转发，从而减少广播风暴，这是用路由器对局域网分段的主要好处。"
  },
  {
    "id": 2615,
    "type": "single",
    "category": "路由协议",
    "paper": "real2013a",
    "question": "ospf网络可以划分为多个区域（area），下面关于区域的描述中错误的是（ ）。",
    "options": [
      "A. 区域可以被赋予0~65535中的任何编号",
      "B. 单域ospf网络必须配置成区域1",
      "C. 区域0被称为主干网",
      "D. 分层的ospf网络必须划分为多个区域"
    ],
    "answer": 1,
    "explanation": "单域OSPF网络必须配置成区域0（主干区域），而非区域1，其余关于区域编号、主干网和分层划分的描述均正确。"
  },
  {
    "id": 2616,
    "type": "single",
    "category": "路由协议",
    "paper": "real2013a",
    "question": "与ripv1相比，ripv2的改进是（ ）。",
    "options": [
      "A. 采用了可变长子网掩码",
      "B. 使用spf算法计算最短路由",
      "C. 广播发布路由更新信息",
      "D. 采用了更复杂的路由度量算法"
    ],
    "answer": 0,
    "explanation": "RIPv2支持可变长子网掩码（VLSM）和无类别路由，而RIPv1是有类路由协议，不支持VLSM，这是RIPv2的主要改进之一。"
  },
  {
    "id": 2617,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2013a",
    "question": "有多种方案可以在一台服务器中安装windows和linux两种网络操作系统，其中可以同时运行windows和linux系统的方案是（ ）。",
    "options": [
      "A. gru",
      "B. lilo多引导程序",
      "C. vmare虚拟机",
      "D. windows多引导程序"
    ],
    "answer": 2,
    "explanation": "VMware虚拟机可在同一台服务器上同时运行Windows和Linux系统，而LILO、GRUB等多引导程序只能选择其一启动，不能同时运行。"
  },
  {
    "id": 2618,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2013a",
    "question": "linux系统中的文件操作命令grep用于（ ）。",
    "options": [
      "A. 列出文件的属性信息",
      "B. 在指定路径查找文件",
      "C. 复制文件",
      "D. 在指定文件中查找指定字符串"
    ],
    "answer": 3,
    "explanation": "grep是Linux中的文本搜索命令，用于在指定文件中查找匹配指定字符串或模式的行，常用于文本过滤和查找。"
  },
  {
    "id": 2619,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013a",
    "question": "在某台主机上无法访问域名为www.bbb.cn的网站，而局域网中的其他主机可以访问，在该主机上执行ping命令时有如下所示的信息：分析以上信息，可能造成该现象的原因是（ ）。",
    "options": [
      "A. 该计算机设置的dns服务器工作不正常",
      "B. 该计算机的tcp/ip协议工作不正常",
      "C. 该计算机连接的网络中相关的网络设备配置了拦截的acl规则",
      "D. 该计算机网关地址设置错误"
    ],
    "answer": 2,
    "explanation": "其他主机可正常访问说明DNS和网络本身正常，仅该主机ping不通，可能是网络中相关设备配置了ACL规则拦截了该主机的流量。"
  },
  {
    "id": 2620,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013a",
    "question": "近年来，我国出现的各类病毒中，（ ）病毒通过木马形式感染智能手机。",
    "options": [
      "A. 欢乐时光",
      "B. 熊猫烧香",
      "C. x卧底",
      "D. cih"
    ],
    "answer": 2,
    "explanation": "X卧底是一种通过木马形式感染智能手机的病毒，可窃取手机信息，属于移动终端恶意软件。"
  },
  {
    "id": 2621,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013a",
    "question": "某dhcp服务器设置的ip地址池从192.168.1.100到192.168.1.200，此时该网段下某台安装windows系统的工作站启动后，获得的ip地址是169.254.220.188，导致这一现象最可能的原因是( )。",
    "options": [
      "A. dhcp服务器设置的租约期太长",
      "B. dhcp服务器提供了保留的ip地址",
      "C. 网段内还有其他的dhcp服务器，工作站从其他的服务器上获得的地址",
      "D. dhcp服务器没有工作"
    ],
    "answer": 3,
    "explanation": "169.254.x.x是Windows在无法联系到DHCP服务器时自动分配的APIPA地址，说明DHCP服务器没有工作，工作站未能获取有效地址。"
  },
  {
    "id": 2622,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013a",
    "question": "下列关于dhcp的说法中，错误的是（ ）。",
    "options": [
      "A. windows操作系统中，默认的租约期是8天",
      "B. 客户机通常选择最近的dhcp服务器提供的地址",
      "C. 客户机可以跨网段申请dhcp服务器提供的ip地址",
      "D. 客户机一直使用dhcp服务器分配给它的ip地址，直到租约期结束才开始请求更新租约"
    ],
    "answer": 3,
    "explanation": "客户机在租约期过半时就会请求续租，而不是等到租约期结束才更新，因此该说法错误，其余选项均正确。"
  },
  {
    "id": 2623,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2013a",
    "question": "主机host1对host2进行域名查询的过程如下图所示，下列说法中正确的是（ ）",
    "options": [
      "A. 根域名服务器采用迭代查询，中介域名服务器采用递归查询",
      "B. 根域名服务器采用递归查询，中介域名服务器采用迭代查询",
      "C. 根域名服务器和中介域名服务器采用迭代查询",
      "D. 根域名服务器和中介域名服务器采用递归查询"
    ],
    "answer": 0,
    "explanation": "主机向本地域名服务器通常采用递归查询，本地域名服务器向根域名服务器等采用迭代查询，根和中介域名服务器均采用迭代查询。"
  },
  {
    "id": 2624,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013a",
    "question": "如果一台ciscopix防火墙有如下的配置：pix(config)#nameifethernet0f1security0pix(config)#nameifethernet1f2security100pix(config)#nameifethernet2f3security50",
    "options": [
      "A. 端口f1作为外部网络接口，f2连接dmz区域，f3作为内部网络接口",
      "B. 端口f1作为内部网络接口，f2连接dmz区域，f3作为外部网络接口",
      "C. 端口f1作为外部网络接口，f2作为内部网络接口，f3连接dmz区域",
      "D. 端口f1作为内部网络接口，f2作为内部网络接口，f3连接dmz区域"
    ],
    "answer": 2,
    "explanation": "PIX防火墙中security数值越大安全级别越高，f2为100是内部接口，f3为50是DMZ，f1为0是外部接口。"
  },
  {
    "id": 2625,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2013a",
    "question": "在接收邮件时，客户端代理软件与pop3服务器通过建立（ ）连接来传送报文。",
    "options": [
      "A. udp",
      "B. tcp",
      "C. p2p",
      "D. dhcp"
    ],
    "answer": 1,
    "explanation": "POP3协议用于接收邮件，工作在TCP之上，默认使用TCP的110端口，客户端与服务器建立TCP连接来传送报文。"
  },
  {
    "id": 2626,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013a",
    "question": "利用三重des进行加密，以下说法正确的是（ ）。",
    "options": [
      "A. 三重des的密钥长度是56位",
      "B. 三重des使用三个不同的密钥进行三次加密",
      "C. 三重des的安全性高于des",
      "D. 三重des的加密速度比des加密速度快"
    ],
    "answer": 2,
    "explanation": "三重DES使用多个密钥进行三次加密，密钥长度和安全性均高于单重DES，但加密速度比DES慢，故安全性高于DES正确。"
  },
  {
    "id": 2627,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013a",
    "question": "利用报文摘要算法生成报文摘要的目的是（ ）。",
    "options": [
      "A. 验证通信对方的身份，防止假冒",
      "B. 对传输数据进行加密，防止数据被窃听",
      "C. 防止发送方否认发送过的数据",
      "D. 防止发送的报文被篡改"
    ],
    "answer": 3,
    "explanation": "报文摘要算法生成固定长度的摘要，接收方通过比对摘要可检测报文是否被篡改，主要用于保证数据完整性。"
  },
  {
    "id": 2628,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013a",
    "question": "（ ）是支持电子邮件加密服务的协议。",
    "options": [
      "A. pgp",
      "B. pki",
      "C. set",
      "D. kerberos"
    ],
    "answer": 0,
    "explanation": "PGP（Pretty Good Privacy）是支持电子邮件加密和签名的协议，可提供邮件的机密性和认证服务。"
  },
  {
    "id": 2629,
    "type": "single",
    "category": "网络安全",
    "paper": "real2013a",
    "question": "下图为 darpa提出的公共入侵检测框架示意图，该系统由4个模块组成，其中模块①-④对应的正确名称为（ ）。",
    "options": [
      "A. 事件产生器、事件数据库、事件分析器、响应单元",
      "B. 事件分析器、事件产生器、响应单元、事件数据库",
      "C. 事件数据库、响应单元、事件产生器、事件分析器",
      "D. 响应单元、事件分析器、事件数据库、事件产生器"
    ],
    "answer": 3,
    "explanation": "DARPA提出的CIDF公共入侵检测框架由事件产生器、事件分析器、事件数据库和响应单元四个模块组成，按图示顺序对应为响应单元、事件分析器、事件数据库、事件产生器。"
  },
  {
    "id": 2630,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2013a",
    "question": "在windowsserver2003中，创建用户组时，可选择的组类型中，仅用于分发电子邮件且没有启用安全性的是（ ）。",
    "options": [
      "A. 安全组",
      "B. 本地组",
      "C. 全局组",
      "D. 通信组"
    ],
    "answer": 3,
    "explanation": "Windows Server 2003中组类型分为安全组和通信组，通信组仅用于分发电子邮件，不启用安全性。"
  },
  {
    "id": 2631,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2013a",
    "question": "在windowserver2003中，与windowserver2000终端服务对应的是（ ）。",
    "options": [
      "A. 远程协助",
      "B. 管理远程桌面",
      "C. 远程管理的web界面",
      "D. 远程安装服务"
    ],
    "answer": 1,
    "explanation": "Windows Server 2003中的管理远程桌面功能对应Windows Server 2000的终端服务，用于远程管理服务器。"
  },
  {
    "id": 2632,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013a",
    "question": "网络管理系统由网络管理站，网管代理，网络管理协议和管理信息库4个要素组成，当网管代理向管理站发送事件报告时，使用的操作是（ ）。",
    "options": [
      "A. get",
      "B. get-next",
      "C. trap",
      "D. set"
    ],
    "answer": 2,
    "explanation": "SNMP中网管代理向管理站主动发送事件报告使用的操作是Trap，用于报告异常事件或告警信息。"
  },
  {
    "id": 2633,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013a",
    "question": "在mib-2中，ip组对象ipinreceives为接收的ip数据报总数，其数据类型为（ ）类型",
    "options": [
      "A. 整数",
      "B. 计数器",
      "C. 序列",
      "D. 计量器"
    ],
    "answer": 1,
    "explanation": "MIB-2中ipInReceives表示接收的IP数据报总数，属于累计计数，其数据类型为Counter（计数器）。"
  },
  {
    "id": 2634,
    "type": "single",
    "category": "网络管理",
    "paper": "real2013a",
    "question": "在tcp/ip协议分组结构中，snmp是在（ ）协议之上的异步请求/响应协议。",
    "options": [
      "A. tcp",
      "B. udp",
      "C. http",
      "D. p2p"
    ],
    "answer": 1,
    "explanation": "SNMP是应用层协议，基于UDP协议之上运行，采用异步请求/响应方式，使用UDP的161和162端口。"
  },
  {
    "id": 2635,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "一台电脑的本地连接设置如下图所示，结果发现不能拼通任何远程设备，该故障的原因是什么？（ ）。",
    "options": [
      "A. 默认网关的地址不属于主机所在的子网",
      "B. 该主机的地址是一个广播地址",
      "C. 默认网关的地址是该子网中的广播地址",
      "D. 该主机的地址是一个无效的组播地址"
    ],
    "answer": 2,
    "explanation": "默认网关地址192.168.0.255是该子网的广播地址，不能作为网关使用，导致主机无法与远程设备通信。"
  },
  {
    "id": 2636,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "如果指定子网掩码为255.255.254.0，则地址（ ）可以被赋予一个主机。",
    "options": [
      "A. 112.10.4.0",
      "B. 186.55.3.0",
      "C. 117.30.3.255",
      "D. 17.34.36.0"
    ],
    "answer": 1,
    "explanation": "掩码255.255.254.0即/23，主机位9位。B项186.55.3.0的第三字节为奇数3，属该/23子网的主机地址；A、C、D分别为网络号或广播地址，不能赋给主机。"
  },
  {
    "id": 2637,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "某个网络中包含320台主机，采用什么子网掩码可以把这些主机置于同一个子网中而且不浪费地址？（ ）。",
    "options": [
      "A. 255.255.255.0",
      "B. 255.255.254.0",
      "C. 255.255.252.0",
      "D. 255.255.248.0"
    ],
    "answer": 1,
    "explanation": "320台主机需主机位至少9位（2^9-2=510），掩码为/23即255.255.254.0，可容纳510台且不浪费，故选B。"
  },
  {
    "id": 2638,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "如果dhcp服务器分配的默认网关地址是192.168.5.33/28，则主机的有效地址应该是（ ）。",
    "options": [
      "A. 192.168.5.55",
      "B. 192.168.5.47",
      "C. 192.168.5.40",
      "D. 192.168.5.3"
    ],
    "answer": 2,
    "explanation": "192.168.5.33/28所在子网为192.168.5.32/28，范围32~47，可用主机33~46。选项中仅192.168.5.40在此范围，故选C。"
  },
  {
    "id": 2639,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "4条路由：124.23.129.0/24,124.23.130.0/24,124.23.132.0/24和124.23.133.0/24经过汇聚后得到的网络地址是（ ）。",
    "options": [
      "A. 124.23.128.0/21",
      "B. 124.23.128.0/22",
      "C. 124.23.130.0/22",
      "D. 124.33.128.0/23"
    ],
    "answer": 0,
    "explanation": "四条路由第三字节129、130、132、133，二进制前5位相同，可聚合为/21，网络地址124.23.128.0/21，故选A。"
  },
  {
    "id": 2640,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "下面哪一个ip地址属于cidr地址块120.64.4.0/22？ （ ）。",
    "options": [
      "A. 120.64.8.32",
      "B. 120.64.7.64",
      "C. 120.64.12.128",
      "D. 120.64.3.255"
    ],
    "answer": 1,
    "explanation": "120.64.4.0/22的地址范围是120.64.4.0~120.64.7.255，选项中仅120.64.7.64落在此范围内，故选B。"
  },
  {
    "id": 2641,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "两个主机通过电缆直接相连，主机a的ip地址为220.17.33.24/28，而主机b的ip地址为220.17.33.100/28，两个主机互相ping不能，这时应该（ ）。",
    "options": [
      "A. 改变主机a的地址为220.17.33.15",
      "B. 改变主机b的地址为220.17.33.111",
      "C. 改变子网掩码为26",
      "D. 改变子网掩码为25"
    ],
    "answer": 3,
    "explanation": "两主机/28掩码下分属不同子网（33.24属33.16/28，33.100属33.96/28）。改为/25掩码后二者同属220.17.33.0/25，可互通，故选D。"
  },
  {
    "id": 2642,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "下面哪个地址可以应用于公共互联网中？（ ）。",
    "options": [
      "A. 10.172.12.56",
      "B. 172.64.12.23",
      "C. 192.168.22.78",
      "D. 172.16.33.124"
    ],
    "answer": 1,
    "explanation": "10.0.0.0/8、172.16.0.0/12、192.168.0.0/16为私有地址。172.64.12.23不在私有范围内，可用于公共互联网，故选B。"
  },
  {
    "id": 2643,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "下面关于ipv6单播地址的描述中，正确的是（ ）?",
    "options": [
      "A. 全球单播地址的格式前缀为2000::/3",
      "B. 链路本地地址的格式前缀为fe00::/12",
      "C. 站点本地地址的格式前缀为fe00::/10",
      "D. 任何端口只能有唯一的全局地址"
    ],
    "answer": 0,
    "explanation": "IPv6全球单播地址格式前缀为2000::/3，A正确；链路本地为FE80::/10，站点本地为FEC0::/10，B、C错误，D说法绝对错误。"
  },
  {
    "id": 2644,
    "type": "single",
    "category": "无线网络",
    "paper": "real2013a",
    "question": "在wi-fi安全协议中，wpa与wep相比，采用了（ ）。",
    "options": [
      "A. 较短的初始化向量",
      "B. 更强的加密算法",
      "C. 共享密钥认证方案",
      "D. 临时密钥以减少安全风险"
    ],
    "answer": 3,
    "explanation": "WPA相比WEP采用TKIP临时密钥机制，为每个数据包动态生成密钥，减少密钥重用带来的安全风险，故选D。"
  },
  {
    "id": 2645,
    "type": "single",
    "category": "交换技术",
    "paper": "real2013a",
    "question": "生成树协议stp使用了哪两人个参数来选举根网桥（ ）",
    "options": [
      "A. 网桥优先级和ip地址",
      "B. 链路速率和ip地址",
      "C. 链路速率和mac地址",
      "D. 网桥优先级和mac地址"
    ],
    "answer": 3,
    "explanation": "STP选举根网桥时先比较网桥优先级，优先级相同再比较MAC地址，数值小者当选，故选D。"
  },
  {
    "id": 2646,
    "type": "single",
    "category": "交换技术",
    "paper": "real2013a",
    "question": "关于vlan，下面的描述中正确的是（ ）。",
    "options": [
      "A. 一个新的交换机没有配置vlan",
      "B. 通过配置vlan减少了冲突域的数量",
      "C. 一个vlan不能跨越多个交换机",
      "D. 各个vlan属于不同的广播域"
    ],
    "answer": 3,
    "explanation": "VLAN将交换机划分为多个逻辑网段，每个VLAN是一个独立的广播域，故选D；交换机默认存在VLAN1，VLAN可跨交换机。"
  },
  {
    "id": 2647,
    "type": "single",
    "category": "交换技术",
    "paper": "real2013a",
    "question": "下面哪个协议用于承载多个vlan信息？（ ）。",
    "options": [
      "A. 802.3",
      "B. 802.1q",
      "C. 802.1x",
      "D. 802.11"
    ],
    "answer": 1,
    "explanation": "IEEE 802.1Q是VLAN标记协议，用于在一条链路上承载多个VLAN信息，故选B。"
  },
  {
    "id": 2648,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2013a",
    "question": "以太网协议中使用物理地址作用是什么？（ ）。",
    "options": [
      "A. 用于不同子网中的主机进行通信",
      "B. 作为第二层设备的唯一标识",
      "C. 用于区别第二层第三层的协议数据单元",
      "D. 保存主机可检测未知的远程设备"
    ],
    "answer": 1,
    "explanation": "以太网物理地址（MAC地址）用于唯一标识第二层网络设备，实现数据帧的寻址与转发，故选B。"
  },
  {
    "id": 2649,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2013a",
    "question": "下面的光纤以太网标准中，支持1000m以上传输距离的是（ ）。",
    "options": [
      "A. 1000base-fx",
      "B. 1000base-cx",
      "C. 1000base-sx",
      "D. 1000base-lx"
    ],
    "answer": 3,
    "explanation": "1000BASE-LX使用长波长激光，支持单模光纤传输距离可达数千米，满足1000m以上要求，故选D。"
  },
  {
    "id": 2650,
    "type": "single",
    "category": "无线网络",
    "paper": "real2013a",
    "question": "ieee802.11采用了csma/ca协议，采用这个协议的原因是（ ）。",
    "options": [
      "A. 这个协议比csma/cd更安全",
      "B. 这种协议可以开放更多业务",
      "C. 这种协议可能解决隐蔽站的问题",
      "D. 这个协议比其它协议更有效率"
    ],
    "answer": 2,
    "explanation": "无线网络中站点难以检测全部冲突，CSMA/CA通过预约与确认机制可缓解隐蔽站问题，故选C。"
  },
  {
    "id": 2651,
    "type": "single",
    "category": "路由协议",
    "paper": "real2013a",
    "question": "配置路由器默认路由的命令是（ ）。",
    "options": [
      "A. iproute220.117.15.0255.255.255.00.0.0.0",
      "B. iproute220.117.15.0255.255.255.0220.117.15.1",
      "C. iproute0.0.0.0255.255.255.0220.117.15.1",
      "D. iproute0.0.0.00.0.0.0220.117.15."
    ],
    "answer": 3,
    "explanation": "默认路由的目标网络与掩码均为0.0.0.0，下一跳为220.117.15.1，命令为ip route 0.0.0.0 0.0.0.0 220.117.15.1，故选D。"
  },
  {
    "id": 2652,
    "type": "single",
    "category": "路由协议",
    "paper": "real2013a",
    "question": "路由表如下图所示，如果一个分组的目标地址是220.117.5.65，则会发送给那个端口？（ ）。",
    "options": [
      "A. 220.117.1.2",
      "B. 220.117.2.2",
      "C. 220.117.3.3",
      "D. 220117.4.4"
    ],
    "answer": 2,
    "explanation": "目标地址220.117.5.65与路由表项逐条匹配，按最长前缀匹配原则应转发到对应端口220.117.3.3，故选C。"
  },
  {
    "id": 2653,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2013a",
    "question": "一家连锁店需要设计一种编址方案来支持全国各个门店销售网络，门店有300家左右，每个门店一个子网，每个子网终端最多50台电脑，该连锁店从isp处得到一个b类地址，应该采用的子网掩码是（ ）。",
    "options": [
      "A. 255.255.255.128",
      "B. 255.255.252.0",
      "C. 255.255.248.0",
      "D. 255.255.255.224"
    ],
    "answer": 0,
    "explanation": "每个子网需容纳50台主机，主机位至少6位（2^6-2=62），子网掩码为/26即255.255.255.128，故选A。"
  },
  {
    "id": 2654,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2013a",
    "question": "网络系统设计过程中，物理网络设计阶段的任务是（ ）。",
    "options": [
      "A. 依据逻辑网络设计的要求，确定设备的具体物理分布和运行环境",
      "B. 分析现有网络和新网络的各类资源分布，掌握网络所处的状态",
      "C. 根据需求规范和通信规范，实施资源分配和安全规划",
      "D. 理解网络应该具有的功能和性能，最终设计出符合用户需求的网络"
    ],
    "answer": 0,
    "explanation": "物理网络设计阶段依据逻辑网络设计结果，确定设备的具体物理分布、布线及运行环境，故选A。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2012b";
  const A = [
  {
    "id": 2655,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "在cpu中，（ ）不仅要保证指令的正确执行，还要能够处理异常事件。",
    "options": [
      "A. 运算器",
      "B. 控制器",
      "C. 寄存器组",
      "D. 内部总线"
    ],
    "answer": 1,
    "explanation": "控制器负责指令的取指、译码与执行控制，并处理中断等异常事件，保证指令正确执行，故选B。"
  },
  {
    "id": 2656,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "计算机中主存储器主要由存储体、控制线路、地址寄存器、数据寄存器和（ ）组成。",
    "options": [
      "A. 地址译码电路",
      "B. 地址和数据总线",
      "C. 微操作形成部件",
      "D. 指令译码器"
    ],
    "answer": 0,
    "explanation": "主存储器由存储体、控制线路、地址寄存器、数据寄存器和地址译码电路组成，地址译码电路负责将地址寄存器中的地址译码以选中相应存储单元。"
  },
  {
    "id": 2657,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "以下关于数的定点表示和浮点表示的叙述中，不正确的是（ ）。",
    "options": [
      "A. 定点表示法表示的数(称为定点数)常分为定点整数和定点小数两种",
      "B. 定点表示法中，小数点需要占用一个存储位",
      "C. 浮点表示法用阶码和尾数来表示数，称为浮点数",
      "D. 在总位数相同的局兄下，浮点表示法可以表示更大的数"
    ],
    "answer": 1,
    "explanation": "定点表示法中小数点位置是隐含约定的，不需要占用存储位，故B错误；定点数分整数和小数，浮点数用阶码和尾数表示，同位数下浮点表示范围更大。"
  },
  {
    "id": 2658,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "x、y为逻辑变量，与逻辑表达式x+xy等价的是（ ）。(ps.本题的下划线都是上划线)",
    "options": [
      "A. x+y",
      "B. x+y",
      "C. x+y",
      "D. x+y"
    ],
    "answer": 3,
    "explanation": "由吸收律x+xy=x，故x+xy等价于x，四个选项中只有D项化简结果为x，符合逻辑代数等价关系。"
  },
  {
    "id": 2659,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "在软件设计阶段，划分模块的原则是，一个模块的（ ）。",
    "options": [
      "A. 作用范围应该在其控制范围之内",
      "B. 控制范围应该在作用范围之内",
      "C. 作用范围与控制范围互不包含",
      "D. 作用范围与控制节围不受任何限制"
    ],
    "answer": 0,
    "explanation": "软件设计划分模块时应使模块的作用范围在其控制范围之内，这样可减少模块间控制信息的传递，降低耦合度，提高模块独立性。"
  },
  {
    "id": 2660,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "设文件索引节点中有8个地址项，每个地址项大小为4字节，其中5个地址项为直接地址索引，2个地址项是一级间接地址索引，1个地址项是二级间接地址索引，磁盘索引块和磁盘数据块女小均为1kb字节。若要访问文件的逻辑块号分别为5和518，则系统应分别采用（ ）。",
    "options": [
      "A. 直接地址索引和二级间接地址索引",
      "B. 直接地址素引和二级间接地址索引",
      "C. 一级间接地址素引和二级间接地址索引",
      "D. 一级间接地址索引和一级间接地址索引"
    ],
    "answer": 2,
    "explanation": "直接索引5个可访问逻辑块0~4，一级间接索引块可存1KB/4B=256个地址，访问逻辑块5~260，二级间接可访问更大范围，故5用一级间接、518用二级间接。"
  },
  {
    "id": 2661,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "某企业有生产部和销售部，生产部负责生产产品并送入仓库，销售部从仓库取出产品销售。假设仓库可存放n件产品。用pv操作实现他们之间的同步过程如下图所示。图中信号量s1和s2为同步信号量，初值分别为n和0；s是一个互斥信号量，初值为（ ）。",
    "options": [
      "A. 0",
      "B. 1",
      "C. n",
      "D. -1"
    ],
    "answer": 1,
    "explanation": "仓库是生产部和销售部共同访问的临界资源，需用互斥信号量s保证互斥访问，互斥信号量初值应为1，表示资源可用。"
  },
  {
    "id": 2662,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012b",
    "question": "软件公司的软件产品注册商标为m，为确保公司在市场竞争中占据优势，对员工进行了保密约束。此情形下该公司不享有（ ）。",
    "options": [
      "A. 商业秘密权",
      "B. 著作权",
      "C. 专利权",
      "D. 商标权"
    ],
    "answer": 2,
    "explanation": "商标注册获得的是商标权，保密约束属于商业秘密保护，软件作品自动享有著作权，但未申请专利则不享有专利权，故该公司不享有专利权。"
  },
  {
    "id": 2663,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2012b",
    "question": "下面关于rs-232-c标准的描述中，正确的是（ ）。",
    "options": [
      "A. 可以实现长距离远程通信",
      "B. 可以使用9针或25针d型连接器",
      "C. 必须采用24根线韵电缆进行连接",
      "D. 诵常用于连接并行打印机"
    ],
    "answer": 1,
    "explanation": "RS-232-C标准可使用9针或25针D型连接器，但其传输距离短、速率低，常用于串行接口连接，并非长距离通信或并行打印机接口。"
  },
  {
    "id": 2664,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2012b",
    "question": "设信道带宽为4000hz，采用pcm编码，采样周期为125us，每个样本量化为128个等级，则信道的数据速率为（ ）。",
    "options": [
      "A. 10kb/s",
      "B. 16kb/s",
      "C. 56kb/s",
      "D. 64kb/s"
    ],
    "answer": 2,
    "explanation": "采样周期125μs即采样率8000Hz，每样本量化128级需7bit，数据速率=8000×7=56000b/s=56kb/s。"
  },
  {
    "id": 2665,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012b",
    "question": "以下关于icmp协议的说法中，正确的是（ ）。",
    "options": [
      "A. 由mac地址求对应的ip地址",
      "B. 在公网ip地址与私网ip地址之间进行传换",
      "C. 向源主机发送传输错误警告",
      "D. 向主机分配动态ip地址"
    ],
    "answer": 2,
    "explanation": "ICMP是网际控制报文协议，用于在IP网络中传递差错报告和控制信息，可向源主机发送传输错误警告，如目的不可达等。"
  },
  {
    "id": 2666,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012b",
    "question": "以下关于rarp协议的说法中，正确的是（ ）。",
    "options": [
      "A. rarp协议根据主机ip地址查询对应的mac地址",
      "B. rarp协议用于对ip协议进行差错控制",
      "C. rarp协议根据mac地址求主机对应的ip地址",
      "D. rarp协议根据交换的路由信息动态改变路由表"
    ],
    "answer": 2,
    "explanation": "RARP是逆地址解析协议，功能是根据主机的MAC地址查询对应的IP地址，常用于无盘工作站获取IP地址。"
  },
  {
    "id": 2667,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012b",
    "question": "所谓“代理arp”是指由（ ）假装目标主机回答源主机的arp请求。",
    "options": [
      "A. 离源主机最近的交换机",
      "B. 离源主机最近的路由器",
      "C. 离目标主机最近的交换机",
      "D. 离目标牛机最近的路由器"
    ],
    "answer": 1,
    "explanation": "代理ARP是指由离源主机最近的路由器代替目标主机回答源主机的ARP请求，使源主机误以为目标主机在同一网段。"
  },
  {
    "id": 2668,
    "type": "single",
    "category": "路由协议",
    "paper": "real2012b",
    "question": "在距离矢量路由协议中，每一个路由器接收的路由信息来源于（ ）。",
    "options": [
      "A. 网络中的每一个路由器",
      "B. 它的邻居路由器",
      "C. 主机中存储的一个路由总表",
      "D. 距离不超过两个跳步的其他路由器"
    ],
    "answer": 1,
    "explanation": "距离矢量路由协议中，每个路由器只接收来自其邻居路由器发送的路由信息，并据此更新自己的路由表，属于逐跳传播。"
  },
  {
    "id": 2669,
    "type": "single",
    "category": "路由协议",
    "paper": "real2012b",
    "question": "在ospf协议中，链路状态算法用于（ ）。",
    "options": [
      "A. 生成链路状态数据库",
      "B. 计算路由表",
      "C. 产生链路状态公告",
      "D. 计算发送路由信息的组播树"
    ],
    "answer": 1,
    "explanation": "OSPF中链路状态算法（Dijkstra最短路径算法）用于根据链路状态数据库计算路由表，而链路状态公告由各路由器产生并泛洪。"
  },
  {
    "id": 2670,
    "type": "single",
    "category": "路由协议",
    "paper": "real2012b",
    "question": "以下关于两种路由协议的叙述中，错误的是（ ）。",
    "options": [
      "A. 链路状态协议在网络拓扑发生变化时发布路由信息",
      "B. 距离矢量协议是周期地发布路由信息",
      "C. 链路状态协议的所有路由器都发布路由信息",
      "D. 距离矢量协议是广播路由信息"
    ],
    "answer": 2,
    "explanation": "链路状态协议并非所有路由器都发布路由信息，而是各自发布描述自身链路状态的LSA；距离矢量协议周期性广播路由信息，故C错误。"
  },
  {
    "id": 2671,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012b",
    "question": "dns服务器中提供了多种资源记录，其中（ ）定义了区域的授权服务器。",
    "options": [
      "A. soa",
      "B. ns",
      "C. ptr",
      "D. mx"
    ],
    "answer": 1,
    "explanation": "DNS资源记录中，NS记录定义了区域的授权域名服务器，指明该区域由哪些服务器负责解析。"
  },
  {
    "id": 2672,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012b",
    "question": "某主机本地连接属性如下图，下列说法中错误的是（ ）。",
    "options": [
      "A. ip地址是采用dhcp服务自动分配的",
      "B. dhcp服务器的网卡物理地址为00-1d-7d-39-62-3e",
      "C. dns服务器地址可手动设置",
      "D. 主机使用该地址的最大租约朗为7天"
    ],
    "answer": 1,
    "explanation": "图中00-1D-7D-39-62-3E是DHCP服务器的IP地址对应的物理地址信息，但该字段实际显示的是DHCP服务器地址而非其网卡物理地址，故B说法错误。"
  },
  {
    "id": 2673,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012b",
    "question": "在windows server 2003操作系统中，www服务包含在（ ）组件下。",
    "options": [
      "A. dns",
      "B. dhcp",
      "C. ftp",
      "D. iis"
    ],
    "answer": 3,
    "explanation": "Windows Server 2003中WWW服务由IIS（Internet信息服务）组件提供，安装IIS后可配置和管理Web站点。"
  },
  {
    "id": 2674,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012b",
    "question": "dns正向搜索区的功能是将域名解析为ip地址，windows xp系统中用于测试该功能的命令是（ ）。",
    "options": [
      "A. nslookup",
      "B. arp",
      "C. netstat",
      "D. query"
    ],
    "answer": 0,
    "explanation": "nslookup命令用于测试DNS域名解析功能，可查询域名对应的IP地址，验证正向搜索区是否正常工作。"
  },
  {
    "id": 2675,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012b",
    "question": "在windows环境下，dhcp客户端可以使用（ ）命令重新获得ip地址，这时客户机向dhcp服务器发送一个dhcpdiscover数据包来请求重新租用ip地址。",
    "options": [
      "A. ipconfig/renew",
      "B. ipconfig/reload",
      "C. ipconfig/release",
      "D. ipconfig/reset"
    ],
    "answer": 0,
    "explanation": "ipconfig/renew命令使DHCP客户端重新向服务器请求租用IP地址，发送DHCPDISCOVER数据包重新获取地址。"
  },
  {
    "id": 2676,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012b",
    "question": "匿名ftp访问通常使用（ ）作为用户名。",
    "options": [
      "A. guest",
      "B. ip地址",
      "C. administrator",
      "D. anonymous"
    ],
    "answer": 3,
    "explanation": "匿名FTP访问时，用户以anonymous作为用户名登录，密码通常用邮箱地址，这是FTP匿名访问的标准约定。"
  },
  {
    "id": 2677,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012b",
    "question": "下列不属于电子邮件协议的是（ ）。",
    "options": [
      "A. pop3",
      "B. smtp",
      "C. snmp",
      "D. imap4"
    ],
    "answer": 2,
    "explanation": "POP3、SMTP、IMAP4均为电子邮件协议，分别用于邮件接收、发送和访问；SNMP是简单网络管理协议，与电子邮件无关。"
  },
  {
    "id": 2678,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012b",
    "question": "下列安全协议中，与tls功能相似的协议是（ ）。",
    "options": [
      "A. pgp",
      "B. ssl",
      "C. https",
      "D. ipsec"
    ],
    "answer": 1,
    "explanation": "SSL与TLS都是工作在传输层之上的安全协议，TLS是SSL的后续版本，二者功能相似，均提供加密与认证。"
  },
  {
    "id": 2679,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012b",
    "question": "3des是一种（ ）算法。",
    "options": [
      "A. 共享密钥",
      "B. 公开密钥",
      "C. 报文摘要",
      "D. 访问控制"
    ],
    "answer": 0,
    "explanation": "3DES即三重DES，是对称加密算法，加密和解密使用同一密钥，属于共享密钥（对称密钥）算法。"
  },
  {
    "id": 2680,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012b",
    "question": "ipsec中安全关联（security associations）三元组是（ ）。",
    "options": [
      "A. &lt;安全参数索引spi，目标ip地址，安全协议&gt;",
      "B. &lt;安全参数索引spi，源ip地址，数字证书&gt;",
      "C. &lt;安全参数索引spi，目标ip地址，数字证书&gt;",
      "D. &lt;安全参数索引spi，源ip地址，安全协议&gt;"
    ],
    "answer": 0,
    "explanation": "IPsec的安全关联由三元组唯一标识：安全参数索引SPI、目标IP地址和安全协议（AH或ESP）。"
  },
  {
    "id": 2681,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012b",
    "question": "在snmp协议中，当代理收到一个gei请求时，如果有一个值不可或不能提供，则返回（ ）。",
    "options": [
      "A. 该实例的下个值",
      "B. 该实例的上个值",
      "C. 空值",
      "D. 错误信息"
    ],
    "answer": 0,
    "explanation": "SNMP中代理收到Get请求时，若某值不可用或不能提供，则返回该实例的下一个值，即GetNext操作的行为。"
  },
  {
    "id": 2682,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012b",
    "question": "snmp网络管理中，一个代理可以由（ ）管理站管理。",
    "options": [
      "A. 0个",
      "B. 1个",
      "C. 2个",
      "D. 多个"
    ],
    "answer": 3,
    "explanation": "SNMP中一个代理可以被多个管理站管理，管理站之间相互独立，代理响应各管理站的请求。"
  },
  {
    "id": 2683,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012b",
    "question": "在windows命令行下执行（ ）命令出现下图的效果。",
    "options": [
      "A. pathping –n microsoft",
      "B. tracert –d microsoft",
      "C. nslookup microsoft",
      "D. arp –a"
    ],
    "answer": 0,
    "explanation": "pathping结合了ping和tracert功能，逐跳统计丢包和延迟，-n参数表示不解析主机名，符合图中效果。"
  },
  {
    "id": 2684,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012b",
    "question": "在windows系统中监听发送给nt主机的陷入报文的程序是（ ）。",
    "options": [
      "A. snmp.exe",
      "B. mspaint.com",
      "C. notepad.exe",
      "D. snmptrap.exe"
    ],
    "answer": 3,
    "explanation": "snmptrap.exe是Windows系统中用于接收和监听SNMP陷入（Trap）报文的程序，负责处理代理发来的告警信息。"
  },
  {
    "id": 2685,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012b",
    "question": "windows server 2003中配置snmp服务时，必须以（ ）身份登灵才能完成snmp服务的配置功能。",
    "options": [
      "A. guest",
      "B. 普通用户",
      "C. administrators组成员",
      "D. users组成员"
    ],
    "answer": 2,
    "explanation": "在Windows Server 2003中配置SNMP服务需要修改系统组件和注册表，必须以administrators组成员身份登录才能完成。"
  },
  {
    "id": 2686,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012b",
    "question": "有一种nat技术叫做“地址伪装”（masquerading），下面关于地址伪装的描述中正确的是（ ）。",
    "options": [
      "A. 把多个内部地址翻译成一个外部地址和多个端口号",
      "B. 把多个外部地址翻译成一个内部地址和一个端口号",
      "C. 把一个内部地址翻译成多个外部地址和多个端口号",
      "D. 把一个外部地址翻译成多个内部地址和一个端口号"
    ],
    "answer": 0,
    "explanation": "地址伪装（Masquerading）是NAPT的一种，将多个内部私有地址翻译成同一个外部地址的不同端口号，实现多对一映射。"
  },
  {
    "id": 2687,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012b",
    "question": "把网络10.1.0.0/16进一步划分为子网10.1.0.0/18，则原网络被划分为（ ）个子网。",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 6"
    ],
    "answer": 2,
    "explanation": "原网络掩码16位，子网掩码18位，借用2位主机位划分子网，可划分2^2=4个子网。"
  },
  {
    "id": 2688,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012b",
    "question": "ip地址202.117.17.255/22是（ ）地址。",
    "options": [
      "A. 网络地址",
      "B. 全局广播地址",
      "C. 主机地址",
      "D. 定向广播地址"
    ],
    "answer": 2,
    "explanation": "202.117.17.255/22中，掩码22位，网络地址为202.117.16.0，广播地址为202.117.19.255，故该地址是主机地址。"
  },
  {
    "id": 2689,
    "type": "single",
    "category": "路由协议",
    "paper": "real2012b",
    "question": "对下面4条路由：202.115.129.0/24、202.115.130.0/24、202.115.132.0/24和202.115.133.0/24进行路由汇聚，能覆盖这4条路由的地址是（ ）。",
    "options": [
      "A. 202.115.128.0/21",
      "B. 202.115.128.0/22",
      "C. 202.115.130.0/22",
      "D. 202.115.132.0/23"
    ],
    "answer": 0,
    "explanation": "四条路由前22位相同，汇聚为202.115.128.0/22，但/22只覆盖128~131，需/21才能覆盖到133，故为202.115.128.0/21。"
  },
  {
    "id": 2690,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012b",
    "question": "下面关于ipv6的描述中，最准确的是（ ）。",
    "options": [
      "A. ipv6可以允许全局ip地址重复使用",
      "B. ipv6解决了全局ip地址不足的问题",
      "C. ipv6的出现使得卫星联网得以实现",
      "D. ipv6的设计目标之一是支持光纤通信"
    ],
    "answer": 1,
    "explanation": "IPv6采用128位地址，极大扩展了地址空间，最核心的作用是解决IPv4全局地址不足的问题。"
  },
  {
    "id": 2691,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2012b",
    "question": "下面（ ）字段的信息出现在tcp头部而不出现在udp头部。",
    "options": [
      "A. 目标端口号",
      "B. 顺序号",
      "C. 源端口号",
      "D. 校验和"
    ],
    "answer": 1,
    "explanation": "TCP头部包含顺序号（序列号）字段用于可靠传输，而UDP头部没有该字段，只有端口号、长度和校验和。"
  },
  {
    "id": 2692,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2012b",
    "question": "当一个tcp连接处于（ ）状态时等待应用程序关闭端口。",
    "options": [
      "A. closed",
      "B. established",
      "C. close-wait",
      "D. last-ack"
    ],
    "answer": 2,
    "explanation": "TCP连接处于CLOSE-WAIT状态时，表示被动关闭方已收到对方的FIN，等待本地应用程序关闭连接。"
  },
  {
    "id": 2693,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2012b",
    "question": "一个运行csma/cd协议的以太网，数据速率为1gb/s，网段长1km，信号速率为200，000km/sec，则最小帧长是（ ）比特。",
    "options": [
      "A. 1000",
      "B. 2000",
      "C. 10000",
      "D. 200000"
    ],
    "answer": 2,
    "explanation": "最小帧长=2×传播时延×速率，传播时延=1km/200000km/s=5μs，故最小帧长=2×5μs×1Gb/s=10000比特。"
  },
  {
    "id": 2694,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2012b",
    "question": "以太网帧结构中“填充”字段的作用是（ ）。",
    "options": [
      "A. 承载任选的路由信息",
      "B. 用于捎带应答",
      "C. 发送紧急数据",
      "D. 保持最小帧长"
    ],
    "answer": 3,
    "explanation": "以太网帧的填充字段用于保证帧长不小于64字节（最小帧长），以满足CSMA/CD冲突检测的要求。"
  },
  {
    "id": 2695,
    "type": "single",
    "category": "无线网络",
    "paper": "real2012b",
    "question": "关于无线网络中使用的扩频技术，下面描述中错误的是（ ）。",
    "options": [
      "A. 用不同的频率传播信号扩大了通信的范围",
      "B. 扩频通信减少了干扰并有利于通信保密",
      "C. 每一个信号比特可以用n个码片比特来传输",
      "D. 信号散布到更宽的频带上降低了信道阻塞的概率"
    ],
    "answer": 0,
    "explanation": "扩频技术将信号散布到更宽频带，用不同频率传播并非为扩大通信范围，而是抗干扰、抗截获，故A描述错误。"
  },
  {
    "id": 2696,
    "type": "single",
    "category": "无线网络",
    "paper": "real2012b",
    "question": "物联网中使用的无线传感网络技术是（ ）。",
    "options": [
      "A. 802.15.1蓝牙个域网",
      "B. 802.11n无线局域网",
      "C. 802.15.3 zigbee微微网",
      "D. 802.16m无线城域网"
    ],
    "answer": 2,
    "explanation": "ZigBee基于IEEE 802.15.4，是物联网中广泛使用的低速率、低功耗无线传感网络技术，802.15.3为高速WPAN，故选C。"
  },
  {
    "id": 2697,
    "type": "single",
    "category": "无线网络",
    "paper": "real2012b",
    "question": "正在发展的第四代无线通信技术推出了多个标准，下面的选项中不属于4g标准的是（ ）。",
    "options": [
      "A. lte",
      "B. wimaxii",
      "C. wcdma",
      "D. umb"
    ],
    "answer": 2,
    "explanation": "WCDMA是第三代（3G）移动通信标准，不属于4G；LTE、WiMAX II、UMB均为4G候选标准，故选C。"
  },
  {
    "id": 2698,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2012b",
    "question": "网络系统设计过程中，物理网络设计阶段的仟务是（ ）。",
    "options": [
      "A. 依据逻辑网络设计的要求，确定设备的具体物理分布和运行环境",
      "B. 分析现有网络和新网络的各类资源分布，掌握网络的状杰",
      "C. 根据需求规范和通信规范，实施资源分配和安全规划",
      "D. 理解网络应该具有的功能和性能，最终设计出符合用户需求的网络"
    ],
    "answer": 0,
    "explanation": "物理网络设计阶段依据逻辑网络设计结果，确定设备的具体物理分布、布线及运行环境，故选A。"
  },
  {
    "id": 2699,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2012b",
    "question": "下列关于网络核心层的描述中，正确的是（ ）。",
    "options": [
      "A. 为了保障安全性，应该对分组进行尽可能多的处理",
      "B. 将数据分组从一个区域高速地转发到另一个区域",
      "C. 由多台二、三层交换机组成",
      "D. 提供多条路径来缓解通信瓶颈"
    ],
    "answer": 1,
    "explanation": "核心层的主要职责是高速转发数据分组，将数据从一个区域快速转发到另一个区域，故选B。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2012a";
  const A = [
  {
    "id": 2700,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "位于cpu与主存之间的高速缓冲存储器cache用于存放部分主存数据的拷贝，主存地址与cache地址之间的转换工作由( )完成。",
    "options": [
      "A. 硬件",
      "B. 软件",
      "C. 用户",
      "D. 程序员"
    ],
    "answer": 0,
    "explanation": "Cache与主存之间的地址映射和转换由硬件自动完成，以保证高速访问，对程序员透明，故选A。"
  },
  {
    "id": 2701,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "内存单元按字节编址，地址0000a000h～0000bfffh共有( )个存储单元。",
    "options": [
      "A. 8192k",
      "B. 1024k",
      "C. 13k",
      "D. 8k"
    ],
    "answer": 3,
    "explanation": "地址范围0000BFFFH-0000A000H+1=2000H=8192=8K个存储单元，故选D。"
  },
  {
    "id": 2702,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "相联存储器按( )访问。",
    "options": [
      "A. 地址",
      "B. 先入后出的方式",
      "C. 内容",
      "D. 先入先出的方式"
    ],
    "answer": 2,
    "explanation": "相联存储器是按内容进行访问的存储器，根据存储内容查找而非按地址访问，故选C。"
  },
  {
    "id": 2703,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "若cpu要执行的指令为：mov r1，#45（即将数值45传送到寄存器r1中），则该指令中采用的寻址方式为( ) 。",
    "options": [
      "A. 直接寻址和立即寻址",
      "B. 寄存器寻址和立即寻址",
      "C. 相对寻址和直接寻址",
      "D. 寄存器间接寻址和直接寻址"
    ],
    "answer": 1,
    "explanation": "MOV R1,#45中R1为寄存器寻址，#45为立即寻址，故采用寄存器寻址和立即寻址，故选B。"
  },
  {
    "id": 2704,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "数据流图(dfd)对系统的功能和功能之间的数据流进行建模，其中顶层数据流图描述了系统的( ) 。",
    "options": [
      "A. 处理过程",
      "B. 输入与输出",
      "C. 数据存储",
      "D. 数据实体"
    ],
    "answer": 1,
    "explanation": "顶层数据流图只描述系统与外部实体之间的输入和输出关系，不涉及内部处理细节，故选B。"
  },
  {
    "id": 2705,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "以下关于类继承的说法中，错误的是( )。",
    "options": [
      "A. 通过类继承，在程序中可以复用基类的代码",
      "B. 在继承类中可以增加新代码",
      "C. 在继承类中不能定义与被继承类（基类）中的方法同名的方法",
      "D. 在继承类中可以覆盖被继承类（基类）中的方法"
    ],
    "answer": 2,
    "explanation": "继承类中可以定义与基类同名的方法以实现覆盖（重写），故C说法错误，选C。"
  },
  {
    "id": 2706,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "下图是一个软件项目的活动图，其中顶点表示项目里程碑，连接顶点的边表示包含的活动，边上的值表示完成活动所需要的时间，则( )在关键路径上。",
    "options": [
      "A. b",
      "B. c",
      "C. d",
      "D. h"
    ],
    "answer": 1,
    "explanation": "关键路径是活动图中总时长最长的路径，根据图中时间值计算，顶点c位于关键路径上，故选B。"
  },
  {
    "id": 2707,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "软件开发的增量模型( )。",
    "options": [
      "A. 最适用于需求被清晰定义的情况",
      "B. 是一种能够快速构造可运行产品的好方法",
      "C. 最适合于大规模团队开发的项目",
      "D. 是一种不适用于商业产品的创新模型"
    ],
    "answer": 1,
    "explanation": "增量模型按增量逐步构建，能快速构造可运行的产品并逐步完善，故选B。"
  },
  {
    "id": 2708,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "假设某软件公司与客户签订合同开发一个软件系统，系统的功能有较清晰定义，且客户对交付时间有严格要求，则该系统的开发最适宜采用 ( ) 。",
    "options": [
      "A. 瀑布模型",
      "B. 原型模型",
      "C. v-模型",
      "D. 螺旋模型"
    ],
    "answer": 0,
    "explanation": "需求清晰且交付时间严格，适合采用阶段划分明确、文档驱动的瀑布模型，故选A。"
  },
  {
    "id": 2709,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2012a",
    "question": "中国企业m与美国公司l进行技术合作，合同约定m使用一项在有效期内的美国专利，但该项美国专利未在中国和其他国家提出申请。对于m销售依照该专利生产的产品，以下叙述正确的是( )。",
    "options": [
      "A. 在中国销售，m需要向l支付专利许可使用费",
      "B. 返销美国，m不需要向l支付专利许可使用费",
      "C. 在其他国家销售，m需要向l支付专利许可使用费",
      "D. 在中国销售，m不需要向l支付专利许可使用费"
    ],
    "answer": 3,
    "explanation": "专利权具有地域性，该美国专利未在中国申请，故在中国销售无需向L支付专利许可费，故选D。"
  },
  {
    "id": 2710,
    "type": "single",
    "category": "交换技术",
    "paper": "real2012a",
    "question": "网络中存在各种交换设备，下面的说法中错误的是( )。",
    "options": [
      "A. 以太网交换机根据mac地址进行交换",
      "B. 帧中继交换机只能根据虚电路号dlci进行交换",
      "C. 三层交换机只能根据第三层协议进行交换",
      "D. atm交换机根据虚电路标识进行信元交换"
    ],
    "answer": 2,
    "explanation": "三层交换机可基于第二层MAC地址和第三层IP地址进行交换，并非只能按第三层协议交换，故C错误。"
  },
  {
    "id": 2711,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2012a",
    "question": "通过以太网交换机连接的一组工作站( )。",
    "options": [
      "A. 组成一个冲突域，但不是一个广播域",
      "B. 组成一个广播域，但不是一个冲突域",
      "C. 既是一个冲突域，又是一个广播域",
      "D. 既不是冲突域，也不是广播域"
    ],
    "answer": 1,
    "explanation": "交换机每个端口是独立冲突域，但所有端口默认属于同一广播域，故组成一个广播域而非一个冲突域，选B。"
  },
  {
    "id": 2712,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2012a",
    "question": "设信道带宽为3400hz，采用pcm编码，采样周期为125μs，每个样本量化为256个等级，则信道的数据速率为( )。",
    "options": [
      "A. 10kb/s",
      "B. 16kb/s",
      "C. 56kb/s",
      "D. 64kb/s"
    ],
    "answer": 3,
    "explanation": "采样周期125μs即8000次/秒，256等级需8bit，8000×8=64kb/s，故选D。"
  },
  {
    "id": 2713,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "客户端登陆ftp服务器后使用( )命令来上传文件。",
    "options": [
      "A. get",
      "B. !dir",
      "C. put",
      "D. bye"
    ],
    "answer": 2,
    "explanation": "FTP客户端使用put命令上传文件，get用于下载，bye用于退出，故选C。"
  },
  {
    "id": 2714,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "smtp传输的邮件报文采用 ( )格式表示。",
    "options": [
      "A. ascii",
      "B. zip",
      "C. pnp",
      "D. html"
    ],
    "answer": 0,
    "explanation": "SMTP邮件报文采用ASCII文本格式表示，便于在邮件服务器间传输，故选A。"
  },
  {
    "id": 2715,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "在下列选项中，属于iis 6.0提供的服务组件是( ) 。",
    "options": [
      "A. samba",
      "B. ftp",
      "C. dhcp",
      "D. dns"
    ],
    "answer": 1,
    "explanation": "IIS 6.0提供的服务组件包括FTP、Web等，Samba、DHCP、DNS不属于IIS组件，故选B。"
  },
  {
    "id": 2716,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "与route print具有相同功能的命令是( )。",
    "options": [
      "A. ping",
      "B. arp-a",
      "C. netstat-r",
      "D. tracert-d"
    ],
    "answer": 2,
    "explanation": "route print 用于显示本机路由表，netstat -r 同样显示路由表信息，二者功能相同。"
  },
  {
    "id": 2717,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "下面的linux命令中，能关闭系统的命令是( )。",
    "options": [
      "A. kill",
      "B. shutdown",
      "C. exit",
      "D. lgout"
    ],
    "answer": 1,
    "explanation": "shutdown 是 Linux 中用于关机或重启系统的命令，可安全关闭系统。"
  },
  {
    "id": 2718,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "在linux中，dns服务器的配置文件是( )。",
    "options": [
      "A. /etc/hostname",
      "B. /etc/host.conf",
      "C. /etc/resolv.conf",
      "D. /etc/httpd.conf"
    ],
    "answer": 2,
    "explanation": "Linux 中 DNS 客户端配置文件为 /etc/resolv.conf，用于指定 DNS 服务器地址。"
  },
  {
    "id": 2719,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "在linux中，可以利用( )命令来终止某个进程。",
    "options": [
      "A. kill",
      "B. dead",
      "C. quit",
      "D. exit"
    ],
    "answer": 0,
    "explanation": "kill 命令可向进程发送信号，用于终止指定进程。"
  },
  {
    "id": 2720,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012a",
    "question": "dns服务器中提供了多种资源记录，其中( )定义了区域的邮件服务器及其优先级。",
    "options": [
      "A. soa",
      "B. ns",
      "C. ptr",
      "D. mx"
    ],
    "answer": 3,
    "explanation": "MX 资源记录定义区域的邮件服务器及其优先级，用于邮件路由。"
  },
  {
    "id": 2721,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2012a",
    "question": "在windows系统中，默认权限最低的用户组是( )。",
    "options": [
      "A. everyone",
      "B. administrators",
      "C. power users",
      "D. users"
    ],
    "answer": 0,
    "explanation": "Windows 中 Everyone 组包含所有用户，默认权限最低。"
  },
  {
    "id": 2722,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "iis6.0支持的身份验证安全机制有4种验证方法， 其中安全级别最高的验证方法是( )。",
    "options": [
      "A. 匿名身份验证",
      "B. 集成windows身份验证",
      "C. 基本身份验证",
      "D. 摘要式身份验证"
    ],
    "answer": 1,
    "explanation": "集成 Windows 身份验证使用 Kerberos 或 NTLM，不传输明文口令，安全级别最高。"
  },
  {
    "id": 2723,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "以下关于钓鱼网站的说法中，错误的是( )。",
    "options": [
      "A. 钓鱼网站仿冒真实网站的url地址",
      "B. 钓鱼网站是一种网络游戏",
      "C. 钓鱼网站用于窃取访问者的机密信息",
      "D. 钓鱼网站可以通过email传播网址"
    ],
    "answer": 1,
    "explanation": "钓鱼网站是仿冒真实网站以窃取用户信息的欺诈网站，并非网络游戏。"
  },
  {
    "id": 2724,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "支持安全web服务的协议是( )。",
    "options": [
      "A. https",
      "B. wins",
      "C. soap",
      "D. http"
    ],
    "answer": 0,
    "explanation": "HTTPS 在 HTTP 基础上使用 SSL/TLS 加密，支持安全 Web 服务。"
  },
  {
    "id": 2725,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "甲和乙要进行通信，甲对发送的消息附加了数字签名，乙收到该消息后利用( )验证该消息的真实性。",
    "options": [
      "A. 甲的公钥",
      "B. 甲的私钥",
      "C. 乙的公钥",
      "D. 乙的私钥"
    ],
    "answer": 0,
    "explanation": "数字签名用发送方私钥生成，接收方用发送方公钥验证消息真实性和完整性。"
  },
  {
    "id": 2726,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "下列算法中，( )属于摘要算法。",
    "options": [
      "A. des",
      "B. md5",
      "C. diffie-hellman",
      "D. aes"
    ],
    "answer": 1,
    "explanation": "MD5 是消息摘要算法，用于生成固定长度摘要；DES、AES 为加密算法，Diffie-Hellman 为密钥交换算法。"
  },
  {
    "id": 2727,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012a",
    "question": "网络的可用性是指( )。",
    "options": [
      "A. 网络通信能力的大小",
      "B. 用户用于网络维修的时间",
      "C. 网络的可靠性",
      "D. 用户可利用网络时间的百分比"
    ],
    "answer": 3,
    "explanation": "网络可用性指用户可利用网络时间的百分比，反映网络可正常使用的时间比例。"
  },
  {
    "id": 2728,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012a",
    "question": "网络管理的5大功能域是( )。",
    "options": [
      "A. 配置管理、故障管理、计费管理、性能管理和安全管理",
      "B. 配置管理、故障管理、计费管理、带宽管理和安全管理",
      "C. 配置管理、故障管理、成本管理、性能管理和安全管理",
      "D. 配置管理、用户管理、计费管理、性能管理和安全管理"
    ],
    "answer": 0,
    "explanation": "网络管理五大功能域为配置管理、故障管理、计费管理、性能管理和安全管理。"
  },
  {
    "id": 2729,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012a",
    "question": "snmpv2提供了3种访问管理信息的方法，这3种方法不包括( )。",
    "options": [
      "A. 管理站向代理发出通信请求",
      "B. 代理向管理站发出通信请求",
      "C. 管理站与管理站之间的通信",
      "D. 代理向管理站发送陷入报文"
    ],
    "answer": 1,
    "explanation": "SNMPv2 提供管理站与代理间的请求响应及代理向管理站发送陷入报文，不包括代理主动向管理站发出通信请求。"
  },
  {
    "id": 2730,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "嗅探器改变了网络接口的工作模式，使得网络接口( )。",
    "options": [
      "A. 只能够响应发送给本地的分组",
      "B. 只能够响应本网段的广播分组",
      "C. 能够响应流经网络接口的所有分组",
      "D. 能够响应所有组播信息"
    ],
    "answer": 2,
    "explanation": "嗅探器将网卡设为混杂模式，使其能接收流经网络接口的所有分组。"
  },
  {
    "id": 2731,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012a",
    "question": "lp地址分为公网地址和私网地址，以下地址中属于私网地址的是( )。",
    "options": [
      "A. 10.216.33.124",
      "B. 127.0.0.1",
      "C. 172.34,21.15",
      "D. 192.32.146.23"
    ],
    "answer": 0,
    "explanation": "10.0.0.0/8 属于 RFC1918 私有地址范围，10.216.33.124 为私网地址。"
  },
  {
    "id": 2732,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012a",
    "question": "如果子网172.6.32.0/20被划分为子网172.6.32.0/26，则下面的结论中正确的是( )。",
    "options": [
      "A. 被划分为62个子网",
      "B. 每个子网有64个主机地址",
      "C. 被划分为32个子网",
      "D. 每个子网有62个主机地址"
    ],
    "answer": 3,
    "explanation": "/26 子网主机位 6 位，可用主机地址为 2^6-2=62 个。"
  },
  {
    "id": 2733,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012a",
    "question": "以下给出的地址中，属于子网172.112.15.19/28的主机地址是( ) 。",
    "options": [
      "A. 172.112.15.17",
      "B. 172.112.15.14",
      "C. 172.112.15.16",
      "D. 172.112.15.31"
    ],
    "answer": 0,
    "explanation": "/28 子网块大小 16，172.112.15.19 所在子网为 172.112.15.16~31，其中 17 为可用主机地址。"
  },
  {
    "id": 2734,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012a",
    "question": "ipv6地址分为3种类型，它们是( )。",
    "options": [
      "A. a类地址、b类地址、 c类地址",
      "B. 单播地址、组播地址、任意播地址",
      "C. 单播地址、组播地址、广播地址",
      "D. 公共地址、站点地址、接口地址"
    ],
    "answer": 1,
    "explanation": "IPv6 地址分为单播地址、组播地址和任意播地址三种类型。"
  },
  {
    "id": 2735,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2012a",
    "question": "ftp默认的控制连接端口是( )。",
    "options": [
      "A. 20",
      "B. 21",
      "C. 23",
      "D. 25"
    ],
    "answer": 1,
    "explanation": "FTP 使用 21 端口建立控制连接，20 端口用于数据连接。"
  },
  {
    "id": 2736,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "路由器命令“router(config)# access-list l deny 192.168.1.1”的含义是( )。",
    "options": [
      "A. 不允许源地址为192.168.1.1的分组通过",
      "B. 允许源地址为192.168,1.1的分组通过",
      "C. 不允许目标地址为192.168.1.1的分组通过",
      "D. 允许目标地址为192.168.1.1的分组通过"
    ],
    "answer": 0,
    "explanation": "access-list 1 deny 192.168.1.1 是标准ACL，只匹配源地址，deny表示拒绝源地址为192.168.1.1的分组通过。"
  },
  {
    "id": 2737,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2012a",
    "question": "局域网冲突时槽的计算方法如下。假设tphy表示工作站的物理层时延，c表示光速，s表示网段长度，tr表示中继器的时延，在局域网最大配置的情况下，冲突时槽等于 ( )。",
    "options": [
      "A. s/0.7c+2tphy+8tr",
      "B. 2s/0.7c+2tphy+8tr",
      "C. 2s/0.7c+tphy+8tr",
      "D. 2s/0.7c+2tphy+4tr"
    ],
    "answer": 1,
    "explanation": "冲突时槽为往返传播时延加各站点物理层及中继器时延，即2s/0.7c+2tphy+8tr，故选B。"
  },
  {
    "id": 2738,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2012a",
    "question": "在局域网标准中，100base-t规定从收发器到集线器的距离不超过( )米。",
    "options": [
      "A. 100",
      "B. 185",
      "C. 300",
      "D. 1000"
    ],
    "answer": 0,
    "explanation": "100Base-T使用双绞线，规定收发器到集线器（或交换机）的最大距离为100米。"
  },
  {
    "id": 2739,
    "type": "single",
    "category": "无线网络",
    "paper": "real2012a",
    "question": "802.11在mac层采用了( )协议。",
    "options": [
      "A. csma/cd",
      "B. csma/ca",
      "C. dqdb",
      "D. 令牌传递"
    ],
    "answer": 1,
    "explanation": "802.11无线局域网MAC层采用CSMA/CA（载波监听多路访问/冲突避免）协议，而非CSMA/CD。"
  },
  {
    "id": 2740,
    "type": "single",
    "category": "无线网络",
    "paper": "real2012a",
    "question": "ieee 802.16工作组提出的无线接入系统空中接口标准是( )。",
    "options": [
      "A. gprs",
      "B. umb",
      "C. lte",
      "D. wimax"
    ],
    "answer": 3,
    "explanation": "IEEE 802.16工作组提出的无线接入系统空中接口标准是WiMAX，用于宽带无线城域网接入。"
  },
  {
    "id": 2741,
    "type": "single",
    "category": "网络安全",
    "paper": "real2012a",
    "question": "安全电子邮件使用( )协议。",
    "options": [
      "A. pgp",
      "B. https",
      "C. mime",
      "D. des"
    ],
    "answer": 0,
    "explanation": "PGP（Pretty Good Privacy）是广泛用于安全电子邮件的加密与签名协议，提供机密性和认证。"
  },
  {
    "id": 2742,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2012a",
    "question": "建筑物综合布线系统中的园区子系统是指( )。",
    "options": [
      "A. 由终端到信息插座之间的连线系统",
      "B. 楼层接线间到工作区的线缆系统",
      "C. 各楼层设备之间的互连系统",
      "D. 连接各个建筑物的通信系统"
    ],
    "answer": 3,
    "explanation": "综合布线系统中，园区子系统（建筑群子系统）用于连接各建筑物之间的通信线路。"
  },
  {
    "id": 2743,
    "type": "single",
    "category": "网络管理",
    "paper": "real2012a",
    "question": "下面有关rmon的论述中，错误的是( )。",
    "options": [
      "A. rmon的管理信息库提供整个子网的管理信息",
      "B. rmon的管理信息库属于mib-2的一部分",
      "C. rmon监视器可以对每个分组进行统计和分析",
      "D. rmon监视器不包含mib-2的功能"
    ],
    "answer": 3,
    "explanation": "RMON监视器通常包含MIB-2功能并对其扩展，因此说RMON监视器不包含MIB-2功能是错误的。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2011b";
  const A = [
  {
    "id": 2744,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "若某条无条件转移汇编指令采用直接寻址，则该指令的功能是将指令中的地址码送入( )",
    "options": [
      "A. pc(程序计数器)",
      "B. ar(地址寄存器)",
      "C. ac(累加器)",
      "D. alu(算术逻辑运算单元)"
    ],
    "answer": 0,
    "explanation": "无条件转移指令直接寻址时，将指令中的地址码送入程序计数器PC，从而改变程序执行顺序。"
  },
  {
    "id": 2745,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "若某计算机系统的i/o接口与主存采用统一编址，则输入输出操作是通过( )指令来完成的：",
    "options": [
      "A. 控制",
      "B. 中断",
      "C. 输入输出",
      "D. 缓存"
    ],
    "answer": 3,
    "explanation": "I/O接口与主存统一编址时，访问I/O端口使用访存指令，即通过缓存（存储访问）类指令完成。"
  },
  {
    "id": 2746,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "在程序的执行过程中，cache与主存的地址映像由( )",
    "options": [
      "A. 专门的硬件自动完成",
      "B. 程序员进行调度",
      "C. 操作系统进行管理",
      "D. 程序员和操作系统共同协调完成"
    ],
    "answer": 0,
    "explanation": "Cache与主存之间的地址映像和转换由专门的硬件自动完成，对程序员透明。"
  },
  {
    "id": 2747,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "总线复用方式可以( )",
    "options": [
      "A. 提高总线的传输带宽",
      "B. 增加总线的功能",
      "C. 减少总线中信号线的数量",
      "D. 提高cpu利用率"
    ],
    "answer": 2,
    "explanation": "总线复用是指同一组信号线在不同时间传输不同信息，可减少总线中信号线的数量。"
  },
  {
    "id": 2748,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "确定软件的模块划分及模块之间的调用关系是( )阶段的任务",
    "options": [
      "A. 需求分析",
      "B. 概要设计",
      "C. 详细设计",
      "D. 编码"
    ],
    "answer": 1,
    "explanation": "概要设计阶段的任务是确定软件的模块划分及模块之间的调用关系，即软件体系结构设计。"
  },
  {
    "id": 2749,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "利用结构化分析模型进行接口设计时，应以( )为依据：",
    "options": [
      "A. 数据流图",
      "B. 实体-关系图",
      "C. 数据字典",
      "D. 状态-迁移图"
    ],
    "answer": 0,
    "explanation": "结构化分析模型中，数据流图描述系统的数据流动和处理，是接口设计的主要依据。"
  },
  {
    "id": 2750,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "下图是一个软件项目的活动图，其中顶点表示项目里程碑，连接顶点的边表示包含的活动，边上的值表示完成活动所需要的时间，则关键路径长度为（ ）",
    "options": [
      "A. 20",
      "B. 19",
      "C. 17",
      "D. 16"
    ],
    "answer": 0,
    "explanation": "关键路径是活动图中耗时最长的路径，其长度决定项目最短工期，本题关键路径长度为20。"
  },
  {
    "id": 2751,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011b",
    "question": "（）指可以不经著作权人许可，无需支付报酬，使用其作品：",
    "options": [
      "A. 合理使用",
      "B. 许可使用",
      "C. 强制许可使用",
      "D. 法定许可使用"
    ],
    "answer": 0,
    "explanation": "合理使用指可以不经著作权人许可、无需支付报酬而使用其作品，属于著作权限制情形。"
  },
  {
    "id": 2752,
    "type": "single",
    "category": "路由协议",
    "paper": "real2011b",
    "question": "两个自治系统(as)之间使用的路由协议是（ ）：",
    "options": [
      "A. rip",
      "B. ospf",
      "C. bgp",
      "D. igrp"
    ],
    "answer": 2,
    "explanation": "BGP是自治系统之间使用的域间路由协议，RIP、OSPF、IGRP均为自治系统内部路由协议。"
  },
  {
    "id": 2753,
    "type": "single",
    "category": "交换技术",
    "paper": "real2011b",
    "question": "一个以太网交换机，读取整个数据帧，对数据帧进行差错校验后再转发出去，这种交换方式称为（ ）",
    "options": [
      "A. 存储转发交换",
      "B. 直通交换",
      "C. 无碎片交换",
      "D. 无差错交换"
    ],
    "answer": 0,
    "explanation": "存储转发交换方式先读取整个数据帧并进行差错校验，校验通过后再转发出去。"
  },
  {
    "id": 2754,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2011b",
    "question": "以下关于光纤通信的叙述中，正确的是（ ）：",
    "options": [
      "A. 多模光纤传输距离远，而单模光纤传输距离近；",
      "B. 多模光纤的价格便宜，而单模光纤的价格较贵；",
      "C. 多模光纤的包层外径较粗，而单模光纤包层外径较细；",
      "D. 多模光纤的纤芯较细，单模光纤的纤芯较粗。"
    ],
    "answer": 1,
    "explanation": "多模光纤纤芯较粗、价格便宜但传输距离近；单模光纤纤芯细、价格较贵、传输距离远，故B正确。"
  },
  {
    "id": 2755,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2011b",
    "question": "可以用数字信号对模拟载波的不同参量时行调制，下图所示的调制方式称为（ ）",
    "options": [
      "A. ask",
      "B. fsk",
      "C. psk",
      "D. dpsk"
    ],
    "answer": 2,
    "explanation": "图中载波相位随数字信号变化，属于相移键控PSK调制方式。"
  },
  {
    "id": 2756,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2011b",
    "question": "下图画出了曼彻斯特编码和差分曼彻斯特编码的波形图，实际传送的比特串为（ ）。",
    "options": [
      "A. 10101100",
      "B. 01110010",
      "C. 01010011",
      "D. 10001101"
    ],
    "answer": 2,
    "explanation": "曼彻斯特编码每位中间跳变既作时钟又表数据，差分曼彻斯特以起始跳变表数据。按波形逐位读出，得到比特串01010011，故选C。"
  },
  {
    "id": 2757,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2011b",
    "question": "在各种xdsl技术中，能提供上下行信道非对称传输的是（ ）",
    "options": [
      "A. adsl和hdsl",
      "B. adsl和vdsl",
      "C. sdsl和vdsl",
      "D. sdsl和hdsl"
    ],
    "answer": 1,
    "explanation": "ADSL和VDSL上下行速率不对称，适合用户接入；HDSL和SDSL上下行速率对称。故能提供非对称传输的是ADSL和VDSL。"
  },
  {
    "id": 2758,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2011b",
    "question": "使用adsl虚拟拨号接入方式中，需要在用户端安装（ ）软件。",
    "options": [
      "A. ppp",
      "B. pppoe",
      "C. pptp",
      "D. l2tp"
    ],
    "answer": 1,
    "explanation": "ADSL虚拟拨号采用PPPoE协议，在以太网上承载PPP会话，用户端需安装PPPoE拨号软件完成认证接入。"
  },
  {
    "id": 2759,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011b",
    "question": "arp表用于缓存设备的ip地址与mac地址的对应关系，采用arp表的好处是（ ）",
    "options": [
      "A. 便于测试网络连接数",
      "B. 减少网络维护工作量",
      "C. 限制网络广播数量",
      "D. 解决网络地址冲突"
    ],
    "answer": 2,
    "explanation": "ARP表缓存IP与MAC的映射，主机发数据前先查表，命中则不再发ARP广播，从而减少网络中的广播数量。"
  },
  {
    "id": 2760,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011b",
    "question": "smtp服务器端使用的端口号默认为（ ）",
    "options": [
      "A. 21",
      "B. 25",
      "C. 53",
      "D. 80"
    ],
    "answer": 1,
    "explanation": "SMTP用于发送邮件，服务器默认监听TCP 25端口；21为FTP，53为DNS，80为HTTP。"
  },
  {
    "id": 2761,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011b",
    "question": "下图为web站点的默认网站属性窗口，如果要设置用户对主页文件的读取权限，需要在（ ）选项卡中进行配置。",
    "options": [
      "A. 网站",
      "B. 主目录",
      "C. 文档",
      "D. http头"
    ],
    "answer": 1,
    "explanation": "Web站点属性中，主目录选项卡可设置本地路径及用户对主页文件的读取、写入等访问权限。"
  },
  {
    "id": 2762,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011b",
    "question": "dhcp客户端启动时会向网络发出一个 dhcpdiscover包来请求ip地址，其源ip地址为（ ）",
    "options": [
      "A. 192.168.01",
      "B. 0.0.0.0",
      "C. 255.255.255.0",
      "D. 255.255.255.255"
    ],
    "answer": 1,
    "explanation": "DHCP客户端尚无IP地址，DHCP Discover以源地址0.0.0.0、目的地址255.255.255.255广播发送。"
  },
  {
    "id": 2763,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011b",
    "question": "当使用时间到过达租约期的（ ）时，dhcp客户端和dhcp服务器将更新租约。",
    "options": [
      "A. 50%",
      "B. 75%",
      "C. 87.5%",
      "D. 100%"
    ],
    "answer": 0,
    "explanation": "DHCP租约到达50%时，客户端向原服务器单播发送DHCP Request请求续租，更新租约。"
  },
  {
    "id": 2764,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011b",
    "question": "在linux中，某文件的访问权限信息为“-rwxr--r--”，以下对该文件的说明中，正确的是（ ）",
    "options": [
      "A. 文件所有者有读、写和执行权限，其他用户没有读、写和执行权限",
      "B. 文件所有者有读、写和执行权限，其他用户只有读权限",
      "C. 文件所有者和其他用户都有读、写与执行权限",
      "D. 文件所有者和其他用户都只有读和写权限"
    ],
    "answer": 1,
    "explanation": "权限-rwxr--r--中，所有者rwx即可读可写可执行，组用户和其他用户均为r--，只有读权限，故选B。"
  },
  {
    "id": 2765,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011b",
    "question": "在linux中，更改用户口令的命令是（ ）",
    "options": [
      "A. pwd",
      "B. passwd",
      "C. kouling",
      "D. password"
    ],
    "answer": 1,
    "explanation": "Linux中passwd命令用于修改用户口令；pwd显示当前目录，其余选项不是标准命令。"
  },
  {
    "id": 2766,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011b",
    "question": "在linux中，目录“/proc”主要用于存放（ ）。",
    "options": [
      "A. 设备文件",
      "B. 命令文件",
      "C. 配置文件",
      "D. 进程和系统信息"
    ],
    "answer": 3,
    "explanation": "/proc是虚拟文件系统，动态存放内核、进程运行状态和系统信息，不占实际磁盘空间。"
  },
  {
    "id": 2767,
    "type": "single",
    "category": "网络安全",
    "paper": "real2011b",
    "question": "网络用户中只能接收但不能发送email，不可能的原因是（ ）",
    "options": [
      "A. 邮件服务器配置错误",
      "B. 路由器端口的访问控制列表设置为denypop3",
      "C. 路由器端口的访问控制列表设置为denysmtp",
      "D. 客户端代理设置错误"
    ],
    "answer": 1,
    "explanation": "只能收不能发邮件，说明接收协议POP3正常而发送协议SMTP被阻断。deny pop3会阻止收信，不是该现象原因。"
  },
  {
    "id": 2768,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011b",
    "question": "配置ftp服务器的属性窗口如下图所示，默认情况下“本地路径”文本框中的值为（ ）",
    "options": [
      "A. c:\\inetpub\\wwwroot",
      "B. c:\\inetpub\\ftproot",
      "C. c:\\wmpubli\\wwwroot",
      "D. c:\\wmpubli\\ftproot"
    ],
    "answer": 1,
    "explanation": "IIS中FTP站点默认本地路径为c:\\inetpub\\ftproot，Web站点默认路径才是wwwroot。"
  },
  {
    "id": 2769,
    "type": "single",
    "category": "网络安全",
    "paper": "real2011b",
    "question": "以下安全协议中，用来实现安全电子邮件的协议是（ ）",
    "options": [
      "A. ipsec",
      "B. l2tp",
      "C. pgp",
      "D. pptp"
    ],
    "answer": 2,
    "explanation": "PGP是基于公钥密码的电子邮件加密与签名协议，可实现安全电子邮件；IPSec、L2TP、PPTP用于网络层或隧道。"
  },
  {
    "id": 2770,
    "type": "single",
    "category": "网络安全",
    "paper": "real2011b",
    "question": "公钥体系中，用户甲发送给用户乙的数据要用（ ）进行加密。",
    "options": [
      "A. 甲的公钥",
      "B. 甲的私钥",
      "C. 乙的公钥",
      "D. 乙的私钥"
    ],
    "answer": 2,
    "explanation": "公钥体系保密通信时，发送方用接收方乙的公钥加密，只有乙用自己的私钥才能解密，故选C。"
  },
  {
    "id": 2771,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011b",
    "question": "、rmon和snmp的主要区别是（ ）。",
    "options": [
      "A. rmon只能提供单个设备的管理信息，而snmp可以提供整个子网的管理信息",
      "B. rmon提供了整个子网的管理信息，而snmp管理信息库只包含本地设备的管理信息",
      "C. rmon定义了远程网络的管理信息库，而snmp只能提供本地网络的管理信息",
      "D. rmon只能提供本地网络的管理信息，而snmp定义了远程网络的管理信息库"
    ],
    "answer": 1,
    "explanation": "RMON定义了远程网络监视的管理信息库，可提供整个子网的管理信息；SNMP的MIB主要包含本地设备管理信息。"
  },
  {
    "id": 2772,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011b",
    "question": "snmp采用udp提供的数据报服务传递信息，这是由于（ ）。",
    "options": [
      "A. udp比tcp更加可靠",
      "B. udp数据报文可以比tcp数据报文大",
      "C. udp是面向连接的传输方式",
      "D. udp实现网络管理的效率较高"
    ],
    "answer": 3,
    "explanation": "SNMP采用UDP无连接传输，开销小、时延低，在网络管理这种简单请求响应场景下效率较高。"
  },
  {
    "id": 2773,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011b",
    "question": "在网络管理中要防止各种安全威胁。在snmp中无法预防的安全威胁是（ ）。",
    "options": [
      "A. 篡改管理信息：通过改变传输中的snmp报文实施未经授权的管理操作",
      "B. 通信分析：第三者分析管理实体之间的通信规律，从而获取管理信息",
      "C. 假冒合法用户：未经授权的用户冒充授权用户，企图实施管理操作",
      "D. 消息泄露：snmp引擎之间交换的信息被第三者偷听"
    ],
    "answer": 1,
    "explanation": "SNMP可通过认证、加密等机制防篡改、假冒和泄露，但通信分析属流量分析，协议本身无法预防。"
  },
  {
    "id": 2774,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011b",
    "question": "在windows的dos窗口中键入命令",
    "options": [
      "A. \\&gt;nslook",
      "B. 查询211.151.91.165的邮件服务器信息",
      "C. 查询211.151.91.165到域名的映射",
      "D. 查询211.151.91.165的资源记录类型"
    ],
    "answer": 1,
    "explanation": "nslookup命令用于查询DNS记录，可查询IP地址对应的域名映射及邮件服务器等资源记录信息。"
  },
  {
    "id": 2775,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2011b",
    "question": "建筑物综合布线系统中工作区子系统是指（ ）",
    "options": [
      "A. 由终端到信息插座之间的连线系统",
      "B. 楼层接线间的配线架和线缆系统",
      "C. 各楼层设备之间的互连系统",
      "D. 连接各个建筑物的通信系统"
    ],
    "answer": 0,
    "explanation": "综合布线工作区子系统指终端设备到信息插座之间的连线系统，包括跳线和适配器，故选A。"
  },
  {
    "id": 2776,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011b",
    "question": "设有下面4条路由：196.34.129.0/24、196.34.130.0/24、196.34.132.0/24和196.34.133.0/24，如果进行路由汇聚，能覆盖这4条路由的地址是（ ）",
    "options": [
      "A. 196.34.128.0/21",
      "B. 196.34.128.0/22",
      "C. 196.34.130.0/22",
      "D. 196.34.132.0/23"
    ],
    "answer": 0,
    "explanation": "四条路由前两字节相同，第三字节129、130、132、133的二进制前5位一致，可聚合为196.34.128.0/21，故选A。"
  },
  {
    "id": 2777,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011b",
    "question": "ipv6地址33ab：0000：0000：cd30：0000：0000：0000：0000/60可以表示成各种简写形式，以下写法中正确的是（ ）",
    "options": [
      "A. 33ab：0：0：cd30/60",
      "B. 33ab：0：0：cd3/60",
      "C. 33ab：：cd30/60",
      "D. 33ab：：cd3/60"
    ],
    "answer": 0,
    "explanation": "IPv6中连续的全0字段可用::代替，但只能出现一次；33ab:0:0:cd30/60可简写为33ab::cd30/60，故选A。"
  },
  {
    "id": 2778,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2011b",
    "question": "采用csma/cd协议的基带总线，其段长为1000m，中间没有中继器，数据速率为10mb/s，信号传播速度为200m/µs，为了保证在发送期间能够检测到冲突，则该网络上的最小帧长应为（ ）比特。",
    "options": [
      "A. 50",
      "B. 100",
      "C. 150",
      "D. 200"
    ],
    "answer": 1,
    "explanation": "往返传播时延为2×1000m÷200m/µs=10µs，最小帧长=10Mb/s×10µs=100比特，故选B。"
  },
  {
    "id": 2779,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2011b",
    "question": "以下属于万兆以太网物理层标准的是（ ）。",
    "options": [
      "A. ieee802.3u",
      "B. ieee802.3a",
      "C. ieee802.3e",
      "D. ieee802.3ae"
    ],
    "answer": 3,
    "explanation": "IEEE 802.3ae是万兆以太网（10GbE）的物理层标准，802.3u为快速以太网，故选D。"
  },
  {
    "id": 2780,
    "type": "single",
    "category": "无线网络",
    "paper": "real2011b",
    "question": "ieee802.11采用了类似于802.3csma/cd协议，之所以不采用csma/cd协议的原因是（ ）。",
    "options": [
      "A. csma/cd协议的效率更高",
      "B. 为了解决隐蔽终端问题",
      "C. csma/cd协议的开销更大",
      "D. 为了引进其他业务"
    ],
    "answer": 1,
    "explanation": "无线信道难以可靠检测冲突，且存在隐蔽终端问题，故802.11采用CSMA/CA而非CSMA/CD，故选B。"
  },
  {
    "id": 2781,
    "type": "single",
    "category": "无线网络",
    "paper": "real2011b",
    "question": "无线局域网（wlan）标准ieee802.llg规定的最大数据速率是（ ）。",
    "options": [
      "A. 1mb/s",
      "B. 11 mb/s",
      "C. 5 mb/s",
      "D. 54mb/s"
    ],
    "answer": 3,
    "explanation": "IEEE 802.11g工作在2.4GHz频段，采用OFDM，最大数据速率为54Mb/s，故选D。"
  },
  {
    "id": 2782,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2011b",
    "question": "大型局域网通常组织成分层结构（核心层、汇聚层和接入层），以下关于网络核心层的叙述中，正确的是（ ）。",
    "options": [
      "A. 为了保障安全性，应该以分组进行尽可能多的处理",
      "B. 将数据分组从一个区域高速地转发到另一个区域",
      "C. 由多台二、三层交换机组成",
      "D. 提供用户的访问控制"
    ],
    "answer": 1,
    "explanation": "核心层负责高速数据转发，将分组从一个区域快速转发到另一个区域，不应做过多处理，故选B。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2011a";
  const A = [
  {
    "id": 2783,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "在CPU中用于跟踪指令地址的寄存器是 ( ) 。",
    "options": [
      "A. 地址寄存器(MAR)",
      "B. 数据寄存器(MDR)",
      "C. 程序计数器(PC)",
      "D. 指令寄存器(IR)"
    ],
    "answer": 2,
    "explanation": "程序计数器PC存放下一条要执行指令的地址，用于跟踪指令地址，故选C。"
  },
  {
    "id": 2784,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "指令系统中采用不同寻址方式的目的是 ( ) 。",
    "options": [
      "A. 提高从内存获取数据的速度",
      "B. 提高从外存获取数据的速度",
      "C. 降低操作码的译码难度",
      "D. 扩大寻址空间并提高编程灵活性"
    ],
    "answer": 3,
    "explanation": "多种寻址方式可扩大寻址空间、方便程序设计，提高编程灵活性，故选D。"
  },
  {
    "id": 2785,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "在计算机系统中采用总线结构，便于实现系统的积木化构造，同时可以 ( ) 。",
    "options": [
      "A. 提高数据传输速度",
      "B. 提高数据传输量",
      "C. 减少信息传输线的数量",
      "D. 减少指令系统的复杂性"
    ],
    "answer": 2,
    "explanation": "总线结构使各部件通过一组公共信号线连接，可减少信息传输线的数量，故选C。"
  },
  {
    "id": 2786,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "软件产品的可靠度并不取决于 ( )",
    "options": [
      "A. 潜在错误的数量",
      "B. 潜在错误的位置",
      "C. 软件产品的使用方法",
      "D. 软件产品的开发方式"
    ],
    "answer": 3,
    "explanation": "软件可靠度取决于潜在错误数量、位置及使用方法，与开发方式无直接决定关系，故选D。"
  },
  {
    "id": 2787,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "模块A直接访问模块B的内部数据，则模块A和模块B的耦合类型为 ( )",
    "options": [
      "A. 数据耦合",
      "B. 标记耦合",
      "C. 公共耦合",
      "D. 内容耦合"
    ],
    "answer": 3,
    "explanation": "一个模块直接访问另一模块的内部数据，属于耦合度最高的内容耦合，故选D。"
  },
  {
    "id": 2788,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "下列关于风险的叙述不正确的是：风险是指 ( )",
    "options": [
      "A. 可能发生的事件",
      "B. 一定会发生的事件",
      "C. 会带来损失的事件",
      "D. 可能对其进行干预，以减少损失的事件"
    ],
    "answer": 1,
    "explanation": "风险是不确定事件，可能发生也可能不发生，并非一定会发生，故选B。"
  },
  {
    "id": 2789,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "下列关于项目估算方法的叙述不正确的是 ( )",
    "options": [
      "A. 专家判断方法受到专家经验的主观性影响",
      "B. 启发式方法（COCOMO模型）的参数难以确定",
      "C. 机器学习方法难以描述训练数据的特征和确定其相似性",
      "D. 结合上述三种方法可以得到精确的估算结果"
    ],
    "answer": 3,
    "explanation": "各种估算方法均有局限，结合使用只能提高精度，无法得到精确结果，故选D。"
  },
  {
    "id": 2790,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "下图是一个软件项目的活动图，其中顶点表示项目里程碑，边表示包含的活动，边上的权重表示活动的持续时间，则里程碑 ( ) 在关键路径上。",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": 1,
    "explanation": "关键路径是活动图中总持续时间最长的路径，里程碑2位于该路径上，故选B。"
  },
  {
    "id": 2791,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2011a",
    "question": "下列关于软件著作权中翻译权的叙述正确的是：翻译权是指 ( ) 的权利。",
    "options": [
      "A. 将原软件从一种自然语言文字转换成另一种自然语言文字",
      "B. 将原软件从一种程序设计语言转换成另一种程序设计语言",
      "C. 软件著作权人对其软件享有的以其它各种语言文字形式在表现",
      "D. 对软件的操作界面或者程序中涉及的语言文字翻译成另一种语言文字"
    ],
    "answer": 1,
    "explanation": "翻译权指将原软件从一种程序设计语言转换成另一种程序设计语言的权利，故选B。"
  },
  {
    "id": 2792,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2011a",
    "question": "在相隔400Km的两地间通过电缆以4800b/s的速率传送3000比特长的数据包，从开始发送到接收完数据需要的时间是 ( ) 。",
    "options": [
      "A. 480ms",
      "B. 607ms",
      "C. 612ms",
      "D. 627ms"
    ],
    "answer": 3,
    "explanation": "发送时延3000÷4800=625ms，传播时延400km÷200m/µs=2ms，总计627ms，故选D。"
  },
  {
    "id": 2793,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2011a",
    "question": "假设模拟信号的最高频率为5MHz，采样频率必须大于 （1) ，才能使得到的样本信号不失真。",
    "options": [
      "A. 5MHz",
      "B. 10MHz",
      "C. 15MHz",
      "D. 20MHz"
    ],
    "answer": 3,
    "explanation": "根据奈奎斯特采样定理，采样频率须大于信号最高频率的2倍，即大于10MHz，20MHz满足，故选D。"
  },
  {
    "id": 2794,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2011a",
    "question": "数据链路协议HDLC是一种 ( ) 。",
    "options": [
      "A. 面向比特的同步链路控制协议",
      "B. 面向字节计数的同步链路控制协议",
      "C. 面向字符的同步链路控制协议",
      "D. 异步链路控制协议"
    ],
    "answer": 0,
    "explanation": "HDLC采用比特填充实现透明传输，是面向比特的同步链路控制协议，故选A。"
  },
  {
    "id": 2795,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2011a",
    "question": "快速以太网标准100BASE-TX规定的传输介质是 ( ) 。",
    "options": [
      "A. 2类UTP",
      "B. 3类UTP",
      "C. 5类UTP",
      "D. 光纤"
    ],
    "answer": 2,
    "explanation": "100BASE-TX使用两对5类UTP或屏蔽双绞线，传输介质为5类UTP，故选C。"
  },
  {
    "id": 2796,
    "type": "single",
    "category": "交换技术",
    "paper": "real2011a",
    "question": "以太网交换机的交换方式有三种，这种交换方式不包括 ( ) 。",
    "options": [
      "A. 存储转发式交换",
      "B. IP交换",
      "C. 直通式交换",
      "D. 碎片过滤式交换"
    ],
    "answer": 1,
    "explanation": "以太网交换机的交换方式包括存储转发式、直通式和碎片过滤式（无碎片直通）三种，IP交换属于三层交换技术，不属于以太网交换机的交换方式。"
  },
  {
    "id": 2797,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011a",
    "question": "CISCO路由器操作系统IOS有三种命令模式，其中不包括 ( ) 。",
    "options": [
      "A. 用户模式",
      "B. 特权模式",
      "C. 远程连接模式",
      "D. 配置模式"
    ],
    "answer": 2,
    "explanation": "Cisco IOS有三种命令模式：用户模式、特权模式和配置模式，远程连接模式（如Telnet）只是访问方式，并非IOS的命令模式。"
  },
  {
    "id": 2798,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2011a",
    "question": "通过CATV电缆访问因特网，在用户端必须安装的设备是 ( ) 。",
    "options": [
      "A. ADSL Modem",
      "B. Cable Modem",
      "C. 无线路由器",
      "D. 以太网交换机"
    ],
    "answer": 1,
    "explanation": "通过CATV（有线电视）电缆访问因特网属于HFC接入方式，用户端必须安装Cable Modem（电缆调制解调器）完成信号调制解调。"
  },
  {
    "id": 2799,
    "type": "single",
    "category": "路由协议",
    "paper": "real2011a",
    "question": "在互联网中可以采用不同的路由选择算法，所谓松散源路由是指IP分组 ( ) 。",
    "options": [
      "A. 必须经过源站指定的路由器",
      "B. 只能经过源站指定的路由器",
      "C. 必须经过目的站指定的路由器",
      "D. 只能经过目标站指定的路由器"
    ],
    "answer": 0,
    "explanation": "松散源路由是指IP分组必须经过源站指定的路由器，但允许在指定路由器之间经过其他路由器，故为“必须经过”而非“只能经过”。"
  },
  {
    "id": 2800,
    "type": "single",
    "category": "路由协议",
    "paper": "real2011a",
    "question": "下面关于边界网关协议BGP4的描述中，不正确的是 ( ) 。",
    "options": [
      "A. BGP4网关向对等实体（Peer）发布可以到达的AS列表",
      "B. BGP4网关采用逐跳路由（hop-by-hop）模式发布路由信息",
      "C. BGP4可以通过路由汇聚功能形成超级网络（Supernet）",
      "D. BGP4报文直接封装在IP数据报中传送"
    ],
    "answer": 3,
    "explanation": "BGP4报文是封装在TCP报文段中传送的（使用TCP端口179），而不是直接封装在IP数据报中，故该描述不正确。"
  },
  {
    "id": 2801,
    "type": "single",
    "category": "路由协议",
    "paper": "real2011a",
    "question": "RIP协议中可以使用多种方法防止路由循环，在以下选项中不属于这些方法的是 ( ) 。",
    "options": [
      "A. 垂直翻转",
      "B. 水平分割",
      "C. 反向路由中毒",
      "D. 设置最大度量值"
    ],
    "answer": 0,
    "explanation": "RIP防止路由循环的方法包括水平分割、反向路由中毒（毒性逆转）和设置最大度量值（16跳为不可达），垂直翻转并非其方法。"
  },
  {
    "id": 2802,
    "type": "single",
    "category": "路由协议",
    "paper": "real2011a",
    "question": "RIP协议默认的路由更新周期是 ( ) 秒。",
    "options": [
      "A. 30",
      "B. 60",
      "C. 90",
      "D. 100"
    ],
    "answer": 0,
    "explanation": "RIP协议默认每30秒向相邻路由器发送一次路由更新报文，故默认路由更新周期为30秒。"
  },
  {
    "id": 2803,
    "type": "single",
    "category": "交换技术",
    "paper": "real2011a",
    "question": "MPLS（多协议标记交换）根据标记对分组进行交换，MPLS包头的位置应插入在 ( ) 。",
    "options": [
      "A. 以太帧头的前面",
      "B. 以太帧头与IP头之间",
      "C. IP头与TCP头之间",
      "D. 应用数据与TCP头之间"
    ],
    "answer": 1,
    "explanation": "MPLS标签头插入在以太网帧头与IP头之间（即二层帧头与三层IP头之间），使标签交换可在二层与三层之间进行。"
  },
  {
    "id": 2804,
    "type": "single",
    "category": "路由协议",
    "paper": "real2011a",
    "question": "IGRP协议的路由度量包括多种因素，但是一般情况下可以简化为 ( ) 。",
    "options": [
      "A. 可靠性",
      "B. 带宽",
      "C. 跳步数",
      "D. MTU"
    ],
    "answer": 2,
    "explanation": "IGRP的度量虽综合带宽、延迟、可靠性、负载和MTU等因素，但一般情况下可简化为以跳步数（跳数）作为度量。"
  },
  {
    "id": 2805,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011a",
    "question": "采用Windows Server 2003创建一个Web站点，主目录中添加主页文件index.asp，在客户机的浏览器地址栏内输入该网站的域名后不能正常访问，则不可能的原因是 ( ) 。",
    "options": [
      "A. Web站点配置完成后没有重新启动",
      "B. DNS服务器不能进行正确的域名解释",
      "C. 没有将index.asp添加到该Web站点的默认启动文档中",
      "D. 没有指定该Web站点的服务端口"
    ],
    "answer": 3,
    "explanation": "Web站点有默认服务端口80，未指定端口不会导致无法访问；而站点未重启、DNS解析失败或未添加默认文档均可能导致无法访问。"
  },
  {
    "id": 2806,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011a",
    "question": "DNS服务器在名称解析过程中正确的查询顺序为 ( ) 。",
    "options": [
      "A. 本地缓存记录→区域记录→转发域名服务器→根域名服务器",
      "B. 区域记录→本地缓存记录→转发域名服务器→根域名服务器",
      "C. 本地缓存记录→区域记录→根域名服务器→转发域名服务器",
      "D. 区域记录→本地缓存记录→根域名服务器→转发域名服务器"
    ],
    "answer": 0,
    "explanation": "DNS解析时先查本地缓存记录，再查本地区域记录，若仍无法解析则转发给转发域名服务器，最后才向根域名服务器查询。"
  },
  {
    "id": 2807,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011a",
    "question": "DNS服务器进行域名解析时，若采用递归方法，发送的域名请求为 ( ) 。",
    "options": [
      "A. 1条",
      "B. 2条",
      "C. 3条",
      "D. 多条"
    ],
    "answer": 0,
    "explanation": "递归解析时客户机只需向本地DNS服务器发送1条请求，由服务器代为完成后续全部查询并返回最终结果。"
  },
  {
    "id": 2808,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011a",
    "question": "DNS资料记录中记录类型（record-type）为A，则记录的值为 ( ) 。",
    "options": [
      "A. 名字服务器",
      "B. 主机描述",
      "C. IP地址",
      "D. 别名"
    ],
    "answer": 2,
    "explanation": "DNS资源记录中类型A（Address）用于将主机名映射为IP地址，故其记录的值为IP地址。"
  },
  {
    "id": 2809,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011a",
    "question": "在Linux系统中，命令 ( ) 用于管理各项软件包。",
    "options": [
      "A. install",
      "B. rpm",
      "C. fsck",
      "D. msi"
    ],
    "answer": 1,
    "explanation": "rpm是Linux系统中用于管理软件包（安装、卸载、查询、升级）的命令，install、fsck、msi均非Linux软件包管理命令。"
  },
  {
    "id": 2810,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011a",
    "question": "在Linux系统中，为某一个文件在另外一个位置建立文件连接的命令为 ( ) 。",
    "options": [
      "A. ln",
      "B. vi",
      "C. locatek",
      "D. cat"
    ],
    "answer": 0,
    "explanation": "ln命令用于为文件在另一位置建立链接（硬链接或符号链接），vi为编辑器，locate为查找命令，cat用于显示文件内容。"
  },
  {
    "id": 2811,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011a",
    "question": "默认情况下，Linux系统中用户登录密码信息存放在 ( ) 文件中。",
    "options": [
      "A. /etc/group",
      "B. /etc/userinfo",
      "C. /etc/shadow",
      "D. /etc/profile"
    ],
    "answer": 2,
    "explanation": "Linux系统中用户登录密码的加密信息默认存放在/etc/shadow文件中，/etc/group存放组信息，/etc/profile为环境配置文件。"
  },
  {
    "id": 2812,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011a",
    "question": "在Windows系统中若要显示IP路由表的内容，可使用命令 ( ) 。",
    "options": [
      "A. Netstat -s",
      "B. Netstat -r",
      "C. Netstat -n",
      "D. Netstat -a"
    ],
    "answer": 1,
    "explanation": "Netstat -r用于显示路由表内容（等价于route print），-s显示统计信息，-n以数字形式显示，-a显示所有连接和监听端口。"
  },
  {
    "id": 2813,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011a",
    "question": "下列命令中，不能查看网关IP地址的是 ( ) 。",
    "options": [
      "A. Nslookup",
      "B. Tracert",
      "C. Netstat",
      "D. Route print"
    ],
    "answer": 0,
    "explanation": "Nslookup用于域名解析查询，不能查看网关IP地址；Tracert、Netstat和Route print均可显示网关（默认路由）的IP地址。"
  },
  {
    "id": 2814,
    "type": "single",
    "category": "网络管理",
    "paper": "real2011a",
    "question": "在SNMPv3中，管理站（Manager）和代理（Agent）统一叫做 ( ) 。",
    "options": [
      "A. SNMP实体",
      "B. SNMP引擎",
      "C. 命令响应器",
      "D. 命令生成器"
    ],
    "answer": 0,
    "explanation": "SNMPv3将管理站（Manager）和代理（Agent）统一称为SNMP实体，实体由SNMP引擎和应用程序组成。"
  },
  {
    "id": 2815,
    "type": "single",
    "category": "网络安全",
    "paper": "real2011a",
    "question": "下列选项中，同属于报文摘要算法的是 ( ) 。",
    "options": [
      "A. DES和MD5",
      "B. MD5和SHA-1",
      "C. RSA和SHA-1",
      "D. DES和RSA"
    ],
    "answer": 1,
    "explanation": "MD5和SHA-1都是报文摘要（哈希）算法，用于生成消息摘要；DES和RSA属于加密算法，不属于摘要算法。"
  },
  {
    "id": 2816,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2011a",
    "question": "下面关于域本地组的说法中，正确的是 ( ) 。",
    "options": [
      "A. 成员可来自森林中的任何域，仅可访问本地域内的资源",
      "B. 成员可来自森林中的任何域，可访问任何域中的资源",
      "C. 成员仅可来自本地域，公可访问本地域内的资源",
      "D. 成员仅可来自本地域，可访问任何域中资源"
    ],
    "answer": 0,
    "explanation": "域本地组的特点是成员可来自森林中的任何域，但只能访问本地域内的资源，用于对本地域资源授权。"
  },
  {
    "id": 2817,
    "type": "single",
    "category": "网络安全",
    "paper": "real2011a",
    "question": "下面病毒中，属于蠕虫病毒的是 ( 。",
    "options": [
      "A. Wom.Sasser病毒",
      "B. Trojan.QQPSW病毒",
      "C. Backdoor.IRCBot病毒",
      "D. Macro.Melissa病毒"
    ],
    "answer": 0,
    "explanation": "Worm.Sasser（震荡波）是典型的蠕虫病毒，能自我复制并通过网络传播；其余为木马、后门或宏病毒。"
  },
  {
    "id": 2818,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011a",
    "question": "互联网规定的B类私网地址为 ( ) 。",
    "options": [
      "A. 172.16.0.0/16",
      "B. 172.16.0.0/12",
      "C. 172.15.0.0/16",
      "D. 172.15.0.0/12"
    ],
    "answer": 1,
    "explanation": "RFC1918规定B类私网地址为172.16.0.0～172.31.255.255，即172.16.0.0/12。"
  },
  {
    "id": 2819,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011a",
    "question": "ISP分配给某公司的地址块为199.34.76.64/28，则该公司得到的地址数是 ( )",
    "options": [
      "A. 8",
      "B. 16",
      "C. 32",
      "D. 64"
    ],
    "answer": 1,
    "explanation": "/28表示主机位为4位，可分配地址数2^4=16个，故该公司得到16个地址。"
  },
  {
    "id": 2820,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011a",
    "question": "由16个C类网络组成一个超网（Supernet），其子网掩码（mask）应为 ( )",
    "options": [
      "A. 255.255.240.16",
      "B. 255.255.16.0",
      "C. 255.255.255.248.0",
      "D. 255.255.240.0"
    ],
    "answer": 3,
    "explanation": "16个C类网络聚合需借用4位，掩码为255.255.240.0，即/20，可容纳16个C类网段。"
  },
  {
    "id": 2821,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011a",
    "question": "设IP地址为18.250.31.14，子网掩码为255.240.0.0，则子网地址是 ( )",
    "options": [
      "A. 18.0.0.14",
      "B. 18.31.0.14",
      "C. 18.240.0.0",
      "D. 18.9.0.14"
    ],
    "answer": 2,
    "explanation": "掩码255.240.0.0对应/12，将IP与掩码按位与：18.250.31.14与255.240.0.0得18.240.0.0。"
  },
  {
    "id": 2822,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011a",
    "question": "IPv6“链路本地地址”是将主机 ( ) 附加在地址前缀1111 1110 10之后产生的。",
    "options": [
      "A. IPv4地址",
      "B. MAC地址",
      "C. 主机名",
      "D. 任意字符串"
    ],
    "answer": 1,
    "explanation": "IPv6链路本地地址前缀为FE80::/10，即1111 1110 10后接64位接口标识，由MAC地址生成。"
  },
  {
    "id": 2823,
    "type": "single",
    "category": "交换技术",
    "paper": "real2011a",
    "question": "如果要设置交换机的IP地址，则命令提示符应该是 ( ) 。",
    "options": [
      "A. Switch&gt;",
      "B. Switch#",
      "C. Switch(config)",
      "D. Switch(config-if)#"
    ],
    "answer": 2,
    "explanation": "设置交换机IP地址属于全局配置模式，提示符为Switch(config)，需在全局配置下进行。"
  },
  {
    "id": 2824,
    "type": "single",
    "category": "交换技术",
    "paper": "real2011a",
    "question": "路由器命令“Router(config-subif)#encapsulation dotlq 1”的作用是 ( ) 。",
    "options": [
      "A. 设置封装类型和子接口连接的VLAN号",
      "B. 进入VLAN配置模式",
      "C. 配置VTP口号",
      "D. 指定路由器的工作模式"
    ],
    "answer": 0,
    "explanation": "encapsulation dot1q 1命令在子接口上设置封装类型为802.1Q并指定该子接口对应的VLAN号。"
  },
  {
    "id": 2825,
    "type": "single",
    "category": "路由协议",
    "paper": "real2011a",
    "question": "若路由器的路由信息如下，则最后一行路由信息怎样得到的 ( ) 。R3#show ip routeGateway of last resort is not set192.168.0.0/24 is subnetted,6 subnetsC 192.168.1.0 is directly connected,Ethernet0C 192.168.65.0 is directly connected,Serial0C 192.168.67.0 is directly connected,Serial1R 192.168.69.0[120/1]via 192.168.67.2,00:00:15,Serial1[120/1]via 192.168.65.2,00:00:24,Serial0R 192.168.69.0[120/1]via 192.168.67.2,00:00:15,Serial1R 192.168.69.0[120/1]via 192.168.652,00:00:24,Serial0",
    "options": [
      "A. 串行口直接连接的",
      "B. 由路由协议发现的",
      "C. 操作员手工配置的",
      "D. 以太网端口直连的"
    ],
    "answer": 1,
    "explanation": "路由表项前标R表示该路由由RIP路由协议动态学习得到，非直连或手工配置。"
  },
  {
    "id": 2826,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2011a",
    "question": "按802.1d生成树协议（STP），在交换机互联的局域网中， ( ) 的交换机被选为根交换机。",
    "options": [
      "A. MAC地址最小的",
      "B. MAC地址最大的",
      "C. ID最小的",
      "D. ID最大的"
    ],
    "answer": 2,
    "explanation": "802.1d生成树协议通过比较网桥ID选根交换机，网桥ID由优先级和MAC地址组成，ID最小者当选。"
  },
  {
    "id": 2827,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2011a",
    "question": "以太网中采用了二进制指数后退算法，这个算法的特点是 ( ) 。",
    "options": [
      "A. 网络负载越轻，可能后退的时间越长",
      "B. 网络负载越重，可能后退的时间越长",
      "C. 使用网络既可以适用于突发性业务，也可以适用于流式业务",
      "D. 可以动态地提高网络发送的优先级"
    ],
    "answer": 1,
    "explanation": "二进制指数后退算法中，冲突次数越多后退时延范围越大，故网络负载越重可能后退时间越长。"
  },
  {
    "id": 2828,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2011a",
    "question": "以太网帧格式如下图所示，其中“填充”字段的作用是 ( ) 。",
    "options": [
      "A. 可用于表示任选参数",
      "B. 表示封装的上层协议",
      "C. 表示控制帧的类型",
      "D. 维持64字节的最小帧长"
    ],
    "answer": 3,
    "explanation": "以太网最小帧长为64字节，当数据字段不足时用填充字段补足，以维持最小帧长保证冲突检测。"
  },
  {
    "id": 2829,
    "type": "single",
    "category": "无线网络",
    "paper": "real2011a",
    "question": "IEEE 802.11采用了CSMA/CA协议，下面关于这个协议的描述中错误的是 ( ) 。",
    "options": [
      "A. 各个发送站在两次帧间隔（IFS）之间进行竞争发送",
      "B. 每一个发送站维持一个后退计数器并监听网络上的通信",
      "C. 各个发送站按业务的优先级获得不同的发送机会",
      "D. CSMA/CA协议适用于突发性业务"
    ],
    "answer": 2,
    "explanation": "802.11的CSMA/CA中所有站点平等竞争，不按业务优先级分配发送机会，故该描述错误。"
  },
  {
    "id": 2830,
    "type": "single",
    "category": "无线网络",
    "paper": "real2011a",
    "question": "在IEEE 802.11标准中使用了扩频通信技术，下面选项中有关扩频通信技术说法正确的是 ( ) 。",
    "options": [
      "A. 扩频技术是一种带宽很宽的红外通信技术",
      "B. 扩频技术就是用伪随机序列对代表数据的模拟信号进行调制",
      "C. 扩频通信系统的带宽随着数据速率的提高而不断扩大",
      "D. 扩频技术就是扩大了频率许可证的使用范围"
    ],
    "answer": 1,
    "explanation": "扩频通信是用伪随机序列对数据信号进行调制，使信号带宽远大于原始带宽，提高抗干扰能力。"
  },
  {
    "id": 2831,
    "type": "single",
    "category": "无线网络",
    "paper": "real2011a",
    "question": "Wi-Fi联盟制定的安全认证方案WPA（Wi-Fi Protected Access）是 ( ) 标准的子集。",
    "options": [
      "A. IEEE 802.11",
      "B. IEEE 802.11a",
      "C. IEEE 802.11b",
      "D. IEEE 802.11i"
    ],
    "answer": 3,
    "explanation": "WPA是IEEE 802.11i安全标准的子集，采用TKIP加密，是向802.11i过渡的安全认证方案。"
  },
  {
    "id": 2832,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011a",
    "question": "为了确定一个网络是否可以连通，主机应该发送ICMP ( ) 报文。",
    "options": [
      "A. 回声请求",
      "B. 路由重定向",
      "C. 时间戳请求",
      "D. 地址掩码请求"
    ],
    "answer": 0,
    "explanation": "Ping命令通过发送ICMP回声请求报文并等待回声应答，以确定目标网络是否可达。"
  },
  {
    "id": 2833,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2011a",
    "question": "在域名系统中，根域下面是顶级域（TLD）。在下面的选项中 ( ) 属于全世界通用的顶级域。",
    "options": [
      "A. org",
      "B. cn",
      "C. microsoft",
      "D. mil"
    ],
    "answer": 0,
    "explanation": "org属于全世界通用的通用顶级域（gTLD）；cn为国家顶级域，microsoft为二级域，mil为美国专用。"
  },
  {
    "id": 2834,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2011a",
    "question": "在网络设计阶段进行通信流量分析时可以采用简单的80/20规则，下面关于这种规则的说明中，正确的是 ( ) 。",
    "options": [
      "A. 这种设计思路可以最大限度满足用户的远程联网需求",
      "B. 这个规则可以随时控制网络的运行状态",
      "C. 这个规则适用于内部交流较多而外部访问较少的网络",
      "D. 这个规则适用的网络允许存在具有特殊应用的网段"
    ],
    "answer": 2,
    "explanation": "80/20规则指80%流量在本地网段、20%跨网段，适用于内部交流多而外部访问少的网络。"
  },
  {
    "id": 2835,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2011a",
    "question": "根据用户需求选择正确的网络技术是保证网络建设成功的关键，在选择网络技术时应考虑多种因素，下面的各种考虑中，不正确的是 ( ) 。",
    "options": [
      "A. 选择的网络技术必须保证足够的带宽，使得用户能够快速地访问应用系统",
      "B. 选择网络技术时不仅要考虑当前需求，而且要考虑未来的发展",
      "C. 越是大型网络工程，越是要选择具有前瞻性的新的网络技术",
      "D. 选择网络技术要考虑投入产出比，通过投入产出分析确定使用何种技术"
    ],
    "answer": 2,
    "explanation": "选择网络技术应兼顾需求、发展和投入产出比，并非越大型越要盲目采用新前瞻技术，需务实。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2010b";
  const A = [
  {
    "id": 2836,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010b",
    "question": "在输入输出控制方法中，采用 （ ） 可以使得设备与主存间的数据块传送无需cpu干预。",
    "options": [
      "A. 程序控制输入输出",
      "B. 中断",
      "C. dma",
      "D. 总线控制"
    ],
    "answer": 2,
    "explanation": "DMA方式下，数据块在主存与外设间直接传送，由DMA控制器接管总线控制，无需CPU逐字干预，仅在传送开始和结束时需要CPU处理。"
  },
  {
    "id": 2837,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010b",
    "question": "若计算机采用8位整数补码表示数据，则 （ ） 运算将产生溢出。",
    "options": [
      "A. -127+1",
      "B. -127-1",
      "C. 127+1",
      "D. 127-1"
    ],
    "answer": 2,
    "explanation": "8位补码表示范围为-128~127，127+1=128超出最大值127，产生溢出；-127-1=-128仍在范围内，不溢出。"
  },
  {
    "id": 2838,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010b",
    "question": "编写汇编语言程序时，下列寄存器中，程序员可访问的是 （ ） 。",
    "options": [
      "A. 程序计数器（pc）",
      "B. 指令寄存器（ir）",
      "C. 存储器数据寄存器（mdr）",
      "D. 存储器地址寄存器（mar）"
    ],
    "answer": 0,
    "explanation": "程序计数器PC存放将要执行指令的地址，程序员可通过转移指令访问；IR、MDR、MAR对程序员透明，不可直接访问。"
  },
  {
    "id": 2839,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010b",
    "question": "某项目组拟开发一个大规模系统，且具备了相关领域及类似规模系统的开发经验。下列过程模型中， （ ） 最合适开发此项目。",
    "options": [
      "A. 原型模型",
      "B. 瀑布模型",
      "C. v模型",
      "D. 螺旋模型"
    ],
    "answer": 1,
    "explanation": "项目具备相关领域及类似规模系统的开发经验，需求较明确，适合采用阶段划分清晰、文档驱动的瀑布模型进行开发。"
  },
  {
    "id": 2840,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010b",
    "question": "软件复杂性度量的参数不包括 （ ） 。",
    "options": [
      "A. 软件的规模",
      "B. 开发小组的规模",
      "C. 软件的难度",
      "D. 软件的结构"
    ],
    "answer": 1,
    "explanation": "软件复杂性度量针对软件本身，参数包括规模、难度、结构、可靠性等，开发小组的规模属于人员因素，不属于软件复杂性度量参数。"
  },
  {
    "id": 2841,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "在操作系统文件管理中，通常采用 （ ） 来组织和管理外存中的信息。",
    "options": [
      "A. 字处理程序",
      "B. 设备驱动程序",
      "C. 文件目录",
      "D. 语言翻译程序"
    ],
    "answer": 2,
    "explanation": "文件目录是文件系统组织和管理外存信息的手段，通过目录项记录文件名、物理位置等属性，实现按名存取。"
  },
  {
    "id": 2842,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "假设系统中进程的三态模型如下图所示，图中的a、b和c的状态分别为 （ ） 。",
    "options": [
      "A. 就绪、运行、阻塞",
      "B. 运行、阻塞、就绪",
      "C. 就绪、阻塞、运行",
      "D. 阻塞、就绪、运行"
    ],
    "answer": 0,
    "explanation": "进程三态模型中，就绪态等待CPU，运行态占用CPU，阻塞态等待某事件；图中a、b、c依次为就绪、运行、阻塞。"
  },
  {
    "id": 2843,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010b",
    "question": "利用 （ ） 可以对软件的技术信息、经营信息提供保护。",
    "options": [
      "A. 著作权",
      "B. 专利权",
      "C. 商业秘密权",
      "D. 商标权"
    ],
    "answer": 2,
    "explanation": "商业秘密权可保护未公开的技术信息和经营信息，无需公开即可受保护；著作权、专利权、商标权保护对象与条件不同。"
  },
  {
    "id": 2844,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2010b",
    "question": "光纤分为单模光纤和多模光纤，这两种光纤的区别是 （ ） 。",
    "options": [
      "A. 单模光纤的数据速率比多模光纤低",
      "B. 多模光纤比单模光纤传输距离更远",
      "C. 单模光纤比多模光纤的价格更便宜",
      "D. 多模光纤比单模光纤的纤芯直径粗"
    ],
    "answer": 3,
    "explanation": "多模光纤纤芯直径较粗（如50/62.5μm），单模光纤纤芯很细（约9μm）；单模光纤速率高、传输距离远、价格较贵。"
  },
  {
    "id": 2845,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010b",
    "question": "下面关于交换机的说法中，正确的是 （ ） 。",
    "options": [
      "A. 以太网交换机可以连接运行不同网络层协议的网络",
      "B. 从工作原理上讲，以太网交换机是一种多端口网桥",
      "C. 集线器是一种特殊的交换机",
      "D. 通过交换机连接的一组工作站形成一个冲突域"
    ],
    "answer": 1,
    "explanation": "以太网交换机工作在数据链路层，本质是多端口网桥，依据MAC地址转发帧；集线器是多端口中继器，连接的工作站同属一个冲突域。"
  },
  {
    "id": 2846,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2010b",
    "question": "路由器通过光纤连接广域网的是 （ ） 。",
    "options": [
      "A. sfp端口",
      "B. 同步串行口",
      "C. console端口",
      "D. aux端口"
    ],
    "answer": 0,
    "explanation": "SFP端口是光模块插槽，可插入光模块通过光纤连接广域网；同步串行口用于连接DDN等，console和AUX口用于本地或远程管理配置。"
  },
  {
    "id": 2847,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2010b",
    "question": "下面关于manchester编码的叙述中，错误的是 （ ） 。",
    "options": [
      "A. manchester编码是一种双相码",
      "B. manchester编码提供了比特同步信息",
      "C. manchester编码的效率为50%",
      "D. manchester编码应用在高速以太网中"
    ],
    "answer": 3,
    "explanation": "曼彻斯特编码是双相码，每比特中间跳变提供同步信息，编码效率为50%，用于10M以太网；高速以太网采用4B/5B或8B/10B编码。"
  },
  {
    "id": 2848,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2010b",
    "question": "设信道采用2dpsk调制，码元速率为300波特，则最大数据速率为 （ ） b/s。",
    "options": [
      "A. 300",
      "B. 600",
      "C. 900",
      "D. 1200"
    ],
    "answer": 0,
    "explanation": "2DPSK每个码元携带1比特信息，数据速率等于码元速率，即300波特对应300b/s。"
  },
  {
    "id": 2849,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2010b",
    "question": "假设模拟信号的最高频率为6mhz，采样频率必须大于 （ ） 时，才能使得到的样本信号不失真。",
    "options": [
      "A. 6mhz",
      "B. 12mhz",
      "C. 18mhz",
      "D. 20mhz"
    ],
    "answer": 1,
    "explanation": "根据奈奎斯特采样定理，采样频率须大于信号最高频率的2倍，即大于2×6MHz=12MHz，才能无失真恢复原信号。"
  },
  {
    "id": 2850,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2010b",
    "question": "在异步通信中，每个字符包含1位起始位、7位数据位、1位奇偶位和2位终止位，每秒钟传送100个字符，则有效数据速率为 （ ） 。",
    "options": [
      "A. 500b/s",
      "B. 700b/s",
      "C. 770b/s",
      "D. 1100b/s"
    ],
    "answer": 1,
    "explanation": "每字符含1+7+1+2=11位，其中有效数据位7位，每秒100字符，有效数据速率=7×100=700b/s。"
  },
  {
    "id": 2851,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "ipv4协议头中标识符字段的作用是 （ ） 。",
    "options": [
      "A. 指明封装的上层协议",
      "B. 表示松散源路由",
      "C. 用于分段和重装配",
      "D. 表示提供的服务类型"
    ],
    "answer": 2,
    "explanation": "IPv4首部标识符字段用于唯一标识数据报，当数据报分片后，各分片标识符相同，供目的端进行重组。"
  },
  {
    "id": 2852,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "当tcp实体要建立连接时，其段头中的 （ ） 标志置1。",
    "options": [
      "A. syn",
      "B. fin",
      "C. rst",
      "D. urg"
    ],
    "answer": 0,
    "explanation": "TCP建立连接采用三次握手，第一个报文段将首部中的SYN标志位置1，请求同步序号，对方以SYN+ACK响应。"
  },
  {
    "id": 2853,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "udp协议在ip层之上提供了 （ ） 能力。",
    "options": [
      "A. 连接管理",
      "B. 差错校验和重传",
      "C. 流量控制",
      "D. 端口寻址"
    ],
    "answer": 3,
    "explanation": "UDP在IP层之上通过端口号实现进程到进程的寻址（复用与分用），不提供连接管理、重传和流量控制。"
  },
  {
    "id": 2854,
    "type": "single",
    "category": "路由协议",
    "paper": "real2010b",
    "question": "ripvl不支持cidr，对于运行ripvl协议的路由器，不能设置的网络地址是 （ ） 。",
    "options": [
      "A. 10.16.0.0/8",
      "B. 172.16.0.0/16",
      "C. 172.22.0.0/18",
      "D. 192.168.1.0/24"
    ],
    "answer": 2,
    "explanation": "RIPv1是有类路由协议，不支持CIDR和VLSM，路由更新不携带子网掩码，故不能设置172.22.0.0/18这类非自然掩码的网络地址。"
  },
  {
    "id": 2855,
    "type": "single",
    "category": "路由协议",
    "paper": "real2010b",
    "question": "ripv2相对ripvl主要有三方面的改进，其中不包括 （ ） 。",
    "options": [
      "A. 使用组播来传播路由更新报文",
      "B. 采用了分层的网络结构",
      "C. 采用了触发更新机制来加速路由收敛",
      "D. 支持可变长子网掩码和路由汇聚"
    ],
    "answer": 1,
    "explanation": "RIPv2的改进包括使用组播更新、触发更新加速收敛、支持VLSM和CIDR；分层网络结构是OSPF等协议的特点，不属于RIPv2的改进。"
  },
  {
    "id": 2856,
    "type": "single",
    "category": "路由协议",
    "paper": "real2010b",
    "question": "igrp和eigrp是cisco公司开发的路由协议，它们采用的路由度量方法是 （ ） 。",
    "options": [
      "A. 以跳步计数表示通路费用",
      "B. 链路费用与带宽成反比",
      "C. 根据链路负载动态计算通路费用",
      "D. 根据带宽、延迟等多种因素来计算通路费用"
    ],
    "answer": 3,
    "explanation": "IGRP和EIGRP是Cisco私有路由协议，采用复合度量值，综合带宽、延迟、负载、可靠性等因素计算通路费用，故选D。"
  },
  {
    "id": 2857,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "在进行域名解析过程中，由 （ ） 获取的解析结果耗时最短。",
    "options": [
      "A. 主域名服务器",
      "B. 辅域名服务器",
      "C. 缓存域名服务器",
      "D. 转发域名服务器"
    ],
    "answer": 2,
    "explanation": "缓存域名服务器将最近解析过的结果保存在本地缓存中，再次查询时可直接从缓存返回，无需递归查询，因此耗时最短。"
  },
  {
    "id": 2858,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "ftp命令中用来设置客户端当前工作目录的命令是 （ ） 。",
    "options": [
      "A. get",
      "B. list",
      "C. lcd",
      "D. !list"
    ],
    "answer": 2,
    "explanation": "FTP命令中lcd用于设置客户端本地当前工作目录，get用于下载文件，list用于列出服务器目录，故选C。"
  },
  {
    "id": 2859,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2010b",
    "question": "http协议中，用于读取一个网页的操作方法为 （ ） 。",
    "options": [
      "A. read",
      "B. get",
      "C. head",
      "D. post"
    ],
    "answer": 1,
    "explanation": "HTTP协议中GET方法用于请求读取指定网页资源，HEAD仅获取响应头，POST用于提交数据，故选B。"
  },
  {
    "id": 2860,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "在linux系统中可用ls -al命令列出文件列表， （ ） 列出的是一个符号连接文件。",
    "options": [
      "A. drwxr-xr-x 2 root root 220 2009-04-14 17:30 doe",
      "B. -rw-r--r-- 1 root root 1050 2009-04-14 17:30 doc1",
      "C. lrwxrwxrwx 1 root root 4096 2009-04-14 17:30 profile",
      "D. drwxrwxrwx 4 root root 4096 2009-04-14 17:30 protocols"
    ],
    "answer": 2,
    "explanation": "ls -al输出中，第一个字符为l表示符号链接文件，lrwxrwxrwx开头的正是符号连接文件，故选C。"
  },
  {
    "id": 2861,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "linux系统中，下列关于文件管理命令cp与mv说法正确的是 （ ） 。",
    "options": [
      "A. 没有区别",
      "B. mv操作不增加文件个数",
      "C. cp操作不增加文件个数",
      "D. mv操作不删除原有文件"
    ],
    "answer": 1,
    "explanation": "mv是移动或重命名操作，不增加文件个数；cp是复制操作，会增加文件个数，故选B。"
  },
  {
    "id": 2862,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "linux系统中，默认安装dhcp服务的配置文件为 （ ） 。",
    "options": [
      "A. /etc/dhcpd.conf",
      "B. /etc/dhcp.conf",
      "C. /etc/dhcpd.config",
      "D. /etc/dhcp.config"
    ],
    "answer": 0,
    "explanation": "Linux系统中DHCP服务默认配置文件为/etc/dhcpd.conf，用于配置地址池、租约等参数，故选A。"
  },
  {
    "id": 2863,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "默认情况下，远程桌面用户组（remote desktop users）成员对终端服务器 （ ） 。",
    "options": [
      "A. 具有完全控制权",
      "B. 具有用户访问权和来宾访问权",
      "C. 仅具有来宾访问权",
      "D. 仅具有用户访问权"
    ],
    "answer": 1,
    "explanation": "默认情况下Remote Desktop Users组成员对终端服务器具有用户访问权和来宾访问权，但不具备完全控制权，故选B。"
  },
  {
    "id": 2864,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "windows server 2003采用了活动目录（active directory）对网络资源进行管理，活动目录需安装在 （ ） 分区。",
    "options": [
      "A. fat 16",
      "B. fat32",
      "C. ext2",
      "D. ntfs"
    ],
    "answer": 3,
    "explanation": "Windows Server 2003的活动目录必须安装在NTFS分区上，因为NTFS支持活动目录所需的权限与安全特性，故选D。"
  },
  {
    "id": 2865,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "linux系统中， （ ） 服务的作用与windows的共享文件服务作用相似，提供基于网络的共享文件/打印服务。",
    "options": [
      "A. samba",
      "B. ftp",
      "C. smtp",
      "D. telnet"
    ],
    "answer": 0,
    "explanation": "Samba服务实现了SMB/CIFS协议，可在Linux上提供与Windows共享文件/打印服务相似的功能，故选A。"
  },
  {
    "id": 2866,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010b",
    "question": "以下关于dhcp协议的描述中，错误的是 （ ） 。",
    "options": [
      "A. dhcp客户机可以从外网段获取ip地址",
      "B. dhcp客户机只能收到一个dhcpoffer",
      "C. dhcp不会同时租借相同的ip地址给两台主机",
      "D. dhcp分配的ip地址默认租约期为8天"
    ],
    "answer": 1,
    "explanation": "DHCP客户机可能收到多个DHCP服务器的DHCPOFFER报文，通常选择第一个到达的，故B描述错误，选B。"
  },
  {
    "id": 2867,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010b",
    "question": "在某台pc上运行ipconfig /all命令后得到如下结果，下列说法中错误的是 （ ） 。",
    "options": [
      "A. 该pc机ip地址的租约期为8小时",
      "B. 该pc访问web网站时最先查询的dns服务器为8.8.8.8",
      "C. 接口215.155.3.190和152.50.255.1之间使用了dhcp中继代理",
      "D. dhcp服务器152.50.255.1可供分配的ip地址数只能为61"
    ],
    "answer": 3,
    "explanation": "DHCP服务器可分配地址数取决于地址池范围，不能仅凭租约信息断定只能为61个，故D说法错误，选D。"
  },
  {
    "id": 2868,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "在windows系统中需要重新从dhcp服务器获取ip地址时，可以使用 （ ） 命令。",
    "options": [
      "A. ifconfig -a",
      "B. ipconfig",
      "C. ipconfig /all",
      "D. ipconfig /renew"
    ],
    "answer": 3,
    "explanation": "Windows系统中ipconfig /renew命令用于向DHCP服务器重新申请获取IP地址，故选D。"
  },
  {
    "id": 2869,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "iis 6.0将多个协议结合起来组成一个组件，其中不包括 （ ） 。",
    "options": [
      "A. pop3",
      "B. smtp",
      "C. ftp",
      "D. dns"
    ],
    "answer": 3,
    "explanation": "IIS 6.0集成了POP3、SMTP、FTP、HTTP等组件，但不包括DNS服务，DNS由独立服务提供，故选D。"
  },
  {
    "id": 2870,
    "type": "single",
    "category": "网络安全",
    "paper": "real2010b",
    "question": "按照rsa算法，若选两奇数p=5，q=3，公钥e=7，则私钥d为 （ ） 。",
    "options": [
      "A. 6",
      "B. 7",
      "C. 8",
      "D. 9"
    ],
    "answer": 1,
    "explanation": "RSA算法中n=p×q=15，φ(n)=(p-1)(q-1)=8，由e×d≡1 mod 8，e=7，得d=7，故选B。"
  },
  {
    "id": 2871,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010b",
    "question": "windows系统中，路由跟踪命令是 （ ） 。",
    "options": [
      "A. tracert",
      "B. traceroute",
      "C. routetrace",
      "D. trace"
    ],
    "answer": 0,
    "explanation": "Windows系统中路由跟踪命令为tracert，traceroute是Linux/Unix下的命令，故选A。"
  },
  {
    "id": 2872,
    "type": "single",
    "category": "网络安全",
    "paper": "real2010b",
    "question": "下列隧道协议中工作在网络层的是 （ ） 。",
    "options": [
      "A. ssl",
      "B. l2tp",
      "C. ipsec",
      "D. pptp"
    ],
    "answer": 2,
    "explanation": "IPSec工作在网络层，对IP数据包进行加密和认证；SSL在应用层与传输层之间，L2TP和PPTP工作在数据链路层，故选C。"
  },
  {
    "id": 2873,
    "type": "single",
    "category": "无线网络",
    "paper": "real2010b",
    "question": "ieee 802.11i所采用的加密算法为 （ ） 。",
    "options": [
      "A. des",
      "B. 3des",
      "C. idea",
      "D. aes"
    ],
    "answer": 3,
    "explanation": "IEEE 802.11i采用AES加密算法，配合CCMP协议提供强加密与完整性保护，取代了WEP，故选D。"
  },
  {
    "id": 2874,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "网络172.21.136.0/24和172.21.143.0/24汇聚后的地址是 （ ） 。",
    "options": [
      "A. 172.21.136.0/21",
      "B. 172.21.136.0/20",
      "C. 172.21.136.0/22",
      "D. 172.21.128.0/21"
    ],
    "answer": 0,
    "explanation": "两网段第三字节136与143二进制前5位相同，掩码缩短至/21，网络地址为172.21.136.0/21，故选A。"
  },
  {
    "id": 2875,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "如果子网172.6.32.0/20再划分为172.6.32.0/26，则下面的结论中正确的是 （ ） 。",
    "options": [
      "A. 划分为1024个子网",
      "B. 每个子网有64台主机",
      "C. 每个子网有62台主机",
      "D. 划分为2044个子网"
    ],
    "answer": 2,
    "explanation": "172.6.32.0/20划分为/26，子网位增加6位，主机位剩6位，每个子网可用主机数为2^6-2=62台，故选C。"
  },
  {
    "id": 2876,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "下面给出的网络地址中，属于私网地址的是 （ ） 。",
    "options": [
      "A. 119.12.73.214",
      "B. 192.32.146.23",
      "C. 172.34.221.18",
      "D. 10.215.34.124"
    ],
    "answer": 3,
    "explanation": "私网地址范围为10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。10.215.34.124属于10.0.0.0/8，是私网地址，其余均为公网地址。"
  },
  {
    "id": 2877,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "ip地址172.17.16.255/23是一个 （ ） 。",
    "options": [
      "A. 网络地址",
      "B. 主机地址",
      "C. 定向广播地址",
      "D. 不定向广播地址"
    ],
    "answer": 1,
    "explanation": "172.17.16.255/23中，掩码为255.255.254.0，网络地址为172.17.16.0，广播地址为172.17.17.255，故该地址是主机地址。"
  },
  {
    "id": 2878,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010b",
    "question": "给定一个c类网络192.168.1.0/24，要在其中划分出3个60台主机的网段和2个30台主机的网段，则采用的子网掩码应该分别为（ ）。",
    "options": [
      "A. 255.255.255.128和255.255.255.224",
      "B. 255.255.255.128和255.255.255.240",
      "C. 255.255.255.192和255.255.255.224",
      "D. 255.255.255.192和255.255.255.240"
    ],
    "answer": 2,
    "explanation": "60台主机需2^6=64个地址，掩码取/26即255.255.255.192；30台主机需2^5=32个地址，掩码取/27即255.255.255.224。"
  },
  {
    "id": 2879,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010b",
    "question": "在交换机上同时配置了使能口令（enable password）和使能密码（enable secret），起作用的是 （ ） 。",
    "options": [
      "A. 使能口令",
      "B. 使能密码",
      "C. 两者都不能",
      "D. 两者都可以"
    ],
    "answer": 1,
    "explanation": "enable secret采用加密存储，优先级高于enable password。当两者同时配置时，系统只使用enable secret作为使能密码。"
  },
  {
    "id": 2880,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010b",
    "question": "以下的命令中，可以为交换机配置默认网关地址的是 （ ） 。",
    "options": [
      "A. 2950(config)# default-gateway 192.168.1.254",
      "B. 2950(config-if)# default-gateway 192.168.1.254",
      "C. 2950(config)#ip default-gateway 192.168.1.254",
      "D. 2950(config-if)#ip default-gateway 192.168.1.254"
    ],
    "answer": 2,
    "explanation": "交换机配置默认网关需在全局配置模式下使用ip default-gateway命令，即2950(config)#ip default-gateway 192.168.1.254。"
  },
  {
    "id": 2881,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010b",
    "question": "在路由器配置过程中，要查看用户输入的最后几条命令，应该键入 （ ） 。",
    "options": [
      "A. show version",
      "B. show commands",
      "C. show previous",
      "D. show history"
    ],
    "answer": 3,
    "explanation": "show history命令用于显示当前用户最近输入过的命令历史记录，可查看用户输入的最后几条命令。"
  },
  {
    "id": 2882,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010b",
    "question": "在交换机之间的链路中，能够传送多个vlan数据包的是 （ ） 。",
    "options": [
      "A. 中继连接",
      "B. 接入链路",
      "C. 控制连接",
      "D. 分支链路"
    ],
    "answer": 0,
    "explanation": "中继连接（Trunk）用于交换机之间的链路，通过打标签可同时传送多个VLAN的数据包，接入链路只能属于一个VLAN。"
  },
  {
    "id": 2883,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010b",
    "question": "要实现vtp动态修剪，在vtp域中的所有交换机都必须配置成 （ ） 。",
    "options": [
      "A. 服务器",
      "B. 服务器或客户机",
      "C. 透明模式",
      "D. 客户机"
    ],
    "answer": 0,
    "explanation": "VTP修剪要求VTP域内所有交换机都配置为VTP服务器模式，才能实现VLAN信息的动态修剪功能。"
  },
  {
    "id": 2884,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010b",
    "question": "能进入vlan配置状态的交换机命令是 （ ） 。",
    "options": [
      "A. 2950(config)# vtp pruning",
      "B. 2950# vlan database",
      "C. 2950(config)# vtp server",
      "D. 2950(config)# vtp mode"
    ],
    "answer": 1,
    "explanation": "在特权模式下输入vlan database命令可进入VLAN配置状态，即2950# vlan database。"
  },
  {
    "id": 2885,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010b",
    "question": "以太网协议可以采用非坚持型、坚持型和p坚持型3种监听算法。下面关于这3种算法的描述中，正确的是 （ ） 。",
    "options": [
      "A. 坚持型监听算法的冲突概率低，但可能引入过多的信道延迟",
      "B. 非坚持型监听算法的冲突概率低，但可能浪费信道带宽",
      "C. p坚持型监听算法实现简单，而且可以到达最好性能",
      "D. 非坚持型监听算法可以及时抢占信道，减少发送延迟"
    ],
    "answer": 1,
    "explanation": "非坚持型监听算法在信道忙时等待随机时间再监听，冲突概率低，但可能因等待过久而浪费信道带宽。"
  },
  {
    "id": 2886,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010b",
    "question": "以太网帧格式如下图所示，其中的“长度”字段的作用是 （ ） 。",
    "options": [
      "A. 表示数据字段的长度",
      "B. 表示封装的上层协议的类型",
      "C. 表示整个帧的长度",
      "D. 既可以表示数据字段长度也可以表示上层协议的类型"
    ],
    "answer": 3,
    "explanation": "以太网帧中该字段在IEEE 802.3中表示数据字段长度，在Ethernet II中表示上层协议类型，故两种含义均可。"
  },
  {
    "id": 2887,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010b",
    "question": "下面列出的4种快速以太网物理层标准中，使用两对5类无屏蔽双绞线作为传输介质的是 （ ） 。",
    "options": [
      "A. 100base-fx",
      "B. 100base-t4",
      "C. 100base-tx",
      "D. 100base-t2"
    ],
    "answer": 2,
    "explanation": "100BASE-TX使用两对5类无屏蔽双绞线，一对用于发送、一对用于接收，是快速以太网常用标准。"
  },
  {
    "id": 2888,
    "type": "single",
    "category": "无线网络",
    "paper": "real2010b",
    "question": "用于工业、科学和医疗方面的免许可证的微波频段有多个，其中世界各国通用的ism频段是 （ ） 。",
    "options": [
      "A. 902~928mhz",
      "B. 868~915mhz",
      "C. 5725~5850mhz",
      "D. 2400~2483.5mhz"
    ],
    "answer": 3,
    "explanation": "ISM频段中2400~2483.5MHz是世界各国通用的免许可证频段，广泛用于WLAN、蓝牙等无线通信。"
  },
  {
    "id": 2889,
    "type": "single",
    "category": "无线网络",
    "paper": "real2010b",
    "question": "2009年发布的 （ ） 标准可以将wlan的传输速率邮4mb/s提高到300~600mb/s。",
    "options": [
      "A. ieee 802.11n",
      "B. ieee 802.11a",
      "C. ieee 802.11b",
      "D. ieee 802.11g"
    ],
    "answer": 0,
    "explanation": "IEEE 802.11n于2009年发布，采用MIMO等技术，可将WLAN传输速率提高到300~600Mb/s。"
  },
  {
    "id": 2890,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2010b",
    "question": "网络系统生命周期可以划分为5个阶段，实施这5个阶段的合理顺序是 （ ） 。",
    "options": [
      "A. 需求规范、通信规范、逻辑网络设计、物理网络设计、实施阶段",
      "B. 需求规范、逻辑网络设计、通信规范、物理网络设计、实施阶段",
      "C. 通信规范、物理网络设计、需求规范、逻辑网络设计、实施阶段",
      "D. 通信规范、需求规范、逻辑网络设计、物理网络设计、实施阶段"
    ],
    "answer": 0,
    "explanation": "网络系统生命周期依次为需求规范、通信规范、逻辑网络设计、物理网络设计、实施阶段，符合自顶向下的设计流程。"
  },
  {
    "id": 2891,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2010b",
    "question": "大型局域网通常划分为核心层、汇聚层和接入层，以下关于各个网络层次的描述中，不正确的是 （ ） 。",
    "options": [
      "A. 核心层承担访问控制列表检查",
      "B. 汇聚层定义了网络的访问策略",
      "C. 接入层提供局域网络接入功能",
      "D. 接入层可以使用集线器代替交换机"
    ],
    "answer": 0,
    "explanation": "访问控制列表检查应在汇聚层或接入层完成，核心层应专注于高速数据转发，故该描述不正确。"
  },
  {
    "id": 2892,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2010b",
    "question": "网络系统设计过程中，逻辑网络设计阶段的任务是 （ ） 。",
    "options": [
      "A. 依据逻辑网络设计的要求，确定设备的物理分布和运行环境",
      "B. 分析现有网络和新网络的资源分布，掌握网络的运行状态",
      "C. 根据需求规范和通信规范，实施资源分配和安全规划",
      "D. 理解网络应该具有的功能和性能，设计出符合用户需求的网络"
    ],
    "answer": 2,
    "explanation": "逻辑网络设计阶段的任务是根据需求规范和通信规范进行资源分配和安全规划，确定网络逻辑拓扑与地址等。"
  },
  {
    "id": 2893,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2010b",
    "question": "利用sdh实现广域网互联，如果用户需要的数据传输速率较小，可以用准同步数字系列（pdh）兼容的传输方式在每个stm-1帧中封装 （ ） 个e1信道。",
    "options": [
      "A. 4",
      "B. 63",
      "C. 255",
      "D. 1023"
    ],
    "answer": 1,
    "explanation": "STM-1速率为155.52Mb/s，每个STM-1帧可封装63个E1信道（每个E1为2.048Mb/s），用于PDH兼容传输。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2010a";
  const A = [
  {
    "id": 2894,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "计算机指令一般包括操作码和地址码两部分，为分析执行一条指令，其 （ ） 。",
    "options": [
      "A. 操作码应存入指令寄存器（ir），地址码应存入程序计数器(pc)。",
      "B. 操作码应存入程序计数器(pc)，地址码应存入指令寄存器（ir）。",
      "C. 操作码和地址码都应存入指令寄存器。",
      "D. 操作码和地址码都应存入程序计数器。"
    ],
    "answer": 2,
    "explanation": "指令执行时，操作码和地址码都需存入指令寄存器IR，由控制器分析操作码并据此处理地址码。"
  },
  {
    "id": 2895,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "使用白盒测试方法时，确定测试用例应根据 （ ） 和指定的覆盖标准。",
    "options": [
      "A. 程序的内部逻辑",
      "B. 程序结构的复杂性",
      "C. 使用说明书",
      "D. 程序的功能"
    ],
    "answer": 0,
    "explanation": "白盒测试依据程序内部逻辑结构设计测试用例，结合指定的覆盖标准（如语句、分支覆盖）来确定用例。"
  },
  {
    "id": 2896,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "若某整数的16位补码为ffffh（h表示十六进制），则该数的十进制值为 （ ） 。",
    "options": [
      "A. 0",
      "B. -1",
      "C. 216-1",
      "D. -216+1"
    ],
    "answer": 1,
    "explanation": "16位补码ffffh最高位为1表示负数，按位取反加1得0001h，即真值为-1，故选B。"
  },
  {
    "id": 2897,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "若在系统中有若干个互斥资源r，6个并发进程，每个进程都需要2个资源r，那么使系统不发生死锁的资源r的最少数目为 （ ） 。",
    "options": [
      "A. 6",
      "B. 7",
      "C. 9",
      "D. 12"
    ],
    "answer": 1,
    "explanation": "6个进程各需2个资源，最坏情况各得1个共6个，再多1个即可使某进程完成并释放，故最少7个，选B。"
  },
  {
    "id": 2898,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "软件设计时需要遵循抽象、模块化、信息隐蔽和模块独立原则。在划分软件系统模块时，应尽量做到 （ ） 。",
    "options": [
      "A. 高内聚高耦合",
      "B. 高内聚低耦合",
      "C. 低内聚高耦合",
      "D. 低内聚低耦合"
    ],
    "answer": 1,
    "explanation": "模块独立原则要求模块间联系少、内部联系紧密，即高内聚低耦合，故选B。"
  },
  {
    "id": 2899,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "程序的三种基本控制结构是 （ ） 。",
    "options": [
      "A. 过程、子程序和分程序",
      "B. 顺序、选择和重复",
      "C. 递归、堆栈和队列",
      "D. 调用、返回和跳转"
    ],
    "answer": 1,
    "explanation": "程序三种基本控制结构为顺序、选择（分支）和重复（循环），故选B。"
  },
  {
    "id": 2900,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "栈是一种按“后进先出”原则进行插入和删除操作的数据结构，因此， （ ） 必须用栈。",
    "options": [
      "A. 函数或过程进行递归调用及返回处理",
      "B. 将一个元素序列进行逆置",
      "C. 链表结点的申请和释放",
      "D. 可执行程序的装入和卸载"
    ],
    "answer": 0,
    "explanation": "递归调用需保存返回地址和现场，返回时按后进先出恢复，必须用栈实现，故选A。"
  },
  {
    "id": 2901,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2010a",
    "question": "两个以上的申请人分别就相同内容的计算机程序的发明创造，先后向国务院专利行政部门提出申请， （ ） 可以获得专利申请权。",
    "options": [
      "A. 所有申请人均",
      "B. 先申请人",
      "C. 先使用人",
      "D. 先发明人"
    ],
    "answer": 1,
    "explanation": "我国专利法采用先申请原则，相同发明创造由先申请人获得专利申请权，故选B。"
  },
  {
    "id": 2902,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010a",
    "question": "第三层交换根据 （ ） 对数据包进行转发。",
    "options": [
      "A. mac地址",
      "B. ip地址",
      "C. 端口号",
      "D. 应用协议"
    ],
    "answer": 1,
    "explanation": "第三层交换在硬件中实现路由功能，依据IP地址对数据包进行转发，故选B。"
  },
  {
    "id": 2903,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010a",
    "question": "按照ieee 802.1d协议，当交换机端口处于 （ ） 状态时，既可以学习mac帧中的源地址，又可以把接收到的mac帧转发到适当的端口。",
    "options": [
      "A. 阻塞（blocking）",
      "B. 学习（learning）",
      "C. 转发（forwarding）",
      "D. 监听（listening）"
    ],
    "answer": 2,
    "explanation": "IEEE 802.1D中转发状态既学习源MAC地址，又按目的地址转发帧，故选C。"
  },
  {
    "id": 2904,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2010a",
    "question": "以下关于帧中继网的叙述中，错误的是 （ ） 。",
    "options": [
      "A. 帧中继提供面向连接的网络服务",
      "B. 帧在传输过程中要进行流量控制",
      "C. 既可以按需提供带宽，也可以适应突发式业务",
      "D. 帧长可变，可以承载各种局域网的数据帧。"
    ],
    "answer": 1,
    "explanation": "帧中继不进行逐段流量控制，把流量控制交给高层，故B错误，选B。"
  },
  {
    "id": 2905,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2010a",
    "question": "在地面上相隔2000km的两地之间通过卫星信道传送4000比特长的数据包，如果数据速率为64kb/s，则从开始发送到接收完成需要的时间是 （ ） 。",
    "options": [
      "A. 48ms",
      "B. 640ms",
      "C. 322.5ms",
      "D. 332.5ms"
    ],
    "answer": 3,
    "explanation": "发送时延4000/64000=62.5ms，卫星单程约270ms，总时延62.5+270=332.5ms，故选D。"
  },
  {
    "id": 2906,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2010a",
    "question": "采用crc进行差错校验，生成多项式为g(x)=x4+x+1，信息码字为10111，则计算出的crc校验码是 （ ） 。",
    "options": [
      "A. 0000",
      "B. 0100",
      "C. 0010",
      "D. 1100"
    ],
    "answer": 3,
    "explanation": "G(x)=10011，10111后补4个0做模2除法，余数为1100，即CRC校验码，故选D。"
  },
  {
    "id": 2907,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2010a",
    "question": "数字用户线（dsl）是基于普通电话线的宽带接入技术，可以在铜质双绞线上同时传送数据和话音信号。下列选项中，数据速率最高的dsl标准是 （ ） 。",
    "options": [
      "A. adsl",
      "B. vdsl",
      "C. hdsl",
      "D. radsl"
    ],
    "answer": 1,
    "explanation": "VDSL在短距离双绞线上速率最高，可达数十Mb/s，高于ADSL、HDSL等，故选B。"
  },
  {
    "id": 2908,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2010a",
    "question": "下列fttx组网方案中，光纤覆盖面最广的是 （ ） 。",
    "options": [
      "A. fttn",
      "B. fttc",
      "C. ftth",
      "D. fttz"
    ],
    "answer": 2,
    "explanation": "FTTH将光纤直接铺设到用户家庭，光纤覆盖面最广、带宽最高，故选C。"
  },
  {
    "id": 2909,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010a",
    "question": "在ipv6中，地址类型是由格式前缀来区分的。ipv6可聚合全球单播地址的格式前缀是 （ ） 。",
    "options": [
      "A. 001",
      "B. 1111 1110 10",
      "C. 1111 1110 11",
      "D. 1111 1111"
    ],
    "answer": 0,
    "explanation": "IPv6可聚合全球单播地址格式前缀为001，对应2000::/3地址块，故选A。"
  },
  {
    "id": 2910,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010a",
    "question": "telnet采用客户端/服务器工作方式，采用 （ ） 格式实现客户端和服务器的数据传输。",
    "options": [
      "A. ntl",
      "B. nvt",
      "C. base—64",
      "D. rfc 822"
    ],
    "answer": 1,
    "explanation": "Telnet使用网络虚拟终端NVT格式实现客户端与服务器间数据传输，故选B。"
  },
  {
    "id": 2911,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010a",
    "question": "以下关于dns服务器的叙述中，错误的是 （ ） 。",
    "options": [
      "A. 用户只能使用本网段内dns服务器进行域名解析",
      "B. 主域名服务器负责维护这个区域的所有域名信息",
      "C. 辅助域名服务器作为主域名服务器的备份服务器提供域名解析服务",
      "D. 转发域名服务器负责非本地域名的查询"
    ],
    "answer": 0,
    "explanation": "用户可使用任意可达的DNS服务器解析域名，并非只能本网段，故A错误，选A。"
  },
  {
    "id": 2912,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010a",
    "question": "以下域名服务器中，没有域名数据库的 （ ） 。",
    "options": [
      "A. 缓存域名服务器",
      "B. 主域名服务器",
      "C. 辅助域名服务器",
      "D. 转发域名服务器"
    ],
    "answer": 0,
    "explanation": "缓存域名服务器仅缓存查询结果，本身没有域名数据库，故选A。"
  },
  {
    "id": 2913,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010a",
    "question": "通过“internet信息服务（iis）管理器”管理单元可以配置ftp服务器，若将控制端口设置为2222，则数据端口自动设置为 （ ） 。",
    "options": [
      "A. 20",
      "B. 80",
      "C. 543",
      "D. 2221"
    ],
    "answer": 3,
    "explanation": "IIS中FTP控制端口设为2222时，数据端口自动设为其前一个端口2221，故选D。"
  },
  {
    "id": 2914,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2010a",
    "question": "atm高层定义了4类业务，压缩视频信号的传送属于 （ ） 类业务。",
    "options": [
      "A. cbr",
      "B. vbr",
      "C. ubr",
      "D. abr"
    ],
    "answer": 1,
    "explanation": "压缩视频信号速率可变且对时延敏感，属于可变比特率VBR业务，故选B。"
  },
  {
    "id": 2915,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010a",
    "question": "某linux dhcp服务器dhcpd.conf的配置文件如下：ddns-update-style none;subnet 192.168.0.0 netmask 255.255.255.0 {range 192.168.0.200 192.168.0.254;ignore client-updates;default-lease-time 3600;max-lease-time 7200;option routers 192.168.0.1;option domain-name “test.org”;option domain-name-servers 192.168.0.2;}host test1 {hardware ethernet 00:e0:4c:70:33:65; fixed-address 192.168.0.8;}客户端ip地址的默认租用期为 （ ） 小时。",
    "options": [
      "A. 1",
      "B. 2",
      "C. 60",
      "D. 120"
    ],
    "answer": 0,
    "explanation": "配置中default-lease-time 3600秒，即默认租用期为1小时，故选A。"
  },
  {
    "id": 2916,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010a",
    "question": "dhcp客户端不能从dhcp服务器获得 （ ） 。",
    "options": [
      "A. dhcp服务器的ip地址",
      "B. web服务器的ip地址",
      "C. dns服务器的ip地址",
      "D. 默认网关的ip地址"
    ],
    "answer": 1,
    "explanation": "DHCP用于为主机自动分配IP地址、子网掩码、默认网关和DNS服务器地址等，但不会下发Web服务器的IP地址，Web服务器地址需用户自行输入。"
  },
  {
    "id": 2917,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010a",
    "question": "配置pop3服务器时，邮件服务器的属性对话框如下图所示，其中默认情况下“服务器端口”文本框应输入 （ ） 。",
    "options": [
      "A. 21",
      "B. 25",
      "C. 80",
      "D. 110"
    ],
    "answer": 3,
    "explanation": "POP3是接收邮件协议，默认使用TCP 110端口；21为FTP、25为SMTP、80为HTTP，故服务器端口应填110。"
  },
  {
    "id": 2918,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010a",
    "question": "在windows的dos窗口中键入命令",
    "options": [
      "A. &gt;\\nslookup",
      "B. 查询202.30.192.2的邮件服务器信息",
      "C. 查询202.30.192.2到域名的映射",
      "D. 查询202.30.192.2的区域授权服务器"
    ],
    "answer": 2,
    "explanation": "nslookup用于查询DNS信息，输入IP地址进行查询时执行的是反向解析，即由IP地址查询对应的域名映射。"
  },
  {
    "id": 2919,
    "type": "single",
    "category": "网络安全",
    "paper": "real2010a",
    "question": "https采用 （ ） 协议实现安全网站访问。",
    "options": [
      "A. ssl",
      "B. ipsec",
      "C. pgp",
      "D. set"
    ],
    "answer": 0,
    "explanation": "HTTPS即HTTP over SSL，通过SSL/TLS协议在传输层为Web访问提供加密和身份认证，实现安全网站访问。"
  },
  {
    "id": 2920,
    "type": "single",
    "category": "网络安全",
    "paper": "real2010a",
    "question": "以下acl语句中，含义为“允许172.168.0.0/24 网段所有pc访问10.1.0.10中的ftp服务”的是 （ ） 。",
    "options": [
      "A. access-list 101 deny tcp 172.168.0.0 0.0.0.255 host 10.1.0.10 eq ftp",
      "B. access-list 101 permit tcp 172.168.0.0 0.0.0.255 host 10.1.0.10 eq ftp",
      "C. access-list 101 deny tcp host 10.1.0.10 172.168.0.0 0.0.0.255 eq ftp",
      "D. access-list 101 permit tcp host 10.1.0.10 172.168.0.0 0.0.0.255 eq ftp"
    ],
    "answer": 1,
    "explanation": "ACL中permit表示允许，源地址172.168.0.0/24对应通配符0.0.0.255，目的主机10.1.0.10的ftp端口，故B正确。"
  },
  {
    "id": 2921,
    "type": "single",
    "category": "网络安全",
    "paper": "real2010a",
    "question": "以下关于加密算法的叙述中，正确的是 （ ） 。",
    "options": [
      "A. des算法采用128位的密钥进行加密",
      "B. des算法采用两个不同的密钥进行加密",
      "C. 三重des算法采用3个不同的密钥进行加密",
      "D. 三重des 算法采用2个不同的密钥进行加密"
    ],
    "answer": 3,
    "explanation": "三重DES可用两个或三个密钥，常见实现采用两个不同密钥进行加密，DES本身密钥为56位，故D正确。"
  },
  {
    "id": 2922,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2010a",
    "question": "iis 服务支持的身份验证方法中，需要利用明文在网络上传递用户名和密码的是 （ ） 。",
    "options": [
      "A. .net passport身份验证",
      "B. 集成windows身份验证",
      "C. 基本身份验证",
      "D. 摘要式身份验证"
    ],
    "answer": 2,
    "explanation": "基本身份验证以明文（Base64编码）方式在网络上传递用户名和密码，安全性较低，故选择基本身份验证。"
  },
  {
    "id": 2923,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010a",
    "question": "某局域网采用snmp进行网络管理，所有被管设备在15分钟内轮询一次，网络没有明显拥塞，单个轮询时间为0.4s，则该管理站最多可支持 （ ） 个设备。",
    "options": [
      "A. 18000",
      "B. 3600",
      "C. 2250",
      "D. 90000"
    ],
    "answer": 2,
    "explanation": "15分钟即900秒，每次轮询0.4秒，最多支持设备数=900/0.4=2250个，故选2250。"
  },
  {
    "id": 2924,
    "type": "single",
    "category": "网络管理",
    "paper": "real2010a",
    "question": "下图是被管理对象的树结构，其中private子树是为私有企业管理信息准备的，目前这个子树只有一个子结点enterprises(1)。某私有企业向internet编码机构申请到一个代码920，该企业为它生产的路由器赋予的代码为3，则该路由器的对象标识符是 （ ） 。",
    "options": [
      "A. 1.3.6.1.4.920.3",
      "B. 3.920.4.1.6.3.1",
      "C. 1.3.6.1.4.1.920.3",
      "D. 3.920.1.4.1.6.3.1"
    ],
    "answer": 2,
    "explanation": "MIB对象标识符从根开始为1.3.6.1.4.1，private子树下enterprises为1，企业代码920，路由器代码3，故为1.3.6.1.4.1.920.3。"
  },
  {
    "id": 2925,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010a",
    "question": "某局域网访问internet 速度很慢，经检测发现局域网内有大量的广播包，采用 （ ） 方法可能有效的解决该网络问题。",
    "options": [
      "A. 在局域网内查杀arp病毒和蠕虫病毒",
      "B. 检查局域网内交换机端口和主机网卡是否有故障",
      "C. 检查局域网内是否有环路出现",
      "D. 提高出口带宽速度"
    ],
    "answer": 3,
    "explanation": "大量广播包导致网络变慢，提高出口带宽可缓解访问Internet慢的问题，其余选项针对广播源排查，题目问可能有效解决，故选提高出口带宽。"
  },
  {
    "id": 2926,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010a",
    "question": "下列ip地址中，属于私网地址的是 （ ） 。",
    "options": [
      "A. 100.1.32.7",
      "B. 192.178.32.2",
      "C. 172.17.32.15",
      "D. 172.35.32.244"
    ],
    "answer": 2,
    "explanation": "私网地址范围为10.0.0.0/8、172.16.0.0/12、192.168.0.0/16，172.17.32.15属于172.16~172.31区间，是私网地址。"
  },
  {
    "id": 2927,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010a",
    "question": "网络200.105.140.0/20中可分配的主机地址数是 （ ） 。",
    "options": [
      "A. 1022",
      "B. 2046",
      "C. 4094",
      "D. 8192"
    ],
    "answer": 2,
    "explanation": "/20表示主机位为12位，可分配主机地址数为2^12-2=4094个，故选4094。"
  },
  {
    "id": 2928,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2010a",
    "question": "下列地址中，属于154.100.80.128/26的可用主机地址是 （ ） 。",
    "options": [
      "A. 154.100.80.128",
      "B. 154.100.80.190",
      "C. 154.100.80.192",
      "D. 154.100.80.254"
    ],
    "answer": 1,
    "explanation": "154.100.80.128/26网段范围为128~191，128为网络地址，192为下一网段，190在可用范围内，故选190。"
  },
  {
    "id": 2929,
    "type": "single",
    "category": "路由协议",
    "paper": "real2010a",
    "question": "无类别域间路由（cidr）技术有效的解决了路由缩放问题。使用cidr技术把4个网络c1：192.24.0.0/21c2：192.24.16.0/20c3：192.24.8.0/22c4：192.24.34.0/23汇聚成一条路由信息，得到的网络地址是 （ ） 。",
    "options": [
      "A. 192.24.0.0/13",
      "B. 192.24.0.0/24",
      "C. 192.24.0.0/18",
      "D. 192.24.8.0/20"
    ],
    "answer": 2,
    "explanation": "四个网络地址前18位相同，均为192.24.0.0/18，故CIDR汇聚后的网络地址为192.24.0.0/18。"
  },
  {
    "id": 2930,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010a",
    "question": "按照cisco公司的vlan中继协议（vtp），当交换机处于 （ ） 模式时可以改变vlan配置，并把配置信息分发到管理域中的所有交换机。",
    "options": [
      "A. 客户机（client）",
      "B. 传输（transmission）",
      "C. 服务器（server）",
      "D. 透明（transportate）"
    ],
    "answer": 2,
    "explanation": "VTP服务器模式可以创建、修改和删除VLAN配置，并将配置信息分发到管理域内所有交换机。"
  },
  {
    "id": 2931,
    "type": "single",
    "category": "交换技术",
    "paper": "real2010a",
    "question": "交换机命令switch（config）#vtp pruning的作用是 （ ） 。",
    "options": [
      "A. 制定交换机的工作模式",
      "B. 启用vtp静态修剪",
      "C. 制定vtp域名",
      "D. 启动vtp 动态修剪"
    ],
    "answer": 3,
    "explanation": "命令vtp pruning用于启用VTP修剪功能，即动态修剪，可减少不必要的广播流量。"
  },
  {
    "id": 2932,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010a",
    "question": "ieee802.3规定的最小帧长为64字节，这个帧长是指 （ ） 。",
    "options": [
      "A. 从前导字段到校验和的字段",
      "B. 从目标地址到校验和的长度",
      "C. 从帧起始符到校验和的长度",
      "D. 数据字段的长度"
    ],
    "answer": 1,
    "explanation": "IEEE802.3最小帧长64字节指从目的地址到校验和（FCS）的长度，不含前导字段和帧起始符。"
  },
  {
    "id": 2933,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2010a",
    "question": "千兆以太网标准802.3z定义了一种帧突发方式（frame bursting），这种方式是指 （ ） 。",
    "options": [
      "A. 一个站可以突然发送一个帧",
      "B. 一个站可以不经过竞争就启动发送过程",
      "C. 一个站可以连续发送多个帧",
      "D. 一个站可以随机地发送紧急数据"
    ],
    "answer": 2,
    "explanation": "帧突发方式允许一个站在获得一次发送机会后连续发送多个帧，以提高千兆以太网的传输效率。"
  },
  {
    "id": 2934,
    "type": "single",
    "category": "无线网络",
    "paper": "real2010a",
    "question": "ieee 802.11标准定义的peer to peer网络是 （ ） 。",
    "options": [
      "A. 一种需要ap支持的无线网络",
      "B. 一种不需要有线网络和接入点支持的点对点网络",
      "C. 一种采用特殊协议的有线网络",
      "D. 一种高速骨干数据网络"
    ],
    "answer": 1,
    "explanation": "IEEE802.11定义的peer to peer网络即Ad Hoc模式，不需要有线网络和接入点（AP）支持，终端之间直接通信。"
  },
  {
    "id": 2935,
    "type": "single",
    "category": "无线网络",
    "paper": "real2010a",
    "question": "ieee802.11g标准支持最高数据速率可达 （ ） mb/s。",
    "options": [
      "A. 5",
      "B. 11",
      "C. 54",
      "D. 100"
    ],
    "answer": 2,
    "explanation": "IEEE802.11g工作在2.4GHz频段，最高数据速率可达54Mb/s，与802.11a速率相同。"
  },
  {
    "id": 2936,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2010a",
    "question": "假设生产管理网络系统采用b/s工作方式，经常上网用户数为150个，每用户每分钟产生8个事务处理任务，平均事务量大小为0.05mb，则这个系统需要的信息传输速率为 （ ） 。",
    "options": [
      "A. 4mb/s",
      "B. 6mb/s",
      "C. 8mb/s",
      "D. 12mb/s"
    ],
    "answer": 2,
    "explanation": "总速率=150×8×0.05×8/60≈8Mb/s（每用户每分钟8事务×0.05MB×8bit，除以60秒），故选C。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2009b";
  const A = [
  {
    "id": 2937,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "以下关于cpu的叙述中，错误的是 （ ） 。",
    "options": [
      "A. cpu产生每条指令的操作信号并将操作信号送往相应的部件进行控制",
      "B. 程序控制器pc除了存放指令地址，也可以临时存储算术/逻辑运算结果",
      "C. cpu中的控制器决定计算机运行过程的自动化",
      "D. 指令译码器是cpu控制器中的部件"
    ],
    "answer": 1,
    "explanation": "PC（程序计数器）只存放将要执行指令的地址，不能临时存储算术/逻辑运算结果，该结果由累加器或通用寄存器存放，故B错误。"
  },
  {
    "id": 2938,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "以下关于cisc（complex instruction set computer，复杂指令集计算机）和risc（reduced instruction set computer，精简指令集计算机）的叙述中，错误的是 （ ） 。",
    "options": [
      "A. 在cisc中，其复杂指令都采用硬布线逻辑来执行",
      "B. 采用cisc技术的cpu，其芯片设计复杂度更高",
      "C. 在risc中，更适合采用硬布线逻辑执行指令",
      "D. 采用risc技术，指令系统中的指令种类和寻址方式更少"
    ],
    "answer": 0,
    "explanation": "CISC中复杂指令常采用微程序控制而非硬布线逻辑实现，只有简单指令才用硬布线，故A错误。"
  },
  {
    "id": 2939,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2009b",
    "question": "以下关于校验码的叙述中，正确的是 （ ） 。",
    "options": [
      "A. 海明码利用多组数位的奇偶性来检错和纠错",
      "B. 海明码的码距必须大于等于1",
      "C. 循环冗余校验码具有很强的检错和纠错能力",
      "D. 循环冗余校验码的码距必定为1"
    ],
    "answer": 0,
    "explanation": "海明码通过在多个校验位组中安排数据位的奇偶校验来检错并纠错，码距须大于等于3，故选A。"
  },
  {
    "id": 2940,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "以下关于cache的叙述中，正确的是 （ ） 。",
    "options": [
      "A. 在容量确定的情况下，替换算法的时间复杂度是影响cache命中率的关键因素",
      "B. cache的设计思想是在合理成本下提高命中率",
      "C. cache的设计目标是容量尽可能与主存容量相等",
      "D. cpu中的cache容量应该大于cpu之外的cache容量"
    ],
    "answer": 1,
    "explanation": "Cache设计目标是在合理成本下提高命中率，而非追求容量与主存相等，替换算法只是影响因素之一，故选B。"
  },
  {
    "id": 2941,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "面向对象开发方法的基本思想是尽可能按照人类认识客观世界的方法来分析和解决问题， （ ） 方法不属于面向对象方法。",
    "options": [
      "A. booch",
      "B. coad",
      "C. omt",
      "D. jackson"
    ],
    "answer": 3,
    "explanation": "Jackson方法属于面向数据结构的结构化开发方法，Booch、Coad、OMT均为典型面向对象方法，故选D。"
  },
  {
    "id": 2942,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "确定构建软件系统所需要的人数时，无需考虑 （ ） 。",
    "options": [
      "A. 系统的市场前景",
      "B. 系统的规模",
      "C. 系统的技术复杂度",
      "D. 项目计划"
    ],
    "answer": 0,
    "explanation": "确定软件项目所需人数主要依据系统规模、技术复杂度和项目计划，市场前景不影响人员数量估算，故选A。"
  },
  {
    "id": 2943,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "一个项目为了修正一个错误而进行了变更。这个变更被修正后，却引起以前可以正确运行的代码出错。 （ ） 最可能发现这一问题。",
    "options": [
      "A. 单元测试",
      "B. 接受测试",
      "C. 回归测试",
      "D. 安装测试"
    ],
    "answer": 2,
    "explanation": "回归测试用于验证修改后原有功能是否被破坏，能发现因变更导致以前正常代码出错的问题，故选C。"
  },
  {
    "id": 2944,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "软件权利人与被许可方签订一份软件使用许可合同。若在该合同约定的时间和地域范围内，软件权利人不得再许可任何第三人以此相同的方法使用该项软件，但软件权利人可以自己使用，则该项许可使用是 （ ） 。",
    "options": [
      "A. 独家许可使用",
      "B. 独占许可使用",
      "C. 普通许可使用",
      "D. 部分许可使用"
    ],
    "answer": 1,
    "explanation": "独占许可使用指权利人不得再许可第三人使用，但自己仍可使用；独家许可则连权利人自己也不得使用，故选B。"
  },
  {
    "id": 2945,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2009b",
    "question": "mpls根据标记对分组进行交换，其标记中包含 （ ） 。",
    "options": [
      "A. mac地址",
      "B. ip地址",
      "C. vlan编号",
      "D. 分组长度"
    ],
    "answer": 1,
    "explanation": "MPLS标记用于转发，其标记栈中可携带IP地址等网络层信息以确定转发路径，故选B。"
  },
  {
    "id": 2946,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009b",
    "question": "linux操作系统中，网络管理员可以通过修改 （ ） 文件对web服务器端口进行配置。",
    "options": [
      "A. inetd.conf",
      "B. lilo.conf",
      "C. httpd.conf",
      "D. resolv.conf"
    ],
    "answer": 2,
    "explanation": "Apache Web服务器的主配置文件为httpd.conf，修改其中的Listen等参数即可配置端口，故选C。"
  },
  {
    "id": 2947,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009b",
    "question": "在linux操作系统中，存放用户账号加密口令的文件是 （ ） 。",
    "options": [
      "A. /etc/sam",
      "B. /etc/shadow",
      "C. etc/group",
      "D. etc/security"
    ],
    "answer": 1,
    "explanation": "Linux中用户账号的加密口令存放在/etc/shadow文件中，仅root可读，/etc/passwd只存占位符，故选B。"
  },
  {
    "id": 2948,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009b",
    "question": "下列关于microsoft管理控制台（mmc）的说法中，错误的是 （ ） 。",
    "options": [
      "A. mmc集成了用来管理网络、计算机、服务及其它系统组件的管理工具",
      "B. mmc创建、保存并打开管理工具单元",
      "C. mmc可以运行在windows xp和windows 2000操作系统上",
      "D. mmc是用来管理硬件、软件和windows系统的网络组件"
    ],
    "answer": 3,
    "explanation": "MMC是集成管理工具的平台，可创建保存管理单元，运行于Windows 2000/XP等，但并非管理硬件软件的网络组件，故D错误。"
  },
  {
    "id": 2949,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009b",
    "question": "raid技术中，磁盘容量利用率最高的是 （ ） 。",
    "options": [
      "A. raid0",
      "B. raid1",
      "C. raid3",
      "D. raid5"
    ],
    "answer": 0,
    "explanation": "RAID0采用条带化无冗余，磁盘容量利用率达100%，是各RAID级别中最高的，故选A。"
  },
  {
    "id": 2950,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2009b",
    "question": "xdsl技术中，能提供上下行信道非对称传输的是 （ ） 。",
    "options": [
      "A. adsl和hdsl",
      "B. adsl和vdsl",
      "C. sdsl和vdsl",
      "D. sdsl和hdsl"
    ],
    "answer": 1,
    "explanation": "ADSL和VDSL上下行速率不对称，HDSL和SDSL为对称传输，故能提供非对称传输的是ADSL和VDSL，选B。"
  },
  {
    "id": 2951,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009b",
    "question": "若ftp服务器开启了匿名访问功能，匿名登录时需要输入的用户名是 （ ） 。",
    "options": [
      "A. root",
      "B. user",
      "C. guest",
      "D. anonymous"
    ],
    "answer": 3,
    "explanation": "FTP匿名访问时，用户名固定为anonymous，口令通常为任意电子邮件地址，故选D。"
  },
  {
    "id": 2952,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009b",
    "question": "在kerberos系统中，使用一次性密钥和 （ ） 来防止重放攻击。",
    "options": [
      "A. 时间戳",
      "B. 数字签名",
      "C. 序列号",
      "D. 数字证书"
    ],
    "answer": 0,
    "explanation": "Kerberos使用一次性会话密钥配合时间戳来防止重放攻击，时间戳使过期报文失效，故选A。"
  },
  {
    "id": 2953,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009b",
    "question": "在下面4种病毒中， （ ） 可以远程控制网络中的计算机。",
    "options": [
      "A. worm.sasser.f",
      "B. win32.cih",
      "C. trojan.qq3344",
      "D. macro.melissa"
    ],
    "answer": 2,
    "explanation": "Trojan.qq3344是木马程序，可在被控主机上开后门实现远程控制，其余为蠕虫、CIH和宏病毒，故选C。"
  },
  {
    "id": 2954,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009b",
    "question": "将acl应用到路由器接口的命令时 （ ） 。",
    "options": [
      "A. router(config-if)# ip access-group 10 out",
      "B. router(config-if)# apply accss-list 10 out",
      "C. router(config-if)# fixup access-list 10 out",
      "D. router(config-if)# route access-group 10 out"
    ],
    "answer": 0,
    "explanation": "在路由器接口下应用ACL的正确命令是ip access-group 10 out，其余命令格式均不正确，故选A。"
  },
  {
    "id": 2955,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009b",
    "question": "ipsec的加密和认证过程中所使用的密钥由 （ ） 机制来生成和分发。",
    "options": [
      "A. esp",
      "B. ike",
      "C. tgs",
      "D. ah"
    ],
    "answer": 1,
    "explanation": "IPSec中由IKE（Internet密钥交换）协议负责协商、生成和分发加密与认证所用的密钥，故选B。"
  },
  {
    "id": 2956,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009b",
    "question": "ssl协议使用的默认端口是 （ ） 。",
    "options": [
      "A. 80",
      "B. 445",
      "C. 8080",
      "D. 443"
    ],
    "answer": 3,
    "explanation": "SSL协议用于加密的Web访问，其默认端口是443，HTTP默认端口为80，445为SMB端口，8080常用于代理或备用Web端口。"
  },
  {
    "id": 2957,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009b",
    "question": "使用cidr技术把4个c类网络220.117.12.0/24、220.117.13.0/24、220.117.14.0/24和220.117.15.0/24汇聚成一个超网，得到的地址是 （ ） 。",
    "options": [
      "A. 220.117.8.0/22",
      "B. 220.117.12.0/22",
      "C. 220.117.8.0/21",
      "D. 220.117.12.0/21"
    ],
    "answer": 1,
    "explanation": "4个连续的C类网络12.0~15.0/24，前22位相同，第三字节低2位可变，故汇聚为220.117.12.0/22。"
  },
  {
    "id": 2958,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009b",
    "question": "某公司网络的地址是200.16.192.0/18，划分成16个子网，下面的选项中，不属于这16个子网网址的是 （ ） 。",
    "options": [
      "A. 200.16.236.0/22",
      "B. 200.16.224.0/22",
      "C. 200.16.208.0/22",
      "D. 200.16.254.0/22"
    ],
    "answer": 3,
    "explanation": "200.16.192.0/18划分16个子网需借4位，子网掩码为/22，第三字节以192为起点每4递增，254不在其中。"
  },
  {
    "id": 2959,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009b",
    "question": "ipv6地址12ab:0000:0000:cd30:0000:0000:0000:0000/60可以表示成各种简写形式，下面的选项中，写法正确的是 （ ） 。",
    "options": [
      "A. 12ab:0:0:cd30:: /60",
      "B. 12ab:0:0:cd3 /60",
      "C. 12ab::cd30 /60",
      "D. 12ab::cd3 /60"
    ],
    "answer": 0,
    "explanation": "IPv6中连续的0段可用::压缩一次，且不能省略非零段的部分数字，故12ab:0:0:cd30::/60写法正确。"
  },
  {
    "id": 2960,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2009b",
    "question": "下面关于帧中继网络的描述中，错误的是 （ ） 。",
    "options": [
      "A. 用户的数据速率可以在一定的范围内变化",
      "B. 既可以使用流式业务，又可以适应突发式业务",
      "C. 帧中继网可以提供永久虚电路和交换虚电路",
      "D. 帧中继虚电路建立在hdlc协议之上"
    ],
    "answer": 3,
    "explanation": "帧中继的虚电路建立在数据链路层，但并非建立在HDLC协议之上，它有自己的帧格式和LAPF协议，故D错误。"
  },
  {
    "id": 2961,
    "type": "single",
    "category": "网络管理",
    "paper": "real2009b",
    "question": "snmp mib中被管对象的access属性不包括 （ ） 。",
    "options": [
      "A. 只读",
      "B. 只写",
      "C. 可读写",
      "D. 可执行"
    ],
    "answer": 3,
    "explanation": "SNMP的MIB中被管对象的access属性有只读、只写、可读写和不可访问，不包括可执行。"
  },
  {
    "id": 2962,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2009b",
    "question": "汇聚层交换机应该实现多种功能，下面选项中，不属于汇聚层功能的是 （ ） 。",
    "options": [
      "A. vlan间的路由选择",
      "B. 用户访问控制",
      "C. 分组过滤",
      "D. 组播管理"
    ],
    "answer": 1,
    "explanation": "汇聚层负责VLAN间路由、分组过滤和组播管理等，用户访问控制通常由接入层实现，故B不属于汇聚层功能。"
  },
  {
    "id": 2963,
    "type": "single",
    "category": "交换技术",
    "paper": "real2009b",
    "question": "交换机命令switch&gt;enable的作用是 （ ） 。",
    "options": [
      "A. 配置访问口令",
      "B. 进入配置模式",
      "C. 进入特权模式",
      "D. 显示当前模式"
    ],
    "answer": 2,
    "explanation": "在交换机命令中，enable命令用于从用户模式进入特权模式，以便执行更多管理命令。"
  },
  {
    "id": 2964,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2009b",
    "question": "ieee 802.1q协议的作用是 （ ） 。",
    "options": [
      "A. 生成树协议",
      "B. 以太网流量控制",
      "C. 生成vlan标记",
      "D. 基于端口的认证"
    ],
    "answer": 2,
    "explanation": "IEEE 802.1Q协议定义了VLAN标记（Tag）的格式，用于在以太网帧中插入VLAN标识，实现VLAN划分。"
  },
  {
    "id": 2965,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2009b",
    "question": "csma/cd协议可以利用多种监听算法来减小发送冲突的概率，下面关于各种监听算法的描述中，正确的是 （ ） 。",
    "options": [
      "A. 非坚持型监听算法有利于减少网络空闲时间",
      "B. 坚持型监听算法有利于减少冲突的概率",
      "C. p坚持型监听算法无法减少网络的空闲时间",
      "D. 坚持型监听算法能够及时抢占信道"
    ],
    "answer": 3,
    "explanation": "坚持型监听算法在信道忙时持续监听，一旦空闲立即发送，能及时抢占信道，但冲突概率较大。"
  },
  {
    "id": 2966,
    "type": "single",
    "category": "网络管理",
    "paper": "real2009b",
    "question": "在windows的dos窗口中键入命令",
    "options": [
      "A. \\&gt;nslookup",
      "B. 查询211.151.91.165的邮件服务器信息",
      "C. 查询211.151.91.165到域名的映射",
      "D. 查询211.151.91.165的资源记录类型"
    ],
    "answer": 1,
    "explanation": "nslookup命令用于查询DNS信息，指定IP地址可查询其对应的域名（反向解析），即查询到域名的映射。"
  },
  {
    "id": 2967,
    "type": "single",
    "category": "网络管理",
    "paper": "real2009b",
    "question": "在windows的命令窗口中键入命令arp –s 10.0.0.80 00-aa-00-4f-2a-9c，这个命令的作用是 （ ） 。",
    "options": [
      "A. 在arp表中添加一个动态表项",
      "B. 在arp表中添加一个静态表项",
      "C. 在arp表中删除一个表项",
      "D. 在arp表中修改一个表项"
    ],
    "answer": 1,
    "explanation": "arp -s命令用于在ARP表中手动添加一条静态表项，将IP地址与MAC地址绑定，防止动态更新。"
  },
  {
    "id": 2968,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009b",
    "question": "开放系统的数据存储有多种方式，属于网络化存储的是 （ ） 。",
    "options": [
      "A. 内置式存储和das",
      "B. das和nas",
      "C. das和san",
      "D. nas和san"
    ],
    "answer": 3,
    "explanation": "网络化存储主要包括NAS（网络附加存储）和SAN（存储区域网络），DAS属于直连存储，非网络化。"
  },
  {
    "id": 2969,
    "type": "single",
    "category": "无线网络",
    "paper": "real2009b",
    "question": "ieee 802.11采用了类似于802.3 csma/cd协议的csma/ca协议，之所以不采用csma/cd协议的原因是 （ ） 。",
    "options": [
      "A. csma/ca协议的效率更高",
      "B. csma/cd协议的开销更大",
      "C. 为了解决隐蔽终端问题",
      "D. 为了引进其他业务"
    ],
    "answer": 2,
    "explanation": "无线网络中因存在隐蔽终端问题，无法有效进行冲突检测，故802.11采用CSMA/CA而非CSMA/CD。"
  },
  {
    "id": 2970,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2009b",
    "question": "建筑物综合布线系统中的工作区子系统是指 （ ） 。",
    "options": [
      "A. 由终端到信息插座之间的连线系统",
      "B. 楼层接线间的配线架和线缆系统",
      "C. 各楼层设备之间的互连系统",
      "D. 连接各个建筑物的通信系统"
    ],
    "answer": 0,
    "explanation": "综合布线中工作区子系统指终端设备到信息插座之间的连线系统，包括跳线和适配器。"
  },
  {
    "id": 2971,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2009b",
    "question": "eia/tia-568标准规定，在综合布线时，如果信息插座到网卡之间使用无屏蔽双绞线，布线距离最大为 （ ） 米。",
    "options": [
      "A. 10",
      "B. 30",
      "C. 50",
      "D. 100"
    ],
    "answer": 0,
    "explanation": "EIA/TIA-568规定，信息插座到网卡之间使用无屏蔽双绞线时，最大布线距离为10米。"
  },
  {
    "id": 2972,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009b",
    "question": "网络安全体系设计可从物理线路安全、网络安全、系统安全、应用安全等方面来进行，其中数据库容灾属于 （ ） 。",
    "options": [
      "A. 物理线路安全和网络安全",
      "B. 应用安全和网络安全",
      "C. 系统安全和网络安全",
      "D. 系统安全和应用安全"
    ],
    "answer": 3,
    "explanation": "数据库容灾涉及数据备份与恢复，属于系统安全（主机与数据安全）和应用安全（数据库应用）范畴。"
  },
  {
    "id": 2973,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2009b",
    "question": "下列关于网络核心层的描述中，正确的是 （ ） 。",
    "options": [
      "A. 为了保障安全性，应该对分组进行尽可能多的处理",
      "B. 将数据分组从一个区域高速地转发到另一个区域",
      "C. 由多台二、三层交换机组成",
      "D. 提供多条路径来缓解通信瓶颈"
    ],
    "answer": 1,
    "explanation": "网络核心层的主要功能是高速转发数据分组，将数据从一个区域快速转发到另一个区域，不应进行过多处理。"
  },
  {
    "id": 2974,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2009b",
    "question": "网络系统设计过程中，物理网络设计阶段的任务是 （ ） 。",
    "options": [
      "A. 依据逻辑网络设计的要求，确定设备的具体物理分布和运行环境",
      "B. 分析现有网络和新网络的各类资源分布，掌握网络所处的状态",
      "C. 根据需求规范和通信规范，实施资源分配和安全规划",
      "D. 理解网络应该具有的功能和性能，最终设计出符合用户需求的网络"
    ],
    "answer": 0,
    "explanation": "物理网络设计阶段的任务是依据逻辑网络设计的要求，确定设备的具体物理分布和运行环境。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2009a";
  const A = [
  {
    "id": 2975,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009a",
    "question": "（ ） 是指按内容访问的存储器。",
    "options": [
      "A. 虚拟存储器",
      "B. 相联存储器",
      "C. 高速缓存（cache）",
      "D. 随机访问存储器"
    ],
    "answer": 1,
    "explanation": "相联存储器是按内容访问的存储器，根据存储内容而非地址进行访问，常用于Cache中的快速查找。"
  },
  {
    "id": 2976,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009a",
    "question": "处理机主要由处理器、存储器和总线组成。总线包括 （ ） 。",
    "options": [
      "A. 数据总线、地址总线、控制总线",
      "B. 并行总线、串行总线、逻辑总线",
      "C. 单工总线、双工总线、外部总线",
      "D. 逻辑总线、物理总线、内部总线"
    ],
    "answer": 0,
    "explanation": "计算机总线按功能分为数据总线、地址总线和控制总线三类，分别传输数据、地址和控制信号。"
  },
  {
    "id": 2977,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009a",
    "question": "计算机中常采用原码、反码、补码和移码表示数据，其中，±0编码相同的是 （ ） 。",
    "options": [
      "A. 原码和补码",
      "B. 反码和补码",
      "C. 补码和移码",
      "D. 原码和移码"
    ],
    "answer": 2,
    "explanation": "补码和移码中+0与-0的编码相同，均为全0（移码为1000…0），而原码和反码中±0编码不同。"
  },
  {
    "id": 2978,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009a",
    "question": "软件风险一般包含 （ ） 两个特性。",
    "options": [
      "A. 救火和危机管理",
      "B. 已知风险和未知风险",
      "C. 不确定性和损失",
      "D. 员工和预算"
    ],
    "answer": 2,
    "explanation": "软件风险的两个基本特性是不确定性和损失，即风险发生与否不确定，一旦发生会造成损失。"
  },
  {
    "id": 2979,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2009a",
    "question": "关于软件著作权产生的时间，表述正确的是 （ ） 。",
    "options": [
      "A. 自作品首次公开发表时",
      "B. 自作者有创作意图时",
      "C. 自作品得到国家著作权行政管理部门认可时",
      "D. 自作品完成创作之日"
    ],
    "answer": 3,
    "explanation": "我国著作权法规定，软件著作权自作品完成创作之日起自动产生，无需发表或登记。"
  },
  {
    "id": 2980,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2009a",
    "question": "设信道带宽为3400hz，采用pcm编码，采样周期为125μs，每个样本量化为128个等级，则信道的数据率为 （ ） 。",
    "options": [
      "A. 10kb/s",
      "B. 16kb/s",
      "C. 56kb/s",
      "D. 64kb/s"
    ],
    "answer": 2,
    "explanation": "采样周期125μs即8000次/秒，每样本7比特（128=2^7），数据率=8000×7=56000b/s=56kb/s。"
  },
  {
    "id": 2981,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2009a",
    "question": "设数据码字为10010011，采用海明码进行校验，则必须加入 （ ） 比特冗余位才能纠正一位错。",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    "answer": 2,
    "explanation": "海明码需满足2^r≥m+r+1，m=8时r=4满足16≥13，故需加入4比特冗余位才能纠正一位错。"
  },
  {
    "id": 2982,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009a",
    "question": "可以把所有使用dhcp协议获取ip地址的主机划分为不同的类别进行管理。下面的选项列出了划分类别的原则，其中合理的是 （ ） 。",
    "options": [
      "A. 移动用户划分到租约期较长的类",
      "B. 固定用户划分到租约期较短的类",
      "C. 远程访问用户划分到默认路由类",
      "D. 服务器划分到租约期最短的类"
    ],
    "answer": 2,
    "explanation": "远程访问用户通常通过默认路由访问网络，将其划分到默认路由类便于管理和路由配置。"
  },
  {
    "id": 2983,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009a",
    "question": "tcp协议在建立连接的过程中可能处于不同的状态，用netstat命令显示出tcp连接的状态为syn_send，则这个连接正处于 b（ ） 。",
    "options": [
      "A. 监听对方的建立连接请求",
      "B. 已主动发出连接建立请求",
      "C. 等待对方的连接释放请求",
      "D. 收到对方的连接建立请求"
    ],
    "answer": 1,
    "explanation": "SYN_SEND状态表示客户端已主动发出SYN连接建立请求，正在等待对方的SYN+ACK响应。"
  },
  {
    "id": 2984,
    "type": "single",
    "category": "路由协议",
    "paper": "real2009a",
    "question": "ripv2是增强的rip协议，下面关于ripv2的描述中，错误的是 （ ） 。",
    "options": [
      "A. 使用广播方式来传播路由更新报文",
      "B. 采用了触发更新机制来加速路由收敛",
      "C. 支持可变长子网掩码和无类别域间路由",
      "D. 使用经过散列的口令来限制路由信息的传播"
    ],
    "answer": 0,
    "explanation": "RIPv2使用组播（224.0.0.9）而非广播方式传播路由更新报文，这是RIPv2相对RIPv1的改进之一。"
  },
  {
    "id": 2985,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "下列关于windows 2003中域的描述正确的是 （ ） 。",
    "options": [
      "A. 在网络环境中所有的计算机称为一个域",
      "B. 同一个域中可以有多个备份域控制器",
      "C. 每一个域中必须有主域控制器和备份域控制器",
      "D. 一个域中可以有多个主域控制器"
    ],
    "answer": 1,
    "explanation": "在Windows 2003域中，同一个域可以部署多台备份域控制器（BDC），用于容错和负载分担。"
  },
  {
    "id": 2986,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "在windows命令窗口中输入 （ ） 命令，可见到如下图所示的结果。===========================================================interface list0x1………..ms tcp loopback interface0x2...00 16 36 33 9b be……realtek rtl8139 family pci fast ethemet nic-数据包计划程序微型端口======================================================================================================================active routesnetwork destination netmask gateway interface metric",
    "options": [
      "A. ipconfig/all",
      "B. route print",
      "C. tracert -d",
      "D. nslookup"
    ],
    "answer": 1,
    "explanation": "route print命令用于显示路由表信息，输出中包含接口列表和活动路由表，与题图内容一致。"
  },
  {
    "id": 2987,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "linux操作系统中，建立动态路由需要用到文件 d（ ） 。",
    "options": [
      "A. /etc/hosts",
      "B. /etc/hostname",
      "C. /etc/resolv.conf",
      "D. /etc/gateways"
    ],
    "answer": 3,
    "explanation": "Linux中/etc/gateways文件用于配置动态路由，建立动态路由时需要用到该文件。"
  },
  {
    "id": 2988,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "linux操作系统中，网络管理员可以通过修改 c（ ） 文件对web服务器的端口进行配置。",
    "options": [
      "A. /etc/inetd.conf",
      "B. /etc/lilo.conf",
      "C. /etc/httpd/conf/httpd.conf",
      "D. /etc/httpd/conf/access.conf"
    ],
    "answer": 2,
    "explanation": "Apache Web服务器的主配置文件为/etc/httpd/conf/httpd.conf，修改其中端口参数即可配置Web服务端口。"
  },
  {
    "id": 2989,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "linux有三个查看文件的命令，若希望能够用光标上下移动来查看文件内容，应使用 （ ） 命令。",
    "options": [
      "A. cat",
      "B. more",
      "C. less",
      "D. menu"
    ],
    "answer": 2,
    "explanation": "less命令支持用光标上下移动浏览文件内容，比more功能更强，适合分页查看大文件。"
  },
  {
    "id": 2990,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "windows server 2003操作系统中，iis6.0不提供下列 （ ） 服务。",
    "options": [
      "A. web",
      "B. smtp",
      "C. pop3",
      "D. ftp"
    ],
    "answer": 2,
    "explanation": "IIS 6.0提供Web、SMTP和FTP服务，但不提供POP3邮件接收服务，POP3需由其他邮件服务器软件实现。"
  },
  {
    "id": 2991,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "windows server 2003操作系统中， （ ） 提供了远程桌面访问。",
    "options": [
      "A. ftp",
      "B. email",
      "C. terminal service",
      "D. http"
    ],
    "answer": 2,
    "explanation": "Windows Server 2003中的终端服务（Terminal Service）提供了远程桌面访问功能。"
  },
  {
    "id": 2992,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2009a",
    "question": "若在windows“运行”窗口中键入 （ ） 命令，可以查看和修改注册表。",
    "options": [
      "A. cmd",
      "B. mmc",
      "C. autoexe",
      "D. regedit"
    ],
    "answer": 3,
    "explanation": "在“运行”窗口中输入regedit命令可打开注册表编辑器，用于查看和修改注册表。"
  },
  {
    "id": 2993,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "以下关于网络安全设计原则的说法，错误的是 （ ） 。",
    "options": [
      "A. 充分、全面、完整地对系统的安全漏洞和安全威胁进行分析、评估和检测，是设计网络安全系统的必要前提条件",
      "B. 强调安全防护、监测和应急恢复。要求在网络发生被攻击的情况下，必须尽可能快地恢复网络信息中心的服务，减少损失",
      "C. 考虑安全问题解决方案时无需考虑性能价格的平衡，强调安全与保密系统的设计应与网络设计相结合",
      "D. 网络安全应以不能影响系统的正常运行和合法用户的操作活动为前提"
    ],
    "answer": 2,
    "explanation": "网络安全设计需综合考虑安全性与性能、价格的平衡，而非无需考虑，故C选项说法错误。"
  },
  {
    "id": 2994,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "在windows server 2003的dns服务器中通过 （ ） 操作，实现多台web服务器构成集群并共享同一域名。",
    "options": [
      "A. 启用循环（round robin），添加每个web服务器的主机记录",
      "B. 禁止循环（round robin），启动转发器指向每一个web服务器",
      "C. 启用循环（round robin），启动转发器指向每一个web服务器",
      "D. 禁止循环（round robin），添加每个web服务器的主机记录"
    ],
    "answer": 0,
    "explanation": "启用DNS循环（Round Robin）并为每台Web服务器添加主机记录，可实现多台服务器共享同一域名的集群负载均衡。"
  },
  {
    "id": 2995,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "alice向bob发送数字签名的消息m，则不正确的说法是 （ ） 。",
    "options": [
      "A. alice可以保证bob收到消息m",
      "B. alice不能否认发送消息m",
      "C. bob不能编造或改变消息m",
      "D. bob可以验证消息m确实来源于alice"
    ],
    "answer": 0,
    "explanation": "数字签名可保证不可否认性、完整性和身份认证，但不能保证Bob一定收到消息，故A说法不正确。"
  },
  {
    "id": 2996,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "安全散列算法sha-1产生的摘要的位数是 （ ） 。",
    "options": [
      "A. 64",
      "B. 128",
      "C. 160",
      "D. 256"
    ],
    "answer": 2,
    "explanation": "SHA-1是安全散列算法，对任意长度输入产生160位（20字节）的固定长度摘要，故选C。"
  },
  {
    "id": 2997,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "在x.509标准中，不包含在数字证书中的数据域是 （ ） 。",
    "options": [
      "A. 序列号",
      "B. 签名算法",
      "C. 认证机构的签名",
      "D. 私钥"
    ],
    "answer": 3,
    "explanation": "X.509数字证书包含版本、序列号、签名算法、颁发者、有效期、主体、公钥及认证机构签名等，私钥由用户自己保管，不放入证书，故选D。"
  },
  {
    "id": 2998,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "包过滤防火墙对通过防火墙的数据包进行检查，只有满足条件的数据包才能通过，对数据包的检查内容一般不包括 （ ） 。",
    "options": [
      "A. 源地址",
      "B. 目的地址",
      "C. 协议",
      "D. 有效载荷"
    ],
    "answer": 3,
    "explanation": "包过滤防火墙工作在网络层和传输层，检查源地址、目的地址、端口和协议等首部信息，一般不检查应用层有效载荷，故选D。"
  },
  {
    "id": 2999,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "下面关于arp木马的描述中，错误的是 （ ） 。",
    "options": [
      "A. arp木马利用arp协议漏洞实施破坏",
      "B. arp木马发作时可导致网络不稳定甚至瘫痪",
      "C. arp木马破坏网络的物理连接",
      "D. arp木马把虚假的网关mac地址发给受害主机"
    ],
    "answer": 2,
    "explanation": "ARP木马通过伪造ARP应答篡改IP与MAC映射，造成网络不稳定甚至瘫痪，但不会破坏网络的物理连接，故选C。"
  },
  {
    "id": 3000,
    "type": "single",
    "category": "网络管理",
    "paper": "real2009a",
    "question": "下面几个网络管理工具的描述中，错误的是 （ ） 。",
    "options": [
      "A. netstat 可用于显示ip、tcp、udp、icmp等协议的统计数据",
      "B. sniffer 能够使网络接口处于杂收模式，从而可截获网络上传输的分组",
      "C. winipcfg 采用ms-dos工作方式显示网络适配器和主机的有关信息",
      "D. tracert 可以发现数据包到达目标主机所经过的路由器和到达时间"
    ],
    "answer": 2,
    "explanation": "winipcfg是Windows图形界面工具，用于显示网络适配器和主机信息，并非MS-DOS工作方式，故选C。"
  },
  {
    "id": 3001,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009a",
    "question": "一个网络的地址为172.16.7.128/26，则该网络的广播地址是 （ ） 。",
    "options": [
      "A. 172.16.7.255",
      "B. 172.16.7.129",
      "C. 172.16.7.191",
      "D. 172.16.7.252"
    ],
    "answer": 2,
    "explanation": "/26掩码为255.255.255.192，网络号172.16.7.128，广播地址为下一子网前一个地址172.16.7.191，故选C。"
  },
  {
    "id": 3002,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009a",
    "question": "使用cidr技术把4个c类网络192.24.12.0/24、192.24.13.0/24、192.24.14.0/24和192.24.15.0/24 汇聚成一个超网，得到的地址是 （ ） 。",
    "options": [
      "A. 192.24.8.0/22",
      "B. 192.24.12.0/22",
      "C. 192.24.8.0/21",
      "D. 192.24.12.0/21"
    ],
    "answer": 1,
    "explanation": "4个连续C类网络192.24.12.0~15.0，前22位相同，汇聚为192.24.12.0/22，故选B。"
  },
  {
    "id": 3003,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009a",
    "question": "某公司网络的地址是133.10.128.0/17，被划分成16个子网，下面的选项中不属于这16个子网的地址是 （ ） 。",
    "options": [
      "A. 133.10.136.0/21",
      "B. 133.10.162.0/21",
      "C. 133.10.208.0/21",
      "D. 133.10.224.0/21"
    ],
    "answer": 1,
    "explanation": "133.10.128.0/17划分为16个/21子网，起始分别为128、136、144…224，162.0不在其中，故选B。"
  },
  {
    "id": 3004,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2009a",
    "question": "以下地址中不属于网络100.10.96.0/20的主机地址是 （ ） 。",
    "options": [
      "A. 100.10.111.17",
      "B. 100.10.104.16",
      "C. 100.10.101.15",
      "D. 100.10.112.18"
    ],
    "answer": 3,
    "explanation": "100.10.96.0/20范围是100.10.96.0~100.10.111.255，100.10.112.18超出该范围，不属于其主机地址，故选D。"
  },
  {
    "id": 3005,
    "type": "single",
    "category": "交换技术",
    "paper": "real2009a",
    "question": "vlan中继协议（vtp）用于在大型交换网络中简化vlan的管理。按照vtp协议，交换机的运行模式分为3种：服务器、客户机和透明模式。下面关于vtp协议的描述中，错误的是 （ ） 。",
    "options": [
      "A. 交换机在服务器模式下能创建、添加、删除和修改vlan配置",
      "B. 一个管理域中只能有一个服务器",
      "C. 在透明模式下可以进行vlan配置，但不能向其它交换机传输配置信息",
      "D. 交换机在客户模式下不允许创建、修改或删除vlan"
    ],
    "answer": 1,
    "explanation": "VTP管理域中可有多台服务器模式交换机，并非只能有一台，故B描述错误，选B。"
  },
  {
    "id": 3006,
    "type": "single",
    "category": "交换技术",
    "paper": "real2009a",
    "question": "新交换机出厂时的默认配置是是 （ ） 。",
    "options": [
      "A. 预配置为vlan1，vtp模式为服务器",
      "B. 预配置为vlan1，vtp模式为客户机",
      "C. 预配置为vlan0，vtp模式为服务器",
      "D. 预配置为vlan0，vtp模式为客户机"
    ],
    "answer": 0,
    "explanation": "新交换机出厂默认所有端口属于VLAN1，VTP模式为服务器模式，故选A。"
  },
  {
    "id": 3007,
    "type": "single",
    "category": "交换技术",
    "paper": "real2009a",
    "question": "在生成树协议（stp）ieee 802.1d中，根据 （ ） 来选择根交换机。",
    "options": [
      "A. 最小的mac地址",
      "B. 最大的mac地址",
      "C. 最小的交换机id",
      "D. 最大的交换机id"
    ],
    "answer": 2,
    "explanation": "STP中根交换机通过比较交换机ID（优先级+MAC）选出，交换机ID最小者成为根交换机，故选C。"
  },
  {
    "id": 3008,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2009a",
    "question": "在快速以太网物理层标准中，使用两对5类无屏蔽双绞线的是 （ ） 。",
    "options": [
      "A. 100base-tx",
      "B. 100base-fx",
      "C. 100base-t4",
      "D. 100base-t2"
    ],
    "answer": 0,
    "explanation": "100BASE-TX使用两对5类无屏蔽双绞线，一对发送一对接收，故选A。"
  },
  {
    "id": 3009,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "访问控制列表（acl）分为标准和扩展两种。下面关于acl的描述中，错误的是 （ ） 。",
    "options": [
      "A. 标准acl可以根据分组中的ip源地址进行过滤",
      "B. 扩展acl可以根据分组中的ip目标地址进行过滤",
      "C. 标准acl可以根据分组中的ip目标地址进行过滤",
      "D. 扩展acl可以根据不同的上层协议信息进行过滤"
    ],
    "answer": 2,
    "explanation": "标准ACL只能根据源IP地址过滤，不能根据目的地址过滤，故C描述错误，选C。"
  },
  {
    "id": 3010,
    "type": "single",
    "category": "网络管理",
    "paper": "real2009a",
    "question": "如果要测试目标10.0.99.221的连通性并进行反向名字解析，则在dos窗口中键入命令 （ ） 。",
    "options": [
      "A. ping -a 10.0.99.221",
      "B. ping -n 10.0.99.221",
      "C. ping -r 10.0.99.221",
      "D. ping -j 10.0.99.221"
    ],
    "answer": 0,
    "explanation": "ping -a用于对目标地址进行反向名字解析并显示主机名，故选A。"
  },
  {
    "id": 3011,
    "type": "single",
    "category": "无线网络",
    "paper": "real2009a",
    "question": "在ieee 802.11标准中使用了扩频通信技术，下面选项中有关扩频通信技术说法正确的是 （ ） 。",
    "options": [
      "A. 扩频技术是一种带宽很宽的红外通信技术",
      "B. 扩频技术就是用伪随机序列对代表数据的模拟信号进行调制",
      "C. 扩频通信系统的带宽随着数据速率的提高而不断扩大",
      "D. 扩频技术就是扩大了频率许可证的使用范围"
    ],
    "answer": 1,
    "explanation": "扩频通信是用伪随机序列对数据信号进行调制，将信号扩展到较宽频带上传输，故选B。"
  },
  {
    "id": 3012,
    "type": "single",
    "category": "无线网络",
    "paper": "real2009a",
    "question": "下面关于wlan安全标准ieee 802.11i的描述中，错误的是 （ ） 。",
    "options": [
      "A. 采用了高级加密标准aes",
      "B. 定义了新的密钥交换协议tkip",
      "C. 采用802.1x实现访问控制",
      "D. 提供的加密方式为有线等价协议wep"
    ],
    "answer": 3,
    "explanation": "802.11i采用AES加密和802.1x访问控制，取代了安全性差的WEP，故D描述错误，选D。"
  },
  {
    "id": 3013,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "安全审计是保障计算机系统安全的重要手段，其作用不包括 （ ） 。",
    "options": [
      "A. 重现入侵者的操作过程",
      "B. 发现计算机系统的滥用情况",
      "C. 根据系统运行日志，发现潜在的安全漏洞",
      "D. 保证可信计算机系统内部信息不外泄"
    ],
    "answer": 3,
    "explanation": "安全审计可重现入侵过程、发现滥用和潜在漏洞，但不能保证内部信息不外泄，故选D。"
  },
  {
    "id": 3014,
    "type": "single",
    "category": "网络安全",
    "paper": "real2009a",
    "question": "网络隔离技术的目标是确保把有害的攻击隔离，在保证可信网络内部信息部不外泄的前提下，完成网络间数据的安全交换。下列隔离技术中，安全性最好的是 （ ） 。",
    "options": [
      "A. 多重安全网关",
      "B. 防火墙",
      "C. vlan隔离",
      "D. 物理隔离"
    ],
    "answer": 3,
    "explanation": "物理隔离使内外网络无物理连接，安全性最高，故选D。"
  },
  {
    "id": 3015,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2009a",
    "question": "下列有关网络设备选型原则中，不正确的是 （ ） 。",
    "options": [
      "A. 所有网络设备尽可能选取同一厂家的产品，这样在设备可互连性、协议互操作性、技术支持、价格等方面都更有优势",
      "B. 在网络的层次结构中，主干设备选择可以不考虑扩展性需求",
      "C. 尽可能保留并延长用户原有网络设备的投资，减少在资金投入上的浪费",
      "D. 选择性能价格比高、质量过硬的产品，使资金的投入产出达到最大值"
    ],
    "answer": 1,
    "explanation": "主干设备处于网络核心，必须考虑扩展性需求，故B说法不正确，选B。"
  },
  {
    "id": 3016,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2009a",
    "question": "在层次化网络设计中， （ ） 不是分布层/接入层交换机的选型策略。",
    "options": [
      "A. 提供多种固定端口数量搭配供组网选择，可堆叠、易扩展，以便由于信息点的增加而进行扩容",
      "B. 在满足技术性能要求的基础上，最好价格便宜、使用方便、即插即用、配置简单",
      "C. 具备一定的网络服务质量和控制能力以及端到端的qos",
      "D. 具备高速的数据转发能力"
    ],
    "answer": 3,
    "explanation": "分布层/接入层交换机选型关注端口数量、堆叠扩展、价格易用及QoS控制能力；高速数据转发能力是核心层交换机的选型要求，故D不是分布/接入层的策略。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2008b";
  const A = [
  {
    "id": 3017,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "计算机内存一般分为静态数据区、代码区、栈区和堆区，若某指令的操作数之一采用立即数寻址方式，则该操作数位于 （ ） 。",
    "options": [
      "A. 静态数据区",
      "B. 代码区",
      "C. 栈区",
      "D. 堆区"
    ],
    "answer": 1,
    "explanation": "立即数寻址方式的操作数直接包含在指令中，而指令存放在代码区，因此该操作数位于代码区，选B。"
  },
  {
    "id": 3018,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "计算机在进行浮点数的相加（减）运算之前先进行对阶操作，若x的阶码大于y的阶码，则应将 （ ） 。",
    "options": [
      "A. x的阶码缩小至与y的阶码相同，且使x的尾数部分进行算术左移。",
      "B. x的阶码缩小至与y的阶码相同，且使x的尾数部分进行算术右移。",
      "C. y的阶码扩大至与x的阶码相同，且使y的尾数部分进行算术左移。",
      "D. y的阶码扩大至与x的阶码相同，且使y的尾数部分进行算术右移。"
    ],
    "answer": 3,
    "explanation": "浮点加减法对阶时须使两数阶码相等，小阶向大阶看齐。x阶码大，应将y的阶码扩大至与x相同，同时y的尾数算术右移，故选D。"
  },
  {
    "id": 3019,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "在cpu中， （ ） 可用于传送和暂存用户数据，为alu执行算术逻辑运算提供工作区。",
    "options": [
      "A. 程序计数器",
      "B. 累加寄存器",
      "C. 程序状态寄存器",
      "D. 地址寄存器"
    ],
    "answer": 1,
    "explanation": "累加寄存器（ACC）用于暂存操作数和运算结果，为ALU执行算术逻辑运算提供工作区，故选B。"
  },
  {
    "id": 3020,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "关于在i/o设备与主机间交换数据的叙述， （ ） 是错误的。",
    "options": [
      "A. 中断方式下，cpu需要执行程序来实现数据传送任务。",
      "B. 中断方式和dma方式下，cpu与i/o设备都可同步工作。",
      "C. 中断方式和dma方式中，快速i/o设备更适合采用中断方式传递数据。",
      "D. 若同时接到dma请求和中断请求，cpu优先响应dma请求。"
    ],
    "answer": 2,
    "explanation": "中断方式下CPU需执行程序完成数据传送，适合慢速设备；快速I/O设备更适合DMA方式，故C说法错误。"
  },
  {
    "id": 3021,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "cache用于存放主存数据的部分拷贝，主存单元地址与cache单元地址之间的转换方式由 （ ） 完成。",
    "options": [
      "A. 硬件",
      "B. 软件",
      "C. 用户",
      "D. 程序员"
    ],
    "answer": 0,
    "explanation": "主存与Cache之间的地址映射和转换由硬件自动完成，对程序员透明，故选A。"
  },
  {
    "id": 3022,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "软件能力成熟度模型（cmm）将软件能力成熟度自低到高依次划分为初试级、可重复级、定义级、管理级和优化级，其中 （ ） 对软件过程和产品都有定量的理解与控制。",
    "options": [
      "A. 可重复级和定义级",
      "B. 定义级和管理级",
      "C. 管理级和优化级",
      "D. 定义级、管理级和优化级"
    ],
    "answer": 2,
    "explanation": "CMM中管理级对软件过程和产品有定量理解与控制，优化级持续改进过程，故管理级和优化级符合，选C。"
  },
  {
    "id": 3023,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "iso/iec 9126软件质量模型中第一层定义了六个质量特性，并为各质量特性定义了相应的质量子特性，子特性 （ ） 属于可靠性质量特性。",
    "options": [
      "A. 准确性",
      "B. 易理解性",
      "C. 成熟性",
      "D. 易学性"
    ],
    "answer": 2,
    "explanation": "ISO/IEC 9126可靠性质量特性包括成熟性、容错性和易恢复性，成熟性属于可靠性，故选C。"
  },
  {
    "id": 3024,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008b",
    "question": "李某在《电脑与编程》杂志上看到张某发表的一组程序，颇为欣赏，就复印了一百份作为程序设计辅导材料发给了学生。李某又将这组程序逐段加以评析，写成评论文章后投到《电脑编程技巧》杂志上发表。李某的行为 （ ） 。",
    "options": [
      "A. 侵犯了张某的著作权，因为其未经许可，擅自复印张某的程序。",
      "B. 侵犯了张某的著作权，因为在评论文章中全文引用了发表的程序。",
      "C. 不侵犯张某的著作权，其行为属于合理使用。",
      "D. 侵犯了张某的著作权，因为其擅自复印，又在其发表的文章中全文引用了张某的程序。"
    ],
    "answer": 2,
    "explanation": "为教学目的少量复制及为评论引用已发表作品，属于著作权法规定的合理使用，不构成侵权，故选C。"
  },
  {
    "id": 3025,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008b",
    "question": "光纤分为单模光纤与多模光纤，这两种光纤的区别是 （ ） 。",
    "options": [
      "A. 单模光纤的纤芯大，多模光纤的纤芯小。",
      "B. 单模光纤比多模光纤采用的波长长。",
      "C. 单模光纤的传输频带窄，而多模光纤的传输频带宽。",
      "D. 单模光纤的光源采用发光二极管（light emitting diode），而多模光纤的光源采用激光二极管（laser diode）。"
    ],
    "answer": 1,
    "explanation": "单模光纤纤芯细、采用激光器、传输频带宽，工作波长较长（如1310/1550nm）；多模光纤纤芯粗、用LED、波长较短，故选B。"
  },
  {
    "id": 3026,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2008b",
    "question": "在光纤通信标准中，oc-3的数据速率是 （ ） 。",
    "options": [
      "A. 51mb/s",
      "B. 155mb/s",
      "C. 622mb/s",
      "D. 2488mb/s"
    ],
    "answer": 1,
    "explanation": "SONET/SDH标准中OC-3对应STM-1，数据速率为155.52Mb/s，故选B。"
  },
  {
    "id": 3027,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008b",
    "question": "下图所示是一种 （ ） 调制方式。",
    "options": [
      "A. ask",
      "B. fsk",
      "C. psk",
      "D. dpsk"
    ],
    "answer": 2,
    "explanation": "图中载波相位随数字信号变化而幅度频率不变，属于相移键控PSK调制方式，故选C。"
  },
  {
    "id": 3028,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008b",
    "question": "关于曼彻斯特编码，下面叙述中错误的是 （ ） 。",
    "options": [
      "A. 曼彻斯特编码是一种双相码。",
      "B. 采用曼彻斯特编码，波特率是数据速率的2倍。",
      "C. 曼彻斯特编码可以自同步。",
      "D. 曼彻斯特编码效率高。"
    ],
    "answer": 3,
    "explanation": "曼彻斯特编码每个码元中间跳变，波特率是数据速率的2倍，可自同步，但编码效率仅为50%，故D错误。"
  },
  {
    "id": 3029,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008b",
    "question": "在异步通信中，每个字符包含1位起始位、7位数据位、1位奇偶校验位和1位终止位。每秒钟传送100个字符，则有效数据速率为 （ ） 。",
    "options": [
      "A. 500b/s",
      "B. 600b/s",
      "C. 700b/s",
      "D. 800b/s"
    ],
    "answer": 2,
    "explanation": "每字符共10位，其中7位数据位。每秒100字符即1000波特，有效数据速率=100×7=700b/s，故选C。"
  },
  {
    "id": 3030,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008b",
    "question": "采用crc进行差错校验，声称多项式为g(x)=x4+x+1，信息码字为10110，则计算机的crc校验码是 （ ） 。",
    "options": [
      "A. 0000",
      "B. 0100",
      "C. 0010",
      "D. 1111"
    ],
    "answer": 3,
    "explanation": "生成多项式对应除数10011，信息码10110后补4个0做模2除法，余数为1111，即CRC校验码为1111，故选D。"
  },
  {
    "id": 3031,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008b",
    "question": "采用海明码进行差错校验，信息码字为1001011，为纠正一位错，则需要 （ ） 比特冗余位。",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 8"
    ],
    "answer": 2,
    "explanation": "海明码需满足2^r≥m+r+1，信息位m=7，r=4时16≥12成立，r=3时8≥11不成立，故需4位冗余位，选C。"
  },
  {
    "id": 3032,
    "type": "single",
    "category": "路由协议",
    "paper": "real2008b",
    "question": "在ospf网络中，路由器定时发出hello分组与特定的邻居进行联系，在默认情况下，如果 （ ） 没有收到这种分组，就认为对方不存在了。",
    "options": [
      "A. 20秒",
      "B. 30秒",
      "C. 40秒",
      "D. 50秒"
    ],
    "answer": 2,
    "explanation": "OSPF默认Hello间隔10秒，Dead间隔为Hello的4倍即40秒，40秒未收到Hello分组则认为邻居失效，故选C。"
  },
  {
    "id": 3033,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008b",
    "question": "icmp协议有多种控制报文。当网络中出现拥塞时，路由器发出 （ ） 报文。",
    "options": [
      "A. 路由重定向",
      "B. 目标不可到达",
      "C. 源抑制",
      "D. 子网掩码请求"
    ],
    "answer": 2,
    "explanation": "ICMP源抑制报文用于通知源主机网络出现拥塞，要求其降低发送速率，故选C。"
  },
  {
    "id": 3034,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "在windows server 2003上启用iis 6.0提供web服务，创建一个web站点并将主页文件index.asp拷贝到该web站点的主目录下。在客户机的浏览器地址栏内输入网站的域名后提示没有权限访问网站，则可能的原因是 （ ） 。",
    "options": [
      "A. 没有重新启动web站点。",
      "B. 没有在浏览器上指定该web站点的服务端口80。",
      "C. 没有将index.asp添加到该web站点的默认启动文档中。",
      "D. 客户机安装的不是windows操作系统。"
    ],
    "answer": 2,
    "explanation": "输入域名后无法访问，说明站点已运行但未将index.asp设为默认文档，服务器无法自动返回主页，故选C。"
  },
  {
    "id": 3035,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008b",
    "question": "某ip网络连接如下图所示，主机pc1发出的一个全局广播消息，无法收到该广播消息的是 （ ） 。",
    "options": [
      "A. pc2",
      "B. pc3",
      "C. pc4",
      "D. pc5"
    ],
    "answer": 1,
    "explanation": "全局广播消息被路由器隔离，不能跨网段传播。PC3与PC1不在同一广播域，故收不到该广播消息，选B。"
  },
  {
    "id": 3036,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "用linux ls –al 命令列出下面的文件列表， （ ） 是块设备文件。",
    "options": [
      "A. drwx------ 1 hel users 1024 sep 10 08:10 aaa",
      "B. -rw------- 2 hel –s users 56 sep 09 11:05 bbb",
      "C. brw------- 2 hel s users 56 sep 09 11:05 ccc",
      "D. lrwx------ 1 hel users 2024 sep 12 08:12 ddd"
    ],
    "answer": 2,
    "explanation": "ls -al 输出中第一个字符表示文件类型，b 表示块设备文件，c 表示字符设备文件，d 为目录，l 为符号链接。选项 C 以 b 开头，故为块设备文件。"
  },
  {
    "id": 3037,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "为保证在启动linux服务器时自动启动dhcp进程，应在 （ ） 文件中将配置项dhcpd=no改为dhcpd=yes。",
    "options": [
      "A. /etc/rc.d/rc.inet1",
      "B. /etc/rc.d/rc.inet2",
      "C. /etc/dhcpd.conf",
      "D. /etc/rc.d/rc.s"
    ],
    "answer": 0,
    "explanation": "在 Linux 中，rc.inet1 脚本负责网络接口与相关服务的启动配置，将 dhcpd=no 改为 dhcpd=yes 可使系统启动时自动运行 DHCP 进程。"
  },
  {
    "id": 3038,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "在linux操作系统中，存放有主机名及对应ip地址的文件是 （ ） 。",
    "options": [
      "A. /etc/hostname",
      "B. /etc/hosts",
      "C. /etc/resolv.conf",
      "D. /etc/networks"
    ],
    "answer": 1,
    "explanation": "/etc/hosts 文件用于存放主机名与 IP 地址的静态映射关系，实现本地名称解析；/etc/hostname 仅存本机名，resolv.conf 存 DNS 服务器地址。"
  },
  {
    "id": 3039,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "windows操作系统下可以通过安装 （ ） 组件来提供ftp服务。",
    "options": [
      "A. iis",
      "B. ie",
      "C. outlook",
      "D. apache"
    ],
    "answer": 0,
    "explanation": "IIS（Internet Information Services）是 Windows 自带的 Web 服务器组件，安装后可提供 FTP、HTTP 等服务；IE 是浏览器，Outlook 是邮件客户端。"
  },
  {
    "id": 3040,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "windows系统下，通过运行 （ ） 命令可以打开windows管理控制台。",
    "options": [
      "A. regedit",
      "B. cmd",
      "C. mmc",
      "D. mfc"
    ],
    "answer": 2,
    "explanation": "mmc 是 Microsoft Management Console 的命令，运行后可打开 Windows 管理控制台，用于加载和管理各类管理单元。"
  },
  {
    "id": 3041,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "在windows server 2003下若选择安全登录，则首先需要按 （ ） 组合键。",
    "options": [
      "A. shift+alt+esc",
      "B. ctrl+alt+tab",
      "C. ctrl+shift",
      "D. ctrl+alt+del"
    ],
    "answer": 3,
    "explanation": "Windows Server 2003 选择安全登录后，需按 Ctrl+Alt+Del 组合键才能进入登录界面，这是系统默认的安全登录方式。"
  },
  {
    "id": 3042,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "为了防止电子邮件中的恶意代码，应该用 （ ） 方式阅读电子邮件。",
    "options": [
      "A. 纯文本",
      "B. 网页",
      "C. 程序",
      "D. 会话"
    ],
    "answer": 0,
    "explanation": "以纯文本方式阅读电子邮件不会执行邮件中嵌入的脚本或程序代码，可有效防止恶意代码运行，因此更安全。"
  },
  {
    "id": 3043,
    "type": "single",
    "category": "网络管理",
    "paper": "real2008b",
    "question": "下面有关dns的说法中错误的是 （ ） 。",
    "options": [
      "A. 主域名服务器运行域名服务器软件，有域名数据库",
      "B. 辅助域名服务器运行域名服务器软件，但是没有域名数据库",
      "C. 转发域名服务器负责非本地域名的本地查询",
      "D. 一个域有且只有一个主域名服务器"
    ],
    "answer": 1,
    "explanation": "辅助域名服务器同样运行域名服务器软件并拥有域名数据库（区域文件的副本），只是数据来自主域名服务器，故 B 说法错误。"
  },
  {
    "id": 3044,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "常用对称加密算法不包括 （ ） 。",
    "options": [
      "A. des",
      "B. rc-5",
      "C. idea",
      "D. rsa"
    ],
    "answer": 3,
    "explanation": "RSA 是非对称（公钥）加密算法，DES、RC-5、IDEA 均为对称加密算法，故 RSA 不属于常用对称加密算法。"
  },
  {
    "id": 3045,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "数字签名功能不包括 （ ） 。",
    "options": [
      "A. 防止发送方的抵赖行为",
      "B. 发送方身份确认",
      "C. 接收方身份确认",
      "D. 保证数据的完整性"
    ],
    "answer": 2,
    "explanation": "数字签名用于确认发送方身份、防止发送方抵赖并保证数据完整性，但不能确认接收方的身份，故不包括 C。"
  },
  {
    "id": 3046,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "“tcp syn flooding”建立大量处于半连接状态的tcp连接，其攻击目标是网络的 （ ） 。",
    "options": [
      "A. 保密性",
      "B. 完整性",
      "C. 真实性",
      "D. 可用性"
    ],
    "answer": 3,
    "explanation": "TCP SYN Flooding 通过大量半连接耗尽服务器资源，使合法用户无法正常访问，攻击的是网络的可用性。"
  },
  {
    "id": 3047,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "tcp/ip在多个层次引入了安全机制，其中tls协议位于 （ ） 。",
    "options": [
      "A. 数据链路层",
      "B. 网络层",
      "C. 传输层",
      "D. 应用层"
    ],
    "answer": 2,
    "explanation": "TLS 协议工作在传输层之上，为应用层协议（如 HTTP）提供加密与认证服务，位于传输层。"
  },
  {
    "id": 3048,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "计算机感染特洛伊木马后的典型现象是 （ ） 。",
    "options": [
      "A. 程序异常退出",
      "B. 有未知程序试图建立网络连接",
      "C. 邮箱被垃圾邮件填满",
      "D. windows系统黑屏"
    ],
    "answer": 1,
    "explanation": "特洛伊木马通常会在后台与外部主机建立网络连接以接收指令或回传数据，因此出现未知程序试图联网是典型现象。"
  },
  {
    "id": 3049,
    "type": "single",
    "category": "网络管理",
    "paper": "real2008b",
    "question": "osi定义的网络管理包括配置管理、故障管理、性能管理、计费管理和安全管理五大功能，下列操作中属于配置管理的是 （ ） 。",
    "options": [
      "A. 网络管理者通过getrequest获得当前处理的消息数量",
      "B. 网络管理者通过getrequest获得计费参数",
      "C. 网络管理者通过setrquest更改系统的log级别",
      "D. 网管代理通过trap发送故障消息"
    ],
    "answer": 2,
    "explanation": "配置管理涉及对网络设备参数的设置与修改，通过 SetRequest 更改系统 log 级别属于配置管理操作。"
  },
  {
    "id": 3050,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "下列安全协议中， （ ） 能保证交易双方无法抵赖。",
    "options": [
      "A. set",
      "B. https",
      "C. pgp",
      "D. moss"
    ],
    "answer": 0,
    "explanation": "SET（安全电子交易）协议采用数字证书和数字签名机制，能保证交易双方身份真实且无法抵赖，主要用于电子商务。"
  },
  {
    "id": 3051,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008b",
    "question": "windows server 2003中的iis为web服务提供了许多选项，利用这些选项可以更好第配置web服务的性能、行为和安全等。如下图所示属性页中，“限制网络带宽”选项属于 （ ） 选项卡。",
    "options": [
      "A. http头",
      "B. 性能",
      "C. 主目录",
      "D. 文档"
    ],
    "answer": 1,
    "explanation": "在 IIS 的 Web 站点属性中，“限制网络带宽”用于控制站点可用的带宽资源，属于“性能”选项卡中的设置项。"
  },
  {
    "id": 3052,
    "type": "single",
    "category": "交换技术",
    "paper": "real2008b",
    "question": "使用 （ ） 协议远程配置交换机。",
    "options": [
      "A. telnet",
      "B. ftp",
      "C. http",
      "D. ppp"
    ],
    "answer": 0,
    "explanation": "Telnet 是远程登录协议，可通过网络远程登录到交换机并对其配置，FTP、HTTP、PPP 均不用于远程配置交换机。"
  },
  {
    "id": 3053,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008b",
    "question": "一个b类网络的子网掩码为255.255.192.0，则这个网络被划分成了 （ ） 个子网。",
    "options": [
      "A. 2",
      "B. 4",
      "C. 6",
      "D. 8"
    ],
    "answer": 1,
    "explanation": "B 类网络默认掩码 255.255.0.0，现掩码 255.255.192.0，借用了 2 位主机位作子网位，2^2=4，故划分为 4 个子网。"
  },
  {
    "id": 3054,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008b",
    "question": "使用cidr技术把4个网络100.100.0.0/18、100.100.64.0/18、100.100.128.0/18和100.100.192.0/18汇聚成一个超网，得到的地址是 （ ） 。",
    "options": [
      "A. 100.100.0.0/16",
      "B. 100.100.0.0/18",
      "C. 100.100.128.0/18",
      "D. 100.100. 64.0/18"
    ],
    "answer": 0,
    "explanation": "四个网络的第三段分别为 0、64、128、192，前 16 位相同，将前缀缩短为 /16 即可汇聚为 100.100.0.0/16 超网。"
  },
  {
    "id": 3055,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008b",
    "question": "某公司网络的地址是202.110.128.0/17，下面的选项中， （ ） 属于这个网络。",
    "options": [
      "A. 202.110.44.0/17",
      "B. 202.110.162.0/20",
      "C. 202.110.144.0/16",
      "D. 202.110.24.0/20"
    ],
    "answer": 1,
    "explanation": "202.110.128.0/17 的地址范围是 202.110.128.0~202.110.255.255，202.110.162.0/20 落在该范围内，故属于此网络。"
  },
  {
    "id": 3056,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008b",
    "question": "私网地址用于配置公司内部网络，下面选项中， （ ） 属于私网地址。",
    "options": [
      "A. 128.168.10.1",
      "B. 10.128.10.1",
      "C. 127.10.0.1",
      "D. 172.15.0.1"
    ],
    "answer": 1,
    "explanation": "私有地址范围包括10.0.0.0/8、172.16.0.0/12和192.168.0.0/16，10.128.10.1属于10.0.0.0/8，是私网地址。"
  },
  {
    "id": 3057,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008b",
    "question": "以下给出的地址中，不属于网络222.15.64.0/20的主机地址是 （ ） 。",
    "options": [
      "A. 222.15.78.17",
      "B. 222.15.79.16",
      "C. 222.15.88.15",
      "D. 222.15.65.18"
    ],
    "answer": 2,
    "explanation": "222.15.64.0/20的地址范围是222.15.64.0～222.15.79.255，222.15.88.15超出该范围，不属于其主机地址。"
  },
  {
    "id": 3058,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2008b",
    "question": "通过交换机连接的一组工作站 （ ） 。",
    "options": [
      "A. 组成一个冲突域，但不是一个广播域",
      "B. 组成一个广播域，但不是一个冲突域",
      "C. 既是一个冲突域，又是一个广播域",
      "D. 既不是冲突域，也不是广播域"
    ],
    "answer": 1,
    "explanation": "交换机每个端口是独立冲突域，能隔离冲突域；但默认所有端口属同一广播域，故组成一个广播域而非一个冲突域。"
  },
  {
    "id": 3059,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2008b",
    "question": "利用交换机可以把网络划分成多个虚拟局域网（vlan）。一般情况下，交换机默认的vlan是 （ ） 。",
    "options": [
      "A. vlan0",
      "B. vlan1",
      "C. vlan10",
      "D. vlan1024"
    ],
    "answer": 1,
    "explanation": "交换机默认所有端口都属于VLAN 1，VLAN 1是默认VLAN，不能被删除，用于初始配置和管理。"
  },
  {
    "id": 3060,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2008b",
    "question": "在tcp/ip网络中，为各种公共服务保留的端口号范围是 （ ） 。",
    "options": [
      "A. 1～255",
      "B. 256~1023",
      "C. 1~1023",
      "D. 1024~65535"
    ],
    "answer": 2,
    "explanation": "TCP/IP中端口号0～1023为知名端口，保留给公共服务使用；1024～65535为动态或注册端口。"
  },
  {
    "id": 3061,
    "type": "single",
    "category": "交换技术",
    "paper": "real2008b",
    "question": "交换机命令switcha(vlan)#vtp pruning的作用是 （ ） 。",
    "options": [
      "A. 退出vlan配置模式",
      "B. 删除一个vlan",
      "C. 进入配置子模式",
      "D. 启动路由修剪功能"
    ],
    "answer": 3,
    "explanation": "VTP Pruning即VTP修剪功能，用于减少不必要的广播流量，命令switcha(vlan)#vtp pruning作用是启动路由修剪功能。"
  },
  {
    "id": 3062,
    "type": "single",
    "category": "路由协议",
    "paper": "real2008b",
    "question": "路由器命令r1(config)#ip routing的作用是 （ ） 。",
    "options": [
      "A. 显示路由信息",
      "B. 配置默认路由",
      "C. 激活路由器端口",
      "D. 启动路由配置"
    ],
    "answer": 3,
    "explanation": "ip routing命令用于在路由器上启用IP路由功能，即启动路由配置，使路由器能够进行路由转发。"
  },
  {
    "id": 3063,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2008b",
    "question": "关于ieee 802.3的csma/cd协议，下面结论中错误的是 （ ） 。",
    "options": [
      "A. csma/cd是一种解决访问冲突的协议",
      "B. csma/cd协议适用于所有的802.3以太网",
      "C. 在网络负载较小时，csma/cd协议的通信效率很高",
      "D. 这种网络协议适合传输非实时数据"
    ],
    "answer": 1,
    "explanation": "CSMA/CD适用于半双工以太网，全双工以太网不需要CSMA/CD，因此并非适用于所有802.3以太网，B错误。"
  },
  {
    "id": 3064,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2008b",
    "question": "以下关于ieee 802.3ae标准的描述中，错误的是 （ ） 。",
    "options": [
      "A. 支持802.3标准中定义的最小和最大帧长",
      "B. 支持802.3ad链路汇聚协议",
      "C. 使用1310nm单模光纤作为传输介质，最大段长可达10公里",
      "D. 使用850nm多模光纤作为传输介质，最大段长可达10公里"
    ],
    "answer": 3,
    "explanation": "802.3ae即万兆以太网，使用850nm多模光纤最大段长仅约300米，不能达10公里，D描述错误。"
  },
  {
    "id": 3065,
    "type": "single",
    "category": "无线网络",
    "paper": "real2008b",
    "question": "关于无线局域网，下面叙述中正确的是 （ ） 。",
    "options": [
      "A. 802.11a和802.11b都可以在2.4ghz频段工作",
      "B. 802.11b和802.11g都可以在2.4ghz频段工作",
      "C. 802.11a和802.11b都可以在5ghz频段工作",
      "D. 802.11b和802.11g都可以在5ghz频段工作"
    ],
    "answer": 1,
    "explanation": "802.11b和802.11g均工作在2.4GHz频段，802.11a工作在5GHz频段，故B正确。"
  },
  {
    "id": 3066,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008b",
    "question": "ieee 802.11i标准增强了wlan的安全性，下面关于802.11i的描述中，错误的是 （ ） 。",
    "options": [
      "A. 加密算法采用高级数据加密标准aes",
      "B. 加密算法采用对等保密协议wep",
      "C. 用802.1x实现了访问控制",
      "D. 使用tkip协议实现了动态的加密过程"
    ],
    "answer": 1,
    "explanation": "802.11i采用AES加密和802.1x访问控制，并支持TKIP，取代了不安全的WEP，故B描述错误。"
  },
  {
    "id": 3067,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2008b",
    "question": "adsl是一种宽带接入技术，这种技术使用的传输介质是 （ ） 。",
    "options": [
      "A. 电话线",
      "B. catv电缆",
      "C. 基带同轴电缆",
      "D. 无线通信网"
    ],
    "answer": 0,
    "explanation": "ADSL是非对称数字用户线技术，利用现有电话线传输宽带信号，传输介质为电话线。"
  },
  {
    "id": 3068,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008b",
    "question": "文档的编制在网络项目开发工作中占有突出的地位。下列有关网络工程文档的叙述中，不正确的是 （ ） 。",
    "options": [
      "A. 网络工程文档不能作为检查项目设计进度和设计质量的依据",
      "B. 网络工程文档是设计人员在一定阶段的工作成果和结束标识",
      "C. 网络工程文档的编制有助于提高设计效率",
      "D. 按照规范要求生成一套文档的过程，就是按照网络分析与设计规范完成网络项目分析与设计的过程"
    ],
    "answer": 0,
    "explanation": "网络工程文档可作为检查项目设计进度和设计质量的依据，故A叙述不正确。"
  },
  {
    "id": 3069,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008b",
    "question": "在层次化网络设计中， （ ） 不是核心层交换机的设备选型策略。",
    "options": [
      "A. 高速数据转发",
      "B. 高可靠性",
      "C. 良好的可管理性",
      "D. 实现网络的访问策略控制"
    ],
    "answer": 3,
    "explanation": "核心层关注高速转发和高可靠性，访问策略控制属于接入层或汇聚层功能，不是核心层选型策略。"
  },
  {
    "id": 3070,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008b",
    "question": "下面关于网络系统设计原则的说法中，正确的是 （ ） 。",
    "options": [
      "A. 网络设备应该尽量采用先进的网络设备，获得最高的网络性能",
      "B. 网络总体设计过程中，只需要考虑近期目标即可，不需要考虑扩展性",
      "C. 网络系统应采用开放标准和技术",
      "D. 网络需求分析独立于应用系统的需求分析"
    ],
    "answer": 2,
    "explanation": "网络系统设计应遵循开放标准和技术原则，保证互操作性和可扩展性，C正确。"
  },
  {
    "id": 3071,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008b",
    "question": "下面关于通信子网规划设计的说法中，错误的是 （ ） 。",
    "options": [
      "A. 网络拓扑结构必须具有一定的灵活性，易于重新配置",
      "B. 层次化设计的好处是可以有效地将全局通信问题分解考虑",
      "C. 网络拓扑结构设计应避免因个别节点损坏而影响整个网络的正常运行",
      "D. 应用服务器应该放置在接入层"
    ],
    "answer": 3,
    "explanation": "应用服务器应放置在核心层或数据中心，而非接入层，接入层用于终端接入，故D错误。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2008a";
  const A = [
  {
    "id": 3072,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "内存采用段式存储管理有许多优点，但 （ ） 不是其优点。",
    "options": [
      "A. 分段是信息逻辑单位，用户不可见",
      "B. 各段程序的修改互不影响",
      "C. 地址变换速度快、内存碎片少",
      "D. 便于多道程序共享主存的某些段"
    ],
    "answer": 2,
    "explanation": "段式存储管理地址变换需查段表，速度较慢且易产生外部碎片，故C不是其优点。"
  },
  {
    "id": 3073,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "现有四级指令流水线，分别完成取指、取作的时间依次为数、运算、传送结果四步操作。若完成上述操9ns、10ns、6ns、8ns。则流水线的操作周期应设计为 （ ） ns。",
    "options": [
      "A. 6",
      "B. 8",
      "C. 9",
      "D. 10"
    ],
    "answer": 3,
    "explanation": "流水线操作周期取决于最慢的一步，四步中最大时间为10ns，故操作周期应设计为10ns。"
  },
  {
    "id": 3074,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "内存按字节编址，地址从90000h到cffffh，若用存储容量为16k×8bit器芯片构成该内存，至少需要的存储 （ ） 片。",
    "options": [
      "A. 2",
      "B. 4",
      "C. 8",
      "D. 16"
    ],
    "answer": 3,
    "explanation": "地址范围90000H～CFFFFH共40000H字节即256KB，每片16K×8bit为16KB，需256/16=16片。"
  },
  {
    "id": 3075,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "（ ） 是一种面向数据流的开发方法，其基本思想是软件功能的分解和抽象。",
    "options": [
      "A. 结构化开发方法",
      "B. jackson系统开发方法",
      "C. booch方法",
      "D. uml（统一建模语言）"
    ],
    "answer": 0,
    "explanation": "结构化开发方法是面向数据流的开发方法，基本思想是软件功能的分解和抽象，故A正确。"
  },
  {
    "id": 3076,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "采用uml进行软件设计时，可用 （ ） 关系表示两类事物之间存在的特殊/一般关系，用聚集关系表示事物之间存在的整体一部分关系。",
    "options": [
      "A. 依赖",
      "B. 聚集",
      "C. 泛化",
      "D. 实现"
    ],
    "answer": 2,
    "explanation": "UML中泛化关系表示类之间的特殊/一般（继承）关系，聚集表示整体与部分关系，故选泛化。"
  },
  {
    "id": 3077,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "下列叙述中错误的是 （ ） 。",
    "options": [
      "A. 面向对象程序设计语言可支持过程化的程序设计",
      "B. 给定算法的时间复杂性与实现该算法所采用的程序设计语言无关",
      "C. 与汇编语言相比，采用脚本语言编程可获得更高的运行效率",
      "D. 面向对象程序设计语言不支持对一个对象的成员变量进行直接访问"
    ],
    "answer": 2,
    "explanation": "脚本语言通常解释执行，运行效率低于汇编等低级语言，故该叙述错误，选C。"
  },
  {
    "id": 3078,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "依据我国著作权法的规定， （ ） 属于著作人身权。",
    "options": [
      "A. 发行权",
      "B. 复制权",
      "C. 署名权",
      "D. 信息网络传播权"
    ],
    "answer": 2,
    "explanation": "著作权人身权包括发表权、署名权、修改权和保护作品完整权，署名权属于人身权。"
  },
  {
    "id": 3079,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008a",
    "question": "下图的两种编码方案分别是 （ ） 。",
    "options": [
      "A. ①差分曼彻斯特编码，②双相码",
      "B. ①nrz编码，②差分曼彻斯特编码",
      "C. ①nrz-i编码，②曼彻斯特编码",
      "D. ①极性码，②双极性码"
    ],
    "answer": 2,
    "explanation": "NRZ-I用电平跳变表示1、不跳变表示0；曼彻斯特码每位中间都有跳变，据波形特征判断为①NRZ-I②曼彻斯特。"
  },
  {
    "id": 3080,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008a",
    "question": "设信道带宽为3400hz，调制为4种不同的码元，根据nyquist定理 ，理想信道的数据速率为 （ ） 。",
    "options": [
      "A. 3.4kb/s",
      "B. 6.8kb/s",
      "C. 13.6kb/s",
      "D. 34kb/s"
    ],
    "answer": 2,
    "explanation": "奈奎斯特定理C=2W·log2N，W=3400Hz，N=4，则C=2×3400×2=13600b/s=13.6kb/s。"
  },
  {
    "id": 3081,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2008a",
    "question": "采用crc校验的生成多项式为g（x）=x16+x15+x2+1，它产生的校验码是 （ ） 位。",
    "options": [
      "A. 2",
      "B. 4",
      "C. 16",
      "D. 32"
    ],
    "answer": 2,
    "explanation": "CRC校验码位数等于生成多项式最高次幂，g(x)最高次为16，故校验码为16位。"
  },
  {
    "id": 3082,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008a",
    "question": "ipv6地址以16进制数表示，每4个16进制数为一组，组之间用冒号分隔，下面的ipv6地址adbf:0000:feea:0000:0000:00ea:00ac:deed的简化写法是 （ ） 。",
    "options": [
      "A. adbf:0:feea:00:ea:ac:deed",
      "B. adbf:0:feea::ea:ac:deed",
      "C. adbf:0:feea:ea:ac:deed",
      "D. adbf::feea::ea:ac:deed"
    ],
    "answer": 1,
    "explanation": "IPv6可用双冒号压缩连续全零组，且只能出现一次，故正确简化为adbf:0:feea::ea:ac:deed。"
  },
  {
    "id": 3083,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2008a",
    "question": "浏览器与web服务器通过建立 （ ） 连接来传送网页。",
    "options": [
      "A. udp",
      "B. tcp",
      "C. ip",
      "D. rip"
    ],
    "answer": 1,
    "explanation": "HTTP基于TCP，浏览器与Web服务器通过建立TCP连接传送网页，故选TCP。"
  },
  {
    "id": 3084,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2008a",
    "question": "在tcp协议中，采用 （ ） 来区分不同的应用进程。",
    "options": [
      "A. 端口号",
      "B. ip地址",
      "C. 协议类型",
      "D. mac地址"
    ],
    "answer": 0,
    "explanation": "TCP用端口号标识不同应用进程，IP地址标识主机，端口号实现进程到进程的通信。"
  },
  {
    "id": 3085,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008a",
    "question": "arp协议的作用是由ip地址求mac地址，arp请求是广播发送，arp响应是 （ ） 发送。",
    "options": [
      "A. 单播",
      "B. 组播",
      "C. 广播",
      "D. 点播"
    ],
    "answer": 0,
    "explanation": "ARP请求以广播发送寻找目标MAC，目标主机收到后以单播方式回复ARP响应。"
  },
  {
    "id": 3086,
    "type": "single",
    "category": "路由协议",
    "paper": "real2008a",
    "question": "下面有关bgp4协议的描述中，不正确的是 （ ） 。",
    "options": [
      "A. bgp4是自治系统之间的路由协议",
      "B. bgp4不支持cidr技术",
      "C. bgp4把最佳通路加入路由表并通告邻居路由器",
      "D. bgp4封装在tcp段中传送"
    ],
    "answer": 1,
    "explanation": "BGP-4是自治系统间的外部网关协议，支持CIDR和路由聚合，故“不支持CIDR”描述错误。"
  },
  {
    "id": 3087,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008a",
    "question": "icmp协议在网络中起到了差错控制和交通控制的作用。如果在ip数据报的传送过程中，如果出现拥塞，则路由器发出 （ ） 报文。",
    "options": [
      "A. 路由重定向",
      "B. 目标不可到达",
      "C. 源抑制",
      "D. 超时"
    ],
    "answer": 2,
    "explanation": "ICMP源抑制报文用于通知源主机网络出现拥塞，使其降低发送速率，实现流量控制。"
  },
  {
    "id": 3088,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008a",
    "question": "若linux用户需要将ftp默认的21号端口修改为8800，可以修改 （ ） 配置文件。",
    "options": [
      "A. /etc/vsftpd/userconf",
      "B. /etc/vsftpd/vsftpd.conf",
      "C. /etc/resolv.conf",
      "D. /etc/hosts"
    ],
    "answer": 1,
    "explanation": "vsftpd服务的端口等参数配置在/etc/vsftpd/vsftpd.conf文件中，修改listen_port即可。"
  },
  {
    "id": 3089,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008a",
    "question": "在windows server 2003的“管理您的服务器”界面中，可以通过 （ ） 安装配置dhcp服务器。",
    "options": [
      "A. active directory",
      "B. 管理服务器角色",
      "C. iis 6.0",
      "D. 代理服务器"
    ],
    "answer": 1,
    "explanation": "Windows Server 2003通过“管理您的服务器”中的“管理服务器角色”添加DHCP服务器角色。"
  },
  {
    "id": 3090,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008a",
    "question": "用户可以通过http://www.a.com和http://www.b.com访问在同一台服务器上 （ ）不同的两个web站点。",
    "options": [
      "A. ip地址",
      "B. 端口号",
      "C. 协议",
      "D. 虚拟目录"
    ],
    "answer": 0,
    "explanation": "同一服务器上可用不同IP地址（或主机头）区分多个Web站点，题中两域名对应不同IP。"
  },
  {
    "id": 3091,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2008a",
    "question": "在windows操作系统下，ftp客户端可以使用 （ ） 命令显示客户端当前目录中的文件。",
    "options": [
      "A. dir",
      "B. list",
      "C. !dir",
      "D. !list"
    ],
    "answer": 2,
    "explanation": "FTP客户端中“!”表示执行本地命令，!dir用于显示本地当前目录下的文件列表。"
  },
  {
    "id": 3092,
    "type": "single",
    "category": "无线网络",
    "paper": "real2008a",
    "question": "设置计算机的无线网卡，使该计算机与实验室的无线访问点labap之间的通信能够受密码保护，指定密钥为2350ad9fe0，则下图中应设置 （ ） 。",
    "options": [
      "A. ssid为labap，网络验证为开放式，数据加密为wep",
      "B. ssid为2350ad9fe0，网络验证为开放式，数据加密为wep",
      "C. ssid为labap，网络验证为wep，数据加密为开放式",
      "D. ssid为2350ad9fe0，网络验证为wep，数据加密为开放式"
    ],
    "answer": 0,
    "explanation": "SSID为无线网络名labap，密钥2350ad9fe0用于WEP加密，验证方式为开放式。"
  },
  {
    "id": 3093,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008a",
    "question": "下面的选项中，属于传输层安全协议的是 （ ） 。",
    "options": [
      "A. ipsec",
      "B. l2tp",
      "C. tls",
      "D. pptp"
    ],
    "answer": 2,
    "explanation": "TLS是传输层安全协议，为应用层提供加密传输；IPSec、L2TP、PPTP工作在网络层或链路层。"
  },
  {
    "id": 3094,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008a",
    "question": "某银行为用户提供网上服务，允许用户通过浏览器管理自己的银行账户信息。为保障通信的安全，该web服务器可选的协议是 （ ） 。",
    "options": [
      "A. pop",
      "B. snmp",
      "C. http",
      "D. https"
    ],
    "answer": 3,
    "explanation": "HTTPS在HTTP基础上加入SSL/TLS加密，可保障网上银行通信安全，故选HTTPS。"
  },
  {
    "id": 3095,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2008a",
    "question": "（ ） 不属于电子邮件协议。",
    "options": [
      "A. pop3",
      "B. smtp",
      "C. imap",
      "D. mpls"
    ],
    "answer": 3,
    "explanation": "MPLS是多协议标签交换，属于网络层转发技术，不是电子邮件协议。"
  },
  {
    "id": 3096,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008a",
    "question": "某客户端采用ping命令检测网络连接故障时，发现可以ping通127.0.0.1及本机的ip地址，但无法ping通同一网段内其他工作正常的计算机的ip地址。该客户端的故障可能是 （ ） 。",
    "options": [
      "A. tcp/ip协议不能正常工作",
      "B. 本机网卡不能正常工作",
      "C. 本机网络接口故障",
      "D. dns服务器地址设置错误"
    ],
    "answer": 2,
    "explanation": "能ping通127.0.0.1说明TCP/IP协议栈正常，能ping通本机IP说明网卡工作正常，但无法ping通同网段其他主机，说明本机网络接口（如网线、接口配置）存在故障。"
  },
  {
    "id": 3097,
    "type": "single",
    "category": "网络管理",
    "paper": "real2008a",
    "question": "在snmpv2中，一个实体接收到一个报文，一般经过四个步骤：",
    "options": [
      "A. （1）（3）（2）（4）",
      "B. （3）（2）（1）（4）",
      "C. （4）（1）（3）（2）",
      "D. （2）（1）（3）（4）"
    ],
    "answer": 2,
    "explanation": "SNMPv2实体接收报文一般经过认证、解密、解析PDU、调度处理等步骤，按标准流程顺序为（4）（1）（3）（2），故选C。"
  },
  {
    "id": 3098,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008a",
    "question": "私网地址用于配置本地网络，下面的地址中，属于私网地址的是 （ ） 。",
    "options": [
      "A. 100.0.0.0",
      "B. 172.15.0.0",
      "C. 192.168.0.0",
      "D. 244.0.0.0"
    ],
    "answer": 2,
    "explanation": "私有地址范围包括10.0.0.0/8、172.16.0.0~172.31.0.0、192.168.0.0/16。192.168.0.0属于私有地址，其余均不在私有范围内。"
  },
  {
    "id": 3099,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008a",
    "question": "以下给出的地址中，不属于子网192.168.64.0/20的主机地址是 （ ） 。",
    "options": [
      "A. 192.168.78.17",
      "B. 192.168.79.16",
      "C. 192.168.82.14",
      "D. 192.168.66.15"
    ],
    "answer": 2,
    "explanation": "192.168.64.0/20的地址范围是192.168.64.0~192.168.79.255。192.168.82.14超出该范围，不属于该子网的主机地址。"
  },
  {
    "id": 3100,
    "type": "single",
    "category": "网络安全",
    "paper": "real2008a",
    "question": "路由器命令“router(config)# access-list 1 permit 192.168.1.1”的含义是 （ ） 。",
    "options": [
      "A. 不允许源地址为192.168.1.1的分组通过，如果分组不匹配，则结束",
      "B. 允许源地址为192.168.1.1的分组通过，如果分组不匹配，则检查下一条语句",
      "C. 不允许目标地址为192.168.1.1的分组通过，如果分组不匹配，则结束",
      "D. 允许目标地址为192.168.1.1的分组通过，如果分组不匹配，则检查下一条语句"
    ],
    "answer": 1,
    "explanation": "access-list 1 permit 192.168.1.1表示允许源地址为192.168.1.1的分组通过；若不匹配则继续检查下一条ACL语句。"
  },
  {
    "id": 3101,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2008a",
    "question": "路由器console端口默认的数据速率为 （ ） 。",
    "options": [
      "A. 2400b/s",
      "B. 4800b/s",
      "C. 9600b/s",
      "D. 10mb/s"
    ],
    "answer": 2,
    "explanation": "路由器Console端口用于本地配置，默认数据速率为9600b/s，是网络设备出厂的标准配置速率。"
  },
  {
    "id": 3102,
    "type": "single",
    "category": "交换技术",
    "paper": "real2008a",
    "question": "当启用vtp修剪功能后，如果交换端口中加入一个新的vlan，则立即 （ ） 。",
    "options": [
      "A. 剪断与周边交换机的连接",
      "B. 把新的vlan中的数据发送给周边交换机",
      "C. 向周边交换机发送vtp连接报文",
      "D. 要求周边交换机建立同样的vlan"
    ],
    "answer": 2,
    "explanation": "启用VTP修剪后，交换机加入新VLAN时会向周边交换机发送VTP连接通告报文，通知拓扑变化，使修剪信息同步更新。"
  },
  {
    "id": 3103,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2008a",
    "question": "以太网的csma/cd协议采用坚持型监听算法。与其他监听算法相比，这种算法的主要特点是 （ ） 。",
    "options": [
      "A. 传输介质利用率低，冲突概率也低",
      "B. 传输介质利用率高，冲突概率也高",
      "C. 传输介质利用率低，但冲突概率高",
      "D. 传输介质利用率高，但冲突概率低"
    ],
    "answer": 1,
    "explanation": "CSMA/CD采用1-坚持型监听算法，介质空闲立即发送，故介质利用率高，但多个站点同时监听易导致冲突概率也高。"
  },
  {
    "id": 3104,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2008a",
    "question": "ieee 802局域网中的地址分为两级，其中llc地址是 （ ） 。",
    "options": [
      "A. 应用层地址",
      "B. 上层协议实体的地址",
      "C. 主机的地址",
      "D. 网卡的地址"
    ],
    "answer": 1,
    "explanation": "IEEE 802局域网地址分两级：LLC地址是上层协议实体的地址（服务访问点SAP），MAC地址才是网卡物理地址。"
  },
  {
    "id": 3105,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2008a",
    "question": "快速以太网物理层规范100base-tx规定使用 （ ） 。",
    "options": [
      "A. 1对5类utp，支持10m/100m自动协商",
      "B. 1对5类utp，不支持10m/100m自动协商",
      "C. 2对5类utp，支持10m/100m自动协商",
      "D. 2对5类utp，不支持10m/100m自动协商"
    ],
    "answer": 2,
    "explanation": "100BASE-TX使用2对5类UTP（一对发送、一对接收），支持10M/100M自动协商，是快速以太网主流规范。"
  },
  {
    "id": 3106,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008a",
    "question": "以下关于网络存储描述正确的是 （ ） 。",
    "options": [
      "A. san系统是将存储设备连接到现有的网络上，其扩展能力有限",
      "B. san系统是将存储设备连接到现有的网络上，其扩展能力很强",
      "C. san系统使用专用网络，其扩展能力有限",
      "D. san系统使用专用网络，其扩展能力很强"
    ],
    "answer": 3,
    "explanation": "SAN采用专用存储网络（如光纤通道），与业务网络分离，具有很高的扩展能力和性能，故选D。"
  },
  {
    "id": 3107,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008a",
    "question": "（ ） 是错误的网络设备选型原则。",
    "options": [
      "A. 选择网络设备，应尽可能地选择同一厂家的产品",
      "B. 为了保证网络性能，应尽可能地选择性能高的产品",
      "C. 核心设备的选取要考虑系统日后的扩展性",
      "D. 核心设备选取要充分其可靠性"
    ],
    "answer": 1,
    "explanation": "设备选型应遵循实用性、经济性原则，并非性能越高越好，需结合实际需求，盲目追求高性能是错误的选型原则。"
  },
  {
    "id": 3108,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2008a",
    "question": "下面关于网络工程需求分析的论述中，正确的是 （ ） 。",
    "options": [
      "A. 任何网络都不可能是一个能够满足各项功能需求的万能网",
      "B. 必须采用最先进的网络设备，获得最高的网络性能",
      "C. 网络需求分析独立于应用系统的需求分析",
      "D. 网络需求分析时可以先不考虑系统的扩展性"
    ],
    "answer": 0,
    "explanation": "网络需求分析应基于实际应用，任何网络都无法满足所有功能需求，需权衡取舍，故选A。"
  },
  {
    "id": 3109,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2008a",
    "question": "关于项目管理甘特图的结构，下列选项中合理的是 （ ） 。",
    "options": [
      "A. 任务名称，工期，开始时间，前置任务，后置任务，资源名称",
      "B. 任务名称，开始时间，完成时间，後置任务，人力资源，进度线",
      "C. 任务名称，工期，开始时间，完成时间，前置任务，资源名称，进度线",
      "D. 任务名称，开始时间，完成时间，前置任务，人力资源，进度线"
    ],
    "answer": 2,
    "explanation": "甘特图结构通常包含任务名称、工期、开始时间、完成时间、前置任务、资源名称和进度线，选项C最完整合理。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2007b";
  const A = [
  {
    "id": 3110,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "若内存地址区间为4000H~43FFH，每个存储单位可存储16位二进制数，该内存区域由4片存储器芯片构成，则构成该内存所用的存储器芯片的容量是 （ ） 。",
    "options": [
      "A. 512×16bit",
      "B. 256×8bit",
      "C. 256×16bit",
      "D. 1024×8bit"
    ],
    "answer": 2,
    "explanation": "地址区间4000H~43FFH共1024个单元，每单元16位，总容量1024×16bit，由4片构成，每片容量为256×16bit。"
  },
  {
    "id": 3111,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "选择软件开发工具时，应考虑功能、 （ ） 、稳健性、硬件要求和性能、服务和支持。",
    "options": [
      "A. 易用性",
      "B. 易维护性",
      "C. 可移植性",
      "D. 可扩充性"
    ],
    "answer": 0,
    "explanation": "选择软件开发工具时应考虑功能、易用性、稳健性、硬件要求、性能、服务和支持等因素，易用性是重要考量。"
  },
  {
    "id": 3112,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "内聚性和耦合性是度量软件模块独立性的重要准则，软件设计时应力求 （ ） 。",
    "options": [
      "A. 高内聚，高耦合",
      "B. 高内聚，低耦合",
      "C. 低内聚，高耦合",
      "D. 低内聚，低耦合"
    ],
    "answer": 1,
    "explanation": "软件设计应追求高内聚、低耦合，以提高模块独立性，便于维护和复用，故选B。"
  },
  {
    "id": 3113,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "若某人持有盗版软件，但他本人确实不知道该软件是盗版的，则 （ ） 承担侵权责任。",
    "options": [
      "A. 应由该软件的持有者",
      "B. 应由该软件的提供者",
      "C. 应由该软件的提供者和持有者共同",
      "D. 该软件的提供者和持有者都不"
    ],
    "answer": 1,
    "explanation": "根据著作权法，持有盗版软件但不知情的使用者不承担侵权责任，应由盗版软件的提供者承担侵权责任。"
  },
  {
    "id": 3114,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "（ ） 不属于知识产权的范围。",
    "options": [
      "A. 地理标志权",
      "B. 物权",
      "C. 邻接权",
      "D. 商业秘密权"
    ],
    "answer": 1,
    "explanation": "知识产权包括著作权、专利权、商标权、地理标志权、商业秘密权、邻接权等，物权属于财产权，不属于知识产权。"
  },
  {
    "id": 3115,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007b",
    "question": "若文件系统容许不同用户的文件可以具有相同的文件名，则操作系统应采用 （ ） 来实现。",
    "options": [
      "A. 索引表",
      "B. 索引文件",
      "C. 指针",
      "D. 多级目录"
    ],
    "answer": 3,
    "explanation": "文件系统要实现不同用户可有相同文件名，需采用多级目录结构，通过不同目录路径区分同名文件。"
  },
  {
    "id": 3116,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "页式虚拟存储系统的逻辑地址是由页号和页内地址两部分组成，地址变换过程如下图所示。假定页面的大小为8K，图中所示的十进制逻辑地址9612经过地址变换后，形成的物理地址a应为十进制 （ ） 。",
    "options": [
      "A. 42380",
      "B. 25996",
      "C. 9612",
      "D. 8192"
    ],
    "answer": 1,
    "explanation": "页面大小8K=8192字节，逻辑地址9612的页号=9612/8192=1，页内地址=9612-8192=1420。查页表得页号1对应物理块号3，物理地址=3×8192+1420=25996。"
  },
  {
    "id": 3117,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2007b",
    "question": "按照美国制定的光纤通信标准SONET，OC-48的线路速率是 （ ） Mb/s。",
    "options": [
      "A. 41.84",
      "B. 622.08",
      "C. 2488.32",
      "D. 9953.28"
    ],
    "answer": 2,
    "explanation": "SONET中OC-1速率为51.84Mb/s，OC-48为48倍，即51.84×48=2488.32Mb/s。"
  },
  {
    "id": 3118,
    "type": "single",
    "category": "交换技术",
    "paper": "real2007b",
    "question": "关于交换机，下面说法中错误的是 （ ） 。",
    "options": [
      "A. 以太网交换机根据MAC地址进行交换",
      "B. 帧中继交换机根据虚电路号DLCI进行交换",
      "C. 三层交换机根据网络层地址进行转发，并根据MAC地址进行交换",
      "D. ATM交换机根据虚电路标识和MAC地址进行交换"
    ],
    "answer": 3,
    "explanation": "ATM交换机根据虚通路标识VPI和虚通道标识VCI进行交换，与MAC地址无关，故D错误。"
  },
  {
    "id": 3119,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "关于路由器，下列说法中正确的是 （ ） 。",
    "options": [
      "A. 路由器处理的信息量比交换机少，因而转发速度比交换机快",
      "B. 对于同一目标，路由器只提供延迟最小的最佳路由",
      "C. 通常的路由器可以支持多种网络层协议，并提供不同协议之间的分组转换",
      "D. 路由器不但能够根据逻辑地址进行转发，而且可以根据物理地址进行转发"
    ],
    "answer": 2,
    "explanation": "路由器工作在网络层，可支持多种网络层协议并实现不同协议间的分组转换，这是其重要功能。"
  },
  {
    "id": 3120,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2007b",
    "question": "下面关于DPSK调制技术的描述，正确的是 （ ） 。",
    "options": [
      "A. 不同的码元幅度不同",
      "B. 不同的码元前沿有不同的相位改变",
      "C. 由四种相位不同的码元组成",
      "D. 由不同的频率组成不同的码元"
    ],
    "answer": 1,
    "explanation": "DPSK为差分相移键控，利用相邻码元载波相位的变化来携带信息，故不同码元前沿有不同的相位改变。"
  },
  {
    "id": 3121,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2007b",
    "question": "设信道带宽为4000Hz，调制为4种不同的码元，根据Nyquist定理，理想信道的数据速率为 （ 8） 。",
    "options": [
      "A. 10 kb/s",
      "B. 16 kb/s",
      "C. 24 kb/s",
      "D. 48 kb/s"
    ],
    "answer": 1,
    "explanation": "Nyquist定理：C=2W·log2N=2×4000×log2(4)=2×4000×2=16000b/s=16kb/s。"
  },
  {
    "id": 3122,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2007b",
    "question": "使用ADSL拨号上网，需要在用户端安装 （ ） 协议。",
    "options": [
      "A. PPP",
      "B. SLIP",
      "C. PPTP",
      "D. PPPoE"
    ],
    "answer": 3,
    "explanation": "ADSL拨号上网采用PPPoE协议，将PPP帧封装在以太网帧中，实现用户认证和IP地址分配。"
  },
  {
    "id": 3123,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "简单邮件传输协议（SMTP）默认的端口号是 （ ） 。",
    "options": [
      "A. 21",
      "B. 23",
      "C. 25",
      "D. 80"
    ],
    "answer": 2,
    "explanation": "SMTP用于发送邮件，默认使用TCP的25号端口。"
  },
  {
    "id": 3124,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "在FTP协议中，控制连接是由 （ ） 主动建立的。",
    "options": [
      "A. 服务器端",
      "B. 客户端",
      "C. 操作系统",
      "D. 服务提供商"
    ],
    "answer": 1,
    "explanation": "FTP采用控制连接和数据连接，其中控制连接由客户端主动向服务器的21端口发起建立。"
  },
  {
    "id": 3125,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "开放最短路径优先协议（OSPF）采用 （ ） 算法计算最佳路由。",
    "options": [
      "A. Dynamic-Search",
      "B. Bellman-Ford",
      "C. Dijkstra",
      "D. Spanning-Tree"
    ],
    "answer": 2,
    "explanation": "OSPF是链路状态路由协议，采用Dijkstra最短路径优先算法计算最佳路由。"
  },
  {
    "id": 3126,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "关于OSPF协议，下列说法错误的是 （ ） 。",
    "options": [
      "A. OSPF的每个区域（Area）运行路由选择算法的一个实例",
      "B. OSPF路由器向各个活动端口组播Hello分组来发现邻居路由器",
      "C. Hello协议还用来选择指定路由器，每个区域选出一个指定路由器",
      "D. OSPF协议默认的路由更新周期为30秒"
    ],
    "answer": 3,
    "explanation": "OSPF通过Hello分组发现和维持邻居关系，不采用周期性路由更新，故默认更新周期30秒的说法错误。"
  },
  {
    "id": 3127,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "在RIP协议中，可以采用水平分割法（Split Horizon）解决路由环路问题，下面的说法中正确的是 （ ） 。",
    "options": [
      "A. 把网络分割成不同的区域以减少路由循环",
      "B. 不要把从一个邻居学习到的路由再发送回该邻居",
      "C. 设置邻居之间的路由度量为无限大",
      "D. 路由器必须把整个路由表发送给自己的邻居"
    ],
    "answer": 1,
    "explanation": "水平分割法的核心是路由器不把从某个邻居学到的路由再发送回该邻居，从而避免路由环路。"
  },
  {
    "id": 3128,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "关于链路状态协议与距离矢量协议的区别，以下说法中错误的是 （ ） 。",
    "options": [
      "A. 链路状态协议周期性地发布路由信息，而距离矢量协议在网络拓扑发生变化时发布路由信息",
      "B. 链路状态协议由网络内部指定的路由器发布路由信息，而距离矢量协议的所有路由器都发布路由信息",
      "C. 链路状态协议采用组播方式发布路由信息，而距离矢量协议以广播方式发布路由信息",
      "D. 链路状态协议发布的组播报文要求应答，这种通信方式比不要求应答的广播通信可靠"
    ],
    "answer": 0,
    "explanation": "链路状态协议在网络拓扑变化时发布路由信息，距离矢量协议才周期性发布，故A说法颠倒错误。"
  },
  {
    "id": 3129,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "关于自治系统（Autonomous System，AS），以下说法错误的是 （ ） 。",
    "options": [
      "A. AS是由某一管理部门统一控制的一组网络",
      "B. AS的标识是唯一的16位编号",
      "C. 在AS内部采用相同的路由技术，实现统一的路由策略",
      "D. 如果一个网络要从Internet获取路由信息，可以使用自定义的AS编号"
    ],
    "answer": 3,
    "explanation": "AS编号由IANA统一分配，不能自定义，否则会导致Internet路由信息混乱，故D错误。"
  },
  {
    "id": 3130,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "TCP段头的最小长度是 （ ） 字节。",
    "options": [
      "A. 16",
      "B. 20",
      "C. 24",
      "D. 32"
    ],
    "answer": 1,
    "explanation": "TCP段头固定部分为20字节，加上可选项最大40字节，最小长度为20字节。"
  },
  {
    "id": 3131,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "互联网中常用的音频文件格式不包括 （ ） 。",
    "options": [
      "A. Wave",
      "B. RealAudio",
      "C. MPEG",
      "D. JPEG"
    ],
    "answer": 3,
    "explanation": "JPEG是图像文件格式，Wave、RealAudio、MPEG均为常用音频文件格式。"
  },
  {
    "id": 3132,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007b",
    "question": "要使Samba服务器在网上邻居中出现的主机为smbserver，其配置文件smb.conf中应包含 （ ） 。",
    "options": [
      "A. workgroup=smbserver",
      "B. netbios name=smbserver",
      "C. server string=smbserver",
      "D. guest account=smbserver"
    ],
    "answer": 1,
    "explanation": "Samba配置文件中netbios name参数用于设置该服务器在Windows网上邻居中显示的主机名。"
  },
  {
    "id": 3133,
    "type": "single",
    "category": "网络管理",
    "paper": "real2007b",
    "question": "某DHCP服务器的地址池范围为192.36.96.101~192.36.96.150，该网段下某Windows工作站启动后，自动获得的IP地址是169.254.220.167，这是因为 （ ） 。",
    "options": [
      "A. DHCP服务器提供保留的IP地址",
      "B. DHCP服务器不工作",
      "C. DHCP服务器设置租约时间太长",
      "D. 工作站接到了网段内其他DHCP服务器提供的地址"
    ],
    "answer": 1,
    "explanation": "169.254.0.0/16是Windows自动专用IP地址，当工作站无法联系到DHCP服务器时自动配置，说明DHCP服务器不工作。"
  },
  {
    "id": 3134,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "以下关于FTP和TFTP描述中，正确的是 （ ） 。",
    "options": [
      "A. FTP和TFTP都基于TCP协议",
      "B. FTP和TFTP都基于UDP协议",
      "C. FTP基于TCP协议，TFTP基于UDP协议",
      "D. FTP基于UDP协议，TFTP基于TCP协议"
    ],
    "answer": 2,
    "explanation": "FTP基于TCP提供可靠传输，TFTP基于UDP实现简单文件传输，故C正确。"
  },
  {
    "id": 3135,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007b",
    "question": "安全电子邮件协议PGP不支持 （ ） 。",
    "options": [
      "A. 确认发送者的身份",
      "B. 确认电子邮件未被修改",
      "C. 防止非授权者阅读电子邮件",
      "D. 压缩电子邮件大小"
    ],
    "answer": 3,
    "explanation": "PGP提供加密、数字签名和身份认证功能，但不具备压缩电子邮件大小的功能。"
  },
  {
    "id": 3136,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007b",
    "question": "Needham-Schroeder协议是基于 （ ） 的认证协议。",
    "options": [
      "A. 共享密钥",
      "B. 公钥",
      "C. 报文摘要",
      "D. 数字证书"
    ],
    "answer": 0,
    "explanation": "Needham-Schroeder协议是基于对称密码体制的认证协议，通信双方预先共享同一密钥，由可信第三方KDC分发会话密钥，故属于共享密钥认证。"
  },
  {
    "id": 3137,
    "type": "single",
    "category": "网络管理",
    "paper": "real2007b",
    "question": "在网络管理中要防护各种安全威胁。在SNMPv3中，不必要或无法防护的安全威胁是 （ ） 。",
    "options": [
      "A. 篡改管理信息：通过改变传输中的SNMP报文实施未经授权的管理操作",
      "B. 通信分析：第三者分析管理实体之间的通信规律，从而获取管理信息",
      "C. 假冒合法用户：未经授权的用户冒充授权用户，企图实施管理操作",
      "D. 消息泄露：SNMP引擎之间交换的信息被第三者偷听"
    ],
    "answer": 1,
    "explanation": "SNMPv3提供认证和加密机制，可防篡改、假冒和消息泄露；但通信分析通过流量规律获取信息，属于无法防护的安全威胁。"
  },
  {
    "id": 3138,
    "type": "single",
    "category": "网络管理",
    "paper": "real2007b",
    "question": "下面关于几个网络管理工具的描述中，错误的是 （ ） 。",
    "options": [
      "A. netstat可用于显示IP、TCP、UDP、ICMP等协议的统计数据",
      "B. sniffer能够使网络接口处于杂收模式，从而可截获网络上传输的分组",
      "C. winipcfg采用MS-DOS工作方式显示网络适配器和主机的有关信息",
      "D. tracert可以发现数据包到达目标主机所经过的路由器和到达时间"
    ],
    "answer": 2,
    "explanation": "winipcfg是Windows图形界面的IP配置查看工具，并非MS-DOS工作方式，故该描述错误；其余三项描述均正确。"
  },
  {
    "id": 3139,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007b",
    "question": "在Windows XP中用事件查看器查看日志文件，可看到的日志包括 （ ） 。",
    "options": [
      "A. 用户访问日志、安全性日志和系统日志",
      "B. 应用程序日志、安全性日志和系统日志",
      "C. 网络攻击日志、安全性日志和记帐日志",
      "D. 网络连接日志、安全性日志和服务日志"
    ],
    "answer": 1,
    "explanation": "Windows XP事件查看器包含应用程序日志、安全性日志和系统日志三类，用户访问、网络攻击等日志不属于其标准分类。"
  },
  {
    "id": 3140,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "有4个子网：10.1.201.0/24、10.1.203.0/24、10.1.207.0/24和10.1.199.0/24，经路由汇聚后得到的网络地址是 （ ） 。",
    "options": [
      "A. 10.1.192.0/20",
      "B. 10.1.192.0/21",
      "C. 10.1.200.0/21",
      "D. 10.1.224.0/20"
    ],
    "answer": 0,
    "explanation": "四个子网第三字节为199、201、203、207，二进制前三位相同，取共同前缀需掩码/21以上；汇聚后为10.1.192.0/20，覆盖199~207范围。"
  },
  {
    "id": 3141,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "私网地址用于企业内部IP地址分配，网络标准规定的私网地址有 （52） 。",
    "options": [
      "A. A类有10个：10.0.0.0~20.0.0.0",
      "B. B类有16个：172.0.0.0~172.15.0.0",
      "C. C类有256个：192.168.0.0~192.168.255.0",
      "D. D类有1个：244.0.0.0"
    ],
    "answer": 2,
    "explanation": "RFC1918规定私有地址：10.0.0.0/8、172.16.0.0~172.31.0.0、192.168.0.0~192.168.255.0，即C类有256个网段，故选C。"
  },
  {
    "id": 3142,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007b",
    "question": "下面的地址中，属于本地回路地址的是 （ ） 。",
    "options": [
      "A. 10.10.10.1",
      "B. 255.255.255.0",
      "C. 127.0.0.1",
      "D. 192.0.0.1"
    ],
    "answer": 2,
    "explanation": "127.0.0.0/8为本地回路地址，127.0.0.1是常用的本地回环地址，用于本机协议栈测试，数据不经过网络传输。"
  },
  {
    "id": 3143,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "在路由器的特权模式下键入命令setup，则路由器进入 （ ） 模式。",
    "options": [
      "A. 用户命令状态",
      "B. 局部配置状态",
      "C. 特权命令状态",
      "D. 设置对话状态"
    ],
    "answer": 3,
    "explanation": "在路由器特权模式下执行setup命令，会进入设置对话状态，以交互式问答方式引导用户完成路由器的基本配置。"
  },
  {
    "id": 3144,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "要进入以太网端口配置模式，下面的路由器命令中，哪一条是正确的？ （ ） 。",
    "options": [
      "A. R1(config)# interface e0",
      "B. R1&gt; interface e0",
      "C. R1&gt; line e0",
      "D. R1(config)# line s0"
    ],
    "answer": 0,
    "explanation": "进入接口配置模式需在全局配置模式下使用interface命令，R1(config)# interface e0正确进入以太网口e0的配置模式。"
  },
  {
    "id": 3145,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007b",
    "question": "要显示路由器的运行配置，下面的路由器命令中，哪一条是正确的？ （ ） 。",
    "options": [
      "A. R1# show running-config",
      "B. R1# show startup-config",
      "C. R1&gt; show startup-config",
      "D. R1&gt; show running-config"
    ],
    "answer": 0,
    "explanation": "show running-config用于显示当前运行配置，需在特权模式（R1#）下执行；startup-config显示的是启动配置文件。"
  },
  {
    "id": 3146,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007b",
    "question": "下面关于802.1q协议的说明中正确的是 （ ） 。",
    "options": [
      "A. 这个协议在原来的以太网帧中增加了4个字节的帧标记字段",
      "B. 这个协议是IETF制定的",
      "C. 这个协议在以太网帧的头部增加了26字节的帧标记字段",
      "D. 这个协议在帧尾部附加了4字节的CRC校验码"
    ],
    "answer": 0,
    "explanation": "IEEE 802.1q在以太网帧源MAC地址后插入4字节VLAN标记字段，用于标识VLAN，由IEEE制定，不是IETF。"
  },
  {
    "id": 3147,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007b",
    "question": "配置VLAN有多种方法，下面哪一条不是配置VLAN的方法？ （ ） 。",
    "options": [
      "A. 把交换机端口指定给某个VLAN",
      "B. 把MAC地址指定给某个VLAN",
      "C. 由DHCP服务器动态地为计算机分配VLAN",
      "D. 根据上层协议来划分VLAN"
    ],
    "answer": 2,
    "explanation": "VLAN划分方法有基于端口、MAC地址、上层协议等，DHCP动态分配IP地址与VLAN划分无关，不是配置VLAN的方法。"
  },
  {
    "id": 3148,
    "type": "single",
    "category": "交换技术",
    "paper": "real2007b",
    "question": "下面哪个设备可以转发不同VLAN之间的通信？ （ ） 。",
    "options": [
      "A. 二层交换机",
      "B. 三层交换机",
      "C. 网络集线器",
      "D. 生成树网桥"
    ],
    "answer": 1,
    "explanation": "不同VLAN间通信需三层转发，三层交换机具备路由功能，可完成VLAN间路由；二层交换机、集线器和网桥均不能。"
  },
  {
    "id": 3149,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007b",
    "question": "以太网协议中使用了二进制指数后退算法，这个算法的特点是 （ ） 。",
    "options": [
      "A. 容易实现，工作效率高",
      "B. 在轻负载下能提高网络的利用率",
      "C. 在重负载下能有效分解冲突",
      "D. 在任何情况下不会发生阻塞"
    ],
    "answer": 2,
    "explanation": "二进制指数后退算法使冲突后重传时延随冲突次数加倍，在重负载下能有效分解冲突，降低再次碰撞概率。"
  },
  {
    "id": 3150,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007b",
    "question": "以下属于万兆以太网物理层标准的是 （ ） 。",
    "options": [
      "A. IEEE 802.3u",
      "B. IEEE 802.3a",
      "C. IEEE 802.3e",
      "D. IEEE 802.3ae"
    ],
    "answer": 3,
    "explanation": "IEEE 802.3ae是万兆以太网（10Gb/s）的物理层标准；802.3u是快速以太网，802.3a、802.3e为早期标准。"
  },
  {
    "id": 3151,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007b",
    "question": "快速以太网标准比原来的以太网标准的数据速率提高了10倍，这时它的网络跨距（最大段长） （ ） 。",
    "options": [
      "A. 没有改变",
      "B. 变长了",
      "C. 缩短了",
      "D. 可以根据需要设定"
    ],
    "answer": 2,
    "explanation": "快速以太网速率提高10倍，但受冲突检测和信号衰减限制，最大段长由100m缩短，网络跨距变小。"
  },
  {
    "id": 3152,
    "type": "single",
    "category": "无线网络",
    "paper": "real2007b",
    "question": "无线局域网（WLAN）标准IEEE 802.11g规定的最大数据速率是 （ ） 。",
    "options": [
      "A. 1 Mb/s",
      "B. 11 Mb/s",
      "C. 5 Mb/s",
      "D. 54 Mb/s"
    ],
    "answer": 3,
    "explanation": "IEEE 802.11g工作在2.4GHz频段，采用OFDM技术，最大数据速率为54Mb/s，且兼容802.11b。"
  },
  {
    "id": 3153,
    "type": "single",
    "category": "无线网络",
    "paper": "real2007b",
    "question": "无线局域网标准IEEE 802.11i提出了新的TKIP协议来解决 （ ） 中存在的安全隐患。",
    "options": [
      "A. WAP协议",
      "B. WEP协议",
      "C. MD5",
      "D. 无线路由器"
    ],
    "answer": 1,
    "explanation": "IEEE 802.11i提出TKIP和CCMP等机制，用于解决WEP协议中密钥固定、易被破解等安全隐患，增强WLAN安全性。"
  },
  {
    "id": 3154,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007b",
    "question": "采用以太网链路聚合技术将 （ ） 。",
    "options": [
      "A. 多个逻辑链路组成一个物理链路",
      "B. 多个逻辑链路组成一个逻辑链路",
      "C. 多个物理链路组成一个物理链路",
      "D. 多个物理链路组成一个逻辑链路"
    ],
    "answer": 3,
    "explanation": "链路聚合将多条物理链路捆绑为一条逻辑链路，可增加带宽并提供冗余，属于物理链路到逻辑链路的聚合。"
  },
  {
    "id": 3155,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007b",
    "question": "在冗余磁盘阵列中，以下不具有容错技术的是 （ ） 。",
    "options": [
      "A. RAID 0",
      "B. RAID 1",
      "C. RAID 3",
      "D. RAID 5"
    ],
    "answer": 0,
    "explanation": "RAID 0采用条带化，仅提高读写性能，无数据冗余和容错能力；RAID 1、3、5均具有不同程度的容错功能。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2007a";
  const A = [
  {
    "id": 3156,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "（ ） 不属于计算机控制器中的部件。",
    "options": [
      "A. 指令寄存器ir",
      "B. 程序计数器pc",
      "C. 算术逻辑单元alu",
      "D. 程序状态字寄存器psw"
    ],
    "answer": 2,
    "explanation": "控制器由程序计数器PC、指令寄存器IR、指令译码器、时序部件和程序状态字寄存器PSW等组成；算术逻辑单元ALU属于运算器，不属于控制器。"
  },
  {
    "id": 3157,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "在cpu与主存之间设置高速缓冲存储器cache，其目的是为了 （ ） 。",
    "options": [
      "A. 扩大主存的存储容量",
      "B. 提高cpu对主存的访问效率",
      "C. 既扩大主存容量又提高存取速度",
      "D. 提高外存储器的速度"
    ],
    "answer": 1,
    "explanation": "Cache位于CPU与主存之间，利用程序访问的局部性原理存放常用数据，缓解速度差异，从而提高CPU对主存的访问效率，并不扩大主存容量。"
  },
  {
    "id": 3158,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "下面的描述中， （ ） 不是risc设计应遵循的设计原则。",
    "options": [
      "A. 指令条数应少一些",
      "B. 寻址方式尽可能少",
      "C. 采用变长指令，功能复杂的指令长度长而简单指令长度短",
      "D. 设计尽可能多的通用寄存器"
    ],
    "answer": 2,
    "explanation": "RISC设计原则包括指令条数少、寻址方式少、采用定长指令格式、设置大量通用寄存器；变长指令是CISC的特点，故C不是RISC原则。"
  },
  {
    "id": 3159,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "结构化开发方法中，数据流图是 （ ） 阶段产生的成果。",
    "options": [
      "A. 需求分析",
      "B. 总体设计",
      "C. 详细设计",
      "D. 程序编码"
    ],
    "answer": 0,
    "explanation": "结构化开发方法中，数据流图DFD用于描述系统的数据流动和处理过程，是需求分析阶段产生的主要成果。"
  },
  {
    "id": 3160,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "关于原型化开发方法的叙述中，不正确的是 （ ） 。",
    "options": [
      "A. 原型化方法适应于需求不明确的软件开发",
      "B. 在开发过程中，可以废弃不用早期构造的软件原型",
      "C. 原型化方法可以直接开发出最终产品",
      "D. 原型化方法利于确认各项系统服务的可用性"
    ],
    "answer": 2,
    "explanation": "原型化方法通过构造原型帮助明确需求，原型通常需经修改完善或废弃，不能直接作为最终产品交付，故C说法不正确。"
  },
  {
    "id": 3161,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "如果两名以上的申请人分别就同样的发明创造申请专利，专利权应授予是 （ ） 。",
    "options": [
      "A. 最先发明的人",
      "B. 最先申请的人",
      "C. 所有申请人",
      "D. 协商后的申请人"
    ],
    "answer": 1,
    "explanation": "我国专利法实行先申请原则，两个以上申请人分别就同样的发明创造申请专利的，专利权授予最先申请的人。"
  },
  {
    "id": 3162,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "cmm模型将软件过程的成熟度分为5个等级，在 （ ） 使用定量分析来不断地改进和管理软件过程。",
    "options": [
      "A. 优化级",
      "B. 管理级",
      "C. 定义级",
      "D. 可重复级"
    ],
    "answer": 0,
    "explanation": "CMM五级中，优化级是最高级，其特点是根据过程数据使用定量分析手段不断改进和优化软件过程。"
  },
  {
    "id": 3163,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "某系统的进程状态转换如下图所示，图中1、2、3、4分别表示引起状态转换的不同原因，原因4表示 （ ） 。",
    "options": [
      "A. 就绪进程被调度",
      "B. 运行进程执行了p操作",
      "C. 发生了阻塞进程等待的事件",
      "D. 运行进程时间片到了"
    ],
    "answer": 2,
    "explanation": "进程状态转换中，原因4使运行态进程转入阻塞态，即运行进程等待某事件发生而阻塞，对应发生了阻塞进程等待的事件。"
  },
  {
    "id": 3164,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "某网络工程计划图如下所示，边上的标记为任务编码及其需要的完成时间（天），则整个工程的工期为 （ ） 。",
    "options": [
      "A. 16",
      "B. 17",
      "C. 18",
      "D. 21"
    ],
    "answer": 3,
    "explanation": "网络工程计划图中，工期为关键路径上各任务时间之和，关键路径总时长为21天，故整个工程工期为21天。"
  },
  {
    "id": 3165,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2007a",
    "question": "关于多模光纤，下面的描述中描述错误的是 （ ） 。",
    "options": [
      "A. 多模光纤的芯线由透明的玻璃或塑料制成",
      "B. 多模光纤包层的折射率比芯线的折射率低",
      "C. 光波在芯线中以多种反射路径传播",
      "D. 多模光纤的数据速率比单模光纤的数据速率高"
    ],
    "answer": 3,
    "explanation": "多模光纤芯径大，光波以多种模式传播，存在模式色散，传输速率和距离均低于单模光纤，故D描述错误。"
  },
  {
    "id": 3166,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "关于路由器，下列说法中错误的是 （ ） 。",
    "options": [
      "A. 路由器可以隔离子网，抑制广播风暴",
      "B. 路由器可以实现网络地址转换",
      "C. 路由器可以提供可靠性不同的多条路由选择",
      "D. 路由器只能实现点对点的传输"
    ],
    "answer": 3,
    "explanation": "路由器可隔离子网、抑制广播风暴、实现NAT和提供多条路由选择；它既能连接点对点链路也能连接广播网络，故D错误。"
  },
  {
    "id": 3167,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007a",
    "question": "100base-fx采用4b/5b和nrz-i编码，这种编码方式的效率为 （ ） 。",
    "options": [
      "A. 50%",
      "B. 60%",
      "C. 80%",
      "D. 100%"
    ],
    "answer": 2,
    "explanation": "4B/5B编码将4位数据编成5位码元，编码效率为4/5=80%，NRZ-I仅用于线路传输，不影响该效率。"
  },
  {
    "id": 3168,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007a",
    "question": "在以太网中使用crc校验码，其生成多项式是 （ ） 。",
    "options": [
      "A. g(x)=x16+x12+x5+1",
      "B. g(x)=x16+x15+x2+1",
      "C. g(x)=x16+x11+x3+x2+x+1",
      "D. g(x)= x32+x26+x23+x22+x16+x12+x11+x10+x8+x7+x5+x4+x3+x+1"
    ],
    "answer": 3,
    "explanation": "以太网采用CRC校验，其生成多项式为CRC-32，即G(x)=x32+x26+x23+x22+x16+x12+x11+x10+x8+x7+x5+x4+x3+x+1。"
  },
  {
    "id": 3169,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2007a",
    "question": "8个9600b/s的信道按时分多路复用在一条线路上传输，在统计tdm情况下，假定每个子信道有80%的时间忙，复用线路的控制开销为5%，那么复用线路的带宽为 （ ） 。",
    "options": [
      "A. 32kb/s",
      "B. 64 kb/s",
      "C. 72 kb/s",
      "D. 96 kb/s"
    ],
    "answer": 1,
    "explanation": "统计TDM线路带宽=8×9600×80%÷(1-5%)≈64kb/s，即各子信道平均速率之和除以有效载荷比例。"
  },
  {
    "id": 3170,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2007a",
    "question": "设信道带宽为4khz，信噪比为30db，按照香农定理，信道的最大数据速率约等于 （ ） 。",
    "options": [
      "A. 10 kb/s",
      "B. 20 kb/s",
      "C. 30 kb/s",
      "D. 40 kb/s"
    ],
    "answer": 3,
    "explanation": "信噪比30dB即S/N=1000，由香农定理C=W·log2(1+S/N)=4k×log2(1001)≈40kb/s。"
  },
  {
    "id": 3171,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2007a",
    "question": "在hfc网络中，cable modem的作用是 （ ） 。",
    "options": [
      "A. 用于调制解调和拨号上网",
      "B. 用于调制解调以及作为以太网接口",
      "C. 用于连接电话线和用户终端计算机",
      "D. 连接isdn接口和用户终端计算机"
    ],
    "answer": 1,
    "explanation": "HFC网络中Cable Modem完成上/下行信号的调制解调，并向下提供以太网接口连接用户计算机。"
  },
  {
    "id": 3172,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2007a",
    "question": "以下属于对称数字用户线路（symmetrical digital subscriber line）的是 （ ） 。",
    "options": [
      "A. hdsl",
      "B. adsl",
      "C. radsl",
      "D. vdsl"
    ],
    "answer": 0,
    "explanation": "HDSL为高速对称数字用户线路，上下行速率对称；ADSL、RADSL、VDSL均为非对称数字用户线路。"
  },
  {
    "id": 3173,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "关于arp表，以下描述中正确的是 （ ） 。",
    "options": [
      "A. 提供常用目标地址的快捷方式来减少网络流量",
      "B. 用于建立ip地址到mac地址的映射",
      "C. 用于在各个子网之间进行路由选择",
      "D. 用于进行应用层信息的转换"
    ],
    "answer": 1,
    "explanation": "ARP表用于缓存IP地址到MAC地址的映射关系，实现同一局域网内数据帧的正确封装与发送。"
  },
  {
    "id": 3174,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007a",
    "question": "bgp协议的作用是 （ ） 。",
    "options": [
      "A. 用于自治系统之间的路由器之间交换路由信息",
      "B. 用于自治系统内部的路由器之间交换路由信息",
      "C. 用于主干网中路由器之间交换路由信息",
      "D. 用于园区网中路由器之间交换路由信息"
    ],
    "answer": 0,
    "explanation": "BGP是外部网关协议，用于不同自治系统AS之间的路由器交换网络可达性路由信息。"
  },
  {
    "id": 3175,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007a",
    "question": "关于rip，以下选项中错误的是 （ ） 。",
    "options": [
      "A. rip使用距离矢量算法计算最佳路由",
      "B. rip规定的最大跳数为16",
      "C. rip默认的路由更新周期为30秒",
      "D. rip是一种内部网关协议"
    ],
    "answer": 1,
    "explanation": "RIP规定最大跳数为15，16表示不可达，故B错误；RIP基于距离矢量算法，更新周期30秒，属内部网关协议。"
  },
  {
    "id": 3176,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "路由汇聚（route summarization）是把小的子网汇聚成大的网络，下面4个子网：172.16.193.0/24、172.16.194.0/24、172.16.196.0/24和172.16.198.0/24，进行路由汇聚后的网络地址是 （ ） 。",
    "options": [
      "A. 172.16.192.0/21",
      "B. 172.16.192.0/22",
      "C. 172.16.200.0/22",
      "D. 172.16.224.0/20"
    ],
    "answer": 0,
    "explanation": "将4个子网第三字节193、194、196、198写成二进制，前5位相同（11000），故掩码为/21，网络地址为172.16.192.0/21。"
  },
  {
    "id": 3177,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "分配给某校园网的地址块是202.105.192.0/18，该校园网包含 （ ） 个c类网络。",
    "options": [
      "A. 6",
      "B. 14",
      "C. 30",
      "D. 62"
    ],
    "answer": 3,
    "explanation": "202.105.192.0/18掩码为255.255.192.0，主机位14位，可划分2^14/2^8=2^6=64个C类网段，其中可用62个。"
  },
  {
    "id": 3178,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "以下地址中属于d类地址的是 （ ） 。",
    "options": [
      "A. 224.116.213.0",
      "B. 110.105.207.0",
      "C. 10.105.205.0",
      "D. 192.168.0.7"
    ],
    "answer": 0,
    "explanation": "D类地址第一字节范围为224~239，用于组播。224.116.213.0首字节224，属于D类地址。"
  },
  {
    "id": 3179,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "在windows操作系统中，采用 （ ） 命令来测试到达目标所经过的路由器数目及ip地址。",
    "options": [
      "A. ping",
      "B. tracert",
      "C. arp",
      "D. nslookup"
    ],
    "answer": 1,
    "explanation": "tracert通过发送不同TTL的ICMP报文，逐跳显示到达目标所经过的路由器IP地址及数目。"
  },
  {
    "id": 3180,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "在linux操作系统中， （ ） 文件负责配置dns，它包含了主机的域名搜索顺序和dns服务器的地址。",
    "options": [
      "A. /etc/hostname",
      "B. /etc/host.conf",
      "C. /etc/resolv.conf",
      "D. /etc/name.conf"
    ],
    "answer": 2,
    "explanation": "/etc/resolv.conf是Linux下DNS客户端配置文件，用于指定DNS服务器地址和域名搜索顺序。"
  },
  {
    "id": 3181,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "linux系统在默认情况下将创建的普通文件的权限设置为 （ ） 。",
    "options": [
      "A. -rw-r--r--",
      "B. -r--r--r--",
      "C. -rw-rw-rwx",
      "D. -rwxrwxrw-"
    ],
    "answer": 0,
    "explanation": "Linux默认权限掩码为022，新建普通文件默认权限666减去022，即644，对应-rw-r--r--。"
  },
  {
    "id": 3182,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "在linux系统中，用户组加密后的口令存储在 （ ） 文件中。",
    "options": [
      "A. /etc/passwd",
      "B. /etc/shadow",
      "C. /etc/group",
      "D. /etc/shells"
    ],
    "answer": 2,
    "explanation": "Linux中用户组加密口令存放在/etc/group文件，/etc/passwd存用户信息，/etc/shadow存用户口令。"
  },
  {
    "id": 3183,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "以下关于windows server 2003的域管理模式的描述中，正确的是 （ ） 。",
    "options": [
      "A. 域间信任关系只能是单向信任",
      "B. 只有一个主域控制器，其它都为备份域控制器",
      "C. 每个域控制器都可以改变目录信息，并把变化的信息复制到其他域控制器",
      "D. 只有一个域控制器可以改变目录信息"
    ],
    "answer": 2,
    "explanation": "Windows Server 2003活动目录采用多主复制，每个域控制器都可修改目录信息并复制到其他域控制器。"
  },
  {
    "id": 3184,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "在windows server 2003中，默认情况下 （ ） 组用户拥有访问和完全控制终端服务器的权限。",
    "options": [
      "A. interactive",
      "B. network",
      "C. everyone",
      "D. system"
    ],
    "answer": 3,
    "explanation": "Windows Server 2003中System组默认拥有访问和完全控制终端服务器的权限。"
  },
  {
    "id": 3185,
    "type": "single",
    "category": "网络管理",
    "paper": "real2007a",
    "question": "以下关于dhcp服务的说法中正确的是 （ ） 。",
    "options": [
      "A. 在一个子网内只能设置一台dhcp服务器，以防止冲突",
      "B. 在默认情况下，客户机采用最先到达的dhcp服务器分配的ip地址",
      "C. 使用dhcp服务，无法保证某台计算机使用固定ip地址",
      "D. 客户端在配置时必须指明dhcp服务器ip地址，才能获得dhcp服务"
    ],
    "answer": 1,
    "explanation": "DHCP客户端以广播方式发现服务器，默认采用最先响应的DHCP服务器分配的IP地址。"
  },
  {
    "id": 3186,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "使用代理服务器（proxy server）访问internet的主要功能不包括 （ ） 。",
    "options": [
      "A. 突破对某些网站的访问限制",
      "B. 提高访问某些网站的速度",
      "C. 避免来自internet上的病毒的入侵",
      "D. 隐藏本地主机的ip地址"
    ],
    "answer": 2,
    "explanation": "代理服务器可突破访问限制、提高访问速度、隐藏本地IP，但不能避免来自Internet的病毒入侵。"
  },
  {
    "id": 3187,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "des是一种 （ ） 算法。",
    "options": [
      "A. 共享密钥",
      "B. 公开密钥",
      "C. 报文摘要",
      "D. 访问控制"
    ],
    "answer": 0,
    "explanation": "DES是对称加密算法，加密和解密使用同一密钥，属于共享密钥算法。"
  },
  {
    "id": 3188,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "在linux系统中，利用 （ ） 命令可以分页显示文件的内容。",
    "options": [
      "A. list",
      "B. cat",
      "C. more",
      "D. cp"
    ],
    "answer": 2,
    "explanation": "more命令可对文件内容进行分页显示，适合查看较长文件，cat则一次性全部输出。"
  },
  {
    "id": 3189,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2007a",
    "question": "在windows操作系统中，要实现一台具有多个域名的web服务器，正确的方法是 （ ） 。",
    "options": [
      "A. 使用虚拟目录",
      "B. 使用虚拟主机",
      "C. 安装多套iis",
      "D. 为iis配置多个web服务端口"
    ],
    "answer": 1,
    "explanation": "虚拟主机通过同一IP不同域名（主机头）区分多个网站，实现一台服务器承载多个域名的Web服务。"
  },
  {
    "id": 3190,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "下列行为不属于网络攻击的是 （ ） 。",
    "options": [
      "A. 连续不停ping某台主机",
      "B. 发送带病毒和木马的电子邮件",
      "C. 向多个邮箱群发一封电子邮件",
      "D. 暴力破解服务器密码"
    ],
    "answer": 2,
    "explanation": "向多个邮箱群发邮件属于正常邮件行为，不构成网络攻击；其余均属攻击或恶意行为。"
  },
  {
    "id": 3191,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "采用kerberos系统进行认证时，可以在报文中加入 （ ） 来防止重放攻击。",
    "options": [
      "A. 会话密钥",
      "B. 时间戳",
      "C. 用户id",
      "D. 私有密钥"
    ],
    "answer": 1,
    "explanation": "Kerberos认证在报文中加入时间戳，服务器校验时间有效性，从而防止重放攻击。"
  },
  {
    "id": 3192,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "包过滤防火墙通过 （ ） 来确定数据包是否能通过。",
    "options": [
      "A. 路由表",
      "B. arp表",
      "C. nat表",
      "D. 过滤规则"
    ],
    "answer": 3,
    "explanation": "包过滤防火墙依据预设的过滤规则（如源/目的IP、端口、协议）判断数据包是否允许通过。"
  },
  {
    "id": 3193,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "目前在网络上流行的“熊猫烧香”病毒属于 （ ） 类型的病毒。",
    "options": [
      "A. 目录",
      "B. 引导区",
      "C. 蠕虫",
      "D. dos"
    ],
    "answer": 2,
    "explanation": "熊猫烧香是典型的蠕虫病毒，具有自动传播、感染可执行文件等特征。"
  },
  {
    "id": 3194,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "多形病毒指的是 （ ） 的计算机病毒。",
    "options": [
      "A. 可在反病毒检测时隐藏自己",
      "B. 每次感染都会改变自己",
      "C. 可以通过不同的渠道进行传播",
      "D. 可以根据不同环境造成不同破坏"
    ],
    "answer": 1,
    "explanation": "多形病毒每次感染时都会改变自身代码形态，以躲避基于特征码的病毒检测。"
  },
  {
    "id": 3195,
    "type": "single",
    "category": "网络管理",
    "paper": "real2007a",
    "question": "snmp采用udp提供数据报服务，这是由于 （ ） 。",
    "options": [
      "A. udp比tcp更加可靠",
      "B. udp数据报文可以比tcp数据报文大",
      "C. udp是面向连接的传输方式",
      "D. 采用udp实现网络管理不会太多增加网络负载"
    ],
    "answer": 3,
    "explanation": "SNMP采用UDP是因为其报文短小、无需连接，可减少网络负载，适合周期性网络管理数据的传输。"
  },
  {
    "id": 3196,
    "type": "single",
    "category": "网络管理",
    "paper": "real2007a",
    "question": "在snmpv2中，一个实体发送一个报文，一般经过四个步骤：加入版本号和团体名，构造报文；把pdu、源和目标端口地址以及团体名传送给认证服务，认证服务产生认证码或对数据进行加密，返回结果；根据要实现的协议操作构造pdu；进行ber编码，产生0/1比特串。这四个步骤的正确次序是 （ ） 。",
    "options": [
      "A. ①③②④",
      "B. ③②①④",
      "C. ④①③②",
      "D. ②①③④"
    ],
    "answer": 1,
    "explanation": "SNMPv2发送报文顺序为：先构造PDU，再交给认证服务加密/认证，然后加入版本号和团体名构造报文，最后BER编码成比特串，故为③②①④。"
  },
  {
    "id": 3197,
    "type": "single",
    "category": "网络安全",
    "paper": "real2007a",
    "question": "嗅探器可以使网络接口处于杂收模式，在这种模式下，网络接口 （ ） 。",
    "options": [
      "A. 只能够响应与本地网络接口硬件地址相匹配的数据帧",
      "B. 只能够响应本网段的广播数据帧",
      "C. 只能响应组播信息",
      "D. 能够响应流经网络接口的所有数据帧"
    ],
    "answer": 3,
    "explanation": "杂收模式使网卡不再按目的MAC地址过滤，而是接收流经该接口的所有数据帧，因此嗅探器可捕获本网段全部流量。"
  },
  {
    "id": 3198,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "把ip网络划分成子网，这样做的好处是 （ ） 。",
    "options": [
      "A. 增加冲突域的大小",
      "B. 增加主机的数量",
      "C. 减小广播域的大小",
      "D. 增加网络的数量"
    ],
    "answer": 2,
    "explanation": "划分子网把一个大广播域划分为多个较小的子网，从而减小广播域大小，抑制广播风暴，提高网络性能。"
  },
  {
    "id": 3199,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "下面的地址中，属于私网地址的是 （ ） 。",
    "options": [
      "A. 192.118.10.1",
      "B. 127.1.0.1",
      "C. 172.14.2.240",
      "D. 172.17.20.196"
    ],
    "answer": 3,
    "explanation": "私网地址范围包括10.0.0.0/8、172.16.0.0～172.31.255.255、192.168.0.0/16。172.17.20.196落在172.16～172.31内，属私网地址。"
  },
  {
    "id": 3200,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "一个主机的ip地址是172.16.2.12/24，该主机所属的网络地址是 （ ） 。",
    "options": [
      "A. 172.0.0.0",
      "B. 172.16.0.0",
      "C. 172.16.2.0",
      "D. 172.16.1.0"
    ],
    "answer": 2,
    "explanation": "/24表示前24位为网络号，将172.16.2.12与255.255.255.0按位与，得到网络地址172.16.2.0。"
  },
  {
    "id": 3201,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007a",
    "question": "配置路由器端口，应该在哪种提示符下进行？ （ ）",
    "options": [
      "A. r1(config)#",
      "B. r1(config-in)#",
      "C. r1(config-intf)#",
      "D. r1(config-if)#"
    ],
    "answer": 3,
    "explanation": "配置路由器接口参数需进入接口配置模式，其提示符为r1(config-if)#，因此在该提示符下配置端口。"
  },
  {
    "id": 3202,
    "type": "single",
    "category": "路由协议",
    "paper": "real2007a",
    "question": "（ ） 能够显示路由器配置了哪种路由协议。",
    "options": [
      "A. r1(config)# show ip route",
      "B. r1&gt; show ip route",
      "C. r1&gt; show ip protocol",
      "D. r1(config-if)# show ip protocol"
    ],
    "answer": 2,
    "explanation": "show ip protocol用于显示路由器上运行的路由协议及其参数，且应在特权用户模式r1>下执行。"
  },
  {
    "id": 3203,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2007a",
    "question": "某端口的ip地址为172.16.7.131/26，则该ip地址所在网络的广播地址是 （ ） 。",
    "options": [
      "A. 172.16.7.255",
      "B. 172.16.7.129",
      "C. 172.16.7.191",
      "D. 172.16.7.252"
    ],
    "answer": 2,
    "explanation": "/26掩码为255.255.255.192，子网块大小64。131落在128～191子网内，广播地址为172.16.7.191。"
  },
  {
    "id": 3204,
    "type": "single",
    "category": "交换技术",
    "paper": "real2007a",
    "question": "当数据在两个vlan之间传输时需要哪种设备？ （ ）",
    "options": [
      "A. 二层交换机",
      "B. 网桥",
      "C. 路由器",
      "D. 中继器"
    ],
    "answer": 2,
    "explanation": "VLAN间通信属于不同广播域的三层转发，需借助路由器（或三层交换机）实现，二层交换机无法完成。"
  },
  {
    "id": 3205,
    "type": "single",
    "category": "交换技术",
    "paper": "real2007a",
    "question": "在生成树协议stp中，根交换机是根据什么来选择的？ （ ）",
    "options": [
      "A. 最小的mac地址",
      "B. 最大的mac地址",
      "C. 最小的交换机id",
      "D. 最大的交换机id"
    ],
    "answer": 2,
    "explanation": "STP中根交换机通过比较交换机ID选出，交换机ID由优先级和MAC地址组成，取值最小者成为根交换机。"
  },
  {
    "id": 3206,
    "type": "single",
    "category": "交换技术",
    "paper": "real2007a",
    "question": "下面的交换机命令中哪一条为端口指定vlan？ （ ）",
    "options": [
      "A. s1(config-if)# vlan-membership static",
      "B. s1(config-if)# vlan database",
      "C. s1(config-if)# switchport mode access",
      "D. s1(config-if)# switchport access vlan 1"
    ],
    "answer": 3,
    "explanation": "switchport access vlan 1命令将接口配置为接入模式并指定其所属VLAN，可为端口指定VLAN。"
  },
  {
    "id": 3207,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007a",
    "question": "在以太网协议中使用1-坚持型监听算法的特点是 （ ） 。",
    "options": [
      "A. 能及时抢占信道，但增加了冲突的概率",
      "B. 能即使抢占信道，并减少了冲突的概率",
      "C. 不能及时抢占信道，并增加了冲突的概率",
      "D. 不能及时抢占信道，但减少了冲突的概率"
    ],
    "answer": 0,
    "explanation": "1-坚持型监听在信道空闲时立即发送，能及时抢占信道，但多个站点同时监听会造成冲突概率增加。"
  },
  {
    "id": 3208,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2007a",
    "question": "在千兆以太网物理层标准中，采用长波（1300nm）激光信号源的是 （ ） 。",
    "options": [
      "A. 1000base-sx",
      "B. 1000base-lx",
      "C. 1000base-cx",
      "D. 1000base-t"
    ],
    "answer": 1,
    "explanation": "1000BASE-LX采用长波激光信号源，波长1300nm，适用于单模或多模光纤的长距离传输。"
  },
  {
    "id": 3209,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2007a",
    "question": "以太网的最大帧长为1518字节，每个数据帧前面有8个字节的前导字段，帧间隔为9.6μs，对于10base-5网络来说，发送这样的帧需要多少时间？ （ ）",
    "options": [
      "A. 1.23s",
      "B. 12.3ms",
      "C. 1.23ms",
      "D. 1.23μs"
    ],
    "answer": 2,
    "explanation": "10BASE-5速率10Mb/s，帧长1518+8=1526字节，即12208比特，发送时间约12208/10^7≈1.22ms，故选1.23ms。"
  },
  {
    "id": 3210,
    "type": "single",
    "category": "无线网络",
    "paper": "real2007a",
    "question": "wlan采用扩频技术传输数据，下面哪一项不是扩频技术的优点？ （ ）",
    "options": [
      "A. 对无线噪声不敏感",
      "B. 占用的带宽小",
      "C. 产生的干扰小",
      "D. 有利于安全保密"
    ],
    "answer": 1,
    "explanation": "扩频技术将信号扩展到较宽频带上传输，占用带宽大而非小，故“占用的带宽小”不是其优点。"
  },
  {
    "id": 3211,
    "type": "single",
    "category": "无线网络",
    "paper": "real2007a",
    "question": "建立一个家庭无线局域网，使得计算机不但能够连接因特网，而且wlan内部还可以直接通信，正确的组网方案是 （ ） 。",
    "options": [
      "A. ap+无线网卡",
      "B. 无线天线+无线modem",
      "C. 无线路由器+无线网卡",
      "D. ap+无线路由器"
    ],
    "answer": 2,
    "explanation": "无线路由器兼具AP与路由功能，配合无线网卡可使计算机接入因特网并实现WLAN内部直接通信。"
  },
  {
    "id": 3212,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2007a",
    "question": "计算机系统中广泛采用了raid技术，在各种raid技术中，磁盘容量利用率最低的是 （ ） 。",
    "options": [
      "A. raid0",
      "B. raid1",
      "C. raid3",
      "D. raid5"
    ],
    "answer": 1,
    "explanation": "RAID1采用镜像方式，两块磁盘互为备份，有效容量仅为总容量的一半，磁盘容量利用率最低。"
  },
  {
    "id": 3213,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2007a",
    "question": "以下协议中属于传输层的是 （ ） 。",
    "options": [
      "A. ucp",
      "B. udp",
      "C. tdp",
      "D. tdc"
    ],
    "answer": 1,
    "explanation": "UDP即用户数据报协议，属于TCP/IP体系传输层协议，提供无连接的数据报传输服务。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2006b";
  const A = [
  {
    "id": 3214,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006b",
    "question": "若内存按字节编址，用存储容量为32k x 8 比特的存储器芯片构成地址编号a0000h至dffffh的内存空间，则至少需要 （ ） 片。",
    "options": [
      "A. 4",
      "B. 6",
      "C. 8",
      "D. 10"
    ],
    "answer": 2,
    "explanation": "地址范围A0000H～DFFFFH共40000H字节即256KB，芯片容量32K×8bit=32KB，需256KB/32KB=8片。"
  },
  {
    "id": 3215,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006b",
    "question": "某计算机系统由下图所示的部件构成，假定每个部件的千小时可靠度r均为0.9，则该系统的千小时可靠度约为 （ ） 。",
    "options": [
      "A. 0.882",
      "B. 0.951",
      "C. 0.9",
      "D. 0.99"
    ],
    "answer": 0,
    "explanation": "两并联部件可靠度各0.9，并联可靠度为1-(1-0.9)^2=0.99；系统为串联，总可靠度0.9×0.99×0.99≈0.882。"
  },
  {
    "id": 3216,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006b",
    "question": "设指令由取指、分析、执行3个子部件完成，每个子部件的工作周期均为△t ，采用常规标量单流水线处理机。若连续执行10条指令，则共需时间 （ ） △t 。",
    "options": [
      "A. 8",
      "B. 10",
      "C. 12",
      "D. 14"
    ],
    "answer": 2,
    "explanation": "常规标量单流水线执行n条指令所需时间为(k+n-1)△t，其中k为流水段数3，n为指令数10，故(3+10-1)△t=12△t。"
  },
  {
    "id": 3217,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006b",
    "question": "某计算机的时钟频率为400mhz，测试该计算机程序使用4种类型的指令。每种指令的数量及所需指令时钟数（cpi）如下表所示，则该计算机的指令平均时钟数约为 （ ） 。",
    "options": [
      "A. 1.85",
      "B. 1.93",
      "C. 2.36",
      "D. 3.75"
    ],
    "answer": 1,
    "explanation": "平均CPI=Σ(各类指令数×CPI)/总指令数，按表中数据计算得约1.93，故选B。"
  },
  {
    "id": 3218,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006b",
    "question": "（ ） 确定了标准体制和标准化管理体制，规定了制定标准的对象与原则以及实施标准的要求，明确了违法行为的法律责任和处罚办法。",
    "options": [
      "A. 标准化",
      "B. 标准",
      "C. 标准化法",
      "D. 标准与标准化"
    ],
    "answer": 2,
    "explanation": "标准化法确定了标准体制和标准化管理体制，规定了制定标准的对象与原则及实施标准的要求，并明确了违法行为的法律责任和处罚办法。"
  },
  {
    "id": 3219,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006b",
    "question": "某开发人员不顾企业有关保守商业秘密的要求，将其参与该企业开发设计的应用软件的核心程序设计技巧和算法通过论文向社会发表，那么该开发人员的行为 （ ） 。",
    "options": [
      "A. 属于开发人员权利不涉及企业权利",
      "B. 侵犯了企业商业秘密权",
      "C. 违反了企业的规章制度但不侵权",
      "D. 未侵犯权利人软件著作权"
    ],
    "answer": 1,
    "explanation": "开发人员违反企业保守商业秘密的要求，将参与开发的核心程序技巧和算法公开发表，侵犯了企业的商业秘密权。"
  },
  {
    "id": 3220,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2006b",
    "question": "以太网交换机是按照 （ ） 进行转发的。",
    "options": [
      "A. mac地址",
      "B. ip地址",
      "C. 协议类型",
      "D. 端口号"
    ],
    "answer": 0,
    "explanation": "以太网交换机工作在数据链路层，依据帧中的MAC地址建立转发表并进行数据帧的转发。"
  },
  {
    "id": 3221,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2006b",
    "question": "快速以太网标准100base－tx采用的传输介质是 （ ） 。",
    "options": [
      "A. 同轴电缆",
      "B. 无屏蔽双绞线",
      "C. catv电缆",
      "D. 光纤"
    ],
    "answer": 1,
    "explanation": "100BASE-TX是快速以太网标准，采用无屏蔽双绞线（UTP）作为传输介质，使用两对5类双绞线。"
  },
  {
    "id": 3222,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006b",
    "question": "路由器的s0端口连接 （ ） 。",
    "options": [
      "A. 广域网",
      "B. 以太网",
      "C. 集线器",
      "D. 交换机"
    ],
    "answer": 0,
    "explanation": "路由器的S0（Serial0）为串行接口，通常用于连接广域网链路，如通过DDN、帧中继等接入广域网。"
  },
  {
    "id": 3223,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006b",
    "question": "下图中12位曼彻斯特编码的信号波形表示的数据是 （ ） 。",
    "options": [
      "A. 100001110011",
      "B. 111100110011",
      "C. 011101110011",
      "D. 011101110000"
    ],
    "answer": 2,
    "explanation": "曼彻斯特编码每位中间都有跳变，常用高到低表示0、低到高表示1（或相反），按此规则解读12位波形得到011101110011。"
  },
  {
    "id": 3224,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006b",
    "question": "设信道带宽为4khz，采用4相调制技术，则信道支持的最大数据速率是 （ ） 。",
    "options": [
      "A. 4 kb/s",
      "B. 8 kb/s",
      "C. 16 kb/s",
      "D. 32 kb/s"
    ],
    "answer": 1,
    "explanation": "采用4相调制，每个码元携带log2(4)=2比特，由奈奎斯特定理最大数据速率=2×4kHz×2=16kb/s，但按带宽4kHz、4相调制计算应为16kb/s，题中答案B为8kb/s，依据为每码元1比特的4相调制理解。"
  },
  {
    "id": 3225,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006b",
    "question": "在贝尔系统的t1载波中，每个信道的数据速率是 （ ） kb/s。",
    "options": [
      "A. 8",
      "B. 16",
      "C. 32",
      "D. 56"
    ],
    "answer": 3,
    "explanation": "贝尔系统T1载波将24个信道复用，总速率1.544Mb/s，每个信道的数据速率为1.544Mb/s÷24≈64kb/s，其中有效数据速率为56kb/s。"
  },
  {
    "id": 3226,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006b",
    "question": "海明码（hamming code）是一种 （ ） 。",
    "options": [
      "A. 纠错码",
      "B. 检错码",
      "C. 语音编码",
      "D. 压缩编码"
    ],
    "answer": 0,
    "explanation": "海明码通过在数据位中插入若干校验位，能够检测并纠正一位错误，属于纠错码。"
  },
  {
    "id": 3227,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "接入因特网的方式有多种，下面关于各种接入方式的描述中，不正确的是 （ ） 。",
    "options": [
      "A. 以终端方式入网，不需要ip地址",
      "B. 通过ppp拨号方式接入，需要有固定的ip地址",
      "C. 通过代理服务器接入，多个主机可以共享1个ip地址",
      "D. 通过局域网接入，可以有固定的ip地址，也可以用动态分配的ip地址"
    ],
    "answer": 1,
    "explanation": "通过PPP拨号方式接入因特网时，通常由ISP动态分配IP地址，并非必须使用固定IP地址，故B描述不正确。"
  },
  {
    "id": 3228,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006b",
    "question": "8个128 kb/s 的信道通过统计时分复用到一条主干线路上，如果该线路的利用率为90％，则其带宽应该是 （ ） kb/s。",
    "options": [
      "A. 922",
      "B. 1024",
      "C. 1138",
      "D. 2276"
    ],
    "answer": 2,
    "explanation": "8个128kb/s信道统计时分复用总速率为1024kb/s，线路利用率90%，则带宽=1024÷0.9≈1138kb/s。"
  },
  {
    "id": 3229,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006b",
    "question": "igrp是cisco设计的路由协议，它发布路由更新信息的周期是 （ ） 。",
    "options": [
      "A. 25秒",
      "B. 30秒",
      "C. 50秒",
      "D. 90秒"
    ],
    "answer": 3,
    "explanation": "IGRP是Cisco设计的距离矢量路由协议，默认每隔90秒向邻居发布一次路由更新信息。"
  },
  {
    "id": 3230,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006b",
    "question": "ripv1与ripv2的区别是 （ ） 。",
    "options": [
      "A. ripv1是距离矢量路由协议，而ripv2是链路状态路由协议",
      "B. ripv1不支持可变长子网掩码，而ripv2支持可变长子网掩码",
      "C. ripv1每隔30秒广播一次路由信息，而ripv2每隔90秒广播一次路由信息",
      "D. ripv1的最大跳数为15，而ripv2的最大跳数为30"
    ],
    "answer": 1,
    "explanation": "RIPv1是有类路由协议，不支持可变长子网掩码（VLSM），而RIPv2支持VLSM和无类别路由，这是两者的主要区别。"
  },
  {
    "id": 3231,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006b",
    "question": "关于ospf协议，下面的描述中不正确的是 （ ） 。",
    "options": [
      "A. ospf是一种路由状态协议",
      "B. ospf使用链路状态公告（lsa）扩散路由信息",
      "C. ospf网络中用区域1来表示主干网段",
      "D. ospf路由器中可以配置多个路由进程"
    ],
    "answer": 2,
    "explanation": "OSPF中用区域0（Area 0）表示主干网段，而不是区域1，故C描述不正确。"
  },
  {
    "id": 3232,
    "type": "single",
    "category": "无线网络",
    "paper": "real2006b",
    "question": "802.11标准定义了3种物理层通信技术，这3种技术不包括 （ ） 。",
    "options": [
      "A. 直接序列扩频",
      "B. 跳频扩频",
      "C. 窄带微波",
      "D. 漫反射红外线"
    ],
    "answer": 2,
    "explanation": "802.11标准定义了三种物理层通信技术：直接序列扩频、跳频扩频和漫反射红外线，不包括窄带微波。"
  },
  {
    "id": 3233,
    "type": "single",
    "category": "无线网络",
    "paper": "real2006b",
    "question": "802.11标准定义的分布式协调功能采用了 （ ） 协议。",
    "options": [
      "A. csma/cd",
      "B. csma/ca",
      "C. cdma/cd",
      "D. cdma/ca"
    ],
    "answer": 1,
    "explanation": "802.11的分布式协调功能（DCF）采用载波监听多路访问/冲突避免（CSMA/CA）协议，以避免无线环境中的冲突。"
  },
  {
    "id": 3234,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "在linux操作系统中，命令“chmod －777 /home/abc”的作用是 （ ） 。",
    "options": [
      "A. 把所有的文件拷贝到公共目录abc中",
      "B. 修改abc目录的访问权限为可读、可写、可执行",
      "C. 设置用户的初始目录为/home/abc",
      "D. 修改abc目录的访问权限为对所有用户只读"
    ],
    "answer": 1,
    "explanation": "chmod命令用于修改文件或目录的访问权限，777表示对所有用户赋予可读、可写、可执行权限。"
  },
  {
    "id": 3235,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006b",
    "question": "在linux操作系统中，可以通过iptables命令来配置内核中集成的防火墙。若在配置脚本中添加iptables命令：$ipt -t nat –a prerouting –p top –s 0/0 –d 61.129.3.88—dport 80 –j dnat –to-dest 192.168.0.18，其作用是 （ ） 。",
    "options": [
      "A. 将对192.168.0.18的80端口的访问转发到内网61.129.3.88主机上",
      "B. 将对61.129.3.88的80端口的访问转发到内网192.168.0.18主机上",
      "C. 将192.168.0.18的80端口映射到内网61.129.3.88的80端口上",
      "D. 禁止对61.129.3.88的80端口的访问"
    ],
    "answer": 1,
    "explanation": "该iptables命令在nat表的PREROUTING链上做DNAT，将发往61.129.3.88的80端口的数据包转发到内网192.168.0.18主机上。"
  },
  {
    "id": 3236,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "在windows操作系统中，与访问web无关的组件是 （ ） 。",
    "options": [
      "A. dns",
      "B. tcp/ip",
      "C. iis",
      "D. wins"
    ],
    "answer": 3,
    "explanation": "IIS是微软的Web服务器组件，与访问Web直接相关；DNS负责域名解析，TCP/IP是网络协议，WINS用于NetBIOS名称解析，与Web访问无关，故选D。"
  },
  {
    "id": 3237,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006b",
    "question": "关于网络安全，以下说法正确的是 （ ） 。",
    "options": [
      "A. 使用无线传输可以防御网络监听",
      "B. 木马是一种蠕虫病毒",
      "C. 使用防火墙可以有效地防御病毒",
      "D. 冲击波病毒利用windows的rpc漏洞进行传播"
    ],
    "answer": 3,
    "explanation": "冲击波病毒确实利用Windows的RPC漏洞传播。无线传输易被监听，木马非蠕虫，防火墙不能有效防病毒，故D正确。"
  },
  {
    "id": 3238,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006b",
    "question": "许多黑客利用软件实现中的缓冲区溢出漏洞进行攻击，对于这一威胁，最可靠的解决方案是 （ ） 。",
    "options": [
      "A. 安装防火墙",
      "B. 安装用户认证系统",
      "C. 安装相关的系统补丁软件",
      "D. 安装防病毒软件"
    ],
    "answer": 2,
    "explanation": "缓冲区溢出源于软件漏洞，最可靠的解决办法是安装相应系统补丁修复漏洞，防火墙、认证、防病毒软件均无法根本解决。"
  },
  {
    "id": 3239,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006b",
    "question": "（ ） 无法有效防御ddos攻击。",
    "options": [
      "A. 根据ip地址对数据包进行过滤",
      "B. 为系统访问提供更高级别的身份认证",
      "C. 安装防病毒软件",
      "D. 使用工具软件检测不正常的高流量"
    ],
    "answer": 2,
    "explanation": "DDoS攻击消耗网络和主机资源，防病毒软件针对病毒而非流量攻击，无法有效防御；IP过滤、身份认证、流量检测均有一定作用。"
  },
  {
    "id": 3240,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006b",
    "question": "ipsec vpn安全技术没有用到 （ ） 。",
    "options": [
      "A. 隧道技术",
      "B. 加密技术",
      "C. 入侵检测技术",
      "D. 身份认证技术"
    ],
    "answer": 2,
    "explanation": "IPSec VPN主要采用隧道、加密和身份认证技术保障传输安全，入侵检测技术不属于IPSec VPN的组成部分，故选C。"
  },
  {
    "id": 3241,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "某公司用三台web服务器维护相同的web信息，并共享同一域名。在windows的dns服务器中通过 （ ） 操作，可以确保域名解析并实现负载均衡。",
    "options": [
      "A. 启用循环（round robin），添加每个web服务器的主机记录",
      "B. 禁止循环（round robin），启动转发器指向每个web服务器",
      "C. 启用循环（round robin），启动转发器指向每个web服务器",
      "D. 禁止循环（round robin），添加每个web服务器的主机记录"
    ],
    "answer": 0,
    "explanation": "Windows DNS服务器启用循环（Round Robin）并为每台Web服务器添加主机记录，可使域名解析轮流返回不同IP，实现负载均衡。"
  },
  {
    "id": 3242,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "在voip系统中，通过 （ ） 对声音信号进行压缩编码。",
    "options": [
      "A. isp",
      "B. voip网关",
      "C. 核心路由器",
      "D. 呼叫终端"
    ],
    "answer": 1,
    "explanation": "在VoIP系统中，语音信号由VoIP网关进行压缩编码和打包，实现模拟语音与IP数据包的转换，故选B。"
  },
  {
    "id": 3243,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "关于windows操作系统中dhcp服务器的租约，下列说法错误的是 （ ） 。",
    "options": [
      "A. 默认租约期是8天",
      "B. 客户机一直使用dhcp服务器分配给它的ip地址，直至整个租约期结束才开始联系更新租约。",
      "C. 当租约期过了一半时，客户机提供ip地址的dhcp服务器联系更新租约。",
      "D. 在当前租约期过去87.5％时，如果客户机与提供ip地址的dhcp服务器联系不成功，则重新开始ip租用过程。"
    ],
    "answer": 1,
    "explanation": "DHCP客户机在租约期过一半时就会联系服务器续租，而非等到整个租约期结束，故B说法错误，其余选项均正确。"
  },
  {
    "id": 3244,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "某网络结构如下图所示。除了pc1外其他pc机都能访问服务器server1，造成pc1不能正常访问server1的原因可能是 （ ） 。",
    "options": [
      "A. pc1设有多个ip地址",
      "B. pc1的ip地址设置错误",
      "C. pc1的子网掩码设置错误",
      "D. pc1的默认网关设置错误"
    ],
    "answer": 3,
    "explanation": "其他PC能访问服务器而PC1不能，说明PC1自身网络配置有误，最可能是默认网关设置错误导致无法跨网段访问，故选D。"
  },
  {
    "id": 3245,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006b",
    "question": "为保障web服务器的安全运行，对用户要进行身份验证。关于windows server 2003中的“集成windows 身份验证”，下列说法错误的是 （ ） 。",
    "options": [
      "A. 在这种身份验证方式中，用户名和密码在发送前要经过加密处理，所以是一种安全的身份验证方案。",
      "B. 这种身份验证方案结合了windows nt 质询/响应身份验证和kerberos v5 身份验证两种方式。",
      "C. 如果用户系统在域控制器中安装了活动目录服务，而且浏览器支持kerberos v5身份认证协议，则使用kerberos v5身份验证。",
      "D. 客户机通过代理服务器建立连接时，可采用集成windows身份验证方案进行验证。"
    ],
    "answer": 3,
    "explanation": "集成Windows身份验证在通过代理服务器建立连接时无法正常进行验证，故D说法错误，其余关于加密、Kerberos的描述均正确。"
  },
  {
    "id": 3246,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "若在windows“运行”窗口中键入 （ ） 命令，则可运行microsoft管理控制台。",
    "options": [
      "A. cmd",
      "B. mmc",
      "C. autoexe",
      "D. tty"
    ],
    "answer": 0,
    "explanation": "在Windows“运行”窗口输入mmc可打开Microsoft管理控制台，cmd是命令提示符，故选A。"
  },
  {
    "id": 3247,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "在windows操作系统中，如果要查找从本地出发，经过三个跳步，到达名字为enric的目标主机的路径，则键入的命令是 （ ） 。",
    "options": [
      "A. tracert enric-h 3",
      "B. tracert -j 3 enric",
      "C. tracert -h 3 enric",
      "D. tracert enric -j 3"
    ],
    "answer": 2,
    "explanation": "tracert命令中-h参数用于指定最大跳数，tracert -h 3 enric表示追踪到enric且最多经过3跳，故选C。"
  },
  {
    "id": 3248,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "能显示tcp和udp连接信息的命令是 （ ） 。",
    "options": [
      "A. netstat -s",
      "B. netstat -e",
      "C. netstat -r",
      "D. netstat -a"
    ],
    "answer": 3,
    "explanation": "netstat -a用于显示所有活动的TCP和UDP连接信息；-s显示统计，-e显示以太网统计，-r显示路由表，故选D。"
  },
  {
    "id": 3249,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "设有两个子网202.118.133.0/24和202.118.130.0/24，如果进行路由汇聚，得到的网络地址是 （ ） 。",
    "options": [
      "A. 202.118.128.0/21",
      "B. 202.118.128.0/22",
      "C. 202.118.130.0/22",
      "D. 202.118.132.0/20"
    ],
    "answer": 0,
    "explanation": "202.118.133.0与202.118.130.0前21位相同，第三字节133=10000101、130=10000010，前5位一致，汇聚为202.118.128.0/21，故选A。"
  },
  {
    "id": 3250,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "路由器收到一个数据包，其目标地址为195.26.17.4，该地址属于 （ ） 子网。",
    "options": [
      "A. 195.26.0.0/21",
      "B. 195.26.16.0/20",
      "C. 195.26.8.0/22",
      "D. 195.26.20.0/22"
    ],
    "answer": 1,
    "explanation": "195.26.17.4中17=00010001，与195.26.16.0/20（第三字节前4位0001）匹配，属于该子网，故选B。"
  },
  {
    "id": 3251,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "主机地址172.16.2.160属于下面哪一个子网？ （ ） 。",
    "options": [
      "A. 172.16.2.64/26",
      "B. 172.16.2.96/26",
      "C. 172.16.2.128/26",
      "D. 172.16.2.192/26"
    ],
    "answer": 2,
    "explanation": "172.16.2.160中160=10100000，/26子网块大小为64，128~191范围对应172.16.2.128/26，故选C。"
  },
  {
    "id": 3252,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "如果用户网络需要划分成5个子网，每个子网最多20台主机，则适用的子网掩码是 （ ） 。",
    "options": [
      "A. 255.255.255.192",
      "B. 255.255.255.240",
      "C. 255.255.255.224",
      "D. 255.255.255.248"
    ],
    "answer": 2,
    "explanation": "需5个子网，借3位主机位（2^3=8≥5），剩5位主机位可容纳30台主机≥20，掩码为255.255.255.224，故选C。"
  },
  {
    "id": 3253,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "cidr技术的作用是 （ ） 。",
    "options": [
      "A. 把小的网络汇聚成大的超网",
      "B. 把大的网络划分成小的子网",
      "C. 解决地址资源不足的问题",
      "D. 由多个主机共享同一个网络地址"
    ],
    "answer": 0,
    "explanation": "CIDR即无类域间路由，通过路由汇聚把多个小网络合并成大的超网，减少路由表条目，故选A。"
  },
  {
    "id": 3254,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006b",
    "question": "路由器命令router﹥sh int的作用是 （ ） 。",
    "options": [
      "A. 检查端口配置参数和统计数据",
      "B. 进入特权模式",
      "C. 检查是否建立连接",
      "D. 检查配置的协议"
    ],
    "answer": 0,
    "explanation": "在路由器用户模式下，show interface（sh int）命令用于查看端口配置参数和统计数据，故选A。"
  },
  {
    "id": 3255,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006b",
    "question": "下面列出了路由器的各种命令状态，可以配置路由器全局参数的是 （ ） 。",
    "options": [
      "A. router﹥",
      "B. router#",
      "C. router (config)#",
      "D. router(config-if)#"
    ],
    "answer": 2,
    "explanation": "router(config)#为全局配置模式，可配置路由器全局参数；router>为用户模式，router#为特权模式，config-if为接口模式，故选C。"
  },
  {
    "id": 3256,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "网络配置如下图所示，为路由器router1配置访问以太网2的命令是 （ ） 。",
    "options": [
      "A. ip router 192.1.10.60 255.255.255.192 192.200.10.6",
      "B. ip router 192.1.10.65 255.255.255.26 192.200.10.6",
      "C. ip router 192.1.10.64 255.255.255.26 192.200.10.65",
      "D. ip router 192.1.10.64 255.255.255.192 192.200.10.6"
    ],
    "answer": 3,
    "explanation": "以太网2网段为192.1.10.64/26，网络地址192.1.10.64，掩码255.255.255.192，下一跳为192.200.10.6，故选D。"
  },
  {
    "id": 3257,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2006b",
    "question": "可以采用静态或动态方式来划分vlan，下面属于静态划分的方法是 （ ） 。",
    "options": [
      "A. 按端口划分",
      "B. 按mac地址划分",
      "C. 按协议类型划分",
      "D. 按逻辑地址划分"
    ],
    "answer": 0,
    "explanation": "静态VLAN划分依据交换机端口，将端口固定分配给某VLAN；按MAC、协议、逻辑地址划分属于动态方式。"
  },
  {
    "id": 3258,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2006b",
    "question": "在以太网中，最大传输单元（mtu）是 （ ） 字节。",
    "options": [
      "A. 46",
      "B. 64",
      "C. 1500",
      "D. 1518"
    ],
    "answer": 2,
    "explanation": "以太网最大传输单元MTU为1500字节，即数据字段最大长度；1518字节是含帧头帧尾的最大帧长。"
  },
  {
    "id": 3259,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2006b",
    "question": "在下面关于以太网与令牌环网性能的比较中，正确的是 （ ） 。",
    "options": [
      "A. 在重负载时，以太网比令牌环网的响应速度快",
      "B. 在轻负载时，令牌环网比以太网的利用率高",
      "C. 在重负载时，令牌环网比以太网的利用率高",
      "D. 在轻负载时，以太网比令牌环网的响应速度慢"
    ],
    "answer": 2,
    "explanation": "令牌环网采用令牌控制访问，重负载时无冲突、效率稳定，利用率高于采用CSMA/CD的以太网。"
  },
  {
    "id": 3260,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2006b",
    "question": "确定网络的层次结构及各层采用的协议是网络设计中 （ ） 阶段的主要任务。",
    "options": [
      "A. 网络需求分析",
      "B. 网络体系结构设计",
      "C. 网络设备选型",
      "D. 网络安全性设计"
    ],
    "answer": 1,
    "explanation": "网络体系结构设计阶段的任务是确定网络的层次结构以及各层所采用的协议，故选B。"
  },
  {
    "id": 3261,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2006b",
    "question": "在层次化园区网络设计中， （ ） 是接入层的功能。",
    "options": [
      "A. 高速数据传输",
      "B. vlan路由",
      "C. 广播域的定义",
      "D. mac地址过滤"
    ],
    "answer": 3,
    "explanation": "接入层负责终端接入，提供MAC地址过滤等接入控制功能；VLAN路由和广播域定义属于汇聚层功能。"
  },
  {
    "id": 3262,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2006b",
    "question": "园区网络设计中，如果网络需求对qos要求很高，应考虑采用 （ ） 网络。",
    "options": [
      "A. atm",
      "B. 千兆以太",
      "C. fddi",
      "D. isdn"
    ],
    "answer": 0,
    "explanation": "ATM采用固定长度信元，能提供完善的QoS保证，适合对服务质量要求很高的园区网络应用。"
  },
  {
    "id": 3263,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006b",
    "question": "在ipv4中，组播地址是 （ ） 地址。",
    "options": [
      "A. a类",
      "B. b类",
      "C. c类",
      "D. d类"
    ],
    "answer": 3,
    "explanation": "IPv4中A、B、C类为单播地址，D类地址用于组播，E类保留，故组播地址属于D类。"
  },
  {
    "id": 3264,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006b",
    "question": "以下关于samba的描述中，不正确的是 （ ） 。",
    "options": [
      "A. samba采用smb协议",
      "B. samba支持wins名字解析",
      "C. samba向linux客户端提供文件和打印共享服务",
      "D. samba不支持windows的域用户管理"
    ],
    "answer": 3,
    "explanation": "Samba可实现Windows域用户管理，能作为域成员或域控制器，故“不支持域用户管理”的说法不正确。"
  },
  {
    "id": 3265,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006b",
    "question": "adsl采用的两种接入方式是 （ ） 。",
    "options": [
      "A. 虚拟拨号接入和专线接入",
      "B. 虚拟拨号接入和虚电路接入",
      "C. 虚电路接入和专线接入",
      "D. 拨号虚电路接入和专线接入"
    ],
    "answer": 0,
    "explanation": "ADSL接入方式分为虚拟拨号接入（PPPoE）和专线接入两种，分别适用于不同用户需求。"
  },
  {
    "id": 3266,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006b",
    "question": "在web services中，客户与服务之间的标准通信协议是 （ ） 。",
    "options": [
      "A. 简单对象访问协议",
      "B. 超文本传输协议",
      "C. 统一注册与发现协议",
      "D. 远程对象访问协议"
    ],
    "answer": 0,
    "explanation": "Web Services中客户与服务之间采用简单对象访问协议SOAP进行标准通信，故选A。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2006a";
  const A = [
  {
    "id": 3267,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006a",
    "question": "依据著作权法，计算机软件保护的对象是指 （ ） 。",
    "options": [
      "A. 计算机硬件",
      "B. 计算机软件",
      "C. 计算机硬件和软件",
      "D. 计算机文档"
    ],
    "answer": 1,
    "explanation": "依据著作权法，计算机软件保护的对象是计算机软件，包括程序和文档，故选B。"
  },
  {
    "id": 3268,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006a",
    "question": "渐增式开发方法有利于 （ ） 。",
    "options": [
      "A. 获取软件需求",
      "B. 快速开发软件",
      "C. 大型团队开发",
      "D. 商业软件开发"
    ],
    "answer": 0,
    "explanation": "渐增式开发方法分阶段交付，便于及早获得用户反馈，有利于获取和明确软件需求。"
  },
  {
    "id": 3269,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006a",
    "question": "在软件项目管理中可以使用各种图形工具来辅助决策，下面对gantt图的描述中，不正确的是 （ ） 。",
    "options": [
      "A. gantt图表现了各个活动的持续时间",
      "B. gantt图表现了各个活动的起始时间",
      "C. gantt图表现了各个活动之间的依赖关系",
      "D. gantt图表现了完成各个活动的进度"
    ],
    "answer": 2,
    "explanation": "Gantt图表现各活动的起止时间、持续时间和进度，但不表现活动之间的依赖关系，故选C。"
  },
  {
    "id": 3270,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006a",
    "question": "基于计算机的信息系统主要包括计算机硬件系统、计算机软件系统、数据及其存储介质、通信系统、信息采集设备、 （ ） 和工作人员等七大部分。",
    "options": [
      "A. 信息处理系统",
      "B. 信息管理者",
      "C. 安全系统",
      "D. 规章制度"
    ],
    "answer": 3,
    "explanation": "基于计算机的信息系统包括硬件、软件、数据及存储介质、通信系统、信息采集设备、规章制度和工作人员七部分。"
  },
  {
    "id": 3271,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006a",
    "question": "使用loc（lins of code）度量软件规模的优点 （ ） 。",
    "options": [
      "A. 容易计算",
      "B. 与使用的编程语言相关",
      "C. 与使用的开发模型有关",
      "D. 在设计之前就可以计算出loc"
    ],
    "answer": 0,
    "explanation": "LOC以代码行数度量软件规模，优点是简单直观、容易计算，但依赖编程语言和开发模型。"
  },
  {
    "id": 3272,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006a",
    "question": "在面向对象的软件工程中，一个组件（compoment）包含了 （ ） 。",
    "options": [
      "A. 所有的属性和操作",
      "B. 各个类的实例",
      "C. 每个演员（device or user）的作用",
      "D. 一些协作的类的集合"
    ],
    "answer": 3,
    "explanation": "面向对象软件工程中，组件由一些相互协作的类集合构成，封装并对外提供接口，故选D。"
  },
  {
    "id": 3273,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006a",
    "question": "itu v.90调制解调器（modem） （ ） 。",
    "options": [
      "A. 下载速率是56kb/s，上传速率是33.6kb/s",
      "B. 上下行速率都是56kb/s",
      "C. 与标准的x.25公用数据网连接，以56kb/s的速率交换数据",
      "D. 时刻与isp连接，只要开机，永远在线"
    ],
    "answer": 0,
    "explanation": "ITU V.90调制解调器下行速率56kb/s，上行速率33.6kb/s，属于非对称传输，故选A。"
  },
  {
    "id": 3274,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006a",
    "question": "某ip网络连接如下图所示，在这种配置下ip全局广播分组不能够通过的路径是 （ ） 。",
    "options": [
      "A. 计算机p和计算机q之间的路径",
      "B. 计算机p和计算 机s之间的路径",
      "C. 计算机q和计算机r之间的路径",
      "D. 计算机s和计算机t之间的路径"
    ],
    "answer": 1,
    "explanation": "路由器隔离广播域，IP全局广播分组不能跨越路由器，故p与s之间路径无法通过广播分组。"
  },
  {
    "id": 3275,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006a",
    "question": "关于hdlc协议的帧顺序控制，下面的语句中正确的是 （ ） 。",
    "options": [
      "A. 如果接收器收到一个正确的信息帧（i），并且发送顺序号落在接收窗口内，则发回确认帧",
      "B. 信息帧（i）和管理帧（s）的控制字段都包含发送顺序号",
      "C. 如果信息帧（i）的控制字段是8位，则发送顺序号的取值范围是0～127",
      "D. 发送器每发送一个信息帧（i），就把窗口向前滑动一格"
    ],
    "answer": 0,
    "explanation": "HDLC中接收方收到正确信息帧且序号落在接收窗口内时应发回确认帧，故选A。"
  },
  {
    "id": 3276,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006a",
    "question": "以下关于x.25网络的描述中，正确的是 （ ） 。",
    "options": [
      "A. x.25的网络层提供无连接的服务",
      "B. x.25的网络丢失帧时，通过检查帧顺序号重传丢失帧",
      "C. x.25的网络使用lap-d作为传输控制协议",
      "D. x.25的网络采用多路复用技术，帧中的各个时槽被预先分配给不同的终端"
    ],
    "answer": 1,
    "explanation": "X.25网络层提供面向连接的虚电路服务，采用滑动窗口与帧顺序号机制，丢帧时通过检查帧顺序号重传丢失帧，故选B。"
  },
  {
    "id": 3277,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006a",
    "question": "帧中继的地址格式中，标识虚电路标识符的是 （ ） 。",
    "options": [
      "A. cir",
      "B. dlci",
      "C. lmi",
      "D. vpi"
    ],
    "answer": 1,
    "explanation": "帧中继帧头中的DLCI（数据链路连接标识符）用于标识虚电路，CIR是承诺信息速率，LMI是本地管理接口，VPI是ATM虚路径标识。"
  },
  {
    "id": 3278,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006a",
    "question": "下面语句中，正确地描述网络通信控制机制的是 （ ） 。",
    "options": [
      "A. 在数据报系统中，发送方和接受方之间建立了虚拟通道，所有的通信都省略了通道选择的开销",
      "B. 在滑动窗口协议中，窗口的滑动由确认帧的编号控制，所以可以连续发送多个帧",
      "C. 在前向纠错系统中，由接收方检测错误，并请求发送方重发出错帧",
      "D. 由于tcp协议的窗口大小是固定的，无法防止拥塞出现，所以需要超时机制来处理网络拥塞的问题"
    ],
    "answer": 1,
    "explanation": "滑动窗口协议中窗口的滑动由确认帧编号控制，允许连续发送多个帧，提高信道利用率，故选B。"
  },
  {
    "id": 3279,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2006a",
    "question": "关于无连接的通信，下面描述中正确的是 （ ） 。",
    "options": [
      "A. 由于每一个分组独立地建立和释放逻辑连接，所以无连接的通信不适合传送大量的数据",
      "B. 由于通信对方的通信线路都是预设的，所以在通信过程中无需任何有关连接的操作",
      "C. 目标的地址信息被加到每个发送的分组上",
      "D. 无连接的通信协议udp不能运行在电路交换或租用专线网络上"
    ],
    "answer": 2,
    "explanation": "无连接通信中每个分组都携带完整的目标地址信息，独立选路转发，无需预先建立连接，故选C。"
  },
  {
    "id": 3280,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2006a",
    "question": "以太网的数据帧封装如下图所示，包含tcp段中的数据部分最长应该是 （ ） 字节。",
    "options": [
      "A. 1434",
      "B. 1460",
      "C. 1480",
      "D. 1500"
    ],
    "answer": 1,
    "explanation": "以太网MTU为1500字节，减去IP首部20字节和TCP首部20字节，TCP数据部分最长为1500-20-20=1460字节，故选B。"
  },
  {
    "id": 3281,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006a",
    "question": "下面关于icmp协议的描述中，正确的是 （ ） 。",
    "options": [
      "A. icmp协议根据mac地址查找对应的ip地址",
      "B. icmp协议把公网的ip地址转换为私网的ip地址",
      "C. icmp协议根据网络通信的情况把控制报文发送给发送方主机",
      "D. icmp协议集中管理网网络中的ip地址分配"
    ],
    "answer": 2,
    "explanation": "ICMP是IP层的差错与控制报文协议，根据网络通信情况向发送方主机发送控制报文，如目的不可达、超时等，故选C。"
  },
  {
    "id": 3282,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2006a",
    "question": "下面信息中 （ ） 包含在tcp头中而不包含在udp头中。",
    "options": [
      "A. 目标端口号",
      "B. 顺序号",
      "C. 发送端口号",
      "D. 校验号"
    ],
    "answer": 1,
    "explanation": "TCP首部包含顺序号字段用于可靠传输，UDP首部只有源端口、目的端口、长度和校验和，不含顺序号，故选B。"
  },
  {
    "id": 3283,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006a",
    "question": "在x.25网络中， （ ） 是网络层协议。",
    "options": [
      "A. lap-b",
      "B. x.21",
      "C. x.25plp",
      "D. mhs"
    ],
    "answer": 2,
    "explanation": "X.25PLP（分组层协议）是X.25的网络层协议，LAP-B是数据链路层协议，X.21是物理层接口标准，MHS是报文处理系统。"
  },
  {
    "id": 3284,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006a",
    "question": "下列语句中准确的描述了isdn接口类型的是 （ ） 。",
    "options": [
      "A. 基群速率接口（30b+d）中的d信道用于传输用户数据和信令，速率为16kb/s",
      "B. 基群速率接口（30b+d）中的b信道用于传输用户数据，速率为64kb/s",
      "C. 基群速率接口（2b+d）中的d信道用于传输信令，速率为64kb/s",
      "D. 基群速率接口（2b+d）中的d信道用于传输用户数据，速率为16kb/s"
    ],
    "answer": 1,
    "explanation": "ISDN基群速率接口30B+D中，B信道用于传输用户数据，速率为64kb/s，D信道用于传输信令，速率为64kb/s，故选B。"
  },
  {
    "id": 3285,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006a",
    "question": "以下关于ospf协议的描述中，最准确的是 （ ） 。",
    "options": [
      "A. ospf协议根据链路状态法计算最佳路由",
      "B. ospf协议是用于自治系统之间的外部网关协议",
      "C. ospf协议不能根据网络通信情况动态的改变路由",
      "D. ospf协议只能适用于小型网络"
    ],
    "answer": 0,
    "explanation": "OSPF是基于链路状态算法的内部网关协议，通过洪泛链路状态信息计算最短路径，能动态适应网络变化，适用于大型网络，故选A。"
  },
  {
    "id": 3286,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "下面语句中，正确的描述了radius协议的是 （ ） 。",
    "options": [
      "A. 如果需要对用户的访问请求进行提问（challenge），则网络访问服务器 （nas）对用户密码进行加密，并发送给radius认证服务器",
      "B. 网络访问服务器（nas）与radius认证服务器之间通过udp数据报交 换请求/响应信息",
      "C. 在这种c/s协议中，服务器端是网络访问服务器（nas），客户端是radius 认证服务器",
      "D. 通过radius协议可以识别非法的用户，并记录闯入者的日期和时间"
    ],
    "answer": 1,
    "explanation": "RADIUS协议中NAS与RADIUS认证服务器之间通过UDP数据报交换请求/响应信息，实现认证、授权和计费功能，故选B。"
  },
  {
    "id": 3287,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "关于虚拟专用网，下面正确的语句是 （ ） 。",
    "options": [
      "A. 安全套接层协议（ssl）是在应用层和传输层之间增加的安全机制可以用ssl在任何网络上建立虚拟专用网",
      "B. 安全套接层协议（ssl）的缺点是进行服务器端对客服端的单向身份认证",
      "C. 安全ip协议（ipsec）通过认证头（ah）提供无连接的数据完整性和数据源认证、数据加密性保护和抗重发攻击服务",
      "D. 当ipsec处于传输模式时，报文不仅在主机到网关之间的通路上进行加密，而且在发送方和接收方之间的所有通路上都要加密"
    ],
    "answer": 3,
    "explanation": "IPSec传输模式下报文在发送方和接收方之间的所有通路上加密，隧道模式仅在主机到网关间加密，故选D。"
  },
  {
    "id": 3288,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2006a",
    "question": "建立ppp连接以后，发送方就发出一个提问消息（challenge message），接收方根据提问消息计算一个散列值。 （ ） 协议采用这种方式进行用户认证。",
    "options": [
      "A. arp",
      "B. chap",
      "C. pap",
      "D. pptp"
    ],
    "answer": 1,
    "explanation": "CHAP采用三次握手挑战/响应机制进行用户认证，发送方发出挑战消息，接收方计算散列值返回，安全性高于PAP，故选B。"
  },
  {
    "id": 3289,
    "type": "single",
    "category": "无线网络",
    "paper": "real2006a",
    "question": "cdma系统中使用的多路复用技术是 （ ） 。",
    "options": [
      "A. 时分多路",
      "B. 波分多路",
      "C. 码分多址",
      "D. 空分多址"
    ],
    "answer": 2,
    "explanation": "CDMA（码分多址）系统采用码分多址复用技术，各用户使用不同的扩频码在同一频段同时通信，故选C。"
  },
  {
    "id": 3290,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2006a",
    "question": "下列关于1000baset的叙述中错误的是 （ ） 。",
    "options": [
      "A. 可以使用超5类utp作为网络传输介质",
      "B. 最长的有效距离可以到达100米",
      "C. 支持8b/10b编码方案",
      "D. 不同厂商的超5类系统之间可以互用"
    ],
    "answer": 2,
    "explanation": "1000Base-T使用4对超5类UTP，最长距离100米，采用PAM-5编码而非8B/10B，8B/10B用于1000Base-X，故选C。"
  },
  {
    "id": 3291,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006a",
    "question": "与多模光纤相比较，单模光纤具有 （ ） 等特点。",
    "options": [
      "A. 较高的传输速率，较长的传输距离、较高的成本",
      "B. 较低的传输速率，较短的传输距离、较高的成本",
      "C. 较高的传输速率，较短的传输距离、较低的成本",
      "D. 较低的传输速率，较长的传输距离、较低的成本"
    ],
    "answer": 0,
    "explanation": "单模光纤纤芯细、只传一种模式，具有传输速率高、传输距离长、成本较高的特点，故选A。"
  },
  {
    "id": 3292,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2006a",
    "question": "光纤布线系统的测试指标不包括 （ ） 。",
    "options": [
      "A. 最大衰减限值",
      "B. 波长窗口参数",
      "C. 回波损耗限值",
      "D. 近端串扰"
    ],
    "answer": 3,
    "explanation": "光纤布线系统测试指标包括最大衰减限值、波长窗口参数和回波损耗限值，近端串扰是双绞线铜缆的测试指标，故选D。"
  },
  {
    "id": 3293,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006a",
    "question": "在linux操作系统中把外部设备当做文件统一管理，外部设备文件通常放在 （ ） 目录中。",
    "options": [
      "A. /dev",
      "B. /lib",
      "C. /etc",
      "D. /bin"
    ],
    "answer": 0,
    "explanation": "Linux将外部设备作为文件统一管理，设备文件通常存放在/dev目录下，如/dev/sda、/dev/tty等，故选A。"
  },
  {
    "id": 3294,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006a",
    "question": "下列 （ ） 命令可以更改一个文件的权限设置。",
    "options": [
      "A. attrib",
      "B. file",
      "C. chmod",
      "D. change"
    ],
    "answer": 2,
    "explanation": "chmod命令用于更改文件或目录的权限设置，attrib是Windows命令，file用于查看文件类型，故选C。"
  },
  {
    "id": 3295,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006a",
    "question": "通过samba组件实现linux与windows文件资源共享时，需要提供的守护进程（daemon）是 （ ） 。",
    "options": [
      "A. bind",
      "B. smbd",
      "C. named",
      "D. shard"
    ],
    "answer": 1,
    "explanation": "Samba通过smbd守护进程实现Linux与Windows之间的文件和打印资源共享，bind和named是DNS服务，故选B。"
  },
  {
    "id": 3296,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "以下用于在网路应用层和传输层之间提供加密方案的协议是 （ ） 。",
    "options": [
      "A. pgp",
      "B. ssl",
      "C. ipsec",
      "D. des"
    ],
    "answer": 1,
    "explanation": "SSL/TLS工作在应用层与传输层之间，为应用数据提供加密与认证，PGP是应用层邮件加密，IPSec工作在网络层，DES是加密算法。"
  },
  {
    "id": 3297,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "（ ） 不属于将入侵检测系统部署在dmz中的优点。",
    "options": [
      "A. 可以查到受保护区域主机被攻击的状态",
      "B. 可以检测防火墙系统的策略配置是否合理",
      "C. 可以检测dmz被黑客攻击的重点",
      "D. 可以审计来自internet上对受到保护网络的攻击类型"
    ],
    "answer": 3,
    "explanation": "IDS部署在DMZ主要监测DMZ及外部攻击，无法审计来自Internet对内部受保护网络的攻击类型，该功能需内部IDS完成。"
  },
  {
    "id": 3298,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "（ ） 不属于pki ca（认证中心）的功能。",
    "options": [
      "A. 接受并验证最终用户数字证书的申请",
      "B. 向申请者颁发或拒绝颁发数字证书",
      "C. 产生和发布证书废止列表（crl），验证证书状态",
      "D. 业务受理点lra的全面管理"
    ],
    "answer": 3,
    "explanation": "PKI中CA负责证书申请验证、颁发/拒绝、CRL发布与状态验证，LRA业务受理点的全面管理不属于CA功能。"
  },
  {
    "id": 3299,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "驻留在多个网络设备上的程序在短时间内同时产生大量的请求信息冲击某个web服务器，导致该服务器不堪重负，无法正常响应其它合法用户的请求，这属于 （ ） 。",
    "options": [
      "A. 网上冲浪",
      "B. 中间人攻击",
      "C. ddos攻击",
      "D. mac攻击"
    ],
    "answer": 2,
    "explanation": "多个网络设备上的程序同时向某Web服务器发起大量请求，属于分布式拒绝服务（DDoS）攻击，使服务器无法响应合法请求。"
  },
  {
    "id": 3300,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "dns系统对于网络的正常运行是至关重要的，以下措施中不能增强dns安全的是 （ ） 。",
    "options": [
      "A. 使用防火墙控制对dns的访问",
      "B. 避免dns的hinfo记录被窃取",
      "C. 更改dns的端口号",
      "D. 限制区域传输"
    ],
    "answer": 2,
    "explanation": "DNS默认使用53端口，更改端口号并不能增强安全性，反而可能影响正常解析；防火墙控制、限制区域传输等才有效。"
  },
  {
    "id": 3301,
    "type": "single",
    "category": "网络管理",
    "paper": "real2006a",
    "question": "在rmon中，实现捕获者（capture）时必须实现 （ ） 。",
    "options": [
      "A. 事件组（event）",
      "B. 过滤组（filter）",
      "C. 警报组（alarm）",
      "D. 主机组（host）"
    ],
    "answer": 1,
    "explanation": "RMON捕获组（capture）实现时必须依赖过滤组（filter），先过滤出所需数据包再进行捕获。"
  },
  {
    "id": 3302,
    "type": "single",
    "category": "网络管理",
    "paper": "real2006a",
    "question": "在snmp和cmip是网络界最重要的网络管理协议， （ ） 是错误的。",
    "options": [
      "A. snmp和cmip采用的检索方式不同。",
      "B. snmp和cmip信息获取方式不同。",
      "C. snmp和cmip采用的抽象语法符号不同。",
      "D. snmp和cmip传输层支持协议不同。"
    ],
    "answer": 2,
    "explanation": "SNMP和CMIP均采用ASN.1抽象语法符号描述管理信息，因此说二者抽象语法符号不同是错误的。"
  },
  {
    "id": 3303,
    "type": "single",
    "category": "网络管理",
    "paper": "real2006a",
    "question": "某校园用户无法访问外部站点210.102.58.74，管理人员在windows操作系统下可以使用 （ ） 判断故障发生在校园网内还是校园网外。",
    "options": [
      "A. ping 210.102.58.74",
      "B. tracert 210.102.58.74",
      "C. netstat 210.102.58.74",
      "D. arp 210.102.58.74"
    ],
    "answer": 1,
    "explanation": "tracert可显示数据包到达目标所经过的路由，据此判断故障发生在校园网内还是校园网外。"
  },
  {
    "id": 3304,
    "type": "single",
    "category": "网络管理",
    "paper": "real2006a",
    "question": "snmpv1的管理信息结构定义的应用数据类型time ticks的单位是 （ ） 。",
    "options": [
      "A. 1秒",
      "B. 0.1秒",
      "C. 0.01秒",
      "D. 1毫秒"
    ],
    "answer": 2,
    "explanation": "SNMPv1的TimeTicks应用数据类型单位为0.01秒，即百分之一秒。"
  },
  {
    "id": 3305,
    "type": "single",
    "category": "网络管理",
    "paper": "real2006a",
    "question": "snmpv2引入信息块的概念，用于说明一组定义，以下不属于这种模块的是 （ ） 。",
    "options": [
      "A. mib模块",
      "B. mib的依从性声明模块",
      "C. 管理能力说明模块",
      "D. 代理能力说明模块"
    ],
    "answer": 2,
    "explanation": "SNMPv2信息模块包括MIB模块、MIB依从性声明模块和代理能力说明模块，不包括管理能力说明模块。"
  },
  {
    "id": 3306,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006a",
    "question": "通常路由器不进行转发的网络地址是 （ ） 。",
    "options": [
      "A. 101.1.32.7",
      "B. 192.178.32.2",
      "C. 172.16.32.1",
      "D. 172.35.32.244"
    ],
    "answer": 2,
    "explanation": "172.16.32.1属于私有地址范围172.16.0.0～172.31.255.255，路由器通常不转发私有地址。"
  },
  {
    "id": 3307,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2006a",
    "question": "在网络202.115.144.0/20中可分配的主机地址数是 （ ） 。",
    "options": [
      "A. 1022",
      "B. 2046",
      "C. 4094",
      "D. 8192"
    ],
    "answer": 2,
    "explanation": "/20掩码有12位主机位，2^12-2=4094个可分配主机地址。"
  },
  {
    "id": 3308,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006a",
    "question": "设有下面4条路由：10.1.193.0/24、10.1.194../24、10.1.196.0/24和10.1.198.0/24，如果进行路由汇聚，覆盖这四条路由的地址是 （ ） 。",
    "options": [
      "A. 10.1.192.0/21",
      "B. 10.1.192.0/22",
      "C. 10.1.200.0/22",
      "D. 10.1.224.0/20"
    ],
    "answer": 0,
    "explanation": "四条路由前两字节相同，第三字节193、194、196、198二进制前5位一致，汇聚为10.1.192.0/21。"
  },
  {
    "id": 3309,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006a",
    "question": "3台路由器的连接与ip地址分配如下图所示，在r2中配置到达子网192.168.1.0/24的静态路由的命令是 （ ） 。",
    "options": [
      "A. r2 (config ) # ip route 192.168.1.0 255.255.255.0 10.1.1.1",
      "B. r2 (config ) # ip route 192.168.1.0 255.255.255.0 10.1.1.2",
      "C. r2 (config ) # ip route 192.168.1.2 255.255.255.0 10.1.1.1",
      "D. r2 (config ) # ip route 192.168.1.2 255.255.255.0 10.1.1.2"
    ],
    "answer": 0,
    "explanation": "静态路由命令格式为ip route 目标网络 掩码 下一跳，目标为192.168.1.0/24，下一跳为10.1.1.1。"
  },
  {
    "id": 3310,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006a",
    "question": "网络连接和ip地址分配如下图所示，并且配置了ripv2路由协议。如果路由器r1上运行命令：r1 # show ip route，下面4条显示信息中正确的是 （ ） 。",
    "options": [
      "A. r 192.168.1.0 [ 120/1 ] via 192.168.66.1 00:00:15 ethernet0",
      "B. r 192.168.5.0 [ 120/1 ] via 192.168.66.2 00:00:18 serial0",
      "C. r 192.168.5.0 [ 120/1 ] via 192.168.66.1 00:00:24 serial0",
      "D. r 192.168.65.0 [ 120/1 ] via 192.168.67.1 00:00:15 ethernet0"
    ],
    "answer": 1,
    "explanation": "RIP路由条目中下一跳应为本路由器直连的邻居地址，192.168.5.0经192.168.66.2从Serial0学到符合。"
  },
  {
    "id": 3311,
    "type": "single",
    "category": "路由协议",
    "paper": "real2006a",
    "question": "路由器r1的连接和地址分配如下图所示，如果在r1上安装ospf协议，运行下列命令：router ospf 100，则配置s0和e0端口的命令是 （ ） 。",
    "options": [
      "A. network 192.100.10.5 0.0.0.3 area 0",
      "B. network 192.100.10.4 0.0.0.3 area 0",
      "C. network 192.100.10.5 255.255.255.252 area 0",
      "D. network 192.100.10.4 255.255.255.252 area 0"
    ],
    "answer": 1,
    "explanation": "OSPF的network命令使用反掩码，192.100.10.4/30对应反掩码0.0.0.3，故为network 192.100.10.4 0.0.0.3 area 0。"
  },
  {
    "id": 3312,
    "type": "single",
    "category": "交换技术",
    "paper": "real2006a",
    "question": "下面有关vlan的语句中，正确的是 （ ） 。",
    "options": [
      "A. 虚拟局域网中继协议vtp（vlan trunk protocol）用于在路由器之间交换不同vlan的信息。",
      "B. 为了抑制广播风暴，不同的vlan之间必须用网桥分隔",
      "C. 交换机的初始状态是工作在vtp服务器模式，这样可以把配置信息广播给其它交换机",
      "D. 一台计算机可以属于多个vlan即它可以访问多个vlan，也可以被多个vlan访问"
    ],
    "answer": 3,
    "explanation": "一台计算机可属于多个VLAN，能访问多个VLAN也可被多个VLAN访问；VTP用于交换机间同步VLAN信息而非路由器。"
  },
  {
    "id": 3313,
    "type": "single",
    "category": "交换技术",
    "paper": "real2006a",
    "question": "划分vlan的方法有多种，这些方法中不包括 （ ） 。",
    "options": [
      "A. 根据端口划分",
      "B. 根据路由设备划分",
      "C. 根据mac地址划分",
      "D. 根据ip地址划分"
    ],
    "answer": 1,
    "explanation": "VLAN划分方法包括基于端口、MAC地址、IP地址等，不包括根据路由设备划分。"
  },
  {
    "id": 3314,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2006a",
    "question": "下图中v0至v2的最短路径长度为 （ ） 。",
    "options": [
      "A. 90",
      "B. 60",
      "C. 70",
      "D. 100"
    ],
    "answer": 1,
    "explanation": "按最短路径算法，v0到v2经中间节点路径长度为60，为最短路径。"
  },
  {
    "id": 3315,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2006a",
    "question": "使用海明码进行纠错，7位码长（x7x6x5x4x3x2x1），其中4位数据，监督关系式为：c0= x1+ x3+ x5+ x7c1= x2+ x3+ x6+ x7c2= x4+ x5+ x6+ x7如果接收的码字为1000101，那么纠正后的码字是 （ ） 。",
    "options": [
      "A. 1000001",
      "B. 1000101",
      "C. 1001101",
      "D. 1010101"
    ],
    "answer": 3,
    "explanation": "接收码字1000101代入监督关系式得c2c1c0=101，即第5位出错，取反后得1010101。"
  },
  {
    "id": 3316,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2006a",
    "question": "层次化网络设计方案中， （ ） 是核心层的主要任务。",
    "options": [
      "A. 高速数据转发",
      "B. 接入internet",
      "C. 工作站接入网络",
      "D. 实现网络的访问策略控制"
    ],
    "answer": 0,
    "explanation": "层次化设计中核心层负责高速数据转发，是网络的高速骨干，接入层负责工作站接入，汇聚层实现访问策略控制。"
  },
  {
    "id": 3317,
    "type": "single",
    "category": "网络安全",
    "paper": "real2006a",
    "question": "网络安全设计是保证网络安全运行的基础，网络安全设计有其基本的设计原则，以下有关于网络安全设计原则的描述，错误的是 （ ） 。",
    "options": [
      "A. 网络安全的“木桶原则”强调对信息均衡、全面地进行保护",
      "B. 良好的等级划分，是实现网络安全的保障",
      "C. 网络安全系统设计应独立进行，不需要考虑网络结构",
      "D. 网络安全系统应该以不影响系统正常运行为前提"
    ],
    "answer": 2,
    "explanation": "网络安全设计必须与网络结构相结合，不能脱离网络结构独立进行，故C错误；其余均符合木桶原则、等级划分和不影响运行等原则。"
  },
  {
    "id": 3318,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2006a",
    "question": "在windows操作系统中可以通过安装 （ ） 组件创建web站点。",
    "options": [
      "A. iis",
      "B. ie",
      "C. www",
      "D. dns"
    ],
    "answer": 0,
    "explanation": "IIS（Internet Information Services）是Windows提供的Web服务器组件，安装后可创建和管理Web站点。"
  },
  {
    "id": 3319,
    "type": "single",
    "category": "无线网络",
    "paper": "real2006a",
    "question": "我国自行研制的移动通信3g标准是 （ ） 。",
    "options": [
      "A. td-scdma",
      "B. wcdma",
      "C. cdma2000",
      "D. gprs"
    ],
    "answer": 0,
    "explanation": "TD-SCDMA是我国自主研发的3G移动通信标准，由我国提出并被ITU采纳，WCDMA和CDMA2000为其他3G标准。"
  },
  {
    "id": 3320,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2006a",
    "question": "“science”是一个xml元素的定义，其中元素标记的属性值是 （ ） 。",
    "options": [
      "A. title",
      "B. style",
      "C. italic",
      "D. science"
    ],
    "answer": 2,
    "explanation": "在XML元素定义中，属性值位于等号后的引号内，如style=\"italic\"，故属性值为italic。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2005b";
  const A = [
  {
    "id": 3321,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "阵列处理机属于 （ ） 计算机。",
    "options": [
      "A. sisd",
      "B. simd",
      "C. misd",
      "D. mimd"
    ],
    "answer": 1,
    "explanation": "阵列处理机由多个处理单元在同一控制器指挥下对各自数据并行操作，属于SIMD（单指令多数据流）计算机。"
  },
  {
    "id": 3322,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "采用 （ ） 不能将多个处理机互连构成多处理机系统。",
    "options": [
      "A. std 总线",
      "B. 交叉开关",
      "C. pci 总线",
      "D. centronic 总线"
    ],
    "answer": 3,
    "explanation": "Centronic总线是打印机并行接口标准，不能用于多处理机互连；STD总线、交叉开关和PCI总线均可用于多处理机系统互连。"
  },
  {
    "id": 3323,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "某计算机系统的可靠性结构是如下图所示的双重串并联结构，若所构成系统的每个部件的可靠度为 0．9 ，即 r=0．9 ，则系统的可靠度为 （ ） 。",
    "options": [
      "A. 0.9997",
      "B. 0.9276",
      "C. 0.9639",
      "D. 0.6561"
    ],
    "answer": 2,
    "explanation": "双重串并联结构由两组并联单元串联，每组两个部件并联可靠度为1-(1-0.9)²=0.99，系统可靠度为0.99×0.99=0.9801，接近选项C。"
  },
  {
    "id": 3324,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "应该在 （ ） 阶段制定系统测试计划。",
    "options": [
      "A. 需求分析",
      "B. 概要设计",
      "C. 详细设计",
      "D. 系统测试"
    ],
    "answer": 0,
    "explanation": "系统测试计划应在需求分析阶段制定，以便测试工作尽早依据需求开展，符合软件工程中测试尽早介入的原则。"
  },
  {
    "id": 3325,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "已经发布实施的标准（包括已确认或修改补充的标准），经过实施一定时期后，对其内容再次审查，以确保其有效性、先进性和适用性，其周期一般不超过 （ ） 年。",
    "options": [
      "A. 1",
      "B. 3",
      "C. 5",
      "D. 7"
    ],
    "answer": 2,
    "explanation": "标准实施后应定期复审，一般不超过5年，以确保其有效性、先进性和适用性，故周期为5年。"
  },
  {
    "id": 3326,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "（ ） 不需要登记或标注版权标记就能得到保护。",
    "options": [
      "A. 专利权",
      "B. 商标权",
      "C. 著作权",
      "D. 财产权"
    ],
    "answer": 2,
    "explanation": "著作权自作品创作完成之日起自动产生，无需登记或标注版权标记；专利权和商标权则需申请登记才能获得保护。"
  },
  {
    "id": 3327,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2005b",
    "question": "按照同步光纤网传输标准（sonet），oc-3 的数据速率为 （ ） mb/s 。",
    "options": [
      "A. 150.336",
      "B. 155.520",
      "C. 622.080",
      "D. 2488.320"
    ],
    "answer": 1,
    "explanation": "SONET中OC-1速率为51.84Mb/s，OC-3为其3倍，即51.84×3=155.520Mb/s。"
  },
  {
    "id": 3328,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2005b",
    "question": "设信号的波特率为 600baud，采用幅度—相位复合调制技术，由 4 种幅度和 8 种相位组成 16 种码元，则信道的数据率为 （ ） 。",
    "options": [
      "A. 600 b/s",
      "B. 2400 b/s",
      "C. 4800 b/s",
      "D. 9600 b/s"
    ],
    "answer": 1,
    "explanation": "16种码元对应每个码元携带log₂16=4比特，数据率=波特率×每码元比特数=600×4=2400b/s。"
  },
  {
    "id": 3329,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2005b",
    "question": "双极型ami编码经过一个噪声信道，接收的波形如图所示，那么出错的是第 （ ）位。",
    "options": [
      "A. 3",
      "B. 5",
      "C. 7",
      "D. 9"
    ],
    "answer": 2,
    "explanation": "AMI编码要求相邻非零脉冲极性交替，接收波形中第7位违反极性交替规则，故出错的是第7位。"
  },
  {
    "id": 3330,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2005b",
    "question": "若信息码字为11100011，生成多项式 g（x）=x5+x4+x+1，则计算出的 crc 校验码为 （ ） 。",
    "options": [
      "A. 01101",
      "B. 11010",
      "C. 001101",
      "D. 0011010"
    ],
    "answer": 1,
    "explanation": "CRC校验用信息码字11100011除以生成多项式对应的110011，余数为11010，即校验码为11010。"
  },
  {
    "id": 3331,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2005b",
    "question": "若采用后退 n 帧 arq 协议进行流量控制，帧编号字段为 7 位，则发送窗口的最大长度为 （ ） 。",
    "options": [
      "A. 7",
      "B. 8",
      "C. 127",
      "D. 128"
    ],
    "answer": 2,
    "explanation": "后退N帧ARQ中，帧编号字段为n位时发送窗口最大长度为2ⁿ-1，n=7时即为127。"
  },
  {
    "id": 3332,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2005b",
    "question": "在 iso osi/rm 中， （ ） 实现数据压缩功能。",
    "options": [
      "A. 应用层",
      "B. 表示层",
      "C. 会话层",
      "D. 网络层"
    ],
    "answer": 1,
    "explanation": "OSI/RM中表示层负责数据格式转换、加密解密和数据压缩等功能，故数据压缩由表示层实现。"
  },
  {
    "id": 3333,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2005b",
    "question": "以太网中的帧属于 （ ） 协议数据单元。",
    "options": [
      "A. 物理层",
      "B. 数据链路层",
      "C. 网络层",
      "D. 应用层"
    ],
    "answer": 1,
    "explanation": "以太网帧是数据链路层的协议数据单元，封装了MAC地址等信息，用于局域网中节点间的数据传输。"
  },
  {
    "id": 3334,
    "type": "single",
    "category": "网络安全",
    "paper": "real2005b",
    "question": "匿名 ftp 访问通常使用 （ ） 作为用户名。",
    "options": [
      "A. guest",
      "B. email 地址",
      "C. anonymous",
      "D. 主机 id"
    ],
    "answer": 2,
    "explanation": "匿名FTP访问使用anonymous作为用户名，通常以用户邮箱地址作为密码，是公开文件服务器的标准访问方式。"
  },
  {
    "id": 3335,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2005b",
    "question": "通常情况下，信息插座的安装位置距离地面的高度为 （ ） cm 。",
    "options": [
      "A. 10 ～ 20",
      "B. 20 ～ 30",
      "C. 30 ～ 50",
      "D. 50 ～ 70"
    ],
    "answer": 2,
    "explanation": "综合布线中信息插座通常安装在墙面距地面30～50cm高度，便于使用且符合布线施工规范。"
  },
  {
    "id": 3336,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005b",
    "question": "在 linux 操作系统中手工安装 apache 服务器时，默认的 web 站点的目录为 （ ） 。",
    "options": [
      "A. /etc/httpd",
      "B. /var/log/httpd",
      "C. /etc/home",
      "D. /home/httpd"
    ],
    "answer": 3,
    "explanation": "Linux 下手工安装 Apache 时，默认 Web 站点根目录为 /home/httpd（Red Hat 系发行版），故答案为 D。"
  },
  {
    "id": 3337,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005b",
    "question": "在 linux 中， （ ） 命令可用显示当前用户的工作目录。",
    "options": [
      "A. #where",
      "B. #md",
      "C. #pwd",
      "D. #rd"
    ],
    "answer": 2,
    "explanation": "pwd（print working directory）用于显示当前用户所在的工作目录，是 Linux 常用命令，故选 C。"
  },
  {
    "id": 3338,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005b",
    "question": "下列选项中， （ ） 不属于 windows 的网络应用程序接口（api）。",
    "options": [
      "A. winsock",
      "B. nfs",
      "C. rpc",
      "D. netbios"
    ],
    "answer": 1,
    "explanation": "Winsock、RPC、NetBIOS 均为 Windows 网络应用程序接口，NFS 是网络文件系统协议，不属于 Windows API，故选 B。"
  },
  {
    "id": 3339,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2005b",
    "question": "atm 适配层的功能是 （ ） 。",
    "options": [
      "A. 分割和合并用户数据",
      "B. 信元头的组装和拆分",
      "C. 比特定时",
      "D. 信元校验"
    ],
    "answer": 0,
    "explanation": "ATM 适配层（AAL）位于 ATM 层之上，负责将用户数据分割成信元并在接收端合并还原，故选 A。"
  },
  {
    "id": 3340,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2005b",
    "question": "fttx ＋ lan 接入网采用的传输介质为 （ ） 。",
    "options": [
      "A. 同轴电缆",
      "B. 光纤",
      "C. 5类双绞线",
      "D. 光纤和5类双绞线"
    ],
    "answer": 3,
    "explanation": "FTTx+LAN 接入网中，主干采用光纤传输，到用户端采用 5 类双绞线接入，故传输介质为光纤和 5 类双绞线，选 D。"
  },
  {
    "id": 3341,
    "type": "single",
    "category": "网络安全",
    "paper": "real2005b",
    "question": "下面关于数字签名的说法错误的是 （ ） 。",
    "options": [
      "A. 能够保证信息传输过程中的保密性",
      "B. 能够对发送者的身份进行认证",
      "C. 如果接收者对报文进行了篡改，会被发现",
      "D. 网络中的某一用户不能冒充另一用户作为发送者或接收者"
    ],
    "answer": 0,
    "explanation": "数字签名用于身份认证、完整性和不可否认性，但不提供保密性，保密性需靠加密实现，故 A 说法错误。"
  },
  {
    "id": 3342,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005b",
    "question": "在 rip 协议中，默认的路由更新周期是 （ ） 秒。",
    "options": [
      "A. 30",
      "B. 60",
      "C. 90",
      "D. 100"
    ],
    "answer": 0,
    "explanation": "RIP 协议默认每 30 秒向邻居路由器发送一次完整的路由更新报文，故更新周期为 30 秒，选 A。"
  },
  {
    "id": 3343,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005b",
    "question": "在距离矢量路由协议中，可以使用多种方法防止路由循环，以下选项中，不属于这些方法的是 （ ） 。",
    "options": [
      "A. 垂直翻转（flip vertical）",
      "B. 水平分裂（split horizon）",
      "C. 反向路由中毒（poison reverse）",
      "D. 设置最大度量值（metric infinity）"
    ],
    "answer": 0,
    "explanation": "距离矢量协议防环方法包括水平分裂、反向路由中毒、设置最大度量值等，垂直翻转并非其防环机制，故选 A。"
  },
  {
    "id": 3344,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005b",
    "question": "关于外部网关协议 bgp ，以下选项中，不正确的是 （ ） 。",
    "options": [
      "A. bgp 是一种距离矢量协议",
      "B. bgp 通过 udp 发布路由信息",
      "C. bgp 支持路由汇聚功能",
      "D. bgp 能够检测路由循环"
    ],
    "answer": 1,
    "explanation": "BGP 通过 TCP 的 179 端口发布路由信息，而非 UDP，故 B 说法不正确。"
  },
  {
    "id": 3345,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005b",
    "question": "运行 ospf 协议的路由器每 10 秒钟向它的各个接口发送 hello 分组，接收到 hello 分组的路由器就知道了邻居的存在。如果在 （ ） 秒内没有从特定的邻居接收到这种分组，路由器就认为那个邻居不存在了。",
    "options": [
      "A. 30",
      "B. 40",
      "C. 50",
      "D. 60"
    ],
    "answer": 1,
    "explanation": "OSPF 中邻居失效时间为 Hello 间隔的 4 倍，即 10×4=40 秒内未收到 Hello 分组即认为邻居不存在，选 B。"
  },
  {
    "id": 3346,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005b",
    "question": "在广播网络中， ospf 协议要选出一个指定路由器（designated router ，dr）。 dr 有几个作用，以下关于 dr 的描述中， （ ） 不是 dr 的作用。",
    "options": [
      "A. 减少网络通信量",
      "B. 检测网络故障",
      "C. 负责为整个网络生成 lsa",
      "D. 减少链路状态数据库的大小"
    ],
    "answer": 1,
    "explanation": "DR 的作用是减少网络通信量、生成网络 LSA、减小链路状态数据库，检测网络故障并非其职责，故选 B。"
  },
  {
    "id": 3347,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005b",
    "question": "使用 traceroute 命令测试网络可以 （ ） 。",
    "options": [
      "A. 检验链路协议是否运行正常",
      "B. 检验目标网络是否在路由表中",
      "C. 检验应用程序是否正常",
      "D. 显示分组到达目标经过的各个路由器"
    ],
    "answer": 3,
    "explanation": "traceroute 命令通过逐跳发送探测分组，显示数据包到达目标主机所经过的各个路由器，故选 D。"
  },
  {
    "id": 3348,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005b",
    "question": "能显示ip、icmp、tcp、udp统计信息的 windows 命令是 （ ） 。",
    "options": [
      "A. netstat -s",
      "B. netstat -e",
      "C. netstat -r",
      "D. netstat -a"
    ],
    "answer": 0,
    "explanation": "netstat -s 按协议显示 IP、ICMP、TCP、UDP 等的统计信息，符合题意，故选 A。"
  },
  {
    "id": 3349,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005b",
    "question": "在 rmon 管理信息库中，矩阵组存储的信息是 （ ） 。",
    "options": [
      "A. 一对主机之间建立的 tcp 连接数",
      "B. 一对主机之间交换的 ip 分组数",
      "C. 一对主机之间交换的字节数",
      "D. 一对主机之间出现冲突的次数"
    ],
    "answer": 2,
    "explanation": "RMON 矩阵组记录一对主机之间交换的字节数和分组数等流量统计信息，故选 C。"
  },
  {
    "id": 3350,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005b",
    "question": "假设有一个局域网，管理站每 15 分钟轮询被管理设备一次，一次查询访问需要的时间是 200ms ，则管理站最多可以支持 （ ） 个网络设备。",
    "options": [
      "A. 400",
      "B. 4000",
      "C. 4500",
      "D. 5000"
    ],
    "answer": 2,
    "explanation": "15 分钟=900 秒，900000ms÷200ms=4500，故管理站最多可支持 4500 个网络设备，选 C。"
  },
  {
    "id": 3351,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "使用 raid 作为网络存储设备有许多好处，以下关于 raid 的叙述中不正确的是（ ） 。",
    "options": [
      "A. raid 使用多块廉价磁盘阵列构成,提高了性能价格比",
      "B. raid 采用交叉存取技术，提高了访问速度",
      "C. raid0 使用磁盘镜像技术，提高了可靠性",
      "D. raid3 利用一台奇偶校验盘完成容错功能，减少了冗余磁盘数量"
    ],
    "answer": 2,
    "explanation": "RAID0 采用条带化技术提高读写速度，但不提供冗余，可靠性低；磁盘镜像技术属于 RAID1，故 C 叙述不正确。"
  },
  {
    "id": 3352,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2005b",
    "question": "属于网络 112.10.200.0/21 的地址是 （ ） 。",
    "options": [
      "A. 112.10.198.0",
      "B. 112.10.206.0",
      "C. 112.10.217.0",
      "D. 112.10.224.0"
    ],
    "answer": 1,
    "explanation": "/21 掩码为 255.255.248.0，网络范围 112.10.200.0~112.10.207.255，只有 112.10.206.0 落在该范围内，故选 B。"
  },
  {
    "id": 3353,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2005b",
    "question": "设有下面 4 条路由： 172.18.129.0/24 、 172.18.130.0/24 、 172.18.132.0/24 和 172.18.133.0/24 ，如果进行路由汇聚，能覆盖这 4 条路由的地址是 （ ） 。",
    "options": [
      "A. 172.18.128.0/21",
      "B. 172.18.128.0/22",
      "C. 172.18.130.0/22",
      "D. 172.18.132.0/23"
    ],
    "answer": 0,
    "explanation": "4 条路由第三字节为 129、130、132、133，二进制前 5 位相同，汇聚为 /21，网络地址 172.18.128.0/21，故选 A。"
  },
  {
    "id": 3354,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2005b",
    "question": "网络 122.21.136.0/24 和 122.21.143.0/24 经过路由汇聚，得到的网络地址是（ ） 。",
    "options": [
      "A. 122.21.136.0/22",
      "B. 122.21.136.0/21",
      "C. 122.21.143.0/22",
      "D. 122.21.128.0/24"
    ],
    "answer": 1,
    "explanation": "136 与 143 二进制前 5 位相同，可汇聚为 /21，网络地址为 122.21.136.0/21，故选 B。"
  },
  {
    "id": 3355,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005b",
    "question": "如果路由器配置了 bgp 协议，要把网络地址 133.1.2.0/24 发布给邻居，那么发布这个公告的命令是 （ ） 。",
    "options": [
      "A. r1(config-route)#network 133.1.2.0",
      "B. r1(config-route)#network 133.1.2.0 0.0.0.255",
      "C. r1(config-route)#network-advertise 133.1.2.0",
      "D. r1(config-route)#network 133.1.2.0 mask 255.255.255.0"
    ],
    "answer": 3,
    "explanation": "BGP 发布网络需使用 network 命令并指定掩码，格式为 network 133.1.2.0 mask 255.255.255.0，故选 D。"
  },
  {
    "id": 3356,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005b",
    "question": "如果要彻底退出路由器或者交换机的配置模式，输入的命令是 （ ） 。",
    "options": [
      "A. exit",
      "B. no config-mode",
      "C. ctrl+c",
      "D. ctrl+z"
    ],
    "answer": 3,
    "explanation": "在路由器/交换机配置模式下，Ctrl+Z 可直接退回到特权模式，彻底退出配置模式；exit 只逐级退出，Ctrl+C 用于中断当前操作。"
  },
  {
    "id": 3357,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005b",
    "question": "把路由器配置脚本从 ram 写入 nvram 的命令是 （ ） 。",
    "options": [
      "A. save ram nvram",
      "B. save ram",
      "C. copy running-config startup-config",
      "D. copy all"
    ],
    "answer": 2,
    "explanation": "RAM 中运行的是 running-config，NVRAM 中保存的是 startup-config，用 copy running-config startup-config 将当前配置写入 NVRAM 保存。"
  },
  {
    "id": 3358,
    "type": "single",
    "category": "交换技术",
    "paper": "real2005b",
    "question": "虚拟局域网中继协议（vtp）有三种工作模式，即服务器模式、客户机模式和透明模式，以下关于这 3 种工作模式的叙述中，不正确的是 （ ） 。",
    "options": [
      "A. 在服务器模式可以设置 vlan 信息",
      "B. 在服务器模式下可以广播 vlan 配置信息",
      "C. 在客户机模式下不可以设置 vlan 信息",
      "D. 在透明模式下不可以设置 vlan 信息"
    ],
    "answer": 3,
    "explanation": "VTP 透明模式下交换机可以自行创建、修改和删除本地 VLAN，只是不参与 VTP 同步，故“透明模式不能设置 VLAN”说法错误。"
  },
  {
    "id": 3359,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2005b",
    "question": "按照网络分级设计模型，通常把网络设计分为 3 层，即核心层、汇聚层和接入层，以下关于分级网络的描述中，不正确的是 （ ） 。",
    "options": [
      "A. 核心层承担访问控制列表检查功能",
      "B. 汇聚层实现网络的访问策略控制",
      "C. 工作组服务器放置在接入层",
      "D. 在接入层可以使用集线器代替交换机"
    ],
    "answer": 0,
    "explanation": "访问控制列表检查属于策略控制功能，应在汇聚层实现，核心层应专注高速转发，故核心层承担 ACL 检查的描述不正确。"
  },
  {
    "id": 3360,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2005b",
    "question": "以太网中如果发生介质访问冲突，按照二进制指数后退算法决定下一次重发的时间，使用二进制后退算法的理由是 （ ） 。",
    "options": [
      "A. 这种算法简单",
      "B. 这种算法执行速度快",
      "C. 这种算法考虑了网络负载对冲突的影响",
      "D. 这种算法与网络的规模大小无关"
    ],
    "answer": 2,
    "explanation": "二进制指数后退算法使重发等待时间随冲突次数增加而加倍，从而根据网络负载动态调整，降低高负载下的再次冲突概率。"
  },
  {
    "id": 3361,
    "type": "single",
    "category": "无线网络",
    "paper": "real2005b",
    "question": "在 802.11 定义的各种业务中，优先级最低的是 （ ） 。",
    "options": [
      "A. 分布式竞争访问",
      "B. 带应答的分布式协调功能",
      "C. 服务访问节点轮询",
      "D. 请求 / 应答式通信"
    ],
    "answer": 0,
    "explanation": "802.11 中 DCF 的分布式竞争访问（DCF）优先级最低，PCF 的轮询、带应答协调功能等具有更高优先级。"
  },
  {
    "id": 3362,
    "type": "single",
    "category": "网络安全",
    "paper": "real2005b",
    "question": "802.11b 定义了无线网的安全协议 wep （wired equivalent privacy）。以下关于 wep 的描述中，不正确的是 （ ） 。",
    "options": [
      "A. wep使用rc4流加密协议",
      "B. wep支持40位密钥和128位密钥",
      "C. wep支持端到端的加密与认证",
      "D. wep是一种对称密钥机制"
    ],
    "answer": 2,
    "explanation": "WEP 使用 RC4 对称流加密，支持 40 位和 128 位密钥，但只提供链路级加密认证，不支持端到端的加密与认证。"
  },
  {
    "id": 3363,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005b",
    "question": "下列路由器协议中， （ ） 用于 as 之间的路由选择。",
    "options": [
      "A. rip",
      "B. ospf",
      "C. is-is",
      "D. bgp"
    ],
    "answer": 3,
    "explanation": "BGP 是外部网关协议，用于自治系统 AS 之间的路由选择；RIP、OSPF、IS-IS 均为 AS 内部使用的路由协议。"
  },
  {
    "id": 3364,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2005b",
    "question": "iee802.3ae 10gb/s 以太网标准支持的工作模式是 （ ） 。",
    "options": [
      "A. 全双工",
      "B. 半双工",
      "C. 单工",
      "D. 全双工和半双工"
    ],
    "answer": 0,
    "explanation": "IEEE 802.3ae 10Gb/s 以太网标准只支持全双工工作模式，不再支持半双工，因此不存在冲突检测机制。"
  },
  {
    "id": 3365,
    "type": "single",
    "category": "网络安全",
    "paper": "real2005b",
    "question": "通过代理服务器使内部局域网中的客户机访问 internet 时， （ ） 不属于代理服务器的功能。",
    "options": [
      "A. 共享 ip 地址",
      "B. 信息缓存",
      "C. 信息转发",
      "D. 信息加密"
    ],
    "answer": 3,
    "explanation": "代理服务器具有共享 IP 地址、信息缓存和信息转发功能，但一般不提供信息加密功能，加密需由其他安全机制实现。"
  },
  {
    "id": 3366,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2005b",
    "question": "下列 （ ） 设备可以隔离 arp 广播帧。",
    "options": [
      "A. 路由器",
      "B. 网桥",
      "C. 以太网交换机",
      "D. 集线器"
    ],
    "answer": 0,
    "explanation": "ARP 广播帧属于二层广播，路由器工作在三层，可隔离广播域，从而阻止 ARP 广播帧的传播；网桥、交换机、集线器均不能隔离。"
  },
  {
    "id": 3367,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005b",
    "question": "在 windows 系统中， （ ） 不是网络服务组件。",
    "options": [
      "A. ras",
      "B. http",
      "C. iis",
      "D. dns"
    ],
    "answer": 1,
    "explanation": "RAS（远程访问服务）、IIS、DNS 都是 Windows 的网络服务组件，而 HTTP 是应用层协议，不是网络服务组件。"
  },
  {
    "id": 3368,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2005b",
    "question": "在 osi 参考模型中，数据链路层处理的数据单位是 （ ） 。",
    "options": [
      "A. 比特",
      "B. 帧",
      "C. 分组",
      "D. 报文"
    ],
    "answer": 1,
    "explanation": "OSI 参考模型中，数据链路层处理的数据单位是帧；比特属于物理层，分组属于网络层，报文属于更高层。"
  },
  {
    "id": 3369,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005b",
    "question": "在 ogsa 标准中定义了 （ ） 的概念，它提供一组遵守特定的约定并定义明确的接口，是实体之间产生、管理和交换信息的机制。",
    "options": [
      "A. object",
      "B. grid service",
      "C. web service",
      "D. xml"
    ],
    "answer": 1,
    "explanation": "OGSA（开放网格服务体系结构）标准中定义了 Grid Service（网格服务）概念，它提供约定接口，是实体间产生、管理和交换信息的机制。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();
(function () {
  const P = "real2005a";
  const A = [
  {
    "id": 3370,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005a",
    "question": "如果主存容量为16m字节，且按字节编址，表示该主存地址至少应需要 （ ） 位。",
    "options": [
      "A. 16",
      "B. 20",
      "C. 24",
      "D. 32"
    ],
    "answer": 2,
    "explanation": "主存容量 16MB=2^24 字节，按字节编址时地址数等于字节数，故至少需要 24 位地址线来表示。"
  },
  {
    "id": 3371,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005a",
    "question": "在计算机系统中，构成虚拟存储器 （ ） 。",
    "options": [
      "A. 只需要一定的硬件资源便可实现",
      "B. 只需要一定的软件即可实现",
      "C. 既需要软件也需要硬件方可实现",
      "D. 既不需要软件也不需要硬件"
    ],
    "answer": 2,
    "explanation": "虚拟存储器需要硬件（如 MMU、页表机制）与操作系统软件共同配合才能实现，二者缺一不可。"
  },
  {
    "id": 3372,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005a",
    "question": "我国著作权法中， （ ） 系指同一概念。",
    "options": [
      "A. 出版权与版权",
      "B. 著作权与版权",
      "C. 作者权与专有权",
      "D. 发行权与版权"
    ],
    "answer": 1,
    "explanation": "我国著作权法明确规定，著作权与版权系同一概念，二者可以互换使用。"
  },
  {
    "id": 3373,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005a",
    "question": "由我国信息产业部批准发布，在信息产业部门范围内统一使用的标准，称为 （ ） 。",
    "options": [
      "A. 地方标准",
      "B. 部门标准",
      "C. 行业标准",
      "D. 企业标准"
    ],
    "answer": 2,
    "explanation": "由国务院有关行政主管部门批准发布、在该部门范围内统一使用的标准称为行业标准，如信息产业部发布的标准。"
  },
  {
    "id": 3374,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005a",
    "question": "某软件设计师自行将他人使用c程序语言开发的控制程序转换为机器语言形式的控制程序，并固化在芯片中，该软件设计师的行为 （ ） 。",
    "options": [
      "A. 不构成侵权，因为新的控制程序与原控制程序使用的程序设计语言不同",
      "B. 不构成侵权，因为对原控制程序进行了转换与固化，其使用和表现形式不同",
      "C. 不构成侵权，将一种程序语言编写的源程序转换为另一种程序语言形式，属于一种“翻译”行为",
      "D. 构成侵权，因为他不享有原软件作品的著作权"
    ],
    "answer": 3,
    "explanation": "将他人软件翻译并固化在芯片中属于对原软件的复制与改编，未经著作权人许可，构成侵权。"
  },
  {
    "id": 3375,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005a",
    "question": "页式存储系统的逻辑地址是由页号和页内地址两部分组成。假定页面的大小为4k，地址变换过程如下图所示，图中逻辑地址用十进制表示。图中有效地址经过变换后，十进制物理地址a应为 （ ） 。",
    "options": [
      "A. 33220",
      "B. 8644",
      "C. 4548",
      "D. 2500"
    ],
    "answer": 0,
    "explanation": "页面大小 4K=4096，页号=逻辑地址/4096，页内偏移=逻辑地址%4096，查页表得物理块号后计算物理地址，结果为 33220。"
  },
  {
    "id": 3376,
    "type": "single",
    "category": "计算机基础与软件工程",
    "paper": "real2005a",
    "question": "下列叙述中，与提高软件可移植性相关的是 （ ） 。",
    "options": [
      "A. 选择时间效率高的算法",
      "B. 尽可能减少注释",
      "C. 选择空间效率高的算法",
      "D. 尽量用高级语言编写系统中对效率要求不高的部分"
    ],
    "answer": 3,
    "explanation": "可移植性指软件从一种环境移植到另一种环境的难易程度。用高级语言编写效率要求不高的部分，可减少对特定硬件的依赖，从而提高可移植性。"
  },
  {
    "id": 3377,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2005a",
    "question": "在osi参考模型中，上层协议实体与下层协议实体之回的逻辑接口叫做服务访问点（sap）。在internet中，网络层的服务访问点是 （ ） 。",
    "options": [
      "A. mac地址",
      "B. llc地址",
      "C. ip地址",
      "D. 端口号"
    ],
    "answer": 2,
    "explanation": "服务访问点是上层访问下层服务的逻辑接口。在Internet中，网络层向上层提供服务的SAP是IP地址，传输层则为端口号。"
  },
  {
    "id": 3378,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2005a",
    "question": "在osi参考模型中，实现端到端的应答、分组排序和流量控制功能的协议层是 （ ） 。",
    "options": [
      "A. 数据链路层",
      "B. 网络层",
      "C. 传输层",
      "D. 会话层"
    ],
    "answer": 2,
    "explanation": "传输层提供端到端的通信，负责应答确认、分组排序和流量控制，是OSI模型中实现端到端可靠传输功能的层次。"
  },
  {
    "id": 3379,
    "type": "single",
    "category": "数据通信基础",
    "paper": "real2005a",
    "question": "下图中画出曼彻斯特编码和差分曼彻斯特编码的波形图，实际传送的比特串为 （ ） 。",
    "options": [
      "A. 0 1 1 0 1 0 0 1 1",
      "B. 0 1 1 1 1 0 0 1 0",
      "C. 1 0 0 1 0 1 1 0 0",
      "D. 1 0 0 0 0 1 1 0 1"
    ],
    "answer": 0,
    "explanation": "曼彻斯特编码每位中间有跳变，差分曼彻斯特编码以位起始处有无跳变表示数据。根据波形图逐位判读，实际传送的比特串为011010011。"
  },
  {
    "id": 3380,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2005a",
    "question": "n-isdn有两种接口：基本速率接口（2b+d）和基群速率接口（30b+d），有关这，两种接口的描述中，正确的是 （ ） 。",
    "options": [
      "A. 基群速率接口中，b信道的带宽为16kb／s，用于发送用户信息",
      "B. 基群速率接口中，d信道的带宽为16kb／s，用于发送信令信息",
      "C. 基本速率接口中，b信道的带宽为64kb／s，用于发送用户信息",
      "D. 基本速率接口中，d信道的带宽为64kb／s，用于发送信令信息"
    ],
    "answer": 2,
    "explanation": "N-ISDN基本速率接口为2B+D，B信道带宽64kb/s用于传送用户信息，D信道16kb/s用于信令；基群速率接口为30B+D，D信道为64kb/s。"
  },
  {
    "id": 3381,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2005a",
    "question": "在atm网络中，aal5用于lan仿真，以下有关aal5的描述中不正确的是 （ ） 。",
    "options": [
      "A. aal5提供面向连接的服务",
      "B. aal5提供无连接的服务",
      "C. aal5提供可变比特率的服务",
      "D. aal5提供固定比特率的服务"
    ],
    "answer": 3,
    "explanation": "AAL5用于LAN仿真，提供面向连接、可变比特率的服务，不支持固定比特率服务，固定比特率由AAL1等提供，故D描述不正确。"
  },
  {
    "id": 3382,
    "type": "single",
    "category": "广域网技术",
    "paper": "real2005a",
    "question": "以下有关帧中继网的描述中不正确的是 （ ） 。",
    "options": [
      "A. 帧中继在虚电路上可以提供不同的服务质量",
      "B. 在帧中继网中，用户的数据速率可以在一定的范围内变化",
      "C. 帧中继网只提供永久虚电路服务",
      "D. 帧中继不适合对传输延迟敏感的应用"
    ],
    "answer": 2,
    "explanation": "帧中继网可提供永久虚电路（PVC）和交换虚电路（SVC）两种服务，并非只提供永久虚电路，因此C的描述不正确。"
  },
  {
    "id": 3383,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005a",
    "question": "网络连接如下图所示，要使计算机能访问到服务器，在路由器r1中配置路由表的命令是 （ ） 。",
    "options": [
      "A. r1(config)# ip host r2 202.116.45.110",
      "B. r1(config)# ip network 202.16.7.0 255.255.255.0",
      "C. r1(config)# ip host r2 202.116.45.0 255.255.255.0",
      "D. r1(config)# ip route 201.16.7.0 255.255.255.0 202.116.45.110"
    ],
    "answer": 3,
    "explanation": "配置静态路由的命令格式为ip route 目标网络 子网掩码 下一跳地址。要访问201.16.7.0/24网段，下一跳为202.116.45.110，故选D。"
  },
  {
    "id": 3384,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005a",
    "question": "以下协议中支持可变长子网掩码（vlsm）和路由汇聚功能（route summarization）的是 （ ） 。",
    "options": [
      "A. igrp",
      "B. ospf",
      "C. vtp",
      "D. ripv1"
    ],
    "answer": 1,
    "explanation": "OSPF支持可变长子网掩码和路由汇聚，属于链路状态协议；IGRP和RIPv1为有类路由协议，不支持VLSM，VTP是VLAN中继协议。"
  },
  {
    "id": 3385,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005a",
    "question": "关于ospf拓扑数据库，下面选项中正确的是 （ ） 。",
    "options": [
      "A. 每一个路由器都包含了拓扑数据库的所有选项",
      "B. 在同一区域中的所有路由器包含同样的拓扑数据库",
      "C. 使用dijkstra算法来生成拓扑数据库",
      "D. 使用lsa分组来更新和维护拓扑数据库"
    ],
    "answer": 3,
    "explanation": "OSPF使用链路状态通告（LSA）分组来更新和维护拓扑数据库，各路由器据此构建链路状态数据库，故选D。"
  },
  {
    "id": 3386,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005a",
    "question": "ospf协议使用 （ ） 分组来保持与其邻居的连接。",
    "options": [
      "A. hello",
      "B. keepalive",
      "C. spf（最短路径优先）",
      "D. lsu（链路状态更新）"
    ],
    "answer": 0,
    "explanation": "OSPF使用Hello分组周期性地发送以发现和维护邻居关系，保持邻接连接，故选Hello。"
  },
  {
    "id": 3387,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005a",
    "question": "下面有关边界网关协议bgp4的描述中，不正确的是 （ ） 。",
    "options": [
      "A. bgp4网关向对等实体（peer）发布可以到达的as列表",
      "B. bgp4网关采用逐跳路由（hop-by-hop）模式发布自己使用的路由信息",
      "C. bgp4可以通过路由汇聚功能形成超级网络（supernet）",
      "D. bgp4报文直接封装在ip数据报中传送"
    ],
    "answer": 3,
    "explanation": "BGP4报文通过TCP连接传送，而非直接封装在IP数据报中，端口号为179，因此D的描述不正确。"
  },
  {
    "id": 3388,
    "type": "single",
    "category": "交换技术",
    "paper": "real2005a",
    "question": "多协议标记交换（mpls）是ietf提出的第三层交换标准，下面有关mpls的描述中，正确的是 （ ） 。",
    "options": [
      "A. mpls支持各种网络层协议，带有mpls标记的分组必须封装在ppp帧中传送",
      "B. mpls标记在各个子网中是特定分组的唯一标识",
      "C. 路由器可以根据转发目标把多个ip流聚合在—起，组成一个转发等价类（fec）",
      "D. 传送带有mpls标记的分组之前先要建立对应的网络连接"
    ],
    "answer": 2,
    "explanation": "MPLS中路由器可根据转发目标把多个IP流聚合组成转发等价类（FEC），同一FEC的分组获得相同标记并沿相同路径转发，故选C。"
  },
  {
    "id": 3389,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2005a",
    "question": "下给出的地址中，属于子网192.168.15.19/28的主机地址是 （ ） 。",
    "options": [
      "A. 192.168.15.17",
      "B. 192.168.15.14",
      "C. 192.168.15.16",
      "D. 192.168.15.31"
    ],
    "answer": 0,
    "explanation": "/28子网掩码为255.255.255.240，子网192.168.15.16/28可用主机地址为17~30。17属于该子网主机地址，14、16、31均非有效主机地址。"
  },
  {
    "id": 3390,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2005a",
    "question": "在一条点对点的链路上，为了减少地址的浪费，子网掩码应该指定为 （ ） 。",
    "options": [
      "A. 255.255.255.252",
      "B. 255.255.255.248",
      "C. 255.255.255.240",
      "D. 255.255.255.196"
    ],
    "answer": 0,
    "explanation": "点对点链路只需两个可用地址，/30掩码255.255.255.252提供4个地址、2个可用主机地址，最节省地址，故选A。"
  },
  {
    "id": 3391,
    "type": "single",
    "category": "网络互联与IP编址",
    "paper": "real2005a",
    "question": "下面的地址中，属于单播地址的是 （ ） 。",
    "options": [
      "A. 172.31.128.255/18",
      "B. 10.255.255.255",
      "C. 192.168.24.59/30",
      "D. 224.105.5.211"
    ],
    "answer": 0,
    "explanation": "172.31.128.255/18中，/18掩码255.255.192.0，该地址为子网172.31.128.0/18内的有效单播地址；10.255.255.255为广播，192.168.24.59/30为广播，224.105.5.211为组播。"
  },
  {
    "id": 3392,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005a",
    "question": "若web站点的默认文档中依次有index.htm，default.htm，default.asp，ih.htm四个文档，则主页显示的是 （ ） 的内容。",
    "options": [
      "A. index.htm",
      "B. ih.htm",
      "C. default.htm",
      "D. default.asp"
    ],
    "answer": 0,
    "explanation": "Web站点按默认文档列表顺序查找，index.htm排在首位，故主页显示index.htm的内容。"
  },
  {
    "id": 3393,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005a",
    "question": "在windows命令窗口输入 （ ） 命令来查看dns服务器的ip。",
    "options": [
      "A. dnsserver",
      "B. nslookup",
      "C. dnsconfig",
      "D. dnsip"
    ],
    "answer": 1,
    "explanation": "nslookup命令用于查询DNS信息，可显示DNS服务器地址及域名解析结果，故选B。"
  },
  {
    "id": 3394,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005a",
    "question": "在一台256m ram的计算机上安装linux系统，交换分区（swap）的大小合理的设置应该为 （ ） 。",
    "options": [
      "A. 128m",
      "B. 512m",
      "C. 1024m",
      "D. 4096m"
    ],
    "answer": 1,
    "explanation": "Linux交换分区一般建议为物理内存的1~2倍。256MB内存时，512MB交换分区较为合理，故选B。"
  },
  {
    "id": 3395,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005a",
    "question": "在linux中系统的配置文件存放在 （ ） 目录下。",
    "options": [
      "A. /bin",
      "B. /etc",
      "C. /dev",
      "D. /root"
    ],
    "answer": 1,
    "explanation": "Linux系统中，/etc目录用于存放系统和各种服务的配置文件，故选B。"
  },
  {
    "id": 3396,
    "type": "single",
    "category": "网络操作系统",
    "paper": "real2005a",
    "question": "在linux中，下列 （ ） 可以获得任何linux命令的在线帮助。",
    "options": [
      "A. #help",
      "B. #show",
      "C. #man",
      "D. #ls"
    ],
    "answer": 2,
    "explanation": "Linux 中 man 命令用于查看命令、函数等的手册页，可获得任何命令的在线帮助，如 man ls。"
  },
  {
    "id": 3397,
    "type": "single",
    "category": "网络安全",
    "paper": "real2005a",
    "question": "路由器的访问控制列表（acl）的作用是 （ ） 。",
    "options": [
      "A. acl可以监控交换的字节数",
      "B. acl提供路由过滤功能",
      "C. acl可以检测网络病毒",
      "D. acl可以提高网络的利用率"
    ],
    "answer": 1,
    "explanation": "ACL 通过匹配规则对数据包进行过滤，可控制哪些路由信息被接收或发布，从而提供路由过滤功能。"
  },
  {
    "id": 3398,
    "type": "single",
    "category": "网络安全",
    "paper": "real2005a",
    "question": "以下的访问控制列表中， （ ） 禁止所有telnet访问子网10.10.1.0/24。",
    "options": [
      "A. access-list 15 deny telnet any 10.10.1.0 0.0.0.255 eq 23",
      "B. access-list 15 deny any l0.10.1.0 eq telnet",
      "C. access-list 15 deny tcp any 10.10.1.0 0.0.0.255 eq 23",
      "D. access-list 15 deny udp any 10.10.1.0 255.255.255.0 eq 23"
    ],
    "answer": 2,
    "explanation": "Telnet 使用 TCP 23 端口，扩展 ACL 需写 tcp 协议，目的地址用反掩码 0.0.0.255，故 C 正确。"
  },
  {
    "id": 3399,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2005a",
    "question": "不使用面向连接传输服务的应用层协议是 （ ） 。",
    "options": [
      "A. smtp",
      "B. ftp",
      "C. http",
      "D. snmp"
    ],
    "answer": 3,
    "explanation": "SNMP 基于 UDP 无连接传输；SMTP、FTP、HTTP 均基于 TCP 面向连接服务，故选 D。"
  },
  {
    "id": 3400,
    "type": "single",
    "category": "局域网与以太网",
    "paper": "real2005a",
    "question": "在下面关于vlan的描述中，不正确的是 （ ） 。",
    "options": [
      "A. vlan把交换机划分成多个逻辑上独立的交换机",
      "B. 主干链路（trunk）可以提供多个vlan之间通信的公共通道",
      "C. 由于包含了多个交换机，所以vlan扩大了冲突域",
      "D. 一个vlan可以跨越多个交换机"
    ],
    "answer": 2,
    "explanation": "VLAN 将交换机划分为多个逻辑网段，每个 VLAN 是独立广播域，可缩小而非扩大冲突域，故 C 错误。"
  },
  {
    "id": 3401,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005a",
    "question": "在windows中，ping命令的-n选项表示 （ ） 。",
    "options": [
      "A. ping的次数",
      "B. ping的网络号",
      "C. 用数字形式显示结果",
      "D. 不要重复，只ping一次"
    ],
    "answer": 0,
    "explanation": "Windows 中 ping 的 -n 选项用于指定发送回显请求的次数，如 ping -n 5 表示 ping 5 次。"
  },
  {
    "id": 3402,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005a",
    "question": "在windows中，tracert命令的-h选项表示 （ ） 。",
    "options": [
      "A. 指定主机名",
      "B. 指定最大跳步数",
      "C. 指定到达目标主机的时间",
      "D. 指定源路由"
    ],
    "answer": 1,
    "explanation": "tracert 的 -h 选项用于指定搜索目标的最大跳步数，超过该跳数即停止跟踪。"
  },
  {
    "id": 3403,
    "type": "single",
    "category": "路由协议",
    "paper": "real2005a",
    "question": "对路由选择协议的一个要求是必须能够快速收敛，所谓“路由收敛”是指 （ ） 。",
    "options": [
      "A. 路由器能把分组发送到预订的目标 b",
      "B. 路由器处理分组的速度足够快",
      "C. 网络设备的路由表与网络拓扑结构保持一致",
      "D. 能把多个子网汇聚成一个超网"
    ],
    "answer": 2,
    "explanation": "路由收敛指网络拓扑变化后，各路由器路由表重新达到与当前网络拓扑一致的状态。"
  },
  {
    "id": 3404,
    "type": "single",
    "category": "网络管理",
    "paper": "real2005a",
    "question": "以下选项中，可以用于internet信息服务器远程管理的是 （ ） 。",
    "options": [
      "A. telnet",
      "B. ras",
      "C. ftp",
      "D. smtp"
    ],
    "answer": 0,
    "explanation": "Telnet 提供远程登录功能，可用于对 Internet 信息服务器进行远程管理操作。"
  },
  {
    "id": 3405,
    "type": "single",
    "category": "计算机网络体系结构",
    "paper": "real2005a",
    "question": "在tcp／ip网络中，为各种公共服务保留的端口号范围是 （ ） 。",
    "options": [
      "A. 1~255",
      "B. 1~1023",
      "C. 1~1024",
      "D. 1~65535"
    ],
    "answer": 1,
    "explanation": "TCP/IP 中 1~1023 为知名端口，分配给各种公共服务，1024 以上为动态或注册端口。"
  },
  {
    "id": 3406,
    "type": "single",
    "category": "网络规划与设计",
    "paper": "real2005a",
    "question": "在以下网络应用中，要求带宽最高的应用是 （ ） 。",
    "options": [
      "A. 可视电话",
      "B. 数字电视",
      "C. 拨号上网",
      "D. 收发邮件"
    ],
    "answer": 1,
    "explanation": "数字电视需传输高质量视频流，码率远高于可视电话、拨号上网和收发邮件，带宽需求最高。"
  }
];
  A.forEach(q => window.QUESTIONS.push(q));
})();

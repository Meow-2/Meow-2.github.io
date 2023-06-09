import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-bf8ee3fd.js";import{_ as C,p as y,c as d,w as e,o as D,a as l,d as s,b as o,e as A,r as t,f as h}from"./app-4433fae6.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-80290804.js";import"./YunCard.vue_vue_type_style_index_0_lang-e4df850e.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-80be03ea.js";const dl=JSON.parse('{"title":"使用 tlp 来为 linux 省电","description":"","frontmatter":{"title":"使用 tlp 来为 linux 省电","toc":true,"date":"2022-02-19T16:19:45.000Z","tags":["Linux"],"categories":["Linux"],"cover":null},"headers":[{"level":2,"title":"TLP 及其他省电工具的安装","slug":"tlp-及其他省电工具的安装","link":"#tlp-及其他省电工具的安装","children":[]},{"level":2,"title":"TLP 开机启动","slug":"tlp-开机启动","link":"#tlp-开机启动","children":[]},{"level":2,"title":"TLP 及其他配置","slug":"tlp-及其他配置","link":"#tlp-及其他配置","children":[{"level":3,"title":"禁用网络唤醒功能","slug":"禁用网络唤醒功能","link":"#禁用网络唤醒功能","children":[]},{"level":3,"title":"修改/etc/tlp.conf","slug":"修改-etc-tlp-conf","link":"#修改-etc-tlp-conf","children":[]}]},{"level":2,"title":"TLP 常用命令","slug":"tlp-常用命令","link":"#tlp-常用命令","children":[]}],"relativePath":"pages/posts/linux/tlp-for-power-saving.md","path":"/home/runner/work/YlYZ/YlYZ/pages/posts/linux/tlp-for-power-saving.md","lastUpdated":1686297441000}'),c=JSON.parse('{"title":"使用 tlp 来为 linux 省电","description":"","frontmatter":{"title":"使用 tlp 来为 linux 省电","toc":true,"date":"2022-02-19T16:19:45.000Z","tags":["Linux"],"categories":["Linux"],"cover":null},"headers":[{"level":2,"title":"TLP 及其他省电工具的安装","slug":"tlp-及其他省电工具的安装","link":"#tlp-及其他省电工具的安装","children":[]},{"level":2,"title":"TLP 开机启动","slug":"tlp-开机启动","link":"#tlp-开机启动","children":[]},{"level":2,"title":"TLP 及其他配置","slug":"tlp-及其他配置","link":"#tlp-及其他配置","children":[{"level":3,"title":"禁用网络唤醒功能","slug":"禁用网络唤醒功能","link":"#禁用网络唤醒功能","children":[]},{"level":3,"title":"修改/etc/tlp.conf","slug":"修改-etc-tlp-conf","link":"#修改-etc-tlp-conf","children":[]}]},{"level":2,"title":"TLP 常用命令","slug":"tlp-常用命令","link":"#tlp-常用命令","children":[]}],"relativePath":"pages/posts/linux/tlp-for-power-saving.md","path":"/home/runner/work/YlYZ/YlYZ/pages/posts/linux/tlp-for-power-saving.md","lastUpdated":1686297441000}'),u={name:"pages/posts/linux/tlp-for-power-saving.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){y("pageData",c)}},_=l("p",null,"尽管 Linux 的高自定义度非常对我胃口，但对于我这种较新的机器（Lenovo Legion R9000P）来说，硬件驱动始终是个硬伤，就比如最近在 Linux-lts、nvidia-lts 更新到 5.15.24 之后，我的电脑才能正常地调节亮度，此前我一直用的是自己写的蹩脚 xrandr 脚本，依靠改变 Color Channel 来对亮度进行伪调节。",-1),m=l("p",null,"大概也是因为驱动的问题，在我的机器上，Linux 的耗电速度比 windows 要快，还好有 tlp 能救一把，配合 kde plasma 自带的电源管理，我现在 Linux 的耗电速度已经基本和 windows 持平了，这里就记录一下我的 tlp 做了哪些配置。",-1),g={id:"tlp-及其他省电工具的安装",tabindex:"-1"},E=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pacman"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-S"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pacman"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-S"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp-rdw"),l("span",{style:{color:"#A6ACCD"}}," 			"),l("span",{style:{color:"#C3E88D"}},"//"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"无线设备省电")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pacman"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-S"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"x86_energy_perf_policy"),l("span",{style:{color:"#A6ACCD"}},"   "),l("span",{style:{color:"#C3E88D"}},"//CPU性能与节能策略")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pacman"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-S"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"ethtool"),l("span",{style:{color:"#A6ACCD"}}," 			"),l("span",{style:{color:"#C3E88D"}},"//可用于禁用"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"Linux"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"的网络唤醒")]),s(`
`),l("span",{class:"line"})])])],-1),F=l("p",null,"此处夸一夸 Arch 系的包管理，确实非常香，安装各种东西都非常方便",-1),f=l("p",null,"如果你想要 tlp-rdw 正常工作的话，还需要安装 NetworkManager，一般来说都是安装过的，很多桌面环境都是用 NetworkManager 做为默认的网络管理，即使是只用命令行的猛男，在安装 Arch Linux 时，也一般会用它来连接网络，如果你不用 NetworkManager，需要自行编辑 tlp.service，注释掉里面的 NetworkManager.service",-1),k=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pacman"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-S"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"networkmanager")]),s(`
`),l("span",{class:"line"})])])],-1),v={id:"tlp-开机启动",tabindex:"-1"},b=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"systemctl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"enable"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp")]),s(`
`),l("span",{class:"line"})])])],-1),B=l("p",null,"如果安装了 tlp-rdw 无线设备管理的话还需要（确保安装了 networkmanager）：",-1),L=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"systemctl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"enable"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"NetworkManager-dispatcher")]),s(`
`),l("span",{class:"line"})])])],-1),P=l("p",null,[s("同时屏蔽 systemd 服务 "),l("code",null,"systemd-rfkill.service"),s(" 以及 套接字 "),l("code",null,"systemd-rfkill.socket"),s(" 来防止冲突：")],-1),w=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"systemctl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mask"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"systemd-rfkill.service")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"systemctl"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mask"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"systemd-rfkill.socket")]),s(`
`),l("span",{class:"line"})])])],-1),x=l("p",null,"reboot 之后，tlp 就启动了",-1),T={id:"tlp-及其他配置",tabindex:"-1"},N={id:"禁用网络唤醒功能",tabindex:"-1"},S=l("p",null,"后来才发现原来 tlp 默认就帮你把网络唤醒给关了= =",-1),O=l("p",null,[s("可以在 "),l("code",null,"WOL_DISABLE=Y"),s("那里直接设置，就不需要后面的那些步骤了")],-1),U=l("hr",null,null,-1),$=l("p",null,"禁用网络唤醒功能后，就无法通过网络远程开机，个人电脑用不到，所以我这里就直接关掉了",-1),I=l("p",null,"使用 networkmanager 查看本地网络设备：",-1),Y=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"nmcli"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"device")]),s(`
`),l("span",{class:"line"})])])],-1),M=l("p",null,"我这里的输出：",-1),V=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"DEVICE"),l("span",{style:{color:"#A6ACCD"}},"          "),l("span",{style:{color:"#C3E88D"}},"TYPE"),l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#C3E88D"}},"STATE"),l("span",{style:{color:"#A6ACCD"}},"   "),l("span",{style:{color:"#C3E88D"}},"CONNECTION")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"wlp4s0"),l("span",{style:{color:"#A6ACCD"}},"          "),l("span",{style:{color:"#C3E88D"}},"wifi"),l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#C3E88D"}},"已连接"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#A6ACCD"}},"*****")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"p2p-dev-wlp4s0"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"wifi-p2p"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"已断开"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"--")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"eno1"),l("span",{style:{color:"#A6ACCD"}},"            "),l("span",{style:{color:"#C3E88D"}},"ethernet"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"不可用"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"--")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"lo"),l("span",{style:{color:"#A6ACCD"}},"              "),l("span",{style:{color:"#C3E88D"}},"loopback"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"未托管"),l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#C3E88D"}},"--")]),s(`
`),l("span",{class:"line"})])])],-1),R=l("p",null,"可以看到我的物理网卡名字叫 eno1，别的机器可能是 eth0 啥的，使用 ethtool 查看网络唤醒功能的状态",-1),G=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"ethtool"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"eno1"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"|"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"grep"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-i"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"wake"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"})])])],-1),Z=l("p",null,"输出如下：",-1),W=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"Supports"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"Wake-on:"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"pumbg")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"Wake-on:"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"d")]),s(`
`),l("span",{class:"line"})])])],-1),K=l("p",null,"上面一行显示了网卡支持的唤醒模式，下一行则显示了当前网卡的唤醒模式，含义如下：",-1),j=l("ul",null,[l("li",null,"d -- 禁用"),l("li",null,"p -- 物理活动唤醒"),l("li",null,"u -- 单播消息唤醒"),l("li",null,"m -- 多播（组播）消息唤醒"),l("li",null,"b -- 广播消息唤醒"),l("li",null,"a -- ARP 唤醒"),l("li",null,"g -- 特定数据包 magic packet 唤醒"),l("li",null,"s -- 设有密码的特定数据包 magic packet 唤醒")],-1),J=l("p",null,"要禁用网络唤醒，将网卡模式改为 d 即可：",-1),z=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"ethtool"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-s"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"eno1"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"wol"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"d")]),s(`
`),l("span",{class:"line"})])])],-1),H={id:"修改-etc-tlp-conf",tabindex:"-1"},q=l("ol",null,[l("li",null,[l("p",null,"默认电源模式设为 BAT，没有接通电源时采用 BAT 电源模式"),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"TLP_DEFAULT_MODE"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#C3E88D"}},"BAT")]),s(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,"默认持续模式设为 0，根据是否接通电源来决定电源模式，若设为 1 则总是使用 TLP_DEFAULT_MODE"),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"TLP_PERSISTENT_DEFAULT"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F78C6C"}},"0")]),s(`
`),l("span",{class:"line"})])])])]),l("li",null,[l("p",null,"CPU 性能模式设置"),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"CPU_SCALING_GOVERNOR_ON_AC"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#C3E88D"}},"performance")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"CPU_SCALING_GOVERNOR_ON_BAT"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#C3E88D"}},"schedutil")]),s(`
`),l("span",{class:"line"})])])]),l("p",null,"接通电源时，性能优先，无电源时使用 schedutil 模式 (似乎是近几年出的省电又顺畅的调度模式，推荐)，另外也有 ondemand(按需，推荐)，powersave(节能)，conservative(保守供电) 可选")]),l("li",null,[l("p",null,"CPU 相对节能模式"),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"CPU_ENERGY_PERF_POLICY_ON_AC"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#C3E88D"}},"performance")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"CPU_ENERGY_PERF_POLICY_ON_BAT"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#C3E88D"}},"power")]),s(`
`),l("span",{class:"line"})])])]),l("p",null,"接通电源时使用性能模式，否则省电模式，另外也有 balance_performance 和 balance_power 可选")]),l("li",null,[l("p",null,"硬盘设置"),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"DISK_DEVICES"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"nvme0n1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"})])])]),l("p",null,[s("使用 "),l("code",null,"sudo fdisk -l"),s('查看你的硬盘名称，向我只有一块 NVMe 的固态硬盘就只需要写一个"nvme0n1"，如果你还有一块 SATA 固态，那么就应该写 "nvme0n1 sda"，以 fdisk 指令的结果为准')])]),l("li",null,[l("p",null,"硬盘空闲速度设置"),l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"DISK_APM_LEVEL_ON_AC"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"254"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"DISK_APM_LEVEL_ON_BAT"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"128"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"})])])]),l("p",null,'设置范围是[1,255]，[1,127]会使硬盘降速，所以电源模式设置为 128 就好，注意如果你有两块硬盘，就要分别对每块硬盘设置，比如写成"254 254"和"254 128"')]),l("li",null,[l("p",null,"(*) 根据不同的硬件型号，有不同的可选项可设置"),l("p",null,"比如 Intel CPU() 就可以设置 CPU_HWP_ON_AC/BAT，SATA 模式的硬盘就可以设置 SATA_LINKPWR_AC/BAT，具体如何设置 /etc/tlp.conf 的备注部分都有写，因为我是锐龙 CPU，硬盘也不支持 SATA 模式，所以就不启用这些设置了")])],-1),Q={id:"tlp-常用命令",tabindex:"-1"},X=l("p",null,"最后再列举几个 TLP 常用的命令",-1),ll=l("div",{class:"language-bash"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"start"),l("span",{style:{color:"#A6ACCD"}},"          "),l("span",{style:{color:"#C3E88D"}},"//启动"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"服务")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp-stat"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-s"),l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C3E88D"}},"//查看"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"运行状态")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp-stat"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-c"),l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#C3E88D"}},"//查看"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"设置")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp-stat"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-b"),l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C3E88D"}},"//查看电池状态")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"sudo"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"tlp-stat"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-t"),l("span",{style:{color:"#A6ACCD"}},"	"),l("span",{style:{color:"#C3E88D"}},"//查看风扇转速，CPU温度")]),s(`
`),l("span",{class:"line"})])])],-1),sl=l("p",null,"最后附上一张 TLP 效果图",-1),el=l("img",{src:"https://s2.loli.net/2022/02/19/e1ybwvnz2MtIpgk.png",alt:""},null,-1);function nl(a,ol,al,tl,p,cl){const n=h,r=i;return D(),d(r,{frontmatter:p.frontmatter,data:p.data},{"main-content-md":e(()=>[l("p",null,[s("Linux 作为我的主力机已经有快半年时间了，从 "),o(n,{href:"https://manjaro.org/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("Manjaro")]),_:1}),s(" 到 "),o(n,{href:"https://archlinux.org/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("Archlinux")]),_:1}),s(" ，从 "),o(n,{href:"https://dwm.suckless.org/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("dwm")]),_:1}),s(" 到 "),o(n,{href:"https://github.com/kwin-scripts/kwin-tiling",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("kde-kwin-tiling")]),_:1}),s("，从 "),o(n,{href:"https://github.com/neovim/neovim",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("Neovim")]),_:1}),s(" + "),o(n,{href:"https://github.com/neoclide/coc.nvim",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("CoC")]),_:1}),s(" 到 "),o(n,{href:"https://github.com/vscode-neovim/vscode-neovim",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("VSCode-Neovim")]),_:1}),s(" 插件，充分说明了什么叫生命不息，折腾不止，渐渐地我已经完全适应了 Linux 下的生活，也构建起来一套自己的工作流，除了玩游戏，很少再打开磁盘上的 window。")]),_,m,A(" more "),l("h2",g,[s("TLP 及其他省电工具的安装 "),o(n,{class:"header-anchor",href:"#tlp-及其他省电工具的安装","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),E,F,f,k,l("h2",v,[s("TLP 开机启动 "),o(n,{class:"header-anchor",href:"#tlp-开机启动","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),b,B,L,P,w,x,l("h2",T,[s("TLP 及其他配置 "),o(n,{class:"header-anchor",href:"#tlp-及其他配置","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),l("h3",N,[s("禁用网络唤醒功能 "),o(n,{class:"header-anchor",href:"#禁用网络唤醒功能","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),S,O,U,$,I,Y,M,V,R,G,Z,W,K,j,J,z,l("h3",H,[s("修改/etc/tlp.conf "),o(n,{class:"header-anchor",href:"#修改-etc-tlp-conf","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),q,l("h2",Q,[s("TLP 常用命令 "),o(n,{class:"header-anchor",href:"#tlp-常用命令","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),X,ll,sl,el]),"main-header":e(()=>[t(a.$slots,"main-header")]),"main-header-after":e(()=>[t(a.$slots,"main-header-after")]),"main-nav":e(()=>[t(a.$slots,"main-nav")]),"main-content":e(()=>[t(a.$slots,"main-content")]),"main-content-after":e(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[t(a.$slots,"main-nav-after")]),comment:e(()=>[t(a.$slots,"comment")]),footer:e(()=>[t(a.$slots,"footer")]),aside:e(()=>[t(a.$slots,"aside")]),"aside-custom":e(()=>[t(a.$slots,"aside-custom")]),default:e(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const Dl=C(u,[["render",nl]]);export{dl as __pageData,Dl as default};

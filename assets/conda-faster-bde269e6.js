import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-bf8ee3fd.js";import{_ as y,p as D,c as d,w as o,o as F,a as s,d as l,b as e,e as C,r as t,f as A}from"./app-4433fae6.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-80290804.js";import"./YunCard.vue_vue_type_style_index_0_lang-e4df850e.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-80be03ea.js";const J=JSON.parse('{"title":"Conda init 设置拖慢 shell 启动速度的解决方法","description":"","frontmatter":{"title":"Conda init 设置拖慢 shell 启动速度的解决方法","toc":true,"date":"2022-02-18T21:51:01.000Z","tags":["Linux","zsh"],"categories":["踩坑记录"],"cover":null,"thumbnail":null},"headers":[],"relativePath":"pages/posts/records/conda-faster.md","path":"/home/runner/work/YlYZ/YlYZ/pages/posts/records/conda-faster.md","lastUpdated":1686297441000}'),c=JSON.parse('{"title":"Conda init 设置拖慢 shell 启动速度的解决方法","description":"","frontmatter":{"title":"Conda init 设置拖慢 shell 启动速度的解决方法","toc":true,"date":"2022-02-18T21:51:01.000Z","tags":["Linux","zsh"],"categories":["踩坑记录"],"cover":null,"thumbnail":null},"headers":[],"relativePath":"pages/posts/records/conda-faster.md","path":"/home/runner/work/YlYZ/YlYZ/pages/posts/records/conda-faster.md","lastUpdated":1686297441000}'),f={name:"pages/posts/records/conda-faster.md",data(){return{data:c,frontmatter:c.frontmatter}},setup(){D("pageData",c)}},h=s("p",null,"而恰巧我的.zshrc 又比较精简，除了一点点必备的插件其他啥也没有，所以很快啊，我的目光聚焦在了 conda init 往我的配置文件里写的那几行上：",-1),m=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# >>> conda initialize >>>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# !! Contents within this block are managed by 'conda init' !!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"__conda_setup"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"$('),s("span",{style:{color:"#FFCB6B"}},"'/opt/miniconda/bin/conda'"),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"shell.zsh"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"hook"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}}," "),s("span",{style:{color:"#89DDFF"}},"2>"),s("span",{style:{color:"#C3E88D"}}," /dev/null"),s("span",{style:{color:"#89DDFF"}},')"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#A6ACCD"}}," $? "),s("span",{style:{color:"#89DDFF"}},"-eq"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#F78C6C"}},"0"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"];"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"then")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#82AAFF"}},"eval"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"$__conda_setup"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"-f"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"/opt/miniconda/etc/profile.d/conda.sh"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"];"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"then")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#82AAFF"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"/opt/miniconda/etc/profile.d/conda.sh"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#C792EA"}},"export"),s("span",{style:{color:"#A6ACCD"}}," PATH"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"/opt/miniconda/bin:"),s("span",{style:{color:"#A6ACCD"}},"$PATH"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"fi")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"fi")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"unset"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C3E88D"}},"__conda_setup")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# <<< conda initialize <<<")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"})])])],-1),u=s("p",null,"果不其然，删掉这几行后，终端启动速度又飞快了起来",-1),_=s("p",null,[l("但是肯定是不能直接删的，不然 conda 指令又没法用了（虽然我基本上就不用 conda），看下这几行的大意，大概就是做了个添加环境变量的事，那么占时间比较多的肯定就是 "),s("code",null,"$('/opt/miniconda/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"),l("这里了，又是执行脚本又是重定向输出的，一看就很花时间，验证一下：")],-1),g=s("img",{src:"https://s2.loli.net/2022/02/18/crVw4HKJabBFfAy.png",alt:""},null,-1),b=s("p",null,"zsh 加载整个.zshrc 只要 0.386s，而单独执行这条命令都要 0.328s，果断注释掉它",-1),E=s("div",{class:"language-bash"},[s("span",{class:"copy"}),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# >>> conda initialize >>>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# !! Contents within this block are managed by 'conda init' !!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},`# __conda_setup="$('/opt/miniconda/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# if [ $? -eq 0 ]; then")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},'#     eval "$__conda_setup"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# else")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"["),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"-f"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"/opt/miniconda/etc/profile.d/conda.sh"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"];"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"then")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#82AAFF"}},"."),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"/opt/miniconda/etc/profile.d/conda.sh"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"else")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#C792EA"}},"export"),s("span",{style:{color:"#A6ACCD"}}," PATH"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"/opt/miniconda/bin:"),s("span",{style:{color:"#A6ACCD"}},"$PATH"),s("span",{style:{color:"#89DDFF"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"fi")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# fi")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# unset __conda_setup")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#676E95","font-style":"italic"}},"# <<< conda initialize <<<")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("img",{src:"https://s2.loli.net/2022/02/18/3O9dsBfwJKD1Hpz.png",alt:""},null,-1),z=s("p",null,"zsh 启动速度又和飞一样了，不用每次等 zsh 启动完再重打命令了，实测 conda 指令也没有受到影响，依然能正常切换环境，在 github 上也找到了一样的方法：",-1),v=s("p",null,"也有为 conda 加载设置别名，用命令来手动加载 conda 的方法：",-1);function k(n,w,P,Y,r,B){const a=A,i=p;return F(),d(i,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":o(()=>[s("p",null,[l("最近发现 zsh 的启动速度变慢了，经常打了几个字母，终端才缓过神来，导致我输入命令被打断，按理说不应该，毕竟我用的 Alaritty + zsh + zshfw 的组合，"),e(a,{href:"https://github.com/alacritty/alacritty",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("Alacritty")]),_:1}),l("使用 GPU 加速渲染，"),e(a,{href:"https://github.com/alacritty/alacritty",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("zimfw")]),_:1}),l("号称第三快的 zsh 配置框架，性能方面肯定是没问题的，那就只能是我.zshrc 的问题了。")]),h,C(" more "),m,u,_,g,b,E,$,z,s("ul",null,[s("li",null,[e(a,{href:"https://github.com/ContinuumIO/anaconda-issues/issues/10173",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("very slow runtimes of terminal caused by Anaconda3 installer")]),_:1})])]),v,s("ul",null,[s("li",null,[e(a,{href:"https://stackoverflow.com/questions/52706888/anaconda-python-causing-slow-terminal-startup-prompt",target:"_blank",rel:"noreferrer"},{default:o(()=>[l("Anaconda Python causing slow terminal startup/prompt")]),_:1})])])]),"main-header":o(()=>[t(n.$slots,"main-header")]),"main-header-after":o(()=>[t(n.$slots,"main-header-after")]),"main-nav":o(()=>[t(n.$slots,"main-nav")]),"main-content":o(()=>[t(n.$slots,"main-content")]),"main-content-after":o(()=>[t(n.$slots,"main-content-after")]),"main-nav-before":o(()=>[t(n.$slots,"main-nav-before")]),"main-nav-after":o(()=>[t(n.$slots,"main-nav-after")]),comment:o(()=>[t(n.$slots,"comment")]),footer:o(()=>[t(n.$slots,"footer")]),aside:o(()=>[t(n.$slots,"aside")]),"aside-custom":o(()=>[t(n.$slots,"aside-custom")]),default:o(()=>[t(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const O=y(f,[["render",k]]);export{J as __pageData,O as default};

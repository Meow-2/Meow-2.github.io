import{h as m,o as a,g as i,a as o,k as w,a0 as $,U as C,q as Y,T as f,a1 as c,j as e,t as s,e as _,d as r,F as T,m as y,a2 as V,r as F,c as L,w as N,b as B}from"./app-4433fae6.js";const U={class:"flex-center"},D=o("span",{"mr-1":""},"由",-1),H=["href","title"],S=["src"],j=o("span",null,"提供 CDN 支持",-1),z=m({__name:"UpYunLogo",setup(d){const n={name:"又拍云",url:"https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral",logo:"/site/upyun.png"};return(u,l)=>(a(),i("div",U,[D,o("a",{"inline-flex":"",href:n.url,target:"_blank",title:n.name},[o("img",{class:"upyun-logo",w:"15",src:n.logo},null,8,S)],8,H),j]))}});const I={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},M={key:0,class:"beian",m:"y-2"},q={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},E={class:"copyright flex justify-center items-center gap-2",p:"1"},A=["href","title"],G={key:1,class:"powered",m:"2"},J=["innerHTML"],K=["href","title"],O=m({__name:"YunFooter",setup(d){const{t:n}=w(),u=$(),l=C(),t=Y(),h=new Date().getFullYear(),k=f(()=>h===t.value.footer.since),x=f(()=>n("footer.powered",[`<a href="${c.repository}" target="_blank" rel="noopener">Valaxy</a> v${c.version}`])),p=f(()=>t.value.footer.icon||{url:c.repository,name:"i-ri-cloud-line",title:c.name});return(b,P)=>{var g,v;return a(),i("footer",I,[(g=e(t).footer.beian)!=null&&g.enable&&e(t).footer.beian.icp?(a(),i("div",M,[o("a",q,s(e(t).footer.beian.icp),1)])):_("v-if",!0),o("div",E,[o("span",null,[r(" © "),k.value?_("v-if",!0):(a(),i(T,{key:0},[r(s(e(t).footer.since)+" - ",1)],64)),r(" "+s(e(h)),1)]),(v=e(t).footer.icon)!=null&&v.enable?(a(),i("a",{key:0,class:y(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:p.value.url,target:"_blank",title:p.value.title},[o("div",{class:y(p.value.name)},null,2)],10,A)):_("v-if",!0),o("span",null,s(e(l).author.name),1)]),e(t).footer.powered?(a(),i("div",G,[o("span",{innerHTML:x.value},null,8,J),r(" | "),o("span",null,[r(s(e(n)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},s(V(e(u).theme)),9,K),r(" v"+s(e(t).pkg.version),1)])])):_("v-if",!0),F(b.$slots,"default")])}}}),R=m({__name:"YunFooter",setup(d){return(n,u)=>{const l=z;return a(),L(O,null,{default:N(()=>[B(l)]),_:1})}}});export{R as _};

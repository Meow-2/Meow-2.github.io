import{h as d,Y as g,k as h,C as f,W as v,a9 as y,aa as C,T as b,G as k,H as x,l as P,o as w,c as B,w as l,b as s,j as t,a as o,t as I,a8 as R,I as T}from"./app-4433fae6.js";import{_ as V}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-80be03ea.js";const Y={text:"center",class:"yun-text-light",p:"2"},A={class:"page-action",text:"center"},D=["title"],E=o("div",{"i-ri-arrow-go-back-line":""},null,-1),G=[E],W=d({__name:"gallery",setup(H){const c=g(),{t:n}=h(),e=f(),r=v(e);y([C({"@type":"CollectionPage"})]);const a=b(()=>e.value.photos||[]),_=k().value.addons["valaxy-addon-lightgallery"]?x(()=>T(()=>import("./YunGallery-f19eed25.js"),["assets/YunGallery-f19eed25.js","assets/app-4433fae6.js","assets/index-a45641e5.css"])):()=>null;return(N,i)=>{const u=V,m=P("router-view"),p=R;return w(),B(p,null,{"main-header":l(()=>[s(u,{title:t(r)||t(n)("title.gallery"),icon:t(e).icon||"i-ri-gallery-line",color:t(e).color},null,8,["title","icon","color"])]),"main-content":l(()=>[o("div",Y,I(t(n)("counter.photos",a.value.length)),1),o("div",A,[o("a",{class:"yun-icon-btn",title:t(n)("accessibility.back"),onClick:i[0]||(i[0]=()=>t(c).back())},G,8,D)]),s(t(_),{photos:a.value},null,8,["photos"]),s(m)]),_:1})}}});export{W as default};

import{r as e,o as t,c as s,a as n,y as r,d as o,b as a,t as c,w as u,F as i,e as l,f as m,g as p,h as d,i as h,j as f,k as v}from"./vendor.af0767d4.js";const g={};let k;g.render=function(n,r){const o=e("router-view");return t(),s(o)};const E={},$=n.create({baseURL:"https://api.github.com",timeout:2e4});$.interceptors.request.use((e=>e),(e=>Promise.reject(e))),$.interceptors.response.use((e=>e),(e=>{if(e.response&&e.response.data){const t=e.response.status,s=e.response.data.message;r.error(`Code: ${t}, Message: ${s}`),console.error("[Axios Error]",e.response)}else r.error(`${e}`);return Promise.reject(e)}));var _=o({setup(){$.get("/users/XPoet").then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}});const b=l("add");_.render=function(n,r,o,l,m,p){const d=e("el-button");return t(),s(i,null,[a("h1",null,c(n.$store.state.count),1),a(d,{onClick:r[1]||(r[1]=e=>n.$store.commit("increment"))},{default:u((()=>[b])),_:1})],64)};var P={setup(){const e=m(0);return{count:e,plus:function(){e.value+=1}}}};const j=l("plus");P.render=function(n,r,o,l,m,p){const d=e("el-buttom");return t(),s(i,null,[a("h1",null,c(l.count),1),a(d,{onClick:l.plus},{default:u((()=>[j])),_:1},8,["onClick"])],64)};const y=[{path:"/",name:"Home",component:_},{path:"/other",name:"Other",component:P},{path:"/other2",name:"Other2",component:()=>function(e,t){if(!t)return e();if(void 0===k){const e=document.createElement("link").relList;k=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in E)return;E[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":k,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./other2.3d563321.js")),["./assets/other2.3d563321.js","./assets/vendor.af0767d4.js"])}],C=p({history:d(),routes:y}),L={count:0};var O=h({state:()=>L,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{double:e=>2*e.count}});const w=f(g);w.use(C),w.use(O),w.use(v),w.mount("#app");

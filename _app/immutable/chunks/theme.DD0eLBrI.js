import{p as r}from"./disclose-version.BYGxVUXP.js";import{p as s,u as i,b as d,c as m}from"./utils.CZu1HtMl.js";import{n as u,a as f,g as c}from"./language.DwAOxtrO.js";import{w as h}from"./index.B3mgNsgT.js";function b(e,t){s(t,!0);let o=r(t,"isMounted",15,!1),n=r(t,"onMountedChange",3,u);i(()=>(d(()=>{o(!0),n()(!0)}),()=>{o(!1),n()(!1)})),m()}const l=()=>{if(typeof window<"u"){const e=c("theme");return e==="dark"||e==="light"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"},p=h(l());let a=null;p.subscribe(e=>{typeof window<"u"&&e!==a&&(f("theme",e,365,"ma.cyou"),document.documentElement.classList.toggle("dark",e==="dark"),a=e)});export{b as M,p as t};

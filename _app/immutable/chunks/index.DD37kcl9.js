import{b as He,p as o,c as F,a as w,f as _e,l as oe,i as K,j as Q,t as ie,k as x,s as Je}from"./disclose-version.CYM3sL8r.js";import{F as Ke,I as Xe,J as Ye,g as we,l as E,i as Ve,f as N,j as he,K as m,v as g,t as Z,L as P,m as $,o as ee,y as Ne,w as We,x as Qe}from"./utils.Dokr0Jt2.js";import{t as Se,o as Ze,b as $e,g as et,m as Pe,e as De,c as Ee,d as G,r as tt,f as je,p as nt,h as Ae,j as ot,k as it,n as ze,q as rt,u as st,v as at,w as lt,x as dt,y as Be,z as Ie,A as ct,C as ut,D as ft,E as gt,i as Ce,a as W,F as qe,G as te,H as ce,J as ne,K as vt,L as mt}from"./language.easLb1wG.js";import{d as Le,w as Fe}from"./index.DId5r52q.js";function pt(t){const e=t.slice();return e.sort(bt),yt(e)}function yt(t){if(t.length<=1)return t.slice();const e=[];for(let a=0;a<t.length;a++){const d=t[a];for(;e.length>=2;){const v=e[e.length-1],n=e[e.length-2];if((v.x-n.x)*(d.y-n.y)>=(v.y-n.y)*(d.x-n.x))e.pop();else break}e.push(d)}e.pop();const r=[];for(let a=t.length-1;a>=0;a--){const d=t[a];for(;r.length>=2;){const v=r[r.length-1],n=r[r.length-2];if((v.x-n.x)*(d.y-n.y)>=(v.y-n.y)*(d.x-n.x))r.pop();else break}r.push(d)}return r.pop(),e.length==1&&r.length==1&&e[0].x==r[0].x&&e[0].y==r[0].y?e:e.concat(r)}function bt(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}function _t(t){const e=t.getBoundingClientRect();return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.right,y:e.bottom},{x:e.left,y:e.bottom}]}function wt(t){const e=t.flatMap(r=>_t(r));return pt(e)}function ht(t,e){let r=!1;for(let a=0,d=e.length-1;a<e.length;d=a++){const v=e[a].x,n=e[a].y,s=e[d].x,y=e[d].y;n>t.y!=y>t.y&&t.x<(s-v)*(t.y-n)/(y-n)+v&&(r=!r)}return r}const Ct={positioning:{placement:"bottom"},arrowSize:8,defaultOpen:!1,closeOnPointerDown:!0,openDelay:1e3,closeDelay:0,forceVisible:!1,portal:void 0,closeOnEscape:!0,disableHoverableContent:!1,group:void 0},{name:ke}=ot("tooltip"),be=new Map,Ot=["trigger","content"];function Tt(t){const e={...Ct,...t},r=Se(Ze(e,"open","ids")),{positioning:a,arrowSize:d,closeOnPointerDown:v,openDelay:n,closeDelay:s,forceVisible:y,portal:b,closeOnEscape:B,disableHoverableContent:V,group:A}=r,M=e.open??Fe(e.defaultOpen),u=$e(M,e==null?void 0:e.onOpenChange),k=Fe(null),S=Se({...et(Ot),...e.ids});let R=!1;const f=i=>Be?document.getElementById(S[i].get()):null;let l=null,h=null;function I(i){h&&(window.clearTimeout(h),h=null),l||(l=window.setTimeout(()=>{u.set(!0),k.update(c=>c??i),l=null},n.get()))}function X(i){if(l&&(window.clearTimeout(l),l=null),i&&H){k.set("pointer");return}h||(h=window.setTimeout(()=>{u.set(!1),k.set(null),i&&(R=!1),h=null},s.get()))}const re=Le([u,y],([i,c])=>i||c),ue=Pe(ke("trigger"),{stores:[S.content,S.trigger,u],returned:([i,c,p])=>({"aria-describedby":i,id:c,"data-state":p?"open":"closed"}),action:i=>{const c=D=>{B.get()&&D.key===it.ESCAPE&&(l&&(window.clearTimeout(l),l=null),u.set(!1))};return{destroy:De(G(i,"pointerdown",()=>{v.get()&&(u.set(!1),R=!0,l&&(window.clearTimeout(l),l=null))}),G(i,"pointerenter",D=>{ze(D)||I("pointer")}),G(i,"pointerleave",D=>{ze(D)||l&&(window.clearTimeout(l),l=null)}),G(i,"focus",()=>{R||I("focus")}),G(i,"blur",()=>X(!0)),G(i,"keydown",c),Ee(document,"keydown",c))}}}),fe=Pe(ke("content"),{stores:[re,u,b,S.content],returned:([i,c,p,D])=>tt({role:"tooltip",hidden:i?void 0:!0,tabindex:-1,style:i?void 0:je({display:"none"}),id:D,"data-portal":nt(p),"data-state":c?"open":"closed"}),action:i=>{let c=Ie,p=Ie;const D=Ae([re,a,b],([q,J,L])=>{p(),c();const U=f("trigger");!q||!U||Ke().then(()=>{p(),c();const Y=rt(i,L);Y&&(p=st(i,Y).destroy),c=at(U,i,J).destroy})});function C(q){if(!u.get())return;const J=q.target;if(!lt(J)&&!dt(J))return;const L=f("trigger");L&&J.contains(L)&&X()}const se=De(G(i,"pointerenter",()=>I("pointer")),G(i,"pointerdown",()=>I("pointer")),Ee(window,"scroll",C,{capture:!0}));return{destroy(){se(),p(),c(),D()}}}}),ge=Pe(ke("arrow"),{stores:d,returned:i=>({"data-arrow":!0,style:je({position:"absolute",width:`var(--arrow-size, ${i}px)`,height:`var(--arrow-size, ${i}px)`})})});let H=!1;return Ae(u,i=>{const c=A.get();if(c===void 0||c===!1)return;if(!i){be.get(c)===u&&be.delete(c);return}const p=be.get(c);p==null||p.set(!1),be.set(c,u)}),Ae([u,k],([i,c])=>{if(!(!i||!Be))return De(Ee(document,"mousemove",p=>{const D=f("content"),C=f("trigger");if(!D||!C)return;const se=V.get()?[C]:[C,D],q=wt(se);H=ht({x:p.clientX,y:p.clientY},q),c==="pointer"&&(H||X())}))}),{ids:S,elements:{trigger:ue,content:fe,arrow:ge},states:{open:u},options:r}}function Ue(){return{NAME:"tooltip",PARTS:["arrow","content","trigger"]}}function xt(t){const{NAME:e,PARTS:r}=Ue(),a=ct(e,r),d={...Tt({positioning:{placement:"top",gutter:0},openDelay:700,...ut(t),forceVisible:!0}),getAttrs:a};return Xe(e,d),{...d,updateOption:ft(d.options)}}function Me(){const{NAME:t}=Ue();return Ye(t)}function Pt(t){const r={...{side:"top",align:"center",sideOffset:1},...t},{options:{positioning:a}}=Me();gt(a)({...r})}function Dt(t,e){we(e,!1);const r=He(),a=()=>_e(S,"$idValues",r);let d=o(e,"closeOnEscape",24,()=>{}),v=o(e,"portal",24,()=>{}),n=o(e,"closeOnPointerDown",24,()=>{}),s=o(e,"openDelay",24,()=>{}),y=o(e,"closeDelay",24,()=>{}),b=o(e,"open",28,()=>{}),B=o(e,"onOpenChange",24,()=>{}),V=o(e,"disableHoverableContent",24,()=>{}),A=o(e,"group",24,()=>{});const{states:{open:M},updateOption:u,ids:k}=xt({closeOnEscape:d(),portal:v(),closeOnPointerDown:n(),openDelay:s(),closeDelay:y(),forceVisible:!0,defaultOpen:b(),disableHoverableContent:V(),group:A(),onOpenChange:({next:l})=>{var h;return b()!==l&&((h=B())==null||h(l),b(l)),l},positioning:{gutter:0,offset:{mainAxis:1}}}),S=Le([k.content,k.trigger],([l,h])=>({content:l,trigger:h}));E(()=>m(b()),()=>{b()!==void 0&&M.set(b())}),E(()=>m(d()),()=>{u("closeOnEscape",d())}),E(()=>m(v()),()=>{u("portal",v())}),E(()=>m(n()),()=>{u("closeOnPointerDown",n())}),E(()=>m(s()),()=>{u("openDelay",s())}),E(()=>m(y()),()=>{u("closeDelay",y())}),E(()=>m(A()),()=>{u("group",A())}),E(()=>m(V()),()=>{u("disableHoverableContent",V())}),Ve(),Ce();var R=F(),f=N(R);W(f,e,"default",{get ids(){return a()}},null),w(t,R),he()}var Et=ie("<div><!></div>"),At=ie("<div><!></div>"),kt=ie("<div><!></div>"),Ht=ie("<div><!></div>"),Vt=ie("<div><!></div>");function Mt(t,e){const r=oe(e,["children","$$slots","$$events","$$legacy"]),a=oe(r,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);we(e,!1);const d=He(),v=()=>_e(i,"$content",d),n=()=>_e(c,"$open",d),s=Ne();let y=o(e,"transition",24,()=>{}),b=o(e,"transitionConfig",24,()=>{}),B=o(e,"inTransition",24,()=>{}),V=o(e,"inTransitionConfig",24,()=>{}),A=o(e,"outTransition",24,()=>{}),M=o(e,"outTransitionConfig",24,()=>{}),u=o(e,"asChild",8,!1),k=o(e,"id",24,()=>{}),S=o(e,"side",8,"top"),R=o(e,"align",8,"center"),f=o(e,"sideOffset",8,0),l=o(e,"alignOffset",8,0),h=o(e,"collisionPadding",8,8),I=o(e,"avoidCollisions",8,!0),X=o(e,"collisionBoundary",24,()=>{}),re=o(e,"sameWidth",8,!1),ue=o(e,"fitViewport",8,!1),fe=o(e,"strategy",8,"absolute"),ge=o(e,"overlap",8,!1),H=o(e,"el",28,()=>{});const{elements:{content:i},states:{open:c},ids:p,getAttrs:D}=Me(),C=qe(),se=D("content");E(()=>m(k()),()=>{k()&&p.content.set(k())}),E(()=>v(),()=>{We(s,v())}),E(()=>g(s),()=>{Object.assign(g(s),se)}),E(()=>(n(),m(S()),m(R()),m(f()),m(l()),m(h()),m(I()),m(X()),m(re()),m(ue()),m(fe()),m(ge())),()=>{n()&&Pt({side:S(),align:R(),sideOffset:f(),alignOffset:l(),collisionPadding:h(),avoidCollisions:I(),collisionBoundary:X(),sameWidth:re(),fitViewport:ue(),strategy:fe(),overlap:ge()})}),Ve(),Ce();var q=F(),J=N(q);K(J,()=>u()&&n(),L=>{var U=F(),Y=N(U);W(Y,e,"default",{get builder(){return g(s)}},null),w(L,U)},L=>{var U=F(),Y=N(U);K(Y,()=>y()&&n(),Oe=>{var j=Et();Q(j,_=>H(_),()=>H());let ve;var ae=$(j);W(ae,e,"default",{get builder(){return g(s)}},null),ee(j),Z(()=>ve=ne(j,ve,{...g(s),...a})),te(j,_=>g(s).action(_)),ce(3,j,y,b),P(()=>x("m-pointerdown",j,C)),P(()=>x("m-pointerenter",j,C)),w(Oe,j)},Oe=>{var j=F(),ve=N(j);K(ve,()=>B()&&A()&&n(),ae=>{var _=At();Q(_,O=>H(O),()=>H());let me;var le=$(_);W(le,e,"default",{get builder(){return g(s)}},null),ee(_),Z(()=>me=ne(_,me,{...g(s),...a})),te(_,O=>g(s).action(O)),ce(1,_,B,V),ce(2,_,A,M),P(()=>x("m-pointerdown",_,C)),P(()=>x("m-pointerenter",_,C)),w(ae,_)},ae=>{var _=F(),me=N(_);K(me,()=>B()&&n(),le=>{var O=kt();Q(O,T=>H(T),()=>H());let pe;var de=$(O);W(de,e,"default",{get builder(){return g(s)}},null),ee(O),Z(()=>pe=ne(O,pe,{...g(s),...a})),te(O,T=>g(s).action(T)),ce(1,O,B,V),P(()=>x("m-pointerdown",O,C)),P(()=>x("m-pointerenter",O,C)),w(le,O)},le=>{var O=F(),pe=N(O);K(pe,()=>A()&&n(),de=>{var T=Ht();Q(T,z=>H(z),()=>H());let ye;var Te=$(T);W(Te,e,"default",{get builder(){return g(s)}},null),ee(T),Z(()=>ye=ne(T,ye,{...g(s),...a})),te(T,z=>g(s).action(z)),ce(2,T,A,M),P(()=>x("m-pointerdown",T,C)),P(()=>x("m-pointerenter",T,C)),w(de,T)},de=>{var T=F(),ye=N(T);K(ye,n,Te=>{var z=Vt();Q(z,xe=>H(xe),()=>H());let Re;var Ge=$(z);W(Ge,e,"default",{get builder(){return g(s)}},null),ee(z),Z(()=>Re=ne(z,Re,{...g(s),...a})),te(z,xe=>g(s).action(xe)),P(()=>x("m-pointerdown",z,C)),P(()=>x("m-pointerenter",z,C)),w(Te,z)},null,!0),w(de,T)},!0),w(le,O)},!0),w(ae,_)},!0),w(Oe,j)},!0),w(L,U)}),w(t,q),he()}var Rt=ie("<button><!></button>");function St(t,e){const r=oe(e,["children","$$slots","$$events","$$legacy"]),a=oe(r,["asChild","id","el"]);we(e,!1);const d=He(),v=()=>_e(B,"$trigger",d),n=Ne();let s=o(e,"asChild",8,!1),y=o(e,"id",24,()=>{}),b=o(e,"el",28,()=>{});const{elements:{trigger:B},ids:V,getAttrs:A}=Me(),M=qe(),u=A("trigger");E(()=>m(y()),()=>{y()&&V.trigger.set(y())}),E(()=>v(),()=>{We(n,v())}),E(()=>g(n),()=>{Object.assign(g(n),u)}),Ve(),Ce();var k=F(),S=N(k);K(S,s,R=>{var f=F(),l=N(f);W(l,e,"default",{get builder(){return g(n)}},null),w(R,f)},R=>{var f=Rt();Q(f,I=>b(I),()=>b());let l;var h=$(f);W(h,e,"default",{get builder(){return g(n)}},null),ee(f),Z(()=>l=ne(f,l,{...g(n),type:"button",...a})),te(f,I=>g(n).action(I)),P(()=>x("m-blur",f,M)),P(()=>x("m-focus",f,M)),P(()=>x("m-keydown",f,M)),P(()=>x("m-pointerdown",f,M)),P(()=>x("m-pointerenter",f,M)),P(()=>x("m-pointerleave",f,M)),w(R,f)}),w(t,k),he()}function Ft(t,e){const r=oe(e,["children","$$slots","$$events","$$legacy"]),a=oe(r,["class","sideOffset","transition","transitionConfig"]);we(e,!1);let d=o(e,"class",8,void 0),v=o(e,"sideOffset",8,4),n=o(e,"transition",8,vt),s=o(e,"transitionConfig",24,()=>({y:8,duration:150}));Ce();var y=Qe(()=>mt("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground",d()));Mt(t,Je({get transition(){return n()},get transitionConfig(){return s()},get sideOffset(){return v()},get class(){return g(y)}},()=>a,{children:(b,B)=>{var V=F(),A=N(V);W(A,e,"default",{},null),w(b,V)},$$slots:{default:!0}})),he()}const Nt=Dt,Wt=St;export{Nt as R,Wt as T,Ft as a};

var Oe=Object.defineProperty;var ge=r=>{throw TypeError(r)};var Ie=(r,t,e)=>t in r?Oe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var G=(r,t,e)=>Ie(r,typeof t!="symbol"?t+"":t,e),fe=(r,t,e)=>t.has(r)||ge("Cannot "+e);var a=(r,t,e)=>(fe(r,t,"read from private field"),e?e.call(r):t.get(r)),d=(r,t,e)=>t.has(r)?ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),N=(r,t,e,i)=>(fe(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e);import{p as s,c as T,i as it,a as n,t as A,w as dt,x as Re,g as ut,j as Ot,s as mt,l as ye,d as Ut,e as lt,b as Le,q as me,f as ve}from"../chunks/disclose-version.YJDmhkb0.js";import{v as Se,w as Vt,A as Jt,r as R,z as Y,h as At,D as wt,J as De,o as Ne,K as Ee,u as Fe,p as je,L as ue,M as Pe,y as Be,N as Ge,O as Qe,n as ze,F as He,P as qe,C as Ke,E as pe,G as Ve,H as de,I as xe,a as Ce,i as Je,B as Wt,l as We,d as Ue,f as Ye}from"../chunks/language.BlHTdNhY.js";import{y as D,j as p,u as Xe,z as he,p as $,f as _,e as o,n as Mt,g as l,t as X,c as tt,x as ht,i as gt,v as Te,d as v,h as I,B as Ze}from"../chunks/utils.BfJ3LYB2.js";import{u as $e,P as _e,R as ke,T as we,a as be}from"../chunks/index.DqzexEuA.js";import{M as ta,t as ea,a as aa}from"../chunks/Toaster.BxpWue-S.js";const ra="data-avatar-root",ia="data-avatar-image",na="data-avatar-fallback";var bt,Lt,Yt;class sa{constructor(t){d(this,bt);d(this,Lt);G(this,"delayMs");G(this,"loadingStatus");G(this,"loadImage",(t,e,i)=>{let c;const g=new Image;return g.src=t,e!==void 0&&(g.crossOrigin=e),i&&(g.referrerPolicy=i),this.loadingStatus.current="loading",g.onload=()=>{c=window.setTimeout(()=>{this.loadingStatus.current="loaded"},this.delayMs.current)},g.onerror=()=>{this.loadingStatus.current="error"},()=>{window.clearTimeout(c)}});d(this,Yt,D(()=>({id:a(this,bt).current,[ra]:"","data-status":this.loadingStatus.current})));this.delayMs=t.delayMs,this.loadingStatus=t.loadingStatus,N(this,Lt,t.ref),N(this,bt,t.id),Vt({id:a(this,bt),ref:a(this,Lt)})}get props(){return p(a(this,Yt))}}bt=new WeakMap,Lt=new WeakMap,Yt=new WeakMap;var yt,Dt,_t,St,kt,ft,Xt;class oa{constructor(t,e){d(this,yt);d(this,Dt);d(this,_t);d(this,St);d(this,kt);d(this,ft);d(this,Xt,D(()=>({id:a(this,yt).current,style:{display:a(this,ft).loadingStatus.current==="loaded"?"block":"none"},"data-status":a(this,ft).loadingStatus.current,[ia]:"",src:a(this,kt).current,crossorigin:a(this,_t).current,referrerpolicy:a(this,St).current})));N(this,ft,e),N(this,kt,t.src),N(this,yt,t.id),N(this,Dt,t.ref),N(this,_t,t.crossOrigin),N(this,St,t.referrerPolicy),Vt({id:a(this,yt),ref:a(this,Dt)}),Xe(()=>{if(!a(this,kt).current){a(this,ft).loadingStatus.current="error";return}a(this,_t).current,he(()=>a(this,ft).loadImage(a(this,kt).current??"",a(this,_t).current,a(this,St).current))})}get props(){return p(a(this,Xt))}}yt=new WeakMap,Dt=new WeakMap,_t=new WeakMap,St=new WeakMap,kt=new WeakMap,ft=new WeakMap,Xt=new WeakMap;var Nt,Et,Pt,Zt;class la{constructor(t,e){d(this,Nt);d(this,Et);d(this,Pt);d(this,Zt,D(()=>({style:{display:a(this,Pt).loadingStatus.current==="loaded"?"none":void 0},"data-status":a(this,Pt).loadingStatus.current,[na]:""})));N(this,Pt,e),N(this,Nt,t.id),N(this,Et,t.ref),Vt({id:a(this,Nt),ref:a(this,Et)})}get props(){return p(a(this,Zt))}}Nt=new WeakMap,Et=new WeakMap,Pt=new WeakMap,Zt=new WeakMap;const[da,Ae]=Se("Avatar.Root");function ca(r){return da(new sa(r))}function ua(r){const t=Ae();return new oa(r,t)}function ha(r){const t=Ae();return new la(r,t)}var ga=A("<div><!></div>");function fa(r,t){$(t,!0);let e=s(t,"delayMs",3,0),i=s(t,"loadingStatus",15,"loading"),c=s(t,"id",19,Jt),g=s(t,"ref",15,null),u=dt(t,["$$slots","$$events","$$legacy","delayMs","loadingStatus","onLoadingStatusChange","child","children","id","ref"]);const f=ca({delayMs:R.with(()=>e()),loadingStatus:R.with(()=>i(),m=>{var w;i()!==m&&(i(m),(w=t.onLoadingStatusChange)==null||w.call(t,m))}),id:R.with(()=>c()),ref:R.with(()=>g(),m=>g(m))}),b=D(()=>wt(u,f.props));var h=T(),y=_(h);it(y,()=>t.child,m=>{var w=T(),x=_(w);Y(x,()=>t.child,()=>({props:p(b)})),n(m,w)},m=>{var w=ga();let x;var M=o(w);Y(M,()=>t.children??Mt),l(w),X(()=>x=At(w,x,{...p(b)})),n(m,w)}),n(r,h),tt()}var ma=A("<img>");function va(r,t){$(t,!0);let e=s(t,"id",19,Jt),i=s(t,"ref",15,null),c=s(t,"crossorigin",3,void 0),g=s(t,"referrerpolicy",3,void 0),u=dt(t,["$$slots","$$events","$$legacy","src","child","id","ref","crossorigin","referrerpolicy"]);const f=ua({src:R.with(()=>t.src),id:R.with(()=>e()),ref:R.with(()=>i(),m=>i(m)),crossOrigin:R.with(()=>c()),referrerPolicy:R.with(()=>g())}),b=D(()=>wt(u,f.props));var h=T(),y=_(h);it(y,()=>t.child,m=>{var w=T(),x=_(w);Y(x,()=>t.child,()=>({props:p(b)})),n(m,w)},m=>{var w=ma();let x;X(()=>x=At(w,x,{...p(b),src:t.src})),De(w),Re(w),n(m,w)}),n(r,h),tt()}var pa=A("<span><!></span>");function _a(r,t){$(t,!0);let e=s(t,"id",19,Jt),i=s(t,"ref",15,null),c=dt(t,["$$slots","$$events","$$legacy","children","child","id","ref"]);const g=ha({id:R.with(()=>e()),ref:R.with(()=>i(),h=>i(h))}),u=D(()=>wt(c,g.props));var f=T(),b=_(f);it(b,()=>t.child,h=>{var y=T(),m=_(y);Y(m,()=>t.child,()=>({props:p(u)})),n(h,y)},h=>{var y=pa();let m;var w=o(y);Y(w,()=>t.children??Mt),l(y),X(()=>m=At(y,m,{...p(u)})),n(h,y)}),n(r,f),tt()}const ka="data-link-preview-content",wa="data-link-preview-trigger";var Ft,jt,Bt,Gt,Qt,zt,Ht,qt;class ba{constructor(t){G(this,"open");G(this,"openDelay");G(this,"closeDelay");d(this,Ft,ht(!1));d(this,jt,ht(!1));d(this,Bt,ht(!1));G(this,"timeout",null);d(this,Gt,ht(null));d(this,Qt,ht(void 0));d(this,zt,ht(!1));d(this,Ht,ht(null));G(this,"isPointerInTransit",R(!1));d(this,qt,ht(!1));G(this,"clearTimeout",()=>{this.timeout&&(window.clearTimeout(this.timeout),this.timeout=null)});G(this,"handleOpen",()=>{this.clearTimeout(),!this.open.current&&(this.isOpening=!0,this.timeout=window.setTimeout(()=>{this.isOpening&&(this.open.current=!0,this.isOpening=!1)},this.openDelay.current))});G(this,"immediateClose",()=>{this.clearTimeout(),this.isOpening=!1,this.open.current=!1});G(this,"handleClose",()=>{this.isOpening=!1,this.clearTimeout(),!this.isPointerDownOnContent&&!this.hasSelection&&(this.timeout=window.setTimeout(()=>{this.open.current=!1},this.closeDelay.current))});this.open=t.open,this.openDelay=t.openDelay,this.closeDelay=t.closeDelay,Te(()=>{if(!this.open.current){he(()=>this.hasSelection=!1);return}const i=Ne(document,"pointerup",()=>{this.containsSelection=!1,this.isPointerDownOnContent=!1,Qe(1,()=>{var f;((f=document.getSelection())==null?void 0:f.toString())!==""?this.hasSelection=!0:this.hasSelection=!1})}),c=he(()=>this.contentNode);if(!c)return;const g=Ee(c);for(const u of g)u.setAttribute("tabindex","-1");return()=>{i(),this.hasSelection=!1,this.isPointerDownOnContent=!1}})}get hasSelection(){return p(a(this,Ft))}set hasSelection(t){gt(a(this,Ft),ut(t))}get isPointerDownOnContent(){return p(a(this,jt))}set isPointerDownOnContent(t){gt(a(this,jt),ut(t))}get containsSelection(){return p(a(this,Bt))}set containsSelection(t){gt(a(this,Bt),ut(t))}get contentNode(){return p(a(this,Gt))}set contentNode(t){gt(a(this,Gt),ut(t))}get contentId(){return p(a(this,Qt))}set contentId(t){gt(a(this,Qt),ut(t))}get contentMounted(){return p(a(this,zt))}set contentMounted(t){gt(a(this,zt),ut(t))}get triggerNode(){return p(a(this,Ht))}set triggerNode(t){gt(a(this,Ht),ut(t))}get isOpening(){return p(a(this,qt))}set isOpening(t){gt(a(this,qt),ut(t))}}Ft=new WeakMap,jt=new WeakMap,Bt=new WeakMap,Gt=new WeakMap,Qt=new WeakMap,zt=new WeakMap,Ht=new WeakMap,qt=new WeakMap;var xt,Kt,K,$t,te,ee,ae,re;class ya{constructor(t,e){d(this,xt);d(this,Kt);d(this,K);d(this,$t,t=>{ue(t)||a(this,K).handleOpen()});d(this,te,t=>{ue(t)||a(this,K).contentMounted||a(this,K).immediateClose()});d(this,ee,t=>{Be(t.currentTarget)&&a(this,K).handleOpen()});d(this,ae,()=>{a(this,K).handleClose()});d(this,re,D(()=>({id:a(this,xt).current,"aria-haspopup":"dialog","aria-expanded":Ge(a(this,K).open.current),"data-state":Pe(a(this,K).open.current),"aria-controls":a(this,K).contentId,role:"button",[wa]:"",onpointerenter:a(this,$t),onfocus:a(this,ee),onblur:a(this,ae),onpointerleave:a(this,te)})));N(this,xt,t.id),N(this,Kt,t.ref),N(this,K,e),Vt({id:a(this,xt),ref:a(this,Kt),onRefChange:i=>{a(this,K).triggerNode=i}})}get props(){return p(a(this,re))}}xt=new WeakMap,Kt=new WeakMap,K=new WeakMap,$t=new WeakMap,te=new WeakMap,ee=new WeakMap,ae=new WeakMap,re=new WeakMap;var Ct,Tt,ie,ne,se,oe,le;class Sa{constructor(t,e){d(this,Ct);d(this,Tt);G(this,"root");d(this,ie,t=>{const e=t.target;je(e)&&(t.currentTarget.contains(e)&&(this.root.containsSelection=!0),this.root.hasSelection=!0,this.root.isPointerDownOnContent=!0)});d(this,ne,t=>{ue(t)||this.root.handleOpen()});d(this,se,t=>{t.preventDefault()});d(this,oe,D(()=>({open:this.root.open.current})));d(this,le,D(()=>({id:a(this,Ct).current,tabindex:-1,"data-state":Pe(this.root.open.current),[ka]:"",onpointerdown:a(this,ie),onpointerenter:a(this,ne),onfocusout:a(this,se)})));N(this,Ct,t.id),N(this,Tt,t.ref),this.root=e,Vt({id:a(this,Ct),ref:a(this,Tt),onRefChange:i=>{this.root.contentNode=i,this.root.contentId=i==null?void 0:i.id},deps:()=>this.root.open.current}),Te(()=>{if(!this.root.open.current)return;const{isPointerInTransit:i,onPointerExit:c}=$e(()=>this.root.triggerNode,()=>a(this,Tt).current);this.root.isPointerInTransit=i,c(()=>{this.root.handleClose()})}),Fe(()=>{this.root.clearTimeout()})}get snippetProps(){return p(a(this,oe))}get props(){return p(a(this,le))}}Ct=new WeakMap,Tt=new WeakMap,ie=new WeakMap,ne=new WeakMap,se=new WeakMap,oe=new WeakMap,le=new WeakMap;const[Pa,Me]=Se("LinkPreview.Root");function xa(r){return Pa(new ba(r))}function Ca(r){return new ya(r,Me())}function Ta(r){return new Sa(r,Me())}function Aa(r,t){$(t,!0);let e=s(t,"open",15,!1),i=s(t,"onOpenChange",3,ze),c=s(t,"openDelay",3,700),g=s(t,"closeDelay",3,300),u=s(t,"controlledOpen",3,!1);xa({open:R.with(()=>e(),h=>{u()||e(h),i()(h)}),openDelay:R.with(()=>c()),closeDelay:R.with(()=>g())});var f=T(),b=_(f);Ot(b,()=>He,(h,y)=>{y(h,{children:(m,w)=>{var x=T(),M=_(x);Y(M,()=>t.children??Mt),n(m,x)},$$slots:{default:!0}})}),n(r,f),tt()}var Ma=A("<div><!></div>"),Oa=A("<div><!></div>"),Ia=A("<!> <!>",1);function Ra(r,t){$(t,!0);let e=s(t,"id",19,Jt),i=s(t,"ref",15,null),c=s(t,"side",3,"top"),g=s(t,"sideOffset",3,0),u=s(t,"align",3,"center"),f=s(t,"avoidCollisions",3,!0),b=s(t,"arrowPadding",3,0),h=s(t,"sticky",3,"partial"),y=s(t,"hideWhenDetached",3,!1),m=s(t,"collisionPadding",3,0),w=s(t,"forceMount",3,!1),x=dt(t,["$$slots","$$events","$$legacy","children","child","id","ref","side","sideOffset","align","avoidCollisions","arrowPadding","sticky","hideWhenDetached","collisionPadding","onInteractOutside","onEscapeKeydown","forceMount"]);const M=Ta({id:R.with(()=>e()),ref:R.with(()=>i(),E=>i(E))}),V=D(()=>({side:c(),sideOffset:g(),align:u(),avoidCollisions:f(),arrowPadding:b(),sticky:h(),hideWhenDetached:y(),collisionPadding:m()})),F=D(()=>wt(x,p(V),M.props));function L(E){var j;(j=t.onInteractOutside)==null||j.call(t,E),!E.defaultPrevented&&M.root.handleClose()}function et(E){var j;(j=t.onEscapeKeydown)==null||j.call(t,E),!E.defaultPrevented&&M.root.handleClose()}var nt=T(),vt=_(nt);it(vt,w,E=>{Ke(E,mt(()=>p(F),{get enabled(){return M.root.open.current},get id(){return e()},onInteractOutside:L,onEscapeKeydown:et,onOpenAutoFocus:J=>J.preventDefault(),onCloseAutoFocus:J=>J.preventDefault(),trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!0,popper:(J,at)=>{let pt=()=>at==null?void 0:at().props;var Q=T();const W=D(()=>wt(pt(),{style:pe("link-preview")}));var ct=_(Q);it(ct,()=>t.child,rt=>{var k=T(),S=_(k);Y(S,()=>t.child,()=>({props:p(W),...M.snippetProps})),n(rt,k)},rt=>{var k=Ma();let S;var P=o(k);Y(P,()=>t.children??Mt),l(k),X(()=>S=At(k,S,{...p(W)})),n(rt,k)}),n(J,Q)},$$slots:{popper:!0}}))},E=>{var j=T(),J=_(j);it(J,()=>!w(),at=>{qe(at,mt(()=>p(F),{get present(){return M.root.open.current},get id(){return e()},onInteractOutside:L,onEscapeKeydown:et,onOpenAutoFocus:Q=>Q.preventDefault(),onCloseAutoFocus:Q=>Q.preventDefault(),trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!1,popper:(Q,W)=>{let ct=()=>W==null?void 0:W().props;var rt=Ia();const k=D(()=>wt(ct(),{style:pe("link-preview")}));var S=_(rt);it(S,()=>t.child,O=>{var C=T(),B=_(C);Y(B,()=>t.child,()=>({props:p(k),...M.snippetProps})),n(O,C)},O=>{var C=Oa();let B;var z=o(C);Y(z,()=>t.children??Mt),l(C),X(()=>B=At(C,B,{...p(k)})),n(O,C)});var P=v(S,2);ta(P,{onMountedChange:O=>M.root.contentMounted=O}),n(Q,rt)},$$slots:{popper:!0}}))},null,!0),n(E,j)}),n(r,nt),tt()}var La=A("<a><!></a>");function Da(r,t){$(t,!0);let e=s(t,"ref",15,null),i=s(t,"id",19,Jt),c=dt(t,["$$slots","$$events","$$legacy","ref","id","child","children"]);const g=Ca({id:R.with(()=>i()),ref:R.with(()=>e(),h=>e(h))}),u=D(()=>wt(c,g.props));var f=T(),b=_(f);Ot(b,()=>Ve,(h,y)=>{y(h,{get id(){return i()},children:(m,w)=>{var x=T(),M=_(x);it(M,()=>t.child,V=>{var F=T(),L=_(F);Y(L,()=>t.child,()=>({props:p(u)})),n(V,F)},V=>{var F=La();let L;var et=o(F);Y(et,()=>t.children??Mt),l(F),X(()=>L=At(F,L,{...p(u)})),n(V,F)}),n(m,x)},$$slots:{default:!0}})}),n(r,f),tt()}function Na(r,t){$(t,!0);let e=s(t,"ref",15,null),i=s(t,"loadingStatus",15,"loading"),c=dt(t,["$$slots","$$events","$$legacy","class","ref","loadingStatus"]);var g=T(),u=_(g),f=D(()=>de("relative flex size-10 shrink-0 overflow-hidden rounded-full",t.class));Ot(u,()=>fa,(b,h)=>{h(b,mt({get loadingStatus(){return i()},set loadingStatus(y){i(y)},get ref(){return e()},set ref(y){e(y)},get class(){return p(f)}},()=>c))}),n(r,g),tt()}function Ea(r,t){$(t,!0);let e=s(t,"ref",15,null),i=dt(t,["$$slots","$$events","$$legacy","class","src","alt","ref"]);var c=T(),g=_(c),u=D(()=>de("aspect-square h-full w-full",t.class));Ot(g,()=>va,(f,b)=>{b(f,mt({get ref(){return e()},set ref(h){e(h)},get src(){return t.src},get alt(){return t.alt},get class(){return p(u)}},()=>i))}),n(r,c),tt()}function Fa(r,t){$(t,!0);let e=s(t,"ref",15,null),i=dt(t,["$$slots","$$events","$$legacy","class","ref"]);var c=T(),g=_(c),u=D(()=>de("bg-muted flex h-full w-full items-center justify-center rounded-full",t.class));Ot(g,()=>_a,(f,b)=>{b(f,mt({get ref(){return e()},set ref(h){e(h)},get class(){return p(u)}},()=>i))}),n(r,c),tt()}function ja(r,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);xe(r,mt({name:"github"},()=>e,{iconNode:[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]],children:(c,g)=>{var u=T(),f=_(u);Ce(f,t,"default",{},null),n(c,u)},$$slots:{default:!0}}))}function Ba(r,t){const e=ye(t,["children","$$slots","$$events","$$legacy"]);xe(r,mt({name:"send"},()=>e,{iconNode:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]],children:(c,g)=>{var u=T(),f=_(u);Ce(f,t,"default",{},null),n(c,u)},$$slots:{default:!0}}))}function Ga(r,t){$(t,!0);let e=s(t,"ref",15,null),i=s(t,"align",3,"center"),c=s(t,"sideOffset",3,4),g=dt(t,["$$slots","$$events","$$legacy","ref","class","align","sideOffset"]);var u=T(),f=_(u),b=D(()=>de("bg-popover text-popover-foreground z-50 w-64 rounded-md border p-4 shadow-md outline-none",t.class));Ot(f,()=>Ra,(h,y)=>{y(h,mt({get ref(){return e()},set ref(m){e(m)},get sideOffset(){return c()},get align(){return i()},get class(){return p(b)}},()=>g))}),n(r,u),tt()}const Qa=Aa,za=Da;var Ha=A("<!> <!>",1),qa=A('<div class="flex space-x-4"><!> <div><h4 class="text-sm font-semibold"> </h4> <p class="text-sm"> </p></div></div>'),Ka=A("<!> <!>",1);function U(r,t){let e=s(t,"class",8,""),i=s(t,"link",8,"https://ma.cyou"),c=s(t,"name",8,"ma.cyou"),g=s(t,"img",8,"https://github.com/ma-cyou.png"),u=s(t,"fallback",8,"MA"),f=s(t,"title",8,"macyou"),b=s(t,"description",8,"Mapagmataas's website");Qa(r,{children:(h,y)=>{var m=Ka(),w=_(m),x=Ze(()=>`${(e()!==""?e()+" ":"")??""}rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black`);za(w,{get href(){return i()},target:"_blank",rel:"noreferrer noopener",get class(){return p(x)},children:(V,F)=>{I();var L=Ut();X(()=>lt(L,c())),n(V,L)},$$slots:{default:!0}});var M=v(w,2);Ga(M,{class:"w-80",children:(V,F)=>{var L=qa(),et=o(L);Na(et,{class:"my-auto h-12 w-12",children:(at,pt)=>{var Q=Ha(),W=_(Q);Ea(W,{get src(){return g()}});var ct=v(W,2);Fa(ct,{children:(rt,k)=>{I();var S=Ut();X(()=>lt(S,u())),n(rt,S)},$$slots:{default:!0}}),n(at,Q)},$$slots:{default:!0}});var nt=v(et,2),vt=o(nt),E=o(vt,!0);l(vt);var j=v(vt,2),J=o(j,!0);l(j),l(nt),l(L),X(()=>{lt(E,f()),lt(J,b())}),n(V,L)},$$slots:{default:!0}}),n(h,m)},$$slots:{default:!0}})}var Va=A('<div class="flex items-center justify-center">Привет  <button class="cursor-grab grayscale-[20%] hover:scale-110">👋</button> ,</div> <div class="ml-0 text-2xl sm:ml-2 sm:text-4xl md:text-5xl">я автор</div>',1),Ja=A('<div class="flex items-center justify-center">Hi  <button class="cursor-grab grayscale-[20%] hover:scale-110">👋</button> ,</div> <div class="ml-0 text-2xl sm:ml-2 sm:text-4xl md:text-5xl">I am the author</div>',1),Wa=A(`<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&amp;>li]:mt-2"><li><p>Меня зовут Тимофей, мой ник — "Mapagmataas". В настоящий момент я работаю в <!> лаборантом на <a href="https://ru.wikipedia.org/wiki/ВЭПП-2000" target="_blank">коллайдере частиц</a>. Основное направление моей деятельности — <a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer">full stack</a> разработка веб-сайтов для управления данными, приборами и различными системами.</p></li> <li><p>Я увлекаюсь веб-дизайном и front-end разработкой, постоянно нахожу новые решения и
								стремлюсь узнавать что-то новое, и не побоюсь сказать, что уверен в своих знаниях <a href="https://wikipedia.org/wiki/HTML" target="_blank">HTML</a>, <a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>, <a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a href="https://wikipedia.org/wiki/TypeScript" target="_blank">TypeScript</a>, в моем любимом фреймворке <!>, а также <!>. Меня также привлекает мир разработки игр, и я горю желанием попробовать себя в <a href="https://wikipedia.org/wiki/Video_game_development" target="_blank">game dev</a>. Я хорошо знаком с основами языков C-семейства (<a href="https://wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>, <a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>, <a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <!>), <a href="https://wikipedia.org/wiki/Memory_management" target="_blank">управлением памятью</a>, <a href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)" target="_blank">многопоточностью</a>, <a href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)" target="_blank">асинхронным программированием</a>.</p></li> <li><p>Также владею основами работы с <a href="https://wikipedia.org/wiki/Database" target="_blank">базами данных</a> — таких как <a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>, <a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>, <a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>, <a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>, <a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a> и <a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. Для
								повседневных задач я использую <!> или <!>, и хорошо знаком с множеством модулей и библиотек для этих языков.</p></li></ul> <blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">Главное, что я ищу в своей работе, — это интересные задачи и профессиональный рост.
						Однако при этом я не спешу и стремлюсь к качественному развитию.</blockquote>`,1),Ua=A(`<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&amp;>li]:mt-2"><li><p>My name is Timofey, and my nickname is "Mapagmataas". Currently, I work as a lab
								technician at <!> at a <a href="https://wikipedia.org/wiki/Collider" target="_blank">particle collider</a>.
								My primary area of expertise is <a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer">full stack</a> development of websites for managing data, instruments, and various systems.</p></li> <li><p>I am passionate about web design and front-end development, always looking for new
								solutions and eager to learn new things. I am confident in my knowledge of <a href="https://wikipedia.org/wiki/HTML" target="_blank">HTML</a>, <a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>, <a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a href="https://wikipedia.org/wiki/TypeScript" target="_blank">TypeScript</a>, my favorite framework <!>, and also <!>. I am also drawn to the world of game development and am eager to explore
								opportunities in <a href="https://wikipedia.org/wiki/Video_game_development" target="_blank">game dev</a>. I am familiar with the basics of C-family languages (<a href="https://wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>, <a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>, <a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <!>), <a href="https://wikipedia.org/wiki/Memory_management" target="_blank">memory management</a>, <a href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)" target="_blank">multithreading</a>, and <a href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)" target="_blank">asynchronous programming</a>.</p></li> <li><p>I also have a strong foundation in working with <a href="https://wikipedia.org/wiki/Database" target="_blank">databases</a> such as <a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>, <a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>, <a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>, <a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>, <a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a>, and <a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. For
								everyday tasks, I use <!> or <!>, and I am well-versed in many modules and libraries for these languages.</p></li></ul> <blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">The most important thing I seek in my work is interesting challenges and professional
						growth. However, I am not in a hurry; I strive for quality development.</blockquote>`,1),Ya=A("<!> @mapagmataas1331",1),Xa=A("<p>GitHub</p>"),Za=A("<!> <!>",1),$a=A("<!> @mapagmataas",1),tr=A("<p>Telegram</p>"),er=A("<!> <!>",1),ar=A(`<div class="w-full snap-y snap-mandatory justify-center overflow-y-scroll scroll-smooth bg-gradient-to-br from-white to-sky-200 dark:from-sky-800 dark:to-black"><section class="relative flex snap-start items-center justify-center"><div class="text-center"><h1 class="block items-center justify-center text-3xl font-bold sm:flex sm:text-4xl md:text-5xl"><!></h1> <p class="mt-2 text-base sm:mt-5 md:text-lg"> </p> <img src="/author.png"> <div class="mt-5 flex flex-col items-center justify-center sm:mt-10 md:flex-row"><!> <!></div></div></section> <section id="about" class="relative z-10 flex snap-start flex-col items-center justify-center text-xs leading-normal tracking-tight md:text-base md:leading-relaxed md:tracking-normal"><div class="container z-10 max-h-full"><h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"> </h1> <div class="mt-0 md:mt-6"><!></div></div></section> <section id="socials" class="relative flex snap-start flex-col items-center justify-center"><div class="container mx-auto text-center"><h2 class="text-4xl font-bold"> </h2> <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2"><!> <!></div> <p id="legal" class="absolute bottom-0 left-0 right-0 p-2 text-center text-xs backdrop-blur-sm">© ma.cyou (<a href="https://github.com/mapagmataas1331" target="_blank">Mapagmataas</a>),
				2024. All rights reserved.</p></div></section></div>`);function dr(r,t){$(t,!1);const e=Le(),i=()=>ve(We,"$language",e),c=()=>ve(ea,"$theme",e),g=k=>{aa("Hello world!"),k.innerHTML="👀",setTimeout(()=>k.style.transform="scaleX(-1)",500),setTimeout(()=>k.style.transform="",1e3),setTimeout(()=>k.innerHTML="👋",1500)};Je();var u=ar(),f=o(u),b=o(f),h=o(b),y=o(h);it(y,()=>i()==="ru",k=>{var S=Va(),P=_(S),O=v(o(P));I(),l(P),I(2),me("click",O,C=>g(C.target)),n(k,S)},k=>{var S=Ja(),P=_(S),O=v(o(P));I(),l(P),I(2),me("click",O,C=>g(C.target)),n(k,S)}),l(h);var m=v(h,2),w=o(m,!0);l(m);var x=v(m,2),M=v(x,2),V=o(M);Wt(V,{href:"#about",variant:"default",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(k,S)=>{I();var P=Ut();X(()=>lt(P,i()==="ru"?"Больше обо мне":"More about me")),n(k,P)},$$slots:{default:!0}});var F=v(V,2);Wt(F,{href:"#socials",variant:"default",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(k,S)=>{I();var P=Ut();X(()=>lt(P,i()==="ru"?"Мои Соц. сети":"My Social links")),n(k,P)},$$slots:{default:!0}}),l(M),l(b),l(f);var L=v(f,2),et=o(L),nt=o(et),vt=o(nt,!0);l(nt);var E=v(nt,2),j=o(E);it(j,()=>i()==="ru",k=>{var S=Wa(),P=_(S),O=o(P),C=o(O),B=v(o(C));U(B,{class:"font-semibold italic",link:"https://www.inp.nsk.su/",name:"ИЯФ",img:"https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif",fallback:"ИЯФ",title:"ИЯФ СО РАН",description:"Институт ядерной физики имени Г. И. Будкера СО РАН"}),I(5),l(C),l(O);var z=v(O,2),H=o(z),st=v(o(H),9);U(st,{class:"font-semibold italic",link:"https://svelte.dev/",name:"Svelte",img:"https://github.com/sveltejs.png",fallback:"SK",title:"SVELTE",description:"Кибернетически улучшенные веб-приложения."});var q=v(st,2);U(q,{class:"font-semibold italic",link:"https://react.dev/",name:"React",img:"https://github.com/reactjs.png",fallback:"RC",title:"React",description:"Библиотека для создания пользовательских интерфейсов."});var It=v(q,10);U(It,{class:"font-semibold italic",link:"https://www.rust-lang.org/",name:"Rust",img:"https://github.com/rust-lang.png",fallback:"RT",title:"Rust",description:"Язык, расширяющий возможности каждого для создания надежного и эффективного программного обеспечения."}),I(7),l(H),l(z);var Z=v(z,2),ot=o(Z),Rt=v(o(ot),15);U(Rt,{class:"font-semibold italic",link:"https://www.python.org/",name:"Python",img:"https://github.com/python.png",fallback:"PY",title:"Python",description:"язык программирования, который позволяет работать быстро и более эффективно интегрировать программы."});var ce=v(Rt,2);U(ce,{class:"font-semibold italic",link:"https://go.dev/",name:"Golang",img:"https://github.com/golang.png",fallback:"GO",title:"GO",description:"Создавайте простые, безопасные и масштабируемые программы с помощью Go."}),I(),l(ot),l(Z),l(P),I(2),n(k,S)},k=>{var S=Ua(),P=_(S),O=o(P),C=o(O),B=v(o(C));U(B,{class:"font-semibold italic",link:"https://www.inp.nsk.su/",name:"BINP",img:"https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif",fallback:"BINP",title:"Budker Institute of Nuclear Physics",description:"G. I. Budker Institute of Nuclear Physics SB RAS"}),I(5),l(C),l(O);var z=v(O,2),H=o(z),st=v(o(H),9);U(st,{class:"font-semibold italic",link:"https://svelte.dev/",name:"Svelte",img:"https://github.com/sveltejs.png",fallback:"SK",title:"SVELTE",description:"Cybernetically enhanced web apps."});var q=v(st,2);U(q,{class:"font-semibold italic",link:"https://react.dev/",name:"React",img:"https://github.com/reactjs.png",fallback:"RC",title:"React",description:"A JavaScript library for building user interfaces."});var It=v(q,10);U(It,{class:"font-semibold italic",link:"https://www.rust-lang.org/",name:"Rust",img:"https://github.com/rust-lang.png",fallback:"RT",title:"Rust",description:"A language empowering everyone to build reliable and efficient software."}),I(7),l(H),l(z);var Z=v(z,2),ot=o(Z),Rt=v(o(ot),15);U(Rt,{class:"font-semibold italic",link:"https://www.python.org/",name:"Python",img:"https://github.com/python.png",fallback:"PY",title:"Python",description:"A programming language that lets you work quickly and integrate systems more effectively."});var ce=v(Rt,2);U(ce,{class:"font-semibold italic",link:"https://go.dev/",name:"Golang",img:"https://github.com/golang.png",fallback:"GO",title:"Go",description:"Create fast, reliable, and scalable programs with Go."}),I(),l(ot),l(Z),l(P),I(2),n(k,S)}),l(E),l(et),l(L);var J=v(L,2),at=o(J),pt=o(at),Q=o(pt,!0);l(pt);var W=v(pt,2),ct=o(W);_e(ct,{children:(k,S)=>{ke(k,{children:(P,O)=>{var C=Za(),B=_(C);we(B,{class:"sm:text-right",children:(H,st)=>{Wt(H,{href:"https://github.com/mapagmataas1331",variant:"default",target:"_blank",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(q,It)=>{var Z=Ya(),ot=_(Z);ja(ot,{class:"mr-2 !size-6"}),I(),n(q,Z)},$$slots:{default:!0}})},$$slots:{default:!0}});var z=v(B,2);be(z,{children:(H,st)=>{var q=Xa();n(H,q)},$$slots:{default:!0}}),n(P,C)},$$slots:{default:!0}})},$$slots:{default:!0}});var rt=v(ct,2);_e(rt,{children:(k,S)=>{ke(k,{children:(P,O)=>{var C=er(),B=_(C);we(B,{class:"sm:text-left",children:(H,st)=>{Wt(H,{href:"https://t.me/mapagmataas",variant:"default",target:"_blank",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(q,It)=>{var Z=$a(),ot=_(Z);Ba(ot,{class:"mr-2 !size-6"}),I(),n(q,Z)},$$slots:{default:!0}})},$$slots:{default:!0}});var z=v(B,2);be(z,{children:(H,st)=>{var q=tr();n(H,q)},$$slots:{default:!0}}),n(P,C)},$$slots:{default:!0}})},$$slots:{default:!0}}),l(W),I(2),l(at),l(J),l(u),X(()=>{lt(w,i()==="ru"?"Веб-разработчик и дизайнер":"Web developer and designer"),Ue(x,"alt",i()==="ru"?"Фото Aвтора":"Author's photo"),Ye(x,`mx-auto mt-5 flex h-full max-h-[calc((100dvh_-_3.5rem)_/_2)] min-h-48 items-center justify-center rounded-3xl shadow-xl transition-transform hover:scale-105 sm:mt-10 md:max-h-[calc((100dvh_-_4rem)_/_2)] ${(c()==="dark"?"pattern-light":"pattern")??""}`),lt(vt,i()==="ru"?"Обо мне":"About me"),lt(Q,i()==="ru"?"Мои Соц. сети":"My Social links")}),n(r,u),tt()}export{dr as component};
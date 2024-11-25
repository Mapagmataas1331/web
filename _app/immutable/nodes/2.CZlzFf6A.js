var Re=Object.defineProperty;var be=a=>{throw TypeError(a)};var De=(a,t,e)=>t in a?Re(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var Q=(a,t,e)=>De(a,typeof t!="symbol"?t+"":t,e),ye=(a,t,e)=>t.has(a)||be("Cannot "+e);var r=(a,t,e)=>(ye(a,t,"read from private field"),e?e.call(a):t.get(a)),g=(a,t,e)=>t.has(a)?be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,e),D=(a,t,e,i)=>(ye(a,t,"write to private field"),i?i.call(a,e):t.set(a,e),e);import{p as u,c as x,i as rt,a as n,t as L,r as nt,q as Ne,g as ct,j as bt,s as V,l as Dt,d as te,e as W,b as ze,v as xe,f as Se}from"../chunks/disclose-version.Bc9YyEIu.js";import{q as Ce,u as Zt,v as $t,o as A,b as Y,x as Lt,y as wt,D as Ee,j as je,E as Fe,p as Ge,k as Qe,G as pe,H as Te,t as Be,J as He,K as qe,n as Ke,F as Ve,P as Je,w as We,z as Pe,A as Ye,C as fe,I as Nt,a as zt,i as Ue,B as ve,L as Xe,M as Ze,l as $e,N as ta,O as ea}from"../chunks/language.CsPXyL5P.js";import{y as I,j as f,u as aa,I as _e,p as tt,f as _,e as c,n as Rt,g as d,t as F,c as et,x as ut,i as ht,v as Me,d as p,h as z,ax as ra}from"../chunks/utils.DgkU9qJm.js";import{u as ia,P as na,R as sa,T as oa,a as la}from"../chunks/index.Bg5xOkGx.js";import{M as da,P as ca,t as ua,a as ha}from"../chunks/Toaster.svelte_svelte_type_style_lang.9mCbXPn3.js";const ga="data-avatar-root",fa="data-avatar-image",ma="data-avatar-fallback";var Pt,Ft,ee;class va{constructor(t){g(this,Pt);g(this,Ft);Q(this,"delayMs");Q(this,"loadingStatus");Q(this,"loadImage",(t,e,i)=>{let o;const h=new Image;return h.src=t,e!==void 0&&(h.crossOrigin=e),i&&(h.referrerPolicy=i),this.loadingStatus.current="loading",h.onload=()=>{o=window.setTimeout(()=>{this.loadingStatus.current="loaded"},this.delayMs.current)},h.onerror=()=>{this.loadingStatus.current="error"},()=>{window.clearTimeout(o)}});g(this,ee,I(()=>({id:r(this,Pt).current,[ga]:"","data-status":this.loadingStatus.current})));this.delayMs=t.delayMs,this.loadingStatus=t.loadingStatus,D(this,Ft,t.ref),D(this,Pt,t.id),Zt({id:r(this,Pt),ref:r(this,Ft)})}get props(){return f(r(this,ee))}}Pt=new WeakMap,Ft=new WeakMap,ee=new WeakMap;var Ct,Gt,_t,Tt,kt,gt,ae;class pa{constructor(t,e){g(this,Ct);g(this,Gt);g(this,_t);g(this,Tt);g(this,kt);g(this,gt);g(this,ae,I(()=>({id:r(this,Ct).current,style:{display:r(this,gt).loadingStatus.current==="loaded"?"block":"none"},"data-status":r(this,gt).loadingStatus.current,[fa]:"",src:r(this,kt).current,crossorigin:r(this,_t).current,referrerpolicy:r(this,Tt).current})));D(this,gt,e),D(this,kt,t.src),D(this,Ct,t.id),D(this,Gt,t.ref),D(this,_t,t.crossOrigin),D(this,Tt,t.referrerPolicy),Zt({id:r(this,Ct),ref:r(this,Gt)}),aa(()=>{if(!r(this,kt).current){r(this,gt).loadingStatus.current="error";return}r(this,_t).current,_e(()=>r(this,gt).loadImage(r(this,kt).current??"",r(this,_t).current,r(this,Tt).current))})}get props(){return f(r(this,ae))}}Ct=new WeakMap,Gt=new WeakMap,_t=new WeakMap,Tt=new WeakMap,kt=new WeakMap,gt=new WeakMap,ae=new WeakMap;var Qt,Bt,Mt,re;class _a{constructor(t,e){g(this,Qt);g(this,Bt);g(this,Mt);g(this,re,I(()=>({style:{display:r(this,Mt).loadingStatus.current==="loaded"?"none":void 0},"data-status":r(this,Mt).loadingStatus.current,[ma]:""})));D(this,Mt,e),D(this,Qt,t.id),D(this,Bt,t.ref),Zt({id:r(this,Qt),ref:r(this,Bt)})}get props(){return f(r(this,re))}}Qt=new WeakMap,Bt=new WeakMap,Mt=new WeakMap,re=new WeakMap;const[ka,Ae]=Ce("Avatar.Root");function wa(a){return ka(new va(a))}function ba(a){const t=Ae();return new pa(a,t)}function ya(a){const t=Ae();return new _a(a,t)}var xa=L("<div><!></div>");function Sa(a,t){tt(t,!0);let e=u(t,"delayMs",3,0),i=u(t,"loadingStatus",15,"loading"),o=u(t,"id",19,$t),h=u(t,"ref",15,null),s=nt(t,["$$slots","$$events","$$legacy","delayMs","loadingStatus","onLoadingStatusChange","child","children","id","ref"]);const l=wa({delayMs:A.with(()=>e()),loadingStatus:A.with(()=>i(),k=>{var v;i()!==k&&(i(k),(v=t.onLoadingStatusChange)==null||v.call(t,k))}),id:A.with(()=>o()),ref:A.with(()=>h(),k=>h(k))}),y=I(()=>wt(s,l.props));var m=x(),b=_(m);rt(b,()=>t.child,k=>{var v=x(),P=_(v);Y(P,()=>t.child,()=>({props:f(y)})),n(k,v)},k=>{var v=xa();let P;var C=c(v);Y(C,()=>t.children??Rt),d(v),F(()=>P=Lt(v,P,{...f(y)})),n(k,v)}),n(a,m),et()}var Pa=L("<img>");function Ca(a,t){tt(t,!0);let e=u(t,"id",19,$t),i=u(t,"ref",15,null),o=u(t,"crossorigin",3,void 0),h=u(t,"referrerpolicy",3,void 0),s=nt(t,["$$slots","$$events","$$legacy","src","child","id","ref","crossorigin","referrerpolicy"]);const l=ba({src:A.with(()=>t.src),id:A.with(()=>e()),ref:A.with(()=>i(),k=>i(k)),crossOrigin:A.with(()=>o()),referrerPolicy:A.with(()=>h())}),y=I(()=>wt(s,l.props));var m=x(),b=_(m);rt(b,()=>t.child,k=>{var v=x(),P=_(v);Y(P,()=>t.child,()=>({props:f(y)})),n(k,v)},k=>{var v=Pa();let P;F(()=>P=Lt(v,P,{...f(y),src:t.src})),Ee(v),Ne(v),n(k,v)}),n(a,m),et()}var Ta=L("<span><!></span>");function Ma(a,t){tt(t,!0);let e=u(t,"id",19,$t),i=u(t,"ref",15,null),o=nt(t,["$$slots","$$events","$$legacy","children","child","id","ref"]);const h=ya({id:A.with(()=>e()),ref:A.with(()=>i(),m=>i(m))}),s=I(()=>wt(o,h.props));var l=x(),y=_(l);rt(y,()=>t.child,m=>{var b=x(),k=_(b);Y(k,()=>t.child,()=>({props:f(s)})),n(m,b)},m=>{var b=Ta();let k;var v=c(b);Y(v,()=>t.children??Rt),d(b),F(()=>k=Lt(b,k,{...f(s)})),n(m,b)}),n(a,l),et()}const Aa="data-link-preview-content",Oa="data-link-preview-trigger";var Ht,qt,Kt,Vt,Jt,Wt,Yt,Ut;class Ia{constructor(t){Q(this,"open");Q(this,"openDelay");Q(this,"closeDelay");g(this,Ht,ut(!1));g(this,qt,ut(!1));g(this,Kt,ut(!1));Q(this,"timeout",null);g(this,Vt,ut(null));g(this,Jt,ut(void 0));g(this,Wt,ut(!1));g(this,Yt,ut(null));Q(this,"isPointerInTransit",A(!1));g(this,Ut,ut(!1));Q(this,"clearTimeout",()=>{this.timeout&&(window.clearTimeout(this.timeout),this.timeout=null)});Q(this,"handleOpen",()=>{this.clearTimeout(),!this.open.current&&(this.isOpening=!0,this.timeout=window.setTimeout(()=>{this.isOpening&&(this.open.current=!0,this.isOpening=!1)},this.openDelay.current))});Q(this,"immediateClose",()=>{this.clearTimeout(),this.isOpening=!1,this.open.current=!1});Q(this,"handleClose",()=>{this.isOpening=!1,this.clearTimeout(),!this.isPointerDownOnContent&&!this.hasSelection&&(this.timeout=window.setTimeout(()=>{this.open.current=!1},this.closeDelay.current))});this.open=t.open,this.openDelay=t.openDelay,this.closeDelay=t.closeDelay,Me(()=>{if(!this.open.current){_e(()=>this.hasSelection=!1);return}const i=je(document,"pointerup",()=>{this.containsSelection=!1,this.isPointerDownOnContent=!1,qe(1,()=>{var l;((l=document.getSelection())==null?void 0:l.toString())!==""?this.hasSelection=!0:this.hasSelection=!1})}),o=_e(()=>this.contentNode);if(!o)return;const h=Fe(o);for(const s of h)s.setAttribute("tabindex","-1");return()=>{i(),this.hasSelection=!1,this.isPointerDownOnContent=!1}})}get hasSelection(){return f(r(this,Ht))}set hasSelection(t){ht(r(this,Ht),ct(t))}get isPointerDownOnContent(){return f(r(this,qt))}set isPointerDownOnContent(t){ht(r(this,qt),ct(t))}get containsSelection(){return f(r(this,Kt))}set containsSelection(t){ht(r(this,Kt),ct(t))}get contentNode(){return f(r(this,Vt))}set contentNode(t){ht(r(this,Vt),ct(t))}get contentId(){return f(r(this,Jt))}set contentId(t){ht(r(this,Jt),ct(t))}get contentMounted(){return f(r(this,Wt))}set contentMounted(t){ht(r(this,Wt),ct(t))}get triggerNode(){return f(r(this,Yt))}set triggerNode(t){ht(r(this,Yt),ct(t))}get isOpening(){return f(r(this,Ut))}set isOpening(t){ht(r(this,Ut),ct(t))}}Ht=new WeakMap,qt=new WeakMap,Kt=new WeakMap,Vt=new WeakMap,Jt=new WeakMap,Wt=new WeakMap,Yt=new WeakMap,Ut=new WeakMap;var At,Xt,K,ie,ne,se,oe,le;class La{constructor(t,e){g(this,At);g(this,Xt);g(this,K);g(this,ie,t=>{pe(t)||r(this,K).handleOpen()});g(this,ne,t=>{pe(t)||r(this,K).contentMounted||r(this,K).immediateClose()});g(this,se,t=>{Be(t.currentTarget)&&r(this,K).handleOpen()});g(this,oe,()=>{r(this,K).handleClose()});g(this,le,I(()=>({id:r(this,At).current,"aria-haspopup":"dialog","aria-expanded":He(r(this,K).open.current),"data-state":Te(r(this,K).open.current),"aria-controls":r(this,K).contentId,role:"button",[Oa]:"",onpointerenter:r(this,ie),onfocus:r(this,se),onblur:r(this,oe),onpointerleave:r(this,ne)})));D(this,At,t.id),D(this,Xt,t.ref),D(this,K,e),Zt({id:r(this,At),ref:r(this,Xt),onRefChange:i=>{r(this,K).triggerNode=i}})}get props(){return f(r(this,le))}}At=new WeakMap,Xt=new WeakMap,K=new WeakMap,ie=new WeakMap,ne=new WeakMap,se=new WeakMap,oe=new WeakMap,le=new WeakMap;var Ot,It,de,ce,ue,he,ge;class Ra{constructor(t,e){g(this,Ot);g(this,It);Q(this,"root");g(this,de,t=>{const e=t.target;Qe(e)&&(t.currentTarget.contains(e)&&(this.root.containsSelection=!0),this.root.hasSelection=!0,this.root.isPointerDownOnContent=!0)});g(this,ce,t=>{pe(t)||this.root.handleOpen()});g(this,ue,t=>{t.preventDefault()});g(this,he,I(()=>({open:this.root.open.current})));g(this,ge,I(()=>({id:r(this,Ot).current,tabindex:-1,"data-state":Te(this.root.open.current),[Aa]:"",onpointerdown:r(this,de),onpointerenter:r(this,ce),onfocusout:r(this,ue)})));D(this,Ot,t.id),D(this,It,t.ref),this.root=e,Zt({id:r(this,Ot),ref:r(this,It),onRefChange:i=>{this.root.contentNode=i,this.root.contentId=i==null?void 0:i.id},deps:()=>this.root.open.current}),Me(()=>{if(!this.root.open.current)return;const{isPointerInTransit:i,onPointerExit:o}=ia(()=>this.root.triggerNode,()=>r(this,It).current);this.root.isPointerInTransit=i,o(()=>{this.root.handleClose()})}),Ge(()=>{this.root.clearTimeout()})}get snippetProps(){return f(r(this,he))}get props(){return f(r(this,ge))}}Ot=new WeakMap,It=new WeakMap,de=new WeakMap,ce=new WeakMap,ue=new WeakMap,he=new WeakMap,ge=new WeakMap;const[Da,Oe]=Ce("LinkPreview.Root");function Na(a){return Da(new Ia(a))}function za(a){return new La(a,Oe())}function Ea(a){return new Ra(a,Oe())}function ja(a,t){tt(t,!0);let e=u(t,"open",15,!1),i=u(t,"onOpenChange",3,Ke),o=u(t,"openDelay",3,700),h=u(t,"closeDelay",3,300),s=u(t,"controlledOpen",3,!1);Na({open:A.with(()=>e(),m=>{s()||e(m),i()(m)}),openDelay:A.with(()=>o()),closeDelay:A.with(()=>h())});var l=x(),y=_(l);bt(y,()=>Ve,(m,b)=>{b(m,{children:(k,v)=>{var P=x(),C=_(P);Y(C,()=>t.children??Rt),n(k,P)},$$slots:{default:!0}})}),n(a,l),et()}var Fa=L("<div><!></div>"),Ga=L("<div><!></div>"),Qa=L("<!> <!>",1);function Ba(a,t){tt(t,!0);let e=u(t,"id",19,$t),i=u(t,"ref",15,null),o=u(t,"side",3,"top"),h=u(t,"sideOffset",3,0),s=u(t,"align",3,"center"),l=u(t,"avoidCollisions",3,!0),y=u(t,"arrowPadding",3,0),m=u(t,"sticky",3,"partial"),b=u(t,"hideWhenDetached",3,!1),k=u(t,"collisionPadding",3,0),v=u(t,"forceMount",3,!1),P=nt(t,["$$slots","$$events","$$legacy","children","child","id","ref","side","sideOffset","align","avoidCollisions","arrowPadding","sticky","hideWhenDetached","collisionPadding","onInteractOutside","onEscapeKeydown","forceMount"]);const C=Ea({id:A.with(()=>e()),ref:A.with(()=>i(),E=>i(E))}),G=I(()=>({side:o(),sideOffset:h(),align:s(),avoidCollisions:l(),arrowPadding:y(),sticky:m(),hideWhenDetached:b(),collisionPadding:k()})),R=I(()=>wt(P,f(G),C.props));function O(E){var j;(j=t.onInteractOutside)==null||j.call(t,E),!E.defaultPrevented&&C.root.handleClose()}function U(E){var j;(j=t.onEscapeKeydown)==null||j.call(t,E),!E.defaultPrevented&&C.root.handleClose()}var st=x(),it=_(st);rt(it,v,E=>{We(E,V(()=>f(R),{get enabled(){return C.root.open.current},get id(){return e()},onInteractOutside:O,onEscapeKeydown:U,onOpenAutoFocus:X=>X.preventDefault(),onCloseAutoFocus:X=>X.preventDefault(),trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!0,popper:(X,at)=>{let ft=()=>at==null?void 0:at().props;var B=x();const H=I(()=>wt(ft(),{style:Pe("link-preview")}));var ot=_(B);rt(ot,()=>t.child,Z=>{var q=x(),w=_(q);Y(w,()=>t.child,()=>({props:f(H),...C.snippetProps})),n(Z,q)},Z=>{var q=Fa();let w;var T=c(q);Y(T,()=>t.children??Rt),d(q),F(()=>w=Lt(q,w,{...f(H)})),n(Z,q)}),n(X,B)},$$slots:{popper:!0}}))},E=>{var j=x(),X=_(j);rt(X,()=>!v(),at=>{Je(at,V(()=>f(R),{get present(){return C.root.open.current},get id(){return e()},onInteractOutside:O,onEscapeKeydown:U,onOpenAutoFocus:B=>B.preventDefault(),onCloseAutoFocus:B=>B.preventDefault(),trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!1,popper:(B,H)=>{let ot=()=>H==null?void 0:H().props;var Z=Qa();const q=I(()=>wt(ot(),{style:Pe("link-preview")}));var w=_(Z);rt(w,()=>t.child,S=>{var M=x(),N=_(M);Y(N,()=>t.child,()=>({props:f(q),...C.snippetProps})),n(S,M)},S=>{var M=Ga();let N;var mt=c(M);Y(mt,()=>t.children??Rt),d(M),F(()=>N=Lt(M,N,{...f(q)})),n(S,M)});var T=p(w,2);da(T,{onMountedChange:S=>C.root.contentMounted=S}),n(B,Z)},$$slots:{popper:!0}}))},null,!0),n(E,j)}),n(a,st),et()}var Ha=L("<a><!></a>");function qa(a,t){tt(t,!0);let e=u(t,"ref",15,null),i=u(t,"id",19,$t),o=nt(t,["$$slots","$$events","$$legacy","ref","id","child","children"]);const h=za({id:A.with(()=>i()),ref:A.with(()=>e(),m=>e(m))}),s=I(()=>wt(o,h.props));var l=x(),y=_(l);bt(y,()=>Ye,(m,b)=>{b(m,{get id(){return i()},children:(k,v)=>{var P=x(),C=_(P);rt(C,()=>t.child,G=>{var R=x(),O=_(R);Y(O,()=>t.child,()=>({props:f(s)})),n(G,R)},G=>{var R=Ha();let O;var U=c(R);Y(U,()=>t.children??Rt),d(R),F(()=>O=Lt(R,O,{...f(s)})),n(G,R)}),n(k,P)},$$slots:{default:!0}})}),n(a,l),et()}function Ka(a,t){tt(t,!0);let e=u(t,"ref",15,null),i=u(t,"loadingStatus",15,"loading"),o=nt(t,["$$slots","$$events","$$legacy","class","ref","loadingStatus"]);var h=x(),s=_(h),l=I(()=>fe("relative flex size-10 shrink-0 overflow-hidden rounded-full",t.class));bt(s,()=>Sa,(y,m)=>{m(y,V({get loadingStatus(){return i()},set loadingStatus(b){i(b)},get ref(){return e()},set ref(b){e(b)},get class(){return f(l)}},()=>o))}),n(a,h),et()}function Va(a,t){tt(t,!0);let e=u(t,"ref",15,null),i=nt(t,["$$slots","$$events","$$legacy","class","src","alt","ref"]);var o=x(),h=_(o),s=I(()=>fe("aspect-square h-full w-full",t.class));bt(h,()=>Ca,(l,y)=>{y(l,V({get ref(){return e()},set ref(m){e(m)},get src(){return t.src},get alt(){return t.alt},get class(){return f(s)}},()=>i))}),n(a,o),et()}function Ja(a,t){tt(t,!0);let e=u(t,"ref",15,null),i=nt(t,["$$slots","$$events","$$legacy","class","ref"]);var o=x(),h=_(o),s=I(()=>fe("bg-muted flex h-full w-full items-center justify-center rounded-full",t.class));bt(h,()=>Ma,(l,y)=>{y(l,V({get ref(){return e()},set ref(m){e(m)},get class(){return f(s)}},()=>i))}),n(a,o),et()}function Wa(a,t){const e=Dt(t,["children","$$slots","$$events","$$legacy"]);Nt(a,V({name:"github"},()=>e,{iconNode:[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]],children:(o,h)=>{var s=x(),l=_(s);zt(l,t,"default",{},null),n(o,s)},$$slots:{default:!0}}))}function Ya(a,t){const e=Dt(t,["children","$$slots","$$events","$$legacy"]);Nt(a,V({name:"send"},()=>e,{iconNode:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]],children:(o,h)=>{var s=x(),l=_(s);zt(l,t,"default",{},null),n(o,s)},$$slots:{default:!0}}))}function Ua(a,t){const e=Dt(t,["children","$$slots","$$events","$$legacy"]);Nt(a,V({name:"mail"},()=>e,{iconNode:[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]],children:(o,h)=>{var s=x(),l=_(s);zt(l,t,"default",{},null),n(o,s)},$$slots:{default:!0}}))}function Xa(a,t){const e=Dt(t,["children","$$slots","$$events","$$legacy"]);Nt(a,V({name:"youtube"},()=>e,{iconNode:[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]],children:(o,h)=>{var s=x(),l=_(s);zt(l,t,"default",{},null),n(o,s)},$$slots:{default:!0}}))}function Za(a,t){const e=Dt(t,["children","$$slots","$$events","$$legacy"]);Nt(a,V({name:"twitter"},()=>e,{iconNode:[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]],children:(o,h)=>{var s=x(),l=_(s);zt(l,t,"default",{},null),n(o,s)},$$slots:{default:!0}}))}function $a(a,t){const e=Dt(t,["children","$$slots","$$events","$$legacy"]);Nt(a,V({name:"instagram"},()=>e,{iconNode:[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]],children:(o,h)=>{var s=x(),l=_(s);zt(l,t,"default",{},null),n(o,s)},$$slots:{default:!0}}))}function tr(a,t){tt(t,!0);let e=u(t,"ref",15,null),i=u(t,"align",3,"center"),o=u(t,"sideOffset",3,4),h=nt(t,["$$slots","$$events","$$legacy","ref","class","align","sideOffset","portalProps"]);var s=x(),l=_(s);bt(l,()=>ca,(y,m)=>{m(y,V(()=>t.portalProps,{children:(b,k)=>{var v=x(),P=_(v),C=I(()=>fe("bg-popover text-popover-foreground z-50 w-64 rounded-md border p-4 shadow-md outline-none",t.class));bt(P,()=>Ba,(G,R)=>{R(G,V({get ref(){return e()},set ref(O){e(O)},get sideOffset(){return o()},get align(){return i()},get class(){return f(C)}},()=>h))}),n(b,v)},$$slots:{default:!0}}))}),n(a,s),et()}const er=ja,ar=qa;var rr=L("<!> <!>",1),ir=L('<div class="flex space-x-4"><!> <div><h4 class="text-sm font-semibold"> </h4> <p class="text-sm"> </p></div></div>'),nr=L("<!> <!>",1);function J(a,t){let e=u(t,"class",8,""),i=u(t,"link",8,"https://ma.cyou"),o=u(t,"name",8,"ma.cyou"),h=u(t,"img",8,"https://github.com/ma-cyou.png"),s=u(t,"fallback",8,"MA"),l=u(t,"title",8,"macyou"),y=u(t,"description",8,"Mapagmataas's website");er(a,{children:(m,b)=>{var k=nr(),v=_(k),P=ra(()=>`${(e()!==""?e()+" ":"")??""}rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black`);ar(v,{get href(){return i()},target:"_blank",rel:"noreferrer noopener",get class(){return f(P)},children:(G,R)=>{z();var O=te();F(()=>W(O,o())),n(G,O)},$$slots:{default:!0}});var C=p(v,2);tr(C,{class:"w-80",children:(G,R)=>{var O=ir(),U=c(O);Ka(U,{class:"my-auto h-12 w-12",children:(at,ft)=>{var B=rr(),H=_(B);Va(H,{get src(){return h()}});var ot=p(H,2);Ja(ot,{children:(Z,q)=>{z();var w=te();F(()=>W(w,s())),n(Z,w)},$$slots:{default:!0}}),n(at,B)},$$slots:{default:!0}});var st=p(U,2),it=c(st),E=c(it,!0);d(it);var j=p(it,2),X=c(j,!0);d(j),d(st),d(O),F(()=>{W(E,l()),W(X,y())}),n(G,O)},$$slots:{default:!0}}),n(m,k)},$$slots:{default:!0}})}var sr=L('<div class="flex items-center justify-center">Привет&nbsp; <button class="cursor-grab grayscale-[20%] hover:scale-110">👋</button> ,</div> <div class="ml-0 text-2xl sm:ml-2 sm:text-4xl md:text-5xl">я автор</div>',1),or=L('<div class="flex items-center justify-center">Hi&nbsp; <button class="cursor-grab grayscale-[20%] hover:scale-110">👋</button> ,</div> <div class="ml-0 text-2xl sm:ml-2 sm:text-4xl md:text-5xl">I am the author</div>',1),lr=L(`<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&amp;>li]:mt-2"><li><p>Меня зовут Тимофей, мой ник — "Mapagmataas". В настоящий момент я работаю в <!> лаборантом на <a href="https://ru.wikipedia.org/wiki/ВЭПП-2000" target="_blank">коллайдере частиц</a>. Основное направление моей деятельности — <a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer">full stack</a> разработка веб-сайтов для управления данными, приборами и различными системами.</p></li> <li><p>Я увлекаюсь веб-дизайном и front-end разработкой, постоянно нахожу новые решения и
								стремлюсь узнавать что-то новое, и не побоюсь сказать, что уверен в своих знаниях <a href="https://wikipedia.org/wiki/HTML" target="_blank">HTML</a>, <a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>, <a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a href="https://wikipedia.org/wiki/TypeScript" target="_blank">TypeScript</a>, в моем любимом фреймворке <!>, а также <!>. Меня также привлекает мир разработки игр, и я горю желанием попробовать себя в <a href="https://wikipedia.org/wiki/Video_game_development" target="_blank">game dev</a>. Я хорошо знаком с основами языков C-семейства (<a href="https://wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>, <a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>, <a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <!>), <a href="https://wikipedia.org/wiki/Memory_management" target="_blank">управлением памятью</a>, <a href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)" target="_blank">многопоточностью</a>, <a href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)" target="_blank">асинхронным программированием</a>.</p></li> <li><p>Также владею основами работы с <a href="https://wikipedia.org/wiki/Database" target="_blank">базами данных</a> — таких как <a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>, <a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>, <a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>, <a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>, <a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a> и <a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. Для
								повседневных задач я использую <!> или <!>, и хорошо знаком с множеством модулей и библиотек для этих языков.</p></li></ul> <blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">Главное, что я ищу в своей работе, — это интересные задачи и профессиональный рост.
						Однако при этом я не спешу и стремлюсь к качественному развитию.</blockquote>`,1),dr=L(`<ul class="my-4 ml-3 list-disc space-y-2 md:my-8 md:ml-6 md:space-y-4 [&amp;>li]:mt-2"><li><p>My name is Timofey, and my nickname is "Mapagmataas". Currently, I work as a lab
								technician at <!> at a <a href="https://wikipedia.org/wiki/Collider" target="_blank">particle collider</a>.
								My primary area of expertise is <a href="https://wikipedia.org/wiki/Solution_stack#Full-stack_developer">full stack</a> development of websites for managing data, instruments, and various systems.</p></li> <li><p>I am passionate about web design and front-end development, always looking for new
								solutions and eager to learn new things. I am confident in my knowledge of <a href="https://wikipedia.org/wiki/HTML" target="_blank">HTML</a>, <a href="https://wikipedia.org/wiki/CSS" target="_blank">CSS</a>, <a href="https://wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>/<a href="https://wikipedia.org/wiki/TypeScript" target="_blank">TypeScript</a>, my favorite framework <!>, and also <!>. I am also drawn to the world of game development and am eager to explore
								opportunities in <a href="https://wikipedia.org/wiki/Video_game_development" target="_blank">game dev</a>. I am familiar with the basics of C-family languages (<a href="https://wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>, <a href="https://wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>, <a href="https://wikipedia.org/wiki/C++" target="_blank">C++</a>, <!>), <a href="https://wikipedia.org/wiki/Memory_management" target="_blank">memory management</a>, <a href="https://wikipedia.org/wiki/Multithreading_(computer_architecture)" target="_blank">multithreading</a>, and <a href="https://wikipedia.org/wiki/Asynchrony_(computer_programming)" target="_blank">asynchronous programming</a>.</p></li> <li><p>I also have a strong foundation in working with <a href="https://wikipedia.org/wiki/Database" target="_blank">databases</a> such as <a href="https://wikipedia.org/wiki/PostgreSQL" target="_blank">PostgreSQL</a>, <a href="https://wikipedia.org/wiki/MySQL" target="_blank">MySQL</a>, <a href="https://wikipedia.org/wiki/SQLite" target="_blank">SQLite</a>, <a href="https://wikipedia.org/wiki/SQLAlchemy" target="_blank">SQLAlchemy</a>, <a href="https://wikipedia.org/wiki/Redis" target="_blank">Redis</a>, and <a href="https://wikipedia.org/wiki/MongoDB" target="_blank">MongoDB</a>. For
								everyday tasks, I use <!> or <!>, and I am well-versed in many modules and libraries for these languages.</p></li></ul> <blockquote class="mt-6 border-l-2 border-muted-foreground pl-6 italic md:mt-10">The most important thing I seek in my work is interesting challenges and professional
						growth. However, I am not in a hurry; I strive for quality development.</blockquote>`,1),cr=L("<p> </p>"),ur=L("<!> <!>",1),hr=L('<div class="flex w-48 cursor-auto flex-row items-center justify-start gap-2 rounded-lg bg-foreground text-background shadow-lg backdrop-blur-sm"><!> <p> </p></div>'),gr=L('<div class="w-full snap-y snap-mandatory justify-center overflow-y-scroll scroll-smooth bg-gradient-to-br from-white to-sky-200 dark:from-sky-800 dark:to-black"><section class="relative flex snap-start items-center justify-center"><div class="text-center"><h1 class="block items-center justify-center text-3xl font-bold sm:flex sm:text-4xl md:text-5xl"><!></h1> <p class="mt-2 text-base sm:mt-5 md:text-lg"> </p> <img src="/author.png"> <div class="mt-5 flex flex-col items-center justify-center sm:mt-10 md:flex-row"><!> <!></div></div></section> <section id="about" class="relative z-10 flex snap-start flex-col items-center justify-center text-xs leading-normal tracking-tight md:text-base md:leading-relaxed md:tracking-normal"><div class="container z-10 max-h-full"><h1 class="scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"> </h1> <div class="mt-0 md:mt-6"><!></div></div></section> <section id="socials" class="relative flex snap-start flex-col items-center justify-center"><h2 class="text-4xl font-bold"> </h2> <div class="mt-5 grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"></div> <div id="legal" class="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-1 p-2 pb-3 text-xs text-muted-foreground backdrop-blur-sm md:flex-row md:gap-1 md:px-4 md:py-3"><p>© <a class="hover:text-foreground" href="https://ma.cyou/">ma.cyou</a> (<a class="hover:text-foreground" href="https://github.com/mapagmataas1331/">Mapagmataas</a>)</p> <p> </p></div></section></div>');function wr(a,t){tt(t,!1);const e=ze(),i=()=>Se($e,"$language",e),o=()=>Se(ua,"$theme",e),h=[["https://github.com/mapagmataas1331/",Wa,"Mapagmataas1331","GitHub"],["https://t.me/mapagmataas/",Ya,"Mapagmataas","Telegram"],["mailto:dev@ma.cyou",Ua,"dev@ma.cyou","Email"],["https://youtube.com/@mapagmataas/",Xa,"Mapagmataas","Youtube"],["https://Twitter.com/mapagmataas/",Za,"Mapagmataas","Twitter"],["https://instagram.com/mapagmataas/",$a,"Mapagmataas","Instagram"]],s=w=>{ha("Hello world!"),w.innerHTML="👀",setTimeout(()=>w.style.transform="scaleX(-1)",500),setTimeout(()=>w.style.transform="",1e3),setTimeout(()=>w.innerHTML="👋",1500)};Ue();var l=gr(),y=c(l),m=c(y),b=c(m),k=c(b);rt(k,()=>i()==="ru",w=>{var T=sr(),S=_(T),M=p(c(S));z(),d(S),z(2),xe("click",M,N=>s(N.target)),n(w,T)},w=>{var T=or(),S=_(T),M=p(c(S));z(),d(S),z(2),xe("click",M,N=>s(N.target)),n(w,T)}),d(b);var v=p(b,2),P=c(v,!0);d(v);var C=p(v,2),G=p(C,2),R=c(G);ve(R,{href:"#about",variant:"default",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(w,T)=>{z();var S=te();F(()=>W(S,i()==="ru"?"Больше обо мне":"More about me")),n(w,S)},$$slots:{default:!0}});var O=p(R,2);ve(O,{href:"#socials",variant:"default",class:"m-2 min-w-48 font-semibold shadow-lg hover:scale-105",children:(w,T)=>{z();var S=te();F(()=>W(S,i()==="ru"?"Мои Соц. сети":"My Social links")),n(w,S)},$$slots:{default:!0}}),d(G),d(m),d(y);var U=p(y,2),st=c(U),it=c(st),E=c(it,!0);d(it);var j=p(it,2),X=c(j);rt(X,()=>i()==="ru",w=>{var T=lr(),S=_(T),M=c(S),N=c(M),mt=p(c(N));J(mt,{class:"font-semibold italic",link:"https://www.inp.nsk.su/",name:"ИЯФ",img:"https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif",fallback:"ИЯФ",title:"ИЯФ СО РАН",description:"Институт ядерной физики имени Г. И. Будкера СО РАН"}),z(5),d(N),d(M);var $=p(M,2),lt=c($),dt=p(c(lt),9);J(dt,{class:"font-semibold italic",link:"https://svelte.dev/",name:"Svelte",img:"https://github.com/sveltejs.png",fallback:"SK",title:"SVELTE",description:"Кибернетически улучшенные веб-приложения."});var vt=p(dt,2);J(vt,{class:"font-semibold italic",link:"https://react.dev/",name:"React",img:"https://github.com/reactjs.png",fallback:"RC",title:"React",description:"Библиотека для создания пользовательских интерфейсов."});var Et=p(vt,10);J(Et,{class:"font-semibold italic",link:"https://www.rust-lang.org/",name:"Rust",img:"https://github.com/rust-lang.png",fallback:"RT",title:"Rust",description:"Язык, расширяющий возможности каждого для создания надежного и эффективного программного обеспечения."}),z(7),d(lt),d($);var yt=p($,2),pt=c(yt),xt=p(c(pt),15);J(xt,{class:"font-semibold italic",link:"https://www.python.org/",name:"Python",img:"https://github.com/python.png",fallback:"PY",title:"Python",description:"язык программирования, который позволяет работать быстро и более эффективно интегрировать программы."});var St=p(xt,2);J(St,{class:"font-semibold italic",link:"https://go.dev/",name:"Golang",img:"https://github.com/golang.png",fallback:"GO",title:"GO",description:"Создавайте простые, безопасные и масштабируемые программы с помощью Go."}),z(),d(pt),d(yt),d(S),z(2),n(w,T)},w=>{var T=dr(),S=_(T),M=c(S),N=c(M),mt=p(c(N));J(mt,{class:"font-semibold italic",link:"https://www.inp.nsk.su/",name:"BINP",img:"https://inp.nsk.su/images/logo/OfficiallogoBINPblueClear.gif",fallback:"BINP",title:"Budker Institute of Nuclear Physics",description:"G. I. Budker Institute of Nuclear Physics SB RAS"}),z(5),d(N),d(M);var $=p(M,2),lt=c($),dt=p(c(lt),9);J(dt,{class:"font-semibold italic",link:"https://svelte.dev/",name:"Svelte",img:"https://github.com/sveltejs.png",fallback:"SK",title:"SVELTE",description:"Cybernetically enhanced web apps."});var vt=p(dt,2);J(vt,{class:"font-semibold italic",link:"https://react.dev/",name:"React",img:"https://github.com/reactjs.png",fallback:"RC",title:"React",description:"A JavaScript library for building user interfaces."});var Et=p(vt,10);J(Et,{class:"font-semibold italic",link:"https://www.rust-lang.org/",name:"Rust",img:"https://github.com/rust-lang.png",fallback:"RT",title:"Rust",description:"A language empowering everyone to build reliable and efficient software."}),z(7),d(lt),d($);var yt=p($,2),pt=c(yt),xt=p(c(pt),15);J(xt,{class:"font-semibold italic",link:"https://www.python.org/",name:"Python",img:"https://github.com/python.png",fallback:"PY",title:"Python",description:"A programming language that lets you work quickly and integrate systems more effectively."});var St=p(xt,2);J(St,{class:"font-semibold italic",link:"https://go.dev/",name:"Golang",img:"https://github.com/golang.png",fallback:"GO",title:"Go",description:"Create fast, reliable, and scalable programs with Go."}),z(),d(pt),d(yt),d(S),z(2),n(w,T)}),d(j),d(st),d(U);var at=p(U,2),ft=c(at),B=c(ft,!0);d(ft);var H=p(ft,2);Xe(H,5,()=>h,Ze,(w,T)=>{let S=()=>f(T)[0],M=()=>f(T)[1],N=()=>f(T)[2],mt=()=>f(T)[3];var $=hr(),lt=c($);na(lt,{children:(Et,yt)=>{sa(Et,{children:(pt,xt)=>{var St=ur(),ke=_(St);oa(ke,{children:(me,Le)=>{ve(me,{get href(){return S()},variant:"default",size:"icon",target:"_blank",class:"font-bold hover:scale-110 hover:shadow-[0px_0px_8px_2px] hover:shadow-foreground/50",children:(jt,we)=>{M()(jt,{class:"!size-5 stroke-[] dark:stroke-[]"})},$$slots:{default:!0}})},$$slots:{default:!0}});var Ie=p(ke,2);la(Ie,{children:(me,Le)=>{var jt=cr(),we=c(jt,!0);d(jt),F(()=>W(we,mt())),n(me,jt)},$$slots:{default:!0}}),n(pt,St)},$$slots:{default:!0}})},$$slots:{default:!0}});var dt=p(lt,2),vt=c(dt,!0);d(dt),d($),F(()=>W(vt,N())),n(w,$)}),d(H);var ot=p(H,2),Z=p(c(ot),2),q=c(Z);F(()=>W(q,`2023 - ${new Date().getFullYear()??""}. ${(i()==="ru"?"Все права защищены.":"All rights reserved.")??""}`)),d(Z),d(ot),d(at),d(l),F(()=>{W(P,i()==="ru"?"Веб-разработчик и дизайнер":"Web developer and designer"),ta(C,"alt",i()==="ru"?"Фото Aвтора":"Author's photo"),ea(C,`mx-auto mt-5 flex h-full max-h-[calc((100dvh_-_3.5rem)_/_2)] min-h-48 items-center justify-center rounded-3xl shadow-xl transition-transform hover:scale-105 sm:mt-10 md:max-h-[calc((100dvh_-_4rem)_/_2)] ${(o()==="dark"?"pattern-light":"pattern")??""}`),W(E,i()==="ru"?"Обо мне":"About me"),W(B,i()==="ru"?"Мои Соц. сети":"My Social links")}),n(a,l),et()}export{wr as component};
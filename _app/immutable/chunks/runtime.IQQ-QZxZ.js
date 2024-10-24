var Rn=Array.isArray,gn=Array.from,Nn=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Dn=Object.prototype,Cn=Array.prototype,Zt=Object.getPrototypeOf;function kn(t){return typeof t=="function"}const Pn=()=>{};function bn(t){return t()}function zt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,vt=4,H=8,X=16,w=32,Z=64,R=128,U=256,p=512,x=1024,P=2048,k=4096,Y=8192,Jt=16384,pt=32768,Fn=65536,Qt=1<<18,ht=1<<19,it=Symbol("$state"),Ln=Symbol("");function dt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Et(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function tn(){throw new Error("effect_in_unowned_derived")}function nn(t){throw new Error("effect_orphan")}function rn(){throw new Error("effect_update_depth_exceeded")}function Mn(){throw new Error("hydration_failed")}function qn(t){throw new Error("props_invalid_value")}function Hn(){throw new Error("state_descriptors_fixed")}function Yn(){throw new Error("state_prototype_fixed")}function en(){throw new Error("state_unsafe_local_read")}function an(){throw new Error("state_unsafe_mutation")}function tt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function jn(t){return yt(tt(t))}function sn(t,n=!1){var e;const r=tt(t);return n||(r.equals=Et),l!==null&&l.l!==null&&((e=l.l).s??(e.s=[])).push(r),r}function Bn(t,n=!1){return yt(sn(t,n))}function yt(t){return i!==null&&i.f&m&&(y===null?wn([t]):y.push(t)),t}function Un(t,n){return nt(t,Gt(()=>ot(t))),n}function nt(t,n){return i!==null&&st()&&i.f&(m|X)&&(y===null||!y.includes(t))&&an(),on(t,n)}function on(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),wt(t,x),st()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(E(u,x),z(u)):I===null?Tn([t]):I.push(t))),n}function wt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),a=r.length,s=0;s<a;s++){var o=r[s],f=o.f;f&x||!e&&o===u||(E(o,n),f&(p|R)&&(f&m?wt(o,P):z(o)))}}const Vn=1,Gn=2,Kn=4,$n=8,Zn=16,zn=1,Jn=2,Qn=4,Wn=8,Xn=16,tr=1,nr=2,rr=4,er=1,ar=2,un="[",ln="[!",fn="]",Tt={},sr=Symbol(),or="http://www.w3.org/2000/svg";function mt(t){console.warn("hydration_mismatch")}let O=!1;function ur(t){O=t}let d;function V(t){if(t===null)throw mt(),Tt;return d=t}function lr(){return V(g(d))}function ir(t){if(O){if(g(d)!==null)throw mt(),Tt;d=t}}function fr(t=1){if(O){for(var n=t,r=d;n--;)r=g(r);d=r}}function _r(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===ln)&&(t+=1)}var e=g(n);n.remove(),n=e}}var ft,At,It;function cr(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;At=lt(n,"firstChild").get,It=lt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function xt(t=""){return document.createTextNode(t)}function J(t){return At.call(t)}function g(t){return It.call(t)}function vr(t){if(!O)return J(t);var n=J(d);return n===null&&(n=d.appendChild(xt())),V(n),n}function pr(t,n){if(!O){var r=J(t);return r instanceof Comment&&r.data===""?g(r):r}return d}function hr(t,n=1,r=!1){let e=O?d:t;for(;n--;)e=g(e);if(!O)return e;var a=e.nodeType;if(r&&a!==3){var s=xt();return e==null||e.before(s),V(s),s}return V(e),e}function dr(t){t.textContent=""}function _n(t){var n=m|x;u===null?n|=R:u.f|=ht;const r={children:null,ctx:l,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(i!==null&&i.f&m){var e=i;(e.children??(e.children=[])).push(r)}return r}function Er(t){const n=_n(t);return n.equals=Et,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?rt(e):F(e)}}}function Ot(t){var n,r=u;$(t.parent);try{St(t),n=Yt(t)}finally{$(r)}return n}function Rt(t){var n=Ot(t),r=(N||t.f&R)&&t.deps!==null?P:p;E(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function rt(t){St(t),q(t,0),E(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function gt(t){u===null&&i===null&&nn(),i!==null&&i.f&R&&tn(),at&&Xt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var a=(t&Z)!==0,s=u,o={ctx:l,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{_t(!0),j(o),o.f|=Jt}catch(c){throw F(o),c}finally{_t(f)}}else n!==null&&z(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ht)===0;if(!T&&!a&&e&&(s!==null&&cn(o,s),i!==null&&i.f&m)){var A=i;(A.children??(A.children=[])).push(o)}return o}function yr(t){const n=b(H,null,!1);return E(n,p),n.teardown=t,n}function wr(t){gt();var n=u!==null&&(u.f&w)!==0&&l!==null&&!l.m;if(n){var r=l;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Nt(t);return e}}function Tr(t){return gt(),et(t)}function mr(t){const n=b(Z,t,!0);return()=>{F(n)}}function Nt(t){return b(vt,t,!1)}function Ar(t,n){var r=l,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=et(()=>{t(),!e.ran&&(e.ran=!0,nt(r.l.r2,!0),Gt(n))})}function Ir(){var t=l;et(()=>{if(ot(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,P),L(r)&&j(r),n.ran=!1}t.l.r2.v=!1}})}function et(t){return b(H,t,!0)}function xr(t){return vn(t)}function vn(t,n=0){return b(H|X|n,t,!0)}function Sr(t,n=!0){return b(H|w,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=at,e=i;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Qt)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var s=e===a?null:g(e);e.remove(),e=s}r=!0}Ct(t),kt(t,n&&!r),q(t,0),E(t,Y);var o=t.transitions;if(o!==null)for(const T of o)T.stop();Dt(t);var f=t.parent;f!==null&&f.first!==null&&Pt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Pt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Or(t,n){var r=[];bt(t,r,!0),hn(r,()=>{F(t),n&&n()})}function hn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function bt(t,n,r){if(!(t.f&k)){if(t.f^=k,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var a=e.next,s=(e.f&pt)!==0||(e.f&w)!==0;bt(e,n,s?r:!1),e=a}}}function Rr(t){Ft(t,!0)}function Ft(t,n){if(t.f&k){t.f^=k,L(t)&&j(t);for(var r=t.first;r!==null;){var e=r.next,a=(r.f&pt)!==0||(r.f&w)!==0;Ft(r,a?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let G=!1,Q=[];function Lt(){G=!1;const t=Q.slice();Q=[],zt(t)}function gr(t){G||(G=!0,queueMicrotask(Lt)),Q.push(t)}function dn(){G&&Lt()}function Nr(){throw new Error("invalid_default_snippet")}function En(t){throw new Error("lifecycle_outside_component")}const Mt=0,yn=1;let B=Mt,M=!1,D=!1,at=!1;function _t(t){D=t}function ct(t){at=t}let S=[],C=0;let i=null;function K(t){i=t}let u=null;function $(t){u=t}let y=null;function wn(t){y=t}let _=null,h=0,I=null;function Tn(t){I=t}let qt=0,N=!1,l=null;function Ht(){return++qt}function st(){return l!==null&&l.l===null}function L(t){var o,f;var n=t.f;if(n&x)return!0;if(n&P){var r=t.deps,e=(n&R)!==0;if(r!==null){var a;if(n&U){for(a=0;a<r.length;a++)((o=r[a]).reactions??(o.reactions=[])).push(t);t.f^=U}for(a=0;a<r.length;a++){var s=r[a];if(L(s)&&Rt(s),e&&u!==null&&!N&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}e||E(t,p)}return!1}function mn(t,n,r){throw t}function Yt(t){var ut;var n=_,r=h,e=I,a=i,s=N,o=y,f=l,T=t.f;_=null,h=0,I=null,i=T&(w|Z)?null:t,N=!D&&(T&R)!==0,y=null,l=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(q(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!N)for(v=h;v<c.length;v++)((ut=c[v]).reactions??(ut.reactions=[])).push(t)}else c!==null&&h<c.length&&(q(t,h),c.length=h);return A}finally{_=n,h=r,I=e,i=a,N=s,y=o,l=f}}function An(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,P),n.f&(R|U)||(n.f^=U),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)An(t,r[e])}function j(t){var n=t.f;if(!(n&Y)){E(t,p);var r=u;u=t;try{Ct(t),n&X?pn(t):kt(t),Dt(t);var e=Yt(t);t.teardown=typeof e=="function"?e:null,t.version=qt}catch(a){mn(a)}finally{u=r}}}function jt(){C>1e3&&(C=0,rn()),C++}function Bt(t){var n=t.length;if(n!==0){jt();var r=D;D=!0;try{for(var e=0;e<n;e++){var a=t[e];a.f&p||(a.f^=p);var s=[];Ut(a,s),In(s)}}finally{D=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|k))&&L(e)&&(j(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Pt(e):e.fn=null))}}function xn(){if(M=!1,C>1001)return;const t=S;S=[],Bt(t),M||(C=0)}function z(t){B===Mt&&(M||(M=!0,queueMicrotask(xn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|w)){if(!(r&p))return;n.f^=p}}S.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var a=r.f,s=(a&w)!==0,o=s&&(a&p)!==0;if(!o&&!(a&k))if(a&H){s?r.f^=p:L(r)&&j(r);var f=r.first;if(f!==null){r=f;continue}}else a&vt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)f=e[c],n.push(f),Ut(f,n)}function Vt(t){var n=B,r=S;try{jt();const a=[];B=yn,S=a,M=!1,Bt(r);var e=t==null?void 0:t();return dn(),(S.length>0||a.length>0)&&Vt(),C=0,e}finally{B=n,S=r}}async function Dr(){await Promise.resolve(),Vt()}function ot(t){var f;var n=t.f,r=(n&m)!==0;if(r&&n&Y){var e=Ot(t);return rt(t),e}if(i!==null){y!==null&&y.includes(t)&&en();var a=i.deps;_===null&&a!==null&&a[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&u!==null&&u.f&p&&!(u.f&w)&&I.includes(t)&&(E(u,x),z(u))}else if(r&&t.deps===null){var s=t,o=s.parent;o!==null&&!((f=o.deriveds)!=null&&f.includes(s))&&(o.deriveds??(o.deriveds=[])).push(s)}return r&&(s=t,L(s)&&Rt(s)),t.v}function Gt(t){const n=i;try{return i=null,t()}finally{i=n}}const Sn=~(x|P|p);function E(t,n){t.f=t.f&Sn|n}function Cr(t){return Kt().get(t)}function kr(t,n){return Kt().set(t,n),n}function Kt(t){return l===null&&En(),l.c??(l.c=new Map(On(l)||void 0))}function On(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Pr(t,n=1){var r=+ot(t);return nt(t,r+n),r}function br(t,n=!1,r){l={p:l,c:null,e:null,m:!1,s:t,x:null,l:null},n||(l.l={s:null,u:null,r1:[],r2:tt(!1)})}function Fr(t){const n=l;if(n!==null){const o=n.e;if(o!==null){var r=u,e=i;n.e=null;try{for(var a=0;a<o.length;a++){var s=o[a];$(s.effect),K(s.reaction),Nt(s.fn)}}finally{$(r),K(e)}}l=n.p,n.m=!0}return{}}function Lr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)W(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&W(r)}}}function W(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{W(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let a in e){const s=e[a].get;if(s)try{s.call(t)}catch{}}}}}export{xt as $,sn as A,Tr as B,wr as C,Dr as D,pt as E,jn as F,_n as G,kr as H,Cr as I,Lr as J,Nt as K,Dn as L,Cn as M,tt as N,Hn as O,lt as P,u as Q,Yn as R,it as S,Zt as T,sr as U,Rn as V,yr as W,gr as X,K as Y,$ as Z,i as _,lr as a,J as a0,er as a1,ar as a2,V as a3,cr as a4,un as a5,g as a6,Tt as a7,ur as a8,fn as a9,Vn as aA,on as aB,Gn as aC,Zn as aD,bt as aE,hn as aF,F as aG,Kn as aH,$n as aI,or as aJ,Ln as aK,$t as aL,X as aM,Jt as aN,tr as aO,nr as aP,rr as aQ,bn as aR,Un as aS,mt as aa,Mn as ab,dr as ac,gn as ad,mr as ae,l as af,Rr as ag,ln as ah,_r as ai,et as aj,Gt as ak,qn as al,Fn as am,Qn as an,Et as ao,Pr as ap,kn as aq,w as ar,Z as as,zn as at,Jn as au,Wn as av,Y as aw,Xn as ax,En as ay,k as az,vn as b,Sr as c,d,br as e,pr as f,Ir as g,O as h,Fr as i,hr as j,vr as k,Ar as l,ir as m,Pn as n,fr as o,Or as p,Nr as q,zt as r,Wt as s,xr as t,ot as u,nt as v,Er as w,Bn as x,Vt as y,Nn as z};

import{s as I,q as j,S as P,a as v,f as T,c as y,g as C,h as M,d as p,j as S,i as g,M as V,a0 as U,U as W,V as x,W as z,l as A,m as B,p as F}from"./scheduler.8332e04c.js";import{S as G,i as H,f as J,b as k,d as q,m as w,a as d,t as $,e as D}from"./index.d6058768.js";import{M as K}from"./MainTitle.0e8f584b.js";import{T as L}from"./TabTitle.a3dde992.js";function N(l){let e;return{c(){e=A(l[0])},l(a){e=B(a,l[0])},m(a,r){g(a,e,r)},p(a,r){r&1&&F(e,a[0])},d(a){a&&p(e)}}}function O(l){let e,a,r,f,i,_,n,m;function E(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new L({props:b}),j.push(()=>J(e,"title",E)),i=new K({props:{$$slots:{default:[N]},$$scope:{ctx:l}}});const u=l[1].default,o=P(u,l,l[3],null);return{c(){k(e.$$.fragment),r=v(),f=T("div"),k(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){q(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var s=M(f);q(i.$$.fragment,s),_=y(s),n=C(s,"DIV",{class:!0});var c=M(n);o&&o.l(c),c.forEach(p),s.forEach(p),this.h()},h(){S(n,"class","flex flex-col gap-5"),S(f,"class","flex-1 flex flex-col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,s){w(e,t,s),g(t,r,s),g(t,f,s),w(i,f,null),V(f,_),V(f,n),o&&o.m(n,null),m=!0},p(t,[s]){const c={};!a&&s&1&&(a=!0,c.title=t[0],U(()=>a=!1)),e.$set(c);const h={};s&9&&(h.$$scope={dirty:s,ctx:t}),i.$set(h),o&&o.p&&(!m||s&8)&&W(o,u,t,t[3],m?z(u,t[3],s,null):x(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),D(e,t),D(i),o&&o.d(t)}}}function Q(l,e,a){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,a(0,i)}return l.$$set=n=>{"title"in n&&a(0,i=n.title),"$$scope"in n&&a(3,f=n.$$scope)},[i,r,_,f]}class tt extends G{constructor(e){super(),H(this,e,Q,O,I,{title:0})}}export{tt as C};
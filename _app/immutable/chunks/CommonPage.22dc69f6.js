import{s as V,q as j,O,a as v,f as T,c as y,g as C,h as I,d as p,j as S,i as g,I as k,Y as P,Q,R,S as Y,l as x,m as z,p as A}from"./scheduler.e949bcc4.js";import{S as B,i as F,f as G,b as q,d as w,m as D,a as d,t as $,e as E}from"./index.42c33976.js";import{M as H}from"./MainTitle.b7718d98.js";import{T as J}from"./TabTitle.ea097fe5.js";function K(l){let e;return{c(){e=x(l[0])},l(s){e=z(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&A(e,s[0])},d(s){s&&p(e)}}}function L(l){let e,s,r,f,i,_,n,m;function M(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new J({props:b}),j.push(()=>G(e,"title",M)),i=new H({props:{$$slots:{default:[K]},$$scope:{ctx:l}}});const u=l[1].default,o=O(u,l,l[3],null);return{c(){q(e.$$.fragment),r=v(),f=T("div"),q(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){w(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var a=I(f);w(i.$$.fragment,a),_=y(a),n=C(a,"DIV",{class:!0});var c=I(n);o&&o.l(c),c.forEach(p),a.forEach(p),this.h()},h(){S(n,"class","flex flex-col gap-5"),S(f,"class","flex-1 flex flex-col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){D(e,t,a),g(t,r,a),g(t,f,a),D(i,f,null),k(f,_),k(f,n),o&&o.m(n,null),m=!0},p(t,[a]){const c={};!s&&a&1&&(s=!0,c.title=t[0],P(()=>s=!1)),e.$set(c);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!m||a&8)&&Q(o,u,t,t[3],m?Y(u,t[3],a,null):R(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),E(e,t),E(i),o&&o.d(t)}}}function N(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,_,f]}class tt extends B{constructor(e){super(),F(this,e,N,L,V,{title:0})}}export{tt as C};

import{s as V,f as h,g as _,h as d,d as i,j as f,i as v,n as R,l as j,a as N,m as A,c as O,I as $}from"../chunks/scheduler.e949bcc4.js";import{S as q,i as z,b as k,d as E,m as C,a as b,t as y,e as D}from"../chunks/index.42c33976.js";import{C as S}from"../chunks/Chip.afd08144.js";import{C as B}from"../chunks/CommonPage.2ead3d35.js";import{R as J,A as F}from"../chunks/params.0335a4ed.js";function M(c){let e,a;return e=new S({props:{label:"Ooops! no CV at the moment."}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){C(e,t,o),a=!0},p:R,i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function T(c){let e,a,t,o,l,p,u,r,n,g;return n=new S({props:{label:"Download",size:"1.25em"}}),{c(){e=h("div"),a=h("object"),t=h("p"),o=j("It appears you don't have a PDF plugin for this browser. No biggie... you can "),l=h("a"),p=j("click here to download the PDF file."),u=N(),r=h("a"),k(n.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var m=d(e);a=_(m,"OBJECT",{data:!0,type:!0,width:!0,height:!0});var P=d(a);t=_(P,"P",{});var w=d(t);o=A(w,"It appears you don't have a PDF plugin for this browser. No biggie... you can "),l=_(w,"A",{href:!0});var x=d(l);p=A(x,"click here to download the PDF file."),x.forEach(i),w.forEach(i),P.forEach(i),m.forEach(i),u=O(s),r=_(s,"A",{href:!0,class:!0});var I=d(r);E(n.$$.fragment,I),I.forEach(i),this.h()},h(){f(l,"href",F.Resume),f(a,"data",F.Resume),f(a,"type","application/pdf"),f(a,"width","100%"),f(a,"height","600px"),f(e,"class","pdf-container"),f(r,"href",c[0]),f(r,"class","svelte-wl30ce")},m(s,m){v(s,e,m),$(e,a),$(a,t),$(t,o),$(t,l),$(l,p),v(s,u,m),v(s,r,m),C(n,r,null),g=!0},p:R,i(s){g||(b(n.$$.fragment,s),g=!0)},o(s){y(n.$$.fragment,s),g=!1},d(s){s&&(i(e),i(u),i(r)),D(n)}}}function U(c){let e,a,t,o;const l=[T,M],p=[];function u(r,n){return r[0]?0:1}return a=u(c),t=p[a]=l[a](c),{c(){e=h("div"),t.c(),this.h()},l(r){e=_(r,"DIV",{class:!0});var n=d(e);t.l(n),n.forEach(i),this.h()},h(){f(e,"class","resume svelte-wl30ce")},m(r,n){v(r,e,n),p[a].m(e,null),o=!0},p(r,n){t.p(r,n)},i(r){o||(b(t),o=!0)},o(r){y(t),o=!1},d(r){r&&i(e),p[a].d()}}}function G(c){let e,a;return e=new B({props:{title:c[1],$$slots:{default:[U]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,o){C(e,t,o),a=!0},p(t,[o]){const l={};o&4&&(l.$$scope={dirty:o,ctx:t}),e.$set(l)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){D(e,t)}}}function H(c){const{item:e,title:a}=J;return[e,a]}class Y extends q{constructor(e){super(),z(this,e,H,G,V,{})}}export{Y as component};

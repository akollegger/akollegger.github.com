import{S as a,i as t,s,e as o,t as e,a as r,c as i,b as n,d as c,f as p,g as l,h,j as d,k as u,l as f,q as S,m as w,n as g,o as m,p as v,r as x,u as b}from"./client.cc06932c.js";function E(a){const t=a-1;return t*t*t+1}function T(a,{delay:t=0,duration:s=400,easing:o=E}){const e=getComputedStyle(a),r=+e.opacity,i=parseFloat(e.height),n=parseFloat(e.paddingTop),c=parseFloat(e.paddingBottom),p=parseFloat(e.marginTop),l=parseFloat(e.marginBottom),h=parseFloat(e.borderTopWidth),d=parseFloat(e.borderBottomWidth);return{delay:t,duration:s,easing:o,css:a=>`overflow: hidden;opacity: ${Math.min(20*a,1)*r};height: ${a*i}px;padding-top: ${a*n}px;padding-bottom: ${a*c}px;margin-top: ${a*p}px;margin-bottom: ${a*l}px;border-top-width: ${a*h}px;border-bottom-width: ${a*d}px;`}}function y(a){let t,s,S,w,g,m,v,b;return{c(){t=o("div"),s=o("h2"),S=e("Great success!"),w=r(),g=o("img"),this.h()},l(a){t=i(a,"DIV",{class:!0});var o=n(t);s=i(o,"H2",{class:!0});var e=n(s);S=c(e,"Great success!"),e.forEach(p),w=l(o),g=i(o,"IMG",{class:!0,src:!0,alt:!0}),o.forEach(p),this.h()},h(){h(s,"class","text-7xl text-gray-600 mb-10 uppercase font-bold"),h(g,"class","min-w-full"),g.src!==(m="success.jpg")&&h(g,"src","success.jpg"),h(g,"alt","wovaweewa!"),h(t,"class","text-center bg-gray-200 p-20")},m(a,o){d(a,t,o),u(t,s),u(s,S),u(t,w),u(t,g),b=!0},i(a){b||(a&&x((()=>{v||(v=f(t,T,{},!0)),v.run(1)})),b=!0)},o(a){a&&(v||(v=f(t,T,{},!1)),v.run(0)),b=!1},d(a){a&&p(t),a&&v&&v.end()}}}function C(a){let t,s,f,x,E,T,C,P,G,$,k,F,R,j,B,N,O,I,D,V,A,H,M,W,Y,q,U,z,J,K,L,Q,X,Z,_,aa,ta,sa,oa,ea,ra,ia,na,ca=a[0]&&y();return{c(){t=r(),s=o("div"),f=o("div"),x=o("h2"),E=e("Sapper Boilerplate"),T=r(),C=o("p"),P=e("with\n      "),G=o("strong"),$=e("PostCSS"),k=e("\n      and\n      "),F=o("strong"),R=e("Tailwind CSS"),j=r(),B=o("p"),N=e("This is a working example of a\n    "),O=o("strong"),I=e("Sapper"),D=e("\n    app with the easiest\n    "),V=o("strong"),A=e("PostCSS"),H=e("\n    +\n    "),M=o("strong"),W=e("Tailwind CSS"),Y=e("\n    setup."),q=r(),U=o("p"),z=e("You can find the code at\n    "),J=o("a"),K=e("github.com/codechips/sapper-with-postcss-and-tailwind"),L=r(),Q=o("p"),X=e("Read the blog post if you want to know all the juicy details 🍊"),Z=r(),_=o("p"),aa=o("a"),ta=e("Solid Sapper setup with PostCSS and Tailwind"),sa=r(),ca&&ca.c(),oa=r(),ea=o("button"),ra=e("don't press this button.\n    seriously."),this.h()},l(a){S('[data-svelte="svelte-1hxgo4w"]',document.head).forEach(p),t=l(a),s=i(a,"DIV",{class:!0});var o=n(s);f=i(o,"DIV",{});var e=n(f);x=i(e,"H2",{class:!0});var r=n(x);E=c(r,"Sapper Boilerplate"),r.forEach(p),T=l(e),C=i(e,"P",{class:!0});var h=n(C);P=c(h,"with\n      "),G=i(h,"STRONG",{});var d=n(G);$=c(d,"PostCSS"),d.forEach(p),k=c(h,"\n      and\n      "),F=i(h,"STRONG",{});var u=n(F);R=c(u,"Tailwind CSS"),u.forEach(p),h.forEach(p),e.forEach(p),j=l(o),B=i(o,"P",{class:!0});var w=n(B);N=c(w,"This is a working example of a\n    "),O=i(w,"STRONG",{});var g=n(O);I=c(g,"Sapper"),g.forEach(p),D=c(w,"\n    app with the easiest\n    "),V=i(w,"STRONG",{});var m=n(V);A=c(m,"PostCSS"),m.forEach(p),H=c(w,"\n    +\n    "),M=i(w,"STRONG",{});var v=n(M);W=c(v,"Tailwind CSS"),v.forEach(p),Y=c(w,"\n    setup."),w.forEach(p),q=l(o),U=i(o,"P",{});var b=n(U);z=c(b,"You can find the code at\n    "),J=i(b,"A",{href:!0});var y=n(J);K=c(y,"github.com/codechips/sapper-with-postcss-and-tailwind"),y.forEach(p),b.forEach(p),L=l(o),Q=i(o,"P",{});var ia=n(Q);X=c(ia,"Read the blog post if you want to know all the juicy details 🍊"),ia.forEach(p),Z=l(o),_=i(o,"P",{});var na=n(_);aa=i(na,"A",{class:!0,href:!0});var pa=n(aa);ta=c(pa,"Solid Sapper setup with PostCSS and Tailwind"),pa.forEach(p),na.forEach(p),sa=l(o),ca&&ca.l(o),oa=l(o),ea=i(o,"BUTTON",{class:!0});var la=n(ea);ra=c(la,"don't press this button.\n    seriously."),la.forEach(p),o.forEach(p),this.h()},h(){document.title="Sapper with PostCSS and Tailwind",h(x,"class","text-8xl font-semibold"),h(C,"class","text-5xl mt-4"),h(B,"class","text-lg"),h(J,"href","https://github.com/codechips/sapper-with-postcss-and-tailwind"),h(aa,"class","font-semibold text-2xl text-blue-500"),h(aa,"href","https://codechips.me/sapper-with-postcss-and-tailwind/"),h(ea,"class","btn svelte-1kwcty1"),h(s,"class","space-y-8")},m(o,e){d(o,t,e),d(o,s,e),u(s,f),u(f,x),u(x,E),u(f,T),u(f,C),u(C,P),u(C,G),u(G,$),u(C,k),u(C,F),u(F,R),u(s,j),u(s,B),u(B,N),u(B,O),u(O,I),u(B,D),u(B,V),u(V,A),u(B,H),u(B,M),u(M,W),u(B,Y),u(s,q),u(s,U),u(U,z),u(U,J),u(J,K),u(s,L),u(s,Q),u(Q,X),u(s,Z),u(s,_),u(_,aa),u(aa,ta),u(s,sa),ca&&ca.m(s,null),u(s,oa),u(s,ea),u(ea,ra),ia||(na=w(ea,"click",a[1]),ia=!0)},p(a,[t]){a[0]?ca?1&t&&g(ca,1):(ca=y(),ca.c(),g(ca,1),ca.m(s,oa)):ca&&(b(),m(ca,1,1,(()=>{ca=null})),v())},i(a){g(ca)},o(a){m(ca)},d(a){a&&p(t),a&&p(s),ca&&ca.d(),ia=!1,na()}}}function P(a,t,s){let o=!1;return[o,()=>s(0,o=!o)]}export default class extends a{constructor(a){super(),t(this,a,P,C,s,{})}}

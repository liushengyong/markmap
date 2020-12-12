import{S as a,i as e,s as t,e as s,f as l,g as r,d as n,k as o,l as c,F as i,a as f,t as m,c as d,q as u,b as h,h as p,j as v,B as g,m as b,n as E,T as w,o as x,p as $,r as k,U,G as R,u as I,A as y,W as L,z as V,v as D,w as S,x as A,X as T,D as G}from"./client.bebd26e5.js";import{M as _,b as O,a as C}from"./markmap.1efc3052.js";import{F as M}from"./footer.0e032b58.js";import{T as N,M as P,p as H,l as j,s as z}from"./loader.310e4b8d.js";const{document:F}=L;function W(a){let e,t,d,u,v,E,x,$,k,R,I,y,L,V,D,S,A,T,G,_,O=a[6].info.type&&K(a),C=a[6].error&&X(a);return{c(){e=s("div"),t=s("form"),d=s("span"),u=m("Open URL:"),v=f(),O&&O.c(),E=f(),x=s("input"),k=f(),R=s("a"),I=m("✓"),y=f(),L=s("a"),V=m("✗"),D=f(),S=s("a"),A=m("?"),T=f(),C&&C.c(),this.h()},l(a){e=l(a,"DIV",{class:!0});var s=r(e);t=l(s,"FORM",{class:!0});var o=r(t);d=l(o,"SPAN",{class:!0});var c=r(d);u=p(c,"Open URL:"),c.forEach(n),v=h(o),O&&O.l(o),E=h(o),x=l(o,"INPUT",{class:!0,style:!0,type:!0,value:!0}),k=h(o),R=l(o,"A",{class:!0});var i=r(R);I=p(i,"✓"),i.forEach(n),y=h(o),L=l(o,"A",{class:!0});var f=r(L);V=p(f,"✗"),f.forEach(n),D=h(o),S=l(o,"A",{class:!0,"data-ga-label":!0});var m=r(S);A=p(m,"?"),m.forEach(n),o.forEach(n),T=h(s),C&&C.l(s),s.forEach(n),this.h()},h(){o(d,"class","hidden md:block mr-2"),o(x,"class","flex-1 border-b border-blue-500 pl-1 min-w-0"),g(x,"width","560px"),o(x,"type","url"),x.value=$=a[6].url,o(R,"class","ml-2 no-underline"),o(L,"class","ml-2 no-underline"),o(S,"class","ml-2 no-underline"),o(S,"data-ga-label","openUrlHelp"),o(t,"class","flex"),o(e,"class","md:flex w-full")},m(s,l){c(s,e,l),b(e,t),b(t,d),b(d,u),b(t,v),O&&O.m(t,null),b(t,E),b(t,x),b(t,k),b(t,R),b(R,I),b(t,y),b(t,L),b(L,V),b(t,D),b(t,S),b(S,A),b(e,T),C&&C.m(e,null),G||(_=[i(x,"input",a[14]),i(R,"click",w(a[12])),i(L,"click",w(a[13])),i(S,"click",w(a[15])),i(t,"submit",w(a[12]))],G=!0)},p(a,s){a[6].info.type?O?O.p(a,s):(O=K(a),O.c(),O.m(t,E)):O&&(O.d(1),O=null),64&s&&$!==($=a[6].url)&&(x.value=$),a[6].error?C?C.p(a,s):(C=X(a),C.c(),C.m(e,null)):C&&(C.d(1),C=null)},d(a){a&&n(e),O&&O.d(),C&&C.d(),G=!1,U(_)}}}function J(a){let e,t,o,f;return{c(){e=s("a"),t=m("Open URL")},l(a){e=l(a,"A",{});var s=r(e);t=p(s,"Open URL"),s.forEach(n)},m(s,l){c(s,e,l),b(e,t),o||(f=i(e,"click",w(a[11])),o=!0)},p:V,d(a){a&&n(e),o=!1,f()}}}function K(a){let e,t,i=a[6].info.type+"";return{c(){e=s("span"),t=m(i),this.h()},l(a){e=l(a,"SPAN",{class:!0});var s=r(e);t=p(s,i),s.forEach(n),this.h()},h(){o(e,"class","hidden md:block px-1 bg-blue-500 text-white rounded-l")},m(a,s){c(a,e,s),b(e,t)},p(a,e){64&e&&i!==(i=a[6].info.type+"")&&G(t,i)},d(a){a&&n(e)}}}function X(a){let e,t,i=a[6].error+"";return{c(){e=s("div"),t=m(i),this.h()},l(a){e=l(a,"DIV",{class:!0});var s=r(e);t=p(s,i),s.forEach(n),this.h()},h(){o(e,"class","ml-2 text-red-600")},m(a,s){c(a,e,s),b(e,t)},p(a,e){64&e&&i!==(i=a[6].error+"")&&G(t,i)},d(a){a&&n(e)}}}function q(a){let e,t,f;return{c(){e=s("textarea"),this.h()},l(a){e=l(a,"TEXTAREA",{class:!0,value:!0}),r(e).forEach(n),this.h()},h(){o(e,"class","w-full h-full p-1"),e.value=a[4]},m(s,l){c(s,e,l),t||(f=i(e,"input",a[10]),t=!0)},p(a,t){16&t&&(e.value=a[4])},d(a){a&&n(e),t=!1,f()}}}function B(a){let e,t,d,u,v,g,E,x,$,k,U,R,I,y,L,D,S,A,T,G,_,O,C;return{c(){e=s("ol"),t=s("li"),d=m("GitHub Gist URL\n      "),u=s("div"),v=m("e.g. https://gist.github.com/gera2ld/af76a4c245b302206b16aec503dbe07b"),g=f(),E=s("li"),x=m("Gitee Gist URL\n      "),$=s("div"),k=m("e.g. https://gitee.com/gerald/codes/a73wgucr28dhlxp91kytm57"),U=f(),R=s("li"),I=s("a"),y=m("CORS"),L=m("-enabled URL to a markdown file, including raw file URL in GitHub or Gist\n      "),D=s("div"),S=m("e.g. https://raw.githubusercontent.com/gera2ld/markmap/master/README.md"),A=f(),T=s("div"),G=s("a"),_=m("OK"),this.h()},l(a){e=l(a,"OL",{class:!0});var s=r(e);t=l(s,"LI",{class:!0});var o=r(t);d=p(o,"GitHub Gist URL\n      "),u=l(o,"DIV",{class:!0});var c=r(u);v=p(c,"e.g. https://gist.github.com/gera2ld/af76a4c245b302206b16aec503dbe07b"),c.forEach(n),o.forEach(n),g=h(s),E=l(s,"LI",{class:!0});var i=r(E);x=p(i,"Gitee Gist URL\n      "),$=l(i,"DIV",{class:!0});var f=r($);k=p(f,"e.g. https://gitee.com/gerald/codes/a73wgucr28dhlxp91kytm57"),f.forEach(n),i.forEach(n),U=h(s),R=l(s,"LI",{class:!0});var m=r(R);I=l(m,"A",{href:!0,target:!0,rel:!0});var b=r(I);y=p(b,"CORS"),b.forEach(n),L=p(m,"-enabled URL to a markdown file, including raw file URL in GitHub or Gist\n      "),D=l(m,"DIV",{class:!0});var w=r(D);S=p(w,"e.g. https://raw.githubusercontent.com/gera2ld/markmap/master/README.md"),w.forEach(n),m.forEach(n),s.forEach(n),A=h(a),T=l(a,"DIV",{class:!0});var V=r(T);G=l(V,"A",{});var O=r(G);_=p(O,"OK"),O.forEach(n),V.forEach(n),this.h()},h(){o(u,"class","text-xs"),o(t,"class","mb-1"),o($,"class","text-xs"),o(E,"class","mb-1"),o(I,"href","https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"),o(I,"target","_blank"),o(I,"rel","noopener noreferrer"),o(D,"class","text-xs"),o(R,"class","mb-1"),o(e,"class","text-left list-decimal pl-4"),o(T,"class","modal-footer")},m(s,l){c(s,e,l),b(e,t),b(t,d),b(t,u),b(u,v),b(e,g),b(e,E),b(E,x),b(E,$),b($,k),b(e,U),b(e,R),b(R,I),b(I,y),b(R,L),b(R,D),b(D,S),c(s,A,l),c(s,T,l),b(T,G),b(G,_),O||(C=i(G,"click",w(a[16])),O=!0)},p:V,d(a){a&&n(e),a&&n(A),a&&n(T),O=!1,C()}}}function Q(a){let e,t,R,I,y,L,V,T,G,O,C,H,j,z,K,X,Q,Y,Z,aa,ea,ta,sa,la,ra,na,oa,ca,ia,fa,ma,da,ua,ha,pa,va,ga;function ba(a,e){return a[6].show?W:J}let Ea=ba(a),wa=Ea(a),xa=!a[3]&&q(a);function $a(e){a[18].call(null,e)}function ka(e){a[19].call(null,e)}let Ua={content:a[4]};return void 0!==a[2]&&(Ua.mm=a[2]),void 0!==a[1]&&(Ua.el=a[1]),z=new _({props:Ua}),D.push((()=>S(z,"mm",$a))),D.push((()=>S(z,"el",ka))),Y=new N({props:{class:"absolute right-0 bottom-0 mr-2 mb-2",mm:a[2],dirty:a[7]!==a[4]}}),da=new M({}),ha=new P({props:{show:a[5],title:"The following types of URLs are supported",$$slots:{default:[B]},$$scope:{ctx:a}}}),ha.$on("close",a[16]),{c(){e=f(),t=s("div"),R=s("a"),I=m("NEW: markmap in VSCode!"),y=f(),L=s("main"),V=s("div"),wa.c(),T=f(),G=s("div"),O=s("div"),xa&&xa.c(),C=f(),H=s("div"),j=s("div"),d(z.$$.fragment),Q=f(),d(Y.$$.fragment),Z=f(),aa=s("div"),ea=s("div"),ta=s("a"),sa=m("Download as interactive HTML"),la=f(),ra=s("div"),na=s("a"),oa=m("Download as SVG"),ca=f(),ia=s("span"),fa=m("⚠️"),ma=f(),d(da.$$.fragment),ua=f(),d(ha.$$.fragment),this.h()},l(a){u('[data-svelte="svelte-r18bnt"]',F.head).forEach(n),e=h(a),t=l(a,"DIV",{class:!0,style:!0});var s=r(t);R=l(s,"A",{class:!0,href:!0,target:!0,rel:!0,"data-ga-label":!0});var o=r(R);I=p(o,"NEW: markmap in VSCode!"),o.forEach(n),s.forEach(n),y=h(a),L=l(a,"MAIN",{class:!0});var c=r(L);V=l(c,"DIV",{class:!0});var i=r(V);wa.l(i),i.forEach(n),T=h(c),G=l(c,"DIV",{class:!0});var f=r(G);O=l(f,"DIV",{class:!0});var m=r(O);xa&&xa.l(m),m.forEach(n),C=h(f),H=l(f,"DIV",{class:!0});var d=r(H);j=l(d,"DIV",{class:!0});var g=r(j);v(z.$$.fragment,g),Q=h(g),v(Y.$$.fragment,g),g.forEach(n),Z=h(d),aa=l(d,"DIV",{});var b=r(aa);ea=l(b,"DIV",{class:!0});var E=r(ea);ta=l(E,"A",{});var w=r(ta);sa=p(w,"Download as interactive HTML"),w.forEach(n),E.forEach(n),la=h(b),ra=l(b,"DIV",{class:!0,title:!0});var x=r(ra);na=l(x,"A",{});var $=r(na);oa=p($,"Download as SVG"),$.forEach(n),ca=h(x),ia=l(x,"SPAN",{class:!0});var k=r(ia);fa=p(k,"⚠️"),k.forEach(n),x.forEach(n),b.forEach(n),d.forEach(n),f.forEach(n),c.forEach(n),ma=h(a),v(da.$$.fragment,a),ua=h(a),v(ha.$$.fragment,a),this.h()},h(){F.title="Try Markmap",o(R,"class","inline-block text-sm text-orange-600 underline"),o(R,"href","https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode"),o(R,"target","_blank"),o(R,"rel","noreferrer noopener"),o(R,"data-ga-label","markmapVSCodeFromREPL"),o(t,"class","fixed z-10 hidden md:block"),g(t,"top","15px"),g(t,"left","50%"),o(V,"class","flex items-center mb-4 text-sm"),o(O,"class","flex-1 min-w-0 border border-gray-300"),o(j,"class","markmap-wrapper flex-1"),o(ea,"class","inline-block px-4 py-2"),o(ia,"class","text-red-500"),o(ra,"class","inline-block px-4 py-2"),o(ra,"title","SVG does not work well with PrismJS and MathJax"),o(H,"class","flex-1 min-w-0 flex flex-col"),o(G,"class","flex-1 md:flex min-h-0 repl"),o(L,"class","inner flex flex-col md:fs")},m(s,l){c(s,e,l),c(s,t,l),b(t,R),b(R,I),c(s,y,l),c(s,L,l),b(L,V),wa.m(V,null),b(L,T),b(L,G),b(G,O),xa&&xa.m(O,null),a[17](O),b(G,C),b(G,H),b(H,j),E(z,j,null),b(j,Q),E(Y,j,null),b(H,Z),b(H,aa),b(aa,ea),b(ea,ta),b(ta,sa),b(aa,la),b(aa,ra),b(ra,na),b(na,oa),b(ra,ca),b(ra,ia),b(ia,fa),c(s,ma,l),E(da,s,l),c(s,ua,l),E(ha,s,l),pa=!0,va||(ga=[i(ta,"click",w(a[9])),i(na,"click",w(a[8]))],va=!0)},p(a,[e]){Ea===(Ea=ba(a))&&wa?wa.p(a,e):(wa.d(1),wa=Ea(a),wa&&(wa.c(),wa.m(V,null))),a[3]?xa&&(xa.d(1),xa=null):xa?xa.p(a,e):(xa=q(a),xa.c(),xa.m(O,null));const t={};16&e&&(t.content=a[4]),!K&&4&e&&(K=!0,t.mm=a[2],A((()=>K=!1))),!X&&2&e&&(X=!0,t.el=a[1],A((()=>X=!1))),z.$set(t);const s={};4&e&&(s.mm=a[2]),144&e&&(s.dirty=a[7]!==a[4]),Y.$set(s);const l={};32&e&&(l.show=a[5]),8388608&e&&(l.$$scope={dirty:e,ctx:a}),ha.$set(l)},i(a){pa||(x(z.$$.fragment,a),x(Y.$$.fragment,a),x(da.$$.fragment,a),x(ha.$$.fragment,a),pa=!0)},o(a){$(z.$$.fragment,a),$(Y.$$.fragment,a),$(da.$$.fragment,a),$(ha.$$.fragment,a),pa=!1},d(s){s&&n(e),s&&n(t),s&&n(y),s&&n(L),wa.d(),xa&&xa.d(),a[17](null),k(z),k(Y),s&&n(ma),k(da,s),s&&n(ua),k(ha,s),va=!1,U(ga)}}}function Y(a,e){const t=document.createElement("a");t.download=a,t.href=e,t.click()}function Z(a,e,t){let s,l,r,n,o="",c=!1;const i={url:"https://gist.github.com/gera2ld/af76a4c245b302206b16aec503dbe07b"};i.info=H(i.url);const{page:f}=R();function m(){n&&t(4,o=n.getValue())}let d,u;return I((async()=>{d=z((a=>{n&&n.setValue(a),t(4,o=a),t(7,u=o)}));const{default:a}=await Promise.all([import("./codemirror.f054255e.js"),__inject_styles(["client-ff2bd8be.css","codemirror-8033c53c.css"])]).then((function(a){return a[0]}));t(3,n=a(s,{lineNumbers:!0,mode:"markdown",value:o,indentUnit:2,tabSize:2})),n.setOption("extraKeys",{Tab:a=>{a.somethingSelected()?a.execCommand("indentMore"):a.replaceSelection(" ".repeat(a.getOption("indentUnit")))},"Shift-Tab":a=>{a.execCommand("indentLess")}}),n.on("change",C(m,500))})),y((()=>{t(3,n=null),d&&(d(),d=null)})),[s,l,r,n,o,c,i,u,function(){const a=l.outerHTML.replace(/<br>/g,"<br/>");Y("markmap.svg","data:image/svg;utf8,"+encodeURIComponent(a))},function(){const a=new O.Transformer,{root:e,features:t}=a.transform(o),s=a.getUsedAssets(t),l=O.fillTemplate(e,s);Y("markmap.html","data:text/html;utf8,"+encodeURIComponent(l))},function(a){t(4,o=a.target.value)},function(){t(6,i.show=!0,i)},async function(){try{const{type:a,d:e}=i.info;if(!a)throw new Error("Unsupported URL");await j(e),t(6,i.show=!1,i),t(6,i.error=null,i),window.location.hash="#?d="+e,T("event","openUrl",{event_label:a})}catch(a){t(6,i.error=a.message||"Unknown error",i),T("event","openUrl",{event_label:"error"})}},function(){t(6,i.show=!1,i)},function(a){t(6,i.url=a.target.value,i),t(6,i.info=H(i.url)||{},i)},function(){t(5,c=!0)},function(){t(5,c=!1)},function(a){D[a?"unshift":"push"]((()=>{s=a,t(0,s)}))},function(a){r=a,t(2,r)},function(a){l=a,t(1,l)}]}export default class extends a{constructor(a){super(),e(this,a,Z,Q,t,{})}}

import __inject_styles from './inject_styles.5607aec6.js';
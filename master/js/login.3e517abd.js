!function(e){function t(t){for(var r,u,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(p&&p(t);f.length;)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={login:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+"js/"+({"login-about":"login-about"}[e]||e)+"."+{"login-about":"5fa3751d"}[e]+".js"}(e);var c=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="https://wuchendi.github.io/vue-pages/master/",u.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=c;a.push([1,"chunk-common"]),n()}({1:function(e,t,n){e.exports=n("c337")},b65f:function(e,t,n){},c337:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("b65f"),r.a.extend({data:function(){return{pages:"/vue-pages"}},mounted:function(){console.log(this),console.log(this.$route.params)},render:function(){var e=arguments[0];return e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/page1/123312"}},["page1"]),e("router-link",{attrs:{to:"/page2"}},["page2"]),e("a",{attrs:{href:"".concat(this.pages,"/#/")}},["a链接跳转回 index Home页面"]),e("a",{attrs:{href:"".concat(this.pages,"/#/about")}},["a链接跳转回 index About页面"]),e("br"),e("br"),e("div",[e("a",{attrs:{href:"".concat(this.pages,"/#/")}},["这是login页面，跳转新的页面 index.html"])]),e("br"),e("br"),e("router-view"),e("br"),e("br")])}})),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),u=r.a.extend({name:"page1",render:function(){var e,t=arguments[0];return t("div",["page1 ",t("br"),t("br"),"accessToken: ",null!==(e=this.$route.params.accessToken)&&void 0!==e?e:""])}});r.a.use(a.a);var i=new a.a({mode:"hash",base:"".concat("/vue-pages","/login"),routes:[{path:"/page1/:accessToken*",name:"page",component:u},{path:"/page2",name:"page2",component:function(){return n.e("login-about").then(n.bind(null,"8645"))}}]}),c=n("2f62");r.a.use(c.a);var s=new c.a.Store({state:{},mutations:{},actions:{}});r.a.config.productionTip=!1,new r.a({router:i,store:s,render:function(e){return e(o)}}).$mount("#app")}});
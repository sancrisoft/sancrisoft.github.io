(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{132:function(e,t,n){"use strict";n.r(t);var o=n(6),r=n.n(o),i=n(0),l=n.n(i),a=n(150),c=n(158),s=n(156),f=n(147),d=n(269),u=n.n(d),p=n(270),m=n.n(p),h=n(271),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(a.a,{i18n:c.a},l.a.createElement(f.b,null),l.a.createElement(s.a,{title:"Targi | Gracias por inscribirte en nuestro webinar.",keywords:["targi","delivery app","domicilios","ecommerce","venta en línea"],description:"Lleva tu negocio al mundo del ecommerce con tu propia app móvil."}),l.a.createElement(h.i,null,l.a.createElement(h.k,{bg:m.a},l.a.createElement(h.l,null,l.a.createElement("div",null,l.a.createElement("h2",null,"Targi"),l.a.createElement("h1",null,"¡Gracias por suscribirte a nuestro webinar!"),l.a.createElement("h3",null,"Te enviaremos un recordatorio un día antes del evento."),l.a.createElement(h.f,{to:"/targi"},"Conocer Más")),l.a.createElement("img",{src:u.a,alt:"Targi"}))),l.a.createElement(h.h,null,l.a.createElement(h.l,null,l.a.createElement("div",null,l.a.createElement("a",{href:"/privacidad"},"Políticas de Privacidad"),l.a.createElement("a",{href:"/terminos"},"Términos y Condiciones")),l.a.createElement("p",null,"Sancrisoft SAS © 2020")))))},t}(i.Component);t.default=Object(a.c)("translations")(b)},250:function(e,t,n){var o;"undefined"!=typeof self&&self,o=function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(2),a=(o=l)&&o.__esModule?o:{default:o};var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.smoothScroll=n.smoothScroll.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),i(t,[{key:"componentDidMount",value:function(){n(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var n=function(){return 0};void 0!==this.props.offset&&(n=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var o=e.currentTarget.getAttribute("href").slice(1),r=document.getElementById(o).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:r-n(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["offset"]));return a.default.createElement("a",r({},t,{onClick:this.smoothScroll}))}}]),t}();t.default=c},function(t,n){t.exports=e},function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==e.__forceSmoothScrollPolyfill__)){var n,o=e.HTMLElement||e.Element,r=468,i={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||c,scrollIntoView:o.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?m.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):i.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?i.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):m.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;m.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=function(e){var n;do{n=(e=e.parentNode)===t.body}while(!1===n&&!1===u(e));return n=null,e}(this),o=n.getBoundingClientRect(),r=this.getBoundingClientRect();n!==t.body?(m.call(this,n,n.scrollLeft+r.left-o.left,n.scrollTop+r.top-o.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function d(t,n){var o=e.getComputedStyle(t,null)["overflow"+n];return"auto"===o||"scroll"===o}function u(e){var t=f(e,"Y")&&d(e,"Y"),n=f(e,"X")&&d(e,"X");return t||n}function p(t){var n,o,i,a,c=(l()-t.startTime)/r;a=c=c>1?1:c,n=.5*(1-Math.cos(Math.PI*a)),o=t.startX+(t.x-t.startX)*n,i=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,o,i),o===t.x&&i===t.y||e.requestAnimationFrame(p.bind(e,t))}function m(n,o,r){var a,s,f,d,u=l();n===t.body?(a=e,s=e.scrollX||e.pageXOffset,f=e.scrollY||e.pageYOffset,d=i.scroll):(a=n,s=n.scrollLeft,f=n.scrollTop,d=c),p({scrollable:a,method:d,startTime:u,startX:s,startY:f,x:o,y:r})}}}}()}])},e.exports=o(n(0))},269:function(e,t,n){e.exports=n.p+"static/hero-bb24c654c0118f5b8776c7d9d21bda4d.png"},270:function(e,t,n){e.exports=n.p+"static/bg-8b9e8474f669489fe6ff20f20fd1c7c0.jpg"},271:function(e,t,n){"use strict";n.d(t,"i",function(){return I}),n.d(t,"l",function(){return T}),n.d(t,"k",function(){return S}),n.d(t,"e",function(){return z}),n.d(t,"f",function(){return N}),n.d(t,"p",function(){return P}),n.d(t,"c",function(){return M}),n.d(t,"j",function(){return Y}),n.d(t,"d",function(){return A}),n.d(t,"o",function(){return V}),n.d(t,"n",function(){return X}),n.d(t,"b",function(){return L}),n.d(t,"a",function(){return R}),n.d(t,"m",function(){return W}),n.d(t,"h",function(){return H}),n.d(t,"q",function(){return F}),n.d(t,"g",function(){return D}),n.d(t,"s",function(){return G}),n.d(t,"t",function(){return q}),n.d(t,"r",function(){return J});var o=n(145),r=n.n(o),i=n(144),l=n(146),a=n(250),c=n.n(a),s=n(149);function f(){var e=r()(["\n    font-size: .9em;\n  "]);return f=function(){return e},e}function d(){var e=r()(["\n    line-height: 1.4;\n  "]);return d=function(){return e},e}function u(){var e=r()(["\n    padding-bottom: 1em;\n  "]);return u=function(){return e},e}function p(){var e=r()(["\n    padding-bottom: 0;\n  "]);return p=function(){return e},e}function m(){var e=r()(["\n    width: 30%;\n    padding: 1em;\n  "]);return m=function(){return e},e}function h(){var e=r()(["\n      font-size: 1.5rem;\n      width: 40rem;\n      line-height: 1.3;\n    "]);return h=function(){return e},e}function b(){var e=r()(["\n      font-size: 1.2rem;\n    "]);return b=function(){return e},e}function g(){var e=r()(["\n    display: flex;\n    justify-content: space-between;\n    flex-flow: row-reverse;\n    p {\n      margin: 0;\n    }  \n  "]);return g=function(){return e},e}function y(){var e=r()(["\n    width: 32%;\n  "]);return y=function(){return e},e}function v(){var e=r()(["\n    width: 48%;\n  "]);return v=function(){return e},e}function w(){var e=r()(["\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    "]);return w=function(){return e},e}function x(){var e=r()(["\n    width: 48%;\n  "]);return x=function(){return e},e}function _(){var e=r()(["\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n    "]);return _=function(){return e},e}function C(){var e=r()(["\n    &:before,\n    &:after {\n      width: 56%;\n      height: 220%;\n    }\n    &:before  {\n      top: -20%;\n      left: -5%;\n    }\n    &:after  {\n      bottom: 20%;\n      right: -39%;\n    }\n  "]);return C=function(){return e},e}function j(){var e=r()(["\n    &:after  {\n      bottom: 66%;\n      right: -44%;\n    }\n  "]);return j=function(){return e},e}function O(){var e=r()(["\n    padding: 2rem 0;\n    h2{\n      font-size: 3rem;\n    }\n  "]);return O=function(){return e},e}function B(){var e=r()(["\n    text-align: left;\n    "," {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n    }\n    \n    img {\n      max-height: 500px;\n      margin: 0;\n    }\n\n    h1{\n      font-size: 3rem;\n    }\n  "]);return B=function(){return e},e}function k(){var e=r()(["\n      max-width: 1440px;\n    "]);return k=function(){return e},e}function E(){var e=r()(["\n      max-width: 1024px;\n    "]);return E=function(){return e},e}var I=i.d.div.withConfig({displayName:"styledComponents__GlobalContainer",componentId:"sc-1f938bh-0"})(["font-family:'BeVietnamRegular',sans-serif;font-size:16px;"]),T=i.d.div.withConfig({displayName:"styledComponents__PageSizer",componentId:"sc-1f938bh-1"})(["width:100%;margin:0 auto;padding:0 1em;"," ",""],Object(l.a)("tablet")(E()),Object(l.a)("desktop")(k())),S=i.d.section.withConfig({displayName:"styledComponents__Hero",componentId:"sc-1f938bh-2"})(["text-align:center;padding:2rem 0;background:url(",") top center repeat-x;background-size:cover;h1{font-family:'BeVietnamBold',sans-serif;color:hsl(228,39%,23%);font-size:2.5rem;padding:1rem 0;max-width:600px;}h2{font-family:'BeVietnamMedium',sans-serif;color:hsl(228,39%,23%);font-size:2rem;}h3{font-family:'BeVietnamMedium',sans-serif;color:#9B9BA6;font-size:1rem;line-height:1.5rem;margin-bottom:3rem;}img{margin-top:3rem;}",""],function(e){return e.bg},Object(l.a)("tablet")(B(),T)),z=Object(i.d)(c.a).withConfig({displayName:"styledComponents__CallToAction",componentId:"sc-1f938bh-3"})(["font-family:'BeVietnamMedium',sans-serif;font-size:0.8rem;background-color:hsl(12,88%,59%);color:#fff;border:0 none;padding:0.8rem 1.5rem 1rem 1.5rem;border-radius:1.5rem;cursor:pointer;line-height:1rem;outline:0 none;text-decoration:none;"]),N=Object(i.d)(s.Link).withConfig({displayName:"styledComponents__CallToActionLink",componentId:"sc-1f938bh-4"})(["font-family:'BeVietnamMedium',sans-serif;font-size:0.8rem;background-color:hsl(12,88%,59%);color:#fff;border:0 none;padding:0.8rem 1.5rem 1rem 1.5rem;border-radius:1.5rem;cursor:pointer;line-height:1rem;outline:0 none;text-decoration:none;"]),P=i.d.section.withConfig({displayName:"styledComponents__Section",componentId:"sc-1f938bh-5"})(["padding:2rem 1em;text-align:center;h3{font-family:'BeVietnamMedium',sans-serif;color:#9B9BA6;font-size:1.2rem;line-height:1.5em;}h2{font-family:'BeVietnamBold',sans-serif;color:hsl(228,39%,23%);font-size:2rem;padding:1rem 0;}",""],Object(l.a)("tablet")(O())),M=Object(i.d)(P).withConfig({displayName:"styledComponents__BenefitsSection",componentId:"sc-1f938bh-6"})(["h2{color:hsl(12,88%,59%);}"]),Y=Object(i.d)(P).withConfig({displayName:"styledComponents__HelpSection",componentId:"sc-1f938bh-7"})(["background-color:#eeeeee;padding:0;text-align:left;","{padding:1rem;p{margin:0;font-size:1.1rem;display:flex;justify-content:center;align-items:center;color:#9B9BA6;}img{width:2.5rem;margin-right:1rem;margin-bottom:0;}}"],T),A=Object(i.d)(P).withConfig({displayName:"styledComponents__BuySection",componentId:"sc-1f938bh-8"})(["background-color:hsl(12,88%,59%);position:relative;overflow:hidden;&:before,&:after{content:'';display:flex;position:absolute;background:url(",") top no-repeat;background-size:contain;width:62%;height:150%;z-index:1;opacity:.1;}&:before{top:-4%;left:-23%;}&:after{bottom:-75%;right:-35%;}"," "," .contentForm{position:relative;z-index:5;}h2{color:#ffffff;font-size:2rem;}h3{color:#ffffff;}"],function(e){return e.bg},Object(l.a)("tablet")(j()),Object(l.a)("desktop")(C())),V=i.d.div.withConfig({displayName:"styledComponents__Problems",componentId:"sc-1f938bh-9"})(["max-width:1000px;margin:2rem auto 0 auto;",""],Object(l.a)("tablet")(_())),X=i.d.div.withConfig({displayName:"styledComponents__ProblemCard",componentId:"sc-1f938bh-10"})(["background-color:#eeeeee;padding:1rem;display:flex;align-items:center;text-align:left;margin-bottom:1rem;border-radius:0.5rem;img{margin:0;width:3rem;margin-right:0.5rem;}p{color:#9B9BA6;margin:0;}",""],Object(l.a)("tablet")(x())),L=i.d.div.withConfig({displayName:"styledComponents__Benefits",componentId:"sc-1f938bh-11"})(["max-width:1000px;margin:2rem auto;h4{color:hsl(228,39%,23%);padding-top:1rem;}",""],Object(l.a)("tablet")(w())),R=i.d.div.withConfig({displayName:"styledComponents__BenefitCard",componentId:"sc-1f938bh-12"})(["background-color:#eeeeee;padding:1rem;margin-bottom:1rem;margin-top:5rem;border-radius:0.5rem;div{padding:1rem;display:inline-block;background:#fff;width:7rem;border-radius:50%;margin-top:-5rem;}img{margin:0;margin-right:0.5rem;background-color:#fff;}"," ",""],Object(l.a)("tablet")(v()),Object(l.a)("desktop")(y())),W=i.d.div.withConfig({displayName:"styledComponents__PriceNotes",componentId:"sc-1f938bh-13"})(["text-align:left;max-width:900px;margin:0 auto;padding:0 1rem;p{margin-bottom:0.5rem;}li{margin-bottom:0.2rem;}strong{font-family:'BeVietnamBold',sans-serif;}"]),H=i.d.footer.withConfig({displayName:"styledComponents__Footer",componentId:"sc-1f938bh-14"})(["background-color:#1e1e26;text-align:center;color:#888890;a{color:#f3f4f9;text-decoration:none;}a:first-child{margin-right:1rem;}a:hover{text-decoration:underline;}p{margin:1rem 0 0 0;}","{padding:1rem;","}"],T,Object(l.a)("tablet")(g())),F=i.d.section.withConfig({displayName:"styledComponents__SectionForm",componentId:"sc-1f938bh-15"})(["width:100%;display:flex;align-items:flex-start;flex-wrap:wrap;margin-top:2em;h3{"," ","}"],Object(l.a)("mobile")(b()),Object(l.a)("tablet")(h())),D=i.d.div.withConfig({displayName:"styledComponents__ContentWhatsApp",componentId:"sc-1f938bh-16"})(["display:flex;flex-direction:column;width:100%;padding:1em 1em 2em;",""],Object(l.a)("tablet")(m())),G=i.d.div.withConfig({displayName:"styledComponents__WhatsAppLogo",componentId:"sc-1f938bh-17"})(["display:flex;justify-content:center;align-items:center;padding-bottom:1em;"," ",""],Object(l.a)("tablet")(p()),Object(l.a)("desktop")(u())),q=i.d.p.withConfig({displayName:"styledComponents__WhatsAppText",componentId:"sc-1f938bh-18"})(["display:flex;justify-content:center;align-items:center;text-align:center;font-size:.9em;margin-bottom:1.1em;color:#fff;"," ",""],Object(l.a)("tablet")(d()),Object(l.a)("desktop")(f())),J=i.d.a.withConfig({displayName:"styledComponents__WhatsAppButton",componentId:"sc-1f938bh-19"})(["display:flex;justify-content:center;align-items:center;width:90%;margin:0 auto;background:#1e1e26;color:#fff;font-size:0.9rem;line-height:0.8rem;text-transform:capitalize;transition:all 0.3s ease-in-out;cursor:pointer;border:none;transition:all .5s;height:42px;text-decoration:none;border-radius:1.5rem;&:hover{background:#3e3e48;}&:focus{outline:none;}"])}}]);
//# sourceMappingURL=component---src-pages-targi-webinar-index-js-073e32b82dfdc725dd57.js.map
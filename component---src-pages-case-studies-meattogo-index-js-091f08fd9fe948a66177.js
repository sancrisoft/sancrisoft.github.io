(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{141:function(t,e,n){"use strict";n.r(e);n(157),n(220),n(68),n(153),n(67);var a=n(6),i=n.n(a),r=n(0),o=n.n(r),c=n(150),s=n(159),l=n(156),u=n(151),d=n(225),m=n(224),p=n(223),f=n(222),g=n(227),h=n(158),y=n(442),w=n.n(y),x=n(145),b=n.n(x),v=n(144),C=n(146);function j(){var t=b()(["\n    max-width: 78%;\n    padding-top: 1em;\n  "]);return j=function(){return t},t}function E(){var t=b()(["\n    max-width: 90%;\n    flex-direction: row;\n  "]);return E=function(){return t},t}function _(){var t=b()(["\n    padding-bottom: 3em;\n  "]);return _=function(){return t},t}function k(){var t=b()(["\n    max-width: 78%;\n    padding-top: 1em;\n  "]);return k=function(){return t},t}function O(){var t=b()(["\n    max-width: 90%;\n  "]);return O=function(){return t},t}function S(){var t=b()(["\n    max-width: 78%;\n  "]);return S=function(){return t},t}function I(){var t=b()(["\n    max-width: 90%;\n  "]);return I=function(){return t},t}function z(){var t=b()(["\n      max-width: 78%;\n    "]);return z=function(){return t},t}function N(){var t=b()(["\n      max-width: 90%;\n    "]);return N=function(){return t},t}var A=v.d.section.withConfig({displayName:"styledComponents__ContentCase",componentId:"sc-12repuy-0"})(["width:100%;display:flex;flex-direction:column;align-items:center;"]),T=v.d.div.withConfig({displayName:"styledComponents__CasePageSizer",componentId:"sc-12repuy-1"})(["margin:0 auto;max-width:90%;display:flex;width:100%;justify-content:space-between;align-items:center;"," ",""],Object(C.a)("tablet")(N()),Object(C.a)("desktop")(z())),B=v.d.section.withConfig({displayName:"styledComponents__ContentBack",componentId:"sc-12repuy-2"})(["width:100%;display:flex;flex-direction:column;align-items:center;background:#f1f1f1;padding:2em 0;"]),F=v.d.section.withConfig({displayName:"styledComponents__ContentAbout",componentId:"sc-12repuy-3"})(["margin:0 auto;max-width:90%;display:flex;width:100%;justify-content:space-between;align-items:center;"," ",""],Object(C.a)("tablet")(I()),Object(C.a)("desktop")(S())),M=v.d.section.withConfig({displayName:"styledComponents__ContentTecnology",componentId:"sc-12repuy-4"})(["margin:0 auto;max-width:90%;display:flex;flex-direction:column;width:100%;justify-content:space-between;align-items:center;"," "," h2{text-align:center;}"],Object(C.a)("tablet")(O()),Object(C.a)("desktop")(k())),L=v.d.div.withConfig({displayName:"styledComponents__Tecnologies",componentId:"sc-12repuy-5"})(["width:100%;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;padding-bottom:2em;",""],Object(C.a)("tablet")(_())),P=v.d.section.withConfig({displayName:"styledComponents__ContentSimilar",componentId:"sc-12repuy-6"})(["margin:0 auto;max-width:90%;display:flex;width:100%;justify-content:space-around;align-items:center;flex-direction:column;"," ",""],Object(C.a)("tablet")(E()),Object(C.a)("desktop")(j()));n.d(e,"query",function(){return R});var q=function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).renderCases=function(){var t=e.props,n=t.data.site.siteMetadata.caseStudies.cases,a=t.data,i=t.t,r=n.find(function(t){return"meattogo"===t.id}),c=r.id,s=r.name,l=r.appStore,u=r.playStore;return o.a.createElement(d.a,{key:c,title:s,description:i("caseStudies.cases.meattogo.brief"),image:a.meattogo.childImageSharp.sizes,playStore:a.playStore.childImageSharp.sizes,linkPlayStore:u,appStore:a.appStore.childImageSharp.sizes,linkAppStore:l,phone:w.a})},e.renderCasesAbout=function(){var t=e.props,n=t.data.site.siteMetadata.caseStudies.cases,a=t.t,i=n.find(function(t){return"meattogo"===t.id}),r=i.services,c=i.features,s=r.map(function(t){return a("caseStudies.cases.meattogo.services."+t.id)}),l=c.map(function(t){return a("caseStudies.cases.meattogo.features."+t.id)});return o.a.createElement(p.a,{name:a("caseStudies.cases.meattogo.aboutTitle"),description:a("caseStudies.cases.meattogo.description"),services:s,titleServices:a("caseStudies.cases.meattogo.services.title"),features:l,titleFeatures:a("caseStudies.cases.meattogo.features.title")})},e.renderCasesTecnologies=function(){var t=e.props,n=t.data.site.siteMetadata.caseStudies.cases,a=t.data;return n.find(function(t){return"meattogo"===t.id}).technologies.map(function(t){return o.a.createElement(f.a,{key:t.id,text:t.text,image:a[t.id].childImageSharp.sizes})})},e.renderCasesSimilar=function(){var t=e.props,n=t.location,a=n.hash,i=n.pathname,r=t.data.site.siteMetadata.caseStudies.cases,c=t.data,s=i.split("/")[2],l=r.sort(function(){return.5-Math.random()});return("#seeall"===a?l.slice(0,3):l.filter(function(t){return!1===t.private&&t.id!==s}).slice(0,3)).map(function(t){return o.a.createElement(g.a,{key:t.id,name:t.name,type:t.type,link:t.link,image:c[t.thumbnail].childImageSharp.sizes})})},e}return i()(e,t),e.prototype.render=function(){var t=this.props,e=t.data,n=t.t,a=t.location.pathname.split("/")[2];return o.a.createElement(c.a,{i18n:h.a},o.a.createElement(s.a,null,o.a.createElement(l.a,{title:""+n("caseStudies.cases."+a+".title"),keywords:["sancrisoft","digital-solutions"],description:"case meattogo"}),o.a.createElement(A,null,o.a.createElement(T,null,this.renderCases()),o.a.createElement(B,null,o.a.createElement(m.a,{image:e.BackgroundMeattogo.childImageSharp.sizes})),o.a.createElement(F,null,this.renderCasesAbout()),o.a.createElement(M,null,o.a.createElement(u.a,{type:2,text:n("caseStudies.tecnologies.title")}),o.a.createElement(L,null,this.renderCasesTecnologies())),o.a.createElement(u.a,{type:2,text:n("caseStudies.seemore")}),o.a.createElement(P,null,this.renderCasesSimilar()))))},e}(r.Component),R="1820847773";e.default=Object(c.c)("translations")(q)},151:function(t,e,n){"use strict";var a=n(4),i=n.n(a),r=n(0),o=n.n(r),c=n(147),s=function(t){var e=t.type,n=t.text,a=t.color,i=t.align;switch(e){case 2:return o.a.createElement(c.d,{style:{color:""+a,textAlign:""+i}},n);case 3:return o.a.createElement(c.e,{style:{color:""+a,textAlign:""+i}},n);case 4:return o.a.createElement(c.f,{style:{color:""+a,textAlign:""+i}},n);case 5:return o.a.createElement(c.g,{style:{color:""+a,textAlign:""+i}},n);case 6:return o.a.createElement(c.h,{style:{color:""+a,textAlign:""+i}},n);default:return o.a.createElement(c.c,{style:{color:""+a,textAlign:""+i}},n)}};s.propTypes={type:i.a.number,color:i.a.string,align:i.a.string},s.defaultProps={type:1,color:"#333",align:"center"},e.a=s},153:function(t,e,n){var a=n(23).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(14)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},157:function(t,e,n){"use strict";n(167)("link",function(t){return function(e){return t(this,"a","href",e)}})},167:function(t,e,n){var a=n(22),i=n(21),r=n(24),o=/"/g,c=function(t,e,n,a){var i=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),a(a.P+a.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},220:function(t,e,n){"use strict";var a=n(22),i=n(25),r=n(30),o=n(21),c=[].sort,s=[1,2,3];a(a.P+a.F*(o(function(){s.sort(void 0)})||!o(function(){s.sort(null)})||!n(221)(c)),"Array",{sort:function(t){return void 0===t?c.call(r(this)):c.call(r(this),i(t))}})},221:function(t,e,n){"use strict";var a=n(21);t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},222:function(t,e,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(149),s=n.n(c),l=n(145),u=n.n(l),d=n(144),m=n(146);function p(){var t=u()(["\n      font-size: .9em;\n    "]);return p=function(){return t},t}function f(){var t=u()(["\n      width: 50px;\n    "]);return f=function(){return t},t}function g(){var t=u()(["\n      width: 60px;\n    "]);return g=function(){return t},t}function h(){var t=u()(["\n    width: 120px;\n  "]);return h=function(){return t},t}var y=d.d.div.withConfig({displayName:"styledComponents__ContentTecnology",componentId:"sc-16f3dmv-0"})(["display:flex;flex-direction:column;width:33.333%;padding:2em 0 1em;justify-content:center;align-items:center;"," .gatsby-image-wrapper{width:45px;position:relative;"," ","}span{font-size:.8em;font-weight:800;line-height:0.9em;text-align:center;margin-top:8px;","}"],Object(m.a)("tablet")(h()),Object(m.a)("tablet")(g()),Object(m.a)("desktop")(f()),Object(m.a)("tablet")(p())),w=function(t){var e=t.text,n=t.image;return i.a.createElement(y,null,i.a.createElement(s.a,{sizes:n}),i.a.createElement("span",null,e))};w.propTypes={text:o.a.string,image:o.a.object};e.a=w},223:function(t,e,n){"use strict";n(153);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(151),s=n(154),l=n(145),u=n.n(l),d=n(144),m=n(146);function p(){var t=u()(["\n        margin-right: 7px;\n      "]);return p=function(){return t},t}function f(){var t=u()(["\n      font-size: 16px;\n    "]);return f=function(){return t},t}function g(){var t=u()(["\n      font-size: 15px;\n    "]);return g=function(){return t},t}function h(){var t=u()(["\n      font-size: 22px;\n    "]);return h=function(){return t},t}function y(){var t=u()(["\n      font-size: 18px;\n    "]);return y=function(){return t},t}function w(){var t=u()(["\n    width: 48%;\n  "]);return w=function(){return t},t}function x(){var t=u()(["\n      font-size: 22px;\n    "]);return x=function(){return t},t}function b(){var t=u()(["\n      font-size: 18px;\n    "]);return b=function(){return t},t}function v(){var t=u()(["\n    width: 48%;\n  "]);return v=function(){return t},t}function C(){var t=u()(["\n    flex-direction: row;\n    width: 58%;\n  "]);return C=function(){return t},t}function j(){var t=u()(["\n      font-size: 16px;\n    "]);return j=function(){return t},t}function E(){var t=u()(["\n      font-size: 15px;\n      width: 90%;\n    "]);return E=function(){return t},t}function _(){var t=u()(["\n    width: 40%;\n  "]);return _=function(){return t},t}function k(){var t=u()(["\n      font-size: 22px;\n    "]);return k=function(){return t},t}function O(){var t=u()(["\n      font-size: 18px;\n    "]);return O=function(){return t},t}function S(){var t=u()(["\n    flex-direction: row;\n    padding: 2.5em 0 3em;\n  "]);return S=function(){return t},t}var I=d.d.div.withConfig({displayName:"styledComponents__ContentAbout",componentId:"sc-1r871rm-0"})(["display:flex;flex-direction:column;justify-content:space-between;width:100%;padding:2em 0 1em;",""],Object(m.a)("tablet")(S())),z=d.d.div.withConfig({displayName:"styledComponents__AboutTitle",componentId:"sc-1r871rm-1"})(["display:flex;justify-content:center;align-items:center;width:100%;h2{margin-top:0;text-transform:capitalize;margin-bottom:1rem;font-size:20px;"," ","}"],Object(m.a)("tablet")(O()),Object(m.a)("desktop")(k())),N=d.d.div.withConfig({displayName:"styledComponents__AboutDescription",componentId:"sc-1r871rm-2"})(["display:flex;flex-direction:column;width:100%;padding-top:1em;"," p{font-size:16px;line-height:1.5;margin:0 auto;"," ","}"],Object(m.a)("tablet")(_()),Object(m.a)("tablet")(E()),Object(m.a)("desktop")(j())),A=d.d.div.withConfig({displayName:"styledComponents__AboutMore",componentId:"sc-1r871rm-3"})(["display:flex;flex-direction:column;width:100%;padding-top:1em;justify-content:space-between;",""],Object(m.a)("tablet")(C())),T=d.d.div.withConfig({displayName:"styledComponents__Services",componentId:"sc-1r871rm-4"})(["display:flex;flex-direction:column;width:100%;"," h4{margin-top:0;margin-bottom:1rem;font-size:20px;"," ","}"],Object(m.a)("tablet")(v()),Object(m.a)("tablet")(b()),Object(m.a)("desktop")(x())),B=d.d.div.withConfig({displayName:"styledComponents__Features",componentId:"sc-1r871rm-5"})(["display:flex;flex-direction:column;width:100%;"," h4{margin-top:0;margin-bottom:1rem;font-size:20px;"," ","}"],Object(m.a)("tablet")(w()),Object(m.a)("tablet")(y()),Object(m.a)("desktop")(h())),F=(d.d.a.withConfig({displayName:"styledComponents__A",componentId:"sc-1r871rm-6"})(["transition:all .5s;"," display:block;color:#F28724;"],""),d.d.ul.withConfig({displayName:"styledComponents__UL",componentId:"sc-1r871rm-7"})(["display:flex;flex-direction:column;margin-left:0;li{list-style:none;font-size:16px;line-height:1.5;margin-bottom:5px;"," "," svg{margin-right:5px;","}}"],Object(m.a)("tablet")(g()),Object(m.a)("desktop")(f()),Object(m.a)("desktop")(p()))),M=function(t){var e=t.name,n=t.description,a=t.services,r=t.features,o=t.titleServices,l=t.titleFeatures;return i.a.createElement(I,null,i.a.createElement(N,null,i.a.createElement(z,null,i.a.createElement(c.a,{type:2,text:e})),i.a.createElement("p",null,n)),i.a.createElement(A,null,i.a.createElement(T,null,i.a.createElement(c.a,{type:4,text:o,align:"left"}),i.a.createElement(F,null,a.map(function(t,e){return i.a.createElement("li",{key:e},i.a.createElement(s.a,{iconName:"check",backgroundColor:"#F28724",height:13,width:13}),t)}))),i.a.createElement(B,null,i.a.createElement(c.a,{type:4,text:l,align:"left"}),i.a.createElement(F,null,r.map(function(t,e){return i.a.createElement("li",{key:e},i.a.createElement(s.a,{iconName:"check",backgroundColor:"#F28724",height:13,width:13}),t)})))))};M.propTypes={urlNetwork:o.a.string,id:o.a.string,name:o.a.string.isRequired,description:o.a.string,titleServices:o.a.string,services:o.a.array,titleFeatures:o.a.string,features:o.a.array};e.a=M},224:function(t,e,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(149),s=n.n(c),l=n(145),u=n.n(l),d=n(144),m=n(146);function p(){var t=u()(["\n      width: 750px;\n    "]);return p=function(){return t},t}function f(){var t=u()(["\n      width: 600px;\n    "]);return f=function(){return t},t}var g=d.d.div.withConfig({displayName:"styledComponents__ContentBackground",componentId:"sc-1fs8pih-0"})(["display:flex;width:100%;padding:2em 0 1em;.gatsby-image-wrapper{width:85%;margin:0 auto;position:relative;"," ","}"],Object(m.a)("tablet")(f()),Object(m.a)("desktop")(p())),h=function(t){var e=t.image;return i.a.createElement(g,null,i.a.createElement(s.a,{sizes:e}))};h.propTypes={image:o.a.object};e.a=h},225:function(t,e,n){"use strict";var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(149),s=n.n(c),l=n(144),u=n(150),d=n(151),m=n(145),p=n.n(m),f=n(146);function g(){var t=p()(["\n      height: 100%;\n    "]);return g=function(){return t},t}function h(){var t=p()(["\n      height: 95%;\n    "]);return h=function(){return t},t}function y(){var t=p()(["\n      height: 85%;\n    "]);return y=function(){return t},t}function w(){var t=p()(["\n    width: 90%;\n  "]);return w=function(){return t},t}function x(){var t=p()(["\n    width: 100%;\n  "]);return x=function(){return t},t}function b(){var t=p()(["\n    width: 500px;\n  "]);return b=function(){return t},t}function v(){var t=p()(["\n    width: 55%;\n  "]);return v=function(){return t},t}function C(){var t=p()(["\n    width: 60%;\n    padding-top: 0;\n  "]);return C=function(){return t},t}function j(){var t=p()(["\n      font-size: 1em;\n      line-height: 1.5;\n    "]);return j=function(){return t},t}function E(){var t=p()(["\n      font-size: .9em;\n      line-height: 1.4;\n    "]);return E=function(){return t},t}function _(){var t=p()(["\n    justify-content: flex-start;\n  "]);return _=function(){return t},t}function k(){var t=p()(["\n      width: 120px;\n      ","\n    "]);return k=function(){return t},t}function O(){var t=p()(["\n      width: 100px;\n      ","\n    "]);return O=function(){return t},t}function S(){var t=p()(["\n    justify-content: flex-start;\n  "]);return S=function(){return t},t}function I(){var t=p()(["\n    width: 45%;\n  "]);return I=function(){return t},t}function z(){var t=p()(["\n    width: 40%;\n  "]);return z=function(){return t},t}function N(){var t=p()(["\n    flex-direction: row;\n  "]);return N=function(){return t},t}var A=l.d.section.withConfig({displayName:"styledComponents__ContentCases",componentId:"sgt8mw-0"})(["display:flex;flex-direction:column;justify-content:space-between;width:100%;padding:3em 0 3.5em;",""],Object(f.a)("md")(N())),T=l.d.div.withConfig({displayName:"styledComponents__CaseLeft",componentId:"sgt8mw-1"})(["display:flex;width:100%;flex-direction:column;"," ",""],Object(f.a)("md")(z()),Object(f.a)("lg")(I())),B=l.d.div.withConfig({displayName:"styledComponents__CaseLeftTop",componentId:"sgt8mw-2"})(["display:flex;align-items:center;justify-content:center;width:100%;"," "," & > .gatsby-image-wrapper{width:90px;"," position:relative;right:10px;"," ","}"],function(t){return t.marginBottom&&Object(l.c)(["margin-bottom:",";"],t.marginBottom)},Object(f.a)("md")(S()),function(t){return t.widthImage&&Object(l.c)(["width:",";"],t.widthImage)},Object(f.a)("md")(O(),function(t){return t.widthImage&&Object(l.c)(["width:",";"],t.widthImage)}),Object(f.a)("xl")(k(),function(t){return t.widthImage&&Object(l.c)(["width:",";"],t.widthImage)})),F=l.d.div.withConfig({displayName:"styledComponents__CaseLeftBottom",componentId:"sgt8mw-3"})(["display:flex;justify-content:center;align-items:center;width:100%;padding:.2em 0 0;"," p{font-size:1em;"," "," &.long-text{margin-top:10px;}}"],Object(f.a)("md")(_()),Object(f.a)("md")(E()),Object(f.a)("lg")(j())),M=l.d.div.withConfig({displayName:"styledComponents__Logos",componentId:"sgt8mw-4"})(["display:flex;width:100%;padding:0 0 1.2em;.gatsby-image-wrapper{width:120px;}.appStore{margin-left:8px;}"]),L=l.d.a.withConfig({displayName:"styledComponents__A",componentId:"sgt8mw-5"})(["display:flex;transition:all .5s;&:hover{transform:scale(1.1);}"]),P=l.d.div.withConfig({displayName:"styledComponents__CaseRight",componentId:"sgt8mw-6"})(["display:flex;width:100%;padding-top:1.5em;"," ",""],Object(f.a)("md")(C()),Object(f.a)("lg")(v())),q=l.d.a.withConfig({displayName:"styledComponents__ExternalLink",componentId:"sgt8mw-7"})(["display:flex;padding:5px 12px;background:#F28724;margin:0px;color:white;border-radius:3px;font-size:0.9rem;text-decoration:none;&:hover{background-color:#ffa44f;}"]),R=l.d.div.withConfig({displayName:"styledComponents__CaseRightImage",componentId:"sgt8mw-8"})(["display:flex;align-items:center;width:100%;margin:0 auto;position:relative;transition:all .5s;"," "," "," img{width:100%;height:100%;margin:0 auto;transition:all .5s;"," "," ","}"],Object(f.a)("sm")(b()),Object(f.a)("md")(x()),Object(f.a)("xl")(w()),Object(f.a)("md")(y()),Object(f.a)("lg")(h()),Object(f.a)("xl")(g())),J={breakpoints:{xs:0,sm:568,md:768,lg:991,xl:1200}},D=function(t){var e=t.title,n=t.description,a=t.image,r=t.phone,o=t.playStore,c=t.appStore,u=t.linkPlayStore,m=t.linkAppStore,p=t.widthImage,f=t.marginBottom,g=t.weblink,h=t.weblinkTitle;return i.a.createElement(l.a,{theme:J},i.a.createElement(A,null,i.a.createElement(T,null,i.a.createElement(B,{widthImage:p,marginBottom:f},i.a.createElement(s.a,{sizes:a}),i.a.createElement(d.a,{type:3,text:e})),i.a.createElement(F,null,i.a.createElement("p",null,n)),i.a.createElement(M,null,o&&i.a.createElement(L,{href:u,target:"_blank",className:"playStore"},i.a.createElement(s.a,{sizes:o})),o&&i.a.createElement(L,{href:m,target:"_blank",className:"appStore"},i.a.createElement(s.a,{sizes:c})),g&&i.a.createElement(q,{href:g,target:"_blank"},h))),i.a.createElement(P,null,i.a.createElement(R,null,i.a.createElement("img",{src:r,alt:"phone"})))))};D.propTypes={title:o.a.string,description:o.a.string,image:o.a.object.isRequired,widthImage:o.a.string,phone:o.a.string,playStore:o.a.object,appStore:o.a.object,linkAppStore:o.a.string,linkPlayStore:o.a.string,weblink:o.a.string,marginBottom:o.a.string};e.a=Object(u.c)("translations")(D)},227:function(t,e,n){"use strict";n(157),n(153);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(149),s=n.n(c),l=n(144),u=n(151),d=n(145),m=n.n(d),p=n(146);function f(){var t=m()(["\n    height: 240px;\n    width: 350px;\n  "]);return f=function(){return t},t}function g(){var t=m()(["\n    width: 31%;\n    height: 210px;\n  "]);return g=function(){return t},t}function h(){var t=m()(["\n    width: 48%;\n  "]);return h=function(){return t},t}var y=l.d.div.withConfig({displayName:"styledComponents__Box",componentId:"k2o8uo-0"})(["display:flex;width:100%;margin-bottom:2em;overflow:hidden;transition:all .5s;flex-direction:column;"," "," ",""],Object(p.a)("md")(h()),Object(p.a)("lg")(g()),Object(p.a)("xl")(f())),w=l.d.div.withConfig({displayName:"styledComponents__BoxImage",componentId:"k2o8uo-1"})(["display:flex;position:relative;width:100%;height:100%;cursor:default;overflow:hidden;border-radius:5px;cursor:pointer;.gatsby-image-wrapper{width:100%;transition:all .5s;img{filter:grayscale(1);transition:all .5s;}&:hover{img{filter:grayscale(0);}}}"]),x=l.d.div.withConfig({displayName:"styledComponents__ContentBox",componentId:"k2o8uo-2"})(["display:flex;flex-direction:column;justify-content:center;position:absolute;bottom:0;left:0;right:0;width:100%;height:70px;background:rgba(0,0,0,.7);color:#fff;padding:0 10px;h4{font-size:20px;letter-spacing:1px;margin-bottom:0;text-shadow:1px 1px 2px #333;text-transform:capitalize;}span{font-size:14px;text-shadow:1px 1px 2px #333;}"]),b=l.d.a.withConfig({displayName:"styledComponents__A",componentId:"k2o8uo-3"})(["display:flex;width:100%;height:100%;transition:all .5s;cursor:pointer;"]),v={breakpoints:{xs:0,sm:568,md:768,lg:1024,xl:1400}},C=function(t){var e=t.name,n=t.image,a=t.type,r=t.link;return i.a.createElement(l.a,{theme:v},i.a.createElement(y,null,i.a.createElement(b,{href:r},i.a.createElement(w,null,i.a.createElement(s.a,{sizes:n}),i.a.createElement(x,null,i.a.createElement(u.a,{type:4,text:e,color:"#fff",align:"left"}),i.a.createElement("span",null,a))))))};C.propTypes={name:o.a.string,type:o.a.string,link:o.a.string,image:o.a.object};e.a=C},442:function(t,e,n){t.exports=n.p+"static/Meattogo-2fe98ca3a27b3e3a1c9ccc9b6320d45c.gif"}}]);
//# sourceMappingURL=component---src-pages-case-studies-meattogo-index-js-091f08fd9fe948a66177.js.map
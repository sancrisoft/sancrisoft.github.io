(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{132:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return k});t(149),t(173),t(68),t(147),t(67);var i=t(6),n=t.n(i),s=t(0),r=t.n(s),l=t(148),c=t(156),d=t(154),o=t(146),p=t(174),u=t(175),m=t(176),f=t(177),S=t(178),h=t(155),g=t(416),E=t.n(g),y=t(238),b=function(e){function a(){for(var a,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return(a=e.call.apply(e,[this].concat(i))||this).renderCases=function(){var e=a.props,t=e.data.site.siteMetadata.caseStudies.cases,i=e.data,n=e.t,s=t.find(function(e){return"pidealatienda"===e.id}),l=s.id,c=s.name,d=s.playStore,o=s.appStore,u=s.weblink;return r.a.createElement(p.a,{key:l,title:c,widthImage:"200px",description:n("caseStudies.cases.pidealatienda.brief"),image:i.pidealatiendalogo.childImageSharp.sizes,phone:E.a,weblink:u,weblinkTitle:n("caseStudies.cases.pidealatienda.weblinkTitle"),playStore:i.playStore.childImageSharp.sizes,linkPlayStore:d,appStore:i.appStore.childImageSharp.sizes,linkAppStore:o})},a.renderCasesAbout=function(){var e=a.props,t=e.data.site.siteMetadata.caseStudies.cases,i=e.t,n=t.find(function(e){return"pidealatienda"===e.id}),s=n.services,l=n.features,c=s.map(function(e){return i("caseStudies.cases.pidealatienda.services."+e.id)}),d=l.map(function(e){return i("caseStudies.cases.pidealatienda.features."+e.id)});return r.a.createElement(m.a,{name:i("caseStudies.cases.pidealatienda.aboutTitle"),description:i("caseStudies.cases.pidealatienda.description"),services:c,titleServices:i("caseStudies.cases.pidealatienda.services.title"),features:d,titleFeatures:i("caseStudies.cases.pidealatienda.features.title")})},a.renderCasesTecnologies=function(){var e=a.props,t=e.data.site.siteMetadata.caseStudies.cases,i=e.data;return t.find(function(e){return"pidealatienda"===e.id}).technologies.map(function(e){return r.a.createElement(f.a,{key:e.id,text:e.text,image:i[e.id].childImageSharp.sizes})})},a.renderCasesSimilar=function(){var e=a.props,t=e.location,i=t.hash,n=t.pathname,s=e.data.site.siteMetadata.caseStudies.cases,l=e.data,c=n.split("/")[2],d=s.sort(function(){return.5-Math.random()});return("#seeall"===i?d.slice(0,3):d.filter(function(e){return!1===e.private&&e.id!==c}).slice(0,3)).map(function(e){return r.a.createElement(S.a,{key:e.id,name:e.name,type:e.type,link:e.link,image:l[e.thumbnail].childImageSharp.sizes})})},a}return n()(a,e),a.prototype.render=function(){var e=this.props,a=e.data,t=e.t,i=e.location.pathname.split("/")[2];return r.a.createElement(l.a,{i18n:h.a},r.a.createElement(c.a,null,r.a.createElement(d.a,{title:"Sancrisoft | "+t("caseStudies.cases."+i+".title"),keywords:["sancrisoft","digital-solutions"],description:"case pidealatienda"}),r.a.createElement(y.d,null,r.a.createElement(y.a,null,this.renderCases()),r.a.createElement(y.c,null,r.a.createElement(u.a,{image:a.pidealatiendamiddle.childImageSharp.sizes})),r.a.createElement(y.b,null,this.renderCasesAbout()),r.a.createElement(y.f,null,r.a.createElement(o.a,{type:2,text:t("caseStudies.tecnologies.title")}),r.a.createElement(y.g,null,this.renderCasesTecnologies())),r.a.createElement(o.a,{type:2,text:t("caseStudies.seemore")}),r.a.createElement(y.e,null,this.renderCasesSimilar()))))},a}(s.Component),k="1769366207";a.default=Object(l.c)("translations")(b)},416:function(e,a,t){e.exports=t.p+"static/hero-4e428e6d1296d8521bc131be0988a839.png"}}]);
//# sourceMappingURL=component---src-pages-case-studies-pidealatienda-index-js-284b695543bf83ba519b.js.map
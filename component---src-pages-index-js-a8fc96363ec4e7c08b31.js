(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{139:function(e,t,n){"use strict";n.r(t);n(154),n(152);var i=n(7),a=n.n(i),o=n(0),r=n.n(o),s=n(156),c=n(160),l=n(158),d=n(151),p=n(4),u=n.n(p),m=n(149),g=n.n(m),f=n(161),h=n(147),A=n.n(h),w=n(146),b=n(148);function x(){var e=A()(["\n    width: 300px;\n  "]);return x=function(){return e},e}function E(){var e=A()(["\n    width: 320px;\n    &:hover {\n      transform: scale(1.1);\n    }\n  "]);return E=function(){return e},e}var v=w.d.div.withConfig({displayName:"styledComponents__Box",componentId:"sc-1rxq5vw-0"})(["display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;background:transparent;width:310px;margin:0 auto;border-radius:10px;padding:0;transition:all .5s;cursor:pointer;height:300px;position:relative;box-shadow:0px 2px 8px #333;"," "," &:focus{outline:none;}"],Object(b.a)("tablet")(E()),Object(b.a)("desktop")(x())),C=w.d.div.withConfig({displayName:"styledComponents__ContDescripcion",componentId:"sc-1rxq5vw-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8px 10px 40px;height:65%;background:#fff;position:relative;.quote-left{position:absolute;left:8%;top:8%;}p{text-align:center;font-size:14px;font-style:italic;line-height:1.2;display:flex;align-items:center;text-align:center;margin:0;opacity:.9;height:100%;padding-top:30px;width:90%;margin:0 auto;}"]),y=w.d.div.withConfig({displayName:"styledComponents__ContBox",componentId:"sc-1rxq5vw-2"})(["display:flex;flex-direction:column;height:35%;padding:3px 10px 8px;background:#f1f1f1;position:relative;h4{font-size:18px;text-align:center;margin:0;text-transform:capitalize;}span{color:#383938;font-size:15px;text-align:center;display:flex;justify-content:center;}"]),I=w.d.div.withConfig({displayName:"styledComponents__ContImg",componentId:"sc-1rxq5vw-3"})(["height:40px;position:relative;top:-40%;.gatsby-image-wrapper{margin:0 auto;img{margin-bottom:0;border-radius:50%;overflow:hidden;object-position:center;object-fit:cover;width:55px;}}"]),k=function(e){var t=e.name,n=e.description,i=e.image,a=e.title;return r.a.createElement(v,null,r.a.createElement(C,null,r.a.createElement("div",{className:"quote-left"},r.a.createElement(f.a,{iconName:"quote-left",backgroundColor:"#383938",width:35,height:35})),r.a.createElement("p",null,n)),r.a.createElement(y,null,r.a.createElement(I,null,r.a.createElement(g.a,{sizes:i,style:{maxWidth:"70px"}})),r.a.createElement(d.a,{type:4,text:t,color:"#383938"}),r.a.createElement("span",null,a)))};k.propTypes={name:u.a.string,description:u.a.string,title:u.a.string,image:u.a.object};var j=k,B=(n(32),n(187));function Q(){var e=A()(["\n          font-size: 2rem;\n        "]);return Q=function(){return e},e}function M(){var e=A()(["\n        width: 45%;\n      "]);return M=function(){return e},e}function D(){var e=A()(["\n        width: 50%;\n      "]);return D=function(){return e},e}var z=w.d.div.withConfig({displayName:"styledComponents__BackgroundItem",componentId:"vd04pd-0"})(["color:white;width:100%;height:100%;"]),Y=w.d.div.withConfig({displayName:"styledComponents__CarouselItem",componentId:"vd04pd-1"})(["height:100vh;width:100vw;img,video{width:100%;height:100%;object-fit:cover;}position:relative;div.gatsby-image-wrapper{height:100%;width:100%;}div.grey-filter{position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.55);z-index:1;}div.detail-container{position:absolute;top:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;div.detail{display:flex;align-items:center;justify-content:center;flex-direction:column;width:72%;"," "," z-index:3;h3,span,a{color:white;text-align:center;}h3{font-size:1.3rem;letter-spacing:0.03rem;","}span{margin-top:2em;}a{margin-top:3em;background-color:#F28724;border-radius:4px;text-decoration:none;padding:0.5em 1em;font-family:'Averta';transition:all 0.3s ease;&:hover{background:#ffa44f !important;}}}}"],Object(b.a)("tablet")(D()),Object(b.a)("desktop")(M()),Object(b.a)("tablet")(Q())),O=n(150),G=n(153),N=function(e){var t=e.id,n=e.image,i=e.type,a=e.videoSrc,o=e.link,c=e.t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grey-filter"}),function(){switch(i){case"image":return r.a.createElement(g.a,{sizes:n});case"video":return r.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0},r.a.createElement("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag.");default:return null}}(),r.a.createElement("div",{className:"detail-container"},r.a.createElement("div",{className:"detail"},r.a.createElement(O.e,null,c("home.carousel."+t+".title")),r.a.createElement("span",null,c("home.carousel."+t+".description")),o&&r.a.createElement(s.Link,{to:o},c("home.carousel."+t+".linkText")))))};N.propTypes={id:u.a.number.isRequired,title:u.a.string,description:u.a.string,link:u.a.string,linkText:u.a.string,image:u.a.object,videoSrc:u.a.string};var P=Object(G.c)("translations")(N),T=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).renderItems=function(){var e=t.props,n=e.data;return e.data.site.siteMetadata.home.carousel.map(function(e){return r.a.createElement(z,{key:e.id},r.a.createElement(Y,null,r.a.createElement(P,Object.assign({},e,{image:"image"===e.type?n["office"+e.id].childImageSharp.sizes:{}}))))})},t}return a()(t,e),t.prototype.render=function(){return r.a.createElement(B.a,{dots:!0,arrows:!0,full:!0,fade:!0,autoplay:!0,autoplaySpeed:4e3},this.renderItems())},t}(o.PureComponent);T.propTypes={data:u.a.object.isRequired};var S=T,J=n(202),R=n(159),H=(n(201),w.d.div.withConfig({displayName:"chipDescription__ProcessContainer",componentId:"sc-1ccb4op-0"})(["width:100%;height:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;.avatar{width:10em;height:10em;overflow:visible !important;img{border-radius:50%;object-fit:cover !important;box-shadow:3px 3px 4px 0px rgba(0,0,0,0.25);}}div.detail{margin-top:1em;h4,p{text-align:center;}p{margin-top:1em;}}"])),F=function(e){var t=e.title,n=e.description,i=e.image,a=e.children;e.t;return r.a.createElement(H,null,r.a.createElement(g.a,{className:"avatar",sizes:i}),r.a.createElement("div",{className:"detail"},r.a.createElement(O.f,null,t),r.a.createElement("p",null,n),a))};F.propTypes={image:u.a.object.isRequired,title:u.a.string.isRequired,description:u.a.string.isRequired,children:u.a.object};var L=F;function q(){var e=A()(["\n    width: 40%;\n    margin-top: 0;\n  "]);return q=function(){return e},e}var X=Object(w.d)(H).withConfig({displayName:"styledComponents__EnhancedProcessContainer",componentId:"qzz7-0"})(["width:100%;margin-top:2em;&:first-child{margin-top:0;}"," div.technologies{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;}"],Object(b.a)("desktop")(q())),U={},V={};"undefined"!=typeof window&&(U=n(395),V=n(33));var W=Object(w.e)(["0%{box-shadow:0 5px 15px 0px rgba(0,0,0,0.2);transform:translatey(0px);}50%{box-shadow:0 15px 15px 0px rgba(0,0,0,0.1);transform:translatey(-7px);}100%{box-shadow:0 7px 15px 0px rgba(0,0,0,0.2);transform:translatey(0px);}"]),_=w.d.div.withConfig({displayName:"FloatingChip__ChipContainer",componentId:"sc-1789fss-0"})(["width:30%;height:auto;display:flex;justify-content:center;align-items:center;margin:0.5em 0;&:first-child{div.technology-item{span.tooltip{right:-50%;}}}&:last-child{div.technology-item{span.tooltip{right:-50%;}}}div.technology-item{width:4em;height:4em;margin:0 1em;position:relative;span.tooltip{position:absolute;background-color:rgba(0,0,0,0.85);color:white;border-radius:15px;top:0;right:-50%;padding:5px 1em;opacity:0;visibility:none;transition:all 0.5s ease-in-out;white-space:nowrap;}&:hover span.tooltip{top:-3em;opacity:1;visibility:visible;margin:auto;}&:hover .technology img{animation:none;}span.text{text-align:center;font-weight:800;display:block;width:100%;}div.technology-icon-container{width:3.6em;height:3.6em;overflow:hidden;transition:all ","s ease-in-out;animation:"," ","s ease-in-out infinite;border-radius:50%;background-color:white;box-sizing:border-box;display:flex;justify-content:center;align-items:center;&:hover{animation:none;}.technology{flex:1;width:3.6em;height:3.6em;border-radius:50%;img{flex:1;object-fit:contain !important;}}}}"],function(e){return e.duration},W,function(e){return e.duration}),Z=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).handleEmotion=function(){var e=t.props.color;t.moAnimation?t.moAnimation.replay():(t.moAnimation=new U.Burst({parent:V.findDOMNode(t.reactTech),radius:{30:49},angle:30,count:8,children:{radius:5,fill:e,scale:{1:0,easing:"sin.in"},pathScale:[.9,null],degreeShift:[13,null],duration:[500,700]}}),t.moAnimation.play())},t}return a()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.sizes,i=t.duration,a=t.tooltip,o=t.text;return r.a.createElement(_,{duration:i},r.a.createElement("div",{ref:function(t){return e.reactTech=t},className:"technology-item",onMouseEnter:this.handleEmotion},r.a.createElement("div",{className:"technology-icon-container"},r.a.createElement(g.a,{className:"technology",sizes:n})),a&&r.a.createElement("span",{className:"tooltip"},a),o&&r.a.createElement("span",{className:"text"},o)))},t}(o.PureComponent);Z.propTypes={sizes:u.a.object.isRequired,color:u.a.string,tooltip:u.a.string,text:u.a.string,duration:u.a.number};var K=Z,$=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).renderFloatingChips=function(){var e=t.props,n=e.process,i=e.data;return n.technologies.map(function(e){return r.a.createElement(K,{key:e.id,sizes:i[e.id].childImageSharp.sizes,color:e.color,duration:Math.floor(4*Math.random())+2,tooltip:e.tooltip})})},t}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.process,n=e.data,i=e.t;return r.a.createElement(X,null,r.a.createElement(L,Object.assign({},t,{title:i("home.processes.items."+t.id+".title"),description:i("home.processes.items."+t.id+".description"),image:n[t.id].childImageSharp.sizes}),r.a.createElement("div",{className:"technologies"},this.renderFloatingChips())))},t}(o.Component);$.propTypes={data:u.a.object.isRequired,process:u.a.object.isRequired};var ee=Object(G.c)("translations")($),te=n(396),ne=n.n(te),ie=n(397),ae=n.n(ie);function oe(){var e=A()(["\n    padding-top: .5em;\n    justify-content: flex-start;\n  "]);return oe=function(){return e},e}function re(){var e=A()(["\n      text-align: left;\n    "]);return re=function(){return e},e}function se(){var e=A()(["\n    padding-right: 0;\n  "]);return se=function(){return e},e}function ce(){var e=A()(["\n    padding-right: 20px;\n  "]);return ce=function(){return e},e}function le(){var e=A()(["\n      max-width: 120px;\n      right: 10px;\n    "]);return le=function(){return e},e}function de(){var e=A()(["\n      max-width: 100px;\n      right: 8px;\n    "]);return de=function(){return e},e}function pe(){var e=A()(["\n    padding-right: 0;\n  "]);return pe=function(){return e},e}function ue(){var e=A()(["\n    align-items: flex-start;\n    justify-content: flex-start;\n    padding-right: 20px;\n  "]);return ue=function(){return e},e}function me(){var e=A()(["\n    padding-bottom: 3.5em;\n    padding-left: 2.5em;\n  "]);return me=function(){return e},e}function ge(){var e=A()(["\n    width: 45%;\n    padding-top: 0;\n  "]);return ge=function(){return e},e}function fe(){var e=A()(["\n          width: 200px;\n        "]);return fe=function(){return e},e}function he(){var e=A()(["\n        width: 250px;\n      "]);return he=function(){return e},e}function Ae(){var e=A()(["\n      width: initial;\n    "]);return Ae=function(){return e},e}function we(){var e=A()(["\n    height: 600px;\n  "]);return we=function(){return e},e}function be(){var e=A()(["\n    width: 55%;\n  "]);return be=function(){return e},e}function xe(){var e=A()(["\n      height: 400px;\n      width: 400px;\n    "]);return xe=function(){return e},e}function Ee(){var e=A()(["\n      width: 100%;\n    "]);return Ee=function(){return e},e}function ve(){var e=A()(["\n    flex-direction: row;\n    padding-top: 3em;\n  "]);return ve=function(){return e},e}var Ce=w.d.div.withConfig({displayName:"styledComponents__BoxContent",componentId:"sc-5s13ez-0"})(["display:flex;flex-direction:column;padding-top:2em;",""],Object(b.a)("tablet")(ve())),ye=w.d.div.withConfig({displayName:"styledComponents__ContLeft",componentId:"sc-5s13ez-1"})(["display:flex;width:100%;position:relative;height:440px;justify-content:center;&:after{content:'';display:flex;background-image:url(",");background-repeat:no-repeat;background-size:contain;background-position:center;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;display:flex;justify-content:center;align-items:center;height:auto;width:90%;z-index:-2;opacity:.8;"," ","}"," "," .content-video{height:auto;width:100%;display:flex;"," .image-wrap{margin:0 auto;position:relative;width:220px;height:100%;display:flex;align-items:center;"," img{margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;}img.mockup{z-index:2;}img.imgGif{width:177px;right:-12px;","}}}"],ae.a,Object(b.a)("tablet")(Ee()),Object(b.a)("desktop")(xe()),Object(b.a)("tablet")(be()),Object(b.a)("desktop")(we()),Object(b.a)("desktop")(Ae()),Object(b.a)("desktop")(he()),Object(b.a)("desktop")(fe())),Ie=w.d.div.withConfig({displayName:"styledComponents__ContRight",componentId:"sc-5s13ez-2"})(["display:flex;width:90%;margin:0 auto;padding-top:1.5em;padding-bottom:3em;flex-direction:column;justify-content:center;align-items:center;"," ",""],Object(b.a)("tablet")(ge()),Object(b.a)("desktop")(me())),ke=w.d.div.withConfig({displayName:"styledComponents__RightTop",componentId:"sc-5s13ez-3"})(["display:flex;justify-content:space-around;align-items:center;width:100%;flex-direction:column;"," "," .gatsby-image-wrapper{width:100%;max-width:80px;"," ","}"],Object(b.a)("tablet")(ue()),Object(b.a)("desktop")(pe()),Object(b.a)("tablet")(de()),Object(b.a)("desktop")(le())),je=w.d.div.withConfig({displayName:"styledComponents__RightBottom",componentId:"sc-5s13ez-4"})(["display:flex;width:100%;justify-content:flex-end;padding-top:1em;flex-direction:column;"," "," p{text-align:center;width:100%;margin:0;","}"],Object(b.a)("tablet")(ce()),Object(b.a)("desktop")(se()),Object(b.a)("tablet")(re())),Be=w.d.div.withConfig({displayName:"styledComponents__Link",componentId:"sc-5s13ez-5"})(["display:flex;justify-content:center;align-items:center;padding-top:1em;",""],Object(b.a)("tablet")(oe())),Qe=w.d.a.withConfig({displayName:"styledComponents__A",componentId:"sc-5s13ez-6"})(["text-decoration:none;transition:all .5s;color:#F28724;font-size:.8em;&:hover{text-decoration:underline;span{margin-left:8px;}}span{position:relative;top:2px;margin-left:5px;transition:all .5s;}"]),Me=function(e){var t=e.description,n=e.image,i=e.title,a=e.textLink,o=e.link,s=e.video;return r.a.createElement(Ce,null,r.a.createElement(ye,null,r.a.createElement("div",{className:"content-video"},r.a.createElement("div",{className:"image-wrap"},r.a.createElement("img",{src:ne.a,alt:"mob",className:"mockup"}),r.a.createElement("img",{src:s,alt:"gif",className:"imgGif"})))),r.a.createElement(Ie,null,r.a.createElement(ke,null,r.a.createElement(g.a,{sizes:n}),r.a.createElement(d.a,{type:3,text:i})),r.a.createElement(je,null,r.a.createElement("p",null,t),r.a.createElement(Be,null,r.a.createElement(Qe,{href:o,className:"love"},a,r.a.createElement("span",{className:"contentIcon"},r.a.createElement(f.a,{iconName:"right",height:15,width:15,backgroundColor:"#333"})))))))};Me.propTypes={description:u.a.string,title:u.a.string,textLink:u.a.string,link:u.a.string,image:u.a.object,video:u.a.string};var De=Me,ze=n(182),Ye=n(165),Oe=n(398),Ge=n.n(Oe),Ne=n(194);n.d(t,"query",function(){return Te});var Pe=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).renderItems=function(){var e=t.props,n=e.data.site.siteMetadata.home.testimonials,i=e.data,a=e.t;return n.map(function(e){var t=e.id,n=e.name;return r.a.createElement(j,{key:t,name:n,description:a("home.testimonials."+t+".description"),title:a("home.testimonials."+t+".title"),image:i["Testimonial"+t].childImageSharp.sizes})})},t.renderProcesses=function(){var e=t.props,n=e.data.site.siteMetadata.home.processes,i=e.data;return n.map(function(e){return r.a.createElement(ee,{key:e.id,data:i,process:e})})},t}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.t,n=e.data,i=e.data.site.siteMetadata.home,a=(i.offices,i.weLove.link),o=i.getAQuote.urlGetAQuote,p=e.viewport,u=p.isMobileView?1:3;return u=p.isTabletView?2:u,r.a.createElement(G.a,{i18n:R.a},r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Home",keywords:["sancrisoft","digital-solutions"]}),r.a.createElement(S,{data:n}),r.a.createElement(Ne.b,null,r.a.createElement(O.i,null,r.a.createElement(d.a,{type:2,text:t("home.weLove.titleSection")}),r.a.createElement(De,{description:t("home.weLove.description"),title:t("home.weLove.title"),image:n.meattogo.childImageSharp.sizes,textLink:t("home.weLove.textLink"),link:a,video:Ge.a}))),r.a.createElement(Ne.a,null,r.a.createElement(O.i,null,r.a.createElement(d.a,{type:2,color:"#fff",text:t("home.testimonialsTitle")}),r.a.createElement(B.a,{dots:!0,slidesToShow:u,arrowColor:"#F28724",arrows:!1,swipeToSlide:!0,autoplay:!0,autoplaySpeed:6e3},this.renderItems()))),r.a.createElement(Ne.d,null,r.a.createElement(d.a,{type:2,text:t("home.processes.title")}),r.a.createElement("div",{className:"processes"},this.renderProcesses())),r.a.createElement(ze.a,{desc:t("home.getAQuote.description")},r.a.createElement(Ye.a,{size:"20px",text:t("home.getAQuote.titleButton"),onClick:function(){return Object(s.navigate)(o)}}))))},t}(o.Component),Te="3386089947";t.default=Object(G.c)("translations")(Object(J.a)(Pe))},151:function(e,t,n){"use strict";var i=n(4),a=n.n(i),o=n(0),r=n.n(o),s=n(150),c=function(e){var t=e.type,n=e.text,i=e.color,a=e.align;switch(t){case 2:return r.a.createElement(s.d,{style:{color:""+i,textAlign:""+a}},n);case 3:return r.a.createElement(s.e,{style:{color:""+i,textAlign:""+a}},n);case 4:return r.a.createElement(s.f,{style:{color:""+i,textAlign:""+a}},n);case 5:return r.a.createElement(s.g,{style:{color:""+i,textAlign:""+a}},n);case 6:return r.a.createElement(s.h,{style:{color:""+i,textAlign:""+a}},n);default:return r.a.createElement(s.c,{style:{color:""+i,textAlign:""+a}},n)}};c.propTypes={type:a.a.number,color:a.a.string,align:a.a.string},c.defaultProps={type:1,color:"#333",align:"center"},t.a=c},165:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(4),r=n.n(o),s=n(150),c=function(e){var t=e.text,n=e.color,i=e.background,o=e.size,r=e.padding,c=e.onClick;return a.a.createElement(s.a,{style:{color:""+n,background:""+i,fontSize:""+o,padding:""+r},onClick:c},t)};c.propTypes={color:r.a.string,text:r.a.string,size:r.a.string,background:r.a.string,onClick:r.a.func},c.defaultProps={color:"#fff",background:"#F28724",text:"Get a Quote",size:"14px",padding:"10px 20px",onClick:function(){}},t.a=c},180:function(e,t,n){e.exports=n.p+"static/offices-f61c0c2bbf1553c33dc6df5bd739a24f.jpg"},182:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(147),r=n.n(o),s=n(146),c=n(148),l=n(180),d=n.n(l);function p(){var e=r()(["\n      font-size: 25px;\n    "]);return p=function(){return e},e}function u(){var e=r()(["\n      font-size: 22px;\n    "]);return u=function(){return e},e}function m(){var e=r()(["\n    width: 991px;\n  "]);return m=function(){return e},e}function g(){var e=r()(["\n    width: 650px;\n  "]);return g=function(){return e},e}var f=s.d.div.withConfig({displayName:"styledComponents__ContentGetaQuote",componentId:"sc-11fiu63-0"})(["padding:3em 1em 2.5em;position:relative;width:100%;&::after{content:'';display:flex;position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;background-position:center center;background-size:cover;background-attachment:fixed;background-image:url(",");height:100%;z-index:-2;}&::before{content:'';display:flex;background:rgba(0,0,0,.7);position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;}"],d.a),h=s.d.div.withConfig({displayName:"styledComponents__Container",componentId:"sc-11fiu63-1"})(["width:100%;margin:0 auto;"," ",""],Object(c.a)("tablet")(g()),Object(c.a)("desktop")(m())),A=s.d.div.withConfig({displayName:"styledComponents__QuoteTop",componentId:"sc-11fiu63-2"})(["padding:1em .5em 0;display:flex;justify-content:center;align-items:center;p{text-align:center;color:#fff;text-shadow:1px 1px 2px #333;font-size:18px;line-height:1.7;"," ","}"],Object(c.a)("tablet")(u()),Object(c.a)("desktop")(p())),w=s.d.div.withConfig({displayName:"styledComponents__QuoteBottom",componentId:"sc-11fiu63-3"})(["display:flex;justify-content:center;align-items:center;padding:1.5em 1.5em 1.2em;font-family:'Averta';transition:all 0.3s ease;button{&:hover{background:#ffa44f !important;}}"]);t.a=function(e){var t=e.children,n=e.desc;return a.a.createElement(f,null,a.a.createElement(h,null,a.a.createElement(A,null,a.a.createElement("p",{className:"description"},n)),t&&a.a.createElement(w,null,t)))}},187:function(e,t,n){"use strict";n(32);var i=n(7),a=n.n(i),o=n(0),r=n.n(o),s=n(4),c=n.n(s),l=n(226),d=n.n(l),p=(n(228),n(229),n(147)),u=n.n(p),m=n(146),g=n(148);function f(){var e=u()(["\n            font-size: 20px;\n          "]);return f=function(){return e},e}function h(){var e=u()(["\n      right: 2%;\n    "]);return h=function(){return e},e}function A(){var e=u()(["\n        width: 48px;\n        height: 48px;\n      "]);return A=function(){return e},e}function w(){var e=u()(["\n        width: 36px;\n        height: 36px;\n      "]);return w=function(){return e},e}var b=m.d.div.withConfig({displayName:"styledComponents__CarouselContainer",componentId:"i2hpv-0"})(["height:",";width:100%;overflow:hidden;position:relative;.slick-arrow{position:absolute;z-index:1;top:50%;svg{width:25px;height:25px;"," ","}}.slick-prev{left:2%;&:before{display:none;}}.slick-next{right:5%;"," &:before{display:none;}}.slick-dots{position:absolute;top:90%;li,button{width:30px;height:30px;}li{&.slick-active{button{&:before{color:#FFFFFF;}}}button{&:before{color:#cfcfcf;font-size:14px;","}}}}"],function(e){return e.full?"100vh":""},Object(g.a)("desktop")(w()),Object(g.a)("desktop")(A()),Object(g.a)("desktop")(h()),Object(g.a)("desktop")(f())),x=n(161),E=function(e){var t=e.className,n=(e.style,e.onClick),i=e.backgroundColor;return r.a.createElement("div",{className:t,onClick:n},r.a.createElement(x.a,{backgroundColor:i,iconName:"left-arrow"}))},v=function(e){var t=e.className,n=(e.style,e.onClick),i=e.backgroundColor;return r.a.createElement("div",{className:t,onClick:n},r.a.createElement(x.a,{backgroundColor:i,iconName:"right-arrow"}))},C={speed:750,infinite:!0,slidesToShow:1,slidesToScroll:1,pauseOnHover:!0,lazyLoad:!0,responsive:[]},y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.arrows,i=e.dots,a=e.fade,o=e.autoplay,s=e.autoplaySpeed,c=e.slidesToShow,l=e.arrowColor,p=e.swipeToSlide,u=e.full,m=e.responsive;return r.a.createElement(b,{full:u},r.a.createElement(d.a,Object.assign({},C,{dots:i,fade:a,autoplay:o,autoplaySpeed:s,slidesToShow:c,arrows:n&&t.length&&t.length>1,nextArrow:r.a.createElement(v,{backgroundColor:l}),prevArrow:r.a.createElement(E,{backgroundColor:l}),swipeToSlide:p,responsive:m}),t))},t}(o.PureComponent);y.propTypes={full:c.a.bool,slidesToShow:c.a.number,dots:c.a.bool,arrows:c.a.bool,fade:c.a.bool,autoplay:c.a.bool,swipeToSlide:c.a.bool,autoplaySpeed:c.a.number,arrowColor:c.a.string,responsive:c.a.array},y.defaultProps={full:!1,slidesToShow:1,dots:!0,arrows:!0,fade:!1,autoplay:!1,swipeToSlide:!1,autoplaySpeed:4e3,arrowColor:"#FFFFFF"};t.a=y},194:function(e,t,n){"use strict";n.d(t,"b",function(){return g}),n.d(t,"a",function(){return f}),n.d(t,"d",function(){return A}),n.d(t,"c",function(){return w});var i=n(147),a=n.n(i),o=n(146),r=n(148),s=n(195),c=n.n(s);function l(){var e=a()(["\n        padding-bottom: 75% !important;\n      "]);return l=function(){return e},e}function d(){var e=a()(["\n    height: 80vh;\n  "]);return d=function(){return e},e}function p(){var e=a()(["\n      flex-direction: row;\n      margin-top: 2em;\n      justify-content: space-between;\n    "]);return p=function(){return e},e}function u(){var e=a()(["\n      width: 100%;\n    "]);return u=function(){return e},e}function m(){var e=a()(["\n      width: 100%;\n    "]);return m=function(){return e},e}var g=o.d.section.withConfig({displayName:"styledComponents__ContWeLove",componentId:"sc-1ou3uz1-0"})(["display:flex;padding-top:2.5em;padding-bottom:1em;h2{width:90%;margin:0 auto;","}"],Object(r.a)("tablet")(m())),f=o.d.section.withConfig({displayName:"styledComponents__ContTestimonial",componentId:"sc-1ou3uz1-1"})(["display:flex;align-items:center;min-height:500px;position:relative;background:rgba(0,0,0,.5);overflow:hidden;padding-top:40px;&:after{content:'';display:block;background-image:url(",");background-size:cover;position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;opacity:.5;}h2{width:90%;margin:0 auto;","}.slick-slider{padding-top:20px;.slick-list{height:420px;.slick-track{height:85%;overflow:hidden;.slick-slide{height:100%;display:flex;align-items:center;justify-content:center;&:focus{outline:none;}}}}}"],c.a,Object(r.a)("tablet")(u())),h=o.d.div.withConfig({displayName:"styledComponents__PageSizer",componentId:"sc-1ou3uz1-2"})(["margin:0 auto;max-width:1024px;"]),A=Object(o.d)(h).withConfig({displayName:"styledComponents__WhatWeDo",componentId:"sc-1ou3uz1-3"})(["padding-top:2em;width:100%;height:auto;display:flex;flex-direction:column;justify-content:space-around;align-items:center;margin-bottom:1rem;div.processes{display:flex;flex-direction:column;justify-content:center;margin:2em;"," div.detail{p{font-size:0.8rem;}}}"],Object(r.a)("desktop")(p())),w=o.d.div.withConfig({displayName:"styledComponents__Content404",componentId:"sc-1ou3uz1-4"})(["display:flex;flex-direction:column;justify-content:center;height:65vh;padding:2em 1em;margin:0 auto;width:100%;background:#f8f8f8;"," .gatsby-image-wrapper{width:99%;margin:auto;max-width:1024px;& > div{padding-bottom:100% !important;","}}"],Object(r.a)("desktop")(d()),Object(r.a)("tablet")(l()))},195:function(e,t,n){e.exports=n.p+"static/desktop-dcb209d6416e33a8df74b2ddfc5c77de.jpg"},201:function(e,t,n){"use strict";var i=n(7),a=n.n(i),o=n(0),r=n.n(o),s=n(4),c=n.n(s),l=n(147),d=n.n(l),p=n(146),u=n(150),m=n(148);function g(){var e=d()(["\n      font-size: 1em;\n    "]);return g=function(){return e},e}function f(){var e=d()(["\n      padding: 0em;\n    "]);return f=function(){return e},e}function h(){var e=d()(["\n      justify-content: center;\n    "]);return h=function(){return e},e}function A(){var e=d()(["\n      font-size: 1.4em;\n    "]);return A=function(){return e},e}var w=p.d.button.withConfig({displayName:"styledComponents__ButtonSelector",componentId:"sc-16gvbrf-0"})(["background-color:#f5f7fa;border:none;color:black;cursor:pointer;transition:all .25s ease-in-out;opacity:0.45;border-bottom:0px solid #f5f7fa;height:12em;display:flex;flex-direction:column;width:46%;padding:0;justify-content:flex-start;align-items:center;h4{align-self:flex-start;font-size:1.2em;","}&:first-child{margin-right:5px;}&:last-child{margin-left:5px;}&:active,&:visited{border:none;}&:hover,&.active{transform:scale(1.05);opacity:1;border-bottom:4px solid #F28724;}&:focus{outline:0;}",""],Object(m.a)("tablet")(A()),Object(m.a)("tablet")(h())),b=p.d.section.withConfig({displayName:"styledComponents__SectionContainer",componentId:"sc-16gvbrf-1"})(["padding-top:1em;width:100%;height:auto;display:flex;align-items:flex-end;justify-content:space-around;align-items:center;flex-direction:column;background-color:#f5f7fa;",".buttons-container{width:100%;display:flex;justify-content:space-around;padding:0 1em;","}.map-container{margin-top:8px;width:100%;height:40vh;}",".section-heading{margin:1em;text-align:center;}"],u.i,Object(m.a)("desktop")(f()),u.e),x=p.d.div.withConfig({displayName:"styledComponents__Column",componentId:"sc-16gvbrf-2"})(["margin-top:1em;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;span{text-align:left;font-size:0.8em;","}"],Object(m.a)("tablet")(g())),E=n(199),v="AIzaSyC1mS0oYjAJ6rkCK--bRm3JUN74amLExzw",C=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).state={selectedOffice:"none"},t.componentDidMount=function(){var e=t.props.offices;t.setState({selectedOffice:e[0].id},function(){return t.forceUpdate()})},t.renderSelectors=function(){var e=t.props.offices,n=t.state.selectedOffice;return e.map(function(e){return r.a.createElement(w,{key:e.id,className:n===e.id?"active":null,onClick:function(){return t.setState({selectedOffice:e.id})}},r.a.createElement(u.f,null,e.title),r.a.createElement(x,null,r.a.createElement("span",null,e.address1),r.a.createElement("span",null,e.address2,". ",e.state),r.a.createElement("span",null,e.phone)))})},t}return a()(t,e),t.prototype.render=function(){var e=this.props.title;return r.a.createElement(b,null,e&&r.a.createElement(u.e,{className:"section-heading"},e),r.a.createElement(u.i,{className:"buttons-container"},this.renderSelectors()),r.a.createElement("div",{className:"map-container"},r.a.createElement(E.a,{url:"https://www.google.com/maps/embed/v1/place?key="+v+"&q=Sancrisoft+Calle+49+Sur+Envigado+Antioquia",width:"100%",height:"100%",id:"map",className:"myClassname",display:"initial",position:"relative",allowfullscreen:!0})))},t}(o.Component);C.propTypes={offices:c.a.arrayOf(c.a.object).isRequired,markerIcon:c.a.object,title:c.a.string.isRequired}},396:function(e,t,n){e.exports=n.p+"static/iphonePrueba-95d66057df462698063764dfea430cdb.png"},397:function(e,t){e.exports="data:image/png;base64,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"},398:function(e,t,n){e.exports=n.p+"static/videoHome-389632ec9685e0d40bf291404f5552c7.gif"}}]);
//# sourceMappingURL=component---src-pages-index-js-a8fc96363ec4e7c08b31.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,t,n){"use strict";n.r(t);n(28);var i=n(6),r=n.n(i),a=n(0),o=n.n(a),s=n(4),l=n.n(s),c=n(150),d=n(208),p=n.n(d),m=n(165),u=n(155),f=n(153),g=n(147),h=n(154),y=n(163),b=n(191),w=n(143),v=n.n(w),x=n(141),E=n.n(x),C=n(140),j=n(142);function S(){var e=E()(["\n    grid-column: ",";\n    grid-row: ",";\n  "]);return S=function(){return e},e}function P(){var e=E()(["\n    grid-column: ",";\n    grid-row: ",";\n  "]);return P=function(){return e},e}function _(){var e=E()(["\n    height: 80vh;\n    grid-template-columns: repeat(4, 1fr);\n  "]);return _=function(){return e},e}function k(){var e=E()(["\n    grid-template-columns: repeat(2, 1fr);\n  "]);return k=function(){return e},e}var I=C.d.div.withConfig({displayName:"styledComponents__GridContainer",componentId:"sc-1yokxmi-0"})(["width:100%;display:grid;grid-template-columns:1fr;grid-auto-rows:minmax(100px,auto);grid-auto-flow:dense;grid-gap:5px;overflow:hidden;"," ",""],Object(j.a)("tablet")(k()),Object(j.a)("desktop")(_())),z=C.d.div.withConfig({displayName:"styledComponents__ImageContainer",componentId:"sc-1yokxmi-1"})(["grid-column:",";grid-row:",";"," "," .gatsby-image-wrapper{height:100%;width:100%;}"],function(e){var t=e.mobileColSpan;return t?"span "+t:"unset"},function(e){var t=e.mobileRowSpan;return t?"span "+t:"unset"},Object(j.a)("tablet")(P(),function(e){var t=e.tabletColSpan;return t?"span "+t:"unset"},function(e){var t=e.tabletRowSpan;return t?"span "+t:"unset"}),Object(j.a)("desktop")(S(),function(e){var t=e.colSpan;return t?"span "+t:"unset"},function(e){var t=e.rowSpan;return t?"span "+t:"unset"})),N=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).renderGridImages=function(){return t.props.images.map(function(e){return o.a.createElement(z,{key:e.id,colSpan:e.colSpan,rowSpan:e.rowSpan,mobileColSpan:e.mobileColSpan,mobileRowSpan:e.mobileRowSpan,tabletColSpan:e.tabletColSpan,tabletRowSpan:e.tabletRowSpan},o.a.createElement(v.a,{sizes:e.sizes}))})},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement(I,null,this.renderGridImages())},t}(a.PureComponent);N.propTypes={images:l.a.arrayOf(l.a.shape({id:l.a.id,sizes:l.a.object,colSpan:l.a.number,rowSpan:l.a.number,mobileColSpan:l.a.number,mobileRowSpan:l.a.number,tabletColSpan:l.a.number,tabletRowSpan:l.a.number}))};var R=N,A=(n(146),n(238)),O=n(226),T=n.n(O),q=n(232),L=n.n(q);function F(){var e=E()(["\n    margin: 2em;\n  "]);return F=function(){return e},e}var M=C.d.div.withConfig({displayName:"styledComponents__Container",componentId:"jaqp7g-0"})(["padding:2em 2em;border-radius:10px;background-color:#ebebeb;margin:1em;position:sticky;top:80px;",' h3{text-align:center;}form{display:flex;flex-direction:column;margin-top:2em;label.error{margin-top:5px;font-weight:normal;color:#d61400;font-size:14px;font-style:italic;position:relative;top:-4px;}div.submit{display:flex;justify-content:center;align-items:center;}div.reminder > label{font-style:italic;font-size:14px;margin-top:10px;}div.form-control{display:flex;flex-direction:column;input[aria-invalid="true"],textarea[aria-invalid="true"]{margin-bottom:0;}input,textarea{border:none;margin:10px 0 15px 0;padding:5px;&:focus{outline:0;}}textarea{resize:vertical;}}input[type="submit"]{background-color:#F28724;border:none;border-radius:4px;color:white;padding:6px 20px;font-size:0.9rem;margin-top:2em;cursor:pointer;&:hover{background-color:#ffa44f;}&:focus{outline:0;}}}'],Object(j.a)("tablet")(F())),D=n(144),B=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,G=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={email:"",position:"",why:"",emailError:"",positionError:"",whyError:"",dirty:!1,alertMessage:"",titleAlert:"",showAlert:!1,alertType:"success"},t.validate=function(){var e=t.state,n=e.email,i=e.position,r=e.why,a=t.props.t,o=!0;return n?n&&!B.test(n)?(o=!1,t.setState({emailError:a("careers.join.emailError"),dirty:!0})):t.setState({emailError:""}):(o=!1,t.setState({emailError:a("careers.join.noFieldError"),dirty:!0})),i?t.setState({positionError:""}):(o=!1,t.setState({positionError:a("careers.join.noFieldError"),dirty:!0})),r?t.setState({whyError:""}):(o=!1,t.setState({whyError:a("careers.join.noFieldError"),dirty:!0})),o},t.changeField=function(e){var n,i=e.target,r=i.name,a=i.value;t.setState(((n={})[r]=a,n),function(){t.state.dirty&&t.validate()})},t.closeAlert=function(){return t.setState({showAlert:!1})},t.handleSubmit=function(e){e.preventDefault(),t.validate()&&t.captchaRef.execute()},t.sendEmail=function(e){var n=t.state,i=n.email,r=n.position,a=n.why,o=t.props.t;if(e){var s={email:i,position:r,why:a};T.a.post("https://submit-form.com/4giIQwtVFQRA95qYQrYHS",s,{headers:{Accept:"application/json"}}).then(function(e){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"form_submitted",category:"Join Us Form",subject:r}),t.captchaRef.props.grecaptcha.reset(),t.setState({email:"",position:"",why:"",titleAlert:o("careers.join.successTitle"),typeAlert:"success",alertMessage:o("careers.join.successBody"),showAlert:!0,alertType:"success"})}).catch(function(e){t.captchaRef.props.grecaptcha.reset(),t.setState({titleAlert:o("careers.join.errorTitle"),typeAlert:"info",alertMessage:o("careers.join.errorBody"),showAlert:!0,alertType:"error"})})}},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.title,i=t.emailLabel,r=t.positionLabel,a=t.whyLabel,s=t.reminder,l=t.submitLabel,c=this.state,d=c.email,p=c.position,m=c.why,u=c.emailError,f=c.positionError,g=c.whyError,h=c.showAlert,y=c.titleAlert,b=c.alertMessage,w=c.alertType;return o.a.createElement(M,null,o.a.createElement(D.e,null,n),o.a.createElement("form",{ref:function(t){return e.joinUsForm=t},onSubmit:this.handleSubmit,method:"POST"},o.a.createElement("div",{className:"form-control"},o.a.createElement("label",{htmlFor:"email"},i),o.a.createElement("input",{id:"email",type:"email",name:"email",value:d,onChange:this.changeField,"aria-invalid":""!==u}),u&&o.a.createElement("label",{className:"error"},u)),o.a.createElement("div",{className:"form-control"},o.a.createElement("label",{htmlFor:"position"},r),o.a.createElement("input",{id:"position",type:"text",name:"position",value:p,onChange:this.changeField,"aria-invalid":""!==f}),f&&o.a.createElement("label",{className:"error"},f)),o.a.createElement("div",{className:"form-control"},o.a.createElement("label",{htmlFor:"why"},a),o.a.createElement("textarea",{id:"why",name:"why",value:m,onChange:this.changeField,"aria-invalid":""!==g}),g&&o.a.createElement("label",{className:"error"},g)),o.a.createElement("div",{className:"reminder"},o.a.createElement("label",null,s)),o.a.createElement(A.a,{ref:function(t){return e.captchaRef=t},size:"invisible",sitekey:"6LdeBokUAAAAAM01lWglTU0siI1fmMRoGjCE_94b",onChange:this.sendEmail}),o.a.createElement("div",{className:"submit"},o.a.createElement("input",{type:"submit",value:l,disabled:u||f||g}))),o.a.createElement(L.a,{show:h,title:y,text:b,onConfirm:this.closeAlert,type:w}))},t}(a.Component);G.propTypes={title:l.a.string.isRequired,joinUsEmail:l.a.string.isRequired,emailLabel:l.a.string.isRequired,positionLabel:l.a.string.isRequired,whyLabel:l.a.string.isRequired,reminder:l.a.string.isRequired,submitLabel:l.a.string.isRequired};var U=Object(g.c)("translations")(G);function J(){var e=E()(["\n    width: 40%;\n  "]);return J=function(){return e},e}function Q(){var e=E()(["\n    width: 60%;\n  "]);return Q=function(){return e},e}function V(){var e=E()(["\n    padding: 0;\n  "]);return V=function(){return e},e}function H(){var e=E()(["\n    flex-direction: row;\n  "]);return H=function(){return e},e}var Y=C.d.section.withConfig({displayName:"styledComponents__SectionContainer",componentId:"sc-3csw92-0"})(["padding-top:2em;width:100%;display:flex;flex-direction:column;align-items:center;"]),$=C.d.div.withConfig({displayName:"styledComponents__RecruitmentProcessContainer",componentId:"sc-3csw92-1"})(["width:100%;display:flex;flex-direction:row;align-items:center;padding:2em 0 0 0;flex-wrap:wrap;justify-content:center;"]),W=C.d.div.withConfig({displayName:"styledComponents__PositonsContainer",componentId:"sc-3csw92-2"})(["width:100%;display:flex;flex-direction:row;align-items:center;padding:2em 0;flex-wrap:wrap;justify-content:center;"]),K=C.d.div.withConfig({displayName:"styledComponents__PositionCard",componentId:"sc-3csw92-3"})(["width:15em;background-color:#ebebeb;padding:1.5em 2em;border-radius:0.3em;margin:20px;"]),X=C.d.h4.withConfig({displayName:"styledComponents__H4",componentId:"sc-3csw92-4"})(["font-size:1em;margin-bottom:1em;height:2em;"]),Z=C.d.h5.withConfig({displayName:"styledComponents__PositionSubtitles",componentId:"sc-3csw92-5"})(["font-size:1.2em;margin-bottom:1em;"]),ee=C.d.h5.withConfig({displayName:"styledComponents__SubTitle",componentId:"sc-3csw92-6"})(['font-size:0.75em;margin:1em 0;font-family:"LatoBold";color:#000;']),te=C.d.img.withConfig({displayName:"styledComponents__ImgCustom",componentId:"sc-3csw92-7"})(["max-height:200px;margin:1em 0 0 0;width:100%;object-fit:cover;"]),ne=C.d.div.withConfig({displayName:"styledComponents__PositionDetailsContainer",componentId:"sc-3csw92-8"})(["padding:0 1em;display:flex;flex-direction:column;"," ",""],Object(j.a)("tablet")(H()),Object(j.a)("desktop")(V())),ie=C.d.div.withConfig({displayName:"styledComponents__PositionDetailsText",componentId:"sc-3csw92-9"})(["width:100%;",""],Object(j.a)("tablet")(Q())),re=C.d.div.withConfig({displayName:"styledComponents__PositionDetailsForm",componentId:"sc-3csw92-10"})(["width:100%;",""],Object(j.a)("tablet")(J()));n.d(t,"query",function(){return le});var ae=function(e){var t=e.id,n=e.onClick,i=e.text;return o.a.createElement(y.a,{text:i,padding:"5px 10px",size:"12px",onClick:function(){n(t)}})};ae.propTypes={id:l.a.number.isRequired,onClick:l.a.func.isRequired,text:l.a.string.isRequired};var oe=function(e){for(var t=e.openPositions,n=e.t,i=e.onClickPosition,r=[],a=0;a<t;a++)r.push(o.a.createElement(K,{key:"position-card-"+a},o.a.createElement(X,null,n("careers.openPositions.positions."+a+".title")),o.a.createElement(ee,null,n("careers.openPositions.positions."+a+".mode")),o.a.createElement(ae,{id:a,onClick:i,text:n("careers.openPositions.positions."+a+".moreLink")})));return o.a.createElement(W,null,r)};oe.defaultProps={openPositions:l.a.number.isRequired,t:l.a.object.isRequired,onClickPosition:l.a.func.isRequired};var se=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={openPositionSelected:null},t.renderOurRecruitment=function(){var e=t.props,n=e.data.site.siteMetadata.careers.recruitmentProcess,i=e.data,r=e.t;return n.map(function(e,t){return o.a.createElement(b.a,{key:t+"-"+e,title:r("careers.recruitmentProcess."+e+".title"),description:r("careers.recruitmentProcess."+e+".description"),image:i[e+"Icon"].childImageSharp.sizes,contentCustomStyles:{paddingBottom:0}})})},t.onClickPosition=function(e){var n=(0,t.props.t)("careers.openPositions.positions."+e+".friendlyId");t.setState({openPositionSelected:e},function(){document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}),setTimeout(function(){window.location.hash=n},300)},t.renderBenefits=function(){var e=t.props,n=e.data.site.siteMetadata.careers.benefits,i=e.data,r=e.t;return n.map(function(e){return o.a.createElement(b.a,{key:e,description:r("careers.benefits."+e+".description"),title:r("careers.benefits."+e+".title"),image:i[""+e].childImageSharp.sizes,descDirection:"row",chipOn:!0})})},t.renderGalleryGrid=function(){var e=t.props,n=e.data.site.siteMetadata.careers.teamPhotos,i=e.data;return o.a.createElement(R,{images:n.map(function(e){return Object.assign({},e,{sizes:i[e.id].childImageSharp.sizes})})})},t.renderJoinUs=function(){var e=t.props,n=e.data.site.siteMetadata.careers.joinUsEmail,i=e.t;return o.a.createElement(U,{joinUsEmail:n,title:i("careers.join.title"),emailLabel:i("careers.join.emailLabel"),positionLabel:i("careers.join.positionLabel"),whyLabel:i("careers.join.whyLabel"),reminder:i("careers.join.reminder"),submitLabel:i("careers.join.submitLabel")})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.data.site.siteMetadata.careers.openPositions,n=e.t,i=window.location.hash?window.location.hash.substr(1):null;if(i)for(var r=0;r<t;r++)if(n("careers.openPositions.positions."+r+".friendlyId")===i)return this.setState({openPositionSelected:r}),void setTimeout(function(){document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})},1e3)},n.render=function(){var e=this.state.openPositionSelected,t=this.props,n=t.data.site.siteMetadata.careers.openPositions,i=t.data,r=t.t;return o.a.createElement(g.a,{i18n:h.a},o.a.createElement(u.a,null,o.a.createElement(f.a,{title:"Sancrisoft | Careers",keywords:["sancrisoft","digital-solutions"],description:"page Careers"}),o.a.createElement("section",null,o.a.createElement(m.a,{image:i.careersMainImage.childImageSharp.sizes,title:r("careers.bigImage.title"),description:r("careers.bigImage.description")})),o.a.createElement(D.i,null,o.a.createElement(Y,null,o.a.createElement(D.e,null,r("careers.recruitment.title")),o.a.createElement($,null,this.renderOurRecruitment()),o.a.createElement(D.e,null,r("careers.openPositions.title")),o.a.createElement(oe,{openPositions:n,t:r,onClickPosition:this.onClickPosition})),null!==e&&o.a.createElement(ne,null,o.a.createElement(ie,null,o.a.createElement("div",{id:r("careers.openPositions.positions."+e+".friendlyId"),style:{paddingTop:"100px",marginTop:"-100px"}},o.a.createElement(D.e,null,r("careers.openPositions.positions."+e+".title"))),r(["careers.openPositions.positions."+e+".image",""])&&o.a.createElement(te,{src:Object(c.withPrefix)("/images/careers/"+r("careers.openPositions.positions."+e+".image"))}),r(["careers.openPositions.positions."+e+".positionDescription",""])&&o.a.createElement("div",null,o.a.createElement(Z,{style:{marginTop:"1em"}},r("careers.openPositions.positionDescriptionTitle")),p()(r("careers.openPositions.positions."+e+".positionDescription"))),r(["careers.openPositions.positions."+e+".technicalSkills",""])&&o.a.createElement("div",null,o.a.createElement(Z,null,r("careers.openPositions.technicalSkillsTitle")),p()(r("careers.openPositions.positions."+e+".technicalSkills"))),r(["careers.openPositions.positions."+e+".responsabilities",""])&&o.a.createElement("div",null,o.a.createElement(Z,null,r("careers.openPositions.responsabilitiesTitle")),p()(r("careers.openPositions.positions."+e+".responsabilities"))),r(["careers.openPositions.positions."+e+".extraContent",""])&&o.a.createElement("div",null,o.a.createElement(Z,null,r("careers.openPositions.positions."+e+".extraTitle")),p()(r("careers.openPositions.positions."+e+".extraContent")))),o.a.createElement(re,null,this.renderJoinUs())),o.a.createElement(Y,null,o.a.createElement(D.e,null,r("careers.benefits.title")),o.a.createElement($,null,this.renderBenefits()))),this.renderGalleryGrid()))},t}(a.Component),le="1270043538";t.default=Object(g.c)("translations")(se)},145:function(e,t,n){"use strict";var i=n(4),r=n.n(i),a=n(0),o=n.n(a),s=n(144),l=function(e){var t=e.type,n=e.text,i=e.color,r=e.align;switch(t){case 2:return o.a.createElement(s.d,{style:{color:""+i,textAlign:""+r}},n);case 3:return o.a.createElement(s.e,{style:{color:""+i,textAlign:""+r}},n);case 4:return o.a.createElement(s.f,{style:{color:""+i,textAlign:""+r}},n);case 5:return o.a.createElement(s.g,{style:{color:""+i,textAlign:""+r}},n);case 6:return o.a.createElement(s.h,{style:{color:""+i,textAlign:""+r}},n);default:return o.a.createElement(s.c,{style:{color:""+i,textAlign:""+r}},n)}};l.propTypes={type:r.a.number,color:r.a.string,align:r.a.string},l.defaultProps={type:1,color:"#333",align:"center"},t.a=l},163:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(4),o=n.n(a),s=n(144),l=function(e){var t=e.text,n=e.color,i=e.background,a=e.size,o=e.padding,l=e.onClick,c=e.className;return r.a.createElement(s.a,{className:c,style:{color:""+n,background:""+i,fontSize:""+a,padding:""+o},onClick:l},t)};l.propTypes={color:o.a.string,text:o.a.string,size:o.a.string,background:o.a.string,onClick:o.a.func},l.defaultProps={color:"#fff",background:"#F28724",text:"Get a Quote",size:"14px",padding:"10px 20px",onClick:function(){}},t.a=l},165:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(4),o=n.n(a),s=n(143),l=n.n(s),c=n(140),d=c.d.div.withConfig({displayName:"styledComponents__MainContainer",componentId:"sc-1j7jjn0-0"})(["width:100%;height:50vh;position:relative;div.detail{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;top:0;z-index:3;width:100%;height:100%;h2,p{color:white;text-align:center;padding:0 1em;}}.image-container{width:100%;height:100%;img{flex:1;object-fit:cover;position:absolute;z-index:1;}}"]),p=c.d.div.withConfig({displayName:"styledComponents__GreyFilter",componentId:"sc-1j7jjn0-1"})(["position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.55);z-index:2;"]),m=n(144),u=function(e){var t=e.title,n=e.description,i=e.image;return r.a.createElement(d,null,r.a.createElement(p,null),r.a.createElement(l.a,{className:"image-container",sizes:i}),r.a.createElement("div",{className:"detail"},r.a.createElement(m.d,null,t),r.a.createElement("p",null,n)))};u.propTypes={image:o.a.object.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired};t.a=u},191:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(4),o=n.n(a),s=n(143),l=n.n(s),c=n(140),d=n(145),p=n(141),m=n.n(p),u=n(142);function f(){var e=m()(["\n      text-align: ",";\n    "]);return f=function(){return e},e}function g(){var e=m()(["\n        text-align: ",";\n      "]);return g=function(){return e},e}function h(){var e=m()(["\n    margin-left: ",";\n  "]);return h=function(){return e},e}function y(){var e=m()(["\n      width: ",";\n    "]);return y=function(){return e},e}function b(){var e=m()(["\n      width: ",";\n    "]);return b=function(){return e},e}function w(){var e=m()(["\n    width: 95%;\n    flex-direction: ",";\n  "]);return w=function(){return e},e}function v(){var e=m()(["\n    width: 24%;\n  "]);return v=function(){return e},e}function x(){var e=m()(["\n    width: 32%;\n  "]);return x=function(){return e},e}function E(){var e=m()(["\n    width: 48%;\n  "]);return E=function(){return e},e}var C=c.d.div.withConfig({displayName:"styledComponents__ContentOurValue",componentId:"iqggf4-0"})(["display:flex;align-items:center;width:100%;padding-bottom:2em;"," "," ",""],Object(u.a)("sm")(E()),Object(u.a)("md")(x()),Object(u.a)("lg")(v())),j=c.d.div.withConfig({displayName:"styledComponents__Box",componentId:"iqggf4-1"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;margin:0 auto;",""],Object(u.a)("md")(w(),function(e){return e.direction})),S=c.d.div.withConfig({displayName:"styledComponents__BoxImage",componentId:"iqggf4-2"})(["display:flex;justify-content:center;align-items:center;padding-bottom:15px;.gatsby-image-wrapper{width:",";"," ","}"],function(e){return e.little?"70px":"150px"},Object(u.a)("md")(b(),function(e){return e.little?"60px":"130px"}),Object(u.a)("lg")(y(),function(e){return e.little?"50px":"150px"})),P=c.d.div.withConfig({displayName:"styledComponents__Boxtitle",componentId:"iqggf4-3"})(["display:flex;justify-content:center;align-items:center;width:100%;h3,h6{width:100%;font-size:20px;}"]),_=c.d.div.withConfig({displayName:"styledComponents__BoxDesc",componentId:"iqggf4-4"})(["display:flex;justify-content:center;align-items:center;p{text-align:center;font-size:16px;line-height:1.2;}"]),k=c.d.div.withConfig({displayName:"styledComponents__DescContainer",componentId:"iqggf4-5"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"," ","{h6,h3{text-align:center;font-size:",";","}}p{text-align:center;font-size:",";","}"],Object(u.a)("md")(h(),function(e){return"row"===e.direction?"1em":0}),P,function(e){return"row"===e.direction?"16px":"20px"},Object(u.a)("md")(g(),function(e){return"row"===e.direction?"start !important":"center"}),function(e){return"row"===e.direction?"14px":"16px"},Object(u.a)("md")(f(),function(e){return"row"===e.direction?"start !important":"center"})),I={breakpoints:{xs:0,sm:568,md:768,lg:992,xl:1200,desktop:992}},z=function(e){var t=e.description,n=e.title,i=e.image,a=e.contentCustomStyles,o=e.descDirection,s="row"===o;return r.a.createElement(c.a,{theme:I},r.a.createElement(C,{style:a},r.a.createElement(j,{direction:o},r.a.createElement(S,{little:s},r.a.createElement(l.a,{sizes:i})),r.a.createElement(k,{direction:o},r.a.createElement(P,null,r.a.createElement(d.a,{type:s?6:3,text:n})),r.a.createElement(_,null,r.a.createElement("p",null,t))))))};z.defaultProps={contentCustomStyles:{},descDirection:"column"},z.propTypes={description:o.a.string,title:o.a.string,image:o.a.object,contentCustomStyles:o.a.object,descDirection:o.a.string};t.a=z},217:function(e,t){},218:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-careers-index-js-9a877ee6d7f8420ef3a0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return F}));n(155);var a=n(52),r=n.n(a),o=n(7),i=n.n(o),s=n(0),l=n.n(s),c=n(234),m=n.n(c),u=n(246),p=n(240),d=n.n(p),h=n(169),f=n(163),g=n(161),b=n(156),x=n(162),y=n(153),v=n(150),w=n.n(v),E=n(149),C=n(151);function j(){var e=w()(["\n      width: 600px;\n    "]);return j=function(){return e},e}function z(){var e=w()(["\n      width: 100%;\n    "]);return z=function(){return e},e}function A(){var e=w()(["\n        justify-content: flex-start;\n        padding-top: 0;\n      "]);return A=function(){return e},e}function Q(){var e=w()(["\n      font-size: 1.5rem;\n    "]);return Q=function(){return e},e}function N(){var e=w()(["\n      font-size: 1.2rem;\n    "]);return N=function(){return e},e}var S=E.d.section.withConfig({displayName:"styledComponents__SectionContainer",componentId:"sc-1izg9qs-0"})(["padding:2em;width:100%;display:flex;flex-direction:column;align-items:center;h3{"," ","}form{display:flex;flex-direction:column;margin-top:1em;input,textarea{margin:5px 0px;border-radius:3px;border:1px solid #e2e2e2;padding:8px;padding-left:10px;font-size:0.85rem;&:focus{border:1px solid #f48600;outline:0;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(124,197,118,0.3);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(124,197,118,0.3);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(124,197,118,0.3);}}textarea{min-height:150px;resize:none;}.input-btn{width:120px;height:35px;background:#f48600;border-radius:4px;color:#ffffff;font-size:0.85rem;line-height:0.8rem;text-transform:capitalize;transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;-webkit-transition:all 0.3s ease-in-out;cursor:pointer;&:hover{background:#111;color:#fff;}}label.error{font-weight:normal;color:#d61400;font-size:14px;font-style:italic;position:relative;top:-4px;}.wrapper_button{display:flex;justify-content:center;padding-top:1em;"," button{border:none;transition:all .5s;&:hover{border-color:#F28724;background:#FFA449;}&:focus{outline:none;}}}"," ","}"],Object(C.a)("mobile")(N()),Object(C.a)("tablet")(Q()),Object(C.a)("tablet")(A()),Object(C.a)("mobile")(z()),Object(C.a)("tablet")(j())),_=l.a.createRef(),k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={name:"",replyto:"",phone:"",message:"",send:!1,showAlert:!1,typeAlert:"success",alertMessage:"",titleAlert:"Message"},t.handleChange=function(e){var n,a=e.target,r=a.name,o=a.value;t.setState(((n={})[r]=o,n))},t.closeAlert=function(){t.setState({showAlert:!1})},t.validateForm=function(){var e=t.state,n=e.name,a=e.replyto,r=e.message;return""!==n&&(!(""===a||!t.validateEmail(a))&&""!==r)},t.handleSubmit=function(e){t.setState({send:!0}),e.preventDefault(),t.validateForm()&&_.current.execute()},t.onChange=function(e){var n=r()(t),a=t.props.t,o=t.state,i=o.name,s=o.replyto,l=o.phone,c=o.message;if(e){var u={subject:"Tell us about your project",name:i,replyto:s,phone:l,message:c};m.a.post("https://submit-form.com/BXef95h140v6_B6pU1irm",u,{headers:{Accept:"application/json"}}).then((function(e){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"form_submitted",category:"Contact Us",subject:i}),_.current.props.grecaptcha.reset(),n.setState({send:!1,name:"",replyto:"",phone:"",message:"",titleAlert:a("getQuote.form.sentMessage"),typeAlert:"success",alertMessage:"",showAlert:!0})})).catch((function(e){_.current.props.grecaptcha.reset(),n.setState({titleAlert:a("getQuote.form.descriptionError"),typeAlert:"info",alertMessage:a("getQuote.form.descriptionError"),showAlert:!0})}))}},t}i()(t,e);var n=t.prototype;return n.validateEmail=function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e).toLowerCase())},n.render=function(){var e=this,t=this.props,n=t.data,a=t.t,r=this.state,o=r.name,i=r.send,s=r.replyto,c=r.message,m=r.phone,p=r.showAlert,v=r.titleAlert,w=r.typeAlert,E=r.alertMessage,C=""===o&&i,j=""===c&&i,z=""!==s&&!this.validateEmail(s)||""===s&&i,A=a(z&&""!==s?"getQuote.form.validEmail":"getQuote.form.errorEmail");return l.a.createElement(b.a,{i18n:x.a},l.a.createElement(f.a,null,l.a.createElement(g.a,{title:"Sancrisoft | Get a Quote",keywords:["sancrisoft","digital-solutions","get-quote"],description:"page Contact"}),l.a.createElement("section",null,l.a.createElement(h.a,{image:n.getQuote.childImageSharp.sizes,title:a("getQuote.bigImage.title"),description:a("getQuote.bigImage.description")})),l.a.createElement(y.i,null,l.a.createElement(S,null,l.a.createElement(y.e,null,a("getQuote.form.title")),l.a.createElement("form",{ref:function(t){return e.form=t},className:"form contact_form",method:"POST",action:"http://formspree.io/info@sancrisoft.com",onSubmit:this.handleSubmit},l.a.createElement("input",{className:"input-text",type:"text",name:"name",id:"name",placeholder:a("getQuote.form.name"),value:o,onChange:this.handleChange}),C&&l.a.createElement("label",{className:"error",htmlFor:"name"},a("getQuote.form.errorName")),l.a.createElement("input",{className:"input-text",type:"text",name:"replyto",id:"replyto",placeholder:a("getQuote.form.email"),value:s,onChange:this.handleChange}),z&&l.a.createElement("label",{className:"error",htmlFor:"replyto"},A),l.a.createElement("input",{className:"input-text",type:"text",name:"phone",id:"phone",placeholder:a("getQuote.form.phone"),value:m,onChange:this.handleChange}),l.a.createElement("textarea",{className:"input-text text-area",name:"message",id:"message",cols:"0",rows:"0",placeholder:a("getQuote.form.message"),value:c,onChange:this.handleChange}),j&&l.a.createElement("label",{className:"error",htmlFor:"message"},a("getQuote.form.errorMessage")),l.a.createElement("input",{type:"hidden",name:"subject",value:"Tell us about your project | Sancrisoft"}),l.a.createElement(u.a,{ref:_,size:"invisible",sitekey:"6LdeBokUAAAAAM01lWglTU0siI1fmMRoGjCE_94b",onChange:this.onChange}),l.a.createElement("div",{className:"wrapper_button"},l.a.createElement("button",{className:"input-btn",type:"button",onClick:this.handleSubmit},a("getQuote.form.send")," "))),l.a.createElement(d.a,{show:p,title:v,text:E,onConfirm:this.closeAlert,type:w})))))},t}(s.Component),F="2788027974";t.default=Object(b.c)("translations")(k)},155:function(e,t,n){var a=n(24).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(13)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(152),l=n.n(s),c=n(149),m=c.d.div.withConfig({displayName:"styledComponents__MainContainer",componentId:"sc-1j7jjn0-0"})(["width:100%;height:50vh;position:relative;div.detail{display:flex;flex-direction:column;justify-content:center;align-items:center;position:absolute;top:0;z-index:3;width:100%;height:100%;h2,p{color:white;text-align:center;padding:0 1em;}}.image-container{width:100%;height:100%;img{flex:1;object-fit:cover;position:absolute;z-index:1;}}"]),u=c.d.div.withConfig({displayName:"styledComponents__GreyFilter",componentId:"sc-1j7jjn0-1"})(["position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.55);z-index:2;"]),p=n(153),d=function(e){var t=e.title,n=e.description,a=e.image;return r.a.createElement(m,null,r.a.createElement(u,null),r.a.createElement(l.a,{className:"image-container",sizes:a}),r.a.createElement("div",{className:"detail"},r.a.createElement(p.d,null,t),r.a.createElement("p",null,n)))};d.propTypes={image:i.a.object.isRequired,title:i.a.string.isRequired,description:i.a.string.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-164649eddc220c4a6c83.js.map
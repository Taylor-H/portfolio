"use strict";(self.webpackChunkhtmlartist=self.webpackChunkhtmlartist||[]).push([[506],{506:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(152),s=n(791),i={_origin:"https://api.emailjs.com"},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";i._userID=e,i._origin=t},o=function(e,t,n){if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var d=c((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=t.status,this.text=t.responseText})),m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,s){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var t=e.target,n=new d(t);200===n.status||"OK"===n.text?a(n):s(n)})),r.addEventListener("error",(function(e){var t=e.target;s(new d(t))})),r.open("POST",i._origin+e,!0),Object.keys(n).forEach((function(e){r.setRequestHeader(e,n[e])})),r.send(t)}))},u=function(e,t,n,a){var s=a||i._userID,r=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(n);o(s,e,t);var l=new FormData(r);return l.append("lib_version","3.4.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",s),m("/api/v1.0/email/send-form",l)},h=n(184);r("user_RwkzBGBvGpC4DgoH83Dih");var p=function(){var e=(0,s.useRef)(),t=(0,s.useState)({formResult:""}),n=(0,a.Z)(t,2),i=n[0],r=n[1],o=(0,s.useState)({firstname:"",lastname:"",company:"",phone:"",email:"",message:""}),l=(0,a.Z)(o,2),c=l[0],d=l[1],m=(0,h.jsxs)("div",{className:"success",children:[(0,h.jsx)("h5",{id:"detail-header",children:"Thank you."}),"Your message has been sent. I will get back to you as soon as possible."]}),p=(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h5",{id:"detail-header",children:"Interested in working with me?"}),(0,h.jsx)("p",{children:"This form will send me an email message."}),(0,h.jsx)("div",{className:"connect-form",children:(0,h.jsxs)("form",{id:"email",ref:e,onSubmit:function(t){t.preventDefault(),u("".concat("service_zfjlk2u"),"".concat("template_d5e4frp"),e.current,"".concat("user_RwkzBGBvGpC4DgoH83Dih")).then((function(t){console.log("formResult",e),"OK"===t.text?r(t.text):alert("Message failed to send")}),(function(e){console.log(e.text)}))},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{className:"input-box",type:"text",name:"firstname",onChange:d,placeholder:"First Name:"}),(0,h.jsx)("input",{className:"input-box",type:"text",name:"lastname",placeholder:"Last Name:",onChange:d})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("input",{className:"input-box",type:"text",name:"company",placeholder:"Company",onChange:d}),(0,h.jsx)("input",{className:"input-box",id:"em-field",type:"email",name:"email",placeholder:"Email Address:",onChange:d})]}),(0,h.jsx)("div",{children:(0,h.jsx)("input",{className:"subject",type:"text",name:"phone",placeholder:"phone",onChange:d})}),(0,h.jsx)("div",{children:(0,h.jsx)("textarea",{className:"comment-area",name:"message",placeholder:"Message: ",onChange:d})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{className:"connect-submit",type:"submit",value:c,children:"Send"})})]})})]});return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"con-h",children:"OK"===i?m:p})})}}}]);
//# sourceMappingURL=506.d57f2c7a.chunk.js.map
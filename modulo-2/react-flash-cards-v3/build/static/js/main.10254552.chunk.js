(this["webpackJsonpreact-projeto-base"]=this["webpackJsonpreact-projeto-base"]||[]).push([[0],{14:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return h}));var c=n(2),r=n(6),a=n(32),s=n.n(a),i="development"===e.NODE_ENV?"http://localhost:3001":"https://flash-cards-backend-magalhaes.glitch.me",o=s.a.create({baseURL:i,timeout:1e4});function u(e){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get(t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return j.apply(this,arguments)}function j(){return(j=Object(r.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.delete(t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return p.apply(this,arguments)}function p(){return(p=Object(r.a)(Object(c.a)().mark((function e(t,n){var r,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post(t,n);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(Object(c.a)().mark((function e(t,n){var r,a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.put(t,n);case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}).call(this,n(22))},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(17),s=n.n(a),i=n(10),o=n(9),u=n(2),l=n(6),d=n(8),j=n(11),b=(n(37),n(15)),p=(n(38),n(1));function h(e){var t=e.children;return Object(p.jsx)("main",{children:Object(p.jsx)("div",{className:"container mx-auto p-4",children:t})})}function f(e){var t=e.children;return Object(p.jsx)("span",{className:"bg-red-200 text-red-800 p-4",children:t})}function O(e){var t=e.children;return Object(p.jsx)("header",{children:Object(p.jsx)("div",{className:"bg-yellow-800 mx-auto p-4",children:Object(p.jsx)("h1",{className:"text-center font-semibold text-xl text-red-50",children:t})})})}function x(e){var t=e.children,n=void 0===t?"Descri\xe7\xe3o do bot\xe3o":t,c=e.onButtonClick,r=void 0===c?null:c,a=e.classNameCollor,s=void 0===a?"bg-gray-200":a,i=e.type,o=void 0===i?"button":i;return Object(p.jsx)("button",{className:"p-2 m-1 rounded-md ".concat(s),onClick:function(){r&&r()},type:o,children:n})}var v=n(31);function m(){return Object(p.jsx)(v.ClipLoader,{})}function w(e){var t=e.id,n=e.title,c=void 0===n?"T\xedtulo do card":n,r=e.description,a=void 0===r?"Descri\xe7\xe3o do card, que pode conter mais palavras que o t\xedtulo":r,s=e.showFlashCardsTitle,i=void 0===s||s,o=e.toogleShowCardsTitle,u=void 0===o?null:o;var l=i?"text-xl":"text-md";return Object(p.jsx)("div",{className:"shadow-lg p-2 m-2 w-80 h-40 cursor-pointer\n                         flex flex-row justify-center items-center\n                         font-semibold ".concat(l),style:{fontFamily:"monospace"},onClick:function(){u&&u(t)},children:i?c:a})}function y(e){var t=e.children;return Object(p.jsx)("div",{className:"border p-2 flex flex-row flex-wrap items-center justify-center",children:t})}var g=n(87);function N(){return Object(g.a)()}function k(e){var t=e.children,n=void 0===t?"Descric\xe3o Padr\xe3o":t,c=e.valueName,r=void 0===c?"name-default":c,a=e.valueId,s=void 0===a?N():a,i=e.valueChecked,o=void 0===i||i,u=e.onClickRadioButton,l=void 0===u?null:u;return Object(p.jsxs)("div",{className:"space-x-2 p-2",children:[Object(p.jsx)("input",{type:"radio",name:r,id:s,checked:o,onChange:function(){l&&l()}}),Object(p.jsx)("label",{htmlFor:s,children:n})]})}var C=n(14);function T(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.d)("/flashcards");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.b)("/flashcards/".concat(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(Object(u.a)().mark((function e(t,n){var c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)("/flashcards/",{id:N(),title:t,description:n});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,n){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(Object(u.a)().mark((function e(t,n,c){var r;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.c)("/flashcards/".concat(t),{title:n,description:c});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=n(20);function L(e){var t=e.children,n=e.onDelete,c=void 0===n?null:n,r=e.onEdit,a=void 0===r?null:r,s=t.id,i=t.title,o=t.description;return Object(p.jsx)("div",{className:"border p-2 m-2",children:Object(p.jsxs)("ul",{className:"flex flex-col space-y-4",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:"T\xedtulo: "}),i]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("strong",{children:"Descri\xe7\xe3o: "}),o]}),Object(p.jsxs)("div",{className:"flex flex-row justify-end items-center space-x-4",children:[Object(p.jsx)(V.b,{size:22,className:"cursor-pointer",onClick:function(){a&&a(t)}}),Object(p.jsx)(V.a,{size:22,className:"cursor-pointer",onClick:function(){c&&c(s)}})]})]})})}function R(e){var t=e.labelDescription,n=void 0===t?"Descri\xe7\xe3o do label:":t,c=e.textAreaValue,r=void 0===c?"Valor padr\xe3o do text area":c,a=e.onTextAreaChange,s=void 0===a?null:a,i=e.id,o=void 0===i?N():i,u=e.autoFocus,l=void 0!==u&&u,d=e.rows,j=void 0===d?4:d,b=e.maxLength,h=void 0===b?230:b;var f=r.length;return Object(p.jsxs)("div",{className:"flex flex-col my-4",children:[Object(p.jsx)("label",{className:"text-sm mb-1",htmlFor:o,children:n}),Object(p.jsx)("textarea",{autoFocus:l,id:o,rows:j,maxLength:h,className:"border p-1",type:"text",value:r,onChange:function(e){var t=e.currentTarget;if(s){var n=t.value;s(n)}}}),Object(p.jsx)("div",{className:"text-right mt-2",children:Object(p.jsxs)("span",{children:[f," / ",h]})})]})}function A(e){var t=e.labelDescription,n=void 0===t?"Descri\xe7\xe3o do label:":t,c=e.inputValue,r=void 0===c?"Valor padr\xe3o do input":c,a=e.onInputChange,s=void 0===a?null:a,i=e.id,o=void 0===i?N():i,u=e.autoFocus,l=void 0!==u&&u;return Object(p.jsxs)("div",{className:"flex flex-col my-4",children:[Object(p.jsx)("label",{className:"text-sm mb-1",htmlFor:o,children:n}),Object(p.jsx)("input",{autoFocus:l,id:o,className:"border p-1",type:"text",value:r,onChange:function(e){var t=e.currentTarget;if(s){var n=t.value;s(n)}}})]})}function z(e){var t=e.createMode,n=void 0===t||t,r=e.onPersist,a=void 0===r?null:r,s=e.children,i=void 0===s?null:s,o=Object(c.useState)((null===i||void 0===i?void 0:i.title)||""),u=Object(d.a)(o,2),l=u[0],j=u[1],b=Object(c.useState)((null===i||void 0===i?void 0:i.description)||""),h=Object(d.a)(b,2),O=h[0],v=h[1],m=Object(c.useState)(""),w=Object(d.a)(m,2),y=w[0],g=w[1];function N(){j(""),v("")}Object(c.useEffect)((function(){n&&(j(""),v(""))}),[n]);var k=n?"bg-green-200":"bg-yellow-200";return Object(p.jsxs)("form",{className:"".concat(k," p-4"),onSubmit:function(e){e.preventDefault(),""!==l.trim()&&""!==O.trim()?a&&(a(l,O),g(""),N()):g("T\xedtulo e Descri\xe7\xe3o s\xe3o obrigat\xf3rios")},onReset:function(){N()},children:[Object(p.jsx)("h2",{className:"text-center font-semibold",children:"Manunten\xe7\xe3o de Flash Card"}),Object(p.jsx)(A,{labelDescription:"T\xedtulo",inputValue:l,onInputChange:function(e){j(e)}}),Object(p.jsx)(R,{labelDescription:"Descri\xe7\xe3o",textAreaValue:O,onTextAreaChange:function(e){v(e)}}),Object(p.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[""!==y?Object(p.jsx)(f,{children:y}):Object(p.jsx)("span",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{classNameCollor:"bg-red-200",type:"reset",children:"Limpar"}),Object(p.jsx)(x,{classNameCollor:"bg-green-400",type:"submit",children:"Salvar"})]})]})]})}function P(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(d.a)(a,2),v=s[0],g=s[1],N=Object(c.useState)(!0),C=Object(d.a)(N,2),S=C[0],F=C[1],I=Object(c.useState)(!0),B=Object(d.a)(I,2),V=B[0],R=B[1],A=Object(c.useState)(""),P=Object(d.a)(A,2),q=P[0],J=P[1],U=Object(c.useState)(!0),_=Object(d.a)(U,2),G=_[0],H=_[1],K=Object(c.useState)(0),Q=Object(d.a)(K,2),W=Q[0],X=Q[1],Y=Object(c.useState)(null),Z=Object(d.a)(Y,2),$=Z[0],ee=Z[1];function te(e){g(Object(i.a)(v).map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{showTitle:!t.showTitle}):t})))}function ne(e){return ce.apply(this,arguments)}function ce(){return(ce=Object(l.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:r(Object(i.a)(v).filter((function(e){return e.id!==t}))),J(""),b.b.success("Flash card apagado com sucesso"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),J(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function re(e){H(!1),ee(e),X(1)}function ae(){return(ae=Object(l.a)(Object(u.a)().mark((function e(t,c){var a;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G){e.next=15;break}return e.prev=1,e.next=4,E(t,c);case 4:a=e.sent,r([].concat(Object(i.a)(n),[{id:a.id,title:a.title,description:a.description,showTitle:!0}])),J(""),b.b.success('Flash card "'.concat(t,'" inserido com sucesso')),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),J(e.t0.message);case 13:e.next=28;break;case 15:return e.prev=15,e.next=18,M($.id,t,c);case 18:r(Object(i.a)(n).map((function(e){return e.id===$.id?Object(o.a)(Object(o.a)({},e),{},{title:t,description:c}):e}))),H(!0),ee(null),J(""),b.b.success('Flash card "'.concat(t,'" atualizado com sucesso')),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(15),J(e.t1.message);case 28:case"end":return e.stop()}}),e,null,[[1,10],[15,25]])})))).apply(this,arguments)}Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:t=e.sent,r(t),setTimeout((function(){R(!1)}),1e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),setTimeout((function(){J(e.t0.message)}),1e3);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){g(n.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{showTitle:!0})})))}),[n]);var se=Object(p.jsx)("div",{className:"flex flex-row justify-center my-4",children:Object(p.jsx)(m,{})});return q&&(se=Object(p.jsx)("div",{className:"my-4 flex flex-row justify-center",children:Object(p.jsx)(f,{children:q})})),V||q||(se=Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(j.d,{selectedIndex:W,onSelect:function(e){X(e)},children:[Object(p.jsxs)(j.b,{children:[Object(p.jsx)(j.a,{children:"Listagem"}),Object(p.jsx)(j.a,{children:"Cadastro"}),Object(p.jsx)(j.a,{children:"Estudo"})]}),Object(p.jsx)(j.c,{children:n.map((function(e){return Object(p.jsx)(L,{onDelete:ne,onEdit:re,children:e},e.id)}))}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)("div",{className:"my-4",children:Object(p.jsx)(x,{onButtonClick:function(){H(!0),ee(null)},children:"Novo"})}),Object(p.jsx)(z,{createMode:G,onPersist:function(e,t){return ae.apply(this,arguments)},children:$})]}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)("div",{className:"text-center mb-4",children:Object(p.jsx)(x,{onButtonClick:function(){var e=function(e){for(var t=Object(i.a)(e),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),r=[t[c],t[n]];t[n]=r[0],t[c]=r[1]}return t}(v);g(e)},children:"Embaralhar Cards"})}),Object(p.jsxs)("div",{className:"flex flex-row justify-center items-center space-x-2 m-1",children:[Object(p.jsx)(k,{valueId:"radioShowTitleId",valueName:"radioShowTitleDescription",valueChecked:S,onClickRadioButton:function(){g(Object(i.a)(v).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{showTitle:!0})}))),F(!0)},children:"Mostrar T\xedtulo"}),Object(p.jsx)(k,{valueId:"radioShowDescriptionId",valueName:"radioShowTitleDescription",valueChecked:!S,onClickRadioButton:function(){g(Object(i.a)(v).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{showTitle:!1})}))),F(!1)},children:"Mostrar Descri\xe7\xe3o"})]}),Object(p.jsx)(y,{children:v.map((function(e){var t=e.id,n=e.title,c=e.description,r=e.showTitle;return Object(p.jsx)(w,{id:t,title:n,description:c,showFlashCardsTitle:r,toogleShowCardsTitle:te},t)}))})]})]})})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b.a,{}),Object(p.jsx)(O,{children:"react-flash-card-v3"}),Object(p.jsx)(h,{children:se})]})}function q(){return Object(p.jsx)(P,{})}n(84);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.10254552.chunk.js.map
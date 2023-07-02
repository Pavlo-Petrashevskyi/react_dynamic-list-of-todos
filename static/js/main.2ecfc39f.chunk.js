(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),o=c(1),i=(c(10),c(11),c(5)),l=c.n(i),d=c(0),r=function(e){var t=e.todos,c=e.chosenTodo,s=e.setChosenTodo;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"todo",className:l()({"has-background-info-light":c.id===e.id}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:e.id}),Object(d.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:"has-text-".concat(e.completed?"success":"danger"),children:e.title})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){s(e)}(e)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"far fa-eye".concat(e.id===c.id?"-slash":"")})})})})]},e.id)}))})]})},j=function(e){var t=e.initialTodos,c=e.setTodos,s=Object(o.useState)("all"),a=Object(n.a)(s,2),i=a[0],l=a[1],r=Object(o.useState)(""),j=Object(n.a)(r,2),b=j[0],h=j[1];return Object(o.useEffect)((function(){var e=t;switch(i){case"active":e=e.filter((function(e){return!e.completed}));break;case"completed":e=e.filter((function(e){return e.completed}))}c(e.filter((function(e){return e.title.includes(b.toLowerCase())})))}),[i,b]),Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsxs)("select",{"data-cy":"statusSelect",value:i,onChange:function(e){l(e.target.value)},children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{"data-cy":"searchInput",type:"text",value:b,className:"input",placeholder:"Search...",onChange:function(e){h(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(d.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){h("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.chosenTodo,c=e.nonExistedTodo,s=e.setChosenTodo,a=Object(o.useState)(),i=Object(n.a)(a,2),l=i[0],r=i[1],j=Object(o.useState)(!0),u=Object(n.a)(j,2),m=u[0],O=u[1];return Object(o.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then(r).then((function(){return O(!1)}))}),[]),Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),m?Object(d.jsx)(h,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(d.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(c)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(d.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(d.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]})]})},m={id:0,title:"none",completed:!1,userId:0},O=function(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)([]),i=Object(n.a)(a,2),l=i[0],O=i[1],x=Object(o.useState)(m),f=Object(n.a)(x,2),p=f[0],N=f[1];return Object(o.useEffect)((function(){b("/todos").then((function(e){s(e),O(e)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(j,{initialTodos:l,setTodos:s})}),Object(d.jsx)("div",{className:"block",children:c.length?Object(d.jsx)(r,{todos:c,chosenTodo:p,setChosenTodo:N}):Object(d.jsx)(h,{})})]})})}),p.id>0&&Object(d.jsx)(u,{chosenTodo:p,nonExistedTodo:m,setChosenTodo:N})]})};a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2ecfc39f.chunk.js.map
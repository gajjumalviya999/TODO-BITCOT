(this["webpackJsonptodo-bitcot"]=this["webpackJsonptodo-bitcot"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),r=(n(13),n(14),n(8)),o=n(2),l=n(5),u=(n(15),n(0)),d=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)(""),d=Object(l.a)(i,2),j=d[0],b=d[1],O=Object(c.useState)("Add Task"),m=Object(l.a)(O,2),f=m[0],g=m[1],p=function(t){var e=n.filter((function(e,n){return t!==n}));s((function(){return e})),localStorage.setItem("localdata",JSON.stringify(e))};return Object(c.useEffect)((function(){s(JSON.parse(localStorage.getItem("localdata")))}),[]),Object(u.jsx)(a.a.Fragment,{children:Object(u.jsxs)("div",{className:"box-container",children:[Object(u.jsx)("div",{className:"AddEventContainer",children:Object(u.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault(),""!==j&&""!==j.trim()?s((function(t){var e=null!=t?Object(r.a)(t):[];return e.unshift({content:j,completeStatus:!1,inProgressStatus:!1}),localStorage.setItem("localdata",JSON.stringify(e)),e})):0!==j.length&&""===j.trim()&&alert("Only White Spaces Not Allowed"),b(""),g("Add Task"),localStorage.setItem("localdata",JSON.stringify(n))},children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)("input",{type:"text",id:"eventInputtext",placeholder:"Enter Task",value:j,onChange:function(t){b(t.target.value)}})}),Object(u.jsx)("div",{className:"submitbtn",children:Object(u.jsx)("input",{type:"submit",id:"submitbtn",value:f})})]})}),Object(u.jsx)("div",{className:"List",children:Object(u.jsx)("ul",{id:"listUl",children:null!=n?n.map((function(t,e){return Object(u.jsxs)("li",{className:t.completeStatus?"completedClass":t.inProgressStatus?"progressClass":"",children:[Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:t.content})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"editbtn",onClick:function(){return function(t,e){""===j||""===j.trim()?(b(t.content),g("Edit"),p(e)):alert("Add or remove the task of input field first ")}(t,e)},children:"Edit"}),Object(u.jsx)("button",{className:"completedbtn",onClick:function(){return t=e,void s((function(e){var n=null!=e?e.map((function(e,n){return t==n?e.completeStatus?Object(o.a)(Object(o.a)({},e),{},{completeStatus:!1}):Object(o.a)(Object(o.a)({},e),{},{completeStatus:!0}):e})):[];return localStorage.setItem("localdata",JSON.stringify(n)),n}));var t},children:"Completed"}),Object(u.jsx)("button",{className:"progressbtn",onClick:function(){return t=e,void s((function(e){var n=null!=e?e.map((function(e,n){return t==n?e.inProgressStatus?Object(o.a)(Object(o.a)({},e),{},{inProgressStatus:!1}):Object(o.a)(Object(o.a)({},e),{},{inProgressStatus:!0}):e})):[];return localStorage.setItem("localdata",JSON.stringify(n)),n}));var t},disabled:!!t.completeStatus,children:"In Progress"}),Object(u.jsx)("button",{className:"deletebtn",onClick:function(){return p(e)},children:"Delete"})]})]},e)})):Object(u.jsx)(u.Fragment,{})})})]})})};var j=function(){return Object(u.jsx)("div",{className:"main-container",children:Object(u.jsx)(d,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.7504fd27.chunk.js.map
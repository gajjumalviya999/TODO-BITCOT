(this["webpackJsonptodo-bitcot"]=this["webpackJsonptodo-bitcot"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(1),r=n.n(s),a=n(6),c=n.n(a),i=(n(12),n(13),n(7)),l=n(4),o=(n(14),n(0)),d=function(){var t=Object(s.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],c=Object(s.useState)(""),d=Object(l.a)(c,2),u=d[0],b=d[1],j=Object(s.useState)("Add Task"),m=Object(l.a)(j,2),g=m[0],f=m[1],O=function(t){var e=n.filter((function(e,n){return t!==n}));a((function(){return e})),localStorage.setItem("localdata",JSON.stringify(e))};return Object(s.useEffect)((function(){a(JSON.parse(localStorage.getItem("localdata")))}),[]),Object(o.jsx)(r.a.Fragment,{children:Object(o.jsxs)("div",{className:"box-container",children:[Object(o.jsx)("div",{className:"AddEventContainer",children:Object(o.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault(),""!==u&&""!==u.trim()?a((function(t){var e=null!=t?Object(i.a)(t):[];return e.unshift(u),localStorage.setItem("localdata",JSON.stringify(e)),e})):0!==u.length&&""===u.trim()&&alert("Only White Spaces Not Allowed"),b(""),f("Add Task"),localStorage.setItem("localdata",JSON.stringify(n))},children:[Object(o.jsx)("div",{className:"text",children:Object(o.jsx)("input",{type:"text",id:"eventInputtext",placeholder:"Enter Task",value:u,onChange:function(t){b(t.target.value)}})}),Object(o.jsx)("div",{className:"submitbtn",children:Object(o.jsx)("input",{type:"submit",id:"submitbtn",value:g})})]})}),Object(o.jsx)("div",{className:"List",children:Object(o.jsx)("ul",{id:"listUl",children:null!=n?n.map((function(t,e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:t})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"editbtn",onClick:function(){return function(t,e){""===u||""===u.trim()?(b(t),f("Edit"),O(e)):alert("Add or remove the task of input field first ")}(t,e)},children:"Edit"}),Object(o.jsx)("button",{className:"completedbtn",onClick:function(t){return function(t,e){"Completed"==t.target.innerHTML?(t.target.parentNode.parentNode.classList.add("completedClass"),t.target.innerHTML="In Complete",t.target.parentNode.getElementsByClassName("progressbtn")[0].disabled=!0):(t.target.parentNode.parentNode.classList.remove("completedClass"),t.target.innerHTML="Completed",t.target.parentNode.getElementsByClassName("progressbtn")[0].disabled=!1)}(t)},children:"Completed"}),Object(o.jsx)("button",{className:"progressbtn",onClick:function(t){return function(t,e){"In Progress"==t.target.innerHTML?(t.target.classList.add("progressClass"),t.target.innerHTML="Mark as Paused"):(t.target.classList.remove("progressClass"),t.target.innerHTML="In Progress")}(t)},children:"In Progress"}),Object(o.jsx)("button",{className:"deletebtn",onClick:function(){return O(e)},children:"Delete"})]})]},e)})):Object(o.jsx)(o.Fragment,{})})})]})})};var u=function(){return Object(o.jsx)("div",{className:"main-container",children:Object(o.jsx)(d,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),s(t),r(t),a(t),c(t)}))};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.956dd790.chunk.js.map
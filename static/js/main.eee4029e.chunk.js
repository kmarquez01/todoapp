(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n(22),i=n.n(c),s=n(6),a=n(4),d=(n.p,n(7)),l=n(5),r=n(0);var u=function(e){var t=Object(o.useState)(e.edit?e.edit.value:""),n=Object(a.a)(t,2),c=n[0],i=n[1],s=Object(o.useRef)(null),u=function(t){t.preventDefault(),e.onClick({userId:1,id:Math.random(),title:c,completed:!1}),i("")},j=function(e){i(e.target.value)};return Object(r.jsx)("div",{className:"todo-form-container",children:Object(r.jsx)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({userId:1,id:Math.random(),title:c,completed:!1}),i("")},children:e.edit?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"todo-edit-container",children:[Object(r.jsx)("input",{ref:s,type:"text",placeholder:"Enter item",value:c,name:"title",className:"enterField",onChange:j}),Object(r.jsx)(d.a,{icon:l.d,className:"editButton",type:"submit",onClick:u}),Object(r.jsx)(d.a,{icon:l.a,className:"editButton",type:"submit",onClick:u})]})}):Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"todo-add-container",children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter item",value:c,name:"title",className:"enterAddField",onChange:j}),Object(r.jsx)("button",{className:"sendButton",type:"submit",children:"Add Item"})]})})})})};var j=function(e){var t=e.setTodos,n=e.todos,c=e.checkTodo,i=e.todo,j=Object(o.useState)({id:null,title:"",userId:1,completed:!1}),m=Object(a.a)(j,2),b=m[0],h=m[1],p={display:"block",width:"50px",height:"20px"};return b.id?Object(r.jsx)(u,{edit:b,onClick:function(e){!function(e,o){if(o.title&&!/^\s*$/.test(o.title)){var c=Object(s.a)(n).map((function(t){return t.id===e?o:t}));console.log(c),t(c)}}(b.id,e),h({id:null,title:""})}}):Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"todoItems",children:[Object(r.jsx)("input",{type:"checkbox",checked:i.completed,onChange:function(){return c(i)}}),Object(r.jsx)("p",{className:"task",style:i.completed?{fontStyle:"normal",textDecoration:"line-through"}:null,children:i.title}),Object(r.jsx)(d.a,{icon:l.c,style:i.completed?p:{display:"none"},onClick:function(e){e.preventDefault();var o=n.findIndex((function(e){return e.id===i.id})),c=Object(s.a)(n);c[o][o]=c,t(c.filter((function(e){return e.id!==i.id}))),console.log(c),console.log(i)},className:"garbage-can"}),Object(r.jsx)(d.a,{icon:l.b,style:i.completed?p:{display:"none"},onClick:function(){return h({id:i.id,title:i.title})},className:"garbage-can"})]})})},m=n(12),b=n.n(m);var h=function(e){var t=e.todos,n=e.setTodos,c=e.checkTodo,i=(e.addTodo,e.removeItem),s=e.editItem,d=(e.handleEditChange,Object(o.useState)(!0)),l=Object(a.a)(d,2),u=l[0],m=l[1];return Object(r.jsxs)("div",{className:"todoList",children:[Object(r.jsx)("h1",{className:"title",children:"Todo List"}),Object(r.jsx)("div",{className:"buttoncontainer",children:Object(r.jsx)("button",{className:"showmore",onClick:!0===u?function(e){e.preventDefault(),t.length=0,m(!1),console.log(t)}:function(e){e.preventDefault(),b.a.get("https://jsonplaceholder.typicode.com/users/1/todos").then((function(e){n(e.data),console.log(e.data)})),m(!0),console.log(t)},children:"Hide/Show API"})}),Object(r.jsx)("div",{className:"todo-items-container",children:t.map((function(e){return Object(r.jsx)(j,{setTodos:n,todos:t,removeItem:i,checkTodo:c,todo:e,editItem:s},e.id)}))})]})};n(48);var p=function(){var e=Object(o.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1];Object(o.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/users/1/todos").then((function(e){c(e.data),console.log(e.data)}))}),[]);var i=function(e){var t=n.findIndex((function(t){return t.id===e.id})),o=Object(s.a)(n),i=o[t];i.completed=!i.completed,i[t]=o,c(o),console.log(i)},d=function(e){if(e.title){var t=[].concat(Object(s.a)(n),[e]);c(t),console.log(t)}};return Object(r.jsx)("div",{className:"background",children:Object(r.jsxs)("div",{className:"container",children:[n?Object(r.jsx)(h,{setTodos:c,todos:n,checkTodo:i,addItem:d}):Object(r.jsx)("div",{children:"Hello"}),Object(r.jsx)(u,{todos:n,setTodos:c,checkTodo:i,onSubmit:d})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),o(e),c(e),i(e),s(e)}))};i.a.render(Object(r.jsx)(p,{}),document.getElementById("root")),f()}},[[49,1,2]]]);
//# sourceMappingURL=main.eee4029e.chunk.js.map
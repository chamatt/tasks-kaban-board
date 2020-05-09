(this["webpackJsonpreact-drag-n-drop"]=this["webpackJsonpreact-drag-n-drop"]||[]).push([[0],{52:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),l=n(26),c=n(40),d=n(37),s=n(18),u={tasks:{"task-1":{id:"task-1",content:"Wash the dishes",priority:"low"},"task-2":{id:"task-2",content:"Procratinate",priority:"high"},"task-3":{id:"task-3",content:"Do some actual work",priority:"medium"},"task-4":{id:"task-4",content:"Sleep, please! \ud83d\ude22\ud83d\ude22\ud83d\ude22\ud83d\ude22",priority:"low"},"task-5":{id:"task-5",content:"Stay awake at all costs!",priority:"high"}},columns:{"column-1":{id:"column-1",title:"To Do",taskIds:["task-1","task-2"]},"column-2":{id:"column-2",title:"Doing",taskIds:["task-3","task-4","task-5"]}},columnOrder:["column-1","column-2"]},p=n(24),m=n(16),b=n(17);function f(){var e=Object(m.a)(["\n  padding: 8px;\n"]);return f=function(){return e},e}function g(){var e=Object(m.a)(["\n  padding: 8px;\n"]);return g=function(){return e},e}function x(){var e=Object(m.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  min-width: 300px;\n  background-color: #f9f9f9;\n"]);return x=function(){return e},e}b.a.div(x()),b.a.h3(g()),b.a.div(f());var k=n(77);function v(){var e=Object(m.a)(["\n  /* background-color: ","; */\n  /* width: 30px; */\n  /* border-radius: 5px;\n  padding: 5px;\n  font-size: 10px;\n  color: white; */\n  /* display: inline-flex; */\n  /* justify-content: center;\n  align-items: center;\n  align-self: flex-end; */\n"]);return v=function(){return e},e}function j(){var e=Object(m.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n"]);return j=function(){return e},e}b.a.div(j());var E=function(e){return{high:"red",medium:"blue",low:"green"}[e]||"blue"},h=Object(b.a)(k.a).attrs((function(e){return{variantColor:E(e.priority),rounded:"md",fontSize:"10px",p:"5px",variant:"subtle"}}))(v(),(function(e){return E(e.priority)})),O=n(50),y=n(73),I=n(74);var w=function(e){var t=e.task,n=e.index;return console.log(n,t.id),r.a.createElement(p.b,{draggableId:t.id,index:n},(function(e){var n=e.draggableProps,a=e.dragHandleProps,o=e.innerRef;return r.a.createElement(O.a,{_hover:{bg:"blue"}},r.a.createElement(y.a,Object.assign({direction:"column",p:2,mb:2,boxShadow:"md",rounded:!0},n,a,{ref:o}),r.a.createElement(I.a,{fontSize:"sm"},null===t||void 0===t?void 0:t.content),r.a.createElement(y.a,{justify:"flex-end"},r.a.createElement(h,{priority:t.priority},t.priority))))}))},S=n(4);var W=function(e){var t=e.column,n=e.tasks;return r.a.createElement(S.a,{minH:"60vh",minW:200,w:{base:"100%",sm:"50%",md:300},p:3},r.a.createElement(S.a,null,r.a.createElement(I.a,{mb:2,fontSize:"md",fontWeight:"bold"},t.title)),r.a.createElement(p.c,{droppableId:t.id},(function(e){var t=e.droppableProps,a=e.innerRef,o=e.placeholder;return r.a.createElement(S.a,Object.assign({ref:a},t),null===n||void 0===n?void 0:n.map((function(e,t){return r.a.createElement(w,{key:e.id,task:e,index:t})})),o)})))},z=n(75),D=n(25),P=n(23),C=n(78),M=n(76),B=n(51);var H=function(){var e=Object(P.b)(),t=e.colorMode,n=e.toggleColorMode;return r.a.createElement(y.a,{w:"100%",h:50,justify:"space-between",align:"center",px:8,py:4,borderWidth:"1px"},r.a.createElement(S.a,{flex:1},r.a.createElement(I.a,{fontWeight:"bold"},"Kaban Board")),r.a.createElement(y.a,{flex:1,justify:"flex-end"},r.a.createElement(M.a,{onClick:n},r.a.createElement(B.a,{name:"light"===t?"moon":"sun"}))))},J=["360px","768px","1024px","1440px"];J.sm=J[0],J.md=J[1],J.lg=J[2],J.xl=J[3];var R=Object(s.a)({},z.a,{breakpoints:J});var K=function(){var e=Object(a.useState)(u.tasks),t=Object(d.a)(e,2),n=t[0],o=(t[1],Object(a.useState)(u.columns)),i=Object(d.a)(o,2),m=i[0],b=i[1],f=Object(a.useState)(u.columnOrder),g=Object(d.a)(f,2),x=g[0];return g[1],r.a.createElement(D.a,{theme:R},r.a.createElement(P.a,null,r.a.createElement(C.a,null),r.a.createElement(S.a,null,r.a.createElement(H,null),r.a.createElement(y.a,{mt:15,wrap:!1,overflowWrap:"scroll"},r.a.createElement(p.a,{onDragEnd:function(e){var t=e.destination,n=e.source,a=e.draggableId;if(t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var r,o=m[n.droppableId],i=m[t.droppableId],d=Object(c.a)(o.taskIds),u=Object(c.a)(i.taskIds);if(t.droppableId===n.droppableId)d.splice(n.index,1),d.splice(t.index,0,a),b(Object(s.a)({},m,Object(l.a)({},n.droppableId,Object(s.a)({},o,{taskIds:d}))));else d.splice(n.index,1),u.splice(t.index,0,a),b(Object(s.a)({},m,(r={},Object(l.a)(r,n.droppableId,Object(s.a)({},o,{taskIds:d})),Object(l.a)(r,t.droppableId,Object(s.a)({},i,{taskIds:u})),r)))}}},x.map((function(e){var t=null===m||void 0===m?void 0:m[e],a=t.taskIds.map((function(e){return n[e]}));return r.a.createElement(W,{key:t.id,column:t,tasks:a})})))))))};n(70);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4c61e89c.chunk.js.map
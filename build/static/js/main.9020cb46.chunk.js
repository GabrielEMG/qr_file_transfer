(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{38:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(30),i=t.n(c),o=(t(38),t(6)),s=t.n(o),u=t(8),d=t(10),l=t(9),f=t.n(l),j=t(31),p=t.n(j),b=t(1);var h=function(){var e=r.a.useState(""),n=Object(d.a)(e,2),t=n[0],a=n[1],c=r.a.useState(""),i=Object(d.a)(c,2),o=i[0],l=i[1],j=function(){var e=Object(u.a)(s.a.mark((function e(){var n,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"multipart/form-data"}},(r=new FormData).append("file",t),e.next=5,f.a.post("/api/send",r,a);case 5:c=e.sent,console.log(null===c||void 0===c?void 0:c.data),l("/api/download"+(null===(n=c.data)||void 0===n?void 0:n.qr.filename));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"file",onChange:function(e){return a(e.target.files[0])}}),Object(b.jsx)("button",{onClick:j,children:"send"}),Object(b.jsx)(p.a,{value:o})]})})},v=t(2),O=function(){var e=Object(v.f)(),n=r.a.useState({searching:!0,found:!1,qr:!1}),t=Object(d.a)(n,2),a=t[0],c=t[1];console.log(e.fileId);var i=function(){var n=Object(u.a)(s.a.mark((function n(){var t,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get("/api/check"+e.fileId);case 2:a=n.sent,(null===(t=a.data)||void 0===t?void 0:t.file)?c({searching:!1,found:!0,qr:a.data.file}):c({searching:!1,found:!1,qr:!1});case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=Object(u.a)(s.a.mark((function n(){var t,r,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.get("/api/download"+e.fileId,{responseType:"blob"});case 2:t=n.sent,r=window.URL.createObjectURL(new Blob([t.data])),(c=document.createElement("a")).href=r,c.setAttribute("download",a.qr.originalname),document.body.appendChild(c),c.click();case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.useEffect((function(){i()}),[]),r.a.useEffect((function(){a.qr&&o()}),[a.qr]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"downloading file"}),Object(b.jsx)("p",{children:JSON.stringify(a.qr)})]})},x=t(15);function g(){return Object(b.jsx)(x.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{path:"/",exact:!0,children:Object(b.jsx)(h,{})}),Object(b.jsx)(v.a,{path:"/download/:fileId",children:Object(b.jsx)(O,{})})]})})})}var w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),w()}},[[72,1,2]]]);
//# sourceMappingURL=main.9020cb46.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),r=n.n(s),o=n(6),i=(n(25),n(3)),j=n(5),u=n(2),b=n(10),l=n(0),h=function(e){var t=a.a.useContext(k),n=t.gState,c=t.setGState,s=n.url,r={username:"",password:""},o=a.a.useState(r),u=Object(j.a)(o,2),h=u[0],p=u[1],d=function(e){p(Object(i.a)(Object(i.a)({},h),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Log In"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=h.username,o=h.password;fetch("".concat(s,"login"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})}).then((function(e){return e.json()})).then((function(t){console.log(t),window.localStorage.setItem("token",JSON.stringify(t)),c(Object(i.a)(Object(i.a)({},n),{},{token:t.token})),p(r),e.history.push("/project4-frontend")}))},children:[Object(l.jsx)("h3",{children:"Username"}),Object(l.jsx)("input",{type:"text",name:"username",value:h.username,onChange:d}),Object(l.jsx)("h3",{children:"Password"}),Object(l.jsx)("input",{type:"password",name:"password",value:h.password,onChange:d}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"submit",value:"Log In",className:"submit-button"})]}),Object(l.jsx)("br",{})]})},p=function(e){var t=e.post;return Object(l.jsxs)("div",{className:"post",children:[Object(l.jsx)("img",{src:t.image,height:"100px",width:"auto"}),Object(l.jsxs)("h1",{className:"post-title",children:[" ",t.title]})]})},d=function(){var e=a.a.useContext(k).gState,t=Object(c.useState)([]),n=Object(j.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){fetch(e.url+"posts").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),console.log(s),e.token?Object(l.jsx)("div",{className:"posts-container",children:s.map((function(e){return Object(l.jsx)(o.b,{to:"/posts/".concat(e.id,"/edit"),className:"post-link",children:Object(l.jsx)(p,{post:e})},e.id)}))}):Object(l.jsx)("div",{className:"posts-container",children:s.map((function(e){return Object(l.jsx)(o.b,{to:"/posts/".concat(e.id),className:"post-link",children:Object(l.jsx)(p,{post:e})},e.id)}))})},O=function(e){var t=a.a.useContext(k).gState,n=Object(c.useState)(null),s=Object(j.a)(n,2),r=s[0],o=s[1];return Object(c.useEffect)((function(){fetch(t.url+"posts/"+e.match.params.id).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),r?Object(l.jsxs)("div",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("img",{src:r.image,width:"100px"}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{children:r.title}),Object(l.jsx)("h3",{children:r.description}),Object(l.jsxs)("span",{children:["$",r.price,".00"]}),Object(l.jsx)("h3",{children:r.contact})]}):Object(l.jsx)("div",{children:"Loading..."})},x=n(11),f=n.n(x),m=n(14),g=function(e){var t=a.a.useContext(k).gState,n=Object(u.f)(),s=Object(c.useState)({image:"",title:"",contact:"",price:0,description:""}),r=Object(j.a)(s,2),o=r[0],h=r[1],p=Object(c.useState)(null),d=Object(j.a)(p,2),O=d[0],x=d[1],g=function(){fetch(t.url+"posts/"+e.match.params.id).then((function(e){return e.json()})).then((function(e){return x(e)}))};if(Object(c.useEffect)((function(){g()}),[]),Object(c.useEffect)((function(){O&&h(O)}),[O]),Object(c.useEffect)((function(){t.ready&&!t.token&&n.push("/")}),[t.ready,t.token]),console.log(t),!O)return Object(l.jsx)("div",{children:"Loading..."});var v=function(){var c=Object(m.a)(f.a.mark((function c(){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(t.url+"posts/"+e.match.params.id,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token},body:JSON.stringify(o)});case 2:n.push("/posts/"+e.match.params.id);case 3:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),y=function(){var c=Object(m.a)(f.a.mark((function c(){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch(t.url+"posts/"+e.match.params.id,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 2:g(),n.push("/project4-frontend");case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),C=function(e){h(Object(i.a)(Object(i.a)({},o),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsx)("br",{}),Object(l.jsx)("img",{src:o.image,width:"100px"}),Object(l.jsx)("h1",{children:"Image"}),Object(l.jsx)("input",{type:"text",name:"image",placeholder:O.image,value:o.image,onChange:C}),Object(l.jsx)("h1",{children:"Title"}),Object(l.jsx)("input",{type:"text",name:"title",placeholder:O.title,value:o.title,onChange:C}),Object(l.jsx)("h1",{children:"Price"}),"$",Object(l.jsx)("input",{type:"text",name:"price",placeholder:O.price,value:o.price,onChange:C}),".00",Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsx)("input",{type:"text",name:"contact",placeholder:O.contact,value:o.contact,onChange:C}),Object(l.jsx)("h1",{children:"Description"}),Object(l.jsx)("input",{type:"text",name:"description",placeholder:O.description,value:o.description,onChange:C}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"button",onClick:v,className:"submit-button",children:"Update"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"button",onClick:y,className:"submit-button delete-button",children:"Delete"})]})})},v=function(){var e=a.a.useContext(k).gState;Object(u.f)();console.log(e);return e.token?Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h1",{children:"Batman Collector's Marketplace"}),Object(l.jsx)(o.b,{to:"/project4-frontend",style:{textDecoration:"none"},children:Object(l.jsx)("h2",{className:"nav-link",children:"Home"})}),Object(l.jsx)(o.b,{to:"/posts/new",style:{textDecoration:"none"},children:Object(l.jsx)("h2",{className:"nav-link",children:"Create Post "})}),Object(l.jsx)(o.b,{to:"/project4-frontend",onClick:function(){window.localStorage.removeItem("token"),window.location.reload()},style:{textDecoration:"none"},children:Object(l.jsx)("h2",{className:"nav-link",children:"Log Out"})})]}):Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h1",{children:"Batman Collector's Marketplace"}),Object(l.jsx)(o.b,{to:"/project4-frontend",style:{textDecoration:"none"},children:Object(l.jsx)("h2",{className:"nav-link",children:"Home"})}),Object(l.jsx)(o.b,{to:"/login",style:{textDecoration:"none"},children:Object(l.jsx)("h2",{className:"nav-link",children:"Log In"})})]})},y=function(){var e=a.a.useContext(k).gState,t=Object(u.f)(),n=Object(c.useState)(null),s=Object(j.a)(n,1)[0],r=Object(c.useState)([]),o=Object(j.a)(r,2),h=(o[0],o[1]),p=Object(c.useState)({image:"",title:"",contact:"",price:0,description:""}),d=Object(j.a)(p,2),O=d[0],x=d[1];Object(c.useEffect)((function(){s&&x(s)}),[s]);var g=function(){var t=Object(m.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.url+"posts",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify(O)});case 2:fetch(e.url+"posts").then((function(e){return e.json()})).then((function(e){return h(e)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(e){x(Object(i.a)(Object(i.a)({},O),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(O),t.push("/project4-frontend")},children:[Object(l.jsx)("h1",{children:"Title"}),Object(l.jsx)("input",{type:"text",name:"title",value:O.title,onChange:v}),Object(l.jsx)("h1",{children:"Image"}),Object(l.jsx)("input",{type:"text",name:"image",value:O.image,onChange:v}),Object(l.jsx)("h1",{children:"Price"}),Object(l.jsx)("strong",{children:"$"}),Object(l.jsx)("input",{type:"text",name:"price",value:O.price,onChange:v}),Object(l.jsx)("strong",{children:".00"}),Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsx)("input",{type:"text",name:"contact",value:O.contact,onChange:v}),Object(l.jsx)("h1",{children:"Description"}),Object(l.jsx)("input",{type:"text",name:"description",value:O.description,onChange:v}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"submit",value:"Create Post",className:"submit-button"})]})})},k=(n(36),a.a.createContext(null));var C=function(){var e=a.a.useState({url:"https://project4-classifiedads-backend.herokuapp.com/",token:null,ready:!1}),t=Object(j.a)(e,2),n=t[0],c=t[1];return a.a.useEffect((function(){var e=JSON.parse(window.localStorage.getItem("token"));c(e?Object(i.a)(Object(i.a)({},n),{},{token:e.token,ready:!0}):Object(i.a)(Object(i.a)({},n),{},{token:null,ready:!0}))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(k.Provider,{value:{gState:n,setGState:c},children:[Object(l.jsx)(u.a,{path:"/",component:v}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/project4-frontend",render:function(e){return Object(l.jsx)(d,Object(i.a)({},e))}}),Object(l.jsx)(u.a,{exact:!0,path:"/login",render:function(e){return Object(l.jsx)(h,Object(i.a)({},e))}}),Object(l.jsx)(u.a,{exact:!0,path:"/posts/new",render:function(e){return Object(l.jsx)(y,Object(i.a)({},e))}}),Object(l.jsx)(u.a,{exact:!0,path:"/posts/:id",render:function(e){return Object(l.jsx)(O,Object(i.a)({},e))}}),Object(l.jsx)(u.a,{exact:!0,path:"/posts/:id/edit",render:function(e){return Object(l.jsx)(g,Object(i.a)({},e))}})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(C,{})})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.e4b54098.chunk.js.map
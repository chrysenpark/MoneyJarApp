(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{47:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n(14),o=n.n(s),r=(n(47),n(19)),i=n(33),l=n(34),j=n(40),u=n(39),b=n(3),d=n(4),p=n(6),m=n.n(p),h=n(7),O=Object(h.a)(),f=(n(66),function(e){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)("h1",{children:e.main}),e.children]})}),x=(n(67),function(e){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{children:e.main})})}),g=(n(68),["btn--primary--solid","btn--warning--solid","btn--danger--solid","btn--play--solid","btn--team--solid","btn--rank--solid"]),y=["btn--small","btn--medium"],v=function(e){var t=e.children,n=e.type,c=e.onClick,s=e.buttonStyle,o=e.buttonSize,r=g.includes(s)?s:g[0],i=y.includes(o)?o:y[0];return Object(a.jsx)("button",{className:"btn ".concat(r," ").concat(i),onClick:c,type:n,children:t})},S=n.p+"static/media/SaveUpPage.56e3313f.png",w=function(e){e.onLoginSuccess;var t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],o=n[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),l=i[0],j=i[1],u=Object(c.useState)(null),p=Object(d.a)(u,2),h=p[0],g=p[1],y=Object(b.f)();Object(c.useEffect)((function(){window.scrollTo(0,0)}),[y]);var w=function(e){return function(t){e(t.target.value),g(!1)}};return Object(a.jsxs)(f,{children:[Object(a.jsx)("div",{style:{position:"relative",right:800},children:Object(a.jsx)(v,{buttonStyle:"btn--primary--solid",onClick:function(){O.push("/")},children:"Home"})}),Object(a.jsx)(x,{main:"Log In"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.a.post("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/login",{username:s,password:l}).then((function(e){console.log(e),localStorage.setItem("user",s),O.push("/dashboard")})).catch((function(e){g(e.response.data.message)}))},children:[Object(a.jsxs)("label",{htmlFor:"username",children:["username \xa0\xa0",Object(a.jsx)("input",{value:s,onChange:w(o),name:"username",type:"username"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{htmlFor:"password",children:["password \xa0\xa0",Object(a.jsx)("input",{value:l,onChange:w(j),name:"password",type:"password"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Submit"}),h&&Object(a.jsx)("p",{style:{color:"red"},children:h})]}),Object(a.jsx)("img",{src:S,alt:"jars",width:"auto",height:"auto"})]})},k=n(85),C=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),r=Object(d.a)(o,2),i=r[0],l=r[1],j=Object(c.useState)(""),u=Object(d.a)(j,2),p=u[0],h=u[1],g=Object(c.useState)(null),y=Object(d.a)(g,2),w=y[0],C=y[1],I=Object(c.useState)(null),N=Object(d.a)(I,2),J=N[0],z=N[1],D=Object(b.f)();Object(c.useEffect)((function(){window.scrollTo(0,0)}),[D]);var E=function(e){return function(t){e(t.target.value),z(!1)}};return Object(a.jsxs)(f,{children:[Object(a.jsx)("div",{style:{position:"relative",right:800},children:Object(a.jsx)(v,{buttonStyle:"btn--rank--solid",onClick:function(){O.push("/")},children:"Home"})}),Object(a.jsx)(x,{main:"Sign Up"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.a.post("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/users",{email:n,username:i,password:p}).then((function(e){console.log(e);var t=Object(k.a)(w,"response.data.error_description","Successfully signed up!");C(t)})).catch((function(e){z(e.response.data.message)}))},children:[Object(a.jsxs)("label",{htmlFor:"email",children:["email \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)("input",{value:n,onChange:E(s),name:"email",type:"email"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{htmlFor:"username",children:["username \xa0\xa0",Object(a.jsx)("input",{value:i,onChange:E(l),name:"username",type:"username"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{htmlFor:"password",children:["password \xa0\xa0",Object(a.jsx)("input",{value:p,onChange:E(h),name:"password",type:"password"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Submit"}),J&&Object(a.jsx)("p",{style:{color:"red"},children:J}),w&&Object(a.jsx)("p",{style:{color:"green"},children:w})]}),Object(a.jsx)("img",{src:S,alt:"jars",width:"auto",height:"auto"})]})},I=(n(76),function(e){return Object(a.jsx)("div",{className:e.Class,onClick:e.onClick,children:Object(a.jsxs)("div",{className:"jar-info",children:[Object(a.jsx)("img",{alt:e.id,src:e.image}),Object(a.jsx)("h3",{children:e.Name}),Object(a.jsx)("h1",{className:"priceTag",children:"$"+e.Amount})]})})}),N=(n(77),function(e){return Object(a.jsxs)("div",{className:"message ".concat(e.result),children:[Object(a.jsx)("h1",{children:e.main}),Object(a.jsx)("h3",{children:e.sub}),e.message]})}),J=function(e){e.preventDefault();var t=window.localStorage.getItem("user");return m.a.post("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/create/"+t,"untitled",{headers:{"content-type":"application/json"}}).then((function(e){window.location.reload(),console.log(e)})).catch((function(e){console.log(e)}))},z=function(e){e.preventDefault();var t=window.localStorage.getItem("user");m.a.delete("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/logins/"+t).then((function(e){console.log(e),O.push("/login")})).catch((function(e){console.log(e)}))};var D=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){(function(){var e=window.localStorage.getItem("user");return m.a.get("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/"+e).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))})().then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]);var o=function(e){var t=e.name;return"".concat(t)},r=function(e){var t=e.amount;return"".concat(t)},i=function(e){var t=r(e),n=parseInt(t);return 0===n?"jarEmpty":n>500?"jarFull":n<500?"jarHalf":void 0};return Object(a.jsxs)(f,{children:[Object(a.jsx)(x,{main:"Money Jars"}),Object(a.jsx)(N,{message:""}),n.map((function(e,t){return Object(a.jsx)("div",{style:{position:"relative",left:50},children:Object(a.jsx)(I,{Class:i(e),Name:o(e),Amount:r(e),onClick:function(){var t=JSON.stringify(e);localStorage.setItem("jar",t),O.push("/openJar"),window.location.reload()}})},t)})),Object(a.jsx)(N,{message:""}),Object(a.jsx)(v,{type:"button",buttonStyle:"btn--rank--solid",buttonSize:"btn-small",onClick:J,children:"Create Jar"}),Object(a.jsx)(v,{type:"button",buttonStyle:"btn--solid--solid",buttonSize:"btn-small",onClick:z,children:"Log Out"}),Object(a.jsx)(N,{message:""}),Object(a.jsx)(N,{message:"*Remember to log out before exiting app*"})]})},E=(n(78),n.p+"static/media/MoneyJars.b94eaac2.png");var F=function(){return document.title="thejarbar",Object(a.jsxs)(f,{children:[Object(a.jsx)(N,{message:""}),Object(a.jsxs)("div",{className:"Home",children:[Object(a.jsx)("img",{src:E,alt:"jars",width:"200",height:"auto"}),Object(a.jsxs)("div",{className:"lander",children:[Object(a.jsx)(N,{message:""}),Object(a.jsxs)("form",{children:[Object(a.jsx)(v,{type:"button",buttonStyle:"btn--solid--solid",buttonSize:"btn-small",onClick:function(){return O.push("/login")},children:"Login"}),"\xa0\xa0\xa0",Object(a.jsx)(v,{type:"button",buttonStyle:"btn--rank--solid",buttonSize:"btn-small",onClick:function(){return O.push("/signup")},children:"Sign Up"})]})]})]})]})},A=(n(79),function(e){return Object(a.jsx)("div",{className:e.Class,children:Object(a.jsxs)("div",{className:"OpenJar-info",children:[Object(a.jsx)("img",{alt:e.id,src:e.image}),Object(a.jsx)("h2",{children:e.Name}),Object(a.jsxs)("h2",{className:"card-price",children:[" ","$"+e.Amount]})]})})}),H=n(37),T=JSON.parse(localStorage.getItem("jar")),_=localStorage.getItem("user");var L=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),r=Object(d.a)(o,2),i=r[0],l=r[1],j=Object(c.useState)("Enter Username"),u=Object(d.a)(j,2),p=u[0],h=u[1],g=Object(c.useState)(""),y=Object(d.a)(g,2),S=y[0],w=y[1],C=Object(c.useState)([]),I=Object(d.a)(C,2),J=I[0],z=I[1],D=Object(c.useState)(null),E=Object(d.a)(D,2),F=E[0],L=E[1],U=Object(c.useState)(null),R=Object(d.a)(U,2),$=R[0],B=R[1],M=Object(c.useState)(null),P=Object(d.a)(M,2),V=P[0],W=P[1],Y=Object(c.useState)(null),q=Object(d.a)(Y,2),G=q[0],K=q[1],Q=Object(c.useState)(null),X=Object(d.a)(Q,2),Z=X[0],ee=X[1],te=Object(b.f)();Object(c.useEffect)((function(){window.scrollTo(0,0)}),[te]),Object(c.useEffect)((function(){ne().then((function(e){z(e)})).catch((function(e){console.log(e)}))}),[]);var ne=function(){return m.a.get("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/transactions/"+T.id).then((function(e){return console.log(e.data),e.data})).catch((function(e){console.log(e)}))},ae=function(e){var t=e.type;return"".concat(t)},ce=function(e){var t=e.amount;return"".concat(t)},se=function(e){var t=e.username;return"".concat(t)},oe=function(e){var t=e.date;return"".concat(t)},re=function(e){return function(t){e(t.target.value),L(!1)}};return Object(a.jsxs)(f,{children:[Object(a.jsx)("div",{style:{position:"absolute",left:80},children:Object(a.jsx)(v,{type:"button",buttonStyle:"btn--play--solid",buttonSize:"btn-small",onClick:function(){localStorage.removeItem("jar"),O.push("/dashboard"),window.location.reload()},children:"Back to Jars"})}),"\xa0\xa0\xa0 ",T.creator===_&&Object(a.jsx)(v,{type:"button",buttonStyle:"btn--danger--solid",buttonSize:"btn-small",onClick:function(e){e.preventDefault(),m.a.delete("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/"+_+"/"+T.id).then((function(e){O.push("/dashboard"),localStorage.removeItem("jar"),window.location.reload()})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(a.jsx)(x,{main:T.name+" Jar"}),Object(a.jsx)(A,{Class:function(){var e=parseInt(T.amount);return 0===e?"OpenJarEmpty":e>500?"OpenJarFull":e<500?"OpenJarHalf":void 0}(),Name:T.name,Amount:T.amount}),Object(a.jsxs)(H.a,{style:{width:300,height:200,position:"relative",top:50},trackYVisible:!0,children:[Object(a.jsx)("h2",{children:"Transactions"}),J.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)("h4",{children:ae(e)+"    $"+ce(e)+"  "+se(e)+" "+oe(e)})},t)}))]}),Object(a.jsx)(N,{message:""}),T.creator===_&&Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{value:S,onChange:re(w),type:"text"}),"\xa0\xa0\xa0",Object(a.jsx)(v,{type:"button",buttonStyle:"btn--team--solid",buttonSize:"btn-small",onClick:function(e){return e.preventDefault(),m.a.put("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/rename/"+T.id,S,{headers:{"content-type":"application/json"}}).then((function(e){var t=Object(k.a)(V,"response.data.error_description","Successfully renamed!");W(t),T.name=S,localStorage.setItem("jar",JSON.stringify(T)),window.location.reload(),console.log(e)})).catch((function(e){console.log(e)}))},children:"Rename"}),V&&Object(a.jsx)("p",{style:{color:"green"},children:V})]}),Object(a.jsx)(N,{message:""}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{value:n,onChange:re(s),type:"number"}),"\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(v,{type:"button",buttonStyle:"btn--rank--solid",buttonSize:"btn-small",onClick:function(e){e.preventDefault();var t=window.localStorage.getItem("user");return m.a.put("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/donate/"+t+"/"+T.id,n,{headers:{"content-type":"application/json"}}).then((function(e){var t=Object(k.a)(G,"response.data.error_description","Successfully donated!");K(t),T.amount=parseInt(T.amount)+parseInt(n),localStorage.setItem("jar",JSON.stringify(T)),window.location.reload(),console.log(e)})).catch((function(e){console.log(e)}))},children:"Donate"}),G&&Object(a.jsx)("p",{style:{color:"green"},children:G})]}),Object(a.jsx)(N,{message:""}),T.creator===_&&Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{value:i,onChange:re(l),type:"number"}),"\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(v,{type:"button",buttonStyle:"btn--primary--solid",buttonSize:"btn-small",onClick:function(e){e.preventDefault();var t=window.localStorage.getItem("user");return m.a.put("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/withdraw/"+t+"/"+T.id,i,{headers:{"content-type":"application/json"}}).then((function(e){var t=Object(k.a)(Z,"response.data.error_description","Successfully withdrawn!");ee(t),T.amount=parseInt(T.amount)-parseInt(i),localStorage.setItem("jar",JSON.stringify(T)),window.location.reload(),console.log(e)})).catch((function(e){console.log(e)}))},children:"Withdraw"}),Z&&Object(a.jsx)("p",{style:{color:"green"},children:Z})]}),Object(a.jsx)(N,{message:""}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{value:p,onChange:re(h),type:"text"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(a.jsx)(v,{type:"button",buttonStyle:"btn--warning--solid",buttonSize:"btn-small",onClick:function(e){return e.preventDefault(),m.a.post("http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/share/"+T.id,p,{headers:{"content-type":"application/json"}}).then((function(e){console.log(e);var t=Object(k.a)($,"response.data.error_description","Successfully shared!");B(t)})).catch((function(e){L(e.response.data.message)}))},children:"Share"}),F&&Object(a.jsx)("p",{style:{color:"red"},children:F}),$&&Object(a.jsx)("p",{style:{color:"green"},children:$})]})]})},U=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)(b.b,{history:O,forceRefresh:!0,children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:"/",component:F}),Object(a.jsx)(b.a,{path:"/login",component:w}),Object(a.jsx)(b.a,{path:"/signup",component:C}),Object(a.jsx)(b.a,{path:"/dashboard/",component:D}),Object(a.jsx)(b.a,{path:"/openJar/",component:L})]})})}}]),n}(c.Component);o.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(U,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.7601f954.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(22),s=c.n(a),i=(c(44),c(6)),o=c(3),d=c.n(o),j=c(5),u=c(2),l=c(4),b=c.n(l);var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(u.a)(a,2),i=s[0],o=s[1],l=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/products");case 2:t=e.sent,r(t.data.products);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),{products:[c,r],callback:[i,o]}},O=c(8),p=c(14);var x=function(e){var t=Object(n.useState)(!1),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),o=i[0],l=i[1],h=Object(n.useState)([]),x=Object(u.a)(h,2),f=x[0],m=x[1],v=Object(n.useState)([]),g=Object(u.a)(v,2),y=g[0],w=g[1];Object(n.useEffect)((function(){e&&function(){var t=Object(j.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("/user/infor",{headers:{Authorization:e}});case 3:c=t.sent,a(!0),1===c.data.role?l(!0):l(!1),m(c.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var k=function(){var t=Object(j.a)(d.a.mark((function t(c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Please login to continue"));case 2:if(!f.every((function(e){return e._id!==c._id}))){t.next=9;break}return m([].concat(Object(p.a)(f),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])),t.next=7,b.a.patch("/user/addcart",{cart:[].concat(Object(p.a)(f),[Object(O.a)(Object(O.a)({},c),{},{quantity:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("This product has already been added to cart ");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,a],isAdmin:[o,l],cart:[f,m],addCart:k,history:[y,w]}};var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(u.a)(a,2),i=s[0],o=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/category");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),{categories:[c,r],callback:[i,o]}},m=c(0),v=Object(n.createContext)(),g=function(e){var t=e.children,c=Object(n.useState)(!1),r=Object(u.a)(c,2),a=r[0],s=r[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstlogin")){var e=function(){var t=Object(j.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("/user/refresh_token");case 2:c=t.sent,s(c.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var i={token:[a,s],ProductsAPI:h(),UserAPI:x(a),CategoriesAPI:f()};return Object(m.jsx)(v.Provider,{value:i,children:t})},y=c.p+"static/media/menu.e8db7520.svg",w=c.p+"static/media/close.ea7c95d7.svg",k=c.p+"static/media/cart.d146d6c3.svg";var C=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e.UserAPI.isLogged,1)[0],c=Object(u.a)(e.UserAPI.isAdmin,1)[0],r=Object(u.a)(e.UserAPI.cart,1)[0],a=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/user/logout");case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("header",{children:[Object(m.jsx)("div",{className:"menu",children:Object(m.jsx)("img",{src:y,alt:"",width:"30"})}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("h1",{children:Object(m.jsx)(i.b,{to:"/",children:c?"Admin":"Sideline"})})}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/",children:c?"Admin":"Shop"})}),c&&Object(m.jsxs)("div",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/create_product",children:"Create Product"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/category",children:"Categories"})})]}),t?Object(m.jsxs)("div",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/history",children:"History"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/",onClick:a,children:"Logout"})})]}):Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/login",children:"Login"})}),Object(m.jsx)("li",{children:Object(m.jsx)("img",{src:w,alt:"",width:"30",className:"menu"})})]}),!t||c?"":Object(m.jsxs)("div",{className:"cart-icon",children:[Object(m.jsx)("span",{children:r.length}),Object(m.jsx)(i.b,{to:"/cart",children:Object(m.jsx)("img",{src:k,alt:"",width:"30"})})]})]})},A=c(7);c(70);var P=function(e){var t=e.product,c=e.deleteProduct,r=Object(n.useContext)(v),a=Object(u.a)(r.UserAPI.isAdmin,1)[0],s=r.UserAPI.addCart;return Object(m.jsx)("div",{className:"row-btn",children:a?Object(m.jsxs)("div",{children:[Object(m.jsx)(i.b,{id:"btn-buy",to:"#!",onClick:function(){return c(t._id,t.images.public_id)},children:"Delete"}),Object(m.jsx)(i.b,{id:"btn-view",to:"/edit_product/".concat(t._id),children:"Edit"})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)(i.b,{id:"btn-buy",to:"#!",onClick:function(){return s(t)},children:"Buy"}),Object(m.jsx)(i.b,{id:"btn-view",to:"/detail/".concat(t._id),children:"View"})]})})};var _=function(e){var t=e.product,c=e.isAdmin,n=e.deleteProduct,r=e.handleCheck;return Object(m.jsxs)("div",{className:"product-card",children:[c&&Object(m.jsx)("input",{type:"checkbox",checked:t.checked,onChange:function(){return r(t._id)}}),Object(m.jsx)("img",{src:t.images.url,alt:""}),Object(m.jsxs)("div",{className:"product-box",children:[Object(m.jsx)("h2",{title:t.title,children:t.title}),Object(m.jsxs)("span",{children:["$",t.price]}),Object(m.jsx)("p",{children:t.description})]}),Object(m.jsx)(P,{product:t,deleteProduct:n})]})};c(71),c(72);var N=function(){return Object(m.jsx)("div",{className:"load-page",children:Object(m.jsx)("div",{className:"loader",children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{})})})})})})})})})})};var S=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e.ProductsAPI.products,2),c=t[0],r=t[1],a=Object(u.a)(e.UserAPI.isAdmin,1)[0],s=Object(u.a)(e.token,1)[0],i=Object(u.a)(e.ProductsAPI.callback,2),o=i[0],l=i[1],h=Object(n.useState)(!1),O=Object(u.a)(h,2),x=O[0],f=O[1],g=Object(n.useState)(!1),y=Object(u.a)(g,2),w=y[0],k=y[1],C=function(e){c.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),r(Object(p.a)(c))},A=function(){var e=Object(j.a)(d.a.mark((function e(t,c){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),n=b.a.post("/api/destroy",{public_id:c},{headers:{Authorization:s}}),r=b.a.delete("/api/products/".concat(t),{headers:{Authorization:s}}),e.next=6,n;case 6:return e.next=8,r;case 8:l(!o),f(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c){return e.apply(this,arguments)}}();return x?Object(m.jsx)("div",{children:Object(m.jsx)(N,{})}):Object(m.jsxs)(m.Fragment,{children:[a&&Object(m.jsxs)("div",{className:"delete-all",children:[Object(m.jsx)("span",{children:"Select all"}),Object(m.jsx)("input",{type:"checkbox",checked:w,onChange:function(){c.forEach((function(e){e.checked=!w})),r(Object(p.a)(c)),k(!w)}}),Object(m.jsx)("button",{onClick:function(){c.forEach((function(e){e.checked&&A(e._id,e.images.public_id)}))},children:"Delete ALL"})]}),Object(m.jsx)("div",{className:"products",children:c.map((function(e){return Object(m.jsx)(_,{product:e,isAdmin:a,deleteProduct:A,handleCheck:C},e._id)}))}),0===c.length&&Object(m.jsx)(N,{})]})};c(73);var I=function(){var e=Object(A.g)(),t=Object(n.useContext)(v),c=Object(u.a)(t.ProductsAPI.products,1)[0],r=t.UserAPI.addCart,a=Object(n.useState)([]),s=Object(u.a)(a,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){console.log("re render"),e.id&&c.forEach((function(t){t._id===e.id&&d(t)}))}),[e.id,c]),0===o.length?null:(console.log(o),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"detail",children:[Object(m.jsx)("img",{src:o.images.url,alt:""}),Object(m.jsxs)("div",{className:"box-detail",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("h2",{children:o.title}),Object(m.jsxs)("h6",{children:["#: ",o.product_id]})]}),Object(m.jsxs)("span",{children:["$ ",o.price]}),Object(m.jsx)("p",{children:o.description}),Object(m.jsx)("p",{children:o.content}),Object(m.jsxs)("p",{children:["Sold: ",o.sold]}),Object(m.jsx)(i.b,{to:"/cart",className:"cart",onClick:function(){return r(o)},children:"Buy Now"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:" Related Products"}),Object(m.jsx)("div",{className:"products",children:c.map((function(e){return e.category===o.category?Object(m.jsx)(_,{product:e},e._id):null}))})]})]}))},D=c(15);c(74);var E=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(u.a)(e,2),c=t[0],r=t[1],a=function(e){var t=e.target,n=t.name,a=t.value;r(Object(O.a)(Object(O.a)({},c),{},Object(D.a)({},n,a)))},s=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("/user/login",Object(O.a)({},c));case 4:localStorage.setItem("firstlogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"login-page",children:Object(m.jsxs)("form",{onSubmit:s,children:[Object(m.jsx)("h2",{children:"Login"}),Object(m.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:a}),Object(m.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:c.password,onChange:a}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("button",{type:"submit",children:"Login"}),Object(m.jsx)(i.b,{to:"/register",children:"Register"})]})]})})};var q=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(u.a)(e,2),c=t[0],r=t[1],a=function(e){var t=e.target,n=t.name,a=t.value;r(Object(O.a)(Object(O.a)({},c),{},Object(D.a)({},n,a)))},s=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.a.post("/user/register",Object(O.a)({},c));case 4:localStorage.setItem("firstlogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"login-page",children:Object(m.jsxs)("form",{onSubmit:s,children:[Object(m.jsx)("h2",{children:"Register"}),Object(m.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:c.name,onChange:a}),Object(m.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:c.email,onChange:a}),Object(m.jsx)("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:c.password,onChange:a}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("button",{type:"submit",children:"Register"}),Object(m.jsx)(i.b,{to:"/login",children:"Login"})]})]})})};c(75);var U=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e.UserAPI.history,2),c=t[0],r=t[1],a=Object(u.a)(e.UserAPI.isAdmin,1)[0],s=Object(u.a)(e.token,1)[0];return Object(n.useEffect)((function(){s&&function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,b.a.get("/api/payment",{headers:{Authorization:s}});case 3:t=e.sent,r(t.data),e.next=11;break;case 7:return e.next=9,b.a.get("/user/history",{headers:{Authorization:s}});case 9:c=e.sent,r(c.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,a,r]),Object(m.jsxs)("div",{className:"history-page",children:[Object(m.jsx)("h2",{children:"Order History"}),Object(m.jsxs)("h4",{children:[" You have ",c.length," orders"]}),Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Payment ID"}),Object(m.jsx)("th",{children:"Date of purchase"}),Object(m.jsx)("th",{children:"Payment ID"})]})}),Object(m.jsx)("tbody",{children:c.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.paymentID}),Object(m.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),Object(m.jsx)("td",{children:Object(m.jsx)(i.b,{to:"/history/".concat(e._id),children:"View"})})]},e._id)}))})]})]})};var z=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e.UserAPI.history,1)[0],c=Object(n.useState)([]),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(A.g)();return Object(n.useEffect)((function(){i.id&&t.forEach((function(e){e._id===i.id&&s(e)}))}),[i.id,t]),console.log(a),0===a.length?null:Object(m.jsxs)("div",{className:"history-page",children:[Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"address"}),Object(m.jsx)("th",{children:"Postal Code"}),Object(m.jsx)("th",{children:"Country Code"})]})}),Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:a.address.recipient_name}),Object(m.jsx)("td",{children:a.address.line1+" - "+a.address.city}),Object(m.jsx)("td",{children:a.address.postal_code}),Object(m.jsx)("td",{children:a.address.country_code})]})})]}),Object(m.jsxs)("table",{style:{margin:"30px 0 px"},children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{}),Object(m.jsx)("th",{children:"Products"}),Object(m.jsx)("th",{children:"Quantity"}),Object(m.jsx)("th",{children:"Price"})]})}),Object(m.jsx)("tbody",{children:a.cart.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)("img",{src:e.images.url,alt:""})}),Object(m.jsx)("td",{children:e.title}),Object(m.jsx)("td",{children:e.quantity}),Object(m.jsxs)("td",{children:["$ ",e.price*e.quantity]})]},e._id)}))})]})]})};c(76);var F=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e.CategoriesAPI.categories,1)[0],c=Object(n.useState)(""),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(u.a)(e.token,1)[0],o=Object(u.a)(e.CategoriesAPI.callback,2),l=o[0],h=o[1],O=Object(n.useState)(!1),p=Object(u.a)(O,2),x=p[0],f=p[1],g=Object(n.useState)(""),y=Object(u.a)(g,2),w=y[0],k=y[1],C=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!x){e.next=9;break}return e.next=5,b.a.put("/api/category/".concat(w),{name:a},{headers:{Authorization:i}});case 5:c=e.sent,alert(c.data.msg),e.next=13;break;case 9:return e.next=11,b.a.post("/api/category",{name:a},{headers:{Authorization:i}});case 11:n=e.sent,alert(n.data.msg);case 13:f(!1),s(""),h(!l),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(d.a.mark((function e(t,c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t),s(c),f(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/category/".concat(t),{headers:{Authorization:i}});case 3:c=e.sent,alert(c.data.msg),h(!l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"categories",children:[Object(m.jsxs)("form",{onSubmit:C,children:[Object(m.jsx)("label",{htmlFor:"category",children:"Category"}),Object(m.jsx)("input",{type:"text",name:"category",value:a,required:!0,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("button",{type:"submit",children:x?"Update":"Save"})]}),Object(m.jsx)("div",{className:"col",children:t.map((function(e){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("p",{children:e.name}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return A(e._id,e.name)},children:"Edit"}),Object(m.jsx)("button",{onClick:function(){return P(e._id)},children:"Delete"})]})]},e._id)}))})]})},L=(c(77),{product_id:"",title:"",price:0,description:"",content:"",category:""});var T=function(){var e=Object(n.useContext)(v),t=Object(n.useState)(L),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(u.a)(e.CategoriesAPI.categories,1)[0],i=Object(n.useState)(!1),o=Object(u.a)(i,2),l=o[0],h=o[1],p=Object(n.useState)(!1),x=Object(u.a)(p,2),f=x[0],g=x[1],y=Object(u.a)(e.UserAPI.isAdmin,1)[0],w=Object(u.a)(e.token,1)[0],k=Object(A.f)(),C=Object(A.g)(),P=Object(u.a)(e.ProductsAPI.products,1)[0],_=Object(n.useState)(!1),S=Object(u.a)(_,2),I=S[0],E=S[1],q=Object(u.a)(e.ProductsAPI.callback,2),U=q[0],z=q[1];Object(n.useEffect)((function(){C.id?(E(!0),P.forEach((function(e){e._id===C.id&&(a(e),h(e.images))}))):(E(!1),a(L),h(!1))}),[C.id,P]);var F=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,y||alert("You're not an Admin"),(c=t.target.files[0])||alert("Please upload a picture"),c.size>1048576&&alert("File size too large"),"image/jpeg"!==c.type&&"image/png"!==c.type&&alert("File format is incorrect"),(n=new FormData).append("file",c),g(!0),e.next=12,b.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:w}});case 12:r=e.sent,g(!1),h(r.data),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y||alert("You're not an Admin"),g(!0),e.next=5,b.a.post("/api/destroy",{public_id:l.public_id},{headers:{Authorization:w}});case 5:g(!1),h(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(e){var t=e.target,c=t.name,n=t.value;a(Object(O.a)(Object(O.a)({},r),{},Object(D.a)({},c,n)))},Y=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,y||alert("You're not an Admin"),l||alert("No image uploaded"),!I){e.next=9;break}return e.next=7,b.a.put("/api/products/".concat(r._id),Object(O.a)(Object(O.a)({},r),{},{images:l}),{headers:{Authorization:w}});case 7:e.next=11;break;case 9:return e.next=11,b.a.post("/api/products",Object(O.a)(Object(O.a)({},r),{},{images:l}),{headers:{Authorization:w}});case 11:z(!U),k.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),B={display:l?"block":"none"};return Object(m.jsxs)("div",{className:"create-product",children:[Object(m.jsxs)("div",{className:"upload",children:[Object(m.jsx)("input",{type:"file",name:"file",id:"file-up",onChange:F}),f?Object(m.jsx)("div",{id:"file-img",children:Object(m.jsx)(N,{})}):Object(m.jsxs)("div",{id:"file-img",style:B,children:[Object(m.jsx)("img",{src:l?l.url:"",alt:""}),Object(m.jsx)("span",{onClick:T,children:"X"})]})]}),Object(m.jsxs)("form",{onSubmit:Y,children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{htmlFor:"product_id",children:" Product ID"}),Object(m.jsx)("input",{type:"text",name:"product_id",id:"product_id",required:!0,value:r.product_id,onChange:R,disabled:I})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{htmlFor:"title",children:"title"}),Object(m.jsx)("input",{type:"text",name:"title",id:"title",required:!0,value:r.title,onChange:R})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{htmlFor:"price",children:"price"}),Object(m.jsx)("input",{type:"number",name:"price",id:"price",required:!0,value:r.price,onChange:R})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{htmlFor:"description",children:"Description"}),Object(m.jsx)("textarea",{type:"text",name:"description",id:"description",required:!0,value:r.description,rows:"5",onChange:R})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{htmlFor:"content",children:"Content"}),Object(m.jsx)("textarea",{type:"text",name:"content",id:"content",required:!0,value:r.content,rows:"7",onChange:R})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{htmlFor:"categories",children:"Category"}),Object(m.jsxs)("select",{name:"category",value:r.category,onChange:R,children:[Object(m.jsx)("option",{value:"",children:"Select Category"}),s.map((function(e){return Object(m.jsx)("option",{value:e._id,children:e.name},e._id)}))]})]}),Object(m.jsx)("button",{type:"submit",children:I?"Update":"Create"})]})]})},R=(c(78),c(35)),Y=c(36),B=c(39),$=c(38),M=c(37),V=c.n(M),X=function(e){Object(B.a)(c,e);var t=Object($.a)(c);function c(){return Object(R.a)(this,c),t.apply(this,arguments)}return Object(Y.a)(c,[{key:"render",value:function(){var e=this,t=this.props.total;return Object(m.jsx)(V.a,{env:"sandbox",client:{sandbox:"AaROMF7p4f6cc0UohWDTVGP7N0KxrCDIFvMn8xqytq89jmrUfdAXLf3aMnbYzmujfLxagdneUsB6LyLl",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:!1}})}}]),c}(r.a.Component);var H=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e.UserAPI.cart,2),c=t[0],r=t[1],a=Object(u.a)(e.token,1)[0],s=Object(n.useState)(0),i=Object(u.a)(s,2),o=i[0],l=i[1];Object(n.useEffect)((function(){!function(){var e=c.reduce((function(e,t){return e+t.price*t.quantity}),0);l(e)}()}),[c]);var h=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.patch("/user/addcart",{cart:t},{headers:{Authorization:a}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.paymentID,s=t.address,e.next=3,b.a.post("/api/payment",{cart:c,paymentID:n,address:s},{headers:{Authorization:a}});case 3:r([]),h([]),alert("You have successfully placed an order. ");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===c.length?Object(m.jsx)("h2",{style:{textAlign:"center",fontSize:"5rem"},children:"Cart Empty"}):(console.log(c.length),Object(m.jsxs)("div",{children:[c.map((function(e){return Object(m.jsxs)("div",{className:"detail cart",children:[Object(m.jsx)("img",{src:e.images.url,alt:""}),Object(m.jsxs)("div",{className:"box-detail",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsxs)("h3",{children:["$ ",e.price*e.quantity]}),Object(m.jsx)("p",{children:e.description}),Object(m.jsx)("p",{children:e.content}),Object(m.jsxs)("div",{className:"amount",children:[Object(m.jsx)("button",{onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),r(Object(p.a)(c)),void h(c);var t},children:" - "}),Object(m.jsx)("span",{children:e.quantity}),Object(m.jsx)("button",{onClick:function(){return t=e._id,c.forEach((function(e){e._id===t&&(e.quantity+=1)})),r(Object(p.a)(c)),void h(c);var t},children:" + "})]}),Object(m.jsx)("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to remove this product?")&&(c.forEach((function(e,n){e._id===t&&c.splice(n,1)})),r(Object(p.a)(c)),h(c)));var t},children:"X"})]})]},e._id)})),Object(m.jsxs)("div",{className:"total",children:[Object(m.jsxs)("h3",{children:["Total: $ ",o]}),Object(m.jsx)(X,{total:o,tranSuccess:O})]})]}))};var J=function(){return Object(m.jsx)("div",{children:"404 | Not Found"})};var G=function(){var e=Object(n.useContext)(v),t=Object(u.a)(e.UserAPI.isLogged,1)[0],c=Object(u.a)(e.UserAPI.isAdmin,1)[0];return Object(m.jsxs)(A.c,{children:[Object(m.jsx)(A.a,{path:"/",exact:!0,component:S}),Object(m.jsx)(A.a,{path:"/detail/:id",exact:!0,component:I}),Object(m.jsx)(A.a,{path:"/login",exact:!0,component:t?J:E}),Object(m.jsx)(A.a,{path:"/register",exact:!0,component:t?J:q}),Object(m.jsx)(A.a,{path:"/create_product",exact:!0,component:c?T:J}),Object(m.jsx)(A.a,{path:"/edit_product/:id",exact:!0,component:c?T:J}),Object(m.jsx)(A.a,{path:"/category",exact:!0,component:c?F:J}),Object(m.jsx)(A.a,{path:"/history",exact:!0,component:t?U:J}),Object(m.jsx)(A.a,{path:"/history/:id",exact:!0,component:t?z:J}),Object(m.jsx)(A.a,{path:"/cart",exact:!0,component:t?H:J}),Object(m.jsx)(A.a,{path:"*",exact:!0,component:J})]})};var K=function(){return Object(m.jsx)(g,{children:Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(C,{}),Object(m.jsx)(G,{})]})})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(K,{})}),document.getElementById("root")),Q()}},[[83,1,2]]]);
//# sourceMappingURL=main.c9eb7d12.chunk.js.map
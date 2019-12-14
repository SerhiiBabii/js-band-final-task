(this["webpackJsonpjs-band-final-task"]=this["webpackJsonpjs-band-final-task"]||[]).push([[0],{28:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),l=n(11),u=n(9),i=n(2),s=Object(i.b)((function(e){return{user:e.books.user}}),(function(e){return{signOutUser:function(){return e({type:"SIGNUOT"})}}}))((function(e){var t=e.user,n=e.signOutUser,a=t.username,c=t.avatar;return r.a.createElement("div",null,r.a.createElement(l.b,{to:"/cart"},r.a.createElement("img",{height:"40",src:"./images/cart.svg",alt:"cart"})),r.a.createElement("button",{onClick:n,type:"button",className:"btn btn-primary m-2"},"Sing-Out"),r.a.createElement("img",{height:"40",className:"m-2 rounded-circle",src:c,alt:"avatar"}),r.a.createElement("span",null,a))})),m=Object(i.b)((function(e){return{user:e.books.user}}))((function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-dark"},r.a.createElement("h3",null,"JS BAND STORE / Serhii Babii"),t.username?r.a.createElement(s,null):null)})),d=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"text-center",height:"80",src:"./images/cart.svg",alt:"empty cart"}),r.a.createElement("p",null,"Cart empty."))},p=function(e){var t=e.currentCart,n=t.title,a=t.count,c=t.total;return r.a.createElement("tr",{className:"row"},r.a.createElement("td",{className:"col-7"},n),r.a.createElement("td",{className:"col-4"},a),r.a.createElement("td",{className:"col-1"},c))};p.defaultProps={currentCart:{},title:"",count:0,total:0};var f=p,E=function(e){var t=e.orderTotal;return r.a.createElement("div",null,r.a.createElement("b",null,"Total price, $",t))},b=Object(i.b)((function(e){return{cartItems:e.books.cart.cartItems,orderTotal:e.books.cart.orderTotal}}))((function(e){var t=e.cartItems,n=e.orderTotal;return r.a.createElement("div",null,r.a.createElement("table",{className:"table m-3"},r.a.createElement("tbody",null,t?t.map((function(e){return r.a.createElement(f,{key:e.id,currentCart:e})})):null)),r.a.createElement(E,{orderTotal:n}))})),v=n(26),h=n(27),k="https://js-band-api.glitch.me",g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){fetch(e,t).then((function(e){if(e.status<400)return e.json();throw e})).then((function(e){n(e)})).catch((function(e){e.json().then((function(e){a(e)}))}))}))},O=function(){function e(){Object(v.a)(this,e)}return Object(h.a)(e,null,[{key:"get",value:function(e,t){return g("".concat(k).concat(e),{mode:"cors",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(t)}})}},{key:"post",value:function(e,t){return g("".concat(k).concat(e),{method:"POST",mode:"cors",headers:{"Content-type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})}},{key:"postWithToken",value:function(e,t,n){return g("".concat(k).concat(e),{method:"POST",mode:"cors",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(t),Accept:"application/json"},body:JSON.stringify(n)})}}]),e}(),N=Object(i.b)((function(e){return{cartItems:e.books.cart.cartItems,token:e.books.user.token}}),(function(e){return{purchase:function(){return e({type:"SEND_BOOKS"})}}}))((function(e){var t=e.cartItems,n=e.token,a=e.purchase;return r.a.createElement("div",null,r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{onClick:function(){!function(e,t,n){O.postWithToken("/purchase",t,{books:e}).then((function(){n()}))}(t,n,a)},disabled:!t.length,className:"btn btn-primary",type:"button"},"Purchase")),t.length?r.a.createElement(b,null):r.a.createElement(d,null))})),y=n(14),S=Object(i.b)(null,(function(e){return{addBookToCart:function(t,n){return e(function(e,t){return{type:"ADD_BOOK",bookId:e,quantity:t}}(t,n))}}}))((function(e){var t=e.id,n=e.price,c=e.maxBooks,o=e.addBookToCart,l=Object(a.useState)(1),u=Object(y.a)(l,2),i=u[0],s=u[1];return r.a.createElement("div",{className:"border p-2"},r.a.createElement("p",{className:"row"},r.a.createElement("span",{className:"col-8"},"Price, $"),r.a.createElement("span",{className:"col-2"},n)),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"col-8"},"Count"),r.a.createElement("input",{className:"col-3 rounded pl-2 pr-0",value:i,type:"number",name:"countInput",onChange:function(e){return e.target.value<0?1:e.target.value>c?e.target.value:s(e.target.value)}})),r.a.createElement("p",{className:"row"},r.a.createElement("span",{className:"col-8"},"Total price "),r.a.createElement("span",{className:"col-2"},(n*i).toFixed(2))),r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{onClick:function(){return o(t,i)},disabled:i<1,className:"btn btn-secondary",type:"button"},"Add to cart")))})),j=(n(38),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-wedges"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)))))}),_=Object(i.b)((function(e){return{book:e.books.book,loading:e.books.loading,token:e.books.user.token}}),(function(e){return{fetchBookRequest:function(){return e({type:"FETCH_BOOK_REQUEST"})},fetchBookSuccess:function(t){return e(function(e){return{type:"FETCH_BOOK_SUCCESS",book:e}}(t))},fetchBookFailure:function(t){return e(function(e){return{type:"FETCH_BOOK_FAILURE",error:e}}(t))}}}))((function(e){var t=e.match,n=e.token,c=e.loading,o=e.book,l=e.book,u=l.id,i=l.title,s=l.author,m=l.description,d=l.cover,p=l.tags,f=l.level,E=l.count,b=l.price,v=e.fetchBookSuccess,h=e.fetchBookRequest;e.fetchBookFailure;Object(a.useEffect)((function(){O.get("/books/".concat(t.params.id),n).then((function(e){h(),setTimeout((function(){return v(e)}),2e3)}))}),[h,v,t.params.id,n]);var k=d||"./images/imageNotFound.png";return o.title&&!c?r.a.createElement("div",{className:"m-3"},r.a.createElement("div",{className:"row"},r.a.createElement("img",{className:"col-4",src:k,alt:"poster"}),r.a.createElement("div",{className:"col-4"},r.a.createElement("p",null,"Book name:"," ",i),r.a.createElement("p",null,"Book author:"," ",s),r.a.createElement("p",null,"Book level:"," ",f),r.a.createElement("p",null,"Book tags:"," ",p)),r.a.createElement("div",{className:"col-4"},r.a.createElement(S,{id:u,price:b,maxBooks:E}))),r.a.createElement("p",null,"Description:",m)):r.a.createElement(j,null)})),B=Object(i.b)(null,(function(e){return{signInUser:function(t,n,a){return e(function(e,t,n){return{type:"SIGNIN",username:e,avatar:t,token:n}}(t,n,a))}}}))((function(e){var t=e.signInUser,n=Object(a.useState)(""),c=Object(y.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)("error"),i=Object(y.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("div",null,r.a.createElement("img",{className:"border",height:"250",src:"images/defaultAvatar.png",alt:"avatar"})),r.a.createElement("div",{className:"m-2"},r.a.createElement("label",{htmlFor:"username"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("b",null,"Username")),r.a.createElement("input",{value:o,onChange:function(e){l(e.target.value),e.target.value.length<4||e.target.value.length>16?m("error"):m("")},className:"col-12",type:"text",name:"username",id:"username",placeholder:"type Username"})),s?r.a.createElement("p",{className:"text-danger"},"Field is not valid"):null),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e=o,n=t,void O.post("/signin",{username:e}).then((function(e){var t=e.username,a=e.avatar,r=e.token;n(t,a,r)}));var e,n},disabled:!!s,className:"col-2",type:"button"},"Sign-In"))))})),C=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"col-8",src:"./images/error404.jpg",alt:"error404"}))},T=function(e){var t=e.book,n=t.id,a=t.cover,c=t.title,o=t.author,u=t.price,i=a||"images/imageNotFound.png";return r.a.createElement("div",{className:"cart row col-3 border m-4 p-3"},r.a.createElement("img",{className:"col-12",src:i,alt:"cover"}),r.a.createElement("p",{className:"col-12"},c),r.a.createElement("p",{className:"col-12"},o),r.a.createElement("p",{className:"row col-12"},r.a.createElement("span",{className:"col-8"},"Price:"," ",u),r.a.createElement(l.b,{to:"/books/".concat(n),className:"btn btn-secondary col-4"},"View")))},F=Object(i.b)((function(e){return{search:e.books.filters.search,price:e.books.filters.price}}),(function(e){return{onChangeFilter:function(t,n){return e(function(e,t){return{type:"SHOW_FILTERED_BOOKS",name:e,value:t}}(t,n))}}}))((function(e){var t=e.search,n=e.price,a=e.onChangeFilter;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("input",{onChange:function(e){return a(e.target.name,e.target.value)},value:t,className:"form-control col-6",type:"text",name:"search",placeholder:"Search by book name"}),r.a.createElement("select",{onChange:function(e){return a(e.target.name,e.target.value)},value:n,className:"form-control col-3",name:"price"},r.a.createElement("option",{value:"all"},"all"),r.a.createElement("option",{value:"from_0_to_15"},"0 < price > 15"),r.a.createElement("option",{value:"from_15_to_30"},"15 < price > 30"),r.a.createElement("option",{value:"more_than_30"},"price > 30")))}));var I=function(e,t){return 0===t.length?e:e.filter((function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>-1}))};var w=function(e,t){return"all"===t?e:"from_0_to_15"===t?e.filter((function(e){return e.price>=0&&e.price<15})):"from_15_to_30"===t?e.filter((function(e){return e.price>=15&&e.price<30})):"more_than_30"===t?e.filter((function(e){return e.price>30})):void 0},x=Object(i.b)((function(e){return{books:e.books.books,token:e.books.user.token,loading:e.books.loading,search:e.books.filters.search,price:e.books.filters.price}}),(function(e){return{fetchBooksRequest:function(){return e({type:"FETCHS_BOOK_REQUEST"})},fetchBooksSuccess:function(t){return e(function(e){return{type:"FETCH_BOOKS_SUCCESS",books:e}}(t))},fetchBooksFailure:function(t){return e(function(e){return{type:"FETCH_BOOKS_FAILURE",error:e}}(t))}}}))((function(e){var t=e.books,n=e.token,c=e.loading,o=e.search,l=e.price,u=e.fetchBooksRequest,i=e.fetchBooksSuccess;e.fetchBooksFailure;Object(a.useEffect)((function(){O.get("/books",n).then((function(e){u(),setTimeout((function(){return i(e)}),2e3)}))}),[u,i,n]);var s=c?r.a.createElement(j,null):null,m=I(w(t,l),o),d=t&&!c?m.map((function(e){return r.a.createElement(T,{key:e.id,book:e})})):null;return r.a.createElement("div",{className:"row p-3"},r.a.createElement("div",{className:"col-10"},r.a.createElement(F,null)),r.a.createElement("div",{className:"row"},s,d))})),U=n(10),K=n(21),P=n(12),R=function(e,t,n){return 0===t.count?[].concat(Object(P.a)(e.slice(0,n)),Object(P.a)(e.slice(n+1))):-1===n?[].concat(Object(P.a)(e),[t]):[].concat(Object(P.a)(e.slice(0,n)),[t],Object(P.a)(e.slice(n+1)))},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,c=t.count,o=void 0===c?0:c,l=t.title,u=void 0===l?e.title:l,i=t.total,s=void 0===i?0:i,m=s+n*e.price;return{id:r,count:+o+ +n,title:u,total:+m.toFixed(2)}},H=function(e,t,n){var a=0;return e.map((function(e){return a+=e.total})),a+t.price*n},A=function(e,t,n){var a=n.books,r=n.cart.cartItems,c=a.find((function(t){return t.id===e})),o=r.findIndex((function(t){return t.id===e})),l=r[o],u=D(c,l,t);return{cartItems:R(r,u,o),orderTotal:H(r,c,t).toFixed(2)}};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){Object(K.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J={user:{username:void 0,avatar:void 0,token:void 0},books:[],book:{},filters:{search:"",price:"all"},cart:{cartItems:[],orderTotal:void 0},loading:!1,error:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN":return q({},e,{user:{username:t.username,avatar:t.avatar,token:t.token}});case"SIGNUOT":return q({},e,{user:{username:void 0,avatar:void 0,token:void 0}});case"SHOW_FILTERED_BOOKS":return q({},e,{filters:q({},e.filters,Object(K.a)({},t.name,t.value))});case"FETCHS_BOOK_REQUEST":return q({},e,{books:[],loading:!0,error:null});case"FETCH_BOOKS_SUCCESS":return q({},e,{books:t.books,loading:!1,error:null});case"FETCH_BOOKS_FAILURE":return q({},e,{books:[],loading:!1,error:t.error});case"FETCH_BOOK_REQUEST":return q({},e,{book:{},loading:!0,error:null});case"FETCH_BOOK_SUCCESS":return q({},e,{book:t.book,loading:!1,error:null});case"FETCH_BOOK_FAILURE":return q({},e,{book:{},loading:!1,error:t.error});case"ADD_BOOK":return q({},e,{cart:A(t.bookId,t.quantity,e)});case"SEND_BOOKS":return q({},e,{cart:{cartItems:[],orderTotal:void 0}});default:return e}},Q=Object(U.b)({books:G}),W=Object(U.c)(Q),z=function(){return r.a.createElement(i.a,{store:W},r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("hr",null),r.a.createElement(m,null),r.a.createElement("hr",null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(u.a,{to:"/signin"})),r.a.createElement(u.b,{path:"/signin",component:B}),r.a.createElement(u.b,{exact:!0,path:"/books",component:x}),r.a.createElement(u.b,{path:"/books/:id",component:_}),r.a.createElement(u.b,{path:"/cart",component:N}),r.a.createElement(u.b,{exact:!0,path:"*",component:C})))))};o.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f8147fb4.chunk.js.map
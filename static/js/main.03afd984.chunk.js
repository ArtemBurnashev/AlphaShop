(this["webpackJsonpalpha-shop"]=this["webpackJsonpalpha-shop"]||[]).push([[0],{129:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(39),r=n.n(i),o=(n(129),n(19)),s=n(13),l=n(198),d=n(197),j=n(199),u=n(200),b=n(201),x=n(101),p=n.n(x),h=n(98),m=n.n(h),O=n(0),g=function(e){return Object(O.jsx)("div",{className:"menu-wrapper",children:Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)("button",{className:"close-btn",onClick:function(){return e.handleMenu()},children:Object(O.jsx)(m.a,{style:{width:"28px",height:"28px"}})}),Object(O.jsxs)("ul",{className:"menu",children:[Object(O.jsx)("li",{className:"menu__item",children:Object(O.jsx)(o.b,{to:"/home",onClick:function(){return e.handleMenu()},children:"Home"})}),Object(O.jsx)("li",{className:"menu__item",children:Object(O.jsx)(o.b,{to:"/",onClick:function(){return e.handleMenu()},children:"Products"})}),Object(O.jsx)("li",{className:"menu__item",children:Object(O.jsx)(o.b,{to:"/contacts",onClick:function(){return e.handleMenu()},children:"Contacts"})}),Object(O.jsx)("li",{className:"menu__item",children:Object(O.jsx)(o.b,{to:"/sign-in",onClick:function(){return e.handleMenu()},children:"Sign in / Sign up"})})]})]})})};function f(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],i=function(){a(!n),document.body.style.overflow=n?"":"hidden"};return window.addEventListener("click",(function(e){e.target.classList.contains("menu-wrapper")&&(a(),document.body.style.overflow="")})),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.a,{sx:{flexGrow:1},children:Object(O.jsx)(l.a,{position:"static",style:{backgroundColor:"#222"},children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(u.a,{variant:"h6",component:"div",sx:{flexGrow:1},style:{fontSize:"17px"},children:Object(O.jsx)(o.b,{to:"/",style:{textDecoration:"none",color:"#fff"},children:" AlphaShop"})}),Object(O.jsx)(b.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},style:{margin:0},onClick:function(){return i()},children:Object(O.jsx)(p.a,{})})]})})}),n&&Object(O.jsx)(g,{handleMenu:i})]})}var y=n(203),v=function(){return Object(O.jsx)("footer",{className:"footer",style:{height:"50px",backgroundColor:"#222",position:"relative"},children:Object(O.jsx)(y.a,{style:{maxWidth:"1200px"},children:Object(O.jsxs)("div",{className:"company",style:{color:"#fff",fontWeight:"500",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"14px"},children:["\xa9 ",(new Date).getFullYear(),"  AlphaShop"]})})})},C=n(17),N=n(204),w=function(){return Object(O.jsx)(d.a,{sx:{width:"100%"},children:Object(O.jsx)(N.a,{})})},S=n(191),k=n(205),E=n(184),T=n(15),A=n(14);function W(e,t){var n=t.type,c=t.payload;switch(n){case"SET_GOODS":return Object(A.a)(Object(A.a)({},e),{},{goods:c||[],loading:!1});case"ADD_TO_BASKET":var a=e.order.findIndex((function(e){return e.id===c.id})),i=null;if(a<0){var r=Object(A.a)(Object(A.a)({},c),{},{quantity:1});i=[].concat(Object(T.a)(e.order),[r])}else i=e.order.map((function(e,t){return t===a?Object(A.a)({},e):e}));return Object(A.a)(Object(A.a)({},e),{},{order:i,getAlert:!0});case"CLOSE_ALERT":return Object(A.a)(Object(A.a)({},e),{},{getAlert:!1});case"CLEAR_CART":return Object(A.a)(Object(A.a)({},e),{},{order:[]});case"REMOVE_FROM_BASKET":return Object(A.a)(Object(A.a)({},e),{},{order:e.order.filter((function(e){return e.id!==c.id}))});case"INCRIMENT_QUANTITY":return Object(A.a)(Object(A.a)({},e),{},{order:e.order.map((function(e){if(e.id===c.id){var t=e.quantity+1;return Object(A.a)(Object(A.a)({},e),{},{quantity:t<31?t:30})}return e}))});case"DECREMENT_QUANTITY":return Object(A.a)(Object(A.a)({},e),{},{order:e.order.map((function(e){if(e.id===c.id){var t=e.quantity-1;return Object(A.a)(Object(A.a)({},e),{},{quantity:t>0?t:1})}return e}))});case"HANDLE_PRODUCT":return Object(A.a)(Object(A.a)({},e),{},{orderProduct:c});case"CATEGORY_VALUE":return Object(A.a)(Object(A.a)({},e),{},{category:c});default:return e}}var _=Object(c.createContext)(),I=function(e){var t=e.children,n={goods:[],loading:!0,order:JSON.parse(sessionStorage.getItem("order"))||[],getAlert:!1,orderProduct:JSON.parse(sessionStorage.getItem("product"))||{},category:"all products"},a=Object(c.useReducer)(W,n),i=Object(s.a)(a,2),r=i[0],o=i[1];return r.addToBasket=function(e){o({type:"ADD_TO_BASKET",payload:e})},r.closeAlert=function(){o({type:"CLOSE_ALERT",payload:""})},r.clearCart=function(){o({type:"CLEAR_CART"})},r.removeFromBasket=function(e){o({type:"REMOVE_FROM_BASKET",payload:{id:e}})},r.incQuantity=function(e){o({type:"INCRIMENT_QUANTITY",payload:{id:e}})},r.decQuantity=function(e){o({type:"DECREMENT_QUANTITY",payload:{id:e}})},r.handleProduct=function(e){o({type:"HANDLE_PRODUCT",payload:e})},r.setGoods=function(e){o({type:"SET_GOODS",payload:e})},r.categoryValue=function(e){o({type:"CATEGORY_VALUE",payload:e})},Object(O.jsx)(_.Provider,{value:r,children:t})};function D(){var e=Object(c.useContext)(_).categoryValue;return Object(O.jsx)(d.a,{sx:{minWidth:120,maxWidth:230,padding:2},children:Object(O.jsxs)(k.a,{fullWidth:!0,children:[Object(O.jsx)(S.a,{variant:"standard",htmlFor:"uncontrolled-native",children:"Category"}),Object(O.jsxs)(E.a,{inputProps:{name:"age",id:"uncontrolled-native"},onChange:function(t){return e(t.target.value)},children:[Object(O.jsx)("option",{value:"all products",children:"All products"}),Object(O.jsx)("option",{value:"men's clothing",children:"Men's clothing"}),Object(O.jsx)("option",{value:"jewelery",children:"Jewelery"}),Object(O.jsx)("option",{value:"electronics",children:"Electronics"}),Object(O.jsx)("option",{value:"women's clothing",children:"Women's clothing"})]})]})})}var R=n(206),F=n(209),B=n(208),P=n(207),L=n(210),M=n(102),z=n.n(M),q=n(190),U=n(185),V=function(e){var t=e.id,n=e.title,a=e.price,i=e.description,r=e.category,s=e.rating,l=e.image,d=Object(c.useContext)(_),j=d.addToBasket,b=d.handleProduct,x={card:{position:"relative",padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between",maxWidth:"310px"},price:{fontSize:"15px",fontWeight:500,margin:0}};return Object(O.jsxs)(R.a,{className:"item",sx:{maxWidth:345},style:x.card,id:t,children:[Object(O.jsxs)(o.b,{to:"/product",style:{cursor:"pointer",color:"#000",textDecoration:"none"},onClick:function(){b({id:t,title:n,price:a,description:i,category:r,rating:s,image:l})},children:[Object(O.jsx)(P.a,{component:"img",height:"200px",image:l,alt:"goods",style:{objectFit:"contain",marginBottom:"5px"}}),Object(O.jsx)(B.a,{style:{padding:"10px"},children:Object(O.jsx)(u.a,{gutterBottom:!0,component:"div",style:x.price,children:n})})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(U.a,{spacing:1,style:{padding:"7px 7px 10px"},children:Object(O.jsx)(q.a,{name:"half-rating",defaultValue:s.rate,readOnly:!0,size:"small"})}),Object(O.jsxs)(F.a,{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)(L.a,{variant:"contained",size:"medium",style:{padding:"6px 17px"},onClick:function(){j({id:t,title:n,price:a,description:i,category:r,rating:s,image:l})},children:Object(O.jsx)(z.a,{})}),Object(O.jsxs)("span",{style:{fontWeight:600,fontSize:"19px"},children:[a," $"]})]})]})]})},G=function(){var e=Object(c.useContext)(_),t=e.goods,n=void 0===t?[]:t,a=e.category,i=void 0===a?"all products":a;return n.length?Object(O.jsx)("div",{className:"items",children:n.map((function(e){return e.category===i||"all products"===i?Object(O.jsx)(V,Object(A.a)({},e),e.id):void 0}))}):Object(O.jsx)("h2",{children:"Nothing here"})},H=n(192),Q=n(4),Y=n(103),J=n.n(Y),K=Object(Q.a)(H.a)((function(e){var t=e.theme;return{"& .MuiBadge-badge":{right:-3,top:13,border:"2px solid ".concat(t.palette.background.paper),padding:"0 4px"}}})),$={button:{backgroundColor:"#e0e0e0",color:"#4c4c4c",width:"47px",height:"47px"}};function X(e){var t=Object(c.useContext)(_),n=t.order,a=t.handleBasketShow,i=void 0===a?Function.prototype:a,r=n.length;return Object(O.jsx)(o.b,{to:"/cart",style:{position:"fixed",zIndex:30},className:"cart",children:Object(O.jsx)(b.a,{"aria-label":"cart",style:$.button,onClick:i,children:Object(O.jsx)(K,{badgeContent:r,color:"secondary",children:Object(O.jsx)(J.a,{})})})})}var Z=function(){var e=Object(c.useContext)(_).closeAlert,t=void 0===e?Function.prototype:e;return Object(c.useEffect)((function(){var e=setTimeout(t,3e3);return function(){clearTimeout(e)}})),Object(O.jsx)("div",{className:"toast",children:"Product added to cart"})},ee=function(e){var t=e.id,n=e.title,c=e.price,a=e.category,i=e.image,r=e.description.replace(/[/,]/g,", "),o={image:{display:"block",maxWidth:"250px",width:"100%",height:"auto",maxHeight:"250px",objectFit:"contain",borderRadius:"3px",marginBottom:"10px"},basketItem:{maxWidth:"500px",padding:"10px",width:"100%",height:"auto"},price:{fontSize:"19px",fontWeight:500,marginBottom:"15px",lineHeight:"140%"},category:{backgroundColor:"#e5e5e5",padding:"5px 20px 5px 10px",display:"inline-block",borderRadius:"5px",background:"linear-gradient(to right, #d3cce3, #e9e4f0)",marginBottom:"20px"},description:{marginBottom:"15px",width:"100%",height:"auto",fontSize:"17px"}};return Object(O.jsxs)("div",{className:"contentBasket-wrapper",id:t,children:[Object(O.jsx)("img",{src:i,style:o.image,alt:n}),Object(O.jsxs)("div",{className:"basket-item",style:o.basketItem,children:[Object(O.jsx)("h3",{style:{margin:"0 0 20px 0"},children:n}),Object(O.jsxs)("div",{className:"price-item",style:o.price,children:["Price: ",Object(O.jsxs)("span",{style:{color:"#0ab30a",fontSize:"19px"},children:[c," $"]})]}),Object(O.jsx)("div",{className:"category-item",style:o.category,children:a}),Object(O.jsx)("div",{className:"description-item",style:o.description,children:r})]})]})},te=n(104),ne=n.n(te),ce=function(e){var t=Object(c.useContext)(_),n=t.removeFromBasket,a=t.incQuantity,i=t.decQuantity,r=e.item;return Object(O.jsxs)("li",{className:"basket-content",children:[Object(O.jsx)(L.a,{style:{minWidth:"auto",padding:"0",position:"absolute",right:"7px",top:"7px",color:"#e40303"},onClick:function(){return n(r.id)},children:Object(O.jsx)(ne.a,{})}),Object(O.jsx)(ee,Object(A.a)({},r)),Object(O.jsxs)("div",{className:"basket-buttons",children:[Object(O.jsx)(L.a,{variant:"outlined",size:"small",style:{minWidth:"50px"},onClick:function(){return i(r.id)},children:"-"}),Object(O.jsx)("span",{style:{padding:"15px"},children:r.quantity}),Object(O.jsx)(L.a,{variant:"outlined",size:"small",style:{minWidth:"50px"},onClick:function(){return a(r.id)},children:"+"})]})]})},ae=function(e){var t=Object(c.useContext)(_),n=t.clearCart,a=t.order,i=a.reduce((function(e,t){return e+t.price*t.quantity}),0),r={basketList:{listStyleType:"none",margin:"0",padding:"0"},buy:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center"},total:{fontSize:"20px",fontWeight:"600",padding:"5px"}};return Object(O.jsx)("div",{className:"content-wrapper",children:Object(O.jsx)("ul",{className:"basket-list",style:r.basketList,children:a.length?Object(O.jsxs)(O.Fragment,{children:[a.map((function(e){return Object(O.jsx)(ce,{item:e},e.id)})),Object(O.jsxs)("li",{style:r.buy,children:[Object(O.jsxs)("div",{style:{padding:"10px"},children:[Object(O.jsx)(L.a,{variant:"contained",style:{marginRight:"15px",padding:"10px"},children:"Buy Now"}),Object(O.jsx)(L.a,{variant:"contained",size:"small",color:"error",onClick:n,children:"Clear Card"})]}),Object(O.jsxs)("div",{style:r.total,children:["Total Price:  ",i.toFixed(2)," $"]})]})]}):Object(O.jsx)("li",{style:{fontWeight:"500",fontSize:"19px",textAlign:"center"},children:"Your shopping cart is empty."})})})},ie=function(e){var t=Object(c.useContext)(_),n=t.orderProduct,a=t.addToBasket;return Object(O.jsxs)("div",{className:"content-wrapper",children:[Object(O.jsx)(ee,Object(A.a)({},n)),Object(O.jsx)(L.a,{variant:"contained",className:"button-cart",onClick:function(){return a(n)},children:"Add to cart"})]})},re=function(){return Object(O.jsx)("h1",{children:"Hello, from Home page"})},oe=function(){return Object(O.jsx)("h1",{children:"Hello, from Contact page"})},se=function(){return Object(O.jsx)("h1",{children:"Page Not found"})},le=n(194),de=n(186),je=n(187),ue=n(211),be=n(189),xe=n(69),pe=n.n(xe),he=n(105),me=n(196),Oe=Object(he.a)();function ge(){return Object(O.jsx)(me.a,{theme:Oe,children:Object(O.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)(de.a,{}),Object(O.jsxs)(d.a,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsx)(le.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(O.jsx)(pe.a,{})}),Object(O.jsx)(u.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(O.jsxs)(d.a,{component:"form",onSubmit:function(e){e.preventDefault()},noValidate:!0,sx:{mt:1},children:[Object(O.jsx)(je.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(O.jsx)(je.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(O.jsx)(ue.a,{control:Object(O.jsx)(be.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(O.jsx)(L.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(O.jsx)(o.b,{to:"/sign-up",variant:"body2",children:"Don't have an account? Sign Up"})]})]})]})})}var fe=n(195),ye=Object(he.a)();function ve(){return Object(O.jsx)(me.a,{theme:ye,children:Object(O.jsxs)(y.a,{component:"main",maxWidth:"xs",children:[Object(O.jsx)(de.a,{}),Object(O.jsxs)(d.a,{sx:{marginTop:1,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(O.jsx)(le.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(O.jsx)(pe.a,{})}),Object(O.jsx)(u.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(O.jsxs)(d.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:3},children:[Object(O.jsxs)(fe.a,{container:!0,spacing:2,children:[Object(O.jsx)(fe.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(je.a,{autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(O.jsx)(fe.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(je.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(O.jsx)(fe.a,{item:!0,xs:12,children:Object(O.jsx)(je.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(O.jsx)(fe.a,{item:!0,xs:12,children:Object(O.jsx)(je.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})}),Object(O.jsx)(fe.a,{item:!0,xs:12,children:Object(O.jsx)(ue.a,{control:Object(O.jsx)(be.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(O.jsx)(L.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(O.jsx)(fe.a,{container:!0,justifyContent:"flex-end",children:Object(O.jsx)(fe.a,{item:!0,children:Object(O.jsx)(o.b,{to:"/sign-in",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})}var Ce=function(){var e=Object(c.useContext)(_),t=e.loading,n=e.order,a=e.getAlert,i=e.setGoods,r=e.orderProduct;return Object(c.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){e&&i(e)})).catch((function(e){return console.error(e)}))}),[]),Object(c.useEffect)((function(){sessionStorage.setItem("order",JSON.stringify(n)),sessionStorage.setItem("product",JSON.stringify(r))}),[n,r]),Object(O.jsxs)("main",{className:"content",children:[Object(O.jsx)(X,{quantity:n.length}),a&&Object(O.jsx)(Z,{}),Object(O.jsx)(y.a,{style:{maxWidth:"1010px"},children:Object(O.jsxs)(C.c,{children:[Object(O.jsx)(C.a,{path:"/home",component:re}),Object(O.jsx)(C.a,{exact:!0,path:"/",children:t?Object(O.jsx)(w,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(D,{}),Object(O.jsx)(G,{})]})}),Object(O.jsx)(C.a,{path:"/cart",component:ae}),Object(O.jsx)(C.a,{path:"/product",component:ie}),Object(O.jsx)(C.a,{path:"/contacts",component:oe}),Object(O.jsx)(C.a,{path:"/sign-in",component:ge}),Object(O.jsx)(C.a,{path:"/sign-up",component:ve}),Object(O.jsx)(C.a,{component:se})]})})]})},Ne=(n(137),function(){return Object(O.jsxs)(o.a,{basename:"/AlphaShop",children:[Object(O.jsx)(f,{}),Object(O.jsx)(I,{children:Object(O.jsx)(Ce,{})}),Object(O.jsx)(v,{})]})}),we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,212)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(Ne,{})}),document.getElementById("root")),we()}},[[138,1,2]]]);
//# sourceMappingURL=main.03afd984.chunk.js.map
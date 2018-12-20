(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(76)},36:function(e,t,a){},38:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),l=a.n(s),i=(a(36),a(11)),u=a(2),c=a(3),o=a(6),h=a(4),m=a(5),d=(a(38),a(81)),p=a(80),g=a(77),f=a(30),E=a.n(f),v=function e(){var t=this;Object(u.a)(this,e),this.signup=function(e,a,n,r,s,l,i){return t.service.post("/signup",{username:e,password:a,email:n,restaurant:r,restaurantName:s,address:l,zipCode:i}).then(function(e){return e.data})},this.edit=function(e,a,n,r,s,l){return t.service.post("/edit",{username:e,email:a,restaurant:n,restaurantName:r,address:s,zipCode:l}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.allRestaurants=function(){return t.service.get("/allRestaurants",{}).then(function(e){return e.data})};var a=E.a.create({baseURL:"".concat("https://siteat.herokuapp.com","/auth"),withCredentials:!0});this.service=a},b=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={loggedInUser:null},a.service=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome Home ",this.props.username),r.a.createElement(g.a,{to:"/login/"},r.a.createElement("button",null,"login")),r.a.createElement(g.a,{to:"/signup/"},r.a.createElement("button",null,"signup")))}}]),t}(n.Component),C=a(12),O=a(79),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:"",password:"",redirect:!0}),a.props.getUser(e)}).catch(function(e){return a.setState({messageE:"Usuario o Contrase\xf1a incorrecto"})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.state={username:"",password:"",redirect:!1,mesaggeE:""},a.service=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state&&this.state.redirect?r.a.createElement(O.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("p",null,this.state.messageE),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("textarea",{name:"password",type:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(g.a,{to:"/signup"}," Signup")))}}]),t}(n.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"restaurantes")}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,r=a.state.email,s=a.state.restaurant,l=a.state.restaurantName,u=a.state.address,c=a.state.zipCode,o=a.state.lat,h=a.state.lng;a.service.signup(t,n,r,s,l,u,c,o,h).then(function(e){a.setState(Object(i.a)({},a.state,{username:"",password:"",email:"",restaurant:!1,restaurantName:"",address:"",zipCode:"",lat:"",lng:"",redirect:!0})),a.props.getUser(e)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;"restaurant"===n?a.setState(Object(C.a)({},n,e.target.checked)):a.setState(Object(C.a)({},n,r))},a.state={username:"",password:"",email:"",restaurantName:"",address:"",zipCode:"",lat:"",lng:"",redirect:!1},a.service=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.state&&this.state.redirect)return r.a.createElement(O.a,{to:"/"});if(!0===this.state.restaurant)var t=r.a.createElement("div",null,r.a.createElement("label",null,"Restaurant Name:"),r.a.createElement("input",{name:"restaurantName",value:this.state.restaurantName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{name:"address",value:this.state.address,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Zip Code:"),r.a.createElement("input",{name:"zipCode",value:this.state.zipCode,onChange:function(t){return e.handleChange(t)}}));return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"checkbox",name:"restaurant",value:this.state.restaurant,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Soy un restaurante"),t,r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(g.a,{to:"/login"}," Login")))}}]),t}(n.Component),U=a(15),k=a(18),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).onMarkerClick=function(e,t,n){a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onMapClick=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=a.onMarkerClick.bind(Object(U.a)(Object(U.a)(a))),a.onMapClick=a.onMapClick.bind(Object(U.a)(Object(U.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(k.Map,{item:!0,style:{width:"50vw",height:"75vh"},google:this.props.google,onClick:this.onMapClick,zoom:18,initialCenter:{lat:this.props.lat-97e-5,lng:this.props.lng-93e-5}},r.a.createElement(k.Marker,{onClick:this.onMarkerClick,title:"Changing Colors Garage",position:{lat:this.props.lat-97e-5,lng:this.props.lng-93e-5},name:"Changing Colors Garage"}),r.a.createElement(k.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow}))}}]),t}(r.a.Component),I=Object(k.GoogleApiWrapper)({apiKey:"AIzaSyBp_NABj80aoBJsjKpHT6q7I1c9lLYB3gk"})(y),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={allRestaurantsHere:null,search:""},a.authService=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.authService.allRestaurants().then(function(t){return e.setState(Object(i.a)({},e.state,{allRestaurantsHere:t}))})}},{key:"updateSearch",value:function(e){this.setState({search:e.target.value.substr(0,15)})}},{key:"render",value:function(){var e=this;if(this.state.allRestaurantsHere&&this.state.allRestaurantsHere.restaurant)var t=this.state.allRestaurantsHere.restaurant.filter(function(t){return t.restaurantName.toLowerCase().includes(e.state.search)}).map(function(e){return r.a.createElement(g.a,{to:"Restaurant/".concat(e._id)},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,e.restaurantName))))});return r.a.createElement("div",null,r.a.createElement("h1",null,"LISTA DE RESTAURANTES"),r.a.createElement("input",{id:"restaurantSearchBar",type:"text",placeholder:"Search",onChange:this.updateSearch.bind(this),value:this.state.search}),t)}}]),t}(n.Component),R=(a(74),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){a.loggedin()},a.logout=function(){a.authService.logout().then(function(){a.props.getTheUser(null)})},a.loggedin=function(){a.authService.loggedin().then(function(e){console.log("logueado!")}).catch(function(){return a.setState(Object(i.a)({},a.state,{redirect:!0}))})},a.state={redirect:!1,username:"",password:"",email:"",restaurantName:"",address:"",zipCode:"",lat:"",lng:"",user:e.user},a.authService=new v,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.state.redirect)return r.a.createElement(O.a,{to:"/"});if(this.props.user){var e=this.props.user.username;if(!0===this.props.user.restaurant)var t=r.a.createElement("div",null,"AQUI VA EL PERFIL QUE SOLO PUEDEN VER LOS RESTAURANTES",r.a.createElement(g.a,{to:"Restaurant/".concat(this.props.user._id)},r.a.createElement("button",null,"My Restaurant")),r.a.createElement(I,{lat:this.props.user.lat,lng:this.props.user.lng}));else var a=r.a.createElement("div",null,"AQUI VA EL PERFIL QUE SOLO PUEDEN VER LOS USUARIOS",r.a.createElement(N,null))}return this.props.user?r.a.createElement("div",null,r.a.createElement("h2",null,"Hola  ",e," este es tu perfil!!!!"),r.a.createElement("br",null),r.a.createElement(g.a,{to:"edit/".concat(this.props.user._id)},r.a.createElement("button",null,"Edit my Profile")),r.a.createElement(g.a,{to:"/"},r.a.createElement("button",{onClick:this.logout},"Log Out")),t,a):r.a.createElement("p",null,'"Loading..."')}}]),t}(n.Component)),A=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(h.a)(t).call(this))).handleFormSubmit=function(t){t.preventDefault();var a=e.state.username,n=e.state.email,r=e.state.restaurant,s=e.state.restaurantName,l=e.state.address,u=e.state.zipCode,c=e.state.lat,o=e.state.lng;e.service.edit(a,n,r,s,l,u,c,o).then(function(t){e.setState(Object(i.a)({},e.state,{username:"",email:"",restaurant:!1,restaurantName:"",address:"",zipCode:"",lat:"",lng:"",redirect:!0})),e.props.getUser(t)}).catch(function(e){return console.log(e)})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;"restaurant"===n?e.setState(Object(C.a)({},n,t.target.checked)):e.setState(Object(C.a)({},n,r))},e.state={username:"",email:"",restaurantName:"",address:"",zipCode:"",lat:"",lng:"",redirect:!1},e.service=new v,e.service.loggedin(),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(console.log(this.props.user),this.state&&this.state.redirect)return r.a.createElement(O.a,{to:"/profile"});if(this.props.user&&!0===this.props.user.restaurant)var t=r.a.createElement("div",null,r.a.createElement("label",null,"Restaurant Name:"),r.a.createElement("input",{name:"restaurantName",value:this.state.restaurantName,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{name:"address",value:this.state.address,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Zip Code:"),r.a.createElement("input",{name:"zipCode",value:this.state.zipCode,onChange:function(t){return e.handleChange(t)}}));return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),t,r.a.createElement("input",{type:"submit",value:"Edit"})))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).fetchUser=function(){a.authService.loggedin().then(function(e){return a.setState(Object(i.a)({},a.state,{loggedInUser:e}))})},a.getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null},a.authService=new v,a.fetchUser(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return this.state.loggedInUser,r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:b,getUser:this.getTheUser}),r.a.createElement(p.a,{exact:!0,path:"/login",render:function(){return r.a.createElement(j,{getUser:e.getTheUser})}}),r.a.createElement(p.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(w,{getUser:e.getTheUser})}}),r.a.createElement(p.a,{exact:!0,path:"/profile",render:function(){return r.a.createElement(R,{user:e.state.loggedInUser,getTheUser:e.getTheUser})}}),r.a.createElement(p.a,{exact:!0,path:"/edit/:restaurantId",render:function(){return r.a.createElement(A,{user:e.state.loggedInUser,getUser:e.getTheUser})}}),r.a.createElement(p.a,{exact:!0,path:"/restaurant/:restaurantId",render:function(){return r.a.createElement(S,{user:e.state.loggedInUser,getUser:e.getTheUser})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(78);l.a.render(r.a.createElement(L.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.207f5854.chunk.js.map
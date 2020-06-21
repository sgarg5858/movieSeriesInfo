(this.webpackJsonpmoviesandtvseriessearch=this.webpackJsonpmoviesandtvseriessearch||[]).push([[0],{61:function(e,t,a){e.exports=a(93)},66:function(e,t,a){},67:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(66),a(67),a(18)),s=a(53),i=a(55),m=a(11),u={text:"",movies:[],isLoading:!1,movie:[],error:null},p=Object(c.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SEARCH_MOVIE":return Object(m.a)(Object(m.a)({},e),{},{text:n,isLoading:!1,error:null});case"FETCH_MOVIES":return Object(m.a)(Object(m.a)({},e),{},{movies:n,isLoading:!1,error:null});case"FETCH_MOVIE":return Object(m.a)(Object(m.a)({},e),{},{movie:n,isLoading:!1,error:null});case"START_LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0,error:null});case"STOP_LOADING":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,error:null});case"FETCH_MOVIES_ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:"Server Error",isLoading:!1,movies:[]});default:return e}}}),E=[i.a],f=Object(c.createStore)(p,[],Object(s.composeWithDevTools)(c.applyMiddleware.apply(void 0,E))),v=a(15),d=a(23),g=a(5),y=a(22),h=a(59),b=function(){return r.a.createElement(y.a,{variant:"dark",bg:"dark"},r.a.createElement(y.a.Brand,null,r.a.createElement(d.b,{to:"/",style:{color:"#79ffb7",fontSize:"30px"}},"MovieSeriesInfo")),r.a.createElement(y.a.Toggle,null),r.a.createElement(y.a.Collapse,{className:"justify-content-end"},r.a.createElement(h.a,null)))},O=a(13),T=a(57),x=a.n(T),S=function(){return r.a.createElement(y.a,{sticky:"bottom",variant:"dark",style:{marginTop:"55vh"},bg:"dark"},r.a.createElement(O.a,{lg:{span:6,offset:3},md:{span:8,offset:2},sm:{span:10,offset:1},xs:{span:12,offset:0}},r.a.createElement(x.a,null,r.a.createElement("span",{style:{color:"white",fontSize:"25px"}},"Developed by  "),r.a.createElement("span",{style:{color:"#79ffb7",fontSize:"25px"}}," Sanjay Garg "),r.a.createElement("span",{style:{color:"white",fontSize:"25px"}}," using  "),r.a.createElement("span",{style:{color:"#79ffb7",fontSize:"25px"}},"  React "),r.a.createElement("span",{style:{color:"white",fontSize:"25px"}}," and "),r.a.createElement("span",{style:{color:"#79ffb7",fontSize:"25px"}}," Redux "))))},R=a(60),j=a(7),w=a(20),k=a(34),I=a(24),M=a(26),C=a.n(M),_=a(41),L=a(42),F=a.n(L),A=Object(v.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(){var t=Object(_.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,F.a.get("https://www.omdbapi.com/?apikey=".concat("1d3c2680","&s=").concat(e));case 4:n=t.sent,console.log(n),a({type:"STOP_LOADING"}),"False"===n.data.Response?a({type:"FETCH_MOVIES_ERROR"}):a({type:"FETCH_MOVIES",payload:n.data.Search}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response),a({type:"FETCH_MOVIES_ERROR"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchMovie,a=e.fetchMovies,o=e.text,l=Object(n.useState)(""),c=Object(R.a)(l,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){t(s)}),[s]),r.a.createElement(w.a,{style:{alignContent:"center"}},r.a.createElement(O.a,{lg:{span:12},md:{span:12},sm:{span:12},xs:{span:12}},r.a.createElement(j.a,{bg:"dark",text:"white",style:{textAlign:"center"}},r.a.createElement(j.a.Title,{style:{marginTop:"2vh"}},"Search For Movies or Tv Series"),r.a.createElement(j.a.Body,null,r.a.createElement(k.a,null,r.a.createElement(k.a.Group,{controlId:"formBasicEmail"},r.a.createElement(k.a.Control,{type:"text",value:s,onChange:function(e){return function(e){i(e.target.value)}(e)},placeholder:"Search For a movie or any Tv Series "})),r.a.createElement(I.a,{variant:"primary",type:"button",onClick:function(){return a(o)}},"Search"))))))})),D=function(){return r.a.createElement("div",{className:"lds-hourglass",style:{marginTop:"15vh"}})},H=Object(g.e)((function(e){var t=e.movie,a=t.Title,n=t.Poster,o=t.Year,l=t.imdbID,c=e.history;return r.a.createElement(O.a,{lg:3,md:4,sm:6,xs:{span:10,offset:1}},r.a.createElement(j.a,{bg:"dark",text:"white",style:{marginTop:"2vh"}},r.a.createElement(j.a.Img,{variant:"top",src:n,style:{maxHeight:"45vh"}}),r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Title,null,a,"-",o),r.a.createElement(I.a,{onClick:function(){return c.push("/movie/".concat(l))},type:"button",variant:"primary"},"Movie Details"))))})),G=Object(v.b)((function(e){return{movies:e.movies.movies,error:e.movies.error,text:e.movies.text}}),{})((function(e){var t=e.movies,a=e.error;e.text;return null!==a?r.a.createElement("h2",{style:{color:"red"}},"No Movies Found"):t&&0!==t.length?t.map((function(e,t){return r.a.createElement(H,{key:t,movie:e})})):null})),V=a(31),B=Object(v.b)((function(e){return{isLoading:e.movies.isLoading,error:e.movies.error}}),{})((function(e){var t=e.isLoading;e.error;return r.a.createElement(V.a,{fluid:!0,style:{marginTop:"3vh"}},r.a.createElement(A,null),r.a.createElement(w.a,{style:{marginTop:"3vh",justifyContent:"center"}},"  ",t?r.a.createElement(D,null):r.a.createElement(G,null)))})),N=a(58),z=Object(v.b)((function(e){return{movies:e.movies}}),{fetchMovie:function(e){return function(){var t=Object(_.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"START_LOADING"}),t.next=4,F.a.get("https://www.omdbapi.com/?apikey=".concat("1d3c2680","&i=").concat(e));case 4:n=t.sent,a({type:"STOP_LOADING"}),"False"===n.data.Response?a({type:"FETCH_MOVIES_ERROR"}):a({type:"FETCH_MOVIE",payload:n.data}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response),a({type:"FETCH_MOVIES_ERROR"});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}})(Object(g.e)((function(e){var t=e.movies,a=t.isLoading,o=t.movie,l=o.Title,c=o.Year,s=o.Rated,i=o.Released,m=o.Runtime,u=o.Genre,p=o.Writer,E=o.Director,f=o.Actors,v=o.Poster,d=o.imdbRating,g=t.error,y=e.fetchMovie,h=e.match,b=e.history;return Object(n.useEffect)((function(){y(h.params.id)}),[y]),null!==g?r.a.createElement(w.a,{style:{justifyContent:"center"}}," ",r.a.createElement("h1",{style:{color:"red",marginTop:"20vh"}},"Wrong Id!")):a?r.a.createElement(w.a,{style:{justifyContent:"center",marginTop:"20vh"}},r.a.createElement(D,null)):r.a.createElement(V.a,{fluid:!0},r.a.createElement(w.a,{style:{alignContent:"center"}},r.a.createElement(O.a,{style:{marginTop:"2vh"},lg:{span:4,offset:1},md:{span:4,offset:1},sm:{span:5,offset:0},xs:{span:10,offset:1}},r.a.createElement(N.a,{src:v,rounded:!0,fluid:!0})),r.a.createElement(O.a,{style:{marginTop:"2vh"},lg:{span:6,offset:0},md:{span:7,offset:0},sm:{span:7,offset:0},xs:{span:10,offset:1}},r.a.createElement(j.a,{bg:"dark",text:"white"},r.a.createElement(j.a.Title,{style:{marginLeft:"18px",marginTop:"20px"}},l,"-",c),r.a.createElement(j.a.Body,null,r.a.createElement(j.a.Text,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Genre: ")," ",u),r.a.createElement("p",null,r.a.createElement("strong",null,"Released: ")," ",i),r.a.createElement("p",null,r.a.createElement("strong",null,"Rating: ")," ",s),r.a.createElement("p",null,r.a.createElement("strong",null,"IMDB Rating: ")," ",d),r.a.createElement("p",null,r.a.createElement("strong",null,"Director: ")," ",E),r.a.createElement("p",null,r.a.createElement("strong",null,"Writer: ")," ",p),r.a.createElement("p",null,r.a.createElement("strong",null,"Cast: "),f),r.a.createElement("p",null,r.a.createElement("strong",null,"Runtime: "),m))))),r.a.createElement(I.a,{style:{marginTop:"3vh",marginLeft:"40vw"},variant:"dark",type:"button",onClick:function(){return b.push("/")}},"Go Back To Search Page")))})));var P=function(){return r.a.createElement(v.a,{store:f},r.a.createElement(d.a,null,r.a.createElement(b,null),r.a.createElement(g.a,{path:"/movie/:id",exact:!0,component:z}),r.a.createElement(g.a,{path:"/",exact:!0,component:B}),r.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(92);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.30711898.chunk.js.map
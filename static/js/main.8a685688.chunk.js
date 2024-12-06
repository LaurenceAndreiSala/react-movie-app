(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{31:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var i,c,a,o,r,s,l,d,p,j,x,b,h,v,O,u,f,g,w,m,y=t(1),k=t.n(y),S=t(22),z=t.n(S),M=(t(31),t(9)),R=t.n(M),T=t(23),D=t(5),P=t(2),Y=t(6),A=t.n(Y),C=t(3),I=t(0),L=C.a.div(i||(i=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 280px;\n  box-shadow: 0 3px 10px 0 #aaa;\n  cursor: pointer;\n"]))),B=C.a.img(c||(c=Object(P.a)(["\n  object-fit: cover;\n  height: 362px;\n"]))),E=C.a.span(a||(a=Object(P.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),G=C.a.div(o||(o=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),J=C.a.span(r||(r=Object(P.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n"]))),F=function(e){var n=e.movie,t=n.Title,i=n.Year,c=n.imdbID,a=n.Type,o=n.Poster;return Object(I.jsxs)(L,{onClick:function(){e.onMovieSelect(c),window.scrollTo({top:0,behavior:"smooth"})},children:[Object(I.jsx)(B,{src:o,alt:t}),Object(I.jsx)(E,{children:t}),Object(I.jsxs)(G,{children:[Object(I.jsxs)(J,{children:["Year : ",i]}),Object(I.jsxs)(J,{children:["Type : ",a]})]})]})},X=C.a.div(s||(s=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 20px 30px;\n  justify-content: center;\n  border-bottom: 1px solid lightgray;\n"]))),q=C.a.img(l||(l=Object(P.a)(["\n  object-fit: cover;\n  height: 350px;\n"]))),H=C.a.div(d||(d=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px;\n"]))),K=C.a.span(p||(p=Object(P.a)(["\n  font-size: 22px;\n  font-weight: 600;\n  color: black;\n  margin: 15px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n  & span {\n    opacity: 0.8;\n  }\n"]))),N=C.a.span(j||(j=Object(P.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  overflow: hidden;\n  margin: 4px 0;\n  text-transform: capitalize;\n  text-overflow: ellipsis;\n\n  & span {\n    opacity: 0.5;\n  }\n"]))),Q=C.a.span(x||(x=Object(P.a)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: black;\n  background: lightgray;\n  height: fit-content;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.8;\n"]))),U=function(e){var n=Object(y.useState)(),t=Object(D.a)(n,2),i=t[0],c=t[1],a=e.selectedMovie;return Object(y.useEffect)((function(){A.a.get("https://www.omdbapi.com/?i=".concat(a,"&apikey=").concat(V)).then((function(e){return c(e.data)}))}),[a]),Object(I.jsx)(X,{children:i?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(q,{src:null===i||void 0===i?void 0:i.Poster,alt:null===i||void 0===i?void 0:i.Title}),Object(I.jsxs)(H,{children:[Object(I.jsxs)(K,{children:[null===i||void 0===i?void 0:i.Type,": ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Title})]}),Object(I.jsxs)(N,{children:["IMDB Rating: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.imdbRating})]}),Object(I.jsxs)(N,{children:["Year: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Year})]}),Object(I.jsxs)(N,{children:["Language: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Language})]}),Object(I.jsxs)(N,{children:["Rated: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Rated})]}),Object(I.jsxs)(N,{children:["Released: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Released})]}),Object(I.jsxs)(N,{children:["Runtime: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Runtime})]}),Object(I.jsxs)(N,{children:["Genre: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Genre})]}),Object(I.jsxs)(N,{children:["Director: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Director})]}),Object(I.jsxs)(N,{children:["Actors: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Actors})]}),Object(I.jsxs)(N,{children:["Plot: ",Object(I.jsx)("span",{children:null===i||void 0===i?void 0:i.Plot})]})]}),Object(I.jsx)(Q,{onClick:function(){return e.onMovieSelect()},children:"X"})]}):"Loading..."})},V="a9118a3a",W=C.a.div(b||(b=Object(P.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Z=C.a.div(h||(h=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),$=C.a.div(v||(v=Object(P.a)(["\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),_=C.a.div(O||(O=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  border-radius: 6px;\n  margin-left: 20px;\n  width: 50%;\n  background-color: white;\n"]))),ee=C.a.img(u||(u=Object(P.a)(["\n  width: 32px;\n  height: 32px;\n"]))),ne=C.a.img(f||(f=Object(P.a)(["\n  width: 48px;\n  height: 48px;\n  margin: 15px;\n"]))),te=C.a.input(g||(g=Object(P.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 15px;\n"]))),ie=C.a.div(w||(w=Object(P.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  gap: 25px;\n  justify-content: space-evenly;;\n"]))),ce=C.a.img(m||(m=Object(P.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 150px;\n  opacity: 50%;\n"])));var ae=function(){var e=Object(y.useState)(""),n=Object(D.a)(e,2),t=n[0],i=n[1],c=Object(y.useState)([]),a=Object(D.a)(c,2),o=a[0],r=a[1],s=Object(y.useState)(),l=Object(D.a)(s,2),d=l[0],p=l[1],j=Object(y.useState)(),x=Object(D.a)(j,2),b=x[0],h=x[1],v=function(){var e=Object(T.a)(R.a.mark((function e(n){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://www.omdbapi.com/?s=".concat(n,"&apikey=").concat(V));case 2:t=e.sent,r(t.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(I.jsxs)(W,{children:[Object(I.jsxs)($,{children:[Object(I.jsxs)(Z,{children:[Object(I.jsx)(ne,{src:"/react-movie-app/movie-icon.svg"}),"React Movie App"]}),Object(I.jsxs)(_,{children:[Object(I.jsx)(ee,{src:"/react-movie-app/search-icon.svg"}),Object(I.jsx)(te,{placeholder:"Search Movie",value:t,onChange:function(e){p(""),clearTimeout(b),i(e.target.value);var n=setTimeout((function(){return v(e.target.value)}),500);h(n)}})]})]}),d&&Object(I.jsx)(U,{selectedMovie:d,onMovieSelect:p}),Object(I.jsx)(ie,{children:(null===o||void 0===o?void 0:o.length)?o.map((function(e,n){return Object(I.jsx)(F,{movie:e,onMovieSelect:p},n)})):Object(I.jsx)(ce,{src:"/react-movie-app/movie-icon.svg"})})]})};z.a.render(Object(I.jsx)(k.a.StrictMode,{children:Object(I.jsx)(ae,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8a685688.chunk.js.map
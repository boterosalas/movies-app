(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(21),s=c.n(a),r=c(4),i=c(7),l=c(2),o=c(14),j=c(17),b=Object(n.createContext)(null),u=(c(28),c(0)),m=function(e){var t=e.history,c=Object(n.useContext)(b).setUser,a=Object(n.useState)({name:"",email:""}),s=Object(r.a)(a,2),i=s[0],l=s[1],m=i.name,d=i.email,h=function(e){var t=e.target;l(Object(j.a)(Object(j.a)({},i),{},Object(o.a)({},t.name,t.value)))};return Object(u.jsxs)("div",{className:"principal-container",children:[Object(u.jsx)("h1",{className:"text-dark",children:"Inicio de sesi\xf3n"}),Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),c(i),t.replace("/")},children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"inputName",className:"form-label",children:"Nombre"}),Object(u.jsx)("input",{onChange:h,value:m,name:"name",placeholder:"John Doe",type:"text",className:"form-control",id:"inputName"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"inputEmail",className:"form-label",children:"Correo"}),Object(u.jsx)("input",{onChange:h,value:d,name:"email",placeholder:"johndoe@example.com",type:"email",className:"form-control",id:"inputEmail"})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Ingresar"})]})]})},d=(c(30),function(){return Object(u.jsx)("footer",{className:"footer-container",children:"\xa9 MoviesApp - 2021"})}),h=c(9),O="https://api.themoviedb.org/3/movie/now_playing?api_key=d43f4ea2ca33218a685f04dad0a79011&language=es-ES",p="https://api.themoviedb.org/3/search/movie?api_key=d43f4ea2ca33218a685f04dad0a79011&language=es-ES",x=function(e){return e?"https://image.tmdb.org/t/p/w500".concat(e):"/assets/no-image.jpg"},v=(c(31),function(e){var t=e.moviesList;return Object(u.jsx)("div",{className:"row",children:t.map((function(e){return Object(u.jsxs)("div",{className:"col-6 col-sm-4 col-md-3 mb-4",children:[Object(u.jsx)(i.b,{to:"/movie/".concat(e.id),children:Object(u.jsx)("img",{src:x(e.poster_path),alt:e.title,className:"img-fluid poster"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"text-warning text-right m-0 w-100",children:e.vote_average}),Object(u.jsx)("h3",{className:"movie-title",children:e.title})]})]},e.id)}))})}),f=c(23),g=(c(37),c(38),function(e){var t=e.movies;return Object(n.useEffect)((function(){new f.a(".swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}),[]),Object(u.jsxs)("div",{className:"swiper-container",children:[Object(u.jsx)("div",{className:"swiper-wrapper",children:t.map((function(e){return Object(u.jsx)(i.b,{to:"/movie/".concat(e.id),className:"swiper-slide",style:(n=e.backdrop_path,{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/w500"+n+")"}),children:Object(u.jsxs)("div",{className:"movie-description",children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:(t=e.overview,c=130,t.length<=c?t:"".concat(t.substring(0,c),"..."))})]})},e.id);var t,c,n}))}),Object(u.jsx)("div",{className:"swiper-button-prev"}),Object(u.jsx)("div",{className:"swiper-button-next"})]})}),N=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(r.a)(s,2),l=i[0],o=i[1],j=Object(n.useState)(1),b=Object(r.a)(j,2),m=b[0],d=b[1];return Object(n.useEffect)((function(){fetch("".concat(O,"&page=1}")).then((function(e){return e.json()})).then((function(e){var t=e.results;a((function(e){return[].concat(Object(h.a)(e),Object(h.a)(t))})),o((function(e){return[].concat(Object(h.a)(e),Object(h.a)(t))})),d((function(e){return e+1}))}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"En cartelera"})}),Object(u.jsx)("hr",{}),c.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{className:"row",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)(g,{movies:c})})}),Object(u.jsxs)("section",{className:"mt-5",children:[Object(u.jsx)("h2",{children:"Movies"}),Object(u.jsx)("hr",{}),Object(u.jsx)(v,{moviesList:l})]}),Object(u.jsx)("div",{className:"col-8 mx-auto mt-5 mb-5",children:Object(u.jsx)("button",{onClick:function(){fetch("".concat(O,"&page=").concat(m)).then((function(e){return e.json()})).then((function(e){var t=e.results;o((function(e){return[].concat(Object(h.a)(e),Object(h.a)(t))})),d((function(e){return e+1}))}))},className:"btn btn-primary btn-block",children:"Cargar m\xe1s"})})]})]})},w=(c(39),function(){var e=Object(l.g)(),t=Object(n.useState)(null),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!0),o=Object(r.a)(i,2),j=o[0],b=o[1],m=Object(l.h)().id;return Object(n.useEffect)((function(){var t;fetch((t=m,"https://api.themoviedb.org/3/movie/".concat(t,"?api_key=d43f4ea2ca33218a685f04dad0a79011&language=es-ES"))).then((function(e){return e.json()})).then((function(t){if(!1===t.success)return e.replace("/");s(t),b(!1)})).catch((function(t){return e.replace("/")}))}),[m,e]),Object(u.jsx)("div",{children:!j&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-6",children:Object(u.jsx)("img",{src:x(a.poster_path),alt:a.title,className:"img-thumbnail"})}),Object(u.jsxs)("div",{className:"col-sm-6",children:[Object(u.jsx)("h1",{children:a.title}),Object(u.jsx)("p",{className:"m-0",children:a.tagline}),Object(u.jsx)("hr",{className:"background-white"}),Object(u.jsx)("p",{className:"m-0 text-warning",children:a.vote_average}),Object(u.jsx)("p",{className:"m-0",children:"G\xe9neros:"}),Object(u.jsx)("p",{className:"m-0",children:a.genres.map((function(e,t){var c=e.name,n=e.id;return Object(u.jsxs)("span",{children:[c,a.genres.length===t+1?"":", "]},n)}))}),""!==a.homepage&&Object(u.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:a.homepage,children:"P\xe1gina principal"})]})]}),Object(u.jsx)("h2",{className:"mt-4",children:"Sinopsis"}),Object(u.jsx)("p",{children:a.overview})]})})}),y=function(){var e=Object(l.h)().text,t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(1),o=Object(r.a)(i,2),j=o[0],b=o[1];return Object(n.useEffect)((function(){fetch("".concat(p,"&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){var t=e.results;s((function(e){return Object(h.a)(t)})),b((function(e){return e+1}))}))}),[e]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsxs)("h1",{children:["Resultados por: ",Object(u.jsx)("small",{children:e})]})}),Object(u.jsx)("hr",{}),a.length>0&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("section",{className:"mt-5",children:Object(u.jsx)(v,{moviesList:a})}),Object(u.jsx)("div",{className:"col-8 mx-auto mt-5 mb-5",children:Object(u.jsx)("button",{onClick:function(){fetch("".concat(p,"&query=").concat(e,"&page=").concat(j,"&include_adult=false")).then((function(e){return e.json()})).then((function(e){var t=e.results;s((function(e){return[].concat(Object(h.a)(e),Object(h.a)(t))})),b((function(e){return e+1}))}))},className:"btn btn-primary btn-block",children:"Cargar m\xe1s"})})]})]})},S=function(){var e=Object(l.g)(),t=Object(n.useContext)(b).setUser,c=Object(n.useState)(""),a=Object(r.a)(c,2),s=a[0],o=a[1];return Object(u.jsxs)("nav",{className:"navbar fixed-top navbar-expand-sm navbar-dark bg-dark mb-5",children:[Object(u.jsx)(i.c,{activeClassName:"active",className:"navbar-brand",exact:!0,to:"/",children:"MoviesApp"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsx)("ul",{className:"navbar-nav mr-auto"}),Object(u.jsxs)("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(t){t.preventDefault(),0!==s.trim().length&&e.push("/search/".concat(s))},children:[Object(u.jsx)("input",{value:s,onChange:function(e){o(e.target.value)},className:"form-control mr-sm-2",type:"text",placeholder:"Buscar una pel\xedcula","aria-label":"Search"}),Object(u.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Buscar"})]}),Object(u.jsx)("ul",{className:"navbar-nav",children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("span",{className:"nav-item nav-link pointer",onClick:function(){t(null),e.push("/login")},children:"Salir"})})})]})]})},k=(c(40),function(){var e=Object(l.g)(),t=Object(n.useContext)(b).user;return Object(n.useEffect)((function(){t||e.push("/login")}),[t,e]),Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(S,{}),Object(u.jsx)("main",{className:"container mt-7",children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/",component:N}),Object(u.jsx)(l.b,{exact:!0,path:"/search/:text",component:y}),Object(u.jsx)(l.b,{exact:!0,path:"/movie/:id",component:w}),Object(u.jsx)(l.a,{to:"/"})]})}),Object(u.jsx)(d,{})]})})}),C=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(u.jsx)(b.Provider,{value:{user:c,setUser:a},children:Object(u.jsx)(i.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exac:!0,path:"/login",component:m}),Object(u.jsx)(l.b,{exac:!0,path:"/",component:k})]})})})})};s.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.35c2c831.chunk.js.map
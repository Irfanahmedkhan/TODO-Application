(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),l=(n(13),n(14),n(7)),u=n(1),i=n(6);function s(e,t){var n=Object(a.useState)(function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}}),o=Object(u.a)(n,2),r=o[0],c=o[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}var m=s,d=Object(a.createContext)(),v=function(e){var t=m("Books",[]),n=Object(u.a)(t,2),a=n[0],r=n[1];return o.a.createElement(d.Provider,{value:{Books:a,addBook:function(e,t){r([].concat(Object(l.a)(a),[{title:e,author:t,id:Object(i.v4)()}]))},removeBook:function(e){r(a.filter(function(t){return t.id!==e}))}}},e.children)},f=function(){var e=Object(a.useContext)(d).Books;return o.a.createElement("div",{className:"navbar"},o.a.createElement("h1",null,"React reading list"),o.a.createElement("p",null,"Learning Target : ",e.length))},h=function(e){var t=e.Books,n=Object(a.useContext)(d).removeBook;return o.a.createElement("li",{onClick:function(){return n(t.id)}},o.a.createElement("div",{className:"title"}," ",t.title," "),o.a.createElement("div",{className:"author"}," ",t.author," "))},E=function(){var e=Object(a.useContext)(d).Books;return e.length?o.a.createElement("div",{className:"book-list"},o.a.createElement("ul",null,e.map(function(e){return o.a.createElement(h,{Books:e,key:e.id})}))):o.a.createElement("div",{className:"empty"},"No Target set ... ")},b=function(){var e=Object(a.useContext)(d).addBook,t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],l=Object(a.useState)(""),i=Object(u.a)(l,2),s=i[0],m=i[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(r,s),c(""),m("")}},o.a.createElement("input",{type:"text",required:!0,placeholder:"Book Subject",value:r,onChange:function(e){return c(e.target.value)}}),o.a.createElement("input",{type:"text",required:!0,placeholder:"Author Name",value:s,onChange:function(e){return m(e.target.value)}}),o.a.createElement("input",{type:"submit",value:"Add Book"}))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null,o.a.createElement(f,null),o.a.createElement(b,null),o.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.8b853a69.chunk.js.map
(this["webpackJsonppokemon-catalog"]=this["webpackJsonppokemon-catalog"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),a=n(7),o=n.n(a),s=(n(16),n(6),n(2)),i=n(4),u=n(3),p=(n(17),n(0)),j=function(t){var e=t.pokemonIndex,n=Object(r.useState)(!1),c=Object(u.a)(n,2),a=c[0],o=c[1];return Object(p.jsx)("div",{children:a?Object(p.jsx)("img",{"data-cy":"pokemon-fallback-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e,".png"),className:"pokemon-fallback",alt:"pokemon"}):Object(p.jsx)("img",{"data-cy":"pokemon-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/".concat(e,".gif"),className:"pokemon",alt:"pokemon",onError:function(t){o(!0)}})})},b=function(t){var e=t.pokemon,n=t.onNext,r=t.onPrev,c=function(){return Number(null===e||void 0===e?void 0:e.results[0].url.split("/").filter((function(t){return t})).pop())};return Object(p.jsx)("div",{children:Object(p.jsx)("header",{children:e&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{"data-cy":"count",children:"".concat(c()," of ").concat(e.count)}),Object(p.jsx)(j,{pokemonIndex:c()}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{"data-cy":"prev",onClick:r,disabled:!(e&&e.previous),children:"Prev"}),Object(p.jsx)("button",{"data-cy":"next",onClick:n,disabled:!(e&&e.next),children:"Next"})]}),Object(p.jsx)("div",{"data-cy":"pokemon-name",children:null===e||void 0===e?void 0:e.results[0].name})]})})})},d=function(){var t=Object(r.useState)(),e=Object(u.a)(t,2),n=e[0],c=e[1],a=function(){var t=Object(i.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=n&&n.next,!t.t0){t.next=9;break}return t.t1=c,t.next=5,fetch(n.next);case 5:return t.next=7,t.sent.json();case 7:t.t2=t.sent,t.t0=(0,t.t1)(t.t2);case 9:return t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(i.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=n&&n.previous,!t.t0){t.next=9;break}return t.t1=c,t.next=5,fetch(n.previous);case 5:return t.next=7,t.sent.json();case 7:t.t2=t.sent,t.t0=(0,t.t1)(t.t2);case 9:return t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var t=function(){var t=Object(i.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,fetch("https://pokeapi.co/api/v2/pokemon/?limit=1");case 3:return t.next=5,t.sent.json();case 5:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(p.jsx)(b,{pokemon:n,onNext:a,onPrev:o})};var l=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)(d,{})})})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};o.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l,{})})),f()},6:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.23fe5a40.chunk.js.map
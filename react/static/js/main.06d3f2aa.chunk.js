(this["webpackJsonppokemon-catalog"]=this["webpackJsonppokemon-catalog"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(8),a=n.n(o),s=(n(19),n(7),n(2)),i=n(3),u=n(10),b=n(9),p=Object(u.a)((function e(){var t=this;Object(b.a)(this,e),this.baseUrl="https://pokeapi.co/api/v2/pokemon",this.getPokemon=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPokemonByOffset=Object(i.a)(Object(s.a)().mark((function e(){var n,r,c=arguments;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({limit:"1",offset:c.length>0&&void 0!==c[0]?c[0]:"0"}),(r=new URL(t.baseUrl)).search=n.toString(),e.abrupt("return",t.getPokemon(r));case 5:case"end":return e.stop()}}),e)})))})),j=Object(r.createContext)(void 0),l=n(5),d=(n(20),n(0)),f=function(e){var t=e.pokemonIndex,n=Object(r.useState)(!1),c=Object(l.a)(n,2),o=c[0],a=c[1];return Object(d.jsx)("div",{children:o?Object(d.jsx)("img",{"data-hook":"pokemon-fallback-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t,".png"),alt:"pokemon"}):Object(d.jsx)("img",{"data-hook":"pokemon-image",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/".concat(t,".gif"),className:"pokemon",alt:"pokemon",onError:function(e){a(!0)}})})},v=function(e){var t=e.onNext,n=e.onPrev,c=Object(r.useState)(),o=Object(l.a)(c,2),a=o[0],u=o[1],b=Object(r.useContext)(j),p=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!a.next){e.next=5;break}return e.next=3,null===b||void 0===b?void 0:b.getPokemon(a.next);case 3:n=e.sent,u(n);case 5:t&&t();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!a.previous){e.next=5;break}return e.next=3,null===b||void 0===b?void 0:b.getPokemon(a.previous);case 3:t=e.sent,u(t);case 5:n&&n();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=Object(r.useCallback)(function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){var n,r,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){return(Number(e)-1).toString()},r=n(t),e.next=4,null===b||void 0===b?void 0:b.getPokemonByOffset(r);case 4:null!==(c=e.sent)&&void 0!==c&&c.results.length?u(c):alert("pokemon ".concat(t," not found"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[b]),m=Object(r.useCallback)(Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h("1"));case 1:case"end":return e.stop()}}),e)}))),[h]);Object(r.useEffect)((function(){m()}),[m]);var O=function(){var e;return Number((null===a||void 0===a||null===(e=a.results[0])||void 0===e?void 0:e.url.split("/").filter((function(e){return e})).pop())||0)};return Object(d.jsx)("div",{children:Object(d.jsx)("header",{children:a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{pokemonIndex:O()}),Object(d.jsx)("h2",{"data-hook":"pokemon-name",children:function(){var e;return null===a||void 0===a||null===(e=a.results[0])||void 0===e?void 0:e.name}()}),Object(d.jsx)("div",{"data-hook":"count",children:"".concat(O()," of ").concat(a.count)}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{"data-hook":"prev",onClick:v,disabled:!(a&&a.previous),children:"Prev"}),Object(d.jsx)("button",{"data-hook":"next",onClick:p,disabled:!(a&&a.next),children:"Next"})]})]})})})},h=function(e){var t=e.onNext,n=e.onPrev,r=e.service||new p;return Object(d.jsx)(j.Provider,{value:r,children:Object(d.jsx)(v,{onNext:t,onPrev:n})})};var m=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)(h,{})}),Object(d.jsx)("span",{children:"Pok\xe9mon and Pok\xe9mon character names are trademarks of Nintendo."})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})})),O()},7:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.06d3f2aa.chunk.js.map
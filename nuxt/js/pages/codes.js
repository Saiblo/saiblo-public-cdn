(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{846:function(t,e,n){var content=n(855);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("0287093e",content,!0,{sourceMap:!1})},854:function(t,e,n){"use strict";n(846)},855:function(t,e,n){var r=n(42)(!1);r.push([t.i,"@media only screen and (max-width:991px){.wide-screen[data-v-05dada14]{display:none!important}.narrow-screen[data-v-05dada14]{display:unset!important}.cp1[data-v-05dada14]{margin-top:-6px!important}#cp2[data-v-05dada14]{width:100%!important;margin-right:1rem}}@media only screen and (min-width:992px){.narrow-screen[data-v-05dada14]{display:none!important}.wide-screen[data-v-05dada14]{display:unset!important}}",""]),t.exports=r},878:function(t,e,n){"use strict";n.r(e);n(17);var r={head:function(){return{title:"我的代码 - Saiblo"}},data:function(){return{games:[],current_game:0,game_options:[]}},asyncData:function(t){return t.app.$axios.get("/api/games/").then((function(t){for(var e=t.data,n=[],i=0;i<e.length;i++){var r=e[i];n.push({text:r.alias+"("+r.name+")",value:i})}return{games:e,game_options:n}}),(function(){}))}},o=(n(854),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sui-grid",[n("sui-grid-row",[n("sui-grid-column",[n("sui-header",{tag:"h1",staticClass:"ib",staticStyle:{"margin-bottom":"0"}},[t._v("我的代码")]),t._v(" "),n("sui-dropdown",{staticClass:"narrow-screen",staticStyle:{float:"right","min-width":"12em"},attrs:{placeholder:"选择游戏",selection:"",options:t.game_options},model:{value:t.current_game,callback:function(e){t.current_game=e},expression:"current_game"}})],1)],1),t._v(" "),n("sui-grid-row",[n("sui-grid-column",[n("sui-grid",{attrs:{stackable:""}},[n("sui-grid-row",[n("sui-grid-column",{staticStyle:{"padding-right":"0"},attrs:{id:"cp2",width:13}},[n("sui-segment",{staticClass:"cp1"},t._l(t.games,(function(e,r){return n("div",{key:r},[r==t.current_game?n("ai-list",{attrs:{"game-id":e.id,"allow-remote":e.allow_remote}}):t._e()],1)})),0)],1),t._v(" "),n("sui-grid-column",{staticClass:"wide-screen",staticStyle:{"padding-left":"0"},attrs:{width:3}},[n("div",{staticClass:"ui vertical fluid right tabular menu",staticStyle:{"border-left":"0"}},t._l(t.games,(function(e,r){return n("a",{key:r,class:"item"+(r==t.current_game?" active":""),on:{click:function(e){t.current_game=r}}},[n("i",{staticClass:"gamepad icon"}),n("span",[t._v(t._s(e.alias)+"("+t._s(e.name)+")")])])})),0)])],1)],1)],1)],1)],1)],1)}),[],!1,null,"05dada14",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{915:function(r,t,e){"use strict";e.r(t);var n={head:function(){return{title:"排行榜 - ".concat(this.game.alias," - Saiblo")}},asyncData:function(r){var t=r.route,e=r.app,n=r.error;return e.$axios.get("/api/games/".concat(t.params.slug,"/")).then((function(r){return e.$axios.get("/api/games/".concat(t.params.slug,"/ladders/")).then((function(t){return{game:r.data,players:t.data}}))}),(function(){n({statusCode:404,message:"没有这个游戏"})}))}},c=e(7),component=Object(c.a)(n,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",[e("sui-breadcrumb",[e("sui-breadcrumb-section",[e("nuxt-link",{attrs:{to:"/games"}},[r._v("游戏")])],1),r._v(" "),e("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),r._v(" "),e("sui-breadcrumb-section",[e("nuxt-link",{attrs:{to:"/game/"+r.game.id}},[r._v(r._s(r.game.alias))])],1),r._v(" "),e("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),r._v(" "),e("sui-breadcrumb-section",{attrs:{active:""}},[r._v("排行榜")])],1),r._v(" "),e("sui-grid",[e("sui-grid-row",[e("sui-grid-column",[e("sui-header",{tag:"h1"},[r._v(r._s(r.game.alias)+"的排行榜")])],1)],1),r._v(" "),e("sui-grid-row",[e("sui-grid-column",[e("ranklist",{attrs:{players:r.players,game:r.game}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{886:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"我的批量测试 - Saiblo"}},data:function(){return{batches:{},page_number:0,has_prev:!1,has_next:!1}},asyncData:function(t){var e=t.route,n=t.app,r=e.query.page?e.query.page:1,l=20*(r-1);return n.$axios.get("/api/batches/?offset=".concat(l,"&limit=").concat(20)).then((function(t){return{batches:t.data.results,page_number:r,has_prev:t.data.previous,has_next:t.data.next}}),(function(){}))},methods:{beautify_time:function(t){return this.$dayjs(t).locale("en").format("YYYY-MM-DD HH:mm:ss")},truncate:function(t,e){return t.length>e?t.substring(0,e)+".":t},turnPage:function(t){var e=this,n=20*(t-1);this.$axios.get("/api/batches/?offset=".concat(n,"&limit=").concat(20)).then((function(n){e.batches=n.data.results,e.page_number=t,e.has_prev=n.data.previous,e.has_next=n.data.next,e.$router.push(e.$route.path+"?page="+t)}))}}},l=n(7),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sui-grid",[n("sui-grid-row",[n("sui-grid-column",[n("sui-header",{tag:"h1",staticClass:"ib",staticStyle:{"margin-bottom":"0"}},[t._v("我的批量测试")])],1)],1),t._v(" "),n("sui-grid-row",{staticStyle:{"padding-left":"1rem","padding-right":"1rem"}},[n("sui-message",{attrs:{info:""}},[n("sui-message-header",[t._v("提示")]),t._v(" "),n("p",[t._v("\n                    批量测试可以将您的 AI 与指定的 AI 进行批量对局测试（每次不超过 50 个 AI），您可以在 AI 列表中对应 AI 处提交批量测试。 为了避免评测机负荷过大，每人每天批量测试的 AI\n                    数量存在上限，测试额度每日凌晨三点重置。\n                ")])],1)],1),t._v(" "),n("sui-grid-row",[n("sui-grid-column",[n("sui-table",{attrs:{color:"blue"}},[n("sui-table-header",[n("sui-table-row",[n("sui-table-header-cell",{attrs:{collapsing:""}},[t._v("批量测试编号")]),t._v(" "),n("sui-table-header-cell",{staticStyle:{width:"12em"},attrs:{"text-align":"center"}},[t._v("时间")]),t._v(" "),n("sui-table-header-cell",{staticStyle:{width:"8em"},attrs:{"text-align":"center"}},[t._v("游戏")]),t._v(" "),n("sui-table-header-cell",{attrs:{"text-align":"center",collapsing:""}},[t._v("测试 AI 个数")]),t._v(" "),n("sui-table-header-cell",{attrs:{"text-align":"center"}},[t._v("被测试 AI")]),t._v(" "),n("sui-table-header-cell",{attrs:{collapsing:""}})],1)],1),t._v(" "),n("sui-table-body",t._l(t.batches,(function(e,r){return n("sui-table-row",{key:r},[n("sui-table-cell",[t._v("#"+t._s(e.id))]),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},[t._v(t._s(t.beautify_time(e.create_time)))]),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},[n("sui-button-group",{staticClass:"wmc",attrs:{size:"mini",vertical:""}},[n("sui-button",{tag:"nuxt-link",attrs:{color:"teal",basic:"",icon:"gamepad",to:"/game/"+e.game.id}},[t._v(t._s(e.game.alias))])],1)],1),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},[t._v(t._s(e.match_count/2))]),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},[n("sui-label",{tag:"a",staticStyle:{margin:"0.25em",position:"relative"},attrs:{basic:"",color:null,href:"/user/"+e.user.username}},[n("div",{staticClass:"f ce",staticStyle:{position:"relative"}},[n("sui-image",{staticStyle:{margin:"0 0.5em 0 0"},attrs:{avatar:"",size:"mini",src:"https://sdn.geekzu.org/avatar/"+e.user.email_md5+"?s=1000&d=mm"}}),t._v(" "),n("div",{staticClass:"f c ce"},[n("player-card",{attrs:{username:e.user.username}}),t._v(" "),n("sui-label",{staticStyle:{width:"max-content"},attrs:{color:"blue",size:"mini"}},[t._v("\n                                                "+t._s(t.truncate(e.code.entity,5))+"\n                                                "),n("sui-label-detail",[t._v("v"+t._s(e.code.version))])],1)],1)],1)])],1),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},[n("sui-button",{tag:"nuxt-link",staticStyle:{width:"max-content"},attrs:{size:"mini",color:"blue",to:"/batch/"+e.id+"/"}},[t._v("查看详情")])],1)],1)})),1)],1),t._v(" "),n("div",{staticStyle:{width:"100%","text-align":"center",padding:"10px"}},[n("sui-button-group",{},[n("sui-button",{attrs:{icon:"left chevron","label-position":"left",content:"上一页",disabled:!t.has_prev},on:{click:function(e){return t.turnPage(t.page_number-1)}}}),t._v(" "),n("sui-button",{attrs:{icon:"right chevron","label-position":"right",content:"下一页",disabled:!t.has_next},on:{click:function(e){return t.turnPage(t.page_number+1)}}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{918:function(t,e,n){"use strict";n.r(e);n(17),n(13),n(120),n(121);var r={head:function(){return{title:"排行榜 - ".concat(this.contest.name," - ").concat(this.contest.group.name," - Saiblo")}},validate:function(t){var e=t.params;return/^\d+$/.test(e.slug)&&/^\d+$/.test(e.slug_)},data:function(){return{timer_:null,contest:{time:"",state:""},players:[]}},computed:{total:function(){return this.contest.end_time.valueOf()-this.contest.begin_time.valueOf()},progress:function(){return"未开始"==this.contest.state?0:"进行中"==this.contest.state?(this.$dayjs().valueOf()-this.contest.begin_time)/this.total*100:100}},asyncData:function(t){return t.app.$axios.get("/api/groups/".concat(t.route.params.slug,"/contests/").concat(t.route.params.slug_,"/")).then((function(e){var n=e.data;return n.begin_time=t.app.$dayjs(n.begin_time).valueOf(),n.end_time=t.app.$dayjs(n.end_time).valueOf(),n.time=null,n.state=null,{contest:n}}),(function(){t.error({statusCode:404,message:"没有这场比赛"})}))},beforeDestroy:function(){this.timer_&&clearInterval(this.timer_)},created:function(){var t=this;this.updateRanklist(),this.updateTime(),this.timer_=setInterval((function(){t.updateTime()}),1e3)},methods:{getTime:function(time){time/=1e3;var s=Math.floor(time%60),t=Math.floor(time%3600/60);return Math.floor(time/3600).toString()+"时"+t.toString()+"分"+s.toString()+"秒"},updateTime:function(){var time=this.$dayjs().valueOf();time<this.contest.begin_time?(this.contest.time=this.getTime(this.contest.begin_time-time),this.contest.state="未开始"):time<this.contest.end_time?(this.contest.time=this.getTime(this.contest.end_time-time),this.contest.state="进行中"):this.contest.state="已结束"},updateRanklist:function(){var t=this;this.$axios.get("/api/groups/".concat(this.contest.group.id,"/contests/").concat(this.contest.id,"/ladders/")).then((function(e){t.players=e.data}))}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sui-breadcrumb",[n("sui-breadcrumb-section",[n("nuxt-link",{attrs:{to:"/groups"}},[t._v("小组")])],1),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",[n("nuxt-link",{attrs:{to:"/group/"+t.contest.group.id}},[t._v(t._s(t.contest.group.name))])],1),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",[n("nuxt-link",{attrs:{to:"/group/"+t.contest.group.id+"/contest/"+t.contest.id}},[t._v(t._s(t.contest.name))])],1),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",{attrs:{active:""}},[t._v("排行榜")])],1),t._v(" "),n("sui-grid",[n("sui-grid-row",[n("sui-grid-column",[n("sui-header",{tag:"h1"},[n("div",{staticClass:"f sb b"},[n("sui-header-content",[t._v(t._s(t.contest.name)+"的排行榜")]),t._v(" "),n("sui-header-subheader",["未开始"==t.contest.state?n("span",[n("span",{style:"color: orange;"},[t._v("未开始")]),t._v("\n                                ("+t._s(String(t.contest.time))+")\n                            ")]):"进行中"==t.contest.state?n("span",[n("span",{style:"color: green;"},[t._v("进行中")]),t._v("\n                                ("+t._s(String(t.contest.time))+")\n                            ")]):n("span",{style:"color: grey;"},[t._v("已结束")])])],1),t._v(" "),n("sui-progress",{staticStyle:{"margin-bottom":"0"},attrs:{state:"active",size:"tiny",color:"green",percent:t.progress}})],1)],1)],1),t._v(" "),n("sui-grid-row",[n("sui-grid-column",[n("ranklist",{attrs:{players:t.players,game:t.contest.game}})],1)],1)],1),t._v(" "),n("input",{attrs:{id:"clipboard_content",type:"hidden"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
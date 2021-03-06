(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{849:function(t,e,n){var content=n(871);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("70436146",content,!0,{sourceMap:!1})},870:function(t,e,n){"use strict";n(849)},871:function(t,e,n){var o=n(55)(!1);o.push([t.i,".flip-move[data-v-690bfa96]{transition:transform 1s}",""]),t.exports=o},897:function(t,e,n){"use strict";n.r(e);n(28),n(29),n(12),n(17);var o={validate:function(t){var e=t.params;return/^\d+$/.test(e.slug)&&/^\d+$/.test(e.id)},head:function(){return{title:"".concat(this.contest.name," - ").concat(this.contest.group.name," - Saiblo")}},data:function(){return{contest:{id:0,name:"",time:"",introduction:"",create_time:"",begin_time:"",end_time:"",state:"",promoter:"",game:{name:"",id:"",alias:""},group:{id:0,name:"",creator:"",managers:[],relation:""}},caution:{open:!1,message:""}}},computed:{total:function(){return this.contest.end_time.valueOf()-this.contest.begin_time.valueOf()},progress:function(){return"未开始"===this.contest.state?0:"进行中"===this.contest.state?(this.$dayjs().valueOf()-this.contest.begin_time)/this.total*100:100}},asyncData:function(t){return t.$axios.get("/api/groups/".concat(t.route.params.slug,"/contests/").concat(t.route.params.id,"/")).then((function(e){var n=e.data;return n.begin_time=t.app.$dayjs(n.begin_time).valueOf(),n.end_time=t.app.$dayjs(n.end_time).valueOf(),n.time=null,n.state=null,n.participation&&(n.entity=n.participation.code.entity,n.entity.code=n.participation.code),{contest:n}}),(function(){}))},created:function(){var t=this;this.updateTime(),this.timer=setInterval((function(){t.updateTime()}),1e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},methods:{getTime:function(time){time/=1e3;var s=Math.floor(time%60),t=Math.floor(time%3600/60);return Math.floor(time/3600).toString()+"时"+t.toString()+"分"+s.toString()+"秒"},caution:function(t){t.entity&&openCaution("请注意，在比赛中切换已经派遣的 AI 版本将会使得天梯分数重置为 1000 分！")},updateTime:function(){var time=this.$dayjs().valueOf();time<this.contest.begin_time?(this.contest.time=this.getTime(this.contest.begin_time-time),this.contest.state="未开始"):time<this.contest.end_time?(this.contest.time=this.getTime(this.contest.end_time-time),this.contest.state="进行中"):this.contest.state="已结束"},selectCode:function(t){var e=this;this.contest.entity?this.$axios.put("/api/groups/".concat(this.contest.group.id,"/contests/").concat(this.contest.id,"/ladders/").concat(this.$auth.$state.user.username,"/"),{code:t.code.id}).then((function(){e.$notify.success({title:"成功",message:"已成功派遣AI到".concat(e.contest.name),timeout:1e3}),e.$set(e.contest,"entity",t)})):this.$axios.post("/api/groups/".concat(this.contest.group.id,"/contests/").concat(this.contest.id,"/ladders/"),{code:t.code.id}).then((function(){e.$notify.success({title:"成功",message:"已成功修改派遣到".concat(e.contest.name,"的AI"),timeout:1e3}),e.$set(e.contest,"entity",t)}))},cancelCode:function(t){var e=this;this.$axios.delete("/api/groups/".concat(t.group.id,"/contests/").concat(t.id,"/ladders/").concat(this.$auth.$state.user.username)).then((function(){e.$notify.success({title:"成功",message:"已取消派遣的AI",timeout:1e3}),e.$set(t,"entity",null)}))},openCaution:function(t){this.caution.message=t,this.caution.open=!0}}},c=(n(870),n(7)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sui-breadcrumb",[n("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/groups"}},[t._v("小组")]),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/group/"+t.contest.group.id}},[t._v(t._s(t.contest.group.name))]),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",{attrs:{active:""}},[t._v(t._s(t.contest.name))])],1),t._v(" "),n("sui-grid",[n("sui-grid-row",[n("sui-grid-column",{attrs:{width:16}},[n("sui-header",{tag:"h1"},[n("div",{staticClass:"f sb b"},[n("sui-header-content",[t._v(t._s(t.contest.name))]),t._v(" "),n("sui-header-subheader",["未开始"==t.contest.state?n("span",[n("span",{style:"color: orange;"},[t._v("未开始")]),t._v("\n                                ("+t._s(String(t.contest.time))+")\n                            ")]):"进行中"==t.contest.state?n("span",[n("span",{style:"color: green;"},[t._v("进行中")]),t._v("\n                                ("+t._s(String(t.contest.time))+")\n                            ")]):n("span",{style:"color: grey;"},[t._v("已结束")])])],1),t._v(" "),n("sui-progress",{staticStyle:{"margin-bottom":"0"},attrs:{state:"active",size:"tiny",color:"green",percent:t.progress}})],1)],1)],1)],1),t._v(" "),n("sui-grid",{attrs:{stackable:""}},[n("sui-grid-row",{staticClass:"f rr"},[n("sui-grid-column",{attrs:{width:4}},[n("sui-table",{attrs:{color:"black"}},[n("sui-table-header",[n("sui-table-row",[n("sui-table-header-cell",[t._v(" 比赛信息 ")])],1)],1),t._v(" "),n("sui-table-body",[n("sui-table-row",[n("sui-table-cell",[n("div",{staticClass:"f sb",staticStyle:{"margin-bottom":"1em"}},[n("span",[t._v("游戏：")]),t._v(" "),n("nuxt-link",{attrs:{to:"/game/"+t.contest.game.id}},[t._v("\n                                        "+t._s(t.contest.game.alias)+"\n\n                                        "),n("span",{staticStyle:{"font-size":"small"}},[t._v("("+t._s(t.contest.game.name)+")")])])],1),t._v(" "),n("div",{staticClass:"f sb",staticStyle:{"margin-bottom":"1em"}},[n("span",[t._v("开始时间：")]),t._v("\n                                    "+t._s(t._f("date")(t.contest.begin_time,"YYYY-M-D H:mm:ss"))+"\n                                ")]),t._v(" "),n("div",{staticClass:"f sb",staticStyle:{"margin-bottom":"1em"}},[n("span",[t._v("结束时间：")]),t._v("\n                                    "+t._s(t._f("date")(t.contest.end_time,"YYYY-M-D H:mm:ss"))+"\n                                ")]),t._v(" "),n("div",{staticClass:"f sb",staticStyle:{"margin-bottom":"1em"}},[n("span",[t._v("赛制：")]),t._v(" "),n("b",[t._v(t._s({ladder:"天梯赛制",cycle:"双败淘汰",free:"随机比赛"}[t.contest.format]))])]),t._v(" "),n("div",{staticClass:"f sb",staticStyle:{"margin-bottom":"1em"}},[n("span",[t._v("发起人：")]),t._v(" "),n("player-card",{attrs:{username:t.contest.promoter}})],1),t._v(" "),n("div",{staticClass:"f sb",staticStyle:{"margin-bottom":"1em"}},[n("span",[t._v("管理员：")]),t._v(" "),t._l(t.contest.group.managers,(function(e,o){return n("span",{key:o},[n("player-card",{attrs:{username:e}}),t._v("  ")],1)}))],2),t._v(" "),n("div",{staticClass:"f ce sb"},[n("span",[t._v("我派遣的AI：")]),t._v(" "),n("code-selector",{attrs:{header:"选择派遣到比赛 "+t.contest.name+" 的AI",username:t.$auth.$state.user.username,"game-id":t.contest.game.id,"origin-entity":t.contest.entity,"call-back":t.selectCode},on:{"on-open-modal":function(e){return t.caution(t.contest)},canceled:function(e){return t.cancelCode(t.contest)}}})],1)])],1)],1)],1),t._v(" "),n("sui-button",{tag:"nuxt-link",attrs:{basic:"",color:"blue",icon:"signal",fluid:"",to:"/group/"+t.contest.group.id+"/contest/"+t.contest.id+"/ranklist"}},[t._v("查看排行榜")]),t._v(" "),n("sui-table",{attrs:{color:"blue"}},[n("sui-table-header",[n("sui-table-row",[n("sui-table-header-cell",[t._v(" 比赛介绍 ")])],1)],1),t._v(" "),n("sui-table-body",[n("sui-table-row",[n("sui-table-cell",[t._v("\n                                "+t._s(t.contest.introduction)+"\n                            ")])],1)],1)],1)],1),t._v(" "),n("sui-grid-column",{attrs:{width:12}},[n("match-list",{attrs:{"contest-id":t.contest.id}})],1)],1)],1),t._v(" "),n("sui-modal",{attrs:{basic:"",size:"tiny"},model:{value:t.caution.open,callback:function(e){t.$set(t.caution,"open",e)},expression:"caution.open"}},[n("sui-modal-content",{staticStyle:{"text-indent":"2em"}},[t._v("\n            "+t._s(t.caution.message)+"\n        ")]),t._v(" "),n("sui-modal-actions",[n("sui-button",{attrs:{basic:"",color:"green"},on:{click:function(e){e.preventDefault(),t.caution.open=!1}}},[t._v(" 知道了 ")])],1)],1)],1)}),[],!1,null,"690bfa96",null);e.default=component.exports}}]);
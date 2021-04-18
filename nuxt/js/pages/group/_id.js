(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{891:function(t,e,n){"use strict";n.r(e);n(17),n(18);var o={validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},head:function(){return{title:this.group.name+" - 小组 - Saiblo"}},data:function(){return{notice:{title:"",time:"",last_editor:"",content:"",open:!1},contests:[],isLoading:!1,caution:{open:!1,message:""}}},computed:{group_permission:function(){return this.group.auto_pass?"任何人均可加入":this.group.accept_application?"需管理员通过申请":"只能管理员邀请"}},asyncData:function(t){var e,n;return t.app.$axios.get("/api/groups/".concat(t.route.params.id,"/")).then((function(o){if(e=o.data,-1!=["joined","managing","created"].indexOf(e.relation))return null==e.size&&(e.size="N/A"),t.app.$axios.get("/api/groups/".concat(t.route.params.id,"/notices/")).then((function(o){return e.notices=o.data,t.app.$axios.get("/api/groups/".concat(e.id,"/contests/")).then((function(o){return(n=o.data).forEach((function(e){e.participation&&(e.entity=e.participation.code.entity,e.entity.code=e.participation.code),e.begin_time=t.app.$dayjs(e.begin_time),e.end_time=t.app.$dayjs(e.end_time),t.app.$dayjs()<e.begin_time?e.state="未开始":t.app.$dayjs()>e.end_time?e.state="已结束":e.state="进行中"})),{group:e,contests:n}}),(function(){return{group:e}}))}));t.error({statusCode:401,message:"您还不是该小组的成员"})}),(function(){t.error({statusCode:404,message:"没有这个小组"})}))},mounted:function(){},methods:{read_notice:function(t){var e=this;this.group.notices.forEach((function(n){if(n.id==t){for(var o in n)e.notice[o]=n[o];e.notice.open=!0}}))},caution:function(t){t.entity&&openCaution("请注意，在比赛中切换已经派遣的 AI 版本将会使得天梯分数重置为 1000 分！")},apply:function(){var t=this;this.isLoading=!0,"idle"==this.group.relation?this.$axios.post("/api/groups/".concat(this.group.id,"/applications/"),{message:""}).then((function(){t.$notify.success({title:"成功",message:"已申请入组",timeout:1e3}),t.$axios.get("/api/groups/".concat(t.group.id,"/")).then((function(e){t.group.relation=e.data.relation,"joined"==t.group.relation&&(t.group.size+=1)}))})).then((function(){t.isLoading=!1})):(this.isLoading=!0,this.$axios.get("/api/users/".concat(this.$auth.$state.user.username,"/applications/")).then((function(e){e.data.forEach((function(e){e.group==t.group.id&&t.$axios.put("/api/users/".concat(t.$auth.$state.user.username,"/applications/").concat(e.id,"/"),{message:"fuck"}).then((function(){t.$notify.success({title:"成功",message:"已重新申请",timeout:1e3}),t.$axios.get("/api/groups/".concat(t.group.id,"/")).then((function(e){t.group.relation=e.data.relation,"joined"==t.group.relation&&(t.group.size+=1)}))}))}))})).then((function(){t.isLoading=!1})))},cancel:function(){var t=this;this.isLoading=!0,this.$axios.get("/api/users/".concat(this.$auth.$state.user.username,"/applications/")).then((function(e){e.data.forEach((function(e){e.group==t.group.id&&t.$axios.delete("/api/users/".concat(t.$auth.$state.user.username,"/applications/").concat(e.id,"/")).then((function(){t.$notify.success({title:"成功",message:"已取消申请",timeout:1e3}),t.group.relation="idle"}))}))})).catch((function(){})).then((function(){t.isLoading=!1}))},quit:function(){var t=this;this.isLoading=!0,this.$axios.delete("/api/groups/".concat(this.group.id,"/users/").concat(this.$auth.$state.user.username,"/")).then((function(){t.$notify.success({title:"成功",message:"已退出小组",timeout:1e3}),t.group.relation="idle",t.group.size-=1,t.group.managers=t.group.managers.filter((function(e){return e!=t.$auth.$state.user.username}))})).catch((function(){})).then((function(){t.isLoading=!1}))},selectCode:function(t,e){var n=this;t.entity?this.$axios.put("/api/groups/".concat(this.group.id,"/contests/").concat(t.id,"/ladders/").concat(this.$auth.$state.user.username,"/"),{code:e.code.id}).then((function(){n.$notify.success({title:"成功",message:"已成功派遣AI到".concat(t.name),timeout:1e3}),n.$set(t,"entity",e)})):this.$axios.post("/api/groups/".concat(this.group.id,"/contests/").concat(t.id,"/ladders/"),{code:e.code.id}).then((function(){n.$notify.success({title:"成功",message:"已成功修改派遣到".concat(t.name,"的AI"),timeout:1e3}),n.$set(t,"entity",e)}))},cancelCode:function(t){var e=this;this.$axios.delete("/api/groups/".concat(t.group.id,"/contests/").concat(t.id,"/ladders/").concat(this.$auth.$state.user.username)).then((function(){e.$notify.success({title:"成功",message:"已取消派遣的AI",timeout:1e3}),e.$set(t,"entity",null)}))},openCaution:function(t){this.caution.message=t,this.caution.open=!0}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sui-breadcrumb",[n("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/groups"}},[t._v("小组")]),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",{attrs:{active:""}},[t._v(t._s(t.group.name))])],1),t._v(" "),n("sui-grid",{attrs:{centered:"",stackable:""}},[n("sui-grid-column",{attrs:{width:4}},[n("sui-card",{staticStyle:{width:"100%"}},[n("sui-card-content",[n("sui-card-header",{staticStyle:{"text-align":"center"}},[t._v("\n                        "+t._s(t.group.name)+"\n                    ")]),t._v(" "),n("br"),t._v(" "),n("sui-card-meta",[n("div",[n("sui-icon",{staticStyle:{"margin-right":"0em"},attrs:{name:"user"}}),t._v("   管理员：\n                            "),n("nuxt-link",{staticStyle:{color:"orange"},attrs:{to:"/user/"+t.group.creator}},[t._v(t._s(t.group.creator))]),t._v(" "),t._l(t.group.managers,(function(e,o){return[n("nuxt-link",{key:o,attrs:{to:"/user/"+e}},[t._v("\n                                    "+t._s(e)+"\n                                ")])]}))],2),t._v(" "),n("div",[n("sui-icon",{attrs:{name:"users"}}),t._v("\n                              成员数："+t._s(t.group.size)+"\n                        ")],1),t._v(" "),n("div",[n("sui-icon",{staticStyle:{"padding-left":"2.8px"},attrs:{name:"check circle"}}),t._v("\n                              加入权限："+t._s(t.group_permission)+"\n                        ")],1)]),t._v(" "),n("sui-divider"),t._v(" "),n("sui-card-description",[n("sui-icon",{attrs:{name:"comment"}}),t._v("  简介：\n                        "),n("br"),t._v("\n                        "+t._s(t.group.introduction)+"\n                    ")],1)],1),t._v(" "),n("div",{staticClass:"bg ba"},["managing"==t.group.relation||"created"==t.group.relation?n("span",{staticClass:"bing"},[n("sui-button",{tag:"nuxt-link",attrs:{color:"purple",to:"/group/"+t.group.id+"/manage"}},[t._v("管理小组")])],1):t._e(),t._v(" "),"idle"==t.group.relation?n("span",{staticClass:"bing"},[n("sui-button",{attrs:{loading:t.isLoading,disabled:t.isLoading},nativeOn:{click:function(e){return t.apply()}}},[t._v("申请加入")])],1):"rejected"==t.group.relation?n("span",{staticClass:"bing"},[n("sui-button",{attrs:{animated:"",loading:t.isLoading,disabled:t.isLoading,color:"red"},on:{click:function(e){return e.preventDefault(),t.apply()}}},[n("sui-button-content",{attrs:{visible:""}},[n("sui-icon",{attrs:{name:"x"}}),t._v("已被拒绝 ")],1),t._v(" "),n("sui-button-content",{attrs:{hidden:""}},[n("sui-icon",{attrs:{name:"add"}}),t._v("重新申请 ")],1)],1)],1):"applying"==t.group.relation?n("span",{staticClass:"bing"},[n("sui-button",{attrs:{loading:t.isLoading,disabled:t.isLoading,animated:"",color:"yellow"},nativeOn:{click:function(e){return t.cancel()}}},[n("sui-button-content",{attrs:{visible:""}},[t._v("正在申请")]),t._v(" "),n("sui-button-content",{attrs:{hidden:""}},[n("sui-icon",{attrs:{name:"left arrow"}}),t._v("取消申请 ")],1)],1)],1):"joined"==t.group.relation||"managing"==t.group.relation?n("confirm-button",{attrs:{button:{loading:t.isLoading,disabled:t.isLoading,color:"green",animated:!0},message:"确认要退出 "+t.group.name+" 小组吗？"},on:{confirmed:function(e){return t.quit()}}},[n("sui-button-content",{attrs:{visible:""}},[t._v("已在组中")]),t._v(" "),n("sui-button-content",{attrs:{hidden:""}},[n("sui-icon",{attrs:{name:"left arrow"}}),t._v("退出小组 ")],1)],1):t._e()],1)],1),t._v(" "),t.group.notices.length>0?n("sui-table",{attrs:{compact:"very",selectable:""}},[n("sui-table-header",[n("sui-table-row",[n("sui-table-header-cell",[t._v("\n                            公告列表\n                            "),n("span",{staticStyle:{float:"right"}},[t._v("最后修改")])])],1)],1),t._v(" "),n("sui-table-body",t._l(t.group.notices,(function(e){return n("sui-table-row",{key:e.id},[n("sui-table-cell",[n("sui-list",[n("sui-list-item",{tag:"a",attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.read_notice(e.id)}}},[n("sui-list-content",[n("sui-list-header",[t._v("\n                                            "+t._s(e.title)+"\n                                            "),n("span",{staticStyle:{float:"right"}},[t._v(t._s(e.last_editor))])]),t._v(" "),n("sui-list-description",[t._v(t._s(t._f("date")(e.time,"YYYY-M-D H:mm:ss")))])],1)],1)],1)],1)],1)})),1)],1):t._e(),t._v(" "),0==t.group.notices.length?n("sui-message",{attrs:{icon:"exclamation",header:"没有发布公告",content:"请等待管理员发布公告",color:"purple"}}):t._e()],1),t._v(" "),n("sui-grid-column",{attrs:{width:12}},[t.contests.length>0?n("sui-table",{attrs:{color:"purple"}},[n("sui-table-header",[n("sui-table-row",[n("sui-table-header-cell",[t._v("所有比赛")])],1)],1),t._v(" "),n("sui-table-body",t._l(t.contests,(function(e){return n("sui-table-row",{key:e.id},[n("sui-table-cell",[n("div",{staticClass:"f sb w"},[n("div",{staticClass:"f c sb"},[n("div",{staticClass:"f w ce"},[n("div",{staticStyle:{"min-width":"fit-content"}},[n("nuxt-link",{staticStyle:{"font-size":"x-large"},attrs:{to:"/group/"+t.group.id+"/contest/"+e.id+"/"}},[n("b",[t._v(t._s(e.name))])])],1),t._v(" "),n("div",{staticStyle:{"margin-left":"0.5em","margin-right":"1.5rem","min-width":"fit-content"}},[n("sui-label",{attrs:{color:"未开始"==e.state?"orange":"进行中"==e.state?"green":"grey"},domProps:{textContent:t._s(e.state)}})],1),t._v(" "),n("div",[n("a",{staticClass:"ui teal image label"},[t._v("\n                                                赛制\n                                                "),n("div",{staticClass:"detail"},[t._v("\n                                                    "+t._s({ladder:"天梯赛制",cycle:"双败淘汰",free:"随机比赛",submit:"作业提交"}[e.format])+"\n                                                ")])]),t._v(" "),n("nuxt-link",{staticClass:"ui teal image label",staticStyle:{"margin-left":"0"},attrs:{to:"/user/"+e.promoter}},[t._v("\n                                                发起用户\n                                                "),n("div",{staticClass:"detail"},[t._v(t._s(e.promoter))])])],1)]),t._v(" "),n("div",{staticStyle:{color:"grey"}},[t._v("\n                                        "+t._s(t._f("date")(e.begin_time,"YYYY-M-D H:mm:ss"))+" ~\n                                        "+t._s(t._f("date")(e.end_time,"YYYY-M-D H:mm:ss"))+"\n                                    ")])]),t._v(" "),n("div",{staticClass:"f c sa"},["joined"==t.group.relation?n("div",[n("sui-label",[t._v(" 我派遣的AI ")]),t._v(" "),n("code-selector",{attrs:{header:"选择派遣到比赛\n                      "+e.name+" 的AI",username:t.$auth.$state.user.username,"game-id":e.game.id,"origin-entity":e.entity,"call-back":function(data){return t.selectCode(e,data)}},on:{"on-open-modal":function(n){return t.caution(e)},canceled:function(n){return t.cancelCode(e)}}})],1):t._e(),t._v(" "),n("div",{staticStyle:{"text-align":"center","margin-top":"0.2rem"}},[e.has_ladder?n("sui-label",{tag:"nuxt-link",attrs:{color:"blue",to:"/group/"+t.group.id+"/contest/"+e.id+"/ranklist"}},[n("sui-icon",{attrs:{name:"signal"}}),t._v(" 查看排行榜\n                                        ")],1):t._e()],1)])])])],1)})),1)],1):t._e(),t._v(" "),0==t.contests.length?n("sui-message",{attrs:{color:"purple",icon:"exclamation",header:"目前没有比赛",content:"请等待管理员添加比赛"}}):t._e()],1)],1),t._v(" "),n("sui-modal",{attrs:{closable:!1},model:{value:t.notice.open,callback:function(e){t.$set(t.notice,"open",e)},expression:"notice.open"}},[n("sui-modal-header",[t._v("公告详情")]),t._v(" "),n("sui-modal-content",[n("sui-modal-description",[n("sui-header",{tag:"h1",attrs:{"text-align":"center"}},[n("sui-header-content",[t._v(t._s(t.notice.title))]),t._v(" "),n("sui-header-subheader",[t._v("\n                        时间："+t._s(t._f("date")(t.notice.time,"YYYY-M-D H:mm:ss"))+"\n                        "),n("br"),t._v("\n                        最后修改："+t._s(t.notice.last_editor)+"\n                    ")])],1),t._v(" "),n("sui-container",{domProps:{innerHTML:t._s(t.notice.content)}})],1)],1),t._v(" "),n("sui-modal-actions",[n("sui-button",{attrs:{color:"blue"},nativeOn:{click:function(e){t.notice.open=!1}}},[t._v("\n                知道了\n                "),n("sui-icon",{attrs:{name:"right angle"}})],1)],1)],1),t._v(" "),n("sui-modal",{attrs:{basic:"",size:"tiny"},model:{value:t.caution.open,callback:function(e){t.$set(t.caution,"open",e)},expression:"caution.open"}},[n("sui-modal-content",{staticStyle:{"text-indent":"2em"}},[t._v(t._s(t.caution.message))]),t._v(" "),n("sui-modal-actions",[n("sui-button",{attrs:{basic:"",color:"green"},on:{click:function(e){e.preventDefault(),t.caution.open=!1}}},[t._v("知道了")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
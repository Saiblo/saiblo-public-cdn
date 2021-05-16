(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{920:function(t,e,o){"use strict";o.r(e);o(17),o(18),o(42);var n=o(23),r={validate:function(t){var e=t.params;return/^\d+$/.test(e.slug)},head:function(){return{title:"管理小组 - Saiblo"}},data:function(){return{group:{id:0},competition_editor:{open:!1,err_code:0,create:!1,isLoading:!1,isOK:!1,competition:{format:"ladder",game:{id:0},id:0,name:"",begin_time:"",end_time:"",introduction:""},game_options:[]},id:"1",info:{id:0,name:"",permission:"",introduction:"",is_loading:!1,is_ok:!1,err_code:0,auto_pass:!1,accept_application:!0,info_permission:""},notice_form:{notices:[],modal:{open:!1,id:0,title:"",content:"",isLoading:!1,isOK:!1}},member_form:{},members:[],applications:[],competitions:[],permission_options:[{value:"any",label:{color:"green",empty:!0,circular:!0},text:"任何人均可加入"},{value:"pass",label:{color:"yellow",empty:!0,circular:!0},text:"需管理员通过申请方可加入"},{value:"invite",label:{color:"red",empty:!0,circular:!0},text:"只能管理员通过邀请加入"}]}},validations:{notice_form:{modal:{title:{required:n.required,maxLength:Object(n.maxLength)(20)}}},competition_editor:{competition:{name:{required:n.required,maxLength:Object(n.maxLength)(20)},begin_time:{required:n.required},end_time:{required:n.required},introduction:{required:n.required}}},raw_competition_editor:"",info:{name:{required:n.required,maxLength:Object(n.maxLength)(20)},permission:{},introduction:{required:n.required}}},computed:{iMTheCreator:function(){return"created"==this.group.relation}},watch:{"info.info_permission":function(t){this.info.auto_pass="any"==t,this.info.accept_application="invite"!=t},"info.name":function(){this.info.err_code=0},"info.permission":function(){this.info.err_code=0},"info.introduction":function(){this.info.err_code=0},"competition_editor.competition.name":function(){this.competition_editor.err_code=0},"competition_editor.competition.begin_time":function(){this.competition_editor.err_code=0},"competition_editor.competition.end_time":function(){this.competition_editor.err_code=0},"competition_editor.competition.introduction":function(){this.competition_editor.err_code=0}},asyncData:function(t){var e,o=[];return t.app.$axios.get("/api/groups/".concat(t.route.params.slug,"/")).then((function(o){"created"!=(e=o.data).relation&&"managing"!=e.relation&&t.error({statusCode:401,message:"您没有足够的权限"})}),(function(){t.error({statusCode:404,message:"这个小组不存在"})})).then((function(){return t.app.$axios.get("/api/games/").then((function(n){var r={open:!1,competition:{game:{name:null}},game_options:[]};return n.data.forEach((function(t){r.game_options.push({text:"".concat(t.alias,"(").concat(t.name,")"),value:t.id})})),t.app.$axios.get("/api/groups/".concat(t.route.params.slug,"/contests/")).then((function(n){(o=n.data).forEach((function(e){e.begin_time=t.app.$dayjs(e.begin_time),e.end_time=t.app.$dayjs(e.end_time),t.app.$dayjs()<e.begin_time?e.state="未开始":t.app.$dayjs()>e.end_time?e.state="已结束":e.state="进行中"}));var c={id:e.id,name:e.name,permission:{},introduction:e.introduction,is_loading:!1,is_ok:!1,err_code:0,auto_pass:e.auto_pass,accept_application:e.accept_application,info_permission:e.auto_pass?"any":e.accept_application?"pass":"invite"};return{group:e,competition_editor:r,competitions:o,info:c}}),(function(){return{}}))}))}))},created:function(){this.$route.query.id&&(this.id=this.$route.query.id)},mounted:function(){var t=this;this.$axios.get("/api/groups/".concat(this.group.id,"/users/")).then((function(e){t.members=e.data}),(function(){})),this.$axios.get("/api/groups/".concat(this.group.id,"/applications/")).then((function(e){t.applications=e.data}),(function(){}))},methods:{modifyInfo:function(){var t=this;this.$v.info.$touch(),this.$v.info.$invalid||(this.info.is_loading=!0,this.$axios.put("/api/groups/".concat(this.group.id,"/"),this.info).then((function(){t.info.err_code=0,t.info.is_ok=!0,t.$notify.success({title:"成功",message:"已修改小组信息",timeout:1e3}),setTimeout((function(){t.info.is_ok=!1}),1e3),t.group.name=t.info.name,t.group.auto_pass=t.info.auto_pass,t.group.accept_application=t.info.accept_application,t.group.introduction=t.info.accept_application}),(function(e){t.info.err_code=e.response.status})).then((function(){t.info.is_loading=!1})))},formatContests:function(t){var e=this;t.forEach((function(t){t.begin_time=e.$dayjs(t.begin_time),t.end_time=e.$dayjs(t.end_time),e.$dayjs()<t.begin_time?t.state="未开始":e.$dayjs()>t.end_time?t.state="已结束":t.state="进行中"}))},reloadInfo:function(){var t=this;this.$axios.get("/api/groups/".concat(this.group.id,"/")).then((function(e){t.group=e.data}))},delete_competition:function(){var t=this;this.isLoading=!0,this.$axios.delete("/api/groups/".concat(this.group.id,"/contests/").concat(this.competition_editor.competition.id,"/")).then((function(){t.$notify.success({message:"删除比赛成功!",title:"成功",timeout:1e3}),t.competitions=t.competitions.filter((function(e){return e.id!=t.competition_editor.competition.id})),t.competition_editor.open=!1}),(function(){})).then((function(){t.isLoading=!1}))},submit_competition_editor:function(){var t=this;if(this.$v.competition_editor.$touch(),!this.$v.competition_editor.$invalid){this.competition_editor.isLoading=!0;var e=JSON.parse(JSON.stringify(this.competition_editor.competition));if(e.game=this.competition_editor.competition.game.id,e.begin_time=this.$dayjs(e.begin_time).locale("en").format("ddd, DD MMM YYYY HH:mm:ss ZZ"),e.end_time=this.$dayjs(e.end_time).locale("en").format("ddd, DD MMM YYYY HH:mm:ss ZZ"),this.competition_editor.create)this.$axios.post("/api/groups/".concat(this.group.id,"/contests/"),e).then((function(){t.err_code=0,t.isLoading=!1,t.isOK=!0,t.$notify.success({message:"创建比赛成功!",title:"成功",timeout:1e3}),setTimeout((function(){t.competition_editor.open=!1}),1e3),t.$axios.get("/api/groups/".concat(t.group.id,"/contests/")).then((function(e){var o=e.data;t.formatContests(o),t.competitions=o}),(function(){t.competition_editor.isLoading=!1}))}),(function(e){t.err_code=e.response.status,t.competition_editor.isLoading=!1})).then((function(){t.competition_editor.isLoading=!1}));else{var o=JSON.parse(JSON.stringify(this.raw_competition_editor.competition));o.game=this.raw_competition_editor.competition.game.id,o.begin_time=this.$dayjs(o.begin_time).locale("en").format("ddd, DD MMM YYYY HH:mm:ss ZZ"),o.end_time=this.$dayjs(o.end_time).locale("en").format("ddd, DD MMM YYYY HH:mm:ss ZZ");var n={};for(var r in o)o[r]!==e[r]&&(n[r]=e[r]);delete n.group,Object.keys(n).length?this.$axios.put("/api/groups/".concat(this.group.id,"/contests/").concat(this.competition_editor.competition.id,"/"),n).then((function(){t.err_code=0,t.isLoading=!1,t.isOK=!0,t.$notify.success({message:"修改比赛成功!",title:"成功",timeout:1e3}),setTimeout((function(){t.competition_editor.open=!1}),1e3),t.$axios.get("/api/groups/".concat(t.group.id,"/contests/")).then((function(e){var o=e.data;t.formatContests(o),t.competitions=o}),(function(){t.competition_editor.isLoading=!1}))}),(function(e){t.err_code=e.response.status,t.competition_editor.isLoading=!1})).then((function(){t.competition_editor.isLoading=!1})):(this.$notify.info({message:"未修改任何数据，无需提交",title:"提示",timeout:1e3}),this.competition_editor.isLoading=!1)}}},editCompetition:function(t){t?(this.competition_editor.competition=JSON.parse(JSON.stringify(t)),this.competition_editor.competition.begin_time=this.$dayjs(this.competition_editor.competition.begin_time).locale("en").format("YYYY-M-D H:mm:ss"),this.competition_editor.competition.end_time=this.$dayjs(this.competition_editor.competition.end_time).locale("en").format("YYYY-M-D H:mm:ss"),this.competition_editor.create=!1):(this.$v.competition_editor.$reset(),this.competition_editor.competition={format:"ladder",name:"",game:{id:1},begin_time:"",end_time:"",introduction:""},this.competition_editor.create=!0),this.competition_editor.open=!0,this.raw_competition_editor=JSON.parse(JSON.stringify(this.competition_editor))},handleApplication:function(t,e){var o=this;this.$axios.put("/api/groups/".concat(this.group.id,"/applications/").concat(t,"/"),{permit:e}).then((function(){o.$notify.success({title:"成功",message:"处理申请成功",timeout:1e3}),o.applications=o.applications.filter((function(e){return e.id!=t})),e&&o.$axios.get("/api/groups/".concat(o.group.id,"/users/")).then((function(t){o.members=t.data}),(function(){}))}),(function(){}))},changeManager:function(t,e){var o=this;this.$axios.put("/api/groups/".concat(this.group.id,"/users/").concat(t,"/"),{management:e}).then((function(){o.$notify.success({title:"成功",message:"已提升为管理员",timeout:1e3}),o.group.managers.push(t)}),(function(){}))},deleteMember:function(t){var e=this;this.$axios.delete("/api/groups/".concat(this.group.id,"/users/").concat(t,"/")).then((function(){e.$notify.success({title:"成功",message:"已踢出小组",timeout:1e3}),e.members=e.members.filter((function(e){return e.username!=t}))}),(function(){}))},demote:function(t){var e=this;this.$axios.put("/api/groups/".concat(this.group.id,"/users/").concat(t.username,"/"),{management:!1}).then((function(){e.$notify.success({title:"成功",message:"已降为普通成员",timeout:1e3}),e.group.managers=e.group.managers.filter((function(e){return e!=t.username}))}))},isManager:function(t){return-1!=this.group.managers.indexOf(t)},isActive:function(t){return t==this.id},select:function(t){this.$router.push(this.$route.path+"?id="+t),this.id=t}}},c=o(7),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("sui-breadcrumb",[o("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/groups"}},[t._v("小组")]),t._v(" "),o("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),o("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/group/"+t.group.id}},[t._v(t._s(t.group.name))]),t._v(" "),o("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),o("sui-breadcrumb-section",{attrs:{active:""}},[t._v("管理小组")])],1),t._v(" "),o("sui-grid",[o("sui-grid-row",[o("sui-grid-column",[o("sui-header",{tag:"h1"},[t._v(t._s(t.group.name))])],1)],1),t._v(" "),o("sui-grid-row",[o("sui-grid-column",[o("sui-menu",{attrs:{fluid:"",attached:"top",tabular:""}},[o("sui-menu-item",{tag:"a",attrs:{active:t.isActive(1)},on:{click:function(e){return t.select(1)}}},[t._v("小组信息")]),t._v(" "),o("sui-menu-item",{tag:"a",attrs:{active:t.isActive(2)},on:{click:function(e){return t.select(2)}}},[t._v("管理公告")]),t._v(" "),o("sui-menu-item",{tag:"a",attrs:{active:t.isActive(3)},on:{click:function(e){return t.select(3)}}},[t._v("成员管理")]),t._v(" "),o("sui-menu-item",{tag:"a",attrs:{active:t.isActive(4)},on:{click:function(e){return t.select(4)}}},[t._v("管理比赛")])],1),t._v(" "),t.isActive(1)?o("sui-segment",{attrs:{attached:"bottom"}},[o("sui-form",{attrs:{method:"post",autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.modifyInfo()}}},[o("sui-form-fields",{attrs:{fields:2}},[o("sui-form-field",{attrs:{error:!(!t.$v.info.name.$error&&!t.info.err_code)}},[o("label",[t._v("名称")]),t._v(" "),o("sui-input",{attrs:{placeholder:"名称",disabled:t.info.is_loading||t.info.is_ok},model:{value:t.info.name,callback:function(e){t.$set(t.info,"name",e)},expression:"info.name"}})],1),t._v(" "),o("sui-form-field",{attrs:{disabled:t.info.is_loading||t.info.is_ok}},[o("label",[t._v("加入权限")]),t._v(" "),o("sui-dropdown",{attrs:{disabled:t.info.is_loading||t.info.is_ok,selection:"",placeholder:"加入权限",options:t.permission_options},model:{value:t.info.info_permission,callback:function(e){t.$set(t.info,"info_permission",e)},expression:"info.info_permission"}})],1)],1),t._v(" "),o("sui-form-field",{attrs:{error:!(!t.$v.info.introduction.$error&&!t.info.err_code),disabled:t.info.is_loading||t.info.is_ok}},[o("label",[t._v("介绍")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.info.introduction,expression:"info.introduction"}],attrs:{rows:"10"},domProps:{value:t.info.introduction},on:{input:function(e){e.target.composing||t.$set(t.info,"introduction",e.target.value)}}})]),t._v(" "),o("sui-form-field",{staticStyle:{"text-align":"right"}},[o("sui-button",{staticStyle:{width:"7em","margin-right":"0"},attrs:{disabled:t.info.is_loading||t.info.is_ok,loading:t.info.is_loading,color:t.info.is_ok?"green":"blue",icon:t.info.is_ok?"check":"none"}},[t.info.is_ok?t._e():o("span",[t._v("确认修改")])])],1),t._v(" "),t.$v.info.name.$error||t.$v.info.permission.$error||t.$v.info.introduction.$error?o("sui-form-field",[o("sui-message",{attrs:{negative:""}},[o("sui-message-list",[t.$v.info.name.required?t.$v.info.name.maxLength?t._e():o("sui-message-item",[t._v("组名不能过长")]):o("sui-message-item",[t._v("组名不能为空")]),t._v(" "),t.$v.info.introduction.required?t._e():o("sui-message-item",[t._v("小组介绍不能为空")])],1)],1)],1):t._e()],1)],1):t._e(),t._v(" "),t.isActive(2)?o("sui-segment",{attrs:{attached:"bottom"}},[o("group-notice-editor",{attrs:{id:t.group.id}})],1):t._e(),t._v(" "),t.isActive(3)?o("sui-segment",{attrs:{attached:"bottom"}},[o("sui-accordion",{attrs:{fluid:"",exclusive:""}},[o("sui-accordion-title",{attrs:{active:""}},[o("sui-icon",{attrs:{name:"dropdown"}}),t._v("申请加入 ")],1),t._v(" "),o("sui-accordion-content",{attrs:{active:""}},[o("sui-table",{attrs:{basic:"very",selectable:"",compact:"very"}},[o("sui-table-header",[o("sui-table-row",[o("sui-table-header-cell",[t._v("用户名")]),t._v(" "),o("sui-table-header-cell",[t._v("姓名")]),t._v(" "),o("sui-table-header-cell",[t._v("学校")]),t._v(" "),o("sui-table-header-cell",[t._v("院系")]),t._v(" "),o("sui-table-header-cell")],1)],1),t._v(" "),o("sui-table-body",t._l(t.applications,(function(e,n){return o("sui-table-row",{key:n},[o("sui-table-cell",[t._v("\n                                            "+t._s(e.user.username)+"\n                                        ")]),t._v(" "),o("sui-table-cell",[t._v("\n                                            "+t._s(e.user.name)+"\n                                        ")]),t._v(" "),o("sui-table-cell",[t._v("\n                                            "+t._s(e.user.school)+"\n                                        ")]),t._v(" "),o("sui-table-cell",[t._v("\n                                            "+t._s(e.user.department)+"\n                                        ")]),t._v(" "),o("sui-table-cell",{staticClass:"collapsing"},[o("div",{staticClass:"bg"},[o("span",{staticClass:"bing"},[o("sui-button",{attrs:{color:"green",size:"mini"},on:{click:function(o){return o.preventDefault(),t.handleApplication(e.id,!0)}}},[t._v("接受 ")])],1),o("confirm-button",{attrs:{button:{color:"red",size:"mini",content:"拒绝"},message:"确认要拒绝 "+e.user.username+" 的申请吗？"},on:{confirmed:function(o){return t.handleApplication(e.id,!1)}}})],1)])],1)})),1)],1)],1),t._v(" "),o("sui-accordion-title",[o("sui-icon",{attrs:{name:"dropdown"}}),t._v("现有成员 ")],1),t._v(" "),o("sui-accordion-content",[o("sui-table",{attrs:{basic:"very",selectable:"",compact:"very"}},[o("sui-table-header",[o("sui-table-row",[o("sui-table-header-cell",[t._v("用户名")]),t._v(" "),o("sui-table-header-cell",[t._v("姓名")]),t._v(" "),o("sui-table-header-cell",[t._v("学校")]),t._v(" "),o("sui-table-header-cell",[t._v("院系")]),t._v(" "),o("sui-table-header-cell",[t._v("简介")]),t._v(" "),o("sui-table-header-cell",[t._v("权限")]),t._v(" "),o("sui-table-header-cell")],1)],1),t._v(" "),o("sui-table-body",t._l(t.members,(function(e,n){return o("sui-table-row",{key:n},[o("sui-table-cell",[t._v(t._s(e.username))]),t._v(" "),o("sui-table-cell",[t._v(t._s(e.name))]),t._v(" "),o("sui-table-cell",[t._v(t._s(e.school))]),t._v(" "),o("sui-table-cell",[t._v(t._s(e.department))]),t._v(" "),o("sui-table-cell",[t._v(t._s(e.biography))]),t._v(" "),o("sui-table-cell",{style:t.isManager(e.username)?"color: orange;":""},[t._v(t._s(t.isManager(e.username)?"管理员":"成员"))]),t._v(" "),o("sui-table-cell",{staticClass:"collapsing"},[t.isManager(e.username)?t.iMTheCreator?o("div",[o("sui-button",{attrs:{size:"mini"},on:{click:function(o){return o.preventDefault(),t.demote(e)}}},[t._v("降为普通成员")])],1):t._e():o("span",[o("div",{staticClass:"bg"},[o("confirm-button",{attrs:{button:{color:"green",size:"mini",content:"提升为管理员"},message:"确认要将 "+e.username+" 提升为管理员吗？"},on:{confirmed:function(o){return t.changeManager(e.username,!0)}}}),o("confirm-button",{attrs:{button:{color:"red",size:"mini",content:"移出小组"},message:"确认要将 "+e.username+" 移出小组吗？"},on:{confirmed:function(o){return t.deleteMember(e.username)}}})],1)])])],1)})),1)],1)],1)],1)],1):t._e(),t._v(" "),t.isActive(4)?o("sui-segment",{attrs:{attached:"bottom"}},[o("sui-table",{attrs:{basic:"very",compact:"very",striped:"",fixed:""}},[o("sui-table-header",[o("sui-table-row",[o("sui-table-header-cell",[t._v("名称")]),t._v(" "),o("sui-table-header-cell",[t._v("游戏")]),t._v(" "),o("sui-table-header-cell",[t._v("开始时间")]),t._v(" "),o("sui-table-header-cell",[t._v("结束时间")]),t._v(" "),o("sui-table-header-cell",[t._v("当前状态")]),t._v(" "),o("sui-table-header-cell",[t._v("发起人")]),t._v(" "),o("sui-table-header-cell",{staticStyle:{width:"6em"}},[o("sui-button",{attrs:{size:"mini",color:"green"},nativeOn:{click:function(e){return t.editCompetition(null)}}},[t._v("新增")])],1)],1)],1),t._v(" "),o("sui-table-body",t._l(t.competitions,(function(e,n){return o("sui-table-row",{key:n},[o("sui-table-cell",[o("nuxt-link",{attrs:{to:"/group/"+t.group.id+"/contest/"+e.id+"/"}},[t._v(t._s(e.name))])],1),t._v(" "),o("sui-table-cell",[o("nuxt-link",{attrs:{to:"/game/"+e.game.id}},[t._v("\n                                        "+t._s(e.game.alias)+"\n                                    ")])],1),t._v(" "),o("sui-table-cell",[t._v(t._s(t._f("date")(e.begin_time,"YYYY-M-D H:mm:ss")))]),t._v(" "),o("sui-table-cell",[t._v(t._s(t._f("date")(e.end_time,"YYYY-M-D H:mm:ss")))]),t._v(" "),o("sui-table-cell",[o("span",{style:"color: "+("未开始"==e.state?"orange;":"进行中"==e.state?"green;":"grey;"),domProps:{textContent:t._s(e.state)}})]),t._v(" "),o("sui-table-cell",[o("player-card",{attrs:{username:e.promoter}})],1),t._v(" "),o("sui-table-cell",[o("sui-button",{attrs:{size:"mini"},nativeOn:{click:function(o){return t.editCompetition(e)}}},[t._v("修改")])],1)],1)})),1)],1)],1):t._e()],1)],1)],1),t._v(" "),o("sui-modal",{attrs:{size:"small",closable:!1},model:{value:t.competition_editor.open,callback:function(e){t.$set(t.competition_editor,"open",e)},expression:"competition_editor.open"}},[o("sui-modal-header",[t._v("\n            "+t._s(t.competition_editor.create?"新建比赛":"编辑比赛")+"\n            "),o("sui-button",{directives:[{name:"show",rawName:"v-show",value:t.competition_editor.competition.id,expression:"competition_editor.competition.id"}],staticStyle:{float:"right"},attrs:{size:"mini",color:"red"},nativeOn:{click:function(e){return t.delete_competition()}}},[t._v("删除")])],1),t._v(" "),o("sui-modal-content",[o("sui-form",[o("sui-form-field",{attrs:{error:!(!t.$v.competition_editor.competition.name.$error&&!t.competition_editor.err_code)}},[o("label",[t._v("名称")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.competition_editor.competition.name,expression:"competition_editor.competition.name"}],attrs:{placeholder:"名称",disabled:t.competition_editor.isLoading||t.competition_editor.isOK},domProps:{value:t.competition_editor.competition.name},on:{input:function(e){e.target.composing||t.$set(t.competition_editor.competition,"name",e.target.value)}}})]),t._v(" "),o("sui-form-fields",[o("sui-form-field",{attrs:{width:8}},[o("label",[t._v("游戏")]),t._v(" "),o("sui-dropdown",{attrs:{placeholder:"游戏",disabled:t.competition_editor.isLoading||t.competition_editor.isOK||!t.competition_editor.create,selection:"",fluid:"",options:t.competition_editor.game_options},model:{value:t.competition_editor.competition.game.id,callback:function(e){t.$set(t.competition_editor.competition.game,"id",e)},expression:"competition_editor.competition.game.id"}})],1),t._v(" "),o("sui-form-field",{attrs:{width:8}},[o("label",[t._v("赛制")]),t._v(" "),o("sui-dropdown",{attrs:{selection:"",options:[{value:"ladder",text:"天梯赛制"},{value:"cycle",text:"循环赛"},{value:"double",text:"双败淘汰"},{value:"free",text:"随机比赛"},{value:"submit",text:"作业提交"}]},model:{value:t.competition_editor.competition.format,callback:function(e){t.$set(t.competition_editor.competition,"format",e)},expression:"competition_editor.competition.format"}})],1)],1),t._v(" "),o("sui-form-fields",[o("sui-form-field",{attrs:{width:8,error:!(!t.$v.competition_editor.competition.begin_time.$error&&!t.competition_editor.err_code)}},[o("label",[t._v("开始时间")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.competition_editor.competition.begin_time,expression:"competition_editor.competition.begin_time"}],attrs:{placeholder:"年-月-日 时:分:秒",disabled:t.competition_editor.isLoading||t.competition_editor.isOK},domProps:{value:t.competition_editor.competition.begin_time},on:{input:function(e){e.target.composing||t.$set(t.competition_editor.competition,"begin_time",e.target.value)}}})]),t._v(" "),o("sui-form-field",{attrs:{width:8,error:!(!t.$v.competition_editor.competition.end_time.$error&&!t.competition_editor.err_code)}},[o("label",[t._v("结束时间")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.competition_editor.competition.end_time,expression:"competition_editor.competition.end_time"}],attrs:{placeholder:"年-月-日 时:分:秒",disabled:t.competition_editor.isLoading||t.competition_editor.isOK},domProps:{value:t.competition_editor.competition.end_time},on:{input:function(e){e.target.composing||t.$set(t.competition_editor.competition,"end_time",e.target.value)}}})])],1),t._v(" "),o("sui-form-field",{attrs:{error:!(!t.$v.competition_editor.competition.introduction.$error&&!t.competition_editor.err_code)}},[o("label",[t._v("比赛说明")]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.competition_editor.competition.introduction,expression:"competition_editor.competition.introduction"}],attrs:{rows:"10",disabled:t.competition_editor.isLoading||t.competition_editor.isOK},domProps:{value:t.competition_editor.competition.introduction},on:{input:function(e){e.target.composing||t.$set(t.competition_editor.competition,"introduction",e.target.value)}}})]),t._v(" "),t.$v.competition_editor.competition.name.$error||t.$v.competition_editor.competition.begin_time.$error||t.$v.competition_editor.competition.end_time.$error||t.$v.competition_editor.competition.introduction.$error?o("sui-form-field",[o("sui-message",{attrs:{negative:""}},[o("sui-message-list",[t.$v.competition_editor.competition.name.required?t.$v.competition_editor.competition.name.maxLength?t._e():o("sui-message-item",[t._v("比赛名过长")]):o("sui-message-item",[t._v("比赛名不能为空")]),t._v(" "),t.$v.competition_editor.competition.begin_time.required?t.$v.competition_editor.competition.begin_time.timeFormat?t._e():o("sui-message-item",[t._v("起始时间格式不正确")]):o("sui-message-item",[t._v("起始时间不能为空")]),t._v(" "),t.$v.competition_editor.competition.end_time.required?t.$v.competition_editor.competition.end_time.timeFormat?t._e():o("sui-message-item",[t._v("起始时间格式不正确")]):o("sui-message-item",[t._v("起始时间不能为空")]),t._v(" "),t.$v.competition_editor.competition.introduction.required?t._e():o("sui-message-item",[t._v("比赛介绍不能为空")])],1)],1)],1):t._e()],1)],1),t._v(" "),o("sui-modal-actions",[o("sui-button",{nativeOn:{click:function(e){t.competition_editor.open=!1}}},[t._v(" 取消 ")]),t._v(" "),o("sui-button",{attrs:{color:t.competition_editor.isOK?"green":"blue",disabled:t.competition_editor.isLoading||t.competition_editor.isOK,loading:t.competition_editor.isLoading,icon:t.competition_editor.isOK?"check":"none"},nativeOn:{click:function(e){return t.submit_competition_editor()}}},[t._v(t._s(t.competition_editor.create?"创建":"保存"))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
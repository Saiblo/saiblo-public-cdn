(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{851:function(e,t,r){var content=r(874);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("09e5fc50",content,!0,{sourceMap:!1})},873:function(e,t,r){"use strict";r(851)},874:function(e,t,r){var o=r(53)(!1);o.push([e.i,".content[data-v-3938c143]:after{content:unset!important}",""]),e.exports=o},914:function(e,t,r){"use strict";r.r(t);var o,n=r(6),c=(r(28),r(17),r(13),r(34),r(95)),l=r.n(c),d={head:function(){return{title:"房间 #".concat(this.room.id," - Saiblo")}},data:function(){return{playersrc:"",is_web_player:!0,play_web_player:!1,room_game_id:null,web_socket:null,server:{open:!1,message:null,failures:0,timeout:null,closing:!1},look:{open:!1,message:null,title:null,content:null},room:{started:!1,host:{},game:{support_online_game:!0,allow_watch:!1}},room_editor:{open:!1,host:null,game:null,is_private:!1},chat:{message:"",messages:""},my_entities:[],code_selector:{open:!1,flag:!1,seat:null,entity_options:[],code_options:[],entity:null,code:null,token:null},iframe:{height:200,fullscreen:!1,initted:!1},configs:{capacity:null},ai_auto_seated:!1,waiting:0}},computed:{is_host:function(){return this.room.host.id==this.$auth.$state.user.id},user_options:function(){if(this.room.users){for(var e=[],t=0;t<this.room.users.length;t++){var r=this.room.users[t];e.push({value:r.id,text:r.username})}return e}},can_start:function(){if(this.room.started||this.waiting)return!1;for(var e=0;e<this.room.players.length;e++){var t=this.room.players[e];if(!t||!t.is_ready)return!1}return this.tryAutoStart(),!0===this.is_host&&!1===this.is_web_player&&this.startGame(),!0},code_selector_entity:function(){if(!this.code_selector.entity||!this.code_selector.code)return null;var e=this.getMyEntity(this.code_selector.entity),code=this.getMyCode(e,this.code_selector.code);return{id:e.id,name:e.name,language:e.language,code:code}},game_player:function(){return this.$refs["game-player"]},player_me:function(){for(var e=0;e<this.room.players.length;e++){var t=this.room.players[e];if(t&&t.user.id==this.$auth.$state.user.id&&t.is_human)return t}return null}},watch:{is_web_player:function(e){this.play_web_player=null!==this.player_me&e},playersrc:function(e){""!==e&&this.$route.query.ai_token&&null!==this.player_me&&this.ready()},room_game_id:(o=Object(n.a)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!=r){e.next=2;break}return e.abrupt("return");case 2:return this.getMyEntities(t),e.next=5,this.$getPlayerHTML(this.$gameFile("/".concat(this.room.game.name,"/player.html")));case 5:this.playersrc=e.sent;case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)}),"code_selector.entity":function(e,t){if(e!=t)if(this.room.players[this.code_selector.seat-1]&&this.code_selector.entity==this.room.players[this.code_selector.seat-1].entity.id?this.code_selector.code=this.room.players[this.code_selector.seat-1].entity.code.id:this.code_selector.code=null,e){this.code_selector.code_options=[];for(var r=this.getMyEntity(e),o=0;o<r.codes.length;o++){var code=r.codes[o];"编译成功"==code.compile_status&&this.code_selector.code_options.push({value:code.id,text:"".concat(code.version)+(code.remark?"(".concat(code.remark,")"):"")})}}else this.code_selector.code_options=[]}},asyncData:function(e){return e.app.$axios.get("/api/games/").then((function(e){var t=[];return e.data.forEach((function(e){t.push({value:e.id,text:"".concat(e.alias,"(").concat(e.name,")")}),e.capacity_options=[];for(var r=0;r<e.player_number.length;r++){var o=e.player_number[r];e.capacity_options.push({value:o,text:"".concat(o)})}})),{game_options:t,games:e.data}}))},mounted:function(){window.addEventListener("message",this.iframeReceiveMessage,!1),this.initWebSocket()},beforeDestroy:function(){this.clearWebSocket()},methods:{tryAutoStart:function(){this.$route.query.ai_token&&this.startGame()},haveALook:function(e,title,content){this.look={open:!0,message:e,title:title,content:content}},clearWebSocket:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.server.timeout&&(clearTimeout(e.server.timeout),e.server.timeout=null),null===e.web_socket){t.next=11;break}return e.server.open=!1,e.server.closing=!0,t.next=6,e.web_socket.close();case 6:if(!e.server.closing){t.next=11;break}return t.next=9,new Promise((function(e){return setTimeout(e,10)}));case 9:t.next=6;break;case 11:case"end":return t.stop()}}),t)})))()},initWebSocket:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.clearWebSocket();case 2:e.server.open=!0,e.web_socket=new WebSocket(l()("wss://",e.$route.query.server,e.$route.params.id,e.$auth.$state.user.username)),e.web_socket.onopen=e.webSocketOnOpen,e.web_socket.onmessage=e.webSocketOnMessage,e.web_socket.onclose=function(){if(e.web_socket=null,e.server.open){if(e.server.failures+=1,11==e.server.failures)return e.$notify.warning({title:"提醒",message:"尝试连接失败，跳转至房间列表页面...",timeout:2e3}),void setTimeout((function(){e.$router.push("/rooms")}),2e3);e.server.message="连接已断开，正在尝试第".concat(e.server.failures,"次重连..."),e.server.timeout=setTimeout((function(){e.initWebSocket()}),3e3)}};case 7:case"end":return t.stop()}}),t)})))()},webSocketOnOpen:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.server.message=null,e.server.failures=0,e.sendMessage(JSON.stringify({type:"add_room",user:e.$auth.$state.user}));case 3:case"end":return t.stop()}}),t)})))()},webSocketOnMessage:function(e){var data=JSON.parse(e.data);switch(data.type){case"room_not_found":this.$notify.warning({title:"失败",message:"没有这个房间",timeout:2e3}),this.$router.push("/rooms");break;case"status":this.loadStatus(data);break;case"game_over":this.$notify.success({title:"完成",message:"已完成对局",timeout:1e3}),this.$router.push("/match/".concat(data.match_id,"/"));break;case"receive_message":this.receiveMessage(data);break;case"game_waiting":this.room.started||(this.waiting=1)}},sendMessage:function(data){return null==this.web_socket||1!=this.web_socket.readyState?(this.$notify.warning({title:"失败",message:"服务器尚未连接",timeout:2e3}),!1):(this.web_socket.send(data),!0)},getUserByUsername:function(e,t){for(var r=0;r<e.length;r++){var o=e[r];if(o.username==t)return o}},getGameById:function(e){for(var t=0;t<this.games.length;t++){var r=this.games[t];if(r.id==e)return r}},getEntityById:function(e,t){for(var r=0;r<e.length;r++){var o=e[r];if(o.id==t)return o}},getCodeById:function(e,t){for(var r=0;r<e.length;r++){var code=e[r];if(code.id==t)return code}},loadStatus:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o,n,c,l,d,i,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r in!e.room.started&&data.game_status&&(e.waiting=0),e.room={id:e.$route.params.id,started:data.game_status,host:e.getUserByUsername(data.users,data.host),game:e.getGameById(data.game),users:data.users,players:[],configs:data.configs},e.room_game_id=e.room.game.id,!1===e.room.game.support_online_game&&(e.is_web_player=!1),e.configs={},data.configs)data.configs.hasOwnProperty(r)&&e.$set(e.configs,r,data.configs[r].value);for(o=0;o<e.room.configs.capacity.value;o++)e.room.players.push(null);for(n=0;n<data.players.length;n++)c=data.players[n],(l={}).is_human="human"===c.type,l.is_ready=c.ready,l.token=c.token,l.user=l.is_human?e.getUserByUsername(data.users,c.user):c.user,l.entity=c.ai,e.$set(e.room.players,c.seat,l);if(e.play_web_player=null!==e.player_me&e.is_web_player,!e.room.started&&data.game_status){for(d=[],i=0;i<e.room.players.length;i++)(m=e.room.players[i]).is_human?d.push(m.user.username):d.push(m.user.username+" 的 "+m.entity.name+"("+m.entity.code.version+")");e.iframePostMessage({message:"load_players",players:d})}e.$route.query.ai_token&&!e.ai_auto_seated&&(e.ai_auto_seated=!0,e.code_selector.flag=!0,e.code_selector.token=e.$route.query.ai_token,e.code_selector.seat=e.$route.query.seat?e.$route.query.seat:Math.floor(Math.random()*e.room.configs.capacity.value),e.sendMessage(JSON.stringify({type:"ready_human",user:e.$auth.$state.user.username,seat:e.code_selector.seat})),""!==e.playersrc&&e.ready(),e.$axios.get("/api/codes/".concat(e.code_selector.token,"/")).then((function(t){if("编译成功"===t.data.compile_status){for(var r=0;r<e.room.configs.capacity.value;r++)r!==e.code_selector.seat&&e.sendMessage(JSON.stringify({type:"ready_ai",seat:r,user:t.data.user,ai:{id:t.data.entity.id,name:t.data.entity.name,language:t.data.entity.language,code:{id:e.code_selector.token,version:t.data.version,compile_status:t.data.compile_status}}}));e.code_selector.open=!1}else e.$notify.warning({title:"失败",message:"该AI尚未通过编译",timeout:2e3})})));case 11:case"end":return t.stop()}}),t)})))()},joinSeat:function(e){this.room.started||this.sendMessage(JSON.stringify({type:"ready_human",user:this.$auth.$state.user.username,seat:e}))},quitSeat:function(e){this.room.started||(this.cancelReady(),this.sendMessage(JSON.stringify({type:this.room.players[e].is_human?"cancel_human":"cancel_ai",seat:e})))},saveGameConfigs:function(){this.room.started||this.sendMessage(JSON.stringify({type:"edit_game_configs",configs:this.configs}))},initCodeSelector:function(e){if(!this.room.started){var t=this.room.players[e-1];t&&t.is_human||(this.code_selector.seat=e,t?t.user.id==this.$auth.$state.user.id?(this.code_selector.entity=t.entity.id,this.code_selector.token=null):(this.code_selector.entity=null,this.code_selector.token=t.entity.code.id):this.code_selector.open=!0,this.code_selector.open=!0)}},selectCode:function(){var e=this;if(this.code_selector.flag)this.$axios.get("/api/codes/".concat(this.code_selector.token,"/")).then((function(t){"编译成功"===t.data.compile_status?(e.sendMessage(JSON.stringify({type:"ready_ai",seat:e.code_selector.seat-1,user:t.data.user,ai:{id:t.data.entity.id,name:t.data.entity.name,language:t.data.entity.language,code:{id:e.code_selector.token,version:t.data.version,compile_status:t.data.compile_status}}})),e.code_selector.open=!1):e.$notify.warning({title:"失败",message:"该AI尚未通过编译",timeout:2e3})}));else{if(!this.code_selector_entity)return void this.$notify.warning({title:"失败",message:"请选择完整的AI版本",timeout:2e3});this.sendMessage(JSON.stringify({type:"ready_ai",seat:this.code_selector.seat-1,user:this.$auth.$state.user,ai:this.code_selector_entity})),this.code_selector.open=!1}},startGame:function(){this.room.started||this.sendMessage(JSON.stringify({type:"start"}))},postMessage:function(){this.chat.message&&(this.sendMessage(JSON.stringify({type:"send_message",user:this.$auth.$state.user.username,message:this.chat.message})),this.chat.message="")},receiveMessage:function(data){this.chat.messages+="[".concat(data.user,"]: ").concat(data.message,"\n")},getMyEntities:function(e){var t=this;this.$axios.get("/api/users/".concat(this.$auth.$state.user.username,"/games/").concat(e,"/entities/")).then(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.my_entities=r.data.entities,t.code_selector.entity_options=[],o=regeneratorRuntime.mark((function e(r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.my_entities[r],e.next=3,t.$axios.get("/api/entities/".concat(o.id,"/codes/")).then((function(e){t.my_entities[r].codes=e.data}));case 3:t.code_selector.entity_options.push({value:o.id,text:o.name});case 4:case"end":return e.stop()}}),e)})),n=0;case 4:if(!(n<t.my_entities.length)){e.next=9;break}return e.delegateYield(o(n),"t0",6);case 6:n++,e.next=4;break;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getMyEntity:function(e){for(var t=0;t<this.my_entities.length;t++)if(this.my_entities[t].id==e)return this.my_entities[t]},getMyCode:function(e,t){for(var r=0;r<e.codes.length;r++)if(e.codes[r].id==t)return e.codes[r]},iframePostMessage:function(data){!1!==this.iframe.initted&&this.game_player.contentWindow.postMessage(data,"*")},iframeReceiveMessage:function(e){"resized"==e.data.message&&(this.iframe.height=e.data.height+30)},ready:function(){var e=this;this.game_player.onload=function(){e.$set(e.iframe,"initted",!0),e.iframe.height=600,e.iframePostMessage({message:"init_player_player",token:e.player_me.token})},this.$set(this.iframe,"src",this.playersrc)},cancelReady:function(){this.$set(this.iframe,"initted",!1),this.game_player.onload=function(){},this.$set(this.iframe,"src","")}}},m=(r(873),r(7)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.room?r("div",[r("sui-breadcrumb",[r("sui-breadcrumb-section",[r("nuxt-link",{attrs:{to:"/rooms"}},[e._v("房间")])],1),e._v(" "),r("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),e._v(" "),r("sui-breadcrumb-section",{attrs:{active:""}},[e._v(e._s(e.room.host.username)+"的房间")])],1),e._v(" "),r("sui-grid",{attrs:{stackable:""}},[r("sui-grid-row",[r("sui-grid-column",[r("sui-header",{tag:"h1"},[e._v(e._s(e.room.host.username)+"的房间")])],1)],1),e._v(" "),r("sui-grid-row",[r("sui-grid-column",{attrs:{width:12}},[r("sui-segment",{staticStyle:{padding:"0"},style:e.room.started?"":"display: none !important;"},[e.play_web_player&&e.room.game.support_online_game||!e.play_web_player&&e.room.game.allow_watch?r("sui-button",{style:"position: fixed; right: 0;"+(e.iframe.fullscreen?"":" left: 0; margin: auto;")+" top: 0; z-index: 10001; border-top-left-radius: 0; border-top-right-radius: 0;",attrs:{size:"tiny"},on:{click:function(t){t.preventDefault(),e.iframe.fullscreen=!e.iframe.fullscreen}}},[e.iframe.fullscreen?r("span",[e._v("退出全屏")]):r("span",[e._v("全屏模式")])]):e._e(),e._v(" "),r("iframe",{directives:[{name:"show",rawName:"v-show",value:e.play_web_player&&e.room.game.support_online_game||!e.play_web_player&&e.room.game.allow_watch,expression:"(play_web_player && room.game.support_online_game) || (!play_web_player && room.game.allow_watch)"}],ref:"game-player",style:e.play_web_player&&!e.room.game.support_online_game||!e.play_web_player&&!e.room.game.allow_watch?"":e.iframe.fullscreen?"width: 100%; height: 100%; border: 0; position: fixed; left: 0; top: 0; z-index: 10000;":"width: 100%; height: "+e.iframe.height+"px; border: 0;",attrs:{srcdoc:e.iframe.src}}),e._v(" "),e.play_web_player&&!e.room.game.support_online_game||!e.play_web_player&&!e.room.game.allow_watch?r("sui-container",{staticClass:"f sa",staticStyle:{height:"200px"},attrs:{inverted:"",active:""}},[r("sui-dimmer",{attrs:{active:"",inverted:""}},[r("sui-loader",{attrs:{content:"游戏正在进行中，暂不支持网页"+(e.play_web_player?"游玩":"观战")}})],1)],1):e._e()],1),e._v(" "),r("sui-table",{style:e.room.started?"":"margin-top: 0;"},[r("sui-table-header",[r("sui-table-row",[r("sui-table-header-cell",[e._v("当前房间内用户")])],1)],1),e._v(" "),r("sui-table-body",[r("sui-table-row",[r("sui-table-cell",[r("transition-group",{staticClass:"f w",attrs:{tag:"div",name:"slide"}},e._l(e.room.users,(function(t){return r("div",{key:t.id,staticStyle:{"margin-right":"1em"}},[r("sui-image",{staticStyle:{"margin-right":"0.5em"},attrs:{avatar:"",src:"https://sdn.geekzu.org/avatar/"+t.email_md5+"?s=1000&d=mm"}}),e._v(" "),r("nuxt-link",{attrs:{to:"/user/"+t.username}},[e._v("\n                                            "+e._s(t.username)+"\n                                        ")])],1)})),0)],1)],1)],1)],1),e._v(" "),e.room.started?e._e():r("div",{staticClass:"f w",staticStyle:{margin:"-1em",position:"relative"}},[e._l(e.room.players,(function(t,o){return r("div",{key:o,staticClass:"g",staticStyle:{width:"200px","min-height":"150px",margin:"1em"}},[t?r("sui-card",{staticStyle:{width:"100%",height:"100%"}},[r("sui-button",{staticStyle:{"font-size":"x-small"},attrs:{attached:"top",color:t.is_human?"teal":"remote"===t.entity.language?"brown":"violet"}},[t.is_human?r("span",[e._v("人类")]):"remote"==t.entity.language?r("span",[e._v("远程AI")]):r("span",[e._v("A I")])]),e._v(" "),r("sui-card-content",{staticClass:"f c sb",staticStyle:{position:"relative"}},[r("div",{staticClass:"f ce"},[r("sui-image",{staticStyle:{"margin-right":"1em"},attrs:{avatar:"",size:"massive",src:"https://sdn.geekzu.org/avatar/"+t.user.email_md5+"?s=1000&d=mm"}}),e._v(" "),r("div",{staticClass:"f c sb ce g"},[r("div",{staticClass:"f ce"},[r("nuxt-link",{staticStyle:{"font-size":"large"},attrs:{to:"/user/"+t.user.username}},[e._v(e._s(t.user.username))])],1),e._v(" "),null!=t.user.name||null!=t.user.school||null!=t.user.department?r("div",{staticClass:"f w sb",staticStyle:{color:"grey",width:"100%","margin-top":"6px"}},[t.user.name?r("div",[e._v("\n                                                "+e._s(t.user.name)+"\n                                            ")]):e._e(),e._v(" "),t.user.school?r("div",[e._v("\n                                                "+e._s(t.user.school)+"\n                                            ")]):e._e(),e._v(" "),t.user.department?r("div",[e._v("\n                                                "+e._s(t.user.department)+"\n                                            ")]):e._e()]):e._e()]),e._v(" "),e.is_host||!t.is_human||t.user.id==e.$auth.$state.user.id?r("div",{staticStyle:{height:"100%"}},[r("sui-icon",{staticClass:"clickable",staticStyle:{"margin-right":"0",position:"absolute",top:"1rem",right:"1rem"},attrs:{name:"x",size:"small",color:"violet"},on:{click:function(t){return t.preventDefault(),e.quitSeat(o)}}})],1):e._e()],1),e._v(" "),t.is_human?r("div",{staticStyle:{"text-align":"center","margin-top":"0.6rem"}},[t.user.id==e.$auth.$state.user.id?r("div",[e.is_web_player?e._e():r("sui-label",{tag:"a",attrs:{color:"olive"},on:{click:function(r){return r.preventDefault(),e.haveALook("将 token 输入到本地播放器中，即可连接","",t.token)}}},[e._v("查看token")]),e._v(" "),r("sui-label",{tag:"a",attrs:{icon:"exchange"},on:{click:function(r){r.preventDefault(),(e.is_web_player||!t.is_ready&&e.room.game.support_online_game)&&(e.is_web_player=!e.is_web_player,e.cancelReady())}}},[e.is_web_player?r("span",[e._v("网页游玩")]):r("span",[e._v("本地游玩")])])],1):r("sui-label",{attrs:{color:"olive"}},[e._v("人类玩家")])],1):r("div",{staticStyle:{"text-align":"center","margin-top":"0.6rem"}},[r("sui-label",{tag:"a",attrs:{color:"blue"},on:{click:function(t){return t.preventDefault(),e.initCodeSelector(o+1)}}},[e._v("\n                                        "+e._s(t.entity.name)+"\n                                        "),r("sui-label-detail",[e._v(e._s(t.entity.code.version))])],1)],1)]),e._v(" "),r("sui-button",{staticStyle:{"font-size":"small"},attrs:{attached:"bottom",disabled:!1===t.is_human||t.user.id!==e.$auth.$state.user.id||""===e.playersrc||!1===e.is_web_player,color:t.is_human&&t.user.id==e.$auth.$state.user.id?t.is_ready?"green":"yellow":void 0},on:{click:function(r){r.preventDefault(),t.is_ready?e.cancelReady():e.ready()}}},[t.user.id!==e.$auth.$state.user.id||e.is_web_player?r("span",[r("span",{directives:[{name:"show",rawName:"v-show",value:t.is_ready,expression:"player.is_ready"}]},[e._v("已")]),e._v("准备 ")]):r("span",[t.is_ready?r("span",[e._v("已连接")]):r("span",[e._v("等待连接")])])])],1):r("sui-card",{staticStyle:{width:"100%",height:"100%"}},[r("div",{staticClass:"ui active inverted dimmer"},[r("sui-button-group",[r("sui-button",{attrs:{basic:"",color:"grey"},on:{click:function(t){return t.preventDefault(),e.initCodeSelector(o+1)}}},[e._v("添加AI")]),e._v(" "),r("sui-button-or"),e._v(" "),null!==e.player_me?r("sui-button",{attrs:{basic:""}},[e._v("等待玩家")]):r("sui-button",{attrs:{basic:""},on:{click:function(t){return t.preventDefault(),e.joinSeat(o)}}},[e._v("加入游戏")])],1)],1)])],1)})),e._v(" "),r("div",{staticClass:"g",staticStyle:{width:"calc(200px + 2em)"}}),e._v(" "),r("div",{staticClass:"g",staticStyle:{width:"calc(200px + 2em)"}})],2),e._v(" "),r("sui-table",{attrs:{hidden:""}},[r("sui-table-header",[r("sui-table-row",[r("sui-table-header-cell",[e._v("聊天室")])],1)],1),e._v(" "),r("sui-table-body",[r("sui-table-row",[r("sui-table-cell",[r("sui-form",[r("sui-form-field",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.chat.messages,expression:"chat.messages"}],attrs:{rows:"10",readonly:""},domProps:{value:e.chat.messages},on:{input:function(t){t.target.composing||e.$set(e.chat,"messages",t.target.value)}}})]),e._v(" "),r("sui-form-field",{staticClass:"f sb"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.chat.message,expression:"chat.message"}],domProps:{value:e.chat.message},on:{change:function(t){return t.preventDefault(),e.postMessage()},input:function(t){t.target.composing||e.$set(e.chat,"message",t.target.value)}}}),e._v(" "),r("sui-button",{staticStyle:{"margin-left":"1em","margin-right":"0",width:"10em"},attrs:{color:"blue",icon:"paper plane"},on:{click:function(t){return t.preventDefault(),e.postMessage()}}},[e._v("发送消息")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),r("sui-grid-column",{attrs:{width:4}},[r("sui-message",{class:"f sa",staticStyle:{"margin-bottom":"0","border-bottom-left-radius":"0","border-bottom-right-radius":"0"},attrs:{size:"mini"}},[e.web_socket&&1==e.web_socket.readyState?r("div",[e._v("已连接服务器")]):e.web_socket&&0==e.web_socket.readyState?r("div",[e._v("正在连接服务器")]):r("div",[e._v("未连接服务器")])]),e._v(" "),r("sui-progress",{attrs:{attached:"",state:"active",percent:"100",color:e.web_socket?1==e.web_socket.readyState?"green":0==e.web_socket.readyState?"yellow":"grey":"grey"}}),e._v(" "),e.room.started?r("div",{staticClass:"f c"},e._l(e.room.players,(function(t,o){return r("div",{key:o,staticStyle:{width:"100%","margin-top":"1em"}},[t?r("sui-card",{staticStyle:{width:"100%"}},[r("sui-button",{staticStyle:{"font-size":"xx-small"},attrs:{attached:"top",color:t.is_human?"teal":"violet"}},[t.is_human?r("span",[e._v("人类")]):r("span",[e._v("A I")])]),e._v(" "),r("sui-card-content",{staticClass:"f c sb"},[r("div",{staticClass:"f ce",staticStyle:{"margin-bottom":"1em"}},[r("sui-image",{staticStyle:{"margin-right":"1em"},attrs:{avatar:"",size:"mini",src:"https://sdn.geekzu.org/avatar/"+t.user.email_md5+"?s=1000&d=mm"}}),e._v(" "),r("div",{staticClass:"f c sb ce g"},[r("div",{staticClass:"f ce"},[r("nuxt-link",{staticStyle:{"font-size":"large"},attrs:{to:"/user/"+t.user.username}},[e._v(e._s(t.user.username))])],1),e._v(" "),null!=t.user.name||null!=t.user.school||null!=t.user.department?r("div",{staticClass:"f w sa",staticStyle:{color:"grey",width:"100%"}},[t.user.name?r("div",[e._v("\n                                                "+e._s(t.user.name)+"\n                                            ")]):e._e(),e._v(" "),t.user.school?r("div",[e._v("\n                                                "+e._s(t.user.school)+"\n                                            ")]):e._e(),e._v(" "),t.user.department?r("div",[e._v("\n                                                "+e._s(t.user.department)+"\n                                            ")]):e._e()]):e._e()])],1),e._v(" "),t.is_human?r("div",{staticStyle:{"text-align":"center","margin-top":"0.6rem"}},[t.user.id==e.$auth.$state.user.id&&!1===e.is_web_player?r("sui-label",{tag:"a",attrs:{color:"olive"},on:{click:function(t){return t.preventDefault(),e.haveALook("将 token 输入到播放器中，即可连接","token: ","wss://"+e.$route.query.server+"/"+e.room.id+"/"+e.$auth.$state.user.username+"/"+o)}}},[e._v("查看token")]):r("sui-label",{attrs:{color:"olive"}},[e._v("人类玩家")])],1):r("div",{staticStyle:{"text-align":"center","margin-top":"0.6rem"}},[r("sui-label",{attrs:{color:"blue"}},[e._v("\n                                        "+e._s(t.entity.name)+"\n                                        "),r("sui-label-detail",[e._v(e._s(t.entity.code.version))])],1)],1)])],1):r("sui-card",{staticStyle:{width:"100%",height:"100px"}},[r("div",{staticClass:"ui active inverted dimmer"},[r("sui-button",{attrs:{basic:""}},[e._v("空位")])],1)])],1)})),0):r("sui-message",{attrs:{info:""}},[e._v("\n                    欢迎来到房间系统！\n                    "),r("br"),e._v("在这里你可以与好友对战，或者是测试自己的AI。点击自己 "),r("b",[e._v("上方的按钮")]),e._v("可以切换 "),r("b",[e._v("自己游玩")]),e._v("或者是 "),r("b",[e._v("使用AI")]),e._v("。\n                    "),r("br"),e._v(" "),r("b",[e._v("玩家AI")]),e._v("表示的是这个位置是另一个选择使用AI的用户。而 "),r("b",[e._v("AI")]),e._v("表示的是这个位置是主机主动添加的AI。\n                    "),r("br"),e._v(" "),r("br"),e._v("主机点击房间信息可以修改房间信息。 "),r("br"),e._v("当所有玩家准备好后，主机点击开始游戏即可开始。\n                ")]),e._v(" "),r("sui-table",{attrs:{color:"black"}},[r("sui-table-header",[r("sui-table-row",[r("sui-table-header-cell",[e._v("房间信息")])],1)],1),e._v(" "),r("sui-table-body",[r("sui-table-row",[r("sui-table-cell",{class:"f c"+(e.is_host?" clickable":"")},[r("div",[r("sui-label",{staticStyle:{"margin-right":"1em"}},[e._v("房 间 号")]),e._v("\n                                    "+e._s(e.room.id)+"\n                                ")],1),e._v(" "),r("div",{staticStyle:{"margin-top":"0.3em"}},[r("sui-label",{staticStyle:{"margin-right":"1em"}},[e._v("房  主")]),e._v("\n                                    "+e._s(e.room.host.username)+"\n                                ")],1),e._v(" "),r("div",{staticStyle:{"margin-top":"0.3em"}},[r("sui-label",{staticStyle:{"margin-right":"1em"}},[e._v("游  戏")]),e._v("\n                                    "+e._s(e.room.game.alias)+"\n                                ")],1)])],1)],1)],1),e._v(" "),r("sui-table",{attrs:{color:"brown"}},[r("sui-table-header",[r("sui-table-row",[r("sui-table-header-cell",{staticClass:"f sb ce"},[r("div",[e._v("游戏配置")]),e._v(" "),e.is_host?r("sui-button",{staticStyle:{"margin-right":"0"},attrs:{size:"mini",disabled:e.room.started},on:{click:function(t){return t.preventDefault(),e.saveGameConfigs()}}},[e._v("保存配置")]):e._e()],1)],1)],1),e._v(" "),r("sui-table-body",[r("sui-table-row",[r("sui-table-cell",[r("sui-form",e._l(e.room.configs,(function(t,o){return r("sui-form-field",{key:o},[r("label",[e._v("\n                                            "+e._s(t.name)+"\n                                            "),t.hint?r("span",{staticStyle:{color:"grey"}},[e._v("("+e._s(t.hint)+")")]):e._e()]),e._v(" "),"capacity"==o&&e.is_host&&!e.room.started?r("sui-dropdown",{attrs:{selection:"",fluid:"",options:e.room.game.capacity_options},model:{value:e.configs[o],callback:function(t){e.$set(e.configs,o,t)},expression:"configs[key]"}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.configs[o],expression:"configs[key]"}],attrs:{disabled:!e.is_host||e.room.started},domProps:{value:e.configs[o]},on:{input:function(t){t.target.composing||e.$set(e.configs,o,t.target.value)}}})],1)})),1)],1)],1)],1)],1),e._v(" "),e.is_host?r("sui-button",{attrs:{fluid:"",color:"green",disabled:!e.can_start||e.room.started},on:{click:function(t){return t.preventDefault(),e.startGame()}}},[e.can_start?r("span",[e._v("开始游戏")]):e.room.started?r("span",[e._v("游戏正在进行...")]):r("span",[e._v("有玩家尚未准备好")])]):r("sui-button",{attrs:{fluid:"",color:"blue",disabled:""}},[e.room.started?r("span",[e._v("游戏正在进行...")]):r("span",[e._v("等待开始")])])],1)],1)],1),e._v(" "),r("sui-modal",{attrs:{size:"tiny"},model:{value:e.code_selector.open,callback:function(t){e.$set(e.code_selector,"open",t)},expression:"code_selector.open"}},[r("sui-modal-header",[r("div",{staticClass:"f sb ce w"},[r("div",[e._v("选择"+e._s(e.code_selector.seat)+"号位置的AI")]),e._v(" "),r("sui-button",{staticStyle:{"margin-right":"0"},attrs:{size:"mini",color:"blue"},on:{click:function(t){t.preventDefault(),e.code_selector.flag=!e.code_selector.flag}}},[e.code_selector.flag?r("span",[e._v("选择自己的AI加入")]):r("span",[e._v("使用AI的token加入")])])],1)]),e._v(" "),r("sui-modal-content",[e.code_selector.flag?r("sui-form",[r("sui-form-fields",[r("sui-form-field",{attrs:{width:16}},[r("label",[e._v("AI token")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.code_selector.token,expression:"code_selector.token"}],domProps:{value:e.code_selector.token},on:{input:function(t){t.target.composing||e.$set(e.code_selector,"token",t.target.value)}}})])],1)],1):r("sui-form",[r("sui-form-fields",[r("sui-form-field",{attrs:{width:8}},[r("label",[e._v("AI")]),e._v(" "),r("sui-dropdown",{attrs:{selection:"",options:e.code_selector.entity_options,placeholder:"选择一个AI",fluid:""},model:{value:e.code_selector.entity,callback:function(t){e.$set(e.code_selector,"entity",t)},expression:"code_selector.entity"}})],1),e._v(" "),r("sui-form-field",{attrs:{width:8}},[r("label",[e._v("版本")]),e._v(" "),r("sui-dropdown",{attrs:{selection:"",options:e.code_selector.code_options,placeholder:"选择一个版本",fluid:""},model:{value:e.code_selector.code,callback:function(t){e.$set(e.code_selector,"code",t)},expression:"code_selector.code"}})],1)],1)],1)],1),e._v(" "),r("sui-modal-actions",[r("sui-button",{attrs:{color:"green"},on:{click:function(t){return t.preventDefault(),e.selectCode()}}},[e._v("确定")])],1)],1),e._v(" "),r("sui-modal",{attrs:{size:"mini"},model:{value:e.room_editor.open,callback:function(t){e.$set(e.room_editor,"open",t)},expression:"room_editor.open"}},[r("sui-modal-header",[e._v("修改房间信息")]),e._v(" "),r("sui-modal-content",[r("sui-form",[r("sui-form-field",[r("label",[e._v("房主")]),e._v(" "),r("sui-dropdown",{attrs:{options:e.user_options,selection:""},model:{value:e.room_editor.host,callback:function(t){e.$set(e.room_editor,"host",t)},expression:"room_editor.host"}})],1),e._v(" "),r("sui-form-field",[r("label",[e._v("游戏")]),e._v(" "),r("sui-dropdown",{attrs:{options:e.game_options,selection:""},model:{value:e.room_editor.game,callback:function(t){e.$set(e.room_editor,"game",t)},expression:"room_editor.game"}})],1),e._v(" "),r("sui-form-field",[r("label",{staticClass:"f ce",staticStyle:{display:"flex !important"}},[r("span",{staticStyle:{"margin-right":"1em"}},[e._v("是否私密")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.room_editor.is_private,expression:"room_editor.is_private"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room_editor.is_private)?e._i(e.room_editor.is_private,null)>-1:e.room_editor.is_private},on:{change:function(t){var r=e.room_editor.is_private,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&e.$set(e.room_editor,"is_private",r.concat([null])):c>-1&&e.$set(e.room_editor,"is_private",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(e.room_editor,"is_private",n)}}})]),e._v(" "),r("transition",{attrs:{name:"slide"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.room_editor.is_private,expression:"room_editor.is_private"}]},[r("input",{attrs:{placeholder:"输入房间密码"}})])])],1)],1)],1),e._v(" "),r("sui-modal-actions",[r("sui-button",{attrs:{color:"blue"}},[e._v("确定修改")])],1)],1),e._v(" "),r("sui-modal",{attrs:{size:"mini"},model:{value:e.look.open,callback:function(t){e.$set(e.look,"open",t)},expression:"look.open"}},[r("sui-modal-content",{staticClass:"f c"},[e.look.message?r("sui-message",{attrs:{info:""}},[e._v(e._s(e.look.message))]):e._e(),e._v(" "),r("sui-segment",{staticClass:"f sb"},[r("div",[r("b",[e._v(e._s(e.look.title))])]),e._v(" "),r("div",{staticStyle:{"word-break":"break-word","font-family":"monospace"}},[e._v("\n                    "+e._s(e.look.content)+"\n                ")])])],1)],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.server.message?r("sui-dimmer",{style:e.iframe.fullscreen?"z-index: 2000; position: fixed;":"z-index: 20000; position: fixed;",attrs:{active:"",inverted:""}},[r("sui-loader",{attrs:{content:e.server.message}})],1):e.waiting?r("sui-dimmer",{style:e.iframe.fullscreen?"z-index: 2000; position: fixed;":"z-index: 20000; position: fixed;",attrs:{active:"",inverted:""}},[r("sui-loader",{attrs:{content:"请稍等！由于评测负荷较大，可能需要在评测队列中等待一段时间！"}})],1):e._e()],1)],1):r("div",{staticStyle:{width:"100%",height:"100%"}},[r("sui-dimmer",{attrs:{active:"",inverted:""}},[r("sui-loader",{attrs:{content:"正在加载房间信息"}})],1)],1)}),[],!1,null,"3938c143",null);t.default=component.exports}}]);
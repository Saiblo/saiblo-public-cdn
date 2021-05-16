(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{847:function(e,t,r){var content=r(866);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("3f0182e0",content,!0,{sourceMap:!1})},865:function(e,t,r){"use strict";r(847)},866:function(e,t,r){var o=r(53)(!1);o.push([e.i,".room_list-enter-active[data-v-8f83ca8e],.room_list-leave-active[data-v-8f83ca8e]{transition:all .5s}.room_list-enter[data-v-8f83ca8e],.room_list-leave-to[data-v-8f83ca8e]{opacity:0;transform:translateX(30px)}",""]),e.exports=o},901:function(e,t,r){"use strict";r.r(t);var o=r(6),n=(r(28),r(18),r(17),r(13),r(76),{head:function(){return{title:"房间列表 - Saiblo"}},data:function(){return{web_socket:null,server:{value:null,open:!1,timeout:null,closing:!1},rooms:[],room_creator:{open:!1,is_loading:!1,is_ok:!1,room:{game:2,capacity:null,is_private:!1,password:""}},room_selector_id:null}},computed:{filtered_rooms:function(){var e=this;return-1==this.game.id?this.rooms:this.rooms.filter((function(t){return t.game.id==e.game.id}))},room_creator_capacity_options:function(){var e=this.getGameById(this.room_creator.room.game);return e&&e.capacity_options.length&&e.capacity_options[0].value,void 0===e?[]:e.capacity_options}},watch:{"server.value":function(e){this.initWebSocket(),this.game.id=-1,this.game.options=[{value:-1,text:"所有游戏"}];for(var i=0;i<this.servers[e].games.length;i++)for(var t=this.servers[e].games[i],r=0;r<this.games.length;r++)if(t===this.games[r].name){this.game.options.push({value:this.games[r].id,text:"".concat(this.games[r].alias,"(").concat(this.games[r].name,")")}),this.room_creator.room.game=this.games[r].id;break}},"room_creator.room.game":function(e){this.room_creator.room.capacity=this.getGameById(e).capacity_options[0].value}},asyncData:function(e){var t={id:-1,options:[{value:-1,text:"所有游戏"}]},r={value:null,options:[]};return e.app.$axios.get("/api/games/").then((function(o){return o.data.forEach((function(element){element.capacity_options=[];for(var e=0;e<element.player_number.length;e++){var t=element.player_number[e];element.capacity_options.push({value:t,text:"".concat(t)})}})),e.app.$axios.get("/api/servers/").then((function(e){for(var n=0;n<e.data.length;n++){for(var element=e.data[n],c=element.description+"(支持",i=0;i<element.games.length;i++)c+=" ".concat(element.games[i]);c+=")",r.options.push({value:n,text:c,label:{color:"green",empty:!0,circular:!0}})}return{game:t,games:o.data,server:r,servers:e.data}}))}))},mounted:function(){this.initWebSocket(),this.server.value=this.servers.length?0:null},beforeDestroy:function(){this.clearWebSocket()},methods:{clearWebSocket:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.server.timeout&&(clearTimeout(e.server.timeout),e.server.timeout=null),null===e.web_socket){t.next=11;break}return e.server.open=!1,e.server.closing=!0,t.next=6,e.web_socket.close();case 6:if(!e.server.closing){t.next=11;break}return t.next=9,new Promise((function(e){return setTimeout(e,10)}));case 9:t.next=6;break;case 11:case"end":return t.stop()}}),t)})))()},initWebSocket:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.server.value){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.clearWebSocket();case 4:e.server.open=!0,e.room_creator.is_loading=!1,e.web_socket=new WebSocket("wss://".concat(e.servers[e.server.value].address)),e.web_socket.onopen=e.webSocketOnOpen,e.web_socket.onmessage=e.webSocketOnMessage,e.web_socket.onclose=function(){e.web_socket=null,e.server.open&&(e.server.timeout=setTimeout((function(){e.initWebSocket()}),3e3)),e.server.closing=!1};case 10:case"end":return t.stop()}}),t)})))()},webSocketOnOpen:function(){this.sendMessage(JSON.stringify({type:"get_room_list"}))},webSocketOnMessage:function(e){var data=JSON.parse(e.data);switch(data.type){case"push_room_list":this.loadRoomList(data);break;case"room_created":this.joinRoom(Number(data.room),!0)}},sendMessage:function(data){return null===this.web_socket||1!==this.web_socket.readyState?(this.$notify.warning({title:"失败",message:"服务器尚未连接",timeout:2e3}),!1):(this.web_socket.send(data),!0)},getGameById:function(e){for(var t=0;t<this.games.length;t++){var r=this.games[t];if(r.id==e)return r}},loadRoomList:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e.rooms=[],r=0;r<data.room.length;r++)o=data.room[r],e.rooms.push({id:o.id,is_private:o.private,game:e.getGameById(o.game),players:o.users});case 2:case"end":return t.stop()}}),t)})))()},createRoom:function(){this.room_creator.room.capacity?this.sendMessage(JSON.stringify({type:"create_room",user:this.$auth.$state.user,game:this.getGameById(this.room_creator.room.game),capacity:this.room_creator.room.capacity,private:this.room_creator.room.is_private}))&&(this.room_creator.is_loading=!0):this.$notify.warning({title:"失败",message:"人数不能为空",timeout:2e3})},joinRoom:function(e,t){if(t)this.$router.push("/room/".concat(e,"?server=").concat(this.servers[this.server.value].address));else{for(var r=0;r<this.rooms.length;r++){if(this.rooms[r].id==e)return void this.$router.push("/room/".concat(e,"?server=").concat(this.servers[this.server.value].address))}this.$notify.error({title:"失败",message:"没有这个房间",timeout:3e3})}}}}),c=(r(865),r(7)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("sui-grid",{staticStyle:{"margin-left":"-1em !important","margin-right":"-1em !important"},attrs:{stackable:""}},[r("sui-grid-row",[r("sui-grid-column",[r("sui-header",{tag:"h1"},[e._v("房间列表")])],1)],1),e._v(" "),r("sui-grid-row",{staticClass:"f",staticStyle:{"flex-direction":"row-reverse"}},[r("sui-grid-column",{attrs:{width:4}},[r("sui-form",[r("sui-form-field",[r("sui-message",{class:"f sa",staticStyle:{"margin-bottom":"0","border-bottom-left-radius":"0","border-bottom-right-radius":"0"},attrs:{size:"mini"}},[e.web_socket&&1==e.web_socket.readyState?r("div",[e._v("已连接服务器")]):e.web_socket&&0==e.web_socket.readyState?r("div",[e._v("正在连接服务器")]):r("div",[e._v("未连接服务器")])]),e._v(" "),r("sui-progress",{attrs:{attached:"",state:"active",percent:"100",color:e.web_socket?1==e.web_socket.readyState?"green":0==e.web_socket.readyState?"yellow":"grey":"grey"}})],1),e._v(" "),r("sui-form-field",[r("sui-dropdown",{attrs:{fluid:"",selection:"",options:e.server.options,placeholder:"服务器"},model:{value:e.server.value,callback:function(t){e.$set(e.server,"value",t)},expression:"server.value"}})],1),e._v(" "),r("sui-form-field",[r("sui-dropdown",{attrs:{fluid:"",selection:"",options:e.game.options,placeholder:"游戏"},model:{value:e.game.id,callback:function(t){e.$set(e.game,"id",t)},expression:"game.id"}})],1),e._v(" "),r("sui-form-field",[r("div",{staticClass:"ui action input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.room_selector_id,expression:"room_selector_id"}],staticStyle:{width:"0"},attrs:{placeholder:"输入房间号"},domProps:{value:e.room_selector_id},on:{input:function(t){t.target.composing||(e.room_selector_id=t.target.value)}}}),e._v(" "),r("sui-button",{attrs:{color:"green",disabled:!e.web_socket||1!=e.web_socket.readyState},on:{click:function(t){return t.preventDefault(),e.joinRoom(e.room_selector_id,!1)}}},[e._v("加入")])],1)]),e._v(" "),r("sui-form-field",[r("sui-button",{attrs:{color:"blue",fluid:"",disabled:null===e.web_socket||1!==e.web_socket.readyState},on:{click:function(t){t.preventDefault(),-1!==e.game.id&&(e.room_creator.room.game=e.game.id),e.room_creator.open=!0}}},[e._v("创建房间")])],1)],1)],1),e._v(" "),r("sui-grid-column",{attrs:{width:12}},[0==e.filtered_rooms.length?r("sui-message",{attrs:{icon:"exclamation",header:"没有找到房间",content:"请创建房间或更改搜索房间号",info:""}}):e._e(),e._v(" "),e.filtered_rooms.length>0?r("sui-table",{attrs:{striped:""}},[r("sui-table-header",[r("sui-table-row",[r("sui-table-header-cell",{attrs:{collapsing:""}}),e._v(" "),r("sui-table-header-cell",{staticStyle:{width:"6em"}},[e._v("游戏")]),e._v(" "),r("sui-table-header-cell",{staticStyle:{width:"5em"}},[e._v("房间号")]),e._v(" "),r("sui-table-header-cell",[e._v("玩家")]),e._v(" "),r("sui-table-header-cell",{staticStyle:{width:"6em"}})],1)],1),e._v(" "),r("transition-group",{attrs:{tag:"sui-table-body",name:"room_list"}},e._l(e.filtered_rooms,(function(t){return r("sui-table-row",{key:t.id},[r("sui-table-cell",[t.is_private?r("sui-icon",{staticStyle:{"margin-right":"-0.8em"},attrs:{name:"lock",color:"grey"}}):e._e()],1),e._v(" "),r("sui-table-cell",[r("nuxt-link",{attrs:{to:"/game/"+t.game.id}},[e._v(e._s(t.game.alias))])],1),e._v(" "),r("sui-table-cell",[e._v(e._s(t.id))]),e._v(" "),r("sui-table-cell",e._l(t.players,(function(e,t){return r("div",{key:t,staticClass:"ib",staticStyle:{"margin-right":"2em"}},[r("sui-image",{staticStyle:{"margin-right":"1em"},attrs:{avatar:"",src:"https://sdn.geekzu.org/avatar/"+e.email_md5+"?s=1000&d=mm"}}),r("player-card",{attrs:{username:e.username}})],1)})),0),e._v(" "),r("sui-table-cell",[r("sui-button",{attrs:{size:"mini",color:"green"},on:{click:function(r){return r.preventDefault(),e.joinRoom(t.id,!1)}}},[e._v("加入")])],1)],1)})),1)],1):e._e()],1)],1)],1),e._v(" "),r("sui-modal",{attrs:{size:"mini"},model:{value:e.room_creator.open,callback:function(t){e.$set(e.room_creator,"open",t)},expression:"room_creator.open"}},[r("sui-modal-header",[e._v("创建房间")]),e._v(" "),r("sui-modal-content",[r("sui-form",[r("sui-form-field",[r("label",[e._v("选择游戏")]),e._v(" "),r("sui-dropdown",{attrs:{placeholder:"选择游戏",selection:"",fuild:"",options:e.game.options.slice(1)},model:{value:e.room_creator.room.game,callback:function(t){e.$set(e.room_creator.room,"game",t)},expression:"room_creator.room.game"}})],1),e._v(" "),r("sui-form-field",[r("label",[e._v("人数")]),e._v(" "),r("sui-dropdown",{attrs:{placeholder:"选择人数",selection:"",fluid:"",options:e.room_creator_capacity_options},model:{value:e.room_creator.room.capacity,callback:function(t){e.$set(e.room_creator.room,"capacity",t)},expression:"room_creator.room.capacity"}})],1),e._v(" "),r("sui-form-field",{attrs:{hidden:""}},[r("label",{staticClass:"f ce"},[r("span",{staticStyle:{"margin-right":"1em"}},[e._v("是否私密")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.room_creator.room.is_private,expression:"room_creator.room.is_private"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.room_creator.room.is_private)?e._i(e.room_creator.room.is_private,null)>-1:e.room_creator.room.is_private},on:{change:function(t){var r=e.room_creator.room.is_private,o=t.target,n=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&e.$set(e.room_creator.room,"is_private",r.concat([null])):c>-1&&e.$set(e.room_creator.room,"is_private",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(e.room_creator.room,"is_private",n)}}})]),e._v(" "),r("transition",{attrs:{name:"slide"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.room_creator.room.is_private,expression:"room_creator.room.is_private"}]},[r("input",{attrs:{placeholder:"输入房间密码",type:"password"}})])])],1)],1)],1),e._v(" "),r("sui-modal-actions",[r("sui-button",{attrs:{color:"blue",loading:e.room_creator.is_loading},on:{click:function(t){return t.preventDefault(),e.createRoom()}}},[e._v("创建")])],1)],1)],1)}),[],!1,null,"8f83ca8e",null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{894:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(28),r(13),{head:function(){return{title:"抽奖 - Saiblo"}},data:function(){return{web_socket:null,server:{open:!1,timeout:null,closing:!1},content:{enabled:!1,data:[]},name:""}},mounted:function(){this.initWebSocket()},methods:{clearWebSocket:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.server.timeout&&(clearTimeout(e.server.timeout),e.server.timeout=null),null===e.web_socket){t.next=11;break}return e.server.open=!1,e.server.closing=!0,t.next=6,e.web_socket.close();case 6:if(!e.server.closing){t.next=11;break}return t.next=9,new Promise((function(e){return setTimeout(e,10)}));case 9:t.next=6;break;case 11:case"end":return t.stop()}}),t)})))()},initWebSocket:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.clearWebSocket();case 2:e.server.open=!0,e.web_socket=new WebSocket("ws://166.111.69.11:8001"),e.web_socket.onmessage=function(t){e.content=JSON.parse(t.data)},e.web_socket.onclose=function(){e.web_socket=null,e.server.open&&(e.server.timeout=setTimeout((function(){e.initWebSocket()}),3e3)),e.server.closing=!1};case 6:case"end":return t.stop()}}),t)})))()}}}),c=r(7),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("sui-grid",{staticStyle:{"margin-left":"-1em !important","margin-right":"-1em !important"},attrs:{stackable:""}},[r("sui-grid-row",[r("sui-grid-column",[r("sui-header",{tag:"h1"},[e._v("抽奖")])],1)],1),e._v(" "),r("sui-grid-row",{staticClass:"f",staticStyle:{"flex-direction":"row-reverse"}},[r("sui-grid-column",{attrs:{width:4}},[r("sui-message",{class:"f sa",staticStyle:{"margin-bottom":"0","border-bottom-left-radius":"0","border-bottom-right-radius":"0"},attrs:{size:"mini"}},[e.web_socket&&1===e.web_socket.readyState?r("div",[e._v("已连接服务器")]):e.web_socket&&0===e.web_socket.readyState?r("div",[e._v("正在连接服务器")]):r("div",[e._v("未连接服务器")])]),e._v(" "),r("sui-progress",{attrs:{attached:"",state:"active",percent:"100",color:e.web_socket?1===e.web_socket.readyState?"green":0===e.web_socket.readyState?"yellow":"grey":"grey"}}),e._v(" "),r("sui-message",{class:"f sa",staticStyle:{"margin-bottom":"0","border-bottom-left-radius":"0","border-bottom-right-radius":"0"},attrs:{size:"mini"}},[e.content.enabled?r("div",[e._v("正在抽奖")]):r("div",[e._v("抽奖尚未开始")])]),e._v(" "),r("sui-progress",{attrs:{attached:"",state:"active",percent:"100",color:e.content.enabled?"green":"grey"}})],1),e._v(" "),r("sui-grid-column",{attrs:{width:12}},[0===e.content.data.length?r("sui-message",{attrs:{icon:"exclamation",header:"奖池空空如也",info:""}}):e._e(),e._v(" "),e.content.data.length>0?r("sui-table",{attrs:{striped:""}},[r("sui-table-header",[r("sui-table-row",[r("sui-table-header-cell",[e._v("姓名")]),e._v(" "),r("sui-table-header-cell",{staticStyle:{width:"6em","text-align":"center"}},[e._v("中奖情况")])],1)],1),e._v(" "),r("transition-group",{attrs:{tag:"sui-table-body",name:"room_list"}},e._l(e.content.data,(function(t){var n=t.user,o=t.lucky;return r("sui-table-row",{key:n},[r("sui-table-cell",[e._v(e._s(n))]),e._v(" "),r("sui-table-cell",[o?r("sui-button",{attrs:{size:"mini",color:"green"}},[e._v("中奖")]):e._e()],1)],1)})),1)],1):e._e(),e._v(" "),r("sui-form",[r("sui-form-field",[r("div",{staticClass:"ui action input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticStyle:{width:"0"},attrs:{placeholder:"请输入真实姓名，以便于兑奖时核验"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("sui-button",{attrs:{color:"green",disabled:0===e.name.length||e.name.length>=20||!e.content.enabled||e.content.data.some((function(t){return t.user===e.name}))},on:{click:function(t){return t.preventDefault(),e.web_socket.send(e.name)}}},[e._v("加入奖池\n                            ")])],1)])],1)],1)],1)],1)],1)}),[],!1,null,"27f3ee97",null);t.default=component.exports}}]);
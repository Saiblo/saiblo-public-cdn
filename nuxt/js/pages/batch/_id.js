(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{889:function(t,e,n){"use strict";n.r(e);n(55),n(17),n(42),n(119),n(29),n(13),n(20),n(35),n(36),n(34);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var o={validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},head:function(){return{title:"批量测试 #".concat(this.batch.id," - Saiblo")}},data:function(){return{batch:{},match_dict:{},web_socket:null}},computed:{matchGroups:function(){var t=this.batch.code.entity,e=this.batch.code.version;return this.batch.matches.map((function(n){var c=0,o=0,l=0,d=!0,m=!0,v=0,code=null,_=null;n[0].info[0].code.entity.name===t&&n[0].info[0].code.version===e?(code=n[0].info[1].code,_=n[0].info[1].user):(code=n[0].info[0].code,_=n[0].info[0].user);var h,f=r(n);try{for(f.s();!(h=f.n()).done;){var y=h.value,w=y.info[0].code.entity.name===t&&y.info[0].code.version===e?0:1;"评测成功"===y.state?(y.info[w].score>y.info[1-w].score?c+=1:y.info[w].score===y.info[1-w].score?l+=1:o+=1,v+=1):m=!1,"准备中"!==y.state&&(d=!1)}}catch(t){f.e(t)}finally{f.f()}return{matches:n,code:code,user:_,win:c,lose:o,tie:l,pending:d,finished_cnt:v,finished:m}}))},statistic:function(){var t,e=0,n=0,c=0,o=0,l=0,d=r(this.matchGroups);try{for(d.s();!(t=d.n()).done;){var m=t.value;e+=m.win,n+=m.lose,c+=m.tie,o+=m.finished_cnt,l+=m.matches.length}}catch(t){d.e(t)}finally{d.f()}return{win:e,lose:n,tie:c,all:l,finished_cnt:o,ratio:0===o?0:e/o}}},asyncData:function(t){return t.$axios.get("/api/batches/".concat(t.route.params.id,"/")).then((function(t){for(var e=t.data,n={},i=0;i<e.matches.length;++i)for(var r=0;r<e.matches[i].length;++r)"评测成功"!==e.matches[i][r].state&&(n[e.matches[i][r].id]=[i,r]);return{batch:e,match_dict:n}}),(function(){t.error({statusCode:404,message:"没有此批量对局"})}))},mounted:function(){this.init_websocket()},beforeDestroy:function(){this.web_socket&&this.web_socket.close()},methods:{init_websocket:function(){var t=this;this.web_socket=new WebSocket(this.$getWSURL("/match?token=".concat(this.$auth.getToken("local")))),this.web_socket.onopen=function(){t.web_socket&&1===t.web_socket.readyState&&t.web_socket.send(JSON.stringify({match_list:Object.keys(t.match_dict)}))},this.web_socket.onmessage=function(e){var data=JSON.parse(e.data);data.id in t.match_dict&&t.$set(t.batch.matches[t.match_dict[data.id][0]],t.match_dict[data.id][1],data)},this.web_socket.onclose=function(){t.web_socket=null}},beautify_time:function(t){return this.$dayjs(t).locale("en").format("YYYY-MM-DD HH:mm:ss")},truncate:function(t,e){return t.length>e?t.substring(0,e)+".":t},getColor:function(t){switch(t){case"OK":return"yellowgreen";case"TLE":return"goldenrod";case"MLE":return"steelblue";case"RE":return"mediumpurple";case"OLE":return"grey";case"EXIT":return"tomato";case"STLE":return"cadetblue"}},downloadReplay:function(t){this.$axios({url:"/api/matches/".concat(t,"/download/"),method:"GET",responseType:"blob"}).then((function(t){var e=window.URL.createObjectURL(new Blob([t.data])),n=document.createElement("a"),r="replay.bin";try{r=(r=t.headers["content-disposition"].match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/g)[0]).substr(10,r.length-11)}catch(t){r="replay.bin"}n.href=e,n.setAttribute("download",r),document.body.appendChild(n),n.click()}))}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sui-breadcrumb",[n("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/games"}},[t._v("游戏")]),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/game/"+t.batch.game.id}},[t._v("\n            "+t._s(t.batch.game.alias)+"\n        ")]),t._v(" "),n("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),t._v(" "),n("sui-breadcrumb-section",{attrs:{active:""}},[t._v("批量测试")])],1),t._v(" "),n("sui-grid",{attrs:{stackable:""}},[n("sui-grid-row",[n("sui-grid-column",[n("sui-header",{tag:"h1"},[t._v("批量测试 #"+t._s(t.batch.id))])],1)],1),t._v(" "),n("sui-grid-row",{attrs:{centered:""}},[n("sui-statistics-group",[n("sui-statistic",{attrs:{"in-group":""}},[n("sui-statistic-value",[t._v(t._s(t.statistic.win))]),t._v(" "),n("sui-statistic-label",[t._v("胜")])],1),t._v(" "),n("sui-statistic",{attrs:{"in-group":""}},[n("sui-statistic-value",[t._v(t._s(t.statistic.lose))]),t._v(" "),n("sui-statistic-label",[t._v("负")])],1),t._v(" "),n("sui-statistic",{attrs:{"in-group":""}},[n("sui-statistic-value",[t._v(t._s(t.statistic.tie))]),t._v(" "),n("sui-statistic-label",[t._v("平")])],1),t._v(" "),n("sui-statistic",{attrs:{"in-group":""}},[n("sui-statistic-value",[t._v(t._s(t.statistic.finished_cnt))]),t._v(" "),n("sui-statistic-label",[t._v("已测评局数")])],1),t._v(" "),n("sui-statistic",{attrs:{"in-group":""}},[n("sui-statistic-value",[t._v(t._s(t.statistic.all))]),t._v(" "),n("sui-statistic-label",[t._v("总局数")])],1),t._v(" "),n("sui-statistic",{attrs:{"in-group":""}},[n("sui-statistic-value",[t._v(t._s(Math.round(100*t.statistic.ratio))+"%")]),t._v(" "),n("sui-statistic-label",[t._v("胜率")])],1)],1)],1),t._v(" "),n("sui-grid-row",{staticStyle:{"padding-bottom":"0px"},attrs:{centered:""}},[n("b",[t._v(" 被测试 AI ")])]),t._v(" "),n("sui-grid-row",{staticStyle:{"padding-top":"0.2em"},attrs:{centered:""}},[n("sui-label",{tag:"a",staticStyle:{margin:"0.25em",position:"relative"},attrs:{basic:"",color:null,href:"/user/"+t.batch.user.username}},[n("div",{staticClass:"f ce",staticStyle:{position:"relative"}},[n("sui-image",{staticStyle:{margin:"0 0.5em 0 0"},attrs:{avatar:"",size:"mini",src:"https://cdn.v2ex.com/gravatar/"+t.batch.user.email_md5+"?s=1000&d=mm"}}),t._v(" "),n("div",{staticClass:"f c ce"},[n("player-card",{attrs:{username:t.batch.user.username}}),t._v(" "),n("sui-label",{attrs:{color:"blue",size:"mini"}},[t._v("\n                            "+t._s(t.truncate(t.batch.code.entity,5))+"\n                            "),n("sui-label-detail",[t._v("v"+t._s(t.batch.code.version))])],1)],1)],1)])],1),t._v(" "),n("sui-grid-row",[n("sui-accordion",{attrs:{exclusive:"",fluid:"",styled:""}},[t._l(t.matchGroups,(function(e,r){return[n("sui-accordion-title",{key:2*r},[n("sui-grid",[n("sui-grid-row",[n("sui-grid-column",{attrs:{width:2}},[n("sui-icon",{attrs:{name:"dropdown"}}),t._v("\n                                    测试AI #"+t._s(r+1)+"\n                                ")],1),t._v(" "),t.matchGroups[r].pending?n("sui-grid-column",{attrs:{width:2}},[n("sui-icon",{attrs:{name:"minus"}}),t._v("\n                                    队列中\n                                ")],1):t.matchGroups[r].finished?n("sui-grid-column",{attrs:{width:2}},[n("sui-icon",{attrs:{name:"check"}}),t._v("\n                                    评测完成\n                                ")],1):n("sui-grid-column",{attrs:{width:2}},[n("sui-icon",{attrs:{name:"spinner",loading:!0}}),t._v("\n                                    正在评测\n                                ")],1),t._v(" "),n("sui-grid-column",{attrs:{width:3}},[n("sui-icon",{attrs:{name:"user"}}),t._v("\n                                    "+t._s(e.user.username)+"\n                                ")],1),t._v(" "),n("sui-grid-column",{attrs:{width:2}},[n("sui-icon",{attrs:{name:-1!==e.code.entity.language.indexOf("python")?"python":"cuttlefish"}}),t._v("\n                                    "+t._s(e.code.entity.name)+"\n                                ")],1),t._v(" "),n("sui-grid-column",{attrs:{width:2}},[t._v(" 版本："+t._s(e.code.version)+" ")]),t._v(" "),n("sui-grid-column",{attrs:{stretched:"","text-align":"right",width:5}},[t._v("\n                                    胜："+t._s(e.win)+"    负："+t._s(e.lose)+"    平："+t._s(e.tie)+"\n                                ")])],1)],1)],1),t._v(" "),n("sui-accordion-content",{key:2*r+1},[n("sui-table",{attrs:{basic:"very"}},[n("sui-table-body",t._l(e.matches,(function(e){return n("sui-table-row",{key:e.id},[n("sui-table-cell",{attrs:{"text-align":"center"}},[t._v("#"+t._s(e.id))]),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},[t._v(t._s(t.beautify_time(e.create_time)))]),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},[n("sui-button-group",{staticClass:"wmc",attrs:{size:"mini",vertical:""}},[n("sui-button",{tag:"nuxt-link",attrs:{color:"teal",basic:"",icon:"gamepad",to:"/game/"+t.batch.game.id}},[t._v(t._s(t.batch.game.alias))]),t._v(" "),null!==t.batch.contest&&"{}"!==JSON.stringify(t.batch.contest)?n("sui-button",{tag:"nuxt-link",staticStyle:{"margin-top":"-1px"},attrs:{basic:"",color:"blue",icon:"gripfire",to:"/group/"+t.batch.contest.group.id+"/contest/"+t.batch.contest.id+"/"}},[t._v(t._s(t.batch.contest.name))]):t._e(),t._v(" "),"{}"===JSON.stringify(t.batch.contest)?n("sui-button",{tag:"nuxt-link",staticStyle:{"margin-top":"-1px"},attrs:{basic:"",color:"purple",icon:"gripfire",to:"/game/"+t.batch.game.id+"/ranklist"}},[t._v("游戏天梯")]):t._e()],1)],1),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},t._l(e.info,(function(r,c){return n("sui-popup",{key:c,attrs:{content:"score:"+r.score+" rank:"+r.rank,inverted:""}},[n("sui-label",{tag:"a",staticStyle:{margin:"0.25em",position:"relative"},attrs:{slot:"trigger",basic:"",color:1==r.rank?"yellow":null,href:"/user/"+r.user.username},slot:"trigger"},["评测成功"===e.state?n("div",{style:"position: absolute; top: -1px; right: -1px; background-color: "+t.getColor(r.end_state)+"; padding: 1px 3px; font-size: .6rem; color: white; border-top-right-radius: inherit; border-bottom-left-radius: inherit;"},[t._v("\n                                                    "+t._s(r.end_state)+"\n                                                ")]):t._e(),t._v(" "),n("div",{staticClass:"f ce",staticStyle:{position:"relative"}},[n("sui-image",{staticStyle:{margin:"0 0.5em 0 0"},attrs:{avatar:"",size:"mini",src:"https://cdn.v2ex.com/gravatar/"+r.user.email_md5+"?s=1000&d=mm"}}),t._v(" "),n("div",{staticClass:"f c ce"},[n("player-card",{attrs:{username:r.user.username}}),t._v(" "),r.code?n("sui-label",{attrs:{color:"blue",size:"mini"}},[t._v("\n                                                            "+t._s(t.truncate(r.code.entity.name,5))+"\n                                                            "),n("sui-label-detail",[t._v("v"+t._s(r.code.version))])],1):n("sui-label",{attrs:{color:"olive",size:"mini"}},[t._v("人类玩家")])],1)],1)])],1)})),1),t._v(" "),n("sui-table-cell",{attrs:{"text-align":"center"}},["评测成功"==e.state||"评测失败"===e.state?n("sui-button-group",{staticClass:"wmc",staticStyle:{width:"7.5rem"},attrs:{size:"mini",vertical:""}},[n("sui-button",{tag:"nuxt-link",attrs:{animated:"",color:"评测成功"==e.state?"green":"red",basic:"",to:"/match/"+e.id+"/"}},[n("sui-button-content",{staticStyle:{padding:"0"},attrs:{visible:""}},[n("sui-icon",{attrs:{name:"评测成功"==e.state?"check":"准备中"==e.state?"minus":"评测中"==e.state?"spinner":"ban",loading:"评测中"===e.state}}),t._v("\n                                                    "+t._s(e.state)+"\n                                                ")],1),t._v(" "),n("sui-button-content",{staticStyle:{padding:"0"},attrs:{hidden:""}},[n("sui-icon",{attrs:{name:"external alternate",position:"left"}}),t._v("对局详情 ")],1)],1),t._v(" "),"评测成功"==e.state?n("sui-button",{staticStyle:{"margin-right":"0","margin-top":"-1px"},attrs:{icon:"download",color:"blue",basic:""},on:{click:function(n){return n.preventDefault(),t.downloadReplay(e.id)}}},[t._v("下载回放")]):t._e()],1):"准备中"===e.state||"评测中"===e.state?n("sui-button",{staticClass:"wmc",staticStyle:{width:"7.5rem"},attrs:{color:"准备中"==e.state?"grey":"blue",basic:"",size:"mini","icon-position":"left"}},[n("sui-icon",{attrs:{name:"准备中"==e.state?"minus":"spinner",loading:"评测中"===e.state}}),t._v("\n                                            "+t._s(e.state)+"\n                                        ")],1):t._e()],1)],1)})),1)],1)],1)]}))],2)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{847:function(e,t,r){var content=r(859);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(53).default)("73b18705",content,!0,{sourceMap:!1})},858:function(e,t,r){"use strict";r(847)},859:function(e,t,r){var n=r(52)(!1);n.push([e.i,"iframe[data-v-0286f5aa]{width:100%;height:100%;overflow:visible;border:0}",""]),e.exports=n},891:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(33),r(96),r(122),r(17),r(21),r(35),r(36),r(13),r(34),r(55),{validate:function(e){var t=e.params;return/^\d+$/.test(t.id)},data:function(){return{copycont:"复制调试信息",iframe:{height:600,fullscreen:!1},match:{game:{has_replay_player:!1}},messageObj:{},player_controller:{initted:!1,number_of_frames:0,current_frame:0,is_playing:!1,play_speed:1,timer:null},debug:{open:!1,header:"",content:[]}}},computed:{game_player:function(){return this.$refs["game-player"]},player_percent:function(){return this.player_controller.number_of_frames?Math.round(100*this.player_controller.current_frame/this.player_controller.number_of_frames):100}},watch:{"player_controller.current_frame":function(e,t){e!=t&&(e==t+1?this.playerLoadNextFrame():this.playerLoadFrame())},"player_controller.is_playing":function(e,t){var r=this;e!=t&&(this.player_controller.timer&&(clearInterval(this.player_controller.timer),this.player_controller.timer=null),e&&(this.player_controller.timer=setInterval((function(){r.playNextFrame()}),1e3/this.player_controller.play_speed/this.player_basic_speed)))},"player_controller.play_speed":function(e,t){var r=this;e!=t&&this.player_controller.is_playing&&(clearInterval(this.player_controller.timer),this.player_controller.timer=setInterval((function(){r.playNextFrame()}),1e3/e/this.player_basic_speed))},"debug.open":function(){this.copycont="复制调试信息"}},head:function(){return{title:"对局 #".concat(this.match.id," - Saiblo")}},asyncData:function(e){return e.app.$axios.get("/api/matches/".concat(e.route.params.id,"/")).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,o,l,i,c,d,m,h,_,y,f,v,x,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=["rgba(130, 57, 54, 0.5)","rgba(137, 190, 178, 0.5)","rgba(201, 186, 131, 0.5)","rgba(222, 211, 140, 0.5)","rgba(222, 156, 83, 0.5)"],o=Array(r.data.info.length),l=Array(r.data.info.length),r.data.message=JSON.parse(r.data.message),i=0;i<o.length;i++)o[i]=[],l[i]=[],r.data.info[r.data.message.states[i].position].debug=r.data.message.states[i].stderr.split("\n");for(c=JSON.parse(r.data.records),d=0;d<c.length;d++)for(m=c[d],h=0;h<m.length;h++)o[m[h].position].push({x:d,y:m[h].time.toFixed(2)}),l[m[h].position].push({x:d,y:(m[h].memory/1024/1024).toFixed(2)});for(_=[],y=[],f=0;f<r.data.info.length;f++)(v=r.data.info[f]).code?(_.push({label:v.user.username+" 的 "+v.code.entity+"("+v.code.version+")",data:o[f],backgroundColor:n[f],borderColor:n[f],fill:!1}),y.push({label:v.user.username+" 的 "+v.code.entity+"("+v.code.version+")",data:l[f],backgroundColor:n[f],borderColor:n[f],fill:!1})):_.push({label:v.user.username,data:o[f],backgroundColor:n[f],borderColor:n[f],fill:!1});if(x={layout:{height:"400px"},responsive:!0,title:{display:!0,text:"每回合玩家用时"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"回合"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"用时(ms)"}}]}},w={layout:{height:"400px"},responsive:!0,title:{display:!0,text:"每回合AI使用内存"},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"回合"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"内存(MB)"}}]}},!r.data.game.has_replay_player){t.next=18;break}return t.next=15,e.app.$getPlayerHTML(e.app.$gameFile("/".concat(r.data.game.name,"/player.html")));case 15:t.t0=t.sent,t.next=19;break;case 18:t.t0="";case 19:return t.t1=t.t0,t.t2={src:t.t1},t.t3=r.data,t.t4={labels:Array.from(Array(c.length).keys()),datasets:_},t.t5={labels:Array.from(Array(c.length).keys()),datasets:y},t.t6=r.data.game.player_basic_speed?r.data.game.player_basic_speed:1,t.t7=x,t.t8=w,t.abrupt("return",{iframe:t.t2,match:t.t3,chartdata:t.t4,chartdata_m:t.t5,player_basic_speed:t.t6,options:t.t7,options_m:t.t8});case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(){e.error({statusCode:404,message:"没有这场对局"})}))},beforeDestroy:function(){clearInterval(this.player_controller.timer)},mounted:function(){window.addEventListener("message",this.receiveMessage,!1)},methods:{parse_message:function(e){var t="";return e.error&&(t+="error: ".concat(e.error,"\nerr:").concat(e.err,"\n\n")),e.states.map((function(e){t+="position: ".concat(e.position,", status: ").concat(e.status,", time: ").concat(e.time,", memory: ").concat(e.memory,", code: ").concat(e.code,"\n"),t+=e.stderr,t+="\n"})),t},showDebug:function(e){this.debug.header=e.code.entity+" ver."+e.code.version+" 的调试信息",this.debug.content=e.debug,this.debug.open=!0},beautifyTime:function(e){return this.$dayjs(e).locale("en").format("YYYY-MM-DD HH:mm:ss")},download_replay:function(e){this.$axios({url:"/api/matches/".concat(e,"/download/"),method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),r=document.createElement("a"),n="replay.bin";try{n=(n=e.headers["content-disposition"].match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/g)[0]).substr(10,n.length-11)}catch(e){n="replay.bin"}r.href=t,r.setAttribute("download",n),document.body.appendChild(r),r.click()}))},onLoad:function(){var e=this;this.$set(this.iframe,"height",600),"评测成功"==this.match.state&&this.$axios({url:"/api/matches/".concat(this.$route.params.id,"/download/"),method:"GET",responseType:"blob"}).then((function(t){e.postMessage({message:"init_replay_player",replay_data:t.data});for(var r=[],i=0;i<e.match.info.length;i++){var n=e.match.info[i];n.code?r.push(n.user.username+" 的 "+n.code.entity+"("+n.code.version+")"):r.push(n.user.username)}e.postMessage({message:"load_players",players:r})}))},postMessage:function(data){this.game_player.contentWindow.postMessage(data,"*")},receiveMessage:function(e){switch(e.data.message){case"init_successfully":"评测成功"==this.match.state&&(this.player_controller.number_of_frames=e.data.number_of_frames,this.player_controller.initted=!0);break;case"resized":this.$set(this.iframe,"height",e.data.height+30)}},playerLoadFrame:function(){this.postMessage({message:"load_frame",index:this.player_controller.current_frame})},playerLoadNextFrame:function(){this.postMessage({message:"load_next_frame"})},previousFrame:function(){this.player_controller.current_frame&&this.player_controller.current_frame--,this.player_controller.is_playing=!1},nextFrame:function(){this.player_controller.current_frame<this.player_controller.number_of_frames&&this.player_controller.current_frame++,this.player_controller.is_playing=!1},playNextFrame:function(){this.player_controller.current_frame<this.player_controller.number_of_frames?this.player_controller.current_frame+=parseInt((59+this.player_controller.play_speed*this.player_basic_speed)/60):this.player_controller.is_playing=!1},changeSpeed:function(){this.player_controller.play_speed<16?this.player_controller.play_speed*=2:this.player_controller.play_speed=1},resetPlayer:function(){this.player_controller.current_frame=0,this.player_controller.is_playing=!1},getColor:function(e){switch(e){case"OK":return"yellowgreen";case"TLE":return"goldenrod";case"MLE":return"steelblue";case"RE":return"mediumpurple";case"OLE":return"grey";case"EXIT":return"tomato";case"STLE":return"cadetblue"}},getState:function(e){switch(e){case"OK":return"OK";case"TLE":return"Time Limit Exceed";case"MLE":return"Memory Limit Exceed";case"RE":return"Runtime Error"}},copyDebug:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.$copyText(e.debug.content.join("\n")).then((function(){e.copycont="已经成功复制"})).catch((function(){e.copycont="复制失败"})).then((function(){setTimeout((function(){e.copycont="复制调试信息"}),1e3)})));case 1:case"end":return t.stop()}}),t)})))()}}}),l=(r(858),r(7)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("sui-breadcrumb",[e.match.contest&&"{}"!==JSON.stringify(e.match.contest)?r("span",[r("sui-breadcrumb-section",[r("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/groups"}},[e._v("小组")]),e._v(" "),r("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),e._v(" "),r("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/group/"+e.match.contest.group.id+"/"}},[e._v(e._s(e.match.contest.group.name))])],1),e._v(" "),r("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),e._v(" "),r("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/group/"+e.match.contest.group.id+"/contest/"+e.match.contest.id}},[e._v(e._s(e.match.contest.name))])],1):r("span",[r("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/games"}},[e._v("游戏")]),e._v(" "),r("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),e._v(" "),r("sui-breadcrumb-section",{tag:"nuxt-link",attrs:{to:"/game/"+e.match.game.id}},[e._v("\n                "+e._s(e.match.game.alias)+"\n            ")])],1),e._v(" "),r("sui-breadcrumb-divider",{attrs:{icon:"right chevron"}}),e._v(" "),r("sui-breadcrumb-section",{attrs:{active:""}},[e._v("对局")])],1),e._v(" "),r("sui-grid",{attrs:{stackable:""}},[r("sui-grid-row",[r("sui-grid-column",[r("sui-header",{tag:"h1"},[e._v("对局 #"+e._s(e.match.id))])],1)],1),e._v(" "),r("sui-grid-row",[r("sui-grid-column",{attrs:{width:12}},[r("sui-segment",[r("div",{staticClass:"f sb ce",staticStyle:{"margin-bottom":"20px"}},[r("div",[r("span",{staticStyle:{color:"grey"}},[e._v(" 对局时间："+e._s(e.beautifyTime(e.match.create_time))+" 当前状态： ")]),e._v(" "),r("span",{style:"color: "+("准备中"==e.match.state?"grey":"评测中"==e.match.state?"orange":"评测失败"==e.match.state?"red":"green")},[e._v(e._s(e.match.state))])]),e._v(" "),r("sui-button",{attrs:{size:"mini",color:"blue",basic:""},nativeOn:{click:function(t){return e.download_replay(e.match.id)}}},[e._v("下载回放")])],1),e._v(" "),e.match.game.has_replay_player?r("iframe",{ref:"game-player",style:e.iframe.fullscreen?"position: fixed; top: 0; left: 0; z-index: 10000; width: 100%; height: 100%;":"width: 100%; height: "+e.iframe.height+"px;",attrs:{srcdoc:e.iframe.src,scrolling:"auto"},on:{load:function(t){return e.onLoad()}}}):r("div",[r("sui-dimmer-dimmable",[r("sui-image",{attrs:{src:e.$gameFile("/"+e.match.game.name+"/cover.png")}}),e._v(" "),r("sui-dimmer",{attrs:{active:""}},[r("sui-container",{staticStyle:{"font-size":"2em","font-weight":"thick"},attrs:{"text-align":"center"}},[e._v("该游戏无网页版播放器，请下载播放器并离线播放")])],1)],1)],1),e._v(" "),"评测成功"==e.match.state&&e.player_controller.initted?r("div",{class:e.iframe.fullscreen?"f cr ce":"f c ce",style:e.iframe.fullscreen?"position: fixed; bottom: 0; left: 0; margin: auto; z-index: 10001; width: 100%;":""},[r("sui-progress",{staticStyle:{"margin-bottom":"0",width:"100%"},attrs:{state:"active",color:"violet",percent:e.player_percent,progress:""}}),e._v(" "),r("div",{staticClass:"ui grey icon buttons"},[r("div",{staticClass:"ui button",on:{click:function(t){return t.preventDefault(),e.previousFrame()}}},[r("sui-icon",{attrs:{name:"chevron left"}})],1),e._v(" "),r("div",{staticClass:"ui button",on:{click:function(t){return t.preventDefault(),e.nextFrame()}}},[r("sui-icon",{attrs:{name:"chevron right"}})],1),e._v(" "),r("div",{staticClass:"ui button",on:{click:function(t){t.preventDefault(),e.player_controller.is_playing=!e.player_controller.is_playing}}},[r("sui-icon",{attrs:{name:e.player_controller.is_playing?"stop":"play"}})],1),e._v(" "),r("div",{staticClass:"ui button",staticStyle:{padding:"11px"},on:{click:function(t){return t.preventDefault(),e.changeSpeed()}}},[e._v(e._s(e.player_controller.play_speed)+"X")]),e._v(" "),r("div",{staticClass:"ui button",on:{click:function(t){return t.preventDefault(),e.resetPlayer()}}},[r("sui-icon",{attrs:{name:"undo"}})],1),e._v(" "),r("sui-popup",{attrs:{content:e.iframe.fullscreen?"退出全屏":"全屏模式",inverted:""}},[r("div",{staticClass:"ui button",attrs:{slot:"trigger"},on:{click:function(t){return t.preventDefault(),e.$set(e.iframe,"fullscreen",!e.iframe.fullscreen)}},slot:"trigger"},[r("sui-icon",{attrs:{name:e.iframe.fullscreen?"compress":"expand"}})],1)])],1)],1):e._e()]),e._v(" "),r("sui-segment",[r("time-chart",{attrs:{height:200,chartdata:e.chartdata,options:e.options}})],1),e._v(" "),r("sui-segment",[r("time-chart",{attrs:{height:200,chartdata:e.chartdata_m,options:e.options_m}})],1)],1),e._v(" "),r("sui-grid-column",{attrs:{width:4}},[r("sui-table",[r("sui-table-body",e._l(e.match.info,(function(t,n){return r("sui-table-row",{key:n},[r("sui-table-cell",{style:"position: relative; padding-top: 20px; padding-bottom: 20px; background-color: "+(t.code?"unset;":"aliceblue;")},[r("div",{style:"position: absolute; top: -7px; right: -7px; background-color: "+e.getColor(t.end_state)+"; padding: 1px 3px; font-size: 1rem; color: white; border-radius: 0.5rem; padding: 0.2rem 0.4rem;"},[r("b",[e._v(e._s(t.end_state))])]),e._v(" "),r("sui-image",{staticStyle:{float:"left","margin-right":"1em"},attrs:{size:"mini",src:"https://cdn.v2ex.com/gravatar/"+t.user.email_md5+"?s=1000&d=mm"}}),e._v(" "),r("div",[r("b",{staticStyle:{"font-size":"large"}},[r("nuxt-link",{attrs:{to:"/user/"+t.user.username}},[e._v("\n                                            "+e._s(t.user.username)+"\n                                        ")])],1)]),e._v(" "),r("div",{staticStyle:{color:"grey","font-size":"small"}},[e._v("\n                                    "+e._s(t.user.name)+"\n                                    "+e._s(t.user.school)+"\n                                    "+e._s(t.user.department)+"\n                                ")]),e._v(" "),r("div",[e._v("\n                                    排名："+e._s(t.rank)+"\n                                    "),r("span",{staticStyle:{float:"right"}},[e._v(e._s(t.score)+"pts.")])]),e._v(" "),r("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[t.code?r("div",[r("sui-label",{attrs:{color:"blue"}},[e._v("\n                                            "+e._s(t.code.entity)+"\n                                            "),r("sui-label-detail",[e._v("ver."+e._s(t.code.version))])],1),e._v(" "),t.user.username==e.$auth.$state.user.username||e.$auth.$state.user.is_admin?r("sui-popup",{attrs:{content:"点击查看程序输出的调试信息",inverted:""}},[r("sui-label",{tag:"a",attrs:{slot:"trigger",color:"purple"},on:{click:function(r){return e.showDebug(t)}},slot:"trigger"},[r("sui-icon",{staticStyle:{"margin-right":"0"},attrs:{name:"bug"}})],1)],1):e._e()],1):r("sui-label",{attrs:{color:"olive",size:"mini"}},[e._v("人类玩家")])],1)],1)],1)})),1)],1)],1),e._v(" "),e.match.debug&"评测失败"===e.match.state?r("sui-message",{staticStyle:{"white-space":"pre-line","word-break":"break-all"},attrs:{icon:"exclamation",header:"DEBUG",color:"blue"}},[e._v(e._s(e.parse_message(e.match.message)))]):e._e()],1)],1),e._v(" "),r("sui-modal",{staticStyle:{"z-index":"10002"},model:{value:e.debug.open,callback:function(t){e.$set(e.debug,"open",t)},expression:"debug.open"}},[r("sui-modal-header",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between","padding-right":"1rem !important"}},[r("div",[e._v(e._s(e.debug.header))]),e._v(" "),r("sui-button",{staticStyle:{margin:"0"},attrs:{size:"mini"},on:{click:function(t){return e.copyDebug()}}},[r("sui-icon",{attrs:{name:"clipboard"}}),e._v("\n                "+e._s(e.copycont)+"\n            ")],1)],1),e._v(" "),r("sui-modal-content",{staticStyle:{padding:"0 !important","border-radius":"0"},attrs:{scrolling:""}},[r("sui-table",{staticStyle:{background:"rgb(40, 44, 52)",color:"#abb2bf",padding:"10px","border-radius":"0","font-size":"large","font-family":"'Ubuntu Mono', Consolas, monospace, sans-serif"},attrs:{unstackable:""}},[r("sui-table-body",e._l(e.debug.content,(function(t,n){return r("sui-table-row",{key:n},[r("sui-table-cell",{staticStyle:{padding:"3px 10px 3px 0","text-align":"right",border:"0","border-right":"1px solid #f5f6f7"},attrs:{collapsing:""}},[r("b",[e._v(e._s(n))])]),e._v(" "),r("sui-table-cell",{staticStyle:{padding:"3px 0 3px 10px",border:"0"}},[r("b",[e._v(e._s(t))])])],1)})),1)],1)],1)],1)],1)}),[],!1,null,"0286f5aa",null);t.default=component.exports}}]);
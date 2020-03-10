(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{864:function(e,t,o){"use strict";o.r(t);var r=o(3),n=o(836),m=o.n(n),d=(o(837),o(21));r.default.use(m.a);var l={data:function(){return{form:{name:"",alias:"",introduction:""},game:{},isLoading:!1,isOK:!1,err_code:0}},watch:{"form.name":function(){this.err_code=0},"form.alias":function(){this.err_code=0}},asyncData:function(e){return e.app.$axios.get("api/games/".concat(e.route.params.slug,"/")).then((function(e){return{game:e.data,form:JSON.parse(JSON.stringify(e.data))}}),(function(){return{loading_err_code:1}}))},validations:{form:{name:{required:d.required,maxLength:Object(d.maxLength)(8)},alias:{required:d.required,maxLength:Object(d.maxLength)(4)}}},methods:{saveInfo:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(this.isLoading=!0,this.$axios.put("/api/games/".concat(this.game.id,"/"),this.form).then((function(){e.err_code=0,e.isOK=!0,e.$notify.success({message:"修改成功！跳转至游戏页面...",title:"成功",timeout:1e3}),setTimeout((function(){e.$router.push("/game/".concat(e.game.id))}),1e3)}),(function(t){e.err_code=t.response.status})).then((function(){e.isLoading=!1})))},upload_game:function(){var e=this,t=new FormData;t.append("file",this.$refs.file.files[0]),this.$axios.post("api/games/".concat(this.game.id,"/upload/"),t,{headers:{"Content-Type":"multipart/form-data; boundary=BoUnDaRyStRiNg"}}).then((function(){e.$notify.success({title:"成功",message:"已上传游戏包",timeout:1e3})}))}}},f=o(7),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("sui-grid",{attrs:{centered:""}},[o("sui-grid-column",[o("sui-header",{tag:"h1"},[e._v("\n        编辑名称\n      ")]),e._v(" "),o("sui-segment",[o("sui-form",{staticStyle:{"vertical-align":"bottom"},attrs:{method:"post",autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.saveInfo(t)}}},[o("sui-form-fields",{attrs:{fields:3}},[o("sui-form-field",{attrs:{width:7,error:!(!e.$v.form.name.$error&&!e.err_code)}},[o("label",[e._v("名称")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{placeholder:"名称",disabled:e.isLoading||e.isOK},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),e._v(" "),o("sui-form-field",{attrs:{width:7,error:!(!e.$v.form.alias.$error&&!e.err_code)}},[o("label",[e._v("别称")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.form.alias,expression:"form.alias"}],attrs:{placeholder:"别称",disabled:e.isLoading||e.isOK},domProps:{value:e.form.alias},on:{input:function(t){t.target.composing||e.$set(e.form,"alias",t.target.value)}}})]),e._v(" "),o("sui-form-field",{attrs:{width:2}},[o("label",[e._v(" ")]),e._v(" "),o("sui-button",{attrs:{fluid:"",color:e.isOK?"green":"blue",disabled:e.isLoading||e.isOK,loading:e.isLoading,icon:e.isOK?"check":"none"}},[e.isOK?e._e():o("span",[e._v("保存")])])],1)],1),e._v(" "),o("sui-form-fields",[e.$v.form.name.$error||e.$v.form.alias.$error?o("sui-form-field",{attrs:{width:16}},[o("sui-message",{attrs:{negative:""}},[o("sui-message-list",[e.$v.form.name.required?e.$v.form.name.maxLength?e._e():o("sui-message-item",[e._v("\n                    游戏名过长\n                  ")]):o("sui-message-item",[e._v("\n                    游戏名不能为空\n                  ")]),e._v(" "),e.$v.form.alias.required?e.$v.form.alias.maxLength?e._e():o("sui-message-item",[e._v("\n                    别名过长\n                  ")]):o("sui-message-item",[e._v("\n                    别名不能为空\n                  ")])],1)],1)],1):e._e()],1)],1)],1),e._v(" "),o("sui-header",{tag:"h1"},[e._v("编辑详情")]),e._v(" "),o("client-only",[o("mavon-editor",{attrs:{disabled:e.isLoading||e.isOK},model:{value:e.form.introduction,callback:function(t){e.$set(e.form,"introduction",t)},expression:"form.introduction"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
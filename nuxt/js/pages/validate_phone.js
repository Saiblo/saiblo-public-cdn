(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{906:function(e,o,r){"use strict";r.r(o);var t=r(23),n={head:function(){return{title:"手机号验证 - Saiblo"}},auth:"guest",data:function(){return{form:{username:"",password:"",sms_code:"",loading:!1,sec60:0},err_code:0}},validations:{form:{username:{required:t.required},password:{required:t.required}}},created:function(){this.form.username=this.$route.query.username,void 0!==this.$route.query.sended&&(this.form.sec60=57,this.wait())},methods:{validate:function(){var e=this;this.form.sms_code&&(this.sms_loading=!0,this.$axios.post("/api/users/".concat(this.$route.query.username,"/validate/"),{token:this.form.sms_code}).then((function(){e.sms_err_code=!1,e.$notify.success({message:"验证成功！正在跳转至登陆界面 ...",title:"成功",timeout:1e3}),setTimeout((function(){e.$router.push("/login")}),1e3)})).catch((function(){e.sms_err_code=!0,e.sms_loading=!1})))},sendSMS:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(this.form.loading=!0,this.$axios.post("/api/users/send_validation_sms/",this.form).then((function(o){e.err_code=0,e.$notify.success({message:"短信验证码已成功发送，请注意查收！",title:"成功",timeout:2e3}),e.form.sec60=60,e.wait()})).catch((function(o){e.err_code=o.response.status,403==e.err_code&&(e.form.sec60=o.response.data.err_msg,e.wait())})).then((function(){e.form.loading=!1})))},wait:function(){var e=this;this.form.sec60&&setTimeout((function(){e.form.sec60-=1,e.wait()}),1e3)}}},d=r(7),component=Object(d.a)(n,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("sui-grid",[r("sui-grid-column",{attrs:{computer:7,tablet:10,mobile:16,centered:""}},[r("sui-segment",[r("sui-header",{tag:"h2",attrs:{"text-align":"center"}},[e._v("手机号验证")]),e._v(" "),r("sui-form",{attrs:{id:"form",method:"post",autocomplete:"off"},on:{submit:function(o){return o.preventDefault(),e.validate(o)}}},[r("sui-form-field",{staticStyle:{textalign:"center"}},[void 0===e.$route.query.sended?r("sui-message",{attrs:{info:""}},[e._v("\n                        您的账号尚未通过手机号验证，因此还无法登陆网站，请先进行手机号验证以激活您的账号。\n                        "),r("br"),e._v("\n                        在下方输入密码，之后我们会发送验证码到您的注册手机号，输入验证码并提交即可完成验证。\n                    ")]):r("sui-message",{attrs:{info:""}},[e._v("\n                        验证码已成功发送至您的手机，在下方输入即可完成验证。\n                        "),r("br"),e._v("\n                        如需重新发送，请在下方输入密码并点击发送验证码。\n                    ")])],1),e._v(" "),r("sui-form-field",{attrs:{error:!(!e.$v.form.username.$error&&!e.err_code)}},[r("sui-input",{attrs:{disabled:"","icon-position":"left",icon:"user",placeholder:"用户名"},model:{value:e.form.username,callback:function(o){e.$set(e.form,"username",o)},expression:"form.username"}})],1),e._v(" "),r("sui-form-field",{attrs:{error:!!e.sms_err_code}},[r("sui-input",{attrs:{disabled:e.sms_loading,icon:"edit","icon-position":"left",placeholder:"验证码"},model:{value:e.form.sms_code,callback:function(o){e.$set(e.form,"sms_code",o)},expression:"form.sms_code"}})],1),e._v(" "),r("sui-form-field",[r("sui-button",{attrs:{fluid:"",disabled:e.sms_loading,loading:e.sms_loading,color:"blue"}},[r("span",[e._v("提交验证码")])])],1),e._v(" "),r("sui-form-field",{attrs:{error:!(!e.$v.form.password.$error&&!e.err_code)}},[r("sui-input",{attrs:{type:"password",disabled:!(!e.form.sec60&&!e.form.loading),"icon-position":"left",icon:"lock",placeholder:"密码"},model:{value:e.form.password,callback:function(o){e.$set(e.form,"password",o)},expression:"form.password"}})],1),e._v(" "),e.$v.form.$error?r("sui-form-field",[r("sui-message",{staticStyle:{"test-align":"center"},attrs:{negative:""}},[r("sui-message-list",[e.$v.form.username.required?e._e():r("sui-message-item",[e._v("用户名不能为空")]),e._v(" "),e.$v.form.password.required?e._e():r("sui-message-item",[e._v("密码不能为空")])],1)],1)],1):e._e(),e._v(" "),r("sui-form-field",[r("sui-button",{tag:"div",attrs:{fluid:"",disabled:!(!e.form.loading&&!e.form.sec60),loading:e.form.loading,icon:e.form.sec60?"check":"none",color:e.form.sec60?"green":"blue"},on:{click:e.sendSMS}},[e.form.sec60?r("span",[e._v("验证码已发送，"+e._s(e.form.sec60)+" 秒后可以重新发送验证码")]):r("span",[e._v("重新发送验证码")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports}}]);
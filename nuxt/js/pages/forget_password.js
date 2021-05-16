(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{892:function(e,r,t){"use strict";t.r(r);var o=t(23),n={auth:"guest",head:function(){return{title:"忘记密码 - Saiblo"}},data:function(){return{form:{username:"",email:"",sec60:0,loading:!1},smsForm:{username:"",phone_number:"",token:"",password:"",confirm_password:"",sec60:0,loading:!1},err_code:0,smsReset:!0,smsSend:!1,smsContent:"发送验证码",smsTime:60,sms_err_code:0,isOK:!1,isLoading:!1}},validations:{form:{username:{required:o.required},email:{required:o.required,email:o.email}},smsForm:{username:{required:o.required},phone_number:{required:o.required},token:{required:o.required},password:{required:o.required},confirm_password:{required:o.required,sameAsPassword:Object(o.sameAs)("password")}}},watch:{"form.username":function(){this.err_code=0},"form.email":function(){this.err_code=0}},methods:{sendSMSCode:function(){var e=this;if(this.smsForm.username)return/^[1][3,4,5,7,8][0-9]{9}$/.test(this.smsForm.phone_number)?void this.$axios.post("/api/users/forget_password_sms/",this.smsForm).then((function(){e.sms_err_code=0,e.$notify.success({message:"发送验证码成功",title:"成功",timeout:1e3})})).catch((function(r){e.sms_err_code=r.response.status})).then((function(){e.smsSend=!0,e.smsContent=e.smsTime+"s后重发";var r=window.setInterval((function(){e.smsTime--,e.smsContent=e.smsTime+"s后重发",e.smsTime<0&&(window.clearInterval(r),e.smsContent="重发验证码",e.snsTime=60,e.smsSend=!1)}),1e3)})):(this.sms_err_code=1,void this.$notify.error({message:"请输入正确的11位手机号",title:"失败",timeout:1e3}));this.$notify.error({message:"用户名不能为空",title:"失败",timeout:1e3})},send_new_sms_password:function(){var e=this;if(this.$v.smsForm.$touch(),!this.$v.smsForm.$invalid){if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.smsForm.phone_number))return this.sms_err_code=1,void this.$notify.error({message:"请输入正确的11位手机号",title:"失败",timeout:1e3});this.loading=!0,this.$axios.post("/api/users/".concat(this.smsForm.username,"/reset_password/"),this.smsForm).then((function(){e.err_code=0,e.isOK=!0,e.$notify.success({message:"重置密码成功，跳转回登录界面...",title:"成功",timeout:3e3}),e.$auth.loginWith("local",{data:{method:"password",username:e.smsForm.username,password:e.smsForm.password}}).catch((function(r){e.err_code=r.response.status})).then((function(){e.$router.push("/login")})),setTimeout((function(){e.$router.push("/login")}),3e3)})).catch((function(r){e.err_code=r.response.status})).then((function(){e.loading=!1}))}},sendEmail:function(){var e=this;this.$v.form.$touch(),this.$v.form.$invalid||(this.form.loading=!0,this.$axios.post("/api/users/forget_password/",this.form).then((function(){e.err_code=0,e.$notify.success({message:"发送邮件成功",title:"成功",timeout:1e3}),e.form.sec60=60,e.wait()})).catch((function(r){e.err_code=r.response.status,403==e.err_code&&(e.form.sec60=r.response.data.err_msg,e.wait())})).then((function(){e.form.loading=!1})))},wait:function(){var e=this;this.form.sec60&&setTimeout((function(){e.form.sec60-=1,e.wait()}),1e3)}}},m=t(7),component=Object(m.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("sui-grid",{attrs:{centered:""}},[t("sui-grid-column",{attrs:{computer:7,tablet:10,mobile:16}},[t("sui-button-group",{attrs:{attached:"top"}},[t("sui-button",{attrs:{color:e.smsReset?"blue":"grey",basic:""},on:{click:function(r){e.smsReset=!0}}},[e._v("使用手机号重置密码")]),e._v(" "),t("sui-button",{attrs:{color:e.smsReset?"grey":"blue",basic:""},on:{click:function(r){e.smsReset=!1}}},[e._v("使用邮箱重置密码")])],1),e._v(" "),e.smsReset?t("sui-segment",{attrs:{attached:""}},[t("sui-step-group",{attrs:{fluid:"",size:"mini"}},[t("sui-step",{attrs:{active:!e.smsSend,icon:"paper plane"}},[t("sui-step-content",[t("sui-step-title",[e._v("发送验证码")]),e._v(" "),t("sui-step-description",[e._v("发送短信验证码进行验证")])],1)],1),e._v(" "),t("sui-step",{attrs:{active:e.smsSend,icon:"check"}},[t("sui-step-content",[t("sui-step-title",[e._v("设置密码")]),e._v(" "),t("sui-step-description",[e._v("重新设置新的密码")])],1)],1)],1),e._v(" "),t("sui-form",{attrs:{method:"post",autocomplete:"off"},on:{submit:function(r){return r.preventDefault(),e.send_new_sms_password(r)}}},[t("sui-form-field",{staticStyle:{textalign:"center"}},[t("sui-message",{attrs:{info:""}},[e._v("\n                        请输入用户名与注册时所使用的手机号，以确保您是本人。\n                        "),t("br"),e._v("\n                        之后我们会发送短信验证码至您的手机。\n                    ")])],1),e._v(" "),t("sui-form-field",{attrs:{error:!(!e.$v.smsForm.username.$error&&!e.err_code)}},[t("sui-input",{attrs:{disabled:!(!e.smsForm.sec60&&!e.smsForm.loading),"icon-position":"left",icon:"user",placeholder:"用户名"},model:{value:e.smsForm.username,callback:function(r){e.$set(e.smsForm,"username",r)},expression:"smsForm.username"}})],1),e._v(" "),t("sui-form-field",{attrs:{error:!!(e.$v.smsForm.phone_number.$error||e.err_code||e.sms_err_code),inline:""}},[t("sui-input",{ref:"username",staticStyle:{width:"50%"},attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"phone",placeholder:"11位手机号"},model:{value:e.smsForm.phone_number,callback:function(r){e.$set(e.smsForm,"phone_number",r)},expression:"smsForm.phone_number"}}),e._v(" "),t("sui-button",{tag:"div",attrs:{disabled:e.smsSend,color:"blue"},on:{click:function(r){return e.sendSMSCode()}}},[e._v(e._s(e.smsContent))])],1),e._v(" "),t("sui-form-field",{attrs:{error:!(!e.$v.smsForm.token.$error&&!e.err_code)}},[t("sui-input",{attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"edit",placeholder:"验证码"},model:{value:e.smsForm.token,callback:function(r){e.$set(e.smsForm,"token",r)},expression:"smsForm.token"}})],1),e._v(" "),t("sui-form-field",{attrs:{error:!!e.$v.smsForm.password.$error}},[t("sui-input",{attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"lock",placeholder:"新密码",type:"password"},model:{value:e.smsForm.password,callback:function(r){e.$set(e.smsForm,"password",r)},expression:"smsForm.password"}})],1),e._v(" "),t("sui-form-field",{attrs:{error:!!e.$v.smsForm.confirm_password.$error}},[t("sui-input",{attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"check",placeholder:"确认密码",type:"password"},model:{value:e.smsForm.confirm_password,callback:function(r){e.$set(e.smsForm,"confirm_password",r)},expression:"smsForm.confirm_password"}})],1),e._v(" "),e.$v.smsForm.$error?t("sui-form-field",[t("sui-message",{staticStyle:{"test-align":"center"},attrs:{negative:""}},[t("sui-message-list",[e.$v.smsForm.phone_number.required?e._e():t("sui-message-item",[e._v("手机号不能为空")]),e._v(" "),e.$v.smsForm.username.required?e._e():t("sui-message-item",[e._v("用户名不能为空")]),e._v(" "),e.$v.smsForm.token.required?e._e():t("sui-message-item",[e._v("验证码不能为空")]),e._v(" "),e.$v.smsForm.password.required?e._e():t("sui-message-item",[e._v(" 密码不能为空 ")]),e._v(" "),e.$v.smsForm.confirm_password.required?e._e():t("sui-message-item",[e._v(" 确认密码不能为空 ")]),e._v(" "),e.$v.smsForm.password.required&&e.$v.smsForm.confirm_password.required&&!e.$v.smsForm.confirm_password.sameAsPassword?t("sui-message-item",[e._v("\n                                两次密码填写不一致\n                            ")]):e._e()],1)],1)],1):e._e(),e._v(" "),t("sui-form-field",[t("sui-button",{attrs:{fluid:"",disabled:!(!e.form.loading&&!e.form.sec60),loading:e.form.loading,icon:e.form.sec60?"check":"none",color:e.form.sec60?"green":"blue"}},[e.form.sec60?t("span",[e._v("邮件已发送，"+e._s(e.form.sec60)+" 秒后可以重新发送邮件")]):t("span",[e._v("发送短信验证码")])])],1)],1)],1):t("sui-segment",{attrs:{attached:""}},[t("sui-step-group",{attrs:{fluid:"",size:"mini"}},[t("sui-step",{attrs:{active:"",icon:"paper plane"}},[t("sui-step-content",[t("sui-step-title",[e._v("发送邮件")]),e._v(" "),t("sui-step-description",[e._v("发送邮件进行验证")])],1)],1),e._v(" "),t("sui-step",{attrs:{icon:"check"}},[t("sui-step-content",[t("sui-step-title",[e._v("设置密码")]),e._v(" "),t("sui-step-description",[e._v("重新设置新的密码")])],1)],1)],1),e._v(" "),t("sui-form",{attrs:{method:"post",autocomplete:"off"},on:{submit:function(r){return r.preventDefault(),e.sendEmail(r)}}},[t("sui-form-field",{staticStyle:{textalign:"center"}},[t("sui-message",{attrs:{info:""}},[e._v("\n                        请输入用户名与注册时所使用的邮箱，以确保您是本人。\n                        "),t("br"),e._v("\n                        之后我们会发送一封附带重置密码的链接的邮件到您的邮箱。\n                    ")])],1),e._v(" "),t("sui-form-field",{attrs:{error:!(!e.$v.form.username.$error&&!e.err_code)}},[t("sui-input",{attrs:{disabled:!(!e.form.sec60&&!e.form.loading),"icon-position":"left",icon:"user",placeholder:"用户名"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),e._v(" "),t("sui-form-field",{attrs:{error:!(!e.$v.form.email.$error&&!e.err_code)}},[t("sui-input",{attrs:{disabled:!(!e.form.sec60&&!e.form.loading),"icon-position":"left",icon:"mail",placeholder:"邮箱"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),e.$v.form.$error?t("sui-form-field",[t("sui-message",{staticStyle:{"test-align":"center"},attrs:{negative:""}},[t("sui-message-list",[e.$v.form.email.required?e.$v.form.email.email?e._e():t("sui-message-item",[e._v("邮箱格式不正确")]):t("sui-message-item",[e._v("邮箱不能为空")]),e._v(" "),e.$v.form.username.required?e._e():t("sui-message-item",[e._v("用户名不能为空")])],1)],1)],1):e._e(),e._v(" "),t("sui-form-field",[t("sui-button",{attrs:{fluid:"",disabled:!(!e.form.loading&&!e.form.sec60),loading:e.form.loading,icon:e.form.sec60?"check":"none",color:e.form.sec60?"green":"blue"}},[e.form.sec60?t("span",[e._v("邮件已发送，"+e._s(e.form.sec60)+" 秒后可以重新发送邮件")]):t("span",[e._v("发送密码重置邮件")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);
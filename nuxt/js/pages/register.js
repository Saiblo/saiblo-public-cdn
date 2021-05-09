(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{895:function(e,r,o){"use strict";o.r(r);var t=o(23),n={auth:"guest",head:function(){return{title:"注册 - Saiblo"}},data:function(){return{form:{email:"",username:"",password:"",confirm_password:""},isLoading:!1,isOK:!1,err_code:0,err_msg:""}},validations:{form:{email:{required:t.required,email:t.email},username:{required:t.required,isUsername:function(e){return/^[a-zA-Z0-9_]{2,20}$/.test(e)}},password:{required:t.required},confirm_password:{required:t.required,sameAsPassword:Object(t.sameAs)("password")}}},watch:{"form.email":function(){this.err_code=0},"form.username":function(){this.err_code=0}},methods:{register:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(this.isLoading=!0,this.$axios.post("/api/users/",this.form).then((function(){e.err_code=0,e.isOK=!0,e.$notify.success({message:"注册成功！正在发送验证邮件 ...",title:"成功",timeout:1e3}),e.$axios.post("/api/users/send_validation/",e.form).then((function(r){e.$notify.success({message:"验证邮件已发送至 ".concat(r.data.masked_email," 邮箱的垃圾箱，请注意查收！"),title:"成功",timeout:3e3})})),setTimeout((function(){e.$router.push("/validate_email?username=".concat(e.form.username,"&sended=1"))}),3e3)}),(function(r){e.err_code=r.response.status})).then((function(){e.isLoading=!1})))}}},m=o(7),component=Object(m.a)(n,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("sui-grid",{attrs:{centered:""}},[o("sui-grid-column",{attrs:{computer:7,tablet:10,mobile:16}},[o("sui-segment",[o("sui-header",{tag:"h2",attrs:{"text-align":"center"}},[e._v("注册")]),e._v(" "),o("sui-form",{attrs:{id:"form",method:"post",autocomplete:"off"},on:{submit:function(r){return r.preventDefault(),e.register(r)}}},[o("sui-form-field",{attrs:{error:!(!e.$v.form.email.$error&&!e.err_code)}},[o("sui-input",{attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"mail",placeholder:"邮箱"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:!(!e.$v.form.username.$error&&!e.err_code)}},[o("sui-input",{attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"user",placeholder:"用户名"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:!!e.$v.form.password.$error}},[o("sui-input",{attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"lock",placeholder:"密码",type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:!!e.$v.form.confirm_password.$error}},[o("sui-input",{attrs:{disabled:e.isLoading||e.isOK,"icon-position":"left",icon:"check",placeholder:"确认密码",type:"password"},model:{value:e.form.confirm_password,callback:function(r){e.$set(e.form,"confirm_password",r)},expression:"form.confirm_password"}})],1),e._v(" "),o("sui-form-field",[o("sui-button",{attrs:{fluid:"",disabled:e.isLoading||e.isOK,loading:e.isLoading,icon:e.isOK?"check":"none",color:e.isOK?"green":"blue"}},[e.isOK?e._e():o("span",[e._v("注册")])])],1),e._v(" "),e.$v.form.email.$error||e.$v.form.username.$error||e.$v.form.password.$error||e.$v.form.confirm_password.$error?o("sui-form-field",[o("sui-message",{attrs:{negative:""}},[o("sui-message-list",[e.$v.form.email.required?e.$v.form.email.email?e._e():o("sui-message-item",[e._v(" 邮箱格式不正确 ")]):o("sui-message-item",[e._v(" 邮箱不能为空 ")]),e._v(" "),e.$v.form.username.isUsername?e._e():o("sui-message-item",[e._v(" 用户名必须为2-20位英文、数字或下划线 ")]),e._v(" "),e.$v.form.password.required?e._e():o("sui-message-item",[e._v(" 密码不能为空 ")]),e._v(" "),e.$v.form.confirm_password.required?e._e():o("sui-message-item",[e._v(" 确认密码不能为空 ")]),e._v(" "),e.$v.form.password.required&&e.$v.form.confirm_password.required&&!e.$v.form.confirm_password.sameAsPassword?o("sui-message-item",[e._v("\n                                两次密码填写不一致\n                            ")]):e._e()],1)],1)],1):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);
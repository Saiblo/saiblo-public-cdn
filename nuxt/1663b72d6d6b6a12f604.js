(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{849:function(e,t,o){"use strict";o.r(t);var r=o(21),n={auth:"guest",head:function(){return{title:"忘记密码 - Saiblo"}},data:function(){return{form:{email:"",time:0,isLoading:!1,isOK:!1},err_code:0}},validations:{form:{email:{required:r.required,email:r.email}}},watch:{"form.email":function(){this.err_code=0}},methods:{send_email:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(this.form.isLoading=!0,this.$axios.post("/api/users/forget_password",this.form).then((function(){e.err_code=0,e.form.isOK=!0,e.$notify.success({message:"发送邮件成功",title:"成功",timeout:1e3}),e.form.time=60,e.wait()})).catch((function(t){e.err_code=t.response.status})).then((function(){e.form.isLoading=!1})))},wait:function(){var e=this;this.form.time?setTimeout((function(){e.form.time-=1,e.wait()}),1e3):this.form.isOK=!1}}},m=o(7),component=Object(m.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("sui-grid",{attrs:{centered:""}},[o("sui-grid-column",{attrs:{computer:7,tablet:10,mobile:16}},[o("sui-segment",[o("sui-header",{tag:"h2",attrs:{"text-align":"center"}},[e._v("重置密码")]),e._v(" "),o("sui-step-group",{attrs:{fluid:"",size:"mini"}},[o("sui-step",{attrs:{active:"",icon:"paper plane"}},[o("sui-step-content",[o("sui-step-title",[e._v("发送邮件")]),e._v(" "),o("sui-step-description",[e._v("发送邮件进行验证")])],1)],1),e._v(" "),o("sui-step",{attrs:{icon:"check"}},[o("sui-step-content",[o("sui-step-title",[e._v("设置密码")]),e._v(" "),o("sui-step-description",[e._v("重新设置新的密码")])],1)],1)],1),e._v(" "),o("sui-form",{attrs:{method:"post",autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.send_email(t)}}},[o("sui-form-field",{staticStyle:{textalign:"center"}},[o("sui-message",{attrs:{info:""}},[e._v("我们会发送一封附带重置密码的链接的邮件到你的邮箱")])],1),e._v(" "),o("sui-form-field",{attrs:{error:!(!e.$v.form.email.$error&&!e.err_code)}},[o("sui-input",{attrs:{disabled:e.form.isLoading||e.form.isOK,"icon-position":"left",icon:"mail",placeholder:"邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),e.$v.form.email.$error?o("sui-form-field",[o("sui-message",{staticStyle:{"test-align":"center"},attrs:{negative:""}},[e.$v.form.email.required?e.$v.form.email.email?e._e():o("span",[e._v("邮箱格式不正确")]):o("span",[e._v("邮箱不能为空")])])],1):e._e(),e._v(" "),o("sui-form-field",[o("sui-button",{attrs:{fluid:"",disabled:e.form.isLoading||e.form.isOK,loading:e.form.isLoading,icon:e.form.isOK?"check":"none",color:e.form.isOK?"green":"blue"}},[e.form.isOK?o("span",[e._v(e._s(e.form.time)+"秒")]):o("span",[e._v("发送密码重置邮件")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{880:function(e,t,r){"use strict";r.r(t);var o=r(22),n={auth:"guest",head:function(){return{title:"忘记密码 - Saiblo"}},data:function(){return{form:{username:"",email:"",sec60:0,loading:!1},err_code:0}},validations:{form:{username:{required:o.required},email:{required:o.required,email:o.email}}},watch:{"form.username":function(){this.err_code=0},"form.email":function(){this.err_code=0}},methods:{sendEmail:function(){var e=this;this.$v.$touch(),this.$v.$invalid||(this.form.loading=!0,this.$axios.post("/api/users/forget_password/",this.form).then((function(){e.err_code=0,e.$notify.success({message:"发送邮件成功",title:"成功",timeout:1e3}),e.form.sec60=60,e.wait()})).catch((function(t){e.err_code=t.response.status,403==e.err_code&&(e.form.sec60=t.response.data.err_msg,e.wait())})).then((function(){e.form.loading=!1})))},wait:function(){var e=this;this.form.sec60&&setTimeout((function(){e.form.sec60-=1,e.wait()}),1e3)}}},m=r(7),component=Object(m.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("sui-grid",{attrs:{centered:""}},[r("sui-grid-column",{attrs:{computer:7,tablet:10,mobile:16}},[r("sui-segment",[r("sui-header",{tag:"h2",attrs:{"text-align":"center"}},[e._v("重置密码")]),e._v(" "),r("sui-step-group",{attrs:{fluid:"",size:"mini"}},[r("sui-step",{attrs:{active:"",icon:"paper plane"}},[r("sui-step-content",[r("sui-step-title",[e._v("发送邮件")]),e._v(" "),r("sui-step-description",[e._v("发送邮件进行验证")])],1)],1),e._v(" "),r("sui-step",{attrs:{icon:"check"}},[r("sui-step-content",[r("sui-step-title",[e._v("设置密码")]),e._v(" "),r("sui-step-description",[e._v("重新设置新的密码")])],1)],1)],1),e._v(" "),r("sui-form",{attrs:{method:"post",autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)}}},[r("sui-form-field",{staticStyle:{textalign:"center"}},[r("sui-message",{attrs:{info:""}},[e._v("\n                        请输入用户名与注册时所使用的邮箱，以确保您是本人。\n                        "),r("br"),e._v("\n                        之后我们会发送一封附带重置密码的链接的邮件到您的邮箱。\n                    ")])],1),e._v(" "),r("sui-form-field",{attrs:{error:!(!e.$v.form.username.$error&&!e.err_code)}},[r("sui-input",{attrs:{disabled:!(!e.form.sec60&&!e.form.loading),"icon-position":"left",icon:"user",placeholder:"用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),r("sui-form-field",{attrs:{error:!(!e.$v.form.email.$error&&!e.err_code)}},[r("sui-input",{attrs:{disabled:!(!e.form.sec60&&!e.form.loading),"icon-position":"left",icon:"mail",placeholder:"邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),e.$v.form.$error?r("sui-form-field",[r("sui-message",{staticStyle:{"test-align":"center"},attrs:{negative:""}},[r("sui-message-list",[e.$v.form.email.required?e.$v.form.email.email?e._e():r("sui-message-item",[e._v("邮箱格式不正确")]):r("sui-message-item",[e._v("邮箱不能为空")]),e._v(" "),e.$v.form.username.required?e._e():r("sui-message-item",[e._v("用户名不能为空")])],1)],1)],1):e._e(),e._v(" "),r("sui-form-field",[r("sui-button",{attrs:{fluid:"",disabled:!(!e.form.loading&&!e.form.sec60),loading:e.form.loading,icon:e.form.sec60?"check":"none",color:e.form.sec60?"green":"blue"}},[e.form.sec60?r("span",[e._v("邮件已发送，"+e._s(e.form.sec60)+" 后可以重新发送邮件")]):r("span",[e._v("发送密码重置邮件")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{887:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"邮箱验证 - Saiblo"}},auth:"guest",data:function(){return{success:!1}},created:function(){var t=this;void 0!==this.$route.query.username&&void 0!==this.$route.query.token?this.$axios.post("/api/users/".concat(this.$route.query.username,"/validate/"),{token:this.$route.query.token}).then((function(){t.success=!0,setTimeout((function(){t.$router.push("/login")}),1e3)})).catch((function(){setTimeout((function(){t.$router.push("/validate_email?username=".concat(t.form.username,"&sended=1"))}),1e3)})):this.$router.push("/")}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("sui-grid",[n("sui-grid-column",{attrs:{computer:7,tablet:10,mobile:16,centered:""}},[n("sui-segment",{staticStyle:{"text-align":"center"}},[t.success?n("div",[t._v("验证成功！正在"),n("nuxt-link",{attrs:{to:"/login"}},[t._v("跳转")]),t._v("至登录界面 ……")],1):n("div",[t._v("正在提交验证信息，请稍候 ……")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{818:function(t,e,n){var content=n(830);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("295c0f7a",content,!0,{sourceMap:!1})},829:function(t,e,n){"use strict";var o=n(818);n.n(o).a},830:function(t,e,n){(e=n(46)(!1)).push([t.i,".fade-enter-active[data-v-04c14d14],.fade-leave-active[data-v-04c14d14]{transition:opacity 3s}.fade-enter[data-v-04c14d14],.fade-leave-to[data-v-04c14d14]{opacity:0}",""]),t.exports=e},858:function(t,e,n){"use strict";n.r(e);var o={auth:!1,data:function(){return{visible:!0}},mounted:function(){this.$notify.success({title:"Hooray",message:"I am using iziToast!"})},methods:{handleDismiss:function(){var t=this;this.visible=!1,setTimeout((function(){t.visible=!0}),5e3)}}},c=(n(829),n(7)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade"}},[t.visible?n("sui-message",{attrs:{header:"Welcome back!",content:"This is a special notification which you can dismiss.",dismissable:""},on:{dismiss:t.handleDismiss}}):t._e()],1),t._v(" "),n("button",{on:{click:function(){return t.$notify.success({title:"Hooray",message:"I am using iziToast!"})}}},[t._v("\n    TEST\n  ")])],1)}),[],!1,null,"04c14d14",null);e.default=component.exports}}]);
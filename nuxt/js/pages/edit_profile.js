(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{876:function(e,r,o){"use strict";o.r(r);o(17);var t=o(23),n=t.helpers.regex("is_identity",/^[0-9]{17}[0-9|X|x]$/),m={head:function(){return{title:"修改信息 - Saiblo"}},data:function(){return{cardOneActive:!1,cardTwoActive:!1,profile_form:{username:this.$auth.$state.user.username,email:this.$auth.$state.user.email,name:this.$auth.$state.user.name,sex:this.$auth.$state.user.sex,school:this.$auth.$state.user.school,department:this.$auth.$state.user.department,biography:this.$auth.$state.user.biography,isLoading:!1,isOK:!1,err_code:0,err_msg:""},password_form:{username:this.$auth.$state.user.username,old_password:"",password:"",confirm_password:"",isLoading:!1,isOK:!1,err_code:0,err_msg:""},private_form:{identity:this.$auth.$state.user.identity,bank_account:this.$auth.$state.user.bank_account,bank:this.$auth.$state.user.bank,phone:this.$auth.$state.user.phone,qq:this.$auth.$state.user.qq,measurement:this.$auth.$state.user.measurement,postcode:this.$auth.$state.user.postcode,address:this.$auth.$state.user.address,isLoading:!1,isOK:!1},sex_options:[{value:"男",icon:"blue mars",text:"男"},{value:"女",icon:"red venus",text:"女"},{value:"保密",icon:"grey genderless",text:"保密"}]}},validations:{profile_form:{name:{maxLength:Object(t.maxLength)(20)},sex:{},school:{maxLength:Object(t.maxLength)(20)},department:{maxLength:Object(t.maxLength)(20)},username:{},email:{},biography:{maxLength:Object(t.maxLength)(200)}},password_form:{old_password:{required:t.required},password:{required:t.required},confirm_password:{required:t.required,sameAs:Object(t.sameAs)("password")}},private_form:{identity:{is_identity:n},bank_account:{integer:t.integer,minLength:Object(t.minLength)(16),maxLength:Object(t.maxLength)(19)},bank:{},phone:{integer:t.integer,minLength:Object(t.minLength)(11),maxLength:Object(t.maxLength)(11)},qq:{integer:t.integer,minLength:Object(t.minLength)(5),maxLength:Object(t.maxLength)(11)},measurement:{},postcode:{integer:t.integer,maxLength:Object(t.maxLength)(16)},address:{maxLength:Object(t.maxLength)(64)}}},watch:{"password_form.old_password":function(){this.password_form.err_code=0}},mounted:function(){},methods:{edit_profile:function(){var e=this;this.$v.profile_form.$touch(),this.$v.profile_form.$invalid||(this.profile_form.isLoading=!0,this.$axios.put("/api/users/".concat(this.$auth.$state.user.username,"/"),this.profile_form).then((function(){e.profile_form.err_code=0,e.profile_form.isOK=!0,e.$auth.fetchUser(),e.$notify.success({message:"修改成功",title:"成功",timeout:1e3}),setTimeout((function(){e.profile_form.isOK=!1}),1e3)}),(function(r){e.profile_form.err_code=r.response.status})).then((function(){e.profile_form.isLoading=!1})))},change_password:function(){var e=this;this.$v.password_form.$touch(),this.$v.password_form.$invalid||(this.password_form.isLoading=!0,this.$axios.put("/api/users/".concat(this.$auth.$state.user.username,"/update_password/"),this.password_form).then((function(){e.password_form.err_code=0,e.password_form.isOK=!0,e.$notify.success({message:"修改成功",title:"成功",timeout:1e3}),setTimeout((function(){e.password_form.isOK=!1}),1e3)}),(function(r){e.password_form.err_code=r.response.status})).then((function(){e.password_form.isLoading=!1})))},submit_private:function(){var e=this;this.$v.private_form.$touch(),this.$v.private_form.$invalid||(this.private_form.isLoading=!0,this.$axios.put("/api/profile/",this.private_form).then((function(){e.private_form.err_code=0,e.private_form.isOK=!0,e.$auth.fetchUser(),e.$notify.success({message:"修改成功",title:"成功",timeout:1e3}),setTimeout((function(){e.private_form.isOK=!1}),1e3)}),(function(r){e.private_form.err_code=r.response.status})).then((function(){e.private_form.isLoading=!1})))}}},f=o(7),component=Object(f.a)(m,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("sui-grid",{attrs:{centered:"",stackable:""}},[o("sui-grid-row",[o("sui-grid-column",[o("sui-header",{tag:"h1"},[e._v("修改资料")])],1)],1),e._v(" "),o("sui-grid-row",[o("sui-grid-column",{attrs:{width:12}},[o("sui-segment",[o("sui-form",{attrs:{method:"POST"},on:{submit:function(r){return r.preventDefault(),e.edit_profile(r)}}},[o("sui-form-fields",{attrs:{fields:2}},[o("sui-form-field",[o("label",[e._v("用户名")]),e._v(" "),o("sui-input",{attrs:{disabled:"",placeholder:"用户名"},model:{value:e.profile_form.username,callback:function(r){e.$set(e.profile_form,"username",r)},expression:"profile_form.username"}})],1),e._v(" "),o("sui-form-field",[o("label",[e._v("邮箱")]),e._v(" "),o("sui-input",{attrs:{disabled:"",placeholder:"邮箱",type:"email"},model:{value:e.profile_form.email,callback:function(r){e.$set(e.profile_form,"email",r)},expression:"profile_form.email"}})],1)],1),e._v(" "),o("sui-form-fields",{attrs:{fields:2}},[o("sui-form-field",{attrs:{error:!!e.$v.profile_form.name.$error}},[o("label",[e._v("姓名")]),e._v(" "),o("sui-input",{attrs:{disabled:e.profile_form.isLoading||e.profile_form.isOK,placeholder:"姓名",type:"text"},model:{value:e.profile_form.name,callback:function(r){e.$set(e.profile_form,"name",r)},expression:"profile_form.name"}})],1),e._v(" "),o("sui-form-field",[o("label",[e._v("性别")]),e._v(" "),o("sui-dropdown",{attrs:{disabled:e.profile_form.isLoading||e.profile_form.isOK,selection:"",placeholder:"性别",options:e.sex_options},model:{value:e.profile_form.sex,callback:function(r){e.$set(e.profile_form,"sex",r)},expression:"profile_form.sex"}})],1)],1),e._v(" "),o("sui-form-fields",{attrs:{fields:2}},[o("sui-form-field",{attrs:{error:!!e.$v.profile_form.school.$error}},[o("label",[e._v("学校")]),e._v(" "),o("sui-input",{attrs:{disabled:e.profile_form.isLoading||e.profile_form.isOK,placeholder:"学校"},model:{value:e.profile_form.school,callback:function(r){e.$set(e.profile_form,"school",r)},expression:"profile_form.school"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:!!e.$v.profile_form.department.$error}},[o("label",[e._v("院系")]),e._v(" "),o("sui-input",{attrs:{disabled:e.profile_form.isLoading||e.profile_form.isOK,placeholder:"院系"},model:{value:e.profile_form.department,callback:function(r){e.$set(e.profile_form,"department",r)},expression:"profile_form.department"}})],1)],1),e._v(" "),o("sui-form-field",{attrs:{error:!!e.$v.profile_form.biography.$error}},[o("label",[e._v("自我介绍")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.profile_form.biography,expression:"profile_form.biography"}],attrs:{disabled:e.profile_form.isLoading||e.profile_form.isOK,rows:"4"},domProps:{value:e.profile_form.biography},on:{input:function(r){r.target.composing||e.$set(e.profile_form,"biography",r.target.value)}}})]),e._v(" "),e.$v.profile_form.name.$error||e.$v.profile_form.school.$error||e.$v.profile_form.department.$error||e.$v.profile_form.biography.$error?o("sui-form-field",[o("sui-message",{attrs:{negative:""}},[o("sui-message-list",[e.$v.profile_form.name.maxLength?e._e():o("sui-message-item",[e._v(" 姓名文本过长 ")]),e._v(" "),e.$v.profile_form.school.maxLength?e._e():o("sui-message-item",[e._v(" 学校文本过长 ")]),e._v(" "),e.$v.profile_form.department.maxLength?e._e():o("sui-message-item",[e._v(" 院系文本过长 ")]),e._v(" "),e.$v.profile_form.biography.maxLength?e._e():o("sui-message-item",[e._v(" 自我介绍文本过长 ")])],1)],1)],1):e._e(),e._v(" "),o("sui-form-field",{staticStyle:{"text-align":"right"}},[o("sui-button",{staticStyle:{width:"7em","margin-right":"0"},attrs:{disabled:e.profile_form.isLoading||e.profile_form.isOK,loading:e.profile_form.isLoading,color:e.profile_form.isOK?"green":"blue",icon:e.profile_form.isOK?"check":"none"}},[e.profile_form.isOK?e._e():o("span",[e._v("保存资料")])])],1)],1)],1),e._v(" "),o("sui-header",{tag:"h1"},[e._v("修改密码")]),e._v(" "),o("sui-segment",[o("sui-form",{attrs:{method:"POST"},on:{submit:function(r){return r.preventDefault(),e.change_password(r)}}},[o("sui-form-field",{attrs:{error:!(!e.$v.password_form.old_password.$error&&!e.password_form.err_code),required:""}},[o("label",[e._v("密码")]),e._v(" "),o("sui-input",{attrs:{disabled:e.password_form.isLoading||e.password_form.isOK,placeholder:"密码",type:"password"},model:{value:e.password_form.old_password,callback:function(r){e.$set(e.password_form,"old_password",r)},expression:"password_form.old_password"}})],1),e._v(" "),o("sui-form-fields",{attrs:{fields:2}},[o("sui-form-field",{attrs:{error:!!e.$v.password_form.password.$error}},[o("label",[e._v("新密码")]),e._v(" "),o("sui-input",{attrs:{disabled:e.password_form.isLoading||e.password_form.isOK,placeholder:"新密码",type:"password"},model:{value:e.password_form.password,callback:function(r){e.$set(e.password_form,"password",r)},expression:"password_form.password"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:!!e.$v.password_form.confirm_password.$error}},[o("label",[e._v("确认密码")]),e._v(" "),o("sui-input",{attrs:{disabled:e.password_form.isLoading||e.password_form.isOK,placeholder:"确认密码",type:"password"},model:{value:e.password_form.confirm_password,callback:function(r){e.$set(e.password_form,"confirm_password",r)},expression:"password_form.confirm_password"}})],1)],1),e._v(" "),e.$v.password_form.old_password.$error||e.$v.password_form.password.$error||e.$v.password_form.confirm_password.$error?o("sui-form-field",[o("sui-message",{attrs:{negative:""}},[o("sui-message-list",[e.$v.password_form.old_password.required?e._e():o("sui-message-item",[e._v(" 请先填写原密码 ")]),e._v(" "),e.$v.password_form.password.required?e._e():o("sui-message-item",[e._v(" 请填写新密码 ")]),e._v(" "),e.$v.password_form.confirm_password.required?e._e():o("sui-message-item",[e._v(" 请确认新密码 ")]),e._v(" "),e.$v.password_form.password.required&&e.$v.password_form.confirm_password.required&&!e.$v.password_form.confirm_password.sameAs?o("sui-message-item",[e._v("\n                                    两次密码填写不一致\n                                ")]):e._e()],1)],1)],1):e._e(),e._v(" "),o("sui-form-field",{staticStyle:{"text-align":"right"}},[o("sui-button",{staticStyle:{width:"7em","margin-right":"0"},attrs:{disabled:e.password_form.isLoading||e.password_form.isOK,loading:e.password_form.isLoading,color:e.password_form.isOK?"green":"blue",icon:e.password_form.isOK?"check":"none"}},[e.password_form.isOK?e._e():o("span",[e._v("确认修改")])])],1)],1)],1),e._v(" "),o("sui-header",{tag:"h1"},[e._v("私密信息")]),e._v(" "),o("sui-segment",[o("sui-form",{on:{submit:function(r){return r.preventDefault(),e.submit_private()}}},[o("sui-form-field",[o("sui-message",{attrs:{info:""}},[e._v("私密信息包括您的"),o("b",[e._v("身份证")]),e._v("、"),o("b",[e._v("银行卡号")]),e._v("、"),o("b",[e._v("开户行")]),e._v("、"),o("b",[e._v("手机号码")]),e._v("、"),o("b",[e._v("QQ")]),e._v("和"),o("b",[e._v("文化衫尺寸")]),e._v("等等信息，这些信息"),o("b",[e._v("不会被公开")]),e._v("。而比赛所获得的"),o("b",[e._v("奖金")]),e._v("会根据您所填写的这些信息进行发放。因此，当需要填写时，请确保信息的正确。\n                        ")])],1),e._v(" "),o("sui-form-field",{attrs:{error:e.$v.private_form.identity.$error}},[o("label",[e._v("身份证")]),e._v(" "),o("sui-input",{attrs:{icon:"address card","icon-position":"left",placeholder:"身份证",disabled:e.private_form.isLoading},model:{value:e.private_form.identity,callback:function(r){e.$set(e.private_form,"identity",r)},expression:"private_form.identity"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:e.$v.private_form.bank_account.$error}},[o("label",[e._v("银行卡号")]),e._v(" "),o("sui-input",{attrs:{icon:"credit card","icon-position":"left",placeholder:"银行卡号",disabled:e.private_form.isLoading},model:{value:e.private_form.bank_account,callback:function(r){e.$set(e.private_form,"bank_account",r)},expression:"private_form.bank_account"}})],1),e._v(" "),o("sui-form-field",[o("label",[e._v("开户行")]),e._v(" "),o("sui-input",{attrs:{icon:"money bill","icon-position":"left",placeholder:"开户行",disabled:e.private_form.isLoading},model:{value:e.private_form.bank,callback:function(r){e.$set(e.private_form,"bank",r)},expression:"private_form.bank"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:e.$v.private_form.phone.$error}},[o("label",[e._v("手机号码")]),e._v(" "),o("sui-input",{attrs:{icon:"phone","icon-position":"left",placeholder:"手机号码",disabled:e.private_form.isLoading},model:{value:e.private_form.phone,callback:function(r){e.$set(e.private_form,"phone",r)},expression:"private_form.phone"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:e.$v.private_form.qq.$error}},[o("label",[e._v("QQ")]),e._v(" "),o("sui-input",{attrs:{icon:"qq","icon-position":"left",placeholder:"QQ",disabled:e.private_form.isLoading},model:{value:e.private_form.qq,callback:function(r){e.$set(e.private_form,"qq",r)},expression:"private_form.qq"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:e.$v.private_form.measurement.$error}},[o("label",[e._v("文化衫尺寸")]),e._v(" "),o("sui-input",{attrs:{icon:"cube","icon-position":"left",placeholder:"文化衫尺寸",disabled:e.private_form.isLoading},model:{value:e.private_form.measurement,callback:function(r){e.$set(e.private_form,"measurement",r)},expression:"private_form.measurement"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:e.$v.private_form.postcode.$error}},[o("label",[e._v("邮政编码")]),e._v(" "),o("sui-input",{attrs:{icon:"truck","icon-position":"left",placeholder:"邮政编码",disabled:e.private_form.isLoading},model:{value:e.private_form.postcode,callback:function(r){e.$set(e.private_form,"postcode",r)},expression:"private_form.postcode"}})],1),e._v(" "),o("sui-form-field",{attrs:{error:e.$v.private_form.address.$error}},[o("label",[e._v("邮寄地址")]),e._v(" "),o("sui-input",{attrs:{icon:"map marker alternate","icon-position":"left",placeholder:"邮寄地址，如需邮寄务必填写详细",disabled:e.private_form.isLoading},model:{value:e.private_form.address,callback:function(r){e.$set(e.private_form,"address",r)},expression:"private_form.address"}})],1),e._v(" "),o("sui-form-field",{directives:[{name:"show",rawName:"v-show",value:e.$v.private_form.$error,expression:"$v.private_form.$error"}]},[o("sui-message",{attrs:{negative:""}},[o("sui-message-list",[o("sui-message-item",{directives:[{name:"show",rawName:"v-show",value:e.$v.private_form.identity.$error,expression:"$v.private_form.identity.$error"}]},[e._v(" 身份证填写不正确 ")]),e._v(" "),o("sui-message-item",{directives:[{name:"show",rawName:"v-show",value:e.$v.private_form.bank_account.$error,expression:"$v.private_form.bank_account.$error"}]},[e._v(" 银行卡号填写不正确 ")]),e._v(" "),o("sui-message-item",{directives:[{name:"show",rawName:"v-show",value:e.$v.private_form.phone.$error,expression:"$v.private_form.phone.$error"}]},[e._v(" 手机号填写不正确 ")]),e._v(" "),o("sui-message-item",{directives:[{name:"show",rawName:"v-show",value:e.$v.private_form.qq.$error,expression:"$v.private_form.qq.$error"}]},[e._v(" QQ填写不正确 ")]),e._v(" "),o("sui-message-item",{directives:[{name:"show",rawName:"v-show",value:e.$v.private_form.postcode.$error,expression:"$v.private_form.postcode.$error"}]},[e._v(" 邮政编码填写不正确 ")]),e._v(" "),o("sui-message-item",{directives:[{name:"show",rawName:"v-show",value:e.$v.private_form.address.$error,expression:"$v.private_form.address.$error"}]},[e._v(" 邮寄地址填写不正确 ")])],1)],1)],1),e._v(" "),o("sui-form-field",{staticStyle:{"text-align":"right"}},[o("sui-button",{staticStyle:{width:"7em","margin-right":"0"},attrs:{disabled:e.private_form.isLoading||e.private_form.isOK,loading:e.private_form.isLoading,color:e.private_form.isOK?"green":"blue",icon:e.private_form.isOK?"check":"none"}},[e.private_form.isOK?e._e():o("span",[e._v("提交信息")])])],1)],1)],1)],1),e._v(" "),o("sui-grid-column",{attrs:{width:4}},[o("sui-dimmer-dimmable",{nativeOn:{mouseenter:function(r){e.cardOneActive=!0},mouseleave:function(r){e.cardOneActive=!1}}},[o("sui-image",{attrs:{rounded:"",src:"https://sdn.geekzu.org/avatar/"+e.$auth.$state.user.email_md5+"?s=1000&d=mm"}}),e._v(" "),o("sui-dimmer",{staticStyle:{"border-radius":"0.3125em"},attrs:{active:e.cardOneActive,blurring:""}},[o("sui-button",{tag:"a",attrs:{inverted:"",icon:"edit",href:"http://www.gravatar.com",target:"_blank"}},[e._v("修改头像")])],1)],1)],1)],1)],1)}),[],!1,null,"68e64b50",null);r.default=component.exports}}]);
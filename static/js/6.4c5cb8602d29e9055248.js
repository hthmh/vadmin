webpackJsonp([6],{q7VQ:function(e,r){},xJsL:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={data:function(){return{ruleForm:{name:"",password:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"change"}]}}},methods:{onSubmit:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;sessionStorage.setItem("user",r.ruleForm.name),r.$router.push("/")})},resetForm:function(e){this.$refs[e].resetFields()}}},s={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-card",{staticClass:"box-card"},[t("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"80px"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key))return null;e.onSubmit("ruleForm")}}},[t("el-form-item",{attrs:{label:"用户名",prop:"name"}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"login",attrs:{type:"primary"},on:{click:function(r){e.onSubmit("ruleForm")}}},[e._v("登  录")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重  置")])],1)],1)],1)},staticRenderFns:[]};var n=t("X4nt")(o,s,!1,function(e){t("q7VQ")},null,null);r.default=n.exports}});
webpackJsonp([10],{J6mD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{staticClass:"text-center",staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:"","row-class-name":e.tableRowClassName,"max-height":"250"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection","min-width":"50"}}),e._v(" "),e._l(e.columnsData,function(t,a){return t.show?n("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"",label:t.label,"min-width":t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.edit?n("el-input",{attrs:{placeholder:"请输入"},model:{value:a.row[t.prop],callback:function(n){e.$set(a.row,t.prop,n)},expression:"scope.row[item.prop]"}}):n("span",[e._v(e._s(a.row[t.prop]))])]}}])}):e._e()}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v(e._s(t.row.edit?"保存":"编辑"))]),e._v(" "),t.row.edit?e._e():n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.deleteRow(t.$index,e.tableData)}}},[e._v("删除")])]}}])})],2),e._v(" "),e._l(e.columnsData,function(t,a){return n("el-checkbox",{key:a,attrs:{label:t.prop},model:{value:t.show,callback:function(n){e.$set(t,"show",n)},expression:"item.show"}})}),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "+e._s(e.multipleSelection)+"\n")],2)},staticRenderFns:[]};var o=n("X4nt")({methods:{deleteRow:function(e,t){t.splice(e,1)},handleEdit:function(e,t){t.edit&&this.$message({message:"保存成功",type:"success"}),this.$set(t,"edit",!t.edit)},tableRowClassName:function(e){e.row;var t=e.rowIndex;return 1===t?"warning-row":3===t?"success-row":""},handleSelectionChange:function(e){this.multipleSelection=e}},data:function(){return{multipleSelection:[],columnsData:[{prop:"date",label:"日期",width:150,show:!0},{prop:"name",label:"姓名",width:"120",show:!0},{prop:"province",label:"省份",width:"120",show:!0},{prop:"city",label:"市区",width:"120",show:!0},{prop:"address",label:"地址",width:"300",show:!0},{prop:"zip",label:"邮编",width:"120",show:!0}],tableData:[{edit:!0,date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}]}}},a,!1,function(e){n("P0EX")},null,null);t.default=o.exports},P0EX:function(e,t){}});
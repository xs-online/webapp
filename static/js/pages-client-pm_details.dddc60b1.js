(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-pm_details"],{6134:function(t,e,n){"use strict";var i=n("fb7f"),a=n.n(i);a.a},"628e":function(t,e,n){"use strict";n.r(e);var i=n("76da"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"76da":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f07e")),o=i(n("c964")),s=(getApp(),{data:function(){return{info:{},id:0}},onReachBottom:function(){this.more_data&&(this.pagenum+=1,this.get_list())},onLoad:function(t){"undefined"!=typeof t.id&&(this.id=t.id),console.log(t),this.get_details()},methods:{go:function(t){uni.navigateTo({url:t})},get_details:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var n,i,o;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,console.log("开始请求数据"),0!=n.id){e.next=4;break}return e.abrupt("return",!1);case 4:return i={id:n.id},e.next=7,uni.$api.index.getPmDetails(i);case 7:o=e.sent,console.log(o),n.info=o.info;case 10:case"end":return e.stop()}}),e)})))()}}});e.default=s},"7e6d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-3d71fe56]{background:#111;color:#fff}body.?%PAGE?%[data-v-3d71fe56]{background:#111}",""]),t.exports=e},a09c:function(t,e,n){"use strict";n.r(e);var i=n("b865"),a=n("628e");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6134");var s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3d71fe56",null,!1,i["a"],void 0);e["default"]=u.exports},b865:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",[n("v-uni-view",{staticClass:"mt10 pad"},[n("v-uni-view",{staticClass:"fs20 bold"},[t._v(t._s(t.info.pm_title))])],1),n("v-uni-view",{staticClass:"pad fs14 item-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("/pages/index/message_list")}}},[n("v-uni-image",{staticClass:"pic-15 mr5",attrs:{src:"/static/btn_inform_notice.png"}}),t._v("公告"),n("v-uni-text",{staticClass:"gray999 ml10"},[t._v(t._s(t.info.post_date))])],1),n("v-uni-view",{staticClass:"mt10 pad"},[n("v-uni-rich-text",{attrs:{nodes:t.info.pm_body}})],1)],1)],1)},a=[]},fb7f:function(t,e,n){var i=n("7e6d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6ef0c760",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
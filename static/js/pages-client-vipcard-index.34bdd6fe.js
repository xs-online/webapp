(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-vipcard-index"],{"10dc":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".vipcard-detail-header[data-v-c43467ea]{position:relative;height:%?480?%}.vipcard-detail-header .bg[data-v-c43467ea]{width:100%;height:%?480?%}.vipcard-detail-header .main[data-v-c43467ea]{height:%?480?%;width:100%;position:absolute;left:0;top:0}.vipcard-detail-header .vipcard-num[data-v-c43467ea]{font-size:%?24?%;font-weight:700;line-height:%?48?%;background:linear-gradient(180deg,#f2dca9,#c79556);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.vipcard-detail-header .vipcard-face[data-v-c43467ea]{width:%?112?%;height:%?112?%;border:%?8?% solid hsla(0,0%,100%,.9);border-radius:%?100?%;background:hsla(0,0%,100%,.9)}.vipcard-detail-header .vipcard-level-tag[data-v-c43467ea]{height:%?40?%;border-radius:%?20?%;padding:0 %?16?%;display:flex;justify-content:center;align-items:center;border:%?2?% solid hsla(0,0%,100%,.3)}.vipcard-detail-main[data-v-c43467ea]{position:relative;margin-top:%?-212?%}.vipcard-swiper[data-v-c43467ea]{height:%?280?%;width:100%}.vipcard-swiper .swiper-item[data-v-c43467ea]{width:100%;padding-left:15px /**就用PX了**/}.vipcard-swiper .swiper-item .card[data-v-c43467ea]{height:%?280?%;width:100%;position:relative;border-radius:%?32?%;overflow:hidden}.vipcard-swiper .swiper-item .card .bg[data-v-c43467ea]{width:100%;height:%?280?%}.vipcard-swiper .swiper-item .card .main[data-v-c43467ea]{width:100%;height:%?280?%;position:absolute;left:0;top:0;z-index:2;padding:%?72?%}.vipcard-swiper .swiper-item .card .main .vipcard-info[data-v-c43467ea]{height:%?80?%;background:#fff;border-radius:%?24?%;padding:0 %?20?%;text-align:center;line-height:%?80?%;color:red;font-size:%?30?%}.vipcard-swiper .swiper-item .card .vip-type-tag[data-v-c43467ea]{width:%?104?%;height:%?40?%;background:linear-gradient(136deg,#4e4e4e,#262728);border-radius:%?0?% %?20?% %?20?% %?0?%;text-align:center;line-height:%?40?%;font-size:%?24?%;color:#f7e3c3;font-weight:500;position:absolute;z-index:3;left:0;top:%?40?%}.vipcard-con-box[data-v-c43467ea]{width:%?300?%;background:#000;box-shadow:%?0?% %?4?% %?32?% %?0?% rgba(0,0,0,.04);border-radius:%?8?%}",""]),t.exports=a},"3d4a":function(t,a,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("d0af")),s=i(e("f3f3")),r=i(e("f07e")),d=i(e("c964"));e("14d9"),e("c975"),e("e25e");var c={data:function(){return{vipLevel:"",rankNum:290,selectId:0,vipname:"",showBirthday:!1,avatar:"",userinfo:[],vipSetting:[{level:1,name:"普通会员",rank_need:100},{level:2,name:"VIP会员",rank_need:200}]}},onLoad:function(){},onShow:function(){var t=this;uni.getStorageSync("userinfo")?this.ongrzlTap():setTimeout((function(){t.auto_create_account()}),1e3)},computed:{getVipType:function(){var t=new Array;for(var a in this.vipSetting){var e=0;this.vipLevel>this.vipSetting[a].level?e=1:this.vipLevel==this.vipSetting[a].level&&(e=2),t.push(e)}return t}},methods:{ongrzlTap:function(){var t=this;return(0,d.default)((0,r.default)().mark((function a(){var e;return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e={uid:uni.getStorageSync("userinfo").uid,token:uni.getStorageSync("userinfo").token},console.log("yyyyyyyyyyyyyyyyyy",uni.getStorageSync("userinfo")),console.log("vipppppppppppppppppppppppppppp",e),uni.request({url:t.configs.webUrl+"/api/user/index",data:e,success:function(a){if(1==a.data.code){var e=a.data.data;if(t.userinfo=e,t.vipLevel=e.group_id,1==t.vipLevel?t.vipname="普通会员":t.vipname="VIP会员",a.data.data.avatar){var i=a.data.data.avatar;-1!=i.indexOf("data:image")?t.avatar="":-1!=i.indexOf("http")?t.avatar=a.data.data.avatar:t.avatar=t.configs.imgUrl+a.data.data.avatar}else t.avatar=""}else uni.showToast({title:a.data.msg,icon:"none"})},fail:function(t,a){}});case 4:case"end":return a.stop()}}),a)})))()},changeVip:function(t){this.selectId=parseInt(t.detail.current)},vipcm:function(){uni.navigateTo({url:"/pages/client/vipcard/vipcm"})},auto_create_account:function(){var t=this;return(0,d.default)((0,r.default)().mark((function a(){var e,i,d,c,o,l,v,u;return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e={account:t.rand(6)+"@daji.app",password:t.rand(6),pid:t.invitation},null!=uni.$systemInfo&&(i={__appVersion:"undefined"!=uni.$systemInfo.appVersion?uni.$systemInfo.appVersion:"",__from:uni.$platform,__model:"undefined"!=uni.$systemInfo.model?uni.$systemInfo.model:"",__osName:"undefined"!=uni.$systemInfo.osName?uni.$systemInfo.osName:"",__deviceId:"undefined"!=uni.$systemInfo.deviceId?uni.$systemInfo.deviceId:"",__oaid:"undefined"!=uni.$systemInfo.oaid?uni.$systemInfo.oaid:"",device_json:uni.$systemInfo},e=(0,s.default)((0,s.default)({},i),e)),a.next=4,t.$httpas.get("/api/user/login",e);case 4:if(d=a.sent,c=(0,n.default)(d,2),o=c[0],l=c[1],t.$httpas.errorCheck(o,l)){a.next=10;break}return a.abrupt("return");case 10:console.log(l),1===l.data.code?(l.data.data.userinfo.avatar?(v=l.data.data.userinfo.avatar,u=-1!=v.indexOf("data:image")?"":-1!=v.indexOf("http")?l.data.data.userinfo.avatar:t.configs.imgUrl+l.data.data.userinfo.avatar):u="",uni.setStorage({key:"avatar",data:u}),uni.setStorage({key:"userinfo",data:l.data.data.userinfo}),uni.setStorage({key:"config",data:l.data.data.config}),t.ongrzlTap()):uni.showToast({title:l.data.msg,icon:"none"});case 12:case"end":return a.stop()}}),a)})))()}}};a.default=c},4053:function(t,a,e){"use strict";e.r(a);var i=e("703b"),n=e("5d3a");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("df4c");var r=e("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"c43467ea",null,!1,i["a"],void 0);a["default"]=d.exports},"5a0e":function(t,a,e){"use strict";var i=e("e34a"),n=e.n(i);n.a},"5a8b":function(t,a,e){var i=e("10dc");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("7b27c0be",i,!0,{sourceMap:!1,shadowMode:!1})},"5d3a":function(t,a,e){"use strict";e.r(a);var i=e("3d4a"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"6e4f":function(t,a,e){"use strict";e.r(a);var i=e("80a6"),n=e("c16c");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("5a0e");var r=e("f0c5"),d=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4e31f454",null,!1,i["a"],void 0);a["default"]=d.exports},"703b":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={orderVipcm:e("ea88").default,dialogBirthday:e("6e4f").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.vipSetting.length>0?e("v-uni-view",[e("v-uni-view",{staticClass:"vipcard-detail-header"},[e("v-uni-image",{staticClass:"bg",attrs:{src:t.statics.vipcardDetailHeaderBg}}),e("v-uni-view",{staticClass:"main pt20"},[e("v-uni-view",{staticClass:"flex alcenter space"},[e("v-uni-view",{staticClass:"col3 text-center"},[e("v-uni-view",{staticClass:"ft12 cl-w8"},[t._v(t._s(t.vipLevel>1?"到期日期":""))]),e("v-uni-view",{staticClass:"mt8 vipcard-num"},[t._v(t._s(t.vipLevel>1?t.userinfo.dtime:""))])],1),e("v-uni-view",{staticClass:"col3 flex-center "},[e("v-uni-image",{staticClass:"vipcard-face",attrs:{src:t.avatar}})],1),e("v-uni-view",{staticClass:"col3 text-center"},[e("v-uni-view",{staticClass:"ft12 cl-w8"},[t._v(t._s(t.vipLevel>1?"剩餘天數":""))]),t.userinfo.dqts>=0?e("v-uni-view",{staticClass:"mt8 vipcard-num"},[t._v(t._s(t.vipLevel>1?t.userinfo.dqts+"天":""))]):t._e(),t.userinfo.dqts<0?e("v-uni-view",{staticClass:"mt8 vipcard-num"},[t._v(t._s(t.vipLevel>1?"已經到期"+-t.userinfo.dqts+"天":""))]):t._e()],1)],1),e("v-uni-view",{staticClass:"flex center mt8"},[e("v-uni-view",{staticClass:"vipcard-level-tag ft12 cl-w8"},[t._v("ID: "+t._s(t.userinfo.id)+" , 目前等級:"),e("v-uni-text",{staticClass:"ftw600 ft12 ml4"},[t._v(t._s(t.vipname))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"vipcard-detail-main"},[e("v-uni-view",{staticClass:"radius-20  lr15 pt10 pb10 mb10 shadow_red",staticStyle:{"background-image":"linear-gradient(45deg,#ec9306,#ea1675)"}},[e("order-vipcm")],1),e("v-uni-view",{staticClass:"lr15 radius-15 bg_gray333 mt20",staticStyle:{border:"1px solid #d0a66e"}},[e("v-uni-view",{staticClass:" noshadow pd16_15"},[e("v-uni-view",{staticClass:"ft16 ftw600 cl-main",staticStyle:{color:"#d0a66e"}},[t._v("VIP會員持有權益")]),e("v-uni-view",{staticClass:"flex space alcenter mt16"},[e("v-uni-view",{staticClass:"vipcard-con-box pd20_15 flex alcenter"},[e("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:t.statics.vipTq[0]}}),e("v-uni-view",{staticClass:"ml10"},[e("v-uni-view",{staticClass:"ft14 ftw600 cl-main"},[t._v("福利")]),e("v-uni-view",{staticClass:"mt6 ft12 cl-notice"},[t._v("超禮包")])],1)],1),e("v-uni-view",{staticClass:"vipcard-con-box pd20_15 flex alcenter"},[e("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:t.statics.vipTq[1]}}),e("v-uni-view",{staticClass:"ml10"},[e("v-uni-view",{staticClass:"ft14 ftw600 cl-main"},[t._v("特價折扣")]),e("v-uni-view",{staticClass:"mt6 ft12 cl-notice"},[t._v("會員專屬價")])],1)],1)],1),e("v-uni-view",{staticClass:"flex space alcenter mt16"},[e("v-uni-view",{staticClass:"vipcard-con-box pd20_15 flex alcenter"},[e("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:t.statics.vipTq[2]}}),e("v-uni-view",{staticClass:"ml10"},[e("v-uni-view",{staticClass:"ft14 ftw600 cl-main"},[t._v("專屬特惠")]),e("v-uni-view",{staticClass:"mt6 ft12 cl-notice"},[t._v("免費影片")])],1)],1),e("v-uni-view",{staticClass:"vipcard-con-box pd20_15 flex alcenter"},[e("v-uni-image",{staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:t.statics.vipTq[3]}}),e("v-uni-view",{staticClass:"ml10"},[e("v-uni-view",{staticClass:"ft14 ftw600 cl-main"},[t._v("專屬顧問")]),e("v-uni-view",{staticClass:"mt6 ft12 cl-notice"},[t._v("獨家找片")])],1)],1)],1)],1)],1)],1),t.showBirthday?e("dialog-birthday",{attrs:{showOnly:!0,title:"V"+t.vipSetting[t.selectId].level+t.vipSetting[t.selectId].name+"生日礼包"},on:{closed:function(a){arguments[0]=a=t.$handleEvent(a),t.showBirthday=!1}}}):t._e()],1):t._e()},s=[]},"80a6":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"birthday-modal-middle"},[e("v-uni-view",{staticClass:"bg"}),e("v-uni-view",{staticClass:"birthday-modal-middle-main",class:t.show?"animated fast zoomInUp":"animated fast  zoomOutDown"},[e("v-uni-view",{staticClass:"middle-main"},[e("v-uni-view",{staticClass:"middle-closed",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.closed.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont  iconbtn_close cl-notice ft20"})],1),e("v-uni-view",{staticClass:"text-center"},[e("v-uni-text",{staticClass:"ft16 ftw600 cl-main"},[t._v(t._s(t.title))])],1),e("v-uni-view",{staticClass:"text-center mt24"},[e("v-uni-image",{staticStyle:{width:"412rpx",height:"296rpx"},attrs:{src:t.statics.birthdayPic}})],1),e("v-uni-view",{staticClass:"mt24",staticStyle:{"max-height":"400rpx","overflow-y":"scroll"}},[e("v-uni-view",{staticClass:"birthday-gift-box pd16_15"},[e("v-uni-view",{staticClass:"flex alcenter space"},[e("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("专业洗剪吹3次")]),e("v-uni-text",{staticClass:"ft12 cl-notice"},[t._v("x1")])],1),e("v-uni-view",{staticClass:"mt8 ft12 cl-orange"},[t._v("价值¥188")])],1),e("v-uni-view",{staticClass:"birthday-gift-box pd16_15 mt8"},[e("v-uni-view",{staticClass:"flex alcenter space"},[e("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("专业洗剪吹3次")]),e("v-uni-text",{staticClass:"ft12 cl-notice"},[t._v("x1")])],1),e("v-uni-view",{staticClass:"mt8 ft12 cl-orange"},[t._v("价值¥188")])],1),e("v-uni-view",{staticClass:"birthday-gift-box pd16_15 mt8"},[e("v-uni-view",{staticClass:"flex alcenter space"},[e("v-uni-text",{staticClass:"ft14 cl-main"},[t._v("专业洗剪吹3次")]),e("v-uni-text",{staticClass:"ft12 cl-notice"},[t._v("x1")])],1),e("v-uni-view",{staticClass:"mt8 ft12 cl-orange"},[t._v("价值¥188")])],1)],1)],1),0==t.showOnly?e("v-uni-view",{staticClass:"birthday-get-btn",style:{background:t.tempColor}},[t._v("确定领取")]):t._e()],1)],1)},n=[]},bd65:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".birthday-modal-middle[data-v-4e31f454]{width:100%;height:100vh;position:fixed;z-index:400;left:0;top:0}.birthday-modal-middle .bg[data-v-4e31f454]{position:fixed;width:100%;height:100vh;background:rgba(0,0,0,.5);z-index:401;left:0;top:0}.birthday-modal-middle-main[data-v-4e31f454]{width:%?690?%;background:#f5f6fa;border-radius:%?32?%;position:fixed;top:50%;left:calc(50% - %?345?%);-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:402;overflow:hidden}.birthday-modal-middle-main .middle-main[data-v-4e31f454]{position:relative;padding:%?64?% %?30?% %?30?% %?30?%}.birthday-modal-middle-main .middle-closed[data-v-4e31f454]{position:absolute;width:%?40?%;height:%?40?%;right:%?50?%;top:%?50?%;text-align:center;line-height:%?40?%}.birthday-gift-box[data-v-4e31f454]{width:100%;height:%?148?%;background:#fff;border-radius:%?8?%}.birthday-get-btn[data-v-4e31f454]{width:100%;height:%?96?%;text-align:center;font-size:%?32?%;color:#fff;font-weight:500;line-height:%?96?%}",""]),t.exports=a},bf28:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{title:{type:String,default:"祝你生日快乐"},datas:{type:Array,default:function(){return new Array}},showOnly:{type:Boolean,default:!1}},data:function(){return{show:!1}},created:function(){this.show=!0},methods:{closed:function(){var t=this;this.show=!1,setTimeout((function(){t.$emit("closed",!0)}),400)}}};a.default=i},c16c:function(t,a,e){"use strict";e.r(a);var i=e("bf28"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},df4c:function(t,a,e){"use strict";var i=e("5a8b"),n=e.n(i);n.a},e34a:function(t,a,e){var i=e("bd65");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1e134810",i,!0,{sourceMap:!1,shadowMode:!1})}}]);
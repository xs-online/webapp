(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-tuan-index"],{"0602":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={props:["banners","titles"],data:function(){return{banners1:[]}}}},"06f3":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tab-nav-plus"},[a("v-uni-view",{staticClass:"tab-nav-plus-main",class:t.isFixed?"fixed":""},[a("v-uni-scroll-view",{staticClass:"tab-nav-plus-scroll",attrs:{"scroll-left":t.getLeft,"scroll-with-animation":!0,"scroll-x":!0}},t._l(t.tabs,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tit",class:t.selectIndex==i?"on":"",style:{color:t.selectIndex==i?t.tempColor:"#353535"}},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"bd",style:{background:t.selectIndex==i?t.tempColor:"transparent"}})],1)})),1)],1)],1)},n=[]},"0e60":function(t,e,a){"use strict";a.r(e);var i=a("1f3f"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},1391:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},1998:function(t,e,a){"use strict";var i=a("26c6"),n=a.n(i);n.a},"1a2a":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tab-nav-plus"},[a("v-uni-view",{staticClass:"tab-nav-plus-main",class:t.isFixed?"fixed":""},[a("v-uni-scroll-view",{staticClass:"tab-nav-plus-scroll",attrs:{"scroll-left":t.getLeft,"scroll-with-animation":!0,"scroll-x":!0}},t._l(t.tabs,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item",attrs:{"data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tit",class:t.selectIndex==i?"on":"",style:{color:t.selectIndex==i?"#FF6600":"#353535"}},[t._v(t._s(e.name))])],1)})),1)],1)],1)},n=[]},"1d7a":function(t,e,a){"use strict";a.r(e);var i=a("3a2c"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"1e9f":function(t,e,a){"use strict";a.r(e);var i=a("0602"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"1f3f":function(t,e,a){"use strict";a("7a82");var i=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var n=i(a("fe3e")),s={components:{uniLoadMore:n.default},data:function(){return{banners:[],vipLevel:0,isLogin:!0,showLogin:!1,datasa:[],dataconfig:[],searchValue:"",tabs:[{name:"全部"},{name:"视频"},{name:"音频"},{name:"小说"},{name:"壁纸"}],selectIndex:0,scrollTop:0,type2tab:[],selecttype2:0,type2id:"",type3tab:[],selecttype3:0,type3id:"",type4tab:[],selecttype4:0,type4id:"",typetab:[],selecttype:0,typeid:"",addddtab:[],selectadddd:0,addddid:"",yeartab:[],selectyear:0,yearid:"",type:"",keytext:"",listData:[],total:0,pageSize:10,last_id:0,reload:!0,status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有数据了"}}},onLoad:function(t){t.selectIndex&&(this.selectIndex=1*t.selectIndex),this.status="more",this.getList(),this.banners=uni.getStorageSync("config").banner},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReachBottom:function(){this.status="more",this.getList()},onNavigationBarSearchInputChanged:function(t){var e=t.text;e&&(this.keytext=e),console.log(e)},onNavigationBarSearchInputConfirmed:function(t){var e=this,a=t.text;a?(this.keytext=a,this.listData=[],this.last_id=0,this.type="",this.getList(0)):uni.showModal({title:"",content:"请输入搜索内容",showCancel:!1,confirmText:"确定",confirmColor:"#e19503",success:function(t){e.keytext="",e.getList(0)}})},methods:{detail:function(t,e){if(console.log(e),1==e){var a=1;uni.getStorageSync("userinfo")&&(a=uni.getStorageSync("userinfo").id),uni.navigateTo({url:"/pages/client/tuan/detail?id="+t+"&fxpid="+a})}else 2==e||3==e?uni.navigateTo({url:"/pages/client/tuan/info?id="+t}):4==e?uni.navigateTo({url:"/pages/client/tuan/infotp?id="+t}):uni.navigateTo({url:"/pages/client/tuan/list?id="+t})},onPageChange:function(t){this.last_id=0,this.reload=!0,this.getList(),uni.pageScrollTo({scrollTop:0,duration:100})},getList:function(){var t=this,e={};this.last_id>0&&(this.status="loading",e.offset=10*this.last_id,e._=(new Date).getTime()+""),e.limit=10,this.selectIndex&&(e.lx=this.selectIndex),this.typeid&&1==this.selectIndex&&(e.typeid=this.typeid),this.addddid&&1==this.selectIndex&&(e.addddid=this.addddid),this.yearid&&1==this.selectIndex&&(e.yearid=this.yearid),this.type2id&&2==this.selectIndex&&(e.typeid=this.type2id),this.type3id&&3==this.selectIndex&&(e.typeid=this.type3id),this.type4id&&4==this.selectIndex&&(e.typeid=this.type4id),this.keytext&&(e.keytext=this.keytext),uni.request({url:this.configs.webUrl+"/api/video/lists",data:e,success:function(e){if(t.yeartab=e.data.typedata.year,t.addddtab=e.data.typedata.adddd,t.typetab=e.data.typedata.type,t.type2tab=e.data.typedata.type2,t.type3tab=e.data.typedata.type3,t.type4tab=e.data.typedata.type4,e.data.total>0){var a=e.data.rows;t.listData=t.reload?a:t.listData.concat(a),t.reload=!1,t.last_id=t.last_id+1,e.data.total<10*t.last_id&&(t.status="")}else t.listData=[],t.contentText.contentdown="没有数据",t.status=""},fail:function(t,e){}})},changeIndex:function(t){this.selectIndex=t,this.type=this.tabs[t].name,this.getdata()},changetype:function(t){this.selecttype=t,this.typeid=this.typetab[t].id,this.getdata()},changeadddd:function(t){this.selectadddd=t,this.addddid=this.addddtab[t].id,this.getdata()},changeyear:function(t){this.selectyear=t,this.yearid=this.yeartab[t].id,this.getdata()},changetype2:function(t){this.selecttype2=t,this.type2id=this.type2tab[t].id,this.getdata()},changetype3:function(t){this.selecttype3=t,this.type3id=this.type3tab[t].id,this.getdata()},changetype4:function(t){this.selecttype4=t,this.type4id=this.type4tab[t].id,this.getdata()},getdata:function(){this.last_id=0,this.reload=!0,this.getList()},loginYes:function(){},mlinkTo:function(t){if(1==this.isLogin)t.currentTarget.dataset.link;else this.showLogin=!0},search:function(t){this.listData=[],this.last_id=0,this.keytext=t.value,this.type="",this.getList(0)},clear:function(t){},input:function(t){console.log("----input:",t)},blur:function(t){},focus:function(t){},cancel:function(t){this.keytext="",this.type="",this.getList(0)}}};e.default=s},"26c6":function(t,e,a){var i=a("f689");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("90d5383c",i,!0,{sourceMap:!1,shadowMode:!1})},"32ce":function(t,e,a){var i=a("f166");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1581de75",i,!0,{sourceMap:!1,shadowMode:!1})},"3a2c":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("ac1f"),a("e25e");var i={props:{scrollTop:{type:Number,default:0},selectIndex:{type:Number,default:0},tabs:{type:Array,default:function(){return new Array}}},data:function(){return{myTop:150}},computed:{isFixed:function(){return this.scrollTop>=this.myTop},getLeft:function(){var t=0;for(var e in this.tabs){if(this.selectIndex<e)break;var a=0;a=this.selectIndex==e?32*this.tabs[e].name.length:28*this.tabs[e].name.length,t+=a}return t+=60*this.selectIndex,t>375?uni.upx2px(t-375):0}},created:function(){var t=this;setTimeout((function(){var e=uni.createSelectorQuery().in(t);e.select(".tab-nav-plus").boundingClientRect((function(e){t.myTop=e.top})).exec()}),500)},methods:{tabClick:function(t){var e=parseInt(t.currentTarget.dataset.index);this.$emit("change",e)}}};e.default=i},"3fa2":function(t,e,a){var i=a("e9e2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("8544855e",i,!0,{sourceMap:!1,shadowMode:!1})},5324:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[]},6937:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".user-not-vip[data-v-70e31fe4]{width:100%;height:%?80?%;background:#fdf6ec;border-radius:%?40?%;border:%?2?% solid #efc381;text-align:center;line-height:%?76?%;font-size:%?24?%;color:#000;font-weight:700}.tuan-product-l[data-v-70e31fe4]{width:%?320?%;height:%?240?%;border-radius:%?16?%;background:#f2f2f2}.tuan-product-r[data-v-70e31fe4]{width:calc(100% - %?320?%)}.search-result[data-v-70e31fe4]{padding-top:10px;padding-bottom:20px;text-align:center}.search-result-text[data-v-70e31fe4]{text-align:center;font-size:14px;color:#666}.example-body[data-v-70e31fe4]{\ndisplay:block;\npadding:0}.uni-mt-10[data-v-70e31fe4]{margin-top:10px}",""]),t.exports=e},"824e":function(t,e,a){var i=a("6937");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6f74cba2",i,!0,{sourceMap:!1,shadowMode:!1})},"9b48":function(t,e,a){"use strict";a.r(e);var i=a("fb72"),n=a("1e9f");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("1998");var o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"3136e5c8",null,!1,i["a"],void 0);e["default"]=l.exports},"9d65":function(t,e,a){"use strict";var i=a("3fa2"),n=a.n(i);n.a},a8fd:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={subTabnav:a("a904").default,homeBanner:a("9b48").default,subTabvs:a("ec6b").default,uniLoadMore:a("fe3e").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("sub-tabnav",{attrs:{tabs:t.tabs,selectIndex:t.selectIndex,scrollTop:t.scrollTop},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeIndex.apply(void 0,arguments)}}}),0==t.selectIndex?a("v-uni-view",{staticClass:"mt15",staticStyle:{margin:"30upx 30upx 0 30upx","box-shadow":"0px 4px 20px 0px rgba(0,0,0,0.04)"}},[a("home-banner",{attrs:{banners:t.banners}})],1):t._e(),1==t.selectIndex&&t.typetab[1]?a("sub-tabvs",{staticClass:"pt5",attrs:{tabs:t.typetab,selectIndex:t.selecttype,scrollTop:t.scrollTop},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype.apply(void 0,arguments)}}}):t._e(),1==t.selectIndex&&t.addddtab[1]?a("sub-tabvs",{staticClass:"pt5",attrs:{tabs:t.addddtab,selectIndex:t.selectadddd,scrollTop:t.scrollTop},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeadddd.apply(void 0,arguments)}}}):t._e(),1==t.selectIndex&&t.yeartab[1]?a("sub-tabvs",{staticClass:"pt5",attrs:{tabs:t.yeartab,selectIndex:t.selectyear,scrollTop:t.scrollTop},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeyear.apply(void 0,arguments)}}}):t._e(),2==t.selectIndex&&t.type2tab[1]?a("sub-tabvs",{staticClass:"pt5",attrs:{tabs:t.type2tab,selectIndex:t.selecttype2,scrollTop:t.scrollTop},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype2.apply(void 0,arguments)}}}):t._e(),3==t.selectIndex&&t.type3tab[1]?a("sub-tabvs",{staticClass:"pt5",attrs:{tabs:t.type3tab,selectIndex:t.selecttype3,scrollTop:t.scrollTop},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype3.apply(void 0,arguments)}}}):t._e(),4==t.selectIndex&&t.type4tab[1]?a("sub-tabvs",{staticClass:"pt5",attrs:{tabs:t.type4tab,selectIndex:t.selecttype4,scrollTop:t.scrollTop},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changetype4.apply(void 0,arguments)}}}):t._e(),a("v-uni-view",{staticClass:"pd20_15"},[t._l(t.listData,(function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"box pd16_15 flex alcenter mb16",staticStyle:{position:"relative"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.detail(e.id,e.lx)}}},[a("v-uni-image",{staticClass:"tuan-product-l",attrs:{mode:"aspectFill",src:e.img}}),a("v-uni-view",{staticClass:"btn-mini",staticStyle:{position:"absolute",top:"40upx",left:"280upx","border-radius":"10upx","font-size":"18upx",width:"60upx",height:"36upx"},style:t.getBtnStyle},[t._v(t._s(e.lxname))]),a("v-uni-view",{staticClass:"tuan-product-r pl15"},[a("v-uni-view",{staticClass:"ft14 ftw600 cl-main text-over2"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"mt16"},[a("v-uni-text",{staticClass:"ft12 cl-orange"},[t._v("会员价")]),a("v-uni-text",{staticClass:"ft12 cl-orange"},[t._v("¥")]),a("v-uni-text",{staticClass:"ft16 cl-orange ftw600"},[t._v(t._s(e.vipprice))]),a("v-uni-text",{staticClass:"ml15 ft12 cl-notice text-line"},[t._v("¥"+t._s(e.price))])],1),a("v-uni-view",{staticClass:"mt16 flex space alcenter"},[a("v-uni-view",{staticClass:"ft12 cl-notice"},[t._v(t._s(e.updatetime))])],1)],1)],1)]})),a("uni-load-more",{attrs:{status:t.status,"content-text":t.contentText}})],2)],1)},s=[]},a904:function(t,e,a){"use strict";a.r(e);var i=a("06f3"),n=a("b15c");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("e168");var o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"d362586e",null,!1,i["a"],void 0);e["default"]=l.exports},b15c:function(t,e,a){"use strict";a.r(e);var i=a("ee7f"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},b707:function(t,e,a){"use strict";var i=a("824e"),n=a.n(i);n.a},b76c:function(t,e,a){"use strict";a.r(e);var i=a("a8fd"),n=a("0e60");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("b707");var o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"70e31fe4",null,!1,i["a"],void 0);e["default"]=l.exports},c59e:function(t,e,a){var i=a("e165");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("b6408d9e",i,!0,{sourceMap:!1,shadowMode:!1})},cd1b:function(t,e,a){"use strict";a.r(e);var i=a("1391"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},e165:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tab-nav-plus[data-v-d362586e]{height:%?108?%}.tab-nav-plus-main[data-v-d362586e]{width:100%;height:%?108?%;padding:%?32?% %?30?% %?0?% %?32?%;background:#fff\n\t/* border-top: 0rpx solid #E4E6ED; */}.tab-nav-plus-main.fixed[data-v-d362586e]{position:fixed;left:0;z-index:20;background:#f8f8f8;box-shadow:%?0?% %?4?% %?16?% %?0?% rgba(0,0,0,.08)}.tab-nav-plus-scroll[data-v-d362586e]{width:100%;white-space:nowrap;height:%?76?%}.tab-nav-plus-scroll .item[data-v-d362586e]{height:%?76?%;display:inline-block;margin-right:%?60?%;position:relative}.tab-nav-plus-scroll .item[data-v-d362586e]:last-child{margin-right:0}.tab-nav-plus-scroll .item .tit[data-v-d362586e]{text-align:center;height:%?48?%;line-height:%?48?%;font-size:%?28?%;font-weight:500}.tab-nav-plus-scroll .item .tit.on[data-v-d362586e]{font-size:%?32?%;font-weight:600}.tab-nav-plus-main .tab-nav-plus-scroll .item .bd[data-v-d362586e]{position:absolute;z-index:1;left:calc(50% - %?18?%);bottom:0;width:%?36?%;height:%?12?%;border-radius:%?6?% %?6?% %?0?% %?0?%}.tab-nav-plus-main.fixed  .tab-nav-plus-scroll .item .bd[data-v-d362586e]{background:#fff}",""]),t.exports=e},e168:function(t,e,a){"use strict";var i=a("c59e"),n=a.n(i);n.a},e9e2:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".tab-nav-plus[data-v-95c974ee]{height:%?80?%\n\t/* margin-bottom: 20upx; */}.tab-nav-plus-main[data-v-95c974ee]{width:100%;height:%?80?%;padding:%?14?% %?30?% %?0?% %?32?%\n\t/* background: #FFFFFF; */\n\t/* border-top: 0rpx solid #E4E6ED; */}.tab-nav-plus-main.fixed[data-v-95c974ee]{position:fixed;left:0;z-index:20;background:#fff;box-shadow:%?0?% %?4?% %?16?% %?0?% rgba(0,0,0,.08)}.tab-nav-plus-scroll[data-v-95c974ee]{width:100%;white-space:nowrap;height:%?76?%}.tab-nav-plus-scroll .item[data-v-95c974ee]{height:%?60?%;line-height:%?60?%;display:inline-block;margin-right:%?60?%;position:relative}.tab-nav-plus-scroll .item[data-v-95c974ee]:last-child{margin-right:0}.tab-nav-plus-scroll .item .tit[data-v-95c974ee]{text-align:center;height:%?48?%;line-height:%?48?%;font-size:%?28?%;font-weight:500}.tab-nav-plus-scroll .item .tit.on[data-v-95c974ee]{font-size:%?28?%;font-weight:600}.tab-nav-plus-main .tab-nav-plus-scroll .item .bd[data-v-95c974ee]{position:absolute;z-index:1;left:calc(50% - %?18?%);bottom:0;width:%?36?%;height:%?12?%;border-radius:%?6?% %?6?% %?0?% %?0?%}.tab-nav-plus-main.fixed  .tab-nav-plus-scroll .item .bd[data-v-95c974ee]{background:#fff}",""]),t.exports=e},eb85:function(t,e,a){"use strict";var i=a("32ce"),n=a.n(i);n.a},ec6b:function(t,e,a){"use strict";a.r(e);var i=a("1a2a"),n=a("1d7a");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("9d65");var o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"95c974ee",null,!1,i["a"],void 0);e["default"]=l.exports},ee7f:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("ac1f"),a("e25e");var i={props:{scrollTop:{type:Number,default:0},selectIndex:{type:Number,default:0},tabs:{type:Array,default:function(){return new Array}}},data:function(){return{myTop:150}},computed:{isFixed:function(){return this.scrollTop>=this.myTop},getLeft:function(){var t=0;for(var e in this.tabs){if(this.selectIndex<e)break;var a=0;a=this.selectIndex==e?32*this.tabs[e].name.length:28*this.tabs[e].name.length,t+=a}return t+=60*this.selectIndex,t>375?uni.upx2px(t-375):0}},created:function(){var t=this;setTimeout((function(){var e=uni.createSelectorQuery().in(t);e.select(".tab-nav-plus").boundingClientRect((function(e){t.myTop=e.top})).exec()}),500)},methods:{tabClick:function(t){var e=parseInt(t.currentTarget.dataset.index);this.$emit("change",e)}}};e.default=i},f166:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-load-more[data-v-76b7c960]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-76b7c960]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-76b7c960]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-76b7c960]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-76b7c960 1.56s ease infinite;animation:load-data-v-76b7c960 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(4){top:11px;left:0}.load1[data-v-76b7c960],\n.load2[data-v-76b7c960],\n.load3[data-v-76b7c960]{height:24px;width:24px}.load2[data-v-76b7c960]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-76b7c960]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-76b7c960{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},f689:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.home-swiper-banner[data-v-3136e5c8]{height:%?350?%;box-shadow:%?0?% %?4?% %?32?% %?0?% rgba(0,0,0,.04);border-radius:%?10?%;overflow:hidden}.home-swiper-banner uni-image[data-v-3136e5c8]{width:100%;height:%?350?%}.banner_title_box[data-v-3136e5c8]{top:0;width:100%;position:absolute;left:0;z-index:10;font-size:16px;height:40px;line-height:40px;overflow:hidden;color:#fff;padding:0 10px;text-align:center}.banner_title_box[data-v-3136e5c8]::after{content:"";position:absolute;width:100%;height:100%;background:#000;opacity:.3;left:0;top:0;z-index:-1}.banner_img02[data-v-3136e5c8]{position:relative}.banner_img02[data-v-3136e5c8]::before{width:100%;content:"";background:linear-gradient(180deg,rgba(0,0,0,.7),transparent);height:70%;z-index:2;position:absolute;top:0;left:0}',""]),t.exports=e},fb72:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-swiper",{staticClass:"home-swiper-banner",attrs:{"indicator-color":"rgba(255, 255, 255, 0.3)","indicator-active-color":"#FFFFFF","indicator-dots":!0,autoplay:!0,interval:3e3,duration:500}},t._l(t.banners,(function(e,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-navigator",{attrs:{url:e.link}},[a("v-uni-image",{staticClass:"banner_img02",staticStyle:{"border-radius":"16rpx"},attrs:{src:e.src,mode:"aspectFill"}}),a("v-uni-image",{staticClass:"pic-50  ",staticStyle:{position:"absolute",top:"50%","margin-top":"-25px","margin-left":"-25px","z-index":"4",left:"50%"},attrs:{src:"/static/play-filling2.png"}}),a("v-uni-view",{staticClass:"banner_title_box"},[t._v(t._s(t.titles[i]))]),a("v-uni-view",{staticClass:"times_box",staticStyle:{top:"auto",bottom:"10px"}},[t._v("12:30")])],1)],1)})),1)],1)},n=[]},fe3e:function(t,e,a){"use strict";a.r(e);var i=a("5324"),n=a("cd1b");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("eb85");var o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"76b7c960",null,!1,i["a"],void 0);e["default"]=l.exports}}]);
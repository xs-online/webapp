(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-client-chat_message"],{1937:function(e,t,i){var s=i("ba35");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=i("4f06").default;n("11e3b8e4",s,!0,{sourceMap:!1,shadowMode:!1})},2730:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return s}));var s={uniPopup:i("9f83").default,uniPopupDialog:i("7ad0").default,orderVipcm:i("ea88").default,uniPopupMessage:i("87e7").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container",on:{touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTouchEnd.apply(void 0,arguments)}}},[e.kefu_uid==e.to_uid?i("v-uni-view",{staticClass:" shadow_black  bg_gray333 pd16_15",staticStyle:{background:"#b3239b !important"}},[i("v-uni-view",{staticClass:"flex alcenter"},[i("v-uni-image",{staticClass:"adviser-face-big",attrs:{src:"/static/kefu.png"}}),i("v-uni-view",{staticClass:" pl15",staticStyle:{width:"calc(100% - 160rpx)"}},[i("v-uni-view",{staticClass:"ft16 cl-main ftw600"},[e._v("客服小妲")]),i("v-uni-view",{staticClass:"flex alcenter mt8"},[i("v-uni-view",{staticClass:"flex alcenter cl-notice"},[i("v-uni-text",{staticClass:"  ft14"},[e._v("tg✈ :")]),i("v-uni-text",{staticClass:"ft14 ml5"},[e._v("@appdaji")])],1),i("v-uni-view",{staticClass:"copy-tag ml10",style:{background:e.tempColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copy(e.weixin)}}},[e._v("复制")])],1),i("v-uni-view",{staticClass:"flex alcenter gray_eee mt4 item-center"},[i("v-uni-cover-view",{staticClass:"  ft14"},[e._v("邮箱 :  pacci5566@gmail.com")]),i("v-uni-cover-view",{staticClass:"copy-tag ml10",style:{background:e.tempColor},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copy("pacci5566@gmail.com")}}},[e._v("复制")])],1)],1)],1)],1):e._e(),e.kefu_uid==e.to_uid?i("v-uni-view",{staticClass:"pad radius-20 pad flex-column lr10 mt10 "},[i("v-uni-view",{staticStyle:{"margin-top":"100px"}},[i("v-uni-view",{staticClass:"flex-row mt10"},[i("v-uni-image",{staticClass:"radius-50 pic-40 border-gray",attrs:{src:"/static/kefu.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go("/pages/trends/user_index?uid="+e.kefu_uid)}}}),i("v-uni-view",{staticClass:"bg_chat_he",on:{click:function(t){arguments[0]=t=e.$handleEvent(t)}}},[i("v-uni-view",[e._v("你好，請問有遇到什麼問題？請詳細描述你的問題")])],1)],1)],1)],1):e._e(),e._l(e.list,(function(t,s){return e.list.length>0?i("v-uni-view",{staticClass:"lr10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.show_bar=!1,e.emoji_show=!1}}},[i("v-uni-view",{staticClass:" radius-20 mt10 flex-column   "},[i("v-uni-view",[i("v-uni-view",{staticClass:" ",class:t.post_uid==e.uid?"flex-row-r":"flex-row"},[i("v-uni-view",[t.post_uid==e.uid?i("v-uni-image",{staticClass:"radius-50 pic-40 border-gray",attrs:{src:e.userInfo.avatar},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go("/pages/trends/user_index?uid="+e.uid)}}}):e._e(),t.post_uid!=e.uid?i("v-uni-image",{staticClass:"radius-50 pic-40 border-gray",attrs:{src:e.to_user.avatar},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go("/pages/trends/user_index?uid="+e.to_uid)}}}):e._e()],1),1==t.type?i("v-uni-view",{class:t.recv_uid==e.uid?"bg_chat_he":"bg_chat_my"},[i("v-uni-view",[i("v-uni-image",{staticStyle:{"max-width":"100% !important"},attrs:{src:t.message,mode:"widthFix"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.bindImg(t.message)}}})],1)],1):2==t.type?i("v-uni-view",{staticClass:"send_vip_box",class:t.recv_uid==e.uid?"bg_chat_he":"bg_chat_my"},[i("v-uni-view",{staticClass:"flex-center"},[i("v-uni-image",{staticClass:"pic-40 mr10 shadow_red",attrs:{src:"/static/chat/vip_icon.png"}}),e._v("赠送了会员")],1)],1):3==t.type?i("v-uni-view",{staticClass:"card_movie_box_f"},[i("v-uni-view",{staticClass:"card_movie_box",class:t.recv_uid==e.uid?"bg_chat_he":"bg_chat_my"},[t.post_uid==e.uid?i("v-uni-view",{staticClass:"flex-center bold black"},[i("v-uni-image",{staticClass:"pic-40 mr10 ",attrs:{src:"/static/chat/movie2.png"}}),e._v("发出邀请私密看片")],1):e._e(),t.post_uid!=e.uid?i("v-uni-view",{staticClass:"flex-center bold black"},[i("v-uni-image",{staticClass:"pic-40 mr10 ",attrs:{src:"/static/chat/movie2.png"}}),e._v("邀请您一起私密看片")],1):e._e(),i("v-uni-view",{staticStyle:{"border-top":"1px solid #721682",width:"100%",left:"0px",position:"absolute"}}),i("v-uni-view",{staticClass:" flex-space pt10 mt5"},[i("v-uni-view",{staticStyle:{width:"90px",height:"150px"}},[i("v-uni-image",{staticClass:"radius-5",staticStyle:{width:"90px",height:"150px"},attrs:{src:t.video.img}})],1),i("v-uni-view",{staticClass:"fs12 ml10 flex-column"},[i("v-uni-view",{staticStyle:{color:"#fff"}},[e._v("《"+e._s(t.video.name)+"》")]),i("v-uni-view",{staticClass:"black"},[e._v("播放量： "+e._s(t.video.views))]),i("v-uni-view",{staticClass:"black"},[e._v("时长： "+e._s(e.video_time(t.video.video_seconds)))])],1)],1),i("v-uni-view",{staticStyle:{"border-top":"1px solid #721682",width:"100%",left:"0px",position:"absolute","margin-top":"10px"}}),i("v-uni-view",{staticClass:"h20px"}),t.post_uid!=e.uid?i("v-uni-view",{staticClass:"flex-space white"},[i("v-uni-view",[0==t.movie2.to_uid_allow?i("v-uni-text",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.refuse_movie2(s,t,t.movie2.id)}}},[e._v("拒绝")]):e._e(),2==t.movie2.to_uid_allow?i("v-uni-text",[e._v("已拒绝")]):e._e()],1),i("v-uni-view",{staticClass:"flex-center white fs14"},[0==t.movie2.to_uid_allow?i("v-uni-text",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.agree_movie2(s,t,t.movie2.id)}}},[e._v("同意并观看")]):e._e(),1==t.movie2.to_uid_allow?i("v-uni-view",{staticClass:"item-center",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.go("/pages/client/chat_movie?to_uid="+e.to_uid+"&movie2_id="+t.movie2.id)}}},[e._v("我已同意，进入私密影院"),i("v-uni-image",{staticClass:"pic-20 ml10",attrs:{src:"/static/chat/enter.png"}})],1):e._e()],1)],1):e._e(),t.post_uid==e.uid?i("v-uni-view",{staticClass:"flex-center white fs14"},[i("v-uni-view",[2==t.movie2.to_uid_allow?i("v-uni-text",[e._v("对方已拒绝")]):e._e(),0==t.movie2.to_uid_allow?i("v-uni-text",[e._v("邀请已发出，等待对方同意")]):e._e(),1==t.movie2.to_uid_allow?i("v-uni-view",{staticClass:"item-center",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.go("/pages/client/chat_movie?to_uid="+e.to_uid+"&movie2_id="+t.movie2.id)}}},[e._v("对方同意，进入影院"),i("v-uni-image",{staticClass:"pic-20 ml10",attrs:{src:"/static/chat/enter.png"}})],1):e._e()],1)],1):e._e()],1)],1):4==t.type?i("v-uni-view",{class:t.recv_uid==e.uid?"bg_chat_he":"bg_chat_my bg_chat_my_voice",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.playAudio(t.extend,s)}}},[t.post_uid==e.uid?i("v-uni-view",{staticClass:"item-center aright",style:"max-width:190px !important;width:"+(80+4*t.voice_seconds)+"px"},[e._v(e._s(t.voice_seconds)+" ''"),1==e.is_show_voice[s]?i("v-uni-image",{staticClass:"pic-20  mr10",attrs:{src:"/static/chat/voice_my2.png"}}):i("v-uni-image",{staticClass:"pic-20 mr10 ",attrs:{src:"/static/chat/voice_my.png"},on:{load:function(i){arguments[0]=i=e.$handleEvent(i),e.preloadAudio(t.extend,s)}}})],1):i("v-uni-view",{staticClass:"item-center",style:"max-width:190px !important;width:"+(80+4*t.voice_seconds)+"px"},[1==e.is_show_voice[s]?i("v-uni-image",{staticClass:"pic-20  mr10",attrs:{src:"/static/chat/voice_he2.png"}}):i("v-uni-image",{staticClass:"pic-20 mr10 ",attrs:{src:"/static/chat/voice_he.png"},on:{load:function(i){arguments[0]=i=e.$handleEvent(i),e.preloadAudio(t.extend,s)}}}),e._v(e._s(t.voice_seconds)+"    ''")],1)],1):i("v-uni-view",{class:t.recv_uid==e.uid?"bg_chat_he":"bg_chat_my",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.copy(t.message)}}},[i("v-uni-view",[e._v(e._s(t.message))])],1)],1)],1)],1)],1):e._e()})),i("v-uni-view",{staticClass:"h100px"}),i("v-uni-view",{staticClass:"fix-foot shadow_black ",staticStyle:{background:"#222"}},[i("v-uni-view",{staticClass:"flex-space pad item-center"},[i("v-uni-view",{on:{touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.startRecord.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.stopRecord.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=e.$handleEvent(t),e.moveRecord.apply(void 0,arguments)},touchcancel:function(t){arguments[0]=t=e.$handleEvent(t),e.stopRecord.apply(void 0,arguments)}}},[e.showSendBtn?e._e():i("v-uni-image",{staticClass:"pic-25 mr10 zindex1",attrs:{src:"/static/chat/voice.png"}})],1),i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:0==e.show_voice_tips,expression:"show_voice_tips==0"}],staticClass:"flex-1 bg_black radius-5 h37px pl10 pr10",attrs:{type:"text",focus:e.is_focus,"hold-keyboard":!0,"confirm-hold":!0,"confirm-type":"send",placeholder:"输入..","placeholder-class":"gray999"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.focus()},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blur()},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.handleNoHideKeyboard.apply(void 0,arguments)}},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==e.show_voice_tips,expression:"show_voice_tips==1"}],staticClass:"flex-1 white fs14"},[e._v("按住录制，松开发送，右滑取消")]),i("v-uni-view",[i("v-uni-image",{staticClass:"pic-28 ml10 ",attrs:{src:"/static/chat/face2.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.emoji_show=!e.emoji_show,e.show_bar=!1}}})],1),i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.show_bar=!e.show_bar,e.emoji_show=!1}}},[i("v-uni-image",{staticClass:"pic-25 ml10",attrs:{src:"/static/chat/plus.png"}})],1),i("v-uni-view",[e.showSendBtn||1==e.emoji_show?i("v-uni-image",{staticClass:"pic-30 ml10",attrs:{src:"/static/send.png"},on:{touchend:function(t){t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}}):e._e()],1)],1),1==e.show_bar?i("v-uni-view",{staticClass:"flex-row pad"},[i("v-uni-view",{staticClass:" flex-column flex-center",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send_img.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"bar_btns w50px h50px flex-center"},[i("v-uni-image",{staticClass:"pic-30",attrs:{src:"/static/chat/img.png"}})],1),i("v-uni-text",{staticClass:"text-sm gray999 fs14 mt10"},[e._v("发送照片")])],1),i("v-uni-view",{staticClass:" flex-column flex-center ml10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send_vip()}}},[i("v-uni-view",{staticClass:"bar_btns w50px h50px flex-center"},[i("v-uni-image",{staticClass:"pic-30",attrs:{src:"/static/chat/vip.png"}})],1),i("v-uni-text",{staticClass:"text-sm gray999 fs14 mt10"},[e._v("赠送VIP")])],1),i("v-uni-view",{staticClass:" flex-column flex-center ml10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.two_movie()}}},[i("v-uni-view",{staticClass:"bar_btns w50px h50px flex-center"},[i("v-uni-image",{staticClass:"pic-30",attrs:{src:"/static/chat/movie.png"}})],1),i("v-uni-text",{staticClass:"text-sm gray999 fs14 mt10"},[e._v("一起看片")])],1)],1):e._e(),i("v-uni-view",[i("v-uni-swiper",{directives:[{name:"show",rawName:"v-show",value:e.emoji_show,expression:"emoji_show"}],attrs:{current:0,"indicator-dots":"true"}},e._l(e.emojiData,(function(t,s){return s<5?i("v-uni-swiper-item",{key:s,staticClass:"slider-emoji ",class:[s==e.emojiData.length-1?"lastbox":""]},[i("v-uni-view",{staticClass:"flex-row flex-wrap"},e._l(t,(function(t,s){return i("v-uni-text",{key:s,staticClass:"slider-emoji-icon pad510 fs22",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.seleEmo(t)}}},[e._v(e._s(t))])})),1)],1):e._e()})),1)],1)],1),i("uni-popup",{ref:"sendRefs"},[i("uni-popup-dialog",{attrs:{title:"赠送会员",showClose:"false","confirm-text":"取消"},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.$refs.sendRefs.close()},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.$refs.sendRefs.close()}}},[i("v-uni-view",{staticClass:"flex-column"},[i("v-uni-view",[e._v("确定赠送（ID:"+e._s(e.to_uid)+"）VIP吗？")]),i("v-uni-view",{staticClass:"to_user_vip"},[i("order-vipcm",{attrs:{to_uid:e.to_uid}})],1)],1)],1)],1),i("uni-popup",{ref:"videoRefs"},[i("uni-popup-dialog",{attrs:{title:"请Ta看电影","confirm-text":"发送邀请"},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.$refs.videoRefs.close()},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.send_movie()}}},[i("v-uni-view",{staticClass:"flex-column"},[i("v-uni-view",{staticClass:"flex-column"},[i("v-uni-view",{staticClass:"fs14 mb10",staticStyle:{"word-break":"break-all"}},[e._v(e._s(e.video.name))]),i("v-uni-view",{staticClass:"flex-center bg_black radius-10"},[i("v-uni-image",{staticClass:"radius-10",staticStyle:{height:"150px","max-width":"100%",margin:"0px auto"},attrs:{src:e.himg2(e.video.img),mode:"heightFix"}})],1)],1),i("v-uni-view",{staticClass:"mt10 fs14",staticStyle:{color:"#fff"}},[e._v("本次消耗"),i("v-uni-text",{staticClass:"red"},[e._v("2")]),e._v("张电影票，当前您有"+e._s(e.userInfo.movie_tickets)+"张")],1),e.show_not_enough?i("v-uni-view",{staticClass:"red mt10",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go("/pages/client/vipcard/index")}}},[e._v("电影票不足，请先充值，点击去充值")]):e._e()],1)],1)],1),i("uni-popup",{ref:"voiceTipsRefs",attrs:{type:"message"}},[i("uni-popup-message",{attrs:{type:"info",message:"按住开始录制,松开发送语音",duration:2e3}})],1),i("uni-popup",{ref:"usermoreRefs",attrs:{type:"bottom","background-color":"#fff"}},[i("v-uni-view",{staticClass:"popup-content"},[i("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear_message.apply(void 0,arguments)}}},[e._v("清空消息")])],1)],1)],2)},o=[]},"60ce":function(e,t,i){"use strict";i.r(t);var s=i("2730"),n=i("7056");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("8d2e");var a=i("f0c5"),c=Object(a["a"])(n["default"],s["b"],s["c"],!1,null,"368c59e2",null,!1,s["a"],void 0);t["default"]=c.exports},7056:function(e,t,i){"use strict";i.r(t);var s=i("9aac"),n=i.n(s);for(var o in s)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return s[e]}))}(o);t["default"]=n.a},"8d2e":function(e,t,i){"use strict";var s=i("1937"),n=i.n(s);n.a},"9aac":function(e,t,i){"use strict";i("7a82");var s=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(i("0122")),o=s(i("f07e")),a=s(i("c964"));i("14d9"),i("ac1f"),i("466d"),i("5319"),i("e9c4"),i("d3b7"),i("159b");var c=s(i("abc0")),r=s(i("32e5")),u={data:function(){return{emojiData:[],emoji_show:!1,content:"",kefu_uid:1555,to_uid:"",he_nick:"1555",to_user:{},tel:"",weixin:"@appdaji",uid:0,userInfo:{},showSendBtn:!1,list:[],message:"",timer:null,show_bar:!1,moneyList:[],video_id:"",video:{},ws:null,tempFilePath:"",recorderManager:null,startTime:0,endTime:0,recordDuration:0,show_voice_tips:0,audioContext:[],show_not_enough:0,is_focus:!1,is_show_voice:[],keyborderHeight:0}},onLoad:function(e){var t=this;"undefined"!=typeof e.to_uid&&(this.to_uid=e.to_uid),uni.getStorageSync("userinfo")&&(this.uid=uni.getStorageSync("userinfo").id,this.userInfo=uni.getStorageSync("userinfo")),"undefined"!=typeof e.video_id&&(this.video_id=e.video_id,this.get_video_info()),this.get_vip_list(),this.initWebSocket();for(var i=Math.ceil(c.default.length/21),s=0;s<i;s++){this.emojiData[s]=[];for(var n=0;n<21;n++)c.default[21*s+n]&&this.emojiData[s].push(c.default[21*s+n])}uni.onKeyboardHeightChange((function(e){t.keyborderHeight=e.height}))},onUnload:function(){this.ws.destroy=1,clearInterval(this.timer),clearInterval(this.ws.pingInterval),clearInterval(this.ws.retimer),this.ws.close()},onHide:function(){clearInterval(this.timer)},onShow:function(){this.initWebSocket(),clearInterval(this.timer),this.init()},onNavigationBarButtonTap:function(e){console.log(e),this.user_more()},methods:{get_video_info:function(){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i,s,n;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={id:e.video_id},t.next=3,uni.$api.video.details(i);case 3:return s=t.sent,e.video=s,e.$refs.videoRefs.open(),t.next=8,uni.$api.user.index();case 8:n=t.sent,console.log(n,"uuuuuuuuuuuuuuuu"),uni.setStorageSync("userinfo",n),e.userInfo=n;case 12:case"end":return t.stop()}}),t)})))()},handleTouchEnd:function(){},handleNoHideKeyboard:function(){},himg2:function(e){e+="";return"null"!=e.match(/\/cover/)?e.replace(".jpg","_h.jpg"):e},init:function(){var e=this;e.get_list(),clearInterval(this.timer),this.timer=setInterval((function(){e.get_newlist()}),7e3)},scrollBottom:function(){this.$nextTick((function(){uni.pageScrollTo({scrollTop:1e6,duration:0})})),setTimeout((function(){uni.pageScrollTo({scrollTop:1e6,duration:1})}),100),setTimeout((function(){uni.pageScrollTo({scrollTop:1e6,duration:1})}),500)},initWebSocket:function(){if(0!=this.uid&&null==this.ws){var e=this.configs.wsUrl+"?user_id="+this.uid;this.ws=new r.default(e,[],this.handleWebSocketMessage),this.ws.connect()}},handleWebSocketMessage:function(e){var t=this;console.log("Received WebSocket message:",e),console.log((0,n.default)(e));try{e=JSON.parse(e)}catch(i){console.log(i.message)}e.to==this.uid?"undefined"==typeof e.edit?(this.list.push({msg_id:e.msg_id,message:e.message,type:e.type,post_time:this.time(),post_uid:e.post_uid,recv_uid:e.to,video:"undefined"!=typeof e.video?e.video:"",movie2:"undefined"!=typeof e.movie2?e.movie2:"",voice_seconds:"undefined"!=typeof e.voice_seconds?e.voice_seconds:"",extend:"undefined"!=typeof e.extend?e.extend:""}),console.log("push content ok....1"),this.scrollBottom()):(this.list[e.message_index].movie2.to_uid_allow=e.allow,1==e.allow&&setTimeout((function(){t.go("/pages/client/chat_movie?to_uid="+t.to_uid+"&movie2_id="+e.movie2_id)}),1e3)):console.log("Message received from server",e)},get_list:function(){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i,s,n;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,console.log("开始请求list数据"),0!=i.id){t.next=4;break}return t.abrupt("return",!1);case 4:return s={to_uid:i.to_uid},t.next=7,uni.$api.chat.getMessageList(s);case 7:n=t.sent,console.log(i.list),console.log(i.list.length+":::"+n.list.length,"lengthhhhhhhhhhhhhhhhhhhhh"),e.he_nick=n.he_nick,uni.setNavigationBarTitle({title:e.he_nick}),e.to_user=n.to_user,i.list.length!=n.list.length&&(i.list=n.list,i.scrollBottom()),console.log(n,"chattttttttttttttttttttt");case 15:case"end":return t.stop()}}),t)})))()},get_newlist:function(){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i,s,n,a;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,console.log("开始请求list数据"),0!=i.uid){t.next=4;break}return t.abrupt("return",!1);case 4:return s={to_uid:i.to_uid},t.next=7,uni.$api.chat.getNewMessageList(s);case 7:for(a in n=t.sent,console.log("redis 新消息",n.list),n.list)e.new_message_push(n.list[a]);case 10:case"end":return t.stop()}}),t)})))()},new_message_push:function(e){var t=!0;for(var i in this.list){var s=this.list[i];console.log("compare msg_id",s.msg_id,e.msg_id),s.msg_id==e.msg_id&&(t=!1,console.log("kkkkkkkkkkkcunzai msg id","存在msg id "))}t&&(this.list.push(e),$this.scrollBottom())},repair_msg_id:function(e,t){for(var i in this.list){var s=this.list[i];console.log("repair msg_id",e,t),s.msg_id==e&&(this.list[i].msg_id=t,console.log("repair msg id ok"))}},send_movie:function(){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i,s,n,a,c,r;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e,console.log("开始请求数据"),s="[一起看]",n={to_uid:i.to_uid,message:s,video_id:e.video.id},e.message="",uni.showLoading(),i.show_not_enough=0,t.next=9,uni.$api.chat.sendMovie(n);case 9:if(a=t.sent,uni.hideLoading(),c=a.msg_id,"undefined"==typeof a.status){t.next=17;break}return e.error(a.msg),console.log("movieeeeeeeeeeeeeeeeeeeeee222",a),i.show_not_enough=1,t.abrupt("return",!1);case 17:e.$refs.videoRefs.close(),i.list.push({msg_id:c,message:s,type:3,video:e.video,post_time:e.time(),post_uid:i.uid,recv_uid:i.to_uid,movie2:{to_uid_allow:0}}),i.scrollBottom(),console.log(a,"chattttttttttttttttttttt"),r={msg_id:c,message:s,video:e.video,type:3,post_time:e.time(),post_uid:i.uid,to:i.to_uid,movie2:{to_uid_allow:0,id:a.movie2_id},recv_uid:e.to_uid},e.ws.send(JSON.stringify(r));case 23:case"end":return t.stop()}}),t)})))()},user_more:function(){this.$refs.usermoreRefs.open("bottom")},two_movie:function(){uni.navigateTo({url:"/pages/client/tuan/ss?from=chat&to_uid="+this.to_uid})},agree_movie2:function(e,t,i){var s=this;return(0,a.default)((0,o.default)().mark((function t(){var n,a,c;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={movie2_id:i},t.next=3,uni.$api.chat.agreeMovie2(n);case 3:a=t.sent,console.log("agreeeeeeeeeeeeeee",a),s.list[e].movie2.to_uid_allow=1,c={to:s.to_uid,message:"同意",type:31,edit:1,allow:1,message_index:e,movie2_id:i,recv_uid:s.to_uid},s.ws.send(JSON.stringify(c)),setTimeout((function(){s.go("/pages/client/chat_movie?to_uid="+s.to_uid+"&movie2_id="+i)}),1e3);case 9:case"end":return t.stop()}}),t)})))()},refuse_movie2:function(e,t,i){var s=this;return(0,a.default)((0,o.default)().mark((function t(){var n,a;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={movie2_id:i},t.next=3,uni.$api.chat.refuseMovie2(n);case 3:t.sent,a={message:"拒绝",type:31,allow:1,message_index:e},s.ws.send({data:JSON.stringify(a),success:function(){console.log("Message send successfully")},fail:function(e){console.error("Message sending failed",e)}});case 6:case"end":return t.stop()}}),t)})))()},get_vip_list:function(){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,uni.$api.order.getVipList();case 2:i=t.sent,e.moneyList=i;case 4:case"end":return t.stop()}}),t)})))()},focus:function(){this.showSendBtn=!0},blur:function(){var e=this;setTimeout((function(){e.showSendBtn=!1,e.show_bar=!1}),500)},send2:function(){},send:function(){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i,s,n,a,c,r,u;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,e.is_focus=!0,console.log("开始请求数据"),e.message=e.message.replace(/^\s+|\s+$/g,""),e.message=e.message.replace(/<[^>]*>/g,""),""!=e.message){t.next=7;break}return t.abrupt("return");case 7:return s=e.message,n={to_uid:i.to_uid,message:s},a=e.time()+Math.random(),i.list.push({msg_id:a,message:s,type:0,post_time:e.time(),post_uid:i.uid,recv_uid:i.to_uid}),e.message="",i.scrollBottom(),t.next=15,uni.$api.chat.send(n);case 15:c=t.sent,r=c.msg_id,e.repair_msg_id(a,r),console.log(c,"chattttttttttttttttttttt"),e.ws.socketOpen?(u={msg_id:r,message:s,type:0,post_time:e.time(),post_uid:i.uid,to:i.to_uid},e.ws.send(JSON.stringify(u))):console.error("WebSocket connection is not open");case 20:case"end":return t.stop()}}),t)})))()},send_img:function(){var e=this;console.log("开始请求数据"),e.chooseImage((function(t){e.send_img_save(t)}))},send_img_save:function(e){var t=this;return(0,a.default)((0,o.default)().mark((function i(){var s,n,a,c;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=t,n={to_uid:s.to_uid,message:e,type:1},i.next=4,uni.$api.chat.sendImg(n);case 4:a=i.sent,s.list.push({msg_id:a.msg_id,message:e,type:1,post_time:t.time(),post_uid:s.uid,recv_uid:s.to_uid}),s.scrollBottom(),c={message:e,type:1,post_time:t.time(),post_uid:s.uid,to:s.to_uid,recv_uid:s.to_uid},t.ws.send(JSON.stringify(c));case 9:case"end":return i.stop()}}),i)})))()},show_chat_bar:function(){},send_vip:function(){this.$refs.sendRefs.open()},seleEmo:function(e){this.message+=e},startRecord:function(){console.log("startRecordddddddddddddddd"),this.startTime=(new Date).getTime(),this.recorderManager=uni.getRecorderManager();this.show_voice_tips=1,this.recorderManager.start({format:"mp3",duration:6e4}),this.recorderManager.onStart((function(){console.log("recorder start")})),this.recorderManager.onError((function(e){console.error("recorder error",e)}))},stopRecord:function(){var e=this,t=this;0!=this.show_voice_tips&&(this.show_voice_tips=0,this.recorderManager&&(this.recorderManager.stop(),this.show_voice_tips=0,this.recorderManager.onStop((function(i){if(e.endTime=(new Date).getTime(),e.recordDuration=Math.round((e.endTime-e.startTime)/1e3),e.tempFilePath=i.tempFilePath,console.log("recorder stop",i),console.log("录音时长:",e.recordDuration,"秒",e.startTime,e.endTime),!(e.recordDuration<2)){console.log("start upload voice s3 outside",e.tempFilePath);try{var s=e.time()+Math.random(),n={tmp_id:s,message:"[语音]",type:4,extend:e.tempFilePath,voice_seconds:e.recordDuration,post_time:e.time(),post_uid:t.uid,to:t.to_uid,recv_uid:t.to_uid};t.list.push(n),t.upload_file(e.tempFilePath,(function(e){t.sendVoiceMessage(e)})),console.log("upload ok")}catch(o){console.log(o.message)}}}))))},moveRecord:function(e){var t=e.touches[0];t.clientX>150&&(this.show_voice_tips=0)},sendVoiceMessage:function(e){var t=this;return(0,a.default)((0,o.default)().mark((function i(){var s,n,a,c,r;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=t,"[语音]",n={voice_seconds:t.recordDuration,mp3:e,to_uid:s.to_uid,message:"[语音]",type:4},a=t.time()+Math.random(),c={message:"[语音]",type:4,extend:e,voice_seconds:t.recordDuration,post_time:t.time(),post_uid:s.uid,to:s.to_uid,recv_uid:s.to_uid,msg_id:a,test:111},i.next=7,uni.$api.chat.sendVoice(n);case 7:r=i.sent,console.log("savevoice data....",r),t.repair_msg_id(a,r.msg_id),c.msg_id=r.msg_id,t.ws.send(JSON.stringify(c));case 12:case"end":return i.stop()}}),i)})))()},preloadAudio:function(e,t){var i=uni.createInnerAudioContext();i.src=e,i.onCanplay((function(){console.log("Audio message ".concat(t," is ready to play"))})),i.onError((function(s){i["break"]=1,console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEError loading audio message ".concat(t,":"),s,e)}))},playAudio:function(e,t){var i=this,s=uni.createInnerAudioContext();this.is_show_voice[t]=1,this.$forceUpdate(),console.log(s),s.src=e,s.play(),s.onEnded((function(e){console.log("音频播放结束"),i.is_show_voice[t]=0,i.$forceUpdate(),s.destroy()})),as.onError((function(e){console.log("音频播放错误"),i.is_show_voice[t]=0,i.$forceUpdate(),s.destroy()}))},clear_message:function(){var e=this;return(0,a.default)((0,o.default)().mark((function t(){var i;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={to_uid:e.to_uid},e.list=[],t.next=4,uni.$api.chat.clearMessage(i);case 4:t.sent,e.$refs.usermoreRefs.close();case 6:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){this.audioContext.forEach((function(e){e&&e.destroy()}))}};t.default=u},ba35:function(e,t,i){var s=i("24fb");t=s(!1),t.push([e.i,'uni-page-body[data-v-368c59e2]{background:#111}body.?%PAGE?%[data-v-368c59e2]{background:#111}\n.adviser-face-big[data-v-368c59e2]{width:60px;height:60px;border-radius:%?80?%;background:#fff}.copy-tag[data-v-368c59e2]{width:%?96?%;height:%?40?%;color:#fff;font-size:%?24?%;text-align:center;line-height:%?40?%;border-radius:%?20?%}.bg_chat_he[data-v-368c59e2]{max-width:60%;min-width:10%;border-radius:6px;margin-left:20px;padding:8px;background:#f356df;font-size:16px;position:relative;color:#eee;padding-left:15px;line-height:1.2;word-break:break-word;margin-top:8px}.bg_chat_he[data-v-368c59e2]::before{background:#f356df;width:20px;height:20px;display:flex;position:absolute;left:-8px;top:8px;content:" ";-webkit-transform:rotate(230deg);transform:rotate(230deg);z-index:0}.bg_chat_he uni-view[data-v-368c59e2]{z-index:2;position:relative}.bg_chat_my[data-v-368c59e2]{max-width:60%;min-width:10%;border-radius:6px;background:#f9c0f7;padding:8px;margin-right:20px;font-size:16px;position:relative;padding-left:15px;line-height:1.2;word-break:break-word;margin-top:8px}.bg_chat_my[data-v-368c59e2]::before{background:#f9c0f7;width:20px;height:20px;display:flex;position:absolute;right:-6px;top:8px;content:" ";-webkit-transform:rotate(210deg);transform:rotate(210deg);z-index:0}.bg_chat_my uni-view[data-v-368c59e2]{z-index:2;position:relative}.bg_chat_my_voice[data-v-368c59e2]{display:flex;flex-direction:row;flex-direction:row-reverse}.send_vip_box[data-v-368c59e2]{background:#daa520!important}.send_vip_box[data-v-368c59e2]::before{background:#daa520!important}.card_movie_box_f[data-v-368c59e2]{max-width:70%}.card_movie_box[data-v-368c59e2]{background:linear-gradient(90deg,#f947eb,#990ba2)!important}.card_movie_box[data-v-368c59e2]::before{background:#990ba2!important}.card_movie_box_f .bg_chat_he[data-v-368c59e2]::before{background:#f947eb!important}.card_movie_box_f .bg_chat_he[data-v-368c59e2]{max-width:100%}.card_movie_box_f .bg_chat_my[data-v-368c59e2]{max-width:100%}.bar_btns[data-v-368c59e2]{background:#333;color:#fff;border-radius:10px;display:flex;font-size:12px}.popup-content[data-v-368c59e2]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;padding:15px;height:50px;background-color:#fff}',""]),e.exports=t}}]);
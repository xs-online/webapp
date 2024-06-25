import config from '../config.js';
import {statics} from '../statics.js';

import {mapState} from 'vuex';

import {FreadFile,FwriteFile} from '@/utils/readFile.js'

export const common = {
	data(){
		return {
			statics:statics
		}
	},
	computed:{
		...mapState({
			tempColor:state			=> '#eb2e9d',
			tempColorRgb:state  	=> state.template.tempColorRbg,
			memberToken:state   	=> state.member.mToken,
			latLng:state 			=> state.location.location,
			memberInfo:state   		=> state.member.member,
			adviserId:state 		=> state.member.adviserId,//推广的顾问员
			parentId:state 			=> state.member.parentId, //父推广员ID
			mendianSelectId:state 	=> state.location.mendianSelectId, //当前的门店ID
			memdianLists:state 		=> state.location.memdianLists 
		}),
		checkLogin(){ //验证是否登录
			if(this.memberToken === null) return false;
			if(this.memberInfo == null) return false;
			if(!this.memberInfo.member_id) return false;
			return true;
		},
		
		himg(img){
			var img=img+'';
		    if(img.match(/\/cover/)!='null'){
				return img.replace('.jpg','_h_small.jpg');
			}
			return img;
		},
		
		getBtnStyle(){
			let style = 'background:'+this.tempColor+';color:#ffffff;';
			style+="box-shadow: 0px "+uni.upx2px(8)+"px "+uni.upx2px(32)+"px -"+uni.upx2px(8)+"px rgba("+this.tempColorRgb.r+", "+this.tempColorRgb.g+", "+this.tempColorRgb.b+", 0.3);";
			return style;
		},
		getBtnDisStyle(){
			let style = 'background:#F0F1F5;color:#AEB2C1;';
			return style;
		},
		getTagStyle(){
			let style = "background:rgba("+this.tempColorRgb.r+", "+this.tempColorRgb.g+", "+this.tempColorRgb.b+", 0.08);";
			style+='color:'+this.tempColor + ';';
			return style;
		},
		getBtnPlanStyle(){
			let style = 'border: 1px solid '+this.tempColor+';';
			style+='color:'+this.tempColor+';';
			return style;
		},
		
	},
	methods:{
		 timeAgo(timestamp) {
		   timestamp=timestamp*1000;
		  const now = Date.now();
		  const secondsPast = Math.floor((now - timestamp) / 1000);
		
		  if (secondsPast < 60) {
		    return '刚刚';
		  }
		  if (secondsPast < 3600) {
		    const minutesPast = Math.floor(secondsPast / 60);
		    return minutesPast + ' 分钟前';
		  }
		  if (secondsPast < 86400) {
		    const hoursPast = Math.floor(secondsPast / 3600);
		    return hoursPast + ' 小时前';
		  }
		  if (secondsPast < 2592000) { // 30 天内
		    const daysPast = Math.floor(secondsPast / 86400);
		    return daysPast + ' 天前';
		  }
		 
		 return this.date(timestamp,'MM-dd');
		},
		arraysEqual(arr1, arr2) {
		  if (arr1.length !== arr2.length) {console.log('compare111');
		    return false;
		  }
		  for (let i = 0; i < arr1.length; i++) {
		    if (arr1[i] !== arr2[i]) {
				console.log('compare222',arr1[i],arr2[i]);
		      return false;
		    }
		  }
		  return true;
		},
		arraysEqual_3d(arr1, arr2) {
		  if (arr1.length !== arr2.length) {console.log('compare111');
		    return false;
		  }
		  for (let i = 0; i < arr1.length; i++) {
		    for (var i2 in arr1[i]) {
				var k1=arr1[i][i2];
				var k2=arr2[i][i2];//console.log('compare 333 one',k1,k2);
				if (k1 != k2 ){
					console.log('compare333',k1,k2);
				    return false;
				}
			}
		  }
		  return true;
		},
		time(){
			var timestamp = Date.parse(new Date());
			return timestamp/1000;

		},
		rand:function (length) {
		    var characters = 'abcdefghijklmnpqrstuvwxyz123456789';
		    var result = '';
		    var charactersLength = characters.length;
		    for (var i = 0; i < length; i++) {
		        result += characters.charAt(Math.floor(Math.random() * charactersLength));
		    }
		    return result;
		},
		 getRandomInt(min, max) {
		  min = Math.ceil(min); // 向上取整
		  max = Math.floor(max); // 向下取整
		  return Math.floor(Math.random() * (max - min + 1)) + min; // 生成随机数
		},
		show_views(views){
			if(views<1000 || !views){
				views=1000;
			}
			views+=this.getRandomInt(100,1000);
			return views;
		},
		video_time(seconds){
			var minutes=parseInt(seconds/60);
			var sec=seconds-minutes*60;
			if(sec<10) sec='0'+sec;
			if(minutes<10) minutes='0'+minutes;
			return minutes+':'+sec;
		},
		success(title){
			uni.showToast({title:title?title:"操作成功"});
		} ,
		error(title){
			uni.showToast({title:title,icon:"error"});
		} ,
		tips(title){
			uni.showToast({title:title,icon:"none"});
		} ,
		copy(text){
			var $this=this;
			uni.setClipboardData({
				data:text,//要被复制的内容
				success:()=>{//复制成功的回调函数
				  $this.tips('复制成功');
				},
				fail:(res)=> {
					console.log(res);
					$this.tips(res);
				}
			  });
		},
		go:function(url){
	
			if(url.match(/\/pages\/client\/index/)){
				uni.switchTab({
					url:url
				})
				return;
			}else if(url.match(/\/pages\/client\/video/)){
				uni.switchTab({
					url:url
				})
				return;
			}else if(url.match(/\/pages\/client\/cate/)){
				uni.switchTab({
					url:url
				})
				return;
			}else if(url.match(/\/pages\/client\/chat_list/)){
				uni.switchTab({
					url:url
				})
				return;
			}else if(url.match(/\/pages\/client\/member\/index/)){
				uni.switchTab({
					url:url
				})
				return;
			}
			if(url=='back'){
				uni.navigateBack({
					delta:1 //返回层数，2则上上页
				})
			}else{
				uni.navigateTo({
					url: url
				});
			}
			
		},
		date:function(date, type) {
			if(!date){
				return '';
			}
			if(date.toString().length<12){
				date=date*1000;
			}
			if(!type) type='yyyy-mm-dd';
			
		    if (date != null && date != "") {
		        let yer,
		            month,
		            day,
		            HH,
		            mm,
		            ss;
		        let time = new Date(date),
		            timeDate;
		        yer = time.getFullYear();
		        month = time.getMonth() + 1;
		        day = time.getDate();
		        HH = time.getHours(); //获取系统时，
		        mm = time.getMinutes(); //分
		        ss = time.getSeconds(); //秒
		
		        month = (month < 10) ? ('0' + month) : month;
		        day = (day < 10) ? ('0' + day) : day;
		        HH = (HH < 10) ? ('0' + HH) : HH;
		        mm = (mm < 10) ? ('0' + mm) : mm;
		        ss = (ss < 10) ? ('0' + ss) : ss;
		
		        switch (type) {
		            case 'yyyy':
		                timeDate = String(yer);
		                break;
		            case 'yyyy-MM':
		                timeDate = yer + '-' + month;
		                break;
					case 'MM-dd':
					    timeDate = month + '-' + day;
					    break;	
		            case 'yyyy-MM-dd':
		                timeDate = yer + '-' + month + '-' + day;
		                break;
					case 'MM-dd HH:mm':
					    timeDate =  month + '-' + day+ ' ' + HH + ':' + mm;
					    break;	
		            case 'yyyy/MM/dd':
		                timeDate = yer + '/' + month + '/' + day;
		                break;
		            case 'yyyy-MM-dd HH:mm:ss':
		                timeDate = yer + '-' + month + '-' + day + ' ' + HH + ':' + mm + ':' + ss;
		                break;
		            case 'HH:mm:ss':
		                timeDate = HH + ':' + mm + ':' + ss;
		                break;
		            case 'MM':
		                timeDate = String(month);
		                break;
		            default:
		                timeDate = yer + '-' + month + '-' + day;
		                break;
		        }//alert(timeDate)
		        return timeDate
		    } else {
		        return ''
		    }
		},
		 getFormattedDate() {
		    const date = new Date();
		    const year = date.getFullYear();
		    const month = String(date.getMonth() + 1).padStart(2, '0');
		    const day = String(date.getDate()).padStart(2, '0');
		    
		    return `${year}${month}${day}`;
		},
		del_item(arrdata,item){
			for(var key in arrdata){
				if(item==arrdata[key]){
					arrdata.splice(key,1);
				}
			}	
			return arrdata;
		},
		get_field_arr(arrdata,name){
			var arr=[];
			for(var key in arrdata){
				console.log(key);
				arr.push(arrdata[key][name]);
			}	
			return arr;
		},
		del_key(arrdata,index){
			for(var key in arrdata){
				if(index==key){
					arrdata.splice(key,1);
				}
			}	
			return arrdata;
		},
		// 点击图片
		bindImg(url,current) {
			if(url){
				var urls=0;
				if(typeof url=='string'){
					urls=[url];
				}else{
					urls=url;
				}
				
				 
				console.log(url)
				uni.previewImage({
					urls: urls,
					current: current?current:0
				})
			}
		},
		
		async upload_file(filePath,callback) {
		  const fileSuffix = filePath.substring(filePath.lastIndexOf('.') + 1);
		  console.log('File Suffix:', fileSuffix);
		  const postdata={
		  	 type:'v2',
		  	 fileName: `uploads/${this.getFormattedDate()}/${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileSuffix}`
		  }
		  const res2=await uni.$api.chat.s3generatePresignedUrl(postdata)
		 const attributes = res2.attributes;
		 const inputs = res2.inputs;
		 const res3=await this.uploadToS3(filePath, attributes, inputs);
		 callback(res3);
		 uni.hideLoading();
		},
		
		chooseVideo(callback) {
			var $this=this;
		  uni.chooseVideo({
			count: 1,
			mediaType: ['image','video'],
			  sourceType: ['album', 'camera'],
			compressed:false,
			maxDuration:60,
			success: (res) => {
				$this.choose_do(res,callback)
			},
			fail: (err) => {
			  console.error('file selection failed:', err);
			}
		  });
		},
		chooseImage(callback) {
		  var $this=this;
		  uni.chooseImage({
			count: 1,
			success: (res) => {
				$this.choose_do(res,callback)
			},
			fail: (err) => {
			  console.error('file selection failed:', err);
			}
		  });
		},
		async choose_do(res,callback){
			 uni.showLoading({
				 mask:true,
			 	title:'上传中..'
			 })
			 console.log('choose resultttttttt', res);
			 let filePath='';
			 if(typeof res.tempFilePaths!='undefined'){
				filePath = res.tempFilePaths[0];
			 }else{
				 filePath=res.tempFilePath;
			 }
			 let fileSuffix = filePath.substring(filePath.lastIndexOf('.') + 1);
			 console.log('File Suffix:', fileSuffix);
			 if(fileSuffix.match(/blob/i)){
			 	fileSuffix='jpg';
			 }
			 const postdata={
			 	type:'v2',
			 	 fileName: `uploads/${this.getFormattedDate()}/${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileSuffix}`
			 }
			 const res2=await uni.$api.chat.s3generatePresignedUrl(postdata)
			 console.log(res);
			 const attributes = res2.attributes;
			 const inputs = res2.inputs;
			 const res3=await this.uploadToS3(filePath, attributes, inputs);
			 callback(res3);
			 uni.hideLoading();
		},
		async chooseMoreImage(callback) {
			var $this=this;
		  uni.chooseImage({
			count: 9,
			success: (res) => {
				$this.choose_do_for_more(res,callback)
				
			},
			fail: (err) => {
			  console.error('file selection failed:', err);
			}
		  });
		  
		},
		async choose_do_for_more (res,callback){
			  for(var i=0;i<res.tempFilePaths.length;i++){
				uni.showLoading({
					mask:true,
					title:'第'+(i+1)+'/'+res.tempFilePaths.length+'张上传中..'
				})
				const filePath = res.tempFilePaths[i];
				let fileSuffix = filePath.substring(filePath.lastIndexOf('.') + 1);
				console.log('File Suffix:', fileSuffix);
				if(fileSuffix.match(/blob/i)){
					fileSuffix='jpg';
				}
				const postdata={
					type:'v2',
					 fileName: `uploads/${this.getFormattedDate()}/${Date.now()}-${Math.floor(Math.random() * 1000)}.${fileSuffix}`
				}
				const res2=await uni.$api.chat.s3generatePresignedUrl(postdata)
				console.log(res);
				const attributes = res2.attributes;
				const inputs = res2.inputs;
				const res3=await this.uploadToS3(filePath, attributes, inputs);
				callback(res3);
				uni.hideLoading();
			  }
		},
		
		
		async uploadToS3(filePath,  attributes, inputs) {
				inputs['acl']='public-read';
				inputs['success_action_status']='201';
				return new Promise((resolve, reject) => {
					uni.uploadFile({
					  url: attributes.action,
					  filePath: filePath,
					  name: 'file',
					  formData: inputs,
					  success: (uploadFileRes) => {
						if (uploadFileRes.statusCode === 201) {
							console.log('Successfully uploaded file');
							const imageUrl = config.s3Url + '/' + inputs.key; // 获取上传后文件的 URL
							resolve(imageUrl);
						} else {
						  console.error('Error uploading file:', uploadFileRes);
						  
						}
					  },
					  fail: (err) => {
						console.error('Upload failed:', err);
						uni.showToast({
						  title: 'Upload failed',
						  icon: 'none'
						});
					  }
					});
				});
		},
		
		
		
		async upload_local_img(callback){
			var $this=this;
			const isIosTrue = uni.getStorageSync('IOS_FIRST_CAMERA')
			if (this.phoneType === 'ios' && isIosTrue !== 'false') {
				// 设为false就代表不是第一次开启相机
				uni.setStorageSync('IOS_FIRST_CAMERA', 'false')
			}
			//let token=uni.getStorageSync('__token');
			var token='';
			var __uid="";
			if(typeof(uni.getStorageSync("userinfo").token)!='undefined'){
				 token=uni.getStorageSync("userinfo").token;
				 __uid=uni.getStorageSync("userinfo").id;
			}
			uni.chooseImage({
				sizeType: "compressed",
				// 选择图片的数量
				count: 1,
				success: res => {
					 console.log(res.tempFilePaths[0])
					var imgBg = res.tempFilePaths[0]
					uni.uploadFile({
						url: config.apiUrl + 'index/ajax/upload?token='+token,
						header: {
							// 'ba-user-token': token,
							// 'batoken':token
						},
						filePath: imgBg,
						name: 'file',
						success: (uploadFileRes) => {
							let data2 = JSON.parse(uploadFileRes.data);
							var img=data2.data.fullurl;
							console.log(img);
							console.log(typeof callback,'ooooooooooooo')
							//callback(imgValue.file);
							if(typeof callback=='string'){
								console.log(img)
								eval('$this.'+callback+'=img');
								$this.$forceUpdate();
							}
							if(typeof callback=='function'){
								callback(img);
							}
							
						}
					});
				},
			})
			
		},
		share_img(img_url){
			
		},
		save_img(img_url){//获取权限保存相册
			var $this=this;
			this.saveImageToPhotosAlbum(img_url);
			
		},
		//**生成二维码**//
		uqrcode: function(text,componentInstance,canvasId,width) {
			this.qrShow = true
			uQRCode.make({
				canvasId: canvasId?canvasId:'qrcode',
				componentInstance: componentInstance,
				text: text,
				size: width?width:400,
				margin: 0,
				backgroundColor: '#ffffff',
				foregroundColor: '#000000',
				fileType: 'jpg',
				errorCorrectLevel: uQRCode.errorCorrectLevel.H,
				success: res => {}
			})
		},
		save_qrcode(){
			var $this=this;
			uni.canvasToTempFilePath(
			    {
			        canvasId: 'qrcode_box',
			        fileType:'jpg',
			        width: 300,
			        height: 300,
			        success: res => {
			            console.log(res);
						//#ifdef MP-WEIXIN
						uni.saveImageToPhotosAlbum({
						    filePath: res.tempFilePath,
						    success: res => {
						        console.log(res);
								$this.success('图片保存成功');
						    },
						    fail: err => {
						        console.log(err);
								$this.success('图片保存失败');
						    }
						});
						//#endif
						//#ifndef MP-WEIXIN
						 h5_save(res.tempFilePath);
						//#endif
			        },
			        fail: err => {
			            console.log(err);
						$this.success('图片获取失败');
			        }
			    }, 
			    // this // 组件内使用必传当前实例
			);
			
			function h5_save(url) {
				var oA = document.createElement("a");
				oA.download = '二维码.jpg'; // 设置下载的文件名，默认是'下载'
				oA.href = url;
				document.body.appendChild(oA);
				oA.click();
				oA.remove(); // 下载之后把创建的元素删除
			}
		},
		saveImageToPhotosAlbum(img_url){
			var $this=this;
			uni.showToast({
				title:"正在下载..",
				icon:"none",
				duration:3000
			});
			uni.downloadFile({
				url:img_url,
				success: (res) =>{ console.log(res);
					if (res.statusCode === 200){
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function() {
								uni.showToast({
									title: "保存成功",
									icon: "none"
								});
							},
							fail: function() {
								uni.showToast({
									title: "保存失败",
									icon: "none"
								});
							}
						});
					}
				}
			})
		},
	},
}
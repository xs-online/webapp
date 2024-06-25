import config from '@/common/config.js';
const  dev = 'weixin';
const  appId = 0;

const  apiUrl 	 =config.webUrl;
//const  apiUrl 	 = process.env.NODE_ENV === 'development' ? 'http://16.163.123.231:83/' :'http://16.163.123.231:83/';
const  staticUrl = config.staticUrl;
const  imgUrl = config.imgUrl;
const  s3Url = config.s3Url;
const  wsUrl = config.wsUrl;

export default {
	appId,
	dev,
	apiUrl,
	staticUrl,
	imgUrl,
	s3Url,
	wsUrl
}
$(function() {

	//生成时间戳
	var timestamp = Date.parse(new Date());
	timestamp = timestamp / 1000;

	//uuid
	//用于生成uuid
	var UUID = {
		s4: function() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		},
		guid: function() {
			return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
		}
	}

	/**
	 * signature 签名
	 * 获取signature主要分四部
	 * 1.使用APPID和APPSecret获取access_token；
	 * 2.使用access_token获取jsapi_ticket ；
	 * 3.用时间戳、随机数、jsapi_ticket和要访问的url按照签名算法拼接字符串；
	 * 4.对第三步的字符串进行SHA1加密，得到签名。
	 */
	//第一步 获取access_token
	var accessToken = function() {

		var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx502f028db2c4bd0f&secret=039223f246c8576f839ed08087aecda7';
		
		window.open(url);
	}
	setTimeout(function(){
		accessToken();
	},1000);
	
	

	


	// 	wx.config({
	// 
	// 		debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	// 
	// 		appId: 'wx502f028db2c4bd0f', // 必填，公众号的唯一标识
	// 
	// 		timestamp: timestamp, // 必填，生成签名的时间戳
	// 
	// 		nonceStr: gw+UUID.guid, // 必填，生成签名的随机串
	// 
	// 		signature: '', // 必填，签名，见附录1
	// 
	// 		jsApiList: [ 'checkJsApi', 'scanQRCode' ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	// 
	// 	});
})

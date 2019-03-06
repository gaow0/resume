//浏览器大小发生改变页面刷新
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
	var newWidth = $win.width();
	var newHeight = $win.height();
	if (newWidth != clientWidth && newHeight != clientHeight) {
		location.replace(location);
	}
});

var base = {
	loveDate: function(date) {
		var _self = this;
		if (!date) {
			layer.msg('密匙错误 ^_^');
			return false;
		} else if (_self.encryption(date) != 'd0ac7035b46319acfb9eff36ba967d76') {
			layer.msg('密匙错误 ^_^');
			return false;
		} else {
			localStorage.setItem('myLove', 'XuQiongDan');

			window.location.href = "http://www.gaowei.work/resume/LOVE/";
		}


	},
	clickDate: function() {
		var _self = this;
		var heart = '<div class="my-heard">' +
			'<div class="gw-heard-input">' +
			'<div>请选择密匙日期</div>' +
			'<input type="text" id="dateSelectorOne" readonly="readonly" placeholder="选择日期">' +
			'</div>' +
			'</div>';
		layer.open({
			type: 1,
			title: '',
			skin: 'layui-layer-gw', //样式类名
			closeBtn: 0, //不显示关闭按钮
			anim: 2,
			offset: 't',
			shade: [0.8, '#393D49'],
			scrollbar: false,
			shadeClose: false, //开启遮罩关闭
			btn: ['确认', '离开'],
			btnAlign: 'c',
			content: heart,
			yes: function() {
				var date = $('#dateSelectorOne').val();
				_self.loveDate(date);
			}
		});

		// document.body.offsetHeight 页面body高度（包括边框）
		// 		var h = $(window).height();
		// 		var w = $(window).width();
		// 		$('.gw-pop').css({
		// 			'width': w + 'px',
		// 			'height': h + 10 + 'px',
		// 		})

		//禁止滚动条
		// 		$(document.body).css({
		// 			"overflow-y": "hidden"
		// 		});
		// 


		new Mdate("dateSelectorOne", {
			//"dateShowBtn"为你点击触发Mdate的id，必填项

			acceptId: "",
			//此项为你要显示选择后的日期的input，不填写默认为上一行的"dateShowBtn"

			beginYear: "2000",
			//此项为Mdate的初始年份，不填写默认为2000

			beginMonth: "",
			//此项为Mdate的初始月份，不填写默认为1

			beginDay: "",
			//此项为Mdate的初始日期，不填写默认为1

			endYear: "",
			//此项为Mdate的结束年份，不填写默认为当年

			endMonth: "",
			//此项为Mdate的结束月份，不填写默认为当月

			endDay: "",
			//此项为Mdate的结束日期，不填写默认为当天

			format: ""
			//此项为Mdate需要显示的格式，可填写"/"或"-"或".",不填写默认为年月日
		})
	},
	/**
	 * 判断是phone还是pc
	 */
	browserRedirect: function() {
		var _self = this;
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		// document.writeln("您的浏览设备为：");
		if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			/**
			 * 移动端
			 * jQuery 判断iPad、iPhone、Android是横屏还是竖屏的方法
			 * 屏幕方向对应的window.orientation值：
			 * ipad： 90 或 -90 横屏
			 * ipad： 0 或180 竖屏
			 * Andriod：0 或180 横屏
			 * Andriod： 90 或 -90 竖屏
			 */
			if (window.orientation == 0 || window.orientation == 180) {
				//ipad、iphone竖屏；Andriod竖屏
				console.log('竖屏');
				return false;
			} else if (window.orientation == 90 || window.orientation == -90) {
				//ipad、iphone横屏；Andriod横屏
				console.log('横屏');
				_self.clickDate();
				return false;
			}
		} else {
			//pc端
			console.log(_self.language().serverError);
		}
	},
	/**
	 *	判断是否是微信浏览器
	 */
	isWx: function() {
		let ua = navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == "micromessenger") {
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 获取url地址传递的参数
	 * 栗子：
	 * 若地址栏URL为：abc.html?id=123&url=http://www.maidq.com
	 * 那么，但你用上面的方法去调用：alert(GetQueryString("url"));
	 */
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	},
	/**
	 * crypto-js/sha256加密  64个字符
	 */
	encryption: function(val) {
		return hex_md5(CryptoJS.SHA256(val).toString().toUpperCase());
	},
	/**
	 * js语言切换
	 */
	language: function() {
		var lang = localStorage.getItem('lang') || 'zh_CN';
		var langs = {
			'zh_CN': {
				'G0001': "",
				'serverError': "服务器繁忙，请稍后再试",
			},
			'en_US': {
				'G0001': "",
				'serverError': "The server is busy, please try again later",
			}
		}
		return langs[lang];
	},
	/**
	 * 常用正则
	 */
	el: function() {
		var regular = {
			'A01': {
				q: /^0*(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[2|3|4|5|6|7|8|9]|18[0-9]|19[0-9])\d{8}$/,
				a: '手机号码格式错误'
			},
			'A02': {
				q: /^\+?[1-9][0-9]*$/,
				a: '请输入大于0的数字'
			},
			'A03': {
				q: /^((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,20}$/,
				a: '密码必须是字母、数字和符号两种及以上的组合，6-20个字符'
			},
			'A04': { //价格（数字）
				q: /^\d{1,14}(\.\d{1,2})?$/,
				a: Base.language().G0003
			},
			'A05': { //用户名
				q: /(?![0-9]+$)(?![a-zA-Z]+$)^[0-9A-Za-z]{6,14}$/,
				a: Base.language().G0004
			},
			'A06': { //邮箱
				q: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
				a: Base.language().G0005
			},
			'A07': { //真实姓名
				q: /^[\u4E00-\u9FA5]{1,6}$/,
				a: Base.language().G0006
			},
			'A08': { //身份证号
				q: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
				a: Base.language().G0007
			},
			'A09': { //限制8位小数
				q: /^-?\d+\.?\d{0,8}$/,
				a: Base.language().G0018
			}
		}
	},
	Ajax: function(parameter, successCallback, errorCallback) {
			var onSite = parameter.onSite; //站内还是站外
			var ajaxParameter = {
				type: parameter.type, //HTTP请求类型
				url: parameter.url,
				data: !parameter.data?{}:parameter.data,
				async: false,
				dataType: 'json', //服务器返回json格式数据
				timeout: 10000, //超时时间设置为10秒；
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
				},
				success: function(data) {
					if (data.code) {
						if (data.code == '0000') {
							// window.location.href = "/web_business/login"
							layer.msg('请求出错');
						} else {
							if (typeof successCallback === 'function') {
								successCallback(data);
							} else {
								console.info(error);
								layer.msg('error:' + error);
							}
						}
					} else {
						console.info(data);
					}
				},
				error: function(error) {
					if (typeof errorCallback === 'function') {
						errorCallback(error);
					} else {
						console.info(error);
						layer.msg('error:' + error);
					}
				}
			}
	
			$.ajax(ajaxParameter);
	},
	uuid: function(len, radix) {
		var timestamp = new Date().getTime();
		var char = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + timestamp;
		var chars = char.split('');
	
		var uuid = [],
			i;
		radix = radix || chars.length;
	
		if (len) {
			// Compact form
			for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
		} else {
			// rfc4122, version 4 form
			var r;
	
			// rfc4122 requires these characters
			uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
			uuid[14] = '4';
	
			// Fill in random data.  At i==19 set the high bits of clock sequence as
			// per rfc4122, sec. 4.1.5
			for (i = 0; i < 36; i++) {
				if (!uuid[i]) {
					r = 0 | Math.random() * 16;
					uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
				}
			}
		}
		return uuid.join('');
	},
}

$(function() {
	base.browserRedirect();
	//设置语言
	// localStorage.setItem('lang', 'zh_CN');
})

//页面语言切换
Vue.prototype.lang = localStorage.getItem('lang') || 'zh_CN';
Vue.prototype.i18n = {
	"zh_CN": {
		"G001": "简历",
		"G002": "关于我的",
		"G003": "工作经历",
		"G004": "项目展示",
		"G005": "联系方式",
		"G006": "切换为英文",
		"G007": "欢迎阅读我的简历",
		"G008": "自我介绍一下",
		"G009": "嗨~ 你好，我叫高伟，现居成都市。做前端已经四年多了，在工作期间。主要工作负责项目的页面开发，根据项目需求写出兼容各大浏览器和移动端页面，配合后台开发人员实现用户交互功能。熟练使用jquery,angularjs,vue。也有接触过phplarave框架、mysql数据库。"
	},
	"en_US": {
		"G001": "Resume",
		"G002": "About",
		"G003": "Work",
		"G004": "Projects",
		"G005": "Contact",
		"G006": "Set to English",
		"G007": "Welcome to read my resume",
		"G008": "To introduce myself",
		"G009": "Hi, my name is gao wei. I live in chengdu.I have been working on the front end for more than four years.I was mainly responsible for the page development of the project, wrote pages compatible with major browsers and mobile terminals according to the project requirements, and cooperated with background developers to achieve user interaction functions.Proficient in using jquery,angularjs and vue.I have also been exposed to PHP larave framework and mysql database."
	}
};

//用户变化屏幕方向时调用
// $(window).bind('orientationchange', function(e) {
//     base.browserRedirect();
// });

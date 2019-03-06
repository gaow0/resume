/**
 * 2019年3月4日16:45:04
 */

var dd = localStorage.getItem('myLove');
if(!dd || dd != 'XuQiongDan'){
	window.location.href="http://www.gaowei.com/resume/";
}

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

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this),
				str = $ele.html(),
				progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 520);
		});
		return this;
	};
})(jQuery);


//日期方法
function timeElapse(timeStr) {
	var end_str = (timeStr).replace(/-/g, "/");
	var class_time = new Date(end_str); //将时间字符串转换为时间.
	var now_time = new Date(); //获取系统时间
	var totalSecs = (now_time - class_time) / 1000; //获得两个时间的总毫秒数. 靠前的就调换再减。
	var days = Math.floor(totalSecs / 3600 / 24);
	var hours = Math.floor((totalSecs - days * 24 * 3600) / 3600);
	var minutes = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600) / 60);
	var seconds = Math.floor((totalSecs - days * 24 * 3600 - hours * 3600 - minutes * 60));

	hours ? hours = '0' + hours : hours = hours;
	minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
	seconds < 10 ? seconds = '0' + seconds : seconds = seconds;

	var result = "<span class=\"digit inline\">" + days + "</span> Day <span class=\"digit inline\">" + hours +
		"</span> H <span class=\"digit inline\">" + minutes + "</span> M <span class=\"digit inline\">" + seconds +
		"</span> S";
	$("#clock").html(result);
}
setInterval(function() {
	timeElapse('2019-2-11 10:00:00');
}, 500);
$(".name").show().typewriter(); //输入效果

//触发音乐
//--创建页面监听，等待微信端页面加载完毕 触发音频播放
document.addEventListener('WeixinJSBridgeReady', function() {
	document.getElementById('audios').play()
})

//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
document.addEventListener('touchstart', function() {
	document.getElementById('audios').play()
})

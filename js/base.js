$(function() {

	/*刷新返回页面顶部*/
	addEventListener("load", function() {
		setTimeout(hideURLbar, 0);
	}, false);

	function hideURLbar() {
		window.scrollTo(0, 1);
	}

	/*教育*/
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = $(this).attr('href');

		if ($(e.target).is('.active')) {
			close_accordion_section();
		} else {
			close_accordion_section();

			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
		}

		e.preventDefault();
	});

	/*项目经验*/
	$('#horizontalTab').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion           
		width: 'auto', //auto or any width like 600px
		fit: true // 100% fit in a container
	});






	/*页面开始动画*/
	setTimeout(function() {
		$('body').addClass('loaded');
		$('h1').css('color', '#222222');
	}, 1000);

	/*回到顶部*/
	$('#toTopHover').UItoTop({
		easingType: 'easeOutQuart'
	});

	/*nav锚链接*/
	$(".scroll").click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	});


	//阻止pc端浏览器缩放js代码
	//由于浏览器菜单栏属于系统软件权限，没发控制，我们着手解决ctrl/cammond + +/- 或 Windows下ctrl + 滚轮 缩放页面的情况，只能通过js来控制了
	// jqeury version
	// chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
	// $('body').css('zoom', 'reset');
	$(document).keydown(function(event) {
		//event.metaKey mac的command键
		if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which ===
				173 || event.which === 109 || event.which === 187 || event.which === 189)) {
			event.preventDefault();
		}
	});
	$(window).bind('mousewheel DOMMouseScroll', function(event) {
		if (event.ctrlKey === true || event.metaKey) {
			event.preventDefault();
		}
	});


});

// 判断pc浏览器是否缩放，若返回100则为默认无缩放，如果大于100则是放大，否则缩小
var detectZoom = function() {
	var ratio = 0,
		screen = window.screen,
		ua = navigator.userAgent.toLowerCase();

	if (window.devicePixelRatio !== undefined) {
		ratio = window.devicePixelRatio;
	} else if (~ua.indexOf('msie')) {
		if (screen.deviceXDPI && screen.logicalXDPI) {
			ratio = screen.deviceXDPI / screen.logicalXDPI;
		}
	} else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
		ratio = window.outerWidth / window.innerWidth;
	}

	if (ratio) {
		ratio = Math.round(ratio * 100);
	}

	return ratio;
};
//window.onresize 事件可用于检测页面是否触发了放大或缩小。
$(window).on('resize', function() {
	isScale();
});

//判断PC端浏览器缩放比例不是100%时的情况
var isScale = function() {
	var rate = detectZoom();
	if (rate != 100) {
		//如何让页面的缩放比例自动为100,'transform':'scale(1,1)'没有用，又无法自动条用键盘事件，目前只能提示让用户如果想使用100%的比例手动去触发按ctrl+0
		console.log(1)
		alert('当前页面不是100%显示，请按键盘ctrl+0恢复100%显示标准，以防页面显示错乱！')
	}
}






/**联系方式tips**/
var showTips = function(type) {
	if (type == 'git') {
		layer.tips('https://github.com/gaowi', '#git', {
			tips: [1, '#337ab7'] //还可配置颜色
		});
	}



	if (type == 'qq') {
		// layer.tips('<img style="width:100%;"  src="images/contact/qq.JPG" alt="QQ"/>', '#qq', {
		// 	tips: [1, '#337ab7'] //还可配置颜色
		// });
		// 
		layer.open({
			type: 1,
			title: '',
			skin: 'layui-layer-demo', //样式类名
			closeBtn: 0, //不显示关闭按钮
			anim: 1,
			shadeClose: true, //开启遮罩关闭
			content: "<img alt='' src='images/contact/qq.JPG' style='width:180px;height:180px;padding:20px;'>"
		});
	}



	if (type == 'wx') {
		// layer.tips('<img style="width:100%;"  src="images/contact/wx.JPG" alt="WeChat"/>', '#wx', {
		// 	tips: [1, '#337ab7'] //还可配置颜色
		// });
		layer.open({
			type: 1,
			title: '',
			skin: 'layui-layer-demo', //样式类名
			closeBtn: 0, //不显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			content: "<img alt='' src='images/contact/wx.JPG' style='width:180px;height:180px;padding:20px;'>"
		});
	}

	if (type == 'email') {
		layer.tips('1104943970@qq.com', '#email', {
			tips: [1, '#337ab7'] //还可配置颜色
		});
	}
}

var hideTips = function() {
	layer.closeAll();
}

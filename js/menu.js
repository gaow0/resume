$(function() {

	//窗口改变触发事件
	$(window).resize(function() {
		var win_h = $(window).height(); //可视窗口高度
		var nav_h = $('.nav').height(); //nav的高度


	});

	//禁止页面选择以及鼠标右键
	// document.oncontextmenu = function() {
	// 	return false;
	// };
	// document.onselectstart = function() {
	// 	return false;
	// };


	//点击除导航外的任意地方关闭导航
	$("#menu_check,.menu-box").click(function(event) {
		stopBubble(event);
	});
	$(document).click(function() {
		$('.mask').remove();
		$('.menu-box').removeClass('menu-fixed-show').addClass('menu-fixed-hide');
	});

	//阻止冒泡函数
	function stopBubble(e) {
		if (e && e.stopPropagation) {
			e.stopPropagation(); //w3c
		} else {
			window.event.cancelBubble = true; //IE
		}
	}
	
	//当锚点到达隐藏nav
	$('.nav li a').click(function() {
		if( $(this).attr('id') == 'print'){
			timeDelay(510);	//打印时候隐藏侧栏
		}else{
			$('.mask').remove();
			$('.menu-box').removeClass('menu-fixed-show').addClass('menu-fixed-hide');
		}
	})

	$('#menu_check').click(function() {
		timeDelay(510);
	})

	var run = 1;
	var timeDelay = function(time) {
		if (run == 1) {
			setTimeout(function() {
				delay(1);
			}, time)
			run += 1;
		} else {
			return false;
		}
		logic();
	}

	var delay = function(temp) {
		run = temp;
	}

	var logic = function() {
		if (!$('div').hasClass('mask')) {
			$('body').append('<div class="mask"></div>');
		} else {
			$('.mask').remove();
		}

		if ($('.menu-box').is('.menu-fixed-hide')) {
			$('.menu-box').removeClass('menu-fixed-hide').addClass('menu-fixed-show');
		} else {
			$('.menu-box').removeClass('menu-fixed-show').addClass('menu-fixed-hide');
		}
	}
})
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

});

/**联系方式tips**/
var showTips = function(type){
	if(type == 'git'){
		layer.tips('https://github.com/gaowi', '#git', {
			tips: [1, '#337ab7'] //还可配置颜色
		});
	}



	if(type == 'qq'){
		// layer.tips('<img style="width:100%;"  src="images/contact/qq.JPG" alt="QQ"/>', '#qq', {
		// 	tips: [1, '#337ab7'] //还可配置颜色
		// });
		// 
		layer.open({
			type: 1,
			title:'',
			skin: 'layui-layer-demo', //样式类名
			closeBtn: 0, //不显示关闭按钮
			anim: 1,
			shadeClose: true, //开启遮罩关闭
			content: "<img alt='' src='images/contact/qq.JPG' style='width:180px;height:180px;padding:20px;'>"
		});
	}



	if(type == 'wx'){
		// layer.tips('<img style="width:100%;"  src="images/contact/wx.JPG" alt="WeChat"/>', '#wx', {
		// 	tips: [1, '#337ab7'] //还可配置颜色
		// });
		layer.open({
			type: 1,
			title:'',
			skin: 'layui-layer-demo', //样式类名
			closeBtn: 0, //不显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			content: "<img alt='' src='images/contact/wx.JPG' style='width:180px;height:180px;padding:20px;'>"
		});
	}

	if(type == 'email'){
		layer.tips('1104943970@qq.com', '#email', {
			tips: [1, '#337ab7'] //还可配置颜色
		});
	}
}

var hideTips = function(){
	layer.closeAll();
}
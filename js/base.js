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


	/**联系方式tips**/
	$('#git').contip({
		align: 'top',
		bg: '#337ab7',
		fade: 200,
		rise: 0,
		show: false,
		trigger: 'hover',
		html: 'gitHub'
	});

	$('#qq').contip({
		align: 'top',
		bg: '#337ab7',
		fade: 200,
		rise: 0,
		max_width: 150,
		show: false,
		trigger: 'hover',
		html: '<img style="width:100%;"  src="images/contact/qq.JPG" alt="QQ"/>'
	});

	$('#wx').contip({
		align: 'top',
		bg: '#337ab7',
		fade: 200,
		rise: 0,
		max_width: 150,
		show: false,
		trigger: 'hover',
		html: '<img style="width:100%;"  src="images/contact/wx.JPG" alt="WeChat"/>'
	});

	$('#email').contip({
		align: 'top',
		bg: '#337ab7',
		fade: 200,
		rise: 0,
		show: false,
		trigger: 'hover',
		html: '1104943970@qq.com'
	});


	// $('#git').tipso({
	// 	width: 80,
	// 	background: '#337ab7'
	// });
	// $('#qq').tipso({
	// 	userTitle: false,
	// 	width: 150,
	// 	background: '#337ab7',
	// 	content: '<img style="width:100%;"  src="images/contact/qq.JPG" alt="QQ"/>'
	// });
	// $('#wx').tipso({
	// 	userTitle: false,
	// 	width: 150,
	// 	background: '#337ab7',
	// 	content: '<img style="width:100%;"  src="images/contact/wx.JPG" alt="WeChat"/>'
	// });
	// $('#email').tipso({
	// 	width: 170,
	// 	background: '#337ab7'
	// });


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

})
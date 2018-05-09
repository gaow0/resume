$(function() {
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
	$('#git').tipso({
		width: 80,
		background: '#337ab7'
	});
	$('#qq').tipso({
		userTitle: false,
		width: 150,
		background: '#337ab7',
		content: '<img style="width:100%;"  src="images/contact/qq.JPG" alt="QQ"/>'
	});
	$('#wx').tipso({
		userTitle: false,
		width: 150,
		background: '#337ab7',
		content: '<img style="width:100%;"  src="images/contact/wx.JPG" alt="WeChat"/>'
	});
	$('#email').tipso({
		width: 170,
		background: '#337ab7'
	});

	/*页面开始动画*/	
	setTimeout(function() {
		$('body').addClass('loaded');
		$('h1').css('color', '#222222');
	}, 1000);
	
	/*回到顶部*/
	$('#toTopHover').UItoTop({ easingType: 'easeOutQuart' });

	/*nav锚链接*/
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});

})
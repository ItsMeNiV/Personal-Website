$(document).ready(function(){
    $(window).scroll(function(){
        $(".leadtext").css("opacity", 1 - $(window).scrollTop() / 250);
        $(".maintitlefooter").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});

function moveTo(location) {
	$('html, body').animate({
    	scrollTop: $('#' + location).offset().top
	}, 1000);
}

function openMobileMenu() {
	$('.mobile-menu-open').animate({'border-spacing': 90}, {
		step: function(now, fx) {
			$('.mobile-menu-open').css('-webkit-transform', 'rotate(' + now + 'deg)');
		},
		duration: 400
	}, 'linear');
	$('.mobile-menu-open').promise().done(function() {
		$('.mobile-menu-open').css('display', 'none');
		$('.mobile-menu-close').css('display', 'block');
		$('.mobile-menu').css('display', 'block');	
	});
}

function closeMobileMenu() {
	$('.mobile-menu-open').css({'-webkit-transform': 'rotate(0deg)', 'border-spacing': '0'});
	$('.mobile-menu-open').css('display', 'block');
	$('.mobile-menu-close').css('display', 'none');
	$('.mobile-menu').css('display', 'none');
}
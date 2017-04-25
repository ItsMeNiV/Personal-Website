$(document).ready(function(){
  $('.leadtext').css('opacity', 1 - $(window).scrollTop() / 250);
  $('.maintitlefooter').css('opacity', 1 - $(window).scrollTop() / 250);

  $(window).scroll(function(){
    $('.leadtext').css('opacity', 1 - $(window).scrollTop() / 250);
    $('.maintitlefooter').css('opacity', 1 - $(window).scrollTop() / 250);
  });

  var headers = ['#about-me-heading', '#experience-header', '#skills-header', '#contact-me-header'];
  var content = ['#about-me-content', '#experience-content', '#skills-content', '#contact-me-content'];
  $.each(headers, function(index, value) {
    inView(value)
    .on('enter', function() {
      slideInFromLeft($(value));
    })
    .on('exit', function() {
      $(value).animate({opacity:0},700);
    });
  });
  $.each(content, function(index, value) {
    inView(value)
    .on('enter', function() {
      slideInFromRight($(value));
    })
    .on('exit', function() {
      $(value).animate({opacity:0},700);
    });
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

function slideInFromLeft(elem) {
  elem.css({'position':'relative','opacity': 0, 'left':'-=100'});
  elem.animate({left:0, opacity:1},700);
}

function slideInFromRight(elem) {
  elem.css({'position':'relative','opacity': 0, 'left':'+=100'});
  elem.animate({left:0, opacity:1},700);
}
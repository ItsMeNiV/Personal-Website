$(document).ready(function(){
  $('.leadtext').css('opacity', 1 - $(window).scrollTop() / 250);
  $('.maintitlefooter').css('opacity', 1 - $(window).scrollTop() / 250);

  $(window).scroll(function(){
    $('.leadtext').css('opacity', 1 - $(window).scrollTop() / 250);
    $('.maintitlefooter').css('opacity', 1 - $(window).scrollTop() / 250);
  });

  var headers = ['#about-me-heading', '#experience-header', '#skills-header', '#contact-me-header'];
  var content = ['#about-me-content', '#experience-content', '#skills-content', '#contact-me-content'];
  var subtitletexts = ['Software Developer', 'Gamer', 'Mechanical Keyboard Enthuhsiast', 'Coffee-Lover', 'Korea-Geek'];

  var counter = 1;
  setInterval(placeSubtitles, 2500);
  function placeSubtitles() {
    $('#subtitle').text(subtitletexts[counter]);
    counter++;
    if (counter >= subtitletexts.length) {
      counter = 0;
    }
  }

  eightBitText('Yannik Hodel', $('.maintitle'));

  $.each(headers, function(index, value) {
    inView(value)
    .on('enter', function() {
      slideInFromLeft($(value));
    })
    .on('exit', function() {
      $(value).css('opacity', '0');
    });
  });
  $.each(content, function(index, value) {
    inView(value)
    .on('enter', function() {
      slideInFromRight($(value));
    })
    .on('exit', function() {
      $(value).css('opacity', '0');
    });
  });
  inView('.ghostbutton')
  .on('enter', function() {
    $('.ghostbutton').animate({opacity:1},200);
  })
  .on('exit', function() {
    $('.ghostbutton').css('opacity', '0');
  });
});

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function eightBitText(text, elem) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
  for (var i = 0, len = text.length; i < len; i++) {
    var currentText = elem.text();
    $.each(alphabet, function(index, value) {
      elem.text(currentText + alphabet[index]);
      if(elem.text().slice(-1) === text[i]) {
        elem.text(text.slice(0, i+1));
        return false;
      }
    });
  }
}

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
	$('.mobile-menu-open').css('display', '');
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

window.closeMobileMenu = closeMobileMenu
window.openMobileMenu = openMobileMenu
window.moveTo = moveTo
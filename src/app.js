window.sr = ScrollReveal();

$(document).ready(function () {
  sr.reveal('.scrollreveal', { duration: 1000 });

  setScrollOpacity();

  var subtitletexts = ['Software Developer', 'Gamer', 'Coffee-Lover', 'Korea-Geek', 'Mechanical Keyboard Enthuhsiast'];

  var counter = 0;
  $('#subtitle').text(subtitletexts[counter]);
  counter++;
  setInterval(placeSubtitles, 2500);
  function placeSubtitles() {
    $('#subtitle').text(subtitletexts[counter]);
    counter++;
    if (counter >= subtitletexts.length) {
      counter = 0;
    }
  }
});

function setScrollOpacity() {
  $('.leadtext').css('opacity', 1 - $(window).scrollTop() / 250);
  $('.maintitlefooter').css('opacity', 1 - $(window).scrollTop() / 250);

  $(window).scroll(function () {
    $('.leadtext').css('opacity', 1 - $(window).scrollTop() / 250);
    $('.maintitlefooter').css('opacity', 1 - $(window).scrollTop() / 250);
  });
}

function moveTo(location) {
  $('html, body').animate({
    scrollTop: $('#' + location).offset().top
  }, 1000);
}

function openMobileMenu() {
  $('.mobile-menu-open').animate({ 'border-spacing': 90 }, {
    step: function (now, fx) {
      $('.mobile-menu-open').css('-webkit-transform', 'rotate(' + now + 'deg)');
    },
    duration: 400
  }, 'linear');
  $('.mobile-menu-open').promise().done(function () {
    $('.mobile-menu-open').css('display', 'none');
    $('.mobile-menu-close').css('display', 'block');
    $('.mobile-menu').css('display', 'block');
  });
}

function closeMobileMenu() {
  $('.mobile-menu-open').css({ '-webkit-transform': 'rotate(0deg)', 'border-spacing': '0' });
  $('.mobile-menu-open').css('display', '');
  $('.mobile-menu-close').css('display', 'none');
  $('.mobile-menu').css('display', 'none');
}

window.closeMobileMenu = closeMobileMenu
window.openMobileMenu = openMobileMenu
window.moveTo = moveTo
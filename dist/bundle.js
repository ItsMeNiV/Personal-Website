/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);
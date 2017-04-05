$(document).ready(function(){
    $(window).scroll(function(){
        $(".leadtext").css("opacity", 1 - $(window).scrollTop() / 250);
        $(".maintitlefooter").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});
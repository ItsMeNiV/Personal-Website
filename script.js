$(document).ready(function(){
    $(window).scroll(function(){
        $(".maintitle").css("opacity", 1 - $(window).scrollTop() / 250);
        $(".maintitlefooter").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});
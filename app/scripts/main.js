$(document).ready(function(){
    //page Height
    var windowHeight = $(window).height();
    if(windowHeight >= 580){
        $('.slider').css('height',windowHeight);
        $('.section-top').css('height',windowHeight);
    }else{
        $('.section-top').css('height',580);
    }


//page Title Height
    var headerHeight = $('.header').height();
    var title =  $('.section-top__title');
    var titleHeight = windowHeight - headerHeight;
    title.css('height',titleHeight);
    $(window).resize(function () {
        var headerHeight = $('.header').height();
        var windowHeight = $(window).height();
        var titleHeight = windowHeight - headerHeight;
        if(windowHeight >= 580){
            $('.slider').css('height',windowHeight);
            $('.section-top').css('height',windowHeight);
            title.css('height',titleHeight);
        }
    });
});
//first section scroll
$('.wrapper__inner').scroll(function(){
    var windowHeight = $(window).height();
    var scrollT = $(this).scrollTop();
    if(scrollT >= 1 || scrollT <= windowHeight +1){
        $(this).stop().animate({
            scrollTop: windowHeight
        },70);
        $('.bottom-menu__left').addClass('navOpen');
        $('.header,.bottom-menu__powered').addClass('black');
    }
    if($('.section-top').hasClass('hide')){

    }else{
        setTimeout(function () {
            $('.section-top').addClass('hide');
        },2000);
    }
})
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
$(document).ready(function() {
    var rNumb = $(this).index();
    $('#fullpage').fullpage({
        anchors:['Header', 'Haircut', 'Outline', 'BLOW', 'BERD', 'hot', 'CAMOUFLAGE', 'Contacts'],
        scrollingSpeed: 1500,
        onLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
            if(rNumb <= $(this).index()){
                console.log(rNumb+' : '+ $(this).index());
                $(this).addClass('load-s');
                setTimeout(function () {
                    $('.section').removeClass('load-s');
                    $('.section').removeClass('load-r');
                },700);
                rNumb = $(this).index();
            }else if(rNumb >= $(this).index()){
                console.log(rNumb+' : '+ $(this).index());
                $(this).addClass('load-r');
                setTimeout(function () {
                    $('.section').removeClass('load-r');
                    $('.section').removeClass('load-s');
                },700);
                rNumb = $(this).index();
            }
            //использование индекса
            if(index == 1){
                $('.bottom-menu__left').removeClass('navOpen');
                $('.header,.bottom-menu__powered').removeClass('black');
            }
            //использование ссылки с привязкой
            if(index == 2){
                $('.bottom-menu__left').addClass('navOpen');
                $('.header,.bottom-menu__powered').addClass('black');
            }
        },

    });
});
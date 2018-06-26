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
            if(index == 1){
                $('.bottom-menu__left').removeClass('navOpen');
                $('.header,.bottom-menu__powered').removeClass('black');
                $('.bottom-menu__left,.bottom-menu__adress,.bottom-menu__powered').removeClass('hiddenon');
            }
            if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7){
                $('.bottom-menu__left').addClass('navOpen');
                $('.header,.bottom-menu__powered').addClass('black');
                $('.bottom-menu__left,.bottom-menu__adress,.bottom-menu__powered').removeClass('hiddenon');
            }
            if(index == 8){
                $('.bottom-menu__left,.bottom-menu__adress,.bottom-menu__powered').addClass('hiddenon');
                $('.bottom-menu__left').removeClass('navOpen');
                $('.header,.bottom-menu__powered').addClass('black');
            }
        },

    });
    $('.bottom-menu__nav__prev').on('click',function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    })
    $('.bottom-menu__nav__next').on('click',function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    })
});
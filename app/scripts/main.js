$(document).ready(function(){

    var LANGUAGE;

    $.redrawLanguage = function (lang) {
        $.ajax({
            url : 'languages/' + lang + '.json', //тянем файл с языком
            dataType : 'json',
            success : function (response) {
                LANGUAGE = response; //записываем в глобальную переменную, а вдруг пригодиться
                $('body').find('[lng]').each(function () //ищем все элементы с атрибутом
                {
                    var lng = LANGUAGE[ $(this).attr('lng') ]; //берем нужное значение по атрибуту lng
                    var tag = $(this)[0].tagName.toLowerCase();
                    switch (tag) //узнаем название тега
                    {
                        case 'input':
                            $(this).val(lng);
                            break;
                        default:
                            $(this).html(lng);
                            break;
                    }
                });
            }
        });
    };
    $.getLanguage = function (key) {
        if (typeof(LANGUAGE[key]) != 'undefined') //если есть переменная
        {
            return LANGUAGE[key]; //возвращаем значение
        }
        return key; //если нет, тогда ключ
    };
    $.redrawLanguage('lang_en');
    setTimeout(function () {
        $('div[title]').each(function(){
            var text = $(this).html();
            $(this).attr('title', text);
        });
    },300);
    $('.header__menu__lang').on('click',function () {
        if($(this).hasClass('open')){
            $(this).removeClass('open');
        }else{
            $(this).addClass('open');
        }
    });
    $('#ua,#mua').on('click', function(e){
        e.preventDefault();
        var
            $this = $(this);
        $.redrawLanguage('lang_ua');
        $(this).removeClass('open');
    });
    $('#ru,#mru').on('click', function(e){
        e.preventDefault();
        var
            $this = $(this);
        $.redrawLanguage('lang_ru');
        $(this).removeClass('open');
    });
    $('#en,#men').on('click', function(e){
        e.preventDefault();
        var
            $this = $(this);
        $.redrawLanguage('lang_en');
        $(this).removeClass('open');
    });
    $('.header__menu__lang li a').on('click',function (e) {
        setTimeout(function () {
             $('div[title]').each(function(){
                 var text = $(this).html();
                 $(this).attr('title', text);
             });
        },300)
    });

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
    var prevIndex = $(this).index();
    $('#fullpage').fullpage({
        anchors:['main', 'haircut', 'outline', 'blowdry', 'berdtrim', 'hotshave', 'camouflage', 'contacts'],
        scrollingSpeed: 1500,
        onLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
            if(rNumb <= $(this).index()){
                $(this).addClass('load-s');
                setTimeout(function () {
                    $('.section').removeClass('load-s');
                    $('.section').removeClass('load-r');
                },700);
                rNumb = $(this).index();
            }else if(rNumb >= $(this).index()){ 
                $(this).addClass('load-r');
                setTimeout(function () {
                    $('.section').removeClass('load-r');
                    $('.section').removeClass('load-s');
                },700);
                rNumb = $(this).index();
            }
            if(index == 1){
                $('.bottom-menu__left').removeClass('navOpen');
                $('.header,.bottom-menu__powered,.header__menu-mob__but').removeClass('black');
                $('.bottom-menu__left,.bottom-menu__adress,.bottom-menu__powered').removeClass('hiddenon');
                prevIndex=$(this).index();
                $('.header').removeClass('bckwhite');
            }
            if(index == 2 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7){

                $('.bottom-menu__left').addClass('navOpen');
                $('.header,.bottom-menu__powered,.header__menu-mob__but').addClass('black');
                $('.header').addClass('bckwhite');
                $('.bottom-menu__left,.bottom-menu__adress,.bottom-menu__powered').removeClass('hiddenon');
                prevIndex=$(this).index();

            }
            if(index == 8){
                $('.bottom-menu__left,.bottom-menu__adress,.bottom-menu__powered').addClass('hiddenon');
                $('.bottom-menu__left').removeClass('navOpen');
                $('.header,.bottom-menu__powered,.header__menu-mob__but').addClass('black');
                prevIndex=$(this).index();
            }
        },
    });
    $('.bottom-menu__nav__prev').on('click',function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });
    $('.bottom-menu__nav__next').on('click',function (e) {
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });
    $('.header__menu-mob__but').on('click',function(){
        $('.header__menu-mob__list').addClass('active');
    });
    $('.header__menu-mob__list li a').on('click',function(){
        if($(this).hasClass('header__menu__lang')){}else{
            $('.header__menu-mob__list').removeClass('active');
        };
    });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            if (!$('.header__menu-mob__list').is(e.target) // если клик был не по нашему блоку
                && $('.header__menu-mob__list').has(e.target).length === 0) { // и не по его дочерним элементам
                $('.header__menu-mob__list').removeClass('active');
            }
        });
    function getRandomArbitary(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   $('.section-top').addClass('video-'+getRandomArbitary(1,2));
});
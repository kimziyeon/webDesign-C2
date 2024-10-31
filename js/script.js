$(function () {

    // 헤더

    $('nav>ul>li').mouseenter(function () {
        $(this).children('.sub').stop().slideDown();
    })

    $('nav>ul>li').mouseleave(function () {
        $(this).children('.sub').stop().slideUp();
    })

    //  헤더 탭

    $('nav>ul>li').focusin(function () {
        $(this).children('.sub').stop().slideDown();
        $(this).children('a').addClass('onn')
    })
    $('nav>ul>li').focusout(function () {
        $(this).children('.sub').stop().slideUp();
        $(this).children('a').removeClass('onn')

    })

    $('.sub>li').focusin(function () {
        $(this).children('a').addClass('onn')
    })
    $('.sub>li').focusout(function () {
        $(this).children('a').removeClass('onn')
    })





    // 슬라이드

    var s = 0;
    function slide() {

        if (s < 2) {
            s++;
        } else {
            s = 0;
        }
        $('.slide>ul>li').fadeOut();
        $('.slide>ul>li').eq(s).fadeIn();
    }
    setInterval(slide, 2000)


    // 팝업

    $('.pop_on').click(function () {
        $('.pop').show();
    })
    $('.pop_off').click(function () {
        $('.pop').hide();
    })


})
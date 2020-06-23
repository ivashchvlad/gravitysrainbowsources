$(document).ready(function () {
    $('.header__burger').click(menu)
    $('li > a, h4 > a').click(function() {
        menu();  
    })
    $('a').click(function() {
        let unit = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(unit).offset().top - 50
        }, 300);
    })
})

const menu = function () {
    $('.header__burger').toggleClass('active')
    $('nav').slideToggle()
    $('body').toggleClass('lock')
}
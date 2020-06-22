$(document).ready(function () {
    $('.header__burger').click(function () {
        $(this).toggleClass('active');
        $('nav').slideToggle();
        $('body').toggleClass('lock');
    })
});
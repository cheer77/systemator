$(function () {

    $('.select-style, .nav__select').styler();

    var swiper = new Swiper(".win__slider", {
        slidesPerView: 2,
        spaceBetween: 21,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: ".win__next",
            prevEl: ".win__prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

});
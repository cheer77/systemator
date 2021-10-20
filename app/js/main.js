$(function () {



    $('.nav__menu-btn').on('click', function (event) {
        $('.nav__menu-btn').toggleClass('nav__menu-btn-active');
        $('.menu').toggleClass('menu__active');
        $('body').toggleClass('lock');
    });




    MicroModal.init({
        disableScroll: true, // [6]
        awaitOpenAnimation: true, // [8]
        awaitCloseAnimation: true, // [9]
    });




    $('.select-style, .nav__select').styler();



    var swiper = new Swiper(".win__slider", {
        watchOverflow: true,
        centerSlidesBounds: true,
        centerSlides: true,
        navigation: {
            nextEl: ".win__next",
            prevEl: ".win__prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 640px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 24,
            },
            480: {
                slidesPerView: 1.2,
                spaceBetween: 24,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            1240: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
        },
    });



    var swiper = new Swiper(".news__block", {
        slidesPerView: 2,
        spaceBetween: 24,
        // centeredSlidesBounds: true,
        navigation: {
            nextEl: ".win__next",
            prevEl: ".win__prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });




    $('.toggle-switch').on('click', function (event) {
        $('.toggle-switch').toggleClass('active');
        $('.need__text').toggleClass('need__text--active');
    });

    $('.need__btn').on('click', function (e) {

        e.preventDefault();
        $('.need__btn').removeClass('need__btn-active');
        $(this).addClass('need__btn-active');

        $('.need__item').removeClass('need__item--active');
        $($(this).attr('href')).addClass('need__item--active');

    });



    $('.enter-modal__forgot').on('click', function (event) {
        $('.forgot-modal__overlay').toggleClass('active');
        // $('.forgot-modal').toggleClass('forgot-modal--active');
    });


    $('.video__btn').on('click', function (e) {

        e.preventDefault();
        $('.video__btn').removeClass('video__btn-active');
        $(this).addClass('video__btn-active');

        $('.video__content').removeClass('video__content-active');
        $($(this).attr('href')).addClass('video__content-active');

    });




});





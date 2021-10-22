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



    let swiper22 = new Swiper(".win__slider", {
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









    // Инициализация Свайпер Слайдера для адаптива важно-------------------------

    const windowInnerWidth = window.innerWidth;

    window.addEventListener('resize', function (event) {
        const windowInnerWidth = window.innerWidth;
        if (windowInnerWidth >= 768) {
            swiper.destroy();
        } else {
            //код инициализатора
            let swiper = new Swiper(".news__block", {
                slidesPerView: 1,
                watchOverflow: true,
                spaceBetween: 10,
                centeredSlides: true,
                pagination: {
                    el: ".news-pagination",
                    clickable: true,
                },
            });
        }
    });

    if (windowInnerWidth >= 768) {
        swiper.destroy();

    } else {
        //код инициализатора
        let swiper = new Swiper(".news__block", {
            slidesPerView: 1,
            watchOverflow: true,
            spaceBetween: 10,
            centeredSlides: true,
            pagination: {
                el: ".news-pagination",
                clickable: true,
            },
        });
    }

    window.addEventListener('resize', function (event) {
        const windowInnerWidth = window.innerWidth;
        if (windowInnerWidth >= 1098) {
            swiper2.destroy();
        } else {
            //код инициализатора
            let swiper2 = new Swiper(".video__content-slider", {
                observer: true,
                observeParents: true,
                watchOverflow: true,
                centerSlidesBounds: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    // when window width is >= 640px
                    555: {
                        slidesPerView: 1.2,
                        spaceBetween: 24,
                    },
                    768: {
                        slidesPerView: 1.2,
                        spaceBetween: 24,
                    },
                    960: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                    1098: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                },
            });
        }
    });

    if (windowInnerWidth >= 1098) {
        swiper2.destroy();

    } else {
        //код инициализатора

        let swiper2 = new Swiper(".video__content-slider", {
            observer: true,
            observeParents: true,
            watchOverflow: true,
            centerSlidesBounds: true,
            slidesPerView: 2,
            spaceBetween: 14,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    // Инициализация Свайпер Слайдера для адаптива важно-------------------------


    const needBlocks = document.querySelectorAll('.need__item');
    needBlocks.forEach(item => blockSwitcher(item))
    function blockSwitcher(block) {
        const needBlock = block
        const needText = needBlock.querySelector('.need__text')
        const switcher = needBlock.querySelector('.toggle-switch')
        switcher.addEventListener('click', () => {
            if (needText.classList.contains('need__text--active')) {
                switcher.classList.add('active')
                needText.classList.remove('need__text--active')
                needText.nextElementSibling.classList.add('need__text--active')
            } else {
                switcher.classList.remove('active')
                needText.classList.add('need__text--active')
                needText.nextElementSibling.classList.remove('need__text--active')
            }
        })
    }


});






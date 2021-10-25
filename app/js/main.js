window.addEventListener('DOMContentLoaded', function () {
    try {

        $(function () {

            function navMenu(menuSelector) {

                $(menuSelector).on('click', function () {
                    if (!$('.nav__menu-btn').hasClass('nav__menu-btn-active')) {
                        $('.nav__menu-btn').addClass('nav__menu-btn-active');
                        $('.menu').addClass('menu__active');
                        $('body').addClass('lock');
                    } else {
                        $('.nav__menu-btn').removeClass('nav__menu-btn-active');
                        $('.menu').removeClass('menu__active');
                        $('body').removeClass('lock');
                    }
                });
            };

            // call navMenu
            navMenu('.nav__menu-btn');
            navMenu('.menu__items a');

            //modal
            MicroModal.init({
                disableScroll: true, // [6]
                awaitOpenAnimation: true, // [8]
                awaitCloseAnimation: true, // [9]
            });

            document.querySelector('.nav__btn').addEventListener('click', (e) => {

            })



            $('.enter-modal__forgot').on('click', function (event) {
                $('#modal-4').attr("aria-hidden", "true");
                $('.forgot-modal__overlay').toggleClass('active')
            });

            $('.select-style, .nav__select').styler();

        })


    } catch (e) {
        console.log(e)
    }
});

window.addEventListener('DOMContentLoaded', function () {
	try{

		$(function() {

			function navMenu(menuSelector) {

				$(menuSelector).on('click', function () {
					$('.nav__menu-btn').toggleClass('nav__menu-btn-active');
					$('.menu').toggleClass('menu__active');
					$('body').toggleClass('lock');
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

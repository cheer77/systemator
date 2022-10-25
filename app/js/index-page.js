// window.addEventListener('DomContentLoaded', function () {

$(function () {


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


	$('.video__btn').on('click', function (e) {

		e.preventDefault();
		$('.video__btn').removeClass('video__btn--active');
		$(this).addClass('video__btn--active');

		$('.video__content').removeClass('video__content-active');
		$($(this).attr('href')).addClass('video__content-active');

	});




	// Инициализация Свайпер Слайдера для адаптива важно-------------------------

	if (window.innerWidth <= 768) {
		let swiper1 = new Swiper(".news__block", {
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




	if (window.innerWidth <= 1098) {
		//код инициализатора
		let swiper2 = new Swiper(".video__content-slider", {
			observer: true,
			observeParents: true,
			watchOverflow: true,
			centerSlidesBounds: true,
			centeredSlides: true,
			pagination: {
				el: ".video-pagination",
				clickable: true,
			},
			breakpoints: {
				// when window width is >= 640px
				555: {
					slidesPerView: 1,
					spaceBetween: 24,
					centeredSlides: true,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 24,
					centeredSlides: true,
				},
				960: {
					slidesPerView: 1,
					spaceBetween: 24,
					centeredSlides: true,
				},
				1098: {
					slidesPerView: 2,
					spaceBetween: 24,
					centeredSlides: true,
				},
			},
		});
	}



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

})
// })





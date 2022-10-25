window.addEventListener('DomContentLoaded', function () {

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










		function handlerActiveBtn(btn, activeClassBtn) {
			const sortBtns = btn.parentElement.children;

			for (let i = 0; i < sortBtns.length; i++) {
				if (sortBtns[i].classList.contains(activeClassBtn)) {
					sortBtns[i].classList.remove(activeClassBtn);
				}
			}
		}


		function percentCalculate(){
			const percentBtns = document.querySelectorAll(".subscription-btn--js");
			const tarifPrice = document.querySelectorAll(".subscribtion-price-count--js");


			function calculate(percent){
				tarifPrice.forEach(price =>{
					const priceData = +price.getAttribute('data-pacege');


					const result = Math.abs(priceData -(priceData * `.${percent}`)).toFixed(1);
					price.textContent = result;

				})
			}

			percentBtns.forEach(btn => {
				const percentData = +btn.getAttribute('data-percent');
				btn.addEventListener("click", () => {
					calculate(percentData);
					handlerActiveBtn(btn, 'subscription-tariffs__item-active');
					btn.classList.add('subscription-tariffs__item-active');
				})



			})
		};

		function mobileTable(){
			const tableBtns = document.querySelectorAll('.subscription-table__btn--js');


			function dataCheck(btn) {

				const tableElements = document.querySelectorAll('.table-data--js');

				tableElements.forEach(element => {

					const btnData = btn.getAttribute('data-target');

					let isDataValid;

					if (element.getAttribute('data-content') === btnData) {
						isDataValid = true;
					} else {
						isDataValid = false
					}

					if (isDataValid){

						element.style.display = 'revert';

					} else{

						element.style.display = 'none';

					}
				})

			}

			tableBtns.forEach(btn => {

				btn.addEventListener('click', () => {
					dataCheck(btn);
					handlerActiveBtn(btn, 'subscription-table__btn-active')
					btn.classList.add('subscription-table__btn-active')
				})
			})
		};

		percentCalculate();

		if (window.innerWidth <= 768) {
			mobileTable();
		}








})
})





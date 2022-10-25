window.addEventListener('DOMContentLoaded', function() {

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

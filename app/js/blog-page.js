window.addEventListener('DOMContentLoaded', function() {
	function blogSort() {
		const sortBtns = document.querySelectorAll('.blog-settings__btn--js');

		function handlerActiveBtn(sortBtn) {
			const sortBtns = sortBtn.parentElement.children;

			for (let i = 0; i < sortBtns.length; i++) {
				if (sortBtns[i].classList.contains('active')) {
					sortBtns[i].classList.remove('active');
				}
			}
		}


		function sortItems(sortBtn) {
			const btnAttr = sortBtn.getAttribute('data-target');
			const blogItems = document.querySelectorAll('.blog-item--js');
			const blogPagination = document.querySelector('.blog-page__pagination');

			blogItems.forEach(item => {

				let categoryValues = [];

				const categoryElements = item.querySelectorAll('[data-content]')

				function getItemsData(item) {
					item.forEach(element => {
						const categoryData = element.getAttribute('data-content');
						categoryValues.push(categoryData);
					})
				}

				getItemsData(categoryElements);

				const result = categoryValues.some(item => {
					if (btnAttr === item) {
						return true
					}
				})

					if (result) {
						item.classList.add('sort-show--js');
						item.classList.remove('sort-hide--js');
						blogPagination.classList.add('visually-hidden');

					} else if (btnAttr === 'all') {
						item.classList.remove('sort-show--js');
						item.classList.remove('sort-hide--js');
						blogPagination.classList.remove('visually-hidden');
					}
					else {
						item.classList.add('sort-hide--js');
						item.classList.remove('sort-show--js');
					}
				})
		}

		sortBtns.forEach(btn => {
			btn.addEventListener('click', (e) => {

				handlerActiveBtn(btn);

				btn.classList.add('active');

				sortItems(btn);
			})
		})
	}

	blogSort();
})


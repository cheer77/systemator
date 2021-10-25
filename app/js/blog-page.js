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
			const portfolioItems = document.querySelectorAll('.blog-item--js');

			portfolioItems.forEach(item => {
				const itemData = item.getAttribute('data-content');

				if (btnAttr === itemData) {
					item.classList.add('sort-show--js');
					item.classList.remove('sort-hide--js');
				} else {
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


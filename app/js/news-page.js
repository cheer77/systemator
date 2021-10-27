window.addEventListener('DOMContentLoaded', function() {

	if (document.documentElement.clientWidth < 768) {
	/*Аккордеон для страницы Faq*/

	$('.news-btn-js').click(function () {
        
		let $this = $(this)

		if (!$this.hasClass('opened')) {

			// $(".dropdown-content").removeClass('opened');
			$('.dropdown-content').slideUp()
			$this.addClass('opened')
			$('.dropdown-content').slideDown()

		} else {

			$this.removeClass('opened')
			$('.dropdown-content').slideUp()

		}
	})
}
	})






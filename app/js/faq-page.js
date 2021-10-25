window.addEventListener('DOMContentLoaded', function() {

	/*Вкладки tab для страницы Faq*/

	$('.tabs li').click(function () {
		var idTabLi = this.id.toString();
		var findbox = '.' + idTabLi;
		$('.item').hide();
		$(findbox).show();
		$(this).toggleClass('active');
		$(this).siblings(".tabs li").removeClass("active");
	});

	/*Аккордеон для страницы Faq*/

	$('.block_faq_item').click(function () {

		let $this = $(this)

		if (!$this.hasClass('opened')) {

			$(".block_faq_item").removeClass('opened');
			$('.block_faq_bottom').slideUp()
			$this.addClass('opened')
			$this.find('.block_faq_bottom').slideDown()

		} else {

			$this.removeClass('opened')
			$this.find('.block_faq_bottom').slideUp()

		}
	})


})



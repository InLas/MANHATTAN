$(document).ready(function () {

	$('[data-accordion]').on('click', function (e) {

		e.preventDefault();
		let $this = $(this);

		if (!$this.hasClass('_active')) {
			$('[data-accordion-content]').slideUp(200);
			$('[data-accordion]').removeClass('_active');
		}

		$this.toggleClass('_active');
		$this.next().slideToggle(200);
	});

});

// Указать элементам тайтла атрибут data-accordion
// Указать контенту атрибут data-accordion-content
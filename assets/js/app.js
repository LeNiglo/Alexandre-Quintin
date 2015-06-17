(function($) {

	function initSP() {
		if ($('.slider-pro:visible .sp-slide').length > 1)
			$('.slider-pro:visible').sliderPro({
				width: 670,
				height: 500,
				orientation: 'vertical',
				loop: false,
				arrows: true,
				buttons: false,
				thumbnailsPosition: 'right',
				thumbnailPointer: true,
				thumbnailWidth: 290,
				breakpoints: {
					800: {
						thumbnailsPosition: 'bottom',
						thumbnailWidth: 270,
						thumbnailHeight: 100
					},
					500: {
						thumbnailsPosition: 'bottom',
						thumbnailWidth: 120,
						thumbnailHeight: 50
					}
				}
			});
	}

	$(document).ready(function() {

		initSP();

		$('body').on('click', 'img.thumbnail', function (e) {
			e.preventDefault();

			var items = $(this).closest('.my-gallery').data('json');

			var options = {
				bgOpacity: 0.9,
			}

			var gallery = new PhotoSwipe(document.querySelectorAll('.pswp')[0], PhotoSwipeUI_Default, items, options);
			gallery.init()
		});

		$('#nav').on('click', 'a', function (e) {
			e.preventDefault()
			$(this).tab('show');
		});

		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

			initSP();

		});

	});

})(jQuery)

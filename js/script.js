$(document).ready(function() {
	$(".pay-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3600,
		responsive:[
			{
				breakpoint: 680,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
		]
	});

	$(".question-item__block-img").click(function(event) {
		event.preventDefault();
		$(this).toggleClass("active");
		let content = $(this).parent().parent();
		content.toggleClass("active");
	});

	$(".header-burger").click(function() {
		$(".header-burger, .header-mobile, .header, body").toggleClass("active");
	})
});
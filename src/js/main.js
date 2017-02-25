navScroll();
homeCarousel();



function navScroll() {

	function navFunction() {
		if ($(window).scrollTop() > 0) {
			$('header .navbar-default').addClass('scrolled');
		} else {
			$('header .navbar-default').removeClass('scrolled');
		}

	}

	window.addEventListener('scroll', navFunction);
	window.addEventListener('load', navFunction);

}

function homeCarousel() {
	$("#home-carousel").owlCarousel({
		items: 1,
		singleItem: true,
		autoPlay: true,
		transitionStyle : "fade"
	});
}
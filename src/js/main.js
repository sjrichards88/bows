initNavScroll();
initHomeCarousel();
initScrollUp();

function initNavScroll() {

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

function initHomeCarousel() {
	$("#home-carousel").owlCarousel({
		items: 1,
		singleItem: true,
		autoPlay: true,
		transitionStyle : "fade"
	});
}

function initScrollUp() {

	var scrollUpElement = $('.scroll-up');

	function scrollUp() {

		if ( $(window).scrollTop() > $(window).height() ) {
			scrollUpElement.fadeIn();
		} else {
			scrollUpElement.fadeOut();
		}

	}

	scrollUpElement.on('click', function(e) {
		e.preventDefault();
		$('body, html').animate({ 
			scrollTop: '0px' 
		}, 600);
	});

	window.addEventListener('scroll', scrollUp);
	window.addEventListener('load', scrollUp);

}
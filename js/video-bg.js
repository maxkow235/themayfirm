$(document).ready(function() {

	var startVid = function() {
		$('.page-header').vide('placeholder.mp4', {
			volume: 1,
			playbackRate: 1,
			muted: true,
			loop: true,
			autoplay: true,
			position: '50% 50%', // Similar to the CSS `background-position` property.
			posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
			resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
			bgColor: 'transparent', // Allow custom background-color for Vide div,
			className: '' // Add custom CSS class to Vide div
		});
	}

	var stopVid = function() {
		var instance = $('.page-header').data('vide');
		if (instance) {
			instance.destroy();
		}
	}


	if ($(window).width() < 500) {
		stopVid();
	} else {
		startVid();
	}
	$(window).resize(function() {

		if ($(window).width() < 500) {
			stopVid();
		} else {
			startVid();
		}
	});
});
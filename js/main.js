$(document).ready(function() {
	var stickyNavTop = $('.static-nav .navbar').offset().top;
	$("#owl-comp").owlCarousel({
		loop: true,
		nav: true, // Show next and prev buttons
		items: 4,
		margin: 28,
		dots: false,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 2000,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},

			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1400: {
				items: 4
			}

		},
	});

	$("#owl-maps").owlCarousel({
		loop: true,
		nav: true, // Show next and prev buttons
		items: 4,
		margin: 28,
		dots: false,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 4000,
		responsive: {
			// breakpoint from 0 up
			0: {
				items: 1
			},

			768: {
				items: 2
			}

		}
	});

	$("#owl-testim").owlCarousel({
		loop: true,
		nav: false, // Show next and prev buttons
		items: 1,
		margin: 28,
		dots: false,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 2000,
		responsive: {

			0: {

				nav: true
			},

			1400: {
				nav: false
			}


		}

	});



	$('.form-test').click(function(e){ 
		e.preventDefault();
				$('.mail-form').toggleClass('submitted');
			$('.mail-form').trigger('submitChanged')

	});

	$('.mail-form').on('submitChanged', function() {
    $('.mail-form .row').fadeToggle();
  });



	var stickyNav = function() {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) {
			$('.static-nav .navbar').addClass('f-top');
		} else {
			$('.static-nav .navbar').removeClass('f-top');

		}
	};

	var scrollNav = function() {
		if ($(window).scrollTop() > 250) {
			$('.scroll-nav .dropdown-menu').removeClass('d-none');
			$('.scroll-nav').addClass('show');
		} else {
			$('.scroll-nav').removeClass('show');
			$('.scroll-nav .dropdown-menu').addClass('d-none');

		}
	}

	var startSlider = function() {
		if ($("#owl-blog .row").length > 0) {
			$("#owl-blog .row .bl-item").unwrap();
		}

		if ($("#owl-why-us > .row").length > 0) {
			$("#owl-why-us > .row .i-cont").unwrap();
		}

		if ($("#owl-difference .row").length > 0) {
			$("#owl-difference .row .d-cont").unwrap();
		}

		if ($("#owl-firm .tab-content").length > 0) {
			$("#owl-firm .tab-pane").unwrap();
			$("#owl-firm .tab-pane").removeClass('fade');
		}
		$("#owl-why-us").owlCarousel({
			loop: true,
			nav: true, // Show next and prev buttons
			items: 1,
			dots: false,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			autoplay: true,
			autoplayTimeout: 2000,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1
				},

				768: {
					items: 2
				}

			}
		});

		$("#owl-blog").owlCarousel({
			loop: true,
			nav: true, // Show next and prev buttons
			items: 1,
			dots: false,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			autoplay: true,
			autoplayTimeout: 2000,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1
				},

				768: {
					items: 2
				}

			}
		});

		$("#owl-firm").owlCarousel({
			loop: true,
			nav: true, // Show next and prev buttons
			items: 1,
			dots: false,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],

		});

		$("#owl-difference").owlCarousel({
			loop: true,
			nav: true, // Show next and prev buttons
			items: 1,
			dots: false,
			navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1
				},

				768: {
					items: 2
				}

			},
			autoplay: true,
			autoplayTimeout: 2000
		});

	}

	var stopSlider = function() {
		var owlWhy = $('#owl-why-us');
		var owlBlog = $("#owl-blog");
		var owlFirm = $("#owl-firm");
		var owlDiff = $('#owl-difference');
		owlWhy.trigger('destroy.owl.carousel');
		owlDiff.trigger('destroy.owl.carousel');
		owlBlog.trigger('destroy.owl.carousel');

		owlFirm.trigger('destroy.owl.carousel');
		owlWhy.addClass('off');
		owlDiff.addClass('off');
		owlBlog.addClass('off');
		owlFirm.addClass('off');
		if ($("#owl-blog > .row").length == 0) {
			$("#owl-blog").wrapInner("<div class='row'></div>");
		}
		if ($("#owl-why-us > .row").length == 0) {
			$("#owl-why-us").wrapInner("<div class='row'></div>");
		}

		if ($("#owl-firm .tab-content").length == 0) {
			$("#owl-firm").wrapInner("<div class='tab-content h-100'></div>");
			$("#owl-firm .tab-pane").addClass('fade');
		}

		if ($("#owl-difference .row").length == 0) {
			var items = $("#owl-difference .d-cont");

			items.wrapAll("<div class='row'></div>");

		}

	}

	if (window.matchMedia('(max-width:1420px)').matches) {

		startSlider();

	} else {
		stopSlider();

	}



	scrollNav();
	stickyNav();


	$(window).scroll(function() {
		stickyNav();
		scrollNav();
	});

	$(window).resize(function() {
		if (window.matchMedia('(max-width:1420px)').matches) {
			startSlider();

		} else {
			stopSlider();

		}


	});

	var showDrop = function(item, fadeTime) {
		var at = $(item).find('.dropdown-toggle').attr('id');

		if (window.matchMedia('(min-width: 1200px)').matches) {

			$('.dropdown-menu[toggled-by="' + at + '"]').stop(true, true).fadeIn(fadeTime);
			return $('.dropdown-menu[toggled-by="' + at + '"]');
		}
	}

	var hideDrop = function(item, fadeTime) {
		var at = $(item).find('.dropdown-toggle').attr('id');

		if (window.matchMedia('(min-width: 1200px)').matches) {

			$('.dropdown-menu[toggled-by="' + at + '"]').stop(true, true).fadeOut(fadeTime);
			return $('.dropdown-menu[toggled-by="' + at + '"]');
		}
	}
	var menu = '';
	$('.navbar-nav .dropdown').hover(function() {
		menu = showDrop(this, 200);
	}, function() {
		menu = hideDrop(this, 200);
	});
	$('.dropdowns-cont').hover(function() {
		if (menu != '')
			menu.stop(true, true).fadeIn(0);
	}, function() {
		if (menu != '')
			menu.stop(true, true).fadeOut(200);
		menu = '';
	});


	$('.navbar-nav .dropdown').click(function(e) {
		e.preventDefault();
	})


	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
	});


	if ($('button[data-video-id]').length != 0) {
		new ModalVideo($('button[data-video-id]'));
	}

	$("input[required]:not(input[type=file])").each(function(){
			var wrapper = "<div class='placeholder-wrap'></div>";
			var startTxt = $(this).attr("placeholder");
		var required = "<span class='placeholder'>"+startTxt+" "+"<span>(REQUIRED)</span></span>";
		
		$(this).attr("placeholder",null);
		$(this).wrapAll(wrapper);
		$(this).after(required);
		$(this).on('input',function(e){
    if($(this).val().length > 0) {
    	$(this).next().hide();
    } else {
    	$(this).next().show();
    }
});
		
		
	});

});
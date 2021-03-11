/**
*
* -----------------------------------------------------------------------------
*
* Template : Rubrash - One Page Corporate HTML5 Template 
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 150) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }
    });

    // Smooth About
    if ($('.smoothAbout').length){
         $(".smoothAbout").on(' click ', function() {
             $('html, body').animate({
                 scrollTop: $("#rs-about").offset().top
             }, 1000);
         });
    }

    // Smooth Contact
    if ($('.smoothContact').length){
         $(".smoothContact").on(' click ', function() {
             $('html, body').animate({
                 scrollTop: $("#rs-contact").offset().top
             }, 1000);
         });
    }

    // Smooth Start
    if ($('.smoothStart').length){
        $(".smoothStart").on(' click ', function() {
            $('html, body').animate({
                scrollTop: $("#rs-header").offset().top
            }, 1000);
        });
    }

    // Smooth Portfolio
    if ($('.smoothPortfolio').length){
        $(".smoothPortfolio").on(' click ', function() {
            $('html, body').animate({
                scrollTop: $("#rs-portfolio").offset().top
            }, 1000);
        });
    }
  
    // onepage nav
    $(".navbar li").on("click", function () {
        if ($(".showhide").is(":visible")) {
            $(".showhide").trigger("click");
        }
    });
	
    if ($.fn.onePageNav) {
        $(".navbar").onePageNav({
            currentClass: "active"
        });
    }


    $("#rs-services .single-services:first-child").addClass("active");
	
    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });
     });

    //Submenu Toggle Nav Button
	 var isMobile = window.matchMedia("only screen and (max-width: 991px)");
    if (isMobile.matches) {
        $("#rs-header .menu-area .navbar ul li.haschild").prepend("<span class='togglearrow'><i class='fa fa-chevron-down'></i></span>");
        $("#rs-header .menu-area .navbar").on("click", "ul li.haschild", function(){
        $('ul',this).slideToggle();
        });
    }
	 
    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    }

    // wow init
    new WOW().init();
    
    // image loaded portfolio init
    $('.grid').imagesLoaded(function() {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });        
        
    // portfolio Filter
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });
    
    // Get a quote popup
    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, //delay removal by X to allow out-animation
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });

	
	/*-------------------------------------
    OwlCarousel
    -------------------------------------*/
	//slider
	$(".slider-carousel").owlCarousel({
        margin:0,
        nav:false,
        loop:true,
		dots: false,
        items:1,
        autoplay:true,
		animateOut: 'fadeOut',
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsiveClass:true
    });
	
	//testimonils
	$(".testimonials-list").owlCarousel({
        margin:0,
        nav:false,
        loop:true,
		dots: true,
        items:1,
		smartSpeed: 1500,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsiveClass:true
    });
	
	/*-------------------------------------
    OwlCarousel
    -------------------------------------*/
	$('.rs-carousel').each(function() {
		var owlCarousel = $(this),
		loop = owlCarousel.data('loop'),
		items = owlCarousel.data('items'),
		margin = owlCarousel.data('margin'),
		stagePadding = owlCarousel.data('stage-padding'),
		autoplay = owlCarousel.data('autoplay'),
		autoplayTimeout = owlCarousel.data('autoplay-timeout'),
		smartSpeed = owlCarousel.data('smart-speed'),
		dots = owlCarousel.data('dots'),
		nav = owlCarousel.data('nav'),
		navSpeed = owlCarousel.data('nav-speed'),
		xsDevice = owlCarousel.data('mobile-device'),
		xsDeviceNav = owlCarousel.data('mobile-device-nav'),
		xsDeviceDots = owlCarousel.data('mobile-device-dots'),
		smDevice = owlCarousel.data('ipad-device'),
		smDeviceNav = owlCarousel.data('ipad-device-nav'),
		smDeviceDots = owlCarousel.data('ipad-device-dots'),
		mdDevice = owlCarousel.data('md-device'),
		mdDeviceNav = owlCarousel.data('md-device-nav'),
		mdDeviceDots = owlCarousel.data('md-device-dots');

		owlCarousel.owlCarousel({
			loop: (loop ? true : false),
			items: (items ? items : 4),
			lazyLoad: true,
			margin: (margin ? margin : 0),
			//stagePadding: (stagePadding ? stagePadding : 0),
			autoplay: (autoplay ? true : false),
			autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
			smartSpeed: (smartSpeed ? smartSpeed : 250),
			dots: (dots ? true : false),
			nav: (nav ? true : false),
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			navSpeed: (navSpeed ? true : false),
			responsiveClass: true,
			responsive: {
				0: {
					items: (xsDevice ? xsDevice : 1),
					nav: (xsDeviceNav ? true : false),
					dots: (xsDeviceDots ? true : false)
				},
				768: {
					items: (smDevice ? smDevice : 3),
					nav: (smDeviceNav ? true : false),
					dots: (smDeviceDots ? true : false)
				},
				992: {
					items: (mdDevice ? mdDevice : 4),
					nav: (mdDeviceNav ? true : false),
					dots: (mdDeviceDots ? true : false)
				}
			}
		});

	});
	
	// Google Map
    if ($('#googleMap').length) {
        var initialize = function() {
            var mapOptions = {
                zoom: 10,
                scrollwheel: false,
                center: new google.maps.LatLng(23.782062, 90.416053),
                styles: [{
                    stylers: [{
                        saturation: -100
                    }]
                }]
            };
            var map = new google.maps.Map(document.getElementById("googleMap"),
                mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'images/map-marker.png',
                map: map
            });
        }
        // Add the map initialize function to the window load function
        google.maps.event.addDomListener(window, "load", initialize);
    }
	
	
    // testimonial init
    $('.testi-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

	//preloader
    $(window).on( 'load', function() {
        $("#loading").delay(2000).fadeOut(500);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(500);
        })

    if($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on( 'click', function(){
         $('.rs-menu').css('opacity', '1');
         $('.rs-menu').css('z-index', '1');
     });
    }

    })
		
    // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });
	
    // scrollTop init
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
})(jQuery);
// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer,#about'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

	$(window).scroll(function() {

		if ($(this).scrollTop()) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}

		var scrollTop = $(window).scrollTop(); //Current vertical scroll position from the top
		// Check to see if we've scrolled more than mainMenuBottom
		if (scrollTop > 700) {
			//Scroll is lower than #mainMenu, check if the #topMenu is displayed
			if (($("#top-menu").is(":visible") === false)) {
			  //#mainMenu is not visible, so show it
			  $('#top-menu').fadeIn('slow');
			  $('#bottom_menu').hide();
			}
		} else {
			//Scroll bar is higher than #mainMenuBottom, do not show #topMenu
			if ( $("#top-menu").is(":visible") ) {
			    $('#bottom_menu').fadeIn('slow');
				$('#top-menu').hide();
			}
		}
	});
	$("#toTop").click(function () {
	   $("html, body").animate({scrollTop: 0}, 800);
	});


    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

	// Experiences
    $('#experience').find('svg').hover(function () {
        $('span').css('color','white');
    },
    function(){
        $('span').css('color','#1b1b20');
    });
	
	$('#experience button').click(function () {
		window.open('Roger_Nem.pdf', '_blank');
		return false;
	});


    // certifications isotope
    $('#certifications').waitForImages(function () {
        var $container = $('.certifications_container');
        $container.isotope({
            filter: '*',
        });

        $('.certifications_filter a').click(function () {
            $('.certifications_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

        $('.certifications_container a').click(function () {

			var id = $(this).find('img').attr("id");
			if(id == 'cert1'){
			}else if(id == 'cert2'){ window.open('https://www.credly.com/badges/a9bcdf6a-0b4e-42ae-a0b3-3b49ba14c792/public_url', '_blank');
			}else if(id == 'cert3'){ window.open('https://www.coursera.org/account/accomplishments/certificate/HEWUNZH49K7U', '_blank');
			}else if(id == 'cert4'){ window.open('https://app.thecloudbootcamp.com/certificates/schd1gc7oz', '_blank');
			}else if(id == 'cert5'){ window.open('http://www.zend.com/en/yellow-pages/ZEND019559', '_blank');
			}else if(id == 'cert6'){ window.open('https://www.udemy.com/certificate/UC-GFZNXDV5/', '_blank');
			}else if(id == 'cert7'){
			}else if(id == 'cert8'){ window.open('https://www.linkedin.com/learning/certificates/cf9080d7255eb32e42bc9db88ce7fb6679fd260603e5184f5cb350ac9836f1cd?u=2111916', '_blank');
			}else if(id == 'cert9'){
			}
			
			return false;
			
        });

    });

/*
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
		loop: true,
		autoplaySpeed: 10,
        autoPlay:true
		
    });
*/


    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["",""],
        transitionStyle:"backSlide",
        //autoPlay:true,
		autoHeight: true,
		autoPlay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		slideSpeed: 300,
		paginationSpeed: 500
    });


	$('.social a').click(function () {

		var id = $(this).attr("class");
		if(id == 'linkedin'){ window.open('https://www.linkedin.com/in/rogertn/', '_blank');
		}else if(id == 'github'){ window.open('https://github.com/rnem', '_blank');
		}else if(id == 'gitlab'){ 
		}else if(id == 'youtube'){ window.open('https://www.youtube.com/@RogerNem', '_blank');
		}else if(id == 'pdf'){ window.open('Roger_Nem.pdf', '_blank');
		}
		
		return false;
		
    });

});
(function ($) {
    "use strict";

    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        setTimeout(function(){
            $(".preloader").fadeOut();     
        },500)
    });


    var thePlazaDoha   = {

        mobile_expand_menu: function(){
            //=============  Mobile Menu Integration  =============\\
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('sidemenu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('sidemenu-open');
                });

                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("sidemenu-open");
                        $(selector).removeClass("sidemenu-open");
                    }
                });
                // $(".menu_wrapper a").on('click', function() {
                //     $('.menu_wrapper, .menu-overlay').removeClass("sidemenu-open");
                // });
            
            };
            mobile_menu('.navbar-toggler, .close-menu', '.mobile-menu');  
        },
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var header = $("header");
            // Add a scroll event listener to the window object
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
            
                if (scrollPosition > 60) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            });
        },


        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {

            // Homepage Hero Slider
            let heroSlider = new Swiper ('#heroSlider', {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                speed: 800,
                effect: 'fade',
                autoplay: {
                    delay: 5000
                },
                // breakpoints: {
                //     576: {
                //         slidesPerView: 2,
                //     },
                //     768: {
                //         slidesPerView: 3,
                //     },
                //     992: {
                //         slidesPerView: 4,
                //     },
                //     1200: {
                //         slidesPerView: 5,
                //     },
                // },
                // navigation: {
                //     nextEl: ".cabinet-carousel .swiper .swiper-button-next",
                //     prevEl: ".cabinet-carousel .swiper .swiper-button-prev",
                // },
            });
            // Homepage Dining Slider
            let diningSlider = new Swiper ('#dining_slider, #areas_activity_slider, #amenitiesSlider', {
                spaceBetween: 15,
                slidesPerView: 1,
                loop: true,
                speed: 800,
                autoplay: {
                    delay: 5000
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                },
            });            
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                `<a href='javascript:void(0)' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8955 9.89901C19.8645 9.93089 19.8271 9.9563 19.7856 9.97367C19.7441 9.99104 19.6993 10 19.6541 10C19.6088 10 19.5641 9.99104 19.5226 9.97367C19.481 9.9563 19.4436 9.93089 19.4127 9.89901L9.99774 0.807515L0.582812 9.89901C0.551109 9.92964 0.513473 9.95395 0.472052 9.97053C0.430632 9.98711 0.386237 9.99564 0.341403 9.99564C0.296569 9.99564 0.252175 9.98711 0.210754 9.97053C0.169333 9.95395 0.131697 9.92964 0.0999946 9.89901C0.0682924 9.86837 0.0431448 9.832 0.0259877 9.79198C0.00883061 9.75195 0 9.70905 0 9.66572C0 9.6224 0.00883061 9.5795 0.0259877 9.53947C0.0431448 9.49944 0.0682924 9.46307 0.0999946 9.43244L9.75633 0.100991C9.7873 0.0691107 9.82469 0.0437013 9.86621 0.0263313C9.90773 0.00896132 9.9525 -4.72692e-08 9.99774 -4.72692e-08C10.043 -4.72692e-08 10.0878 0.00896132 10.1293 0.0263313C10.1708 0.0437013 10.2082 0.0691107 10.2392 0.100991L19.8955 9.43244C19.9285 9.46236 19.9548 9.49849 19.9728 9.53862C19.9907 9.57874 20 9.622 20 9.66572C20 9.70944 19.9907 9.7527 19.9728 9.79283C19.9548 9.83295 19.9285 9.86909 19.8955 9.89901Z" fill="black"/>
                    </svg>
                </a>`
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $scrolltop.on('click', function () {
                $('html, body').animate({
                        scrollTop: 0,
                    },
                    50
                );
                return false;
            });
        },

        initialize: function() {0
			thePlazaDoha.mobile_expand_menu();
			thePlazaDoha.scroll_to_top();
			thePlazaDoha.sticky_header();
			thePlazaDoha.swiperCarousel();
		}
    };
    $(function() {
		thePlazaDoha  .initialize();
	});
    ///============= Wow JS =============\\\
    // wow = new WOW({
    //     mobile: false,
    // });
    // wow.init();


})(jQuery);
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


    var projectName   = {

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

            // Homepage Signup Side Slider
            let heroSlider = new Swiper ('#heroSlider', {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                speed: 800,
                effect: 'fade',
                // autoplay: {
                //     delay: 5000
                // },
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
            
            // const lightbox = GLightbox({
            //     selector: '.glightbox',
            //     touchNavigation: true,
            //     loop: true,
            //     autoplayVideos: false,
            //     plyr: {
            //         // css: 'https://cdn.plyr.io/3.5.6/plyr.css', // Default not required to include
            //         // js: 'https://cdn.plyr.io/3.5.6/plyr.js', // Default not required to include
            //         config: {
            //             ratio: '16:9', // or '4:3'
            //             muted: false,
            //             hideControls: true,
            //             youtube: {
            //                 noCookie: true,
            //                 rel: 0,
            //                 showinfo: 0,
            //                 iv_load_policy: 3
            //             },
            //             vimeo: {
            //                 byline: false,
            //                 portrait: false,
            //                 title: false,
            //                 speed: true,
            //                 transparent: false
            //             }
            //         }
            //     }
            // });
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append("<a href='javascript:void(0)' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'></a>");
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
			projectName.mobile_expand_menu();
			projectName.scroll_to_top();
			projectName.sticky_header();
			projectName.swiperCarousel();
		}
    };
    $(function() {
		projectName  .initialize();
	});
    ///============= Wow JS =============\\\
    // wow = new WOW({
    //     mobile: false,
    // });
    // wow.init();


})(jQuery);
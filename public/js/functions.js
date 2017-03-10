/**
 * Theme functions file
 *
 * Contains handlers for navigation, accessibility, header sizing
 * footer widgets and Featured Content slider
 *
 */
( function( $ ) {

    function is_display_type(display_type){
        return ( ($('.display-type').css('content') == display_type) || ($('.display-type').css('content') == '"'+display_type+'"'));
    }
    function not_display_type(display_type){
        return ( ($('.display-type').css('content') != display_type) && ($('.display-type').css('content') != '"'+display_type+'"'));
    }

    // Initialize isotope layout only if there is a index-isotope container element on a page and the device in use is not a phone or a tablet
    function initiate_isotope() {
        var is_origin_left = true;
        if($('body').hasClass('rtl')){
            is_origin_left = false;
        }
        if($('.index-isotope').length && (not_display_type("tablet") || (is_display_type("tablet") && $('body').hasClass('menu-position-top') && $('body').hasClass('no-sidebar'))) && not_display_type("phone")){
            var layout_mode = $('.index-isotope').data('layout-mode');
            var $isotope_container = $('.index-isotope').isotope({
                'itemSelector': '.item-isotope',
                'layoutMode': layout_mode,
                'isOriginLeft': is_origin_left,
                'sortAscending': false,
                'transitionDuration': '0.5s',
                // 'getSortData': {
                //     views: '[data-total-views] parseInt',
                //     likes: '[data-total-likes] parseInt',
                // },
            });
            $('.index-isotope').addClass('isotope-active');
            // init isotope
            $isotope_container.isotope('layout');
            // reposition when everything loads isotope
            $(window).load(function() {
                $isotope_container.isotope('layout');
            });
            // reposition when images load
            $('.index-isotope').imagesLoaded(function(){
                $isotope_container.isotope('layout');
                // $('.index-isotope .pluto-post-box .post-media-body, .index-isotope .product-media-body').find('.figure-link-w, iframe').slideDown(100, function(){
                //   $isotope_container.isotope('layout');
                //   setTimeout(function(){
                //     $('.index-isotope .pluto-post-box .post-media-body, .index-isotope .product-media-body').find('.figure-link-w, iframe').addClass('os-faded-in');
                //   }, 50);
                // });
            });
        } else{
            if($('.index-isotope').length && $('.index-isotope').hasClass('isotope-active')){
                $('.index-isotope').isotope('destroy').removeClass('isotope-active');
            }
        }
    }

    // timed scroll event
    var uniqueCntr = 0;
    $.fn.scrolled = function (waitTime, fn) {
        if (typeof waitTime === "function") {
            fn = waitTime;
            waitTime = 100;
        }
        var tag = "scrollTimer" + uniqueCntr++;
        this.scroll(function () {
            var self = $(this);
            var timer = self.data(tag);
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                self.removeData(tag);
                fn.call(self[0]);
            }, waitTime);
            self.data(tag, timer);
        });
    }

    $(window).scrolled(function(){
        if($('.menu-position-top').length  && $('.fixed-header-w').length){
            var offset = $('.all-wrapper > .menu-block').offset();
            var trigger_point = offset.top + $('.all-wrapper > .menu-block').outerHeight();
            if($(document).scrollTop() >= trigger_point){
                $('body').addClass('fix-top-menu');
            }else{
                $('body').removeClass('fix-top-menu');
            }
        }
    });

    // Smarter window resize which allows to disregard continious resizing in favor of action on resize complete
    $(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    });


    // Re-init isotope on window resize
    $(window).bind('resizeEnd', function() {
        initiate_isotope();
    });



    // Document Ready functions
    $(document).ready(function() {

        //$.fn.osetin_infinite_scroll.init_infinite_scroll();

        // If there is a qr-code generator button - init it
        if($('.single-post-top-qr').length){
            $('.single-post-top-qr').on("click", function(){
                $('#qrcode').html("");
                var qrcode = new QRCode("qrcode");
                qrcode.makeCode(window.location.href);
                $('#qrcode-modal').modal();
            });
        }

        // Initiate isotope layout on document ready
        initiate_isotope();

        // --------------------------------------------

        // ACTIVATE TOP MENU

        // --------------------------------------------

        // MAIN TOP MENU HOVER DELAY LOGIC
        var menu_timer;
        $('.menu-activated-on-hover .os_menu > ul > li.menu-item-has-children').mouseenter(function(){
            var $elem = $(this);
            clearTimeout(menu_timer);
            $elem.closest('ul').addClass('has-active').find('> li').removeClass('active');
            $elem.addClass('active');
        });
        $('.menu-activated-on-hover .os_menu > ul > li.menu-item-has-children').mouseleave(function(){
            var $elem = $(this);
            menu_timer = setTimeout(function(){
                $elem.removeClass('active').closest('ul').removeClass('has-active');

            }, 200);
        });

        // SUB MENU HOVER DELAY LOGIC
        var sub_menu_timer;
        $('.menu-activated-on-hover .os_menu > ul > li.menu-item-has-children > ul > li.menu-item-has-children').mouseenter(function(){
            var $elem = $(this);
            clearTimeout(sub_menu_timer);
            $elem.closest('ul').addClass('has-active').find('> li').removeClass('active');
            $elem.addClass('active');
            if($elem.length){
                var sub_menu_right_offset = $elem.offset().left + ($elem.outerWidth() * 2);
                if(sub_menu_right_offset >= $('body').width()){
                    $elem.addClass('active-left');
                }
            }
        });
        $('.menu-activated-on-hover .os_menu > ul > li.menu-item-has-children > ul > li.menu-item-has-children').mouseleave(function(){
            var $elem = $(this);
            sub_menu_timer = setTimeout(function(){
                $elem.removeClass('active').removeClass('active-left').closest('ul').removeClass('has-active');

            }, 200);
        });


        $('.menu-activated-on-click li.menu-item-has-children > a').on('click', function(event){
            var $elem = $(this).closest('li');

            if($elem.hasClass('active')){
                $elem.closest('ul').removeClass('inactive');
                $elem.removeClass('active').find('.sub-menu').first().slideUp(200);
            }else{
                $elem.closest('ul').addClass('inactive');
                $elem.addClass('active').find('.sub-menu').first().slideDown(200);
            }
            return false;
        });



        // SEARHC AJAX FORM
        $('.search-trigger, .mobile-menu-search-toggler').on('click', function(){
            $('body').addClass('active-search-form');
            $('.main-search-form-overlay').fadeIn(300);
            $('.main-search-form .search-field').focus();
            return false;
        });

        $('.main-search-form-overlay').on('click', function(){
            $('body').removeClass('active-search-form');
            $('.main-search-form-overlay').fadeOut(300);
        });

        // END SEARCH AJAX FORM

        // Initiate perfect scrollbar for the fixed side menu
        $('.menu-position-left .menu-block, .menu-position-right .menu-block, .primary-sidebar-wrapper, .mobile-menu-w').perfectScrollbar({
            suppressScrollX: true,
            wheelPropagation: false,
            includePadding: true
        });

        $('.menu-toggler').on("click", function(){
            $("body").toggleClass('side-menu-active');
            $("body").removeClass('sidebar-active');
            return false;
        });

        $('.sidebar-toggler, .sidebar-main-toggler').on("click", function(){
            $("body").toggleClass('sidebar-active');
            $("body").removeClass('side-menu-active');
            return false;
        });

        // Click on top share button on single posts
        $('body').on("click", ".post-top-share .share-activator, .single-post-top-share .share-activator", function(){
            $(this).closest('.post-top-share, .single-post-top-share').toggleClass('active');
            $(this).closest('.post-top-share, .single-post-top-share').find('i.share-activator').toggleClass('os-icon-minus');
            return false;
        });


        // Flexslider init
        $('.flexslider').flexslider({
            animation : "slide"
        });

        if($('.featured-carousel').length){
            $('.featured-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                dots: false,
                nav: true,
                navText: ['<div class="icon-w"><i class="os-icon-angle-left"></i></div>', '<div class="icon-w"><i class="os-icon-angle-right"></i></div>'],
                responsive : {
                    0 : { items : 1 },
                    480 : { items : 2 },
                    768 : { items : 2 },
                    992 : { items : 3 },
                    1200 : { items : 4 },
                    1700 : { items : 5 }
                }
            });
        }

        // Toggle reading mode on link click
        $('body').on("click", '.single-post-top-reading-mode', function(){
            if($('body').hasClass('reading-mode')){
                $('body').removeClass("reading-mode");
                $('.single-post-top-reading-mode i').removeClass('os-icon-eye-slash').addClass('os-icon-eye');
                $('.single-post-top-reading-mode span').text($(this).data('message-on'));
            }else{
                $('body').addClass("reading-mode");
                $('.single-post-top-reading-mode i').removeClass('os-icon-eye').addClass('os-icon-eye-slash');
                $('.single-post-top-reading-mode span').text($(this).data('message-off'));
            }
            return false;
        });

        // Disable reading mode when ESC key is pressed
        $(document).keyup(function(e) {
            if (e.keyCode == 27) {
                $('body').removeClass('reading-mode');
                $('body').removeClass('active-search-form');
                $('.main-search-form-overlay').fadeOut(300);
                $('.lightbox-post-shadow').click();
            }
        });

        // featured posts slider
        $('.featured-post-control-up').on("click", function(){
            var step_px = 95;
            var total_height = $('.featured-posts-slider-contents').height();
            var current_margin = Math.abs($('.featured-posts-slider-contents').css('margin-top').replace('px', ''));
            if((current_margin - step_px - 40) >= 0){
                var new_margin = (current_margin - step_px) * -1;
                $('.featured-posts-slider-contents').animate({ 'marginTop': new_margin + "px"}, 200);
            }else{
                $('.featured-posts-slider-contents').animate({ 'marginTop': '0px'}, 200);
            }
        });
        // featured posts slider
        $('.featured-post-control-down').on("click", function(){
            var step_px = 95;
            var total_height = $('.featured-posts-slider-contents').height();
            var current_margin = Math.abs($('.featured-posts-slider-contents').css('margin-top').replace('px', ''));
            if((current_margin + step_px + 40) <= total_height){
                var new_margin = (current_margin + step_px) * -1;
                $('.featured-posts-slider-contents').animate({ 'marginTop': new_margin + "px"}, 200);
            }else{
                $('.featured-posts-slider-contents').animate({ 'marginTop': '0px'}, 200);
            }
        });



        /// ------------------
        /// FILTER BUTTONS LOGIN
        /// ------------------

        if($('.index-isotope').length){
            var $os_masonry_grid = $('.index-isotope');
            $('.index-sort-options').on( 'click', 'button', function() {
                if($(this).hasClass('active')){
                    $('.index-sort-options button').removeClass('inactive');
                    $(this).removeClass('active');
                    $os_masonry_grid.isotope({ sortBy : 'original-order', sortAscending: true });
                    $('.masonry-grid .archive-posts').removeClass('sorting-now');
                }else{
                    $('.index-sort-options button').removeClass('active').addClass('inactive');
                    $(this).removeClass('inactive').addClass('active');
                    var sortValue = $(this).data('sort-value');
                    console.log(sortValue);
                    $os_masonry_grid.isotope({ sortBy: sortValue, sortAscending: false });
                    $('.masonry-grid .archive-posts').addClass('sorting-now');
                }
                return false;
            });


            $('.index-filter-categories').on( 'click', 'button', function() {
                var format_filter = '';
                if($('.index-filter-format.active').length){
                    format_filter = '.format-' + $('.index-filter-format.active').data('filter-value');
                }
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                    $('.index-filter-categories button').removeClass('inactive');
                    var filter_string = '*';
                    if(format_filter != ''){
                        filter_string = format_filter;
                    }
                    $os_masonry_grid.isotope({ filter : filter_string });
                    if(filter_string == '*'){
                        $('.masonry-grid .archive-posts').removeClass('filtering-now');
                        $('.index-clear-filter-w').addClass('inactive');
                    }
                }else{
                    $('.index-filter-categories button').removeClass('active').addClass('inactive');
                    $(this).removeClass('inactive').addClass('active');
                    var filterValue = $(this).data('filter-value');
                    $os_masonry_grid.isotope({ filter : '.' + filterValue + format_filter });
                    $('.masonry-grid .archive-posts').addClass('filtering-now');
                    $('.index-clear-filter-w').removeClass('inactive');
                }
                return false;
            });


            $('.index-filter-formats').on( 'click', '.index-filter-format', function() {
                var category_filter = '';
                if($('.index-filter-categories button.active').length){
                    category_filter = '.' + $('.index-filter-categories button.active').data('filter-value');
                }
                if($(this).hasClass('active')){
                    $('.index-filter-formats .index-filter-format').removeClass('inactive');
                    $(this).removeClass('active');
                    var filter_string = '*';
                    if(category_filter != ''){
                        filter_string = category_filter;
                    }
                    $os_masonry_grid.isotope({ filter : filter_string });
                    if(filter_string == '*'){
                        $('.masonry-grid .archive-posts').removeClass('filtering-now');
                        $('.index-clear-filter-w').addClass('inactive');
                    }
                }else{
                    $('.index-filter-formats .index-filter-format').removeClass('active').addClass('inactive');
                    $(this).removeClass('inactive').addClass('active');
                    var filterValue = $(this).data('filter-value');
                    $os_masonry_grid.isotope({ filter : '.' + 'format-' + filterValue + category_filter });
                    $('.masonry-grid .archive-posts').addClass('filtering-now');
                    $('.index-clear-filter-w').removeClass('inactive');
                }
                return false;
            });



            $('.index-clear-filter-btn').on( 'click', function() {
                $os_masonry_grid.isotope({ filter : '*' });
                $('.index-filter-categories button').removeClass('inactive').removeClass('active');
                $('.index-filter-formats .index-filter-format').removeClass('inactive').removeClass('active');
                $('.masonry-grid .archive-posts').removeClass('filtering-now');
                $('.index-clear-filter-w').addClass('inactive');
                return false;
            });
        }


    } );
} )( jQuery );

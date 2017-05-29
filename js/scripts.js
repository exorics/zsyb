/*
 *
 * Custom js snippets for Startuply v1.1
 * by Vivaco 
 *
 */
(function() {
    "use strict";
    // Init global DOM elements, functions and arrays
    window.app = { el: {}, fn: {} };
    app.el['window'] = $(window);
    app.el['document'] = $(document);
    app.el['loader'] = $('#loader');
    app.el['mask'] = $('#mask');

    app.fn.screenSize = function() {
        var size, width = app.el['window'].width();
        if (width < 320)
            size = "Not supported";
        else if (width < 480)
            size = "Mobile portrait";
        else if (width < 768)
            size = "Mobile landscape";
        else if (width < 960)
            size = "Tablet";
        else
            size = "Desktop";
    };


    // Resized based on screen size
    app.el['window'].resize(function() {
        app.fn.screenSize();
    });


    // Navigation Scroll
    $('.navigation-bar').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        easing: 'swing',
        filter: '.navigation-navbar a',
        begin: function(e) {
            //I get fired when the animation is starting
            var url = e.target.href.toString();
            var id = url.split('#')[1];
            if (id) {
                $('#prd-tab a[href="#' + id + '"]').tab('show');

            }
        }


    });

    // Animated Appear Element
    if (app.el['window'].width() > 1024) {

        $('.animated').appear(function() {
            var element = $(this);
            var animation = element.data('animation');
            var animationDelay = element.data('delay');
            if (animationDelay) {
                setTimeout(function() {
                    element.addClass(animation + " visible");
                    element.removeClass('hiding');
                }, animationDelay);
            } else {
                element.addClass(animation + " visible");
                element.removeClass('hiding');
            }

        }, { accY: -150 });

    } else {
        $('.animated').css('opacity', 1);
    }

    // fade in .back-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0,
            easing: 'swing'
        }, 750);
        return false;
    });


    $('li.dropdown').mouseover(function() {
        $(this).addClass('open');
    }).mouseout(function() {
        $(this).removeClass('open');
    });

    $(document).ready(function(){
        app.el['loader'].fadeOut();
        app.el['mask'].fadeOut("slow");
        var url = window.location.toString();
        var id = url.split('#')[1];
        if (id) {
            $('#prd-tab a[href="#' + id + '"]').tab('show');

        }
    });

})();

$(document).ready(function(){
    /***************** NAVIGATION ********************/

    // Closes responsive menu when a scroll trigger link is clicked
    $('.nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('.body').scrollspy({
        target: '#navbar',
        offset: 75
    })

    // On Scroll down....if the offset is higher than 50 pixels add -navbar-shrink class..else remove that class
    $(window).scroll(function(){
        if ($('#navbar').offset().top > 50) {
            $('#navbar').addClass('navbar-shrink');
        } else {
            $('#navbar').removeClass('navbar-shrink');
             } 
    });

    $('#members-slider').owlCarousel({
        margin: 10,
        smartSpeed: 1000,
        nav: false,
        dots: true,
        dotsEach: true,
        loop: true,
        autoPlay: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

      /***************** ANIMATION CONTROL ********************/

    //flash btn
     $('#flashbtn').hover(function(){
        $('#flashbtn').removeClass('infinite');
     }, function(){
         $('#flashbtn').addClass('infinite');
     });

     //mision section
     $('#mission').mouseenter(function(){
         $('#mission').css("opacity", "1");
     })

      /***************** SMOOTH SCROLL ********************/
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });

      /***************** BLOG SLIDER ********************/
      $('#blog-slider').owlCarousel({
        margin: 5,
        smartSpeed: 1000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        loop: true,
        autoPlay: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

});



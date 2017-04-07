$(document).ready(function() {
    // writersSlider
    var writersSlider = $('#writers').lightSlider({
        item: 3,
        loop: true,
        auto: true,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        pager: false,
        controls: false,
        slideMargin: 30,
        responsive : [
            {
                breakpoint:992,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin: 20,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                    slideMove:1,
                  }
            }
        ]
    });
    $('#articles__slider-prev').on('click', function() {
    writersSlider.goToPrevSlide();
    });
 
     $('#articles__slider-next').on('click', function() {
      writersSlider.goToNextSlide();
     });
     // Main hamburger
         var hamburger = $('.hamburger');
       menu = $('.header__navbar ul');
       menuHeight = menu.height();

     $(hamburger).on('click', function(e) {
       e.preventDefault();
       menu.slideToggle('slow');
     });
     $(window).resize(function () {
     var w = $(window).width();
     if(w > 320 && menu.is(':hidden')) {
       menu.removeAttr('style');
      }
     });
  });
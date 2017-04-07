
//Events slider
$(document).ready(function() {
    var eventsSlider = $('#eventsslider').lightSlider({
        item:3,
        loop:false,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
				pager: false,
				controls: false,
        responsive : [
            {
                breakpoint:720,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:540,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  

// Buttons for LightSlider in block Events
 
 $('#events-slider__prevSlide').on('click', function() {
  eventsSlider.goToPrevSlide();
 });
 
 $('#events-slider__nextSlide').on('click', function() {
  eventsSlider.goToNextSlide();
 });
});


(function ($) {
  'use strict';

  // PRE LOADER
  $(window).on('load', function () {
    $('.preloader').fadeOut(1000); // set duration in brackets
  });

  // MENU

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('.navbar').addClass('bg-white bg-opacity-25');
      $('.navbar').removeClass('bg-transparent ');
    } else {
      $('.navbar').removeClass('bg-white ');
      $('.navbar').addClass('bg-transparent ');
    }
  });
})(jQuery);

// Carousel

$(document).ready(function () {
  const owl = $('.owl-carousel');
  owl.owlCarousel({
    dots: true,
    loop: true,
    margin: 30,
    nav: true,
    autoWidth: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

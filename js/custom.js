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

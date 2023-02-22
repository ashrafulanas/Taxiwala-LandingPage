AOS.init();
$(document).ready(function () {
  $("#reviewSlider").slick({
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 5500,
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

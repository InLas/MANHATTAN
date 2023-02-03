$(document).ready(function () {
  $('.slider-kitchen').slick({
    dots: false,
    arrows: false,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    initialSlide: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
        }
      }
    ]
  });
});
var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 150,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
// $(function() {
//   console.log('Hello Bootstrap5');
// });


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,
//   centeredSlides: true,
//   slidesPerView: 3,
//   spaceBetween: 24,

//   pagination: {
//     el: '.swiper-pagination',
//     dynamicBullets: true,
//     clickable: true,
//   },

// });



var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 150,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 640px
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   }
  // }
});

// init Masonry
var $grid = $('.grid').masonry({
  // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
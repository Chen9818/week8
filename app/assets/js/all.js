// $(function() {
//   console.log('Hello Bootstrap5');
// });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 24,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

});
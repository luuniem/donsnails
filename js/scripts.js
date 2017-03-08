$(function(){
  $(".button-collapse").sideNav();
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   $('.carousel').carousel({
     indicators: true
   });
   $('.modal').modal();
   $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $(".hamburger").sideNav();
    $(".hamburger").click(function(){
      $(this).addClass('is-active');
    });
    $('#sidenav, .drag-target').click(function(){
      $('.hamburger').removeClass('is-active');
    });
});



// var hamburger = document.querySelector(".hamburger");
//
// hamburger.addEventListener('click', function(){
// hamburger.classList.toggle('is-active');
//
// });

var topSlider = new Swiper ('.swiper-container', {
  effect: 'coverflow',
  coverflow: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows : true
},
  pagination: '.swiper-pagination'
});

var album1 = new Swiper('.swiper-album1', {
  effect: 'flip',
  pagination: '.swiper-pagination'
});

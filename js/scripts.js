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
    $('.collapsible').collapsible();
});



var topSlider = new Swiper ('.swiper-container', {
  effect: 'coverflow',
  autoplay: 5000,
  // pagination: '.swiper-pagination',
  speed: 800,
  loop: true,
  parallax:true,
  autoplayDisableOnInteraction: false,
  coverflow: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows : true
}
});

$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 1){
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });
  $(window).scroll(function(){
    if($(this).scrollTop() > 10){
      $('header img').addClass('header-transform');
    } else {
      $('header img').removeClass('header-transform');
    }
  });
});

$('.appointment').parallax({imageSrc: 'images/background.jpg'});
$('.service-parallax').parallax({imageSrc: 'images/jars.jpg'});

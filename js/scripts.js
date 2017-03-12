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
    $('select').material_select();
    $('.gallery div').addClass('z-depth-3');
});



var topSlider = new Swiper ('.swiper-container', {
  effect: 'slide',
  autoplay: 5000,
  // pagination: '.swiper-pagination',
  speed: 800,
  loop: true,
  parallax:true,
  autoplayDisableOnInteraction: false
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

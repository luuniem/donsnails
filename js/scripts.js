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
});

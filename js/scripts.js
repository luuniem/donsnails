$(function(){
  $('.appointment, .about-us-wrapper').parallax({imageSrc: 'images/background.jpg'});
  $('.appointment-parallax').parallax({imageSrc: 'images/notebook.jpg'});

  $('.service-parallax').parallax({imageSrc: 'images/jars.jpg'});
  $(".button-collapse").sideNav();
   $('.carousel.carousel-slider').carousel({fullWidth: true});
   $('.carousel').carousel({
     indicators: true
   });
   $('.modal').modal();
   $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 2 // Creates a dropdown of 15 years to control year
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
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
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

//header animation
$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() < 349 && $(this).scrollTop() > 1){
      $('header img').addClass('header-transform');
    } else if($(this).scrollTop() > 350){
      $('header img').addClass('animated hinge');
    } else{
      $('header img').addClass('animated bounceInDown');
      $('header img').removeClass('animated hinge');
      $('header img').removeClass('header-transform');
    }
  });
});


$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() >200){
      $('.about-title').removeClass('animated slideOutUp');
      $('.about-title').addClass('animated slideInDown');
      $('.about-title').css('display','block');
      $('.about-right-col').removeClass('animated slideOutRight');
      $('.about-right-col').addClass('animated slideInRight');
      $('.about-right-col').css('display','block');
    } else {
      $('.about-title').removeClass('animated slideInDown');
      $('.about-title').addClass('animated slideOutUp');
      $('.about-right-col').removeClass('animated slideInRight');
      $('.about-right-col').addClass('animated slideOutRight');
    }
  });
});

// var showthumb = getElementsByClassName('team-thumbnail');
// showthumb.addEventListner('click', active);
// function active(){
//
// }

$(function(){
    $(".team-thumbnail li img").hover(function(){
      $(".team-thumbnail li img").find(".show").fadeIn();
    }
                    ,function(){
                        $(this).find(".show").fadeOut();
                    }
                   );
});

$(function(){
  $('#p-classic').hover(function(){
    $('.p-classic').toggle();
  });
  $('#p-deluxe').hover(function(){
    $('.p-deluxe').toggle();
  })
  $('#m-classic').hover(function(){
    $('.m-classic').toggle();
  })
  $('#m-deluxe').hover(function(){
    $('.m-deluxe').toggle();
  })
  $('#m-gel').hover(function(){
    $('.m-gel').toggle();
  })
});

$(function(){
  var $window = $(window);
  var bodyContain = $('.body-contain');

  $window.resize(function resize(){
    if ($window.width() < 992) {
      return bodyContain.removeClass('container')
    }
    bodyContain.addClass('container')
  })
})

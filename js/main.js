$(document).ready(function(){
 $('.warrior-carousel').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  });

/* --------- PARALLAX -------- */

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /10 +'%)'
    });

    $('.warrior-foreground').css({
      'transform' : 'translate(0px, -'+ wScroll /60 +'%)'
    });
  });

/*  var wScroll = $(this).scrollTop();

  if(wScroll > $('.column').offset().top - ($(window).height() / 1.1)) {
    alert("test")
    $('.column img').each(function(i){

      setTimeout(function(){
        $('.column img').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  } */
 });

  $('#humanButton').on('click', function(){
  event.preventDefault();
    $('#descriptionPic').css({
    'background-image':'url(images/human.png)',
    'background-repeat': 'no-repeat',
    });
  });

  $('#granokButton').on('click', function(){
  event.preventDefault();
    $('#descriptionPic').css({
    'background-image':'url(images/granok.png)',
    'background-size': 'cover',
    });
  });

  $('#mordeshButton').on('click', function(){
  event.preventDefault();
    $('#descriptionPic').css({
    'background-image':'url(images/mains.png)',
    'background-repeat': 'no-repeat',
    });
  });

  $('#drakenButton').on('click', function(){
  event.preventDefault();
    $('#descriptionPic').css({
    'background-image':'url(images/drakenDescription.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    });
  });

  $('#mechariButton').on('click', function(){
  event.preventDefault();
    $('#descriptionPic').css({
    'background-image':'url(images/mechari-description.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    });
  });

 $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});
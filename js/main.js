$(document).ready(function(){
 $('.warrior-carousel').slick({
  arrows: false,
  autoplay: true,
  });



/* --------- PARALLAX -------- */

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.warrior-foreground').css({
      'transform' : 'translate(0px, -'+ wScroll /100 +'%)'
    });
  });

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

$(document).ready(function() {

var stickyNavTop = $('.nav').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();
      
if (scrollTop > stickyNavTop) { 
    $('.nav').addClass('sticky');
} else {
    $('.nav').removeClass('sticky'); 
}
};
 
stickyNav();
 
$(window).scroll(function() {
    stickyNav();
});
});
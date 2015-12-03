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
    'background-image':'url(images/granok-warrior.png)',
    'background-size': 'cover',
    });
  });

  $('#mordeshButton').on('click', function(){
  event.preventDefault();
    $('#descriptionPic').css({
    'background-image':'url(images/mains.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'contain'
    });
  });

  $('#drakenButton').on('click', function(){
  event.preventDefault();
    $('#descriptionPic').css({
    'background-image':'url(images/drakenDescription.png)',
    'background-repeat': 'no-repeat',
    'background-size': 'contain',
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

$(document).ready(function(){

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $("nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash); 
    });

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });
});
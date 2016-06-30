$(document).ready(function () {


// Preloader

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.multi');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});



// Carousel
  function left_carusel(carusel){
     var block_width = $(carusel).find('.feature-article').outerWidth();
     $(carusel).find(".carousel-items .feature-article").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
     $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
     $(carusel).find(".carousel-items .feature-article").eq(-1).remove();
     $(carusel).find(".carousel-items").animate({left: "0px"}, 600);
  }

  function right_carusel(carusel){
     var block_width = $(carusel).find('.feature-article').outerWidth();
     $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 600, function(){
      $(carusel).find(".carousel-items .feature-article").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
        $(carusel).find(".carousel-items .feature-article").eq(0).remove();
        $(carusel).find(".carousel-items").css({"left":"0px"});
     });
  }
// not mobile
  if ($(window).width() >= '1024'){
        auto_right('.carousel:first');
    } 


/*
$(function() {
  auto_right('.carousel:first');
})
*/

function auto_right(carusel){
  setInterval(function(){
    if (!$(carusel).is('.hover'))
      right_carusel(carusel);
  }, 4000)
}

$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})

$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})


// Menu 
$(function(){
  var menu = $(".nav"),
      btn = $(".menu-toggle");
  $(btn).on('click', function() {
    $(this).toggleClass("on");
    menu.slideToggle();
  });

  $(window).resize(function(){
      var w = $(window).width();
      if((w > 320) && menu.is(':hidden')) {
          menu.removeAttr('style');
      }
  }); 

});
});
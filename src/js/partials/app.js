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

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
  auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
  setInterval(function(){
    if (!$(carusel).is('.hover'))
      right_carusel(carusel);
  }, 4000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})

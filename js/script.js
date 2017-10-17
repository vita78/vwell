$(function(){

  $.fn.scrollToBottom=function(){
  $(this).click(function(){
      $("html, body").animate({scrollTop:$(document).height()},800)
    })
  }

  $(".scroll-to-bottom").scrollToBottom();
});

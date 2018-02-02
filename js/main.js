$("#left-aside-btn").click(function(){
  $("#left-aside").toggleClass("active");
});

$("#right-aside-btn").click(function(){
  $("#right-aside").toggleClass("active");
});

jQuery("document").ready(function($){
  var right = $('.right-block-wrap');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
      right.addClass("sticky");
    } else {
      right.removeClass("sticky");
    }
  });
});

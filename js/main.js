if($(window).width() < 420) {
  $(".left-aside-btn").click(function(){
    $(".left-aside").toggleClass("active");
    $(".right-aside").removeClass("active");
  });

  $(".right-aside-btn").click(function(){
    $(".right-aside").toggleClass("active");
    $(".left-aside").removeClass("active");
  });
} else {
  $(".left-aside-btn").click(function(){
    $(".left-aside").toggleClass("active");
  });

  $(".right-aside-btn").click(function(){
    $(".right-aside").toggleClass("active");
  });
}

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

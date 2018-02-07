if($(window).width() < 600) {
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
    if ( $(".left-aside-wrap").hasClass("active") ) {
      setTimeout(function(){
        $(".left-aside-wrap").toggleClass("active");
      }, 500);
    }
    else {
      $(".left-aside-wrap").addClass("active");
    }
  });

  $(".right-aside-btn").click(function(){
    $(".right-aside").toggleClass("active");
    if ( $(".right-aside-wrap").hasClass("active") ) {
      setTimeout(function(){
        $(".right-aside-wrap").toggleClass("active");
      }, 500);
    }
    else {
      $(".right-aside-wrap").addClass("active");
    }
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

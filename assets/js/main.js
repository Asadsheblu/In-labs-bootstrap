// scroll
var num = 500; //number of pixels before modifying styles

$(window).bind("scroll", function() {
  if ($(window).scrollTop() > num) {
      $(".navbar").addClass("fixed");
      
      $(".navbar").addClass("bg-white");
      $(".nav-link").addClass("text-black");
  } else {
      $(".nav-link").removeClass("text-black");
      $(".navbar").removeClass("bg-white");
      $(".navbar").removeClass("fixed");
     ;   
  }
})

new PureCounter();


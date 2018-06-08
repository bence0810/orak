$(document).ready(run);

function run() {
  var BREAKPOINT = 751;

  $("nav").prepend('<div id="hamburger">');
  for (i=1; i<=3; i++) {
    $("#hamburger").append('<div>');
  }

  $("#hamburger").css({
    "float": "right",
    "margin-top": "10px",
    "margin-right": "20px",
    "cursor": "pointer"
  });

  $("#hamburger div").css({
    "width": "30px",
    "height": "5px",
    "border-bottom": "solid 5px white"
  });

  $("#hamburger").on("click", function() {
    if ($("header nav ul").css("display") == "block") {
      $("body").css("overflow", "auto");
    } else {
      $("body").css("overflow", "hidden");
    }
    $("header nav ul").slideToggle();
  });

  menuControl();
  $(window).resize(menuControl);
  
  function menuControl() {
    if ($(window).innerWidth() >= BREAKPOINT) { // sm, md, lg
      $("#hamburger").hide();
      $("header nav ul").show();
    } else { // xs
      $("#hamburger").show();
      $("header nav ul").hide();
    }
  }
  
  $("header nav ul li a").on("click", function() {
    if ($("#hamburger").css("display") == "block") {
      $("body").css("overflow", "auto");
      $("header nav ul").slideUp();
    }
  });
}

$(document).ready(function() {

  var claimsLeft = 2;

  $(".slide").click(function() {


    //two nexts to counteract done button

  if ($(this).next().next(".dropDownSlide").is(":visible")) {
    $(this).next().next(".dropDownSlide").toggle();
  } else {
    $(".dropDownSlide").hide();
    $(this).next().next(".dropDownSlide").toggle();

  };
  }) //end:click function

  $(".done").click(function() {
    claimsLeft -= 1;
    $(this).toggle();

    $(this).prev(".slide").toggle();
    $(this).next(".dropDownSlide").css("display", "none");

    if (claimsLeft == 0) {
      $(".app").css("background", "url('./completed.png') no-repeat center center");
      $(".app").css("background-size", "400px 600px");
    }
  });
  $(".checkmark").click(function() {
    claimsLeft -= 1;
    console.log("test");


    $(this).closest(".dropDownSlide").prev().prev(".slide").toggle();
    $(this).closest(".dropDownSlide").toggle();



    if (claimsLeft == 0) {
      $(".app").css("background", "url('./completed.png') no-repeat center center");
      $(".app").css("background-size", "400px 600px");
    }
  })



}); //end:ready function

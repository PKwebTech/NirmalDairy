// Milk
$(document).ready(function () {
  $(".milk").click(function () {
    milk = $("#milk").clone();
    $("#milk").remove();
    $(".productbox2").prepend(milk);
  });

  //butter
  $(".butter").click(function () {
    butter = $("#butter").clone();
    $("#butter").remove();
    $(".productbox2").prepend(butter);
  });

  //cheese
  $(".cheese").click(function () {
    cheese = $("#cheese").clone();
    $("#cheese").remove();
    $(".productbox2").prepend(cheese);
  });

  //Panner
  $(".panner").click(function () {
    panner = $("#panner").clone();
    $("#panner").remove();
    $(".productbox2").prepend(panner);
  });

  //Dahi
  $(".dahi").click(function () {
    dahi = $("#dahi").clone();
    $("#dahi").remove();
    $(".productbox2").prepend(dahi);
  });
  //ghee
  $(".ghee").click(function () {
    ghee = $("#ghee").clone();
    $("#ghee").remove();
    $(".productbox2").prepend(ghee);
  });

  //mpowder
  $(".mpowder").click(function () {
    mpowder = $("#mpowder").clone();
    $("#mpowder").remove();
    $(".productbox2").prepend(mpowder);
  });
  //spred
  $(".spred").click(function () {
    spred = $("#spred").clone();
    $("#spred").remove();
    $(".productbox2").prepend(spred);
  });

});

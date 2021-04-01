"use strict";

$(document).ready(function () {

  // slider for btn-right
  $(".btn-right").click(function () {
    $(".btn-right").attr("disabled", "disabled");
    $(".btn-left").attr("disabled", "disabled");
    var w = $(".first-up").width();
    $(".first-row-img").first().animate({
      marginLeft: -w
    }, "slow", function () {
      $(".first-up").appendTo(".first-row:first-child").css({ marginLeft: 0 });
      $(".first-row").children().eq(3).removeClass("active-up");
      $(".first-row").children().eq(4).removeClass("first-up");
      $(".first-row").children().eq(0).addClass("first-up");
      $(".first-row").children().eq(4).addClass("active-up");
      $(".btn-right").removeAttr("disabled");
      $(".btn-left").removeAttr("disabled");
    });

    var w2 = $(".first-down").width();
    $(".second-row-img").first().animate({
      marginLeft: -w2
    }, "slow", function () {
      $(".first-down").appendTo(".second-row").css({ marginLeft: 0 });
      $(".second-row").children().eq(2).removeClass("active-down");
      $(".second-row").children().eq(3).removeClass("first-down");
      $(".second-row").children().eq(0).addClass("first-down");
      $(".second-row").children().eq(3).addClass("active-down");
    });
  });

  // slider for btn-left
  $(".btn-left").click(function () {
    $(".btn-left").attr("disabled", "disabled");
    $(".btn-right").attr("disabled", "disabled");
    var w = $(".active-up").width();
    $(".active-up").css("visibility", "hidden");
    $(".first-row-img").first().animate({
      marginLeft: w
    }, "slow", function () {
      $(".active-up").css("visibility", "").prependTo(".first-row:first-child").css({ marginLeft: 0 });
      $(".first-up").css({ marginLeft: 0 });
      $(".first-row").children().eq(0).removeClass("active-up");
      $(".first-row").children().eq(4).addClass("active-up");
      $(".first-row").children().eq(1).removeClass("first-up");
      $(".first-row").children().eq(0).addClass("first-up");
      $(".btn-left").removeAttr("disabled");
      $(".btn-right").removeAttr("disabled");
    });

    var w2 = $(".active-down").width();
    $(".active-down").css("visibility", "hidden");
    $(".second-row-img").first().animate({
      marginLeft: w2
    }, "slow", function () {
      $(".active-down").css("visibility", "").prependTo(".second-row").css({ marginLeft: 0 });
      $(".first-down").css({ marginLeft: 0 });
      $(".second-row").children().eq(0).removeClass("active-down");
      $(".second-row").children().eq(3).addClass("active-down");
      $(".second-row").children().eq(1).removeClass("first-down");
      $(".second-row").children().eq(0).addClass("first-down");
    });
  });
});
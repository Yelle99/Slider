$(document).ready(() => {

  // mijenjanje gumba na hover
  $(".btn-right").hover(() => {
    $(".border-right").css("border", "3px solid rgb(76, 76, 145)");
    $(".right").remove();
    let img = $("<img class='right'>");
    img.attr("src", "./Assets/arrow-blue-right.png")
    img.appendTo(".border-right");
  }, () => {
    $(".border-right").css("border", "3px solid rgb(211, 209, 209)");
    $(".right").remove();
    let img = $("<img class='right'>");
    img.attr("src", "./Assets/arrow-gray-right.png")
    img.appendTo(".border-right");
  })

  $(".btn-left").hover(() => {
    $(".border-left").css("border", "3px solid rgb(76, 76, 145)");
    $(".left").remove();
    let img = $("<img class='left'>");
    img.attr("src", "./Assets/arrow-blue-left.png")
    img.appendTo(".border-left");
  }, () => {
    $(".border-left").css("border", "3px solid rgb(211, 209, 209)");
    $(".left").remove();
    let img = $("<img class='left'>");
    img.attr("src", "./Assets/arrow-gray-left.png")
    img.appendTo(".border-left");
  })




  $(".btn-right").click(() => {
    let w = $(".first1").width();
    $(".1").first().animate({
      marginLeft: -w
    }, "slow", () => {
      $(".first1").appendTo(".prvi-red:first-child").css({marginLeft: 0})
      $(".prvi-red").children().eq(3).removeClass("active1");
      $(".prvi-red").children().eq(4).removeClass("first1");
      $(".prvi-red").children().eq(0).addClass("first1");
      $(".prvi-red").children().eq(4).addClass("active1");
    })

    let w2 = $(".first").width();
    $(".2").first().animate({
      marginLeft: -w2
    }, "slow", () => {
      $(".first").appendTo(".drugi-red").css({marginLeft: 0})
      $(".drugi-red").children().eq(2).removeClass("active");
      $(".drugi-red").children().eq(3).removeClass("first");
      $(".drugi-red").children().eq(0).addClass("first");
      $(".drugi-red").children().eq(3).addClass("active");
    })
  })



  $(".btn-left").click(() => {
    let w = $(".active1").width();
    $(".active1").css("visibility", "hidden");
    $("img").first().animate({
      marginLeft: w
    }, "slow", () => {
      $(".active1").css("visibility", "").prependTo(".prvi-red:first-child").css({marginLeft: 0})
      $(".first1").css({marginLeft: 0})
      $(".prvi-red").children().eq(0).removeClass("active1");
      $(".prvi-red").children().eq(4).addClass("active1");
      $(".prvi-red").children().eq(1).removeClass("first1");
      $(".prvi-red").children().eq(0).addClass("first1");
    })

    let w2 = $(".active").width();
    $(".active").css("visibility", "hidden");
    $(".2").first().animate({
      marginLeft: w2
    }, "slow", () => {
      $(".active").css("visibility", "").prependTo(".drugi-red").css({marginLeft: 0})
      $(".first").css({marginLeft: 0})
      $(".drugi-red").children().eq(0).removeClass("active");
      $(".drugi-red").children().eq(3).addClass("active");
      $(".drugi-red").children().eq(1).removeClass("first");
      $(".drugi-red").children().eq(0).addClass("first");
    })
  })

})
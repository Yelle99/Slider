$(document).ready(() => {

  // slider for btn-right
  $(".btn-right").click(() => {
    $(".btn-right").attr("disabled", "disabled");
    $(".btn-left").attr("disabled", "disabled");
    let w = $(".first-up").width();
    $(".first-row-img")
      .first()
      .animate(
        {
          marginLeft: -w,
        },
        "slow",
        () => {
          $(".first-up")
            .appendTo(".first-row:first-child")
            .css({ marginLeft: 0 });
          $(".first-row").children().eq(3).removeClass("active-up");
          $(".first-row").children().eq(4).removeClass("first-up");
          $(".first-row").children().eq(0).addClass("first-up");
          $(".first-row").children().eq(4).addClass("active-up");
          $(".btn-right").removeAttr("disabled");
          $(".btn-left").removeAttr("disabled");
        }
      );

    let w2 = $(".first-down").width();
    $(".second-row-img")
      .first()
      .animate(
        {
          marginLeft: -w2,
        },
        "slow",
        () => {
          $(".first-down").appendTo(".second-row").css({ marginLeft: 0 });
          $(".second-row").children().eq(2).removeClass("active-down");
          $(".second-row").children().eq(3).removeClass("first-down");
          $(".second-row").children().eq(0).addClass("first-down");
          $(".second-row").children().eq(3).addClass("active-down");
        }
      );
  });

  // slider for btn-left
  $(".btn-left").click(() => {
    $(".btn-left").attr("disabled", "disabled");
    $(".btn-right").attr("disabled", "disabled");
    let w = $(".active-up").width();
    $(".active-up").css("visibility", "hidden");
    $(".first-row-img")
      .first()
      .animate(
        {
          marginLeft: w,
        },
        "slow",
        () => {
          $(".active-up")
            .css("visibility", "")
            .prependTo(".first-row:first-child")
            .css({ marginLeft: 0 });
          $(".first-up").css({ marginLeft: 0 });
          $(".first-row").children().eq(0).removeClass("active-up");
          $(".first-row").children().eq(4).addClass("active-up");
          $(".first-row").children().eq(1).removeClass("first-up");
          $(".first-row").children().eq(0).addClass("first-up");
          $(".btn-left").removeAttr("disabled");
          $(".btn-right").removeAttr("disabled");
        }
      );

    let w2 = $(".active-down").width();
    $(".active-down").css("visibility", "hidden");
    $(".second-row-img")
      .first()
      .animate(
        {
          marginLeft: w2,
        },
        "slow",
        () => {
          $(".active-down")
            .css("visibility", "")
            .prependTo(".second-row")
            .css({ marginLeft: 0 });
          $(".first-down").css({ marginLeft: 0 });
          $(".second-row").children().eq(0).removeClass("active-down");
          $(".second-row").children().eq(3).addClass("active-down");
          $(".second-row").children().eq(1).removeClass("first-down");
          $(".second-row").children().eq(0).addClass("first-down");
        }
      );
  });
});

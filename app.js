$(document).ready(() => {
  // change btns on hover
  $(".btn-right").hover(
    () => {
      $(".border-right").css("border", "3px solid rgb(19, 72, 128)");
      $(".right").remove();
      let img = $("<img class='right'>");
      img.attr("src", "./Assets/arrow-blue-right.png");
      img.appendTo(".border-right");
    },
    () => {
      $(".border-right").css("border", "3px solid rgb(221, 221, 221)");
      $(".right").remove();
      let img = $("<img class='right'>");
      img.attr("src", "./Assets/arrow-gray-right.png");
      img.appendTo(".border-right");
    }
  );

  $(".btn-left").hover(
    () => {
      $(".border-left").css("border", "3px solid rgb(19, 72, 128)");
      $(".left").remove();
      let img = $("<img class='left'>");
      img.attr("src", "./Assets/arrow-blue-left.png");
      img.appendTo(".border-left");
    },
    () => {
      $(".border-left").css("border", "3px solid rgb(221, 221, 221)");
      $(".left").remove();
      let img = $("<img class='left'>");
      img.attr("src", "./Assets/arrow-gray-left.png");
      img.appendTo(".border-left");
    }
  );

  // slider for btn-right
  $(".btn-right").click(() => {
    $(".btn-right").attr("disabled", "disabled");
    $(".btn-left").attr("disabled", "disabled");
    let w = $(".first1").width();
    $(".1")
      .first()
      .animate(
        {
          marginLeft: -w,
        },
        "slow",
        () => {
          $(".first1")
            .appendTo(".first-row:first-child")
            .css({ marginLeft: 0 });
          $(".first-row").children().eq(3).removeClass("active1");
          $(".first-row").children().eq(4).removeClass("first1");
          $(".first-row").children().eq(0).addClass("first1");
          $(".first-row").children().eq(4).addClass("active1");
          $(".btn-right").removeAttr("disabled");
          $(".btn-left").removeAttr("disabled");
        }
      );

    let w2 = $(".first").width();
    $(".2")
      .first()
      .animate(
        {
          marginLeft: -w2,
        },
        "slow",
        () => {
          $(".first").appendTo(".second-row").css({ marginLeft: 0 });
          $(".second-row").children().eq(2).removeClass("active");
          $(".second-row").children().eq(3).removeClass("first");
          $(".second-row").children().eq(0).addClass("first");
          $(".second-row").children().eq(3).addClass("active");
        }
      );
  });

  // slider for btn-left
  $(".btn-left").click(() => {
    $(".btn-left").attr("disabled", "disabled");
    $(".btn-right").attr("disabled", "disabled");
    let w = $(".active1").width();
    $(".active1").css("visibility", "hidden");
    $("img")
      .first()
      .animate(
        {
          marginLeft: w,
        },
        "slow",
        () => {
          $(".active1")
            .css("visibility", "")
            .prependTo(".first-row:first-child")
            .css({ marginLeft: 0 });
          $(".first1").css({ marginLeft: 0 });
          $(".first-row").children().eq(0).removeClass("active1");
          $(".first-row").children().eq(4).addClass("active1");
          $(".first-row").children().eq(1).removeClass("first1");
          $(".first-row").children().eq(0).addClass("first1");
          $(".btn-left").removeAttr("disabled");
          $(".btn-right").removeAttr("disabled");
        }
      );

    let w2 = $(".active").width();
    $(".active").css("visibility", "hidden");
    $(".2")
      .first()
      .animate(
        {
          marginLeft: w2,
        },
        "slow",
        () => {
          $(".active")
            .css("visibility", "")
            .prependTo(".second-row")
            .css({ marginLeft: 0 });
          $(".first").css({ marginLeft: 0 });
          $(".second-row").children().eq(0).removeClass("active");
          $(".second-row").children().eq(3).addClass("active");
          $(".second-row").children().eq(1).removeClass("first");
          $(".second-row").children().eq(0).addClass("first");
        }
      );
  });
});

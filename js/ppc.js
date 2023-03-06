function ppcimpact(id) {
  if (id == 1) {
    $("#impact-right-1").toggleClass("ppc-impact-div-1");
    $(
      "#impact-right-2, #impact-right-3, #impact-right-4, #impact-right-5, #impact-right-6, #impact-right-7, #impact-right-8"
    ).removeClass("ppc-impact-div-1");
    $("#ppc-plus-1").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-2 , #ppc-plus-3, #ppc-plus-4, #ppc-plus-5, #ppc-plus-6, #ppc-plus-7, #ppc-plus-8"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
  if (id == 2) {
    $(
      "#impact-right-1, #impact-right-3, #impact-right-4, #impact-right-5, #impact-right-6, #impact-right-7, #impact-right-8"
    ).removeClass("ppc-impact-div-1");
    $("#impact-right-2").toggleClass("ppc-impact-div-1");
    $("#ppc-plus-2").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-1 , #ppc-plus-3, #ppc-plus-4, #ppc-plus-5, #ppc-plus-6, #ppc-plus-7, #ppc-plus-8"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
  if (id == 3) {
    $(
      "#impact-right-1, #impact-right-2, #impact-right-4, #impact-right-5, #impact-right-6, #impact-right-7, #impact-right-8"
    ).removeClass("ppc-impact-div-1");
    $("#impact-right-3").toggleClass("ppc-impact-div-1");
    $("#ppc-plus-3").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-1 , #ppc-plus-2, #ppc-plus-4, #ppc-plus-5, #ppc-plus-6, #ppc-plus-7, #ppc-plus-8"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
  if (id == 4) {
    $(
      "#impact-right-1, #impact-right-2, #impact-right-3, #impact-right-5, #impact-right-6, #impact-right-7, #impact-right-8"
    ).removeClass("ppc-impact-div-1");
    $("#impact-right-4").toggleClass("ppc-impact-div-1");
    $("#ppc-plus-4").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-1 , #ppc-plus-2, #ppc-plus-3, #ppc-plus-5, #ppc-plus-6, #ppc-plus-7, #ppc-plus-8"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
  if (id == 5) {
    $(
      "#impact-right-1, #impact-right-2, #impact-right-3, #impact-right-4, #impact-right-6, #impact-right-7, #impact-right-8"
    ).removeClass("ppc-impact-div-1");
    $("#impact-right-5").toggleClass("ppc-impact-div-1");
    $("#ppc-plus-5").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-1 , #ppc-plus-2, #ppc-plus-3, #ppc-plus-4, #ppc-plus-6, #ppc-plus-7, #ppc-plus-8"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
  if (id == 6) {
    $(
      "#impact-right-1, #impact-right-2, #impact-right-3, #impact-right-4, #impact-right-5, #impact-right-7, #impact-right-8"
    ).removeClass("ppc-impact-div-1");
    $("#impact-right-6").toggleClass("ppc-impact-div-1");
    $("#ppc-plus-6").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-1, #ppc-plus-2, #ppc-plus-3, #ppc-plus-4, #ppc-plus-5, #ppc-plus-7, #ppc-plus-8"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
  if (id == 7) {
    $(
      "#impact-right-1, #impact-right-2, #impact-right-3, #impact-right-4, #impact-right-5, #impact-right-6, #impact-right-8"
    ).removeClass("ppc-impact-div-1");
    $("#impact-right-7").toggleClass("ppc-impact-div-1");
    $("#ppc-plus-7").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-1, #ppc-plus-2, #ppc-plus-3, #ppc-plus-4, #ppc-plus-5, #ppc-plus-6, #ppc-plus-8"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
  if (id == 8) {
    $(
      "#impact-right-1, #impact-right-2, #impact-right-3, #impact-right-4, #impact-right-5, #impact-right-6, #impact-right-7"
    ).removeClass("ppc-impact-div-1");
    $("#impact-right-8").toggleClass("ppc-impact-div-1");
    $("#ppc-plus-8").attr("src", function (index, attr) {
      return attr == "images/ppc/plus.png"
        ? "images/ppc/Minus.png"
        : "images/ppc/plus.png";
    });
    $(
      "#ppc-plus-1, #ppc-plus-2, #ppc-plus-3, #ppc-plus-4, #ppc-plus-5,#ppc-plus-6, #ppc-plus-7"
    ).attr("src", function (index, attr) {
      if (attr == "images/ppc/Minus.png") {
        return (attr = "images/ppc/plus.png");
      }
    });
  }
}

// jQuery("#ppcTable").owlCarousel
var owl = $("#ppcTable");
owl.owlCarousel({
  autoplay: true,
  loop: true,
  margin: 20,
  /*
animateOut: 'fadeOut',
animateIn: 'fadeIn',
*/
  responsiveClass: true,
  // autoWidth: true,
  // autoHeight: true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  dots: true,
  // nav: true,
  responsive: {
    0: {
      items: 1,
    },

    600: {
      items: 1,
    },

    1024: {
      items: 1,
    },

    1366: {
      items: 1,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [3000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// ---------------
jQuery("#ppcPartner").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 20,
  /*
animateOut: 'fadeOut',
animateIn: 'fadeIn',
*/
  responsiveClass: true,
  // autoWidth: true,
  // autoHeight: true,
  // autoplayTimeout: 3000,
  // smartSpeed: 1000,
  // autoplayHoverPause: true,
  // dots: true,
  nav: true,
  responsive: {
    0: {
      items: 3,
    },

    600: {
      items: 3,
    },

    1024: {
      items: 3,
    },

    1366: {
      items: 3,
    },
  },
});

window.addEventListener("load", (event) => {
  // $(selector).countMe(delay,speed)
  $("#ppcNum").countMe(100, 200);
});

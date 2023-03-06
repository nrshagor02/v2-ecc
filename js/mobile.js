function productNumber(id) {
  if (id == 1) {
    $("#productNumber").css({ width: "0%" });
    $("#productNumber1").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productNumber2").css({
      backgroundColor: "black",
      border: "1px solid white",
    });
    $("#productNumber3").css({
      backgroundColor: "black",
      border: "1px solid white",
    });
    $("#productNumber4").css({
      backgroundColor: "black",
      border: "1px solid white",
    });
    $("#productImage1").css({ left: "0px" });
    $("#productImage2").css({ left: "550px" });
    $("#productImage3").css({ left: "1100px" });
    $("#productImage4").css({ left: "1100px" });
    $("#listMark2").css({ opacity: "0" });
    $("#listMark3").css({ opacity: "0" });
  } else if (id == 2) {
    $("#productNumber").css({ width: "33%" });
    $("#productNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productNumber3").css({
      backgroundColor: "black",
      border: "1px solid white",
    });
    $("#productNumber4").css({
      backgroundColor: "black",
      border: "1px solid white",
    });
    $("#productImage1").css({ left: "-550px" });
    $("#productImage2").css({ left: "0px" });
    $("#productImage3").css({ left: "575px" });
    $("#productImage4").css({ left: "1100px" });
    $("#listMark2").css({ opacity: "1" });
    $("#listMark3").css({ opacity: "0" });
  } else if (id == 3) {
    $("#productNumber").css({ width: "66%" });
    $("#productNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productNumber3").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productNumber4").css({
      backgroundColor: "black",
      border: "1px solid white",
    });
    $("#productImage1").css({ left: "-1100px" });
    $("#productImage2").css({ left: "-575px" });
    $("#productImage3").css({ left: "0px" });
    $("#productImage4").css({ left: "575px" });
    $("#listMark2").css({ opacity: "1" });
    $("#listMark3").css({ opacity: "1" });
  } else if (id == 4) {
    $("#productNumber").css({ width: "100%" });
    $("#productNumber4").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productNumber3").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productNumber4").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
    });
    $("#productImage1").css({ left: "-1100px" });
    $("#productImage2").css({ left: "-1100px" });
    $("#productImage3").css({ left: "-550px" });
    $("#productImage4").css({ left: "16px" });
    $("#listMark2").css({ opacity: "1" });
    $("#listMark3").css({ opacity: "1" });
  }
}

function askedQuestions(id) {
  if (id == 1) {
    $("#askedQuestions3").removeClass("plus-div-h");
    $("#askedQuestions2").removeClass("plus-div-h");
    $("#askedQuestions").toggleClass("plus-div-h");
    $("#askedQuestionsimg").attr("src", function (index, attr) {
      return attr == "images/a-plus-mobile/plus.png"
        ? "images/a-plus-mobile/line-img.png"
        : "images/a-plus-mobile/plus.png";
    });
    $("#askedQuestionsimg2 , #askedQuestionsimg3").attr(
      "src",
      function (index, attr) {
        if (attr == "images/a-plus-mobile/line-img.png") {
          return (attr = "images/a-plus-mobile/plus.png");
        }
      }
    );
  }
  if (id == 2) {
    $("#askedQuestions2").toggleClass("plus-div-h");
    $("#askedQuestions").removeClass("plus-div-h");
    $("#askedQuestions3").removeClass("plus-div-h");
    $("#askedQuestionsimg2").attr("src", function (index, attr) {
      return attr == "images/a-plus-mobile/plus.png"
        ? "images/a-plus-mobile/line-img.png"
        : "images/a-plus-mobile/plus.png";
    });
    $("#askedQuestionsimg , #askedQuestionsimg3").attr(
      "src",
      function (index, attr) {
        if (attr == "images/a-plus-mobile/line-img.png") {
          return (attr = "images/a-plus-mobile/plus.png");
        }
      }
    );
  }
  if (id == 3) {
    $("#askedQuestions3").toggleClass("plus-div-h");
    $("#askedQuestions").removeClass("plus-div-h");
    $("#askedQuestions2").removeClass("plus-div-h");
    $("#askedQuestionsimg3").attr("src", function (index, attr) {
      return attr == "images/a-plus-mobile/plus.png"
        ? "images/a-plus-mobile/line-img.png"
        : "images/a-plus-mobile/plus.png";
    });
    $("#askedQuestionsimg , #askedQuestionsimg2").attr(
      "src",
      function (index, attr) {
        if (attr == "images/a-plus-mobile/line-img.png") {
          return (attr = "images/a-plus-mobile/plus.png");
        }
      }
    );
  }
}

function portfolioWork(id) {
  if (id == 1) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-1.png"
    );
  }
  if (id == 2) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-2.png"
    );
  }
  if (id == 3) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-3.png"
    );
  }
  if (id == 4) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-4.png"
    );
  }
  if (id == 5) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-5.png"
    );
  }
  if (id == 6) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-6.png"
    );
  }
  if (id == 7) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-7.png"
    );
  }
  if (id == 8) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-5.png"
    );
  }
  if (id == 9) {
    $("#portfolioWorkimg").attr(
      "src",
      "images/a-plus-mobile/packaging/packaging-slider-2.png"
    );
  }
}

function servicesNumber(id) {
  if (id == 1) {
    $("#servicesNumber").css({ width: "0%" });
    $("#servicesNumber2").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber3").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber4").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber5").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber6").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesImage1").css({ left: "0px" });
    $("#servicesImage2").css({ left: "350px" });
    $("#servicesImage3").css({ left: "650px" });
    $("#servicesImage4").css({ left: "975px" });
    $("#servicesImage5").css({ left: "975px" });
    $("#servicesImage6").css({ left: "975px" });
  }
  if (id == 2) {
    $("#servicesNumber").css({ width: "19%" });

    $("#servicesNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber3").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber4").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber5").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber6").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesImage1").css({ left: "-350px" });
    $("#servicesImage2").css({ left: "0px" });
    $("#servicesImage3").css({ left: "350px" });
    $("#servicesImage4").css({ left: "650px" });
    $("#servicesImage5").css({ left: "975px" });
    $("#servicesImage6").css({ left: "975px" });
  }
  if (id == 3) {
    $("#servicesNumber").css({ width: "38%" });

    $("#servicesNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber3").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber4").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber5").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber6").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesImage1").css({ left: "-650px" });
    $("#servicesImage2").css({ left: "-350px" });
    $("#servicesImage3").css({ left: "0px" });
    $("#servicesImage4").css({ left: "350px" });
    $("#servicesImage5").css({ left: "650px" });
    $("#servicesImage6").css({ left: "975px" });
  }
  if (id == 4) {
    $("#servicesNumber").css({ width: "57%" });

    $("#servicesNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber3").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber4").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber5").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesNumber6").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesImage1").css({ left: "-975px" });
    $("#servicesImage2").css({ left: "-650px" });
    $("#servicesImage3").css({ left: "-350px" });
    $("#servicesImage4").css({ left: "0px" });
    $("#servicesImage5").css({ left: "350px" });
    $("#servicesImage6").css({ left: "650px" });
  }
  if (id == 5) {
    $("#servicesNumber").css({ width: "76%" });

    $("#servicesNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber3").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber4").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber5").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber6").css({
      backgroundColor: "white",
      border: "1px solid #a2a2a2",
      color: "#a2a2a2",
    });
    $("#servicesImage1").css({ left: "-975px" });
    $("#servicesImage2").css({ left: "-975px" });
    $("#servicesImage3").css({ left: "-650px" });
    $("#servicesImage4").css({ left: "-350px" });
    $("#servicesImage5").css({ left: "0px" });
    $("#servicesImage6").css({ left: "350px" });
  }
  if (id == 6) {
    $("#servicesNumber").css({ width: "100%" });

    $("#servicesNumber2").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber3").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber4").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber5").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesNumber6").css({
      backgroundColor: "#208DFD",
      border: "1px solid #208DFD",
      color: "white",
    });
    $("#servicesImage1").css({ left: "-975px" });
    $("#servicesImage2").css({ left: "-975px" });
    $("#servicesImage3").css({ left: "-975px" });
    $("#servicesImage4").css({ left: "-650px" });
    $("#servicesImage5").css({ left: "-350px" });
    $("#servicesImage6").css({ left: "0px" });
  }
}

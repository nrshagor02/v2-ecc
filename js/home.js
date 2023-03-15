// ------------------------------------

window.addEventListener("scroll", (event) => {
  const scrolled = window.scrollY;
  if (scrolled <= 75) {
    $("#navBg").css({
      backgroundColor: "",
    });
  }
  if (scrolled >= 75) {
    $("#navBg").css({
      backgroundColor: "black",
    });
  }
});

// ---------------- sub category page------------------------
window.addEventListener("scroll", (event) => {
  const scrolled = window.scrollY;
  if (scrolled <= 75) {
    $("#nav_sub_bg").css({
      backgroundColor: "",
    });
    $(".changeSVG-sub-icon").css({
      filter: "",
    });
    $(".changeFontColorOnHover").css({
      color: "black",
    });
  }
  if (scrolled >= 75) {
    $("#nav_sub_bg").css({
      backgroundColor: "black",
    });
    $(".changeSVG-sub-icon").css({
      filter:
        "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
    });
    $(".changeFontColorOnHover").css({
      color: "white",
    });
    $("#hover-spinner").toggleClass("whitespinner");
  }
});

// -----------------------------------------------

function navDropdown() {
  $("#nav-dropdown-left").toggleClass("nav-dropdown-ht");
  $("#nav-dropdown-right").toggleClass("nav-dropdown-ht");
}

function navDropdownMobile() {
  $("#nav-dropdown-first").toggleClass("nav-dropdown-ht");
}

function topDropdownRightChange(id) {
  if (id == 1) {
    $("#data_management_mobile").toggleClass("nav-dropdown-wd");
  }
  if (id == 2) {
    $("#Sponsored_mobile").toggleClass("nav-dropdown-wd");
  }
  if (id == 3) {
    $("#Digital_Marketing_mobile").toggleClass("nav-dropdown-wd");
  }
  if (id == 4) {
    $("#Creative_Graphics_mobile").toggleClass("nav-dropdown-wd");
  }
  if (id == 5) {
    $("#Creative_Graphics_mobile").toggleClass("nav-dropdown-wd");
  }
  if (id == 6) {
    $("#Creative_Graphics_mobile").toggleClass("nav-dropdown-wd");
  }
}

// ------------------------------------------

var dheader = document.getElementById("nav-dropdown");
var dbtns = dheader.getElementsByClassName("dropdown-btn");

for (var i = 0; i < dbtns.length; i++) {
  dbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ------------------------------------------

var subheader = document.getElementById("nav-dropdown-menu");
var subbtns = subheader.getElementsByClassName("dropdown-btn-sub");

for (var i = 0; i < subbtns.length; i++) {
  subbtns[i].addEventListener("click", function () {
    console.log(subbtns);
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// -----------------------------------

const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
  textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  // console.log(index);
  if (index == 0) {
    const myElement = document.getElementById("back");
    myElement.style.background =
      "linear-gradient(45deg, #6502D5 , #5C10D9, #0B83FE)";
  }
  if (index == 1) {
    const myElement = document.getElementById("back");
    myElement.style.background =
      "linear-gradient(45deg, #5808FB , #5C10D9, #AB0BFE)";
  }
  if (index == 2) {
    const myElement = document.getElementById("back");
    myElement.style.background = "linear-gradient(45deg, #A521E9, #FF9147)";
  }
  if (index == 3) {
    const myElement = document.getElementById("back");
    myElement.style.background = "linear-gradient(45deg, #F2934E , #AE2CD7)";
  }
  if (index == 4) {
    const myElement = document.getElementById("back");
    myElement.style.background = "linear-gradient(45deg, #AA03DA, #1A31DB)";
  }
  if (index == 5) {
    const myElement = document.getElementById("back");
    myElement.style.background = "linear-gradient(45deg,  #0118FE, #039AFE)";
  }
  if (index == 6) {
    const myElement = document.getElementById("back");
    myElement.style.background = "linear-gradient(45deg, #028EDE,  #2DE592)";
  }

  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

//  window.onload=animateText;
window.addEventListener("load", animateText);

//  --------------------------------------------------------------

var myCarousel = document.querySelector("#Award");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  //   wrap: false
});

var icon_1 = document.getElementById("blog-image-1");
var icon_2 = document.getElementById("blog-image-2");
var icon_3 = document.getElementById("blog-image-3");
var icon_4 = document.getElementById("blog-image-4");
var icon_5 = document.getElementById("blog-image-5");

window.addEventListener("load", (e) => {
  icon_1.style.animation = "blog-image-1 3s";
  icon_2.style.animation = "blog-image-2 3s";
  icon_3.style.animation = "blog-image-3 3s";
  icon_4.style.animation = "blog-image-4 3s";
  icon_5.style.animation = "blog-image-5 3s";
});

window.addEventListener("scroll", (event) => {
  // const scrollable = document.documentElement.scrollHeight -window.innerHeight;
  const scrolled = window.scrollY;

  //  console.log(scrolled);

  if (scrolled <= 6800) {
    icon_1.style.animation = "";
    icon_2.style.animation = "";
    icon_3.style.animation = "";
    icon_4.style.animation = "";
    icon_5.style.animation = "";
  }

  if (scrolled >= 6800) {
    icon_1.style.animation = "blog-image-1 3s";
    icon_2.style.animation = "blog-image-2 3s";
    icon_3.style.animation = "blog-image-3 3s";
    icon_4.style.animation = "blog-image-4 3s";
    icon_5.style.animation = "blog-image-5 3s";
  }
});

// --------------------------------

var number_1 = document.getElementById("number-image-1");
var number_2 = document.getElementById("number-image-2");
var number_3 = document.getElementById("number-image-3");

window.addEventListener("load", (e) => {
  number_1.style.animation = "number-1 2s";
  number_2.style.animation = "number-2 2s";
  number_3.style.animation = "number-2 2s";
});

window.addEventListener("scroll", (event) => {
  // const scrollable = document.documentElement.scrollHeight -window.innerHeight;
  const scrolled = window.scrollY;

  //    console.log(scrolled);

  if (scrolled <= 8600) {
    number_1.style.animation = "";
    number_2.style.animation = "";
    number_3.style.animation = "";
  }

  if (scrolled >= 8600) {
    number_1.style.animation = "number-1 2s";
    number_2.style.animation = "number-2 2s";
    number_3.style.animation = "number-2 2s";
  }
});

// ------------------------------

var filter_1 = document.getElementById("filter-icon-2");
var filter_2 = document.getElementById("filter-icon-3");
var filter_3 = document.getElementById("filter-icon-line");

window.addEventListener("load", (e) => {
  filter_1.style.animation = "filterMoving2 1.5s";
  filter_2.style.animation = "filterMoving3 3s";
  filter_3.style.animation = "filterMoving3 3s";
});

window.addEventListener("scroll", (event) => {
  // const scrollable = document.documentElement.scrollHeight -window.innerHeight;
  const scrolled = window.scrollY;

  //    console.log(scrolled);

  if (scrolled <= 9100) {
    filter_1.style.animation = "";
    filter_2.style.animation = "";
    filter_3.style.animation = "";
  }

  if (scrolled >= 9100) {
    filter_1.style.animation = "filterMoving2 1.5s";
    filter_2.style.animation = "filterMoving3 3s";
    filter_3.style.animation = "filterMoving3 3s";
  }
});

// ----------------------------------

var competitor_1 = document.getElementById("competitor-left-1");
var competitor_2 = document.getElementById("competitor-left-2");
var competitor_3 = document.getElementById("competitor-left-3");
var competitor_4 = document.getElementById("competitor-left-4");

window.addEventListener("load", (e) => {
  competitor_1.style.animation = "step-1 3s";
  competitor_2.style.animation = "step-2 3s";
  competitor_3.style.animation = "step-3 3s";
  competitor_4.style.animation = "step-4 3s";
});

window.addEventListener("scroll", (event) => {
  // const scrollable = document.documentElement.scrollHeight -window.innerHeight;
  const scrolled = window.scrollY;

  //    console.log(scrolled);

  if (scrolled <= 9700) {
    competitor_1.style.animation = "";
    competitor_2.style.animation = "";
    competitor_3.style.animation = "";
    competitor_4.style.animation = "";
  }

  if (scrolled >= 9700) {
    competitor_1.style.animation = "step-1 3s";
    competitor_2.style.animation = "step-2 3s";
    competitor_3.style.animation = "step-3 3s";
    competitor_4.style.animation = "step-4 3s";
  }
});

// ---------------------------

var technology_1 = document.getElementById("technology-logo-1");
var technology_2 = document.getElementById("technology-logo-2");
var technology_3 = document.getElementById("technology-logo-3");
var technology_4 = document.getElementById("technology-logo-4");
var technology_5 = document.getElementById("technology-logo-5");
var technology_6 = document.getElementById("technology-logo-6");
var technology_7 = document.getElementById("technology-logo-7");
var technology_8 = document.getElementById("technology-logo-8");
var technology_9 = document.getElementById("technology-logo-9");
var bg_left = document.getElementById("bg-left");

window.addEventListener("load", (e) => {
  technology_1.style.animation = "tech-logo-1 3s";
  technology_2.style.animation = "tech-logo-2 3s";
  technology_3.style.animation = "tech-logo-3 3s";
  technology_4.style.animation = "tech-logo-4 3s";
  technology_5.style.animation = "tech-logo-5 3s";
  technology_6.style.animation = "tech-logo-6 3s";
  technology_7.style.animation = "tech-logo-7 3s";
  technology_8.style.animation = "tech-logo-8 3s";
  technology_9.style.animation = "tech-logo-9 3s";
  bg_left.style.animation = "tech-bg 4s";
});

window.addEventListener("scroll", (event) => {
  // const scrollable = document.documentElement.scrollHeight -window.innerHeight;
  const scrolled = window.scrollY;

  //    console.log(scrolled);

  if (scrolled <= 10200) {
    technology_1.style.animation = "";
    technology_2.style.animation = "";
    technology_3.style.animation = "";
    technology_4.style.animation = "";
    technology_5.style.animation = "";
    technology_6.style.animation = "";
    technology_7.style.animation = "";
    technology_8.style.animation = "";
    technology_9.style.animation = "";
    bg_left.style.animation = "";
  }

  if (scrolled >= 10200) {
    technology_1.style.animation = "tech-logo-1 3s";
    technology_2.style.animation = "tech-logo-2 3s";
    technology_3.style.animation = "tech-logo-3 3s";
    technology_4.style.animation = "tech-logo-4 3s";
    technology_5.style.animation = "tech-logo-5 3s";
    technology_6.style.animation = "tech-logo-6 3s";
    technology_7.style.animation = "tech-logo-7 3s";
    technology_8.style.animation = "tech-logo-8 3s";
    technology_9.style.animation = "tech-logo-9 3s";
    bg_left.style.animation = "tech-bg 4s";
  }
});

// -----------------------------

var brand_1 = document.getElementById("brand-body");

window.addEventListener("load", (e) => {
  brand_1.style.animation = "brand-1 5s";
});

window.addEventListener("scroll", (event) => {
  // const scrollable = document.documentElement.scrollHeight -window.innerHeight;
  const scrolled = window.scrollY;
  //    console.log(scrolled);

  if (scrolled <= 6500) {
    brand_1.style.animation = "";
  }

  if (scrolled >= 6500) {
    brand_1.style.animation = "brand-1 5s";
  }
});

// --------------------------------------------

function dropdownRightChange(id) {
  if (id === 1) {
    $(".dropdown-body-1").css({ display: "block" });
    $(".dropdown-body-2").css({ display: "none" });
    $(".dropdown-body-3").css({ display: "none" });
    $(".dropdown-body-4").css({ display: "none" });
    $(".dropdown-body-5").css({ display: "none" });
    $(".dropdown-body-6").css({ display: "none" });
  } else if (id === 2) {
    $(".dropdown-body-1").css({ display: "none" });
    $(".dropdown-body-2").css({ display: "block" });
    $(".dropdown-body-3").css({ display: "none" });
    $(".dropdown-body-4").css({ display: "none" });
    $(".dropdown-body-5").css({ display: "none" });
    $(".dropdown-body-6").css({ display: "none" });
  } else if (id === 3) {
    $(".dropdown-body-1").css({ display: "none" });
    $(".dropdown-body-2").css({ display: "none" });
    $(".dropdown-body-3").css({ display: "block" });
    $(".dropdown-body-4").css({ display: "none" });
    $(".dropdown-body-5").css({ display: "none" });
    $(".dropdown-body-6").css({ display: "none" });
  } else if (id === 4) {
    $(".dropdown-body-1").css({ display: "none" });
    $(".dropdown-body-2").css({ display: "none" });
    $(".dropdown-body-3").css({ display: "none" });
    $(".dropdown-body-4").css({ display: "block" });
    $(".dropdown-body-5").css({ display: "none" });
    $(".dropdown-body-6").css({ display: "none" });
  } else if (id === 5) {
    $(".dropdown-body-1").css({ display: "none" });
    $(".dropdown-body-2").css({ display: "none" });
    $(".dropdown-body-3").css({ display: "none" });
    $(".dropdown-body-4").css({ display: "none" });
    $(".dropdown-body-5").css({ display: "block" });
    $(".dropdown-body-6").css({ display: "none" });
  } else if (id === 6) {
    $(".dropdown-body-1").css({ display: "none" });
    $(".dropdown-body-2").css({ display: "none" });
    $(".dropdown-body-3").css({ display: "none" });
    $(".dropdown-body-4").css({ display: "none" });
    $(".dropdown-body-5").css({ display: "none" });
    $(".dropdown-body-6").css({ display: "block" });
  }
}

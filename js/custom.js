var faq = document.getElementById("faq-right-expand");

var but1 = document.getElementById("but1");
var but2 = document.getElementById("but2");
var but3 = document.getElementById("but3");
var but4 = document.getElementById("but4");
var but5 = document.getElementById("but5");
var but6 = document.getElementById("but6");

//  var btnImage = document.getElementsByClassName('btn-image');

$("#btn1").click(function () {
  // Close all open windows
  $(".answer1").stop().slideUp(300);
  // Toggle this window open/close
  $(this).next(".answer1").stop().slideToggle(300);

  but1.classList.toggle("button-position");
  faq.classList.toggle("faq-expand");
  $(this).toggleClass("minus");

  $("#but2").toggle("show");
  $("#but3").toggle("show");
  $("#but4").toggle("show");
  $("#but5").toggle("show");
  $("#but6").toggle("show");
});

$("#btn2").click(function () {
  // Close all open windows
  $(".answer1").stop().slideUp(300);
  // Toggle this window open/close
  $(this).next(".answer1").stop().slideToggle(300);

  but2.classList.toggle("button-position");
  faq.classList.toggle("faq-expand");
  $(this).toggleClass("minus");

  $("#but1").toggle("show");
  $("#but3").toggle("show");
  $("#but4").toggle("show");
  $("#but5").toggle("show");
  $("#but6").toggle("show");
});

$("#btn3").click(function () {
  // Close all open windows
  $(".answer1").stop().slideUp(300);
  // Toggle this window open/close
  $(this).next(".answer1").stop().slideToggle(300);

  but3.classList.toggle("button-position");
  faq.classList.toggle("faq-expand");
  $(this).toggleClass("minus");

  $("#but1").toggle("show");
  $("#but2").toggle("show");
  $("#but4").toggle("show");
  $("#but5").toggle("show");
  $("#but6").toggle("show");
});

$("#btn4").click(function () {
  // Close all open windows
  $(".answer1").stop().slideUp(300);
  // Toggle this window open/close
  $(this).next(".answer1").stop().slideToggle(300);

  but4.classList.toggle("button-position");
  faq.classList.toggle("faq-expand");
  $(this).toggleClass("minus");

  $("#but1").toggle("show");
  $("#but2").toggle("show");
  $("#but3").toggle("show");
  $("#but5").toggle("show");
  $("#but6").toggle("show");
});

$("#btn5").click(function () {
  // Close all open windows
  $(".answer1").stop().slideUp(300);
  // Toggle this window open/close
  $(this).next(".answer1").stop().slideToggle(300);

  but5.classList.toggle("button-position");
  faq.classList.toggle("faq-expand");
  $(this).toggleClass("minus");

  $("#but1").toggle("show");
  $("#but2").toggle("show");
  $("#but3").toggle("show");
  $("#but4").toggle("show");
  $("#but6").toggle("show");
});

$("#btn6").click(function () {
  // Close all open windows
  $(".answer1").stop().slideUp(300);
  // Toggle this window open/close
  $(this).next(".answer1").stop().slideToggle(300);

  but6.classList.toggle("button-position");
  faq.classList.toggle("faq-expand");
  $(this).toggleClass("minus");

  $("#but1").toggle("show");
  $("#but2").toggle("show");
  $("#but3").toggle("show");
  $("#but4").toggle("show");
  $("#but5").toggle("show");
});

//   var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:2,
//     loop:true,
//     margin:20,
//     smartSpeed: 1500,
//     autoplay:true,
//     dots: false,
//     autoplayTimeout:1800,
// });

window.onload = () => {
  // $(selector).countMe(delay,speed)
  $("#num1").countMe(0, 0);
  $("#num2").countMe(10, 20);
  $("#num3").countMe(10, 5);
  $("#num4").countMe(10, 50);
};

window.addEventListener("load", (event) => {
  // $(selector).countMe(delay,speed)
  $("#featureNum1").countMe(10, 10);
  $("#featureNum2").countMe(1, 20);
  $("#featureNum3").countMe(10, 10);
  $("#featureNum4").countMe(10, 50);
});

// window.addEventListener('scroll', (event) => {

//   const scrollable = document.documentElement.scrollHeight -window.innerHeight;

//   var pricingleft = document.getElementById('addingIndex');

//   const scrolled = window.scrollY;

//      console.log(scrolled);

//   if (scrolled <= 8100) {

//     pricingleft.style.zIndex = "";

//   }
//   if (scrolled >= 8100) {

//     pricingleft.style.zIndex = "-1";

//   }

// });

// $("#leftBtn1").click (function(){

// alert("test");

// });

// document.getElementById("leftBtn1").addEventListener("click", myFunction);

// function myFunction() {

//   var asin = parseInt($('#leftBtn1').val());
// alert('test');

// }

const btn1 = document.getElementById("leftBtn1");
const btnsub1 = document.getElementById("leftBtnSub1");
const next = document.getElementById("next");
const numberChange = document.getElementById("numberChange");

// const subHeading = document.getElementById("subHeading");
// const subHeading2 = document.getElementById("subHeading2");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

btnsub1.addEventListener("click", () => {
  if (btnsub1.innerText === "Step 2") {
    btnsub1.innerText = "Step 1";
    btnsub2.innerText = "Step 3";
    btn1.innerText = "Back";
    next.classList.add("hiddenBtn");
    numberChange.innerText = "2";
    // subHeading.innerText = "Send us your product photo";
    btnsub1.setAttribute("data-bs-slide-to", "0");
    img1.classList.remove("active");
    img2.classList.add("active");
    img3.classList.remove("active");
    img4.classList.remove("active");
  } else if (btnsub1.innerText === "Step 1") {
    btnsub1.innerText = "Step 2";
    btn1.innerText = "Next";
    next.classList.remove("hiddenBtn");
    numberChange.innerText = "1";
    // subHeading.innerText = "Send us your product ASIN or link";
    btnsub1.setAttribute("data-bs-slide-to", "1");
    img1.classList.add("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
    img4.classList.remove("active");
  } else if (btnsub1.innerText === "Step 3") {
    btnsub1.innerText = "Step 2";
    btnsub2.innerText = "Step 4";
    numberChange.innerText = "3";
    btn2.innerText = "Next";
    // subHeading.innerText = "Send us your Brand Logo";
    btnsub1.setAttribute("data-bs-slide-to", "1");
    btnsub2.setAttribute("data-bs-slide-to", "2");
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.add("active");
    img4.classList.remove("active");
  }
});

const btn2 = document.getElementById("rightBtn2");
const btnsub2 = document.getElementById("rightBtnSub2");

btnsub2.addEventListener("click", () => {
  if (btnsub2.innerText === "Step 3") {
    btnsub1.innerText = "Step 2";
    btnsub2.innerText = "Step 4";
    numberChange.innerText = "3";
    // subHeading.innerText = "Send us your Brand Logo";
    btnsub2.setAttribute("data-bs-slide-to", "3");
    btnsub1.setAttribute("data-bs-slide-to", "1");
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.add("active");
    img4.classList.remove("active");
  } else if (btnsub2.innerText === "Step 4") {
    btnsub1.innerText = "Step 3";
    btnsub2.innerText = "Show pricing";
    btn2.innerText = "All set to go";
    numberChange.innerText = "4";
    // subHeading.innerText = "Send us your product ASIN or link";
    btnsub1.setAttribute("data-bs-slide-to", "2");
    img1.classList.remove("active");
    img2.classList.remove("active");
    img3.classList.remove("active");
    img4.classList.add("active");
  }
});

var icon_1 = document.getElementById("C-icon-1");
var icon_2 = document.getElementById("C-icon-2");
var icon_3 = document.getElementById("C-icon-3");
var icon_4 = document.getElementById("C-icon-4");
var icon_6 = document.getElementById("C-icon-6");
var icon_7 = document.getElementById("C-icon-7");
var icon_8 = document.getElementById("C-icon-8");
var icon_9 = document.getElementById("C-icon-9");

// var layer = document.getElementById('layer');

window.addEventListener("load", (e) => {
  icon_1.style.animation = "icon-1 2s";
  icon_2.style.animation = "icon-2 2s";
  icon_3.style.animation = "icon-3 2s";
  icon_4.style.animation = "icon-4 2s";
  icon_6.style.animation = "icon-6 2s";
  icon_7.style.animation = "icon-7 2s";
  icon_8.style.animation = "icon-8 2s";
  icon_9.style.animation = "icon-9 2s";
});

window.addEventListener("scroll", (event) => {
  // const scrollable = document.documentElement.scrollHeight -window.innerHeight;
  const scrolled = window.scrollY;

  //  console.log(scrolled);

  if (scrolled <= 7667) {
    icon_1.style.animation = "";
    icon_2.style.animation = "";
    icon_3.style.animation = "";
    icon_4.style.animation = "";
    icon_6.style.animation = "";
    icon_7.style.animation = "";
    icon_8.style.animation = "";
    icon_9.style.animation = "";
  }

  if (scrolled >= 7667) {
    icon_1.style.animation = "icon-1 2s";
    icon_2.style.animation = "icon-2 2s";
    icon_3.style.animation = "icon-3 2s";
    icon_4.style.animation = "icon-4 2s";
    icon_6.style.animation = "icon-6 2s";
    icon_7.style.animation = "icon-7 2s";
    icon_8.style.animation = "icon-8 2s";
    icon_9.style.animation = "icon-9 2s";
  }
});

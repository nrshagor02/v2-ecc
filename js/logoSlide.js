var imgSlide1 = document.getElementById("imgSlide1");
imgSlide1.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img1Sub1.getAttribute("src");
  var imgur2 = img1Sub2.getAttribute("src");
  var imgur3 = img1Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide2 = document.getElementById("imgSlide2");
imgSlide2.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img2Sub1.getAttribute("src");
  var imgur2 = img2Sub2.getAttribute("src");
  var imgur3 = img2Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide3 = document.getElementById("imgSlide3");
imgSlide3.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img3Sub1.getAttribute("src");
  var imgur2 = img3Sub2.getAttribute("src");
  var imgur3 = img3Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide4 = document.getElementById("imgSlide4");
imgSlide4.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img4Sub1.getAttribute("src");
  var imgur2 = img4Sub2.getAttribute("src");
  var imgur3 = img4Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide5 = document.getElementById("imgSlide5");
imgSlide5.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img5Sub1.getAttribute("src");
  var imgur2 = img5Sub2.getAttribute("src");
  var imgur3 = img5Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide6 = document.getElementById("imgSlide6");
imgSlide6.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img6Sub1.getAttribute("src");
  var imgur2 = img6Sub2.getAttribute("src");
  var imgur3 = img6Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide7 = document.getElementById("imgSlide7");
imgSlide7.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img7Sub1.getAttribute("src");
  var imgur2 = img7Sub2.getAttribute("src");
  var imgur3 = img7Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide8 = document.getElementById("imgSlide8");
imgSlide8.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img8Sub1.getAttribute("src");
  var imgur2 = img8Sub2.getAttribute("src");
  var imgur3 = img8Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

var imgSlide9 = document.getElementById("imgSlide9");
imgSlide9.onclick = function () {
  var mainImage1 = document.getElementById("mainImage1");
  var mainImage2 = document.getElementById("mainImage2");
  var mainImage3 = document.getElementById("mainImage3");
  var imgurl = img9Sub1.getAttribute("src");
  var imgur2 = img9Sub2.getAttribute("src");
  var imgur3 = img9Sub3.getAttribute("src");
  mainImage1.setAttribute("src", imgurl);
  mainImage2.setAttribute("src", imgur2);
  mainImage3.setAttribute("src", imgur3);
};

window.addEventListener("load", jumpBody2);

function jumpBody2() {
  document.getElementById("jumpBody2").style.display = "none";
}

$("#jumpNext").click(function () {
  var fired_button = $(this).val();

  if (fired_button == 1) {
    document.getElementById("jumpNext").value = "2";
    document.getElementById("jumpBody1").style.display = "none";
    document.getElementById("jumpBody2").style.display = "block";
    document.getElementById("jumpBack").style.display = "block";
  }

  if (fired_button == 2) {
    document.getElementById("jumpBack").value = "2";
    document.getElementById("jumpNext").value = "3";
    document.getElementById("jumpBody2").style.display = "none";
    document.getElementById("jumpBody3").style.display = "block";
  }

  if (fired_button == 3) {
    document.getElementById("jumpBack").value = "3";
    document.getElementById("jumpNext").value = "4";
    document.getElementById("jumpBody3").style.display = "none";
    document.getElementById("jumpBody4").style.display = "block";
  }

  if (fired_button == 4) {
    document.getElementById("jumpBack").value = "4";
    document.getElementById("jumpNext").value = "5";
    document.getElementById("jumpNext").innerText = "Finished";
    document.getElementById("jumpBody5").style.display = "block";
    document.getElementById("jumpBody4").style.display = "none";
  }
});

$("#jumpBack").click(function () {
  var fired_button = $(this).val();

  if (fired_button == 1) {
    document.getElementById("jumpNext").value = "1";
    document.getElementById("jumpBack").style.display = "none";
    document.getElementById("jumpBody1").style.display = "block";
    document.getElementById("jumpBody2").style.display = "none";
  }

  if (fired_button == 2) {
    document.getElementById("jumpBack").value = "1";
    document.getElementById("jumpNext").value = "2";
    document.getElementById("jumpBody2").style.display = "block";
    document.getElementById("jumpBody3").style.display = "none";
  }

  if (fired_button == 3) {
    document.getElementById("jumpBack").value = "2";
    document.getElementById("jumpNext").value = "3";
    document.getElementById("jumpBody3").style.display = "block";
    document.getElementById("jumpBody4").style.display = "none";
  }

  if (fired_button == 4) {
    document.getElementById("jumpBack").value = "3";
    document.getElementById("jumpNext").value = "4";
    document.getElementById("jumpNext").innerText = "Next";
    document.getElementById("jumpBody4").style.display = "block";
    document.getElementById("jumpBody5").style.display = "none";
  }
});

jQuery("#carouselBrand").owlCarousel({
  autoplay: false,
  loop: true,
  margin: 0,
  /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  //   autoWidth: true,
  // autoHeight: true,
  // autoplayTimeout: 2000,
  // smartSpeed: 800,
  dots: false,
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
      items: 4,
    },
  },
});

let picker;
let color = "#ffffff";
const defaults = {
  color: color,
  container: document.getElementById("color_picker"),
  onChange: function (color) {
    updateColor(color);
  },
  swatchColors: ["#D1BF91", "#60371E", "#A6341B", "#F9C743", "#C7C8C4"],
};

function initPicker(options) {
  options = Object.assign(defaults, options);
  picker = new EasyLogicColorPicker(options);
}

function updateColor(value) {
  color = value;
  const $color = document.querySelector(".sample__color");
  const $code = document.querySelector(".sample__code");
  $code.innerText = color;
  $color.style.setProperty("--color", color);
}

function onChangeType(e) {
  picker.setType(e.value);
}

window.onload = function () {
  initPicker();
  updateColor(color);
};

function pickerBlueOpen(id) {
  // alert(id);
  if (id === 1) {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    popup.style.left = "130px";
  }

  if (id === 2) {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    popup.style.left = "267px";
  }
  if (id === 3) {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    popup.style.left = "406px";
  }
  if (id === 4) {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    popup.style.left = "544px";
  }
}

function pickerBlueClose() {
  var popup = document.getElementById("myPopup");
  popup.classList.remove("show");
}

function colorPickerIcon() {
  // Get the text field
  var copyText = document.getElementById("colorIdPick");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
}

var mainColor = document.getElementById("mainColor");
var colorIdPick = document.getElementById("colorIdPick");

function logoColorSet(colorGet) {
  if (colorGet === "78E1C4") {
    mainColor.style.backgroundColor = "#78E1C4";
    colorIdPick.value = "78E1C4";
  }

  if (colorGet === "B8FAE8") {
    mainColor.style.backgroundColor = "#B8FAE8";
    colorIdPick.value = "B8FAE8";
  }

  if (colorGet === "FFE294") {
    mainColor.style.backgroundColor = "#FFE294";
    colorIdPick.value = "FFE294";
  }

  if (colorGet === "FAAEC3") {
    mainColor.style.backgroundColor = "#FAAEC3";
    colorIdPick.value = "FAAEC3";
  }

  if (colorGet === "FCC2ED") {
    mainColor.style.backgroundColor = "#FCC2ED";
    colorIdPick.value = "FCC2ED";
  }

  if (colorGet === "ECC6FC") {
    mainColor.style.backgroundColor = "#ECC6FC";
    colorIdPick.value = "ECC6FC";
  }

  if (colorGet === "D7B4E6") {
    mainColor.style.backgroundColor = "#D7B4E6";
    colorIdPick.value = "D7B4E6";
  }
  if (colorGet === "5682F7") {
    mainColor.style.backgroundColor = "#5682F7";
    colorIdPick.value = "5682F7";
  }
  if (colorGet === "3DC7A2") {
    mainColor.style.backgroundColor = "#3DC7A2";
    colorIdPick.value = "3DC7A2";
  }
  if (colorGet === "6EDB42") {
    mainColor.style.backgroundColor = "#6EDB42";
    colorIdPick.value = "6EDB42";
  }
  if (colorGet === "EBBF48") {
    mainColor.style.backgroundColor = "#EBBF48";
    colorIdPick.value = "EBBF48";
  }
  if (colorGet === "F87C5B") {
    mainColor.style.backgroundColor = "#F87C5B";
    colorIdPick.value = "F87C5B";
  }
  if (colorGet === "F14977") {
    mainColor.style.backgroundColor = "#F14977";
    colorIdPick.value = "F14977";
  }
  if (colorGet === "E546C2") {
    mainColor.style.backgroundColor = "#E546C2";
    colorIdPick.value = "E546C2";
  }
  if (colorGet === "223C77") {
    mainColor.style.backgroundColor = "#223C77";
    colorIdPick.value = "223C77";
  }
  if (colorGet === "257960") {
    mainColor.style.backgroundColor = "#257960";
    colorIdPick.value = "257960";
  }
  if (colorGet === "A78530") {
    mainColor.style.backgroundColor = "#A78530";
    colorIdPick.value = "A78530";
  }
  if (colorGet === "AF4F34") {
    mainColor.style.backgroundColor = "#AF4F34";
    colorIdPick.value = "AF4F34";
  }
  if (colorGet === "A22D4E") {
    mainColor.style.backgroundColor = "#A22D4E";
    colorIdPick.value = "A22D4E";
  }
  if (colorGet === "92257A") {
    mainColor.style.backgroundColor = "#92257A";
    colorIdPick.value = "92257A";
  }
  if (colorGet === "6A2089") {
    mainColor.style.backgroundColor = "#6A2089";
    colorIdPick.value = "6A2089";
  }
}

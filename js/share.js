function jumplinkicon() {
  var iconvalue = document.getElementById("jumplinkicongetvalue").value;

  if (iconvalue != "") {
    var mainImage3 = document.getElementById("jumplinkiconset");
    var imgur3 = jumplinkiconget.getAttribute("src");
    mainImage3.setAttribute("src", imgur3);
  } else {
    var imgur3 = "images/icon/link-icon.png";
    document.getElementById("jumplinkiconset").setAttribute("src", imgur3);
  }
}

$("#jumpShareNext").click(function () {
  var fired_button = $(this).val();

  if (fired_button == 1) {
    document.getElementById("jumpShareNext").value = "2";
    document.getElementById("jumpBodyShare1").style.display = "none";
    document.getElementById("jumpBodyShare2").style.display = "block";
    document.getElementById("jumpShareBack").style.display = "block";
  }

  if (fired_button == 2) {
    document.getElementById("jumpShareBack").value = "2";
    document.getElementById("jumpShareNext").value = "3";
    document.getElementById("jumpShareNext").innerText = "Finished";
    document.getElementById("jumpBodyShare2").style.display = "none";
    document.getElementById("jumpBodyShare3").style.display = "block";
  }
});

$("#jumpShareBack").click(function () {
  var fired_button = $(this).val();

  if (fired_button == 1) {
    document.getElementById("jumpShareNext").value = "1";
    document.getElementById("jumpShareBack").style.display = "none";
    document.getElementById("jumpBodyShare1").style.display = "block";
    document.getElementById("jumpBodyShare2").style.display = "none";
  }

  if (fired_button == 2) {
    document.getElementById("jumpShareBack").value = "1";
    document.getElementById("jumpShareNext").value = "2";
    document.getElementById("jumpShareNext").innerText = "Next";
    document.getElementById("jumpBodyShare2").style.display = "block";
    document.getElementById("jumpBodyShare3").style.display = "none";
  }
});

// ------------------------------------

window.addEventListener("scroll", (event) => {
  const scrolled = window.scrollY;
  if (scrolled <= 75) {
    // SubnavBg.style.backgroundColor = "";
    $("#navBg_subcategory").css({
      backgroundColor: "",
    });
    $(".sub-a-color").css({
      color: "black",
    });
  }
  if (scrolled >= 75) {
    $("#navBg_subcategory").css({
      backgroundColor: "black",
    });
    $(".sub-a-color").css({
      color: "white",
    });
  }
});

// -----------------------------------------------

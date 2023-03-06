// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("portfolio-btn");
var btns = $(".portfolio-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Add active class to the current button (highlight it)
var pheader = document.getElementById("pricing");
var pbtns = pheader.getElementsByClassName("pricing-btn");

for (var i = 0; i < pbtns.length; i++) {
  pbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

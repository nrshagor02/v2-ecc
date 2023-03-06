$(document).ready(function(){
    var bodyHeight = $(".e-main").height();
    window.onscroll = function() {
  
       var deg = -window.scrollY*(300/bodyHeight);
       var deg1 = window.scrollY*(300/bodyHeight);

       var sc = window.scrollY*(55/bodyHeight);
       var scf = window.scrollY*(75/bodyHeight);
        // console.log("sc = "+sc);

       $(".circle-data").css({
         "transform": "rotate("+deg+"deg)", 
       });

       $(".data-icon-img").css({
         "transform": "rotate("+deg1+"deg)", 
       });

if(scf >1.5 && scf < 14.5){
  var ts1 = scf - 0.5;
    $(".testingH1").css({
         "transform": "scale("+ts1+")",
       });
} else if(scf > 14.5){
  var ts1 = 28.5 - scf;

  if(ts1 > 1){
    $(".testingH1").css({
         "transform": "scale("+ts1+")",
       });
  }
    
}

if(sc >9){
    var ts = sc - 8;
    if(ts <14){
      $(".testingH2").css({
        "transform": "scale("+ts+")",
      });
    } else if(ts > 14){
      var ts = 28 - ts;
      if(ts > 1){
         $(".testingH2").css({
        "transform": "scale("+ts+")",
      });
      }
    }
}


if(sc >18){
    var ts2 = sc - 17;
    if(ts2 <14){
      $(".testingH3").css({
        "transform": "scale("+ts2+")",
      });
      // console.log("ts2 = "+ts2);
    } else if(ts2 > 14){
      var ts2 = 28 - ts2;
      if(ts2 > 1){
         $(".testingH3").css({
        "transform": "scale("+ts2+")",
      });
      }
    }
}

if(sc >29){
    var ts2 = sc - 28;
    if(ts2 <14){
      $(".testingH4").css({
        "transform": "scale("+ts2+")",
      });
      // console.log("ts2 = "+ts2);
    } else if(ts2 > 14){
      var ts2 = 28 - ts2;
      if(ts2 > 1){
         $(".testingH4").css({
        "transform": "scale("+ts2+")",
      });
      }
    }
}

if(sc >39){
    var ts2 = sc - 38;
    if(ts2 <14){
      $(".testingH5").css({
        "transform": "scale("+ts2+")",
      });
      // console.log("ts2 = "+ts2);
    } else if(ts2 > 14){
      var ts2 = 28 - ts2;
      if(ts2 > 1){
         $(".testingH5").css({
        "transform": "scale("+ts2+")",
      });
      }
    }
}

if(sc >50){
    var ts2 = sc - 49;
    if(ts2 <14){
      $(".testingH6").css({
        "transform": "scale("+ts2+")",
      });
      // console.log("ts2 = "+ts2);
    } else if(ts2 > 14){
      var ts2 = 28 - ts2;
      if(ts2 > 1){
         $(".testingH6").css({
        "transform": "scale("+ts2+")",
      });
      }
    }
}
  
    };
  });


  // -----------------------------------------------------------------------------------------------------------------
  
// var testingtesting = document.getElementById('take-height');

// var scroller = {
//   target: document.querySelector("#scroll-container"),
//   ease: 0.05, // <= scroll speed
//   endY: 0,
//   y: 0,
//   resizeRequest: 1,
//   scrollRequest: 0,
// };

// var requestId = null;

// window.addEventListener("load", onLoad);

// function onLoad() {    
//   updateScroller();  
//   document.addEventListener("scroll", onScroll); 
// }

// function updateScroller() {
  
//   var resized = scroller.resizeRequest > 0;

//   if (resized) {    
//     var height = testingtesting.clientHeight;
//     testingtesting.style.height = height + "px";
//     scroller.resizeRequest = 0;
//   }
      
//   var scrollY = window.pageYOffset;

//   var scrollY1 =  window.pageYOffset;
  
// console.log(scrollY1);

//   scroller.y = scroller.y + ((scrollY - scroller.y) * scroller.ease);

  
//   scroller.y1 = scroller.y * 0.2;

//   console.log(scroller.y1);

// gsap.to(".circle-data",{
//   rotation: -scroller.y1,
//   force3D: true,
 
// });



// gsap.to(".e-main",{
//   y: -scroller.y,
//   // scrollTrigger: {
//   //   trigger: ".okay",
//   //   start: "top center",
//   // }
// });

//   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
// }

// function onScroll() {
//   scroller.scrollRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }

// function onResize() {
//   scroller.resizeRequest++;
//   if (!requestId) {
//     requestId = requestAnimationFrame(updateScroller);
//   }
// }


// gsap.to(".testingH3",{
//   scale: 15,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".okay",
//     start: "top 70%",
//     end: "center 30%",
//     toggleActions: "restart reverse restart reverse",
//     markers: true,
//   }
// });



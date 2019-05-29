// mobile nav overlay ---------------------------------------------

function openNav() {
  document.getElementById("nav-overlay").style.height = "100%";
};

function closeNav() {
  document.getElementById("nav-overlay").style.height = "0%";
};



// desktop nav scroll ---------------------------------------------

var mainNavLinks = document.querySelectorAll("nav ul li a");
var mainSections = document.querySelectorAll("main section");
var x = window.matchMedia("(min-width: 800px)");


window.addEventListener("scroll", event => {
  var fromTop = window.scrollY;

  for (var i=0; i < mainNavLinks.length; i++) {
    var section = document.querySelector(mainNavLinks[i].hash);

    if (!x.matches) { // if width>=800
      var header = document.getElementsByClassName("header");
      var headerHeight = header[0].offsetHeight;
    } else {
      headerHeight = 0;
    }

    if (
      fromTop >= section.offsetTop - headerHeight - 40 &&
      fromTop < section.offsetTop + section.offsetHeight - headerHeight 
    ) {
      mainNavLinks[i].classList.add("current");
    } else {
      mainNavLinks[i].classList.remove("current");
    }
  }
});
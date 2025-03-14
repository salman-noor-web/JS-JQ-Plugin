// jq code
$(document).ready(function () {
  $(".counter").countMe(500, 20);
  $(".anime").viewbox({
    setTitle: true,
    margin: 20,
    resizeDuration: 300,
    openDuration: 200,
    closeDuration: 200,
    closeButton: true,
    navButtons: true,
    closeOnSideClick: true,
    nextOnContentClick: true,
  });
});

// js code

var loader = document.getElementById("preloader");
var preloaderDelay = 1000;

window.addEventListener("load", function () {
  setTimeout(function () {
    loader.style.display = "none";
  }, preloaderDelay);
});

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
AOS.init();
var mixer = mixitup(".portfolio");




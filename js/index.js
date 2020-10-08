/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
if ($(window).width() >= 992) {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
      document.getElementById("header-top").classList.add("fixed-top");
      document.getElementById("meteo-div").classList.remove("d-lg-block");
      document.getElementById("main-logo").classList.remove("col-lg-4");
      document.getElementById("main-logo").classList.remove("col-3");
      document.getElementById("main-logo").classList.add("col-2");
      document.getElementById("login-section").classList.remove("col-lg-4");
      document.getElementById("login-section").classList.remove("col-9");
      document.getElementById("login-section").classList.add("col-10");
    }
    if (window.scrollY==0) {
      document.getElementById("header-top").classList.remove("fixed-top");
      document.getElementById("meteo-div").classList.add("d-lg-block");
      document.getElementById("main-logo").classList.add("col-lg-4");
      document.getElementById("main-logo").classList.add("col-3");
      document.getElementById("main-logo").classList.remove("col-2");
      document.getElementById("login-section").classList.add("col-lg-4");
      document.getElementById("login-section").classList.add("col-9");
      document.getElementById("login-section").classList.remove("col-10");
    }
    prevScrollpos = currentScrollPos;
  }
}

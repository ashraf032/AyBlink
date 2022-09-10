'use strict'
window.onscroll = function () {
    var scrollUp = document.querySelector(".scrollUpButton");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollUp.style.opacity = "100";
    } else {
        scrollUp.style.opacity = "0";
    }
    scrollUp.addEventListener("click", function () {
      console.log("asaascasc");
        window.scrollTo({
          top:0
        })
    })
  };

$("ul.navListBurger").fadeOut(0.1);
$('.clickBurger').click(function () {
  $("ul.navListBurger").fadeToggle(100);
});


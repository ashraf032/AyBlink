window.onscroll = function() {scrollFunction()};
$("ul.navListBurger").fadeOut(0.1);
$('.clickBurger').click(function () {
  $("ul.navListBurger").fadeToggle(100);
});
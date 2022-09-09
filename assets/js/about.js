window.onscroll = function() {scrollFunction()};
$("ul.navListBurger").fadeOut(0.1);
$('.clickBurger').click(function () {
  $("ul.navListBurger").fadeToggle(100);
});


$(".testi-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  items: 3,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
   
  },
});
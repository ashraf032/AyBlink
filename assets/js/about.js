window.onscroll = function() {scrollFunction()};
$("ul.navListBurger").fadeOut(0.1);
$('.clickBurger').click(function () {
  $("ul.navListBurger").fadeToggle(100);
});


$(".owl-carousel").owlCarousel({
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



const counters = document.querySelectorAll('.counter');


    counters.forEach((counter) =>{
        counter.innerText = '0'
    
        const updateCounter = () =>{
            const target = +counter.getAttribute('data-goal')
    
            const c = +counter.innerText
    
            const increase = target/500
    
            if(c<target){
                counter.innerText =`${Math.ceil(c+increase)}`;
                setTimeout(updateCounter, 10)
                console.log("salam");
            }else{
                counter.innerText = target
            }
        }
        updateCounter();
    })



    window.onscroll = function () {
      var scrollUp = document.querySelector(".scrollUpButton");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          scrollUp.style.display = "flex";
      } else {
          scrollUp.style.display = "none";
      }
      scrollUp.addEventListener("click", function () {
          window.scrollTo({
            top:0
          })
      })
    };
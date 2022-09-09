AOS.init();



'use strict'

const counters = document.querySelectorAll('.counter');


    counters.forEach((counter) =>{
        counter.innerText = '0'
    
        const updateCounter = () =>{
            const target = +counter.getAttribute('data-goal')
    
            const c = +counter.innerText
    
            const increase = target/500
    
            if(c<target){
                counter.innerText =`${Math.ceil(c+increase)}`;
                setTimeout(updateCounter, 20)
                console.log("salam");
            }else{
                counter.innerText = target
            }
        }
        updateCounter();
    })



    //Hi my home.js file 
'use strict'

//Scroll Navbar and buttons Functions start

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('header').style.background = "white";
    document.querySelector(".signUpButton").style.background = "#3080E3"
    document.querySelector(".signUpButton").style.color = "white"
    document.querySelector(".signInButton").style.color = "black"
    document.querySelector(".hello").style.boxShadow = "0px 20px 30px -40px gray"
    $(".signUpButton").hover(function () {
      $(this).css("background", "#fd723b");
    },
    function () {
      $(this).css({
        background: "#3080E3",
        color: "white"
        });
      });
    } else {
      document.querySelector(".hello").style.background = "none";
      document.querySelector(".signUpButton").style.background = "white"
      document.querySelector(".signUpButton").style.color = "black"
      document.querySelector(".signInButton").style.color = "white"
      document.querySelector(".hello").style.boxShadow = "0px 0px 0px 0px"
      $(".signUpButton").hover(function () {
        $(this).css({
          background: "#fd723b",
          color: "white"
        });
      },
      function () {
        $(this).css({
          background: "white",
          color: "black"
        });
      });
      
    }
    
  }

  window.onscroll = function () {
    scrollFunction()
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
//Scroll-top & Navbar & buttons Functions end

//Burger Menu start
$("ul.navListBurger").fadeOut(0.1);
$('.clickBurger').click(function () {
  $("ul.navListBurger").fadeToggle(100);
});
//Burger Menu end

//Carousel start
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  items: 2,
  responsive: {
      600: {
          items: 1,
      },
      1000: {
          items: 2,
      }
  }
});

//Carousel end


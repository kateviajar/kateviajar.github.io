// Home Section Type Effect: typed.js

// navbar links active on window loaded
var navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('load', ()=>{
    navLinks.forEach(navLink => {
        // check which page is loaded and activate that nav link
        if(navLink.id.substring(4) == window.location.pathname.substring(1)){
            navLink.classList.add('active');
        }
    });
});

// Init AOS
AOS.init();

// swiper - initialize
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });





  


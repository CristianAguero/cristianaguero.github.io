
/* animations */ 

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 75);
    
    const logo = document.querySelector("img");
    logo.classList.toggle("sticky_logo", window.scrollY > 75);
  
    const nav = document.querySelector(".nav__header");
    nav.classList.toggle("navSticky", window.scrollY > 75);
  })



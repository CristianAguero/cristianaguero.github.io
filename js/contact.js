/* animations */ 

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 75);
    
    const logo = document.querySelector("img");
    logo.classList.toggle("sticky_logo", window.scrollY > 75);
  
    const nav = document.querySelector(".nav__header");
    nav.classList.toggle("navSticky", window.scrollY > 75);
  })


  /* button disabled */

const firstName = document.querySelector('#name');
const email = document.querySelector('#email');
const comments = document.querySelector('#comments');
const input = document.querySelector('#submit')

function checkInputs() {
  if(firstName.value === '' || email.value === '' || comments.value === '') {
    input.disabled = true;
  } else {
    input.disabled = false;
  }
}

firstName.addEventListener('input', checkInputs);
email.addEventListener('input', checkInputs);
comments.addEventListener('input', checkInputs);
  

//replace with your user:
const GITHUB_URL = "https://api.github.com/users/CristianAguero";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;

    const profileName = document.getElementById("profile-name");
    profileName.innerText = data.name;
    // update the profileImage and profileName with the information retrieved.
  

  });


/* animations */ 

window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 75);
  
  const logo = document.querySelector("img");
  logo.classList.toggle("sticky_logo", window.scrollY > 75);

  const nav = document.querySelector(".nav__header");
  nav.classList.toggle("navSticky", window.scrollY > 75);
})




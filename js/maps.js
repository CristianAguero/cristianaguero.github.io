

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let cities = ["https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53528.88192501214!2d35.101754267754686!3d33.01550258233326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sil!4v1679039927215!5m2!1ses-419!2sil","https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63330.265130216816!2d-58.45668952846163!3d-34.59252884346138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sil!4v1679031277890!5m2!1ses-419!2sil", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30605.64696440902!2d-68.33032044886288!3d-54.822975206643406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sil!4v1679039192015!5m2!1ses-419!2sil", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45918.13345295467!2d-39.08248149367281!3d-16.45472539097663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sil!4v1679035426961!5m2!1ses-419!2sil", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103646.75383228857!2d-74.04137638575888!3d40.760766090507374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sil!4v1679035535414!5m2!1ses-419!2sil",]



let currentCity = 0;
let map = document.querySelector('.maps__map');

map.setAttribute('src', cities[currentCity])

prevButton.addEventListener('click', function() {
    
    currentCity--;
    map.setAttribute('src', cities[currentCity]);

    nextButton.disabled = false;

    if (currentCity === 0) {
        prevButton.disabled = true;
    }
})


nextButton.addEventListener('click', function() {
    
    currentCity++;
    map.setAttribute('src', cities[currentCity]);

    prevButton.disabled = false;

    if (cities.length === currentCity + 1) {
        nextButton.disabled = true;
    }
    
})



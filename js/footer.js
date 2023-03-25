
let languages = ['HTML', 'CSS', 'JavaScript'];

let paragraph = document.querySelector('.built');

paragraph.innerHTML = `This page was built using: ${languages.slice(0, -1).join(', ')}, and ${languages[languages.length - 1]}.`

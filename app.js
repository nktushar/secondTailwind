const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  hamburger.classList.toggle('bg-white');
});


const hlinks = document.querySelectorAll('.hLink');
hlinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
});


// dark mode
const body = document.querySelector('body');
const moon = document.querySelector('#moon');
moon.addEventListener('click', () => {  
  body.classList.toggle('dark');
});
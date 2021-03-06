'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.scrollHeight;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(navbar);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
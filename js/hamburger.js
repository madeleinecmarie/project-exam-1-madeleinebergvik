// HAMBURGER MENU 

const navMenu = document.querySelector('.ul__elements');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.open');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  navMenu.style.display = 'flex';
  navMenu.style.top = '0';
}

function close() {
  navMenu.style.top = '-110%';
}
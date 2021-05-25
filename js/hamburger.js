// HAMBURGER MENU 

const navMenu = document.querySelector('.ul__elements');
const closing = document.querySelector('.close');
const opening = document.querySelector('.open');

opening.addEventListener('click', show);
closing.addEventListener('click', close);

function show() {
  navMenu.style.display = 'flex';
  navMenu.style.top = '0';
}

function close() {
  navMenu.style.top = '-120%';
}
// HAMBURGER MENU 

const mainMenu = document.querySelector('.ul__elements');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.open');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}
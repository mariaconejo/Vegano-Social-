const openMenu = document.querySelector('.header_menu');
const closeMenu = document.querySelector('.menu_close');
const menu = document.querySelector('.header_nav');

openMenu.addEventListener('click', () => {
  menu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menu.style.display = 'none';
});

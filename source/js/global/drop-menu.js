const menuItem = document.querySelector('#drop-menu-item');

menuItem.addEventListener('click', (evt) => {
  evt.preventDefault();
  menuItem.classList.toggle('nav__item--close');
})

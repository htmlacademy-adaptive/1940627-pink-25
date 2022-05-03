let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let headerMenu = document.querySelector('.main-header__menu');

navMain.classList.remove('main-nav--nojs');
headerMenu.classList.remove('main-header__menu--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerMenu.classList.add('main-header__menu--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerMenu.classList.remove('main-header__menu--opened');
  }
});

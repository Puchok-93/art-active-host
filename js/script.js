var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var header = document.querySelector('.header');
var callbackButton = document.querySelector('.header-button');
var callbackPopup = document.querySelector('.podlojka');
var modalClose = callbackPopup.querySelector('.modal-close');

function openMenu() {
    if (navMain.classList.contains('main-navigation--closed')) {
        navMain.classList.remove('main-navigation--closed');
        navMain.classList.add('main-navigation__toggle--opened');
        header.classList.add('header-active');
    } else {
        navMain.classList.add('main-navigation--closed');
        navMain.classList.remove('main-navigation__toggle--opened');
        header.classList.remove('header-active');
    }
    console.log("Клик по кнопке");
}

function openPopup () {
  callbackPopup.classList.add('podlojka-open');
  console.log("Клик");
}

function closePopup () {
  callbackPopup.classList.remove('podlojka-open');
}

callbackButton.addEventListener("click", openPopup);
modalClose.addEventListener("click", closePopup);
navToggle.addEventListener("click", openMenu);

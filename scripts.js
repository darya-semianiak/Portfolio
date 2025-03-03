"use strict"

// Добавляем функционал для бургера
const burgerMenu = document.getElementById('burger-menu');
const menuBody = document.getElementById('menu-body');

burgerMenu.addEventListener('click', () => {
    menuBody.classList.toggle('active');
    burgerMenu.classList.toggle('burger-icon');
    burgerMenu.classList.toggle('close-icon');
});

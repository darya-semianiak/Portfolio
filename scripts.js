"use strict"

// Добавляем функционал для бургера
const burgerMenu = document.getElementById('burger-menu');
const menuBody = document.getElementById('menu-body');

burgerMenu.addEventListener('click', () => {
    menuBody.classList.toggle('active');
    burgerMenu.classList.toggle('burger-icon');
    burgerMenu.classList.toggle('close-icon');

    const isBurgerMenuOpened = menuBody.classList.contains('active');
    if (isBurgerMenuOpened) {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
    } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
});

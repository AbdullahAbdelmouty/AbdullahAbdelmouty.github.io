const btn_burger = document.querySelector('.menu-btn__burger');
const menu = document.querySelector('nav');
const clsoe_menu = document.querySelector('.menu-btn__close');
console.log(menu);
btn_burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    }
);
clsoe_menu.addEventListener('click', () => {
    menu.classList.remove('active');
    }
);
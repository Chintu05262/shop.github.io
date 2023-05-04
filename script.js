let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

menu.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
};
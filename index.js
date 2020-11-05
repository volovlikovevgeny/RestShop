const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');

const navLeft = menu.getBoundingClientRect().left;



navOpen.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.add('show');
    }
});

navClose.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.remove('show');
    }
});




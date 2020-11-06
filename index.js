const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navLinks = document.querySelectorAll('.nav-item a');

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

// Fixed Nav 

const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    scrollHeight > navHeight ? nav.classList.add('fix-nav') : nav.classList.remove('fix-nav');
})


// ScroolTo

const links = [...document.querySelectorAll('.scroll-link')]

links.map(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    })
})

// AOS animate Scrolling

AOS.init()


// SLIDER

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

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

    scrollHeight > navHeight ? nav.classList.add('fix-nav') : nav.classList.remove('fix-nav')
})


// Smooth-Scrolling Jquery

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top//можно вычесть высоту меню
        }, 800);
        return false;
    });
});

// ScroolTo

const links = [...document.querySelectorAll('.scroll-link')]

links.map(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    })
})

// AOS animate Scrolling

AOS.init()








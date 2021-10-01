document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 300});
ScrollReveal().reveal('.banner-dos', {delay: 300});
ScrollReveal().reveal('.banner-tres', {delay: 300});

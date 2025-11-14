document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav ul');

    burgerMenu.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
});

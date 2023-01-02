window.onscroll = () => {
    const menu = document.querySelector('.menu');
    const Y = window.scrollY;

    if (Y > 300) {
        menu.classList.add('menu_fixed');
    } else if (Y < 100) {
        menu.classList.remove('menu_fixed');
    }
};
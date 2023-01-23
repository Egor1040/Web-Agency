window.onscroll = () => {
    const menu = document.querySelector('.menu');
    const Y = window.scrollY;

    if (Y > 300) {
        menu.classList.add('menu_fixed');
    } else if (Y < 100) {
        menu.classList.remove('menu_fixed');
    }
};

document.addEventListener("click", documentAction);

function documentAction(e) {
    const targetElement = e.target;

    if (targetElement.closest('[data-goto]')) {

        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header').offsetHeight;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - (headerHeight + 15),
                behavior: "smooth"
            })
        }
        e.preventDefault();
    }
}
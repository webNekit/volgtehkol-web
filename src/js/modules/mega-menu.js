function megaMenuToggle(){
    const menuBtn = document.querySelector('.header__top-toolsMenuBtn');
    const megaMenu = document.querySelector('.header__megaMenu');
    const closeBtn = document.querySelector('.mega-menu__closeBtn');

    // Открытие мега меню
    menuBtn.addEventListener('click', function () {
        megaMenu.classList.add('is-active');
        document.body.classList.add('no-scroll');
    });

    // Закрытие мега меню
    closeBtn.addEventListener('click', function () {
        megaMenu.classList.remove('is-active');
        document.body.classList.remove('no-scroll');
    });
}

export default megaMenuToggle;
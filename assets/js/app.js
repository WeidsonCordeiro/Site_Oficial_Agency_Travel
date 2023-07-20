'use strict'

    const mobileNavBar = new MobileNavbar(".btn__mobile", ".menu__mobile",".menu__mobile__home", ".menu__mobile__comprar");
    const carrousel = new Carrousel(".container-carrousel", ".box-destin");
    const resizeScreen = new ResizeScreen(window, ".menu__mobile");
    const menuMainScroll = new MenuScroll(".hero", ".secundary", window);

    mobileNavBar.init();
    carrousel.init();
    resizeScreen.init();
    menuMainScroll.init();






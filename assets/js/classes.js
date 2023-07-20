class MobileNavbar {
    constructor(btnMenuSidBar, sidBarMenu, btnMenuMobileHome, btnMenuMobileComprar) {
        this.btnMenuSidBar = document.querySelector(btnMenuSidBar);
        this.sidBarMenu = document.querySelector(sidBarMenu);
        this.btnMenuMobileHome = document.querySelector(btnMenuMobileHome);
        this.btnMenuMobileComprar = document.querySelector(btnMenuMobileComprar);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this);
        this.handleClickComprar = this.handleClickComprar.bind(this);
    }

    handleClick() {
        this.sidBarMenu.classList.toggle(this.activeClass);
    }

    handleClickHome() {
        if (this.sidBarMenu.classList.contains(this.activeClass)) {
            this.sidBarMenu.classList.remove(this.activeClass);
        }
    }

    handleClickComprar() {
        if (this.sidBarMenu.classList.contains(this.activeClass)) {
            this.sidBarMenu.classList.remove(this.activeClass);
        }
    }

    setListeners() {
        this.btnMenuSidBar.addEventListener("click", this.handleClick);
        this.btnMenuMobileHome.addEventListener("click", this.handleClickHome);
        this.btnMenuMobileComprar.addEventListener("click", this.handleClickComprar);
    }

    init() {
        if (this.btnMenuSidBar) this.setListeners();
        if (this.btnMenuMobileHome) this.setListeners();
        if (this.btnMenuMobileComprar) this.setListeners();
    }

}
class ResizeScreen {
    constructor(mainWindow, menuMobile) {
        this.mainWindow = mainWindow;
        this.menuMobile = document.querySelector(menuMobile);
        this.activeClass = "active";
        this.statusClass = "";
        this.resize = 992;
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.statusClass = this.menuMobile.classList.contains(this.activeClass);
        innerWidth > this.resize && this.statusClass ? this.menuMobile.classList.remove(this.activeClass) : "";
    }

    setListeners() {
        this.mainWindow.addEventListener("resize", this.handleResize);
    }

    init() {
        if (this.mainWindow) this.setListeners();
    }
}

class MenuScroll {
    constructor(menuMain, bannerSecundary, mainMenuWindow) {
        this.menuMain = document.querySelector(menuMain);
        this.bannerSecundary = document.querySelector(bannerSecundary);
        this.mainMenuWindow = mainMenuWindow;
        this.styleCSSOne = "background-color: #27215f; box-shadow: 0 10px 15px rgba(0,0,0,.9);  transition: 1s";
        this.styleCSSTwo = "background-color: transparent;";
        this.top = "";
        this.height = "";
        this.scrollMenuMain = this.scrollMenuMain.bind(this);
    }

    scrollMenuMain() {
        
        this.top = this.mainMenuWindow.scrollY;
        this.height = this.bannerSecundary.offsetHeight;
        
        if(this.top > this.height){
            console.log("Descendo")
            this.menuMain.style.cssText = this.styleCSSOne;
        }
        
        if(this.top < this.height){
            console.log("subindo")
            this.menuMain.style.cssText = this.styleCSSTwo;
        }

    }

    setListeners() {
        this.mainMenuWindow.addEventListener("scroll", this.scrollMenuMain);
    }


    init() {
        if (this.mainMenuWindow) this.setListeners();
    }

}

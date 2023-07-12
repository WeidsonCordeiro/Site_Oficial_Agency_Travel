class MobileNavbar {
    constructor(btnMenuSidBar, sidBarMenu) {
        this.btnMenuSidBar = document.querySelector(btnMenuSidBar)
        this.sidBarMenu = document.querySelector(sidBarMenu)
        //this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.sidBarMenu.classList.toggle(this.activeClass)
    }

    setListeners() {
        this.btnMenuSidBar.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.btnMenuSidBar) {
            this.setListeners()
        }

    }

}

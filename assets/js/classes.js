class MobileNavbar {
    constructor(btnMenuSidBar, sidBarMenu) {
        this.btnMenuSidBar = document.querySelector(btnMenuSidBar)
        this.sidBarMenu = document.querySelector(sidBarMenu)
        //this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("this")
        console.log(this)
        console.log(this.sidBarMenu)
        this.sidBarMenu.classList.toggle(this.activeClass)

    }

    setListeners() {
        console.log(this.btnMenuSidBar)
        console.log(this.sidBarMenu)
        this.btnMenuSidBar.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.btnMenuSidBar) {
            this.setListeners()
        }

    }

}

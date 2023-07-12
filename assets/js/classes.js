class MobileNavbar {
    constructor(btnMenuSidBar, sidBarMenu,btnMenuMobileHome, btnMenuMobileComprar) {
        this.btnMenuSidBar = document.querySelector(btnMenuSidBar)
        this.sidBarMenu = document.querySelector(sidBarMenu)
        this.btnMenuMobileHome = document.querySelector(btnMenuMobileHome)
        this.btnMenuMobileComprar = document.querySelector(btnMenuMobileComprar)
        this.activeClass = "active"
        this.handleClick = this.handleClick.bind(this)
        this.handleClickHome = this.handleClickHome.bind(this)
        this.handleClickComprar = this.handleClickComprar.bind(this)
    }

    handleClick() {
        this.sidBarMenu.classList.toggle(this.activeClass)
    }

    handleClickHome(){
        if(this.sidBarMenu.classList.contains(this.activeClass)){
            this.sidBarMenu.classList.remove(this.activeClass);
        }
    }

    handleClickComprar(){
        if(this.sidBarMenu.classList.contains(this.activeClass)){
            this.sidBarMenu.classList.remove(this.activeClass);
        }
    }

    setListeners() {
        this.btnMenuSidBar.addEventListener("click", this.handleClick)
        this.btnMenuMobileHome.addEventListener("click", this.handleClickHome)
        this.btnMenuMobileComprar.addEventListener("click", this.handleClickComprar)
    }

    init() {
        if (this.btnMenuSidBar) this.setListeners()
        if (this.btnMenuMobileHome) this.setListeners()
        if (this.btnMenuMobileComprar) this.setListeners()
    }

}

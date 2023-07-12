class Carrousel {
    constructor(containerCarrousel, boxImagens) {
        this.containerCarrousel = document.querySelector(containerCarrousel);
        this.boxImagens = document.querySelectorAll(boxImagens);
        this.idx = 0;
    }

    setCarrousel() {
        this.idx++
        if (this.idx > this.boxImagens.length - 1) this.idx = 0;

        this.containerCarrousel.style.transform = `translateX(${-this.idx * 16.5}rem)`;
    }

    init() {

        setInterval(this.setCarrousel.bind(this), 2100);
    }
}

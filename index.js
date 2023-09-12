class Slider {
    constructor() {
        this.NOT_VISIBLE = 'not-visible';
        this.PAUSE_TIME = 500;
        this.buttons = document.querySelectorAll('.slider__button');
        this.carouselPosition = this.getButtonId(document.getElementById('slider-button-1'));
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.buttons.forEach(button => {
            button.addEventListener('click', this.handleButtonClick.bind(this));
        });
    }

    handleButtonClick(event) {
        let nextPosition = this.getButtonId(event.target);
        this.changeImageOnCarouselClick(nextPosition);
        this.carouselPosition = nextPosition;
    }

    async changeImageOnCarouselClick(newPosition) {
        let split = newPosition - this.carouselPosition;
        let position = this.carouselPosition;

        if (Math.abs(split) > 1) {
            for (let index = 1; index <= Math.abs(split); index++) {
               
                    if (split > 0) {
                        this.displaySlide(position + index);
                    } else {
                        this.displaySlide(position - index);
                    }
                    await this.sleep(this.PAUSE_TIME);
            }
        } 
    }

    displaySlide(imageId) {
        this.showElement(document.getElementById('image-' + imageId));
        this.showElement(document.getElementById('description-' + imageId));
        this.
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getButtonId(button) {
        const inputString = button.id;
        const pattern = /slider-button-(\d+)/;
        const match = inputString.match(pattern);

        if (match && match[1]) {
            const number = parseInt(match[1]);
            return number;
        } else {
            return null;
        }
    }

    selectButton(button) {
        button.classList.add('selected');
    }

    hideElement(element) {
        element.classList.add(this.NOT_VISIBLE);
        // element.parentNode.classList.add(this.NOT_VISIBLE);
        // element.classList.remove(this.FADE);
        // element.parentNode.classList.remove(this.FADE);
    }

    showElement(element) {
        element.classList.remove(this.NOT_VISIBLE);
        // element.parentNode.classList.remove(this.NOT_VISIBLE);
        // element.classList.add(this.FADE);
        // element.parentNode.classList.add(this.FADE);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}
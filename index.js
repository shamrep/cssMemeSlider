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

    }

    async changeImagesOnCCarouselClick(newPosition) {
        let split = newPosition - this.carouselPosition;
        let position = this.carouselPosition;

        if (Math.abs(split) > 1) {
            for (let index = 1; index <= Math.abs(split); index++) {
                if (window.innerWidth > this.RESOLUTION) {
                    if (split > 0) {
                        this.showSliderWideScreen(position + index);
                    } else {
                        this.showSliderWideScreen(position - index);
                    }
                    await this.sleep(this.PAUSE_TIME);
                } else {
                    if (split > 0) {
                        this.showSliderThinScreen(position + index);
                    } else {
                        this.showSliderThinScreen(position - index);
                    }
                    await this.sleep(this.PAUSE_TIME);
                }
            }
        } else {
            if (window.innerWidth > this.RESOLUTION) {
                this.showSliderWideScreen(newPosition);
            } else {
                this.showSliderThinScreen(newPosition);
            }
            await this.sleep(this.PAUSE_TIME);
        }
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

    hideElement(element) {
        element.classList.add(this.NOT_VISIBLE);
        element.parentNode.classList.add(this.NOT_VISIBLE);
        element.classList.remove(this.FADE);
        element.parentNode.classList.remove(this.FADE);
    }

    showElement(element) {
        element.classList.remove(this.NOT_VISIBLE);
        element.parentNode.classList.remove(this.NOT_VISIBLE);
        element.classList.add(this.FADE);
        element.parentNode.classList.add(this.FADE);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}
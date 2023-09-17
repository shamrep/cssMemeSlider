class Slider {
    constructor() {
        this.NOT_VISIBLE = 'not-visible';
        this.PAUSE_TIME = 500;
        this.buttons = document.querySelectorAll('.slider__button');
        this.carouselPosition = this.getButtonId(document.getElementById('slider-button-1'));
        this.changeImageOnCarouselClick(this.carouselPosition);
        this.btnContainers =  document.querySelectorAll('.button-container');

        this.setupEventListeners();
    }

    setupEventListeners() {
        // this.buttons.forEach(button => {
        //     button.addEventListener('click', this.handleButtonClick.bind(this));
        // });

        this.btnContainers.forEach(container => {
            
            container.addEventListener('click', this.handleContainerClick.bind(this));
        });

    }

    handleContainerClick(event) {
        if (event.target.matches('.slider__button')) {
            // This click event is not on the button, do something here
            this.handleButtonClick(event);
        } else {
            let position = this.getButtonId(event.target.firstElementChild);
            this.changeImageOnCarouselClick(position);
        }
    }

    handleButtonClick(event) {
        let nextPosition = this.getButtonId(event.target);
        this.changeImageOnCarouselClick(nextPosition);
    }

    async changeImageOnCarouselClick(newPosition) {
        let split = newPosition - this.carouselPosition;
        let position = this.carouselPosition;

        if (Math.abs(split) >= 1) {
            for (let index = 1; index <= Math.abs(split); index++) {
                    this.hideSlide(this.carouselPosition);
                    if (split > 0) {
                        this.carouselPosition = position + index;
                        this.displaySlide(this.carouselPosition);
                    } else {
                        this.carouselPosition = position - index;
                        this.displaySlide(this.carouselPosition);
                    }
                    await this.sleep(this.PAUSE_TIME);
                    
            }
        } else {
            this.displaySlide(this.carouselPosition);
        }
    }

    displaySlide(slideId) {
       document.getElementById('slider-button-' + slideId).classList.add('selected');
        this.showElement(document.getElementById('image-' + slideId));
        this.showElement(document.getElementById('description-' + slideId));
    }

    hideSlide(slideId) {
        document.getElementById('slider-button-' + slideId).classList.remove('selected');
        this.hideElement(document.getElementById('image-' + slideId));
        this.hideElement(document.getElementById('description-' + slideId));
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
    }

    showElement(element) {
        element.classList.remove(this.NOT_VISIBLE);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

const slider = new Slider();
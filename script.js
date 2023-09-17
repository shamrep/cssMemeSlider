document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const images = document.querySelector('.slider__images');
    const slides = document.querySelectorAll('.slide');
    const buttons = document.querySelectorAll('.slider__button');
    let currentIndex = 0;
  
    function updateSlider() {
      const slideWidth = slides[0].offsetWidth;
      const offset = -currentIndex * slideWidth;
      images.style.transform = `translateX(${offset}px)`;
  
      // Update button styles
      buttons.forEach((button, index) => {
        if (index === currentIndex) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }
  
    function goToSlide(index) {
      currentIndex = index;
      updateSlider();
    }
  
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        goToSlide(index);
      });
    });
  
    updateSlider();
  });
  
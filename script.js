// script.js

let currentIndex = 0;
const slidesToShow = 4; // Number of products to show at a time

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    const maxIndex = Math.ceil(totalSlides / slidesToShow) - 1;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (100 / slidesToShow) * slidesToShow;
    slides.style.transform = `translateX(${offset}%)`;
}

let currentIndex = 0;
const totalSlides = document.querySelectorAll('input[name="slider-reviews"]').length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.getElementById(`slider${currentIndex + 1}`).checked = true;
}, 5000);

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.zIndex = slides.length;
                slide.style.transform = 'translateX(0)';
            } else if (i < index) {
                slide.style.zIndex = i;
                slide.style.transform = 'translateX(-100%)';
            } else {
                slide.style.zIndex = slides.length - i;
                slide.style.transform = 'translateX(100%)';
            }
        });
    }

    document.getElementById('switch-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Initialize the first slide as active
    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {

// carousel fots
    const carousel = document.querySelector('.carousel-ctn');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    const slideCount = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updatecarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updatecarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updatecarousel();
    }

    // Auto-advance carousel
    let carouselInterval = setInterval(nextSlide, 7000);

    // Pause on hover
    const carouselSection = document.querySelector('.carousel');
    carouselSection.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    carouselSection.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, 7000);
    });
});
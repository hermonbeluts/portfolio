// Dropdown Navigation
function toggleMenu() {
    const dropdown = document.querySelector('.navbar .dropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
}

// Carousel Logic
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    slideIndex = (index + totalSlides) % totalSlides; // Loop back to the first/last slide
    document.querySelector('.carousel-images').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Initialize the first slide
showSlide(slideIndex);
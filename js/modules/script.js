// Navigation
const navToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.navbar-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel
const carousel = document.querySelector('.carousel-container');
const slides = carousel.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
});

// Form Validation
const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input, textarea');

const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone) => {
    return /^[0-9+\s-]{8,}$/.test(phone);
};

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#ff4444';
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            input.style.borderColor = '#ff4444';
        } else if (input.type === 'tel' && !validatePhone(input.value)) {
            input.style.borderColor = '#ff4444';
        } else {
            input.style.borderColor = '#44ff44';
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = '#ff4444';
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            isValid = false;
            input.style.borderColor = '#ff4444';
        } else if (input.type === 'tel' && !validatePhone(input.value)) {
            isValid = false;
            input.style.borderColor = '#ff4444';
        }
    });

    if (isValid) {
        alert('Message envoyé avec succès !');
        form.reset();
        inputs.forEach(input => input.style.borderColor = '');
    }
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});



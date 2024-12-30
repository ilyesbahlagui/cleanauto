const images = [
    {
        url: 'https://images.unsplash.com/photo-1552549505-e47bad1806d0',
        caption: 'Nettoyage intérieur professionnel'
    },
    {
        url: 'https://images.unsplash.com/photo-1600964373031-f0b65565f354',
        caption: 'Finition extérieure premium'
    },
    {
        url: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9',
        caption: 'Service à domicile'
    }
];

export function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const indicators = document.querySelector('.carousel-indicators');
    if (!container || !indicators) return;

    // Create slides
    container.innerHTML = images.map((image, index) => `
        <div class="carousel-slide" data-index="${index}">
            <img src="${image.url}" alt="${image.caption}" loading="lazy">
            <div class="carousel-caption">${image.caption}</div>
        </div>
    `).join('');

    // Create indicators
    indicators.innerHTML = images.map((_, index) => `
        <button class="carousel-indicator${index === 0 ? ' active' : ''}" 
                data-index="${index}" 
                aria-label="Image ${index + 1}"></button>
    `).join('');

    let currentSlide = 0;
    const slides = container.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorButtons = indicators.querySelectorAll('.carousel-indicator');

    function updateSlide() {
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
        // Update indicators
        indicatorButtons.forEach((btn, index) => {
            btn.classList.toggle('active', index === currentSlide);
        });
    }

    // Touch handling
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    container.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            // Swipe left
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide();
        } else if (touchEndX - touchStartX > 50) {
            // Swipe right
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlide();
        }
    });

    prevButton?.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    nextButton?.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });

    indicatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentSlide = parseInt(button.dataset.index);
            updateSlide();
        });
    });

    // Auto-advance carousel
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }, 5000);
}
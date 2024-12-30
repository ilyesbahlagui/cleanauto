const images = [
    {
        url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7',
        caption: 'Image 1'
    },
    {
        url: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
        caption: 'Image 2'
    },
    {
        url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
        caption: 'Image 3'
    }
];

export function initGallery() {
    const container = document.querySelector('.carousel-container');
    if (!container) return;

    // Create slides
    container.innerHTML = images.map(image => `
        <div class="carousel-slide">
            <img src="${image.url}" alt="${image.caption}">
            <div class="carousel-caption">${image.caption}</div>
        </div>
    `).join('');

    let currentSlide = 0;
    const slides = container.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function updateSlide() {
        container.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton?.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    });

    nextButton?.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    });
}
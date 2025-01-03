export class Carousel {
    constructor() {
        this.modal = document.getElementById('carouselModal');
        this.image = document.getElementById('carouselImage');
        this.dotsContainer = document.getElementById('dotsContainer');
        this.currentVehicle = null;
        this.currentIndex = 0;

        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('openCarousel', (e) => this.open(e.detail));
        document.getElementById('closeButton').addEventListener('click', () => this.close());
        document.getElementById('prevButton').addEventListener('click', () => this.navigate(-1));
        document.getElementById('nextButton').addEventListener('click', () => this.navigate(1));
        
        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape': this.close(); break;
                case 'ArrowLeft': this.navigate(-1); break;
                case 'ArrowRight': this.navigate(1); break;
            }
        });
    }

    open(vehicle) {
        this.currentVehicle = vehicle;
        this.currentIndex = 0;
        this.updateDisplay();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    navigate(direction) {
        this.currentIndex = (this.currentIndex + direction + this.currentVehicle.images.length) % this.currentVehicle.images.length;
        this.updateDisplay();
    }

    updateDisplay() {
        this.image.src = this.currentVehicle.images[this.currentIndex];
        this.updateDots();
    }

    updateDots() {
        this.dotsContainer.innerHTML = '';
        this.currentVehicle.images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === this.currentIndex ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateDisplay();
            });
            this.dotsContainer.appendChild(dot);
        });
    }
}
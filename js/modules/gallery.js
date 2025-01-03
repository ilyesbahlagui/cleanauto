import { vehicles } from './vehicles.js';

export class Gallery {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
    }

    createGalleryItem(vehicle) {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${vehicle.thumbnail}" alt="${vehicle.name}">
            <div class="gallery-item-info">
                <h2>${vehicle.name}</h2>
                <p>${vehicle.description}</p>
            </div>
        `;
        return item;
    }

    render() {
        const fragment = document.createDocumentFragment();
        vehicles.forEach(vehicle => {
            const item = this.createGalleryItem(vehicle);
            item.addEventListener('click', () => {
                document.dispatchEvent(new CustomEvent('openCarousel', { detail: vehicle }));
            });
            fragment.appendChild(item);
        });
        this.container.appendChild(fragment);
    }
}
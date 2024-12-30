const services = [
    {
        icon: '🚗',
        title: 'Service 1',
        description: 'Description du service 1'
    },
    {
        icon: '🔧',
        title: 'Service 2',
        description: 'Description du service 2'
    },
    {
        icon: '⚡',
        title: 'Service 3',
        description: 'Description du service 3'
    }
];

export function initServices() {
    const container = document.querySelector('.services-grid');
    if (!container) return;

    container.innerHTML = services.map(service => `
        <div class="service-card reveal">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}
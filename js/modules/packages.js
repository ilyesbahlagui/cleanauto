const packages = [
    {
        title: 'Standard',
        price: '49€',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        icon: '🌟'
    },
    {
        title: 'Premium',
        price: '89€',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        icon: '👑',
        isPremium: true
    },
    {
        title: 'Platinium',
        price: '149€',
        features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
        icon: '💎',
        isPremium: true
    }
];

export function initPackages() {
    const container = document.querySelector('.packages-grid');
    if (!container) return;

    container.innerHTML = packages.map(pkg => `
        <div class="package-card ${pkg.isPremium ? 'premium' : ''}">
            <div class="package-icon">${pkg.icon}</div>
            <h3 class="package-title">${pkg.title}</h3>
            <div class="package-price">${pkg.price}</div>
            <ul class="package-features">
                ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="#contact" class="package-button">Choisir</a>
        </div>
    `).join('');
}
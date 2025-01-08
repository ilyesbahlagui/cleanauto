import { getPackageStyle } from './packageStyles.js';

const packages = [
  {
    title: 'Standard',
    price: '50€',
    features: [
      'Aspiration : tapis, moquettes, sièges, coffre',
      'Nettoyage plastiques et vitres',
    ],
    icon: '🚗', 
    type: 'standard'
  },
  {
    title: 'Premium',
    price: '100€',
    features: [
      'Aspiration complète',
      'Shampouineuse : moquettes, tapis, sièges, coffre',
      'Nettoyage plastiques et vitres',
    ],
    icon: '✨',
    type: 'premium'
  },
  {
    title: 'Platinum',
    price: '140€',
    features: [
      'Lavage intérieur complet',
      'Shampouineuse et nettoyage plastiques',
      'Lavage extérieur : carrosserie, jantes, portes',
    ],
    icon: '💎', 
    type: 'platinum'
  },
];

export function initPackages() {
  const container = document.querySelector('.packages-grid');
  if (!container) return;

  container.innerHTML = packages
    .map(
      (pkg) => `
        <div class="package-card ${getPackageStyle(pkg.type)}">
            <div class="package-icon">${pkg.icon}</div>
            <h3 class="package-title">${pkg.title}</h3>
            <div class="package-price">${pkg.price}</div>
            <ul class="package-features">
                ${pkg.features.map((feature) => `<li>${feature}</li>`).join('')}
            </ul>
             ${pkg.type !== 'supplement' ? `<div ><a href="#contact" class="package-button" onclick="autoFillMessageFromId('${pkg.type}')">Nous Contacter</a></div>` : ''}
           
        </div>
    `
    )
    .join('');
}
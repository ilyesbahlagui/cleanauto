const services = [
  {
    icon: '🏠',
    title: 'Nettoyage à domicile',
    description:
      'Profitez d’un lavage intérieur et extérieur sans quitter votre domicile. Nous nous déplaçons avec tout le matériel nécessaire.',
  },
  {
    icon: '🏢',
    title: 'Nettoyage dans notre local',
    description:
      'Un service complet dans notre local équipé pour un résultat professionnel. Rendez-nous visite et repartez avec une voiture éclatante.',
  },
  {
    icon: '⚙️',
    title: 'Entretien personnalisé',
    description:
      'Adapté à vos besoins spécifiques : nettoyage en profondeur, désinfection de l’habitacle, ou soin particulier pour votre véhicule.',
  },
];
export function initServices() {
  const container = document.querySelector('.services-grid');
  if (!container) return;

  container.innerHTML = services
    .map(
      (service) => `
        <div class="service-card reveal">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `
    )
    .join('');
}

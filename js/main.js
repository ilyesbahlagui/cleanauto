import { initNavigation } from './modules/navigation.js';
import { initPackages } from './modules/packages.js';
import { initServices } from './modules/services.js';
import { initGallery } from './modules/gallery.js';
import { initContact } from './modules/contact.js';
import { initScrollReveal } from './modules/scrollReveal.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPackages();
    initServices();
    initGallery();
    initContact();
    initScrollReveal();
});
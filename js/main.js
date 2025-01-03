import { initNavigation } from './modules/navigation.js';
import { initPackages } from './modules/packages.js';
import { initServices } from './modules/services.js';
// import { initGallery } from './modules/galleryv1.js';
import { initContact } from './modules/contact.js';
import { initScrollReveal } from './modules/scrollReveal.js';

import { Gallery } from './modules/gallery.js';
import { Carousel } from './modules/carousel.js';


// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initPackages();
    initServices();
    // initGallery();
    initContact();
    initScrollReveal();
    new Gallery('vehicleGallery');
    new Carousel();
    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init({
          publicKey: "pAKWo-OTfOIbsz2w8",
        });
    })();

    
});
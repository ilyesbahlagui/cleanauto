export function initContact() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        return /^[0-9+\s-]{10}$/.test(phone);
    };

    const showValidation = (input, isValid, message = '') => {
        const messageElement = input.parentElement?.querySelector('.validation-message');
        if (!messageElement) return;

        input.style.borderColor = isValid ? 'var(--success)' : 'var(--danger)';
        messageElement.textContent = isValid ? '' : message;
    };

    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value.trim();

            if (value === '') {
                showValidation(input, false, 'Ce champ est requis');
            } else if (input.type === 'email' && !validateEmail(value)) {
                showValidation(input, false, 'Email invalide');
            } else if (input.type === 'tel' && !validatePhone(value)) {
                showValidation(input, false, 'Numéro de téléphone invalide');
            } else {
                showValidation(input, true);
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
    
        form.querySelectorAll('input, textarea').forEach(input => {
            const value = input.value.trim();
            if (value === '') {
                isValid = false;
                showValidation(input, false, 'Ce champ est requis');
            }
        });
    
        if (isValid) {
            let params = {
                email: document.getElementById('email').value,
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            // Send the email
            emailjs.send('service_uc64r12', 'template_cc1dswy', params)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    return Swal.fire({
                        icon: 'success',
                        title: 'Email envoyé',
                        text: 'Votre message a été envoyé avec succès !',
                        timer: 3000, // La pop-up se ferme automatiquement après 3 secondes
                        timerProgressBar: true,
                        showConfirmButton: true, // Afficher le bouton de confirmation
                        confirmButtonText: 'OK', // Texte du bouton de confirmation
                        width: '300px', // Réduire la largeur de la pop-up
                        padding: '1em', // Ajouter du padding
                        background: '#fff', // Couleur de fond
                        customClass: {
                            popup: 'small-popup', // Classe CSS personnalisée
                            confirmButton: 'confirm-button' // Classe CSS pour le bouton de confirmation
                        }
                    });
                })
                .then(() => {
                    form.reset();
                    form.querySelectorAll('input, textarea').forEach(input => {
                        input.style.borderColor = '';
                    });
                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Erreur',
                        text: 'Échec de l\'envoi de l\'email. Veuillez réessayer plus tard.',
                        timer: 3000, // La pop-up se ferme automatiquement après 3 secondes
                        timerProgressBar: true,
                        showConfirmButton: true, // Afficher le bouton de confirmation
                        confirmButtonText: 'OK', // Texte du bouton de confirmation
                        width: '300px', // Réduire la largeur de la pop-up
                        padding: '1em', // Ajouter du padding
                        background: '#fff', // Couleur de fond
                        customClass: {
                            popup: 'small-popup', // Classe CSS personnalisée
                            confirmButton: 'confirm-button' // Classe CSS pour le bouton de confirmation
                        }
                    });
                });
        }
    });
    


}


window.autoFillMessageFromId = function (id) {

    const messages = {
        'standard': 'Bonjour,\n\nJe souhaite faire une réservation pour le forfait Standard.\n\nDétails du véhicule :\nType : [type]\nModèle : [modèle]\nDate : [date]\n\nCordialement.',
        'premium': 'Bonjour,\n\nJe souhaite faire une réservation pour le forfait Premium.\n\nDétails du véhicule :\nType : [type]\nModèle : [modèle]\nDate : [date]\n\nCordialement.',
        'platinum': 'Bonjour,\n\nJe souhaite faire une réservation pour le forfait Platinum.\n\nDétails du véhicule :\nType : [type]\nModèle : [modèle]\nDate : [date]\n\nCordialement.',
        'demande': 'Bonjour,\n\nJe souhaite faire une réservation pour le forfait [forfait].\n\nDétails du véhicule :\nType : [type]\nModèle : [modèle]\nDate : [date]\n\nCordialement.',
    };
    const textArea = document.getElementById('message');
    if (!textArea) return;

    const message = messages[id];
    if (message) {
        textArea.value = message;
    }
};

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     // Generate the parameter object
//     var params = {
//         email: document.getElementById('email').value,
//         name: document.getElementById('name').value,
//         phone: document.getElementById('phone').value,
//         message: document.getElementById('message').value
//     };
//     // Send the email
//     emailjs.send('service_uc64r12', 'template_cc1dswy', params)
//         .then(function (response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Email successfully sent!');
//         }, function (error) {
//             console.log('FAILED...', error);
//             alert('Failed to send email. Please try again later.');
//         });
// });

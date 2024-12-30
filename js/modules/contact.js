export function initContact() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        return /^[0-9+\s-]{8,10}$/.test(phone);
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
            alert('Message envoyé avec succès !');
            form.reset();
            form.querySelectorAll('input, textarea').forEach(input => {
                input.style.borderColor = '';
            });
        }
    });
}
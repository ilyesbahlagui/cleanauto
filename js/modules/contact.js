export function initContact() {
    const contactButtons = document.querySelectorAll('.contact-button');
    contactButtons.forEach(contactButton => {
        if (!contactButton) return;
    
        contactButton.addEventListener('click', () => {
            Swal.fire({
                title: 'Contactez-nous',
                html: `
                    <div class="contact-info">
                        <div class="contact-item" style="color: black;">
                            <i class="icon-phone">📞</i>
                            <p><a href="tel:+33785134580" style="color: black;">+33 07 85 13 45 80</a></p>
                        </div>
                        <div class="contact-item" style="color: black;">
                            <i class="icon-mail">📧</i>
                            <p><a href="mailto:cleanauto30generac@outlook.fr" style="color: black;">cleanauto30generac@outlook.fr</a></p>
                        </div>
                    </div>
                `,
                icon: 'info',
                confirmButtonText: 'OK',
                padding: '1em',
                confirmButtonColor: '#007BFF',
                background: '#fff',
                customClass: {
                    popup: 'contact-popup',
                    confirmButton: 'confirm-button'
                }
            });
        });
    });
}
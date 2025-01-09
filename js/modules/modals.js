export function initModals() {
    document.getElementById("openLegalModal").addEventListener("click", function () {
        Swal.fire({
            title: '<h2>Mentions Légales et Politique de Confidentialité</h2>',
            html: `

        
        <div class="modal-body">
            <h3>Article 1 - Informations légales</h3>
            <p>Le site est édité par :</p>
            <p><strong>Nom de l’éditeur :</strong> MONSIEUR BENJAMIN MARCEL BOURSAULT EI </p>
            <p><strong>Nom de l'entreprise :</strong> CLEAN AUTO GENERAC</p>
            <p><strong>Adresse :</strong> 1 B Impasse des Lauriers Roses, 30510 Générac, France</p>
            <p><strong>Statut juridique :</strong> Entrepreneur individuel</p>
            <p><strong>Numéro SIREN :</strong> 812 841 484</p>
            <p><strong>Numéro SIRET :</strong> 812 841 484 00023</p>
            <p><strong>Numéro TVA Intracommunautaire :</strong> FR45812841484</p>
            <p><strong>Activité principale déclarée :</strong> Nettoyage automobile</p>
            <p><strong>Code NAF ou APE:</strong> Entretien et réparation de véhicules automobiles légers (Code APE : 45.20A)</p>
            <p><strong>Convention collective appliquée :</strong> Services de l'automobile (1090)</p>
            <p><strong>Secteur d'activité :</strong>Commerce réparation d'automobiles et motocycles</p>
            <p><strong>Date de création de l’entreprise :</strong> 10 août 2015</p>
            <p><strong>Adresse e-mail :</strong> cleanauto30generac@outlook.fr</p>
            <p><strong>Téléphone :</strong> +33 07 85 13 45 80</p>
            
            <p>Le site est hébergé par :</p>
            <p><strong>Hébergeur :</strong> o2Switch</p>
            <p><strong>Adresse :</strong> Chem. des Pardiaux, 63000 Clermont-Ferrand, France</p>
            <p><strong>Téléphone :</strong> 04 44 44 60 40</p>
            
            <h3>Article 2 - Accès au site</h3>
            <p>L’accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques ou publicitaires.</p>
            
            <h3>Article 3 - Contenu du site</h3>
            <p>Toutes les marques, photographies, textes, commentaires, illustrations, images (animées ou non), vidéos, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.</p>
            
            <h3>Article 4 - Gestion du site</h3>
            <p>Pour la bonne gestion du site, l’éditeur pourra à tout moment :</p>
            <p>
                <strong>Suspendre, interrompre ou limiter l’accès à tout ou partie du site.</strong><br>
                <strong>Supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales.</strong><br>
                <strong>Suspendre le site pour procéder à des mises à jour.</strong>
            </p>
            
            <h3>Article 5 - Responsabilités</h3>
            <p>L’éditeur ne pourra être tenu responsable en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l’accès au site ou à une de ses fonctionnalités.</p>
            
            <h3>Article 6 - Liens hypertextes</h3>
            <p>Le site peut contenir des liens hypertextes vers d’autres sites web. L’éditeur n’a pas le contrôle des contenus présents sur ces sites tiers et ne pourra être tenu responsable des conséquences de leur utilisation.</p>
            
            <h3>Article 7 - Collecte et protection des données</h3>
            <p>Aucune donnée personnelle n’est collectée lors de l’utilisation de ce site. Si une collecte de données venait à être mise en place dans le futur (formulaires de contact, inscription à une newsletter, etc.), une politique de confidentialité détaillée sera présentée à l’utilisateur pour lui permettre de consentir en toute transparence.</p>
            
            <h3>Article 8 - Droit d’accès, de rectification et de suppression</h3>
            <p>Conformément au RGPD, les utilisateurs disposent des droits suivants :</p>
            <p>
                <strong>Droit d’accès :</strong> consulter leurs données personnelles, si collectées.<br>
                <strong>Droit de rectification :</strong> corriger des données inexactes.<br>
                <strong>Droit à l’effacement :</strong> demander la suppression des données personnelles.<br>
                <strong>Droit à la limitation du traitement :</strong><br>
                <strong>Droit d’opposition :</strong><br>
                <strong>Droit à la portabilité des données :</strong><br>
            </p>
            <p>Pour exercer ces droits, contactez-nous à : cleanauto30generac@outlook.fr.</p>
            
            <h3>Article 9 - Sécurité des données</h3>
            <p>Aucune collecte de données n’étant effectuée sur ce site, aucune mesure spécifique n’est en place. Si une collecte venait à être introduite, toutes les mesures nécessaires pour assurer la sécurité et la confidentialité des données personnelles seraient mises en place.</p>
            
            <h3>Article 10 - Politique de conservation des données</h3>
            <p>Actuellement, aucune donnée personnelle n’est collectée, donc aucune conservation n’est nécessaire. En cas de changement, une durée limite de conservation sera établie et communiquée aux utilisateurs.</p>
            
            <h3>Article 11 - Cookies</h3>
            <p>Le site n’utilise aucun cookie. Aucun suivi analytique ou cookie publicitaire  n’est mis en place.</p>
            
            <h3>Article 12 - Modification des mentions légales</h3>
            <p>Les présentes mentions légales peuvent être modifiées à tout moment. En cas de changements significatifs, les utilisateurs seront informés directement sur le site.</p>
            
            <h3>Article 13 - Loi applicable</h3>
            <p>Les présentes mentions légales sont régies par la loi française. Tout litige sera soumis à la compétence des tribunaux français.</p>
        </div>
            `,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'Fermer',
            confirmButtonColor: ' #007BFF',
            width: '80%',
            padding: '10px',
            background: '#fff',
            customClass: {
                popup: 'swal2-popup',

            }

        });
    });
}
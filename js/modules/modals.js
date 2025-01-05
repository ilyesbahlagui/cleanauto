export function initModals() {
    // Obtenir les modales
    var legalModal = document.getElementById("legalModal");
    var termsModal = document.getElementById("termsModal");

    // Obtenir les liens qui ouvrent les modales
    var openLegalModalLink = document.getElementById("openLegalModal");
    var openTermsModalLink = document.getElementById("openTermsModal");

    // Obtenir les éléments <span> qui ferment les modales
    var closeLegalModalBtn = document.getElementById("closeLegalModal");
    var closeTermsModalBtn = document.getElementById("closeTermsModal");

    // Quand l'utilisateur clique sur le lien, ouvrir la modale correspondante
    openLegalModalLink.onclick = function (event) {
        event.preventDefault();
        legalModal.style.display = "block";
    }

    openTermsModalLink.onclick = function (event) {
        event.preventDefault();
        termsModal.style.display = "block";
    }

    // Quand l'utilisateur clique sur <span> (x), fermer la modale correspondante
    closeLegalModalBtn.onclick = function () {
        legalModal.style.display = "none";
    }

    closeTermsModalBtn.onclick = function () {
        termsModal.style.display = "none";
    }

    // Quand l'utilisateur clique n'importe où en dehors de la modale, la fermer
    window.onclick = function (event) {
        if (event.target == legalModal) {
            legalModal.style.display = "none";
        }
        if (event.target == termsModal) {
            termsModal.style.display = "none";
        }
    }
}
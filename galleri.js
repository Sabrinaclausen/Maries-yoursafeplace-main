// Vælg overlay-elementet, billedet i overlay, billed-caption og lukkeknap
const galleriOverlay = document.querySelector('.galleri-overlay');
const galleriOverlayImg = document.querySelector('.galleri-overlay-img');
const galleriOverlayCaption = document.querySelector('.galleri-overlay-img-caption');
const galleriCloseOverlayButton = document.querySelector('.galleri-overlay-close-button');
// Vælg alle billeder i galleriet
const galleriImages = document.querySelectorAll('.galleri-img');

// Åbn galleri overlay ved klik - dækker alle billeder
galleriImages.forEach((img) => {
    img.addEventListener('click', () => {

        // Sæt overlay-billedet kilde til det valgte billede
        galleriOverlayImg.src = img.src;

        // Sæt billedteksten fra dataset 'caption'
        galleriOverlayCaption.textContent = img.dataset.caption || '';

        // Vis overlayet, da det som standard er skjult
        galleriOverlay.style.display = 'flex';

        // 10ms timer til visning
        setTimeout(() => galleriOverlay.classList.add('active'), 10);
    });
});

// Luk overlay ved at klikke udenfor billedet eller på lukkeknappen
galleriOverlay.addEventListener('click', (e) => {

    // Hvis der klikkes udenfor billedet eller på lukkeknappen
    if (e.target === galleriOverlay || e.target.closest('.galleri-overlay-close-button')) {

        // Fjerner .active-class 
        galleriOverlay.classList.remove('active');

        // Skjuler overlay efter 300ms
        setTimeout(() => galleriOverlay.style.display = 'none', 300);
    }  
});
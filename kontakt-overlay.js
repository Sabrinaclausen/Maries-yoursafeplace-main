// -- Kontakt-overlay JavaScript --

// Henter elementer fra DOM

// Hele overlay-baggrunden
const kontaktOverlay = document.querySelector('.kontakt-overlay');
// Luk-knappen i overlay
const closeOverlayButton = document.querySelector('.luk-kontakt-overlay');
// Knappen til at åbne overlay
const bookButton = document.querySelector('.book-button');


// Til åbning af overlay
function openOverlay () {
  // Sætter display til flex for at vise overlay
  kontaktOverlay.style.display = 'flex'; 
  
  // Tilføjer .active class for animation
  setTimeout(() => kontaktOverlay.classList.add('active'), 10); 
}

// Til lukning af overlay
function closeOverlay() {

  // Fjerner .active class for at starte lukke-animation
  kontaktOverlay.classList.remove('active');

  // Sætter display til none efter animationen er færdig
  setTimeout(() => kontaktOverlay.style.display = 'none', 300); 
}

// Event listeners for knapper

// Åbner overlay ved klik på book-button
bookButton.addEventListener('click', openOverlay); 

// Lukker overlay ved klik på luk-knap
closeOverlayButton.addEventListener('click', closeOverlay); 

// Lukker overlay ved klik udenfor indholdet
kontaktOverlay.addEventListener('click', (e) => {
    if (e.target === kontaktOverlay) {
      closeOverlay();
    }
});
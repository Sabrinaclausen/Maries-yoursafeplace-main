// Vælg slider-elementet i DOM
const slider = document.querySelector('.slider-event-images');

// Variabler til træk-og-slip funktionalitet
let isDown = false; // Er musen nede?
let startX; // Startposition for musen
let scrollLeft; // Start scroll-position
let isDragging = false; // Markerer om der trækkes
let velocity = 0; // Hastighed for momentum-scroll
let lastX = 0; // Sidste X-position
let momentumFrame; // Animation frame ID - reference til momentum

// Funktioner til træk-og-slip med momentum (mousedown / touchstart)
const start = (e) => {
  // Stop eventuel igangværende momentum-scroll ved nyt drag
  cancelAnimationFrame(momentumFrame);

  isDown = true;
  isDragging = false;

  // Få X-positionen fra mus eller touch
  const x = e.pageX || e.touches?.[0].pageX;
  startX = x; // Gem start X-position
  scrollLeft = slider.scrollLeft; // Gem start scroll-position
  lastX = x; // Bruges til at beregne hastighed - senere

  slider.classList.add('active'); // Tilføj klasse for styling ved træk
}

// Funktion til bevægelse under træk/drag (mousemove / touchmove)
const move = (e) => {
  if (!isDown) return; // Stop hvis musen ikke er nede/trækkes/dragges

  const x = e.pageX || e.touches?.[0].pageX;
  const walk = x - startX; // Beregn afstand trukket
  slider.scrollLeft = scrollLeft - walk; // Opdater scroll-position

  // Beregn hastighed for momentum
  velocity = lastX - x;
  lastX = x;

  // Marker som træk/drag hvis bevægelsen er mere end 2px
  if (Math.abs(walk) > 2) isDragging = true;

  e.preventDefault(); // Forhindrer standard scroll-adfærd
}

// Funktion til afslutning af træk/drag (mouseup / touchend / mouseleave)
const end = () => {
  isDown = false;
  slider.classList.remove('active');

  // Start momentum-scroll hvis der blev trukket
  if (isDragging) {
    momentumScroll();
  }
}

// Funktion til momentum-scroll efter træk/drag
const momentumScroll = () => {
  // Stop hvis hastigheden er meget lav
  if (Math.abs(velocity) < 0.1) return;

  slider.scrollLeft += velocity; // Opdater scroll-position baseret på hastighed
  velocity *= 0.95; // Anvend friktion for at mindske hastigheden
  momentumFrame = requestAnimationFrame(momentumScroll); // Fortsæt animationen
}

// Til at forhindre klik-events under træk/drag
slider.addEventListener('click', (e) => {
  if (isDragging) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Event listeners
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start, { passive: false });

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move, { passive: false });

    slider.addEventListener('mouseleave', end);
    document.addEventListener('mouseup', end);
    document.addEventListener('touchend', end);


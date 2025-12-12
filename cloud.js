let slideIndex = 1;
let autoTimer = null;

// Vis første slide
showSlides(slideIndex);

// Skift slide frem eller tilbage (pile)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hop direkte til et slide (hjerter)
function currentSlide(n) {
  showSlides(slideIndex = n);
}


// Viser det rigtige slide og opdaterer indikatorer
function showSlides(n) {
  let i;

// Hent alle slides og hjerter
const slides = document.getElementsByClassName("review-card");
const dots = document.getElementsByClassName("dot-heart");


// Stop hvis der ikke er nogen slides
if (slides.length === 0) return;

// Hvis man går videre fra sidste slide, start forfra
if (n > slides.length) {
  slideIndex = 1;
}

// Hvis man går baglæns fra første slide, gå til sidste
if (n < 1) {
  slideIndex = slides.length;
}

// Skjul alle slides, så kun ét vises ad gangen
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// Fjern markering fra alle hjerter
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active-heart", "");
}

// Vis det slide der er aktivt
slides[slideIndex - 1].style.display = "block";

// Marker det tilsvarende hjerte som aktivt
if (dots[slideIndex - 1]) {
  dots[slideIndex - 1].className += " active-heart";
}

// Nulstil timer og skift automatisk til næste slide
clearTimeout(autoTimer);
autoTimer = setTimeout(function () {
  plusSlides(1);
}, 10000);
}


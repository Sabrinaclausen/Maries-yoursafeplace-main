// Når man klikker på burger-ikonet, åbnes/lukkes mobilmenuen
document.getElementById("burgericon").addEventListener("click", function () {
  const menu = document.getElementById("mobilnav");
  menu.classList.toggle("active"); // viser eller skjuler menuen
});

// Når man klikker på kryds-ikonet, lukkes mobilmenuen
document.getElementById("closeicon").addEventListener("click", function () {
  const menu = document.getElementById("mobilnav");
  menu.classList.remove("active"); // fjern 'active' = luk menuen
});


// Hent alle links med undertitler (dem der åbner dropdowns)
const toggles = document.querySelectorAll('.toggle-submenu');

// Gå igennem hvert toggle-element og tilføj klik-event
toggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault(); 
        // Forældreelementet er .mobile-menu-item
        const parent = toggle.parentElement;
        // Skifter mellem at vise/skjule undermenu
        parent.classList.toggle('open'); 
      });
});

// Når man scroller på siden, ændrer vi headerens udseende
document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    // Når man scroller mere end 500px ned, tilføjes klassen "scrolled"
    if (window.scrollY > 500) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled"); // fjern klasssen når man scroller op igen
    }
});
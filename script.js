document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('burgerToggle');
  const navLinks = document.getElementById('navLinks');

  if (burgerToggle && navLinks) {
    // Klick auf das Burger-Icon: Menü umschalten und Burger animieren
    burgerToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      burgerToggle.classList.toggle('is-active');
      navLinks.classList.toggle('nav-open');
    });

    // Klick auf einen Menü-Link: Menü wieder schließen
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burgerToggle.classList.remove('is-active');
        navLinks.classList.remove('nav-open');
      });
    });

    // Klick außerhalb des Menüs schließt es automatisch
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !burgerToggle.contains(e.target)) {
        burgerToggle.classList.remove('is-active');
        navLinks.classList.remove('nav-open');
      }
    });
  }
});
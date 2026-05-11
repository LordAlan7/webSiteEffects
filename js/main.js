// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const navToggleBtns = document.querySelectorAll('.nav-toggle');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  const mobileNavLinks = mobileNavMenu.querySelectorAll('.nav__link');
  
  const toggleMenu = () => {
    mobileNavMenu.classList.toggle('is-open');
  };

  if(navToggleBtns.length && mobileNavMenu) {
      navToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
      mobileNavLinks.forEach(link => link.addEventListener('click', () => {
         if(mobileNavMenu.classList.contains('is-open')) toggleMenu();
      }));
  }

  // Scroll Animations using Intersection Observer
  const fadeUpElements = document.querySelectorAll('.fade-in-up');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  if(window.IntersectionObserver) {
      const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once it has faded in
            // observer.unobserve(entry.target); 
          }
        });
      }, observerOptions);

      fadeUpElements.forEach(el => scrollObserver.observe(el));
  } else {
      // Fallback
      fadeUpElements.forEach(el => el.classList.add('visible'));
  }
});

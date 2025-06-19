// Menu burger mobile
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobileMenu = document.getElementById('closeMobileMenu');

navBurger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

// Fermer le menu si on clique sur un lien du menu mobile
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Animation d'apparition des sections au scroll
const animatedSections = document.querySelectorAll('.hero-section, .about-section, .skills-section, .projects-section, .contact-section');
const projectCards = document.querySelectorAll('.projects-section .project-card');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.92;
  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight * 0.95) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Préparation pour le menu burger et les animations (à venir) 
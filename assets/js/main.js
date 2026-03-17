// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10,10,15,0.97)';
  } else {
    nav.style.background = 'rgba(10,10,15,0.85)';
  }
});

// Smooth stagger for grid cards
document.querySelectorAll('.skills-grid .skill-card, .projects-grid .project-card, .certs-grid .cert-item').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.07}s`;
});

// Proteger email de bots
document.querySelectorAll('[data-email]').forEach(el => {
  const email = el.getAttribute('data-email');
  el.href = 'mailto:' + email;
  el.textContent = email;
});
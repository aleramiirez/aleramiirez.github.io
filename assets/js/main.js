// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));

// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ─── AMBIENT SPOTLIGHT ───
window.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
}, { passive: true });

// Stagger cards
document.querySelectorAll('.skills-grid .skill-card, .certs-grid .cert-item').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.07}s`;
});

// ─── PROJECT MODAL ───
const overlay = document.getElementById('project-overlay');

function openProject(id) {
  const modal = document.getElementById('modal-' + id);
  if (!modal) return;

  document.body.style.overflow = 'hidden';

  overlay.classList.add('active');
  requestAnimationFrame(() => overlay.classList.add('visible'));

  modal.classList.add('active');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => modal.classList.add('visible'));
  });
}

function closeProject() {
  document.body.style.overflow = '';

  overlay.classList.remove('visible');
  document.querySelectorAll('.project-modal.visible').forEach(m => m.classList.remove('visible'));

  setTimeout(() => {
    overlay.classList.remove('active');
    document.querySelectorAll('.project-modal.active').forEach(m => m.classList.remove('active'));
  }, 400);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProject();
});

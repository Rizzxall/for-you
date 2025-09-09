// Navigation toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  mobileNavOverlay.classList.toggle('show');
  // Animate hamburger to X
  navToggle.classList.toggle('open');
});

mobileNavOverlay.addEventListener('click', () => {
  nav.classList.remove('open');
  mobileNavOverlay.classList.remove('show');
  navToggle.classList.remove('open');
});

// Hamburger animation
navToggle.addEventListener('click', () => {
  const hamburger = navToggle.querySelector('.hamburger');
  if (navToggle.classList.contains('open')) {
    hamburger.style.backgroundColor = 'transparent';
    hamburger.style.transform = 'rotate(45deg)';
    hamburger.style.position = 'relative';
    hamburger.style.top = '0';
    hamburger.style.left = '0';
    hamburger.style.marginBottom = '6px';
    hamburger.style.transition = 'transform 0.3s ease';

    hamburger::before = null;
    hamburger::after = null;
  } else {
    hamburger.style.backgroundColor = '#fff';
    hamburger.style.transform = 'rotate(0deg)';
  }
});

// Simple "Request a Quote" button action
const requestQuoteBtn = document.getElementById('requestQuoteBtn');
requestQuoteBtn.addEventListener('click', () => {
  alert('Thank you for your interest! A representative will contact you soon.');
});

// Smooth scroll and active link highlight

const navLinks = document.querySelectorAll('.nav-link');
const sections = [...navLinks].map(link => document.querySelector(link.getAttribute('href')));
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  // Change navbar style on scroll
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Highlight nav links based on scroll position
  let currentIndex = sections.findIndex((section) => {
    return window.scrollY >= section.offsetTop - nav.offsetHeight - 10;
  });
  currentIndex = currentIndex === -1 ? 0 : currentIndex;

  navLinks.forEach(link => link.classList.remove('active'));
  if (navLinks[currentIndex]) {
    navLinks[currentIndex].classList.add('active');
  }
});

// Contact form submission (just demo with message)
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple form validation can be expanded
  formStatus.textContent = 'Sending message...';

  setTimeout(() => {
    formStatus.textContent = 'Thank you for contacting me! I will get back to you soon.';
    form.reset();
  }, 1500);
});

// main.js — Theme toggle + contact form handling

// ===== Theme Toggle (dark / light) =====
const themeToggle = document.getElementById('theme-toggle');

// Load saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  if (current === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

// ===== Contact Form =====
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all fields.';
      formStatus.className = 'form-status error';
      formStatus.style.display = 'block';
      return;
    }

    // Simulate sending — in a real site this would POST to a backend
    formStatus.textContent = `Thanks, ${name}! Your message has been noted. (This is a demo — no email was actually sent.)`;
    formStatus.className = 'form-status success';
    formStatus.style.display = 'block';
    contactForm.reset();
  });
}

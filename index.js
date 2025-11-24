const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const faqItems = document.querySelectorAll('.faq-item');
const leadForm = document.querySelector('#leadForm');
const formFeedback = document.querySelector('#formFeedback');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('open');
  });
});

faqItems.forEach((item) => {
  const header = item.querySelector('header');
  header?.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const name = formData.get('nome');
  formFeedback.textContent = `Obrigado, ${name}! Preparamos um plano personalizado e entraremos em contato em até 24h.`;
  leadForm.reset();
});

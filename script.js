const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card[data-category]');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach((card) => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    });
  });
});

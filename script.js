// Mobile navigation
const toggle = document.querySelector('.nav__toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  links.classList.toggle('is-open', !open);
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('is-open');
  })
);

// Menu tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      const active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
      document.getElementById(t.getAttribute('aria-controls')).hidden = !active;
    });
  });
});

// "Jetzt geöffnet"-Hinweis (Schließzeit 23:00 Uhr, Berliner Zeit).
// Öffnungsbeginn hier anpassen, sobald die genauen Zeiten feststehen.
const OPEN_HOUR = 11;
const CLOSE_HOUR = 23;
try {
  const hour = Number(new Intl.DateTimeFormat('de-DE', {
    hour: 'numeric', hour12: false, timeZone: 'Europe/Berlin'
  }).format(new Date()));
  const status = document.getElementById('open-status');
  if (hour >= OPEN_HOUR && hour < CLOSE_HOUR) {
    status.classList.add('is-open');
    status.textContent = 'Jetzt geöffnet · bis 23:00 Uhr';
  }
} catch (e) { /* ignore */ }

document.getElementById('year').textContent = new Date().getFullYear();

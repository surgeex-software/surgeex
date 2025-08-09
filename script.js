// Minimal JS: form handling, small UX touches, and accessibility improvements.
document.addEventListener('DOMContentLoaded', function () {
  // set year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // simple form submit (no backend) - show quick thank you message
  const form = document.getElementById('startForm');
  if (form) {
    form.onsubmit = function (e) {
      e.preventDefault();
      const name = form.name.value.trim() || 'Friend';
      alert(`Thanks ${name}! Your request is recorded. We'll review and email you soon.`);
      form.reset();
    };
  }

  // CTA button scroll
  const cta = document.getElementById('ctaBtn');
  if (cta) {
    cta.addEventListener('click', () => {
      document.getElementById('start').scrollIntoView({behavior:'smooth'});
    });
  }
});
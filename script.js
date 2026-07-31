// Reveal sections and trace the "bloom ring" eyebrow icon as it scrolls into view.
(function () {
  const targets = document.querySelectorAll('.reveal, .eyebrow');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => io.observe(t));

  // Mobile nav toggle (simple show/hide, no extra markup needed beyond .nav-links)
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.cssText += open ? '' : 'position:absolute; top:76px; left:0; right:0; flex-direction:column; background:var(--cream); padding:24px var(--gutter); gap:20px; border-bottom:1px solid rgba(59,46,35,0.1);';
    });
  }
})();

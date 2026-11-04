(function () {
  var root = document.documentElement;
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('theme-toggle').addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  var lt = document.getElementById('lang-toggle');
  if (lt) {
    var sync = function () { lt.textContent = root.dataset.lang === 'ta' ? 'English' : 'தமிழ்'; };
    sync();
    lt.addEventListener('click', function () {
      var next = root.dataset.lang === 'ta' ? 'en' : 'ta';
      root.dataset.lang = next;
      root.lang = next;
      sync();
      try { localStorage.setItem('lang', next); } catch (e) {}
    });
  }
})();

// scroll animations: reveal on view + timeline progress line
(function () {
  window.__reveal = true;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.steps > li, .timeline > li, .card, .family, .note, .about-grid > *, section.wrap > h2');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el, i) {
      if (el.classList.contains('card')) el.style.transitionDelay = (i % 3) * 90 + 'ms';
      io.observe(el);
    });
  }

  var lines = document.querySelectorAll('.steps, .timeline');
  if (!lines.length) return;
  var ticking = false;
  function update() {
    ticking = false;
    var mid = window.innerHeight * 0.6;
    lines.forEach(function (ol) {
      var r = ol.getBoundingClientRect();
      var p = (mid - r.top) / r.height;
      ol.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
    });
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
})();

// mobile menu
(function () {
  var nav = document.querySelector('.nav'), btn = document.getElementById('menu-toggle');
  if (!nav || !btn) return;
  function set(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function (e) { e.stopPropagation(); set(!nav.classList.contains('open')); });
  nav.querySelectorAll('.links a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  addEventListener('resize', function () { if (innerWidth > 680) set(false); });
})();

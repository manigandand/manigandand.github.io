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

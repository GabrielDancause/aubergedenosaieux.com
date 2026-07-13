(function() {
  // Supports both the legacy nav (.nav-hamburger / .nav-links) and the
  // redesigned nav (.nav__toggle / .nav__links).
  var btn = document.querySelector('.nav-hamburger, .nav__toggle');
  var nav = document.querySelector('.nav-links, .nav__links');
  if (!btn || !nav) return;

  function spans() { return btn.querySelectorAll('span'); }
  function setState(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    var s = spans();
    if (s.length === 3) {
      s[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
      s[1].style.opacity = open ? '0' : '1';
      s[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
    }
  }

  btn.addEventListener('click', function() {
    setState(!nav.classList.contains('open'));
  });
  document.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && !nav.contains(e.target) && nav.classList.contains('open')) {
      setState(false);
    }
  });
})();

/* ============================================================
   YAKDEVS — Shared JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── CUSTOM CURSOR ── */
  var cursor = document.getElementById('cursor');
  var ring   = document.getElementById('cursorRing');
  if (cursor && ring) {
    var mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = (mx - 5) + 'px';
      cursor.style.top  = (my - 5) + 'px';
    });
    (function loop() {
      rx += (mx - rx - 18) * 0.1;
      ry += (my - ry - 18) * 0.1;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a, button').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.style.transform = 'scale(2.4)';
        ring.style.opacity = '.12';
        ring.style.transform = 'scale(1.8)';
      });
      el.addEventListener('mouseleave', function () {
        cursor.style.transform = 'scale(1)';
        ring.style.opacity = '.4';
        ring.style.transform = 'scale(1)';
      });
    });
  }

  /* ── NAVBAR SCROLL ── */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  /* ── SCROLL REVEAL ── */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.08 });
    revealEls.forEach(function (el) { obs.observe(el); });
  }

  /* ── CARD RADIAL HOVER ── */
  document.querySelectorAll('[data-radial]').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top)  + 'px');
    });
  });

  /* ── MARQUEE DUPLICATE ── */
  var track = document.getElementById('marquee');
  if (track) track.innerHTML += track.innerHTML;

  /* ── XP BAR ANIMATE ── */
  var xpFill = document.getElementById('xpFill');
  if (xpFill) {
    setTimeout(function () { xpFill.style.width = '72%'; }, 900);
  }

});

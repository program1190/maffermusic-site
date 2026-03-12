/* ============================================================
   Maffer Music — main.js
   Minimal JS: mobile nav toggle only. Everything else is CSS.
   ============================================================ */

(function () {
  'use strict';

  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked (mobile)
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Blog page: simple filter buttons (no framework needed)
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('filter-btn--active'); });
        btn.classList.add('filter-btn--active');
        // Filter logic can be expanded here once articles are real
        // For now this just updates the active state
      });
    });
  }

})();

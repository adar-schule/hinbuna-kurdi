/**
 * Shared Footer — Hinbuna Kurdi
 * Single source of truth for all page footers.
 * One identical footer on every page.
 *
 * Usage:
 *   <div id="shared-footer"></div>
 *   <link rel="stylesheet" href="shared/footer.css">
 *   <script src="shared/footer.js"></script>
 */
(function () {
  'use strict';

  // ============================================================
  // SVG Templates
  // ============================================================

  // Same golden sun icon as the header — exact match
  var LOGO_SVG =
    '<svg class="footer-logo-leaf" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<polygon points="50.0,5.0 53.0,30.2 63.3,7.0 58.7,32.0 75.3,12.8 63.6,35.3 85.2,21.9 67.3,40.0 91.9,33.6 69.5,45.6 94.9,46.6 69.9,51.5 93.9,60.0 68.6,57.3 89.0,72.5 65.6,62.5 80.6,83.0 61.3,66.5 69.5,90.5 55.9,69.1 56.7,94.5 50.0,70.0 43.3,94.5 44.1,69.1 30.5,90.5 38.7,66.5 19.4,83.0 34.4,62.5 11.0,72.5 31.4,57.3 6.1,60.0 30.1,51.5 5.1,46.6 30.5,45.6 8.1,33.6 32.7,40.0 14.8,21.9 36.4,35.3 24.7,12.8 41.3,32.0 36.7,7.0 47.0,30.2" fill="#D4A843"/>' +
      '<circle cx="50" cy="50" r="16" fill="#D4A843"/>' +
    '</svg>';

  var GEAR_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="3"/>' +
      '<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>' +
    '</svg>';

  // ============================================================
  // Build footer HTML — identical on every page
  // ============================================================

  function buildFooter() {
    var html = '';

    html += '<footer class="shared-footer">';
    html += '<div class="shared-footer-inner">';

    // Brand (logo + tagline)
    html += '<div class="shared-footer-brand">';
    html += '<div class="shared-footer-logo">';
    html += LOGO_SVG;
    html += '<span class="shared-footer-logo-text">Hinb\u00fbna Kurd\u00ee</span>';
    html += '</div>';
    html += '<p class="shared-footer-tagline">F\u00earb\u00fbna ziman\u00ea kurd\u00ee</p>';
    html += '</div>';

    // Nav links
    html += '<nav class="shared-footer-links">';
    html += '<a href="#" class="shared-footer-link">Derbar\u00ea</a>';
    html += '<span class="shared-footer-dot">\u00b7</span>';
    html += '<a href="#" class="shared-footer-link">Pol\u00eet\u00eekaya Nih\u00ean\u00eey\u00ea</a>';
    html += '<span class="shared-footer-dot">\u00b7</span>';
    html += '<a href="#" class="shared-footer-link">\u015eert \u00fb Mercan</a>';
    html += '<span class="shared-footer-dot">\u00b7</span>';
    html += '<a href="#" class="shared-footer-link">T\u00eakil\u00ee</a>';
    html += '</nav>';

    // Copyright row with gear
    html += '<div class="shared-footer-bottom">';
    html += '<p class="shared-footer-copyright">\u00a9 2026 Adar Schule</p>';
    html += '<button class="shared-footer-gear" id="footer-settings-gear" aria-label="Settings" title="M\u00eeheng">';
    html += GEAR_SVG;
    html += '</button>';
    html += '</div>';

    html += '</div>'; // .shared-footer-inner
    html += '</footer>';

    return html;
  }

  // ============================================================
  // Initialize
  // ============================================================

  function init() {
    var placeholder = document.getElementById('shared-footer');
    if (!placeholder) return;

    placeholder.outerHTML = buildFooter();

    // Bind gear button → opens settings drawer (from settings.js)
    var gearBtn = document.getElementById('footer-settings-gear');
    if (gearBtn) {
      gearBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (window.HKSettings && HKSettings.open) {
          HKSettings.open();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

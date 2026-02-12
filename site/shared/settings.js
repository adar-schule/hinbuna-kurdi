/**
 * Shared Settings Drawer — Hinbuna Kurdi
 * Slide-up panel with color theme picker.
 *
 * Depends on: shared/theme.js (HK.setColorTheme, HK.getColorTheme)
 * Called by: shared/footer.js (gear button triggers HKSettings.open())
 *
 * Usage:
 *   <link rel="stylesheet" href="shared/settings.css">
 *   <script src="shared/theme.js"></script>
 *   <script src="shared/settings.js"></script>
 *
 * API:
 *   HKSettings.open()   — open the drawer
 *   HKSettings.close()  — close the drawer
 */
(function () {
  'use strict';

  // ============================================================
  // SVG Icons
  // ============================================================

  var CLOSE_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="18" y1="6" x2="6" y2="18"/>' +
      '<line x1="6" y1="6" x2="18" y2="18"/>' +
    '</svg>';

  var CHECK_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<polyline points="20 6 9 17 4 12"/>' +
    '</svg>';

  // ============================================================
  // Theme swatch colors (visual preview per theme)
  // ============================================================

  var THEME_SWATCHES = {
    'forest-green': {
      label: 'Forest Green',
      desc: 'Warm & welcoming',
      light: { bg: '#FDF8F3', primary: '#2D5A3D', accent: '#D4A843' },
      dark:  { bg: '#1A2F23', primary: '#7BC4A0', accent: '#D4A843' }
    },
    'midnight-green': {
      label: 'Midnight Green',
      desc: 'Deep & immersive',
      light: { bg: '#FDF8F3', primary: '#2D5A3D', accent: '#D4A843' },
      dark:  { bg: '#141E1A', primary: '#4A9B6A', accent: '#D4A843' }
    },
    'warm-charcoal': {
      label: 'Warm Charcoal',
      desc: 'Neutral & focused',
      light: { bg: '#FDF8F3', primary: '#2D5A3D', accent: '#D4A843' },
      dark:  { bg: '#1C1E1D', primary: '#6BAF8A', accent: '#D4A843' }
    },
    'dark-slate': {
      label: 'Dark Slate',
      desc: 'Cool & modern',
      light: { bg: '#FDF8F3', primary: '#2D5A3D', accent: '#D4A843' },
      dark:  { bg: '#1A2024', primary: '#5EA88B', accent: '#D4A843' }
    }
  };

  // ============================================================
  // Build drawer HTML
  // ============================================================

  function buildDrawer() {
    var currentTheme = (window.HK && HK.getColorTheme) ? HK.getColorTheme() : 'forest-green';
    var html = '';

    // Backdrop
    html += '<div class="settings-backdrop" id="settings-backdrop"></div>';

    // Drawer
    html += '<div class="settings-drawer" id="settings-drawer">';

    // Handle bar (mobile drag hint)
    html += '<div class="settings-handle"><span class="settings-handle-bar"></span></div>';

    // Header
    html += '<div class="settings-drawer-header">';
    html += '<span class="settings-drawer-title">M\u00eeheng</span>';
    html += '<button class="settings-close-btn" id="settings-close" aria-label="Close">' + CLOSE_SVG + '</button>';
    html += '</div>';

    // Theme section
    html += '<div class="settings-section">';
    html += '<span class="settings-section-label">Reng\u00ea temay\u00ea</span>';
    html += '<div class="settings-themes" id="settings-themes">';

    var themeIds = Object.keys(THEME_SWATCHES);
    for (var i = 0; i < themeIds.length; i++) {
      var id = themeIds[i];
      var swatch = THEME_SWATCHES[id];
      var isActive = (id === currentTheme) ? ' active' : '';

      html += '<button class="settings-theme-card' + isActive + '" data-theme-id="' + id + '">';

      // Swatch preview — split light|dark
      html += '<div class="settings-swatch">';
      html += '<div class="settings-swatch-half" style="background:' + swatch.light.bg + '">';
      html += '<span class="settings-swatch-dot" style="background:' + swatch.light.primary + '"></span>';
      html += '<span class="settings-swatch-dot sm" style="background:' + swatch.light.accent + '"></span>';
      html += '</div>';
      html += '<div class="settings-swatch-half" style="background:' + swatch.dark.bg + '">';
      html += '<span class="settings-swatch-dot" style="background:' + swatch.dark.primary + '"></span>';
      html += '<span class="settings-swatch-dot sm" style="background:' + swatch.dark.accent + '"></span>';
      html += '</div>';
      html += '</div>';

      // Label
      html += '<div class="settings-theme-info">';
      html += '<span class="settings-theme-name">' + swatch.label + '</span>';
      html += '<span class="settings-theme-desc">' + swatch.desc + '</span>';
      html += '</div>';

      // Check mark
      html += '<span class="settings-theme-check">' + CHECK_SVG + '</span>';

      html += '</button>';
    }

    html += '</div>'; // .settings-themes
    html += '</div>'; // .settings-section

    html += '</div>'; // .settings-drawer

    return html;
  }

  // ============================================================
  // Open / Close
  // ============================================================

  function openDrawer() {
    var drawer = document.getElementById('settings-drawer');
    var backdrop = document.getElementById('settings-backdrop');
    if (drawer && backdrop) {
      backdrop.classList.add('open');
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    var drawer = document.getElementById('settings-drawer');
    var backdrop = document.getElementById('settings-backdrop');
    if (drawer && backdrop) {
      backdrop.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // ============================================================
  // Update active state
  // ============================================================

  function updateActiveTheme(themeId) {
    var cards = document.querySelectorAll('.settings-theme-card');
    cards.forEach(function (card) {
      card.classList.toggle('active', card.getAttribute('data-theme-id') === themeId);
    });
  }

  // ============================================================
  // Initialize
  // ============================================================

  function init() {
    // Inject drawer into body
    var container = document.createElement('div');
    container.id = 'settings-container';
    container.innerHTML = buildDrawer();
    document.body.appendChild(container);

    // Bind close button
    var closeBtn = document.getElementById('settings-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    // Bind backdrop
    var backdrop = document.getElementById('settings-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
    }

    // Bind theme cards
    var cards = document.querySelectorAll('.settings-theme-card');
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        var themeId = card.getAttribute('data-theme-id');
        if (window.HK && HK.setColorTheme) {
          HK.setColorTheme(themeId);
        }
        updateActiveTheme(themeId);
      });
    });

    // Escape key closes drawer
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ============================================================
  // Public API
  // ============================================================

  window.HKSettings = {
    open: openDrawer,
    close: closeDrawer
  };
})();

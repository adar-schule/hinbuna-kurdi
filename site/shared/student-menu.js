/**
 * Shared Student Menu — Hinbuna Kurdi
 * Injects hamburger button + slide-out navigation drawer into any student screen.
 *
 * Usage:
 *   <link rel="stylesheet" href="shared/student-menu.css">
 *   <script src="shared/student-menu.js" data-active="home"></script>
 *
 *   data-active values: "home" | "courses" | "profile" | "settings"
 *
 * The script auto-detects the header (.app-header / .lesson-header)
 * and appends the hamburger button + drawer to the page.
 *
 * Note: All HTML is hardcoded static content (no user input), so
 * insertAdjacentHTML usage is safe — no untrusted data is injected.
 */
(function () {
  'use strict';

  // Detect which nav item should be active
  var scriptTag = document.currentScript;
  var activePage = scriptTag ? scriptTag.getAttribute('data-active') : '';

  // ============================================================
  // Language & Theme data
  // ============================================================

  var LANGUAGES = [
    { code: 'ku', label: 'Kurd\u00ee' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'sv', label: 'Svenska' },
    { code: 'da', label: 'Dansk' },
    { code: 'it', label: 'Italiano' },
    { code: 'tr', label: 'T\u00fcrk\u00e7e' },
    { code: 'fa', label: '\u0641\u0627\u0631\u0633\u06CC', dir: 'rtl' },
    { code: 'ar', label: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', dir: 'rtl' }
  ];

  var THEMES = {
    'forest-green':   'Forest Green',
    'midnight-green': 'Midnight Green',
    'warm-charcoal':  'Warm Charcoal',
    'dark-slate':     'Dark Slate'
  };

  // ============================================================
  // SVG icons (all static, no user input)
  // ============================================================

  var HAMBURGER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  var CLOSE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  function icon(d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  }

  var HOME_SVG = icon('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>');

  var GLOBE_SVG = icon('<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>');

  var PALETTE_SVG = icon('<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.7 1.5-1.5 0-.4-.1-.7-.4-1-.3-.3-.4-.7-.4-1.1 0-.8.7-1.5 1.5-1.5H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.9-10-9.9z"/><circle cx="7.5" cy="11.5" r="1.5" fill="currentColor"/><circle cx="10.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="18" cy="11.5" r="1.5" fill="currentColor"/>');

  var CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  var CHEVRON_SVG = '<svg class="menu-expand-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

  var NAV_ITEMS = [
    { id: 'courses',  href: 'S2-course-list.html',  label: 'Courses',  icon: icon('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>') },
    { id: 'profile',  href: '#',                     label: 'Profile',  icon: icon('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'), disabled: true },
    { id: 'settings', href: 'S10-settings.html',     label: 'Settings', icon: icon('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'), disabled: false },
  ];

  var EXTRA_ITEMS = [
    { type: 'separator' },
    { id: 'premium',  href: '#', label: 'Go Premium', icon: icon('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'), cls: 'premium', disabled: true },
    { id: 'help',     href: '#', label: 'Help',       icon: icon('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'), disabled: true },
    { type: 'separator' },
    { id: 'logout',   href: 'P3-login.html', label: 'Logout', icon: icon('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'), cls: 'danger' },
  ];

  // ============================================================
  // Helpers
  // ============================================================

  function getCurrentLang() {
    return localStorage.getItem('hk-lang') || 'en';
  }

  function getLangLabel(code) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) return LANGUAGES[i].label;
    }
    return 'English';
  }

  function getCurrentColorTheme() {
    return (window.HK && HK.getColorTheme) ? HK.getColorTheme() : 'forest-green';
  }

  function getThemeLabel(id) {
    return THEMES[id] || 'Forest Green';
  }

  // ============================================================
  // Build drawer HTML (all static content, safe to inject)
  // ============================================================
  function buildDrawer() {
    var html = '';
    var currentLang = getCurrentLang();
    var currentTheme = getCurrentColorTheme();

    // Overlay
    html += '<div class="menu-overlay" id="menu-overlay"></div>';

    // Drawer
    html += '<nav class="menu-drawer" id="menu-drawer" aria-label="Main navigation">';

    // Drawer header (user info)
    html += '<div class="menu-drawer-header">';
    html += '<div class="menu-user">';
    html += '<div class="menu-avatar">AK</div>';
    html += '<div class="menu-user-info">';
    html += '<span class="menu-user-name">Azad Kurd</span>';
    html += '<span class="menu-user-level">Level 4 &middot; 1,250 XP</span>';
    html += '</div>';
    html += '</div>';
    html += '<button class="menu-close-btn" id="menu-close" aria-label="Close menu">' + CLOSE_SVG + '</button>';
    html += '</div>';

    // Nav items
    html += '<div class="menu-nav">';

    NAV_ITEMS.forEach(function (item) {
      var isActive = item.id === activePage;
      var cls = 'menu-nav-item' + (isActive ? ' active' : '');
      if (item.disabled && !isActive) {
        html += '<a href="#" class="' + cls + '" onclick="return false;" style="opacity:0.5;">' + item.icon + item.label + '</a>';
      } else {
        html += '<a href="' + item.href + '" class="' + cls + '">' + item.icon + item.label + '</a>';
      }
    });

    // ---- Language picker (expandable) ----
    html += '<div class="menu-separator"></div>';

    html += '<button class="menu-nav-item menu-expandable-toggle" id="menu-lang-toggle" aria-expanded="false">';
    html += GLOBE_SVG;
    html += '<span class="menu-expand-label">' + getLangLabel(currentLang) + '</span>';
    html += CHEVRON_SVG;
    html += '</button>';

    html += '<div class="menu-expandable-panel" id="menu-lang-panel">';
    html += '<div class="menu-expandable-inner">';
    for (var i = 0; i < LANGUAGES.length; i++) {
      var lang = LANGUAGES[i];
      var isLangActive = lang.code === currentLang;
      var dirAttr = lang.dir ? ' dir="' + lang.dir + '"' : '';
      html += '<button class="menu-sub-item' + (isLangActive ? ' active' : '') + '" data-lang="' + lang.code + '"' + dirAttr + '>';
      html += '<span class="menu-sub-item-label">' + lang.label + '</span>';
      if (isLangActive) {
        html += '<span class="menu-sub-item-check">' + CHECK_SVG + '</span>';
      }
      html += '</button>';
    }
    html += '</div>'; // .menu-expandable-inner
    html += '</div>'; // .menu-expandable-panel

    // ---- Color Theme picker (expandable) ----
    html += '<button class="menu-nav-item menu-expandable-toggle" id="menu-theme-toggle" aria-expanded="false">';
    html += PALETTE_SVG;
    html += '<span class="menu-expand-label">' + getThemeLabel(currentTheme) + '</span>';
    html += CHEVRON_SVG;
    html += '</button>';

    html += '<div class="menu-expandable-panel" id="menu-theme-panel">';
    html += '<div class="menu-expandable-inner">';
    var themeIds = Object.keys(THEMES);
    for (var t = 0; t < themeIds.length; t++) {
      var tid = themeIds[t];
      var isThemeActive = tid === currentTheme;
      html += '<button class="menu-sub-item' + (isThemeActive ? ' active' : '') + '" data-color-theme="' + tid + '">';
      html += '<span class="menu-sub-item-swatch menu-swatch-' + tid + '"></span>';
      html += '<span class="menu-sub-item-label">' + THEMES[tid] + '</span>';
      if (isThemeActive) {
        html += '<span class="menu-sub-item-check">' + CHECK_SVG + '</span>';
      }
      html += '</button>';
    }
    html += '</div>'; // .menu-expandable-inner
    html += '</div>'; // .menu-expandable-panel

    // Extra items (premium, help, logout)
    EXTRA_ITEMS.forEach(function (item) {
      if (item.type === 'separator') {
        html += '<div class="menu-separator"></div>';
        return;
      }
      var cls = 'menu-nav-item' + (item.cls ? ' ' + item.cls : '');
      if (item.disabled) {
        html += '<a href="#" class="' + cls + '" onclick="return false;">' + item.icon + item.label + '</a>';
      } else {
        html += '<a href="' + item.href + '" class="' + cls + '">' + item.icon + item.label + '</a>';
      }
    });

    html += '</div>'; // .menu-nav
    html += '</nav>';

    return html;
  }

  // ============================================================
  // Inject hamburger button into header
  // ============================================================
  function injectHamburgerButton() {
    // Try standard student header first, then lesson header
    var actionsContainer = document.querySelector('.header-actions') || document.querySelector('.header-right');
    if (!actionsContainer) return;

    var btnClass = actionsContainer.querySelector('.lh-btn') ? 'lh-btn' : 'header-icon-btn';

    // Inject Home icon button (before hamburger)
    // Note: All HTML is hardcoded static content (no user input), safe to inject
    var homeBtn = document.createElement('a');
    homeBtn.className = btnClass;
    homeBtn.href = 'S1-dashboard.html';
    homeBtn.setAttribute('aria-label', 'Home');
    homeBtn.title = 'Home';
    homeBtn.insertAdjacentHTML('beforeend', HOME_SVG);
    actionsContainer.appendChild(homeBtn);

    // Inject hamburger button (static SVG content only)
    var btn = document.createElement('button');
    btn.className = btnClass;
    btn.id = 'menu-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.title = 'Menu';
    btn.insertAdjacentHTML('beforeend', HAMBURGER_SVG);
    actionsContainer.appendChild(btn);
  }

  // ============================================================
  // Expandable panel logic
  // ============================================================
  function bindExpandable(toggleId, panelId) {
    var toggle = document.getElementById(toggleId);
    var panel = document.getElementById(panelId);
    if (!toggle || !panel) return;

    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        toggle.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0';
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }

  function bindLanguageSelection() {
    var langItems = document.querySelectorAll('#menu-lang-panel .menu-sub-item');
    langItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var code = item.getAttribute('data-lang');
        localStorage.setItem('hk-lang', code);

        // Update active states
        langItems.forEach(function (li) {
          var isNowActive = li.getAttribute('data-lang') === code;
          li.classList.toggle('active', isNowActive);
          // Update checkmark
          var existingCheck = li.querySelector('.menu-sub-item-check');
          if (isNowActive && !existingCheck) {
            li.insertAdjacentHTML('beforeend', '<span class="menu-sub-item-check">' + CHECK_SVG + '</span>');
          } else if (!isNowActive && existingCheck) {
            existingCheck.remove();
          }
        });

        // Update toggle label
        var toggleLabel = document.querySelector('#menu-lang-toggle .menu-expand-label');
        if (toggleLabel) toggleLabel.textContent = getLangLabel(code);
      });
    });
  }

  function bindThemeSelection() {
    var themeItems = document.querySelectorAll('#menu-theme-panel .menu-sub-item');
    themeItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var themeId = item.getAttribute('data-color-theme');

        // Apply the theme
        if (window.HK && HK.setColorTheme) {
          HK.setColorTheme(themeId);
        }

        // Update active states
        themeItems.forEach(function (ti) {
          var isNowActive = ti.getAttribute('data-color-theme') === themeId;
          ti.classList.toggle('active', isNowActive);
          var existingCheck = ti.querySelector('.menu-sub-item-check');
          if (isNowActive && !existingCheck) {
            ti.insertAdjacentHTML('beforeend', '<span class="menu-sub-item-check">' + CHECK_SVG + '</span>');
          } else if (!isNowActive && existingCheck) {
            existingCheck.remove();
          }
        });

        // Update toggle label
        var toggleLabel = document.querySelector('#menu-theme-toggle .menu-expand-label');
        if (toggleLabel) toggleLabel.textContent = getThemeLabel(themeId);

        // Also update the settings drawer if present
        var settingsCards = document.querySelectorAll('.settings-theme-card');
        settingsCards.forEach(function (card) {
          card.classList.toggle('active', card.getAttribute('data-theme-id') === themeId);
        });
      });
    });
  }

  // ============================================================
  // Initialize
  // ============================================================
  function init() {
    // Don't double-inject if menu already exists (e.g. S1 has its own)
    if (document.getElementById('menu-drawer')) return;

    injectHamburgerButton();

    // Inject drawer HTML after header (all static content, safe)
    var header = document.querySelector('.app-header') || document.querySelector('.lesson-header');
    if (header) {
      header.insertAdjacentHTML('afterend', buildDrawer());
    } else {
      document.body.insertAdjacentHTML('afterbegin', buildDrawer());
    }

    // Bind events
    var menuToggle = document.getElementById('menu-toggle');
    var menuClose = document.getElementById('menu-close');
    var menuOverlay = document.getElementById('menu-overlay');
    var menuDrawer = document.getElementById('menu-drawer');

    function openMenu() {
      if (menuOverlay) menuOverlay.classList.add('open');
      if (menuDrawer) menuDrawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (menuOverlay) menuOverlay.classList.remove('open');
      if (menuDrawer) menuDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuDrawer && menuDrawer.classList.contains('open')) {
        closeMenu();
      }
    });

    // Bind expandable panels
    bindExpandable('menu-lang-toggle', 'menu-lang-panel');
    bindExpandable('menu-theme-toggle', 'menu-theme-panel');

    // Bind language and theme selection
    bindLanguageSelection();
    bindThemeSelection();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

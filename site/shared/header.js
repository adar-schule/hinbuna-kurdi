/**
 * Shared Header — Hinbuna Kurdi
 * Single source of truth for all page headers.
 *
 * Usage:
 *   <div id="shared-header" data-page-type="public" data-show-lang="true" data-show-login="true" data-show-theme="true"></div>
 *   <script src="shared/header.js"></script>
 *
 * Page types:
 *   - "public"     : Full header (logo, lang picker, theme toggle, login button)
 *   - "gallery"              : Logo, play btn, nav links, hamburger (mobile), theme toggle
 *   - "onboarding"           : Logo, play btn, nav links, hamburger (mobile), theme toggle
 *   - "components"           : Logo, play btn, nav links, hamburger (mobile), theme toggle
 *   - "implementation-notes" : Logo, play btn, nav links, hamburger (mobile), theme toggle
 */
(function () {
  'use strict';

  // ============================================================
  // SVG Templates
  // ============================================================

  var LOGO_SVG =
    '<svg class="header-logo-leaf" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<polygon points="50.0,5.0 53.0,30.2 63.3,7.0 58.7,32.0 75.3,12.8 63.6,35.3 85.2,21.9 67.3,40.0 91.9,33.6 69.5,45.6 94.9,46.6 69.9,51.5 93.9,60.0 68.6,57.3 89.0,72.5 65.6,62.5 80.6,83.0 61.3,66.5 69.5,90.5 55.9,69.1 56.7,94.5 50.0,70.0 43.3,94.5 44.1,69.1 30.5,90.5 38.7,66.5 19.4,83.0 34.4,62.5 11.0,72.5 31.4,57.3 6.1,60.0 30.1,51.5 5.1,46.6 30.5,45.6 8.1,33.6 32.7,40.0 14.8,21.9 36.4,35.3 24.7,12.8 41.3,32.0 36.7,7.0 47.0,30.2" fill="#D4A843"/>' +
      '<circle cx="50" cy="50" r="16" fill="#D4A843"/>' +
    '</svg>';

  var GLOBE_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="2" y1="12" x2="22" y2="12"/>' +
      '<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' +
    '</svg>';

  // Lightbulb ON — shown in light mode (light is currently on)
  var MOON_SVG =
    '<svg class="theme-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/>' +
      '<path d="M9 18h6"/><path d="M10 22h4"/>' +
      '<line x1="12" y1="2" x2="12" y2="0"/>' +
      '<line x1="4.93" y1="4.93" x2="3.51" y2="3.51"/>' +
      '<line x1="2" y1="12" x2="0" y2="12"/>' +
      '<line x1="22" y1="12" x2="24" y2="12"/>' +
      '<line x1="19.07" y1="4.93" x2="20.49" y2="3.51"/>' +
    '</svg>';

  // Lightbulb OFF — shown in dark mode (light is currently off)
  var SUN_SVG =
    '<svg class="theme-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/>' +
      '<path d="M9 18h6"/><path d="M10 22h4"/>' +
    '</svg>';

  // Back-to-gallery arrow (dev utility — public pages only)
  var BACK_ARROW_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M19 12H5"/>' +
      '<polyline points="12 19 5 12 12 5"/>' +
    '</svg>';

  // Play/Preview button icon (dev pages only)
  var NAV_ICON_PLAY =
    '<svg class="nav-play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/>' +
      '<polygon points="10,7.5 10,16.5 17,12" fill="currentColor"/>' +
    '</svg>';

  // Hamburger menu icon (dev pages, mobile only)
  var HAMBURGER_SVG =
    '<svg class="hamburger-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="3" y1="6" x2="21" y2="6"/>' +
      '<line x1="3" y1="12" x2="21" y2="12"/>' +
      '<line x1="3" y1="18" x2="21" y2="18"/>' +
    '</svg>';

  // Close icon for hamburger menu
  var CLOSE_SVG =
    '<svg class="hamburger-close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<line x1="18" y1="6" x2="6" y2="18"/>' +
      '<line x1="6" y1="6" x2="18" y2="18"/>' +
    '</svg>';

  // Nav link icons (dev pages: gallery, onboarding, components)
  var NAV_ICON_GALLERY =
    '<svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<rect x="3" y="3" width="7" height="7" rx="1"/>' +
      '<rect x="14" y="3" width="7" height="7" rx="1"/>' +
      '<rect x="3" y="14" width="7" height="7" rx="1"/>' +
      '<rect x="14" y="14" width="7" height="7" rx="1"/>' +
    '</svg>';

  var NAV_ICON_ONBOARDING =
    '<svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>' +
    '</svg>';

  var NAV_ICON_COMPONENTS =
    '<svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M12 2L2 7l10 5 10-5-10-5z"/>' +
      '<path d="M2 17l10 5 10-5"/>' +
      '<path d="M2 12l10 5 10-5"/>' +
    '</svg>';

  var NAV_ICON_NOTES =
    '<svg class="nav-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>' +
      '<polyline points="14 2 14 8 20 8"/>' +
      '<line x1="16" y1="13" x2="8" y2="13"/>' +
      '<line x1="16" y1="17" x2="8" y2="17"/>' +
      '<polyline points="10 9 9 9 8 9"/>' +
    '</svg>';

  var CHECK_SVG =
    '<svg class="lang-option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
      '<polyline points="20 6 9 17 4 12"/>' +
    '</svg>';

  // ============================================================
  // Language options
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

  // ============================================================
  // Build header HTML
  // ============================================================

  function buildHeader(config) {
    var pageType  = config.pageType || 'public';
    var showLang    = config.showLang !== false;
    var showLogin   = config.showLogin !== false;
    var showTheme   = config.showTheme !== false;
    var showGallery = config.showGallery === true;

    var html = '';
    html += '<header class="header" id="header">';
    html += '<div class="header-inner">';

    // Logo + optional back button
    html += '<div class="header-left">';
    html += '<a href="' + getLogoHref(pageType) + '" class="header-logo">';
    html += LOGO_SVG;
    html += '<span class="header-logo-text">Hinb\u00fbna Kurd\u00ee</span>';
    html += '</a>';

    // Back to gallery (dev utility — only on main screens)
    if (showGallery) {
      html += '<a href="index.html" class="header-back-btn" title="Back to Gallery">';
      html += BACK_ARROW_SVG;
      html += '</a>';
    }
    html += '</div>';

    // Actions area
    html += '<div class="header-actions">';

    // Dev page controls (play button, nav links, hamburger)
    if (pageType === 'gallery' || pageType === 'onboarding' || pageType === 'components' || pageType === 'implementation-notes') {
      var navItems = [
        { id: 'gallery',              href: 'index.html',                icon: NAV_ICON_GALLERY,     label: 'Gallery',    title: 'Design Gallery' },
        { id: 'onboarding',           href: 'onboarding.html',           icon: NAV_ICON_ONBOARDING,  label: 'Onboarding', title: 'Developer Onboarding Guide' },
        { id: 'components',           href: 'components.html',            icon: NAV_ICON_COMPONENTS,  label: 'Components', title: 'Component Library' },
        { id: 'implementation-notes', href: 'implementation-notes.html',  icon: NAV_ICON_NOTES,       label: 'Notes',      title: 'Implementation Notes' }
      ];

      // Play/Preview button — primary action, always visible
      html += '<a href="P1-landing.html" class="header-play-btn" title="Preview App">';
      html += NAV_ICON_PLAY;
      html += '</a>';

      // Inline nav links (visible on desktop, hidden on mobile)
      html += '<div class="header-nav-inline">';
      for (var n = 0; n < navItems.length; n++) {
        var item = navItems[n];
        var isActive = (item.id === pageType);
        if (isActive) {
          html += '<span class="header-nav-link header-nav-link--active" title="' + item.title + '">' + item.icon + '<span class="nav-link-text">' + item.label + '</span></span>';
        } else {
          html += '<a href="' + item.href + '" class="header-nav-link" title="' + item.title + '">' + item.icon + '<span class="nav-link-text">' + item.label + '</span></a>';
        }
      }
      html += '</div>';

      // Hamburger button (visible on mobile only)
      html += '<button class="header-hamburger-btn" id="dev-hamburger" aria-label="Open navigation menu" title="Menu">';
      html += HAMBURGER_SVG;
      html += CLOSE_SVG;
      html += '</button>';

      // Mobile dropdown menu
      html += '<div class="dev-nav-backdrop" id="dev-nav-backdrop"></div>';
      html += '<div class="dev-nav-dropdown" id="dev-nav-dropdown">';
      for (var m = 0; m < navItems.length; m++) {
        var mItem = navItems[m];
        var mIsActive = (mItem.id === pageType);
        if (mIsActive) {
          html += '<span class="dev-nav-item dev-nav-item--active">' + mItem.icon + '<span>' + mItem.label + '</span></span>';
        } else {
          html += '<a href="' + mItem.href + '" class="dev-nav-item">' + mItem.icon + '<span>' + mItem.label + '</span></a>';
        }
      }
      html += '</div>';
    }

    // Theme toggle (FIRST — same position on public + student)
    if (showTheme) {
      html += '<button class="header-icon-btn" id="theme-toggle" aria-label="Toggle theme" title="Toggle theme">';
      html += MOON_SVG;
      html += SUN_SVG;
      html += '</button>';
    }

    // Language picker (after theme toggle, before login)
    if (showLang && pageType === 'public') {
      html += buildLangPicker();
    }

    // Login button
    if (showLogin && pageType === 'public') {
      html += '<a href="P3-login.html" class="header-login">T\u00eakeve</a>';
    }

    html += '</div>'; // .header-actions
    html += '</div>'; // .header-inner
    html += '</header>';

    return html;
  }

  function getLogoHref(pageType) {
    if (pageType === 'public') return 'P1-landing.html';
    if (pageType === 'gallery') return '#';
    if (pageType === 'onboarding') return 'index.html';
    if (pageType === 'components') return 'index.html';
    if (pageType === 'implementation-notes') return 'index.html';
    return '#';
  }

  function buildLangPicker() {
    var html = '';
    html += '<div class="lang-picker">';
    html += '<button class="header-icon-btn" id="lang-toggle" aria-label="Language" title="Language">';
    html += GLOBE_SVG;
    html += '</button>';
    html += '<div class="lang-backdrop" id="lang-backdrop"></div>';
    html += '<div class="lang-dropdown" id="lang-dropdown">';

    for (var i = 0; i < LANGUAGES.length; i++) {
      var lang = LANGUAGES[i];
      var activeClass = (i === 0) ? ' active' : '';
      var dirAttr = lang.dir ? ' data-dir="' + lang.dir + '"' : '';
      html += '<button class="lang-option' + activeClass + '" data-lang="' + lang.code + '"' + dirAttr + '>';
      html += '<span class="lang-option-label">' + lang.label + '</span>';
      html += CHECK_SVG;
      html += '</button>';
    }

    html += '</div>'; // .lang-dropdown
    html += '</div>'; // .lang-picker
    return html;
  }

  // ============================================================
  // Theme logic
  // ============================================================

  function initTheme() {
    var html = document.documentElement;

    // Restore saved theme preference
    var saved = localStorage.getItem('hk-theme');
    if (saved) {
      if (saved === 'light') {
        html.removeAttribute('data-theme');
      } else {
        html.setAttribute('data-theme', saved);
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.setAttribute('data-theme', 'dark');
    }

    // Bind toggle
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        if (next === 'light') {
          html.removeAttribute('data-theme');
        } else {
          html.setAttribute('data-theme', 'dark');
        }
        localStorage.setItem('hk-theme', next);
      });
    }
  }

  // ============================================================
  // Scroll shadow logic
  // ============================================================

  function initScrollShadow() {
    var header = document.getElementById('header');
    if (!header) return;

    var scrolled = false;

    window.addEventListener('scroll', function () {
      var shouldBeScrolled = window.scrollY > 8;
      if (shouldBeScrolled !== scrolled) {
        scrolled = shouldBeScrolled;
        header.classList.toggle('scrolled', scrolled);
      }
    }, { passive: true });
  }

  // ============================================================
  // Language picker logic
  // ============================================================

  function initLangPicker() {
    var langToggle = document.getElementById('lang-toggle');
    var dropdown = document.getElementById('lang-dropdown');
    var backdrop = document.getElementById('lang-backdrop');

    if (!langToggle || !dropdown || !backdrop) return;

    var options = dropdown.querySelectorAll('.lang-option');

    function openDropdown() {
      dropdown.classList.add('open');
      backdrop.classList.add('open');
    }

    function closeDropdown() {
      dropdown.classList.remove('open');
      backdrop.classList.remove('open');
    }

    langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (dropdown.classList.contains('open')) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    backdrop.addEventListener('click', closeDropdown);

    options.forEach(function (opt) {
      opt.addEventListener('click', function () {
        options.forEach(function (o) { o.classList.remove('active'); });
        opt.classList.add('active');
        closeDropdown();
      });
    });
  }

  // ============================================================
  // Dev hamburger menu logic
  // ============================================================

  function initDevHamburger() {
    var hamburger = document.getElementById('dev-hamburger');
    var dropdown  = document.getElementById('dev-nav-dropdown');
    var backdrop  = document.getElementById('dev-nav-backdrop');

    if (!hamburger || !dropdown || !backdrop) return;

    function openMenu() {
      dropdown.classList.add('open');
      backdrop.classList.add('open');
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-label', 'Close navigation menu');
    }

    function closeMenu() {
      dropdown.classList.remove('open');
      backdrop.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    }

    function toggleMenu() {
      if (dropdown.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    backdrop.addEventListener('click', closeMenu);

    // Close on item click
    var items = dropdown.querySelectorAll('.dev-nav-item');
    items.forEach(function (item) {
      item.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // ============================================================
  // Initialize
  // ============================================================

  function init() {
    var placeholder = document.getElementById('shared-header');
    if (!placeholder) return;

    // Read configuration from data attributes
    var config = {
      pageType:  placeholder.getAttribute('data-page-type') || 'public',
      showLang:    placeholder.getAttribute('data-show-lang') !== 'false',
      showLogin:   placeholder.getAttribute('data-show-login') !== 'false',
      showTheme:   placeholder.getAttribute('data-show-theme') !== 'false',
      showGallery: placeholder.getAttribute('data-show-gallery') === 'true'
    };

    // Inject header HTML
    placeholder.outerHTML = buildHeader(config);

    // Initialize behaviours
    initTheme();
    initScrollShadow();
    initLangPicker();
    initDevHamburger();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

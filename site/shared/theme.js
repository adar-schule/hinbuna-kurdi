/**
 * Shared Theme System — Hinbuna Kurdi
 * Single source of truth for color palette overrides across ALL pages.
 *
 * How it works:
 *   - Injects a <style id="hk-theme-overrides"> into <head>
 *   - Uses html[data-theme="dark"] selector (higher specificity than [data-theme="dark"])
 *   - This guarantees overrides beat any page-level CSS
 *
 * Variable naming:
 *   Gallery (index.html):  --bg, --surface, --text, --primary, etc.
 *   Screens (P1, P3, ...): --bg-page, --bg-surface, --text-primary, etc.
 *   Both conventions are included so ONE file works everywhere.
 *
 * localStorage keys:
 *   - hk-theme:       'light' | 'dark'
 *   - hk-color-theme: theme ID (e.g., 'dark-slate')
 *
 * Usage:
 *   <script src="shared/theme.js"></script>
 *
 * API:
 *   HK.LANGUAGES                    — language list (single source of truth)
 *   HK.getLang()                     — current language code
 *   HK.setLang('ku')                — change + save + fire event
 *   HK.setColorTheme('dark-slate')  — apply + save
 *   HK.getColorTheme()              — current ID
 *   HK.COLOR_THEMES                 — theme definitions
 */
(function () {
  'use strict';

  // ============================================================
  // Language list — single source of truth for all pages
  // Same order everywhere: header picker, settings, hamburger menu
  // ============================================================

  var LANGUAGES = [
    { code: 'ku', label: 'Kurd\u00ee', color: '#2D5A3D' },
    { code: 'en', label: 'English', color: '#3B7A8A' },
    { code: 'de', label: 'Deutsch', color: '#9A6530' },
    { code: 'sv', label: 'Svenska', color: '#4A6FA5' },
    { code: 'da', label: 'Dansk', color: '#6B5B8A' },
    { code: 'it', label: 'Italiano', color: '#7A4A3B' },
    { code: 'tr', label: 'T\u00fcrk\u00e7e', color: '#C75B5B' },
    { code: 'fa', label: '\u0641\u0627\u0631\u0633\u06CC', dir: 'rtl', color: '#5BA37B' },
    { code: 'ar', label: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', dir: 'rtl', color: '#7B68AE' }
  ];

  function getLang() {
    return localStorage.getItem('hk-lang') || 'en';
  }

  function setLang(code) {
    localStorage.setItem('hk-lang', code);
    // Fire a custom event so any open UI can react
    window.dispatchEvent(new CustomEvent('hk-lang-change', { detail: { lang: code } }));
  }

  function getLangLabel(code) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) return LANGUAGES[i].label;
    }
    return 'English';
  }

  // ============================================================
  // Color theme definitions
  // Each theme includes ALL CSS variable conventions so it works
  // on every page without inline duplicates.
  // ============================================================

  var COLOR_THEMES = {
    'forest-green': {
      label: 'Forest Green',
      dark: null,
      light: null
    },
    'midnight-green': {
      label: 'Midnight Green',
      dark: {
        // Gallery vars
        '--bg':             '#141E1A',
        '--surface':        '#1D2B24',
        '--border':         '#283830',
        '--text':           '#F5EEE6',
        '--text-secondary': '#8FA598',
        '--primary':        '#4A9B6A',
        '--primary-light':  '#5ab87d',
        '--primary-dark':   '#3a7f55',
        // Screen page vars
        '--bg-page':        '#141E1A',
        '--bg-surface':     '#1D2B24',
        '--text-primary':   '#F5EEE6',
        '--color-tan':      '#283830',
        // Login/form vars
        '--input-bg':       '#192620',
        '--input-border':   '#283830',
        '--input-icon':     '#8FA598',
        '--input-placeholder': '#4A6058',
        '--social-border':  '#283830',
        '--social-text':    '#F5EEE6',
        '--social-hover-bg':'#192620',
        // Code vars (onboarding)
        '--code-bg':        '#101C16',
        '--code-comment':   '#5A7A66',
        '--code-keyword':   '#7CC99E',
        '--code-line-num':  '#3A5A48'
      },
      darkRules: {
        '.header':    'rgba(20, 30, 26, 0.92)',
        '.final-cta': '#223028',
        '.shared-footer':    '#0E1612'
      },
      light: null
    },
    'warm-charcoal': {
      label: 'Warm Charcoal',
      dark: {
        // Gallery vars
        '--bg':             '#1C1E1D',
        '--surface':        '#272A28',
        '--border':         '#363936',
        '--text':           '#F5EEE6',
        '--text-secondary': '#A0A5A2',
        '--primary':        '#6BAF8A',
        '--primary-light':  '#7EC49D',
        '--primary-dark':   '#5A9A78',
        // Screen page vars
        '--bg-page':        '#1C1E1D',
        '--bg-surface':     '#272A28',
        '--text-primary':   '#F5EEE6',
        '--color-tan':      '#3A3835',
        // Login/form vars
        '--input-bg':       '#222422',
        '--input-border':   '#363936',
        '--input-icon':     '#A0A5A2',
        '--input-placeholder': '#6A6E6B',
        '--social-border':  '#363936',
        '--social-text':    '#F5EEE6',
        '--social-hover-bg':'#222422',
        // Code vars (onboarding)
        '--code-bg':        '#1A1C1B',
        '--code-comment':   '#7A8580',
        '--code-keyword':   '#7CC99E',
        '--code-line-num':  '#55605A'
      },
      darkRules: {
        '.header':    'rgba(28, 30, 29, 0.92)',
        '.final-cta': '#2E3230',
        '.shared-footer':    '#161817'
      },
      light: null
    },
    'dark-slate': {
      label: 'Dark Slate',
      dark: {
        // Gallery vars
        '--bg':             '#1A2024',
        '--surface':        '#232D31',
        '--border':         '#2F3B3E',
        '--text':           '#F5EEE6',
        '--text-secondary': '#9CADA8',
        '--primary':        '#5BA0B0',
        '--primary-light':  '#6DB5C4',
        '--primary-dark':   '#4A8D9C',
        // Screen page vars
        '--bg-page':        '#1A2024',
        '--bg-surface':     '#232D31',
        '--text-primary':   '#F5EEE6',
        '--color-tan':      '#2F3B3E',
        // Login/form vars
        '--input-bg':       '#1E282C',
        '--input-border':   '#2F3B3E',
        '--input-icon':     '#9CADA8',
        '--input-placeholder': '#5A7078',
        '--social-border':  '#2F3B3E',
        '--social-text':    '#F5EEE6',
        '--social-hover-bg':'#1E282C',
        // Code vars (onboarding)
        '--code-bg':        '#161D21',
        '--code-comment':   '#6A8A90',
        '--code-keyword':   '#7CC9B8',
        '--code-line-num':  '#4A6068'
      },
      darkRules: {
        '.header':    'rgba(26, 32, 36, 0.92)',
        '.final-cta': '#283537',
        '.shared-footer':    '#141B1E'
      },
      light: null
    }
  };

  // ============================================================
  // Style injection — creates/updates a <style> tag in <head>
  // Uses html[data-theme="dark"] which has specificity 0-1-1
  // beating page CSS [data-theme="dark"] which is 0-1-0
  // ============================================================

  var STYLE_ID = 'hk-theme-overrides';

  function getOrCreateStyleEl() {
    var el = document.getElementById(STYLE_ID);
    if (!el) {
      el = document.createElement('style');
      el.id = STYLE_ID;
      (document.head || document.documentElement).appendChild(el);
    }
    return el;
  }

  function getMode() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function buildCSS(theme, mode) {
    var vars = theme[mode];
    if (!vars) return '';

    var css = '';
    var props = [];
    for (var key in vars) {
      if (vars.hasOwnProperty(key)) {
        props.push('  ' + key + ': ' + vars[key] + ' !important;');
      }
    }
    if (props.length === 0) return '';

    // CSS variable overrides
    if (mode === 'dark') {
      css += 'html[data-theme="dark"] {\n' + props.join('\n') + '\n}\n';
    } else {
      css += 'html:not([data-theme="dark"]) {\n' + props.join('\n') + '\n}\n';
    }

    // Component-specific rules (header, footer, CTA backgrounds)
    var rulesKey = mode + 'Rules';
    var rules = theme[rulesKey];
    if (rules) {
      var selector = mode === 'dark' ? '[data-theme="dark"]' : ':root';
      for (var sel in rules) {
        if (rules.hasOwnProperty(sel)) {
          css += selector + ' ' + sel + ' { background-color: ' + rules[sel] + ' !important; }\n';
        }
      }
    }

    return css;
  }

  function applyOverrides(theme, mode) {
    var styleEl = getOrCreateStyleEl();
    styleEl.textContent = buildCSS(theme, mode);
  }

  function clearOverrides() {
    var styleEl = document.getElementById(STYLE_ID);
    if (styleEl) styleEl.textContent = '';
  }

  function applyColorTheme(themeId) {
    if (themeId) {
      localStorage.setItem('hk-color-theme', themeId);
    } else {
      themeId = localStorage.getItem('hk-color-theme');
    }

    if (!themeId || !COLOR_THEMES[themeId]) {
      clearOverrides();
      return;
    }

    var theme = COLOR_THEMES[themeId];
    var mode = getMode();

    if (!theme[mode]) {
      clearOverrides();
      return;
    }

    applyOverrides(theme, mode);
  }

  function getColorTheme() {
    return localStorage.getItem('hk-color-theme') || 'forest-green';
  }

  // ============================================================
  // Watch for dark/light mode changes → re-apply color theme
  // ============================================================

  var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      if (mutations[i].attributeName === 'data-theme') {
        applyColorTheme();
        break;
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  // ============================================================
  // Auto-apply on load
  // ============================================================

  var saved = localStorage.getItem('hk-color-theme');
  if (saved && saved !== 'forest-green') {
    applyColorTheme(saved);
  }

  // ============================================================
  // Public API
  // ============================================================

  window.HK = window.HK || {};
  window.HK.LANGUAGES = LANGUAGES;
  window.HK.getLang = getLang;
  window.HK.setLang = setLang;
  window.HK.getLangLabel = getLangLabel;
  window.HK.setColorTheme = applyColorTheme;
  window.HK.getColorTheme = getColorTheme;
  window.HK.COLOR_THEMES = COLOR_THEMES;

  // ============================================================
  // App Switcher — shared across public & student pages
  // ============================================================

  var APP_GRID_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor">' +
      '<circle cx="5" cy="5" r="2"/><circle cx="12" cy="5" r="2"/><circle cx="19" cy="5" r="2"/>' +
      '<circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>' +
      '<circle cx="5" cy="19" r="2"/><circle cx="12" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>' +
    '</svg>';

  var INFO_ICON_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px">' +
      '<circle cx="12" cy="12" r="10"/>' +
      '<line x1="12" y1="16" x2="12" y2="12"/>' +
      '<line x1="12" y1="8" x2="12.01" y2="8"/>' +
    '</svg>';

  var ECOSYSTEM_APPS = [
    { id: 'hinbuna', icon: '\uD83C\uDF1F', name: 'Hinb\u00fbna Kurd\u00ee', tagline: 'F\u00eArb\u00fbna ziman\u00ea kurd\u00ee', active: true },
    { id: 'ferheng', icon: '\uD83D\uDCD6', name: 'Ferheng', tagline: 'Ferheng\u00ea kurd\u00ee', href: '#' },
    { id: 'cirok', icon: '\uD83D\uDCDA', name: '\u00C7\u00eerok\u00ean Kurt', tagline: '\u00C7\u00eerok\u00ean kurt bi kurd\u00ee', href: '#' },
    { id: 'listik', icon: '\uD83C\uDFAE', name: 'L\u00eestika Kurd\u00ee', tagline: 'L\u00eaxistin \u00fb p\u00ea\u015fketin', href: '#' },
    { id: 'heval-ai', icon: '\uD83D\uDDE3\uFE0F', name: 'Heval\u00ea AI', tagline: 'Heval\u00ea te y\u00ea AI', href: '#' },
    { id: 'tts', icon: '\uD83D\uDD0A', name: 'TTS Kurd\u00ee', tagline: 'Deng\u00ea ziman\u00ea kurd\u00ee', href: '#' },
    { id: 'civat', icon: '\uD83D\uDC65', name: 'Civat', tagline: 'Civata f\u00eArb\u00fbn\u00ea', href: '#' },
    { id: 'belge', icon: '\uD83D\uDCDC', name: 'Belge', tagline: 'Belgey\u00ean CEFR', href: '#' },
    { id: 'kurdi-nama', icon: '\uD83D\uDCD5', name: 'Kurd\u00eenama', tagline: 'Zan\u00eena kurd\u00ee', href: '#' },
    { id: 'korpus', icon: '\uD83E\uDDE0', name: 'Korp\u00fbsa Kurd\u00ee', tagline: 'Dataset\u00ea ziman\u00ea kurd\u00ee', href: '#' }
  ];

  function buildAppSwitcherHTML() {
    var html = '';
    html += '<div class="app-switcher">';
    html += '<button class="app-switcher-btn" id="app-switcher-toggle" aria-label="Switch app" title="Apps">';
    html += APP_GRID_SVG;
    html += '</button>';
    html += '<div class="app-switcher-backdrop" id="app-switcher-backdrop"></div>';
    html += '<div class="app-switcher-dropdown" id="app-switcher-dropdown">';

    // Title row with "learn more" link
    html += '<div class="app-switcher-dropdown-header">';
    html += '<div class="app-switcher-dropdown-title">Ekos\u00ees\u0074em</div>';
    html += '<a href="P7-products.html" class="app-switcher-learn-more">';
    html += INFO_ICON_SVG;
    html += '<span>Learn More</span>';
    html += '</a>';
    html += '</div>';

    for (var i = 0; i < ECOSYSTEM_APPS.length; i++) {
      var app = ECOSYSTEM_APPS[i];
      var activeClass = app.active ? ' app-switcher-item--active' : '';
      var tag = app.active ? 'div' : 'a';
      var href = app.active ? '' : ' href="' + (app.href || '#') + '"';
      html += '<' + tag + href + ' class="app-switcher-item' + activeClass + '">';
      html += '<span class="app-switcher-icon">' + app.icon + '</span>';
      html += '<div class="app-switcher-info">';
      html += '<div class="app-switcher-name">' + app.name + '</div>';
      html += '<div class="app-switcher-tagline">' + app.tagline + '</div>';
      html += '</div>';
      if (!app.active) {
        html += '<span class="app-switcher-badge">N\u00eaz\u00eek e</span>';
      }
      html += '</' + tag + '>';
    }

    html += '</div>';
    html += '</div>';
    return html;
  }

  function initAppSwitcher() {
    var appToggle = document.getElementById('app-switcher-toggle');
    var appDropdown = document.getElementById('app-switcher-dropdown');
    var appBackdrop = document.getElementById('app-switcher-backdrop');

    if (!appToggle || !appDropdown) return;

    appToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      appDropdown.classList.toggle('open');
      if (appBackdrop) appBackdrop.classList.toggle('open');
    });

    if (appBackdrop) {
      appBackdrop.addEventListener('click', function () {
        appDropdown.classList.remove('open');
        appBackdrop.classList.remove('open');
      });
    }

    document.addEventListener('click', function (e) {
      if (!appToggle.contains(e.target) && !appDropdown.contains(e.target)) {
        appDropdown.classList.remove('open');
        if (appBackdrop) appBackdrop.classList.remove('open');
      }
    });
  }

  window.HK.AppSwitcher = {
    apps: ECOSYSTEM_APPS,
    build: buildAppSwitcherHTML,
    init: initAppSwitcher
  };
})();

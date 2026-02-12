/**
 * Shared Theme System — Hinbuna Kurdi
 * Manages color palette selection and syncs across all pages.
 *
 * How it works:
 *   - Injects a <style id="hk-theme-overrides"> into <head>
 *   - Uses html[data-theme="dark"] selector (higher specificity than [data-theme="dark"])
 *   - This guarantees overrides beat any page-level CSS
 *
 * localStorage keys:
 *   - hk-theme:       'light' | 'dark'
 *   - hk-color-theme: theme ID (e.g., 'dark-slate')
 *
 * Usage:
 *   <script src="shared/theme.js"></script>
 *
 * API:
 *   HK.setColorTheme('dark-slate')  — apply + save
 *   HK.getColorTheme()              — current ID
 *   HK.COLOR_THEMES                 — theme definitions
 */
(function () {
  'use strict';

  // ============================================================
  // Color theme definitions
  // ============================================================

  var COLOR_THEMES = {
    'forest-green': {
      label: 'Forest Green',
      dark: null,
      light: null
    },
    'warm-charcoal': {
      label: 'Warm Charcoal',
      dark: {
        '--bg':             '#1C1E1D',
        '--surface':        '#272A28',
        '--border':         '#363936',
        '--text':           '#F5EEE6',
        '--text-secondary': '#A0A5A2',
        '--primary':        '#6BAF8A',
        '--primary-light':  '#7EC49D',
        '--primary-dark':   '#5A9A78',
        '--code-bg':        '#1A1C1B',
        '--code-comment':   '#7A8580',
        '--code-keyword':   '#7CC99E',
        '--code-line-num':  '#55605A'
      },
      light: null
    },
    'dark-slate': {
      label: 'Dark Slate',
      dark: {
        '--bg':             '#1A2024',
        '--surface':        '#232D31',
        '--border':         '#2F3B3E',
        '--text':           '#F5EEE6',
        '--text-secondary': '#9CADA8',
        '--primary':        '#5BA0B0',
        '--primary-light':  '#6DB5C4',
        '--primary-dark':   '#4A8D9C',
        '--code-bg':        '#161D21',
        '--code-comment':   '#6A8A90',
        '--code-keyword':   '#7CC9B8',
        '--code-line-num':  '#4A6068'
      },
      light: null
    },
    'warm-earth': {
      label: 'Warm Earth',
      dark: {
        '--bg':             '#1E1C19',
        '--surface':        '#2A2722',
        '--border':         '#3A362F',
        '--text':           '#F5EEE6',
        '--text-secondary': '#ADA89E',
        '--primary':        '#B08A5A',
        '--primary-light':  '#C49E6E',
        '--primary-dark':   '#9A7A4E',
        '--code-bg':        '#1B1915',
        '--code-comment':   '#8A826E',
        '--code-keyword':   '#C4A86E',
        '--code-line-num':  '#5A5445'
      },
      light: {
        '--bg':             '#FAF5EE',
        '--surface':        '#F0E8DC',
        '--border':         '#E0D5C5'
      }
    },
    'midnight-green': {
      label: 'Midnight Green',
      dark: {
        '--bg':             '#141E1A',
        '--surface':        '#1D2B24',
        '--border':         '#283830',
        '--text':           '#F5EEE6',
        '--text-secondary': '#8FA598',
        '--primary':        '#4A9B6A',
        '--primary-light':  '#5ab87d',
        '--primary-dark':   '#3a7f55',
        '--code-bg':        '#101C16',
        '--code-comment':   '#5A7A66',
        '--code-keyword':   '#7CC99E',
        '--code-line-num':  '#3A5A48'
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
      // Append to end of head so it comes after all page styles
      (document.head || document.documentElement).appendChild(el);
    }
    return el;
  }

  function getMode() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function buildCSS(vars, mode) {
    if (!vars) return '';
    var props = [];
    for (var key in vars) {
      if (vars.hasOwnProperty(key)) {
        props.push('  ' + key + ': ' + vars[key] + ' !important;');
      }
    }
    if (props.length === 0) return '';

    if (mode === 'dark') {
      return 'html[data-theme="dark"] {\n' + props.join('\n') + '\n}';
    } else {
      return 'html:not([data-theme="dark"]) {\n' + props.join('\n') + '\n}';
    }
  }

  function applyOverrides(vars, mode) {
    var styleEl = getOrCreateStyleEl();
    styleEl.textContent = buildCSS(vars, mode);
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
    var vars = theme[mode];

    if (!vars) {
      clearOverrides();
      return;
    }

    applyOverrides(vars, mode);
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
  window.HK.setColorTheme = applyColorTheme;
  window.HK.getColorTheme = getColorTheme;
  window.HK.COLOR_THEMES = COLOR_THEMES;
})();

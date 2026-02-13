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
 *   HK.setColorTheme('dark-slate')  — apply + save
 *   HK.getColorTheme()              — current ID
 *   HK.COLOR_THEMES                 — theme definitions
 */
(function () {
  'use strict';

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
  window.HK.setColorTheme = applyColorTheme;
  window.HK.getColorTheme = getColorTheme;
  window.HK.COLOR_THEMES = COLOR_THEMES;
})();

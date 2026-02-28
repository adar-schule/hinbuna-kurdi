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
  // SVG icons (all static, no user input)
  // ============================================================

  var HAMBURGER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  var CLOSE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  // APP_GRID_SVG — now in HK.AppSwitcher (theme.js)

  function icon(d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  }

  var HOME_SVG = icon('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>');

  // Ecosystem apps — shared via HK.AppSwitcher (theme.js)
  var NAV_ITEMS = [
    { id: 'courses',  href: 'S2-course-list.html',  label: 'Courses',  icon: icon('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>') },
    { id: 'profile',  href: 'S9-profile.html',         label: 'Profile',  icon: icon('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'), disabled: false },
    { id: 'settings', href: 'S10-settings.html',     label: 'Settings', icon: icon('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'), disabled: false },
  ];

  var EXTRA_ITEMS = [
    { type: 'separator' },
    { id: 'premium',  href: 'P2-pricing.html', label: 'Go Premium', icon: icon('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'), cls: 'premium', disabled: false },
    { id: 'help',     href: '#', label: 'Help',       icon: icon('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'), disabled: true },
    { type: 'separator' },
    { id: 'logout',   href: 'P3-login.html', label: 'Logout', icon: icon('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'), cls: 'danger' },
  ];

  // ============================================================
  // Build drawer HTML (all static content, safe to inject)
  // ============================================================
  function buildDrawer() {
    var html = '';

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
  // Build app switcher HTML (all static content, safe to inject)
  // ============================================================
  function buildAppSwitcher() {
    return (window.HK && HK.AppSwitcher) ? HK.AppSwitcher.build() : '';
  }

  // ============================================================
  // Inject hamburger button + app switcher into header
  // ============================================================
  function injectHamburgerButton() {
    // Try standard student header first, then lesson header
    var actionsContainer = document.querySelector('.header-actions') || document.querySelector('.header-right');
    if (!actionsContainer) return;

    var btnClass = actionsContainer.querySelector('.lh-btn') ? 'lh-btn' : 'header-icon-btn';

    // Order: [Home] [App Switcher] [Theme Toggle] [Hamburger]
    // Theme toggle is already in HTML — inject Home and App before it

    var themeToggle = document.getElementById('theme-toggle');

    // Inject Home icon button (before theme toggle)
    var homeBtn = document.createElement('a');
    homeBtn.className = btnClass;
    homeBtn.href = 'S1-dashboard.html';
    homeBtn.setAttribute('aria-label', 'Home');
    homeBtn.title = 'Home';
    homeBtn.insertAdjacentHTML('beforeend', HOME_SVG);
    if (themeToggle) {
      actionsContainer.insertBefore(homeBtn, themeToggle);
    } else {
      actionsContainer.appendChild(homeBtn);
    }

    // Inject App Switcher (before theme toggle, after Home)
    var switcherWrapper = document.createElement('div');
    switcherWrapper.style.display = 'contents';
    switcherWrapper.insertAdjacentHTML('beforeend', buildAppSwitcher());
    var switcherEl = switcherWrapper.firstElementChild;
    if (themeToggle) {
      actionsContainer.insertBefore(switcherEl, themeToggle);
    } else {
      actionsContainer.appendChild(switcherEl);
    }

    // Inject hamburger button (after theme toggle, at end)
    var btn = document.createElement('button');
    btn.className = btnClass;
    btn.id = 'menu-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.title = 'Menu';
    btn.insertAdjacentHTML('beforeend', HAMBURGER_SVG);
    actionsContainer.appendChild(btn);
  }

  // ============================================================
  // App Switcher logic — delegated to HK.AppSwitcher (theme.js)
  // ============================================================
  function initAppSwitcher() {
    if (window.HK && HK.AppSwitcher) HK.AppSwitcher.init();
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

    // Initialize app switcher events
    initAppSwitcher();

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

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

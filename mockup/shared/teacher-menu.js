/**
 * Shared Teacher Menu — Hinbuna Kurdi
 * Injects hamburger button + slide-out navigation drawer into any teacher screen.
 *
 * Usage:
 *   <link rel="stylesheet" href="shared/student-menu.css">
 *   <script src="shared/teacher-menu.js" data-active="dashboard"></script>
 *
 *   data-active values: "dashboard" | "content" | "materials" | "students" | "settings"
 *
 * Reuses student-menu.css classes (same drawer pattern, different nav items).
 * Note: All HTML is hardcoded static content (no user input), so
 * insertAdjacentHTML usage is safe — no untrusted data is injected.
 */
(function () {
  'use strict';

  var scriptTag = document.currentScript;
  var activePage = scriptTag ? scriptTag.getAttribute('data-active') : '';

  // ============================================================
  // SVG icons (all static, no user input)
  // ============================================================

  var HAMBURGER_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  var CLOSE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

  function icon(d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  }

  var HOME_SVG = icon('<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>');

  // ============================================================
  // Teacher nav items
  // ============================================================

  var NAV_ITEMS = [
    { id: 'dashboard', href: 'T1-teacher-dashboard.html', label: 'Dashboard', icon: icon('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>') },
    { id: 'content',   href: 'T2-course-module.html', label: 'My Content', icon: icon('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>') },
    { id: 'materials', href: '#', label: 'Materials', icon: icon('<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'), disabled: true },
  ];

  var SECONDARY_ITEMS = [
    { type: 'separator-label', label: 'STUDENTS' },
    { id: 'students', href: '#', label: 'Students Overview', icon: icon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'), disabled: true },
  ];

  var EXTRA_ITEMS = [
    { type: 'separator' },
    { id: 'settings', href: 'T-settings.html', label: 'Settings', icon: icon('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>') },
    { id: 'help', href: '#', label: 'Help', icon: icon('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'), disabled: true },
    { type: 'separator' },
    { id: 'logout', href: 'P3-login.html', label: 'Logout', icon: icon('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'), cls: 'danger' },
  ];

  // ============================================================
  // Build drawer HTML (all static content, safe to inject)
  // ============================================================
  function buildDrawer() {
    var html = '';

    html += '<div class="menu-overlay" id="menu-overlay"></div>';
    html += '<nav class="menu-drawer" id="menu-drawer" aria-label="Teacher navigation">';

    // Drawer header (teacher info)
    html += '<div class="menu-drawer-header">';
    html += '<div class="menu-user">';
    html += '<div class="menu-avatar" style="background-color: var(--color-accent); color: #1A2A1F;">MC</div>';
    html += '<div class="menu-user-info">';
    html += '<span class="menu-user-name">Mamoste Ciwan</span>';
    html += '<span class="menu-user-level">Teacher &middot; Admin</span>';
    html += '</div>';
    html += '</div>';
    html += '<button class="menu-close-btn" id="menu-close" aria-label="Close menu">' + CLOSE_SVG + '</button>';
    html += '</div>';

    // Nav items
    html += '<div class="menu-nav">';

    function renderItem(item) {
      if (item.type === 'separator') {
        return '<div class="menu-separator"></div>';
      }
      if (item.type === 'separator-label') {
        return '<div class="menu-separator"></div><div style="padding: 6px 20px 2px; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-secondary); opacity: 0.6;">' + item.label + '</div>';
      }
      var isActive = item.id === activePage;
      var cls = 'menu-nav-item' + (isActive ? ' active' : '') + (item.cls ? ' ' + item.cls : '');
      if (item.disabled && !isActive) {
        return '<a href="#" class="' + cls + '" onclick="return false;" style="opacity:0.5;">' + item.icon + item.label + '</a>';
      }
      return '<a href="' + item.href + '" class="' + cls + '">' + item.icon + item.label + '</a>';
    }

    NAV_ITEMS.forEach(function (item) { html += renderItem(item); });
    SECONDARY_ITEMS.forEach(function (item) { html += renderItem(item); });
    EXTRA_ITEMS.forEach(function (item) { html += renderItem(item); });

    html += '</div>';
    html += '</nav>';

    return html;
  }

  // ============================================================
  // Build app switcher HTML
  // ============================================================
  function buildAppSwitcher() {
    return (window.HK && HK.AppSwitcher) ? HK.AppSwitcher.build() : '';
  }

  // ============================================================
  // Inject hamburger button + app switcher into header
  // ============================================================
  function injectHamburgerButton() {
    var actionsContainer = document.querySelector('.header-actions');
    if (!actionsContainer) return;

    var themeToggle = document.getElementById('theme-toggle');

    // Inject Home icon button (links to T1 dashboard)
    var homeBtn = document.createElement('a');
    homeBtn.className = 'header-icon-btn';
    homeBtn.href = 'T1-teacher-dashboard.html';
    homeBtn.setAttribute('aria-label', 'Teacher Dashboard');
    homeBtn.title = 'Teacher Dashboard';
    homeBtn.insertAdjacentHTML('beforeend', HOME_SVG);
    if (themeToggle) {
      actionsContainer.insertBefore(homeBtn, themeToggle);
    } else {
      actionsContainer.appendChild(homeBtn);
    }

    // Inject App Switcher
    var switcherWrapper = document.createElement('div');
    switcherWrapper.style.display = 'contents';
    switcherWrapper.insertAdjacentHTML('beforeend', buildAppSwitcher());
    var switcherEl = switcherWrapper.firstElementChild;
    if (switcherEl) {
      if (themeToggle) {
        actionsContainer.insertBefore(switcherEl, themeToggle);
      } else {
        actionsContainer.appendChild(switcherEl);
      }
    }

    // Inject hamburger button
    var btn = document.createElement('button');
    btn.className = 'header-icon-btn';
    btn.id = 'menu-toggle';
    btn.setAttribute('aria-label', 'Open menu');
    btn.title = 'Menu';
    btn.insertAdjacentHTML('beforeend', HAMBURGER_SVG);
    actionsContainer.appendChild(btn);
  }

  // ============================================================
  // Initialize
  // ============================================================
  function init() {
    if (document.getElementById('menu-drawer')) return;

    injectHamburgerButton();

    var header = document.querySelector('.app-header');
    if (header) {
      header.insertAdjacentHTML('afterend', buildDrawer());
    } else {
      document.body.insertAdjacentHTML('afterbegin', buildDrawer());
    }

    // Initialize app switcher events
    if (window.HK && HK.AppSwitcher) HK.AppSwitcher.init();

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

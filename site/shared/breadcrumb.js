/**
 * Shared Breadcrumb Sub-Header — Hinbuna Kurdi
 * Compact two-line navigation bar with dropdown pickers.
 *
 * Usage:
 *   <link rel="stylesheet" href="shared/breadcrumb.css">
 *   <div id="student-breadcrumb"
 *     data-course="Kurmancî A1"  data-course-href="S3-module-view.html"
 *     data-unit="Silav û Nasîn"  data-unit-href="S4-unit-view.html"
 *     data-lesson="Tu çawa yî?"
 *     data-close-href="S4-unit-view.html">
 *   </div>
 *   <script src="shared/breadcrumb.js"></script>
 *
 * Shows breadcrumb depth based on which data attributes are present.
 * Clickable labels open dropdown pickers with demo content.
 *
 * Note: All HTML is hardcoded static content (no user input).
 */
(function () {
  'use strict';

  // ============================================================
  // Demo data (matches existing screens)
  // ============================================================
  var COURSES = [
    { name: 'Kurmancî A1', href: 'S3-module-view.html', status: 'active' },
    { name: 'Kurmancî A2', href: '#', status: 'upcoming' },
    { name: 'Kurmancî B1', href: '#', status: 'locked' }
  ];

  var UNITS = [
    { name: 'Beş 1: Silav û Nasîn', href: 'S4-unit-view.html', status: 'done' },
    { name: 'Beş 2: Cînav û Bûn', href: 'S4-unit-view.html', status: 'active' },
    { name: 'Beş 3: Reng û Danasîn', href: '#', status: 'upcoming' },
    { name: 'Beş 4: Berhevoka Rojane', href: '#', status: 'locked' },
    { name: 'Beş 5: Temen û Rengdêr', href: '#', status: 'locked' },
    { name: 'Beş 6: Lêkerên Bingehîn', href: '#', status: 'locked' },
    { name: 'Beş 7: Kiryarên Rojane', href: '#', status: 'locked' },
    { name: 'Beş 8: Pirs û Bersiv', href: '#', status: 'locked' }
  ];

  var LESSONS = [
    { name: 'Ders 1: Silav!', href: 'S5-lesson-view.html', status: 'done' },
    { name: 'Ders 2: Tu çawa yî?', href: 'S5-lesson-view.html', status: 'active' },
    { name: 'Ders 3: Ez... im', href: '#', status: 'upcoming' },
    { name: 'Ders 4: Navê te çi ye?', href: '#', status: 'locked' }
  ];

  // SVG icons (static)
  var LOCK_SVG = '<svg class="dd-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';
  var CHECK_SVG = '<svg class="dd-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  var FUTURE_SVG = '<svg class="dd-future" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><polyline points="12 8 12 12 15 14"/></svg>';

  var activeDropdown = null;

  // Active dot SVG (gold filled circle indicator for active item)
  var ACTIVE_DOT = '<span class="dd-active-dot"></span>';

  // Dropdown title labels
  var DROPDOWN_TITLES = {
    course: 'Select Course',
    unit: 'Select Unit',
    lesson: 'Select Lesson'
  };

  // ============================================================
  // Build dropdown HTML
  // ============================================================
  function buildDropdown(id, items, currentName) {
    var html = '<div class="breadcrumb-dropdown" id="bc-dd-' + id + '">';

    // Dropdown title header
    var titleText = DROPDOWN_TITLES[id] || 'Select';
    html += '<span class="breadcrumb-dropdown-title">' + titleText + '</span>';

    // Separate items into available (done + active) and locked groups
    var availableItems = [];
    var futureItems = [];
    items.forEach(function (item) {
      if (item.status === 'locked' || item.status === 'upcoming') {
        futureItems.push(item);
      } else {
        availableItems.push(item);
      }
    });

    // Available group (done + active)
    if (availableItems.length > 0) {
      html += '<div class="breadcrumb-dropdown-group">';
      availableItems.forEach(function (item) {
        html += buildDropdownItem(item, currentName);
      });
      html += '</div>';
    }

    // Separator between available and future
    if (availableItems.length > 0 && futureItems.length > 0) {
      html += '<div class="breadcrumb-dropdown-separator"></div>';
    }

    // Future group (upcoming + locked)
    if (futureItems.length > 0) {
      html += '<div class="breadcrumb-dropdown-group">';
      futureItems.forEach(function (item) {
        html += buildDropdownItem(item, currentName);
      });
      html += '</div>';
    }

    html += '</div>';
    return html;
  }

  function buildDropdownItem(item, currentName) {
    var isActive = item.name.indexOf(currentName) !== -1 || currentName.indexOf(item.name) !== -1;
    // Try partial match for short names
    if (!isActive && currentName) {
      var shortCurrent = currentName.replace(/^Beş \d+: /, '').replace(/^Ders \d+: /, '');
      isActive = item.name.indexOf(shortCurrent) !== -1;
    }

    var cls = 'breadcrumb-dropdown-item';
    if (isActive) cls += ' active';
    if (item.status === 'done') cls += ' done';
    if (item.status === 'upcoming') cls += ' upcoming';
    if (item.status === 'locked') cls += ' locked';

    var html = '';

    if (item.status === 'locked') {
      html += '<div class="' + cls + '">';
      html += LOCK_SVG;
      html += '<span>' + item.name + '</span>';
      html += '</div>';
    } else if (item.status === 'upcoming') {
      html += '<div class="' + cls + '">';
      html += FUTURE_SVG;
      html += '<span>' + item.name + '</span>';
      html += '</div>';
    } else if (isActive) {
      // Active item: rendered as <div> (not a navigation link — you're already here)
      html += '<div class="' + cls + '">';
      html += ACTIVE_DOT;
      html += '<span>' + item.name + '</span>';
      html += '</div>';
    } else {
      // Done/clickable item
      html += '<a href="' + item.href + '" class="' + cls + '">';
      if (item.status === 'done') html += CHECK_SVG;
      else if (item.status === 'active') html += '<span class="dd-in-progress"></span>';
      html += '<span>' + item.name + '</span>';
      html += '</a>';
    }

    return html;
  }

  // ============================================================
  // Build breadcrumb bar
  // ============================================================
  function buildBreadcrumb(el) {
    var course = el.getAttribute('data-course') || '';
    var courseHref = el.getAttribute('data-course-href') || 'S3-module-view.html';
    var unit = el.getAttribute('data-unit') || '';
    var unitHref = el.getAttribute('data-unit-href') || 'S4-unit-view.html';
    var lesson = el.getAttribute('data-lesson') || '';
    // Determine depth
    var levels = [];
    if (course) levels.push({ key: 'course', label: 'Course', value: course, href: courseHref, items: COURSES });
    if (unit)   levels.push({ key: 'unit',   label: 'Unit',   value: unit,   href: unitHref,   items: UNITS });
    if (lesson) levels.push({ key: 'lesson', label: 'Lesson', value: lesson, href: '#',        items: LESSONS });

    if (levels.length === 0) return '';

    var html = '';
    html += '<div class="breadcrumb-backdrop" id="bc-backdrop"></div>';
    html += '<div class="breadcrumb-bar">';
    html += '<div class="breadcrumb-inner">';

    // Left: breadcrumb path
    html += '<div class="breadcrumb-path">';

    // Line 1: labels
    html += '<div class="breadcrumb-labels">';
    levels.forEach(function (level, i) {
      var isLast = i === levels.length - 1;
      if (i > 0) html += '<span class="breadcrumb-sep">›</span>';
      html += '<button class="breadcrumb-label' + (isLast ? ' current' : '') + '" data-bc-trigger="' + level.key + '">';
      html += level.label;
      html += '</button>';
      // Dropdown (positioned relative to label)
      html += buildDropdown(level.key, level.items, level.value);
    });
    html += '</div>';

    // Line 2: values
    html += '<div class="breadcrumb-values">';
    levels.forEach(function (level, i) {
      if (i > 0) html += '<span class="breadcrumb-value-sep">›</span>';
      html += '<span class="breadcrumb-value">' + level.value + '</span>';
    });
    html += '</div>';

    html += '</div>'; // .breadcrumb-path

    html += '</div>'; // .breadcrumb-inner
    html += '</div>'; // .breadcrumb-bar

    return html;
  }

  // ============================================================
  // Dropdown toggle logic
  // ============================================================
  function setupDropdowns() {
    var triggers = document.querySelectorAll('[data-bc-trigger]');
    var backdrop = document.getElementById('bc-backdrop');

    function closeAll() {
      document.querySelectorAll('.breadcrumb-dropdown.open').forEach(function (dd) {
        dd.classList.remove('open');
      });
      if (backdrop) backdrop.classList.remove('open');
      activeDropdown = null;
    }

    triggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var key = btn.getAttribute('data-bc-trigger');
        var dd = document.getElementById('bc-dd-' + key);
        if (!dd) return;

        if (dd.classList.contains('open')) {
          closeAll();
        } else {
          closeAll();
          // Position dropdown relative to button
          dd.style.left = btn.offsetLeft + 'px';
          dd.classList.add('open');
          if (backdrop) backdrop.classList.add('open');
          activeDropdown = dd;

          // Scroll the active item into view within the dropdown
          var activeItem = dd.querySelector('.breadcrumb-dropdown-item.active');
          if (activeItem) {
            // Use requestAnimationFrame to ensure layout is computed after open
            requestAnimationFrame(function () {
              activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            });
          }
        }
      });
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeAll);
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && activeDropdown) closeAll();
    });
  }

  // ============================================================
  // Initialize
  // ============================================================
  function init() {
    var el = document.getElementById('student-breadcrumb');
    if (!el) return;

    // Build and inject (all static content, safe)
    el.outerHTML = buildBreadcrumb(el);

    // Bind dropdown triggers
    setupDropdowns();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

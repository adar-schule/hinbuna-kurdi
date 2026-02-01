// assets/include.js  (pure JS, no <script> tags)

async function includePartials() {
  const nodes = document.querySelectorAll('[data-include]');
  await Promise.all(
    [...nodes].map(async (el) => {
      const file = el.getAttribute('data-include');
      try {
        const res = await fetch(file, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`HTTP ${res.status} for ${file}`);
        el.innerHTML = await res.text();
      } catch (e) {
        console.error('Include failed:', file, e);
        el.innerHTML = `<!-- include failed: ${file} -->`;
      }
    })
  );

  // --- role-based nav: show Teacher link only if role === 'teacher'
  try {
    const profile = JSON.parse(localStorage.getItem('hk.profile.v1') || '{}');
    const teacherLink = document.querySelector('[data-nav="teacher"]');
    if (teacherLink) {
      teacherLink.style.display = profile && profile.role === 'teacher' ? 'inline-block' : 'none';
    }
  } catch (e) {
    // ignore
  }

  // --- highlight active nav (after header is injected)
  const pathname = (location.pathname || '').toLowerCase();

  let key = null;
  if (pathname.endsWith('/index.html') || pathname === '/' || pathname === '') {
    key = 'home';
  } else if (pathname.includes('/modules/teacher/')) {
    key = 'teacher';
  } else if (pathname.includes('/modules/courses/')) {
    key = 'courses';
  } else if (pathname.includes('/modules/units/')) {
    // if you have a Units icon in nav, use 'units'; otherwise map to courses/lessons
    key = 'courses';
  } else if (pathname.includes('/modules/lessons/')) {
    key = 'lessons';
  } else if (pathname.includes('/modules/runner/')) {
    key = 'lessons';
  } else if (pathname.includes('/modules/dashboard/')) {
    key = 'dashboard';
  } else if (pathname.includes('/modules/auth/')) {
    key = 'auth';
  } else if (pathname.includes('/modules/profile/')) {
    key = 'profile';
  }

  if (key) {
    document.querySelectorAll(`[data-nav="${key}"]`).forEach((a) => a.classList.add('active'));
  }
}

document.addEventListener('DOMContentLoaded', includePartials);

// global handlers used by header buttons
function toggleApps() {
  const modal = document.getElementById('appsModal');
  if (!modal) return;
  modal.style.display = modal.style.display === 'grid' ? 'none' : 'grid';
}
function toggleLangMenu() {
  const menu = document.getElementById('langMenu');
  if (!menu) return;
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
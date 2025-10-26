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

  // highlight active nav (after header is injected)
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const map = {
    'index.html': 'home',
    '/modules/courses/course.html': 'courses',
    'lesson.html': 'lessons',
    'runner.html': 'lessons',
    'dashboard.html': 'dashboard',
    'auth.html': 'auth',
    'profile.html': 'profile'
  };
  const key = map[path];
  if (key) {
    document
      .querySelectorAll(`[data-nav="${key}"]`)
      .forEach((a) => a.classList.add('active'));
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
/**
 * Ecosystem Apps — Single Source of Truth
 * Shared across: header app switcher, student menu, products page (P7).
 *
 * Usage:
 *   <script src="shared/ecosystem-apps.js"></script>
 *   // Access via window.HK_ECOSYSTEM_APPS
 *
 * Each app object:
 *   id       — unique identifier
 *   icon     — emoji icon
 *   name     — display name (Kurdish)
 *   tagline  — short Kurdish subtitle (used in app switcher dropdown)
 *   desc     — English description (used on products page P7)
 *   active   — true if this is the current app (only Hinbuna Kurdi)
 *   href     — link to the app (omit or '#' for upcoming apps)
 *
 * IMPORTANT: This is the ONLY place to add/remove/reorder ecosystem apps.
 * Both the header dropdown and P7-products.html read from this list.
 */
(function () {
  'use strict';

  window.HK_ECOSYSTEM_APPS = [
    {
      id: 'hinbuna',
      icon: '\uD83C\uDF1F',
      name: 'Hinb\u00fbna Kurd\u00ee',
      tagline: 'F\u00eArb\u00fbna ziman\u00ea kurd\u00ee',
      desc: 'Your structured path to fluency',
      active: true
    },
    {
      id: 'ezmuna',
      icon: '\uD83D\uDCDD',
      name: 'Ezm\u00fbna Asta Kurd\u00ee',
      tagline: 'Asta xwe bizane',
      desc: 'Test your Kurdish level in any dialect',
      href: '#'
    },
    {
      id: 'ferheng',
      icon: '\uD83D\uDCD6',
      name: 'Ferheng',
      tagline: 'Ferheng\u00ea kurd\u00ee',
      desc: 'Your words, always with you',
      href: '#'
    },
    {
      id: 'cirok',
      icon: '\uD83D\uDCDA',
      name: '\u00C7\u00eerok\u00ean Kurt',
      tagline: '\u00C7\u00eerok\u00ean kurt bi kurd\u00ee',
      desc: 'Stories written just for you',
      href: '#'
    },
    {
      id: 'listik',
      icon: '\uD83C\uDFAE',
      name: 'L\u00eestika Kurd\u00ee',
      tagline: 'L\u00eaxistin \u00fb p\u00ea\u015fketin',
      desc: 'Practice that knows your weak spots',
      href: '#'
    },
    {
      id: 'korpus',
      icon: '\uD83E\uDDE0',
      name: 'Korp\u00fbsa Kurd\u00ee',
      tagline: 'Dataset\u00ea ziman\u00ea kurd\u00ee',
      desc: 'Shape the future of Kurdish AI',
      href: '#'
    },
    {
      id: 'tts',
      icon: '\uD83D\uDD0A',
      name: 'TTS Kurd\u00ee',
      tagline: 'Deng\u00ea ziman\u00ea kurd\u00ee',
      desc: 'Hear any Kurdish text come alive',
      href: '#'
    },
    {
      id: 'civat',
      icon: '\uD83D\uDC65',
      name: 'Civat',
      tagline: 'Civata f\u00eArb\u00fbn\u00ea',
      desc: 'Learn together, grow together',
      href: '#'
    },
    {
      id: 'belge',
      icon: '\uD83D\uDCDC',
      name: 'Belge',
      tagline: 'Belgey\u00ean CEFR',
      desc: 'Prove what you know',
      href: '#'
    },
    {
      id: 'kurdi-nama',
      icon: '\uD83D\uDCD5',
      name: 'Kurd\u00eenama',
      tagline: 'Zan\u00eena kurd\u00ee',
      desc: 'The Kurdish encyclopedia',
      href: '#'
    },
    {
      id: 'heval-ai',
      icon: '\uD83D\uDDE3\uFE0F',
      name: 'Heval\u00ea AI',
      tagline: 'Heval\u00ea te y\u00ea AI',
      desc: 'Your AI friend who speaks Kurdish',
      href: '#'
    }
  ];
})();

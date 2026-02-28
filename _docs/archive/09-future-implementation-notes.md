# Future Implementation Notes

> Developer reference for migrating from static HTML/CSS mockups to React + NestJS.
> Each section documents the **current state** (vanilla JS/HTML) and the **future state** (React components with Tailwind CSS).

---

## 1. Centralized Header System

### Current State

- `mockup/shared/header.js` is an IIFE that builds the header via string concatenation
- Supports page types: `public`, `gallery`, `onboarding`, `components`, `implementation-notes`
- Public pages get: logo, language picker, theme toggle, login button
- Dev pages (gallery/onboarding/components/notes) get: logo, nav links, theme toggle
- Student screens (S1-S5) use a completely separate `app-header` pattern with back button, title, theme toggle, home icon, hamburger menu
- Lesson screens (S5) have yet another pattern: back + center title + close button

### Future State

- **One React component**: `<AppHeader />` with role-based configuration via props
- Variants controlled by a `variant` prop (or auto-detected from route):

```tsx
// Single component, multiple variants
<AppHeader variant="public" />     // Logo + lang + theme + login
<AppHeader variant="student" />    // Back + title + theme + home + hamburger
<AppHeader variant="teacher" />    // Back + title + class picker + notifications
<AppHeader variant="admin" />      // Logo + admin nav + notifications + profile
<AppHeader variant="lesson" />     // Back + progress bar + close
```

- All variants share: logo rendering, theme toggle, language picker access
- Props to control visibility:

```tsx
interface AppHeaderProps {
  variant: 'public' | 'student' | 'teacher' | 'admin' | 'lesson';
  title?: string;
  showLangPicker?: boolean;
  showThemeToggle?: boolean;
  showLogin?: boolean;
  showBreadcrumb?: boolean;
  onBack?: () => void;
  onClose?: () => void;
}
```

- The header must be ONE component with props/config, not separate implementations per role

---

## 2. Centralized CSS / Design Token System

### Current State

- Each HTML file has its own `<style>` block defining CSS custom properties
- Two naming conventions coexist:
  - Gallery/dev pages: `--bg`, `--surface`, `--text`, `--primary`
  - Screen pages (P1-P6, S1-S5): `--bg-page`, `--bg-surface`, `--text-primary`, `--color-primary`
- Shared CSS files in `mockup/shared/`: `header.css`, `footer.css`, `settings.css`
- `shared/theme.js` manages 4 color themes via CSS variable injection (`<style id="hk-theme-overrides">`)
- Color themes define overrides for both naming conventions so they work everywhere

### Future State

- **Tailwind CSS** with a custom theme config derived from `_docs/07-design-decisions.md`
- All CSS variables become Tailwind theme tokens:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg:           'var(--bg)',
        surface:      'var(--surface)',
        primary:      { DEFAULT: 'var(--primary)', light: 'var(--primary-light)', dark: 'var(--primary-dark)' },
        accent:       { DEFAULT: 'var(--accent)', light: 'var(--accent-light)' },
        text:         { DEFAULT: 'var(--text)', secondary: 'var(--text-secondary)' },
        border:       'var(--border)',
        tan:          'var(--tan)',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(26, 42, 31, 0.06)',
        md: '0 4px 12px rgba(26, 42, 31, 0.08)',
        lg: '0 8px 24px rgba(26, 42, 31, 0.10)',
        xl: '0 12px 36px rgba(26, 42, 31, 0.12)',
      },
    },
  },
};
```

- ONE source of truth for all design tokens
- Theme switching uses Tailwind's `dark:` modifier + custom theme classes
- CSS variables remain as the underlying mechanism, but Tailwind abstracts them

---

## 3. Color Theme Logic

### Current State

- 4 color themes defined in `shared/theme.js`:
  - `forest-green` (default, no overrides needed)
  - `midnight-green` (deeper, cooler greens)
  - `warm-charcoal` (neutral gray-greens)
  - `dark-slate` (blue-gray tones)
- Theme selection available in two places:
  - Footer gear icon opens settings drawer (from `shared/settings.js`)
  - `index.html` (gallery) has a theme preview section
- Light/dark toggle is in the header (lightbulb icon)
- localStorage keys: `hk-theme` (light/dark) and `hk-color-theme` (color palette ID)

### Future State

- **Light/dark and color theme are SEPARATE controls**:
  - Light/dark = mode toggle (affects all CSS variable values)
  - Color theme = palette selection (changes which set of colors is used)
- Theme picker must appear **consistently** across:
  - Register flow (P4) — initial theme preference
  - Landing page header — quick access
  - Hamburger menu — logged-in users
  - Settings page (S10) — full control
- Persistence strategy:
  - Guest: `localStorage` only
  - Logged in: sync to user profile via API, fall back to localStorage
- **Age-based theme system** (planned):

| Theme Group | Age Range | Vibe |
|-------------|-----------|------|
| `zarok` | 6-12 | Playful, larger elements, brighter accents |
| `ciwan` | 13-17 | Modern, slightly bolder colors |
| `xort` | 18-25 | Clean, contemporary |
| `mezin` | 26+ | Professional, calm (current default) |

- Each age theme defines its own set of 4 color palettes
- Age group is set during registration and can be changed in settings

---

## 4. Language Picker Consistency

### Current State

- 9 languages defined in `header.js` `LANGUAGES` array:

```js
var LANGUAGES = [
  { code: 'ku', label: 'Kurdî' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'sv', label: 'Svenska' },
  { code: 'da', label: 'Dansk' },
  { code: 'it', label: 'Italiano' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'ar', label: 'العربية', dir: 'rtl' }
];
```

- Language picker appears as a globe icon dropdown on public pages
- Register form (P4) has a "support language" dropdown (same list)
- RTL support: `fa` and `ar` have `dir: 'rtl'` attribute

### Future State

- **Single language config** shared across the entire app:

```tsx
// src/config/languages.ts
export const LANGUAGES = [
  { code: 'ku', label: 'Kurdî', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', dir: 'ltr' },
  { code: 'sv', label: 'Svenska', dir: 'ltr' },
  { code: 'da', label: 'Dansk', dir: 'ltr' },
  { code: 'it', label: 'Italiano', dir: 'ltr' },
  { code: 'tr', label: 'Türkçe', dir: 'ltr' },
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
] as const;
```

- **Same list, same order, same component** across all touchpoints:
  - **Register (P4)**: user selects "support language" (the UI language for learning)
  - **Header globe icon**: quick-switch dropdown for any user
  - **Hamburger menu**: language option for logged-in users
  - **Settings page (S10)**: full language settings with primary + secondary language
- RTL support must set `dir="rtl"` on `<html>` when fa/ar is selected
- i18n integration: language selection drives the entire UI translation layer
- API sync: language preference persists in user profile when logged in

---

## 5. Settings Page Architecture

### Current State

- Settings drawer opens from footer gear icon (managed by `shared/settings.js`)
- Drawer contains: color theme picker, light/dark toggle
- No dedicated settings page exists yet
- Screen S10 in the MVP plan is designated as the full settings page

### Future State

- **Screen S10** — full settings page with categorized sections:

| Category | Settings | MVP? |
|----------|----------|------|
| **Account** | Name, email, password change | Yes |
| **Preferences** | Language, color theme, light/dark mode | Yes |
| **Learning** | Daily goal, notifications, audio speed | Yes |
| **Accessibility** | Font size, high contrast, reduced motion | Post-MVP |
| **Subscription** | Plan details, billing | Post-MVP |
| **Connected Apps** | SSO links to Dictionary, Quiz, etc. | Post-MVP |
| **Privacy** | Data export, account deletion | Post-MVP |

- **MVP scope**: Language + Color Theme + Light/Dark mode
- Settings architecture:

```tsx
// Settings stored per-user in the database
interface UserSettings {
  // Preferences
  language: string;          // 'ku' | 'en' | 'de' | ...
  colorTheme: string;        // 'forest-green' | 'midnight-green' | ...
  darkMode: boolean;

  // Learning
  dailyGoal: number;         // minutes per day
  notificationsEnabled: boolean;
  audioSpeed: number;        // 0.5 - 2.0

  // Accessibility (post-MVP)
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  highContrast: boolean;
  reducedMotion: boolean;
}
```

- Settings sync across all apps in the ecosystem via shared SSO:
  - Hinbuna Kurdi (main learning platform)
  - Dictionary
  - Quiz (Testa Asta Kurdi)
  - Short Stories
  - Grammar Exercises
- Changing a setting in one app propagates to all others

---

## 6. Font Size & Accessibility (Post-MVP)

### Current State

- No font size controls exist
- No accessibility settings
- Base font size is `15px` (set on `body`)
- Animations are always enabled (fade-ins, transitions)
- Theme toggle is the only user preference control

### Future State

- **Font size control**:

| Size | Scale Factor | Base Size |
|------|-------------|-----------|
| Small | 0.875x | 13px |
| Medium (default) | 1.0x | 15px |
| Large | 1.125x | 17px |
| Extra Large | 1.25x | 19px |

- Implementation via CSS custom property on `:root`:

```css
:root {
  --font-scale: 1;
  font-size: calc(15px * var(--font-scale));
}

/* All rem-based sizes automatically scale */
```

- **High contrast mode**:
  - Increase border widths and color contrast ratios
  - Ensure WCAG AAA compliance (7:1 contrast ratio)
  - Add focus ring visibility for keyboard navigation

- **Reduced motion**:
  - Respect `prefers-reduced-motion` media query
  - User override in settings (force reduced motion even if OS allows it)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Or via data attribute for user preference override */
[data-reduced-motion="true"] * {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

- **Audio cues** for interactions (post-MVP):
  - Correct/incorrect answer sounds
  - Level-up celebration
  - Togglable in settings

- These accessibility settings are **universal** across all age themes (zarok, ciwan, xort, mezin)

---

## Summary: Migration Priority

| System | Priority | Complexity | Dependencies |
|--------|----------|-----------|--------------|
| Design tokens (Tailwind) | P0 | Medium | None |
| Header component | P0 | High | Design tokens |
| Language picker | P1 | Medium | Header, i18n setup |
| Theme switching | P1 | Medium | Design tokens |
| Settings page (MVP) | P1 | Medium | Theme, language |
| Accessibility | P2 | Low | Settings page |
| Age-based themes | P2 | High | Theme system, user profiles |

> **Note**: All systems above should be designed with the multi-app ecosystem in mind. Settings, auth, and theme preferences will be shared across Hinbuna Kurdi, Dictionary, Quiz, and other future apps via SSO.

# Design Decisions — Hinbûna Kurdî

> **Doc:** 08 · **Status:** Active · **Updated:** 2026-03-01

---

## Brand Direction

**Chosen:** Direction A — Warm & Welcoming
**Vibe:** Friendly, encouraging, botanical — like Headspace meets Notion (Calm + SaaS)
**Rejected:** B (Modern/Clean — too corporate), C (Heritage — too heavy), D (Fresh/Vibrant — too young)

---

## Color System

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#FDF8F3` | Page background — warm cream |
| **Surface / Card** | `#F5EEE6` | Card backgrounds, inputs — soft beige |
| **Primary** | `#2D5A3D` | Buttons, links, headings — forest green |
| **Secondary / Accent** | `#D4A843` | Badges, highlights, CTAs — warm gold |
| **Tan** | `#E3C79D` | Secondary surface, subtle accents |
| **Text Primary** | `#1A2A1F` | Body text — dark green-black |
| **Text Secondary** | `#5A6B5E` | Subtitles, hints — muted green-gray |
| **Border** | `#E5DDD3` | Card borders, dividers — warm tan |

### Dark Mode (Default — Dark Slate)

| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#1A2024` | Page background — deep teal-forest (NOT black) |
| **Surface / Card** | `#232D31` | Card backgrounds, inputs — slightly lighter |
| **Primary** | `#2D5A3D` | Buttons, links — forest green |
| **Secondary / Accent** | `#D4A843` | Badges, CTAs, brightest element — warm gold |
| **Tan** | `#E3C79D` | Secondary accents |
| **Text Primary** | `#F5EEE6` | Body text — warm off-white |
| **Text Secondary** | `#9CADA8` | Subtitles, hints — soft sage |
| **Border** | `#2F3B3E` | Card borders, dividers — subtle green |

> Alternative color themes (Forest Green, Midnight Green, Warm Charcoal) are defined in `mockup/shared/theme.js` and can be selected in Settings.

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Error / Danger** | `#DC4545` | Validation errors, wrong answers, destructive actions |
| **Warning** | `#EFB034` | Caution states, expiring subscriptions |
| **Success** | `#2D8A4E` | Correct answers, completed items — matches forest green family |
| **Info** | `#3B7A8A` | Informational banners, hints — warm teal |

### Gray Scale (Green-tinted)

Base: `#5A6B5E` — Visily auto-generates complementary shades from light to dark.
All grays have a green/warm tint to match the forest palette. No cold blue-grays.

---

## Typography

| Element | Font | Weight | Size (mobile) |
|---------|------|--------|---------------|
| **Title / Hero** | Nunito | Bold (700) | 28-32px |
| **Heading** | Nunito | SemiBold (600) | 22-24px |
| **Subheading** | Nunito | SemiBold (600) | 16-18px |
| **Body Text** | Inter | Regular (400) | 14-16px |
| **Link** | Inter | Medium (500) | 14-16px |
| **Caption** | Inter | Regular (400) | 12-13px |
| **Overline** | Inter | SemiBold (600) | 11-12px, uppercase |

**Why Nunito?** Rounded terminals — warm, friendly, approachable. Matches botanical brand.
**Why Inter?** Clean, highly readable at small sizes. Excellent for body and UI text.

---

## Spacing & Layout

| Property | Value |
|----------|-------|
| **Base width** | 375px (iPhone SE — mobile first) |
| **Corner radius** | XS: 4px, S: 8px, M: 12px, L: 16px, XL: 24px |
| **Touch targets** | Minimum 44px |
| **Button height** | 44-48px |
| **Card padding** | 16-20px |
| **Section spacing** | 32-48px |
| **Content max-width** | 375px (mobile), 1200px (desktop) |

---

## Navigation

| Pattern | Choice |
|---------|--------|
| **Mobile** | Top Header + Hamburger menu |
| **Desktop** | Top Header with inline links |
| **Bottom nav** | Not used (hamburger instead) |

### Header — Public (not logged in)

- **Left:** "Hinbûna Kurdî" logo text in forest green + small leaf icon
- **Right (3 icons + link):** Language globe icon (opens modal) | Sun/Moon mode toggle icon | "Têkeve" (Login) text link
- All icons: clean, modern, monochrome (forest green on cream) — NOT colorful emoji-style
- Cream `#FDF8F3` background bar

### Header — Logged-in (Student / Teacher / Admin)

- **Left:** "Hinbûna Kurdî" logo text + leaf icon
- **Right (3 icons):** Language globe icon | Sun/Moon mode toggle icon | Hamburger menu icon (3 lines)
- All icons: clean, modern, monochrome

### "Back to Gallery" Button (Dev Utility)

The back-arrow button next to the logo links to the Design Gallery (`index.html`).
It is a **dev-only** shortcut — NOT repeated on every page.

**Where it appears:**
- P1 Landing Page (public entry point)
- S1 Student Dashboard (student entry point)
- T1 Teacher Dashboard (teacher entry point — when built)
- A1 Admin Dashboard (admin entry point — when built)

**Where it does NOT appear:**
- Sub-pages within a role (P2–P7, S2–S12, T2–T8, A2–A6)
- These pages already have breadcrumb or back navigation to their role's dashboard

### Language Picker

- NOT inline pills — too many languages (8+)
- Globe icon in header opens a **modal/dropdown**
- Modal lists all available interface languages
- Replaces the old "DE | EN | TR pill buttons" pattern everywhere (header and footer)

### Hamburger Menu Contents (by role)

- Student: Home, Courses, Profile, Settings, Upgrade, Help, Logout
- Teacher: + Content, Materials, Students
- Admin: + User Management, Subscriptions, System Settings

---

## Dark vs Light Mode

| Rule | Detail |
|------|--------|
| **Default** | Dark mode |
| **Both required** | Every screen designed in both modes |
| **Dark mode feel** | Warm forest at night — NOT matrix/neon/hacker |
| **Light mode feel** | Warm cream paper — NOT clinical white |
| **Brightest element (dark)** | Gold accent (`#D4A843`) — draws eye to CTAs |
| **Primary buttons** | Light: green bg + cream text / Dark: gold bg + dark text |
| **Cards** | 1-2 shade difference from background, not harsh borders |

### Anti-patterns (What Went Wrong with Stitch P0)

| DON'T | DO INSTEAD |
|-------|------------|
| Pure black backgrounds | Deep teal-forest `#1A2024` |
| Neon/electric green text or accents | Forest green `#2D5A3D` |
| Bright white text on dark | Warm cream `#F5EEE6` |
| High-contrast card borders | Subtle shade difference |
| Cold blue-gray neutrals | Green-tinted warm grays |

---

## Component Patterns

### Buttons
- **Primary:** Full-width on mobile, rounded (12px), 44-48px height
- **Light mode:** Forest green bg + cream text
- **Dark mode:** Gold bg + dark text
- **Secondary:** Outlined with green/cream border
- **Danger:** Red bg for destructive actions

### Cards
- Rounded corners (12-16px)
- Subtle shadow (Visily S or M)
- Light mode: beige `#F5EEE6` on cream background
- Dark mode: surface green `#243D30` on dark background
- Feature cards: icon (circle with tinted bg) + title + description

### Inputs
- Rounded (8-12px)
- Light mode: beige fill, green border on focus
- Dark mode: dark surface fill, cream border on focus
- Icons inside inputs (left side)

### Badges
- Gold `#D4A843` for "BEST VALUE", "Premium", etc.
- Green for "Completed", "Active"
- Small, rounded pill shape

### Social Proof
- Avatar stack (3-4 overlapping circles) + "+1k" counter
- Star rating (5 stars, gold)
- Testimonial: quote + name

### Footer (Public pages only)
- Logo centered
- Tagline below logo
- Link row: About | Privacy | Terms | Contact
- Copyright: "© 2026 Adar Schule"
- Light mode: dark green background section (inverted)
- Dark mode: slightly darker than page background
- **No language selector** — language picker lives in the header (globe icon modal)

---

## Design Tools

| Tool | Role | Cost |
|------|------|------|
| **Claude Code + frontend-design plugin** | **Primary** — generates HTML screen designs in terminal | Free (plugin) |
| **Google Stitch MCP** | Quick visual inspiration, reference screens | Free |
| **Visily** | Paused — existing designs for comparison | $11/mo (may cancel) |
| **shadcn/ui** | Code implementation (React phase) | Free |

### Workflow (as of 2026-02-11)
```
Design decisions (this file) → Claude Code + frontend-design skill
    ↓
Generate pure HTML/CSS → Browser preview (375px)
    ↓
Review & iterate in Claude Code
    ↓
mockup/ folder → Version controlled HTML files (light + dark)
    ↓
React + Tailwind + shadcn/ui → Code implementation (later)
```

### Previous Workflow (Visily — paused)
```
Stitch (MCP) → Generate inspiration screens
    ↓
Visily (browser) → AI generate with theme, edit & refine
    ↓
Export → Screenshots for team / Figma for Gule
```

---

## Screen Creation Workflow

Follow these steps for every new screen to ensure consistency across all 32 screens.

1. **Check the Design Gallery** — open `mockup/index.html`, find the next "Pending" screen. Work in priority order (P0 > P1 > P2).
2. **Read the Screen's Prompt File** — `_docs/prompts/[screen].md` (layout sections, content structure, screen-specific notes).
3. **Read the Base Template** — `_docs/archive/prompts/00-base-template.md` (complete brand system reference).
4. **Invoke a design skill** (if using an AI coding tool) — ensures production-grade quality and spatial composition.
5. **Generate LIGHT MODE first** — save as `mockup/[screen].html` (single file with theme toggle).
6. **Review in browser at 375px** — check colors, typography, spacing, visual rhythm.
7. **Add DARK MODE** — same layout, only colors change. Use CSS variables so `theme.js` overrides work.
8. **Run quality checklist** (below) — all items must pass before committing.
9. **Update the Gallery** — in `mockup/index.html`, change status from "Pending" to "Done".
10. **Commit & push** — follow git workflow in [07-ai-development-workflow.md](./07-ai-development-workflow.md).

> Every HTML file must be self-contained. Single file, all CSS in a `<style>` block. Only external dependencies: Google Fonts (Nunito + Inter) and `mockup/shared/` scripts.

---

## Quality Checklist (Per Screen)

Run through after every screen, before committing.

- [ ] Background color correct? Light: cream `#FDF8F3` / Dark: deep forest `#1A2024`
- [ ] NOT matrix green? Dark mode = warm forest at night, not hacker terminal
- [ ] Gold accents present? At least one gold element `#D4A843` on the screen
- [ ] Text readable? Sufficient contrast between text and background
- [ ] Buttons correct? Green + cream (light) / Gold + dark (dark)
- [ ] Cards have subtle separation? Shade difference, not harsh borders
- [ ] Typography correct? Nunito for headings, Inter for body text
- [ ] Kurdish text correct? Characters `e`, `i`, `u`, `c`, `s` display properly
- [ ] Mobile width? 375px base, responsive to wider screens
- [ ] Header consistent? Logo left, globe + toggle + action right
- [ ] No flag icons? Language picker uses text labels, monochrome
- [ ] Sections flow naturally? Visual rhythm, not stacked blocks with equal gaps
- [ ] Touch targets 44px+? All interactive elements large enough to tap
- [ ] CSS animations present? Hover states, fade-ins, smooth transitions
- [ ] Self-contained? Single HTML file, only Google Fonts + shared scripts as external deps

---

## Key Principles

1. **Mobile-first always** — 375px base, desktop is responsive expansion
2. **Warm, not techy** — botanical, cream, forest green, gold — not matrix/neon
3. **Both modes always** — every screen in light AND dark
4. **Kurdish text support** — fonts must render ê, î, û, ç, ş correctly
5. **Accessibility** — WCAG AA contrast, 44px touch targets, reduce motion option
6. **Consistency** — same component patterns across all 32 screens
7. **Future-ready** — SSO, side apps, themes (mezin default, zarok MVP+)

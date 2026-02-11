# Visily Prompt System — HinbunaKurdi

**Purpose:** Standardized prompt system for all screen designs in Visily
**Last Updated:** 2026-02-10

---

## How This System Works

Every Visily prompt has two parts:

1. **Design Instructions** (paste once into Visily's "More menu" > Design Instructions) — persists across all generations on the board
2. **Screen Prompt** (paste per screen) — uses base prefix + screen-specific sections

### Workflow Per Screen

```
1. Open _docs/prompts/[screen].md
2. Review layout sections with Armanc → update if needed
3. Copy the ready prompt (base prefix is already included)
4. Paste into Visily AI chat → generate
5. Use Visily AI Chat Assistant to iterate on details
6. Duplicate frame → generate dark/light variant
7. Check against quality checklist (bottom of this file)
```

---

## Part 1: Design Instructions (Paste Into Visily Once)

> Go to Visily AI chat > More menu > Design Instructions > Create new > Paste everything below

```
APP DESCRIPTION:
- Hinbuna Kurdi is a Kurdish language learning web app teaching Kurmanji dialect (A1-B1 level)
- Target audience: Kurdish diaspora adults in Germany, Turkey, and worldwide
- Platform: Mobile-first (375px base), responsive to desktop
- Brand: Warm, professional, calm, botanical — like Headspace meets a premium SaaS product
- This is a serious, structured curriculum platform with a welcoming aesthetic
- NOT gamified, NOT playful, NOT cartoon-style, NOT childish

COLOR SYSTEM (LIGHT MODE):
- Page background: #FDF8F3 warm cream
- Card/input surface: #F5EEE6 soft beige
- Primary (buttons, links, headings): #2D5A3D forest green
- Accent (badges, highlights, CTAs): #D4A843 warm gold
- Secondary surface: #E3C79D tan
- Text primary: #1A2A1F dark green-black
- Text secondary: #5A6B5E muted green-gray
- Borders/dividers: #E5DDD3 warm tan
- Success: #2D8A4E | Error: #DC4545 | Warning: #EFB034 | Info: #3B7A8A

COLOR SYSTEM (DARK MODE):
- Page background: #1A2F23 deep forest green (NEVER pure black)
- Card/input surface: #243D30 slightly lighter green
- Primary: #2D5A3D forest green
- Accent: #D4A843 warm gold (brightest element on page, draws eye to CTAs)
- Text primary: #F5EEE6 warm off-white
- Text secondary: #A8B5AC soft sage
- Borders/dividers: #2F4F3A subtle green

TYPOGRAPHY:
- Headings: Nunito — Bold (700) for hero, SemiBold (600) for sections
- Body: Inter — Regular (400) for paragraphs, Medium (500) for links
- Captions: Inter — Regular (400), smaller, muted color
- Style: Rounded terminals, warm, friendly — NOT angular or techy
- Must render Kurdish characters: ê, î, û, ç, ş

UI COMPONENTS:
- Buttons: Rounded 12px corners, full-width on mobile, 44-48px height
  - Light: forest green bg + cream text
  - Dark: gold bg + dark text
  - Secondary: outlined with matching border
- Cards: Rounded 12-16px, subtle shadow, 1-2 shade difference from background (not harsh borders)
- Inputs: Rounded 8-12px, icon on left, beige fill (light) / dark surface fill (dark)
- Badges: Gold pill shape for premium features, green for completion states
- Corner radius scale: XS 4px, S 8px, M 12px, L 16px, XL 24px
- Touch targets: minimum 44px

NAVIGATION (ALL SCREENS):
- Header: Logo "Hinbuna Kurdi" + leaf icon left
- Right side (in order): language picker globe icon (dropdown with 8+ languages, no flag icons, monochrome), dark/light mode toggle (sun/moon icon), login/menu
- All header icons: clean, modern, monochrome, matching current theme colors
- Language picker: opens dropdown/modal, text-based labels (not flag emojis)
- Authenticated screens: hamburger menu replaces login link

ANTI-PATTERNS (NEVER DO):
- Pure black backgrounds — use deep forest green #1A2F23
- Neon or electric green text/accents — use forest green #2D5A3D
- Bright white text on dark — use warm cream #FDF8F3
- High-contrast harsh card borders — use subtle shade difference
- Cold blue-gray neutrals — use green-tinted warm grays
- Colorful flag icons for languages — use monochrome text labels
- Gamified, playful, or cartoon elements — keep professional and calm
```

---

## Part 2: Base Prompt Prefix (Light Mode Only)

> This prefix is included at the top of every LIGHT MODE screen prompt. Already embedded in each screen file — do not paste separately.

```
Mobile [SCREEN_TYPE] (375px) for "Hinbuna Kurdi" — a professional Kurdish language learning platform (Kurmanji A1-B1).

LIGHT MODE.
Background: #FDF8F3 warm cream. Surface: #F5EEE6 soft beige.
Primary: #2D5A3D forest green. Accent: #D4A843 warm gold.
Text: #1A2A1F dark green-black. Text secondary: #5A6B5E muted green-gray.
Borders: #E5DDD3 warm tan.
Font: Nunito bold for headings, Inter regular for body. Rounded corners 12px.
```

## Part 2b: Dark Mode Rule

> **IMPORTANT:** Dark mode prompts do NOT repeat the layout/content. Instead, duplicate the approved light mode frame in Visily, then use a color-remapping prompt.

**Dark mode prompts always follow this pattern:**

```
Take the existing light mode [SCREEN_TYPE] and create an EXACT dark mode version. Same layout, same sections, same content, same spacing, same component structure — NOTHING changes except the colors.

DARK MODE color mapping — apply these substitutions throughout:
- Page background: #FDF8F3 cream → #1A2F23 deep forest green (NOT pure black, NOT matrix green)
- Card/surface backgrounds: #F5EEE6 beige → #243D30 slightly lighter green
- Primary text: #1A2A1F dark → #F5EEE6 warm off-white
- Secondary text: #5A6B5E muted gray → #A8B5AC soft sage
- Borders: #E5DDD3 warm tan → #2F4F3A subtle green
- Primary buttons: forest green bg + cream text → GOLD (#D4A843) bg + dark text
- Secondary buttons: green outline → cream outline
- Icon circles: green circles → gold circles
- Checkmarks/badges: keep gold (#D4A843) — gold is now the brightest, most eye-catching element
- Header background: cream → deep forest green, all icons/text become cream-colored
- Footer: dark green → slightly darker than page background
- Final CTA section: forest green → slightly darker (#162B1F), button becomes GOLD
[+ any screen-specific color notes]

Overall feel: Warm forest at night — NOT matrix, NOT neon, NOT hacker terminal. Gold accents glow like candlelight against deep green. Same professional, premium, cozy feel as the light version. Every section, every word, every element stays identical — only the color palette shifts.
```

**Why this approach:** Repeating all sections in dark mode causes Visily to generate a completely new layout, leading to inconsistent content and structure between modes. The color-remap approach ensures pixel-perfect consistency.

---

## Part 3: Cross-Screen Consistency Rules

These rules apply to EVERY screen to maintain visual coherence:

### Layout Rhythm
- Sections must flow into each other with intentional visual rhythm
- Not just stacked blocks with equal gaps — vary backgrounds, spacing, and visual weight
- A tailored, designer-crafted feel where each section transitions naturally to the next

### Spacing
- Section spacing: 32-48px between major sections
- Card padding: 16-20px internal
- Content max-width: 375px mobile, 1200px desktop
- Generous whitespace — let elements breathe

### Visual Hierarchy
- One primary CTA per viewport — the most important action should be immediately obvious
- Light mode: forest green buttons are primary, gold for special emphasis
- Dark mode: gold buttons are primary (brightest element), cream outline for secondary
- Text hierarchy: H1 (28-32px) > H2 (22-24px) > H3 (16-18px) > Body (14-16px) > Caption (12-13px)

### Header Consistency
- Every screen has the same header pattern
- Public pages: Logo left, [language globe, theme toggle, Login/CTA] right
- Authenticated pages: Logo left, [language globe, theme toggle, hamburger] right
- Header background matches page background (not a separate bar color)

### Footer Consistency
- Public pages: dark green background (#2D5A3D), logo centered, tagline, links (About | Privacy | Terms | Contact), copyright "2026 Adar Schule"
- Authenticated pages: minimal or no footer (content-focused)

---

## Part 4: Quality Checklist (After Every Generation)

- [ ] Background color correct? Light: cream #FDF8F3 / Dark: deep forest #1A2F23
- [ ] NOT matrix green? Dark mode = warm forest, not hacker terminal
- [ ] Gold accents present? At least one gold element (#D4A843) per screen
- [ ] Text readable? Sufficient contrast between text and background
- [ ] Buttons correct? Green+cream (light) / gold+dark (dark)
- [ ] Cards have subtle separation? Not harsh borders, just shade difference
- [ ] Typography rounded/friendly? Nunito headings, Inter body — not angular
- [ ] Kurdish text correct? ê, î, û, ç, ş display properly
- [ ] Mobile width? 375px base
- [ ] Header consistent? Logo left, globe + toggle + action right
- [ ] No flag icons? Language picker uses text labels, monochrome
- [ ] Sections flow naturally? Not just boxes stacked with equal gaps
- [ ] Touch targets 44px+? All interactive elements

---

## Part 5: Prompt Tips (From Visily's Official Guide)

- **4,000 character limit** per prompt — be concise but specific
- **One screen per prompt** — never combine multiple screens
- **Name every section and component** — don't be vague
- **Always state platform** — "Mobile 375px" in every prompt
- **Start broad, iterate with chat** — generate layout first, then refine with AI Assistant
- **Upload reference screenshots** — pair prompts with visual references for best results
- **Use Design Instructions** — the persistent context above handles brand consistency
- **Focus on outcomes first** — describe what you want, then iterate on specifics

---

## Screen Prompt Files

| File | Screen | Status |
|------|--------|--------|
| `P1-landing-page.md` | Landing Page (light + dark) | In Progress |
| `P2-pricing.md` | Pricing Page | Pending |
| `P3-login.md` | Login | Pending |
| `P4-register.md` | Register | Pending |
| `P5-forgot-password.md` | Forgot Password | Pending |
| `P6-about.md` | About Page | Pending |
| `S1-dashboard.md` | Student Dashboard | Pending |
| ... | ... | ... |

---

---

## Part 6: Claude Code HTML Workflow (Added 2026-02-11)

> **Primary workflow as of 2026-02-11.** Generates screen designs as pure HTML/CSS files directly in Claude Code. Visily workflow above still valid but paused.

### Why HTML Instead of Visily

- Everything in the codebase — version controlled, git-tracked, team-shareable
- Instant iteration in Claude Code — no copy-pasting between tools
- Zero setup — pure HTML, open in any browser
- The `frontend-design` Claude Code plugin ensures production-grade design quality
- Later these HTML designs become the blueprint for React+Tailwind implementation

### Workflow Per Screen (Claude Code)

```
1. Read this file (00-base-template.md) — brand system reference
2. Read _docs/prompts/[screen].md — agreed layout sections
3. Invoke frontend-design skill — ensures quality bar
4. Discuss layout with Armanc → adjust if needed
5. Generate responsive HTML (light mode first) → save to site/[screen].html
6. Armanc opens in browser → resizes manually or uses DevTools for mobile view
7. Iterate until light mode approved
8. Add dark mode CSS + theme toggle to SAME file
9. Run quality checklist (Part 4 above)
```

### HTML File Standards

Every generated HTML file must:

- Be **self-contained** — single file, no external dependencies (except Google Fonts CDN for Nunito + Inter)
- Use `<style>` block — all CSS in the file, no external stylesheets
- Set viewport: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Use **CSS custom properties** for all brand colors (matches Part 1 color system):

```css
:root {
  /* Light mode (default) */
  --bg-page: #FDF8F3;
  --bg-surface: #F5EEE6;
  --color-primary: #2D5A3D;
  --color-accent: #D4A843;
  --color-tan: #E3C79D;
  --text-primary: #1A2A1F;
  --text-secondary: #5A6B5E;
  --border: #E5DDD3;
  --color-success: #2D8A4E;
  --color-error: #DC4545;
  --color-warning: #EFB034;
  --color-info: #3B7A8A;
}

/* Dark mode overrides */
[data-theme="dark"] {
  --bg-page: #1A2F23;
  --bg-surface: #243D30;
  --color-primary: #2D5A3D;
  --color-accent: #D4A843;
  --text-primary: #F5EEE6;
  --text-secondary: #A8B5AC;
  --border: #2F4F3A;
}
```

- Use **Nunito** for headings, **Inter** for body (via Google Fonts)
- Be **fully responsive** — mobile-first, scales to desktop. Use `max-width: 1200px; margin: 0 auto;` container with responsive padding
- Responsive breakpoints: mobile (default) → tablet (`min-width: 768px`) → desktop (`min-width: 1024px`)
- Include the full brand system (colors, typography, spacing, components) as defined in Parts 1-3

### Dark Mode HTML Approach (DECIDED)

**Single file with toggle** — each screen is ONE responsive HTML file:
- CSS custom properties for all colors (`:root` for light, `[data-theme="dark"]` for dark)
- Built-in theme toggle in header (sun/moon icon)
- `data-theme="dark"` attribute on `<html>` switches all colors
- Design light mode first → when approved, add dark mode CSS + toggle

### File Naming & Location

```
_REPOS/hinbuna-kurdi/site/
├── index.html              (design gallery — links to all screens)
├── onboarding.html         (developer guide)
├── P1-landing.html         (responsive, light+dark toggle)
├── P2-pricing.html
├── P3-login.html
├── ...
├── S1-dashboard.html
├── ...
└── shared/                 (optional: shared CSS if patterns emerge)
```

### frontend-design Skill — HinbunaKurdi Adaptation

The `frontend-design` skill pushes for bold, distinctive design. When using it for HinbunaKurdi:

**Use the skill's quality standards:**
- Production-grade, functional code
- Meticulous attention to detail
- Intentional spatial composition
- Meaningful motion and micro-interactions

**Stay within HinbunaKurdi brand:**
- Typography: Nunito + Inter (decided, don't experiment with fonts)
- Colors: Forest green + cream + gold system (decided, don't change palette)
- Vibe: Calm + SaaS, warm botanical (decided, don't go brutalist/maximalist)
- Add: subtle CSS animations, hover effects, smooth transitions, depth textures
- Add: intentional visual rhythm, generous whitespace, section flow

**Anti-patterns (from the skill, adapted):**
- NO generic AI aesthetics — no Inter-only, no purple gradients, no cookie-cutter layouts
- NO over-experimentation — brand is decided, execute it beautifully
- YES distinctive execution within the brand constraints
- YES micro-interactions that make it feel alive (hover states, focus rings, smooth scrolls)

### Available MCP Tools (Optional)

| Tool | When to use |
|------|-------------|
| **Stitch: generate_screen_from_text** | Quick visual inspiration if stuck on a layout |
| **Stitch: fetch_screen_image** | View previous Stitch generations for reference |
| **Stitch: fetch_screen_code** | Grab HTML snippets from Stitch outputs as starting points |

---

## References

- Visily prompt guide: `_docs/archive/10-visily-prompt-guide.md`
- Old prompts (reference): `_docs/archive/`
- Design decisions: `_docs/09-design-decisions.md`
- Flow documents: `_docs/flows/`

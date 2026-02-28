# P2. Pricing Page — Screen Prompt

**Screen:** Pricing Page (Public)
**Priority:** P1
**Status:** Drafting
**Last Updated:** 2026-02-10

---

## Layout Decision (Agreed Sections)

| # | Section | Purpose |
|---|---------|---------|
| 1 | Header | Same as landing — logo, globe, toggle, login |
| 2 | Page Hero | Headline + subtext — sets pricing context |
| 3 | Pricing Cards | Free vs Premium — connected component with expanded feature lists |
| 4 | Feature Comparison Table | Full checklist — every feature, check/cross per plan |
| 5 | FAQ | 6 common billing questions — accordion style |
| 6 | Final CTA | Closing conversion — inverted background |
| 7 | Footer | Same as landing |

---

## Section Details

### 1. HEADER
- Same pattern as landing page
- Left: "Hinbuna Kurdi" logo text + small leaf icon
- Right (in order): language globe icon, sun/moon toggle, "Tekeve" (Login) text link
- All icons clean, modern, monochrome
- Light: cream background / Dark: deep forest green background

### 2. PAGE HERO
- Centered heading: "Planeke hilbijere" (Choose a plan)
- Subtext: "Start free, upgrade when you're ready. No credit card required."
- Clean, typography-driven, minimal — just text, no decoration
- Light: forest green heading, muted gray subtext on cream
- Dark: cream heading, sage subtext on deep forest green

### 3. PRICING CARDS
- Same connected-component design as landing page — NOT two floating boxes
- Two plans in ONE cohesive container with shared visual relationship
- Expanded feature bullet lists compared to landing page version

- Free plan:
  - "Belas" (Free) label
  - EUR 0
  - Features: 2 free units, basic progress tracking, community access
  - Secondary button (outline): "Dest pe bike" (Get started)

- Premium plan (visually emphasized):
  - "Premium" label with gold "BEST VALUE" pill badge
  - EUR 7.99/mo
  - Features: All courses, all audio/TTS, AI-powered practice, detailed analytics, offline mode, priority support, completion certificate
  - Primary button: "Premium bibe" (Go Premium)
  - Subtle elevation: different background shade, gold accent border, or shadow

- Light: green primary button, gold badge, beige cards
- Dark: gold primary button, gold badge, surface green cards, subtle gold border on premium

### 4. FEATURE COMPARISON TABLE
- Full-width table — clean, scannable
- Column headers: Feature | Belas (Free) | Premium
- Premium column subtly highlighted (faint background tint)
- Rows:
  | Feature | Free | Premium |
  |---------|------|---------|
  | Structured Lessons | 2 units | All courses |
  | Native Audio (TTS) | Limited | Full access |
  | AI-Powered Practice | — | Checkmark |
  | Progress Analytics | Basic | Detailed |
  | Offline Mode | — | Checkmark |
  | Priority Support | — | Checkmark |
  | Community Access | Checkmark | Checkmark |
  | Completion Certificate | — | Checkmark |
- Checkmarks: green circles with check icons / Crosses: muted dashes or X
- Light: beige table background, green checkmarks, warm tan borders
- Dark: surface green background, gold checkmarks, subtle green borders

### 5. FAQ
- Heading: "Pirsên hevpar" (Common questions)
- 6 accordion items — collapsed by default, first one expanded as example
- Each item: question text + chevron icon (rotates when open)
- Questions and short answers:
  1. "Is Hinbuna Kurdi really free?" — Yes, the free plan gives you access to 2 complete units with no time limit.
  2. "What payment methods do you accept?" — Credit/debit cards and PayPal. All payments processed securely.
  3. "Can I cancel my subscription anytime?" — Yes, cancel anytime from your account settings. No cancellation fees.
  4. "What happens when I cancel Premium?" — You keep access until your billing period ends, then revert to the free plan.
  5. "Is there a student or family discount?" — We're working on group plans. Join our community for updates.
  6. "Can I switch between plans?" — Yes, upgrade or downgrade anytime from your account settings.
- Light: beige accordion backgrounds, forest green question text, warm tan dividers
- Dark: surface green accordions, cream question text, subtle green dividers

### 6. FINAL CTA
- Inverted background section (same pattern as landing page)
- Light: forest green (#2D5A3D) background, cream text
- Dark: slightly darker green (#162B1F) background, cream text
- Heading: "Iro dest pe bike — Belas e" (Start today — It's free)
- Subtext: brief reinforcement — "No credit card required. Upgrade anytime."
- CTA button: gold bg + dark text (both modes)

### 7. FOOTER
- Same as landing page
- Logo centered, tagline, links (About | Privacy | Terms | Contact), copyright

---

## Ready Prompt — LIGHT MODE

> Ensure Design Instructions are set in Visily first (see 00-base-template.md Part 1)

```
Mobile pricing page (375px) for "Hinbuna Kurdi" — a professional Kurdish language learning platform (Kurmanji A1-B1).

LIGHT MODE.
Background: #FDF8F3 warm cream. Surface: #F5EEE6 soft beige.
Primary: #2D5A3D forest green. Accent: #D4A843 warm gold.
Text: #1A2A1F dark green-black. Text secondary: #5A6B5E muted green-gray.
Borders: #E5DDD3 warm tan.
Font: Nunito bold for headings, Inter regular for body. Rounded corners 12px.

Sections top to bottom:

1. HEADER — Left: "Hinbuna Kurdi" text + small leaf icon in forest green. Right side in order: globe icon for language picker (monochrome, no flags), sun/moon theme toggle icon, "Tekeve" (Login) text link. Cream background. All icons clean and monochrome.

2. PAGE HERO — Centered forest green heading "Planeke hilbijere" (Choose a plan). Muted gray subtext below: "Start free, upgrade when you're ready. No credit card required." Typography-driven, minimal, no decoration.

3. PRICING CARDS — Two plans as ONE cohesive connected component, not two separate boxes. Shared visual container with connected borders:
   - Free: "Belas" label, EUR 0, features listed (2 free units, basic progress, community access), green outline button "Dest pe bike"
   - Premium: "Premium" with gold "BEST VALUE" badge, EUR 7.99/mo, full features listed (all courses, all audio, AI practice, detailed analytics, offline mode, priority support, certificate), solid green button "Premium bibe". Premium card has subtle emphasis (shadow or accent border).

4. FEATURE COMPARISON TABLE — Full-width table with clean rows. Column headers: Feature | Belas | Premium. Premium column has faint beige highlight. Rows: Structured Lessons (2 units / All courses), Native Audio (Limited / Full), AI Practice (dash / green checkmark), Progress Analytics (Basic / Detailed), Offline Mode (dash / checkmark), Priority Support (dash / checkmark), Community Access (checkmark / checkmark), Certificate (dash / checkmark). Green circle checkmarks, muted dashes for unavailable. Warm tan row borders.

5. FAQ — Heading "Pirsên hevpar" in forest green. Six accordion items on beige backgrounds with warm tan dividers. First item expanded, rest collapsed with chevron icons. Questions: Is it really free? Payment methods? Cancel anytime? What after cancel? Student discount? Switch plans? Short, direct answers. Forest green question text.

6. FINAL CTA — Forest green (#2D5A3D) background section. Cream heading "Iro dest pe bike — Belas e". Subtext: "No credit card required. Upgrade anytime." Gold accent button with dark text "Dest pe bike".

7. FOOTER — Dark green background. "Hinbuna Kurdi" logo centered in cream. Links: Derbere | Privacy | Terms | Contact. Copyright "© 2026 Adar Schule".

Overall: Clean, focused pricing page. Sections flow with visual rhythm — cream hero, beige cards, cream table, beige FAQ, green CTA. Professional, designer-crafted. NOT template pricing grids. Warm botanical feel with SaaS-level structure.
```

---

## Ready Prompt — DARK MODE

> Generate after light mode is approved. Duplicate the light mode frame in Visily, then use this prompt on the duplicate.

```
Take the existing light mode pricing page and create an EXACT dark mode version. Same layout, same sections, same content, same spacing, same component structure — NOTHING changes except the colors.

DARK MODE color mapping — apply these substitutions throughout:
- Page background: #FDF8F3 cream → #1A2F23 deep forest green (NOT pure black, NOT matrix green)
- Card/surface backgrounds: #F5EEE6 beige → #243D30 slightly lighter green
- Primary text: #1A2A1F dark → #F5EEE6 warm off-white
- Secondary text: #5A6B5E muted gray → #A8B5AC soft sage
- Borders: #E5DDD3 warm tan → #2F4F3A subtle green
- Primary buttons: forest green bg + cream text → GOLD (#D4A843) bg + dark text
- Secondary buttons: green outline → cream outline
- Table: Premium column highlight beige → faint surface green, checkmarks stay green, add gold tint
- Accordion backgrounds: beige → surface green (#243D30), dividers → subtle green
- Header background: cream → deep forest green, all icons/text become cream-colored
- Footer: dark green → slightly darker than page background
- Final CTA section: forest green → slightly darker (#162B1F), button becomes GOLD

Overall feel: Warm forest at night — NOT matrix, NOT neon, NOT hacker terminal. Gold accents glow like candlelight against deep green. Same professional, premium, cozy feel as the light version. Every section, every word, every element stays identical — only the color palette shifts.
```

---

## Iteration Notes

| # | Change Requested | Credits Used | Result |
|---|-----------------|--------------|--------|
| 1 | Initial generation (light) | | |
| 2 | | | |

---

## Version History

| Date | Change |
|------|--------|
| 2026-02-10 | Created — aligned sections with Armanc |

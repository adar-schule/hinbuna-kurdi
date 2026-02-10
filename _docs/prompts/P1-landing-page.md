# P1. Landing Page — Screen Prompt

**Screen:** Landing Page (Public)
**Priority:** P0
**Status:** Drafting
**Last Updated:** 2026-02-10

---

## Layout Decision (Agreed Sections)

| # | Section | Purpose |
|---|---------|---------|
| 1 | Header | Brand identity + navigation (globe, theme toggle, login) |
| 2 | Hero | Primary value proposition + main CTA |
| 3 | Sponsors Carousel | Partner credibility — prestigious "Supported by" showcase |
| 4 | Trust Bar | Community data — people-focused stats |
| 5 | Trustpilot | Third-party trust signal — original Trustpilot embedded style |
| 6 | Features | Platform capabilities including AI-powered learning |
| 7 | Pricing | Free vs Premium — visually connected, designer approach |
| 8 | Final CTA | Closing conversion section |
| 9 | Footer | Brand, links, copyright |

---

## Section Details

### 1. HEADER
- Left: "Hinbuna Kurdi" logo text + small leaf icon
- Right (in order): language picker globe icon (dropdown, 8+ languages, text labels, NO flag icons, monochrome), sun/moon dark/light toggle, "Tekeve" (Login) text link
- All icons clean, modern, monochrome, matching theme
- Light: cream background, forest green elements
- Dark: deep forest green background, cream elements

### 2. HERO
- Large heading: "Ferbuna zimane kurdi — bi rebazên nujen" (Learn Kurdish with modern methods)
- Subtext: Structured Kurmanji curriculum from A1 to B1. Professional educators. Native audio. AI-powered practice.
- Full-width primary CTA button: "Dest pe bike — Belas e" (Get started — It's free)
- Below button: small muted text "No credit card required"
- Clean, typography-driven — no cartoon illustrations or mascots

### 3. SPONSORS CAROUSEL — "Supported by"
- Section heading: "Supported by" in a refined, understated style
- Horizontally auto-scrolling strip of partner/sponsor logos
- Logos appear in monochrome/grayscale by default
- On hover: logo transitions smoothly to full original color, carousel pauses
- The design must look prestigious and high-end — this section represents organizations that financially support the platform
- Think of how Stripe, Vercel, or Linear display partner logos: generous spacing, clean alignment, elegant motion
- Light: clean cream background strip
- Dark: slightly differentiated background strip (#243D30 or subtle gradient)
- Placeholder logos for now (6-8 logo slots)

### 4. TRUST BAR
- A compact, visually refined horizontal stats row
- People-focused data points with minimal icons:
  - "1,000+ Active Learners"
  - "100+ Structured Lessons"
  - "Native Kurmanji Audio"
- Numbers should feel human and relatable, not just technical metrics
- Integrated into page flow — visually connected to surrounding sections, not a floating isolated bar
- Light: beige surface strip with green text
- Dark: surface green strip (#243D30) with cream text, gold-tinted icons

### 5. TRUSTPILOT
- Embedded in Trustpilot's own recognizable visual style: their signature green color, their star rating system, their badge layout
- This must look like a genuine Trustpilot widget so visitors immediately recognize it as authentic third-party validation
- Content: star rating badge, score (e.g. "4.8/5"), "Excellent" label, 1-2 short review snippets
- Surrounding spacing and alignment should match our design rhythm — Trustpilot's own style inside, our layout framing outside
- Not our custom-styled stars — Trustpilot's actual visual identity

### 6. FEATURES
- Section heading: "Cima Hinbuna Kurdi?" (Why Hinbuna Kurdi?)
- Four feature cards stacked vertically, each with: circle icon (theme-appropriate tint) + bold title + description
- Cards:
  1. "Dersen Birekupek" (Structured Curriculum) — Professional A1-B1 Kurmanji lessons designed by Kurdish educators. Step-by-step progression from alphabet to conversation.
  2. "Hinbuna bi AI" (AI-Powered Learning) — AI evaluates your performance during lessons, identifies weak areas, and generates personalized practice sets adapted to your level.
  3. "Denge Zimaki (AI TTS)" (Native Audio) — Every word and sentence with native Kurmanji pronunciation powered by AI text-to-speech technology. Listen, repeat, improve.
  4. "Pesketina Te" (Your Progress) — Detailed analytics tracking your learning journey: completed lessons, vocabulary growth, accuracy trends, and daily consistency.
- Cards should feel premium and professional — not template-looking flat cards
- Light: beige card backgrounds on cream, green circle icons
- Dark: surface green cards (#243D30), gold circle icons, cream titles, sage descriptions

### 7. PRICING
- Section heading: "Planeke hilbijere" (Choose a plan)
- Two plan options presented as ONE cohesive pricing component — NOT two disconnected floating boxes
- The cards should share a visual relationship: connected borders, shared background panel, or unified container that makes them feel like parts of the same element
- Free plan:
  - "Belas" (Free) label
  - EUR 0
  - Features: 2 free units, basic progress tracking, community access
  - Secondary button (outline): "Dest pe bike" (Get started)
- Premium plan (visually emphasized):
  - "Premium" label with gold "BEST VALUE" pill badge
  - EUR 7.99/mo
  - Features: All courses, all audio, AI-powered practice, detailed analytics, offline mode
  - Primary button: "Premium bibe" (Go Premium)
  - Subtle visual elevation: slightly different background, gold accent border, or shadow
- Professional designer approach: intentional spacing, clear hierarchy showing Premium as the natural upgrade path
- Light: green primary button, gold badge
- Dark: gold primary button, gold badge, subtle gold border on premium card

### 8. FINAL CTA
- Inverted background section to create visual contrast and signal "this is the end, take action"
- Light: forest green (#2D5A3D) background, cream text
- Dark: slightly darker green (#162B1F) background, cream text
- Heading: "Iro dest pe bike" (Start today)
- Subtext: brief reinforcement of value proposition
- CTA button: Light: gold bg + dark text / Dark: gold bg + dark text (gold stands out on both)
- This section ties together the page narrative — visitor should feel compelled to start

### 9. FOOTER
- Light: dark green (#2D5A3D) background (inverted from page)
- Dark: slightly darker than page background
- "Hinbuna Kurdi" logo centered
- Tagline below logo
- Links row: Derbere (About) | Polîtîka Niheniye (Privacy) | Sert u Merc (Terms) | Têkilî (Contact)
- Copyright: "© 2026 Adar Schule"
- Clean, minimal, professional

---

## Ready Prompt — LIGHT MODE

> Ensure Design Instructions are set in Visily first (see 00-base-template.md Part 1)

```
Mobile landing page (375px) for "Hinbuna Kurdi" — a professional Kurdish language learning platform (Kurmanji A1-B1).

LIGHT MODE.
Background: #FDF8F3 warm cream. Surface: #F5EEE6 soft beige.
Primary: #2D5A3D forest green. Accent: #D4A843 warm gold.
Text: #1A2A1F dark green-black. Text secondary: #5A6B5E muted green-gray.
Borders: #E5DDD3 warm tan.
Font: Nunito bold for headings, Inter regular for body. Rounded corners 12px.

Sections top to bottom:

1. HEADER — Left: "Hinbuna Kurdi" text + small leaf icon in forest green. Right side in order: globe icon for language picker (monochrome, no flags), sun/moon theme toggle icon, "Tekeve" (Login) text link. Cream background. All icons clean and monochrome.

2. HERO — Large forest green heading "Ferbuna zimane kurdi — bi rebazên nujen". Subtext in muted gray: "Structured Kurmanji curriculum from A1 to B1. Professional educators. Native audio. AI-powered practice." Full-width forest green CTA button with cream text "Dest pe bike — Belas e". Below: small muted text "No credit card required". Typography-driven, no illustrations.

3. SPONSORS CAROUSEL — "Supported by" heading in understated style. Horizontally scrolling strip of 6-8 partner logos in grayscale/monochrome. Clean cream background. Generous spacing between logos. Prestigious, high-end feel like Stripe or Linear partner sections.

4. TRUST BAR — Compact stats row on beige surface: "1,000+ Active Learners" | "100+ Structured Lessons" | "Native Kurmanji Audio". Small minimal icons. Forest green text. Integrated into page flow, not a floating island.

5. TRUSTPILOT — Embedded Trustpilot widget in their original recognizable style: Trustpilot green, their star system, their badge layout. Score "4.8/5", "Excellent" label, 1-2 short review quotes. Must look like authentic Trustpilot, not custom-styled reviews.

6. FEATURES — Heading "Cima Hinbuna Kurdi?". Four cards stacked vertically, beige backgrounds, subtle borders:
   - Book icon in green circle: "Dersen Birekupek" — Structured A1-B1 curriculum by Kurdish educators
   - Brain/AI icon in green circle: "Hinbuna bi AI" — AI evaluates performance, generates personalized practice
   - Headphones icon in green circle: "Denge Zimaki" — Native Kurmanji audio via AI text-to-speech
   - Chart icon in green circle: "Pesketina Te" — Detailed learning analytics and progress tracking

7. PRICING — Heading "Planeke hilbijere". Two plans as ONE cohesive connected component, not two separate boxes. Shared visual container with connected borders:
   - Free: "Belas" EUR 0, basic features listed, green outline button "Dest pe bike"
   - Premium: "Premium" with gold "BEST VALUE" badge, EUR 7.99/mo, full features, solid green button "Premium bibe". Premium card has subtle emphasis (shadow or accent border).

8. FINAL CTA — Forest green (#2D5A3D) background section. Cream heading "Iro dest pe bike". Brief subtext. Gold accent button "Belas dest pe bike" with dark text.

9. FOOTER — Dark green background. "Hinbuna Kurdi" logo centered in cream. Links: Derbere | Privacy | Terms | Contact. Copyright "© 2026 Adar Schule".

Overall design: Sections flow into each other with intentional visual rhythm — varied backgrounds and spacing create a natural reading flow. Professional, tailored, designer-crafted. Warm botanical warmth with SaaS-level structure. NOT gamified, NOT playful, NOT template-looking.
```

---

## Ready Prompt — DARK MODE

> Generate after light mode is approved. Duplicate the light mode frame in Visily, then use this prompt on the duplicate.

```
Take the existing light mode landing page and create an EXACT dark mode version. Same layout, same sections, same content, same spacing, same component structure — NOTHING changes except the colors.

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

Overall feel: Warm forest at night — NOT matrix, NOT neon, NOT hacker terminal. Gold accents glow like candlelight against deep green. Same professional, premium, cozy feel as the light version. Every section, every word, every element stays identical — only the color palette shifts.
```

---

## Iteration Notes

> After generating, use Visily AI Chat Assistant to refine. Log iterations here.

| # | Change Requested | Credits Used | Result |
|---|-----------------|--------------|--------|
| 1 | Initial generation (light) | ~30 | |
| 2 | | | |
| 3 | | | |

---

## Version History

| Date | Change |
|------|--------|
| 2026-02-10 | Created — agreed sections with Armanc, new prompt system |

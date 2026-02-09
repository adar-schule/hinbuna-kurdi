# Visily Design Guide — Hinbûna Kurdî

**Purpose:** Step-by-step guide for designing all MVP screens in Visily
**Last Updated:** 2026-02-08
**Reference Designs:** `Desktop/Design/01/` (6 Stitch screenshots)

---

## Part 1: Brand DNA (Extracted from Approved Screens)

These rules come directly from the 6 Stitch screenshots you approved. Every Visily prompt must maintain this visual language.

### Color System

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Background** | `#FDF8F3` warm cream | `#1A2F23` deep forest (NOT black) | Page background |
| **Surface** | `#F5EEE6` soft beige | `#243D30` slightly lighter green | Cards, inputs |
| **Primary** | `#2D5A3D` forest green | `#2D5A3D` forest green | Buttons, links |
| **Primary Text on Dark BG** | — | `#FDF8F3` cream white | Headings on dark |
| **Accent** | `#D4A843` warm gold | `#D4A843` warm gold | Badges, highlights, CTAs on dark |
| **Text Primary** | `#1A2A1F` dark green-black | `#F5EEE6` warm off-white | Body text |
| **Text Secondary** | `#5A6B5E` muted green-gray | `#A8B5AC` soft sage | Subtitles, hints |
| **Success** | `#2D8A4E` | `#4ADE80` | Correct, completed |
| **Error** | `#DC4545` | `#F87171` | Wrong, danger |
| **Border** | `#E5DDD3` warm tan | `#2F4F3A` subtle green | Card borders, dividers |

### Critical Rules (What Went Wrong with Stitch P0)

| DO | DON'T |
|----|-------|
| Deep forest green backgrounds (`#1A2F23`) | Pure black or charcoal-black backgrounds |
| Warm cream text on dark (`#FDF8F3`) | Bright white or neon green text |
| Gold accent for emphasis (`#D4A843`) | Neon/electric green accents |
| Subtle card separation (1-2 shade difference) | High-contrast card borders |
| Botanical, warm, natural feel | Techy, matrix, cyberpunk feel |
| Both dark AND light mode for every screen | Dark-only designs |

### Typography

| Element | Style | Size (mobile) |
|---------|-------|---------------|
| **H1 (Hero)** | Bold, rounded sans-serif | 28-32px |
| **H2 (Section)** | Semibold | 22-24px |
| **H3 (Card title)** | Semibold | 16-18px |
| **Body** | Regular | 14-16px |
| **Caption** | Regular, muted color | 12-13px |
| **Button** | Semibold, uppercase or title case | 14-16px |

Font: Use Visily's closest match to **Nunito**, **DM Sans**, or **Plus Jakarta Sans** — rounded, friendly, warm.

### Component Patterns (from approved screenshots)

**Navigation:**
- Top header bar: Logo left, CTA or hamburger right
- Light mode: cream bar, green text
- Dark mode: dark green bar, cream text

**Buttons:**
- Primary: forest green bg + cream text (light mode) / gold bg + dark text (dark mode)
- Secondary: outlined with green border
- Rounded corners (8-12px radius)
- Full-width on mobile

**Feature Cards:**
- Icon (circle with soft background) + Title + Description
- Stacked vertically on mobile, 3 columns on desktop
- Subtle background differentiation from page

**Pricing Cards:**
- Side-by-side on mobile (compact) or stacked
- "BEST VALUE" gold badge on premium
- Primary plan highlighted with accent border/shadow

**Social Proof:**
- Avatar stack (3-4 overlapping circles) + "+1k" badge
- Star rating (5 stars, gold)
- Testimonial quote with name

**Footer:**
- App name/logo centered
- Links: About, Privacy, Support
- Language selector: pill buttons (DE, EN, TR)
- Copyright line

---

## Part 2: Visily Setup Workflow

### Step 1: Create Project
1. Go to [visily.ai](https://vis.ai) → Your Team Space
2. Create new project: **"Hinbûna Kurdî — MVP Screens"**

### Step 2: Set Smart Theme
1. Click **"Theme"** button (bottom-left sidebar)
2. Set brand colors:
   - Primary: `#2D5A3D`
   - Secondary: `#D4A843`
   - Background: `#FDF8F3` (light) / `#1A2F23` (dark)
   - Text: `#1A2A1F` (light) / `#F5EEE6` (dark)
3. Set font to closest match: **Nunito** or **DM Sans**
4. Save as default theme

### Step 3: Import Reference Screens
1. Upload these 4 screenshots as reference (from `Desktop/Design/01/`):
   - `stitch_01.../hinbûna_kurdî_friendly_-_light/screen.png` — **PRIMARY reference (light)**
   - `stitch_01.../hinbûna_kurdî_friendly_-_dark/screen.png` — **PRIMARY reference (dark)**
   - `stitch_hinb.../hinbûna_kurdî_landing_light/screen.png` — Secondary reference (light v2)
   - `stitch_hinb.../hinbûna_kurdî_landing_dark/screen.png` — Secondary reference (dark v2)
2. Use Visily's **"Screenshot to Design"** feature to convert the best one into an editable template
3. Extract components (header, buttons, cards) to reuse across screens

### Step 4: Generate Screens (one by one)
- Use prompts from Part 3 below
- Always generate **light mode first**, then duplicate and switch to dark
- After each screen: check against brand DNA (Part 1)
- Fix anything that drifts toward "matrix green" or loses warmth

---

## Part 3: Screen Prompts (Public Pages)

> **How to use these prompts in Visily:**
> 1. Open your Visily project
> 2. Click "Generate with AI" or use the prompt input
> 3. Paste the prompt
> 4. After generation, compare with your reference screenshots
> 5. Edit manually if components are off-brand
> 6. Duplicate the frame, switch to opposite color mode

---

### P1. Landing Page — Light Mode

```
Mobile landing page (375px) for "Hinbûna Kurdî" — a Kurdish language learning app.

LIGHT MODE. Background: warm cream (#FDF8F3). Text: dark forest green.
Primary button: forest green with cream text. Accent: warm gold.

Sections top to bottom:
1. HEADER BAR — Logo "Hinbûna Kurdî" left, "LOG IN" link right. Cream background.
2. HERO — Botanical illustration (plant/leaf, soft greens and beige). Large heading "Fêrbûna zimanê kurdî" below illustration. Subtext: "The free, fun, and effective way to learn Kurdish!" Green CTA button "DEST PÊ BIKE" (Start) full-width.
3. SOCIAL PROOF — Avatar stack (3 overlapping circles + "+1k" badge). "Join 1000+ learners" text. 5 gold stars.
4. FEATURES — Section title "Why learn with us?" Three feature cards stacked vertically. Each card: circle icon (green/gold tint) + bold title + short description.
   - "Structured Lessons" — Step-by-step curriculum for beginners
   - "Audio Pronunciation" — Native speaker audio clips
   - "Track Progress" — Daily streak and achievements
5. PRICING — Section title "Choose your path". Two plan cards side by side:
   - Basic: "Free" badge, bullet points
   - Premium: "$4.99/mo" with gold "BEST VALUE" badge, green "TRY PREMIUM" button
6. FOOTER — Dark green background section. App logo centered. "Make language learning a habit." Language selector: DE | EN | TR pill buttons. Links: Privacy, Terms, Contact.

Feel: Warm, welcoming, botanical, like Headspace meets Duolingo. Rounded corners everywhere. Friendly typography.
```

### P1. Landing Page — Dark Mode

```
Mobile landing page (375px) for "Hinbûna Kurdî" — Kurdish language learning app.

DARK MODE. Background: deep forest green (#1A2F23), NOT pure black. Text: warm cream (#FDF8F3).
Buttons: warm gold (#D4A843) accent. Cards: slightly lighter green (#243D30).

Sections top to bottom:
1. HEADER — "Hinbûna Kurdî" in cream, small leaf/book icon. Right: "Têkeve" (Login) link.
2. HERO — Background has subtle nature photo overlay (forest, leaves) with dark green tint. Large cream heading "Fêrbûna zimanê kurdî hêsan e" (Learning Kurdish is easy). Subtext in cream. Gold CTA button "Dest pê bike →" with arrow. Below: avatar stack "Join 10,000+ learners".
3. FEATURES — Title "Taybetmendî" (Features). Three feature rows, each with gold/green circle icon + cream title + muted description:
   - "Dersên Interaktîf" — Interactive lessons
   - "Axaftina Rojane" — Daily practice
   - "Pêşketin û Xelat" — Progress & rewards
4. PRICING — Title "Planekê Hilbijêre" (Choose a plan). Gold "BEST VALUE" badge. Premium card highlighted with gold border: "$4.99/month". Features listed with green checkmarks. Gold button "7 rojan belaş biceribîne" (7 days free trial).
5. REVIEWS — "Xwendevan çi dibêjin?" (What learners say). Star rating. Quote with name.
6. FOOTER — Sticky bottom bar: "Dest pê bike" (Start) gold button.

Feel: Warm forest at night, NOT matrix/neon. Gold glows against deep green. Cozy, heritage, inviting.
```

---

### P2. Pricing Page — Light Mode

```
Mobile pricing page (375px) for Kurdish learning app.

LIGHT MODE. Cream background (#FDF8F3), forest green text, gold accents.

Layout:
1. HEADER — Back arrow left, "Pricing" title center.
2. TOGGLE — "Monthly | Yearly" pill toggle. Yearly shows "Save 30%" green badge.
3. THREE PLAN CARDS stacked vertically, full-width, rounded corners:

   FREE card (cream background, green border):
   - "Belaş" (Free) title
   - "€0"
   - Features: 2 free units, basic progress, community access
   - Green outline button "Current Plan" or "Start Free"

   PREMIUM card (highlighted — subtle green tint background, gold "BEST VALUE" badge):
   - "Premium" title
   - "€7.99/mo" (or €59.99/year)
   - Features: All courses, all audio, detailed analytics, offline mode, no ads
   - Forest green solid button "Upgrade Now"

   LIFETIME card (cream background, gold border):
   - "Lifetime" title with star icon
   - "€149" one-time
   - Features: Everything forever, early access to new features
   - Gold button "Get Lifetime"

4. FAQ — "Questions?" title. 3 expandable rows:
   - "Can I cancel anytime?"
   - "What's included in free?"
   - "Do you offer refunds?"
5. FOOTER — "Need help? support@hinbunakurdi.com" link.

Feel: Clear comparison, premium feels premium but not pushy. Warm and trustworthy.
```

### P2. Pricing Page — Dark Mode

```
Mobile pricing page (375px) for Kurdish learning app.

DARK MODE. Deep forest green (#1A2F23) background, cream text, gold accents.

Same layout as light version but:
- Background: deep forest green
- Card backgrounds: slightly lighter green (#243D30)
- Premium card: gold border glow, dark green bg
- Text: cream (#FDF8F3)
- Buttons: gold for primary, cream outline for secondary
- Badge: gold "BEST VALUE" on premium
- FAQ items: cream text on dark, subtle divider lines
- Toggle: dark surface, cream text, green indicator for selected

Keep the warmth — gold accents should feel like candlelight, not neon.
```

---

### P3. Login — Light Mode

```
Mobile login screen (375px) for "Hinbûna Kurdî" Kurdish learning app.

LIGHT MODE. Cream background (#FDF8F3), forest green elements.

Layout:
1. Top spacing (generous, ~20% of screen)
2. App icon/logo centered — small book/leaf icon in forest green circle
3. "Hinbûna Kurdî" app name below icon
4. "Bi xêr hatî!" (Welcome back!) greeting text, large, forest green
5. FORM (vertically stacked, full-width inputs with cream/beige fill):
   - Email input: envelope icon, placeholder "E-mail", rounded corners, subtle border
   - Password input: lock icon, placeholder "Şîfre" (Password), eye toggle for show/hide
6. "Şîfrê ji bîr kir?" (Forgot password?) link aligned right, muted green
7. "TÊKEVE" (Login) button — full-width, forest green bg, cream text, rounded
8. Divider line with "an" (or) text centered
9. Social login buttons row:
   - Google button (outline, icon + "Google")
   - Apple button (outline, icon + "Apple")
10. Bottom: "Nû yî? Hesabek çêke" (New? Create account) — link text

Feel: Simple, clean, trustworthy. Lots of whitespace. Warm but professional.
```

### P3. Login — Dark Mode

```
Mobile login screen (375px) for "Hinbûna Kurdî" Kurdish learning app.

DARK MODE. Deep forest green (#1A2F23) background, cream text.

Same layout as light but:
- Background: deep forest green
- Input fields: darker green (#243D30) fill, cream text, subtle border
- Icons: cream/gold color
- "Bi xêr hatî!" greeting: cream color, warm
- Login button: gold (#D4A843) bg with dark text
- Social buttons: cream outline on dark
- Divider: cream line, muted
- Links: gold or light green (NOT neon)

Warm forest night feel. The gold button should be the brightest element — draws the eye to login.
```

---

### P4. Register — Light Mode

```
Mobile registration screen (375px) for "Hinbûna Kurdî" Kurdish learning app.

LIGHT MODE. Cream background (#FDF8F3), forest green elements.

Layout:
1. Back arrow top-left
2. App icon centered (small)
3. "Dest pê bike!" (Get started!) headline, forest green, bold
4. Subtext: "Create your free account" in muted green
5. FORM (full-width inputs, beige/cream fill, rounded):
   - Full name: person icon, "Nav û paşnav" (Full name)
   - Email: envelope icon, "E-mail"
   - Password: lock icon, "Şîfre" (Password), strength indicator (3 dots below: weak/medium/strong)
6. Language selector:
   - Label: "Ez dixwazim bi ... fêr bibim" (I want to learn in...)
   - Three pill buttons in a row: 🇩🇪 Deutsch | 🇬🇧 English | 🇹🇷 Türkçe
   - Selected pill has green fill
7. Checkbox: "Ez li şert û mercan razî me" (I agree to Terms) with link
8. "HESAB ÇÊKE" (Create Account) button — full-width, forest green, cream text
9. Divider "an" (or)
10. Social: Google, Apple outline buttons
11. Bottom: "Hesabê te heye? Têkeve" (Have account? Login) link

Feel: Welcoming onboarding. Not too many fields. Language selection feels natural.
```

### P4. Register — Dark Mode

```
Mobile registration screen (375px) for "Hinbûna Kurdî" Kurdish learning app.

DARK MODE. Deep forest green (#1A2F23) background, cream text.

Same layout as light but:
- Input fields: dark green (#243D30), cream text, subtle border
- Language pills: dark surface, gold fill for selected
- Password strength dots: red → gold → green
- Create Account button: gold (#D4A843) bg, dark text
- Checkbox: cream border, green fill when checked
- Social buttons: cream outline

Warm and inviting — dark forest but friendly. Gold CTA draws the eye.
```

---

### P5. Forgot Password — Light Mode

```
Mobile forgot password screen (375px) for Kurdish learning app.

LIGHT MODE. Cream background (#FDF8F3), minimal and reassuring.

Layout:
1. Back arrow top-left
2. Large centered illustration or icon: lock with reset arrow, forest green on beige circle
3. "Şîfreyê Nû Bike" (Reset Password) title, bold, forest green
4. Subtext: "E-maila xwe binivîse, em ê lînka nûkirinê bişînin" (Enter your email, we'll send a reset link)
5. Email input field: full-width, beige fill, envelope icon
6. "Lînkê Bişîne" (Send Link) primary button — full-width, forest green
7. Bottom: "Şîfrê tê bîra te? Têkeve" (Remember password? Login) link

Feel: Calm, reassuring, minimal. Nothing scary about resetting password.
Only 3 interactive elements: input, button, link.
```

### P5. Forgot Password — Dark Mode

```
Mobile forgot password screen (375px) for Kurdish learning app.

DARK MODE. Deep forest green (#1A2F23) background.

Same minimal layout:
- Lock icon: gold on dark green circle
- Title: cream text
- Input: dark green fill, cream text
- Button: gold bg, dark text
- Link: cream, muted

Simple, calm, warm.
```

---

### P6. About Page — Light Mode

```
Mobile about page (375px) for Kurdish learning app.

LIGHT MODE. Cream background (#FDF8F3).

Layout:
1. HEADER — Back arrow, "Derbarê" (About) title
2. HERO — App logo centered. "Hinbûna Kurdî" in large forest green text
3. MISSION — Warm paragraph: "Em dixwazin zimanê kurdî bi rêbazên nûjen hîn bikin" (We want to teach Kurdish with modern methods). Text about preserving Kurdish language, making learning accessible for diaspora and new learners.
4. STATS ROW — Three columns with numbers:
   - "1,000+" Xwendevan (Learners)
   - "100+" Ders (Lessons)
   - "3" Ziman (Languages: DE, EN, TR)
5. TEAM — Section title "Tîma Me" (Our Team)
   - Founder card: Avatar circle, "Adar Schule" team name, brief description
   - Small text about the team's mission
6. KURDISH LANGUAGE — Info card with subtle beige background:
   - "Kurmancî" dialect badge
   - Brief: "Kurmanji is the most widely spoken Kurdish dialect, with 20+ million speakers across Kurdistan and diaspora."
7. CONTACT — "Têkilî" (Contact) section
   - Email link
   - Social icons row
8. FOOTER — App version, copyright

Feel: Mission-driven, warm, proud. Like a letter from the team to learners.
```

### P6. About Page — Dark Mode

```
Mobile about page (375px) for Kurdish learning app.

DARK MODE. Deep forest green (#1A2F23) background.

Same layout:
- Title and headings: cream
- Stats numbers: gold (#D4A843)
- Info card: slightly lighter green surface
- Team avatar: cream border
- Social icons: cream
- Kurdish info card: subtle gold border or accent

Heritage and pride feel. Gold numbers catch the eye.
```

---

## Part 4: Quality Checklist

After generating each screen in Visily, check:

- [ ] **Background color correct?** Light: cream (#FDF8F3), Dark: deep forest (#1A2F23)
- [ ] **NOT matrix green?** Dark mode should feel like warm forest, not hacker terminal
- [ ] **Gold accents present?** At least one gold element per screen (#D4A843)
- [ ] **Text readable?** High contrast between text and background
- [ ] **Buttons warm?** Green+cream (light) or gold+dark (dark mode)
- [ ] **Cards have subtle separation?** Not harsh borders, just 1-2 shade difference
- [ ] **Typography rounded/friendly?** Not angular or techy
- [ ] **Kurdish text correct?** Characters ê, î, û, ç, ş display properly
- [ ] **Mobile width?** 375px base
- [ ] **Both modes done?** Each screen needs light AND dark version

---

## Part 5: Screen Generation Order

| Order | Screen | Priority | Complexity |
|-------|--------|----------|------------|
| 1 | P1 Landing — Light | P0 | High (longest page) |
| 2 | P1 Landing — Dark | P0 | Convert from light |
| 3 | P3 Login — Light | P0 | Simple |
| 4 | P3 Login — Dark | P0 | Convert from light |
| 5 | P4 Register — Light | P0 | Medium |
| 6 | P4 Register — Dark | P0 | Convert from light |
| 7 | P2 Pricing — Light | P0 | Medium |
| 8 | P2 Pricing — Dark | P0 | Convert from light |
| 9 | P5 Forgot Password — Light | P1 | Simple |
| 10 | P5 Forgot Password — Dark | P1 | Convert |
| 11 | P6 About — Light | P2 | Medium |
| 12 | P6 About — Dark | P2 | Convert |

**Total: 12 frames (6 screens × 2 modes)**

**Tip:** Always design light mode first. It's easier to see layout issues on light. Then duplicate and swap colors for dark.

---

## Part 6: After Public Pages — Next Batches

Once public pages pass quality check, continue with:

**Batch 2: Student Core (S1-S8) — 16 frames**
- S1 Dashboard, S2 Course List, S3 Module View, S4 Unit View
- S5 Lesson View, S6 Activity, S7 Result, S8 Complete

**Batch 3: Student Profile (S9-S10) — 4 frames**
- S9 Profile, S10 Settings

**Batch 4: Teacher CMS (T1-T5) — 10 frames**
- T1 Dashboard, T2 Content List, T3-T5 Editors

**Batch 5: Admin (A1-A2) — 4 frames**
- A1 Dashboard, A2 User Management

---

## Part 7: Reference Screenshots Summary

| File | What | Use As |
|------|------|--------|
| `stitch_01.../friendly_-_light/screen.png` | Landing, mobile, light | **PRIMARY light reference** |
| `stitch_01.../friendly_-_dark/screen.png` | Landing, mobile, dark | **PRIMARY dark reference** |
| `stitch_01.../desktop_friendly_-_light/screen.png` | Landing, desktop, light | Desktop expansion ref |
| `stitch_01.../desktop_friendly_-_dark/screen.png` | Landing, desktop, dark | Desktop expansion ref |
| `stitch_hinb.../landing_light/screen.png` | Landing v2, mobile, light | Botanical illustration ref |
| `stitch_hinb.../landing_dark/screen.png` | Landing v2, mobile, dark | Dark mode layout ref |

**Best screenshots to upload to Visily as "style reference":**
1. `friendly_-_light/screen.png` — cleanest light mode example
2. `friendly_-_dark/screen.png` — warmest dark mode example
3. `landing_light/screen.png` — best botanical illustration style

# Visily Prompt Guide — Best Practices

**Source:** https://www.visily.ai/help-center/prompt-guide (plus supplementary Visily help center and blog articles)
**Date Fetched:** 2026-02-10
**Purpose:** Comprehensive extraction of Visily's official prompt-writing guidance for AI design generation

---

## 1. Character Limit

- Visily AI chat accepts prompts up to **4,000 characters**.
- You can also browse sample prompts by pressing **"/"** in the chat box.
- You can upload up to **4 images** (JPG, PNG, or WebP, each under 5MB after compression) to guide the AI visually.

---

## 2. Output Types — Always Clarify What You Want

Visily generates different kinds of outputs. Your prompt should clarify which one you need:

| Output Type | What to Specify |
|-------------|----------------|
| **UI Screens** | Platform (mobile, web app, or website) + single screen or full app flow |
| **UI Components** | Component type: tables, charts, headers, menus, etc. |
| **Images** | Photo or illustration + style (flat, outline, minimal, cartoon, 3D, realistic) |
| **Diagrams** | Type: sitemap, org chart, flowchart, state diagram, use case diagram, class diagram, ERD |

---

## 3. Core Prompt-Writing Rules

### 3.1 Think of the AI as a Junior Designer

The more specific your prompt, the better the result. Give clear instructions as you would when briefing a junior designer who needs explicit direction.

### 3.2 Be Descriptive, Not Generic

| Bad (Vague) | Good (Specific) |
|-------------|-----------------|
| "Create a homepage" | "Homepage with a hero banner, navigation bar, feature section, and signup form" |
| "Create a dashboard" | "SaaS analytics dashboard with a sidebar, three metric cards, and a line chart" |
| "Login page" | "Mobile login screen with email and password fields, plus a forgot password link" |

### 3.3 Use Common UI Pattern Terms

Visily understands standard design vocabulary. Use terms like:
- sidebar, search bar, task list, product grid
- menu bar, sign-up button, hero banner, CTA
- navigation bar, breadcrumb, accordion, modal
- card grid, avatar stack, toggle switch, pill button

### 3.4 Be Specific to Exact Elements

When editing or refining, reference specific elements:
- "Change the **blue button on the login page** to green" (good)
- "Change the button color" (too vague if multiple buttons exist)

### 3.5 One Request Per Prompt

**Avoid combining multiple requests in one prompt.** Each prompt should focus on one screen or one modification. If you need multiple screens, generate them one at a time.

### 3.6 Focus on Outcomes Over Specifications

For initial generation, describe the desired result rather than listing every pixel:
- Good: "Generate a clean, simple homepage design for a modern e-commerce site"
- Then iterate with specifics: "Add a second CTA below the hero section"

---

## 4. Image Style Options

When generating images (illustrations, icons, mascots), specify the style:

| Style | Description |
|-------|-------------|
| **flat** | Solid colors, minimal shading |
| **outline** | Line-based drawings |
| **minimal** | Simplified, clean |
| **cartoon** | Stylized, illustrative |
| **3D** | Dimensional, rendered |
| **realistic** | Photorealistic, lifelike |

Example: "Create a cute robot mascot image in a 1:1 ratio, flat style, with a friendly mood"

---

## 5. Design Instructions (Persistent Context)

### What Are Design Instructions?

Every project has its own goals, constraints, and preferences. Visily lets you save **Design Instructions** that are remembered and applied across ALL generations on a board.

### How to Set Up

1. Open the **"More" menu** in the Visily AI chat box
2. Create instruction sets (you can have multiple, but only **one active at a time**)
3. These instructions are **shared with everyone on the board** — team consistency

### What to Include in Design Instructions

Use **clear lists** (dashes for bullet points) and cover:

| Section | What to Define |
|---------|---------------|
| **App Description** | What the product is, target audience, platform |
| **Color System** | All main colors with exact HEX/RGB codes + what each is used for |
| **Typography & Text** | Font name or font style (e.g., modern, academic) + how text sizes compare |
| **Logo Usage** | Logo description + key placement rules |
| **UI Components & Visual Style** | Rules for buttons, icons, interface elements (rounded vs. sharp corners, etc.) |

**Pro Tip:** You can **paste your entire design system** into the Design & Experience section to keep generated designs consistent.

---

## 6. Logos in Visily

- Upload up to **5 logos** (PNG, JPG, WebP, SVG, max 5MB each)
- **Transparent backgrounds recommended** so logos look correct on any background color
- The AI can then use your uploaded logos in generated designs

---

## 7. Theme Management

Visily has a built-in Theme system applied to all components:

### What Theme Controls
- **Colors:** Main colors, semantic colors, gray scale — choose from palette library, generate from text, or extract from image/webpage
- **Fonts:** Primary and Secondary fonts
- **Text presets:** Maintain typography consistency
- **Shadows:** Default presets or custom
- **Corner radius:** Applied globally

### How to Apply
1. Click **"Theme"** button (bottom-left sidebar)
2. Set brand colors, fonts, radius
3. Theme auto-applies to all UI library components, templates, and canvas designs

---

## 8. Iteration Strategy — Progressive Refinement

### Start Broad, Then Narrow

1. **First prompt:** General layout — "Mobile dashboard with top navigation, user profile card, and recent activity section"
2. **Second prompt:** Refine specifics — "Replace the activity list with card-style items"
3. **Third prompt:** Polish details — "Add a filter bar above the cards"

### Techniques for Iteration

- Add a second CTA
- Replace a list with cards
- Insert a filter bar
- Swap component styles (table to grid, list to carousel)
- Adjust spacing or emphasis

### Pair Prompts with Visual References

For **best results**, combine:
- A clear, specific text prompt
- A visual reference image (screenshot, mockup, or inspiration)

This helps the AI understand your intent and produce more accurate, context-aware outputs. When editing existing designs, visual references are especially powerful.

---

## 9. Multi-Screen Generation

- You can generate a **single screen** or an **entire app flow** in one request
- For app flows, describe the overall product and key screens
- Example app description: "Create an e-learning web app with lessons, tracking, and live classes. Use soft colors and rounded UI."
- The AI generates multiple screens with layout structure, components, and placeholder content
- It understands common flows: login, dashboard, e-commerce checkout, onboarding

### Recommended Approach

Generate screens **one at a time** for better control, then ensure consistency by:
- Using the same Design Instructions across all generations
- Referencing previous screens as visual references
- Keeping the same theme applied

---

## 10. Additional Features

### Deep Design Mode
- Toggle on/off from the **More menu** in Visily AI chat
- Produces more detailed, refined outputs

### Generate Images Mode
- Toggle on/off from the **More menu**
- When enabled, Visily generates custom images/illustrations within your designs
- When disabled, uses placeholder images

### Screenshot to Design
- Upload an existing screenshot and Visily converts it to an editable design
- Useful for importing reference designs or competitor screens

---

## 11. What Visily Understands Well

Based on Visily's documentation, the AI is strongest with:

- **Standard UI patterns:** Login, signup, dashboard, settings, profile, e-commerce, landing pages
- **Common components:** Headers, sidebars, cards, tables, charts, forms, modals, tabs
- **Platform conventions:** Mobile app, web app, website — each has different layout expectations
- **Design terminology:** Hero section, CTA, breadcrumb, accordion, pill button, avatar stack
- **Style descriptors:** Clean, minimal, modern, warm, professional, playful, corporate

---

## 12. Common Pitfalls to Avoid

| Pitfall | Why It Fails | Fix |
|---------|-------------|-----|
| Vague prompts | AI guesses layout, often wrong | Name every section and component |
| Multiple requests in one prompt | AI conflates or ignores parts | One screen or one change per prompt |
| No platform specified | AI picks random sizing | Always state "mobile 375px" or "desktop" |
| No color/style guidance | AI uses defaults | Include hex codes or reference Design Instructions |
| Editing without specificity | Wrong element gets changed | Name the exact element: "the green button in the header" |
| Skipping visual references | AI relies only on text | Upload reference images when possible |
| Trying to perfect first try | Frustration, wasted time | Start broad, iterate progressively |

---

## 13. Prompt Template Structure

Based on Visily's guidance, an effective prompt follows this structure:

```
[Platform + screen type] for [product name/description].

[Color mode]. Background: [hex]. Text: [color]. Accent: [color].

Sections/Layout:
1. [Component] — [details]
2. [Component] — [details]
3. [Component] — [details]
...

Feel: [2-3 style descriptors]. [Anti-pattern to avoid].
```

### Example (from Visily docs):

```
Mobile dashboard with top navigation, user profile card,
and recent activity section.
```

### Example (detailed):

```
Design a mobile app screen for order confirmation after a purchase,
including order summary, estimated delivery, and a "Track Order" button.
```

---

## How This Applies to HinbunaKurdi

### Our Design Instructions for Visily

Based on Visily's best practices, here is how to configure the HinbunaKurdi Design Instructions in Visily's "More menu":

#### App Description
```
Hinbuna Kurdi is a Kurdish language learning web app (Kurmanji dialect, A1-B1 level).
Target: Kurdish diaspora adults in Germany, Turkey, and worldwide.
Platform: Mobile-first (375px), responsive to desktop.
Brand feel: Warm, professional, calm, botanical — like Headspace meets a premium SaaS product.
NOT playful, NOT gamified, NOT childish. This is a serious learning tool with a welcoming aesthetic.
```

#### Color System (paste into Design & Experience)
```
Color System:
- Background (light): #FDF8F3 warm cream — page backgrounds
- Background (dark): #1A2F23 deep forest green — dark mode pages (NEVER pure black)
- Surface (light): #F5EEE6 soft beige — cards, inputs
- Surface (dark): #243D30 slightly lighter green — cards, inputs on dark
- Primary: #2D5A3D forest green — buttons, links, headings
- Accent: #D4A843 warm gold — badges, highlights, CTAs on dark mode
- Text primary (light): #1A2A1F dark green-black
- Text primary (dark): #F5EEE6 warm off-white
- Text secondary (light): #5A6B5E muted green-gray
- Text secondary (dark): #A8B5AC soft sage
- Border (light): #E5DDD3 warm tan
- Border (dark): #2F4F3A subtle green
- Success: #2D8A4E
- Error: #DC4545
- Warning: #EFB034
- Info: #3B7A8A warm teal
```

#### Typography (paste into Design & Experience)
```
Typography:
- Headings: Nunito — Bold (700) for hero, SemiBold (600) for sections
- Body text: Inter — Regular (400) for paragraphs, Medium (500) for links
- Captions: Inter — Regular (400), smaller size, muted color
- Style: Rounded, friendly, warm — NOT angular or techy
- Kurdish characters must render correctly: e, i, u, c, s (with circumflex/cedilla)
```

#### UI Components (paste into Design & Experience)
```
UI Components:
- Buttons: Rounded corners (12px), full-width on mobile, 44-48px height
  - Light mode: forest green bg + cream text
  - Dark mode: gold bg + dark text
- Cards: Rounded (12-16px), subtle shadow, 1-2 shade difference from background
- Inputs: Rounded (8-12px), icon on left side, beige fill (light) or dark surface fill (dark)
- Badges: Gold pill shape for "BEST VALUE", "Premium"; green for "Completed"
- Navigation: Top header — logo left, action/hamburger right
- Footer: Logo centered, language selector pills (DE | EN | TR), links
```

### Prompt Rules Specific to HinbunaKurdi

1. **Always specify mobile-first:** Start every prompt with "Mobile [screen type] (375px)"
2. **Always specify color mode:** "LIGHT MODE" or "DARK MODE" with exact hex codes
3. **Always include brand feel line:** "Feel: Warm, professional, botanical, calm SaaS."
4. **CRITICAL — NEVER reference Duolingo in any Visily prompt.** The AI will pull in gamified, playful, cartoon-style elements that contradict our brand. Instead use: "Like Headspace meets a premium SaaS product" or "Warm and professional, NOT gamified or playful."
5. **Use Kurdish UI terms:** Include the Kurdish label text in prompts (e.g., "TEKEVE" for Login, "Dest pe bike" for Start) so the AI generates screens with real content, not lorem ipsum.
6. **One screen per prompt:** Never combine multiple screens. Generate light mode first, then duplicate and convert to dark mode.
7. **Upload reference screenshots:** Always pair prompts with the approved Stitch reference screenshots from `Desktop/Design/01/` for visual consistency.
8. **Use Design Instructions:** Paste the color system, typography, and component rules above into Visily's Design Instructions (More menu) so they persist across all generations on the board.
9. **Image style for illustrations:** Use "flat" style for botanical/nature illustrations to match the warm, non-techy brand.
10. **Anti-pattern line in every prompt:** End prompts with what to avoid:
    - "NOT matrix green, NOT neon, NOT hacker terminal"
    - "NOT gamified, NOT cartoon, NOT childish"
    - "Deep forest green backgrounds, NOT pure black"

### Quick Reference: HinbunaKurdi Prompt Skeleton

```
Mobile [screen name] (375px) for "Hinbuna Kurdi" — a Kurdish language learning web app.

[LIGHT/DARK] MODE. Background: [#FDF8F3 / #1A2F23]. Text: [dark forest green / warm cream].
Primary button: [forest green + cream text / gold + dark text]. Accent: warm gold (#D4A843).

Sections top to bottom:
1. HEADER — Logo "Hinbuna Kurdi" left, [action] right. [Cream / dark green] background.
2. [SECTION] — [specific components and content]
3. [SECTION] — [specific components and content]
...

Font: Nunito for headings, Inter for body. Rounded corners everywhere.
Feel: Warm, professional, botanical, calm SaaS. NOT gamified. NOT playful. NOT neon.
[DARK MODE ONLY: Deep forest green background, NOT pure black. Gold accents glow warmly.]
```

---

## Sources

- [Visily Prompt Guide](https://www.visily.ai/help-center/prompt-guide)
- [Visily AI Chat Assistant](https://www.visily.ai/help-center/visily-ai-assistant/)
- [How to Instantly Generate a UI From a Prompt Using AI](https://www.visily.ai/blog/how-to-create-ui-with-ai-prompts/)
- [From Idea to Interface: AI Design from Text Explained](https://www.visily.ai/blog/ai-design-generator-from-text/)
- [Theme Settings](https://www.visily.ai/help-center/theme-management/)
- [Top AI Tools for Prompt-Based Wireframing](https://www.visily.ai/blog/prompt-based-wireframing-tools/)
- [Generating Multi-Screen Wireframes Using AI](https://www.visily.ai/blog/generating-multi-screen-wireframes-using-ai/)

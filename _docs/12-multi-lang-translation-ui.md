# 12 — Multi-Language Translation UI

> Design for scalable multi-language editing in teacher CMS screens.
> Replaces the current stacked-per-language layout (which breaks at 8+ languages).

## Context

- Mamoste writes **Kurdish + German** (primary authoring)
- System auto-translates **from German → other languages** (DE LLMs are stronger than KU)
- All translations remain **editable** (human can correct AI output)
- Currently 3 languages (KU, DE, EN), planning for 8+ (TR, AR, FA, Sorani, etc.)

## The "Chip Row" Pattern

### Collapsed State (default)

Each translatable field shows:

1. **Kurdish input** — always visible (source content, not a "translation")
2. **🌐 + language chips** — horizontal row of colored badges

```
TRANSLATION
┌──────────────────────────────────┐
│  Roj baş                        │  ← Kurdish (always visible)
└──────────────────────────────────┘
🌐  [DE●] [EN✨] [TR✨] [AR○] [FA✨] [+2]
```

### Chip States

| Chip | Meaning |
|------|---------|
| `[DE●]` | Has content, human-written (solid dot) |
| `[EN✨]` | Has content, auto-translated (sparkle) |
| `[AR○]` | Empty, no translation yet (hollow dot) |
| Active chip | Highlighted border/background when expanded |

### Expanded State (click a chip)

Clicking a chip expands that language's input inline below:

```
🌐  [DE●] [EN✨] [TR✨] [AR○] [FA✨] [+2]

    ┌─ DE ●──────────────────── ✕ ─┐
    │  Guten Tag / Hallo            │
    └───────────────────────────────┘
    ┌─ TR ✨ ──────────────────── ✕ ─┐
    │  İyi günler / Merhaba     ⟳   │  ← auto-translated, editable
    └───────────────────────────────┘
```

- Multiple languages can be open simultaneously
- `✕` closes the input (chip returns to compact)
- `⟳` re-translates from German (if source changed)
- Editing an auto-translated field removes ✨ → becomes ● (human-verified)

### Empty Language Expansion

When clicking an empty chip (`[AR○]`):

```
    ┌─ AR ○ ──────────────────── ✕ ─┐
    │  (empty)                       │
    │  [⚡ Auto-translate from DE]   │
    └────────────────────────────────┘
```

## Batch Translation

### Per-Activity Button

Inside each expanded activity editor, a single button translates ALL empty fields:

```
┌──────────────────────────────────────┐
│  ✨ Translate all to: EN TR AR FA +2 │
└──────────────────────────────────────┘
```

- Sends all translatable fields (instruction, translation, example, exampleTranslation, etc.) as a batch
- Source: German text
- Target: all configured languages that are empty or need update
- Results fill all chips with ✨ status

### Per-Lesson Button

At the top of the lesson editor (T5-activity-editor), a lesson-level button:

```
[✨ Translate entire lesson (14 activities → EN, TR, AR, FA)]
```

- Batch-translates all activities in the lesson
- Shows progress indicator during translation
- Skips fields that already have human-verified (●) content

## Translation API Integration

### Phase 1: DeepL / Google Translate

- Proxy endpoint (serverless function or NestJS route when ready)
- Browser calls proxy → proxy calls DeepL/Google → returns translations
- API key stays server-side
- DeepL for European languages (DE→EN, DE→TR, DE→FR)
- Google Translate for broader coverage (AR, FA, Kurdish dialects)

### Phase 2: LLM-Powered (future upgrade)

- Replace translation API with Claude/GPT
- Send context: "A1 flashcard, greeting phrase, translate from German"
- Better quality for learning content (simpler vocabulary, culturally aware)
- Same UI — only the backend changes

## Data Model

Translation fields in JSON remain the same i18n object format:

```json
{
  "translation": {
    "en": "Good day / Hello",
    "de": "Guten Tag / Hallo",
    "tr": "İyi günler / Merhaba",
    "ar": "مرحبا / يوم سعيد"
  }
}
```

Add `autoTranslated` metadata per field per language:

```json
{
  "translation": {
    "en": "Good day / Hello",
    "de": "Guten Tag / Hallo",
    "tr": "İyi günler / Merhaba"
  },
  "_meta": {
    "translation": {
      "en": { "auto": false },
      "tr": { "auto": true }
    }
  }
}
```

- `auto: true` → shows ✨ chip
- `auto: false` or absent → shows ● chip
- On human edit → set `auto: false`

## Language Configuration

Languages are configured in a shared config (e.g. `data/languages.json`):

```json
[
  { "code": "de", "label": "Deutsch", "color": "#D4A860", "primary": true },
  { "code": "en", "label": "English", "color": "#4D9AAE", "primary": false },
  { "code": "tr", "label": "Türkçe", "color": "#C75B5B", "primary": false },
  { "code": "ar", "label": "العربية", "color": "#7B68AE", "rtl": true, "primary": false },
  { "code": "fa", "label": "فارسی", "color": "#5BA37B", "rtl": true, "primary": false }
]
```

- `primary: true` → always shown as full input (German)
- Kurdish is always the source field (not in this list — it's the content language)
- RTL support flagged per language

## CSS Token Reference

Each language chip gets a unique color from the config. Existing tokens:

- `lang-tag.en` → teal/info color
- `lang-tag.de` → warm amber

New tokens needed for additional languages (TR, AR, FA, etc.).

## Affected Screens

| Screen | Change |
|--------|--------|
| T5-activity-editor.html | Replace `addLangField` / `addLangTextarea` with chip-row component |
| T4-lesson-editor.html | Add "Translate entire lesson" button |
| T3-unit-editor.html | Optional: translation progress indicators per lesson |

## Research Sources

Pattern based on analysis of: Contentful (inline expansion), Hygraph (collapse/expand), Crowdin (multilingual grid), WPML (status indicators), Sanity (field-level i18n).

Chosen approach: **Filtered Inline Expansion** — Contentful/Hygraph hybrid adapted for chip-row compactness.

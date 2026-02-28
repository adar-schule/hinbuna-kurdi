# Data Model — Decision Log

**Purpose:** Track every decision made during Phase 2 (Data Model Perfection).
**NOT a source of truth** — `04-data-model-design.md` is. This is the changelog/history.

**Format:** Newest entries on top. Each entry captures what was discussed, what was decided, and why.

---

## 2026-02-28 — Architecture Conflicts (multi-lang.html vs doc 04)

### Finding: 4 conflicts between multi-lang.html and doc 04
- **What:** Comparing `mockup/multi-lang.html` with `04-data-model-design.md` revealed fundamental disagreements.
- **Action:** Must resolve each before table-by-table work begins.

### Decision 1: Translation Storage — PENDING
- **Context:** How to store translated content (course names, lesson descriptions, activity content).
- **Options:**
  - **A) Pattern D only (pure JSONB)** — `multi-lang.html` approach. All translations inline as `{ku: "...", de: "...", en: "..."}` in JSON columns.
  - **B) Hybrid C+D** — doc 04 approach. Pattern C (separate `*_translations` tables) for flat fields on courses/modules/units/lessons. Pattern D (JSONB) for activities (nested, variable per type).
- **Research (i18n best practices):** Every major LMS (Moodle, Canvas, Open edX, Strapi) uses separate translation tables for flat fields. JSONB-only breaks down with queries, indexing, and translation management at scale. Hybrid C+D confirmed as industry standard.
- **Recommendation:** B) Hybrid C+D — with translation metadata columns (`translation_source`, `source_locale`, `translated_by`, `reviewed_at`).
- **Decided:** B) Hybrid C+D. Translation tables for flat fields, JSONB for activities. Add translation metadata columns.
- **Impact:** Doc 04 is already correct. `multi-lang.html` needs updating in Phase 3.

### Decision 2: User language fields — PENDING
- **Context:** How many locale-related fields does the `users` table need?
- **Options:**
  - **A) 1 field** — `multi-lang.html` has only `users.language` (single string).
  - **B) 4 fields** — doc 04 has `language` (UI), `ui_locale` (i18n labels), `content_locale` (lesson translations), `translations_visible` (immersion toggle).
- **Why it matters:** A student might want UI in German but lessons in Kurdish-only (immersion mode). A teacher might want UI in English but create content in Kurdish+German.
- **Decided:** B) 4 fields. Supports immersion mode and per-role locale needs.
- **Impact:** Doc 04 is already correct. `multi-lang.html` needs updating in Phase 3.

### Decision 3: Locale configuration — PENDING
- **Context:** How to define which languages a deployment supports.
- **Options:**
  - **A) JSON array** — `multi-lang.html` stores `supported_languages` as a JSON array inside `app_settings`.
  - **B) Separate table** — doc 04 has `supported_locales` table with columns: `locale`, `display_name`, `direction`, `color`, `is_source`, `is_default`, `is_active`, `order_index`.
- **Why it matters:** B) is more queryable, supports RTL flags, UI chip colors, per-locale activation. A) is simpler but limited.
- **Decided:** B) Separate `supported_locales` table. SaaS-ready, queryable, RTL-aware.
- **Impact:** Doc 04 is already correct. `multi-lang.html` needs updating in Phase 3.

### Decision 4: personalized_feed — PENDING
- **Context:** Old `data-model.html` listed `personalized_feed` in AI Layer 4. Not in doc 04.
- **Options:**
  - **A) Add to doc 04** — as a real AI Premium table for curated dashboard feeds.
  - **B) Remove** — already covered by `ai_recommendations` table in AI Core.
- **Decided:** B) Remove. `ai_recommendations` covers personalized feed use cases.
- **Impact:** No change to doc 04 (was never there). Old HTML reference is dead.

---

## 2026-02-28 — Phase 2 Kickoff

### Decision: Create this decision log
- **Context:** Phase 2 will span many sessions. Need a way to recall past decisions without re-reading everything.
- **Decided:** Add `04a-data-model-decisions.md` as a git-tracked decision history alongside 04.
- **Rule:** 04 = source of truth (always current). 04a = changelog (what changed and why).

### Finding: HTML ↔ MD drift identified
- **What:** `data-model.html` shows 39 tables / 11 domains. `04-data-model-design.md` has 46 tables / 12 domains.
- **Missing from HTML:** `roles`, `user_roles` (Users & Auth), entire Multi-Language domain (5 tables).
- **Extra in HTML:** `personalized_feed` listed in AI Layer 4 — not defined in doc 04.
- **Internal issues:** HTML domain cards sum to 40 but header says 39. Doc says 46 but actual count is 47.
- **Action:** Will be fixed in Phase 3 (HTML sync). Phase 2 focuses on perfecting the MD first.

---

<!--
TEMPLATE FOR NEW ENTRIES:

## YYYY-MM-DD — Topic

### Decision: Short title
- **Context:** Why this came up
- **Options considered:** A, B, C (if applicable)
- **Decided:** What we chose
- **Why:** Reasoning
- **Impact:** What changes in 04

### Finding: Short title
- **What:** What was discovered
- **Action:** What to do about it
-->

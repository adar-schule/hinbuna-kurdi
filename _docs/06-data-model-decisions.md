# Data Model — Decision Log

> **Doc:** 06 · **Status:** Reference · **Updated:** 2026-03-01

---

**Purpose:** Track every decision made during Phase 2 (Data Model Perfection).
**NOT a source of truth** — `05-data-model-design.md` is. This is the changelog/history.

**Format:** Newest entries on top. Each entry captures what was discussed, what was decided, and why.

## 2026-03-01 — JSON ↔ Schema Alignment (session 5)

### Decision 5: `is_free` on course object — DECIDED
- **Context:** `course.json` had `is_free: false` on the course object, but `courses` table has no such column.
- **Decided:** Remove. Access control is unit-level only (`units.is_free` = ACCESS GATE). Course-level gating is not needed.
- **Impact:** Removed from `course.json`. Schema unchanged.

### Decision 6: `subtitle` — promote from metadata to column — DECIDED
- **Context:** `metadata.subtitle` existed as i18n objects `{en, de}` in unit/lesson JSON files, and as plain strings in `course.json`. Not in any schema table or translation table.
- **Options:**
  - A) Keep in metadata as Pattern D (i18n objects) — two translation workflows per entity
  - B) Promote to proper column + add to translation tables (Pattern C) — one workflow
- **Decided:** B) Promote to column. Added `subtitle` to `units`, `lessons`, `unit_translations`, `lesson_translations` in doc 05. JSON files updated to plain strings (source language). Translations handled via Pattern C.
- **Why:** Same implementation pattern as `name`/`description` — one JOIN, one teacher form, easy translation completeness tracking.
- **Impact:** Doc 05 updated (4 tables). All JSON data files updated.

### Decision 7: Remove `category` from units — DECIDED
- **Context:** `course.json` and all `unit-*.json` files had `"category": null` on unit objects. But `units` table has no `category` column — only `courses` has it.
- **Decided:** Remove from all JSON files. Units are already scoped inside module→course, no category needed.
- **Impact:** JSON files only. Schema unchanged.

### Decision 8: Remove `image_url` from lessons — DECIDED
- **Context:** All lesson objects in `unit-*.json` had `"image_url": null`. But `lessons` table has no `image_url` column — only `units` has it.
- **Decided:** Remove from all JSON files. Lessons don't carry images per schema.
- **Impact:** JSON files only. Schema unchanged.

### Decision 9: Add `level` to modules in JSON — DECIDED
- **Context:** `modules` table in doc 05 already has `level` column (`string — "Beginner", "A1", "Week 1", etc.`), but `course.json` was missing it on the module object.
- **Decided:** Add `"level": "A1"` to module in `course.json` to match schema.
- **Impact:** JSON file only. Schema already correct.

## 2026-02-28 — Architecture Conflicts (multi-lang.html vs doc 04)

### Finding: 4 conflicts between multi-lang.html and doc 04
- **What:** Comparing `mockup/multi-lang.html` with `05-data-model-design.md` revealed fundamental disagreements.
- **Action:** Must resolve each before table-by-table work begins.

### Decision 1: Translation Storage — DECIDED
- **Context:** How to store translated content (course names, lesson descriptions, activity content).
- **Options:**
  - **A) Pattern D only (pure JSONB)** — `multi-lang.html` approach. All translations inline as `{ku: "...", de: "...", en: "..."}` in JSON columns.
  - **B) Hybrid C+D** — doc 04 approach. Pattern C (separate `*_translations` tables) for flat fields on courses/modules/units/lessons. Pattern D (JSONB) for activities (nested, variable per type).
- **Research (i18n best practices):** Every major LMS (Moodle, Canvas, Open edX, Strapi) uses separate translation tables for flat fields. JSONB-only breaks down with queries, indexing, and translation management at scale. Hybrid C+D confirmed as industry standard.
- **Recommendation:** B) Hybrid C+D — with translation metadata columns (`translation_source`, `source_locale`, `translated_by`, `reviewed_at`).
- **Decided:** B) Hybrid C+D. Translation tables for flat fields, JSONB for activities. Add translation metadata columns.
- **Impact:** Doc 04 is already correct. `multi-lang.html` needs updating in Phase 3.

### Decision 2: User language fields — DECIDED
- **Context:** How many locale-related fields does the `users` table need?
- **Options:**
  - **A) 1 field** — `multi-lang.html` has only `users.language` (single string).
  - **B) 4 fields** — doc 04 has `language` (UI), `ui_locale` (i18n labels), `content_locale` (lesson translations), `translations_visible` (immersion toggle).
- **Why it matters:** A student might want UI in German but lessons in Kurdish-only (immersion mode). A teacher might want UI in English but create content in Kurdish+German.
- **Decided:** B) 4 fields. Supports immersion mode and per-role locale needs.
- **Impact:** Doc 04 is already correct. `multi-lang.html` needs updating in Phase 3.

### Decision 3: Locale configuration — DECIDED
- **Context:** How to define which languages a deployment supports.
- **Options:**
  - **A) JSON array** — `multi-lang.html` stores `supported_languages` as a JSON array inside `app_settings`.
  - **B) Separate table** — doc 04 has `supported_locales` table with columns: `locale`, `display_name`, `direction`, `color`, `is_source`, `is_default`, `is_active`, `order_index`.
- **Why it matters:** B) is more queryable, supports RTL flags, UI chip colors, per-locale activation. A) is simpler but limited.
- **Decided:** B) Separate `supported_locales` table. SaaS-ready, queryable, RTL-aware.
- **Impact:** Doc 04 is already correct. `multi-lang.html` needs updating in Phase 3.

### Decision 4: personalized_feed — DECIDED
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
- **Decided:** Add `06-data-model-decisions.md` as a git-tracked decision history alongside 04.
- **Rule:** 04 = source of truth (always current). 04a = changelog (what changed and why).

### Finding: HTML ↔ MD drift identified
- **What:** `data-model.html` shows 39 tables / 11 domains. `05-data-model-design.md` has 46 tables / 12 domains.
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

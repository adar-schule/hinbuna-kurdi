# Multi-Language Architecture

> Schema changes from this research have been merged into [04-data-model-design.md](./04-data-model-design.md).

**Status:** Research complete, schema merged into 04
**Date:** 2026-02-24
**Author:** Nuri Armanc Engin + Claude

---

## Problem Statement

HinbunaKurdi has two distinct multi-language needs that must work together but serve different purposes. The current data model has no language configuration in `app_settings`, translations are stored as inline JSON objects in content fields, and the supported languages are hardcoded in a frontend JS array. This document captures the research and design direction for a proper architecture.

---

## The Two Language Layers

| Layer | What | How | When selected |
|-------|------|-----|---------------|
| **UI i18n** | Labels, buttons, nav, titles, error messages | Standard i18n solution (locale JSON files, e.g. `react-i18next`) | Landing page (pre-auth) + onboarding |
| **Content translations** | Lesson material — flashcard meanings, instructions, dialogue translations, hints | Stored in DB with content | Onboarding "learning language" selection |

### Rules

1. **Landing page** has a language selector → immediate UI translation (i18n)
2. **During registration**, user picks a language → this becomes their content translation language (e.g. "I want to learn Kurdish with German translations")
3. **User can change** their translation language later in settings
4. **User can disable** content translations entirely (immersion mode)
5. **UI elements** (titles, labels, navigation) always follow i18n based on user selection
6. **White-label deployments** can make multi-language optional (single-language mode)

---

## Research Findings

### How Production Platforms Handle This

**Duolingo** — Doesn't use a relational DB for content delivery. Course content is pre-compiled to S3/CDN. Content is authored per language pair ("Kurdish for German speakers" is a separate content set). User data goes to DynamoDB.

**Babbel** — Content is curated per language pair (separate content pipeline per audience), not a shared translation layer.

**Contentful (CMS)** — Field-level localization: `{ "en": "Hello", "de": "Hallo" }` per field in JSONB. Localization enabled per-field, not per-entry.

**Strapi 5 (CMS)** — Row-per-locale: same table, one row per language, linked by document ID.

**Sanity (CMS)** — Offers both field-level (`internationalized-array` plugin) and document-level (`document-internationalization` plugin).

**Key insight from all platforms:** Localization granularity should be per-field, not per-entity, because some fields (slugs, dates, booleans, order indexes) don't need translation.

---

## Five Database Patterns for Translations

### Pattern A: Column-Per-Language (Denormalized)

```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  name_ku VARCHAR(500),
  name_de VARCHAR(500),
  name_en VARCHAR(500),
  ...
);
```

| Aspect | Assessment |
|--------|-----------|
| Query speed | Fastest — no joins |
| Add new language | Requires ALTER TABLE + code changes |
| Nested content | Poor — columns explode |
| White-label | Terrible — schema tied to language set |
| **Verdict** | Only viable for 2-3 languages, flat content |

### Pattern B: Shared Translation Table (EAV-like)

```sql
CREATE TABLE translations (
  id UUID PRIMARY KEY,
  entity_type VARCHAR(50),   -- 'lesson', 'activity'
  entity_id UUID,
  field_name VARCHAR(100),   -- 'name', 'description'
  locale VARCHAR(10),        -- 'ku', 'de', 'en'
  value TEXT
);
```

| Aspect | Assessment |
|--------|-----------|
| Query speed | Slow — N joins for N fields |
| Add new language | Just INSERT rows |
| Bulk export | Excellent — single table |
| Nested content | Flattens everything — poor |
| **Verdict** | Good for simple UI labels, poor for structured lesson data |

### Pattern C: Per-Entity Translation Table (Relational Standard)

```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  unit_id UUID REFERENCES units(id),
  slug VARCHAR(200),
  order_index INT,
  duration_minutes INT,
  is_published BOOLEAN
);

CREATE TABLE lesson_translations (
  id UUID PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  locale VARCHAR(10) NOT NULL,
  name VARCHAR(500) NOT NULL,
  description TEXT,
  learning_objective TEXT,
  UNIQUE(lesson_id, locale)
);
```

| Aspect | Assessment |
|--------|-----------|
| Query speed | Good — 1 JOIN per entity |
| Add new language | INSERT rows |
| Missing translations | `LEFT JOIN ... WHERE lt.id IS NULL` |
| Bulk export | Easy — `SELECT * FROM lesson_translations WHERE locale = 'ku'` |
| TypeORM support | `typeorm-translatable` implements this pattern |
| **Verdict** | Production standard. Used by Strapi, most SaaS. Best for flat text fields |

### Pattern D: JSONB with Language Keys

```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  name JSONB,  -- {"ku": "Silav", "de": "Hallo", "en": "Hello"}
  ...
);
```

| Aspect | Assessment |
|--------|-----------|
| Query speed | Good — no joins, path extraction is fast |
| Add new language | Add a key to JSON |
| Missing translations | `WHERE NOT name ? 'de'` (GIN index) |
| Bulk export | Harder — needs JSON extraction |
| Nested content | Excellent — natural fit |
| **Verdict** | Best for semi-structured content (activities). Risky as sole pattern |

### Pattern E: Per-Locale Table

```sql
CREATE TABLE lessons_ku (...);
CREATE TABLE lessons_de (...);
```

| Aspect | Assessment |
|--------|-----------|
| **Verdict** | Almost never recommended. Schema duplication nightmare |

---

## Recommended Approach: Hybrid (C + D)

The research converges on a hybrid approach that uses the right pattern for each data shape.

### Why Hybrid?

Our data has two shapes:

- **Flat text fields** (course name, lesson description, learning objective) → best served by relational translation tables (Pattern C)
- **Nested structured content** (activity questions, options, hints, dialogue lines) → best served by JSONB with language keys (Pattern D)

### Tier 1: Per-Entity Translation Tables

For `courses`, `modules`, `units`, `lessons` — entities with flat, predictable text fields. Each gets a `*_translations` table with translatable columns only.

**Applies to:** `course_translations`, `module_translations`, `unit_translations`, `lesson_translations`

### Tier 2: JSONB with Language Keys

For `activities.content` and `materials` — deeply nested, variable structure per activity type. Content uses `{locale: value}` keys within the existing JSONB fields.

### Tier 3: App-Level Language Configuration

`supported_locales` table as a language registry, plus `translations_enabled`, `source_locale`, `default_locale` fields on `app_settings`.

### Tier 4: User Language Preference

`ui_locale`, `content_locale`, `translations_visible` fields on the `users` table.

> **Full table definitions:** See [04-data-model-design.md](./04-data-model-design.md) — "Multi-Language / Translations" section.

---

## Translation Coverage Queries

### Find lessons missing German translation

```sql
SELECT l.id, lt_ku.name AS kurdish_name
FROM lessons l
JOIN lesson_translations lt_ku ON lt_ku.lesson_id = l.id AND lt_ku.locale = 'ku'
LEFT JOIN lesson_translations lt_de ON lt_de.lesson_id = l.id AND lt_de.locale = 'de'
WHERE lt_de.id IS NULL AND l.is_published = true;
```

### Find activities missing German in content

```sql
SELECT a.id, a.type, a.content->'question'->>'ku' AS question_ku
FROM activities a
WHERE a.is_published = true
  AND NOT (a.content->'question' ? 'de');
```

### Coverage report across all content

```sql
SELECT
  'lessons' AS entity_type,
  COUNT(*) AS total,
  COUNT(lt_de.id) AS translated_de,
  ROUND(100.0 * COUNT(lt_de.id) / COUNT(*), 1) AS coverage_pct
FROM lessons l
LEFT JOIN lesson_translations lt_de ON lt_de.lesson_id = l.id AND lt_de.locale = 'de'
WHERE l.is_published = true

UNION ALL

SELECT
  'activities',
  COUNT(*),
  COUNT(*) FILTER (WHERE content->'question' ? 'de'),
  ROUND(100.0 * COUNT(*) FILTER (WHERE content->'question' ? 'de') / COUNT(*), 1)
FROM activities
WHERE is_published = true;
```

---

## Open Design Questions

> These need to be resolved before implementation.

1. **Per-language-pair vs shared content?** Duolingo/Babbel author separate content per language pair ("Kurdish for German speakers"). We currently share one Kurdish lesson with translations bolted on. Which model?

2. **Sorani dialect support** — Is Sorani a separate course or a locale within the same content? (Likely separate course, since it's a different dialect with different vocabulary)

3. **Translation workflow** — Who translates? Mamoste manually? DeepL/API auto-translate with review? Crowdsourced? This affects whether we need translation status tracking (draft/reviewed/approved).

4. **Fallback chain** — If a student's language is Swedish but a translation is missing, fall back to English? German? Show Kurdish only?

5. **Activity editor impact** — The current T5 editor hardcodes language chips from `theme.js`. This should instead read from `supported_locales` table (or API endpoint).

---

## References

- [Duolingo DynamoDB Case Study (AWS)](https://aws.amazon.com/solutions/case-studies/duolingo-case-study-dynamodb/)
- [Strapi 5 Internationalization](https://docs.strapi.io/cms/features/internationalization)
- [Contentful Field-Level Localization](https://www.contentful.com/help/localization/field-and-entry-localization/)
- [Sanity Document Internationalization](https://github.com/sanity-io/document-internationalization)
- [Best Database Structure for Multilingual Data (Phrase)](https://phrase.com/blog/posts/best-database-structure-for-keeping-multilingual-data/)
- [Multi-Language Database Design (Redgate)](https://www.red-gate.com/blog/multi-language-database-design/)
- [typeorm-translatable (GitHub)](https://github.com/HanMoeHtet/typeorm-translatable)
- [nestjs-i18n Library](https://nestjs-i18n.com/)
- [PostgreSQL JSONB Performance (SitePoint)](https://www.sitepoint.com/postgresql-jsonb-query-performance-indexing/)
- [When to Avoid JSONB (Heap)](https://www.heap.io/blog/when-to-avoid-jsonb-in-a-postgresql-schema)

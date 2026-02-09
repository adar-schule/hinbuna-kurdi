# Data Model Design - HinbunaKurdi LMS

**Status:** Approved
**Date:** 2026-02-01
**Author:** Nuri Armanç Engin + Claude

---

## Overview

Generic LMS data model designed to support:
- **HinbunaKurdi** - Kurdish language learning platform (B2C with subscriptions)
- **Boilerplate sales** - Reusable for any LMS domain (languages, safety training, math, etc.)

### Key Design Principles

- **Generic schema** - No domain-specific fields; use `metadata` JSON for customization
- **Optional features** - Subscriptions, assignments, badges can be disabled per deployment
- **Flexible access control** - Unit-level gating, configurable signup modes
- **UUID primary keys** - Distributed-friendly, non-guessable

---

## Content Structure (7 tables)

### courses

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| name | string | |
| description | text | |
| slug | string | unique |
| category | string | nullable - "language", "safety", "math" |
| metadata | JSON | domain-specific config |
| image_url | string | nullable |
| is_published | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### modules

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| course_id | UUID | FK → courses |
| name | string | |
| description | text | |
| slug | string | |
| level | string | "Beginner", "A1", "Week 1", etc. |
| order_index | int | |
| image_url | string | nullable |
| metadata | JSON | |
| is_published | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### units

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| module_id | UUID | FK → modules |
| name | string | |
| description | text | |
| slug | string | |
| order_index | int | |
| image_url | string | nullable |
| metadata | JSON | |
| is_free | boolean | **ACCESS GATE** |
| is_published | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### lessons

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| unit_id | UUID | FK → units |
| name | string | |
| description | text | |
| slug | string | |
| order_index | int | |
| duration_minutes | int | nullable - estimated |
| learning_objective | text | nullable |
| metadata | JSON | |
| is_published | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### activities

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| lesson_id | UUID | FK → lessons |
| type | enum | mcq, gap_fill, matching, flashcard, word_order, reading, listening |
| order_index | int | |
| content | JSON | question, options, correct_answer, hints |
| metadata | JSON | |
| is_published | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### materials

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| type | enum | text, audio, image, video, document |
| content | text | text content OR S3 URL |
| metadata | JSON | translations, alt_text, duration |
| created_at | timestamp | |
| updated_at | timestamp | |

### activity_materials (join table)

| Column | Type | Notes |
|--------|------|-------|
| activity_id | UUID | FK → activities, PK |
| material_id | UUID | FK → materials, PK |
| order_index | int | |

---

## Users & Auth (3 tables)

### users

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| email | string | unique |
| password_hash | string | |
| role | enum | student, teacher, admin |
| first_name | string | |
| last_name | string | |
| display_name | string | nullable |
| avatar_url | string | nullable |
| email_verified | boolean | |
| is_active | boolean | soft disable |
| metadata | JSON | preferences, profile extras |
| last_login_at | timestamp | nullable |
| created_at | timestamp | |
| updated_at | timestamp | |

### invites

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| email | string | |
| invited_by | UUID | FK → users |
| role | enum | |
| token | string | unique |
| used_at | timestamp | nullable |
| expires_at | timestamp | |
| created_at | timestamp | |

### app_settings

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK (single row or key-value) |
| signup_mode | enum | public, invite_only, domain_restricted |
| allowed_domains | JSON | ["@company.com"] |
| subscriptions_enabled | boolean | |
| ... | | other app-wide settings |

---

## Subscriptions (2 tables)

### subscription_plans

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| name | string | "Monthly", "Yearly", "Lifetime" |
| slug | string | unique |
| type | enum | recurring, one_time |
| interval | enum | month, year, null (for lifetime) |
| price_cents | int | 999 = €9.99 |
| currency | string | EUR, USD |
| features | JSON | for display |
| is_active | boolean | can new users buy? |
| created_at | timestamp | |
| updated_at | timestamp | |

### user_subscriptions

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| plan_id | UUID | FK → subscription_plans |
| status | enum | active, cancelled, expired, paused |
| started_at | timestamp | |
| expires_at | timestamp | nullable (null for lifetime) |
| cancelled_at | timestamp | nullable |
| payment_provider | string | stripe, paypal, manual |
| payment_reference | string | external ID |
| metadata | JSON | |
| created_at | timestamp | |
| updated_at | timestamp | |

### Access Logic (code)

```typescript
canAccessUnit(user, unit): boolean {
  if (unit.is_free) return true;
  if (!appSettings.subscriptions_enabled) return true;
  return user.hasActiveSubscription();
}
```

---

## Progress Tracking (3 tables)

### user_progress

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| course_id | UUID | FK, nullable |
| module_id | UUID | FK, nullable |
| unit_id | UUID | FK, nullable |
| lesson_id | UUID | FK, nullable |
| status | enum | not_started, in_progress, completed |
| completed_at | timestamp | nullable |
| time_spent_seconds | int | nullable |
| created_at | timestamp | |
| updated_at | timestamp | |

**Unique constraint:** (user_id, course_id, module_id, unit_id, lesson_id)

### activity_attempts

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| activity_id | UUID | FK → activities |
| attempt_number | int | 1, 2, 3... |
| answers | JSON | what user submitted |
| score | int | 0-100 |
| is_correct | boolean | |
| time_spent_seconds | int | nullable |
| completed_at | timestamp | |
| created_at | timestamp | |

### user_stats (denormalized)

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK, unique |
| total_lessons_completed | int | |
| total_activities_completed | int | |
| total_time_spent_seconds | int | |
| current_streak_days | int | |
| longest_streak_days | int | |
| last_activity_at | timestamp | |
| updated_at | timestamp | |

---

## Teacher Features (4 tables)

### classes

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| name | string | |
| description | text | |
| teacher_id | UUID | FK → users |
| course_id | UUID | FK, nullable - class follows course |
| join_code | string | unique |
| is_active | boolean | |
| metadata | JSON | |
| created_at | timestamp | |
| updated_at | timestamp | |

### class_students

| Column | Type | Notes |
|--------|------|-------|
| class_id | UUID | FK, PK |
| student_id | UUID | FK → users, PK |
| joined_at | timestamp | |
| status | enum | active, removed |
| created_at | timestamp | |

### content_authors

| Column | Type | Notes |
|--------|------|-------|
| user_id | UUID | FK, PK |
| content_type | enum | course, module, unit, lesson, activity |
| content_id | UUID | PK |
| role | enum | owner, editor, viewer |
| created_at | timestamp | |

### assignments

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| class_id | UUID | FK → classes |
| assigned_by | UUID | FK → users |
| content_type | enum | unit, lesson |
| content_id | UUID | |
| due_date | timestamp | nullable |
| instructions | text | nullable |
| is_active | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

---

## Notifications (2 tables)

### notifications

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| type | enum | info, achievement, reminder, assignment, system |
| title | string | |
| message | text | |
| link | string | nullable - where to navigate |
| is_read | boolean | |
| read_at | timestamp | nullable |
| metadata | JSON | |
| created_at | timestamp | |

### notification_preferences

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK, unique |
| email_enabled | boolean | |
| email_frequency | enum | instant, daily, weekly, none |
| in_app_enabled | boolean | |
| types_enabled | JSON | ["achievement", "reminder"] |
| updated_at | timestamp | |

---

## Badges/Achievements (2 tables)

### badges

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| name | string | "First Lesson", "Week Streak" |
| description | text | |
| icon_url | string | |
| category | enum | progress, streak, social, special |
| criteria | JSON | {"type": "lessons_completed", "count": 1} |
| is_active | boolean | |
| created_at | timestamp | |

### user_badges

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK |
| badge_id | UUID | FK |
| earned_at | timestamp | |
| metadata | JSON | context when earned |

**Unique constraint:** (user_id, badge_id)

---

## Comments/Discussion (2 tables)

### comments

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| parent_type | enum | lesson, activity, unit |
| parent_id | UUID | |
| parent_comment_id | UUID | FK → comments, nullable (for replies) |
| content | text | |
| is_edited | boolean | |
| is_deleted | boolean | soft delete |
| metadata | JSON | |
| created_at | timestamp | |
| updated_at | timestamp | |

### comment_reactions

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| comment_id | UUID | FK |
| user_id | UUID | FK |
| type | enum | like, helpful, question |
| created_at | timestamp | |

**Unique constraint:** (comment_id, user_id, type)

---

## Audit Log (1 table)

### audit_logs

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK, nullable (null for system) |
| action | enum | create, update, delete, login, logout |
| entity_type | string | course, lesson, user, etc. |
| entity_id | UUID | |
| changes | JSON | {"field": "name", "old": "X", "new": "Y"} |
| ip_address | string | nullable |
| user_agent | string | nullable |
| created_at | timestamp | |

---

## Adaptive Learning / AI Personalization (5 tables)

Enables AI-powered personalized learning paths by tracking:
- **What mistakes** users make (not just right/wrong)
- **Skill proficiency** separate from lesson completion
- **Learning preferences** for adaptive content delivery

### skills

Defines trackable competencies (vocabulary topics, grammar rules, etc.)

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| name | string | "Greetings Vocabulary", "Present Tense Verbs" |
| slug | string | unique |
| category | enum | vocabulary, grammar, listening, reading, speaking, writing |
| description | text | nullable |
| metadata | JSON | domain-specific config |
| is_active | boolean | |
| created_at | timestamp | |
| updated_at | timestamp | |

### activity_skills (join table)

Links activities to the skills they test.

| Column | Type | Notes |
|--------|------|-------|
| activity_id | UUID | FK → activities, PK |
| skill_id | UUID | FK → skills, PK |
| weight | decimal | 0.0-1.0, how much this activity tests this skill |

### user_skills

Tracks user proficiency per skill (calculated from performance).

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| skill_id | UUID | FK → skills |
| proficiency | decimal | 0.0-1.0 (AI-calculated) |
| total_attempts | int | default 0 |
| correct_attempts | int | default 0 |
| last_practiced_at | timestamp | nullable |
| next_review_at | timestamp | nullable, for spaced repetition |
| created_at | timestamp | |
| updated_at | timestamp | |

**Unique constraint:** (user_id, skill_id)

### user_errors

Tracks specific mistakes for AI analysis.

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users |
| activity_attempt_id | UUID | FK → activity_attempts |
| error_type | enum | vocabulary, grammar, spelling, listening, pronunciation |
| error_category | string | e.g., "verb_conjugation", "noun_gender", "word_order" |
| source_item | string | The word/phrase they got wrong |
| expected | string | Correct answer |
| user_answer | string | What they submitted |
| metadata | JSON | hints used, time spent, context |
| created_at | timestamp | |

### user_learning_preferences

How the user prefers to learn (for adaptive content delivery).

| Column | Type | Notes |
|--------|------|-------|
| id | UUID | PK |
| user_id | UUID | FK → users, unique |
| preferred_mode | enum | visual, audio, text, mixed |
| session_length | enum | short (5min), medium (15min), long (30min) |
| difficulty_preference | enum | easy, normal, challenging |
| daily_goal_minutes | int | nullable |
| review_frequency | enum | aggressive, normal, relaxed |
| **theme_style** | enum | zarok (kid), ciwan (teen), xort (young adult), mezin (adult) |
| **font_size** | enum | sm, md, lg, xl |
| **contrast_mode** | enum | normal, high |
| **motion_preference** | enum | full, reduced |
| **color_mode** | enum | light, dark, system |
| **audio_cues** | boolean | default true |
| metadata | JSON | |
| updated_at | timestamp | |

#### Theme System

**Themes** (age/vibe-based):
| Theme | Age Range | Vibe |
|-------|-----------|------|
| `zarok` | 6-12 | Playful, colorful, mascot, sounds, big buttons |
| `ciwan` | 13-17 | Cool, modern, social features, achievements |
| `xort` | 18-25 | Clean, minimal, efficient |
| `mezin` | 26+ | Serious, structured, professional |

**Accessibility** (universal, applies to any theme):
- Font size, contrast, motion, color mode - independent of theme
- A kid with vision issues can use Zarok theme + XL fonts + high contrast

### Adaptive Learning Flow (code)

```typescript
// After user completes an activity
async processActivityResult(attempt: ActivityAttempt) {
  // 1. Record errors if incorrect
  if (!attempt.is_correct) {
    await this.recordErrors(attempt);
  }

  // 2. Update skill proficiency
  const skills = await this.getActivitySkills(attempt.activity_id);
  for (const skill of skills) {
    await this.updateUserSkill(attempt.user_id, skill, attempt);
  }

  // 3. Calculate next review date (spaced repetition)
  await this.scheduleReviews(attempt.user_id);
}

// AI recommendation engine uses:
// - user_skills (what they're weak at)
// - user_errors (specific mistake patterns)
// - user_learning_preferences (how they like to learn)
async getPersonalizedRecommendations(userId: string) {
  const weakSkills = await this.getWeakSkills(userId);
  const errorPatterns = await this.getErrorPatterns(userId);
  const preferences = await this.getPreferences(userId);

  return this.aiEngine.recommend(weakSkills, errorPatterns, preferences);
}
```

---

## Summary

| Domain | Tables | MVP Required |
|--------|--------|--------------|
| Content | 7 | Yes |
| Users & Auth | 3 | Yes |
| Subscriptions | 2 | Optional |
| Progress | 3 | Yes |
| Teacher | 4 | Yes |
| Notifications | 2 | Optional |
| Badges | 2 | Optional |
| Comments | 2 | Optional |
| Audit | 1 | Optional |
| **Adaptive Learning** | **5** | **Phase 2** |

**Total: 31 tables**

---

## Entity Relationship Diagram

```
courses (1) ──< modules (N)
modules (1) ──< units (N)
units (1) ──< lessons (N)
lessons (1) ──< activities (N)
activities (N) >──< materials (N)  [via activity_materials]
activities (N) >──< skills (N)     [via activity_skills]

users (1) ──< user_subscriptions (N)
users (1) ──< user_progress (N)
users (1) ──< activity_attempts (N)
users (1) ──< user_stats (1)
users (1) ──< user_badges (N)
users (1) ──< notifications (N)
users (1) ──< comments (N)
users (1) ──< user_skills (N)
users (1) ──< user_errors (N)
users (1) ──< user_learning_preferences (1)

users/teacher (1) ──< classes (N)
classes (N) >──< users/students (N)  [via class_students]
classes (1) ──< assignments (N)

subscription_plans (1) ──< user_subscriptions (N)
badges (1) ──< user_badges (N)
skills (1) ──< user_skills (N)
activity_attempts (1) ──< user_errors (N)
```

---

## Next Steps

1. [ ] Define MVP screen list
2. [ ] Decide role system details (if needed beyond student/teacher/admin)
3. [ ] Review existing HTML prototype
4. [ ] Create implementation plan
5. [ ] Phase 2: Implement adaptive learning tables and AI recommendation engine

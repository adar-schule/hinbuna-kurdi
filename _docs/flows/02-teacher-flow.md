# Teacher Flow (Mamoste Journey)

**App:** Hinbuna Kurdi (MVP)
**Target:** Mobile-first (375px base)
**Last Updated:** 2026-02-04

---

## Big Picture Notes (Always Remember)

> These notes ensure we design with the future in mind, even when building MVP.

### 1. Mobile-First Always
- Design for 375px (iPhone SE) first
- Desktop is responsive expansion, not primary
- Touch targets: min 44px

### 2. Centralized Settings (Expandable)
- Teacher settings sync across all apps via SSO
- Same settings architecture as Student
- Additional: Content management preferences

### 3. AI/TTS Heavy Activities
- Teachers can preview all audio content (TTS)
- Activity editor includes "Play audio" button
- Generate TTS on save (kurdishtts.com API)

### 4. Ecosystem Apps (Future)
```
Hinbuna Kurdi <-> Ferheng (Dictionary) <-> Quiz App (Practice)
       |______________ SSO + Shared Data ________________|
```
- Teachers see aggregated student vocabulary progress
- Can assign vocabulary lists from Ferheng (future)

---

## Teacher Role

**Who:** Mamoste (Kurdish for "teacher")

**Two types:**

| Role | User | Permissions |
|------|------|-------------|
| **Admin** | Mamoste Ciwan (lead) | Create content, assign teachers, manage users, system settings |
| **Teacher** | Other teachers | Edit assigned content only, view own students |

**Access:** Same login as student, but with `teacher` or `admin` role assigned via `user_roles` join table (many-to-many with `roles`)

---

## Multi-Teacher Scalability

> Designed for MVP (1 teacher) but ready for post-MVP (4+ teachers)

### Decisions Made

| Aspect | Decision |
|--------|----------|
| **View permissions** | All teachers can view all content |
| **Edit permissions** | Only edit assigned content (via `content_authors` table) |
| **Assignment flow** | Admin (Mamoste Ciwan) assigns content to teachers |
| **Conflict handling** | MVP: Audit log / Post-MVP: Soft locking |

### How It Works

```
content_authors table:
+------------------+-------------+--------------+
| user_id          | content_id  | role         |
+------------------+-------------+--------------+
| Mamoste Ciwan    | Unit 1      | owner        | -> Can edit
| Mamoste Ciwan    | Unit 2      | owner        | -> Can edit
| Teacher B        | Unit 1      | viewer       | -> View only
| Teacher B        | Unit 3      | editor       | -> Can edit (assigned)
+------------------+-------------+--------------+
```

### UI Behavior

- Content list shows all content (viewable by all)
- "Edit" button only appears for owned/assigned content
- Unassigned content shows "View only" badge
- Admin can click "Assign to teacher" on any content

---

## Navigation (Mobile)

```
+---------------------------------------+
|  [Logo] Hinbuna Kurdi           [=]   |  <- Top Header + Hamburger
+---------------------------------------+

Hamburger Menu (Teacher):
+---------------------------------------+
|  X Close                              |
|                                       |
|  CONTENT                              |
|  [] Dashboard                         |
|  [] My Content                        |
|  [] Materials                         |
|  --------------------------------     |
|  STUDENTS                             |
|  [] Students Overview                 |
|  --------------------------------     |
|  [] My Profile                        |
|  [] Settings                          |
|  [] Help & Support                    |
|  [] Logout                            |
+---------------------------------------+

Additional for Admin:
+---------------------------------------+
|  ADMIN                                |
|  [] User Management                   |
|  [] System Settings                   |
+---------------------------------------+
```

---

## Flow Diagram

```
+-----------------------------------------------------------------------------+
|                    TEACHER (Logged In) - PRIMARY: CMS                        |
|                              Mobile: 375px                                   |
+-----------------------------------------------------------------------------+

[T1] Dashboard
    |
    |   +---------------------------------------------+
    |   |  [Logo] Hinbuna Kurdi           [=]        |
    |   |  -----------------------------------------  |
    |   |  "Silav, Mamoste!" (Hello, Teacher!)       |
    |   |                                            |
    |   |  CONTENT STATS                             |
    |   |  +---------+---------+---------+           |
    |   |  | 8       | 24      | 96      |           |
    |   |  | Units   | Lessons | Activities          |
    |   |  +---------+---------+---------+           |
    |   |                                            |
    |   |  Recent Edits                              |
    |   |  +-------------------------------+         |
    |   |  | Unit 3: Reng - edited 2h ago |         |
    |   |  | Lesson 2.4 - edited yesterday|         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  STUDENT STATS                             |
    |   |  +---------+---------+---------+           |
    |   |  | 24      | 85%     | 12      |           |
    |   |  |Students | Avg Prog| Active  |           |
    |   |  +---------+---------+---------+           |
    |   |                                            |
    |   |  Quick Actions                             |
    |   |  [ + New Lesson ]  [ View Students ]       |
    |   +---------------------------------------------+
    |
    |--> "My Content" (menu) --> [T2] Content List
    |
    |--> "View Students" --> [T7] Students Overview


+-----------------------------------------------------------------------------+
|                         CMS: CONTENT MANAGEMENT                              |
|                              Mobile: 375px                                   |
+-----------------------------------------------------------------------------+

[T2] Content List (Courses / Modules / Units / Lessons)
    |
    |   +---------------------------------------------+
    |   |  <- Back         My Content                |
    |   |                                            |
    |   |  [ Courses ] [ Units ] [ Lessons ]  <- tabs|
    |   |  -----------------------------------------  |
    |   |                                            |
    |   |  Kurmanji A1                               |
    |   |  +-------------------------------+         |
    |   |  | Unit 1: Silav u Nasin   [Edit]|  <- owner|
    |   |  | 4 lessons | 12 activities    |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Unit 2: Cinav u Bun    [Edit]|         |
    |   |  | 4 lessons | 15 activities    |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Unit 3: Reng          [View] |  <- not assigned|
    |   |  | 3 lessons | 10 activities    |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  [ + Create Unit ]                         |
    |   +---------------------------------------------+
    |
    |--> Tap Unit --> [T3] Unit Editor
    |
    |--> "+ Create Unit" --> [T3] Unit Editor (new)


[T3] Unit Editor
    |
    |   +---------------------------------------------+
    |   |  <- Back    Unit 1: Silav u Nasin   [Save]|
    |   |                                            |
    |   |  Title (Kurdish)                           |
    |   |  +-------------------------------+         |
    |   |  | Silav u Nasin                |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  Title (English)                           |
    |   |  +-------------------------------+         |
    |   |  | Greetings & Introductions    |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  Description                               |
    |   |  +-------------------------------+         |
    |   |  | Learn to greet people and    |         |
    |   |  | introduce yourself in Kurdish |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  Order: [ 1 ]   Status: [Published v]     |
    |   |                                            |
    |   |  LESSONS IN THIS UNIT                      |
    |   |  -----------------------------------------  |
    |   |  +-------------------------------+         |
    |   |  | 1. Silav! (Hello)       [Edit]|         |
    |   |  |    3 activities              |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | 2. Tu cawa yi?          [Edit]|         |
    |   |  |    4 activities              |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  [ + Add Lesson ]                          |
    |   +---------------------------------------------+
    |
    |--> Tap Lesson --> [T4] Lesson Editor
    |
    |--> "+ Add Lesson" --> [T4] Lesson Editor (new)


[T4] Lesson Editor
    |
    |   +---------------------------------------------+
    |   |  <- Back     Lesson: Silav!         [Save]|
    |   |                                            |
    |   |  Title (Kurdish)                           |
    |   |  +-------------------------------+         |
    |   |  | Silav!                        |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  Title (English)                           |
    |   |  +-------------------------------+         |
    |   |  | Hello!                        |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  Learning Objective                        |
    |   |  +-------------------------------+         |
    |   |  | Learn basic greetings:       |         |
    |   |  | silav, roj bas, sav bas      |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  Estimated Time: [ 5 ] min                |
    |   |  Order: [ 1 ]   Status: [Published v]     |
    |   |                                            |
    |   |  ACTIVITIES                                |
    |   |  -----------------------------------------  |
    |   |  +-------------------------------+         |
    |   |  | 1. MCQ: What is "silav"? [Edit]        |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | 2. Flashcard: Greetings  [Edit]        |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | 3. Matching: Pairs       [Edit]        |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  [ + Add Activity ]                        |
    |   +---------------------------------------------+
    |
    |--> Tap Activity --> [T5] Activity Editor
    |
    |--> "+ Add Activity" --> Activity Type Picker --> [T5]


[T5] Activity Editor
    |
    |   +---------------------------------------------+
    |   |  <- Back     MCQ Activity           [Save]|
    |   |                                            |
    |   |  Activity Type                             |
    |   |  [ MCQ v ]                                 |
    |   |  (Multiple Choice, Gap Fill, Matching,    |
    |   |   Flashcard, Word Order, Listening)       |
    |   |                                            |
    |   |  Question (Kurdish)                        |
    |   |  +-------------------------------+         |
    |   |  | "Silav" bi almani ci ye?     |         |
    |   |  +-------------------------------+         |
    |   |  [ Play TTS ]  <- preview audio           |
    |   |                                            |
    |   |  ANSWER OPTIONS                            |
    |   |  -----------------------------------------  |
    |   |  +-------------------------------+         |
    |   |  | A: Hallo        [x] Correct  |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | B: Tschuss      [ ]          |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | C: Danke        [ ]          |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | D: Bitte        [ ]          |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  [ + Add Option ]                          |
    |   |                                            |
    |   |  Explanation (shown after answer)          |
    |   |  +-------------------------------+         |
    |   |  | "Silav" means "Hello" in     |         |
    |   |  | Kurdish. Used for greetings. |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  XP Value: [ 10 ]                         |
    |   |  Order: [ 1 ]   Status: [Published v]     |
    |   +---------------------------------------------+
    |
    |   ACTIVITY TYPES SUPPORTED:
    |   - MCQ (multiple choice)
    |   - Gap Fill (type missing word)
    |   - Matching (connect pairs)
    |   - Flashcard (reveal meaning)
    |   - Word Order (arrange sentence)
    |   - Listening (what did you hear?)
    |   - Reading (dialogue comprehension)


[T6] Materials Manager
    |
    |   +---------------------------------------------+
    |   |  <- Back         Materials                 |
    |   |                                            |
    |   |  [ Images ] [ Audio ] [ Documents ]  <- tabs|
    |   |  -----------------------------------------  |
    |   |                                            |
    |   |  IMAGES                                    |
    |   |  +-------+ +-------+ +-------+            |
    |   |  |[img1] | |[img2] | |[img3] |            |
    |   |  |apple  | |house  | |family |            |
    |   |  +-------+ +-------+ +-------+            |
    |   |                                            |
    |   |  [ + Upload Image ]                        |
    |   |  -----------------------------------------  |
    |   |                                            |
    |   |  TTS AUDIO                                 |
    |   |  Generated audio files from kurdishtts.com |
    |   |                                            |
    |   |  +-------------------------------+         |
    |   |  | "Silav" - 1.2s         [Play]|         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | "Roj bas" - 1.5s       [Play]|         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  [ Generate New TTS ]                      |
    |   |  +-------------------------------+         |
    |   |  | Enter Kurdish text...        |         |
    |   |  +-------------------------------+         |
    |   |  Voice: [ Kurmanji Female v ]             |
    |   |  [ Generate ]                              |
    |   +---------------------------------------------+


+-----------------------------------------------------------------------------+
|                    SECONDARY: STUDENT MONITORING                             |
|                              Mobile: 375px                                   |
+-----------------------------------------------------------------------------+

[T7] Students Overview
    |
    |   +---------------------------------------------+
    |   |  <- Back         Students                  |
    |   |                                            |
    |   |  24 students total                         |
    |   |                                            |
    |   |  Sort: [ Progress v ]  Filter: [ All v ]  |
    |   |  -----------------------------------------  |
    |   |                                            |
    |   |  +-------------------------------+         |
    |   |  | Azad Kurd             95% |||         |
    |   |  | Level 5 | 23 day streak      |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Delal Sin             87% ||| |         |
    |   |  | Level 4 | 12 day streak      |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Rona Amed             45% ||  |  <- warning|
    |   |  | Level 2 | 0 day streak       |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  ... more students                         |
    |   +---------------------------------------------+
    |
    |--> Tap Student --> [T8] Student Detail


[T8] Student Detail
    |
    |   +---------------------------------------------+
    |   |  <- Back              Student Detail       |
    |   |                                            |
    |   |  +-----+                                   |
    |   |  | AVA |  Azad Kurd                       |
    |   |  +-----+  azad@email.com                  |
    |   |           Joined: Dec 2025                |
    |   |                                            |
    |   |  +---------+---------+---------+          |
    |   |  | Level 5 | 23 days | 95%     |          |
    |   |  |         | streak  | progress|          |
    |   |  +---------+---------+---------+          |
    |   |                                            |
    |   |  Current Position                         |
    |   |  Course: Kurmanji A1                      |
    |   |  Unit: 6 - Verb Conjugation              |
    |   |  Lesson: 3 of 5                          |
    |   |                                            |
    |   |  Weak Areas                               |
    |   |  - Verb endings (-im, -i, -e)            |
    |   |  - Question words (ci, ki, kenge)        |
    |   |                                            |
    |   |  Recent Activity                          |
    |   |  - Completed Lesson 6.2 - 2h ago         |
    |   |  - 87% accuracy on verb quiz             |
    |   |  - Earned "Week Warrior" badge           |
    |   |                                            |
    |   |  [Future: "View Vocabulary" -> Ferheng]  |
    |   +---------------------------------------------+
```

---

## Screen Summary

### PRIMARY: CMS (Content Management) - 6 screens

| # | Screen | Priority | Description |
|---|--------|----------|-------------|
| T1 | Dashboard | P0 | Content stats, student stats, quick actions |
| T2 | Content List | P0 | Browse courses/modules/units/lessons |
| T3 | Unit Editor | P0 | Create/edit units, manage lessons |
| T4 | Lesson Editor | P0 | Create/edit lessons, manage activities |
| T5 | Activity Editor | P0 | Create MCQ, gap-fill, matching, etc. + TTS preview |
| T6 | Materials Manager | P1 | Upload images, generate TTS audio |

### SECONDARY: Student Monitoring - 2 screens

| # | Screen | Priority | Description |
|---|--------|----------|-------------|
| T7 | Students Overview | P1 | All students, progress, sorting |
| T8 | Student Detail | P2 | Individual student progress, weak areas |

### Total: 8 screens

**Priority breakdown:**
- P0 (MVP): T1, T2, T3, T4, T5 (5 screens)
- P1: T6, T7 (2 screens)
- P2: T8 (1 screen)

---

## Activity Types Reference

Teacher can create these activity types in T5 (Activity Editor):

| Type | Description | Fields |
|------|-------------|--------|
| `mcq` | Multiple choice question | Question, 2-4 options, correct answer, explanation |
| `gap_fill` | Fill in the blank | Sentence with `___`, correct word, hints |
| `matching` | Connect pairs | List of pairs (Kurdish-German) |
| `flashcard` | Reveal meaning | Front (Kurdish), back (translation), audio |
| `word_order` | Arrange sentence | Scrambled words, correct order |
| `listening` | Audio comprehension | Audio file, question, options |
| `reading` | Dialogue/text comprehension | Text, questions |

All types support:
- TTS audio preview (kurdishtts.com)
- XP value assignment
- Explanation text (shown after answer)
- Multi-language support (Kurdish + DE/EN/TR)

---

## Data Model Alignment

Teacher screens map directly to existing tables:

| Screen | Tables Used |
|--------|-------------|
| T2 Content List | `courses`, `modules`, `units`, `lessons` |
| T3 Unit Editor | `units`, `lessons` |
| T4 Lesson Editor | `lessons`, `activities` |
| T5 Activity Editor | `activities`, `materials` |
| T6 Materials Manager | `materials` |
| T7 Students Overview | `users`, `user_progress`, `user_stats` |
| T8 Student Detail | `users`, `user_progress`, `activity_attempts`, `user_skills` |

Multi-teacher permissions use: `content_authors` table

---

## Future Integration Points

1. **Activity Editor [T5]**
   - "Import from Ferheng" - pull vocabulary lists
   - Auto-generate activities from vocabulary

2. **Materials Manager [T6]**
   - Bulk TTS generation for lesson vocabulary
   - Image library shared across apps

3. **Student Detail [T8]**
   - "View student vocabulary" -> Ferheng (student's word list)

4. **Analytics (Post-MVP)**
   - Common error patterns -> suggest content improvements
   - Export reports for institutions

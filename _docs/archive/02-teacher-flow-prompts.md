# Teacher Flow - AI Design Prompts

**Screens:** 8 total (6 CMS + 2 Student Monitoring)
**Mobile:** 375px width, dark mode

---

## CMS SCREENS (Content Management)

---

### T1. Dashboard

```
Mobile teacher dashboard for Kurdish learning app CMS.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: "Hinbûna Kurdî" logo + leaf icon left. Right: language globe icon, sun/moon toggle icon, hamburger menu icon (3 lines). All icons clean, monochrome.
2. Greeting: "Silav, Mamoste!" (Hello, Teacher)
3. Content Stats row (3 boxes):
   - 8 Units
   - 24 Lessons
   - 96 Activities
4. Recent Edits card:
   - "Unit 3: Reng - edited 2h ago"
   - "Lesson 2.4 - edited yesterday"
5. Student Stats row (3 boxes):
   - 24 Students
   - 85% Avg Progress
   - 12 Active Today
6. Quick Actions:
   - "+ New Lesson" primary button
   - "View Students" secondary button

Professional CMS feel, clear overview.
Mobile: 375px width.
```

---

### T2. Content List

```
Mobile content list screen for CMS.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "My Content" title
2. Tab bar: Courses | Units | Lessons
3. Course section header: "Kurmanji A1"
4. Unit cards stacked:

Card 1:
- "Unit 1: Silav u Nasin"
- "4 lessons | 12 activities"
- [Edit] button (blue/primary)

Card 2:
- "Unit 2: Cinav u Bun"
- "4 lessons | 15 activities"
- [Edit] button

Card 3:
- "Unit 3: Reng"
- "3 lessons | 10 activities"
- [View] badge (not editable - for multi-teacher)

5. "+ Create Unit" button at bottom

Each card: Full width, shows edit/view status.
Mobile: 375px width.
```

---

### T3. Unit Editor

```
Mobile unit editor screen for CMS.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "Unit 1: Silav u Nasin", [Save] button
2. Form fields:

Title (Kurdish):
- Input: "Silav u Nasin"

Title (English):
- Input: "Greetings & Introductions"

Description:
- Textarea: "Learn to greet people and introduce yourself"

Order: Number input [1]
Status: Dropdown [Published]

3. Section header: "LESSONS IN THIS UNIT"
4. Lesson list:

Lesson 1: "Silav! (Hello)" - 3 activities - [Edit]
Lesson 2: "Tu cawa yi?" - 4 activities - [Edit]

5. "+ Add Lesson" button

Clean form layout, clear hierarchy.
Mobile: 375px width.
```

---

### T4. Lesson Editor

```
Mobile lesson editor screen for CMS.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "Lesson: Silav!", [Save] button
2. Form fields:

Title (Kurdish):
- Input: "Silav!"

Title (English):
- Input: "Hello!"

Learning Objective:
- Textarea: "Learn basic greetings: silav, roj bas, sav bas"

Estimated Time: [5] min
Order: [1]
Status: [Published]

3. Section header: "ACTIVITIES"
4. Activity list (draggable order):

1. MCQ: What is "silav"? - [Edit]
2. Flashcard: Greetings - [Edit]
3. Matching: Pairs - [Edit]

5. "+ Add Activity" button

Form-based editor with activity list.
Mobile: 375px width.
```

---

### T5. Activity Editor

```
Mobile activity editor screen for CMS.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "MCQ Activity", [Save] button
2. Activity Type dropdown: MCQ selected
   - Options: MCQ, Gap Fill, Matching, Flashcard, Word Order, Listening

3. Question (Kurdish):
- Input: "Silav bi almani ci ye?"
- [Play TTS] button below input

4. Section: "ANSWER OPTIONS"
- Option A: "Hallo" - [x] Correct checkbox
- Option B: "Tschuss" - [ ]
- Option C: "Danke" - [ ]
- Option D: "Bitte" - [ ]
- "+ Add Option" link

5. Explanation:
- Textarea: "Silav means Hello in Kurdish"

6. Settings row:
- XP Value: [10]
- Order: [1]
- Status: [Published]

TTS preview button is key feature.
Mobile: 375px width.
```

---

### T6. Materials Manager

```
Mobile materials manager screen for CMS.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "Materials" title
2. Tab bar: Images | Audio | Documents

IMAGES TAB:
3. Image grid (3 columns):
- Thumbnail 1: apple.jpg
- Thumbnail 2: house.jpg
- Thumbnail 3: family.jpg
4. "+ Upload Image" button

AUDIO TAB:
3. Audio list:
- "Silav" - 1.2s - [Play] button
- "Roj bas" - 1.5s - [Play] button
4. TTS Generator:
- Text input: "Enter Kurdish text..."
- Voice dropdown: [Kurmanji Female]
- [Generate] button

File manager with TTS generation feature.
Mobile: 375px width.
```

---

## STUDENT MONITORING SCREENS

---

### T7. Students Overview

```
Mobile students list for teacher.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "Students" title
2. Count: "24 students total"
3. Controls row:
- Sort: [Progress v] dropdown
- Filter: [All v] dropdown
4. Student cards stacked:

Card 1:
- Avatar, "Azad Kurd"
- Progress bar: 95%
- "Level 5 | 23 day streak"

Card 2:
- Avatar, "Delal Sin"
- Progress bar: 87%
- "Level 4 | 12 day streak"

Card 3 (warning state):
- Avatar, "Rona Amed"
- Progress bar: 45% (orange/warning)
- "Level 2 | 0 day streak" + warning icon

Each card shows key metrics at a glance.
Mobile: 375px width.
```

---

### T8. Student Detail

```
Mobile individual student detail for teacher.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "Student Detail"
2. Student card:
- Large avatar
- "Azad Kurd"
- "azad@email.com"
- "Joined: Dec 2025"

3. Stats row (3 boxes):
- Level 5
- 23 days streak
- 95% progress

4. Current Position section:
- Course: Kurmanji A1
- Unit: 6 - Verb Conjugation
- Lesson: 3 of 5

5. Weak Areas section (warning style):
- "Verb endings (-im, -i, -e)"
- "Question words (ci, ki, kenge)"

6. Recent Activity list:
- "Completed Lesson 6.2 - 2h ago"
- "87% accuracy on verb quiz"
- "Earned Week Warrior badge"

Detailed student view with actionable insights.
Mobile: 375px width.
```

# Content Structure Guide

**For:** Content creators, teachers, curriculum designers
**Version:** 1.0
**Last Updated:** February 2026

---

## Why This Structure?

We follow **international educational standards** so our content:
- Is recognized by institutions worldwide
- Can integrate with other learning systems (LMS)
- Is easy to understand for learners and teachers

**Standards we follow:**
- **CEFR** - Common European Framework of Reference for Languages
- **SCORM/xAPI** - Technical standards for learning content
- **Instructional Design** - Best practices for course structure

---

## Content Hierarchy

Think of it like a book:

```
COURSE = The whole book
  └── MODULE = A chapter (corresponds to CEFR level)
      └── UNIT = A section within a chapter (theme)
          └── LESSON = A single page/topic (5-15 min)
              └── ACTIVITY = An exercise on that page
```

### Definitions

| Term | What it is | Example | Duration |
|------|------------|---------|----------|
| **Course** | The complete learning offering | "Kurmanji Kurdish" | Months |
| **Module** | A major level (CEFR-aligned) | "A1 - Beginner" | Weeks |
| **Unit** | A thematic grouping | "Greetings & Introductions" | Days |
| **Lesson** | A single learning session | "Saying Hello" | 5-15 min |
| **Activity** | A practice exercise | Multiple choice quiz | 1-2 min |
| **Material** | Content used in activities | Text, audio clip, image | - |

---

## CEFR Levels Explained

| Level | Name | Description |
|-------|------|-------------|
| **A1** | Beginner | Basic phrases, introductions |
| **A2** | Elementary | Simple conversations, daily topics |
| **B1** | Intermediate | Independent communication |
| **B2** | Upper Intermediate | Complex topics, fluent interaction |
| **C1** | Advanced | Sophisticated language use |
| **C2** | Mastery | Near-native proficiency |

---

## Content Mappings

Each course level has its own detailed mapping document that traces source materials to units, lessons, and activities:

→ **Kurmancî A1:** See [02b-content-mapping-a1.md](./02b-content-mapping-a1.md) — 8 units, 25 lessons, ~220 activities mapped from `_material/von Mamoste/`

Source materials live in the wrapper folder `_material/`. The `von Mamoste/` subfolder is the primary entry point — Mamoste's teaching files shape how content is structured in the app.

---

## Activity Types

| Type | Description | Example |
|------|-------------|---------|
| **Reading** | Show text with translation | Display sentence pairs |
| **Listening** | Play audio, learner responds | Listen and repeat |
| **Multiple Choice (MCQ)** | Choose correct answer | "What does X mean?" |
| **Gap-fill** | Fill in the blank | "Navê ___ Eda ye" |
| **Matching** | Connect pairs | Match Kurdish to German |
| **Word Order** | Arrange words correctly | Build a sentence |
| **Flashcard** | Memorize vocabulary | Show word, flip for meaning |
| **Dictation** | Write what you hear | Listen to audio, type the sentence |
| **Speaking** | Record and compare | Say the word/sentence, compare with native audio |

---

## How to Prepare Content

> **Draft:** This section describes the planned content preparation workflow. It will be updated once teacher screens (T3-T5) are implemented and the content entry format is finalized.

### For each Lesson, provide:

1. **Title** (in Kurdish, German, English)
   - Example: "Silav û Nasîn" / "Begrüßung" / "Greetings"

2. **Learning Objective** (what learner can do after)
   - Example: "Learner can say hello and introduce themselves"

3. **Key Vocabulary** (5-10 words)
   - Word in Kurdish
   - Translation in German
   - Pronunciation guide (optional)

4. **Sample Sentences** (3-5 sentences)
   - Kurdish sentence
   - Word-by-word breakdown
   - Full translation

5. **Cultural Note** (optional)
   - Context about usage

---

## Template for New Lesson

> **Draft:** This template is provisional. It will be updated once teacher screens (T3-T5) are implemented and the content entry format is finalized.

```
LESSON: [Number and Title]

LEARNING OBJECTIVE:
After this lesson, the learner can...

VOCABULARY:
| Kurdish | German | English | Pronunciation |
|---------|--------|---------|---------------|
|         |        |         |               |

SENTENCES:
1. [Kurdish sentence]
   - Word-by-word: [breakdown]
   - Translation: [German/English]

2. [Kurdish sentence]
   - Word-by-word: [breakdown]
   - Translation: [German/English]

CULTURAL NOTE:
[Any relevant context]

SUGGESTED ACTIVITIES:
- [ ] Reading exercise
- [ ] MCQ quiz
- [ ] Gap-fill exercise
```

---

## Questions?

Contact the development team for clarification on structure or formatting.

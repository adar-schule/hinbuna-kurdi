# Content Mapping: Kurmancî A1 Course

**Source:** `_material/von Mamoste/` (24 docx files, 23 unique + 1 duplicate)
**Last Updated:** February 2026

> **TODO:** Adapt for multi-lang architecture (→ See [09-multi-lang-architecture.md](./09-multi-lang-architecture.md)) and SaaS/white-label reusability.

---

## Source Materials

**Primary:** `_material/von Mamoste/` — 24 docx files organized in groups 1-8. Each group becomes a unit, each file becomes a lesson.

**Secondary:** `_material/ez ji te hez dikem - 50 page/` — 50-page scanned textbook (JPEG images, 5 chapters). Likely the source textbook that Mamoste's docx files are based on. File `3.reng û mijar-r.29-34.docx` references pages 29-34 which align with Chapter 03.

---

## File Inventory

| # | Filename | Topic | Content Type | German? |
|---|----------|-------|-------------|---------|
| 1a | `1.Diyaloga yekem.docx` | First dialogue — greetings & introductions | Dialogue | No |
| 1b | `1.Reng û hevok.docx` | Colors & sentences | Vocab list + sentences | Yes |
| 1c | `1.heft û hefte-Ez berf im.docx` | Numbers 1-7, days of week, "Ez berf im" song | Vocab + song | Yes |
| 2 | `2.Ev bi kurdî_almanî çi ye.docx` | "What is this?" — prepositions, vocabulary | Translation Q&A | Yes |
| 3a | `3.Cînavên kesîn û bûn.docx` | Personal pronouns & verb "bûn" (to be) | Grammar tables | Yes |
| 3b | `3.Navdêra xwerû.docx` | Nominative case — singular/plural | Grammar table | Yes |
| 3c | `3.bûn-neyînî.docx` | Verb "bûn" — full negative conjugation | Drill exercises | No |
| 3d | `3.reng û mijar-r.29-34.docx` | Colors by category (body, clothing, fruit, etc.) | Themed vocab | Yes |
| 4a | `4.alt.docx` | Adjectives for "old" (kal/pîr/kevn/kartu) | Grammar + examples | Yes |
| 4b | `4.bûn bi hevoka pêreyî.docx` | "bûn" with subordinate clauses (ji ber ku, loma) | Complex sentences | Yes |
| 4c | `4.nû-kevn-kal-pîr.docx` | New/old/young classification | Exercise | Minimal |
| 5a | `5.Alan,Delal,Sosîn,Azad.docx` | Character profiles in present tense | Reading passages | No |
| 5b | `5.Kesandina lêkeran.docx` | 18 verbs conjugation table | Reference table | Yes |
| 5c | `5.Tewandîn-Deklination.docx` | Declension / Accusative case | Grammar + examples | Yes |
| 5d | `5.diyalog.docx` | Meeting, origin, languages, age | Dialogue | No |
| 5e | `5.tabela-kesandina lêkeran.docx` | 17 verbs expanded conjugation | Reference table | Yes |
| 6a | `6.Deh lêker û hevok.docx` | 10 verbs with affirmative/negative sentences | Sentence pairs | Yes |
| 6b | `6.Verben Sätze bilden.docx` | Building sentences with verbs | Q&A drills | Yes |
| 6c | `6.lêker-erênî-neyînî.docx` | Affirmative/negative patterns + negation rules | Grammar + exercises | Yes |
| 7a | `7.Pirsên pêkan û kîjan lêker.docx` | Comprehension questions + verb identification | Reading + Q&A | Yes |
| 7b | `7.diyalog-kîjan lêker-r.fermanî.docx` | Dialogue with verb ID + imperative forms | Annotated dialogue | Yes |
| 8a | `8.Fragewörter.docx` | Question words (çi, çawa, çend, çima, kî, kê, li ku, ji ku) | Systematic grammar | Yes |
| 8b | `8.hevok-neyînî-yj-pj-diyalog.docx` | Sentences, negation, family vocab, verb "hatin" | Mixed content | Yes |
| -- | `Diyaloga yekem.docx` | DUPLICATE of 1a | — | — |

---

## Course Structure: Kurmancî A1

**8 units, 25 lessons, ~220 activities**

**JSON implementation:** `mockup/data/course.json` + `mockup/data/unit-{1-8}.json`

---

### Beş 1: Silav û Reng (Greetings & Colors)
**3 lessons**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 1.1 Diyaloga Yekem | `1.Diyaloga yekem.docx` | Roj baş!, names (Navê te çi ye?), Ev çi ye?, farewells (Bi xatirê te! Oxir be!) | flashcard, reading, mcq |
| 1.2 Reng û Hevok | `1.Reng û hevok.docx` | 14 colors (sor, zer, kesk, mor, spi, reş...) + color sentences with body parts | flashcard, matching, gap_fill |
| 1.3 Heft û Hefte | `1.heft û hefte.docx` | Numbers 1-7, days of week (yekşem-şemî), "Ez berf im" song | flashcard, matching, mcq |

**Key vocabulary:** Roj baş, Silav, Bi xatirê te, Oxir be, Saxî û silametî, Ev çi ye?, 14 colors, numbers 1-7, 7 days

---

### Beş 2: Ev Çi Ye? (What Is This?)
**2 lessons**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 2.1 Bi Kurdî Çi Ye? | `2.Ev bi kurdî_almanî.docx` | Preposition "bi", translation drills, 20+ vocab items | flashcard, mcq, matching, gap_fill |
| 2.2 Cînavên Kesîn | `2.Ev bi kurdî_almanî.docx` | Pronoun table, common phrases | flashcard, mcq, matching, gap_fill |

**Key vocabulary:** bi (with/in), poz, por, av, şêr, çay, mamoste, nan, pirtûk, goşt, welat + full pronoun table

---

### Beş 3: Cînav û Bûn (Pronouns & To Be)
**4 lessons — Core grammar unit**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 3.1 Cînavên Kesîn û Bûn | `3.Cînavên kesîn.docx` | Personal pronouns (Group 1 & 2), bûn conjugation, preposition "li" | flashcard, gap_fill, mcq |
| 3.2 Navdêra Xwerû | `3.Navdêra xwerû.docx` | Nominative case, singular/plural agreement | mcq, gap_fill |
| 3.3 Bûn – Neyînî | `3.bûn-neyînî.docx` | Negation with "ne" — full 6-person drills | gap_fill, mcq |
| 3.4 Reng û Mijar | `3.reng û mijar.docx` | 6 themed vocab categories: body, clothing, fruit, vegetables, animals, house | flashcard, matching |

**Key grammar:** bûn: -im/-î/-e/-in + -me/-yî/-ye/-ne. Negation: ne + adjective. Nominative: consonant vs vowel nouns.

---

### Beş 4: Danasîn û Hevok (Descriptions & Sentences)
**3 lessons**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 4.1 Kal, Pîr, Kevn | `4.alt.docx` | 4 words for "old": kal (man), pîr (woman), kevn (object), kartu (food/stale) | mcq, matching, flashcard |
| 4.2 Hevokên Pêreyî | `4.bûn bi hevoka pêreyî.docx` | Subordinate clauses: ji ber ku, loma, lê | gap_fill, reading |
| 4.3 Nû û Kevn | `4.nû-kevn-kal-pîr.docx` | Classification exercise — sorting nouns | matching, mcq |

**Key grammar:** Adjective semantics, conjunctions (ji ber ku, loma, lê), classification.

---

### Beş 5: Kesandina Lêkeran (Verb Conjugation)
**4 lessons — Heaviest unit (5 source files)**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 5.1 Alan, Delal, Sosîn, Azad | `5.Alan,Delal,Sosîn,Azad.docx` | 4 character profiles — reading comprehension | reading, mcq |
| 5.2 Kesandina Lêkeran | `5.Kesandina lêkeran.docx` + `5.tabela` | 18 verbs fully conjugated (present tense + imperative) | flashcard, gap_fill, matching |
| 5.3 Tewandîn | `5.Tewandîn-Deklination.docx` | Accusative case — masc stays same, fem adds -ê | mcq, gap_fill |
| 5.4 Diyalog | `5.diyalog.docx` | Meeting dialogue — origin, occupation, age, languages | reading, mcq, gap_fill |

**Key grammar:** Present tense conjugation (18 verbs), imperative (raweya fermanî), accusative case (tewandîn).

---

### Beş 6: Lêker û Hevok (Verbs & Sentences)
**3 lessons**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 6.1 Deh Lêker | `6.Deh lêker û hevok.docx` | 10 verbs in affirmative/negative sentence pairs | flashcard, gap_fill |
| 6.2 Hevok Çêkirin | `6.Verben Sätze bilden.docx` | Building sentences with verbs (avêtin, çûn, dan, dîtin) | gap_fill, word_order |
| 6.3 Erênî û Neyînî | `6.lêker-erênî-neyînî.docx` | Negation rules: bûn→ne, verbs→na-, zanîn/karîn→ni-, hebûn→tune | mcq, gap_fill |

**Key grammar:** Verb negation system (4 patterns), sentence building, Q&A patterns.

---

### Beş 7: Têgihîştin û Axaftin (Understanding & Speaking)
**2 lessons**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 7.1 Pirsên Pêkan | `7.Pirsên pêkan.docx` | Story comprehension — who/what/where/why | reading, mcq |
| 7.2 Diyalog û Lêker | `7.diyalog-kîjan lêker.docx` | Annotated dialogue with verb identification | reading, mcq, gap_fill |

**Key skills:** Reading comprehension, verb identification in context.

---

### Beş 8: Peyvên Pirsê û Malbat (Question Words & Family)
**2 lessons**

| Lesson | Source File | Content Summary | Activity Types |
|--------|-----------|-----------------|----------------|
| 8.1 Peyvên Pirsê | `8.Fragewörter.docx` | 8 question words: çi, çawa, çend, çima, kî, kê, li ku, ji ku | flashcard, mcq, gap_fill |
| 8.2 Malbat û Diyalog | `8.hevok-neyînî.docx` | 15+ family terms, verb "hatin" conjugation, place suffixes | flashcard, matching, reading |

**Key vocabulary:** 8 question words, 15+ family terms, cardinal directions, place suffixes.

---

## Data Model Alignment

→ Full schema: See [04-data-model-design.md](./04-data-model-design.md)

| App Concept | Data Table | Notes |
|-------------|-----------|-------|
| Kurmancî A1 | `courses` | One course row |
| A1: Destpêk | `modules` | One module (CEFR A1) |
| Beş 1-8 | `units` (8 rows) | Each file group = one unit |
| 25 lessons | `lessons` (25 rows) | Each file = one lesson |
| ~220 activities | `activities` | Types: mcq, gap_fill, matching, flashcard, word_order, reading, listening |
| Audio | `materials` (type: audio) | Future — TTS via kurdishtts.com |
| Text content | `activities.content` (JSON) | Stores question/options/correct_answer/hints |

All activity types used exist in the schema enum.

---

## Listen Icon Rule

**Every Kurdish word, sentence, or paragraph gets a speaker/listen icon:**
- Flashcard: word + example sentence both get icons
- Dialogue: each line gets an icon
- MCQ: Kurdish text in question + options get icons
- Gap-fill: the full sentence gets an icon
- Matching: Kurdish side items get icons
- Reading: each paragraph/line gets an icon

Icons are placeholder pulse animation, ready for kurdishtts.com API integration.

---

## Vocabulary Summary (~200+ unique words)

**Greetings:** Roj baş, Silav, Bi xatirê te, Oxir be, Saxî û silametî, Tu bi xêr hatî
**Pronouns:** ez, tu, ew, em, hûn, ew / min, te, wî, wê, me, we, wan
**Colors (14):** sor, zer, kesk, mor, spi, reş, sin, boz, qehweyî, porteqalî, pivazî, sîrî, xakî, genimî
**Body (10+):** çav, lêv, por, poz, çerm, diran, panî, pê, pişt, rû, çene, dest
**Animals (12+):** pisîk, şêr, bizin, ker, jûjî, hesp, hirç, kerguh, kuçik, kund, beraz, ga, çelek, mî, gur, beq
**Food (15+):** nan, av, sêv, goşt, çay, sîr, lîmon, tirî, zeytûn, kartol, bacan, porteqal, masî, birinc
**Family (15+):** dayik, bav, bira, xwişk, bapîr, dapîr, xal, ap, xatî, met, pismam, kurxal, dotmam, keçxal
**Verbs (25+):** bûn, çûn, dan, dîtin, firotin, girîn, gotin, kenîn, ketin, kirîn, kirin, lîstin, nêrîn, nivîsîn, şûştin, xwarin, xwendin, zanîn, avêtin, hatin, peyivîn, jenîn, hez kirin, bihîstin, girtin
**Question words (8):** çi, çawa, çend, çima, kî, kê, li ku, ji ku
**Adjectives (20+):** baş, nexweş, kal, pîr, kevn, ciwan, nû, teze, kartu, piçûk, mezin, direşt, zû, hêdî, erzan, germ, dîn, xweşik, rind, xemgîn

---

## Content Gaps (For Future — NOT blocking MVP)

- No past tense (all present)
- No future tense
- No numbers beyond 7 (systematic)
- No time/clock vocabulary
- No food ordering / shopping dialogue
- No weather vocabulary (beyond "Ez berf im" song)
- No explicit ezafe construction lesson

---

## 50-Page Book Reference

`_material/ez ji te hez dikem - 50 page/` contains JPEG scans of the source textbook:
- **Ch 01:** pages 3-14 (10 images)
- **Ch 02:** pages 15-24 (10 images)
- **Ch 03:** pages 25-34 (10 images) — confirmed linked to `3.reng û mijar-r.29-34.docx`
- **Ch 04:** pages 35-44 (10 images)
- **Ch 05:** pages 45-49 (5 images)

Would need OCR to extract text. Could be used as visual reference or supplementary material.

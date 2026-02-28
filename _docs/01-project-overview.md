# Hinbuna Kurdî - Project Overview

**Version:** 1.0
**Last Updated:** February 2026

---

## What is Hinbuna Kurdî?

Hinbuna Kurdî is a **mobile-first web application** for learning the Kurdish language, starting with the **Kurmanji dialect**.

Our goal is to create a professional, scalable learning platform that can be:
- Used by individual learners
- Licensed to educational institutions
- White-labeled for corporate training

---

## Vision

> Make Kurdish language learning accessible, structured, and engaging for learners worldwide.

**Current Focus:** Kurmanji dialect, A1-B1 levels
**Future Plans:** Sorani dialect, additional levels, native mobile apps

---

## Team

| Role | Person | Responsibilities |
|------|--------|------------------|
| Project Lead & Engineer | Armanc (Nuri Armanç Engin) | Full-stack development, DevOps, architecture |
| Frontend & UX | Gule | User interface, user experience design |
| Content & Curriculum | Mamoste | Language materials, lesson content, translations |

---

## Target Users

### Primary Users
1. **Learners (Students)** - People wanting to learn Kurdish
2. **Teachers** - Educators managing content and tracking student progress

### Future Users (B2B)
- Language schools
- Cultural organizations
- Corporate training departments
- Government/NGO programs

---

## Key Features (MVP)

### For Learners
- Structured lessons following CEFR levels (A1, A2, B1...)
- Interactive exercises (flashcard, reading, MCQ, gap-fill, matching, word order, listening)
- Progress tracking (streaks, completion stats)
- Kurdish TTS audio on every word and sentence
- Mobile-friendly interface

### For Teachers/Admins
- Dashboard with student overview
- Content management (lessons, materials)
- Progress monitoring per student
- Class management and assignments

---

## MVP Scope

- Content: Kurmancî A1 (8 units, 25 lessons from Mamoste's materials)
- Core learning flow (lessons, exercises, progress tracking)
- Basic user management (auth, profile, dashboard)
- Teacher dashboard (content management, student overview)
- Kurdish TTS audio integration (via kurdishtts.com)

---

## Business Model (Future)

- **B2C:** Subscription for individual learners
- **B2B:** Licensing to institutions
- **White-label:** Custom deployments for organizations

---

## App Ecosystem

Hinbuna Kurdi is part of a broader ecosystem of Kurdish language tools sharing a single user identity.

### Main Platform

- **Hinbuna Kurdi** -- the core learning app
- Starting with **Kurmanji dialect** (A1-B1)
- **Sorani dialect** expansion planned after Kurmanji succeeds

### Side Apps (Companion Apps)

- Ezmuna Asta Kurdi -- test your Kurdish level across multiple dialects
- Dictionary
- Short Stories
- Grammar Exercises
- Grammar Puzzles
- TTS (Text-to-Speech tool)
- Kurdish Corpus (expert-curated language dataset)

### Shared Infrastructure

- Single SSO across all apps (shared Auth API + Users DB)
- Shared user settings and personalization
- Accessible via header dropdown in any app
- See [03-tech-stack.md](./03-tech-stack.md) for SSO architecture details

### Strategy

- Main app first, then add side apps one by one
- Each app is standalone but benefits from shared user data
- White-label / B2B: the whole ecosystem can be licensed

---

## Technology

→ See [03-tech-stack.md](./03-tech-stack.md) for full architecture details.

- **Stack:** NestJS + React + PostgreSQL on AWS
- **Mobile-first** web application
- **Industry standards:** SCORM/xAPI compatible, CEFR-aligned content
- **Multi-app ready:** SSO across future companion apps
- **AI-powered:** Personalized learning, spaced repetition, engagement tracking
- **Kurdish TTS/STT:** via [kurdishtts.com](https://www.kurdishtts.com)

---

## Contact

Website: www.kurdisch-lernen.de
Organization: Adar Schule

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

- Content: Kurmancî A1 (8 units, 23 lessons from Mamoste's materials)
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

Hinbuna Kurdî is part of a broader ecosystem of Kurdish language tools sharing a single user identity. One account, ten tools — everything you need to learn, practice, and live in Kurdish.

> Canonical app list: `mockup/shared/ecosystem-apps.js` — single source of truth for all app names, icons, and descriptions. P7-products.html renders from it.

### Apps

| # | App | Kurdish Name | Description |
|---|-----|-------------|-------------|
| 1 | **Hinbûna Kurdî** | Hinbûna Kurdî | Your structured path to fluency *(main platform, active)* |
| 2 | **Level Test** | Ezmûna Asta Kurdî | Test your Kurdish level in any dialect |
| 3 | **Dictionary** | Ferheng | Your words, always with you |
| 4 | **Short Stories** | Çîrokên Kurt | Stories written just for you |
| 5 | **Practice** | Lîstika Kurdî | Practice that knows your weak spots |
| 6 | **Kurdish Corpus** | Korpûsa Kurdî | Shape the future of Kurdish AI |
| 7 | **TTS** | TTS Kurdî | Hear any Kurdish text come alive |
| 8 | **Community** | Civat | Learn together, grow together |
| 9 | **Certificates** | Belge | Prove what you know |
| 10 | **Encyclopedia** | Kurdînama | The Kurdish encyclopedia |
| 11 | **AI Companion** | Hevalê AI | Your AI friend who speaks Kurdish |

### Shared Infrastructure

- Single SSO across all apps (shared Auth API + Users DB)
- Shared user settings and personalization
- Accessible via header dropdown in any app
- See [03-tech-stack.md](./03-tech-stack.md) for SSO architecture details

### Strategy

- Main app first, then add side apps one by one
- Each app is standalone but benefits from shared user data
- White-label / B2B: the whole ecosystem can be licensed
- Starting with **Kurmanji dialect** (A1-B1), **Sorani** expansion planned after Kurmanji succeeds

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

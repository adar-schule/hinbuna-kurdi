# HinbunaKurdi

GIT_SCOPE: personal

Kurdish language learning platform (Kurmanji A1-B1).

> **Note**: This repo is being rebuilt from vanilla HTML/CSS/JS to NestJS + React + Tailwind.

## LLM Onboarding

**Start here, then follow the boot sequence in `.ai/README.md`.**

```
1. This file                            -> project overview
2. .ai/README.md                        -> how to work (boot sequence)
3. .ai/rules/*                          -> shared way-of-working standards
4. .ai/sessions/_tracker.md             -> where we left off
5. Active session files (in_progress)   -> pick up current work
6. _docs/* (as needed)                  -> repo specifications
```

---

## Project Structure

```
hinbuna-kurdi/
├── .ai/                 # LLM workspace (rules, sessions) — see .ai/README.md
├── _docs/               # Project documentation (source of truth)
│   ├── 01-project-overview.md
│   ├── 02-content-structure.md
│   ├── 03-content-mapping-a1.md
│   ├── 04-tech-stack.md
│   ├── 05-data-model-design.md    # 47 tables, 12 domains
│   ├── 06-data-model-decisions.md # Decision changelog
│   ├── 07-ai-development-workflow.md
│   ├── 08-design-decisions.md     # Colors, typography, components
│   ├── 09-teacher-translation-ui.md
│   └── flows/                     # User journeys
├── _material/           # Learning materials (von Mamoste curriculum source)
├── mockup/              # HTML/CSS screens (current MVP)
│   ├── index.html       # Page tree / dev gallery (localhost:8080)
│   └── shared/          # Theme system (light/dark)
└── frontend/            # React app (future)
```

---

## Documentation Rules

**Single source of truth — never duplicate information across files.**

| Layer | Location | Purpose |
|-------|----------|---------|
| **Detailed docs** | `_docs/*.md` | Full specifications, schemas, decisions |
| **Visual overviews** | `mockup/*.html` (dev pages) | Interactive summaries at `localhost:8080` |
| **Way of working** | `.ai/rules/` | Shared standards (workflow, coding) |
| **Session tracking** | `.ai/sessions/` | Current work state, kanban-style |

Rules:
1. `_docs/*.md` is always the source of truth for project specs
2. Dev pages visualize, never duplicate
3. No cross-doc duplication — each topic has ONE home
4. `.ai/rules/` is for shared standards (will become separate repo)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | NestJS (Node.js + TypeScript) |
| Frontend | React + Tailwind CSS |
| Database | PostgreSQL |
| Auth | JWT + Passport.js |
| Hosting | AWS (ECS + RDS + S3) |
| TTS/STT | kurdishtts.com API |

---

## Quick Start

```bash
# Dev server (mockup preview)
cd mockup && python3 -m http.server 8080

# Install dependencies
npm install

# Start development
npm run start:dev     # Backend (localhost:3000)
npm run dev           # Frontend (localhost:5173)

# Database
npm run migration:run
npm run seed
```

---

## Team

| Role | Person | Focus |
|------|--------|-------|
| Lead | **Armanc** (Nuri Armanc Engin) | Backend, DevOps, Architecture |
| Frontend | Gule | UI/UX, React |
| Content | Mamoste | Kurdish curriculum |

---

## Design Standards

All design decisions are locked in `_docs/08-design-decisions.md`:
- Color palette, typography, spacing, components
- Brand: Calm + SaaS (Headspace meets Notion) — **NEVER reference Duolingo**
- Mobile-first (375px), both light + dark modes required
- Always invoke `frontend-design` skill before any screen HTML/CSS work

---

## Commands Reference

```bash
npm run start:dev     # Backend
npm run dev           # Frontend
npm run lint          # Check
npm run lint:fix      # Fix
npm run format        # Prettier
npm run test          # Tests
npm run test:cov      # Coverage
npm run migration:generate
npm run migration:run
npm run seed
```

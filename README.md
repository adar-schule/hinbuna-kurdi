# Hinbuna Kurdi

> **Type:** README · **Status:** Active · **Updated:** 2026-03-07

---

Kurdish language learning platform — starting with Kurmanji (A1-B1), more dialects planned.

## Quick Start

```bash
# Preview mockup screens
cd mockup && python3 -m http.server 8080
# Open http://localhost:8080

# Install dependencies
npm install

# Start development
npm run start:dev     # Backend (localhost:3000)
npm run dev           # Frontend (localhost:5173)
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | NestJS (Node.js + TypeScript) |
| Frontend | React + Tailwind CSS |
| Database | PostgreSQL |
| Auth | JWT + Passport.js |
| Hosting | AWS (ECS + RDS + S3) |

## Project Structure

```
hinbuna-kurdi/
├── .ai/              # LLM workspace (rules, sessions)
├── _docs/            # Project documentation (source of truth)
├── _material/        # Learning materials (von Mamoste)
├── mockup/           # HTML/CSS screens (current MVP)
└── frontend/         # React app (future)
```

## Documentation

All project specifications live in `_docs/`:

| Doc | Topic |
|-----|-------|
| [01-project-overview](_docs/01-project-overview.md) | Vision, goals, business model |
| [02-content-structure](_docs/02-content-structure.md) | Curriculum structure |
| [04-tech-stack](_docs/04-tech-stack.md) | Architecture decisions |
| [05-data-model-design](_docs/05-data-model-design.md) | Database schema (47 tables) |
| [08-design-decisions](_docs/08-design-decisions.md) | Colors, typography, components |

## For LLM-Assisted Development

See `CLAUDE.md` for Claude Code setup, or `.ai/README.md` for the LLM-agnostic boot sequence.

## Team

| Role | Person |
|------|--------|
| Lead | Armanc (Nuri Armanc Engin) |
| Frontend | Gule |
| Content | Mamoste |

---

Website: www.kurdisch-lernen.de | Organization: Adar Schule

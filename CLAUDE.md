# HinbunaKurdi

GIT_SCOPE: personal

Kurdish language learning platform (Kurmanji A1-B1).

> **Note**: This repo is being rebuilt from vanilla HTML/CSS/JS to NestJS + React + Tailwind.
> Legacy prototype code in root. New stack coming soon.

## Getting Started with Claude Code

### 1. Install Claude Code

```bash
# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Navigate to the wrapper folder (NOT the repo)
cd path/to/HinbunaKurdi

# Start Claude
claude
```

> **Important:** Always start Claude from the `HinbunaKurdi/` wrapper folder, not from `REPOS/hinbuna-kurdi/`. The wrapper has the main CLAUDE.md with all rules and references.

### 2. Understand the Setup

```
HinbunaKurdi/                     (start Claude here)
├── CLAUDE.md                     # Main entry — Claude reads this first
├── _rules/                       # Workflow, design, coding standards
├── _claude-files/                # Current work status (read at session start)
├── _screenshots/                 # Visual references
└── REPOS/
    └── hinbuna-kurdi/            # The actual codebase
        ├── CLAUDE.md             # Tech stack, commands, structure
        ├── _docs/                # All project documentation
        │   ├── 09-design-decisions.md   # Colors, typography, components
        │   └── prompts/          # Screen generation templates
        └── site/                 # HTML/CSS screens (current MVP)
```

Claude automatically reads the CLAUDE.md files and follows the rules. You don't need to explain the project — it already knows.

### 3. Start the Dev Server

```bash
cd REPOS/hinbuna-kurdi/site && python3 -m http.server 8080 &
```

Open `http://localhost:8080` in your browser to preview screens.

### 4. How We Work — Adding a New Screen

All design standards are already decided. Adding a screen follows this workflow:

1. **Tell Claude which screen** — e.g. "Create the student dashboard screen"
2. **Claude reads the standards** — design decisions, color palette, typography, components are all documented in `_docs/09-design-decisions.md`
3. **Claude generates the HTML/CSS** — following the established patterns from existing screens
4. **You preview in browser** — check `localhost:8080`, give feedback
5. **Iterate** — "make the sidebar narrower", "change the card layout", etc.

That's it. The standards do the heavy lifting.

### 5. What's Already Decided (Don't Reinvent)

These are locked. Follow them, don't redesign:

| Standard | Where |
|----------|-------|
| Color palette & tokens | `_docs/09-design-decisions.md` |
| Typography (font, sizes, weights) | `_docs/09-design-decisions.md` |
| Component patterns (cards, buttons, nav) | `_docs/09-design-decisions.md` |
| Page tree (all screens mapped) | `_docs/10-page-tree.md` |
| Brand vibe (calm + SaaS, NOT gamified) | `../../_rules/DESIGN-RULES.md` |
| Prompt templates for screen generation | `_docs/prompts/` |
| Shared theme system (light/dark) | Already in `site/shared/` |

### 6. Screen Ownership

Each team member owns a set of screens. Check with Armanc before starting:

| Screen Group | Owner | Status |
|--------------|-------|--------|
| Public pages (landing, pricing, about, etc.) | Armanc | Done |
| Student screens (dashboard, lessons, progress) | TBD | Standards first, then build |
| Mamoste screens (content management, analytics) | TBD | After student screens |
| Admin screens (user management, system) | TBD | After mamoste screens |

### 7. Rules for Everyone

- **Never redesign existing components** — reuse what's in `site/shared/`
- **Never change color tokens** — they're locked in design decisions
- **Always preview before committing** — `localhost:8080`
- **Always rebase, never merge** — see `../../_rules/CODING-STANDARDS.md`
- **Ask Claude, don't guess** — it knows the project standards

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

## Project Structure

### Backend (NestJS)
```
src/
├── core/                # Shared (NO domain dependencies)
├── modules/
│   ├── auth/           # controller/ service/ dto/ entities/
│   ├── users/
│   ├── courses/
│   ├── progress/
│   └── subscriptions/
├── database/
│   ├── migrations/
│   └── seeds/
└── main.ts
```

### Frontend (React)
```
src/
├── components/
│   ├── ui/             # Design system (Button, Input, Card)
│   ├── forms/
│   ├── layout/
│   └── features/       # auth/, lessons/, dashboard/
├── hooks/
├── services/           # API calls
├── stores/
├── utils/
└── pages/
```

---

## Commands Reference

```bash
# Development
npm run start:dev     # Backend
npm run dev           # Frontend
npm run lint          # Check
npm run lint:fix      # Fix
npm run format        # Prettier
npm run test          # Tests
npm run test:cov      # Coverage

# Database
npm run migration:generate
npm run migration:run
npm run seed
```

---

## Resources

- **Data model**: `_docs/04-data-model-design.md` (31 tables across 10 domains)
- **Content structure**: Course → Module → Unit → Lesson → Activity → Material
- **Design decisions**: `_docs/09-design-decisions.md`
- **Page tree**: `_docs/10-page-tree.md`
- **Locales**: Kurdish (ku), German (de), English (en)

### Data Model Overview (31 tables)

| Domain | Tables | MVP |
|--------|--------|-----|
| Content | 7 | Yes |
| Users & Auth | 3 | Yes |
| Subscriptions | 2 | Optional |
| Progress | 3 | Yes |
| Teacher | 4 | Yes |
| Notifications | 2 | Optional |
| Badges | 2 | Optional |
| Comments | 2 | Optional |
| Audit | 1 | Optional |
| Adaptive Learning | 5 | Phase 2 |

### AI Features

| Feature | Priority | Notes |
|---------|----------|-------|
| TTS (Text-to-Speech) | MVP | Via kurdishtts.com API |
| Personalized Learning | Phase 2 | Adaptive based on user mistakes |
| AI Content Generation | Future | Generate exercises targeting weak areas |
| Kurdish Corpus | Side App | Expert-curated language dataset |

### Side Apps Ecosystem

Apps share SSO, accessible via header dropdown:
- Dictionary, Short Stories, Grammar Exercises, Grammar Puzzles, TTS, Kurdish Corpus

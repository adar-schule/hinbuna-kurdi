# HinbunaKurdi

GIT_SCOPE: personal

Kurdish language learning platform (Kurmanji A1-B1).

> **Note**: This repo is being rebuilt from vanilla HTML/CSS/JS to NestJS + React + Tailwind.
> Legacy prototype code in root. New stack coming soon.

## Before You Start

1. **Clone coding standards** (if not already):
   ```bash
   git clone git@github.com:adar-schule/coding-standards.git ~/.adar-schule/coding-standards
   ```

2. **Read the standards**: `~/.adar-schule/coding-standards/README.md`

3. **AI Tools**: Works with Claude Code, Cursor, or any AI assistant that reads CLAUDE.md

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | NestJS (Node.js + TypeScript) |
| Frontend | React + Tailwind CSS |
| Database | PostgreSQL |
| Auth | JWT + Passport.js |
| Hosting | AWS (ECS + RDS + S3) |

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

## Development Standards

### Git

**Commit format:**
```
type(scope): description

# Types: feat, fix, docs, style, refactor, test, chore
feat(auth): add JWT refresh token
fix(lessons): correct progress calculation
```

**Branch naming:**
```
hk-123-feature-description
```

**PR title:**
```
HK-123: feat(auth): add social login
```

**Rules:**
- Always rebase, never merge
- Run `npm run lint && npm run test` before commit
- Never force push to main

### Code Quality

**Pre-commit checklist:**
- [ ] `npm run lint` passes
- [ ] `npm run format` applied
- [ ] `npm run test` passes
- [ ] No `console.log` in production code
- [ ] No `any` types
- [ ] No commented-out code
- [ ] All user text uses i18n

**Limits:**
| Metric | Limit |
|--------|-------|
| Complexity | Max 10 |
| Nesting depth | Max 3 |
| Function params | Max 4 |
| File length | Max 500 lines |

### Backend Rules

| Rule | Description |
|------|-------------|
| Core independence | `core/` has NO dependencies on modules |
| Service-to-service | Cross-domain via services, not repositories |
| Thin controllers | No business logic in controllers |
| DTOs only | Never expose entities directly |
| Transactions | `@Transactional()` for writes |

**Database:**
```bash
npm run migration:generate  # Generate (NEVER manual)
npm run migration:run       # Apply
```

### Frontend Rules

| Rule | Description |
|------|-------------|
| UI first | Check `components/ui/` before creating |
| No inline styles | Tailwind classes only |
| i18n all text | Never hardcode strings |

**i18n example:**
```tsx
const { t } = useTranslation('lessons');
<h1>{t('title')}</h1>  // Good

<h1>Lessons</h1>       // Bad
```

**Locales:** Kurdish (ku), German (de), English (en)

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

# Git workflow
git checkout main
git pull --rebase origin main
git checkout -b hk-123-feature-name
npm run lint:fix && npm run format && npm run test
git commit -m "feat(scope): description"
git push -u origin hk-123-feature-name
```

---

## Environments

| Environment | Branch | Purpose |
|-------------|--------|---------|
| Development | `dev` | Local dev |
| Staging | `staging` | Pre-production |
| Production | `main` | Live |

**Flow:** Feature → main → auto-deploy staging → manual promote prod

---

## AI Assistant Rules

If using Claude, Cursor, or similar:

- **No auto-commits** - Never commit/push without explicit "yes"
- **No auto-deploys** - Never deploy without confirmation
- **Plan first** - Research → Plan → Implement (fresh context)
- **Context limit** - Above 40% context, save & restart

See `~/.adar-schule/coding-standards/` for full AI workflow guidelines.

---

## Anti-Patterns

| Don't | Do Instead |
|-------|------------|
| Vibe code | Plan first, get sign-off |
| Direct commits to main | Branch + PR |
| Manual migrations | `npm run migration:generate` |
| Hardcode strings | Use i18n |
| Inline styles | Tailwind classes |
| Business logic in controllers | Keep controllers thin |
| Expose entities | Return DTOs |

---

## Resources

- **Data model**: See `../../_docs/04-data-model-design.md` (31 tables across 10 domains)
- **Content structure**: Course → Module → Unit → Lesson → Activity → Material
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

### Theme System

**Why**: Kids learning Kurdish = future of the language. App must be attractive to ALL age groups.

**Themes** (age/vibe-based):
| Theme | Age | Vibe | Priority |
|-------|-----|------|----------|
| `zarok` | 6-12 | Playful, colorful, mascot | MVP+ |
| `ciwan` | 13-17 | Cool, modern, social | Phase 2 |
| `xort` | 18-25 | Clean, minimal | Phase 2 |
| `mezin` | 26+ | Serious, professional | MVP |

**Accessibility** (universal, any theme):
- `font_size`: sm, md, lg, xl
- `contrast_mode`: normal, high
- `motion_preference`: full, reduced
- `color_mode`: light, dark, system
- `audio_cues`: boolean

Stored in `user_learning_preferences` table.

### Side Apps Ecosystem

Apps share SSO, accessible via header dropdown:
- Dictionary, Short Stories, Grammar Exercises, Grammar Puzzles, TTS, Kurdish Corpus

# Coding Standards

> **Rule:** coding-standards · **Status:** Active · **Updated:** 2026-03-07

---

## Git Conventions

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
- NO auto-commits — never commit/push without explicit "yes"
- NO auto-deploys — never deploy without confirmation

---

## Pre-Commit Checklist

- [ ] `npm run lint` passes
- [ ] `npm run format` applied
- [ ] `npm run test` passes
- [ ] No `console.log` in production code
- [ ] No `any` types
- [ ] No commented-out code
- [ ] All user text uses i18n

---

## Code Limits

| Metric | Limit |
|--------|-------|
| Complexity | Max 10 |
| Nesting depth | Max 3 |
| Function params | Max 4 |
| File length | Max 500 lines |

---

## Backend Rules (NestJS)

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

---

## Frontend Rules (React)

| Rule | Description |
|------|-------------|
| UI first | Check `components/ui/` before creating |
| No inline styles | Tailwind classes only |
| i18n all text | Never hardcode strings |

**Locales:** Kurdish (ku), German (de), English (en)

---

## Environments

| Environment | Branch | Purpose |
|-------------|--------|---------|
| Development | `dev` | Local dev |
| Staging | `staging` | Pre-production |
| Production | `main` | Live |

**Flow:** Feature -> main -> auto-deploy staging -> manual promote prod

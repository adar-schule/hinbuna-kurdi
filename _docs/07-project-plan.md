# Project Plan - HinbunaKurdi MVP

**Status:** Draft
**Timeline:** 2 months
**Team:** Armanc (Lead/Backend/DevOps), Gule (Frontend/UI)

---

## Planning Pipeline

```
MVP Screens → Epics → Tickets → Estimates → Calendar → Assign
```

---

## 1. MVP Screens

> To be defined - list all screens per role

### Student Screens
| Screen | Priority | Notes |
|--------|----------|-------|
| _TBD_ | | |

### Teacher Screens
| Screen | Priority | Notes |
|--------|----------|-------|
| _TBD_ | | |

### Admin Screens
| Screen | Priority | Notes |
|--------|----------|-------|
| _TBD_ | | |

### Shared/Public Screens
| Screen | Priority | Notes |
|--------|----------|-------|
| _TBD_ | | |

---

## 2. Epics

| Epic | Description | Owner |
|------|-------------|-------|
| **Foundation** | Repo setup, CI/CD, DB, AWS, local dev, standards | Armanc |
| **Auth** | Login, Register, Password reset, JWT, roles | Armanc |
| **Theme/UI** | Design system, components, mezin + zarok themes | Gule |
| **Content** | Courses, Modules, Units, Lessons, Materials API + screens | Both |
| **Activities** | Activity types, runner, renderers | Both |
| **Progress** | Dashboard, XP, Streaks, user_progress | Both |
| **Teacher** | Teacher dashboard, student management, analytics | Both |
| **Subscription** | Plans, payments, access control | Armanc |
| **TTS** | kurdishtts.com integration | Armanc |

---

## 3. Team Roles

### Armanc (Lead, Backend, DevOps)

**Responsibilities:**
- Architecture decisions
- NestJS backend development
- Database design & migrations
- AWS infrastructure (RDS, ECS, S3)
- CI/CD pipeline (GitHub Actions)
- Local dev environment setup
- Coding standards enforcement
- Code reviews
- AI/LLM workflow standards

**Foundation Tasks (Week 1-2):**
- [ ] Monorepo or separate repos decision
- [ ] NestJS project setup
- [ ] React + Vite + Tailwind setup
- [ ] PostgreSQL setup (local + AWS RDS)
- [ ] Initial migrations (core tables)
- [ ] Docker compose for local dev
- [ ] GitHub Actions CI/CD
- [ ] AWS ECS + RDS + S3 setup
- [ ] Environment configs (dev, staging, prod)
- [ ] Coding standards in repo
- [ ] Base API structure (auth, health)
- [ ] Branding decisions (colors, fonts, logo)

### Gule (Frontend, UI/UX)

**Responsibilities:**
- React component development
- Tailwind design system
- Theme implementation
- Screen implementations
- Responsive design
- i18n integration
- Accessibility

**UI Tasks (Week 2+):**
- [ ] Tailwind config (colors, fonts, spacing)
- [ ] Base components (Button, Card, Input, etc.)
- [ ] Layout components (Header, Footer, Sidebar)
- [ ] Theme system implementation
- [ ] Mezin (adult) theme
- [ ] Zarok (kid) theme - MVP+
- [ ] Screen implementations
- [ ] Activity components (Dialog, GapQuiz, VerbTable)

---

## 4. GitHub Project Setup

### Repository
- **Name:** `hinbuna-kurdi` (existing)
- **Visibility:** Private
- **Branch strategy:** `main` → `staging` → feature branches

### Labels

| Label | Color | Use |
|-------|-------|-----|
| `epic:foundation` | `#1E3A8A` | Foundation work |
| `epic:auth` | `#166534` | Auth work |
| `epic:theme` | `#7C3AED` | Theme/UI work |
| `epic:content` | `#0891B2` | Content work |
| `epic:activities` | `#EA580C` | Activities work |
| `epic:progress` | `#CA8A04` | Progress work |
| `epic:teacher` | `#DB2777` | Teacher work |
| `epic:subscription` | `#059669` | Subscription work |
| `P0-critical` | `#DC2626` | Must have for MVP |
| `P1-important` | `#F97316` | Should have |
| `P2-nice` | `#FCD34D` | Could have |
| `size:XS` | `#E5E7EB` | ~2 hours |
| `size:S` | `#D1D5DB` | ~4 hours (half day) |
| `size:M` | `#9CA3AF` | ~1 day |
| `size:L` | `#6B7280` | ~2-3 days |
| `size:XL` | `#4B5563` | ~1 week |
| `blocked` | `#7F1D1D` | Waiting on something |
| `needs-review` | `#1E40AF` | PR ready for review |

### Board Columns

| Column | Description |
|--------|-------------|
| **Backlog** | All tickets, not yet prioritized |
| **Ready** | Prioritized, can be picked up |
| **In Progress** | Currently being worked on |
| **Review** | PR open, needs code review |
| **Done** | Merged to main |

### Milestones

| Milestone | Week | Goal |
|-----------|------|------|
| `M1-Foundation` | Week 1 | Repos, DB, AWS basics |
| `M2-Auth-UIKit` | Week 2 | Auth backend, Design system |
| `M3-Core` | Week 3-4 | Content API + screens |
| `M4-Activities` | Week 5 | Activity runner |
| `M5-Teacher` | Week 6 | Teacher features |
| `M6-Payments` | Week 7 | Subscriptions, TTS |
| `M7-Launch` | Week 8 | Testing, polish, deploy |

---

## 5. Ticket Template

```markdown
## [EPIC] Short description

**Epic:** Foundation / Auth / Theme / Content / Activities / Progress / Teacher / Subscription
**Priority:** P0 / P1 / P2
**Size:** XS / S / M / L / XL
**Assignee:** @armanc / @gule
**Milestone:** M1 / M2 / M3 / M4 / M5 / M6 / M7
**Blocked by:** #issue-number (if any)

---

### Description
Clear description of what needs to be done.

### Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

### Technical Notes
Any implementation details, links to docs, etc.
```

---

## 6. Two-Month Calendar

### Month 1: Foundation + Core

| Week | Dates | Armanc | Gule | Milestone |
|------|-------|--------|------|-----------|
| **1** | _TBD_ | Repo setup, DB schema, AWS RDS | Onboard, review designs | M1-Foundation |
| **2** | _TBD_ | Auth API, JWT, CI/CD | Tailwind config, base components | M2-Auth-UIKit |
| **3** | _TBD_ | Content API (courses, units) | Auth screens, Layout | M3-Core |
| **4** | _TBD_ | Lessons API, Materials | Dashboard, Course/Unit screens | M3-Core |

### Month 2: Features + Launch

| Week | Dates | Armanc | Gule | Milestone |
|------|-------|--------|------|-----------|
| **5** | _TBD_ | Activities API, Progress tracking | Lesson screen, Activity components | M4-Activities |
| **6** | _TBD_ | Teacher API, Analytics | Teacher dashboard, Student list | M5-Teacher |
| **7** | _TBD_ | Subscriptions, TTS integration | Pricing, Profile, Settings | M6-Payments |
| **8** | _TBD_ | Testing, bug fixes, deploy to prod | Polish, responsive, a11y | M7-Launch |

---

## 7. Definition of Done

A ticket is "Done" when:
- [ ] Code is written and follows coding standards
- [ ] Tests pass (if applicable)
- [ ] PR is approved by other team member
- [ ] Merged to main
- [ ] Deployed to staging (automated)
- [ ] Acceptance criteria verified

---

## 8. Communication

| Type | Tool | Frequency |
|------|------|-----------|
| Daily sync | Slack/Discord | Daily async standup |
| Code review | GitHub PRs | As needed |
| Planning | GitHub Issues/Projects | Weekly review |
| Docs | This repo + _docs/ | Ongoing |

---

## 9. AI/LLM Workflow

Both team members expected to use AI tools (Claude, Cursor, etc.):

1. **Read standards first:** `~/.adar-schule/coding-standards/`
2. **Use project CLAUDE.md:** Always loaded by AI tools
3. **Three-phase workflow:** Research → Plan → Implement
4. **Context management:** Save work before 40% context
5. **No auto-commits:** Always confirm before pushing

---

## Next Steps

1. [ ] Define MVP screens (this doc, section 1)
2. [ ] Create GitHub Project board
3. [ ] Create labels and milestones
4. [ ] Create initial tickets (~50-100)
5. [ ] Assign to team members
6. [ ] Start Week 1!

---

## Appendix: Quick Links

| Resource | Location |
|----------|----------|
| Data Model | `_docs/04-data-model-design.md` |
| Tech Stack | `_docs/03-tech-stack.md` |
| Coding Standards | `~/.adar-schule/coding-standards/` |
| Status Tracking | `_claude-files/status-brainstorming.md` |
| Repo CLAUDE.md | `_REPOS/hinbuna-kurdi/CLAUDE.md` |

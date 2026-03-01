# AI Development Workflow

How we use AI (Claude Code) for development — workflow rules, coding patterns, and quality standards.

**Applies To**: HinbunaKurdi + future B2B boilerplate projects
**Tech Stack**: NestJS + React + Tailwind + PostgreSQL + AWS

---

## 1. AI/Claude Workflow Rules

### Core Rules

| Rule | Description |
|------|-------------|
| **No auto-commits** | NEVER commit/push without explicit user "yes" |
| **No auto-deploys** | NEVER deploy to any environment without confirmation |
| **Safe commands** | `git status, diff, log, branch, checkout, pull, add` - OK without asking |
| **Dangerous commands** | `git commit, push, reset, rebase, force` - ALWAYS ask first |

### Three-Phase Workflow

```
RESEARCH (Read-Only) → PLAN (Checkpoint) → IMPLEMENT (Fresh Start)
```

**Phase 1: Research**
- Read-only mode - no code changes
- Map codebase, gather context
- Ask questions to clarify requirements
- Save findings to file

**Phase 2: Plan**
- Write spec/pseudocode (never real implementation)
- Include what NOT to implement
- Get human sign-off before proceeding
- Create plan branch, PR, merge

**Phase 3: Implement**
- Start with FRESH context (0% utilization)
- Follow plan exactly
- Deviations → update plan first OR add to "NOT FIX"
- Check off items as completed

### Context Management (The "40% Rule")

| Context Level | Zone | Action |
|---------------|------|--------|
| 0-40% | Smart Zone | Execute here |
| 40-60% | Warning Zone | Save progress, prepare to reset |
| 60%+ | Dumb Zone | STOP immediately, save & restart |

**Why?** Above 40%, models forget constraints and hallucinate. Always track context usage.

### Ownership Split

| Human Owns | AI Owns |
|------------|---------|
| Architecture decisions | Syntax generation |
| Defining "done" | Following explicit instructions |
| Verifying AI understanding | Code execution per spec |
| Context curation | Mechanical tasks |
| Proving code works | |

---

## 2. Git & Commit Conventions

### Conventional Commits (Required)

Format: `type(scope): description`

| Type | Use For |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting (no code change) |
| `refactor` | Code change (no feature/fix) |
| `test` | Adding/fixing tests |
| `chore` | Build, config, dependencies |

**Examples:**
```
feat(auth): add JWT refresh token endpoint
fix(lessons): correct progress calculation
docs(api): update auth endpoint documentation
refactor(users): extract validation to service
```

### Ticket Reference in PR Titles (Required)

Format: `TICKET-ID: type(scope): description`

```
# Correct
HK-123: feat(auth): add social login
HK-456: fix(lessons): audio playback on mobile

# Wrong (no ticket)
feat(auth): add social login
```

### Branch Naming

Format: `ticket-id-description`

```
hk-123-add-social-login
hk-456-fix-audio-playback
```

### Git Rules

| Rule | Description |
|------|-------------|
| Always rebase | Never merge commits - keeps history clean |
| Squash when merging PR | One commit per feature in main |
| Never force push to main | Protected branch |
| Pull before push | `git pull --rebase origin main` |

### Pre-Commit Hooks (Required)

**HinbunaKurdi (NestJS + React + TypeScript):**
```bash
# Install
npm install -g husky lint-staged

# Pre-commit runs:
npm run lint          # ESLint
npm run format        # Prettier
npm run test:staged   # Jest on changed files
```

**B2B Boilerplate Considerations:**
- Document which linting tools each buyer should use
- Provide configs for: ESLint, Prettier, Husky
- Allow customization per project

---

## 3. Branch & Environment Strategy

### Two-Branch Development Model

```
Phase 1 (Plan):   main → hk-xxx-plan → Plan PR → Review → Merge
Phase 2 (Impl):   main → hk-xxx-impl → Code PR → Review → Merge
```

**Why two branches?**
- Plan reviewed separately from code
- Catches architecture issues early
- Clean git history

### Environment Setup

| Environment | Branch | Purpose | AWS Resources |
|-------------|--------|---------|---------------|
| **Development** | `dev` | Local + shared dev | RDS (dev), S3 (dev) |
| **Staging** | `staging` | Pre-production testing | ECS, RDS (staging), S3 (staging) |
| **Production** | `main` | Live users | ECS, RDS (prod), S3 (prod), CloudFront |

### Deployment Flow

```
Feature Branch → PR → main
                       ↓
              Auto-deploy to Staging
                       ↓
              Manual promote to Production
```

### Environment-Specific Configs

```
/config
  ├── development.env
  ├── staging.env
  └── production.env
```

**Never commit secrets** - Use AWS Secrets Manager or Parameter Store.

### B2B Boilerplate Delivery

For each B2B sale, buyer gets:
1. Codebase with env templates
2. AWS setup guide (Terraform/CDK scripts optional)
3. Database migration scripts
4. Deployment documentation

---

## 4. Project-Specific Patterns

### Backend (NestJS + TypeScript)

#### Domain Structure
```
src/
├── core/                    # Shared, NO dependencies on other domains
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   └── utils/
├── modules/
│   ├── auth/               # Authentication domain
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── dto/
│   │   ├── entities/
│   │   └── auth.module.ts
│   ├── users/              # Users domain
│   ├── courses/            # Content domain
│   ├── progress/           # Learning progress domain
│   └── subscriptions/      # Billing domain
├── database/
│   ├── migrations/
│   └── seeds/
└── main.ts
```

#### Architecture Rules

| Rule | Description |
|------|-------------|
| **Core independence** | `core/` has NO dependencies on domain modules |
| **Dependency direction** | All modules depend on core, never reverse |
| **Service-to-service** | Services call other services, never cross-domain repositories |
| **Controller thin** | No business logic in controllers |
| **DTOs at boundaries** | Never expose entities directly |

#### NestJS Conventions

```typescript
// Controllers - thin, validation only
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateLessonDto): Promise<LessonResponseDto> {
    return this.lessonsService.create(dto);
  }
}

// Services - business logic
@Injectable()
export class LessonsService {
  constructor(
    private readonly lessonsRepository: LessonsRepository,
    private readonly progressService: ProgressService, // cross-domain via service
  ) {}

  @Transactional()
  async create(dto: CreateLessonDto): Promise<Lesson> {
    // business logic here
  }
}
```

#### Database (PostgreSQL + TypeORM/Prisma)

| Rule | Description |
|------|-------------|
| **Never manual migrations** | Always generate: `npm run migration:generate` |
| **Migration naming** | Timestamp + description: `1706745600000-AddUserRoles` |
| **Seed data separate** | Seeds in `/database/seeds/`, not migrations |
| **Transactions for writes** | Use `@Transactional()` decorator |

---

### Frontend (React + Tailwind CSS)

#### Component Structure
```
src/
├── components/
│   ├── ui/                  # Design system primitives
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   └── index.ts
│   ├── forms/               # Form components
│   ├── layout/              # Layout components
│   └── features/            # Feature-specific components
│       ├── auth/
│       ├── lessons/
│       └── dashboard/
├── hooks/                   # Custom hooks
├── services/                # API services
├── stores/                  # State management
├── utils/                   # Utilities
└── pages/                   # Route pages
```

#### Component Rules

| Rule | Description |
|------|-------------|
| **UI components first** | Check `components/ui/` before creating new |
| **No inline styles** | Use Tailwind classes only |
| **Tailwind config** | Design tokens in `tailwind.config.js` |
| **Component per file** | One component per file |
| **Props interface** | Always define TypeScript interface |

#### Tailwind Conventions

```tsx
// Good - Tailwind classes
<button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
  Submit
</button>

// Bad - inline styles
<button style={{ padding: '8px 16px', backgroundColor: '#2563eb' }}>
  Submit
</button>
```

#### i18n (Internationalization)

| Rule | Description |
|------|-------------|
| **All text via i18n** | Never hardcode user-facing strings |
| **Namespace by feature** | `auth:login.title`, `lessons:complete.button` |
| **Default locale** | Kurdish (ku) primary, German (de), English (en) |
| **Mark new keys fuzzy** | For human review before release |

```tsx
// Good
const { t } = useTranslation('lessons');
<h1>{t('title')}</h1>

// Bad
<h1>Lessons</h1>
```

---

## 5. Code Quality Rules

### TypeScript (Backend + Frontend)

| Rule | Setting |
|------|---------|
| **Strict mode** | `"strict": true` in tsconfig |
| **No any** | `"noImplicitAny": true` |
| **No unused** | `"noUnusedLocals": true, "noUnusedParameters": true` |
| **Explicit returns** | `"noImplicitReturns": true` |

### ESLint Rules

```json
{
  "rules": {
    "max-lines": ["error", 500],
    "max-depth": ["error", 3],
    "max-params": ["error", 4],
    "complexity": ["error", 10],
    "no-console": "warn",
    "no-debugger": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn"
  }
}
```

### Complexity Limits

| Metric | Limit | Why |
|--------|-------|-----|
| **Cyclomatic complexity** | Max 10 | Testability |
| **Nesting depth** | Max 3 levels | Readability |
| **Function parameters** | Max 4 | Use object if more |
| **File length** | Max 500 lines | Split if larger |
| **Function length** | Max 50 lines | Extract helpers |

### Testing Requirements

| Type | Coverage Target | Tools |
|------|-----------------|-------|
| **Unit tests** | 80%+ | Jest |
| **Integration tests** | Critical paths | Supertest (NestJS) |
| **E2E tests** | Happy paths | Cypress/Playwright |

**Test Naming:**
```typescript
// Format: should [expected behavior] when [condition]
describe('LessonsService', () => {
  it('should return lesson by id when lesson exists', async () => {});
  it('should throw NotFoundException when lesson not found', async () => {});
});
```

**AAA Pattern:**
```typescript
it('should calculate progress correctly', () => {
  // Arrange
  const activities = [{ completed: true }, { completed: false }];

  // Act
  const progress = calculateProgress(activities);

  // Assert
  expect(progress).toBe(50);
});
```

### Code Quality Checklist (Pre-PR)

- [ ] `npm run lint` passes
- [ ] `npm run format` applied
- [ ] `npm run test` passes
- [ ] No `console.log` in production code
- [ ] No `any` types
- [ ] No commented-out code
- [ ] No TODO comments (track in issues instead)
- [ ] All user-facing text uses i18n

---

## 6. Anti-Patterns to Avoid

| Pattern | Problem | Prevention |
|---------|---------|------------|
| **Vibe Coding** | "Feels right" → ship without plan | Always plan first, get sign-off |
| **Trajectory Poisoning** | Error → fix fails → repeat in loop | Stop at 40% context, restart fresh |
| **God Model Fallacy** | Assuming AI infers implicit constraints | Explicit, documented plans only |
| **Context Dumping** | Throwing entire codebase at AI | Feed only plan + necessary files |
| **Outsourcing Thinking** | "Just make it work" prompts | Humans own architecture, AI owns syntax |
| **Direct Main Commits** | Bypasses review, breaks things | Pre-commit hooks + branch protection |
| **Manual Migrations** | Inconsistent DB schema | Always use migration generator |
| **Hardcoded Strings** | Can't translate, hard to maintain | All text via i18n |
| **Inline Styles** | Inconsistent design, hard to theme | Tailwind classes only |
| **Cross-Domain Repository Access** | Tight coupling, hard to refactor | Services call services only |
| **Business Logic in Controllers** | Hard to test, violates SRP | Keep controllers thin |
| **Exposing Entities** | Security risk, tight coupling | Always use DTOs |

---

## 7. B2B Boilerplate Considerations

When selling codebase to other businesses:

### What's Customizable

| Layer | Buyer Customizes | We Provide |
|-------|------------------|------------|
| **Branding** | Logo, colors, name | Tailwind theme config |
| **Content** | Their domain content | Content structure (Course→Lesson) |
| **Auth** | Their provider choice | JWT + Passport setup |
| **Translations** | Their languages | i18n infrastructure |
| **AWS** | Their account | Terraform/setup scripts |

### What Stays Standard

| Layer | Reason |
|-------|--------|
| **Architecture** | Proven patterns, maintainable |
| **Code quality rules** | Consistency across projects |
| **Database schema** | Generic, works for any LMS |
| **API structure** | RESTful conventions |

### B2B Delivery Checklist

- [ ] Environment setup guide
- [ ] AWS deployment scripts (optional Terraform)
- [ ] Database migration instructions
- [ ] Customization guide (theme, branding)
- [ ] Admin panel documentation
- [ ] Support agreement (if purchased)

---

## Quick Reference Commands

### Development
```bash
# Start dev servers
npm run start:dev          # NestJS backend
npm run dev                # React frontend

# Database
npm run migration:generate # Generate migration
npm run migration:run      # Run migrations
npm run seed               # Seed data

# Quality
npm run lint               # ESLint check
npm run lint:fix           # ESLint auto-fix
npm run format             # Prettier format
npm run test               # Run tests
npm run test:cov           # Coverage report
```

### Git Workflow
```bash
# Start feature
git checkout main
git pull --rebase origin main
git checkout -b hk-123-feature-name

# Before PR
npm run lint:fix
npm run format
npm run test
git add .
git commit -m "feat(scope): description"
git push -u origin hk-123-feature-name
```

---

**Status**: Active — evolves as the project grows

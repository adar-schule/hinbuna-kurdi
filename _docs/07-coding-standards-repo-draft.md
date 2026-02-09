# Coding Standards Repo Structure (Draft)

**Repo**: `github.com/adar-schule/coding-standards` (private)
**Clone to**: `~/.adar-schule/coding-standards/`

Cross-cutting standards for all Adar Schule projects. **Tool-agnostic** - works with Claude, Cursor, Copilot, or any AI assistant.

---

## Proposed Structure

```
coding-standards/
├── README.md                    # Quick start, how to use
│
├── ai-rules.md                  # AI assistant rules (THE source of truth)
│
├── tool-configs/                # Tool-specific files (reference ai-rules.md)
│   ├── CLAUDE.md               # For Claude Code users
│   ├── .cursorrules            # For Cursor users
│   └── setup-guide.md          # How to configure your tool
│
├── workflow/
│   ├── three-phase.md          # Research → Plan → Implement
│   ├── context-management.md   # 40% rule, when to restart
│   └── ownership.md            # Human vs AI responsibilities
│
├── git/
│   ├── commits.md              # Conventional commits
│   ├── branching.md            # Branch naming, two-branch model
│   ├── pr-workflow.md          # PR titles, review process
│   └── environments.md         # dev/staging/prod setup
│
├── code-quality/
│   ├── typescript.md           # Strict mode, no any, limits
│   ├── testing.md              # AAA pattern, naming, coverage
│   └── anti-patterns.md        # What to avoid
│
├── stacks/
│   ├── nestjs/
│   │   ├── structure.md        # Domain structure
│   │   ├── rules.md            # Controllers, services, DTOs
│   │   └── database.md         # Migrations, transactions
│   │
│   ├── react-tailwind/
│   │   ├── structure.md        # Component hierarchy
│   │   ├── rules.md            # UI first, no inline styles
│   │   └── i18n.md             # Internationalization
│   │
│   └── [future stacks...]      # Add as needed for B2B
│
├── configs/                     # Copy-paste configs
│   ├── eslint/
│   │   ├── .eslintrc.js
│   │   └── .eslintignore
│   ├── prettier/
│   │   └── .prettierrc
│   ├── typescript/
│   │   └── tsconfig.base.json
│   ├── husky/
│   │   └── pre-commit
│   └── github/
│       └── pull_request_template.md
│
└── templates/
    ├── PROJECT-CLAUDE.md.template   # CLAUDE.md template for new projects
    ├── PROJECT-CURSORRULES.template # .cursorrules template for new projects
    └── PR_TEMPLATE.md
```

---

## README.md Content

```markdown
# Adar Schule Coding Standards

Standards and guidelines for all Adar Schule projects.

**Tool-agnostic** - works with Claude Code, Cursor, Copilot, or any AI assistant.

## Setup

Clone to your home directory:
```bash
git clone git@github.com:adar-schule/coding-standards.git ~/.adar-schule/coding-standards
```

## Before Starting Any Project

1. Read `ai-rules.md` - Core AI assistant rules
2. Read `workflow/three-phase.md` - How we work
3. Read stack-specific guides in `stacks/`
4. Set up your AI tool (see below)

## AI Tool Setup

| Tool | What to do |
|------|------------|
| **Claude Code** | Copy `tool-configs/CLAUDE.md` to your project root |
| **Cursor** | Copy `tool-configs/.cursorrules` to your project root |
| **Copilot/Other** | Reference `ai-rules.md` in your tool's context |

See `tool-configs/setup-guide.md` for detailed instructions.

## Updating

Pull latest before starting new work:
```bash
cd ~/.adar-schule/coding-standards && git pull
```

## Structure

| Folder | Contains |
|--------|----------|
| `ai-rules.md` | Core AI rules (source of truth) |
| `tool-configs/` | Tool-specific config files |
| `workflow/` | Planning, context management |
| `git/` | Commits, branching, PRs |
| `code-quality/` | TypeScript, testing, limits |
| `stacks/` | Stack-specific rules |
| `configs/` | Ready-to-copy config files |
| `templates/` | Templates for new projects |
```

---

## ai-rules.md Content (Source of Truth)

```markdown
# AI Assistant Rules

Rules for AI assistants working on Adar Schule projects.

Works with: Claude Code, Cursor, Copilot, or any AI tool.

## Critical Rules

| Rule | Description |
|------|-------------|
| **No auto-commits** | NEVER commit/push without explicit "yes" |
| **No auto-deploys** | NEVER deploy without confirmation |
| **Safe commands** | `git status, diff, log, branch, checkout, pull, add` OK |
| **Ask first** | `git commit, push, reset, rebase, force` ALWAYS ask |

## Three-Phase Workflow

```
RESEARCH (Read-Only) → PLAN (Get Sign-off) → IMPLEMENT (Fresh Context)
```

### Phase 1: Research
- Read-only, no code changes
- Map codebase, gather context
- Ask questions
- Save findings to file

### Phase 2: Plan
- Write spec/pseudocode
- Include what NOT to implement
- Get human sign-off
- Create plan branch, PR, merge

### Phase 3: Implement
- Fresh context (0% utilization)
- Follow plan exactly
- Deviations → update plan first

## Context Management

| Level | Action |
|-------|--------|
| 0-40% | Execute |
| 40-60% | Save progress, prepare reset |
| 60%+ | STOP, save & restart |

## Ownership

| Human Owns | AI Owns |
|------------|---------|
| Architecture decisions | Syntax generation |
| Defining "done" | Following instructions |
| Verifying understanding | Code per spec |
| Context curation | Mechanical tasks |

## Anti-Patterns

| Don't | Why |
|-------|-----|
| Vibe code | Plan first |
| Context dump | Feed only needed files |
| "Just make it work" | Specify architecture |
| Skip planning | Leads to rewrites |
```

---

## tool-configs/CLAUDE.md

For Claude Code users - copy to project root.

```markdown
# Project Name

GIT_SCOPE: personal

[Project description]

## AI Rules

See `~/.adar-schule/coding-standards/ai-rules.md` for full rules.

**Quick reference:**
- No auto-commits without "yes"
- No auto-deploys without confirmation
- Research → Plan → Implement workflow
- Above 40% context → save & restart

## Tech Stack

[Project-specific stack]

## Commands

[Project-specific commands]

## Project Structure

[Project-specific structure]
```

---

## tool-configs/.cursorrules

For Cursor users - copy to project root.

```
# Adar Schule Coding Standards

## Critical Rules
- NEVER commit/push without explicit user confirmation
- NEVER deploy without confirmation
- Safe commands: git status, diff, log, branch, checkout, pull, add
- Ask first: git commit, push, reset, rebase, force

## Workflow
Research (read-only) → Plan (get sign-off) → Implement (fresh context)

## Context Management
- 0-40%: Execute
- 40-60%: Save progress, prepare reset
- 60%+: STOP, save & restart

## Code Quality
- No console.log in production
- No any types
- No commented-out code
- All user text uses i18n
- Max complexity: 10
- Max nesting: 3
- Max file length: 500 lines

## Full Standards
See: ~/.adar-schule/coding-standards/
```

---

## tool-configs/setup-guide.md

```markdown
# AI Tool Setup Guide

## Claude Code

1. Copy template to your project:
   ```bash
   cp ~/.adar-schule/coding-standards/tool-configs/CLAUDE.md ./CLAUDE.md
   ```

2. Edit CLAUDE.md with project-specific details

3. Claude Code will automatically read it

## Cursor

1. Copy rules to your project:
   ```bash
   cp ~/.adar-schule/coding-standards/tool-configs/.cursorrules ./.cursorrules
   ```

2. Optionally create `.cursor/rules/` for more detailed rules

3. Cursor will automatically apply them

## GitHub Copilot

1. Reference ai-rules.md in your prompts
2. Or add key rules to your repository's README

## Other Tools

1. Read `ai-rules.md` for the core rules
2. Configure your tool to include these rules in its context
3. Reference stack-specific guides as needed

## Project-Specific Customization

Each project can add its own rules on top of the base standards:
- Tech stack details
- Project structure
- Custom commands
- Domain-specific patterns
```

---

## How Devs Use It

1. **First time setup:**
   ```bash
   git clone git@github.com:adar-schule/coding-standards.git ~/.adar-schule/coding-standards
   ```

2. **Before each project:**
   ```bash
   cd ~/.adar-schule/coding-standards && git pull
   ```

3. **Set up AI tool:**
   - Claude Code → copy `tool-configs/CLAUDE.md` to project
   - Cursor → copy `tool-configs/.cursorrules` to project
   - Other → reference `ai-rules.md`

4. **Customize for project:**
   - Add project-specific stack, commands, structure

---

## B2B Considerations

When selling codebase as boilerplate:

| Option | Description |
|--------|-------------|
| **Include repo** | Give buyer access to coding-standards repo |
| **Fork** | Buyer forks and customizes for their org |
| **Inline** | Embed standards directly in delivered codebase |

Buyer chooses their AI tool - standards work with any.

---

## Next Steps

1. [ ] Create repo at github.com/adar-schule/coding-standards
2. [ ] Populate with content from this draft
3. [ ] Test with HinbunaKurdi project
4. [ ] Document in team onboarding

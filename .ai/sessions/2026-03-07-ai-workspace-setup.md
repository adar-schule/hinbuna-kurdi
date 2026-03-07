# Session: AI Workspace Setup — Migrate from Wrapper to Repo

- **Created:** 2026-03-07
- **Updated:** 2026-03-07
- **Status:** done
- **Type:** refactor
- **Priority:** high
- **User:** Armanc

## Goal
Move all LLM-related structure from the wrapper folder (`HinbunaKurdi/`) into the repo (`REPOS/hinbuna-kurdi/.ai/`), making it git-tracked, team-shareable, and LLM-agnostic.

## Progress
- [x] Created `.ai/` folder structure (README, rules, sessions)
- [x] Created `.ai/rules/_enums.md` — shared enums (doc status, session status, type, priority)
- [x] Created `.ai/rules/workflow.md` — from wrapper `_rules/WORKFLOW.md`
- [x] Created `.ai/rules/coding-standards.md` — from wrapper `_rules/CODING-STANDARDS.md`
- [x] Created `.ai/rules/markdown-style.md` — unified MD style guide for all repo files
- [x] Created `.ai/sessions/_tracker.md` — session history
- [x] Migrated `status-roadmap.md` -> session file (data-model-phase2)
- [x] Moved `von Mamoste/` + `KurdischeLerne.pdf` into repo `_material/`
- [x] Updated repo `CLAUDE.md` — points to `.ai/`, boot sequence documented
- [x] Updated wrapper `CLAUDE.md` — simplified, points to repo
- [x] Updated `MEMORY.md` — new boot sequence + paths
- [x] Deleted wrapper `_rules/`, `_claude-files/`, `_resources/`
- [x] Applied blockquote header to all `.ai/` files
- [x] Audited all repo MDs for style compliance
- [x] Fixed `_docs/08` status `Living` -> `Active`
- [x] Rewrote `README.md` with proper header and content
- [x] Session files exempt from blockquote header (use metadata block instead)
- [x] Review remaining wrapper files — removed wrapper `CLAUDE.md` + `.claude/`; `_material/` stays
- [x] Verify `.ai/` boot sequence works in a fresh session — confirmed in 2026-03-07 session
- [x] Added Session Auto-Save rule to `workflow.md` (4 triggers: decision, 5-min, 70% context, user override)
- [x] Style guide reference in `_docs/` — not needed, implicit via boot sequence + `.ai/rules/`

## Decisions
- `.ai/` is LLM-agnostic; each LLM has its own entry file pointing to `.ai/`
- `rules/` will become a separate shared repo later (cross-project standards)
- `_enums.md` is single source for all enum values across `.ai/`
- Design rules NOT in `.ai/rules/` — they are repo-specific, stay in `_docs/08`
- `_tracker.md` prefixed with `_` to sort to top
- Session files use their own metadata block (list style), NOT blockquote header
- 10-day auto-archival rule for stale sessions
- `_material/`: only `von Mamoste/` + `KurdischeLerne.pdf` in repo (option B — no binary bloat)
- Personal materials (`_support-invest/`, book scans) stay in wrapper
- All repo MDs follow `markdown-style.md` — CLAUDE.md and `frontend/README.md` are exceptions
- Doc status enum: `Active`, `Draft`, `Reference`, `Archived` (no `Living`)
- Wrapper `CLAUDE.md` + `.claude/` no longer needed — removed (repo has its own)
- Session Auto-Save: 4 triggers (decision, ~5 min, context ≥ 70%, user override), background agent, non-blocking
- Dark mode default palette: `#1A2024`/`#232D31` (Dark Slate) is the actual default used across all screens. Doc 08 was wrong (had `#1A2F23`/`#243D30` which is the Forest Green alt theme). Fixed.
- Onboarding §6: made LLM-agnostic per Armanc — team members may use any AI coding tool, not just Claude

## Next Steps
- Onboarding page cleanup — go through sections 4-9, compare each against `_docs/`, decide keep/remove/link
- Sections already decided:
  - **TL (Timeline):** Keep, update data (outdated dates/phases)
  - **1 (Project Overview):** Remove — dup of `_docs/01`
  - **2 (Clone & Setup):** Keep — update wrapper refs to repo
  - **3 (Using Claude Code):** Remove — dup of `_docs/07`, update doc 07 with new `.ai/` setup info
  - **4 (Design Workflow):** Remove content — link to `_docs/08` (workflow now in doc 08)
  - **5 (Brand Rules):** Remove content — link to `_docs/08`
  - **6 (Tools & Plugins):** Keep, made LLM-agnostic (not Claude-specific)
  - **7 (Screen Priority):** Keep as-is (unique content)
  - **8 (Git Workflow):** Remove content — link to `_docs/07`
  - **9 (Quality Checklist):** Keep interactive version, added source ref to `_docs/08`
- [x] Compared sections 4-9 against `_docs/`
- [x] Updated `_docs/08` — fixed dark mode colors (`#1A2024`/`#232D31`), added workflow + checklist sections
- [x] Implemented onboarding §4, §5, §8 → replaced with doc links
- [x] Made §6 LLM-agnostic
- [x] Added source ref to §9
- [x] §1 Project Overview — replaced with link to `_docs/01`
- [x] §2 Clone & Setup — updated folder structure (removed wrapper refs, added `.ai/`)
- [x] §3 Using Claude Code — renamed "AI Development Workflow", replaced with link to `_docs/07` + `.ai/` overview, LLM-agnostic
- [x] Sidebar nav label updated for §3
- [x] Updated "Last updated" meta to Mar 2026
- [x] Added hash-based accordion: URL `#section-X` auto-expands that section, collapses others
- [x] Fixed onboarding sidebar: scroll-margin-top for hidden titles, getBoundingClientRect for active state
- [x] Updated project description — "starting with Kurmanji, more dialects planned"
- [x] Removed outdated sections from `_docs/08`: Visily Theme Configuration, Reference Screenshots
- [x] Renamed "Gallery" → "Overview" in header nav, index.html title/h1, back-button tooltip
- Deferred to future session: Timeline dates/phases update, `_docs/07` `.ai/` setup info

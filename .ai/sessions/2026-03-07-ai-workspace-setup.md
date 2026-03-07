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
- [x] Created `.ai/` folder structure
- [x] Created `.ai/README.md` — boot sequence, session template, archival rules
- [x] Created `.ai/rules/_enums.md` — shared enums (status, type, priority)
- [x] Created `.ai/rules/workflow.md` — from `_rules/WORKFLOW.md`
- [x] Created `.ai/rules/coding-standards.md` — from `_rules/CODING-STANDARDS.md`
- [x] Created `.ai/sessions/_tracker.md` — session history
- [x] Created this session file
- [x] Migrated `status-roadmap.md` -> session file (data-model-phase2)
- [x] Moved `von Mamoste/` + `KurdischeLerne.pdf` into repo `_material/`
- [x] Updated repo `CLAUDE.md` — points to `.ai/`, boot sequence documented
- [x] Updated wrapper `CLAUDE.md` — simplified, points to repo
- [x] Updated `MEMORY.md` — new boot sequence + paths
- [x] Deleted wrapper `_rules/` folder
- [x] Deleted wrapper `_claude-files/` folder
- [x] Deleted wrapper `_resources/` folder

## Decisions
- `.ai/` is LLM-agnostic; each LLM has its own entry file pointing to `.ai/`
- `rules/` will become a separate shared repo later (cross-project standards)
- `_enums.md` is single source for all enum values across `.ai/`
- Design rules NOT in `.ai/rules/` — they are repo-specific, stay in `_docs/08`
- `_tracker.md` prefixed with `_` to sort to top
- Session files include `User` field
- 10-day auto-archival rule for stale sessions
- `_material/`: only `von Mamoste/` + `KurdischeLerne.pdf` in repo (option B — no binary bloat)
- Personal materials (`_support-invest/`, book scans) stay in wrapper

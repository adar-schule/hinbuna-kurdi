# Session: AI Workspace Setup — Migrate from Wrapper to Repo

- **Created:** 2026-03-07
- **Updated:** 2026-03-07
- **Status:** in_progress
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
- [ ] Review remaining wrapper files (anything else to migrate or clean up?)
- [ ] Verify `.ai/` boot sequence works in a fresh session
- [ ] Consider: should `_docs/` content reference style guide? Or is it implicit via rules?

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

## Next Steps
- Fresh session: test the boot sequence end-to-end
- Review wrapper for any remaining files to migrate
- Decide if `_docs/` needs explicit reference to markdown style guide

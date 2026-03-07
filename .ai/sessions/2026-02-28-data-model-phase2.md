# Session: Data Model — Phase 2 Perfection

- **Created:** 2026-02-28
- **Updated:** 2026-03-01
- **Status:** in_progress
- **Type:** ticket
- **Priority:** high
- **User:** Armanc

## Goal
Make `05-data-model-design.md` the definitive, future-proof schema. Walk through every mockup screen and verify all data needs are modeled.

## Progress
- [x] Architecture conflicts resolved (4 decisions — all B, logged in 06)
- [x] Translation metadata columns added to all `*_translations` tables
- [x] Decisions synced to: doc 05 + data-model.html + multi-lang.html + 06 log
- [x] data-model.html rebuilt as interactive explorer + domain-level ERD switching
- [x] multi-lang.html updated to match all decisions
- [x] Dev tooling: docs.html, header hamburger refactor, "Docs" pill
- [x] Table count corrected: 46 -> 47 across all files
- [x] Activity type enum expanded: 9 types (added `dictation` + `speaking`)
- [x] JSON data restructure (mockup/data/*.json) — UUIDs, snake_case, FKs
- [x] HTML screens updated (S3, S4, S5, S6, T3, T4, T5) for snake_case + UUID navigation
- [x] Doc 05 ERD: Users & Auth fixed (roles + user_roles many-to-many)
- [x] Auth committed to JWT + Passport.js (KeyCloak removed)
- [x] Docs renumbered: 01-09 sequential, standardized metadata headers
- [x] JSON <-> Schema alignment audit (5 findings) — all resolved
- [ ] multi-lang.html: add note that `metadata` fields may use Pattern D (i18n objects)
- [ ] Walk through every mockup screen -> verify all data needs are modeled
- [ ] Reconcile content gaps (vocabulary, pronunciation, cultural notes, word breakdown)
- [ ] Verify AI tables (core + premium) are complete
- [ ] Verify SaaS/white-label configurability in schema
- [ ] Verify multi-app shared auth + settings

## Decisions
See `_docs/06-data-model-decisions.md` for full decision log.

## Next Steps
- Fix multi-lang.html Pattern D note
- Begin table-by-table screen walkthrough

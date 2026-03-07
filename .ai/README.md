# .ai — LLM Workspace

This folder is the shared brain for any LLM working on this project. It is **LLM-agnostic** — Claude, Cursor, Copilot, or any other tool should use this as their entry point.

Each LLM has its own config file that points here:
- **Claude:** `CLAUDE.md` (auto-loaded)
- **Cursor:** `.cursor/rules` (future)
- **Others:** README.md references

---

## Boot Sequence

When starting a session, follow this order:

```
1. LLM entry file (e.g. CLAUDE.md)     -> high-level project info
2. .ai/README.md (this file)            -> how to work
3. .ai/rules/*                          -> way of working (shared standards)
4. .ai/sessions/_tracker.md             -> where we left off
5. Active session files (in_progress)   -> pick up current work
6. _docs/* (as needed)                  -> repo specifications
```

---

## Folder Structure

```
.ai/
├── README.md              <- You are here
├── rules/                 # Way of working (shared across repos in future)
│   ├── _enums.md          #   Shared enums (status, type, priority)
│   ├── workflow.md        #   Three-phase workflow, context rule, ownership
│   └── coding-standards.md #  Git, linting, code limits
├── sessions/              # Kanban-style session tracking
│   ├── _tracker.md        #   Session history (like git log)
│   ├── *.md               #   Individual session files
│   └── _archived/         #   Sessions older than 10 days
```

---

## Session Management

### Creating a Session
- Create `sessions/YYYY-MM-DD-<short-topic>.md` using the template below
- Add entry to `sessions/_tracker.md`
- Status values: see `rules/_enums.md`

### Session File Template
```markdown
# Session: <title>

- **Created:** YYYY-MM-DD
- **Updated:** YYYY-MM-DD
- **Status:** in_progress (see rules/_enums.md)
- **Type:** ticket (see rules/_enums.md)
- **Priority:** medium (see rules/_enums.md)
- **User:** <name>

## Goal
What this session aims to accomplish.

## Progress
What has been done so far.

## Decisions
Key decisions made during this session.

## Next Steps
What remains to be done.
```

### Auto-Archival (10-Day Rule)
On session start:
1. Read `_tracker.md`
2. Any session with `updated` > 10 days ago and status != `done`:
   - Ask user: "Is [session title] finalized? I need to archive it."
   - No clear answer -> move to `_archived/`
3. Sessions with status `done` -> move to `_archived/` immediately

---

## Rules

The `rules/` folder contains **shared way-of-working** standards. These are NOT project-specific — they will be extracted into a standalone repo in the future for reuse across projects.

Project-specific standards (design, data model, etc.) live in `_docs/`.

---

## For New Developers

1. Your LLM reads its entry file (e.g. CLAUDE.md)
2. That file points here
3. Read the rules to learn how we work
4. Check `_tracker.md` to see current state
5. Read active session files to understand ongoing work
6. Check `_docs/` for project specifications

# Markdown Style Guide

> **Rule:** markdown-style · **Status:** Active · **Updated:** 2026-03-07

---

All `.md` files in this repo must follow these conventions. Consistency across docs, rules, sessions, and any future markdown.

---

## File Header

Every markdown file starts with this structure:

```markdown
# Title — Optional Subtitle

> **Label:** identifier · **Status:** value · **Updated:** YYYY-MM-DD

---
```

**Label** depends on file location:

| Location | Label | Example |
|----------|-------|---------|
| `_docs/` | `Doc:` | `Doc: 05` |
| `.ai/rules/` | `Rule:` | `Rule: workflow` |
| `.ai/sessions/_tracker.md` | `Type:` | `Type: Tracker` |
| `.ai/README.md` | `Type:` | `Type: Guide` |

**Exception:** Session files (`.ai/sessions/YYYY-MM-DD-*.md`) do NOT use the blockquote header. They have their own metadata block instead:

```markdown
# Session: <title>

- **Created:** YYYY-MM-DD
- **Updated:** YYYY-MM-DD
- **Status:** in_progress (see rules/_enums.md)
- **Type:** ticket (see rules/_enums.md)
- **Priority:** medium (see rules/_enums.md)
- **User:** <name>
```

**Status values:**

| Value | Use for |
|-------|---------|
| `Active` | Living document, regularly updated |
| `Draft` | Work in progress, not yet approved |
| `Reference` | Historical record, not actively maintained |
| `Archived` | Superseded, kept for history |

---

## Headings

- **H1** (`#`) — File title. One per file. Never repeat.
- **H2** (`##`) — Major sections. Separated by `---` above.
- **H3** (`###`) — Subsections within an H2. No separator.
- **H4** (`####`) — Rare. Only if H3 has clear sub-groupings.

Never skip levels (no H1 to H3 without H2).

---

## Sections

- Separate H2 sections with `---` (horizontal rule).
- No `---` before the first H2 (the header block already has one).
- No `---` after the last section.

---

## Text

- **Active voice.** "Add subtitle to units" not "Subtitle was added to units."
- **Concise.** One idea per sentence. No filler words.
- **Direct.** Lead with the point, not the reasoning.
- **Bold** for key terms on first use, emphasis, or labels.
- *Italic* only for titles of external works or subtle emphasis.
- No ALL CAPS for emphasis — use **bold** instead.

---

## Lists

- Use `-` for unordered lists (not `*`).
- Use `1.` for ordered lists (auto-increment).
- Use `- [x]` / `- [ ]` for task checklists.
- Keep list items parallel in structure (all start with verbs, or all are nouns).
- No period at end of list items unless they are full sentences.

---

## Tables

Use tables when data has 2+ attributes per item. Keep them clean:

```markdown
| Column A | Column B | Column C |
|----------|----------|----------|
| value    | value    | value    |
```

- Left-align all columns (default).
- Bold column headers only if needed for scannability.
- Keep cell content short — one line per cell.

---

## Code Blocks

- Use triple backticks with language identifier:
  ````
  ```bash
  npm run lint
  ```
  ````
- Inline code (`` ` ``) for: file names, field names, enum values, commands, paths.
- No code blocks for emphasis — use **bold** for that.

---

## Links and References

- Reference other docs with relative paths: `[05-data-model-design.md](./05-data-model-design.md)`
- Use `>` blockquote with arrow for cross-references:
  ```markdown
  > See [04-tech-stack.md](./04-tech-stack.md) for architecture details.
  ```
- Never duplicate content — reference the source doc instead.

---

## Blockquotes

- `>` for the file header metadata (mandatory).
- `>` for cross-references to other docs.
- `>` for callouts (draft notices, important notes).
- Do not use blockquotes for general text emphasis.

---

## File Naming

| Location | Pattern | Example |
|----------|---------|---------|
| `_docs/` | `NN-kebab-case.md` | `05-data-model-design.md` |
| `.ai/rules/` | `kebab-case.md` | `coding-standards.md` |
| `.ai/rules/` (top-sort) | `_kebab-case.md` | `_enums.md` |
| `.ai/sessions/` | `YYYY-MM-DD-kebab-case.md` | `2026-03-07-ai-workspace-setup.md` |
| `.ai/sessions/` (top-sort) | `_kebab-case.md` | `_tracker.md` |

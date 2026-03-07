# Shared Enums

All enums used across `.ai/` files. Single source of truth — reference this file, never redefine.

---

## Session Status

| Value | Meaning |
|-------|---------|
| `backlog` | Planned but not started |
| `in_progress` | Actively being worked on |
| `blocked` | Waiting on external input or dependency |
| `in_review` | Done, awaiting confirmation |
| `done` | Completed and confirmed |

## Session Type

| Value | Meaning |
|-------|---------|
| `planning` | Architecture, design, or structural decisions |
| `ticket` | A specific task or feature |
| `flow` | User journey or workflow design |
| `screen` | UI/UX screen work |
| `refactor` | Code or doc restructuring |
| `bugfix` | Bug investigation and fix |
| `research` | Exploration, comparison, or analysis |

## Priority

| Value | Meaning |
|-------|---------|
| `high` | Do next |
| `medium` | Important but not urgent |
| `low` | Nice to have |

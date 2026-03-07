# Workflow

## Three-Phase Workflow

Every task follows this order. No shortcuts.

```
RESEARCH (Read-Only) -> PLAN (Checkpoint) -> IMPLEMENT (Fresh Start)
```

### Phase 1: Research
- Read relevant files, explore codebase
- DO NOT write code
- DO NOT make assumptions — read first

### Phase 2: Plan
- Present approach to Armanc for sign-off
- Include: what changes, where, why
- STOP here until approved

### Phase 3: Implement
- Execute the approved plan
- Ideally in fresh context (or after checkpoint save)
- One thing at a time, step by step

---

## Context Management

| Context | Zone | Action |
|---------|------|--------|
| 0-40% | Smart | Execute here |
| 40-60% | Warning | Save session, prepare to reset |
| 60%+ | Dumb | STOP. Save everything, start fresh |

**Better tokens, not more tokens.**

When approaching 40-60%:
1. Save current progress to `.ai/sessions/`
2. Summarize decisions made
3. List next steps clearly
4. Be ready to hand off to fresh session

---

## Ownership Split

| Human (Armanc) | AI |
|---|---|
| Decides WHAT to build | Proposes HOW to build it |
| Approves plans | Executes approved plans |
| Reviews output | Explains reasoning |
| Sets priorities | Follows priorities |

---

## Anti-Patterns

| Don't | Do Instead |
|-------|------------|
| Vibe code (code without plan) | Plan first, get sign-off |
| God Model Fallacy (assume AI knows best) | Validate assumptions, ask when unsure |
| Context Dumping (cram everything in) | Be selective, use fresh contexts |
| Trajectory Poisoning (keep going after wrong turn) | STOP, reassess, course-correct |

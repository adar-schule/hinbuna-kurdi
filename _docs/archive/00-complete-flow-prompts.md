# Complete Flow - AI Design Prompts

**Use with:** Google Stitch, Visily, or any AI design tool
**App:** Hinbuna Kurdi
**Style:** Mobile-first (375px), Dark mode default

---

## Brand Directions (Test All 3)

When generating screens, test each direction first with Landing Page, then pick winner.

### Direction A: Warm & Welcoming
```
Colors: Forest green (#2D5A3D), warm cream (#FDF8F3), gold accent (#D4A843)
Vibe: Friendly, encouraging, like Duolingo meets Headspace
Typography: Rounded, friendly sans-serif
```

### Direction B: Modern & Clean
```
Colors: Deep blue (#1E3A5F), light gray (#F5F7FA), teal accent (#0D9488)
Vibe: Professional, minimal, like Linear meets Notion
Typography: Clean geometric sans-serif (Inter style)
```

### Direction C: Cultural Heritage
```
Colors: Earth brown (#5D4E37), warm sand (#F5EDE0), gold (#E6B800), burgundy (#722F37)
Vibe: Traditional, proud, Kurdish identity
Typography: Elegant but readable
```

---

## Constants for All Prompts

Add to every prompt:
```
- Mobile-first: 375px width
- Dark mode
- Support Kurdish characters: ê, î, û, ç, ş
- Touch targets: min 44px
- App name: "Hinbuna Kurdi"
```

---

## Quick Reference: All 32 Screens

### Public (6)
| Screen | See prompts in |
|--------|----------------|
| P1 Landing | `01-user-flow-prompts.md` |
| P2 Pricing | `01-user-flow-prompts.md` |
| P3 Login | `01-user-flow-prompts.md` |
| P4 Register | `01-user-flow-prompts.md` |
| P5 Forgot Password | `01-user-flow-prompts.md` |
| P6 About | `01-user-flow-prompts.md` |

### Student (12)
| Screen | See prompts in |
|--------|----------------|
| S1-S12 | `01-user-flow-prompts.md` |

### Teacher (8)
| Screen | See prompts in |
|--------|----------------|
| T1-T8 | `02-teacher-flow-prompts.md` |

### Admin (6)
| Screen | See prompts in |
|--------|----------------|
| A1-A6 | `03-admin-flow-prompts.md` |

---

## Recommended Testing Order

### Round 1: Brand Direction (pick winner)
1. P1 Landing - Direction A (Warm)
2. P1 Landing - Direction B (Modern)
3. P1 Landing - Direction C (Heritage)

### Round 2: Auth (in winning direction)
4. P3 Login
5. P4 Register

### Round 3: Core Screens (winning direction)
6. S1 Student Dashboard
7. S6 Activity Screen
8. T1 Teacher Dashboard
9. A1 Admin Dashboard

### Round 4: All P0 Screens
Generate remaining 19 P0 screens in winning direction.

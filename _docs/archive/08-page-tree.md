# Page Tree — Public Screens Navigation Map

> How all public pages (P1–P8) link to each other.

## Shared Navigation (all pages)

| Element | Links to |
|---------|----------|
| Header logo | P1 Landing |
| Header "Têkeve" button | P3 Login |
| Footer "Derbarê" | P6 About |
| Footer "Polîtîkaya Nihenîyê" | — (not built) |
| Footer "Şert û Mercan" | — (not built) |
| Footer "Têkilî" | — (not built) |

## Per-Page Links

### P1 Landing
| Element | Links to |
|---------|----------|
| Hero CTA "Dest pê bike — Bêlaş e" | P4 Register |
| Free plan "Dest pê bike" | P4 Register |
| Premium "Premium bibe" | P4 Register |
| Final CTA "Bêlaş dest pê bike" | P4 Register |

### P2 Pricing
| Element | Links to |
|---------|----------|
| Free plan "Dest pê bike" | P4 Register |
| Premium "Premium bibe" | P4 Register |
| Final CTA "Dest pê bike" | P4 Register |

### P3 Login
| Element | Links to |
|---------|----------|
| "Şîfre ji bîr kir?" (Forgot password) | P5 Forgot Password |
| "Hesabek çêke" (Create account) | P4 Register |

### P4 Register
| Element | Links to |
|---------|----------|
| "Têkeve" (Login) | P3 Login |

### P5 Forgot Password
| Element | Links to |
|---------|----------|
| "Vegere têketinê" (Back to login) | P3 Login |

### P6 About
| Element | Links to |
|---------|----------|
| (header/footer only) | — |

### P8 Support & Invest
| Element | Links to |
|---------|----------|
| (header/footer only) | — |

## Connection Summary

```
                    ┌─────────┐
                    │ P1      │
                    │ Landing │
                    └────┬────┘
                         │ all CTAs
                         ▼
┌─────────┐    ┌─────────────────┐    ┌─────────┐
│ P2      │───▶│ P4              │◀───│ P3      │
│ Pricing │    │ Register        │    │ Login   │
└─────────┘    └────────┬────────┘    └──┬───▲──┘
                        │ "Têkeve"       │   │
                        └────────────────┘   │
                                             │
                    ┌─────────┐              │
                    │ P5      │──────────────┘
                    │ Forgot  │  "Vegere têketinê"
                    └─────────┘

                    ┌─────────┐
                    │ P6      │  (footer link only)
                    │ About   │
                    └─────────┘

                    ┌─────────┐
                    │ P8      │  (footer link only)
                    │ Support │
                    └─────────┘

Header logo → P1 (from any page)
Header "Têkeve" → P3 (from any page)
Footer "Derbarê" → P6 (from any page)
Footer "Piştgirî" → P8 (from any page)
```

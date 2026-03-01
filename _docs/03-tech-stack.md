# Technical Architecture

**For:** Developers
**Version:** 1.0
**Last Updated:** February 2026

---

## Stack Overview

| Layer | Technology | Reason |
|-------|------------|--------|
| **Frontend** | React + Tailwind CSS | Standard, mobile-first, React Native later |
| **Backend** | NestJS (Node.js + TypeScript) | Structured, enterprise-friendly, good APIs |
| **Database** | PostgreSQL (AWS RDS) | Relational, industry standard, portable |
| **Auth** | Custom JWT + Passport.js | Multi-app SSO, no vendor lock-in |
| **Hosting** | AWS (ECS/EC2 + RDS) | Scalable, professional |
| **File Storage** | AWS S3 | Audio, images, materials |
| **TTS/STT** | [kurdishtts.com](https://www.kurdishtts.com) | Kurdish-native AI voices |

---

## AI & External Services

### Kurdish TTS/STT Integration

**Provider:** [kurdishtts.com](https://www.kurdishtts.com)
**Partnership:** To be negotiated (bulk/white-label pricing)

| Feature | Description | Priority |
|---------|-------------|----------|
| **TTS** (Text-to-Speech) | AI-generated audio for vocabulary, sentences, dialogues | MVP |
| **STT** (Speech-to-Text) | Pronunciation practice, speaking exercises | Post-MVP |
| **Voice Chat** | Conversational AI practice | Future |

**Technical Details:**
- 198 AI voices available
- Supports both **Kurmanji** (Latin script) and **Sorani** (Arabic script)
- API access for developers
- MP3/WAV audio output

**Pricing Reference:**
| Plan | TTS Chars/mo | STT Transcriptions | Price |
|------|--------------|-------------------|-------|
| Free | 20,000 | - | $0 |
| Starter | 1,000,000 | - | $5/mo |
| Pro | 1,000,000 | 1,000/mo | $10/mo |

**Integration Points:**
- Lesson audio generation (pre-generated or on-demand)
- Vocabulary pronunciation buttons
- Speaking activity feedback
- Cache generated audio in S3 to reduce API calls

---

## Architecture Principles

1. **Mobile-first** - Design for phones, enhance for desktop
2. **No vendor lock-in** - Avoid Firebase, AWS-specific services
3. **Multi-tenant ready** - Design for future white-label sales
4. **Centralized auth** - User DB shared across all apps
5. **SCORM/xAPI compatible** - For LMS integration (future)

---

## Database

→ **Full schema (47 tables) + ERD diagrams:** See [04-data-model-design.md](./04-data-model-design.md)
→ **Multi-language architecture:** See [multi-lang.html](../mockup/multi-lang.html) (visual overview) and multi-lang tables in [04-data-model-design.md](./04-data-model-design.md)

**Key facts:**
- PostgreSQL with UUID primary keys
- 47 tables across 12 domains (Content, Users, Subscriptions, Progress, Teacher, Notifications, Badges, Comments, Audit, AI Core, AI Premium, Multi-Language)
- Roles & permissions via `roles` + `user_roles` tables (not a column on users)
- Content hierarchy: Course → Module → Unit → Lesson → Activity → Material

---

## Authentication

### Multi-App SSO Design

```
┌─────────────────┐     ┌─────────────────┐
│  Hinbuna Kurdî  │     │   Future App    │
│    (Main App)   │     │  (Dictionary)   │
└────────┬────────┘     └────────┬────────┘
         │                       │
         └───────────┬───────────┘
                     │
              ┌──────▼──────┐
              │  Auth API   │
              │  (Shared)   │
              └──────┬──────┘
                     │
              ┌──────▼──────┐
              │   Users DB  │
              │  (Shared)   │
              └─────────────┘
```

- Custom JWT + Passport.js
- Roles & permissions system → See [04-data-model-design.md](./04-data-model-design.md#users--auth-5-tables)
- Shared user DB across all side apps

---

## Project Structure

→ See repo [CLAUDE.md](../CLAUDE.md) for backend/frontend folder structure and commands.

---

## Deployment (AWS)

### MVP Architecture

```
┌─────────────────────────────────────────┐
│                  AWS                     │
│  ┌─────────────┐    ┌─────────────┐     │
│  │   Route 53  │───▶│ CloudFront  │     │
│  │    (DNS)    │    │    (CDN)    │     │
│  └─────────────┘    └──────┬──────┘     │
│                            │            │
│  ┌─────────────────────────▼──────────┐ │
│  │          Application LB            │ │
│  └─────────────┬──────────────────────┘ │
│                │                        │
│  ┌─────────────▼──────────┐            │
│  │   ECS / EC2 Instance   │            │
│  │  ┌──────┐  ┌────────┐  │            │
│  │  │ React│  │ NestJS │  │            │
│  │  │(Nginx│  │  API   │  │            │
│  │  └──────┘  └────┬───┘  │            │
│  └─────────────────┼──────┘            │
│                    │                    │
│  ┌─────────────────▼──────┐            │
│  │    RDS (PostgreSQL)    │            │
│  └────────────────────────┘            │
│                                         │
│  ┌────────────────────────┐            │
│  │      S3 (Media)        │            │
│  └────────────────────────┘            │
└─────────────────────────────────────────┘
```

---

## Development Setup

→ See repo [CLAUDE.md](../CLAUDE.md) for prerequisites, commands, and environment variables.

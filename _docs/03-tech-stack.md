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
| **Auth** | Custom JWT + Passport.js (or KeyCloak) | Multi-app SSO, no vendor lock-in |
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

## Database Schema

### Entity Relationship

```
users
├── id (UUID)
├── email
├── password_hash
├── display_name
├── role (student | teacher | admin)
├── ui_language (de | en | ku)
├── xp (integer)
├── streak (integer)
└── created_at, updated_at

courses
├── id (UUID)
├── title (JSONB: {de, en, ku})
├── description (JSONB)
├── dialect (kurmanji | sorani)
├── status (draft | published)
└── created_at, updated_at

modules
├── id (UUID)
├── course_id (FK)
├── title (JSONB)
├── cefr_level (A1 | A2 | B1 | B2 | C1 | C2)
├── order (integer)
└── created_at, updated_at

units
├── id (UUID)
├── module_id (FK)
├── title (JSONB)
├── description (JSONB)
├── order (integer)
└── created_at, updated_at

lessons
├── id (UUID)
├── unit_id (FK)
├── title (JSONB)
├── learning_objective (JSONB)
├── order (integer)
├── duration_minutes (integer)
└── created_at, updated_at

activities
├── id (UUID)
├── lesson_id (FK)
├── type (mcq | gap_fill | matching | word_order | reading | listening)
├── prompt (JSONB)
├── options (JSONB array)
├── answer_key (JSONB)
├── explanation (JSONB)
├── xp_value (integer)
├── order (integer)
└── created_at, updated_at

materials
├── id (UUID)
├── type (text | audio | image)
├── title (JSONB)
├── content_url (string)
├── tags (string array)
├── uploaded_by (FK users)
└── created_at, updated_at

activity_materials (junction)
├── activity_id (FK)
└── material_id (FK)

user_progress
├── id (UUID)
├── user_id (FK)
├── lesson_id (FK)
├── completed_at (timestamp)
├── score (integer)
├── time_spent_seconds (integer)
└── created_at
```

### JSONB for Multilingual Content

All user-facing text stored as JSONB:
```json
{
  "de": "Begrüßung",
  "en": "Greetings",
  "ku": "Silav"
}
```

---

## API Structure (NestJS)

### Modules

```
src/
├── auth/           # JWT, login, register, SSO
├── users/          # User CRUD, profile
├── courses/        # Course management
├── modules/        # Module (CEFR levels)
├── units/          # Unit management
├── lessons/        # Lesson management
├── activities/     # Exercise types
├── materials/      # File uploads, content
├── progress/       # User progress tracking
└── common/         # Shared utilities, guards, decorators
```

### Key Endpoints

```
# Auth
POST   /auth/register
POST   /auth/login
POST   /auth/refresh
GET    /auth/me

# Courses (public)
GET    /courses
GET    /courses/:id
GET    /courses/:id/modules

# Learning Flow
GET    /modules/:id/units
GET    /units/:id/lessons
GET    /lessons/:id/activities

# Progress (authenticated)
POST   /progress/complete
GET    /progress/dashboard

# Teacher/Admin
GET    /teacher/students
GET    /teacher/students/:id/progress
POST   /teacher/lessons
PUT    /teacher/lessons/:id
POST   /teacher/materials/upload
```

---

## Authentication Flow

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

### JWT Structure

```json
{
  "sub": "user-uuid",
  "email": "user@example.com",
  "role": "student",
  "apps": ["hinbuna", "dictionary"],
  "iat": 1234567890,
  "exp": 1234571490
}
```

---

## Frontend Structure (React)

```
src/
├── components/
│   ├── common/        # Button, Card, Input, etc.
│   ├── layout/        # Header, Footer, Navigation
│   ├── learning/      # LessonCard, ActivityRunner, ProgressBar
│   └── teacher/       # Dashboard components
├── pages/
│   ├── public/        # Home, About, Auth
│   ├── student/       # Dashboard, Lessons, Profile
│   └── teacher/       # Admin dashboard, Content management
├── hooks/             # Custom React hooks
├── services/          # API calls
├── store/             # State management (Zustand or Redux)
├── i18n/              # Internationalization (de, en, ku)
└── utils/             # Helpers
```

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

### Prerequisites
- Node.js 20+
- PostgreSQL 15+
- AWS CLI configured

### Commands
```bash
# Backend
cd backend
npm install
npm run start:dev

# Frontend
cd frontend
npm install
npm run dev

# Database
npm run migration:run
npm run seed
```

---

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/hinbuna

# Auth
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# AWS
AWS_REGION=eu-central-1
AWS_S3_BUCKET=hinbuna-media

# App
NODE_ENV=development
API_URL=http://localhost:3000
```

---

## Next Steps

1. [ ] Initialize NestJS project with modules
2. [ ] Set up PostgreSQL with migrations
3. [ ] Create React project with Tailwind
4. [ ] Implement auth flow
5. [ ] Build lesson display and activity runner
6. [ ] Teacher dashboard basics

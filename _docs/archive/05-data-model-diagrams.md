# LMS Data Model - Complete Documentation

**For:** Developers, Technical Sales, B2B Clients
**Version:** 1.0
**Date:** 2026-02-01
**Author:** Nuri Armanç Engin

---

## Overview

A **generic, enterprise-ready LMS data model** designed to support any educational domain:
- Language learning (Duolingo-style)
- Corporate training (safety, compliance)
- Academic courses (math, science)
- Professional certifications

**Key Features:**
- 26 tables across 9 domains
- Generic schema with JSON metadata for domain-specific customization
- Optional features (subscriptions, badges, comments) can be enabled/disabled
- Multi-deployment ready (B2C SaaS or B2B internal LMS)

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Total Tables | 26 |
| Domains | 9 |
| Core Tables (MVP) | 17 |
| Optional Tables | 9 |

---

# Domain 1: Content Structure

The heart of the LMS - hierarchical content organization.

## Tables

| Table | Purpose |
|-------|---------|
| `courses` | Top-level container (e.g., "Kurdish Language", "Fire Safety") |
| `modules` | Major sections/levels within a course |
| `units` | Thematic groupings, access control point |
| `lessons` | Single learning sessions (5-15 min) |
| `activities` | Interactive exercises (quiz, gap-fill, etc.) |
| `materials` | Reusable content (text, audio, video, images) |
| `activity_materials` | Links activities to materials (many-to-many) |

## Entity Relationship Diagram

```mermaid
erDiagram
    courses ||--o{ modules : contains
    modules ||--o{ units : contains
    units ||--o{ lessons : contains
    lessons ||--o{ activities : contains
    activities ||--o{ activity_materials : has
    materials ||--o{ activity_materials : "used in"

    courses {
        uuid id PK
        string name
        string description
        string slug UK
        string category
        json metadata
        string image_url
        boolean is_published
        timestamp created_at
        timestamp updated_at
    }

    modules {
        uuid id PK
        uuid course_id FK
        string name
        string description
        string slug
        string level
        int order_index
        string image_url
        json metadata
        boolean is_published
        timestamp created_at
        timestamp updated_at
    }

    units {
        uuid id PK
        uuid module_id FK
        string name
        string description
        string slug
        int order_index
        string image_url
        json metadata
        boolean is_free
        boolean is_published
        timestamp created_at
        timestamp updated_at
    }

    lessons {
        uuid id PK
        uuid unit_id FK
        string name
        string description
        string slug
        int order_index
        int duration_minutes
        text learning_objective
        json metadata
        boolean is_published
        timestamp created_at
        timestamp updated_at
    }

    activities {
        uuid id PK
        uuid lesson_id FK
        enum type
        int order_index
        json content
        json metadata
        boolean is_published
        timestamp created_at
        timestamp updated_at
    }

    materials {
        uuid id PK
        enum type
        text content
        json metadata
        timestamp created_at
        timestamp updated_at
    }

    activity_materials {
        uuid activity_id PK,FK
        uuid material_id PK,FK
        int order_index
    }
```

## Content Flow

```mermaid
flowchart TD
    C[Course] --> M1[Module: Beginner]
    C --> M2[Module: Intermediate]

    M1 --> U1[Unit 1: Basics]
    M1 --> U2[Unit 2: Greetings]

    U1 --> L1[Lesson 1.1]
    U1 --> L2[Lesson 1.2]

    L1 --> A1[Activity: Reading]
    L1 --> A2[Activity: Quiz]
    L1 --> A3[Activity: Gap-fill]

    A1 --> MAT1[Material: Text]
    A2 --> MAT2[Material: Audio]
    A1 --> MAT2

    style U1 fill:#90EE90
    style U2 fill:#FFB6C1

    U1 -.- FREE[is_free: true]
    U2 -.- PREMIUM[is_free: false]
```

---

# Domain 2: Users & Authentication

User management with flexible signup modes.

## Tables

| Table | Purpose |
|-------|---------|
| `users` | All user accounts |
| `invites` | Invitation tokens for restricted signup |
| `app_settings` | System-wide configuration |

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ invites : "invited by"

    users {
        uuid id PK
        string email UK
        string password_hash
        enum role
        string first_name
        string last_name
        string display_name
        string avatar_url
        boolean email_verified
        boolean is_active
        json metadata
        timestamp last_login_at
        timestamp created_at
        timestamp updated_at
    }

    invites {
        uuid id PK
        string email
        uuid invited_by FK
        enum role
        string token UK
        timestamp used_at
        timestamp expires_at
        timestamp created_at
    }

    app_settings {
        uuid id PK
        enum signup_mode
        json allowed_domains
        boolean subscriptions_enabled
        json settings
    }
```

## Signup Modes

```mermaid
flowchart LR
    subgraph "Signup Mode: PUBLIC"
        A1[Anyone] --> B1[Register]
        B1 --> C1[Verify Email]
        C1 --> D1[Active User]
    end

    subgraph "Signup Mode: INVITE_ONLY"
        A2[Admin] --> B2[Send Invite]
        B2 --> C2[User Gets Email]
        C2 --> D2[Register with Token]
        D2 --> E2[Active User]
    end

    subgraph "Signup Mode: DOMAIN_RESTRICTED"
        A3[User @company.com] --> B3[Register]
        B3 --> C3{Email Domain OK?}
        C3 -->|Yes| D3[Active User]
        C3 -->|No| E3[Rejected]
    end
```

## Role Hierarchy

```mermaid
flowchart TD
    ADMIN[Admin] --> TEACHER[Teacher]
    TEACHER --> STUDENT[Student]

    ADMIN -.- A1[Full system access]
    ADMIN -.- A2[User management]
    ADMIN -.- A3[Content management]

    TEACHER -.- T1[View student progress]
    TEACHER -.- T2[Manage own classes]
    TEACHER -.- T3[Create/edit content]

    STUDENT -.- S1[Access content]
    STUDENT -.- S2[Track own progress]
    STUDENT -.- S3[Earn badges]
```

---

# Domain 3: Subscriptions & Payments

Optional monetization system - can be disabled for internal LMS deployments.

## Tables

| Table | Purpose |
|-------|---------|
| `subscription_plans` | Available plans (Monthly, Yearly, Lifetime) |
| `user_subscriptions` | User's active/past subscriptions |

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ user_subscriptions : has
    subscription_plans ||--o{ user_subscriptions : "purchased as"

    subscription_plans {
        uuid id PK
        string name
        string slug UK
        enum type
        enum interval
        int price_cents
        string currency
        json features
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }

    user_subscriptions {
        uuid id PK
        uuid user_id FK
        uuid plan_id FK
        enum status
        timestamp started_at
        timestamp expires_at
        timestamp cancelled_at
        string payment_provider
        string payment_reference
        json metadata
        timestamp created_at
        timestamp updated_at
    }
```

## Subscription Flow

```mermaid
flowchart TD
    USER[User] --> FREE{Accessing Free Unit?}
    FREE -->|Yes| ACCESS[Grant Access]
    FREE -->|No| SUB{Has Active Subscription?}
    SUB -->|Yes| ACCESS
    SUB -->|No| PAYWALL[Show Paywall]
    PAYWALL --> CHOOSE[Choose Plan]
    CHOOSE --> PAY[Payment Provider]
    PAY --> CREATE[Create user_subscription]
    CREATE --> ACCESS

    subgraph Plans
        P1[Monthly - €9.99/mo]
        P2[Yearly - €79.99/yr]
        P3[Lifetime - €199]
    end
```

## Subscription States

```mermaid
stateDiagram-v2
    [*] --> active: Purchase
    active --> cancelled: User Cancels
    active --> expired: Payment Failed
    active --> paused: User Pauses
    cancelled --> active: Resubscribe
    expired --> active: Payment Retry
    paused --> active: Resume
    cancelled --> [*]: Subscription Ends
    expired --> [*]: Grace Period Ends
```

---

# Domain 4: Progress Tracking

Track user learning journey and performance.

## Tables

| Table | Purpose |
|-------|---------|
| `user_progress` | Completion status at any content level |
| `activity_attempts` | Individual activity submissions & scores |
| `user_stats` | Denormalized stats for fast dashboard |

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ user_progress : tracks
    users ||--o{ activity_attempts : submits
    users ||--|| user_stats : has

    courses ||--o{ user_progress : "progress in"
    modules ||--o{ user_progress : "progress in"
    units ||--o{ user_progress : "progress in"
    lessons ||--o{ user_progress : "progress in"
    activities ||--o{ activity_attempts : "attempted"

    user_progress {
        uuid id PK
        uuid user_id FK
        uuid course_id FK
        uuid module_id FK
        uuid unit_id FK
        uuid lesson_id FK
        enum status
        timestamp completed_at
        int time_spent_seconds
        timestamp created_at
        timestamp updated_at
    }

    activity_attempts {
        uuid id PK
        uuid user_id FK
        uuid activity_id FK
        int attempt_number
        json answers
        int score
        boolean is_correct
        int time_spent_seconds
        timestamp completed_at
        timestamp created_at
    }

    user_stats {
        uuid id PK
        uuid user_id FK,UK
        int total_lessons_completed
        int total_activities_completed
        int total_time_spent_seconds
        int current_streak_days
        int longest_streak_days
        timestamp last_activity_at
        timestamp updated_at
    }
```

## Progress Flow

```mermaid
flowchart TD
    START[User Opens Lesson] --> PROGRESS1[Create/Update user_progress]
    PROGRESS1 --> |status: in_progress| ACTIVITY[Start Activity]
    ACTIVITY --> SUBMIT[Submit Answer]
    SUBMIT --> ATTEMPT[Create activity_attempt]
    ATTEMPT --> SCORE[Calculate Score]
    SCORE --> NEXT{More Activities?}
    NEXT -->|Yes| ACTIVITY
    NEXT -->|No| COMPLETE[Mark Lesson Complete]
    COMPLETE --> PROGRESS2[Update user_progress]
    PROGRESS2 --> |status: completed| STATS[Update user_stats]
    STATS --> STREAK[Update Streak]
    STREAK --> BADGE{Badge Earned?}
    BADGE -->|Yes| AWARD[Award Badge]
    BADGE -->|No| END[Done]
    AWARD --> END
```

---

# Domain 5: Teacher Features

Class management and content authorship.

## Tables

| Table | Purpose |
|-------|---------|
| `classes` | Teacher-created groups of students |
| `class_students` | Student enrollment in classes |
| `content_authors` | Who can edit which content |
| `assignments` | Teacher-assigned content to classes |

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ classes : "teaches"
    classes ||--o{ class_students : has
    users ||--o{ class_students : "enrolled in"
    classes ||--o{ assignments : has
    users ||--o{ assignments : "assigned by"
    users ||--o{ content_authors : "authored by"

    classes {
        uuid id PK
        string name
        text description
        uuid teacher_id FK
        uuid course_id FK
        string join_code UK
        boolean is_active
        json metadata
        timestamp created_at
        timestamp updated_at
    }

    class_students {
        uuid class_id PK,FK
        uuid student_id PK,FK
        timestamp joined_at
        enum status
        timestamp created_at
    }

    content_authors {
        uuid user_id PK,FK
        enum content_type PK
        uuid content_id PK
        enum role
        timestamp created_at
    }

    assignments {
        uuid id PK
        uuid class_id FK
        uuid assigned_by FK
        enum content_type
        uuid content_id
        timestamp due_date
        text instructions
        boolean is_active
        timestamp created_at
        timestamp updated_at
    }
```

## Teacher Workflow

```mermaid
flowchart TD
    subgraph "Class Management"
        T1[Create Class] --> T2[Get Join Code]
        T2 --> T3[Share with Students]
        T3 --> T4[Students Join]
        T4 --> T5[View Roster]
    end

    subgraph "Progress Monitoring"
        M1[Select Class] --> M2[View Dashboard]
        M2 --> M3[See Individual Progress]
        M2 --> M4[See Class Analytics]
        M3 --> M5[Activity Scores]
        M3 --> M6[Time Spent]
        M4 --> M7[Completion Rates]
        M4 --> M8[Common Mistakes]
    end

    subgraph "Assignments"
        A1[Select Content] --> A2[Set Due Date]
        A2 --> A3[Add Instructions]
        A3 --> A4[Assign to Class]
        A4 --> A5[Students Notified]
    end
```

---

# Domain 6: Notifications

In-app and email notification system.

## Tables

| Table | Purpose |
|-------|---------|
| `notifications` | Individual notifications |
| `notification_preferences` | User notification settings |

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ notifications : receives
    users ||--|| notification_preferences : has

    notifications {
        uuid id PK
        uuid user_id FK
        enum type
        string title
        text message
        string link
        boolean is_read
        timestamp read_at
        json metadata
        timestamp created_at
    }

    notification_preferences {
        uuid id PK
        uuid user_id FK,UK
        boolean email_enabled
        enum email_frequency
        boolean in_app_enabled
        json types_enabled
        timestamp updated_at
    }
```

## Notification Types

```mermaid
flowchart LR
    subgraph Types
        INFO[Info]
        ACHIEVEMENT[Achievement]
        REMINDER[Reminder]
        ASSIGNMENT[Assignment]
        SYSTEM[System]
    end

    subgraph Triggers
        T1[Badge Earned] --> ACHIEVEMENT
        T2[Streak at Risk] --> REMINDER
        T3[New Assignment] --> ASSIGNMENT
        T4[Subscription Expiring] --> INFO
        T5[Maintenance] --> SYSTEM
    end
```

---

# Domain 7: Badges & Achievements

Gamification to increase engagement.

## Tables

| Table | Purpose |
|-------|---------|
| `badges` | Available badges with criteria |
| `user_badges` | Badges earned by users |

## Entity Relationship Diagram

```mermaid
erDiagram
    badges ||--o{ user_badges : "earned as"
    users ||--o{ user_badges : earns

    badges {
        uuid id PK
        string name
        text description
        string icon_url
        enum category
        json criteria
        boolean is_active
        timestamp created_at
    }

    user_badges {
        uuid id PK
        uuid user_id FK
        uuid badge_id FK
        timestamp earned_at
        json metadata
    }
```

## Badge Categories

```mermaid
flowchart TD
    subgraph "Progress Badges"
        P1[First Lesson]
        P2[Unit Complete]
        P3[Module Master]
        P4[Course Graduate]
    end

    subgraph "Streak Badges"
        S1[3-Day Streak]
        S2[Week Warrior]
        S3[Month Master]
        S4[Year Champion]
    end

    subgraph "Social Badges"
        SO1[First Comment]
        SO2[Helpful Answer]
        SO3[Top Contributor]
    end

    subgraph "Special Badges"
        SP1[Early Adopter]
        SP2[Beta Tester]
        SP3[Perfect Score]
    end
```

## Badge Criteria Examples

```mermaid
flowchart LR
    subgraph "Criteria JSON"
        C1["{ type: lessons_completed, count: 1 }"]
        C2["{ type: streak_days, count: 7 }"]
        C3["{ type: perfect_score, activity_type: quiz }"]
        C4["{ type: comments_posted, count: 10 }"]
    end
```

---

# Domain 8: Comments & Discussion

Social learning through discussion.

## Tables

| Table | Purpose |
|-------|---------|
| `comments` | User comments on content |
| `comment_reactions` | Likes/reactions on comments |

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ comments : posts
    comments ||--o{ comments : "replies to"
    comments ||--o{ comment_reactions : has
    users ||--o{ comment_reactions : reacts

    comments {
        uuid id PK
        uuid user_id FK
        enum parent_type
        uuid parent_id
        uuid parent_comment_id FK
        text content
        boolean is_edited
        boolean is_deleted
        json metadata
        timestamp created_at
        timestamp updated_at
    }

    comment_reactions {
        uuid id PK
        uuid comment_id FK
        uuid user_id FK
        enum type
        timestamp created_at
    }
```

## Comment Threading

```mermaid
flowchart TD
    LESSON[Lesson: Greetings] --> C1[Comment 1: Great lesson!]
    LESSON --> C2[Comment 2: How do you pronounce X?]

    C1 --> R1[Reply 1.1: Thanks!]

    C2 --> R2[Reply 2.1: Like this...]
    C2 --> R3[Reply 2.2: Here's audio...]

    R2 --> R4[Reply 2.1.1: Got it!]

    C1 -.- LIKE1[5 likes]
    R2 -.- LIKE2[3 helpful]
```

---

# Domain 9: Audit Log

Track all system changes for compliance and debugging.

## Tables

| Table | Purpose |
|-------|---------|
| `audit_logs` | Immutable log of all changes |

## Entity Relationship Diagram

```mermaid
erDiagram
    users ||--o{ audit_logs : "performed by"

    audit_logs {
        uuid id PK
        uuid user_id FK
        enum action
        string entity_type
        uuid entity_id
        json changes
        string ip_address
        string user_agent
        timestamp created_at
    }
```

## Audit Actions

```mermaid
flowchart LR
    subgraph Actions
        CREATE[create]
        UPDATE[update]
        DELETE[delete]
        LOGIN[login]
        LOGOUT[logout]
    end

    subgraph "Example Log Entry"
        E1["user_id: abc-123"]
        E2["action: update"]
        E3["entity_type: lesson"]
        E4["entity_id: xyz-456"]
        E5["changes: {name: {old: X, new: Y}}"]
    end
```

---

# Complete System Overview

## All Tables by Domain

```mermaid
flowchart TD
    subgraph CONTENT["Content (7 tables)"]
        courses
        modules
        units
        lessons
        activities
        materials
        activity_materials
    end

    subgraph USERS["Users & Auth (3 tables)"]
        users
        invites
        app_settings
    end

    subgraph SUBS["Subscriptions (2 tables)"]
        subscription_plans
        user_subscriptions
    end

    subgraph PROGRESS["Progress (3 tables)"]
        user_progress
        activity_attempts
        user_stats
    end

    subgraph TEACHER["Teacher (4 tables)"]
        classes
        class_students
        content_authors
        assignments
    end

    subgraph NOTIF["Notifications (2 tables)"]
        notifications
        notification_preferences
    end

    subgraph BADGES["Badges (2 tables)"]
        badges
        user_badges
    end

    subgraph COMMENTS["Comments (2 tables)"]
        comments
        comment_reactions
    end

    subgraph AUDIT["Audit (1 table)"]
        audit_logs
    end
```

## Full Entity Relationship Diagram

```mermaid
erDiagram
    %% Content relationships
    courses ||--o{ modules : contains
    modules ||--o{ units : contains
    units ||--o{ lessons : contains
    lessons ||--o{ activities : contains
    activities ||--o{ activity_materials : has
    materials ||--o{ activity_materials : used_in

    %% User relationships
    users ||--o{ invites : invited_by
    users ||--o{ user_subscriptions : has
    subscription_plans ||--o{ user_subscriptions : purchased_as

    %% Progress relationships
    users ||--o{ user_progress : tracks
    users ||--o{ activity_attempts : submits
    users ||--|| user_stats : has

    %% Teacher relationships
    users ||--o{ classes : teaches
    classes ||--o{ class_students : has
    users ||--o{ class_students : enrolled_in
    classes ||--o{ assignments : has
    users ||--o{ content_authors : authored_by

    %% Social relationships
    users ||--o{ notifications : receives
    users ||--|| notification_preferences : has
    users ||--o{ user_badges : earns
    badges ||--o{ user_badges : earned_as
    users ||--o{ comments : posts
    comments ||--o{ comments : replies_to
    comments ||--o{ comment_reactions : has

    %% Audit
    users ||--o{ audit_logs : performed_by

    %% Simplified table definitions
    courses { uuid id PK }
    modules { uuid id PK }
    units { uuid id PK }
    lessons { uuid id PK }
    activities { uuid id PK }
    materials { uuid id PK }
    users { uuid id PK }
    subscription_plans { uuid id PK }
    classes { uuid id PK }
    badges { uuid id PK }
```

## Data Flow Overview

```mermaid
flowchart TD
    subgraph "User Journey"
        SIGNUP[Sign Up] --> AUTH[Authenticate]
        AUTH --> BROWSE[Browse Courses]
        BROWSE --> ACCESS{Has Access?}
        ACCESS -->|Free Unit| LEARN
        ACCESS -->|Subscribed| LEARN
        ACCESS -->|No| SUBSCRIBE[Subscribe]
        SUBSCRIBE --> LEARN[Start Learning]
        LEARN --> PROGRESS[Track Progress]
        PROGRESS --> COMPLETE[Complete Activities]
        COMPLETE --> BADGE[Earn Badges]
        COMPLETE --> DISCUSS[Join Discussion]
    end

    subgraph "Teacher Journey"
        T_LOGIN[Login as Teacher] --> T_CLASS[Create Class]
        T_CLASS --> T_CONTENT[Create Content]
        T_CONTENT --> T_ASSIGN[Create Assignments]
        T_ASSIGN --> T_MONITOR[Monitor Progress]
    end

    subgraph "Admin Journey"
        A_LOGIN[Login as Admin] --> A_USERS[Manage Users]
        A_USERS --> A_CONTENT[Manage All Content]
        A_CONTENT --> A_SUBS[Manage Subscriptions]
        A_SUBS --> A_AUDIT[View Audit Logs]
    end
```

---

# Deployment Configurations

## B2C SaaS (Public Platform)

```mermaid
flowchart LR
    subgraph Config
        C1[signup_mode: public]
        C2[subscriptions_enabled: true]
        C3[All features ON]
    end

    subgraph Users
        U1[Free Users]
        U2[Premium Subscribers]
        U3[Teachers]
        U4[Admins]
    end
```

## B2B Internal LMS

```mermaid
flowchart LR
    subgraph Config
        C1[signup_mode: domain_restricted]
        C2[allowed_domains: @company.com]
        C3[subscriptions_enabled: false]
        C4[All units: is_free = true]
    end

    subgraph Users
        U1[Employees only]
        U2[Trainers as Teachers]
        U3[HR as Admins]
    end
```

## B2B Invite-Only

```mermaid
flowchart LR
    subgraph Config
        C1[signup_mode: invite_only]
        C2[subscriptions_enabled: false]
        C3[Admin sends invites]
    end

    subgraph Users
        U1[Invited Users only]
        U2[No public access]
    end
```

---

# Technical Notes

## Why UUID for Primary Keys?

- Distributed system friendly
- Non-guessable (security)
- Can be generated client-side
- No sequential ID leakage

## Why JSON Metadata Fields?

- Domain flexibility (language learning vs safety training)
- No schema migrations for custom fields
- Easy to extend per deployment

## Indexes Recommendations

```sql
-- Content queries
CREATE INDEX idx_modules_course ON modules(course_id);
CREATE INDEX idx_units_module ON units(module_id);
CREATE INDEX idx_lessons_unit ON lessons(unit_id);
CREATE INDEX idx_activities_lesson ON activities(lesson_id);

-- Progress queries
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_lesson ON user_progress(lesson_id);
CREATE INDEX idx_attempts_user ON activity_attempts(user_id);
CREATE INDEX idx_attempts_activity ON activity_attempts(activity_id);

-- Teacher queries
CREATE INDEX idx_classes_teacher ON classes(teacher_id);
CREATE INDEX idx_class_students_class ON class_students(class_id);
CREATE INDEX idx_class_students_student ON class_students(student_id);

-- Notifications
CREATE INDEX idx_notifications_user_unread ON notifications(user_id) WHERE is_read = false;

-- Audit (for compliance queries)
CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_date ON audit_logs(created_at);
```

---

# Summary

This data model provides:

1. **Flexibility** - Works for any educational domain
2. **Scalability** - Proper indexing, UUID keys, denormalized stats
3. **Configurability** - Features can be enabled/disabled
4. **Compliance** - Full audit logging
5. **Engagement** - Badges, streaks, social features
6. **Monetization** - Optional subscription system

Ready for deployment as:
- B2C SaaS platform
- B2B internal training system
- White-label solution

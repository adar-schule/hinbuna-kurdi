# Complete App Flow

**App:** Hinbuna Kurdi (MVP)
**Target:** Mobile-first (375px base)
**Last Updated:** 2026-02-04

---

## Overview

This document shows the complete navigation flow across all user roles. For detailed screen designs, see the individual flow documents:

| Document | Role | Screens |
|----------|------|---------|
| `01-user-flow.md` | Public + Student | 18 |
| `02-teacher-flow.md` | Teacher (CMS + Monitoring) | 8 |
| `03-admin-flow.md` | Admin | 6 |

---

## Complete Navigation Flow

```
+==============================================================================+
|                              HINBUNA KURDI                                    |
|                         Complete Navigation Flow                              |
+==============================================================================+


================================ PUBLIC FLOW ==================================

[P1] Landing Page
     |
     +---> "Start Free" ---------> [P4] Register ---------> [S1] Student Dashboard
     |
     +---> "Login" --------------> [P3] Login ------------> [S1] Student Dashboard
     |                                  |                        (or T1 if Teacher)
     |                                  |                        (or A1 if Admin)
     |                                  |
     |                                  +---> "Forgot?" --> [P5] Forgot Password
     |                                                           |
     |                                                           v
     |                                                      [P3] Login
     |
     +---> "Pricing" ------------> [P2] Pricing Page
     |                                  |
     |                                  +---> "Get Premium" --> [P4] Register
     |
     +---> "About" --------------> [P6] About Page



============================== STUDENT FLOW ===================================

                              +-------------+
                              |   [S1]      |
                              |  Dashboard  | <----------------------------------+
                              +-------------+                                    |
                                    |                                            |
         +-------------+-----------+-----------+-------------+                   |
         |             |                       |             |                   |
         v             v                       v             v                   |
    "Continue"    "Courses"              "Profile"    [Hamburger]               |
         |             |                       |             |                   |
         |             v                       v             |                   |
         |      +-------------+         +-------------+     |                   |
         |      |   [S2]      |         |   [S9]      |     |                   |
         |      | Course List |         |  Profile    |     |                   |
         |      +-------------+         +-------------+     |                   |
         |             |                       |             |                   |
         |             v                       +---> "Achievements" --> [S11]    |
         |      +-------------+                |                                 |
         |      |   [S3]      |                +---> "Settings" ------> [S10]    |
         |      | Module View |                |                                 |
         |      +-------------+                +---> "Logout" --------> [P1]     |
         |             |                                                         |
         |             v                                                         |
         |      +-------------+                                                  |
         |      |   [S4]      |                                                  |
         |      | Unit View   |                                                  |
         |      +-------------+                                                  |
         |             |                                                         |
         +-------------+                                                         |
                       |                                                         |
                       v                                                         |
                +-------------+                                                  |
                |   [S5]      |                                                  |
                | Lesson View |                                                  |
                +-------------+                                                  |
                       |                                                         |
                       v "Start Lesson"                                          |
                +-------------+                                                  |
                |   [S6]      | <---------+                                      |
                |  Activity   |           |                                      |
                +-------------+           |                                      |
                       |                  |                                      |
                       v "Check"          |                                      |
                +-------------+           |                                      |
                |   [S7]      |           |                                      |
                |   Result    |-----------+ "Next" (loop until last)             |
                +-------------+                                                  |
                       |                                                         |
                       v (last activity)                                         |
                +-------------+                                                  |
                |   [S8]      |                                                  |
                |  Complete   |                                                  |
                +-------------+                                                  |
                       |                                                         |
                       +---> "Next Lesson" ----> [S5]                            |
                       |                                                         |
                       +---> "Back to Unit" ---> [S4]                            |
                       |                                                         |
                       +---> "Home" ---------------------------------------------+



============================== TEACHER FLOW ===================================

                              +-------------+
                              |   [T1]      |
                              |  Dashboard  | <----------------------------------+
                              +-------------+                                    |
                                    |                                            |
         +-------------+-----------+-----------+-------------+                   |
         |             |                       |             |                   |
         v             v                       v             v                   |
   "+ New Lesson" "My Content"          "Students"    [Hamburger]               |
         |             |                       |             |                   |
         |             v                       v             |                   |
         |      +-------------+         +-------------+     +---> [T6] Materials |
         |      |   [T2]      |         |   [T7]      |     |                   |
         |      |Content List |         |  Students   |     +---> [S9] Profile  |
         |      +-------------+         |  Overview   |     |                   |
         |             |                +-------------+     +---> [S10] Settings|
         |             |                       |             |                   |
         |             v                       v             +---> "Logout" -> P1|
         |      +-------------+         +-------------+                          |
         |      |   [T3]      |         |   [T8]      |                          |
         +----> | Unit Editor |         |  Student    |                          |
                +-------------+         |  Detail     |                          |
                       |                +-------------+                          |
                       v                                                         |
                +-------------+                                                  |
                |   [T4]      |                                                  |
                |   Lesson    |                                                  |
                |   Editor    |                                                  |
                +-------------+                                                  |
                       |                                                         |
                       v                                                         |
                +-------------+                                                  |
                |   [T5]      |                                                  |
                |  Activity   |                                                  |
                |   Editor    |                                                  |
                +-------------+                                                  |
                       |                                                         |
                       +---> "Save" --> [T4] or [T2] ----------------------------+



============================== ADMIN FLOW =====================================

                              +-------------+
                              |   [A1]      |
                              |   Admin     | <----------------------------------+
                              |  Dashboard  |                                    |
                              +-------------+                                    |
                                    |                                            |
         +----------+---------------+---------------+----------+                 |
         |          |               |               |          |                 |
         v          v               v               v          v                 |
   "Users"    "Revenue"      "Content"       "Settings"  [Hamburger]            |
         |          |               |               |          |                 |
         v          v               |               v          |                 |
  +-------------+  +-------------+  |        +-------------+   |                 |
  |   [A2]      |  |   [A4]      |  |        |   [A5]      |   |                 |
  |    User     |  | Subscription|  |        |   System    |   |                 |
  | Management  |  | Management  |  |        |  Settings   |   |                 |
  +-------------+  +-------------+  |        +-------------+   |                 |
         |                          |                          |                 |
         v                          v                          |                 |
  +-------------+           +-------------+                    |                 |
  |   [A3]      |           |   [T1]      |                    |                 |
  |    User     |           |  Teacher    | (Admin has full   |                 |
  |   Detail    |           |  Dashboard  |  Teacher access)  |                 |
  +-------------+           +-------------+                    |                 |
         |                          |                          |                 |
         +---> "Edit Role"          +---> [T2] Content List    |                 |
         +---> "Subscription"             (with "Assign"       |                 |
         +---> "Suspend"                   button for Admin)   |                 |
         +---> "Delete"                         |              |                 |
                                                v              |                 |
                                         +-------------+       |                 |
                                         |   [A6]      |       |                 |
                                         |   Assign    |       |                 |
                                         |   Modal     |       |                 |
                                         +-------------+       |                 |
                                                               |                 |
                                                               +-----------------+
```

---

## Learning Core Loop

Shows how Teacher-created content flows to Student experience:

```
     Student sees:                    Teacher creates:

     [S2] Course List                 [T2] Content List
          |                                |
          v                                v
     [S3] Module View                 [T3] Unit Editor
          |                                |
          v                                v
     [S4] Unit View                   [T4] Lesson Editor
          |                                |
          v                                v
     [S5] Lesson View                 [T5] Activity Editor
          |                                |
          v                                |
     [S6] Activity  <----- content --------+
          |
          v
     [S7] Result
          |
          v
     [S8] Complete
```

---

## Screen Count Summary

| Role | P0 | P1 | P2 | Total |
|------|----|----|----| ------|
| Public | 4 | 1 | 1 | 6 |
| Student | 8 | 2 | 2 | 12 |
| Teacher | 5 | 2 | 1 | 8 |
| Admin | 2 | 3 | 1 | 6 |
| **TOTAL** | **19** | **8** | **5** | **32** |

**Priority Legend:**
- P0 = MVP Must Have
- P1 = MVP Nice to Have
- P2 = Post-MVP

---

## Role Access Matrix

| Screen | Student | Teacher | Admin |
|--------|---------|---------|-------|
| P1-P6 Public | - | - | - |
| S1-S12 Student | YES | YES | YES |
| T1-T8 Teacher | - | YES | YES |
| A1-A6 Admin | - | - | YES |

- **Admin** = Full access to everything
- **Teacher** = Student + Teacher screens
- **Student** = Student screens only

---

## All Screens Reference

### Public (6 screens)

| # | Screen | Priority |
|---|--------|----------|
| P1 | Landing Page | P0 |
| P2 | Pricing Page | P0 |
| P3 | Login | P0 |
| P4 | Register | P0 |
| P5 | Forgot Password | P1 |
| P6 | About Page | P2 |

### Student (12 screens)

| # | Screen | Priority |
|---|--------|----------|
| S1 | Dashboard | P0 |
| S2 | Course List | P0 |
| S3 | Module View | P0 |
| S4 | Unit View | P0 |
| S5 | Lesson View | P0 |
| S6 | Activity Screen | P0 |
| S7 | Activity Result | P0 |
| S8 | Lesson Complete | P0 |
| S9 | Profile | P1 |
| S10 | Settings | P1 |
| S11 | Achievements | P2 |
| S12 | Leaderboard | P2 |

### Teacher (8 screens)

| # | Screen | Priority | Focus |
|---|--------|----------|-------|
| T1 | Dashboard | P0 | Content + Student stats |
| T2 | Content List | P0 | Browse all content |
| T3 | Unit Editor | P0 | Create/edit units |
| T4 | Lesson Editor | P0 | Create/edit lessons |
| T5 | Activity Editor | P0 | Create MCQ, flashcards, etc. |
| T6 | Materials Manager | P1 | Images, TTS audio |
| T7 | Students Overview | P1 | All students list |
| T8 | Student Detail | P2 | Individual progress |

### Admin (6 screens)

| # | Screen | Priority |
|---|--------|----------|
| A1 | Admin Dashboard | P0 |
| A2 | User Management | P0 |
| A3 | User Detail | P1 |
| A4 | Subscription Management | P1 |
| A5 | System Settings | P2 |
| A6 | Assign Content (modal) | P1 |

---

## Navigation Pattern

All roles use the same navigation pattern:

```
+---------------------------------------+
|  [Logo] Hinbuna Kurdi           [=]   |  <- Top Header + Hamburger
+---------------------------------------+
```

Hamburger menu content varies by role:
- **Student:** Home, Courses, Profile, Settings, Logout
- **Teacher:** + Content, Materials, Students
- **Admin:** + User Management, Subscriptions, System Settings

---

## Key Design Decisions

| Decision | Choice |
|----------|--------|
| Navigation | Top Header + Hamburger (not bottom nav) |
| Default theme | Dark mode |
| Mobile-first | 375px base width |
| Touch targets | Minimum 44px |
| Multi-teacher | View all, edit assigned only |
| Conflict handling | MVP: Audit log / Post-MVP: Soft locking |
| Admin role | Mamoste Ciwan = Admin + Lead Teacher |

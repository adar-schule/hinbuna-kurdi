# Admin Flow (Mamoste Ciwan Journey)

**App:** Hinbuna Kurdi (MVP)
**Target:** Mobile-first (375px base)
**Last Updated:** 2026-02-04

---

## Big Picture Notes (Always Remember)

> These notes ensure we design with the future in mind, even when building MVP.

### 1. Mobile-First Always
- Design for 375px (iPhone SE) first
- Desktop is responsive expansion, not primary
- Touch targets: min 44px

### 2. Admin = Lead Teacher + System Admin
- Mamoste Ciwan has BOTH roles
- Access to ALL Teacher screens (CMS, Students)
- PLUS Admin-only screens (Users, Subscriptions, Settings)

### 3. Centralized Settings (Expandable)
- System settings separate from user settings
- Feature flags for gradual rollouts
- Multi-tenant ready (for B2B deployments)

### 4. Ecosystem Apps (Future)
```
Hinbuna Kurdi <-> Ferheng (Dictionary) <-> Quiz App (Practice)
       |______________ Shared Admin Panel ________________|
```
- Single admin panel for all apps (future)
- Unified user management across ecosystem

---

## Admin Role

**Who:** Mamoste Ciwan (lead teacher + system admin)

**Permissions:**

| Capability | Admin | Teacher | Student |
|------------|-------|---------|---------|
| Learn content | Yes | Yes | Yes |
| View all content | Yes | Yes | No |
| Edit assigned content | Yes | Yes | No |
| Create new content | Yes | No | No |
| Assign content to teachers | Yes | No | No |
| View all students | Yes | Own only | No |
| Manage users (roles, status) | Yes | No | No |
| Manage subscriptions | Yes | No | No |
| System settings | Yes | No | No |

**Access:** `role: admin` in users table

---

## Navigation (Mobile)

```
+---------------------------------------+
|  [Logo] Hinbuna Kurdi           [=]   |  <- Top Header + Hamburger
+---------------------------------------+

Hamburger Menu (Admin):
+---------------------------------------+
|  X Close                              |
|                                       |
|  CONTENT (same as Teacher)            |
|  [] Dashboard                         |
|  [] My Content                        |
|  [] Materials                         |
|                                       |
|  STUDENTS (same as Teacher)           |
|  [] Students Overview                 |
|                                       |
|  ADMIN                                |
|  [] Admin Dashboard                   |
|  [] User Management                   |
|  [] Subscriptions                     |
|  [] System Settings                   |
|  --------------------------------     |
|  [] My Profile                        |
|  [] Settings                          |
|  [] Help & Support                    |
|  [] Logout                            |
+---------------------------------------+
```

---

## Flow Diagram

```
+-----------------------------------------------------------------------------+
|                         ADMIN (Logged In)                                    |
|                           Mobile: 375px                                      |
+-----------------------------------------------------------------------------+

Note: Admin has access to ALL Teacher screens (T1-T8) for content management.
Below are ADMIN-ONLY screens.


+-----------------------------------------------------------------------------+
|                         ADMIN DASHBOARD                                      |
|                           Mobile: 375px                                      |
+-----------------------------------------------------------------------------+

[A1] Admin Dashboard
    |
    |   +---------------------------------------------+
    |   |  [Logo] Hinbuna Kurdi           [=]        |
    |   |  -----------------------------------------  |
    |   |  Admin Dashboard                           |
    |   |                                            |
    |   |  PLATFORM STATS                            |
    |   |  +---------+---------+---------+           |
    |   |  | 1,247   | 89      | 12      |           |
    |   |  | Users   | Premium | Teachers|           |
    |   |  +---------+---------+---------+           |
    |   |                                            |
    |   |  REVENUE (Monthly)                         |
    |   |  +-------------------------------+         |
    |   |  | EUR 2,340      +18% vs last   |         |
    |   |  | [=========>          ] 78%    |         |
    |   |  | of EUR 3,000 goal             |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  ENGAGEMENT                                |
    |   |  +-------------------------------+         |
    |   |  | Daily Active: 234 (19%)       |         |
    |   |  | Weekly Active: 876 (70%)      |         |
    |   |  | Avg Session: 12 min           |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  RECENT ACTIVITY                           |
    |   |  - 3 new signups today                    |
    |   |  - 2 new premium subscriptions            |
    |   |  - Azad completed A1 course               |
    |   |                                            |
    |   |  Quick Actions                             |
    |   |  [ Manage Users ]  [ View Revenue ]       |
    |   +---------------------------------------------+
    |
    |--> "Manage Users" --> [A2] User Management
    |
    |--> "View Revenue" --> [A4] Subscription Management


+-----------------------------------------------------------------------------+
|                         USER MANAGEMENT                                      |
|                           Mobile: 375px                                      |
+-----------------------------------------------------------------------------+

[A2] User Management
    |
    |   +---------------------------------------------+
    |   |  <- Back         User Management           |
    |   |                                            |
    |   |  1,247 users total                         |
    |   |                                            |
    |   |  Search: [____________________] [Search]   |
    |   |                                            |
    |   |  Filter: [ All Roles v ]  [ All Status v ] |
    |   |  -----------------------------------------  |
    |   |                                            |
    |   |  +-------------------------------+         |
    |   |  | Azad Kurd                     |         |
    |   |  | student | Premium | Active    |         |
    |   |  | azad@email.com    Joined Dec  |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Delal Sin                     |         |
    |   |  | teacher | Free | Active       |         |
    |   |  | delal@email.com   Joined Jan  |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Rona Amed                     |         |
    |   |  | student | Free | Inactive     |  <- warning|
    |   |  | rona@email.com    Joined Nov  |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  ... more users (paginated)               |
    |   |                                            |
    |   |  [ + Invite User ]                         |
    |   +---------------------------------------------+
    |
    |--> Tap User --> [A3] User Detail
    |
    |--> "+ Invite User" --> Invite Modal


[A3] User Detail (Admin View)
    |
    |   +---------------------------------------------+
    |   |  <- Back              User Detail    [...]|
    |   |                                            |
    |   |  +-----+                                   |
    |   |  | AVA |  Azad Kurd                       |
    |   |  +-----+  azad@email.com                  |
    |   |           Joined: Dec 2025                |
    |   |                                            |
    |   |  ACCOUNT                                   |
    |   |  -----------------------------------------  |
    |   |  Role:         [ Student v ]              |
    |   |  Status:       [ Active v ]               |
    |   |  Email verified: Yes                      |
    |   |                                            |
    |   |  SUBSCRIPTION                              |
    |   |  -----------------------------------------  |
    |   |  Plan:         Premium Monthly            |
    |   |  Started:      Jan 15, 2026               |
    |   |  Renews:       Feb 15, 2026               |
    |   |  [ Cancel Subscription ]                  |
    |   |  [ Gift Premium ]                         |
    |   |                                            |
    |   |  LEARNING PROGRESS                         |
    |   |  -----------------------------------------  |
    |   |  Level: 5 | XP: 2,450 | Streak: 23 days  |
    |   |  Course: Kurmanji A1 (95% complete)       |
    |   |  [ View Full Progress ]                   |
    |   |                                            |
    |   |  ACTIONS                                   |
    |   |  -----------------------------------------  |
    |   |  [ Reset Password ]                        |
    |   |  [ Send Notification ]                     |
    |   |  [ Suspend Account ]                       |
    |   |  [ Delete Account ]  <- danger            |
    |   +---------------------------------------------+
    |
    |   [...] Menu:
    |   - Edit Profile
    |   - View Activity Log
    |   - Impersonate User (debug)


+-----------------------------------------------------------------------------+
|                         SUBSCRIPTION MANAGEMENT                              |
|                           Mobile: 375px                                      |
+-----------------------------------------------------------------------------+

[A4] Subscription Management
    |
    |   +---------------------------------------------+
    |   |  <- Back         Subscriptions             |
    |   |                                            |
    |   |  [ Overview ] [ Plans ] [ Transactions ]   |
    |   |  -----------------------------------------  |
    |   |                                            |
    |   |  OVERVIEW                                  |
    |   |  +---------+---------+---------+           |
    |   |  | 89      | EUR     | 94%     |           |
    |   |  | Active  | 2,340   | Retention           |
    |   |  | Subs    | MRR     |         |           |
    |   |  +---------+---------+---------+           |
    |   |                                            |
    |   |  SUBSCRIPTION BREAKDOWN                    |
    |   |  +-------------------------------+         |
    |   |  | Free          1,158 users     |         |
    |   |  | [===============>     ] 93%   |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Premium Monthly  67 users     |         |
    |   |  | [==>                  ] 5%    |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Premium Yearly   18 users     |         |
    |   |  | [>                    ] 1.5%  |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | Lifetime         4 users      |         |
    |   |  | [>                    ] 0.3%  |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  RECENT TRANSACTIONS                       |
    |   |  - Azad: Premium Monthly - EUR 9.99       |
    |   |  - Berin: Premium Yearly - EUR 79.99     |
    |   |  - Delal: Cancelled subscription          |
    |   +---------------------------------------------+
    |
    |--> "Plans" Tab --> Plan Editor
    |
    |--> "Transactions" Tab --> Transaction History


[A4b] Plans Tab (within Subscription Management)
    |
    |   +---------------------------------------------+
    |   |  [ Overview ] [ Plans ] [ Transactions ]   |
    |   |  -----------------------------------------  |
    |   |                                            |
    |   |  SUBSCRIPTION PLANS                        |
    |   |                                            |
    |   |  +-------------------------------+         |
    |   |  | FREE                    [Edit]|         |
    |   |  | EUR 0 | Limited content       |         |
    |   |  | Status: Active               |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | PREMIUM MONTHLY         [Edit]|         |
    |   |  | EUR 9.99/mo | Full access     |         |
    |   |  | Status: Active               |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | PREMIUM YEARLY          [Edit]|         |
    |   |  | EUR 79.99/yr | 33% savings    |         |
    |   |  | Status: Active               |         |
    |   |  +-------------------------------+         |
    |   |  +-------------------------------+         |
    |   |  | LIFETIME               [Edit]|         |
    |   |  | EUR 199 one-time | Forever   |         |
    |   |  | Status: Active               |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  [ + Add Plan ]                            |
    |   +---------------------------------------------+


+-----------------------------------------------------------------------------+
|                         SYSTEM SETTINGS                                      |
|                           Mobile: 375px                                      |
+-----------------------------------------------------------------------------+

[A5] System Settings
    |
    |   +---------------------------------------------+
    |   |  <- Back         System Settings           |
    |   |                                            |
    |   |  GENERAL                                   |
    |   |  -----------------------------------------  |
    |   |  App Name:     [ Hinbuna Kurdi      ]     |
    |   |  Support Email:[ support@hinbuna.com]     |
    |   |  Default Lang: [ German v ]               |
    |   |                                            |
    |   |  REGISTRATION                              |
    |   |  -----------------------------------------  |
    |   |  Allow signup:        [x] Yes             |
    |   |  Email verification:  [x] Required        |
    |   |  Invite-only mode:    [ ] No              |
    |   |                                            |
    |   |  CONTENT                                   |
    |   |  -----------------------------------------  |
    |   |  Default course:      [ Kurmanji A1 v ]   |
    |   |  Free units limit:    [ 2 ]               |
    |   |  Show locked content: [x] Yes             |
    |   |                                            |
    |   |  FEATURES (Feature Flags)                  |
    |   |  -----------------------------------------  |
    |   |  Leaderboard:         [x] Enabled         |
    |   |  Achievements:        [x] Enabled         |
    |   |  Social login:        [ ] Disabled        |
    |   |  TTS audio:           [x] Enabled         |
    |   |  Speaking exercises:  [ ] Disabled (future)|
    |   |                                            |
    |   |  MAINTENANCE                               |
    |   |  -----------------------------------------  |
    |   |  Maintenance mode:    [ ] Off             |
    |   |  Maintenance message: [________________]  |
    |   |                                            |
    |   |  [ Save Changes ]                          |
    |   +---------------------------------------------+


+-----------------------------------------------------------------------------+
|                    TEACHER ASSIGNMENT (Admin Extra)                          |
|                           Mobile: 375px                                      |
+-----------------------------------------------------------------------------+

[A6] Assign Content to Teacher
    |
    |   Note: Accessed from Teacher's Content List (T2)
    |   Admin sees extra "Assign" button on each content item
    |
    |   +---------------------------------------------+
    |   |  Assign Content                      [X]   |
    |   |                                            |
    |   |  Content: Unit 3 - Reng u Danasin         |
    |   |                                            |
    |   |  Assign to:                                |
    |   |  +-------------------------------+         |
    |   |  | [ ] Delal Sin (teacher)       |         |
    |   |  | [ ] Berin Amed (teacher)      |         |
    |   |  | [ ] Rona Kurd (teacher)       |         |
    |   |  +-------------------------------+         |
    |   |                                            |
    |   |  Permission:                               |
    |   |  ( ) Viewer - can view only               |
    |   |  (x) Editor - can edit content            |
    |   |  ( ) Owner - full control                 |
    |   |                                            |
    |   |  [ Cancel ]  [ Assign ]                   |
    |   +---------------------------------------------+
```

---

## Screen Summary

### Admin-Only Screens (5 screens)

| # | Screen | Priority | Description |
|---|--------|----------|-------------|
| A1 | Admin Dashboard | P0 | Platform stats, revenue, engagement |
| A2 | User Management | P0 | User list, search, filter, invite |
| A3 | User Detail | P1 | Edit user, roles, subscription, actions |
| A4 | Subscription Management | P1 | Plans, revenue, transactions |
| A5 | System Settings | P2 | App config, feature flags, maintenance |

### Additional (Modal/Overlay)

| # | Screen | Priority | Description |
|---|--------|----------|-------------|
| A6 | Assign Content | P1 | Assign content to teachers (modal) |

### Total: 5 screens + 1 modal

**Priority breakdown:**
- P0 (MVP): A1, A2 (2 screens)
- P1: A3, A4, A6 (2 screens + 1 modal)
- P2: A5 (1 screen)

---

## Admin also has access to:

All Teacher screens (T1-T8):
- T1. Dashboard
- T2. Content List
- T3. Unit Editor
- T4. Lesson Editor
- T5. Activity Editor
- T6. Materials Manager
- T7. Students Overview
- T8. Student Detail

**Total Admin experience: 13 screens + 1 modal**

---

## Data Model Alignment

Admin screens map directly to existing tables:

| Screen | Tables Used |
|--------|-------------|
| A1 Admin Dashboard | `users`, `user_subscriptions`, `user_stats`, `audit_log` |
| A2 User Management | `users`, `user_subscriptions` |
| A3 User Detail | `users`, `user_subscriptions`, `user_progress`, `audit_log` |
| A4 Subscription Mgmt | `subscription_plans`, `user_subscriptions` |
| A5 System Settings | `app_settings` |
| A6 Assign Content | `content_authors` |

---

## B2B Deployment Considerations

For future boilerplate sales, Admin panel supports:

| Setting | B2C (Hinbuna) | B2B (Corporate) |
|---------|---------------|-----------------|
| Registration | Open signup | Invite-only |
| Email domain | Any | Restricted (e.g., @company.com) |
| Subscriptions | Enabled | Disabled (org pays) |
| Branding | Hinbuna Kurdi | Custom logo/name |
| Content | Kurdish language | Client's content |

System Settings (A5) has toggles for all these modes.

---

## Future Integration Points

1. **Admin Dashboard [A1]**
   - Connect to Stripe for real-time revenue
   - Analytics integration (Mixpanel, Amplitude)

2. **User Management [A2]**
   - Bulk import users (CSV)
   - Export user data (GDPR compliance)

3. **Subscription Management [A4]**
   - Promo codes / discounts
   - Refund management

4. **System Settings [A5]**
   - Multi-tenant configuration
   - SSO settings (future apps)

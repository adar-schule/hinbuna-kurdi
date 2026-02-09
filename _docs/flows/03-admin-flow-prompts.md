# Admin Flow - AI Design Prompts

**Screens:** 6 total (5 screens + 1 modal)
**Mobile:** 375px width, dark mode

---

## ADMIN SCREENS

---

### A1. Admin Dashboard

```
Mobile admin dashboard for Kurdish learning platform.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: App logo, hamburger menu
2. Title: "Admin Dashboard"

3. Platform Stats row (3 boxes):
- 1,247 Users (+12% badge)
- 89 Premium
- 12 Teachers

4. Revenue card:
- "EUR 2,340" large number
- "+18% vs last month"
- Progress bar: 78% of EUR 3,000 goal

5. Engagement card:
- Daily Active: 234 (19%)
- Weekly Active: 876 (70%)
- Avg Session: 12 min

6. Recent Activity list:
- "3 new signups today"
- "2 new premium subscriptions"
- "Azad completed A1 course"

7. Quick Actions:
- [Manage Users] button
- [View Revenue] button

Business metrics focused, scannable.
Mobile: 375px width.
```

---

### A2. User Management

```
Mobile user management screen for admin.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "User Management" title
2. Count: "1,247 users total"
3. Search bar: Text input + search icon
4. Filter row:
- Role: [All Roles v]
- Status: [All Status v]

5. User cards stacked:

Card 1:
- Avatar, "Azad Kurd"
- Role badge: "student"
- Plan badge: "Premium"
- Status: "Active" (green)
- Email: azad@email.com
- "Joined Dec"

Card 2:
- Avatar, "Delal Sin"
- Role: "teacher"
- Plan: "Free"
- Status: "Active"

Card 3 (warning):
- Avatar, "Rona Amed"
- Role: "student"
- Plan: "Free"
- Status: "Inactive" (orange)

6. "+ Invite User" button at bottom

Searchable, filterable user list.
Mobile: 375px width.
```

---

### A3. User Detail (Admin View)

```
Mobile user detail screen for admin with full controls.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "User Detail", [...] menu
2. User card:
- Large avatar
- "Azad Kurd"
- "azad@email.com"
- "Joined: Dec 2025"

3. ACCOUNT section:
- Role: [Student v] dropdown
- Status: [Active v] dropdown
- Email verified: Yes (checkmark)

4. SUBSCRIPTION section:
- Plan: "Premium Monthly"
- Started: Jan 15, 2026
- Renews: Feb 15, 2026
- [Cancel Subscription] button
- [Gift Premium] button

5. LEARNING PROGRESS section:
- Level 5 | 2,450 XP | 23 day streak
- Course: Kurmanji A1 (95% complete)
- [View Full Progress] link

6. ACTIONS section:
- [Reset Password] button
- [Send Notification] button
- [Suspend Account] button (warning)
- [Delete Account] button (danger/red)

Full admin control over user account.
Mobile: 375px width.
```

---

### A4. Subscription Management

```
Mobile subscription management screen.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "Subscriptions" title
2. Tab bar: Overview | Plans | Transactions

OVERVIEW TAB:
3. Stats row (3 boxes):
- 89 Active Subs
- EUR 2,340 MRR
- 94% Retention

4. Subscription Breakdown:

Free:
- "1,158 users"
- Progress bar: 93%

Premium Monthly:
- "67 users"
- Progress bar: 5%

Premium Yearly:
- "18 users"
- Progress bar: 1.5%

Lifetime:
- "4 users"
- Progress bar: 0.3%

5. Recent Transactions list:
- "Azad: Premium Monthly - EUR 9.99"
- "Berin: Premium Yearly - EUR 79.99"
- "Delal: Cancelled subscription"

Revenue and subscription analytics.
Mobile: 375px width.
```

---

### A4b. Plans Tab

```
Mobile subscription plans management.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Tab bar: Overview | Plans (active) | Transactions
2. Section header: "SUBSCRIPTION PLANS"

3. Plan cards:

FREE:
- "EUR 0"
- "Limited content"
- Status: Active (green)
- [Edit] button

PREMIUM MONTHLY:
- "EUR 9.99/mo"
- "Full access"
- Status: Active
- [Edit] button

PREMIUM YEARLY:
- "EUR 79.99/yr"
- "33% savings"
- Status: Active
- [Edit] button

LIFETIME:
- "EUR 199 one-time"
- "Forever access"
- Status: Active
- [Edit] button

4. "+ Add Plan" button at bottom

Plan management interface.
Mobile: 375px width.
```

---

### A5. System Settings

```
Mobile system settings screen for admin.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Header: Back arrow, "System Settings" title

2. GENERAL section:
- App Name: Input [Hinbuna Kurdi]
- Support Email: Input [support@hinbuna.com]
- Default Language: [German v]

3. REGISTRATION section:
- Allow signup: Toggle [ON]
- Email verification: Toggle [ON]
- Invite-only mode: Toggle [OFF]

4. CONTENT section:
- Default course: [Kurmanji A1 v]
- Free units limit: Input [2]
- Show locked content: Toggle [ON]

5. FEATURES section:
- Leaderboard: Toggle [ON]
- Achievements: Toggle [ON]
- Social login: Toggle [OFF]
- TTS audio: Toggle [ON]
- Speaking exercises: Toggle [OFF] (future)

6. MAINTENANCE section:
- Maintenance mode: Toggle [OFF]
- Maintenance message: Text input

7. [Save Changes] primary button at bottom

Feature flags and app configuration.
Mobile: 375px width.
```

---

### A6. Assign Content (Modal)

```
Mobile modal for assigning content to teachers.
Dark mode, [YOUR CHOSEN COLORS].

Layout:
1. Modal header: "Assign Content", X close button
2. Content info:
- "Unit 3: Reng u Danasin"

3. "Assign to:" label
4. Teacher checkboxes:
- [ ] Delal Sin (teacher)
- [ ] Berin Amed (teacher)
- [ ] Rona Kurd (teacher)

5. "Permission:" label
6. Radio options:
- ( ) Viewer - can view only
- (x) Editor - can edit content
- ( ) Owner - full control

7. Button row:
- [Cancel] secondary
- [Assign] primary

Clean modal overlay with clear options.
Modal width: ~90% of screen, centered.
```

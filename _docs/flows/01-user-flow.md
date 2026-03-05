# User Flow (Student Journey)

> **Doc:** F1 · **Status:** Active · **Updated:** 2026-03-01

---

## Big Picture Notes (Always Remember)

> These notes ensure we design with the future in mind, even when building MVP.

### 1. Mobile-First Always
- Design for 375px (iPhone SE) first
- Desktop is responsive expansion, not primary
- Touch targets: min 44px
- Thumb-friendly navigation

### 2. Centralized Settings (Expandable)
- Settings architecture must support future expansion
- Categories: Account, Preferences, Learning, Accessibility, Subscriptions, Connected Apps, Privacy
- Same settings sync across all future apps (SSO)

### 3. AI/TTS Heavy Activities
- Every vocabulary item = audio pronunciation
- Activity types: Listening, Speaking (future), Dictation
- Audio controls: Play, Replay, Speed (0.75x, 1x, 1.25x)
- kurdishtts.com API integration

### 4. Ecosystem Apps (Future)
```
Hinbûna Kurdî ←→ Ferheng (Dictionary) ←→ Quiz App (Practice)
       └──────────── SSO + Shared Vocabulary ────────────┘
```
- Vocabulary learned in Hinbûna → auto-saved to Ferheng
- "View in Ferheng" links (placeholder for now)
- Consistent branding across apps

---

## Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           PUBLIC (Not Logged In)                            │
│                              Mobile: 375px                                  │
└─────────────────────────────────────────────────────────────────────────────┘

[P1] Landing Page
    │
    ├──→ "Start Free" ──→ [P4] Register ──→ [S1] Dashboard
    │
    ├──→ "Login" ──→ [P3] Login ──→ [S1] Dashboard
    │                    │
    │                    └──→ "Forgot?" ──→ [P5] Forgot Password ──→ [P3] Login
    │
    ├──→ "Pricing" ──→ [P2] Pricing Page
    │                    │
    │                    └──→ "Get Premium" ──→ [P4] Register (or checkout)
    │
    └──→ "About" ──→ [P6] About Page


┌─────────────────────────────────────────────────────────────────────────────┐
│                         STUDENT (Logged In) - Main Loop                     │
│                              Mobile: 375px                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                         NAVIGATION (Mobile)                                 │
│                                                                             │
│   Top Header + Hamburger (→ see 08-design-decisions.md for full spec)      │
│   ┌─────────────────────────────────────────┐                              │
│   │  [Logo] Hinbûna Kurdî           [☰]    │                              │
│   └─────────────────────────────────────────┘                              │
│                                                                             │
│   Hamburger Menu:                                                          │
│   ┌─────────────────────────────────────────┐                              │
│   │  ✕ Close                               │                              │
│   │  🏠 Home (Dashboard)                    │                              │
│   │  📚 Courses                             │                              │
│   │  👤 Profile                             │                              │
│   │  ⚙️ Settings                            │                              │
│   │  ────────────────────                   │                              │
│   │  💎 Upgrade to Premium                  │                              │
│   │  ❓ Help & Support                      │                              │
│   │  🚪 Logout                              │                              │
│   └─────────────────────────────────────────┘                              │
│                                                                             │
│   No bottom nav bar. Desktop uses top header with inline links.            │
└─────────────────────────────────────────────────────────────────────────────┘


[S1] Dashboard (Home)
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  [Logo] Hinbûna Kurdî           [☰]        │
    │   │  ─────────────────────────────────────     │
    │   │  Continue Learning card (last lesson)      │
    │   │  Daily Goal ring (3/5 today)               │
    │   │  Stats: Level, Streak days, Lessons done   │
    │   │  Quick Actions: Practice, Review, Vocab    │
    │   │  Recent Activity feed                      │
    │   └─────────────────────────────────────────────┘
    │
    ├──→ "Continue Learning" ──→ [S5] Lesson View
    │
    ├──→ "Courses" (menu) ──→ [S2] Course List
    │
    └──→ "Profile" (menu) ──→ [S9] Profile


┌─────────────────────────────────────────────────────────────────────────────┐
│                         LEARNING FLOW (Core Loop)                           │
│                              Mobile: 375px                                  │
└─────────────────────────────────────────────────────────────────────────────┘

[S2] Course List
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  "Courses" title                           │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │ Kurmanji A1          35% ████░░ │       │
    │   │  │ 8 units • multiple lessons      │       │
    │   │  └─────────────────────────────────┘       │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │ Kurmanji A2          🔒 Locked │       │
    │   │  │ Complete A1 to unlock          │       │
    │   │  └─────────────────────────────────┘       │
    │   └─────────────────────────────────────────────┘
    │
    └──→ Tap Course ──→ [S3] Module View

[S3] Module View
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ← Back    "Kurmanji A1"                   │
    │   │  Progress: 35% ████████░░░░░░░░░░░         │
    │   │                                            │
    │   │  Unit 1: Silav û Nasîn        ✓ Done      │
    │   │  (Greetings & Introductions)              │
    │   │                                            │
    │   │  Unit 2: Cînav û Bûn          🔓 Current  │
    │   │  (Pronouns & To Be)                       │
    │   │                                            │
    │   │  Unit 3: Reng û Danasîn       🔒 Locked   │
    │   │  (Colors & Descriptions)                  │
    │   └─────────────────────────────────────────────┘
    │
    └──→ Tap Unit ──→ [S4] Unit View

[S4] Unit View
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ← Back    "Silav û Nasîn"                 │
    │   │  Unit 1 • 4 lessons                        │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │ 1. Silav!              ✓ +50 XP│       │
    │   │  │    Hello & Goodbye             │       │
    │   │  └─────────────────────────────────┘       │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │ 2. Tu çawa yî?         🔓      │       │
    │   │  │    How are you?                │       │
    │   │  └─────────────────────────────────┘       │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │ 3. Ez... im            🔒      │       │
    │   │  │    I am...                     │       │
    │   │  └─────────────────────────────────┘       │
    │   └─────────────────────────────────────────────┘
    │
    └──→ Tap Lesson ──→ [S5] Lesson View

[S5] Lesson View
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ← Back                          X Close   │
    │   │                                            │
    │   │  Lesson 2                                  │
    │   │  ╔═══════════════════════════════════════╗ │
    │   │  ║         Tu çawa yî?                   ║ │
    │   │  ║         How are you?                  ║ │
    │   │  ╚═══════════════════════════════════════╝ │
    │   │                                            │
    │   │  Learning objective:                       │
    │   │  Ask and answer "how are you" in Kurdish  │
    │   │                                            │
    │   │  8 activities • ~5 min                    │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │        Start Lesson            │       │
    │   │  └─────────────────────────────────┘       │
    │   └─────────────────────────────────────────────┘
    │
    └──→ "Start Lesson" ──→ [S6] Activity Screen


┌─────────────────────────────────────────────────────────────────────────────┐
│                    ACTIVITY LOOP (Inside Lesson)                            │
│                         Mobile: 375px                                       │
│                                                                             │
│   NOTE: Heavy TTS usage - every word has audio, listening exercises,        │
│         audio speed controls. Design for audio-first interaction.           │
└─────────────────────────────────────────────────────────────────────────────┘

[S6] Activity Screen ←──────────────────────────────┐
    │                                                │
    │   ┌─────────────────────────────────────────────┐
    │   │  ████████░░░░░░░░░░░░  3/8      X Close   │
    │   │                                            │
    │   │  What does this mean?                      │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │    🔊  "Spas"                  │       │
    │   │  │         (tap to hear)          │       │
    │   │  └─────────────────────────────────┘       │
    │   │                                            │
    │   │  ○ Hello                                  │
    │   │  ○ Thank you          ← selected         │
    │   │  ○ Goodbye                               │
    │   │  ○ Please                                │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │           Check                │       │
    │   │  └─────────────────────────────────┘       │
    │   │                                            │
    │   │  Audio: 🔊 0.75x | 1x | 1.25x             │
    │   └─────────────────────────────────────────────┘
    │                                                │
    │   Activity Types (all with TTS):              │
    │   • MCQ (multiple choice)                     │
    │   • Gap Fill (type missing word)             │
    │   • Matching (pairs)                         │
    │   • Word Order (arrange sentence)            │
    │   • Listening (what did you hear?)           │
    │   • Flashcard (reveal meaning)               │
    │   • Dictation (write what you hear)          │
    │   • Speaking (future: record & compare)      │
    │                                                │
    └──→ Submit Answer ──→ [S7] Activity Result      │
                              │                      │
                              ├──→ "Next" ───────────┘ (loop)
                              │
                              └──→ (last) ──→ [S8] Lesson Complete

[S7] Activity Result (inline, same screen)
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ████████░░░░░░░░░░░░  3/8      X Close   │
    │   │                                            │
    │   │  ✓ Correct!              +10 XP           │
    │   │  ─────────────────────────────────────     │
    │   │                                            │
    │   │  🔊  "Spas" = Thank you                   │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │         Continue               │       │
    │   │  └─────────────────────────────────┘       │
    │   └─────────────────────────────────────────────┘
    │
    │   OR if wrong:
    │   ┌─────────────────────────────────────────────┐
    │   │  ✗ Not quite                              │
    │   │  ─────────────────────────────────────     │
    │   │  Correct answer: Thank you                │
    │   │  You said: Hello                          │
    │   │                                            │
    │   │  🔊  "Spas" = Thank you                   │
    │   └─────────────────────────────────────────────┘

[S8] Lesson Complete
    │
    │   ┌─────────────────────────────────────────────┐
    │   │                                            │
    │   │           🎉                               │
    │   │       Pîroz be!                           │
    │   │    (Congratulations!)                     │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │  +50 XP        87% Accuracy    │       │
    │   │  └─────────────────────────────────┘       │
    │   │                                            │
    │   │  Words learned:                           │
    │   │  spas, çawa, baş, ez, tu                  │
    │   │  [Future: "View in Ferheng" link]        │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │       Next Lesson              │       │
    │   │  └─────────────────────────────────┘       │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │       Back to Unit             │       │
    │   │  └─────────────────────────────────┘       │
    │   └─────────────────────────────────────────────┘
    │
    ├──→ "Next Lesson" ──→ [S5] Lesson View (next)
    │
    └──→ "Back to Unit" ──→ [S4] Unit View


┌─────────────────────────────────────────────────────────────────────────────┐
│                         PROFILE & SETTINGS                                  │
│                           Mobile: 375px                                     │
│                                                                             │
│   NOTE: Settings must be expandable for future apps (SSO sync).             │
│         Design categories that can grow.                                    │
└─────────────────────────────────────────────────────────────────────────────┘

[S9] Profile
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ┌─────┐                                   │
    │   │  │ AVA │  Azad Kurd                       │
    │   │  └─────┘  Level 4 • 1,250 XP              │
    │   │                                            │
    │   │  ┌─────────┬─────────┬─────────┐          │
    │   │  │ 23 days │ 45      │ 87%     │          │
    │   │  │ streak  │ lessons │ accuracy│          │
    │   │  └─────────┴─────────┴─────────┘          │
    │   │                                            │
    │   │  ▸ Achievements              12/30        │
    │   │  ▸ Settings                  →            │
    │   │  ▸ Subscription              Premium      │
    │   │  ▸ Help & Support            →            │
    │   │                                            │
    │   │  [Future: "My Vocabulary" → Ferheng]     │
    │   │                                            │
    │   │  ┌─────────────────────────────────┐       │
    │   │  │          Log Out               │       │
    │   │  └─────────────────────────────────┘       │
    │   └─────────────────────────────────────────────┘
    │
    ├──→ "Achievements" ──→ [S11] Achievements
    │
    └──→ "Settings" ──→ [S10] Settings

[S10] Settings (Expandable Architecture)
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ← Back         Settings                   │
    │   │                                            │
    │   │  ACCOUNT                                   │
    │   │  ▸ Edit Profile          name, avatar     │
    │   │  ▸ Email & Password      ••••@mail.com    │
    │   │                                            │
    │   │  PREFERENCES                               │
    │   │  ▸ App Language          Deutsch 🇩🇪       │
    │   │  ▸ Theme                 Dark 🌙          │
    │   │  ▸ Notifications         On              │
    │   │                                            │
    │   │  LEARNING                                  │
    │   │  ▸ Daily Goal            5 lessons        │
    │   │  ▸ Audio Speed           1x              │
    │   │  ▸ Auto-play Audio       On              │
    │   │                                            │
    │   │  ACCESSIBILITY                             │
    │   │  ▸ Font Size             Medium          │
    │   │  ▸ High Contrast         Off             │
    │   │  ▸ Reduce Motion         Off             │
    │   │                                            │
    │   │  SUBSCRIPTION                              │
    │   │  ▸ Manage Plan           Premium         │
    │   │  ▸ Payment Methods       →               │
    │   │                                            │
    │   │  [Future: CONNECTED APPS]                 │
    │   │  [▸ Ferheng              Linked]         │
    │   │  [▸ Quiz App             Linked]         │
    │   │                                            │
    │   │  DATA & PRIVACY                           │
    │   │  ▸ Export My Data        →               │
    │   │  ▸ Delete Account        →               │
    │   └─────────────────────────────────────────────┘

[S11] Achievements
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ← Back      Achievements     12/30       │
    │   │                                            │
    │   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐         │
    │   │  │ 🎯 │ │ 🔥 │ │ 📚 │ │ 🌟 │         │
    │   │  │First│ │ 7   │ │ 10  │ │100% │         │
    │   │  │Lesson│ │Day  │ │Less.│ │Acc. │         │
    │   │  └─────┘ └─────┘ └─────┘ └─────┘         │
    │   │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐         │
    │   │  │ 🔒 │ │ 🔒 │ │ 🔒 │ │ 🔒 │         │
    │   │  │ 30  │ │ 50  │ │Unit │ │A1   │         │
    │   │  │Day  │ │Less.│ │Done │ │Done │         │
    │   │  └─────┘ └─────┘ └─────┘ └─────┘         │
    │   └─────────────────────────────────────────────┘

[S12] Leaderboard (P2 - Optional for MVP)
    │
    │   ┌─────────────────────────────────────────────┐
    │   │  ← Back       Leaderboard                  │
    │   │                                            │
    │   │  [ Weekly ] [ Monthly ]                    │
    │   │                                            │
    │   │  🥇 1. Delal        2,450 XP              │
    │   │  🥈 2. Azad         2,120 XP              │
    │   │  🥉 3. Bêrîvan      1,890 XP              │
    │   │     4. Rona         1,650 XP              │
    │   │     5. Alan         1,420 XP              │
    │   │     ...                                    │
    │   │  ─────────────────────────────────────     │
    │   │  👤 12. You         1,250 XP              │
    │   └─────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────────────┐
│                              SCREEN SUMMARY                                 │
└─────────────────────────────────────────────────────────────────────────────┘

PUBLIC (6 screens):
  P1. Landing Page          - Hero, features, CTA, pricing preview
  P2. Pricing Page          - Free / Premium / Lifetime comparison
  P3. Login                 - Email, password, social, forgot link
  P4. Register              - Name, email, password, language select
  P5. Forgot Password       - Email input, reset flow
  P6. About Page            - Mission, team, Kurdish language info

STUDENT (12 screens):
  S1.  Dashboard            - Progress, continue, streak, activity
  S2.  Course List          - Available courses with progress
  S3.  Module View          - Units in course, locked/unlocked
  S4.  Unit View            - Lessons in unit, XP earned
  S5.  Lesson View          - Intro, objective, start button
  S6.  Activity Screen      - Quiz/exercise with TTS audio
  S7.  Activity Result      - Correct/wrong feedback, XP
  S8.  Lesson Complete      - Summary, words learned, next
  S9.  Profile              - Stats, achievements, settings link
  S10. Settings             - Expandable categories (7 sections)
  S11. Achievements         - Badge grid, earned/locked
  S12. Leaderboard          - Weekly/monthly rankings (P2)

TOTAL: 18 screens (6 Public + 12 Student)


┌─────────────────────────────────────────────────────────────────────────────┐
│                         FUTURE INTEGRATION POINTS                           │
│                    (Placeholder - not MVP, but design-ready)                │
└─────────────────────────────────────────────────────────────────────────────┘

1. Lesson Complete [S8]
   → "View learned words in Ferheng" button (links to Dictionary app)

2. Profile [S9]
   → "My Vocabulary" link (opens Ferheng with user's word list)

3. Settings [S10]
   → "Connected Apps" section (Ferheng, Quiz App status)

4. Dashboard [S1]
   → "Practice Vocabulary" quick action (opens Quiz App)

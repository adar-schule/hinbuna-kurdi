# Session: Public Pages — English as Default Language

- **Created:** 2026-03-07
- **Updated:** 2026-03-07
- **Status:** done
- **Type:** ticket
- **Priority:** high
- **User:** Armanc

## Goal

Public pages use English as the default UI language. Kurdish appears only as learning content (words, sentences, exercises), not as interface text.

## Language Rules (confirmed)

1. **UI language = English by default** — all buttons, labels, navigation, headings, descriptions
2. **Kurdish = learning content only** — lesson words, example sentences, exercise prompts, audio
3. **Public pages are fully English** — no Kurdish in interface (Landing, Pricing, About, etc.)
4. **Student pages** — English UI + Kurdish learning material mixed in exercises/lessons
5. **Future:** UI translation (Kurdish, German, etc.) is a separate multi-lang feature, not MVP
6. **Brand name "Hinbûna Kurdî" stays as-is** — it's a brand name, not UI text

## Audit Completed

Full audit done — ~160+ Kurdish UI text instances found across 12 files.

## Tasks — Shared Files

- [x] `shared/header.js` — 1 instance: "Têkeve" → "Sign In"
- [x] `shared/footer.js` — 6 instances: tagline, nav links, tooltip
- [x] `shared/theme.js` — 2 instances: app switcher title "Ekosîstem" → "Ecosystem", badge "Nîzîk e" → "Coming Soon"
- [x] `shared/ecosystem-apps.js` — 11 instances: all app taglines to English

## Tasks — Pages (by instance count)

- [x] `P6-about.html` — ~60+ instances (heaviest: entire legal, mission, team, ecosystem, contact sections)
- [x] `P1-landing.html` — 25 instances (hero slides, CTAs, feature cards, pricing section)
- [x] `P4-register.html` — 19 instances (form labels, placeholders, password strength hints)
- [x] `P2-pricing.html` — 12 instances (plan names, buttons, FAQ heading, feature table)
- [x] `P3-login.html` — 12 instances (form labels, headings, links)
- [x] `P5-forgot-password.html` — 11 instances (headings, form, success state)
- [x] `P7-products.html` — 3 instances (page heading, CTA)
- [x] `P8-support.html` — 1 instance (page title only)

## Translation Reference

### shared/header.js
| Kurdish | English | Used For |
|---------|---------|----------|
| Têkeve | Sign In | Login button |

### shared/footer.js
| Kurdish | English | Used For |
|---------|---------|----------|
| Fêrbûna zimanê kurdî | Learn Kurdish | Tagline |
| Derbarê | About | Nav link |
| Polîtîkaya Nihênîyê | Privacy Policy | Nav link |
| Şert û Mercan | Terms & Conditions | Nav link |
| Têkilî | Contact | Nav link |
| Mîheng | Settings | Gear tooltip |

### shared/theme.js
| Kurdish | English | Used For |
|---------|---------|----------|
| Ekosîstem | Ecosystem | App switcher title |
| Nîzîk e | Coming Soon | Badge |

### shared/ecosystem-apps.js
| Kurdish | English | Used For |
|---------|---------|----------|
| Fêrbûna zimanê kurdî | Learn Kurdish | Hinbuna Kurdi tagline |
| Asta xwe bizane | Find your level | Ezmuna tagline |
| Ferhenga kurdî | Kurdish dictionary | Ferheng tagline |
| Çîrokên kurt bi kurdî | Short stories in Kurdish | Cirok tagline |
| Lêxistin û pêşketin | Play and progress | Listik tagline |
| Dataseta zimanê kurdî | Kurdish language dataset | Korpus tagline |
| Dengê zimanê kurdî | Kurdish text-to-speech | TTS tagline |
| Civata fêrbûnê | Learning community | Civat tagline |
| Belgeyên CEFR | CEFR certificates | Belge tagline |
| Zanîna kurdî | Kurdish knowledge | Kurdinama tagline |
| Hevalê te yê AI | Your AI companion | Heval AI tagline |

### P1-landing.html (25 items)
| Kurdish | English | Used For |
|---------|---------|----------|
| Fêrbûna zimanê kurdî bi rêbazên nûjen | Learn Kurdish with modern methods | Page title |
| Fêrbûna zimanê kurdî — bi rêbazên nûjen | Learn Kurdish — with modern methods | Hero heading |
| Dest pê bike — Bêlaş e | Get Started — It's Free | Primary CTA |
| Hemû planan bibîne | See all plans | Link text (×4) |
| Hemû amûran bibîne | See all tools | CTA button |
| Yek hesab — hemû app | One account — all apps | Hero heading slide 3 |
| Hesabê xwe çêke | Create your account | CTA slide 3 |
| Bi AI — ji bo te taybet | With AI — personalized for you | Hero heading slide 4 |
| Çima Hinbûna Kurdî? | Why Hinbuna Kurdi? | Section heading |
| Dersên Birêkûpêk | Structured Lessons | Feature card |
| Hînbûna bi AI | AI-Powered Learning | Feature card |
| Dengê Zimanî (AI TTS) | Native Audio (AI TTS) | Feature card |
| Pêşketina Te | Your Progress | Feature card |
| Planekê hilbijêre | Choose a plan | Pricing heading |
| Bêlaş | Free | Plan name |
| Dest pê bike, bê drav | Get started, no charge | Pricing desc |
| Dest pê bike | Get Started | Free plan button |
| Hemû taybetmendî, bê sînor | All features, unlimited | Premium desc |
| Premium bibe | Go Premium | Premium CTA |
| Îro dest pê bike | Get started today | Final CTA heading |
| Bêlaş dest pê bike | Start for free | Final CTA button |

### P3-login.html (12 items)
| Kurdish | English | Used For |
|---------|---------|----------|
| Têkeve | Sign In | Page title + submit button |
| Bi xêr hatî! | Welcome back! | Heading |
| Têkeve hesabê xwe yê Hinbûna Kurdî | Sign in to your Hinbuna Kurdi account | Subheading |
| E-name | Email | Input label |
| Şîfre | Password | Input label |
| Şîfreya xwe binivîse | Enter your password | Placeholder |
| Şîfre ji bîr kir? | Forgot password? | Link |
| an jî | or | Divider |
| Hesabê te tune? | Don't have an account? | Footer text |
| Hesabek çêke | Create an account | Register link |
| Wek Mamoste têkeve | Sign in as Teacher | Teacher demo link |

### P4-register.html (19 items)
| Kurdish | English | Used For |
|---------|---------|----------|
| Hesabek Çêke | Create Account | Page title |
| Destpêke! | Get Started! | Heading |
| Hesabek nû li Hinbûna Kurdî çêke | Create a new Hinbuna Kurdi account | Subheading |
| Nav û paşnav | Full name | Label |
| Navê xwe binivîse | Enter your name | Placeholder |
| E-name | Email | Label |
| Şîfre | Password | Label |
| Şîfreyekê hilbijêre | Choose a password | Placeholder |
| Şîfre dubare | Confirm password | Label |
| Şîfreyê dubare binivîse | Re-enter your password | Placeholder |
| Zimanê piştgiriyê | Support language | Label |
| Zimanekî hilbijêre | Choose a language | Select placeholder |
| Ez bi şert û mercan... razîme | I agree to the Terms & Conditions and Privacy Policy | Checkbox |
| Hesabek çêke | Create Account | Submit button |
| an jî | or | Divider |
| Hesabê te heye? | Already have an account? | Footer |
| Têkeve | Sign In | Login link |
| Qels — herî kêm 8 tîp... | Weak — at least 8 characters... | Password hint |
| Navîn — sembol... | Medium — add symbols... | Password hint |
| Xurt — şîfreya te baş e! | Strong — your password is good! | Password hint |

### P5-forgot-password.html (11 items)
| Kurdish | English | Used For |
|---------|---------|----------|
| Şîfreya nû | Reset Password | Page title |
| Şîfreya xwe ji bîr kirî? | Forgot your password? | Heading |
| E-nameya xwe binivîse... | Enter your email... | Subheading |
| E-name | Email | Label |
| Lînkê bişîne | Send Reset Link | Button |
| Vegere têketinê | Back to Sign In | Link (×2) |
| E-name hat şandin! | Email sent! | Success heading |
| Lînka nûkirinê li e-nameya te ye... | The reset link is in your email... | Success text |
| E-name nebû? Li spam/junk binêre an jî | Didn't receive it? Check spam/junk or | Note |
| dîsa bişîne | resend | Link |

### P2-pricing.html (12 items)
| Kurdish | English | Used For |
|---------|---------|----------|
| Bihayê Planan | Pricing Plans | Page title |
| Planekê hilbijêre | Choose a plan | Heading |
| Bêlaş | Free | Plan name + column header |
| Dest pê bike, bê drav | Get started, no charge | Desc |
| Dest pê bike | Get Started | Button (×2) |
| Hemû taybetmendî, bê sînor | All features, unlimited | Desc |
| Premium bibe | Go Premium | Button |
| Hemû taybetmendî | All features | Comparison heading |
| Pirsên hevpar | Frequently Asked Questions | FAQ heading |
| Îro dest pê bike — Bêlaş e | Get started today — It's Free | CTA heading |

### P7-products.html (3 items)
| Kurdish | English | Used For |
|---------|---------|----------|
| Ekosistem | Ecosystem | Page title |
| Ekosîstema Hinbûna Kurdî | The Hinbuna Kurdi Ecosystem | Heading |
| Hesabê xwe çêke — Bêlaş e | Create your account — It's Free | CTA |

### P8-support.html (1 item)
| Kurdish | English | Used For |
|---------|---------|----------|
| Piştgirî & Veberhênan | Support & Invest | Page title |

### P6-about.html (~60+ items)
Heaviest file. Entire sections in Kurdish: mission, how-it-works, features, team descriptions, ecosystem cards, privacy policy, terms & conditions, contact form. Too many to list individually — full page translation needed.

## Decisions

- Language rules confirmed by Armanc
- Audit completed via background agent
- Brand name "Hinbûna Kurdî" stays Kurdish
- App names (Ezmuna, Ferheng, etc.) stay Kurdish — taglines become English

## Progress Log

| Date | Action |
|------|--------|
| 2026-03-07 | Audit completed — ~160+ instances across 12 files |
| 2026-03-07 | All 12 files translated — ~160+ instances Kurdish→English |

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { ThemeControls } from '../components/ThemeControls'

export function HomePage() {
  const { colors, activeFont } = useTheme()
  const [appsOpen, setAppsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const font = activeFont.family

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.bg, fontFamily: font }}>
      {/* Theme Controls - Floating */}
      <div className="p-4">
        <ThemeControls />
      </div>

      {/* Header */}
      <header
        className="flex items-center justify-between px-6 py-4 flex-wrap gap-3"
        style={{ backgroundColor: colors.card, borderBottom: `1px solid ${colors.border}` }}
      >
        <Link to="/" className="font-bold text-xl" style={{ color: colors.text, textDecoration: 'none' }}>
          Hinbuna Kurdî
        </Link>

        <nav className="flex items-center gap-2">
          {/* Courses */}
          <a
            href="#"
            className="p-2 rounded-lg hover:opacity-80"
            style={{ color: colors.muted }}
            title="Courses"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </a>

          {/* Login */}
          <a
            href="#"
            className="p-2 rounded-lg hover:opacity-80"
            style={{ color: colors.muted }}
            title="Login"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>

          {/* Apps Dropdown */}
          <div className="relative">
            <button
              onClick={() => { setAppsOpen(!appsOpen); setLangOpen(false) }}
              className="p-2 rounded-lg hover:opacity-80"
              style={{ color: colors.muted }}
              title="Apps"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            {appsOpen && (
              <div
                className="absolute right-0 top-12 w-72 p-4 rounded-xl shadow-xl grid grid-cols-2 gap-4 z-50"
                style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
              >
                {[
                  { icon: '📖', name: 'Dictionary' },
                  { icon: '📚', name: 'Short Stories' },
                  { icon: '📊', name: 'Grammar Exercises' },
                  { icon: '🧩', name: 'Grammar Puzzles' },
                  { icon: '🔊', name: 'TTS' },
                  { icon: '💡', name: 'More...' },
                ].map((app, i) => (
                  <div key={i} className="text-center p-2 rounded-lg cursor-pointer hover:opacity-80" style={{ backgroundColor: colors.secondary }}>
                    <div className="text-2xl mb-1">{app.icon}</div>
                    <div className="text-xs font-medium" style={{ color: colors.text }}>{app.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => { setLangOpen(!langOpen); setAppsOpen(false) }}
              className="p-2 rounded-lg hover:opacity-80"
              style={{ color: colors.muted }}
              title="Language"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-12 w-20 rounded-xl shadow-xl overflow-hidden z-50"
                style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
              >
                {['🇩🇪 DE', '🇬🇧 EN', '🇫🇷 FR', '🇸🇪 SV', '🇳🇱 NL', '🇹🇷 TR'].map((lang, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 text-sm cursor-pointer hover:opacity-80"
                    style={{ color: colors.text, backgroundColor: i === 0 ? colors.secondary : 'transparent' }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* About */}
          <a
            href="#"
            className="p-2 rounded-lg hover:opacity-80"
            style={{ color: colors.muted }}
            title="About"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-12">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: colors.text }}>
          Kurdî Hînbibe – Bi Awayekî Asan
        </h1>
        <p className="text-lg text-center max-w-2xl mb-8" style={{ color: colors.muted }}>
          Bi dersên kurt û pratîk, ji A1 heta B1 Kurmancî fêr bibe. Roj bi roj pêşve biçe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white text-lg"
            style={{ backgroundColor: colors.primary }}
          >
            Destpêke – Belaş e ▶
          </button>
          <a
            href="#pricing"
            className="px-8 py-3 rounded-lg font-semibold text-lg border-2 text-center"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            Bihayê Bibîne →
          </a>
        </div>

        {/* Divider */}
        <hr className="w-3/5 my-8" style={{ borderColor: colors.border }} />

        {/* Features Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
          {[
            {
              icon: '🖥️',
              title: 'UI Hêsan',
              desc: 'Ekranên paqij, nivîsên mezin, û bêyî tevlihevî ku tu tenê li hînbûnê bifikire.',
              link: 'Kursan Bibîne →',
            },
            {
              icon: '📚',
              title: 'Dersên Strukturî',
              desc: 'Diyalog, ferheng, û rêziman di yekîneyên piçûk de bi kontrolên tavilê.',
              link: 'Dersekê Bibîne →',
            },
            {
              icon: '📊',
              title: 'Pêşveçûnê Bişopîne',
              desc: 'XP, streak, û temamkirina yekîneyan — ji cihê ku mayî dest pê bike.',
              link: 'Dashboard Bibîne →',
            },
            {
              icon: '🤖',
              title: 'AI Mamoste di Dersê de',
              desc: 'Dema ku hîn dibî pirsên xwe ji mamosteyê AI bipirse. Sohbet bi çalakiyê ve girêdayî ye.',
              link: 'AI Biceribîne →',
            },
            {
              icon: '🔊',
              title: 'Dengbêjî Li Her Derê',
              desc: 'Ji bo her hevokê dengê bilind-kalîte lêxe — tevî nivîsên xwe.',
              link: 'Guhdarî Bike →',
            },
          ].map((feature, i) => (
            <article
              key={i}
              className="p-6 rounded-xl text-center flex flex-col items-center"
              style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}`, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text }}>{feature.title}</h3>
              <p className="text-sm mb-4" style={{ color: colors.muted }}>{feature.desc}</p>
              <a href="#" className="text-sm font-semibold" style={{ color: colors.primary }}>{feature.link}</a>
            </article>
          ))}
        </section>

        {/* Divider */}
        <hr className="w-3/5 my-8" style={{ borderColor: colors.border }} />

        {/* Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          <div
            className="p-6 rounded-xl"
            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
          >
            <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
              📘 Ev platform pirtûka fermî bi kar tîne:
            </h3>
            <p className="text-sm mb-3" style={{ color: colors.muted }}>Tu dikarî pirtûkê li vir bikî:</p>
            <a
              href="https://www.kurdisch-lernen.de/product/kurdisch-lehrbuch-zusatzbuch/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              style={{ color: colors.primary }}
            >
              ez ji te hez dikim, ez kurdi hin dibim
            </a>
            <div className="mt-4">
              <img
                src="https://www.kurdisch-lernen.de/wp-content/uploads/2020/08/Lehr-und-Zusatzbuch.webp"
                alt="Kurdish Book"
                className="w-28 rounded-lg border"
                style={{ borderColor: colors.border }}
              />
            </div>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
          >
            <h3 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
              📚 Beşdarî dersên zindî bibe!
            </h3>
            <p className="text-sm mb-3" style={{ color: colors.muted }}>
              Naveroka kursa xwe bi dersên yek-bi-yek an komî bişopîne — online an şexsî!
            </p>
            <p className="text-sm mb-3" style={{ color: colors.muted }}>📌 Bihayê û formatan li vir bibîne:</p>
            <a
              href="https://www.kurdisch-lernen.de/preise/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
              style={{ color: colors.primary }}
            >
              💰 kurdisch-lernen.de/preise/
            </a>
          </div>
        </section>

        {/* Link to Design Showcase */}
        <div className="mt-12 text-center">
          <Link
            to="/showcase"
            className="text-sm font-medium px-4 py-2 rounded-lg"
            style={{ backgroundColor: colors.secondary, color: colors.primary }}
          >
            → Hemû Komponenetan Bibîne (Design Showcase)
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="px-6 py-4 text-center text-sm"
        style={{ backgroundColor: colors.card, borderTop: `1px solid ${colors.border}`, color: colors.muted }}
      >
        © 2025 Adar Schule |{' '}
        <a href="#" style={{ color: colors.muted }}>Privacy</a> |{' '}
        <a href="#" style={{ color: colors.muted }}>Contact</a>
      </footer>
    </div>
  )
}

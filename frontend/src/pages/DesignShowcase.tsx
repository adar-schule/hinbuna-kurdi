import { Link } from 'react-router-dom'
import { useTheme, type PaletteColors } from '../context/ThemeContext'
import { ThemeControls } from '../components/ThemeControls'

// ============================================
// SAMPLE COMPONENTS
// ============================================

// --- NAVIGATION ---
function NavBar({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <nav
      className="flex items-center justify-between p-4 rounded-lg mb-4"
      style={{ backgroundColor: colors.card, fontFamily: font, border: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: colors.primary }} />
        <span className="font-bold text-lg" style={{ color: colors.text }}>Hinbuna Kurdî</span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm font-medium" style={{ color: colors.muted }}>Ders</a>
        <a href="#" className="text-sm font-medium" style={{ color: colors.muted }}>Bihayê</a>
        <a href="#" className="text-sm font-medium" style={{ color: colors.muted }}>Derbarê</a>
        <button
          className="px-3 py-1.5 rounded-lg text-sm font-medium text-white"
          style={{ backgroundColor: colors.primary }}
        >
          Têkeve
        </button>
      </div>
    </nav>
  )
}

// --- HOME PAGE ---
function HeroSection({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div
      className="p-8 rounded-xl text-center mb-4"
      style={{ backgroundColor: colors.secondary, fontFamily: font }}
    >
      <h1 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>
        Kurdî Hînbibe – Bi Awayekî Asan
      </h1>
      <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: colors.muted }}>
        Bi dersên kurt û pratîk, ji A1 heta B1 Kurmancî fêr bibe. Roj bi roj pêşve biçe.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          className="px-6 py-3 rounded-lg font-semibold text-white"
          style={{ backgroundColor: colors.primary }}
        >
          Destpêke – Belaş e
        </button>
        <button
          className="px-6 py-3 rounded-lg font-semibold border-2"
          style={{ borderColor: colors.primary, color: colors.primary, backgroundColor: 'transparent' }}
        >
          Bêtir Fêrbibe
        </button>
      </div>
    </div>
  )
}

function FeatureCards({ colors, font }: { colors: PaletteColors; font: string }) {
  const features = [
    { icon: '📚', title: 'Dersên Strukturî', desc: 'Ji bingehîn heta pêşketî' },
    { icon: '🎯', title: 'Pratîk Rojane', desc: 'Bi temrînên kurt hînbibe' },
    { icon: '📊', title: 'Pêşveçûn Bişopîne', desc: 'XP, streak û stats' },
    { icon: '🔊', title: 'Dengbêjî Kurdish', desc: 'Guhdarî bike û dubare bike' },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4" style={{ fontFamily: font }}>
      {features.map((f, i) => (
        <div
          key={i}
          className="p-4 rounded-lg text-center"
          style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
        >
          <div className="text-3xl mb-2">{f.icon}</div>
          <h3 className="font-semibold mb-1" style={{ color: colors.text }}>{f.title}</h3>
          <p className="text-sm" style={{ color: colors.muted }}>{f.desc}</p>
        </div>
      ))}
    </div>
  )
}

// --- AUTH ---
function AuthForm({ colors, font, type }: { colors: PaletteColors; font: string; type: 'login' | 'register' }) {
  return (
    <div
      className="p-6 rounded-xl max-w-sm mx-auto"
      style={{ backgroundColor: colors.card, fontFamily: font, border: `1px solid ${colors.border}` }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: colors.text }}>
        {type === 'login' ? 'Têkeve' : 'Tomar Bibe'}
      </h2>
      {type === 'register' && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" style={{ color: colors.text }}>Nav</label>
          <input
            type="text"
            placeholder="Navê te..."
            className="w-full px-3 py-2 rounded-lg border-2"
            style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" style={{ color: colors.text }}>Email</label>
        <input
          type="email"
          placeholder="email@nimûne.com"
          className="w-full px-3 py-2 rounded-lg border-2"
          style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" style={{ color: colors.text }}>Şîfre</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 rounded-lg border-2"
          style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
        />
      </div>
      <button
        className="w-full py-2 rounded-lg font-semibold text-white mb-4"
        style={{ backgroundColor: colors.primary }}
      >
        {type === 'login' ? 'Têkeve' : 'Tomar Bibe'}
      </button>
      <div className="text-center">
        <span className="text-sm" style={{ color: colors.muted }}>
          {type === 'login' ? 'Hesabê te tune? ' : 'Hesab heye? '}
        </span>
        <a href="#" className="text-sm font-medium" style={{ color: colors.primary }}>
          {type === 'login' ? 'Tomar bibe' : 'Têkeve'}
        </a>
      </div>
    </div>
  )
}

// --- PRICING ---
function PricingCards({ colors, font }: { colors: PaletteColors; font: string }) {
  const plans = [
    { name: 'Belaş', price: '€0', period: '/her dem', features: ['5 ders', 'Bêyî TTS', 'Reklam'], cta: 'Destpêke', highlight: false },
    { name: 'Premium', price: '€9', period: '/meh', features: ['Hemû ders', 'TTS', 'Bê reklam', 'Offline'], cta: 'Bibe Premium', highlight: true },
    { name: 'Jiyana', price: '€99', period: '/carekê', features: ['Hemû ders', 'TTS', 'Bê reklam', 'Offline', 'Updates'], cta: 'Bikire', highlight: false },
  ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4" style={{ fontFamily: font }}>
      {plans.map((plan, i) => (
        <div
          key={i}
          className="p-6 rounded-xl"
          style={{
            backgroundColor: plan.highlight ? colors.primary : colors.card,
            border: plan.highlight ? 'none' : `1px solid ${colors.border}`,
          }}
        >
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: plan.highlight ? '#fff' : colors.text }}
          >
            {plan.name}
          </h3>
          <div className="mb-4">
            <span
              className="text-3xl font-bold"
              style={{ color: plan.highlight ? '#fff' : colors.text }}
            >
              {plan.price}
            </span>
            <span
              className="text-sm"
              style={{ color: plan.highlight ? 'rgba(255,255,255,0.7)' : colors.muted }}
            >
              {plan.period}
            </span>
          </div>
          <ul className="mb-4 space-y-2">
            {plan.features.map((f, j) => (
              <li
                key={j}
                className="text-sm flex items-center gap-2"
                style={{ color: plan.highlight ? 'rgba(255,255,255,0.9)' : colors.muted }}
              >
                <span style={{ color: plan.highlight ? '#fff' : colors.success }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            className="w-full py-2 rounded-lg font-semibold"
            style={{
              backgroundColor: plan.highlight ? '#fff' : colors.primary,
              color: plan.highlight ? colors.primary : '#fff',
            }}
          >
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  )
}

// --- COURSE FLOW ---
function CourseCard({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div
      className="p-4 rounded-xl mb-4"
      style={{ backgroundColor: colors.card, fontFamily: font, border: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: colors.secondary }}
        >
          🇹🇯
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg" style={{ color: colors.text }}>Kurmancî – Destpêk</h3>
          <p className="text-sm" style={{ color: colors.muted }}>A1-A2 • 6 modul • 48 ders</p>
          <div className="mt-2 h-2 rounded-full" style={{ backgroundColor: colors.border }}>
            <div className="h-2 rounded-full" style={{ width: '35%', backgroundColor: colors.primary }} />
          </div>
        </div>
        <button
          className="px-4 py-2 rounded-lg font-medium text-white"
          style={{ backgroundColor: colors.primary }}
        >
          Berdewam
        </button>
      </div>
    </div>
  )
}

function ModuleList({ colors, font }: { colors: PaletteColors; font: string }) {
  const modules = [
    { name: 'A1.1 – Silav û Nasîn', units: 4, progress: 100, locked: false },
    { name: 'A1.2 – Malbat', units: 4, progress: 50, locked: false },
    { name: 'A1.3 – Xwarin û Vexwarin', units: 4, progress: 0, locked: false },
    { name: 'A2.1 – Rêwîtî', units: 5, progress: 0, locked: true },
  ]
  return (
    <div className="space-y-3 mb-4" style={{ fontFamily: font }}>
      {modules.map((m, i) => (
        <div
          key={i}
          className="p-4 rounded-lg flex items-center gap-4"
          style={{
            backgroundColor: colors.card,
            border: `1px solid ${colors.border}`,
            opacity: m.locked ? 0.5 : 1,
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
            style={{ backgroundColor: m.progress === 100 ? colors.success : m.locked ? colors.muted : colors.primary }}
          >
            {m.progress === 100 ? '✓' : m.locked ? '🔒' : i + 1}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold" style={{ color: colors.text }}>{m.name}</h4>
            <p className="text-sm" style={{ color: colors.muted }}>{m.units} yekîne • {m.progress}% temam</p>
          </div>
          {!m.locked && (
            <button
              className="px-3 py-1.5 rounded-lg text-sm font-medium"
              style={{
                backgroundColor: m.progress === 100 ? colors.secondary : colors.primary,
                color: m.progress === 100 ? colors.primary : '#fff',
              }}
            >
              {m.progress === 100 ? 'Dubare' : m.progress > 0 ? 'Berdewam' : 'Destpêke'}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

function UnitView({ colors, font }: { colors: PaletteColors; font: string }) {
  const lessons = [
    { name: 'Silav!', type: 'Dialog', done: true },
    { name: 'Navê min...', type: 'Vocab', done: true },
    { name: 'Tu çawa yî?', type: 'Grammar', done: false },
    { name: 'Temrîn', type: 'Practice', done: false },
  ]
  return (
    <div
      className="p-4 rounded-xl mb-4"
      style={{ backgroundColor: colors.card, fontFamily: font, border: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: `1px solid ${colors.border}` }}>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: colors.primary }}
        >
          1
        </div>
        <div>
          <h3 className="font-bold" style={{ color: colors.text }}>Yekîne 1: Silav û Nasîn</h3>
          <p className="text-sm" style={{ color: colors.muted }}>4 ders • ~20 deqe</p>
        </div>
      </div>
      <div className="space-y-2">
        {lessons.map((l, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ backgroundColor: l.done ? colors.secondary : colors.bg }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: l.done ? colors.success : colors.border,
                color: l.done ? '#fff' : colors.muted,
              }}
            >
              {l.done ? '✓' : i + 1}
            </div>
            <div className="flex-1">
              <p className="font-medium" style={{ color: colors.text }}>{l.name}</p>
              <p className="text-xs" style={{ color: colors.muted }}>{l.type}</p>
            </div>
            {!l.done && (
              <button
                className="px-3 py-1 rounded text-sm font-medium text-white"
                style={{ backgroundColor: colors.primary }}
              >
                Destpêke
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function LessonView({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div
      className="p-6 rounded-xl mb-4"
      style={{ backgroundColor: colors.card, fontFamily: font, border: `1px solid ${colors.border}` }}
    >
      {/* Progress */}
      <div className="flex items-center gap-4 mb-6">
        <button className="text-xl" style={{ color: colors.muted }}>✕</button>
        <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: colors.border }}>
          <div className="h-2 rounded-full" style={{ width: '40%', backgroundColor: colors.primary }} />
        </div>
        <span className="text-sm font-medium" style={{ color: colors.muted }}>2/5</span>
      </div>

      {/* Dialog Example */}
      <div className="mb-6">
        <div className="flex gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">👨</div>
          <div
            className="p-3 rounded-lg max-w-xs"
            style={{ backgroundColor: colors.secondary }}
          >
            <p style={{ color: colors.text }}>Silav! Navê min Azad e.</p>
            <p className="text-xs mt-1" style={{ color: colors.muted }}>Hello! My name is Azad.</p>
          </div>
          <button className="self-center" style={{ color: colors.primary }}>🔊</button>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="self-center" style={{ color: colors.primary }}>🔊</button>
          <div
            className="p-3 rounded-lg max-w-xs"
            style={{ backgroundColor: colors.primary }}
          >
            <p className="text-white">Silav Azad! Ez Leyla me.</p>
            <p className="text-xs mt-1 text-white/70">Hello Azad! I am Leyla.</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">👩</div>
        </div>
      </div>

      {/* Continue */}
      <button
        className="w-full py-3 rounded-lg font-semibold text-white"
        style={{ backgroundColor: colors.primary }}
      >
        Berdewam Bike →
      </button>
    </div>
  )
}

function ActivityQuiz({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div
      className="p-6 rounded-xl mb-4"
      style={{ backgroundColor: colors.card, fontFamily: font, border: `1px solid ${colors.border}` }}
    >
      <h3 className="text-lg font-semibold mb-4 text-center" style={{ color: colors.text }}>
        "Silav" çi ye bi Îngilîzî?
      </h3>
      <div className="space-y-3 mb-6">
        {['Goodbye', 'Hello', 'Thank you', 'Please'].map((opt, i) => (
          <button
            key={i}
            className="w-full p-3 rounded-lg text-left font-medium border-2 transition-colors"
            style={{
              borderColor: i === 1 ? colors.success : colors.border,
              backgroundColor: i === 1 ? colors.success + '20' : colors.bg,
              color: colors.text,
            }}
          >
            {opt}
            {i === 1 && <span className="float-right">✓</span>}
          </button>
        ))}
      </div>
      <button
        className="w-full py-3 rounded-lg font-semibold text-white"
        style={{ backgroundColor: colors.success }}
      >
        Rast e! Berdewam →
      </button>
    </div>
  )
}

// --- USER DASHBOARD ---
function UserDashboard({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div style={{ fontFamily: font }}>
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { icon: '🔥', value: '12', label: 'Streak' },
          { icon: '⭐', value: '1,250', label: 'XP' },
          { icon: '📚', value: '8', label: 'Ders' },
          { icon: '🏆', value: '3', label: 'Badge' },
        ].map((s, i) => (
          <div
            key={i}
            className="p-3 rounded-lg text-center"
            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
          >
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="font-bold" style={{ color: colors.text }}>{s.value}</div>
            <div className="text-xs" style={{ color: colors.muted }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Continue Learning */}
      <div
        className="p-4 rounded-lg mb-4"
        style={{ backgroundColor: colors.secondary, border: `1px solid ${colors.border}` }}
      >
        <p className="text-sm font-medium mb-2" style={{ color: colors.muted }}>Berdewam bike</p>
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
            style={{ backgroundColor: colors.primary }}
          >
            📖
          </div>
          <div className="flex-1">
            <p className="font-semibold" style={{ color: colors.text }}>A1.2 – Malbat</p>
            <div className="h-1.5 rounded-full mt-1" style={{ backgroundColor: colors.border }}>
              <div className="h-1.5 rounded-full" style={{ width: '50%', backgroundColor: colors.primary }} />
            </div>
          </div>
          <button
            className="px-4 py-2 rounded-lg font-medium text-white"
            style={{ backgroundColor: colors.primary }}
          >
            Berdewam
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
      >
        <h3 className="font-semibold mb-3" style={{ color: colors.text }}>Çalakiya Dawî</h3>
        {[
          { text: 'Ders "Silav" temam kir', xp: '+15 XP', time: '2 saet berê' },
          { text: 'Badge "Destpêker" stand', xp: '🏆', time: 'Duh' },
          { text: 'Streak 10 roj!', xp: '🔥', time: '2 roj berê' },
        ].map((a, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2"
            style={{ borderBottom: i < 2 ? `1px solid ${colors.border}` : 'none' }}
          >
            <div>
              <p className="text-sm font-medium" style={{ color: colors.text }}>{a.text}</p>
              <p className="text-xs" style={{ color: colors.muted }}>{a.time}</p>
            </div>
            <span className="text-sm font-medium" style={{ color: colors.primary }}>{a.xp}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function UserProfile({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div
      className="p-6 rounded-xl"
      style={{ backgroundColor: colors.card, fontFamily: font, border: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: `1px solid ${colors.border}` }}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
          style={{ backgroundColor: colors.secondary }}
        >
          👤
        </div>
        <div>
          <h2 className="text-xl font-bold" style={{ color: colors.text }}>Azad Kobanî</h2>
          <p className="text-sm" style={{ color: colors.muted }}>azad@email.com</p>
        </div>
        <button
          className="ml-auto px-3 py-1.5 rounded-lg text-sm font-medium"
          style={{ backgroundColor: colors.secondary, color: colors.primary }}
        >
          Biguherîne
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: colors.text }}>Nav</label>
          <input
            type="text"
            value="Azad Kobanî"
            className="w-full px-3 py-2 rounded-lg border-2"
            style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: colors.text }}>Ziman</label>
          <select
            className="w-full px-3 py-2 rounded-lg border-2"
            style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
          >
            <option>Kurmancî</option>
            <option>Deutsch</option>
            <option>English</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: colors.text }}>Tema</label>
          <div className="flex gap-2">
            {['Ronahî', 'Tarî', 'Sîstem'].map((t, i) => (
              <button
                key={i}
                className="flex-1 py-2 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: i === 0 ? colors.primary : colors.bg,
                  color: i === 0 ? '#fff' : colors.text,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// --- TEACHER DASHBOARD ---
function TeacherDashboard({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div style={{ fontFamily: font }}>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: 'Xwendekar', value: '24', change: '+3 vê hefteyê' },
          { label: 'Ders Temamkirî', value: '156', change: '+28 vê hefteyê' },
          { label: 'Rêjeya Serkeftinê', value: '87%', change: '+2% ji meha borî' },
        ].map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
          >
            <p className="text-sm" style={{ color: colors.muted }}>{s.label}</p>
            <p className="text-2xl font-bold" style={{ color: colors.text }}>{s.value}</p>
            <p className="text-xs" style={{ color: colors.success }}>{s.change}</p>
          </div>
        ))}
      </div>

      {/* Students Table */}
      <div
        className="rounded-lg overflow-hidden"
        style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
      >
        <div className="p-4 flex items-center justify-between" style={{ borderBottom: `1px solid ${colors.border}` }}>
          <h3 className="font-semibold" style={{ color: colors.text }}>Xwendekarên Min</h3>
          <button
            className="px-3 py-1.5 rounded-lg text-sm font-medium text-white"
            style={{ backgroundColor: colors.primary }}
          >
            + Zêde Bike
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: colors.secondary }}>
              <th className="text-left p-3 text-sm font-medium" style={{ color: colors.muted }}>Nav</th>
              <th className="text-left p-3 text-sm font-medium" style={{ color: colors.muted }}>Asta</th>
              <th className="text-left p-3 text-sm font-medium" style={{ color: colors.muted }}>Pêşveçûn</th>
              <th className="text-left p-3 text-sm font-medium" style={{ color: colors.muted }}>Dawî Çalak</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Leyla Azad', level: 'A1', progress: 75, lastActive: 'Îro' },
              { name: 'Kawa Amed', level: 'A1', progress: 45, lastActive: 'Duh' },
              { name: 'Zozan Dîlok', level: 'A2', progress: 90, lastActive: 'Îro' },
            ].map((s, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${colors.border}` }}>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      {s.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span style={{ color: colors.text }}>{s.name}</span>
                  </div>
                </td>
                <td className="p-3">
                  <span
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ backgroundColor: colors.secondary, color: colors.primary }}
                  >
                    {s.level}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 rounded-full" style={{ backgroundColor: colors.border }}>
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${s.progress}%`, backgroundColor: colors.primary }}
                      />
                    </div>
                    <span className="text-sm" style={{ color: colors.muted }}>{s.progress}%</span>
                  </div>
                </td>
                <td className="p-3 text-sm" style={{ color: colors.muted }}>{s.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// --- ADMIN ---
function AdminDashboard({ colors, font }: { colors: PaletteColors; font: string }) {
  return (
    <div style={{ fontFamily: font }}>
      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: 'Bikarhêner', value: '1,234', icon: '👥' },
          { label: 'Premium', value: '156', icon: '⭐' },
          { label: 'Ders', value: '48', icon: '📚' },
          { label: 'Dahat (meh)', value: '€1,404', icon: '💰' },
        ].map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-lg"
            style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">{s.icon}</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: colors.text }}>{s.value}</p>
            <p className="text-sm" style={{ color: colors.muted }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* User Management Preview */}
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: colors.card, border: `1px solid ${colors.border}` }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold" style={{ color: colors.text }}>Rêvebiriya Bikarhêneran</h3>
          <input
            type="text"
            placeholder="Lêgerîn..."
            className="px-3 py-1.5 rounded-lg text-sm border"
            style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
          />
        </div>
        <div className="space-y-2">
          {[
            { name: 'Azad Kobanî', email: 'azad@email.com', role: 'Student', status: 'Çalak' },
            { name: 'Mamoste Dilovan', email: 'dilovan@email.com', role: 'Teacher', status: 'Çalak' },
            { name: 'Admin Root', email: 'admin@hinbuna.com', role: 'Admin', status: 'Çalak' },
          ].map((u, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg"
              style={{ backgroundColor: colors.bg }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: colors.primary }}
              >
                {u.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="font-medium" style={{ color: colors.text }}>{u.name}</p>
                <p className="text-xs" style={{ color: colors.muted }}>{u.email}</p>
              </div>
              <span
                className="px-2 py-1 rounded text-xs font-medium"
                style={{
                  backgroundColor: u.role === 'Admin' ? colors.error + '20' : u.role === 'Teacher' ? colors.warning + '20' : colors.secondary,
                  color: u.role === 'Admin' ? colors.error : u.role === 'Teacher' ? colors.warning : colors.primary,
                }}
              >
                {u.role}
              </span>
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ backgroundColor: colors.success + '20', color: colors.success }}
              >
                {u.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================
// DESIGN SHOWCASE PAGE
// ============================================

export function DesignShowcase() {
  const { colors, activeFont, mode } = useTheme()

  const pageBg = mode === 'light' ? '#f9fafb' : '#0a0a0a'
  const pageText = mode === 'light' ? '#1f2937' : '#f9fafb'
  const pageMuted = mode === 'light' ? '#6b7280' : '#9ca3af'

  return (
    <div className="min-h-screen p-8 transition-colors" style={{ backgroundColor: pageBg }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: pageText }}>
            Design Showcase
          </h1>
          <p style={{ color: pageMuted }}>
            Component-level preview. Kurdish chars: ç ê î ş û
          </p>
          <Link
            to="/home"
            className="inline-block mt-4 text-sm font-medium px-4 py-2 rounded-lg"
            style={{ backgroundColor: colors.secondary, color: colors.primary }}
          >
            ← Rûpela Serê Bibîne (Full Homepage)
          </Link>
        </div>

        {/* Controls */}
        <div className="mb-8">
          <ThemeControls />
        </div>

        {/* SECTIONS */}
        <div className="space-y-12">
          {/* Navigation */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Navigation</h2>
            <NavBar colors={colors} font={activeFont.family} />
          </section>

          {/* Home Page */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Home Page</h2>
            <HeroSection colors={colors} font={activeFont.family} />
            <FeatureCards colors={colors} font={activeFont.family} />
          </section>

          {/* Auth */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Authentication</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AuthForm colors={colors} font={activeFont.family} type="login" />
              <AuthForm colors={colors} font={activeFont.family} type="register" />
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Pricing</h2>
            <PricingCards colors={colors} font={activeFont.family} />
          </section>

          {/* Course Flow */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Course → Module → Unit → Lesson</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: pageMuted }}>Course Card</h3>
                <CourseCard colors={colors} font={activeFont.family} />
                <h3 className="font-semibold mb-2 mt-4" style={{ color: pageMuted }}>Module List</h3>
                <ModuleList colors={colors} font={activeFont.family} />
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: pageMuted }}>Unit View</h3>
                <UnitView colors={colors} font={activeFont.family} />
                <h3 className="font-semibold mb-2 mt-4" style={{ color: pageMuted }}>Lesson Dialog</h3>
                <LessonView colors={colors} font={activeFont.family} />
              </div>
            </div>
          </section>

          {/* Activity */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Activity / Quiz</h2>
            <div className="max-w-md mx-auto">
              <ActivityQuiz colors={colors} font={activeFont.family} />
            </div>
          </section>

          {/* User Panel */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>User Dashboard & Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: pageMuted }}>Dashboard</h3>
                <UserDashboard colors={colors} font={activeFont.family} />
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: pageMuted }}>Profile / Settings</h3>
                <UserProfile colors={colors} font={activeFont.family} />
              </div>
            </div>
          </section>

          {/* Teacher Panel */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Teacher Dashboard</h2>
            <TeacherDashboard colors={colors} font={activeFont.family} />
          </section>

          {/* Admin Panel */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: pageText }}>Admin Dashboard</h2>
            <AdminDashboard colors={colors} font={activeFont.family} />
          </section>
        </div>
      </div>
    </div>
  )
}

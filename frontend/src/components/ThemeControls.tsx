import { useTheme, fonts, palettes } from '../context/ThemeContext'

export function ThemeControls() {
  const { selectedFont, setSelectedFont, selectedPalette, setSelectedPalette, mode, setMode, colors } = useTheme()

  const cardBg = mode === 'light' ? '#ffffff' : '#1f2937'
  const cardBorder = mode === 'light' ? '#e5e7eb' : '#374151'
  const pageBg = mode === 'light' ? '#f9fafb' : '#0a0a0a'
  const pageText = mode === 'light' ? '#1f2937' : '#f9fafb'
  const pageMuted = mode === 'light' ? '#6b7280' : '#9ca3af'

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-4 p-4 rounded-xl sticky top-4 z-50"
      style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}`, backdropFilter: 'blur(8px)' }}
    >
      {/* Mode Toggle */}
      <div className="flex rounded-lg p-1" style={{ backgroundColor: pageBg }}>
        <button
          onClick={() => setMode('light')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${mode === 'light' ? 'bg-gray-900 text-white' : ''}`}
          style={mode !== 'light' ? { color: pageMuted } : {}}
        >
          ☀️ Light
        </button>
        <button
          onClick={() => setMode('dark')}
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${mode === 'dark' ? 'bg-white text-gray-900' : ''}`}
          style={mode !== 'dark' ? { color: pageMuted } : {}}
        >
          🌙 Dark
        </button>
      </div>

      {/* Font selector */}
      <select
        value={selectedFont || ''}
        onChange={(e) => setSelectedFont(e.target.value || null)}
        className="px-3 py-2 rounded-lg border text-sm"
        style={{ backgroundColor: pageBg, color: pageText, borderColor: cardBorder }}
      >
        <option value="">Font: Inter</option>
        {fonts.map(f => (
          <option key={f.id} value={f.id}>{f.name}</option>
        ))}
      </select>

      {/* Palette selector */}
      <select
        value={selectedPalette || ''}
        onChange={(e) => setSelectedPalette(e.target.value || null)}
        className="px-3 py-2 rounded-lg border text-sm"
        style={{ backgroundColor: pageBg, color: pageText, borderColor: cardBorder }}
      >
        <option value="">Palette: Forest Green</option>
        {palettes.map(p => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>

      {/* Color preview */}
      <div className="flex gap-1">
        <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.primary }} title="Primary" />
        <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.secondary }} title="Secondary" />
        <div className="w-6 h-6 rounded" style={{ backgroundColor: colors.accent }} title="Accent" />
      </div>
    </div>
  )
}

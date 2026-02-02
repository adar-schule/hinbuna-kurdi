import { createContext, useContext, useState, type ReactNode } from 'react'

// Font options
export const fonts = [
  { id: 'inter', name: 'Inter', family: 'Inter, sans-serif', desc: 'Modern, clean, tech-friendly' },
  { id: 'nunito', name: 'Nunito', family: 'Nunito, sans-serif', desc: 'Friendly, warm, rounded' },
  { id: 'source', name: 'Source Sans 3', family: '"Source Sans 3", sans-serif', desc: 'Balanced, professional' },
  { id: 'lexend', name: 'Lexend', family: 'Lexend, sans-serif', desc: 'Readability-optimized' },
]

// Color palette options with light and dark modes
export const palettes = [
  {
    id: 'forest',
    name: 'Forest Green',
    desc: 'Educational, calm (Duolingo-like)',
    light: {
      primary: '#16a34a',
      primaryHover: '#15803d',
      secondary: '#f0fdf4',
      accent: '#fbbf24',
      text: '#1f2937',
      muted: '#6b7280',
      bg: '#ffffff',
      card: '#f9fafb',
      border: '#e5e7eb',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
    dark: {
      primary: '#22c55e',
      primaryHover: '#16a34a',
      secondary: '#14532d',
      accent: '#fbbf24',
      text: '#f9fafb',
      muted: '#9ca3af',
      bg: '#111827',
      card: '#1f2937',
      border: '#374151',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
  },
  {
    id: 'royal',
    name: 'Royal Blue',
    desc: 'Professional, trustworthy',
    light: {
      primary: '#2563eb',
      primaryHover: '#1d4ed8',
      secondary: '#eff6ff',
      accent: '#f59e0b',
      text: '#1f2937',
      muted: '#6b7280',
      bg: '#ffffff',
      card: '#f8fafc',
      border: '#e5e7eb',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
    dark: {
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#1e3a5f',
      accent: '#f59e0b',
      text: '#f9fafb',
      muted: '#9ca3af',
      bg: '#0f172a',
      card: '#1e293b',
      border: '#334155',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
  },
  {
    id: 'warm',
    name: 'Warm Coral',
    desc: 'Energetic, approachable',
    light: {
      primary: '#f97316',
      primaryHover: '#ea580c',
      secondary: '#fff7ed',
      accent: '#14b8a6',
      text: '#1f2937',
      muted: '#6b7280',
      bg: '#ffffff',
      card: '#fffbf5',
      border: '#e5e7eb',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
    dark: {
      primary: '#fb923c',
      primaryHover: '#f97316',
      secondary: '#431407',
      accent: '#14b8a6',
      text: '#f9fafb',
      muted: '#9ca3af',
      bg: '#18120e',
      card: '#292018',
      border: '#44382e',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
  },
  {
    id: 'kurdish',
    name: 'Kurdish Heritage',
    desc: 'Cultural, flag-inspired (red/yellow/green)',
    light: {
      primary: '#dc2626',
      primaryHover: '#b91c1c',
      secondary: '#fef9c3',
      accent: '#16a34a',
      text: '#1f2937',
      muted: '#6b7280',
      bg: '#fffef5',
      card: '#fefce8',
      border: '#e5e7eb',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
    dark: {
      primary: '#ef4444',
      primaryHover: '#dc2626',
      secondary: '#422006',
      accent: '#22c55e',
      text: '#fef9c3',
      muted: '#9ca3af',
      bg: '#1a1412',
      card: '#292118',
      border: '#44382e',
      success: '#22c55e',
      error: '#ef4444',
      warning: '#f59e0b',
    },
  },
]

export type Mode = 'light' | 'dark'
export type PaletteColors = typeof palettes[0]['light']

interface ThemeContextType {
  selectedFont: string | null
  setSelectedFont: (font: string | null) => void
  selectedPalette: string | null
  setSelectedPalette: (palette: string | null) => void
  mode: Mode
  setMode: (mode: Mode) => void
  activeFont: typeof fonts[0]
  activePalette: typeof palettes[0]
  colors: PaletteColors
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [selectedFont, setSelectedFont] = useState<string | null>(null)
  const [selectedPalette, setSelectedPalette] = useState<string | null>(null)
  const [mode, setMode] = useState<Mode>('light')

  const activeFont = selectedFont ? fonts.find(f => f.id === selectedFont)! : fonts[0]
  const activePalette = selectedPalette ? palettes.find(p => p.id === selectedPalette)! : palettes[0]
  const colors = activePalette[mode]

  return (
    <ThemeContext.Provider
      value={{
        selectedFont,
        setSelectedFont,
        selectedPalette,
        setSelectedPalette,
        mode,
        setMode,
        activeFont,
        activePalette,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

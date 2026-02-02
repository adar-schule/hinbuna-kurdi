import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { HomePage } from './pages/HomePage'
import { DesignShowcase } from './pages/DesignShowcase'
import { HomePageShadcn } from './pages/HomePageShadcn'
import { DesignShowcaseShadcn } from './pages/DesignShowcaseShadcn'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Main (shadcn) */}
        <Route path="/home" element={<HomePageShadcn />} />
        <Route path="/showcase" element={<DesignShowcaseShadcn />} />

        {/* Old design (for comparison) */}
        <Route path="/home-old" element={<HomePage />} />
        <Route path="/showcase-old" element={<DesignShowcase />} />

        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

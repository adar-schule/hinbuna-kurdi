import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { HomePage } from './pages/HomePage'
import { DesignShowcase } from './pages/DesignShowcase'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/showcase" element={<DesignShowcase />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

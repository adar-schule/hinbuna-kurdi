import { Routes, Route } from 'react-router-dom'
import { StitchShowcase } from './pages/StitchShowcase'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StitchShowcase />} />
    </Routes>
  )
}

export default App

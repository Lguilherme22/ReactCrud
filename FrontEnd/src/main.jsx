import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './pages/index.css'
import Home from './pages/home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

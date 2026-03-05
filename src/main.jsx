import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './icons-bundle' // Pre-register icons at build time (no CDN fetches)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

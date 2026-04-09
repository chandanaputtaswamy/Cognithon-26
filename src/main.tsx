import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// One-time migration: remove the old localStorage auth flag left by earlier
// versions of the app. Auth now lives exclusively in sessionStorage so that
// closing the browser automatically logs the user out.
localStorage.removeItem('isAuthenticated');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

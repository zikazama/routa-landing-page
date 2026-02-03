import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComingSoon from './features/marketing/ui/pages/ComingSoon'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComingSoon />
  </StrictMode>
)

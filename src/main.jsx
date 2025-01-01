import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Apps from './Apps.jsx';
import { ContextStore } from './Students/Context.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextStore>
   <Apps />
    </ContextStore>
  </StrictMode>,
)

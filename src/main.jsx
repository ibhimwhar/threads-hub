import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router'
import { ContextProvider } from './component/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ContextProvider>

      <Router>

        <App />

      </Router>

    </ContextProvider>

  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { LangProvider } from './context/langContext'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </LangProvider>
)

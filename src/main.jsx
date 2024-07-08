import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './pages/ErrorBoundary.jsx'
import AuthProvider from './Hooks/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Something is wrong</h1>}>
    <AuthProvider>
      <App />
    </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)

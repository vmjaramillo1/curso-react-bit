import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const client = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

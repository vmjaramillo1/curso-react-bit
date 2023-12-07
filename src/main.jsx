import React from 'react'
import ReactDOM from 'react-dom/client'
import Providers from './providers'
import AppRoutes from './app-routes'

import './styles/index.css'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Providers>
      <AppRoutes />
    </Providers>
  </React.StrictMode>,
)

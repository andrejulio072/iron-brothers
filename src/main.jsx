import React from 'react'
import { createRoot } from 'react-dom/client'
import IronBrothersLanding from './IronBrothersLanding.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <IronBrothersLanding />
  </React.StrictMode>
)

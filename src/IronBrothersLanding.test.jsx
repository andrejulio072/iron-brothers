import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IronBrothersLanding from './IronBrothersLanding.jsx'

it('renders hero tagline in English by default', () => {
  render(<IronBrothersLanding />)
  // Expect English tagline substring
  expect(screen.getByText(/Real results/i)).toBeInTheDocument()
})

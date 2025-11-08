import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import IronBrothersLanding from './IronBrothersLanding.jsx'

it('renders hero tagline in English by default', () => {
	render(<IronBrothersLanding />)
	// Ensure the English hero title renders by default
	expect(screen.getByText(/High-performance coaching/i)).toBeInTheDocument()
})

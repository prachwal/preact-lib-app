import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/preact'
import { expect, test } from 'vitest'
import { Header } from './Header'

test('renders Vite + Preact heading', () => {
  render(<Header />)
  expect(screen.getByText('Vite + Preact')).toBeInTheDocument()
})

test('renders Vite logo with correct attributes', () => {
  render(<Header />)
  const viteLogo = screen.getByAltText('Vite logo')
  expect(viteLogo).toBeInTheDocument()
  expect(viteLogo).toHaveAttribute('src')
  expect(viteLogo.getAttribute('src')).toMatch(/^data:image\/svg\+xml/)
})

test('renders Preact logo with correct attributes', () => {
  render(<Header />)
  const preactLogo = screen.getByAltText('Preact logo')
  expect(preactLogo).toBeInTheDocument()
  expect(preactLogo).toHaveClass('logo', 'preact')
})
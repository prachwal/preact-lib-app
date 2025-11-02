import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/preact'
import { expect, test } from 'vitest'
import { Footer } from './Footer'

test('renders footer text', () => {
  render(<Footer />)
  expect(screen.getByText('Click on the Vite and Preact logos to learn more')).toBeInTheDocument()
})

test('renders footer with correct class', () => {
  render(<Footer />)
  const footerElement = screen.getByText('Click on the Vite and Preact logos to learn more')
  expect(footerElement).toHaveClass('read-the-docs')
})
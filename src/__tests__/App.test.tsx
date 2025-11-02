import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/preact'
import { expect, test } from 'vitest'
import { App } from '../app'

test('renders Vite + Preact heading', () => {
  render(<App />)
  expect(screen.getByText('Vite + Preact')).toBeInTheDocument()
})
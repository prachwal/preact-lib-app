import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/preact'
import { expect, test } from 'vitest'
import { Main } from './Main'

test('renders counter button', () => {
  render(<Main />)
  const button = screen.getByRole('button')
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('count is 0')
})

test('increments counter when button is clicked', async () => {
  render(<Main />)
  const button = screen.getByRole('button')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 1')

  fireEvent.click(button)
  expect(button).toHaveTextContent('count is 2')
})

test('renders HMR instruction text', () => {
  render(<Main />)
  const paragraph = screen.getByText((content) => content.includes('Edit'))
  expect(paragraph).toBeInTheDocument()
  expect(paragraph.tagName).toBe('P')
})

test('renders create-preact link', () => {
  render(<Main />)
  const link = screen.getByRole('link', { name: /create-preact/ })
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app')
})
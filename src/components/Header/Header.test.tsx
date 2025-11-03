import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Header from '.';

describe('Header', () => {
  it('renders with default props', () => {
    const { container } = render(<Header>Test content</Header>);
    const element = container.querySelector('.header');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Header className="custom-class">Test</Header>);
    const element = container.querySelector('.header');
    expect(element).toHaveClass('custom-class');
  });
});

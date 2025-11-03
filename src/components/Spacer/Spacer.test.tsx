import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Spacer from '.';

describe('Spacer', () => {
  it('renders with default props', () => {
    const { container } = render(<Spacer>Test content</Spacer>);
    const element = container.querySelector('.spacer');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Spacer className="custom-class">Test</Spacer>);
    const element = container.querySelector('.spacer');
    expect(element).toHaveClass('custom-class');
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Drawer from '.';

describe('Drawer', () => {
  it('renders with default props', () => {
    const { container } = render(<Drawer>Test content</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Drawer className="custom-class">Test</Drawer>);
    const element = container.querySelector('.drawer');
    expect(element).toHaveClass('custom-class');
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Video from '.';

describe('Video', () => {
  it('renders with default props', () => {
    const { container } = render(<Video>Test content</Video>);
    const element = container.querySelector('.video');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });

  it('renders with custom className', () => {
    const { container } = render(<Video className="custom-class">Test</Video>);
    const element = container.querySelector('.video');
    expect(element).toHaveClass('custom-class');
  });
});

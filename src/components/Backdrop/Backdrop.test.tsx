import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Backdrop from '.';

describe('Backdrop', () => {
  it('renders when show is true', () => {
    const { container } = render(<Backdrop show={true} />);
    const backdrop = container.querySelector('.backdrop');
    expect(backdrop).toBeInTheDocument();
  });

  it('does not render when show is false', () => {
    const { container } = render(<Backdrop show={false} />);
    const backdrop = container.querySelector('.backdrop');
    expect(backdrop).not.toBeInTheDocument();
  });

  it('renders with dark variant by default', () => {
    const { container } = render(<Backdrop show={true} />);
    const backdrop = container.querySelector('.backdrop');
    expect(backdrop).toHaveClass('backdrop');
    expect(backdrop).not.toHaveClass('backdrop-light');
  });

  it('renders with light variant', () => {
    const { container } = render(<Backdrop show={true} variant="light" />);
    const backdrop = container.querySelector('.backdrop');
    expect(backdrop).toHaveClass('backdrop', 'backdrop-light');
  });

  it('renders with blur effect', () => {
    const { container } = render(<Backdrop show={true} blur={true} />);
    const backdrop = container.querySelector('.backdrop');
    expect(backdrop).toHaveClass('backdrop', 'backdrop-blur');
  });

  it('renders with different opacity levels', () => {
    const { container, rerender } = render(<Backdrop show={true} opacity="low" />);
    let backdrop = container.querySelector('.backdrop');
    expect(backdrop).toHaveClass('backdrop', 'backdrop-opacity-low');

    rerender(<Backdrop show={true} opacity="high" />);
    backdrop = container.querySelector('.backdrop');
    expect(backdrop).toHaveClass('backdrop', 'backdrop-opacity-high');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const { container } = render(<Backdrop show={true} onClick={handleClick} />);
    const backdrop = container.querySelector('.backdrop');
    
    if (backdrop) {
      await user.click(backdrop);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }
  });

  it('renders with custom className', () => {
    const { container } = render(<Backdrop show={true} className="custom-class" />);
    const backdrop = container.querySelector('.backdrop');
    expect(backdrop).toHaveClass('backdrop', 'custom-class');
  });
});

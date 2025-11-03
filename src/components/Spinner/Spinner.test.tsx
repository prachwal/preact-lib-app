import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Spinner from '.';

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('spinner');
    expect(spinner).toHaveAttribute('aria-label', 'Loading...');
  });

  it('renders circular variant by default', () => {
    const { container } = render(<Spinner />);
    const circle = container.querySelector('.spinner-circle');
    expect(circle).toBeInTheDocument();
  });

  it('renders dots variant', () => {
    const { container } = render(<Spinner variant="dots" />);
    const dots = container.querySelectorAll('.spinner-dot');
    expect(dots).toHaveLength(3);
  });

  it('renders pulse variant', () => {
    const { container } = render(<Spinner variant="pulse" />);
    const pulse = container.querySelector('.spinner-pulse');
    expect(pulse).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(<Spinner size="xs" />);
    expect(container.querySelector('.spinner')).toHaveClass('spinner', 'spinner-xs');

    rerender(<Spinner size="sm" />);
    expect(container.querySelector('.spinner')).toHaveClass('spinner', 'spinner-sm');

    rerender(<Spinner size="md" />);
    const md = container.querySelector('.spinner');
    expect(md).toHaveClass('spinner');
    expect(md).not.toHaveClass('spinner-md');

    rerender(<Spinner size="lg" />);
    expect(container.querySelector('.spinner')).toHaveClass('spinner', 'spinner-lg');

    rerender(<Spinner size="xl" />);
    expect(container.querySelector('.spinner')).toHaveClass('spinner', 'spinner-xl');
  });

  it('renders with custom className', () => {
    const { container } = render(<Spinner className="custom-class" />);
    expect(container.querySelector('.spinner')).toHaveClass('spinner', 'custom-class');
  });

  it('renders with custom label', () => {
    render(<Spinner label="Processing..." />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'Processing...');
    expect(screen.getByText('Processing...')).toBeInTheDocument();
  });

  it('has screen reader only text', () => {
    render(<Spinner />);
    const srText = screen.getByText('Loading...');
    expect(srText).toBeInTheDocument();
    expect(srText).toHaveClass('sr-only');
  });
});

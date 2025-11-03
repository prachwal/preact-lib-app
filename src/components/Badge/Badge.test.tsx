import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import Badge from '.';

describe('Badge', () => {
  it('renders with default props', () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText('Default Badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('badge');
  });

  it('renders with primary variant', () => {
    render(<Badge variant="primary">Primary</Badge>);
    const badge = screen.getByText('Primary');
    expect(badge).toHaveClass('badge', 'badge-primary');
  });

  it('renders with success variant', () => {
    render(<Badge variant="success">Success</Badge>);
    const badge = screen.getByText('Success');
    expect(badge).toHaveClass('badge', 'badge-success');
  });

  it('renders with warning variant', () => {
    render(<Badge variant="warning">Warning</Badge>);
    const badge = screen.getByText('Warning');
    expect(badge).toHaveClass('badge', 'badge-warning');
  });

  it('renders with error variant', () => {
    render(<Badge variant="error">Error</Badge>);
    const badge = screen.getByText('Error');
    expect(badge).toHaveClass('badge', 'badge-error');
  });

  it('renders with info variant', () => {
    render(<Badge variant="info">Info</Badge>);
    const badge = screen.getByText('Info');
    expect(badge).toHaveClass('badge', 'badge-info');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText('Small')).toHaveClass('badge', 'badge-sm');

    rerender(<Badge size="md">Medium</Badge>);
    const medium = screen.getByText('Medium');
    expect(medium).toHaveClass('badge');
    expect(medium).not.toHaveClass('badge-md');

    rerender(<Badge size="lg">Large</Badge>);
    expect(screen.getByText('Large')).toHaveClass('badge', 'badge-lg');
  });

  it('renders as dot badge', () => {
    const { container } = render(<Badge dot variant="primary" />);
    const badge = container.querySelector('.badge');
    expect(badge).toHaveClass('badge', 'badge-primary', 'badge-dot');
    expect(badge?.textContent).toBe('');
  });

  it('renders with custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('badge', 'custom-class');
  });

  it('renders with number content', () => {
    render(<Badge variant="error">99</Badge>);
    const badge = screen.getByText('99');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass('badge', 'badge-error');
  });
});

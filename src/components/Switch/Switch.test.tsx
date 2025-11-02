import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Switch from '.';

describe('Switch', () => {
  it('renders with default props', () => {
    render(<Switch aria-label="Test switch" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeInTheDocument();
    expect(switchEl).toHaveClass('switch');
  });

  it('renders with label', () => {
    render(<Switch label="Enable feature" />);
    expect(screen.getByText('Enable feature')).toBeInTheDocument();
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Switch label="Test" size="sm" />);
    expect(screen.getByRole('switch')).toHaveClass('switch', 'switch-sm');

    rerender(<Switch label="Test" size="lg" />);
    expect(screen.getByRole('switch')).toHaveClass('switch', 'switch-lg');
  });

  it('handles checked state', () => {
    render(<Switch label="Test" checked />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeChecked();
  });

  it('handles disabled state', () => {
    render(<Switch label="Test" disabled />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toBeDisabled();
    expect(switchEl).toHaveClass('switch', 'switch-disabled');
  });

  it('renders on/off labels', () => {
    render(<Switch label="Test" onLabel="ON" offLabel="OFF" />);
    expect(screen.getByText('ON')).toBeInTheDocument();
    expect(screen.getByText('OFF')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch label="Test" onChange={handleChange} />);

    const switchEl = screen.getByRole('switch');
    await user.click(switchEl);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch label="Test" disabled onChange={handleChange} />);

    const switchEl = screen.getByRole('switch');
    await user.click(switchEl);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('passes through other props', () => {
    render(<Switch label="Test" aria-label="Custom label" name="test-switch" />);
    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('aria-label', 'Custom label');
    expect(switchEl).toHaveAttribute('name', 'test-switch');
  });

  it('renders slider and thumb', () => {
    const { container } = render(<Switch label="Test" />);
    const slider = container.querySelector('.switch-slider');
    const thumb = container.querySelector('.switch-thumb');
    expect(slider).toBeInTheDocument();
    expect(thumb).toBeInTheDocument();
  });
});

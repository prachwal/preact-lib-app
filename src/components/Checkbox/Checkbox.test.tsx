import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Checkbox from '.';

describe('Checkbox', () => {
  it('renders with default props', () => {
    render(<Checkbox aria-label="Test checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('checkbox');
  });

  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Checkbox label="Test" size="sm" />);
    expect(screen.getByRole('checkbox')).toHaveClass('checkbox', 'checkbox-sm');

    rerender(<Checkbox label="Test" size="lg" />);
    expect(screen.getByRole('checkbox')).toHaveClass('checkbox', 'checkbox-lg');
  });

  it('handles checked state', () => {
    render(<Checkbox label="Test" checked />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('handles indeterminate state', () => {
    render(<Checkbox label="Test" indeterminate />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('checkbox', 'checkbox-indeterminate');
  });

  it('handles error state', () => {
    render(<Checkbox label="Test" error />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('checkbox', 'checkbox-error');
  });

  it('handles disabled state', () => {
    render(<Checkbox label="Test" disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('checkbox', 'checkbox-disabled');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Test" onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox label="Test" disabled onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('passes through other props', () => {
    render(<Checkbox label="Test" aria-label="Custom label" name="test-checkbox" />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-label', 'Custom label');
    expect(checkbox).toHaveAttribute('name', 'test-checkbox');
  });

  it('renders checkmark span', () => {
    const { container } = render(<Checkbox label="Test" />);
    const checkmark = container.querySelector('.checkbox-checkmark');
    expect(checkmark).toBeInTheDocument();
  });
});

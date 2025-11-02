import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Radio from '.';

describe('Radio', () => {
  it('renders with default props', () => {
    render(<Radio aria-label="Test radio" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveClass('radio');
  });

  it('renders with label', () => {
    render(<Radio label="Option 1" />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Radio label="Test" size="sm" />);
    expect(screen.getByRole('radio')).toHaveClass('radio', 'radio-sm');

    rerender(<Radio label="Test" size="lg" />);
    expect(screen.getByRole('radio')).toHaveClass('radio', 'radio-lg');
  });

  it('handles checked state', () => {
    render(<Radio label="Test" checked />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  it('handles error state', () => {
    render(<Radio label="Test" error />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveClass('radio', 'radio-error');
  });

  it('handles disabled state', () => {
    render(<Radio label="Test" disabled />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveClass('radio', 'radio-disabled');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Radio label="Test" onChange={handleChange} />);

    const radio = screen.getByRole('radio');
    await user.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not trigger click when disabled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Radio label="Test" disabled onChange={handleChange} />);

    const radio = screen.getByRole('radio');
    await user.click(radio);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('passes through other props', () => {
    render(<Radio label="Test" aria-label="Custom label" name="test-radio" value="option1" />);
    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-label', 'Custom label');
    expect(radio).toHaveAttribute('name', 'test-radio');
    expect(radio).toHaveAttribute('value', 'option1');
  });

  it('renders radio mark span', () => {
    const { container } = render(<Radio label="Test" />);
    const mark = container.querySelector('.radio-mark');
    expect(mark).toBeInTheDocument();
  });

  it('groups radios with same name', () => {
    render(
      <div>
        <Radio label="Option 1" name="group1" />
        <Radio label="Option 2" name="group1" />
      </div>,
    );
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);
    expect(radios[0]).toHaveAttribute('name', 'group1');
    expect(radios[1]).toHaveAttribute('name', 'group1');
  });
});

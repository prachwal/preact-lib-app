import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Select from '.';

describe('Select', () => {
  const options = [
    { value: '', label: 'Select option' },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  it('renders with default props', () => {
    render(<Select options={options} />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass('select');
  });

  it('renders with label', () => {
    render(<Select label="Choose option" options={options} />);
    expect(screen.getByText('Choose option')).toBeInTheDocument();
  });

  it('renders required indicator', () => {
    render(<Select label="Choose option" options={options} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders options from array', () => {
    render(<Select options={options} />);
    expect(screen.getByText('Select option')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Select options={options} size="sm" />);
    expect(screen.getByRole('combobox')).toHaveClass('select', 'select-sm');

    rerender(<Select options={options} size="lg" />);
    expect(screen.getByRole('combobox')).toHaveClass('select', 'select-lg');
  });

  it('renders with error text', () => {
    render(<Select options={options} errorText="Please select an option" />);
    expect(screen.getByText('Please select an option')).toBeInTheDocument();
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('select', 'select-error');
  });

  it('renders with success text', () => {
    render(<Select options={options} successText="Good choice!" />);
    expect(screen.getByText('Good choice!')).toBeInTheDocument();
    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('select', 'select-success');
  });

  it('renders helper text', () => {
    render(<Select options={options} helperText="Choose one option" />);
    expect(screen.getByText('Choose one option')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Select options={options} disabled />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveClass('select', 'select-disabled');
  });

  it('handles change events', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Select options={options} onChange={handleChange} />);

    const select = screen.getByRole('combobox');
    await user.selectOptions(select, '1');
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders custom children instead of options', () => {
    render(
      <Select label="Custom">
        <option value="a">Custom A</option>
        <option value="b">Custom B</option>
      </Select>,
    );
    expect(screen.getByText('Custom A')).toBeInTheDocument();
    expect(screen.getByText('Custom B')).toBeInTheDocument();
  });

  it('passes through other props', () => {
    render(<Select options={options} aria-label="Select input" name="test-select" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-label', 'Select input');
    expect(select).toHaveAttribute('name', 'test-select');
  });

  it('renders arrow indicator', () => {
    const { container } = render(<Select options={options} />);
    const arrow = container.querySelector('.select-arrow');
    expect(arrow).toBeInTheDocument();
  });
});

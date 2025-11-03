import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Input from '.';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('input');
  });

  it('renders with label', () => {
    render(<Input label="Email" placeholder="Enter email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Enter email');
    expect(input).toBeInTheDocument();
  });

  it('renders required indicator', () => {
    render(<Input label="Email" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders with filled variant', () => {
    render(<Input variant="filled" placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('input', 'input-filled');
  });

  it('renders with outlined variant', () => {
    render(<Input variant="outlined" placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('input', 'input-outlined');
  });

  it('renders with underlined variant', () => {
    render(<Input variant="underlined" placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('input', 'input-underlined');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="xs" placeholder="Test" />);
    expect(screen.getByPlaceholderText('Test')).toHaveClass('input', 'input-xs');

    rerender(<Input size="sm" placeholder="Test" />);
    expect(screen.getByPlaceholderText('Test')).toHaveClass('input', 'input-sm');

    rerender(<Input size="lg" placeholder="Test" />);
    expect(screen.getByPlaceholderText('Test')).toHaveClass('input', 'input-lg');

    rerender(<Input size="xl" placeholder="Test" />);
    expect(screen.getByPlaceholderText('Test')).toHaveClass('input', 'input-xl');
  });

  it('renders with error state', () => {
    render(<Input state="error" errorText="Invalid input" placeholder="Test" />);
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('input', 'input-error');
  });

  it('renders with success state', () => {
    render(<Input state="success" successText="Valid input" placeholder="Test" />);
    expect(screen.getByText('Valid input')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('input', 'input-success');
  });

  it('renders helper text', () => {
    render(<Input helperText="Enter your email address" placeholder="Test" />);
    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
  });

  it('renders character counter', () => {
    render(<Input characterCounter maxLength={100} value="Hello" placeholder="Test" />);
    expect(screen.getByText('5/100')).toBeInTheDocument();
  });

  it('renders prefix icon', () => {
    render(<Input prefixIcon="🔍" placeholder="Search" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('renders suffix icon', () => {
    render(<Input suffixIcon="✉️" placeholder="Email" />);
    expect(screen.getByText('✉️')).toBeInTheDocument();
  });

  it('renders clear button when showClearButton is true and has value', () => {
    render(<Input showClearButton value="text" placeholder="Test" />);
    expect(screen.getByLabelText('Clear input')).toBeInTheDocument();
  });

  it('does not render clear button when value is empty', () => {
    render(<Input showClearButton placeholder="Test" />);
    expect(screen.queryByLabelText('Clear input')).not.toBeInTheDocument();
  });

  it('renders floating label', () => {
    render(<Input label="Email" floatingLabel placeholder="Test" />);
    const label = screen.getByText('Email');
    expect(label).toHaveClass('input-label', 'input-label-floating');
  });

  it('handles disabled state', () => {
    render(<Input disabled placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('input', 'input-disabled');
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    const handleInput = vi.fn();
    render(<Input onInput={handleInput} placeholder="Test" />);

    const input = screen.getByPlaceholderText('Test');
    await user.type(input, 'hello');
    expect(handleInput).toHaveBeenCalled();
  });

  it('passes through other props', () => {
    render(<Input type="email" aria-label="Email input" placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('aria-label', 'Email input');
  });

  it('respects maxLength attribute', () => {
    render(<Input maxLength={10} placeholder="Test" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveAttribute('maxLength', '10');
  });
});

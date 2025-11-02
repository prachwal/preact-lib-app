import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Textarea from '.';

describe('Textarea', () => {
  it('renders with default props', () => {
    render(<Textarea placeholder="Enter text" />);
    const textarea = screen.getByPlaceholderText('Enter text');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass('textarea');
  });

  it('renders with label', () => {
    render(<Textarea label="Description" placeholder="Enter description" />);
    expect(screen.getByText('Description')).toBeInTheDocument();
    const textarea = screen.getByPlaceholderText('Enter description');
    expect(textarea).toBeInTheDocument();
  });

  it('renders required indicator', () => {
    render(<Textarea label="Message" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders with filled variant', () => {
    render(<Textarea variant="filled" placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveClass('textarea', 'textarea-filled');
  });

  it('renders with outlined variant', () => {
    render(<Textarea variant="outlined" placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveClass('textarea', 'textarea-outlined');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Textarea size="sm" placeholder="Test" />);
    expect(screen.getByPlaceholderText('Test')).toHaveClass('textarea', 'textarea-sm');

    rerender(<Textarea size="lg" placeholder="Test" />);
    expect(screen.getByPlaceholderText('Test')).toHaveClass('textarea', 'textarea-lg');
  });

  it('renders with error text', () => {
    render(<Textarea errorText="This field is required" placeholder="Test" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveClass('textarea', 'textarea-error');
  });

  it('renders with success text', () => {
    render(<Textarea successText="Looks good!" placeholder="Test" />);
    expect(screen.getByText('Looks good!')).toBeInTheDocument();
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveClass('textarea', 'textarea-success');
  });

  it('renders helper text', () => {
    render(<Textarea helperText="Enter at least 10 characters" placeholder="Test" />);
    expect(screen.getByText('Enter at least 10 characters')).toBeInTheDocument();
  });

  it('renders character counter', () => {
    render(<Textarea characterCounter maxLength={100} value="Hello" placeholder="Test" />);
    expect(screen.getByText('5/100')).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Textarea disabled placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveClass('textarea', 'textarea-disabled');
  });

  it('handles auto-resize class', () => {
    render(<Textarea autoResize placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveClass('textarea', 'textarea-auto-resize');
  });

  it('applies custom min and max height', () => {
    render(<Textarea minHeight="100px" maxHeight="300px" placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveStyle({ minHeight: '100px', maxHeight: '300px' });
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    const handleInput = vi.fn();
    render(<Textarea onInput={handleInput} placeholder="Test" />);

    const textarea = screen.getByPlaceholderText('Test');
    await user.type(textarea, 'hello');
    expect(handleInput).toHaveBeenCalled();
  });

  it('respects maxLength attribute', () => {
    render(<Textarea maxLength={100} placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveAttribute('maxLength', '100');
  });

  it('passes through other props', () => {
    render(<Textarea rows={5} aria-label="Description input" placeholder="Test" />);
    const textarea = screen.getByPlaceholderText('Test');
    expect(textarea).toHaveAttribute('rows', '5');
    expect(textarea).toHaveAttribute('aria-label', 'Description input');
  });
});

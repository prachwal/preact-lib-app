import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/preact';
import FormGroup from '.';

describe('FormGroup', () => {
  it('renders with default props', () => {
    const { container } = render(<FormGroup>Content</FormGroup>);
    expect(container.querySelector('.form-group')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<FormGroup label="Email">Content</FormGroup>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders required indicator', () => {
    render(<FormGroup label="Name" required>Content</FormGroup>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders optional indicator', () => {
    render(<FormGroup label="Middle Name" optional>Content</FormGroup>);
    expect(screen.getByText('(optional)')).toBeInTheDocument();
  });

  it('renders helper text', () => {
    render(<FormGroup helperText="Enter a valid email">Content</FormGroup>);
    expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
  });

  it('renders error text', () => {
    render(<FormGroup errorText="This field is required">Content</FormGroup>);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
    const message = screen.getByText('This field is required');
    expect(message).toHaveClass('form-group-message-error');
  });

  it('renders success text', () => {
    render(<FormGroup successText="Looks good!">Content</FormGroup>);
    expect(screen.getByText('Looks good!')).toBeInTheDocument();
    const message = screen.getByText('Looks good!');
    expect(message).toHaveClass('form-group-message-success');
  });

  it('applies error class when error text is provided', () => {
    const { container } = render(<FormGroup errorText="Error">Content</FormGroup>);
    expect(container.querySelector('.form-group')).toHaveClass('form-group-error');
  });

  it('applies success class when success text is provided', () => {
    const { container } = render(<FormGroup successText="Success">Content</FormGroup>);
    expect(container.querySelector('.form-group')).toHaveClass('form-group-success');
  });

  it('prioritizes error message over helper text', () => {
    render(<FormGroup helperText="Help" errorText="Error">Content</FormGroup>);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.queryByText('Help')).not.toBeInTheDocument();
  });

  it('prioritizes success message over helper text', () => {
    render(<FormGroup helperText="Help" successText="Success">Content</FormGroup>);
    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.queryByText('Help')).not.toBeInTheDocument();
  });

  it('passes through other props', () => {
    render(<FormGroup id="test-form-group" data-testid="form-group">Content</FormGroup>);
    const formGroup = screen.getByTestId('form-group');
    expect(formGroup).toHaveAttribute('id', 'test-form-group');
  });

  it('applies custom className', () => {
    const { container } = render(<FormGroup className="custom-class">Content</FormGroup>);
    expect(container.querySelector('.form-group')).toHaveClass('form-group', 'custom-class');
  });
});

import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Alert from '.';

describe('Alert', () => {
  it('renders with default props', () => {
    render(<Alert>Test message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('alert', 'alert-info');
    expect(alert).toHaveTextContent('Test message');
  });

  it('renders with info variant', () => {
    render(<Alert variant="info">Info message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert', 'alert-info');
    expect(alert).toHaveTextContent('Info message');
  });

  it('renders with success variant', () => {
    render(<Alert variant="success">Success message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert', 'alert-success');
    expect(alert).toHaveTextContent('Success message');
  });

  it('renders with warning variant', () => {
    render(<Alert variant="warning">Warning message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert', 'alert-warning');
    expect(alert).toHaveTextContent('Warning message');
  });

  it('renders with error variant', () => {
    render(<Alert variant="error">Error message</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert', 'alert-error');
    expect(alert).toHaveTextContent('Error message');
  });

  it('renders with title', () => {
    render(<Alert title="Alert Title">Message content</Alert>);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Message content')).toBeInTheDocument();
  });

  it('renders without title', () => {
    render(<Alert>Message only</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert.querySelector('.alert-title')).not.toBeInTheDocument();
    expect(screen.getByText('Message only')).toBeInTheDocument();
  });

  it('renders close button when onClose provided', () => {
    const handleClose = vi.fn();
    render(<Alert onClose={handleClose}>Dismissible alert</Alert>);
    
    const closeButton = screen.getByRole('button', { name: /close alert/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('does not render close button when onClose not provided', () => {
    render(<Alert>Non-dismissible alert</Alert>);
    
    const closeButton = screen.queryByRole('button', { name: /close alert/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Alert onClose={handleClose}>Dismissible alert</Alert>);
    
    const closeButton = screen.getByRole('button', { name: /close alert/i });
    await user.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    render(<Alert className="custom-class">Custom alert</Alert>);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert', 'alert-info', 'custom-class');
  });

  it('displays correct icon for each variant', () => {
    const { rerender } = render(<Alert variant="info">Info</Alert>);
    expect(screen.getByText('●')).toBeInTheDocument();

    rerender(<Alert variant="success">Success</Alert>);
    expect(screen.getByText('✓')).toBeInTheDocument();

    rerender(<Alert variant="warning">Warning</Alert>);
    expect(screen.getByText('⚠')).toBeInTheDocument();

    rerender(<Alert variant="error">Error</Alert>);
    expect(screen.getByText('✕')).toBeInTheDocument();
  });
});

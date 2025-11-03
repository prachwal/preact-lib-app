import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Chip from '.';

describe('Chip', () => {
  it('renders with children', () => {
    render(<Chip>Test Chip</Chip>);
    expect(screen.getByText('Test Chip')).toBeInTheDocument();
  });

  it('renders with default variant', () => {
    const { container } = render(<Chip>Chip</Chip>);
    const chip = container.querySelector('.chip');
    expect(chip).toHaveClass('chip');
    expect(chip).not.toHaveClass('chip-outlined');
    expect(chip).not.toHaveClass('chip-soft');
  });

  it('renders with outlined variant', () => {
    const { container } = render(<Chip variant="outlined">Chip</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-outlined');
  });

  it('renders with soft variant', () => {
    const { container } = render(<Chip variant="soft">Chip</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-soft');
  });

  it('renders with different colors', () => {
    const { container, rerender } = render(<Chip color="primary">Primary</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-primary');

    rerender(<Chip color="success">Success</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-success');

    rerender(<Chip color="error">Error</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-error');
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(<Chip size="sm">Small</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-sm');

    rerender(<Chip size="md">Medium</Chip>);
    const md = container.querySelector('.chip');
    expect(md).toHaveClass('chip');
    expect(md).not.toHaveClass('chip-md');

    rerender(<Chip size="lg">Large</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-lg');
  });

  it('renders close button when onClose provided', () => {
    render(<Chip onClose={() => {}}>Chip</Chip>);
    const closeButton = screen.getByRole('button', { name: /remove/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Chip onClose={handleClose}>Chip</Chip>);
    
    const closeButton = screen.getByRole('button', { name: /remove/i });
    await user.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders as clickable when onClick provided', () => {
    const { container } = render(<Chip onClick={() => {}}>Clickable</Chip>);
    const chip = container.querySelector('.chip');
    expect(chip).toHaveClass('chip', 'chip-clickable');
    expect(chip).toHaveAttribute('role', 'button');
    expect(chip).toHaveAttribute('tabIndex', '0');
  });

  it('calls onClick when chip clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const { container } = render(<Chip onClick={handleClick}>Clickable</Chip>);
    
    const chip = container.querySelector('.chip');
    await user.click(chip!);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when close button clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const handleClose = vi.fn();
    render(<Chip onClick={handleClick} onClose={handleClose}>Chip</Chip>);
    
    const closeButton = screen.getByRole('button', { name: /remove/i });
    await user.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders as selected', () => {
    const { container } = render(<Chip selected>Selected</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'chip-selected');
  });

  it('renders as disabled', () => {
    const { container } = render(<Chip disabled>Disabled</Chip>);
    const chip = container.querySelector('.chip');
    expect(chip).toHaveClass('chip', 'chip-disabled');
    expect(chip).toHaveAttribute('aria-disabled', 'true');
  });

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const { container } = render(<Chip disabled onClick={handleClick}>Disabled</Chip>);
    
    const chip = container.querySelector('.chip');
    await user.click(chip!);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('does not call onClose when disabled', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(<Chip disabled onClose={handleClose}>Disabled</Chip>);
    
    const closeButton = screen.getByRole('button', { name: /remove/i });
    await user.click(closeButton);
    
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    const { container } = render(<Chip className="custom">Chip</Chip>);
    expect(container.querySelector('.chip')).toHaveClass('chip', 'custom');
  });
});

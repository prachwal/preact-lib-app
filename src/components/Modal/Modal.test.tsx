import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Modal from '.';

describe('Modal', () => {
  it('does not render when closed', () => {
    render(<Modal isOpen={false} onClose={() => {}}>Content</Modal>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(<Modal isOpen={true} onClose={() => {}}>Content</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test Title">
        Content
      </Modal>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders without title', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Content
      </Modal>
    );
    expect(container.querySelector('.modal-title')).not.toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} footer={<div>Footer content</div>}>
        Content
      </Modal>
    );
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('renders without footer', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Content
      </Modal>
    );
    expect(container.querySelector('.modal-footer')).not.toBeInTheDocument();
  });

  it('calls onClose when close button clicked', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        Content
      </Modal>
    );

    const closeButton = screen.getByRole('button', { name: /close modal/i });
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop clicked by default', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    const { container } = render(
      <Modal isOpen={true} onClose={handleClose}>
        Content
      </Modal>
    );

    const backdrop = container.querySelector('.modal-backdrop');
    await user.click(backdrop!);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when backdrop clicked if closeOnBackdropClick is false', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    const { container } = render(
      <Modal isOpen={true} onClose={handleClose} closeOnBackdropClick={false}>
        Content
      </Modal>
    );

    const backdrop = container.querySelector('.modal-backdrop');
    await user.click(backdrop!);

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('does not close when clicking inside modal', async () => {
    const user = userEvent.setup();
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <div>Content</div>
      </Modal>
    );

    await user.click(screen.getByText('Content'));

    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders with different sizes', () => {
    const { container, rerender } = render(
      <Modal isOpen={true} onClose={() => {}} size="sm">
        Content
      </Modal>
    );
    expect(container.querySelector('.modal')).toHaveClass('modal', 'modal-sm');

    rerender(
      <Modal isOpen={true} onClose={() => {}} size="md">
        Content
      </Modal>
    );
    const md = container.querySelector('.modal');
    expect(md).toHaveClass('modal');
    expect(md).not.toHaveClass('modal-md');

    rerender(
      <Modal isOpen={true} onClose={() => {}} size="lg">
        Content
      </Modal>
    );
    expect(container.querySelector('.modal')).toHaveClass('modal', 'modal-lg');

    rerender(
      <Modal isOpen={true} onClose={() => {}} size="xl">
        Content
      </Modal>
    );
    expect(container.querySelector('.modal')).toHaveClass('modal', 'modal-xl');

    rerender(
      <Modal isOpen={true} onClose={() => {}} size="full">
        Content
      </Modal>
    );
    expect(container.querySelector('.modal')).toHaveClass('modal', 'modal-full');
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Modal isOpen={true} onClose={() => {}} className="custom">
        Content
      </Modal>
    );
    expect(container.querySelector('.modal')).toHaveClass('modal', 'custom');
  });

  it('has correct aria attributes', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Test">
        Content
      </Modal>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title');
  });

  it('does not have aria-labelledby when no title', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Content
      </Modal>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).not.toHaveAttribute('aria-labelledby');
  });
});

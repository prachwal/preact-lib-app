import { useEffect } from 'preact/hooks';
import type { ComponentChildren } from 'preact';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSize;
  title?: string;
  children: ComponentChildren;
  footer?: ComponentChildren;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  size = 'md',
  title,
  children,
  footer,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = '',
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeClass = size !== 'md' ? `modal-${size}` : '';
  const classes = ['modal', sizeClass, className].filter(Boolean).join(' ');

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className={classes} role="dialog" aria-modal="true" aria-labelledby={title ? 'modal-title' : undefined}>
        <div className="modal-header">
          {title && <h2 id="modal-title" className="modal-title">{title}</h2>}
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;

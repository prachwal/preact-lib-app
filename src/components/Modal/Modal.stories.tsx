import { useState } from 'preact/hooks';
import type { Meta, StoryObj } from '@storybook/preact';
import { Modal, type ModalProps } from '.';

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    closeOnBackdropClick: {
      control: 'boolean',
    },
    closeOnEscape: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Default Modal">
          <p>This is a modal dialog. Click the X button, press Escape, or click outside to close.</p>
        </Modal>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal with Footer</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Action"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)} style={{ backgroundColor: '#646cff', color: 'white' }}>
                Confirm
              </button>
            </div>
          }
        >
          <p>Are you sure you want to perform this action?</p>
        </Modal>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | 'full' | null>(null);
    return (
      <div style={{ display: 'flex', gap: '0.5rem', padding: '2rem' }}>
        <button onClick={() => setSize('sm')}>Small</button>
        <button onClick={() => setSize('md')}>Medium</button>
        <button onClick={() => setSize('lg')}>Large</button>
        <button onClick={() => setSize('xl')}>Extra Large</button>
        <button onClick={() => setSize('full')}>Full Screen</button>
        {size && (
          <Modal isOpen={true} onClose={() => setSize(null)} title={`${size.toUpperCase()} Modal`} size={size}>
            <p>This is a {size} sized modal.</p>
            <p>Content goes here...</p>
          </Modal>
        )}
      </div>
    );
  },
};

export const NoBackdropClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Can't Close on Backdrop"
          closeOnBackdropClick={false}
        >
          <p>You cannot close this modal by clicking the backdrop. Use the X button or Escape key.</p>
        </Modal>
      </div>
    );
  },
};

export const NoEscapeClose: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Can't Close with Escape"
          closeOnEscape={false}
        >
          <p>You cannot close this modal with the Escape key. Use the X button or click outside.</p>
        </Modal>
      </div>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal with Long Content</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Long Content Modal">
          <p>This modal has a lot of content that requires scrolling.</p>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph {i + 1}.</p>
          ))}
        </Modal>
      </div>
    );
  },
};

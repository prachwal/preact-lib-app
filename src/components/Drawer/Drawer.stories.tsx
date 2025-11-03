import { useState } from 'preact/hooks';
import type { Meta, StoryObj } from '@storybook/preact';
import { Drawer, type DrawerProps } from '.';
import { Button } from '../Button';

const meta: Meta<DrawerProps> = {
  title: 'Components/Overlay/Drawer',
  tags: ['autodocs'],
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
    },
    showBackdrop: {
      control: 'boolean',
    },
    showCloseButton: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<DrawerProps>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          header="Drawer Title"
        >
          <p>This is the drawer content. You can put any content here.</p>
          <p>Click outside or press Escape to close.</p>
        </Drawer>
      </div>
    );
  },
};

export const RightPosition: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          position="right"
          header="Right Drawer"
        >
          <p>This drawer slides in from the right side.</p>
        </Drawer>
      </div>
    );
  },
};

export const LeftPosition: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          position="left"
          header="Left Drawer"
        >
          <p>This drawer slides in from the left side.</p>
        </Drawer>
      </div>
    );
  },
};

export const TopPosition: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          position="top"
          header="Top Drawer"
        >
          <p>This drawer slides in from the top.</p>
        </Drawer>
      </div>
    );
  },
};

export const BottomPosition: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          position="bottom"
          header="Bottom Drawer"
        >
          <p>This drawer slides in from the bottom.</p>
        </Drawer>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'full'>('md');
    const [open, setOpen] = useState(false);
    
    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button onClick={() => { setSize('sm'); setOpen(true); }}>Small Drawer</Button>
        <Button onClick={() => { setSize('md'); setOpen(true); }}>Medium Drawer</Button>
        <Button onClick={() => { setSize('lg'); setOpen(true); }}>Large Drawer</Button>
        <Button onClick={() => { setSize('full'); setOpen(true); }}>Full Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          size={size}
          header={`${size.toUpperCase()} Drawer`}
        >
          <p>This is a {size} sized drawer.</p>
        </Drawer>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer with Footer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          header="Drawer with Footer"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="primary" onClick={() => setOpen(false)}>Save</Button>
            </div>
          }
        >
          <p>This drawer has a footer with action buttons.</p>
          <p>The footer stays at the bottom even when content scrolls.</p>
        </Drawer>
      </div>
    );
  },
};

export const WithoutBackdrop: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer (No Backdrop)</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          showBackdrop={false}
          header="No Backdrop"
        >
          <p>This drawer has no backdrop overlay.</p>
        </Drawer>
      </div>
    );
  },
};

export const WithoutCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          showCloseButton={false}
          header="Custom Close"
          footer={
            <Button variant="ghost" onClick={() => setOpen(false)}>Close Drawer</Button>
          }
        >
          <p>This drawer doesn't have a close button in the header.</p>
          <p>Use the button in the footer or click the backdrop to close.</p>
        </Drawer>
      </div>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Drawer with Long Content</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          header="Scrollable Content"
          footer={
            <Button variant="primary" onClick={() => setOpen(false)}>Done</Button>
          }
        >
          <h3>Section 1</h3>
          <p>This drawer has a lot of content that will require scrolling.</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>Paragraph {i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          ))}
          <h3>Section 2</h3>
          <p>The footer stays fixed at the bottom while content scrolls.</p>
        </Drawer>
      </div>
    );
  },
};

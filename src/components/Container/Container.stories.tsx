import type { Meta, StoryObj } from '@storybook/preact';
import { Container, type ContainerProps } from '.';

const meta: Meta<ContainerProps> = {
  title: 'Components/Layout/Container',
  tags: ['autodocs'],
  component: Container,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<ContainerProps>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ background: '#e3f2fd', padding: '20px', textAlign: 'center' }}>
        <h2>Default Container</h2>
        <p>This is a centered container with responsive padding</p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <div style={{ background: '#f3e5f5', padding: '20px', textAlign: 'center' }}>
        <h2>Small Container</h2>
        <p>Max-width: 640px</p>
      </div>
    ),
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: (
      <div style={{ background: '#e8f5e9', padding: '20px', textAlign: 'center' }}>
        <h2>Medium Container</h2>
        <p>Max-width: 768px</p>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: (
      <div style={{ background: '#fff3e0', padding: '20px', textAlign: 'center' }}>
        <h2>Large Container</h2>
        <p>Max-width: 1024px</p>
      </div>
    ),
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: (
      <div style={{ background: '#fce4ec', padding: '20px', textAlign: 'center' }}>
        <h2>Extra Large Container</h2>
        <p>Max-width: 1280px</p>
      </div>
    ),
  },
};

export const Fluid: Story = {
  args: {
    size: 'fluid',
    children: (
      <div style={{ background: '#e0f7fa', padding: '20px', textAlign: 'center' }}>
        <h2>Fluid Container</h2>
        <p>Full width with padding</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    noPadding: true,
    children: (
      <div style={{ background: '#ffebee', padding: '20px', textAlign: 'center' }}>
        <h2>No Padding Container</h2>
        <p>Container without horizontal padding</p>
      </div>
    ),
  },
};

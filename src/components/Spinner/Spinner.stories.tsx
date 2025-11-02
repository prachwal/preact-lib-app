import type { Meta, StoryObj } from '@storybook/preact';
import { Spinner, type SpinnerProps } from '.';

const meta: Meta<SpinnerProps> = {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['circular', 'dots', 'pulse'],
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<SpinnerProps>;

export const Circular: Story = {
  args: {
    variant: 'circular',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
  },
};

export const Pulse: Story = {
  args: {
    variant: 'pulse',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="circular" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Circular</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="dots" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Dots</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spinner variant="pulse" />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Pulse</p>
      </div>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/preact';
import { Progress, type ProgressProps } from '.';

const meta: Meta<ProgressProps> = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: { type: 'select' },
      options: ['linear', 'circular'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'error', 'info'],
    },
    indeterminate: {
      control: 'boolean',
    },
    showLabel: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ProgressProps>;

export const Linear: Story = {
  args: {
    value: 65,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    value: 75,
  },
};

export const WithLabel: Story = {
  args: {
    value: 45,
    showLabel: true,
  },
};

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Linear Indeterminate</p>
        <Progress indeterminate />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Circular Indeterminate</p>
        <Progress variant="circular" indeterminate />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress color="primary" value={60} showLabel />
      <Progress color="success" value={70} showLabel />
      <Progress color="warning" value={50} showLabel />
      <Progress color="error" value={30} showLabel />
      <Progress color="info" value={80} showLabel />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Linear Sizes</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Progress size="sm" value={60} />
          <Progress size="md" value={60} />
          <Progress size="lg" value={60} />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>Circular Sizes</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Progress variant="circular" size="sm" value={60} />
          <Progress variant="circular" size="md" value={60} />
          <Progress variant="circular" size="lg" value={60} />
        </div>
      </div>
    </div>
  ),
};

export const ProgressSteps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Progress value={0} showLabel />
      <Progress value={25} showLabel />
      <Progress value={50} showLabel />
      <Progress value={75} showLabel />
      <Progress value={100} showLabel />
    </div>
  ),
};

export const CircularWithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
      <Progress variant="circular" value={25} showLabel />
      <Progress variant="circular" value={50} showLabel />
      <Progress variant="circular" value={75} showLabel />
      <Progress variant="circular" value={100} showLabel />
    </div>
  ),
};

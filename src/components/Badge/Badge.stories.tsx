import type { Meta, StoryObj } from '@storybook/preact';
import { Badge, type BadgeProps } from '.';

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    dot: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const DotBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge variant="default" dot />
      <Badge variant="primary" dot />
      <Badge variant="success" dot />
      <Badge variant="warning" dot />
      <Badge variant="error" dot />
      <Badge variant="info" dot />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge variant="error">1</Badge>
      <Badge variant="error">5</Badge>
      <Badge variant="error">99</Badge>
      <Badge variant="error">999+</Badge>
    </div>
  ),
};

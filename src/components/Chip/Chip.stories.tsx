import type { Meta, StoryObj } from '@storybook/preact';
import { Chip, type ChipProps } from '.';

const meta: Meta<ChipProps> = {
  title: 'Components/Chip',
  tags: ['autodocs'],
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'soft'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ChipProps>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Chip variant="filled">Filled</Chip>
      <Chip variant="outlined">Outlined</Chip>
      <Chip variant="soft">Soft</Chip>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="error">Error</Chip>
      <Chip color="info">Info</Chip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  ),
};

export const Closeable: Story = {
  args: {
    children: 'Closeable Chip',
    onClose: () => alert('Chip closed'),
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable Chip',
    onClick: () => alert('Chip clicked'),
  },
};

export const Selected: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Chip selected>Selected</Chip>
      <Chip>Not Selected</Chip>
      <Chip color="primary" selected>Selected Primary</Chip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Chip disabled>Disabled</Chip>
      <Chip disabled onClose={() => {}}>Disabled with Close</Chip>
      <Chip disabled onClick={() => {}}>Disabled Clickable</Chip>
    </div>
  ),
};

export const TagList: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Chip color="primary" size="sm" onClose={() => {}}>React</Chip>
      <Chip color="primary" size="sm" onClose={() => {}}>TypeScript</Chip>
      <Chip color="primary" size="sm" onClose={() => {}}>Vite</Chip>
      <Chip color="success" size="sm" onClose={() => {}}>Testing</Chip>
      <Chip color="info" size="sm" onClose={() => {}}>Storybook</Chip>
    </div>
  ),
};

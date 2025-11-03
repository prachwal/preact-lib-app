import type { Meta, StoryObj } from '@storybook/preact';
import { Icon, type IconProps } from '.';

const meta: Meta<IconProps> = {
  title: 'Components/Media/Icon',
  tags: ['autodocs'],
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    asButton: {
      control: 'boolean',
    },
    spin: {
      control: 'boolean',
    },
    pulse: {
      control: 'boolean',
    },
    lazy: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Default: Story = {
  args: {
    children: '⭐',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon size="xs" children="⭐" />
      <Icon size="sm" children="⭐" />
      <Icon size="md" children="⭐" />
      <Icon size="lg" children="⭐" />
      <Icon size="xl" children="⭐" />
      <Icon size="2xl" children="⭐" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon color="primary" children="⭐" />
      <Icon color="secondary" children="⭐" />
      <Icon color="success" children="⭐" />
      <Icon color="warning" children="⭐" />
      <Icon color="error" children="⭐" />
      <Icon color="info" children="⭐" />
    </div>
  ),
};

export const AsButton: Story = {
  args: {
    asButton: true,
    children: '⭐',
    onClick: () => alert('Icon clicked!'),
  },
};

export const WithAnimation: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Icon spin children="⭐" />
      <Icon pulse children="⭐" />
    </div>
  ),
};

export const ImageIcon: Story = {
  args: {
    src: 'https://via.placeholder.com/64x64?text=Icon',
    alt: 'Sample icon',
    size: 'lg',
  },
};

export const LazyImageIcon: Story = {
  args: {
    src: 'https://via.placeholder.com/64x64?text=Lazy',
    alt: 'Lazy loaded icon',
    lazy: true,
    size: 'lg',
  },
};

export const WithAspectRatio: Story = {
  args: {
    src: 'https://via.placeholder.com/100x50?text=16:9',
    alt: '16:9 aspect ratio',
    aspectRatio: '16/9',
    size: 'lg',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'https://invalid-url.com/icon.png',
    alt: 'Icon with fallback',
    fallback: '⚠️',
    size: 'lg',
  },
};

export const AllFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h3>Basic Icons:</h3>
        <Icon size="md" children="⭐" />
        <Icon size="md" color="primary" children="❤️" />
        <Icon size="md" asButton children="🔍" onClick={() => alert('Search!')} />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h3>Animated Icons:</h3>
        <Icon size="md" spin children="🔄" />
        <Icon size="md" pulse children="💓" />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h3>Image Icons:</h3>
        <Icon size="lg" src="https://via.placeholder.com/48x48?text=A" alt="A" />
        <Icon size="lg" src="https://via.placeholder.com/48x48?text=B" alt="B" lazy />
        <Icon size="lg" src="https://invalid-url.com" alt="Error" fallback="❌" />
      </div>
    </div>
  ),
};

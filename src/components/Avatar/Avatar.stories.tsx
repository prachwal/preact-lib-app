import type { Meta, StoryObj } from '@storybook/preact';
import { Avatar, type AvatarProps } from '.';

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
    },
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy', undefined],
    },
  },
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
  },
};

export const Placeholder: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
      <Avatar size="2xl" initials="2XL" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar shape="circle" initials="C" />
      <Avatar shape="square" initials="S" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar initials="ON" status="online" />
      <Avatar initials="OF" status="offline" />
      <Avatar initials="AW" status="away" />
      <Avatar initials="BS" status="busy" />
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
      <Avatar 
        src="https://i.pravatar.cc/150?img=1" 
        style={{ marginLeft: '-0.5rem' }}
      />
      <Avatar 
        src="https://i.pravatar.cc/150?img=2" 
        style={{ marginLeft: '-0.5rem' }}
      />
      <Avatar 
        src="https://i.pravatar.cc/150?img=3" 
        style={{ marginLeft: '-0.5rem' }}
      />
      <Avatar 
        initials="+5" 
        style={{ marginLeft: '-0.5rem' }}
      />
    </div>
  ),
};

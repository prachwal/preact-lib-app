import type { Meta, StoryObj } from '@storybook/preact';
import { Skeleton, type SkeletonProps } from '.';

const meta: Meta<SkeletonProps> = {
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circular', 'rectangular'],
    },
    animation: {
      control: { type: 'select' },
      options: ['pulse', 'wave', 'none'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<SkeletonProps>;

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 40,
    height: 40,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 200,
    height: 100,
  },
};

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Pulse</p>
        <Skeleton animation="pulse" width="100%" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Wave</p>
        <Skeleton animation="wave" width="100%" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>None</p>
        <Skeleton animation="none" width="100%" />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ width: '300px', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <Skeleton variant="rectangular" width="100%" height={160} />
      <div style={{ marginTop: '1rem' }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  ),
};

export const UserProfileSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Skeleton variant="circular" width={48} height={48} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="30%" />
        <Skeleton variant="text" width="50%" />
      </div>
    </div>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Skeleton variant="circular" width={40} height={40} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const GridSkeleton: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '1rem',
      maxWidth: '600px'
    }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item}>
          <Skeleton variant="rectangular" width="100%" height={120} />
          <Skeleton variant="text" width="80%" style={{ marginTop: '0.5rem' }} />
          <Skeleton variant="text" width="60%" />
        </div>
      ))}
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/preact';
import { Stats, type StatsProps } from '.';

const meta: Meta<StatsProps> = {
  title: 'Components/Special/Stats',
  tags: ['autodocs'],
  component: Stats,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<StatsProps>;

export const Default: Story = {
  args: {
    stats: [
      {
        value: '12,345',
        label: 'Total Users',
        icon: '👥',
      },
      {
        value: '98.5%',
        label: 'Satisfaction Rate',
        icon: '⭐',
      },
      {
        value: '1.2M',
        label: 'Downloads',
        icon: '📥',
      },
    ],
  },
};

export const WithTrends: Story = {
  args: {
    stats: [
      {
        value: '45,231',
        label: 'Revenue',
        icon: '💰',
        trend: 'positive' as const,
        change: '+12.5%',
      },
      {
        value: '3,456',
        label: 'Active Users',
        icon: '👤',
        trend: 'positive' as const,
        change: '+8.2%',
      },
      {
        value: '892',
        label: 'Support Tickets',
        icon: '🎫',
        trend: 'negative' as const,
        change: '-5.3%',
      },
      {
        value: '99.2%',
        label: 'Uptime',
        icon: '⚡',
        trend: 'neutral' as const,
        change: '0.1%',
      },
    ],
  },
};

export const SimpleStats: Story = {
  args: {
    stats: [
      {
        value: 150,
        label: 'Projects',
      },
      {
        value: 42,
        label: 'Team Members',
      },
      {
        value: 8,
        label: 'Years Experience',
      },
    ],
  },
};

export const LargeNumbers: Story = {
  args: {
    stats: [
      {
        value: '2.4B',
        label: 'Global Reach',
        icon: '🌍',
        trend: 'positive' as const,
        change: '+15%',
      },
      {
        value: '$850M',
        label: 'Market Cap',
        icon: '📈',
        trend: 'positive' as const,
        change: '+24.8%',
      },
    ],
  },
};

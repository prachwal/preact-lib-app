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
    children: 'Stats content',
  },
};

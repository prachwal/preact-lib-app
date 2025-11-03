import type { Meta, StoryObj } from '@storybook/preact';
import { Timeline, type TimelineProps } from '.';

const meta: Meta<TimelineProps> = {
  title: 'Components/Special/Timeline',
  tags: ['autodocs'],
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<TimelineProps>;

export const Default: Story = {
  args: {
    children: 'Timeline content',
  },
};

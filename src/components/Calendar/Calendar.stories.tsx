import type { Meta, StoryObj } from '@storybook/preact';
import { Calendar, type CalendarProps } from '.';

const meta: Meta<CalendarProps> = {
  title: 'Components/Special/Calendar',
  tags: ['autodocs'],
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  args: {
    children: 'Calendar content',
  },
};

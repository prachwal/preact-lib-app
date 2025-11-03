import type { Meta, StoryObj } from '@storybook/preact';
import { Rating, type RatingProps } from '.';

const meta: Meta<RatingProps> = {
  title: 'Components/Social/Rating',
  tags: ['autodocs'],
  component: Rating,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<RatingProps>;

export const Default: Story = {
  args: {
    children: 'Rating content',
  },
};

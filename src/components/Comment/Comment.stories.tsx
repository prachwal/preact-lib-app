import type { Meta, StoryObj } from '@storybook/preact';
import { Comment, type CommentProps } from '.';

const meta: Meta<CommentProps> = {
  title: 'Components/Social/Comment',
  tags: ['autodocs'],
  component: Comment,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CommentProps>;

export const Default: Story = {
  args: {
    children: 'Comment content',
  },
};

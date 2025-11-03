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
    author: 'John Doe',
    text: 'This is a great article! Thanks for sharing.',
    timestamp: '2 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
};

export const WithLikes: Story = {
  args: {
    author: 'Jane Smith',
    text: 'I completely agree with this point.',
    timestamp: '1 day ago',
    likes: 5,
    onLike: () => console.log('Liked'),
  },
};

export const WithActions: Story = {
  args: {
    author: 'Bob Johnson',
    text: 'This needs more clarification on the second point.',
    timestamp: '3 hours ago',
    likes: 2,
    onLike: () => console.log('Liked'),
    onReply: () => console.log('Reply clicked'),
    onEdit: (newText: string) => console.log('Edited:', newText),
    onDelete: () => console.log('Deleted'),
  },
};

export const WithReplies: Story = {
  args: {
    author: 'Alice Williams',
    text: 'What an interesting perspective!',
    timestamp: '5 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=5',
    likes: 8,
    onLike: () => console.log('Liked'),
    onReply: () => console.log('Reply clicked'),
    replies: [
      {
        author: 'Charlie Brown',
        text: 'I agree with Alice here.',
        timestamp: '4 hours ago',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
      {
        author: 'Diana Prince',
        text: 'Great thread! Thanks everyone.',
        timestamp: '3 hours ago',
        avatar: 'https://i.pravatar.cc/150?img=4',
        likes: 3,
      },
    ],
  },
};

export const Deleted: Story = {
  args: {
    author: 'Anonymous',
    text: 'This should not be visible',
    timestamp: '1 week ago',
    deleted: true,
  },
};

export const NoAvatar: Story = {
  args: {
    author: 'Test User',
    text: 'Comment without avatar shows first letter of author name.',
    timestamp: 'Just now',
  },
};

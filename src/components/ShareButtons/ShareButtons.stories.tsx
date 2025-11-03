import type { Meta, StoryObj } from '@storybook/preact';
import { ShareButtons, type ShareButtonsProps } from '.';

const meta: Meta<ShareButtonsProps> = {
  title: 'Components/Social/ShareButtons',
  tags: ['autodocs'],
  component: ShareButtons,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<ShareButtonsProps>;

export const Default: Story = {
  args: {
    url: 'https://example.com/article',
    title: 'Check out this amazing article!',
    description: 'This is a fascinating read about web development.',
  },
};

export const WithLabels: Story = {
  args: {
    url: 'https://example.com/product',
    title: 'Amazing Product Launch',
    description: 'Our new product is now available!',
    showLabels: true,
  },
};

export const WithCustomLabel: Story = {
  args: {
    url: 'https://example.com/blog-post',
    title: 'Interesting Blog Post',
    label: 'Share this article:',
    showLabels: true,
  },
};

export const SelectedPlatforms: Story = {
  args: {
    url: 'https://example.com',
    title: 'Share on selected platforms',
    platforms: ['facebook', 'twitter', 'linkedin'],
  },
};

export const SocialMediaOnly: Story = {
  args: {
    url: 'https://example.com/news',
    title: 'Breaking News!',
    platforms: ['facebook', 'twitter', 'linkedin'],
    showLabels: true,
  },
};

export const MessagingPlatforms: Story = {
  args: {
    url: 'https://example.com/event',
    title: 'Join our upcoming event',
    description: 'You are invited to our special event!',
    platforms: ['whatsapp', 'email'],
    showLabels: true,
  },
};

export const FacebookAndTwitter: Story = {
  args: {
    url: 'https://example.com',
    title: 'Quick share on social media',
    platforms: ['facebook', 'twitter'],
  },
};

export const EmailOnly: Story = {
  args: {
    url: 'https://example.com/newsletter',
    title: 'Monthly Newsletter',
    description: 'Read our latest newsletter with exciting updates!',
    platforms: ['email'],
    showLabels: true,
  },
};

export const Dropdown: Story = {
  args: {
    url: 'https://example.com/content',
    title: 'Share this content',
    description: 'Interesting content to share with others',
    dropdown: true,
  },
};

export const CompactIcons: Story = {
  args: {
    url: 'https://example.com/gallery',
    title: 'Photo Gallery',
    showLabels: false,
  },
};

export const BlogPost: Story = {
  args: {
    url: 'https://blog.example.com/how-to-build-apps',
    title: 'How to Build Modern Web Applications',
    description: 'A comprehensive guide to building scalable web applications using modern frameworks and best practices.',
    label: 'Share this guide:',
    showLabels: true,
  },
};

export const ProductPage: Story = {
  args: {
    url: 'https://shop.example.com/products/awesome-gadget',
    title: 'Check out this awesome gadget!',
    description: 'The latest innovation in tech. Limited time offer!',
    platforms: ['facebook', 'twitter', 'pinterest', 'whatsapp'],
    label: 'Tell your friends:',
    showLabels: true,
  },
};

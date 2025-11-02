import type { Meta, StoryObj } from '@storybook/preact';
import { Breadcrumbs, type BreadcrumbsProps } from '.';

const meta: Meta<BreadcrumbsProps> = {
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptops' },
    ],
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Article' },
    ],
    separator: '>',
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => alert('Home clicked') },
      { label: 'Settings', onClick: () => alert('Settings clicked') },
      { label: 'Profile' },
    ],
  },
};

export const WithMaxItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Level 1', href: '/l1' },
      { label: 'Level 2', href: '/l2' },
      { label: 'Level 3', href: '/l3' },
      { label: 'Level 4', href: '/l4' },
      { label: 'Current Page' },
    ],
    maxItems: 4,
  },
};

export const Simple: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Current Page' },
    ],
  },
};

export const ArrowSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/category/sub' },
      { label: 'Product' },
    ],
    separator: '→',
  },
};

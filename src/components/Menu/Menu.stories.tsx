import type { Meta, StoryObj } from '@storybook/preact';
import { Menu, type MenuProps } from '.';

const meta: Meta<MenuProps> = {
  title: 'Components/Navigation/Menu',
  tags: ['autodocs'],
  component: Menu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<MenuProps>;

const sampleItems = [
  { id: '1', label: 'Profile', icon: '👤' },
  { id: '2', label: 'Settings', icon: '⚙️' },
  { id: '3', label: 'Divider', divider: true },
  { id: '4', label: 'Logout', icon: '🚪' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithLinks: Story = {
  args: {
    items: [
      { id: '1', label: 'Home', href: '/', icon: '🏠' },
      { id: '2', label: 'About', href: '/about', icon: 'ℹ️' },
      { id: '3', label: 'Contact', href: '/contact', icon: '📧' },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      { id: '1', label: 'Available' },
      { id: '2', label: 'Disabled', disabled: true },
      { id: '3', label: 'Also Available' },
    ],
  },
};

export const Simple: Story = {
  args: {
    items: [
      { id: '1', label: 'Edit' },
      { id: '2', label: 'Duplicate' },
      { id: '3', label: 'Delete' },
    ],
  },
};

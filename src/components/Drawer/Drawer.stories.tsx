import type { Meta, StoryObj } from '@storybook/preact';
import { Drawer, type DrawerProps } from '.';

const meta: Meta<DrawerProps> = {
  title: 'Components/Overlay/Drawer',
  tags: ['autodocs'],
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<DrawerProps>;

export const Default: Story = {
  args: {
    children: 'Drawer content',
  },
};

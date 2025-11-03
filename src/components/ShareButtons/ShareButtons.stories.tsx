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
    children: 'ShareButtons content',
  },
};

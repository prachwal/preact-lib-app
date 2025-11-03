import type { Meta, StoryObj } from '@storybook/preact';
import { Icon, type IconProps } from '.';

const meta: Meta<IconProps> = {
  title: 'Components/Media/Icon',
  tags: ['autodocs'],
  component: Icon,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Default: Story = {
  args: {
    children: 'Icon content',
  },
};

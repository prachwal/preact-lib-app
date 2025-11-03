import type { Meta, StoryObj } from '@storybook/preact';
import { Image, type ImageProps } from '.';

const meta: Meta<ImageProps> = {
  title: 'Components/Media/Image',
  tags: ['autodocs'],
  component: Image,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<ImageProps>;

export const Default: Story = {
  args: {
    children: 'Image content',
  },
};

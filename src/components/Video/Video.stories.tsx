import type { Meta, StoryObj } from '@storybook/preact';
import { Video, type VideoProps } from '.';

const meta: Meta<VideoProps> = {
  title: 'Components/Media/Video',
  tags: ['autodocs'],
  component: Video,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<VideoProps>;

export const Default: Story = {
  args: {
    children: 'Video content',
  },
};

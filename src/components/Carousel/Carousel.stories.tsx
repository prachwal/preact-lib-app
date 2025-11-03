import type { Meta, StoryObj } from '@storybook/preact';
import { Carousel, type CarouselProps } from '.';

const meta: Meta<CarouselProps> = {
  title: 'Components/Special/Carousel',
  tags: ['autodocs'],
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CarouselProps>;

export const Default: Story = {
  args: {
    children: 'Carousel content',
  },
};

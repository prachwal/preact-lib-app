import type { Meta, StoryObj } from '@storybook/preact';
import { Testimonial, type TestimonialProps } from '.';

const meta: Meta<TestimonialProps> = {
  title: 'Components/Special/Testimonial',
  tags: ['autodocs'],
  component: Testimonial,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<TestimonialProps>;

export const Default: Story = {
  args: {
    children: 'Testimonial content',
  },
};

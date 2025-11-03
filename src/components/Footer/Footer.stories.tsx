import type { Meta, StoryObj } from '@storybook/preact';
import { Footer, type FooterProps } from '.';

const meta: Meta<FooterProps> = {
  title: 'Components/Layout/Footer',
  tags: ['autodocs'],
  component: Footer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    children: 'Footer content',
  },
};

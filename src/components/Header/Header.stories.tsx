import type { Meta, StoryObj } from '@storybook/preact';
import { Header, type HeaderProps } from '.';

const meta: Meta<HeaderProps> = {
  title: 'Components/Layout/Header',
  tags: ['autodocs'],
  component: Header,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {
    children: 'Header content',
  },
};

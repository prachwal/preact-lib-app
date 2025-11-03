import type { Meta, StoryObj } from '@storybook/preact';
import { Container, type ContainerProps } from '.';

const meta: Meta<ContainerProps> = {
  title: 'Components/Layout/Container',
  tags: ['autodocs'],
  component: Container,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<ContainerProps>;

export const Default: Story = {
  args: {
    children: 'Container content',
  },
};

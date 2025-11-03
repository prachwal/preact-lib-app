import type { Meta, StoryObj } from '@storybook/preact';
import { Spacer, type SpacerProps } from '.';

const meta: Meta<SpacerProps> = {
  title: 'Components/Layout/Spacer',
  tags: ['autodocs'],
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<SpacerProps>;

export const Default: Story = {
  args: {
    children: 'Spacer content',
  },
};

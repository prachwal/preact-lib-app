import type { Meta, StoryObj } from '@storybook/preact';
import { GridSystem, type GridSystemProps } from '.';

const meta: Meta<GridSystemProps> = {
  title: 'Components/Layout/GridSystem',
  tags: ['autodocs'],
  component: GridSystem,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<GridSystemProps>;

export const Default: Story = {
  args: {
    children: 'GridSystem content',
  },
};

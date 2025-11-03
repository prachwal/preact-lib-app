import type { Meta, StoryObj } from '@storybook/preact';
import { ShoppingCart, type ShoppingCartProps } from '.';

const meta: Meta<ShoppingCartProps> = {
  title: 'Components/E-commerce/ShoppingCart',
  tags: ['autodocs'],
  component: ShoppingCart,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<ShoppingCartProps>;

export const Default: Story = {
  args: {
    children: 'ShoppingCart content',
  },
};

import type { Meta, StoryObj } from '@storybook/preact';
import { ProductCard, type ProductCardProps } from '.';

const meta: Meta<ProductCardProps> = {
  title: 'Components/E-commerce/ProductCard',
  tags: ['autodocs'],
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<ProductCardProps>;

export const Default: Story = {
  args: {
    children: 'ProductCard content',
  },
};

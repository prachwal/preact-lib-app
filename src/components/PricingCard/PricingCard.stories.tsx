import type { Meta, StoryObj } from '@storybook/preact';
import { PricingCard, type PricingCardProps } from '.';

const meta: Meta<PricingCardProps> = {
  title: 'Components/Special/PricingCard',
  tags: ['autodocs'],
  component: PricingCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<PricingCardProps>;

export const Default: Story = {
  args: {
    children: 'PricingCard content',
  },
};

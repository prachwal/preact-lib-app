import type { Meta, StoryObj } from '@storybook/preact';
import { Rating, type RatingProps } from '.';

const meta: Meta<RatingProps> = {
  title: 'Components/Social/Rating',
  tags: ['autodocs'],
  component: Rating,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<RatingProps>;

export const Default: Story = {
  args: {
    value: 4,
  },
};

export const WithReviewCount: Story = {
  args: {
    value: 4.5,
    count: 128,
  },
};

export const Interactive: Story = {
  args: {
    value: 3,
    interactive: true,
    onChange: (value) => console.log('Rating changed to:', value),
  },
};

export const ReadOnly: Story = {
  args: {
    value: 5,
    readonly: true,
  },
};

export const HalfStars: Story = {
  args: {
    value: 3.5,
    allowHalf: true,
  },
};

export const Small: Story = {
  args: {
    value: 4,
    size: 'sm',
    count: 42,
  },
};

export const Medium: Story = {
  args: {
    value: 4.5,
    size: 'md',
    count: 256,
  },
};

export const Large: Story = {
  args: {
    value: 5,
    size: 'lg',
    count: 1024,
  },
};

export const NoStars: Story = {
  args: {
    value: 0,
    count: 0,
  },
};

export const OneStar: Story = {
  args: {
    value: 1,
    count: 12,
  },
};

export const TwoStars: Story = {
  args: {
    value: 2,
    count: 34,
  },
};

export const ThreeStars: Story = {
  args: {
    value: 3,
    count: 89,
  },
};

export const FourStars: Story = {
  args: {
    value: 4,
    count: 234,
  },
};

export const FiveStars: Story = {
  args: {
    value: 5,
    count: 567,
  },
};

export const InteractiveSmall: Story = {
  args: {
    value: 0,
    size: 'sm',
    interactive: true,
    onChange: (value) => alert(`You rated: ${value} stars`),
  },
};

export const InteractiveLarge: Story = {
  args: {
    value: 0,
    size: 'lg',
    interactive: true,
    onChange: (value) => console.log('New rating:', value),
  },
};

export const ProductRatings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }}>
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Product A</div>
        <Rating value={4.5} count={1234} allowHalf />
      </div>
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Product B</div>
        <Rating value={3.5} count={567} allowHalf />
      </div>
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Product C</div>
        <Rating value={5} count={2890} />
      </div>
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Product D</div>
        <Rating value={2} count={45} />
      </div>
    </div>
  ),
};

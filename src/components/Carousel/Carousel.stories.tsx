import type { Meta, StoryObj } from '@storybook/preact';
import { Carousel, type CarouselProps } from '.';

const meta: Meta<CarouselProps> = {
  title: 'Components/Special/Carousel',
  tags: ['autodocs'],
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CarouselProps>;

export const Default: Story = {
  args: {
    slides: [
      <div style={{ padding: '40px', background: 'var(--color-bg-secondary)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Slide 1</h2>
        <p>First slide content</p>
      </div>,
      <div style={{ padding: '40px', background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Slide 2</h2>
        <p>Second slide content</p>
      </div>,
      <div style={{ padding: '40px', background: 'var(--color-bg)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Slide 3</h2>
        <p>Third slide content</p>
      </div>,
    ],
    showArrows: true,
    showDots: true,
  },
};

export const WithoutArrows: Story = {
  args: {
    slides: [
      <div style={{ padding: '40px', background: 'var(--color-bg-secondary)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Product 1</h2>
        <p>Amazing product description</p>
      </div>,
      <div style={{ padding: '40px', background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Product 2</h2>
        <p>Another great product</p>
      </div>,
      <div style={{ padding: '40px', background: 'var(--color-bg)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Product 3</h2>
        <p>The best product yet</p>
      </div>,
    ],
    showArrows: false,
    showDots: true,
  },
};

export const WithAutoplay: Story = {
  args: {
    slides: [
      <div style={{ padding: '60px', background: 'var(--color-bg-secondary)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Feature 1</h2>
        <p>Auto-playing carousel</p>
      </div>,
      <div style={{ padding: '60px', background: 'var(--color-bg-tertiary)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Feature 2</h2>
        <p>Slides automatically</p>
      </div>,
      <div style={{ padding: '60px', background: 'var(--color-bg)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Feature 3</h2>
        <p>Every 3 seconds</p>
      </div>,
    ],
    showArrows: true,
    showDots: true,
    autoplay: 3000,
  },
};

export const SingleSlide: Story = {
  args: {
    slides: [
      <div style={{ padding: '40px', background: 'var(--color-bg-secondary)', color: 'var(--color-text)', textAlign: 'center', borderRadius: '8px' }}>
        <h2>Only Slide</h2>
        <p>No navigation needed for single slide</p>
      </div>,
    ],
  },
};

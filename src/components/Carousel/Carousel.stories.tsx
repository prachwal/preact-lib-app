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
      <div style={{ padding: '40px', background: '#e3f2fd', textAlign: 'center' }}>
        <h2>Slide 1</h2>
        <p>First slide content</p>
      </div>,
      <div style={{ padding: '40px', background: '#f3e5f5', textAlign: 'center' }}>
        <h2>Slide 2</h2>
        <p>Second slide content</p>
      </div>,
      <div style={{ padding: '40px', background: '#e8f5e9', textAlign: 'center' }}>
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
      <div style={{ padding: '40px', background: '#ffebee', textAlign: 'center' }}>
        <h2>Product 1</h2>
        <p>Amazing product description</p>
      </div>,
      <div style={{ padding: '40px', background: '#fff3e0', textAlign: 'center' }}>
        <h2>Product 2</h2>
        <p>Another great product</p>
      </div>,
      <div style={{ padding: '40px', background: '#f1f8e9', textAlign: 'center' }}>
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
      <div style={{ padding: '60px', background: '#e0f7fa', textAlign: 'center' }}>
        <h2>Feature 1</h2>
        <p>Auto-playing carousel</p>
      </div>,
      <div style={{ padding: '60px', background: '#fce4ec', textAlign: 'center' }}>
        <h2>Feature 2</h2>
        <p>Slides automatically</p>
      </div>,
      <div style={{ padding: '60px', background: '#f9fbe7', textAlign: 'center' }}>
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
      <div style={{ padding: '40px', background: '#ede7f6', textAlign: 'center' }}>
        <h2>Only Slide</h2>
        <p>No navigation needed for single slide</p>
      </div>,
    ],
  },
};

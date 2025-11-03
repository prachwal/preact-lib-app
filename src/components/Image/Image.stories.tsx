import type { Meta, StoryObj } from '@storybook/preact';
import { Image, type ImageProps } from '.';

const meta: Meta<ImageProps> = {
  title: 'Components/Media/Image',
  tags: ['autodocs'],
  component: Image,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    aspectRatio: {
      control: { type: 'select' },
      options: ['16-9', '4-3', '1-1', '3-2'],
    },
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain'],
    },
    rounded: {
      control: { type: 'select' },
      options: [false, true, 'lg', 'full'],
    },
    bordered: {
      control: 'boolean',
    },
    zoom: {
      control: 'boolean',
    },
    lazy: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ImageProps>;

const sampleImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600';

export const Default: Story = {
  args: {
    src: sampleImage,
    alt: 'Mountain landscape',
  },
};

export const WithCaption: Story = {
  args: {
    src: sampleImage,
    alt: 'Mountain landscape',
    caption: 'Beautiful mountain landscape',
  },
};

export const AspectRatios: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <Image
        src={sampleImage}
        alt="16:9 ratio"
        aspectRatio="16-9"
        caption="16:9 Aspect Ratio"
      />
      <Image
        src={sampleImage}
        alt="4:3 ratio"
        aspectRatio="4-3"
        caption="4:3 Aspect Ratio"
      />
      <Image
        src={sampleImage}
        alt="1:1 ratio"
        aspectRatio="1-1"
        caption="1:1 Aspect Ratio (Square)"
      />
      <Image
        src={sampleImage}
        alt="3:2 ratio"
        aspectRatio="3-2"
        caption="3:2 Aspect Ratio"
      />
    </div>
  ),
};

export const ObjectFit: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ width: '300px' }}>
        <Image
          src={sampleImage}
          alt="Cover"
          aspectRatio="1-1"
          objectFit="cover"
          caption="Object Fit: Cover"
        />
      </div>
      <div style={{ width: '300px' }}>
        <Image
          src={sampleImage}
          alt="Contain"
          aspectRatio="1-1"
          objectFit="contain"
          caption="Object Fit: Contain"
        />
      </div>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ width: '200px' }}>
        <Image
          src={sampleImage}
          alt="Default rounded"
          aspectRatio="1-1"
          rounded={true}
          caption="Rounded"
        />
      </div>
      <div style={{ width: '200px' }}>
        <Image
          src={sampleImage}
          alt="Large rounded"
          aspectRatio="1-1"
          rounded="lg"
          caption="Rounded Large"
        />
      </div>
      <div style={{ width: '200px' }}>
        <Image
          src={sampleImage}
          alt="Full rounded (circle)"
          aspectRatio="1-1"
          rounded="full"
          caption="Circle"
        />
      </div>
    </div>
  ),
};

export const Bordered: Story = {
  args: {
    src: sampleImage,
    alt: 'Bordered image',
    aspectRatio: '16-9',
    bordered: true,
    caption: 'Image with border',
  },
};

export const ZoomOnHover: Story = {
  args: {
    src: sampleImage,
    alt: 'Zoom on hover',
    aspectRatio: '16-9',
    zoom: true,
    caption: 'Hover to zoom',
  },
};

export const WithPlaceholder: Story = {
  args: {
    src: 'https://example.com/non-existent-image.jpg',
    alt: 'Will fail to load',
    aspectRatio: '16-9',
    placeholder: '🖼️ Loading...',
  },
};

export const AllFeatures: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '800px' }}>
      <Image
        src={sampleImage}
        alt="Feature 1"
        aspectRatio="16-9"
        caption="Standard Image"
      />
      <Image
        src={sampleImage}
        alt="Feature 2"
        aspectRatio="1-1"
        rounded="full"
        bordered
        caption="Circle with Border"
      />
      <Image
        src={sampleImage}
        alt="Feature 3"
        aspectRatio="4-3"
        zoom
        caption="Zoom on Hover"
      />
      <Image
        src={sampleImage}
        alt="Feature 4"
        aspectRatio="16-9"
        rounded="lg"
        bordered
        zoom
        caption="All Features Combined"
      />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/preact';
import { Card, CardHeader, CardMedia, CardBody, CardFooter, type CardProps } from '.';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: Card,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'outlined', 'filled'],
    },
    hoverable: {
      control: 'boolean',
    },
    clickable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Simple: Story = {
  args: {
    children: (
      <CardBody>
        <h3>Simple Card</h3>
        <p>This is a simple card with just a body.</p>
      </CardBody>
    ),
  },
};

export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <h3>Card Title</h3>
        <p>Subtitle</p>
      </CardHeader>
      <CardBody>
        <p>Card content goes here. This can be any content you want to display.</p>
      </CardBody>
    </Card>
  ),
};

export const WithMedia: Story = {
  render: () => (
    <Card style={{ maxWidth: '300px' }}>
      <CardMedia src="https://picsum.photos/300/200" alt="Sample image" />
      <CardBody>
        <h3>Beautiful Image</h3>
        <p>A card with an image at the top.</p>
      </CardBody>
    </Card>
  ),
};

export const FullCard: Story = {
  render: () => (
    <Card style={{ maxWidth: '350px' }}>
      <CardHeader>
        <h3>Complete Card</h3>
        <p style={{ color: '#888', fontSize: '0.875rem' }}>With all sections</p>
      </CardHeader>
      <CardMedia src="https://picsum.photos/350/200" alt="Card image" />
      <CardBody>
        <p>This card has a header, media, body, and footer sections.</p>
      </CardBody>
      <CardFooter>
        <button style={{ marginRight: '0.5rem' }}>Action 1</button>
        <button>Action 2</button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      <Card variant="elevated">
        <CardBody>
          <h4>Elevated</h4>
          <p>Default variant with shadow</p>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <h4>Outlined</h4>
          <p>Variant with border</p>
        </CardBody>
      </Card>
      <Card variant="filled">
        <CardBody>
          <h4>Filled</h4>
          <p>Variant with background</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Card variant="outlined" hoverable style={{ maxWidth: '300px' }}>
      <CardBody>
        <h3>Hover Me</h3>
        <p>This card has a hover effect.</p>
      </CardBody>
    </Card>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Card clickable onClick={() => alert('Card clicked!')} style={{ maxWidth: '300px' }}>
      <CardBody>
        <h3>Click Me</h3>
        <p>This entire card is clickable.</p>
      </CardBody>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item} variant="outlined" hoverable>
          <CardMedia src={`https://picsum.photos/200/150?random=${item}`} alt={`Image ${item}`} />
          <CardBody>
            <h4>Card {item}</h4>
            <p>Description for card {item}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

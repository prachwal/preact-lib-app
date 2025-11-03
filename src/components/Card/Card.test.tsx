import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import Card, { CardHeader, CardMedia, CardBody, CardFooter } from '.';

describe('Card', () => {
  it('renders with children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with elevated variant by default', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.querySelector('.card');
    expect(card).toHaveClass('card');
    expect(card).not.toHaveClass('card-outlined');
    expect(card).not.toHaveClass('card-filled');
  });

  it('renders with outlined variant', () => {
    const { container } = render(<Card variant="outlined">Content</Card>);
    expect(container.querySelector('.card')).toHaveClass('card', 'card-outlined');
  });

  it('renders with filled variant', () => {
    const { container } = render(<Card variant="filled">Content</Card>);
    expect(container.querySelector('.card')).toHaveClass('card', 'card-filled');
  });

  it('renders as hoverable', () => {
    const { container } = render(<Card hoverable>Content</Card>);
    expect(container.querySelector('.card')).toHaveClass('card', 'card-hoverable');
  });

  it('renders as clickable', () => {
    const { container } = render(<Card clickable>Content</Card>);
    const card = container.querySelector('.card');
    expect(card).toHaveClass('card', 'card-clickable');
  });

  it('renders as clickable when onClick provided', () => {
    const { container } = render(<Card onClick={() => {}}>Content</Card>);
    const card = container.querySelector('.card');
    expect(card).toHaveClass('card', 'card-clickable');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('calls onClick when card clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const { container } = render(<Card onClick={handleClick}>Content</Card>);
    
    const card = container.querySelector('.card');
    await user.click(card!);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    const { container } = render(<Card className="custom">Content</Card>);
    expect(container.querySelector('.card')).toHaveClass('card', 'custom');
  });
});

describe('CardHeader', () => {
  it('renders with children', () => {
    render(<CardHeader>Header content</CardHeader>);
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('has correct className', () => {
    const { container } = render(<CardHeader>Header</CardHeader>);
    expect(container.querySelector('.card-header')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardHeader className="custom">Header</CardHeader>);
    expect(container.querySelector('.card-header')).toHaveClass('card-header', 'custom');
  });
});

describe('CardMedia', () => {
  it('renders with image', () => {
    render(<CardMedia src="test.jpg" alt="Test image" />);
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test.jpg');
  });

  it('has correct className', () => {
    const { container } = render(<CardMedia src="test.jpg" alt="Test" />);
    expect(container.querySelector('.card-media')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardMedia src="test.jpg" alt="Test" className="custom" />);
    expect(container.querySelector('.card-media')).toHaveClass('card-media', 'custom');
  });
});

describe('CardBody', () => {
  it('renders with children', () => {
    render(<CardBody>Body content</CardBody>);
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('has correct className', () => {
    const { container } = render(<CardBody>Body</CardBody>);
    expect(container.querySelector('.card-body')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardBody className="custom">Body</CardBody>);
    expect(container.querySelector('.card-body')).toHaveClass('card-body', 'custom');
  });
});

describe('CardFooter', () => {
  it('renders with children', () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('has correct className', () => {
    const { container } = render(<CardFooter>Footer</CardFooter>);
    expect(container.querySelector('.card-footer')).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = render(<CardFooter className="custom">Footer</CardFooter>);
    expect(container.querySelector('.card-footer')).toHaveClass('card-footer', 'custom');
  });
});

describe('Card Composition', () => {
  it('renders a complete card with all sections', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardMedia src="test.jpg" alt="Test" />
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByAltText('Test')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});

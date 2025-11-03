import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Image from '.';

describe('Image', () => {
  it('renders with required props', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test image" />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('renders with custom className', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" className="custom-class" />);
    const wrapper = container.querySelector('.image-wrapper');
    expect(wrapper).toHaveClass('custom-class');
  });

  it('applies aspect ratio class', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" aspectRatio="16-9" />);
    const wrapper = container.querySelector('.image-wrapper');
    expect(wrapper).toHaveClass('image-aspect-16-9');
  });

  it('applies object fit class', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" objectFit="contain" />);
    const img = container.querySelector('img');
    expect(img).toHaveClass('image-contain');
  });

  it('applies rounded class', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" rounded={true} />);
    const img = container.querySelector('img');
    expect(img).toHaveClass('image-rounded');
  });

  it('applies rounded-lg class', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" rounded="lg" />);
    const img = container.querySelector('img');
    expect(img).toHaveClass('image-rounded-lg');
  });

  it('applies bordered class', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" bordered={true} />);
    const img = container.querySelector('img');
    expect(img).toHaveClass('image-bordered');
  });

  it('applies zoom class', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" zoom={true} />);
    const img = container.querySelector('img');
    expect(img).toHaveClass('image-zoom');
  });

  it('renders caption when provided', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" caption="Test caption" />);
    const caption = container.querySelector('.image-caption');
    expect(caption).toBeInTheDocument();
    expect(caption).toHaveTextContent('Test caption');
  });

  it('sets lazy loading by default', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('disables lazy loading when specified', () => {
    const { container } = render(<Image src="/test.jpg" alt="Test" lazy={false} />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('loading', 'eager');
  });
});

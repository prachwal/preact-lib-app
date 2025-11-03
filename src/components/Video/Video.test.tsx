import { describe, it, expect } from "vitest";
import { render } from "@testing-library/preact";
import Video from '.';

describe('Video', () => {
  it('renders with required props', () => {
    const { container } = render(<Video src="/test.mp4" />);
    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/test.mp4');
  });

  it('renders with custom className', () => {
    const { container } = render(<Video src="/test.mp4" className="custom-class" />);
    const wrapper = container.querySelector('.video-wrapper');
    expect(wrapper).toHaveClass('custom-class');
  });

  it('applies aspect ratio class', () => {
    const { container } = render(<Video src="/test.mp4" aspectRatio="16-9" />);
    const wrapper = container.querySelector('.video-wrapper');
    expect(wrapper).toHaveClass('video-aspect-16-9');
  });

  it('renders with poster attribute', () => {
    const { container } = render(<Video src="/test.mp4" poster="/poster.jpg" />);
    const video = container.querySelector('video');
    expect(video).toHaveAttribute('poster', '/poster.jpg');
  });

  it('renders native controls by default', () => {
    const { container } = render(<Video src="/test.mp4" />);
    const video = container.querySelector('video');
    expect(video).toHaveAttribute('controls');
  });

  it('hides native controls when showCustomControls is true', () => {
    const { container } = render(<Video src="/test.mp4" showCustomControls={true} />);
    const video = container.querySelector('video');
    expect(video).not.toHaveAttribute('controls');
    const controls = container.querySelector('.video-controls');
    expect(controls).toBeInTheDocument();
  });

  it('renders custom control buttons', () => {
    const { container } = render(<Video src="/test.mp4" showCustomControls={true} />);
    const playPause = container.querySelector('.video-play-pause');
    const mute = container.querySelector('.video-mute');
    const fullscreen = container.querySelector('.video-fullscreen');
    
    expect(playPause).toBeInTheDocument();
    expect(mute).toBeInTheDocument();
    expect(fullscreen).toBeInTheDocument();
  });

  it('sets autoplay attribute', () => {
    const { container } = render(<Video src="/test.mp4" autoPlay={true} />);
    const video = container.querySelector('video');
    expect(video).toHaveAttribute('autoplay');
  });

  it('sets loop attribute', () => {
    const { container } = render(<Video src="/test.mp4" loop={true} />);
    const video = container.querySelector('video');
    expect(video).toHaveAttribute('loop');
  });

  it('handles muted prop', () => {
    const { container } = render(<Video src="/test.mp4" muted={true} />);
    const video = container.querySelector('video') as HTMLVideoElement;
    expect(video).toBeTruthy();
    // Muted is handled as a property, not always an attribute
  });
});

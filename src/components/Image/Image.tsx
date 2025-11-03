import { useState } from 'preact/hooks';
import type { ImgHTMLAttributes } from 'preact/compat';

export type ImageAspectRatio = '16-9' | '4-3' | '1-1' | '3-2';
export type ImageObjectFit = 'cover' | 'contain';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  /** Image source URL */
  src: string;
  /** Alternative text for the image */
  alt: string;
  /** Aspect ratio of the image */
  aspectRatio?: ImageAspectRatio;
  /** How the image should be resized */
  objectFit?: ImageObjectFit;
  /** Whether the image should be rounded */
  rounded?: boolean | 'lg' | 'full';
  /** Whether to add a border */
  bordered?: boolean;
  /** Enable zoom on hover */
  zoom?: boolean;
  /** Image caption */
  caption?: string;
  /** Enable lazy loading */
  lazy?: boolean;
  /** Placeholder to show while loading */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Image component - Media category
 * Responsive image with aspect ratio, lazy loading, zoom, and caption support
 */
export const Image = ({
  src,
  alt,
  aspectRatio,
  objectFit = 'cover',
  rounded = false,
  bordered = false,
  zoom = false,
  caption,
  lazy = true,
  placeholder,
  className = '',
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const baseClass = 'image';
  const aspectClass = aspectRatio ? `image-aspect-${aspectRatio}` : '';
  const objectFitClass = `image-${objectFit}`;
  const roundedClass = rounded
    ? rounded === true
      ? 'image-rounded'
      : `image-rounded-${rounded}`
    : '';
  const borderedClass = bordered ? 'image-bordered' : '';
  const zoomClass = zoom ? 'image-zoom' : '';
  const responsiveClass = 'image-responsive';

  const wrapperClasses = [
    baseClass,
    'image-wrapper',
    aspectClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const imgClasses = [
    'image-img',
    objectFitClass,
    roundedClass,
    borderedClass,
    zoomClass,
    responsiveClass,
  ]
    .filter(Boolean)
    .join(' ');

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div className={wrapperClasses}>
      {!loaded && !error && placeholder && (
        <div className="image-placeholder">
          {placeholder}
        </div>
      )}
      {error ? (
        <div className="image-placeholder">
          <span>Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={imgClasses}
          loading={lazy ? 'lazy' : 'eager'}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
      {caption && <div className="image-caption">{caption}</div>}
    </div>
  );
};

export default Image;

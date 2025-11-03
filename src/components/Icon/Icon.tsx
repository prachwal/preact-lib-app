import { useState, useEffect } from 'preact/hooks';
import type { HTMLAttributes, JSX } from 'preact/compat';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export interface IconProps extends Omit<HTMLAttributes<HTMLDivElement>, 'src' | 'alt'> {
  /** Size of the icon */
  size?: IconSize;
  /** Color variant */
  color?: IconColor;
  /** Whether to render as a button */
  asButton?: boolean;
  /** Whether to apply spin animation */
  spin?: boolean;
  /** Whether to apply pulse animation */
  pulse?: boolean;
  /** Source URL for image icons */
  src?: string;
  /** Alt text for image icons */
  alt?: string;
  /** Fallback content when image fails to load */
  fallback?: string | JSX.Element;
  /** Whether to use lazy loading */
  lazy?: boolean;
  /** Aspect ratio for image icons */
  aspectRatio?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Icon component - Media category
 * Container for icons with size, color, animation, and image support
 */
export const Icon = ({ 
  size,
  color,
  asButton = false,
  spin = false,
  pulse = false,
  src,
  alt,
  fallback,
  lazy = false,
  aspectRatio,
  className = '', 
  children, 
  ...props 
}: IconProps) => {
  const [imageError, setImageError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);

  const baseClass = 'icon';
  const sizeClass = size ? `icon-${size}` : '';
  const colorClass = color ? `icon-${color}` : '';
  const buttonClass = asButton ? 'icon-button' : '';
  const spinClass = spin ? 'icon-spin' : '';
  const pulseClass = pulse ? 'icon-pulse' : '';
  const aspectClass = aspectRatio ? 'icon-aspect' : '';
  
  const classes = [baseClass, sizeClass, colorClass, buttonClass, spinClass, pulseClass, aspectClass, className]
    .filter(Boolean)
    .join(' ');

  const Component = asButton ? 'button' : 'div';

  // Lazy loading intersection observer
  useEffect(() => {
    if (!lazy || !src) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${classes}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [lazy, src, classes]);

  const handleImageError = () => setImageError(true);

  const renderContent = () => {
    if (src && isInView) {
      if (imageError) {
        return fallback || children || '⚠️';
      }

      return (
        <img
          src={src}
          alt={alt || ''}
          className="icon-image"
          style={aspectRatio ? { aspectRatio } : undefined}
          onError={handleImageError}
          loading={lazy ? 'lazy' : 'eager'}
        />
      );
    }

    return children;
  };

  return (
    <Component className={classes} {...props as any}>
      {renderContent()}
    </Component>
  );
};

export default Icon;

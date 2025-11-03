import type { HTMLAttributes } from 'preact/compat';

export type BackdropVariant = 'dark' | 'light';
export type BackdropOpacity = 'low' | 'normal' | 'high';

export interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  /** Variant of the backdrop */
  variant?: BackdropVariant;
  /** Opacity level */
  opacity?: BackdropOpacity;
  /** Enable blur effect */
  blur?: boolean;
  /** Show/hide backdrop */
  show?: boolean;
  /** Click handler for backdrop */
  onClick?: () => void;
}

export const Backdrop = ({
  variant = 'dark',
  opacity = 'normal',
  blur = false,
  show = false,
  className = '',
  onClick,
  ...props
}: BackdropProps) => {
  if (!show) return null;

  const baseClass = 'backdrop';
  const variantClass = variant !== 'dark' ? `backdrop-${variant}` : '';
  const opacityClass = opacity !== 'normal' ? `backdrop-opacity-${opacity}` : '';
  const blurClass = blur ? 'backdrop-blur' : '';

  const classes = [baseClass, variantClass, opacityClass, blurClass, className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} onClick={onClick} {...props} />;
};

export default Backdrop;

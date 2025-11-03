import type { ButtonHTMLAttributes } from 'preact';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({ variant = 'ghost', size = 'md', className = '', children, ...props }: ButtonProps) => {
  const baseClass = 'btn';
  const variantClass = variant !== 'ghost' ? `btn-${variant}` : 'btn';
  const sizeClass = size !== 'md' ? `btn-${size}` : '';

  const classes = [baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
export type SkeletonVariant = 'text' | 'circular' | 'rectangular';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  animation?: SkeletonAnimation;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton = ({ 
  variant = 'text',
  animation = 'pulse',
  width,
  height,
  className = ''
}: SkeletonProps) => {
  const baseClass = 'skeleton';
  const variantClass = `skeleton-${variant}`;
  const animationClass = animation !== 'none' ? `skeleton-${animation}` : '';
  
  const classes = [baseClass, variantClass, animationClass, className]
    .filter(Boolean)
    .join(' ');

  const style: Record<string, string> = {};
  
  if (width) {
    style.width = typeof width === 'number' ? `${width}px` : width;
  }
  
  if (height) {
    style.height = typeof height === 'number' ? `${height}px` : height;
  }

  return <div className={classes} style={style} aria-busy="true" aria-live="polite" />;
};

export default Skeleton;

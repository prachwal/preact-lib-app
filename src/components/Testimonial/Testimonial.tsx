import type { HTMLAttributes } from 'preact/compat';

export interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  /** Quote text */
  quote: string;
  /** Author name */
  author: string;
  /** Author title/position */
  title?: string;
  /** Company name */
  company?: string;
  /** Avatar image URL or element */
  avatar?: string | preact.ComponentChildren;
  /** Rating (1-5 stars) */
  rating?: number;
  /** Inline variant (no card styling) */
  inline?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Testimonial component - Special category
 * Display customer testimonials with quote, author info, and optional rating
 */
export const Testimonial = ({ 
  quote,
  author,
  title,
  company,
  avatar,
  rating,
  inline = false,
  className = '', 
  children, 
  ...props 
}: TestimonialProps) => {
  const baseClass = 'testimonial';
  const inlineClass = inline ? 'testimonial-inline' : '';
  
  const classes = [baseClass, inlineClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {rating && (
        <div className="testimonial-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < rating ? '★' : '☆'}</span>
          ))}
        </div>
      )}
      
      <blockquote className="testimonial-quote">
        {quote}
      </blockquote>
      
      <div className="testimonial-author">
        {avatar && (
          typeof avatar === 'string' ? (
            <img src={avatar} alt={author} className="testimonial-avatar" />
          ) : (
            <div className="testimonial-avatar">{avatar}</div>
          )
        )}
        
        <div className="testimonial-info">
          <div className="testimonial-name">{author}</div>
          {title && <div className="testimonial-title">{title}</div>}
          {company && <div className="testimonial-company">{company}</div>}
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default Testimonial;

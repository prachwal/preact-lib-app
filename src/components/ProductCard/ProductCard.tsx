import type { HTMLAttributes } from 'preact/compat';

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Product image URL */
  image: string;
  /** Product name/title */
  title: string;
  /** Product description */
  description?: string;
  /** Regular price */
  price: number | string;
  /** Sale price (if on sale) */
  salePrice?: number | string;
  /** Product rating (0-5) */
  rating?: number;
  /** Badge text (e.g., "SALE", "NEW") */
  badge?: string;
  /** Out of stock status */
  outOfStock?: boolean;
  /** Callback when add to cart is clicked */
  onAddToCart?: () => void;
  /** Callback when wishlist is clicked */
  onWishlist?: () => void;
  /** Callback when quick view is clicked */
  onQuickView?: () => void;
  /** Is item in wishlist */
  isInWishlist?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProductCard component - E-commerce category
 * Product display card with image, pricing, rating, and action buttons
 */
export const ProductCard = ({ 
  image,
  title,
  description,
  price,
  salePrice,
  rating,
  badge,
  outOfStock = false,
  onAddToCart,
  onWishlist,
  onQuickView,
  isInWishlist = false,
  className = '', 
  children, 
  ...props 
}: ProductCardProps) => {
  const baseClass = 'product-card';
  const outOfStockClass = outOfStock ? 'product-card-out-of-stock' : '';
  
  const classes = [baseClass, outOfStockClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      <div className="product-card-image-wrapper">
        <img src={image} alt={title} className="product-card-image" />
        
        {badge && <span className="product-card-badge">{badge}</span>}
        
        {onWishlist && (
          <button
            className="product-card-wishlist"
            onClick={onWishlist}
            aria-label="Add to wishlist"
            type="button"
          >
            {isInWishlist ? '❤️' : '🤍'}
          </button>
        )}
      </div>
      
      <div className="product-card-body">
        <h3 className="product-card-title">{title}</h3>
        
        {description && (
          <p className="product-card-description">{description}</p>
        )}
        
        <div className="product-card-price-wrapper">
          {salePrice ? (
            <>
              <span className="product-card-price">${salePrice}</span>
              <span className="product-card-price-regular">${price}</span>
            </>
          ) : (
            <span className="product-card-price">${price}</span>
          )}
        </div>
        
        {rating !== undefined && (
          <div className="product-card-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>{i < rating ? '★' : '☆'}</span>
            ))}
          </div>
        )}
        
        <div className="product-card-actions">
          {onAddToCart && (
            <button
              className="product-card-add-to-cart"
              onClick={onAddToCart}
              disabled={outOfStock}
              type="button"
            >
              {outOfStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
          )}
          
          {onQuickView && (
            <button
              className="product-card-quick-view"
              onClick={onQuickView}
              type="button"
            >
              Quick View
            </button>
          )}
        </div>
      </div>
      
      {children}
    </div>
  );
};

export default ProductCard;

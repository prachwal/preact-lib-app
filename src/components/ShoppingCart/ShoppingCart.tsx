import type { HTMLAttributes } from 'preact/compat';

export interface CartItem {
  /** Unique item ID */
  id: string | number;
  /** Item title */
  title: string;
  /** Item description */
  description?: string;
  /** Item price */
  price: number;
  /** Item quantity */
  quantity: number;
  /** Item image URL */
  image?: string;
}

export interface ShoppingCartProps extends HTMLAttributes<HTMLDivElement> {
  /** Cart items */
  items?: CartItem[];
  /** Callback when quantity changes */
  onQuantityChange?: (itemId: string | number, quantity: number) => void;
  /** Callback when item is removed */
  onRemove?: (itemId: string | number) => void;
  /** Callback when checkout is clicked */
  onCheckout?: () => void;
  /** Show empty state */
  empty?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ShoppingCart component - E-commerce category
 * Shopping cart with item list, quantity controls, and summary
 */
export const ShoppingCart = ({ 
  items = [],
  onQuantityChange,
  onRemove,
  onCheckout,
  empty = false,
  className = '', 
  children, 
  ...props 
}: ShoppingCartProps) => {
  const baseClass = 'cart';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax example
  const total = subtotal + tax;

  const handleQuantityChange = (itemId: string | number, delta: number) => {
    const item = items.find(i => i.id === itemId);
    if (!item) return;
    
    const newQuantity = Math.max(1, item.quantity + delta);
    if (onQuantityChange) {
      onQuantityChange(itemId, newQuantity);
    }
  };

  if (empty || items.length === 0) {
    return (
      <div className={classes} {...props}>
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <p>Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes} {...props}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
      </div>
      
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            {item.image && (
              <img src={item.image} alt={item.title} className="cart-item-image" />
            )}
            
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              {item.description && (
                <p className="cart-item-description">{item.description}</p>
              )}
              <div className="cart-item-price">${item.price.toFixed(2)}</div>
            </div>
            
            <div className="cart-item-quantity">
              <button
                className="cart-quantity-button"
                onClick={() => handleQuantityChange(item.id, -1)}
                type="button"
              >
                -
              </button>
              <span className="cart-quantity-value">{item.quantity}</span>
              <button
                className="cart-quantity-button"
                onClick={() => handleQuantityChange(item.id, 1)}
                type="button"
              >
                +
              </button>
            </div>
            
            {onRemove && (
              <button
                className="cart-item-remove"
                onClick={() => onRemove(item.id)}
                aria-label="Remove item"
                type="button"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-summary-row">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="cart-summary-row">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="cart-summary-row cart-summary-row-total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      {onCheckout && (
        <button className="cart-checkout" onClick={onCheckout} type="button">
          Proceed to Checkout
        </button>
      )}
      
      {children}
    </div>
  );
};

export default ShoppingCart;

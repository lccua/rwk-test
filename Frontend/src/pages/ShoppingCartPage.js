import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShoppingCartPage.css";

const ShoppingCartPage = ({ cart, setCart, setCartCount }) => {
  const navigate = useNavigate();

  const removeFromCart = (productId, size, quantity) => {
    const updatedCart = cart.filter((item) => !(item.id === productId && item.size === size));
    setCart(updatedCart);

    // Update cart counter correctly
    setCartCount((prevCount) => prevCount - quantity);
  };

  const updateQuantity = (productId, size, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === productId && item.size === size ? { ...item, quantity: newQuantity } : item
      )
    );

    // Recalculate total cart count after quantity update
    const updatedTotal = cart.reduce((sum, item) => 
      item.id === productId && item.size === size 
        ? sum + (newQuantity - item.quantity) 
        : sum, 
      0
    );

    setCartCount((prevCount) => prevCount + updatedTotal);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-items-container">
        <h1 className="cart-title">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">€{item.price.toFixed(2)}</p>
                <p className="cart-item-size">Size: {item.size}</p>
                <div className="cart-controls">
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>-</button>
                  <span className="cart-quantity">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size, item.quantity)}>Remove</button>
            </div>
          ))
        )}
      </div>

      {/* Checkout Section */}
      <div className="checkout-summary">
        <h3>Total: €{total.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
        <button className="back-to-shopping" onClick={() => navigate("/")}>
          Back to Shopping
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;

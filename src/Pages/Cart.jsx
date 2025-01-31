import React from "react";
import { useCart } from "../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="heading">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Display item image */}
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: ₹{item.pricePerDay}</p>

                {/* Display Size and Rental Duration */}
                <p>Size: {item.selectedSize}</p>
                <p>Rental Duration: {item.selectedDays} days</p>

                {/* Quantity controls */}
                <div className="quantity-controls">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value, 10))
                    }
                  />
                </div>
                
                {/* Remove Button */}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display Total Price */}
      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Total: ₹{calculateTotal()}</h2>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

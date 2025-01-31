import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product, selectedSize, selectedDays, totalPrice) => {
    setCartItems([
      ...cartItems,
      {
        id: product.id,
        name: product.name,
        pricePerDay: product.pricePerDay,
        selectedSize: selectedSize,
        selectedDays: selectedDays,
        price: totalPrice,
        image: product.mainImage, // Add image to the cart
        quantity: 1, // Initialize quantity as 1
      },
    ]);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  // Update item quantity in the cart
  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.pricePerDay * item.selectedDays * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/home/Navigation";
import Home from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); // Total quantity of items

  const addToCart = (product, quantity, size) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id && item.size === size);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity, size }];
    });

    setCartCount((prevCount) => prevCount + quantity); // Add quantity to cart count
  };

  return (
    <BrowserRouter>
      <Navigation cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCartPage cart={cart} setCart={setCart} setCartCount={setCartCount} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

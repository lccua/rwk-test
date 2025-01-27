import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage'; // Import the ProductPage component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} /> {/* Dynamic route for product details */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

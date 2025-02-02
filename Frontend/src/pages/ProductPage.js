import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productImage from '../assets/image/shop/RWK-tshirt--black.png';  // Update image path
import './ProductPage.css';

const ProductPage = ({ addToCart }) => {
  const { productId } = useParams();

  // Sample product data (You should ideally fetch this dynamically)
  const products = [
    { id: 1, title: "RWK Black T-Shirt", description: "A cool black t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L", "XL"] },
    { id: 2, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 3, title: "RWK Black T-Shirt", description: "A cool black t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L", "XL"] },
    { id: 4, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 5, title: "RWK Black T-Shirt", description: "A cool black t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L", "XL"] },
    { id: 6, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 7, title: "RWK Black T-Shirt", description: "A cool black t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L", "XL"] },
    { id: 8, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 9, title: "RWK Black T-Shirt", description: "A cool black t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L", "XL"] },
    { id: 10, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 11, title: "RWK Black T-Shirt", description: "A cool black t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L", "XL"] },
    { id: 12, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 13, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 14, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 15, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 16, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    { id: 17, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: 25, sizes: ["S", "M", "L"] },
    // Add more products as needed
  ];

  // Find the selected product based on the productId from the URL
  const product = products.find(p => p.id === parseInt(productId));

  // State for size and quantity
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "S");
  const [quantity, setQuantity] = useState(1);

  // Handle size change
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // Increase quantity
  const increaseQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);

  // Decrease quantity (ensuring it's always at least 1)
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
  };

  // Call the addToCart function when "Add to Cart" is clicked
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);  // Passing product, quantity, and size
  };

  return (
    <section className="product">
      {product ? (
        <>
          <img className='product__image' src={product.image} alt={product.title} />
          <div className='product__detail'>
            <h2 className='product__title'>{product.title}</h2>
            <p className='product__price'>€ {product.price}</p>

            {/* Size Selection */}
            <div className="product__size">
              <label htmlFor="size">Size </label>
              <select
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
              >
                {product.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selection */}
            <div className="product-quantity">
              <label htmlFor="quantity">Quantity </label>
              <div className="quantity-controls">
                <button onClick={decreaseQuantity} className="quantity-button">-</button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  min="1"
                />
                <button onClick={increaseQuantity} className="quantity-button">+</button>
              </div>
            </div>

            <p className='product__description'>{product.description}</p>
            <button className="button" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </>
      ) : (
        <p>Product not found!</p>
      )}
    </section>
  );
};

export default ProductPage;

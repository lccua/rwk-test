import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css'; // Import the CSS file for this component
import productImage from '../assets/image/shop/RWK-tshirt--black.png';


const ProductPage = () => {
  const { productId } = useParams();

  // Sample product data (you may want to fetch it dynamically)
  const products = [
    { id: 1, title: "RWK Black T-Shirt", description: "A cool black t-shirt", image: productImage, price: "€ 25", sizes: ["S", "M", "L", "XL"] },
    { id: 2, title: "RWK White T-Shirt", description: "A cool white t-shirt", image: productImage, price: "€ 25", sizes: ["S", "M", "L"] },
    // Add more products here
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
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Decrease quantity (ensuring it's always at least 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <section className="product">
      {product ? (
        <>
          <img className='product__image' src={product.image} alt={product.title} />

          <div className='product__detail'>
            <h2 className='product__title'>{product.title}</h2>
            <p className='product__price'>{product.price}</p>

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

            <button className="button">Add To Cart</button>
          </div>



        </>
      ) : (
        <p>Product not found!</p>
      )}
    </section>
  );
};

export default ProductPage;

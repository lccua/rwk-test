import React from 'react';
import { Link } from 'react-router-dom';
import productImage from '../../assets/image/shop/RWK-tshirt--black.png';

const Shop = () => {
  const products = [
    { id: 1, image: productImage, title: "RWK Black T-Shirt", buyLink: "https://buy.stripe.com/test_aEU2aPfradAv9ck5kk" },
    { id: 2, image: productImage, title: "RWK White T-Shirt", buyLink: "https://buy.stripe.com/test_aEU2aPfradAv9ck5kk" },
    { id: 3, image: productImage, title: "RWK Grey T-Shirt", buyLink: "https://buy.stripe.com/test_aEU2aPfradAv9ck5kk" },
    { id: 4, image: productImage, title: "RWK Blue T-Shirt", buyLink: "https://buy.stripe.com/test_aEU2aPfradAv9ck5kk" }
  ];

  return (
    <section className="shop">
      <div className="main-container main-container--shop">
        <h2>Our Shop</h2>
        <div className="shop__container">
          {products.map((product, index) => (
            <div key={index} className="shop__product">
              <Link to={`/product/${product.id}`}>
                <img 
                  className="shop__image" 
                  src={product.image} 
                  alt={product.title} 
                />
              </Link>
              <p className="shop__title">{product.title}</p>
              <a href={product.buyLink} target="_blank" rel="noopener noreferrer">
                <button className="button">Buy</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;

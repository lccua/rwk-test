import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navigation = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const goToCart = () => navigate("/cart");

  return (
    <header className="primary-header" id="home">
      <nav className="nav">
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav__list ${isMenuOpen ? 'active' : ''}`}>
          <li><a className="nav__link" href="/">Home</a></li>
          <li><a className="nav__link" href="#about">Shop</a></li>
          <li><a className="nav__link" href="#services">About Us</a></li>
          <li><a className="nav__link" href="#contact">Contact</a></li>
        </ul>
        <img className="nav__logo" src={logo} alt="navigation logo" />
        <div className="nav__social">
          <i className="fa-brands fa-spotify"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-facebook"></i>

          {/* Shopping Cart Icon */}
          <div className="cart-icon" onClick={goToCart} style={{ cursor: "pointer", position: "relative" }}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

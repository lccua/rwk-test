import React, { useState } from 'react';
import logo from '../../assets/image/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <li><a href="#about" className="nav__link">Shop</a></li>
          <li><a href="#services" className="nav__link">About Us</a></li>
          <li><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
        <img className="nav__logo" src={logo} alt="navigation logo" />
        <div className="nav__social">
          <i className="fa-brands fa-spotify" style={{color: '#000000'}}></i>
          <i className="fa-brands fa-youtube" style={{color: '#000000'}}></i>
          <i className="fa-brands fa-square-instagram" style={{color: '#000000'}}></i>
          <i className="fa-brands fa-square-facebook" style={{color: '#000000'}}></i>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

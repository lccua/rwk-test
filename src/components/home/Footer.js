import React from 'react';

import logo from '../../assets/image/logo.png';
import copyright from '../../assets/image/RWK-CORP.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container main-container--footer">
        <div className="footer__content">
          <div className="test">
            <img 
              className="footer__logo" 
              src={logo} 
              alt="navigation logo" 
            />
          </div>
          
          <ul className="footer__nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">Shop</a></li>
            <li><a href="#services">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        
          <div className="footer__social">
            <i className="fa-brands fa-spotify" style={{color: '#000000'}}></i>
            <i className="fa-brands fa-youtube" style={{color: '#000000'}}></i>
            <i className="fa-brands fa-square-instagram" style={{color: '#000000'}}></i>
            <i className="fa-brands fa-square-facebook" style={{color: '#000000'}}></i>
          </div>
        </div>

        <div className="section-divider"></div>
    
        <div className="footer__bottom">
          <span>
            © Copyright {new Date().getFullYear()}. Made by <img 
              className="rwk-corp" 
              src={copyright} 
              alt="" 
            /> 
          </span>
          <div className="footer__email">
            <i className="fa-solid fa-square-envelope"></i>
            <span><em>runwithknives100@gmail.com</em></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

import heroImage from '../../assets/image/hero-photo.png';


const Hero = () => {
  return (
    <section className="hero">
      <div className="main-container main-container--hero">
        <img className="hero__image" src={heroImage} alt="" />
        <div className="hero__content">
          <h1>The Anger...
            And The Feeling After</h1>
          <a href="#work">
            <button className="button">Stream Here</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
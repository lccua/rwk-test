import React from 'react';
import aboutImage from '../../assets/image/about-photo.jpg';


const About = () => {
  return (
    <section className="about" id="about">
      <div className="main-container main-container--about">
        <img 
          className="about__image" 
          src={aboutImage}
          alt="band photo"
        />
        <div className="about__content">
          <h2>About Us</h2>
          <p>
            Run With Knives is a band of distinct and (un)talented individuals 
            brought together by frontman Marlin. Their music is created for a 
            certain time and a certain place. Blending indie, rock and folk into 
            a sound uniquely their own. Drawing inspiration from iconic artists 
            like Elliott Smith, Interpol, The White Stripes, Silver Jews and 
            many more, they carve out their own little unique space of sonic 
            frequencies. Authentic, passionate, sometimes high in the clouds 
            but mostly down-to-earth, Run With Knives makes music you'll want 
            to lose yourself in, and they're pretty damn good at it too.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
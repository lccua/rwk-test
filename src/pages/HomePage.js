//libraries
import React from 'react'

//components
import Navigation from '../components/home/Navigation';
import Hero from '../components/home/Hero';
import Shop from '../components/home/Shop';
import About from '../components/home/About';
import Footer from '../components/home/Footer';

const HomePage = () => {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Shop />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage
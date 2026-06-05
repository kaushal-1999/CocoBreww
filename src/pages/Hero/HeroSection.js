import React from 'react';
import './HeroSection.css';

import {
  FaArrowRight,
  FaPlay,
  FaCoffee,
} from 'react-icons/fa';

import HeroCoffee from '../../assets/imges/coffeepack.png';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">

      {/* Background Glow */}
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      {/* Floating Elements */}
      <div className="floating-bean bean-1"></div>
      <div className="floating-bean bean-2"></div>
      <div className="floating-bean bean-3"></div>

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-left">

          <div className="hero-badge">
            <FaCoffee />
            <span>Premium Coffee Since 2022</span>
          </div>
          {/* <h1>
            Crafting Quality
            <span> Coffee </span>
            From Bean To Cup
          </h1> */}


          <h1>
            Specialty
            <span> Cocobreww Coffee </span>
            From Bean To Cup
          </h1>


          <p>
           Discover our signature blends, made with the finest ingredients for a rich, smooth, and fresh taste every time.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              <a href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
                Explore Products
              </a>
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              <FaPlay />
              Watch Story
            </button>

          </div>

          {/* Stats */}
          <div className="hero-stats">

            <div className="stat-box">
              <h2>25+</h2>
              <span>Premium Products</span>
            </div>

            <div className="stat-box">
              <h2>100%</h2>
              <span>Quality Coffee</span>
            </div>

            <div className="stat-box">
              <h2>2022</h2>
              <span>Established</span>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="hero-right">

          <div className="image-circle"></div>

          <img
            src={HeroCoffee}
            alt="CocoBrew Coffee"
            className="hero-image"
          />

          <div className="floating-card card-1">
            <h4>Freeze Dried</h4>
            <p>Premium Blend</p>
          </div>

          <div className="floating-card card-2">
            <h4>100% Arabica</h4>
            <p>Pure Coffee</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
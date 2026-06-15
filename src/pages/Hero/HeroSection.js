import React from 'react';
import './HeroSection.css';

import {
  FaArrowRight,
  FaPlay,
  FaCoffee,
} from 'react-icons/fa';

import HeroVideo from '../../assets/videos/herovid.mp4';

const HeroSection = () => {
  return (
    <section className="cb-hero" id="home">

      {/* Glow */}
      <div className="cb-hero__glow cb-glow-1"></div>
      <div className="cb-hero__glow cb-glow-2"></div>

      {/* Floating beans */}
      <div className="cb-hero__bean cb-bean-1"></div>
      <div className="cb-hero__bean cb-bean-2"></div>
      <div className="cb-hero__bean cb-bean-3"></div>

      <div className="cb-hero__container">

        {/* LEFT */}
        <div className="cb-hero__left">

          <div className="cb-hero__badge">
            <FaCoffee />
            <span>Premium Coffee Since 2023</span>
          </div>

          <h1 className="cb-hero__title">
            Specialty <span>Cocobreww Coffee</span> From Bean To Cup
          </h1>

          <p className="cb-hero__desc">
            Discover our signature blends, made with the finest ingredients for
            a rich, smooth, and fresh taste every time.
          </p>

          <div className="cb-hero__buttons">

            <button className="cb-btn cb-btn-primary">
              <a href="/products">Explore Products</a>
              <FaArrowRight />
            </button>

            <button className="cb-btn cb-btn-secondary">
              <FaPlay />
              Watch Story
            </button>

          </div>

          {/* STATS */}
          <div className="cb-hero__stats">

            <div className="cb-stat">
              <h2>25+</h2>
              <span>Premium Products</span>
            </div>

            <div className="cb-stat">
              <h2>100%</h2>
              <span>Quality Coffee</span>
            </div>

            <div className="cb-stat">
              <h2>2023</h2>
              <span>Established</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="cb-hero__right">

          <div className="cb-circle"></div>

          <video
            className="cb-hero__video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>

          <div className="cb-card cb-card-1">
            <h4>Freeze Dried</h4>
            <p>Premium Blend</p>
          </div>

          <div className="cb-card cb-card-2">
            <h4>100% Arabica</h4>
            <p>Pure Coffee</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
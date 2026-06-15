import React from "react";
import "./AboutSection.css";

import {
  FaCoffee,
  FaAward,
  FaLeaf,
  FaGlobe,
  FaRocket,
  FaUsers
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-glow glow-1"></div>
      <div className="about-glow glow-2"></div>

      <div className="about-container">

        {/* LEFT */}
        <div className="about-content">

          <span className="section-tag">
            About Cocobreww
          </span>

          <h2>
            Crafting Premium Coffee
            <span> Experiences </span>
            For Modern Consumers
          </h2>

          <p>
            Established in 2023, Cocobreww Foods & Beverages is committed
            to delivering premium-quality coffee products with innovation,
            exceptional taste, and global standards.
          </p>

          {/* <div className="about-stats">

            <div className="stat-card">
              <h3>25+</h3>
              <span>Products</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Arabica Blend</span>
            </div>

            <div className="stat-card">
              <h3>2022</h3>
              <span>Founded</span>
            </div>

          </div> */}

        </div>

        {/* RIGHT */}
        <div className="about-grid">

          <div className="glass-card">
            <FaCoffee />
            <h3>Premium Coffee</h3>
            <p>
              Carefully selected coffee beans processed with
              advanced techniques for superior flavor.
            </p>
          </div>

          <div className="glass-card">
            <FaLeaf />
            <h3>Natural Taste</h3>
            <p>
              Fresh aroma and authentic coffee taste in every cup.
            </p>
          </div>

          <div className="glass-card">
            <FaAward />
            <h3>Quality First</h3>
            <p>
              Every product follows strict quality standards.
            </p>
          </div>

          <div className="glass-card">
            <FaGlobe />
            <h3>Global Vision</h3>
            <p>
              Expanding premium coffee experiences across markets.
            </p>
          </div>

        </div>

      </div>

      {/* Vision Section */}

      <div className="vision-wrapper">

        <div className="vision-card">
          <FaRocket />
          <h3>Our Vision</h3>
          <p>
            To become a leading FMCG company delivering innovative,
            affordable and world-class beverage experiences.
          </p>
        </div>

        <div className="vision-card">
          <FaUsers />
          <h3>Our Mission</h3>
          <p>
            Creating memorable coffee moments through innovation,
            quality and customer satisfaction.
          </p>
        </div>

      </div>

    </section>
  );
};

export default AboutSection;
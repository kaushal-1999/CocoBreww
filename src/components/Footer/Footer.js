import React from 'react';
import './Footer.css';

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaCoffee,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">

      {/* Glow Effects */}
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">

          <div className="footer-logo">
            <div className="footer-logo-icon">
              <FaCoffee />
            </div>

            <div>
              <h2>COCOBREW</h2>
              <span>Premium Coffee & Beverages</span>
            </div>
          </div>

          <p>
            Crafting quality coffee from bean to cup with premium taste,
            innovation, and excellence.
          </p>

          <div className="footer-socials">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="https://wa.me/919699587827">
              <FaWhatsapp />
            </a>
          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#coffee">Coffee</a>
          <a href="#tea">Tea & Brew</a>
          <a href="#products">Products</a>
        </div>

        {/* Products */}
        <div className="footer-links">
          <h3>Products</h3>

          <a href="#">Instant Coffee</a>
          <a href="#">Agglomerated Coffee</a>
          <a href="#">Freeze Dried Coffee</a>
          <a href="#">Chocolate Premix</a>
          <a href="#">Iced Tea Powder</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            Survey no-2616 Near Sumangal Hospital,
            Palghar Manor Road.
          </p>

          <a href="tel:+919699587827">
            +91 96995 87827
          </a>

          <a href="mailto:cocobrewfoodsandbeverages@gmail.com">
            cocobrewfoodsandbeverages@gmail.com
          </a>

          <button
            className="scroll-top-btn"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
          >
            <FaArrowUp />
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Cocobrew Foods & Beverages. All Rights Reserved.
        </p>

        <h4>
          Designed By{' '}
          <a
            href="https://kaushalportfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="designer-link"
          >
            Kaushal Patil
          </a>
        </h4>
      </div>

    </footer>
  );
};

export default Footer;
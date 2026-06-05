import React, { useState } from 'react';
import './Navbar.css';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import NavLogo from '../../assets/imges/CocoBrewwlogo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-overlay"></div>

                <div className="navbar-container">

                    {/* Logo */}
                    <div className="navbar-logo">
                        <div className="logo-icon">
                            <img src={NavLogo} alt="CocoBrew Logo" />
                        </div>

                        <div className="logo-text">
                            <h2>COCOBREW</h2>
                            <span>Premium Coffee & Beverages</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="navbar-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/infrastructure">Infrastructure</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/packaging">Packaging</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/Order">Order</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

                    {/* Right CTA */}
                    <div className="navbar-right">
                        <a href="tel:+919699587827" className="contact-btn">
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div
                        className="mobile-menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
                    </div>

                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'show-mobile-menu' : ''}`}>
                <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
                <a href="/infrastructure">Infrastructure</a>
                <a href="/gallery">Gallery</a>
                <a href="/packaging">Packaging</a>
                <a href="/products">Products</a>
                <a href="/Order">Tea & Brew</a>
                <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <a href="tel:+919699587827" className="mobile-contact-btn">
                    +91 96995 87827
                </a>
            </div>
        </>
    );
};

export default Navbar;
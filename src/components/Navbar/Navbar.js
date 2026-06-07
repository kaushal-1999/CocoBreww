import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import NavLogo from "../../assets/imges/CocoBrewwlogo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileProductDropdown, setMobileProductDropdown] = useState(false);

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setMobileProductDropdown(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-overlay"></div>

                <div className="navbar-container">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="navbar-logo"
                        style={{ textDecoration: "none" }}
                    >
                        <div className="logo-icon">
                            <img src={NavLogo} alt="CocoBrew Logo" />
                        </div>

                        <div className="logo-text">
                            <h2>COCOBREW</h2>
                            <span>Premium Coffee & Beverages</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="navbar-links">

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/infrastructure">Infrastructure</Link>
                        </li>

                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>

                        <li>
                            <Link to="/packaging">Packaging</Link>
                        </li>

                        {/* Products Dropdown */}
                        <li className="dropdown">

                            <a href="#!">
                                Products ▾
                            </a>

                            <ul className="dropdown-menu">

                                <li>
                                    <Link to="/products/coffee">
                                        Coffee
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/products/tea">
                                        Tea & Iced Tea
                                    </Link>
                                </li>

                            </ul>

                        </li>
                        <li>
                            <Link to="/order">
                                Order
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </li>

                    </ul>

                    {/* Contact Button */}
                    <div className="navbar-right">
                        <a
                            href="tel:+919699587827"
                            className="contact-btn"
                        >
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

            <div
                className={`mobile-menu ${menuOpen ? "show-mobile-menu" : ""
                    }`}
            >

                <Link
                    to="/"
                    onClick={closeMobileMenu}
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    onClick={closeMobileMenu}
                >
                    About Us
                </Link>

                <Link
                    to="/infrastructure"
                    onClick={closeMobileMenu}
                >
                    Infrastructure
                </Link>

                <Link
                    to="/gallery"
                    onClick={closeMobileMenu}
                >
                    Gallery
                </Link>

                <Link
                    to="/packaging"
                    onClick={closeMobileMenu}
                >
                    Packaging
                </Link>

                {/* Mobile Products Dropdown */}

                <div className="mobile-dropdown">

                    <a
                        href="/#"
                        onClick={(e) => {
                            e.preventDefault();
                            setMobileProductDropdown(!mobileProductDropdown);
                        }}
                    >
                        Products ▾
                    </a>

                    {mobileProductDropdown && (
                        <div className="mobile-dropdown-menu">

                            <Link
                                to="/products/coffee"
                                onClick={closeMobileMenu}
                            >
                                Coffee
                            </Link>

                            <Link
                                to="/products/tea"
                                onClick={closeMobileMenu}
                            >
                                Tea & Iced Tea
                            </Link>

                        </div>
                    )}

                </div>

                <Link
                    to="/order"
                    onClick={closeMobileMenu}
                >
                    Order
                </Link>

                <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                >
                    Contact
                </Link>

                <a
                    href="tel:+919699587827"
                    className="mobile-contact-btn"
                >
                    +91 96995 87827
                </a>

            </div>
        </>
    );
};

export default Navbar;
import React from "react";
import "./PackagingPage.css";
import {
    FaBoxOpen,
    FaShippingFast,
    FaAward,
    FaTags,
    FaShieldAlt,
    FaGlobe
} from "react-icons/fa";

import pack1 from "../../assets/imges/pack1.jpg";
import pack2 from "../../assets/imges/pack2.jpg";
import pack3 from "../../assets/imges/pack3.jpg";
import pack4 from "../../assets/imges/pack4.jpg";

const Packaging = () => {
    return (
        <div className="pack-page">

            {/* HERO */}

            <section className="pack-hero">
                <div className="pack-overlay"></div>

                <div className="pack-hero-content">
                    <span>PREMIUM PACKAGING</span>

                    <h1>
                        Protecting Freshness,
                        Preserving Excellence
                    </h1>

                    <p>
                        Designed to maintain quality, freshness,
                        aroma and shelf life while enhancing brand
                        presentation and customer experience.
                    </p>
                </div>
            </section>

            {/* ABOUT */}

            <section className="pack-about">

                <div className="pack-about-image">
                    <img src={pack1} alt="" />
                </div>

                <div className="pack-about-content">

                    <span>PACKAGING SOLUTIONS</span>

                    <h2>
                        Innovative Packaging
                        For Every Requirement
                    </h2>

                    <p>
                        CocoBreww provides customized packaging
                        solutions for retail, horeca, vending,
                        institutional and export markets.
                    </p>

                    <div className="pack-features">

                        <div className="pack-feature">
                            <FaShieldAlt />
                            <h4>Freshness Protection</h4>
                        </div>

                        <div className="pack-feature">
                            <FaTags />
                            <h4>Custom Branding</h4>
                        </div>

                        <div className="pack-feature">
                            <FaGlobe />
                            <h4>Export Ready</h4>
                        </div>

                    </div>

                </div>

            </section>

            {/* TYPES */}

            <section className="pack-types">

                <div className="section-title">
                    <span>OUR PACKAGING</span>
                    <h2>Available Packaging Formats</h2>
                </div>

                <div className="pack-grid">

                    <div className="pack-card">
                        <FaBoxOpen />
                        <h3>Pouches</h3>
                        <p>
                            Multi-layer laminated pouches with
                            superior barrier protection.
                        </p>
                    </div>

                    <div className="pack-card">
                        <FaShippingFast />
                        <h3>Bulk Packs</h3>
                        <p>
                            Designed for institutional and horeca
                            customers.
                        </p>
                    </div>

                    <div className="pack-card">
                        <FaAward />
                        <h3>Retail Packs</h3>
                        <p>
                            Premium shelf-ready packaging with
                            custom branding.
                        </p>
                    </div>

                </div>

            </section>

            {/* GALLERY */}

            <section className="pack-gallery">

                <div className="gallery-box">
                    <img src={pack2} alt="" />
                </div>

                <div className="gallery-box">
                    <img src={pack3} alt="" />
                </div>

                <div className="gallery-box">
                    <img src={pack4} alt="" />
                </div>

            </section>

            {/* PROCESS */}

            <section className="pack-process">

                <div className="section-title">
                    <span>PROCESS</span>
                    <h2>Packaging Workflow</h2>
                </div>

                <div className="process-grid">

                    <div className="process-card">
                        <h1>01</h1>
                        <h4>Quality Check</h4>
                    </div>

                    <div className="process-card">
                        <h1>02</h1>
                        <h4>Filling Process</h4>
                    </div>

                    <div className="process-card">
                        <h1>03</h1>
                        <h4>Sealing & Testing</h4>
                    </div>

                    <div className="process-card">
                        <h1>04</h1>
                        <h4>Dispatch Ready</h4>
                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="pack-cta">

                <h2>
                    Premium Packaging Built
                    For Global Standards
                </h2>

                <p>
                    Combining protection, presentation and
                    performance in every package.
                </p>

                <button>
                    Contact Us
                </button>

            </section>

        </div>
    );
};

export default Packaging;
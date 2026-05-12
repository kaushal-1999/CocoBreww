import React from 'react';
import './AboutSection.css';
import { FaCoffee, FaAward, FaLeaf } from 'react-icons/fa';
const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-left">
                    <span className="section-tag">About Cocobrew</span>
                    <h2>
                        Premium Coffee Crafted With Quality & Innovation
                    </h2>
                    <p>
                        Cocobrew Foods and Beverage company established in 2022 with
                        a mission to deliver premium-quality coffee and beverages.
                    </p>
                    <div className="about-features">
                        <div className="feature-card">
                            <FaCoffee />
                            <div>
                                <h4>Premium Coffee</h4>
                                <span>International Quality</span>
                            </div>
                        </div>
                        <div className="feature-card">
                            <FaLeaf />
                            <div>
                                <h4>Natural Taste</h4>
                                <span>Fresh Aroma & Flavor</span>
                            </div>
                        </div>
                        <div className="feature-card">
                            <FaAward />
                            <div>
                                <h4>Trusted Brand</h4>
                                <span>Innovation & Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-box glow-box">
                        <h3>Our Vision</h3>
                        <p>
                            To become a leading FMCG organization delivering innovative
                            and affordable beverages globally.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection

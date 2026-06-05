import "./AboutPage.css";
import React from "react";
import About1 from "../../assets/imges/about1.jpeg";
import About2 from "../../assets/imges/about2.jpeg";
import About3 from "../../assets/imges/about3.jpeg";

export default function AboutPage() {
    return (
        <div className="cb-about-page">

            {/* HERO */}

            <section className="cb-about-hero">

                <div className="cb-about-overlay"></div>

                <div className="cb-about-hero-content">

                    <span className="cb-about-tag">
                        ABOUT COCOBREWW
                    </span>

                    <h1>
                        From Bean To Cup,
                        <span> Crafted To Perfection</span>
                    </h1>

                    <p>
                        Established in 2022, CocoBreww Foods & Beverage Company
                        delivers premium coffee experiences crafted with passion,
                        innovation and uncompromising quality.
                    </p>

                </div>

            </section>

            {/* STORY */}

            <section className="cb-story-section">

                <div className="cb-story-image">
                    <img src={About1} alt="" />
                </div>

                <div className="cb-story-content">

                    <span>OUR JOURNEY</span>

                    <h2>
                        Built On Quality,
                        Trust & Coffee Passion
                    </h2>

                    <p>
                        Established in 2022, CocoBreww Foods & Beverage Company was
                        founded with a clear vision — crafting premium-quality coffee
                        that meets international standards.
                    </p>

                    <p>
                        Guided by integrity, commitment, customer focus and excellence,
                        we have steadily grown into a trusted name in the coffee
                        industry.
                    </p>

                </div>

            </section>

            {/* IMAGE SHOWCASE */}

            <section className="cb-gallery">

                <div className="cb-gallery-card">
                    <img src={About1} alt="" />
                </div>

                <div className="cb-gallery-card">
                    <img src={About2} alt="" />
                </div>

                <div className="cb-gallery-card">
                    <img src={About3} alt="" />
                </div>

            </section>

            {/* FEATURES */}

            <section className="cb-features">

                <div className="cb-feature">
                    <h3>☕ Premium Beans</h3>
                    <p>
                        Carefully selected coffee beans delivering rich flavour.
                    </p>
                </div>

                <div className="cb-feature">
                    <h3>🔥 Slow Roasted</h3>
                    <p>
                        Signature blends roasted for aroma and smooth taste.
                    </p>
                </div>

                <div className="cb-feature">
                    <h3>🌱 Fresh Ingredients</h3>
                    <p>
                        Consistent quality and freshness in every cup.
                    </p>
                </div>

                <div className="cb-feature">
                    <h3>❤️ Customer First</h3>
                    <p>
                        Creating exceptional experiences for coffee lovers.
                    </p>
                </div>

            </section>

            {/* PROMISE */}

            <section className="cb-promise">

                <div className="cb-promise-content">

                    <span>OUR PROMISE</span>

                    <h2>
                        Excellence In Every Sip
                    </h2>

                    <ul>

                        <li>Premium-quality coffee crafted with care</li>

                        <li>Finest ingredients and consistent freshness</li>

                        <li>Rich flavour and smooth taste in every cup</li>

                        <li>Customer-focused service and experience</li>

                        <li>Commitment to quality, integrity and excellence</li>

                    </ul>

                </div>

            </section>

            {/* STATS */}

            <section className="cb-stats">

                <div>
                    <h2>2022</h2>
                    <p>Founded</p>
                </div>

                <div>
                    <h2>100%</h2>
                    <p>Quality Focus</p>
                </div>

                <div>
                    <h2>Premium</h2>
                    <p>Signature Blends</p>
                </div>

                <div>
                    <h2>Fresh</h2>
                    <p>Every Cup</p>
                </div>

            </section>

            {/* CTA */}

            <section className="cb-about-cta">

                <h2>
                    Bringing World-Class Coffee Experiences
                </h2>

                <p>
                    Through innovation, passion and dedication to quality,
                    CocoBreww continues to make every cup memorable.
                </p>

                <button>
                    Explore Products
                </button>

            </section>

        </div>
    );
}
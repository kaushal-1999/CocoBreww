import React, { useState } from "react";
import "./CoffeePage.css";
import { FaWhatsapp } from "react-icons/fa";

import productvid from "../../assets/videos/videoprpducts.mp4";

import coffee1 from "../../assets/products/coffee1.jpeg";
import coffee2 from "../../assets/products/coffee2.jpeg";
import coffee3 from "../../assets/products/coffee3.jpeg";
import coffee4 from "../../assets/products/coffee4.jpeg";

const coffeeProducts = [
    {
        name: "Spray Dried Premium Coffee",
        image: coffee1,
        description: "Rich aroma and consistent taste with premium spray dried instant coffee.",
        variants: ["100% Premium Coffee", "80% Coffee + 20% Chicory", "70% Coffee + 30% Chicory"]
    },
    {
        name: "Spray Dried Instant Coffee",
        image: coffee2,
        description: "Free flowing coffee powder with strong aroma and smooth taste.",
        variants: ["100% Pure Coffee", "80% Coffee + 20% Chicory", "70% Coffee + 30% Chicory", "53% Coffee + 47% Chicory"]
    },
    {
        name: "Agglomerated Coffee",
        image: coffee3,
        description: "Golden coffee granules with enhanced flavor and body.",
        variants: ["100% Coffee", "70% Coffee + 30% Chicory", "60% Coffee + 40% Chicory"]
    },
    {
        name: "Freeze Dried Coffee",
        image: coffee4,
        description: "Premium freeze dried coffee with rich aroma and mellow flavor.",
        variants: ["100% Arabica", "100% Robusta"]
    }
];

const CoffeePage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="coffee-page">

            {/* HERO */}
            <section className="coffee-hero">
                <video autoPlay muted loop playsInline className="coffee-hero-video">
                    <source src={productvid} type="video/mp4" />
                </video>

                <div className="coffee-hero-overlay"></div>

                <div className="coffee-hero-content">
                    <span>COCOBREWW COFFEE</span>

                    <h1>
                        Premium Coffee <br />
                        Collection
                    </h1>

                    <p>
                        High quality instant coffee solutions for cafes, vending machines and FMCG brands.
                    </p>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="coffee-section">

                <h2 className="coffee-title">Coffee Products</h2>

                <div className="coffee-grid">
                    {coffeeProducts.map((product, index) => (
                        <div
                            key={index}
                            className="coffee-card"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="coffee-img">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="coffee-content">
                                <h3>{product.name}</h3>
                                <button>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* MODAL */}
            {selectedProduct && (
                <div className="coffee-modal-overlay" onClick={() => setSelectedProduct(null)}>

                    <div className="coffee-modal" onClick={(e) => e.stopPropagation()}>

                        <button
                            className="coffee-close"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ✕
                        </button>

                        <div className="coffee-modal-img">
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                        </div>

                        <div className="coffee-modal-content">

                            <div className="coffee-modal-header">
                                <h2>{selectedProduct.name}</h2>
                                <div className="coffee-line"></div>
                            </div>

                            <p className="coffee-description">
                                {selectedProduct.description}
                            </p>

                            <h4 className="coffee-variant-title">Available Variants</h4>

                            <div className="coffee-variant-grid">
                                {selectedProduct.variants.map((variant, i) => (
                                    <div key={i} className="coffee-variant-card">
                                        {variant}
                                    </div>
                                ))}
                            </div>

                            <div className="coffee-modal-buttons">

                                <a
                                    href="https://wa.me/919699587827"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="coffee-whatsapp"
                                >
                                    <FaWhatsapp />
                                    Enquire Now
                                </a>

                                <button
                                    className="coffee-close-btn"
                                    onClick={() => setSelectedProduct(null)}
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
};

export default CoffeePage;
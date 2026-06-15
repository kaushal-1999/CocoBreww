import React, { useState } from "react";
import "./CoffeePage.css";
import productvid from "../../assets/videos/videoprpducts.mp4";

import { FaWhatsapp, FaCoffee } from "react-icons/fa";

import coffee1 from "../../assets/products/coffee1.jpeg";
import coffee2 from "../../assets/products/coffee2.jpeg";
import coffee3 from "../../assets/products/coffee3.jpeg";
import coffee4 from "../../assets/products/coffee4.jpeg";

const coffeeProducts = [
    {
        name: "Spray Dried Premium Coffee",
        image: coffee1,
        description:
            "Experience rich aroma and consistent taste with our Premium Spray Dried Instant Coffee Powder. Manufactured using advanced spray-drying technology, it dissolves instantly in hot water or milk, delivering a smooth and uniform flavor in every cup. Ideal for bulk preparation, vending machines, hotels, restaurants, cafes, and commercial applications.",
        variants: [
            "100% Premium Coffee",
            "80% Coffee + 20% Chicory",
            "70% Coffee + 30% Chicory"
        ]
    },

    {
        name: "Spray Dried Instant Coffee",
        image: coffee2,
        description:
            "Spray Dried Coffee Powder is a free-flowing, water-soluble coffee product crafted from premium Robusta and Arabica beans. It offers a smooth, slightly sweet, mildly acidic profile with a strong enhanced aroma and fuller body. Suitable for large-scale production and commercial beverage solutions. Available in bulk packaging of 25kg and 30kg corrugated cartons with PE bag protection.",
        variants: [
            "100% Pure Coffee",
            "80% Coffee + 20% Chicory",
            "70% Coffee + 30% Chicory",
            "53% Coffee + 47% Chicory"
        ]
    },

    {
        name: "Agglomerated Coffee",
        image: coffee3,
        description:
            "Agglomerated Coffee is produced through an advanced process where coffee particles are combined and treated using a steam belt or steam curtain technique. This creates larger golden coffee granules that dissolve quickly while preserving rich aroma, enhanced flavor, and stronger body. The controlled extraction process delivers a premium instant coffee experience.",
        variants: [
            "100% Agglomerated Pure Coffee",
            "70% Coffee + 30% Chicory",
            "60% Coffee + 40% Chicory"
        ]
    },

    {
        name: "Freeze Dried Coffee",
        image: coffee4,
        description:
            "Freeze Dried Instant Coffee is made from carefully selected premium Arabica and Robusta beans sourced from renowned coffee-growing regions around the world. Free from chicory and additives, the beans are roasted, extracted, concentrated, and freeze-dried using specialized technology to preserve their rich aroma, full body, smooth texture, and mellow flavor.",
        variants: [
            "100% Arabica Coffee",
            "100% Robusta Coffee"
        ]
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
            <FaCoffee className="variant-icon" />
            <span>{variant}</span>
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
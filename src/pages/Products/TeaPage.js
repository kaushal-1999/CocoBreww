import React, { useState } from "react";
import "./TeaPage.css";
import { FaWhatsapp } from "react-icons/fa";

import productvid from "../../assets/videos/teabackground.mp4";

import tea1 from "../../assets/products/tea1.jpeg";
import tea2 from "../../assets/products/tea2.jpeg";
import tea3 from "../../assets/products/tea3.jpeg";
import tea4 from "../../assets/products/tea4.jpeg";

import iced1 from "../../assets/products/iced1.jpeg";
import iced2 from "../../assets/products/iced2.jpeg";
import iced3 from "../../assets/products/iced3.jpeg";
import iced4 from "../../assets/products/iced4.jpeg";
import iced5 from "../../assets/products/iced5.jpeg";
import iced6 from "../../assets/products/iced6.jpeg";

/* ---------------- DATA (UNCHANGED) ---------------- */

const teaPremixProducts = [
    {
        name: "Black Lemon Tea",
        image: tea1,
        description:
            "A perfect flavorful combination of premium black tea and refreshing lemon flavor, delivering a smooth and crisp beverage experience. Designed for instant preparation, simply combine the mix with cold water, add ice, and enjoy a refreshing glass of iced tea anytime.",
        variants: [
            "Instant Premix",
            "Cold Beverage Mix",
            "Vending Machine Blend",
            "Bulk Commercial Pack",
        ],
    },
    {
        name: "Green Lemon Tea",
        image: tea2,
        description:
            "Green Lemon Iced Tea is a refreshing and revitalizing beverage that combines the goodness of green tea with the tangy citrus flavor of lemon. Rich in vitamins, minerals, and antioxidants, it offers a healthy and refreshing drink option suitable for cafes, offices, vending machines, and commercial beverage applications.",
        variants: [
            "Green Lemon Tea Premix",
            "Sugar-Free Variant",
            "Instant Beverage Mix",
            "Commercial Bulk Pack",
        ],
    },
    {
        name: "Nimbu Pani",
        image: tea3,
        description:
            "Nimbu Pani, also known as Indian Lemonade, is a refreshing and tangy beverage crafted to beat the summer heat. With its perfect balance of citrus flavor and sweetness, it provides instant refreshment and is ideal for commercial beverage solutions, cafes, restaurants, and vending machines.",
        variants: [
            "Classic Nimbu Pani",
            "Sweet Lemon Mix",
            "Instant Premix",
            "Bulk Pack",
        ],
    },
    {
        name: "Masala Shikanji",
        image: tea4,
        description:
            "Masala Shikanji is a traditional North Indian lemonade-style beverage infused with a special blend of aromatic spices. It offers a tangy, zesty, and mildly spicy flavor profile, making it a refreshing summer drink and a popular choice for festive occasions.",
        variants: [
            "Regular Masala Shikanji",
            "Extra Masala Blend",
            "Vending Machine Mix",
            "Commercial Bulk Pack",
        ],
    },
];

const icedTeaProducts = [
    {
        name: "Watermelon Iced Tea",
        image: iced1,
        description:
            "Watermelon Iced Tea combines premium tea extracts with the naturally sweet and fragrant flavor of watermelon. Rich in Vitamin C and micronutrients, it provides a refreshing beverage experience while offering potential health benefits including improved heart health and skin wellness. A perfect alternative to aerated soft drinks.",
        variants: ["250g Pack", "500g Pack", "1kg Pack", "Bulk Commercial Pack"],
    },
    {
        name: "Peach Iced Tea",
        image: iced2,
        description:
            "Peach Iced Tea delivers the smooth sweetness of ripe peaches blended with premium tea extracts. Its refreshing fruity aroma and balanced flavor make it an excellent choice for cafes, restaurants, and beverage brands seeking a premium iced tea solution.",
        variants: ["250g Pack", "500g Pack", "1kg Pack", "Bulk Commercial Pack"],
    },
    {
        name: "Orange Iced Tea",
        image: iced3,
        description:
            "Orange Iced Tea combines fresh orange flavor with premium tea and a refreshing citrus profile. Bright, flavorful, and uplifting, it offers a healthy beverage option that can be enjoyed throughout the day while delivering a refreshing and energizing experience.",
        variants: ["250g Pack", "500g Pack", "1kg Pack", "Bulk Commercial Pack"],
    },
    {
        name: "Mango Iced Tea",
        image: iced4,
        description:
            "Mango Iced Tea is crafted using the delicious taste of ripe Alphonso mangoes blended with premium tea extracts. Naturally refreshing and fruity, it is a perfect summer beverage that delivers tropical flavor and instant refreshment in every sip.",
        variants: ["250g Pack", "500g Pack", "1kg Pack", "Bulk Commercial Pack"],
    },
    {
        name: "Strawberry Iced Tea",
        image: iced5,
        description:
            "Strawberry Iced Tea is a refreshing blend of tea, juicy strawberries, and lemon notes. Naturally sweet and vibrant, it provides a delicious summer beverage experience and can be served chilled for maximum refreshment.",
        variants: ["250g Pack", "500g Pack", "1kg Pack", "Bulk Commercial Pack"],
    },
    {
        name: "Chocolate Iced Tea",
        image: iced6,
        description:
            "Chocolate Iced Tea combines the rich and creamy flavor of cocoa with the refreshing character of chilled black tea. Served over ice and optionally enhanced with milk or aromatic spices, it offers a unique and indulgent beverage experience unlike traditional iced teas.",
        variants: ["250g Pack", "500g Pack", "1kg Pack", "Bulk Commercial Pack"],
    },
];

/* ---------------- UI COMPONENT ---------------- */

const TeaPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const ProductCard = ({ product }) => (
        <div className="tea-card" onClick={() => setSelectedProduct(product)}>
            <div className="tea-img">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="tea-content">
                <h3>{product.name}</h3>
                <button type="button">View Details</button>
            </div>
        </div>
    );

    return (
        <div className="tea-page">

            {/* HERO */}
            <section className="tea-hero">
                <video autoPlay muted loop playsInline className="tea-hero-video">
                    <source src={productvid} type="video/mp4" />
                </video>

                <div className="tea-hero-overlay"></div>

                <div className="tea-hero-content">
                    <span>COCOBREWW TEA COLLECTION</span>
                    <h1>
                        Tea & <br /> Iced Tea Collection
                    </h1>
                    <p>Refreshing beverages crafted for modern consumers.</p>
                </div>
            </section>

            {/* TEA PREMIX */}
            <section className="tea-section">
                <h2 className="tea-title">Tea Premix</h2>
                <div className="tea-grid">
                    {teaPremixProducts.map((p, i) => (
                        <ProductCard key={i} product={p} />
                    ))}
                </div>
            </section>

            {/* ICED TEA */}
            <section className="tea-section">
                <h2 className="tea-title">Iced Tea</h2>
                <div className="tea-grid">
                    {icedTeaProducts.map((p, i) => (
                        <ProductCard key={i} product={p} />
                    ))}
                </div>
            </section>

            {/* MODAL */}
            {selectedProduct && (
                <div
                    className="tea-modal-overlay"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div className="tea-modal" onClick={(e) => e.stopPropagation()}>

                        <button
                            className="tea-close"
                            onClick={() => setSelectedProduct(null)}
                            type="button"
                        >
                            ✕
                        </button>

                        <div className="tea-modal-img">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                            />
                        </div>

                        <div className="tea-modal-content">
                            <h2>{selectedProduct.name}</h2>

                            <p>{selectedProduct.description}</p>

                            {/* SHOW ALL VARIANTS */}
                            <div className="tea-variants">
                                <h4>Available Variants:</h4>
                                <ul>
                                    {selectedProduct.variants.map((v, i) => (
                                        <li key={i}>{v}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tea-modal-buttons">
                                <a
                                    href="https://wa.me/919699587827"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="tea-whatsapp"
                                >
                                    <FaWhatsapp />
                                    Enquire Now
                                </a>

                                <button
                                    type="button"
                                    className="tea-close-btn"
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

export default TeaPage;
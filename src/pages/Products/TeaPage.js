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
import iced6 from "../../assets/products/iced6.jpeg";

const teaPremixProducts = [
    { name: "Black Lemon Tea", image: tea1, description: "Perfect blend of black tea and lemon flavor." },
    { name: "Green Lemon Tea", image: tea2, description: "Refreshing green tea infused with lemon." },
    { name: "Nimbu Pani", image: tea3, description: "Tangy Indian lemonade for instant refreshment." },
    { name: "Masala Shikanji", image: tea4, description: "Traditional Indian spicy lemonade." }
];

const icedTeaProducts = [
    { name: "Watermelon Iced Tea", image: iced1, description: "Refreshing watermelon flavored iced tea." },
    { name: "Peach Iced Tea", image: iced2, description: "Premium peach infused iced tea." },
    { name: "Orange Iced Tea", image: iced3, description: "Tangy orange iced tea blend." },
    { name: "Mango Iced Tea", image: iced4, description: "Refreshing mango iced tea." },
    { name: "Chocolate Iced Tea", image: iced6, description: "Rich chocolate flavored iced tea." }
];

const TeaPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

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

            {/* TEA SECTION */}
            <section className="tea-section">
                <h2 className="tea-title">Tea Premix</h2>

                <div className="tea-grid">
                    {teaPremixProducts.map((product, index) => (
                        <div
                            key={index}
                            className="tea-card"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="tea-img">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="tea-content">
                                <h3>{product.name}</h3>
                                <button>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ICED TEA SECTION */}
            <section className="tea-section">
                <h2 className="tea-title">Iced Tea</h2>

                <div className="tea-grid">
                    {icedTeaProducts.map((product, index) => (
                        <div
                            key={index}
                            className="tea-card"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="tea-img">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="tea-content">
                                <h3>{product.name}</h3>
                                <button>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MODAL */}
            {selectedProduct && (
                <div className="tea-modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="tea-modal" onClick={(e) => e.stopPropagation()}>

                        <button
                            className="tea-close"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ✕
                        </button>

                        <div className="tea-modal-img">
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                        </div>

                        <div className="tea-modal-content">
                            <h2>{selectedProduct.name}</h2>
                            <p>{selectedProduct.description}</p>

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
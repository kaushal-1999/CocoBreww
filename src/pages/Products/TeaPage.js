import React, { useState } from "react";
import "./ProductsPage.css";
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
    {
        name: "Black Lemon Tea",
        image: tea1,
        description: "Perfect blend of black tea and lemon flavor."
    },
    {
        name: "Green Lemon Tea",
        image: tea2,
        description: "Refreshing green tea infused with lemon."
    },
    {
        name: "Nimbu Pani",
        image: tea3,
        description: "Tangy Indian lemonade for instant refreshment."
    },
    {
        name: "Masala Shikanji",
        image: tea4,
        description: "Traditional Indian spicy lemonade."
    }
];

const icedTeaProducts = [
    {
        name: "Watermelon Iced Tea",
        image: iced1,
        description: "Refreshing watermelon flavored iced tea."
    },
    {
        name: "Peach Iced Tea",
        image: iced2,
        description: "Premium peach infused iced tea."
    },
    {
        name: "Orange Iced Tea",
        image: iced3,
        description: "Tangy orange iced tea blend."
    },
    {
        name: "Mango Iced Tea",
        image: iced4,
        description: "Refreshing mango iced tea."
    },
    {
        name: "Chocolate Iced Tea",
        image: iced6,
        description: "Rich chocolate flavored iced tea."
    }
];

const TeaPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="products-page">

            <section className="products-hero">
                <video autoPlay muted loop playsInline className="hero-video">
                    <source src={productvid} type="video/mp4" />
                </video>

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <span>COCOBREWW TEA COLLECTION</span>

                    <h1>
                        Tea &
                        <br />
                        Iced Tea Collection
                    </h1>

                    <p>
                        Refreshing beverages crafted for modern consumers.
                    </p>
                </div>
            </section>

            <section className="product-section">
                <h2 className="section-title">
                    Tea Premix
                </h2>

                <div className="product-grid">
                    {teaPremixProducts.map((product, index) => (
                        <div
                            key={index}
                            className="product-card"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="product-content">
                                <h3>{product.name}</h3>
                                <button>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="product-section">
                <h2 className="section-title">
                    Iced Tea
                </h2>

                <div className="product-grid">
                    {icedTeaProducts.map((product, index) => (
                        <div
                            key={index}
                            className="product-card"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="product-content">
                                <h3>{product.name}</h3>
                                <button>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {selectedProduct && (
                <div
                    className="product-modal-overlay"
                    onClick={() => setSelectedProduct(null)}
                >
                    <div
                        className="product-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-modal"
                            onClick={() => setSelectedProduct(null)}
                        >
                            ✕
                        </button>

                        <div className="modal-image">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                            />
                        </div>

                        <div className="modal-content">

                            <h2>{selectedProduct.name}</h2>

                            <p className="modal-description">
                                {selectedProduct.description}
                            </p>

                            <div className="modal-buttons">
                                <a
                                    href="https://wa.me/919699587827"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="whatsapp-btn"
                                >
                                    <FaWhatsapp />
                                    Enquire Now
                                </a>

                                <button
                                    className="close-btn-bottom"
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
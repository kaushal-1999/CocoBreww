import React, { useState } from "react";
import "./ProductsPage.css";
import { FaWhatsapp } from "react-icons/fa";

import productvid from "../../assets/videos/videoprpducts.mp4";

// Coffee Images
import coffee1 from "../../assets/products/coffee1.jpeg";
import coffee2 from "../../assets/products/coffee2.jpeg";
import coffee3 from "../../assets/products/coffee3.jpeg";
import coffee4 from "../../assets/products/coffee4.jpeg";

// Tea Images
import tea1 from "../../assets/products/tea1.jpeg";
import tea2 from "../../assets/products/tea2.jpeg";
import tea3 from "../../assets/products/tea3.jpeg";
import tea4 from "../../assets/products/tea4.jpeg";

// Iced Tea Images
import iced1 from "../../assets/products/iced1.jpeg";
import iced2 from "../../assets/products/iced2.jpeg";
import iced3 from "../../assets/products/iced3.jpeg";
import iced4 from "../../assets/products/iced4.jpeg";
import iced6 from "../../assets/products/iced6.jpeg";

const productData = [
  {
    category: "Coffee",
    products: [
      {
        name: "Spray Dried Premium Coffee",
        image: coffee1,
        description:
          "Rich aroma and consistent taste with premium spray dried instant coffee.",
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
          "Free flowing coffee powder with strong aroma and smooth taste.",
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
          "Golden coffee granules with enhanced flavor and body.",
        variants: [
          "100% Coffee",
          "70% Coffee + 30% Chicory",
          "60% Coffee + 40% Chicory"
        ]
      },
      {
        name: "Freeze Dried Coffee",
        image: coffee4,
        description:
          "Premium freeze dried coffee with rich aroma and mellow flavor.",
        variants: ["100% Arabica", "100% Robusta"]
      }
    ]
  },

  {
    category: "Tea Premix",
    products: [
      {
        name: "Black Lemon Tea",
        image: tea1,
        description:
          "Perfect blend of black tea and lemon flavor."
      },
      {
        name: "Green Lemon Tea",
        image: tea2,
        description:
          "Refreshing green tea infused with lemon."
      },
      {
        name: "Nimbu Pani",
        image: tea3,
        description:
          "Tangy Indian lemonade for instant refreshment."
      },
      {
        name: "Masala Shikanji",
        image: tea4,
        description:
          "Traditional Indian spicy lemonade."
      }
    ]
  },

  {
    category: "Iced Tea",
    products: [
      {
        name: "Watermelon Iced Tea",
        image: iced1,
        description:
          "Refreshing watermelon flavored iced tea."
      },
      {
        name: "Peach Iced Tea",
        image: iced2,
        description:
          "Premium peach infused iced tea."
      },
      {
        name: "Orange Iced Tea",
        image: iced3,
        description:
          "Tangy orange iced tea blend."
      },
      {
        name: "Mango Iced Tea",
        image: iced4,
        description:
          "Refreshing mango iced tea."
      },
      {
        name: "Chocolate Iced Tea",
        image: iced6,
        description:
          "Rich chocolate flavored iced tea."
      }
    ]
  }
];

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="products-page">

      {/* HERO SECTION */}

      <section className="products-hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={productvid} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span>COCOBREWW PRODUCTS</span>

          <h1>
            Premium Coffee &
            <br />
            Beverage Solutions
          </h1>

          <p>
            Crafted for Cafes, Hotels, Restaurants,
            Vending Machines and FMCG Brands.
          </p>
        </div>
      </section>

      {/* PRODUCT SECTIONS */}

      {productData.map((section, index) => (
        <section key={index} className="product-section">

          <h2 className="section-title">
            {section.category}
          </h2>

          <div className="product-grid">

            {section.products.map((product, i) => (
              <div
                key={i}
                className="product-card"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-content">
                  <h3>{product.name}</h3>

                  <button>
                    View Details
                  </button>
                </div>
              </div>
            ))}

          </div>

        </section>
      ))}

      {/* MODAL */}

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

            {/* IMAGE */}

            <div className="modal-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            {/* CONTENT */}

            <div className="modal-content">

              <div className="modal-header">
                <h2>{selectedProduct.name}</h2>

                <div className="modal-line"></div>
              </div>

              <p className="modal-description">
                {selectedProduct.description}
              </p>

              {selectedProduct.variants && (
                <>
                  <h4 className="variant-title">
                    Available Variants
                  </h4>

                  <div className="variant-grid">
                    {selectedProduct.variants.map(
                      (variant, index) => (
                        <div
                          key={index}
                          className="variant-card"
                        >
                          {variant}
                        </div>
                      )
                    )}
                  </div>
                </>
              )}

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

export default ProductsPage;
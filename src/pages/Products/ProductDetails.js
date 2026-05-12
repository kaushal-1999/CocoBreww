import React from 'react';
import './ProductDetails.css';

const products = [
    {
        id: 1,
        title: 'Spray Dried Coffee',
        image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',

        desc:
            'Premium spray dried coffee crafted using advanced drying technology for rich aroma and consistent taste.',

        features: [
            'Rich Aroma',
            'Instant Mix',
            'Premium Quality',
            'Long Shelf Life',
        ],
    },

    {
        id: 2,
        title: 'Freeze Dried Coffee',
        image:
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',

        desc:
            'Freeze dried coffee preserving authentic flavor and premium bean freshness for luxury coffee experience.',

        features: [
            'Luxury Flavor',
            'Premium Texture',
            'High Aroma',
            'Advanced Processing',
        ],
    },

    {
        id: 3,
        title: 'Agglomerated Coffee',
        image:
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',

        desc:
            'High-quality granulated coffee designed for smooth mixing and enhanced beverage consistency.',

        features: [
            'Fast Dissolve',
            'Smooth Taste',
            'Premium Blend',
            'Easy Mixing',
        ],
    },

    {
        id: 4,
        title: 'Orange Brew Tea',
        image:
            'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop',

        desc:
            'Refreshing orange flavored brew tea crafted for cold beverage lovers with fruity freshness.',

        features: [
            'Refreshing Taste',
            'Fruit Flavor',
            'Cold Brew',
            'Premium Ingredients',
        ],
    },
];

const ProductDetails = () => {
    return (
        <section className="product-details-page">

            {/* Glow Effects */}
            <div className="product-glow glow-1"></div>
            <div className="product-glow glow-2"></div>

            <div className="product-header">

                <span>Premium Beverage Collection</span>

                <h1>
                    Cocobrew Product Details
                </h1>

                <p>
                    Discover our premium coffee and beverage collection crafted
                    with innovation, advanced processing, and international quality.
                </p>

            </div>

            <div className="products-wrapper">

                {products.map((product, index) => (
                    <div
                        className={`product-detail-card ${index % 2 === 0 ? 'normal-row' : 'reverse-row'
                            }`}
                        key={product.id}
                    >

                        {/* IMAGE */}
                        <div className="product-image-section">

                            <div className="image-bg-circle"></div>

                            <img
                                src={product.image}
                                alt={product.title}
                            />

                        </div>

                        {/* CONTENT */}
                        <div className="product-content-section">

                            <span className="product-tag">
                                Premium Product
                            </span>

                            <h2>{product.title}</h2>

                            <p>{product.desc}</p>

                            <div className="feature-grid">

                                {product.features.map((feature, i) => (
                                    <div className="feature-box" key={i}>
                                        {feature}
                                    </div>
                                ))}

                            </div>

                            <button className="product-btn">
                                Explore More
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default ProductDetails;
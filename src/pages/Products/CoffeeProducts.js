import React from 'react';
import './CoffeeProducts.css';

const coffeeProducts = [
    {
        title: 'Spray Dried Coffee',
        image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
        desc:
            'Premium spray dried coffee with rich aroma and smooth texture.',
    },

    {
        title: 'Freeze Dried Coffee',
        image:
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop',
        desc:
            'Advanced freeze drying process preserving authentic coffee flavor.',
    },

    {
        title: 'Agglomerated Coffee',
        image:
            'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
        desc:
            'Premium granulated coffee crafted for perfect instant blending.',
    },

    {
        title: '100% Arabica',
        image:
            'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop',
        desc:
            'Smooth and aromatic coffee beans with premium quality taste.',
    },

    {
        title: '100% Robusta',
        image:
            'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?q=80&w=1200&auto=format&fit=crop',
        desc:
            'Strong bold flavor with intense caffeine-rich coffee experience.',
    },
];

const CoffeeProducts = () => {
    return (
        <section className="coffee-section" id="coffee">

            <div className="coffee-header">

                <span>Premium Collection</span>

                <h2>
                    Our Coffee Products
                </h2>

                <p>
                    Experience world-class coffee blends crafted with innovation,
                    premium beans, and advanced processing technology.
                </p>

            </div>

            <div className="coffee-grid">

                {coffeeProducts.map((item, index) => (
                    <div className="coffee-card" key={index}>

                        <div className="coffee-image-box">

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="coffee-overlay"></div>

                        </div>

                        <div className="coffee-content">

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                            <button>
                                Explore Product
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default CoffeeProducts;
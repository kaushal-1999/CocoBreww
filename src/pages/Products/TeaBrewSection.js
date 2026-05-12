import React from 'react';
import './TeaBrewSection.css';

const teaProducts = [
    {
        title: 'Orange Brew Tea',
        image:
            'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=1200&auto=format&fit=crop',
    },

    {
        title: 'Peach Brew Tea',
        image:
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    },

    {
        title: 'Mango Brew Tea',
        image:
            'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop',
    },

    {
        title: 'Strawberry Brew Tea',
        image:
            'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop',
    },

    {
        title: 'Masala Shikanji',
        image:
            'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop',
    },
];

const TeaBrewSection = () => {
    return (
        <section className="tea-section" id="tea">

            <div className="tea-header">

                <span>Refreshing Beverages</span>

                <h2>
                    Tea & Brew Collection
                </h2>

                <p>
                    Refresh your moments with fruity brew teas and traditional
                    premium beverages crafted for every season.
                </p>

            </div>

            <div className="tea-grid">

                {teaProducts.map((item, index) => (
                    <div className="tea-card" key={index}>

                        <img
                            src={item.image}
                            alt={item.title}
                        />

                        <div className="tea-card-content">

                            <h3>{item.title}</h3>

                            <button>
                                Discover More
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default TeaBrewSection;
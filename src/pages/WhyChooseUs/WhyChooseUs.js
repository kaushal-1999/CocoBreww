import React from 'react';
import './WhyChooseUs.css';

const data = [
    'Premium Quality Ingredients',
    'Modern Manufacturing',
    'Custom Beverage Solutions',
    'Fast Delivery Network',
    'Trusted FMCG Partner',
    'Innovative Product Range',
];

const WhyChooseUs = () => {
    return (

        <section className="why-section">

            <div className="why-container">

                <div className="why-left">

                    <span>Why Choose Us</span>

                    <h2>
                        Trusted Beverage
                        Manufacturing Partner
                    </h2>

                </div>

                <div className="why-grid">

                    {data.map((item, index) => (

                        <div
                            className="why-card"
                            key={index}
                        >
                            <h3>0{index + 1}</h3>

                            <p>{item}</p>
                        </div>

                    ))}

                </div>

            </div>

        </section>

    )
}

export default WhyChooseUs;
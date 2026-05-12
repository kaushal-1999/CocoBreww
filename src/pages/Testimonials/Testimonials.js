import React from 'react';
import './Testimonials.css';

const Testimonials = () => {

    return (

        <section className="testimonials-section">

            <div className="testimonials-container">

                <div className="testimonials-heading">

                    <span>Client Reviews</span>

                    <h2>
                        What Our Clients Say
                    </h2>

                </div>

                <div className="testimonials-grid">

                    <div className="testimonial-card">
                        <p>
                            “Outstanding beverage quality and
                            exceptional support for our café business.”
                        </p>

                        <h4>Rajesh Sharma</h4>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “Their coffee premixes helped scale
                            our vending machine business.”
                        </p>

                        <h4>Neha Patel</h4>
                    </div>

                    <div className="testimonial-card">
                        <p>
                            “Premium taste, professional service,
                            and reliable manufacturing.”
                        </p>

                        <h4>Amit Verma</h4>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Testimonials;
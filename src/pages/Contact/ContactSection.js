import React from 'react';
import './ContactSection.css';
import {
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa';

const ContactSection = () => {
    return (

        <section className="contact-section" id="contact">

            {/* Glow Effects */}
            <div className="contact-glow glow-1"></div>
            <div className="contact-glow glow-2"></div>

            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="contact-left">

                    <span className="contact-tag">
                        Contact Us
                    </span>

                    <h2>
                        Get In Touch With Cocobrew
                    </h2>

                    <p>
                        We deliver premium coffee and beverage solutions
                        with innovation, quality, and excellence.
                    </p>

                    {/* INFO BOXES */}

                    <div className="contact-info">

                        <div className="info-card">

                            <FaMapMarkerAlt />

                            <div>
                                <h4>Office Address</h4>

                                <p>
                                    Survey no-2616 Near Sumangal Hospital,
                                    Palghar Manor Road.
                                </p>
                            </div>

                        </div>

                        <div className="info-card">

                            <FaPhoneAlt />

                            <div>
                                <h4>Call Us</h4>

                                <a href="tel:+919699587827">
                                    +91 96995 87827
                                </a>
                            </div>

                        </div>

                        <div className="info-card">

                            <FaEnvelope />

                            <div>
                                <h4>Email</h4>

                                <a href="mailto:cocobrewfoodsandbeverages@gmail.com">
                                    cocobrewfoodsandbeverages@gmail.com
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* WHATSAPP BUTTON */}
{/* 
                    <a
                        href="https://wa.me/919273873173"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                    >
                        <FaWhatsapp />

                        Chat On WhatsApp
                    </a> */}

                </div>

                {/* RIGHT SIDE */}

                {/* RIGHT SIDE */}

                <form className="contact-form">

                    <h3>
                        Send Message
                    </h3>

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                    />

                    <textarea
                        placeholder="Write Your Message"
                    ></textarea>

                    {/* SEND BUTTON */}
                    <button type="submit">
                        Send Message
                    </button>

                    {/* WHATSAPP BUTTON BELOW */}
                    <a
                        href="https://wa.me/9699587827"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn form-whatsapp-btn"
                    >
                        <FaWhatsapp />

                        Chat On WhatsApp
                    </a>

                </form>

            </div>

        </section>

    )
}

export default ContactSection;
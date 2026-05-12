import React from 'react';
import './PremixSection.css';
import promovideo from '../../assets/videos/2.mp4';
import {
    FaCoffee,
    FaLeaf,
    FaSnowflake,
} from 'react-icons/fa';

const PremixSection = () => {
    return (

        <section className="premix-section">

            <div className="premix-video-overlay"></div>

            {/* BACKGROUND VIDEO */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="premix-video"
            >
                <source
                    src={promovideo}
                    type="video/mp4"
                />
                {/* <source
                    src="https://videos.pexels.com/video-files/3195650/3195650-uhd_2560_1440_25fps.mp4"
                    type="video/mp4"
                /> */}
            </video>

            <div className="premix-container">

                <div className="premix-left">

                    <span className="premix-tag">
                        Premium Premixes
                    </span>

                    <h2>
                        Instant Beverage
                        Solutions For
                        Modern Brands
                    </h2>

                    <p>
                        Cocobrew delivers innovative beverage premixes
                        crafted for cafés, restaurants, vending solutions,
                        hotels, and FMCG brands.
                    </p>

                </div>

                <div className="premix-grid">

                    <div className="premix-card">
                        <FaCoffee />

                        <h3>Instant Coffee</h3>

                        <p>
                            Rich aroma coffee premix with
                            premium quality beans.
                        </p>
                    </div>

                    <div className="premix-card">
                        <FaLeaf />

                        <h3>Tea Premix</h3>

                        <p>
                            Smooth and flavorful tea
                            crafted for every sip.
                        </p>
                    </div>

                    <div className="premix-card">
                        <FaSnowflake />

                        <h3>Cold Beverages</h3>

                        <p>
                            Refreshing cold coffee &
                            iced tea solutions.
                        </p>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default PremixSection;
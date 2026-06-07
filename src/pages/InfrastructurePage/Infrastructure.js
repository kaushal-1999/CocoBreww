import React from "react";
import "./Infrastructure.css";
import {
    FaIndustry,
    FaWarehouse,
    FaClipboardCheck,
    FaBoxes,
} from "react-icons/fa";

import infra1 from "../../assets/imges/infra1.jpg";
import infra2 from "../../assets/imges/infra2.jpg";
import infra3 from "../../assets/imges/infra3.jpg";
import infra4 from "../../assets/imges/infra4.jpg";

const Infrastructure = () => {
    return (
        <div className="infra-page">

            <section className="infra-hero">
                <div className="infra-overlay"></div>

                <div className="infra-hero-content">
                    <span>COCOBREWW INFRASTRUCTURE</span>

                    <h1>
                        Advanced Manufacturing &
                        Quality Infrastructure
                    </h1>

                    <p>
                        Built with modern technology, premium machinery,
                        strict quality control and efficient packaging
                        solutions to deliver world-class beverage products.
                    </p>
                </div>
            </section>

            <section className="infra-intro">

                <div className="infra-image">
                    <img src={infra1} alt="" />
                </div>

                <div className="infra-content">
                    <span>MANUFACTURING UNIT</span>

                    <h2>
                        State Of The Art Production Facility
                    </h2>

                    <p>
                        Our manufacturing unit is designed with
                        advanced processing equipment, hygienic
                        production standards and efficient workflows
                        ensuring consistency in every batch.
                    </p>

                    <div className="infra-cards">

                        <div className="infra-card">
                            <FaIndustry />
                            <h4>Automated Production</h4>
                        </div>

                        <div className="infra-card">
                            <FaClipboardCheck />
                            <h4>Quality Testing</h4>
                        </div>

                    </div>
                </div>

            </section>

            <section className="infra-grid-section">

                <div className="infra-grid-card">
                    <img src={infra2} alt="" />
                    <div className="infra-grid-content">
                        <FaWarehouse />
                        <h3>Storage Facility</h3>
                        <p>
                            Temperature controlled storage ensuring
                            freshness and product safety.
                        </p>
                    </div>
                </div>

                <div className="infra-grid-card">
                    <img src={infra3} alt="" />
                    <div className="infra-grid-content">
                        <FaBoxes />
                        <h3>Packaging Unit</h3>
                        <p>
                            Premium packaging solutions preserving
                            aroma, taste and shelf life.
                        </p>
                    </div>
                </div>

            </section>

            <section className="infra-stats">

                <div className="stat-box">
                    <h2>2022</h2>
                    <p>Established</p>
                </div>

                <div className="stat-box">
                    <h2>100%</h2>
                    <p>Quality Check</p>
                </div>

                <div className="stat-box">
                    <h2>24/7</h2>
                    <p>Support</p>
                </div>

                <div className="stat-box">
                    <h2>500+</h2>
                    <p>Customers</p>
                </div>

            </section>

            <section className="infra-full-image">
                <img src={infra4} alt="" />

                <div className="infra-full-overlay">
                    <h2>
                        Delivering Excellence From
                        Production To Packaging
                    </h2>

                    <p>
                        Every stage is monitored with precision,
                        ensuring premium quality and consistency.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Infrastructure;
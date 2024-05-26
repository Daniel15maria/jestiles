import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import headerImg from "../../assets/logo.png"; // Import the image file

const Aboutus = () => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    const subtitleRef = useRef(null);

    const handleTypingComplete = () => {
        setShowSubtitle(true);
    };

    return (
        <section id="arrange" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
            <div className="container text-center"> {/* Added text-center class */}
                <div className="row align-items-center">
                    <div className="col-md-10">
                        <h2 style={{ textDecoration: 'underline' }}>About Us</h2>
                        <div ref={subtitleRef}></div>

                        <div>
                            <p>
                                "We are a trusted Blocks & Pavers manufacturer in Pudukkottai, Tamil Nadu" <br />
                                We are one of the leading block manufacturers located at Pudukkottai, Tamil Nadu, India.
                                Our blocks are Eco-Friendly and are made from high-quality machines.
                                You can save 90% of sand, 90% of cement, 90% of water.
                                They are resistant to earthquakes, tsunamis, and all other natural calamities.
                                Our blocks can be used for constructing houses, luxury houses, godowns, factories, compound walls, etc.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img src={headerImg} alt="Header Img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;

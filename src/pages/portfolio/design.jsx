import React, { useState } from 'react';
import design1 from "./design/1.jpg";
import design2 from "./design/2.jpg";
import design3 from "./design/3.jpg";
import design4 from "./design/4.jpg";
import design5 from "./design/5.jpg";
import design6 from "./design/6.jpg";
import design7 from "./design/7.jpg";
import design8 from "./design/8.jpg";
import design9 from "./design/9.jpg";
import design10 from "./design/10.jpg";
import design11 from "./design/11.jpg";
import design12 from "./design/12.jpg";
import design13 from "./design/13.jpg";
import design14 from "./design/14.jpg";
import design15 from "./design/15.jpg";
import { Link } from "react-router-dom";

function Design() {
    const [selectedDesign, setSelectedDesign] = useState(null);

    const designs = [
        design1, design2, design3, design4, design5,
        design6, design7, design8, design9, design10,
        design11, design12, design13, design14, design15
    ];

    const handleImageClick = (design) => {
        setSelectedDesign(design);
    };

    const handleCloseModal = () => {
        setSelectedDesign(null);
    };

    return (
        <div>
            <section className="gallery min-vh-100">
                <div className="container-lg">
                    <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="button-container">
                            <Link to="/">
                                <button className="btn bg-warning sizeButton">steps back</button>
                            </Link>
                        </div>
                        {designs.map((design, index) => (
                            <div className="col" key={index}>
                                <img
                                    src={design}
                                    className="gallery-item bg-dark"
                                    alt={`design ${index + 1}`}
                                    onClick={() => handleImageClick(design)}
                                />
                            </div>
                        ))}
                        <div className="button-container">
                            <Link to="/">
                                <button className="btn bg-warning sizeButton">steps back</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {selectedDesign && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <img src={selectedDesign} alt="Selected Design" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Design;

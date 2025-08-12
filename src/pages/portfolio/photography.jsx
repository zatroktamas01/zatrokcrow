import React, { useState } from 'react';
import photo1 from "./photo/1.webp";
import photo2 from "./photo/2.webp";
import photo3 from "./photo/3.webp";
import photo4 from "./photo/4.webp";
import photo5 from "./photo/5.webp";
import photo6 from "./photo/6.webp";
import photo7 from "./photo/7.webp";
import photo8 from "./photo/8.webp";
import photo9 from "./photo/9.webp";
import photo10 from "./photo/10.webp";
import photo11 from "./photo/11.webp";
import photo12 from "./photo/12.webp";
import photo13 from "./photo/13.webp";
import photo14 from "./photo/14.webp";
import photo15 from "./photo/15.webp";
import photo16 from "./photo/16.webp";
import photo17 from "./photo/17.webp";
import photo18 from "./photo/18.webp";
import photo19 from "./photo/19.webp";
import photo20 from "./photo/20.webp";
import photo21 from "./photo/21.webp";
import photo22 from "./photo/22.webp";
import photo23 from "./photo/23.webp";
import photo24 from "./photo/24.webp";
import photo25 from "./photo/25.webp";
import photo26 from "./photo/26.webp";
import photo27 from "./photo/27.webp";
import { Link } from "react-router-dom";

function Photography() {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const photos = [
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,
        photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20,
        photo21, photo22, photo23, photo24, photo25, photo26, photo27
    ];

    const handleImageClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleCloseModal = () => {
        setSelectedPhoto(null);
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
                        {photos.map((photo, index) => (
                            <div className="col" key={index}>
                                <img
                                    src={photo}
                                    className="gallery-item bg-dark"
                                    alt={`gallery ${index + 1}`}
                                    onClick={() => handleImageClick(photo)}
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

            {selectedPhoto && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <img src={selectedPhoto} alt="Selected" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Photography;

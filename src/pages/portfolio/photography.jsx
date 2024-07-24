import React, { useState } from 'react';
import photo1 from "./photo/1.jpg";
import photo2 from "./photo/2.jpg";
import photo3 from "./photo/3.jpg";
import photo4 from "./photo/4.jpg";
import photo5 from "./photo/5.jpg";
import photo6 from "./photo/6.jpg";
import photo7 from "./photo/7.jpg";
import photo8 from "./photo/8.jpg";
import photo9 from "./photo/9.jpg";
import photo10 from "./photo/10.jpg";
import photo11 from "./photo/11.jpg";
import photo12 from "./photo/12.jpg";
import photo13 from "./photo/13.jpg";
import photo14 from "./photo/14.jpg";
import photo15 from "./photo/15.jpg";
import photo16 from "./photo/16.jpg";
import photo17 from "./photo/17.jpg";
import photo18 from "./photo/18.jpg";
import photo19 from "./photo/19.jpg";
import photo20 from "./photo/20.jpg";
import photo21 from "./photo/21.jpg";
import photo22 from "./photo/22.jpg";
import photo23 from "./photo/23.jpg";
import photo24 from "./photo/24.jpg";
import photo25 from "./photo/25.jpg";
import photo26 from "./photo/26.jpg";
import photo27 from "./photo/27.jpg";
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

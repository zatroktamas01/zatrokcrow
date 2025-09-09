// src/pages/mainpage/Aboutsection.jsx
import React from "react";
import quality1 from "./Quality/1.webp";          // <-- útvonal nálad ez volt
import { Link } from "react-router-dom";

function Aboutsection() {
  return (
    <section id="about" className="about section-padding about-me">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Kép */}
          <div className="col-12 col-lg-4">
            <img
              src={quality1}
              className="img-fluid about-photo about-photo--logo"
              alt="Zátrok Crow logo"
            />
          </div>

          {/* Szöveg */}
          <div className="col-12 col-lg-8 about-text text-start">
            <h1>About Me</h1>
            <p className="tagline">Three crafts — one mindset</p>

            <p className="intro">
              I’m <strong>Tamás Zátrok</strong> — photographer, web developer and designer.
              I blend <em>visual storytelling</em> with <em>functional digital experiences</em>
              to make ideas clear, usable and memorable.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-icon"><i className="bi bi-camera2" /></div>
                <div>
                  <h5>Photography</h5>
                  <p>Portraits, dance/fashion, creative composites. Direction, lighting, retouch.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-icon"><i className="bi bi-code-slash" /></div>
                <div>
                  <h5>Coding</h5>
                  <p>Fast React/SPAs, clean UI, responsive layouts, modern component patterns.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-icon"><i className="bi bi-palette" /></div>
                <div>
                  <h5>Design</h5>
                  <p>Brand, layout, social creatives — photography and graphics as one system.</p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap about-ctas">
              <Link to="/me-content">
                <button className="btn btn-warning sizeButton">Read More</button>
              </Link>
              <a href="mailto:zatroktamasjob@gmail.com" className="btn btn-dark sizeButton">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutsection;   // <-- DEFAULT EXPORT MEGOLDJA A HIBÁT

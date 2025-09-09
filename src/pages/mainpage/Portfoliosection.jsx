import section1 from "./section/1.jpg";
import section2 from "./section/2.jpg";
import section3 from "./section/3.jpg";
import { Link } from "react-router-dom";

function PortfolioSection() {
  return (
    <div>
      {/* Portfolio section */}
      <section id="portfolio" className="portfolio section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2>Portfolio</h2>
                <p className="lead">Art In Art</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Coding */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <h3 className="card-title">Coding</h3>
                  <div className="img-area mb-3">
                    <img src={section1} className="img-fluid" alt="Coding preview" />
                  </div>
                  <Link to="/software">
                    <button className="btn bg-warning sizeButton">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Photography */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <h3 className="card-title">Photography</h3>
                  <div className="img-area mb-3">
                    <img src={section2} className="img-fluid" alt="Photography preview" />
                  </div>
                  <Link to="/Photography">
                    <button className="btn bg-warning sizeButton">See More</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Design */}
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <h3 className="card-title">Design</h3>
                  <div className="img-area mb-3">
                    <img src={section3} className="img-fluid" alt="Design preview" />
                  </div>
                  <Link to="/Design">
                    <button className="btn bg-warning sizeButton">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioSection;

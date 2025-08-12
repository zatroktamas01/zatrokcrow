import Carousel from 'react-bootstrap/Carousel';
import slider1 from "./slider/1.jpg";
import slider2 from "./slider/2.jpg";
import slider3 from "./slider/3.jpg";

function Slider() {
  return (
    <section id="home">
      <Carousel
        prevIcon={<span className="custom-carousel-control-prev-icon" />}
        nextIcon={<span className="custom-carousel-control-next-icon" />}
      >
        <Carousel.Item>
          <img src={slider1} className="d-block w-100" alt="Software Development" />
          <Carousel.Caption>
            <h5>Coding</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider2} className="d-block w-100" alt="Photography" />
          <Carousel.Caption>
            <h5 className="text-dark">Photography</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slider3} className="d-block w-100" alt="Design" />
          <Carousel.Caption>
            <h5 className="text-black-50">Design</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );

  /*return <div>
    <section id="home" className="about section-padding">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider1} className="d-block w-100" alt="..." />
              <div className="carousel-caption">
                <h5>Software</h5>
                <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
                <br />
              </div>
            </div>

            <div className="carousel-item">
              <img src={slider2} className="d-block w-100" alt="..." />
              <div className="carousel-caption text-white">
                <h5>Photography</h5>
                <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
                <br />
              </div>

            </div>
            <div className="carousel-item">
              <img src={slider3} className="d-block w-100" alt="..." />
              <div className="carousel-caption text-black-50">
                <h5>Design</h5>
                <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
                <br />
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>*/

}

export default Slider;
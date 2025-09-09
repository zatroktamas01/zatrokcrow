import Carousel from "react-bootstrap/Carousel";
import slider1 from "./slider/1.webp";
import slider2 from "./slider/2.webp";
import slider3 from "./slider/3.webp";

function Slider() {
  return (
    <section id="home" className="hero-slider">
      <Carousel
        className="hero-carousel"
        interval={5000}
        indicators={false}
        prevIcon={<span className="custom-carousel-control-prev-icon" />}
        nextIcon={<span className="custom-carousel-control-next-icon" />}
      >
        <Carousel.Item className="hero-slide">
          <img src={slider1} className="d-block w-100" alt="Software Development" />
          <Carousel.Caption className="hero-caption">
            <h5>Coding</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="hero-slide">
          <img src={slider2} className="d-block w-100" alt="Photography" />
          <Carousel.Caption className="hero-caption">
            <h5>Photography</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="hero-slide">
          <img src={slider3} className="d-block w-100" alt="Design" />
          <Carousel.Caption className="hero-caption">
            <h5>Design</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Slider;

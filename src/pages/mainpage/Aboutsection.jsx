import quality1 from "./Quality/1.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {/* about section */}
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 about-text">
              <h1>About Me</h1>
              <h3>Showcasing Creativity<br />One Project at a Time</h3>
              <p>
                Welcome to my portfolio! Here, you'll find a collection of my work that showcases my creativity, skills, and passion.
                Each project represents a journey of innovation and dedication, highlighting my ability to bring ideas to life.
                Whether you're here to explore my latest creations or to get a sense of my professional capabilities, 
                I hope you find inspiration and insight in what I have to offer. Thank you for visiting!
                <br />
                <br />
                <Link to="/me-content">
                  <button className="btn btn-warning sizeButton">Read More</button>
                </Link>
              </p>
            </div>
            <div className="col-lg-4">
              <img src={quality1} className="img-fluid imgProfile" alt="Profile" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  {/*<section id="about" className="about section-padding">
      <div className=" container">
        <div className="row">
          <div className="col-lg-8 col-md-12.col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h1>About Me</h1>
              <h3>Showcasing Creativity<br />One Project at a Time</h3>
              <p>Welcome to my portfolio! Here, you'll find a collection of my work that showcases my creativity, skills, and passion.
                Each project represents a journey of innovation and dedication, highlighting my ability to bring ideas to life.
                Whether you're here to explore my latest creations or to get a sense of my professional capabilities, I hope you find inspiration and insight in what I have to offer.
                Thank you for visiting!

                <i className="bi bi-facebook text-dark mx-1 large-icon"></i>
                <i className="bi bi-linkedin text-dark mx-1 large-icon"></i>
                <i className="bi bi-instagram text-dark mx-1 large-icon"></i>
              </p>
              <a href="#" className="btn btn-warning sizeButton">Read More</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-12 imgProfile">
            <div className="about-img">
              <img src={quality1} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>*/}
}

export default About;

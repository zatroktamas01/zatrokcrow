import MeContent1 from "./crow.png";
import MeContent2 from "./1.png";

function MeContent() {
  return (
    <div className="hero">
      <div className="detel">
        <h1>
          I'm Tamás <span>Zátrok</span>
        </h1>
        <p>
          Photographer • Web Developer • Designer <br />
          Creativity through visuals and code.
        </p>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/zatrokcrowPhotography"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook large-iconFacebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/z%C3%A1trok-tam%C3%A1s-234b45217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin large-iconLinkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/zatrok_crow_photo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram large-iconInstagram"></i>
          </a>
          <a
            href="https://github.com/zatroktamas01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github large-iconGithub"></i>
          </a>
        </div>

        <a
          href="https://drive.google.com/drive/folders/1MPYviDEXZHq9dUTHTIokmyce9_63IiBA?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark sizeButton"
        >
          Get My CV
        </a>
      </div>

      <div className="images">
        <img src={MeContent1} alt="Crow background graphic" className="shape" />
        <img src={MeContent2} alt="Portrait of Tamás Zátrok" className="boy" />
      </div>
    </div>
  );
}

export default MeContent;

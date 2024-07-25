import MeContent1 from "./crow.png"
import MeContent2 from "./1.png"
//import { Link } from "react-router-dom";


function MeContent() {
  return <div>
    <div className="hero">
      <div className="detel">
        <h1>I'm Tamás <span>Zátrok</span></h1>
        <p>This is my official portfolio website to show all<br />
          Details and work experience in web development
          <br />

          <a href="https://www.facebook.com/zatrokcrowPhotography" target="_blank" rel="noopener noreferrer">
            <button className="bi bi-facebook text-dark mx-1 large-iconFacebook"></button>
          </a>

          <a href="https://www.linkedin.com/in/z%C3%A1trok-tam%C3%A1s-234b45217/" target="_blank" rel="noopener noreferrer">
            <button className="bi bi-linkedin text-dark mx-1 large-iconLinkedin"></button>
          </a>

          <a href="https://www.instagram.com/zatrok_crow_photo/" target="_blank" rel="noopener noreferrer">
            <button className="bi bi-instagram text-dark mx-1 large-iconInstagram"></button>
          </a>

          <a href="https://github.com/zatroktamas01" target="_blank" rel="noopener noreferrer">
            <button className="bi bi-github text-dark mx-1 large-iconGithub"></button>
          </a>

          <br />
          <a href="https://drive.google.com/drive/folders/1MPYviDEXZHq9dUTHTIokmyce9_63IiBA?usp=drive_link" target="download" className=".bg-dark">DOWNLOAD CV</a> 
        </p>


      </div>
      <div className="images">
        <img src={MeContent1} alt className="shape" />
        <img src={MeContent2} alt className="boy" />
      </div>
    </div>
  </div>
}

export default MeContent;

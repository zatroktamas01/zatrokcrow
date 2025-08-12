import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function navbar() {

  return (
    <Navbar expand="lg" className="bg-light" fixed="top">
      <Container className="custom-container">
        <Navbar.Brand><span className="text-danger">Zátrok</span>Crow</Navbar.Brand>
        {/*
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"><span className='boldNavMenu'>Home</span></Nav.Link>
            <Nav.Link href="#about"><span className='boldNavMenu'>About Me</span></Nav.Link>
            <Nav.Link href="#portfolio"><span className='boldNavMenu'>Portfolio</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        */}
      </Container>
    </Navbar>
  );


  /*return <div>
    
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <div className="container">
                      <a className="navbar-brand" href="#"><span className="text-danger">Zátrok</span>Crow</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link" href="#home">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#about">About Me</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#services">Services</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#portfolio">Portfolio</a>
                          </li>
                      </ul>
              </div>
          </div>
      </nav>
  </div>*/
}

export default navbar;
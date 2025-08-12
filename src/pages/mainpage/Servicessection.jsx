function service(){
    return <div>
        {/*services section*/}

       <section id="services" className="services section-padding">
          <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <div className="section-header text-center pb-5">
                    <h2>Services</h2>
                    <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb<br />bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                  </div>
                </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-4">
                <div className="card text-white text-center bg-dark pb-2">
                  <div className="card-body">
                    <i className="bi bi-laptop"></i>
                   <h3 className="card-title">Software Development</h3>
                   <p className="lead">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                    <button className="btn btn-warning text-dark sizeButton">Read More</button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-4">
                <div className="card text-white text-center bg-dark pb-2">
                  <div className="card-body">
                    <i className="bi bi-camera2"></i>
                   <h3 className="card-title">Photography</h3>
                   <p className="lead">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                    <button className="btn btn-warning text-dark sizeButton">Read More</button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-4">
                <div className="card text-white text-center bg-dark pb-2">
                  <div className="card-body">
                    <i className="bi bi-palette-fill"></i>
                   <h3 className="card-title">Design</h3>
                   <p className="lead">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
                    <button className="btn btn-warning text-dark sizeButton">Read More</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
       </section>
    </div>
}

export default service;
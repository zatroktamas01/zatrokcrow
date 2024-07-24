import software1 from './software/1.png'
import software2 from './software/2.png'
import { Link } from "react-router-dom";

function Software() {
    return <div>
        <section className="gallery min-vh-100">

            <div className="container-lg">

                <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="button-container">
                        <Link to="/">
                            <button className="btn bg-warning sizeButton">steps back</button>
                        </Link>
                    </div>

                    <div className="col">
                        <a target="_blank" href={"https://zatroktamas01.github.io/mondrian/"}><img src={software1} className="gallery-item bg-dark" alt="gallery" /></a>
                    </div>

                    <div className="col">
                        <a target="_blank" href={"https://zatroktamas01.github.io/drum-kit-/"}><img src={software2} className="gallery-item bg-dark" alt="gallery" /></a>
                    </div>
                    

                    <div className="button-container">
                        <Link to="/">
                            <button className="btn bg-warning sizeButton">steps back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default  Software;
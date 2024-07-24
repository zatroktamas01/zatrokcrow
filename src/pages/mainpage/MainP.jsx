import Navbar from "./Navbar"
import Slider from "./Slider"
import Aboutsection from "./Aboutsection"
import Portfoliosection from "./Portfoliosection"
import Footer from "./footer"

function mainPage(){
  return <div>
      <Navbar />
      <Slider />
      <Aboutsection />
      <Portfoliosection />
      <Footer />
  </div>
}

export default mainPage;
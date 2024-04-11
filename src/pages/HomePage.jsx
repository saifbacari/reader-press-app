import About from "../components/About/About"
import GridLectures from "../components/GridsLectures/GridLectures"
import Navbar from "../components/Navbar/Navbar"

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <About />
        <GridLectures />
    </div>
  )
}

export default HomePage
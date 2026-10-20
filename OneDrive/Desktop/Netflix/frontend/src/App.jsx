import Details from "./Navbar/Details"
import Footer from "./Navbar/Footer"
import Navbar from "./Navbar/Navbar"
import Questions from "./Navbar/Questions"
import Reasons from "./Navbar/Reasons"
import Trends from "./Navbar/Trends"
const App = () => {
  return (
    <div className="bg-black text-white">
   <Navbar/>
   <Trends/>
   <Reasons/>
   <Questions/>
   <Footer/>
   <Details/>
    </div>
  )
}

export default App

import { BrowserRouter } from "react-router-dom" ;
import AnimationComponent from './components/AnimationComponent';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Tech } from './components' ;
const App = () => {
  return (
   <BrowserRouter>
   <div className=" relative z-0 bg-primary">
   <AnimationComponent />
    <About />
    <Experience />
    <Tech />
    <Works />
    <div className="relative z-0 ">
    <Contact />
    <StarsCanvas />
    </div>
    </div>
   </BrowserRouter>
  )
}

export default App
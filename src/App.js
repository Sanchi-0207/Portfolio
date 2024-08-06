import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact"
import Project from "./Components/Project";
import './index.css'
import './App.css'
function App() {
  return (
    <div className="bg-[#121212] min-h-screen">
     <Navbar/>
     <AboutMe/>
     <Project/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;

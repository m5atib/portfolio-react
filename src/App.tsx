import {lazy} from "react";
import "./App.css";
const Hero = lazy(()=>import("./Components/Hero/Hero")) ;
const Services = lazy(()=>import("./Components/Services/Services")) ;
const Skills = lazy(()=>import("./Components/Skills/Skills")) ;
const Projects = lazy(()=>import("./Components/Projects/Projects")) ;
const Awards = lazy(()=>import("./Components/Awards/Awards")) ;
const Contact = lazy(()=>import("./Components/Contact/Contact")) ;
const Footer = lazy(()=>import("./Components/Footer/Footer")) ;

function App() {
  return (
    <>
      <Hero />
      <Services/>
      <Skills/>
      <Projects/>
      <Awards/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

import { Element, scroller } from "react-scroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Skill from "./pages/Skill";

function App() {
  return (
    <>
      <Navbar onNavClick={(section) => scroller.scrollTo(section, {
          duration: 800,
          smooth: "easeInOutQuad",
          offset: -70,
         // Adjust based on your navbar height
        })}
      />
      <br />
      <Element name="about">
        <About />
      </Element>

      <Element name="skill">
        <Skill />
      </Element>
      
  
      
      <Element name="projects">
        <Project />
      </Element>
      <Element name="services">
        <Services/>
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      
      <Footer />
    </>
  );
}

export default App;

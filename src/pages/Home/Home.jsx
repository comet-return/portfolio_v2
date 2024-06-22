import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "../../components/Contact/Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  useEffect(()=>{
    if(location.hash === "") {
      document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
    } else if(location.hash === "#projects") {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    } else if(location.hash === "#about") {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if(location.hash === "#contact") {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location])
  return (
    <>
        <Hero />
        <hr />
        <Projects />
        <hr />
        <About />
        <hr />
        <Contact />
    </>
  )
}

export default Home
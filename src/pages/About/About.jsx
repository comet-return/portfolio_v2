import AboutHead from "./AboutHead/AboutHead.jsx";
import Skills from "./Skills/SkillsSection.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const location = useLocation();
  useEffect(()=>{
    if(location.hash === "") {
      document.getElementById("about-head").scrollIntoView({ behavior: "smooth" });
    } else if(location.hash === "#skills") {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
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
      <AboutHead />
      <Skills />
      <hr />
      <Contact />
    </>
  )
}

export default About
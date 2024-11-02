import { AboutAnimation } from "../../../utils/Animation";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  AboutAnimation();
  return (
    <section
      id="about"
      className="about flex md:flex-row flex-col md:justify-between justify-center"
    >
      <h1 className="text-8xl py-5">About Me</h1>
      <div className="about-description md:w-1/2 w-full py-5">
        <h2 className="text-3xl">Data Scientist | Research Enthusiast</h2>
        {/* <h2 className="text-3xl mb-3">Has a software engineering background</h2> */}
        <p className="text-sm mb-5 sm:mb-10">
          I am a passionate data scientist with a strong foundation in data
          analysis, machine learning, and statistical modeling. Having
          successfully qualified the GATE exam in 2023, I am eager to apply my
          skills to real-world problems and contribute to cutting-edge research.
        </p>
        {/* <Link to="/about" className="sm:text-sm text-xs underline underline-offset-8">MORE ABOUT ME</Link> */}
      </div>
    </section>
  );
};

export default About;

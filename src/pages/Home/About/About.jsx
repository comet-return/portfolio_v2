import { AboutAnimation } from "../../../utils/Animation";
import "./About.css"
import { Link } from "react-router-dom";

const About = () => {
  AboutAnimation();
  return (
    <section className="about flex md:flex-row flex-col md:justify-between justify-center">
      <h1 className="text-8xl py-5">About Me</h1>
      <div className="about-description md:w-1/2 w-full py-5">
        <h2 className="text-3xl">I am a Full Stack Developer.</h2>
        <h2 className="text-3xl mb-3">Has a software engineering background</h2>
        <p className="text-sm mb-5 sm:mb-10">
          Dynamic Full Stack Developer proficient in MERN stack (MongoDB,
          Express.js, React.js, Node.js) with strong JavaScript skills.
          Experienced in Agile methodologies, database management, SDLC, and OOP
          principles. Collaborative team player committed to delivering scalable
          solutions and adapting to emerging technologies for optimal
          performance.
        </p>
        <Link to="/about" className="sm:text-sm text-xs underline underline-offset-8">MORE ABOUT ME</Link>
      </div>
    </section>
  );
};

export default About;

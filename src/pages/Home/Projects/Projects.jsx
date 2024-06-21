import "./Projects.css";
import Project from "./Project";
import { ProjectAnimation } from "../../../utils/Animation";

const Projects = () => {
  ProjectAnimation();
  return (
    <section className="projects-section">
      <h1>Featured Projects</h1>
      <p className="text-center sm:text-start">Here are some projects that showcase my passion & taste of development</p>
      <div className="projects-container grid md:grid-cols-2 grid-cols-1 gap-6 py-10">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  )
}

export default Projects
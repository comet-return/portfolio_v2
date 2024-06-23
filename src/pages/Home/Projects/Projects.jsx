import "./Projects.css";
import Project from "./Project";
import { ProjectAnimation } from "../../../utils/Animation";
import { projects } from "../../../utils/Constants";

const Projects = () => {
  ProjectAnimation(); 
  return (
    <section id="projects" className="projects-section">
      <h1>Featured Projects</h1>
      <p className="text-center sm:text-start">Here are some projects that showcase my passion & taste of development</p>
      <div className="projects-container grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 py-10">
        {
          projects.map((project, idx) => {
            return <Project key={idx} name={project.name} img={project.img} links={project.links} description={project.description} />
          })
        }
      </div>
    </section>
  )
}

export default Projects
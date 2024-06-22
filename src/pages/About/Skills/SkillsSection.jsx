import { skills } from "../../../utils/Constants";
import Skill from "./Skill";
import "./SkillSection.css"

const Skills = () => {
  return (
    <section id="skills" className="min-h-0 pt-0 flex md:flex-row flex-col md:justify-between justify-center">
        <h1>My Skills</h1>
        <div className="skill-description md:w-1/2 w-full">
            <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>

            <div className="all-skills w-full pt-7 flex flex-wrap gap-3">
                {
                  skills.map((skill, index) => {
                    return (
                      <Skill name={skill.name} icon={skill.icon} key={index}/>
                    )
                  })
                }
            </div>
        </div>
    </section>
  )
}

export default Skills
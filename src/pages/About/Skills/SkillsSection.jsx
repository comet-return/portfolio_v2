import { skills } from "../../../utils/Constants";
import Skill from "./Skill";
import "./SkillSection.css";
import { SkillsAnimation } from "../../../utils/Animation";

const Skills = () => {
  SkillsAnimation();
  return (
    <section id="skills" className="min-h-0 flex md:flex-row flex-col md:justify-between justify-center">
        <h1>My Skills</h1>
        <div className="skill-description md:w-1/2 w-full">
            <p>I am constantly seeking to expand my skill set. I thrive in dynamic environments and am eager to take on new challenges. My ability to adapt and learn quickly ensures that I am always up-to-date with the latest trends and techniques.</p>

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
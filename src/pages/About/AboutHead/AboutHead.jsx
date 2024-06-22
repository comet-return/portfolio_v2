import "./AboutHead.css";
import SocialButton from "../../../components/Button/SocialButton.jsx";
import { socialNavs } from "../../../utils/SocialConstants.jsx";

const AboutHead = () => {
  return (
    <section>
      <div className="py-20 flex md:flex-row flex-col md:justify-between justify-center">
        <h1 className="text-8xl text-start">About Me</h1>
        <div className="about-right md:w-1/2 w-full py-5">
          <h2 className="text-3xl">I am a Full Stack Developer.</h2>
          <h2 className="text-3xl mb-3">
            Has a software engineering background.
          </h2>
          <p className="text-sm mb-5 sm:mb-10">
            Dynamic Full Stack Developer proficient in MERN stack (MongoDB,
            Express.js, React.js, Node.js) with strong JavaScript skills.
            Experienced in Agile methodologies, database management, SDLC, and
            OOP principles. Collaborative team player committed to delivering
            scalable solutions and adapting to emerging technologies for optimal
            performance.
          </p>
          <div className="flex items-center justify-start gap-4">
            <a href="" className="button">Download Resume</a>
            {
                socialNavs.map((socialNav, idx) => (
                  <SocialButton key={idx} link={socialNav.link}>
                    {socialNav.icon}
                  </SocialButton>
                ))
            }
          </div>
        </div>
      </div>
      <div className="about-img overflow-hidden">
        <img src="https://plus.unsplash.com/premium_photo-1718146018251-1e59e5d6f2a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="My Pic" className="w-full h-full object-cover object-center rounded-2xl" />
      </div>
    </section>
  );
};

export default AboutHead;

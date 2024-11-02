import SocialButton from "../../../components/Button/SocialButton.jsx";
import { socialNavs } from "../../../utils/Constants.jsx";
import { HeroAnimation } from "../../../utils/Animation.jsx";
import "./Hero.css";
const Hero = () => {
  HeroAnimation();
  return (
    <section
      id="hero"
      className="hero h-full w-full flex flex-col md:flex-row items-center md:justify-between justify-around gap-10"
    >
      <div className="headline">
        <h1 className="">HI, I AM</h1>
        <h1 className="mb-5">
          Priyanshu <span className="name-animate">NAMDEV</span>
        </h1>
        <p className="mb-5 text-center sm:text-start">
          Data Sciencetist with a focus on llm and gen ai. <br /> Enthusiasm in
          learning new technologies.
        </p>
        <div className="headline-navs flex items-center md:justify-start justify-center gap-4">
          <a
            href="/assets/resume.pdf"
            download="Priyanshu_Resume.pdf"
            className="button"
          >
            Download Resume
          </a>

          {socialNavs.map((socialNav, idx) => (
            <SocialButton key={idx} link={socialNav.link}>
              {socialNav.icon}
            </SocialButton>
          ))}
        </div>
      </div>

      <div className="hero-img relative">
        <img
          src="/images/hero-img.jpeg"
          alt="My_Image"
          className="hero-img-inner w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;

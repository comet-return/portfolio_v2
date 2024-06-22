import SocialButton from "../../../components/Button/SocialButton.jsx";
import {socialNavs} from "../../../utils/Constants.jsx";
import { HeroAnimation } from "../../../utils/Animation.jsx";
import "./Hero.css";
const Hero = () => {
  HeroAnimation();
  return (
    <section id="hero" className="hero h-full w-full flex flex-col md:flex-row items-center md:justify-between justify-center gap-10">
        <div className="headline">
            <h1 className="">HI, I AM</h1>
            <h1 className="mb-5">MOHAMMAD <span className="name-animate">ZAID</span></h1>
            <p className="mb-5 text-center sm:text-start">Full stack developer with a focus on web applications. <br /> Enthusiasm in learning new technologies.</p>
            <div className="headline-navs flex items-center md:justify-start justify-center gap-4">
              <a href="../../../assets/zaid -resume.pdf" download="zaid-resume.pdf" className="button">Download Resume</a>

              {
                socialNavs.map((socialNav, idx) => (
                  <SocialButton key={idx} link={socialNav.link}>
                    {socialNav.icon}
                  </SocialButton>
                ))
              }

            </div>
        </div>

        <div className="hero-img">
          <img src="https://images-platform.99static.com/ky8wEq_DEdvfN0l2lmUSfuVYL0g=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/107/107446/attachment_107446690" alt="My_Image" />
        </div>

    </section>
  )
}

export default Hero
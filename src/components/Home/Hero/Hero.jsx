import Button from "../../Button/Button.jsx";
import SocialButton from "../../Button/SocialButton.jsx";
import {socialNavs} from "../../../utils/HeroConstants.jsx";
import "./Hero.css"
import { HeroAnimation } from "../../../utils/Animation.jsx";
const Hero = () => {
  HeroAnimation();
  return (
    <section className="hero h-full w-full flex flex-col md:flex-row items-center justify-between">
        <div className="headline">
            <h1>HI, I AM</h1>
            <h1 className="mb-1">MOHAMMAD ZAID</h1>
            <p className="mb-5 text-center sm:text-start">Full stack developer with a focus on web applications</p>
            <div className="headline-navs flex items-center gap-4">
              <Button text={"CONTACT ME"}/>

              {
                socialNavs.map((socialNav, idx) => (
                  <SocialButton key={idx} link={socialNav.link}>
                    {socialNav.icon}
                  </SocialButton>
                ))
              }

            </div>
        </div>

        <div className="hero-img bg-slate-700">
          <img src="https://images-platform.99static.com/ky8wEq_DEdvfN0l2lmUSfuVYL0g=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/107/107446/attachment_107446690" alt="My_Image" />
        </div>

    </section>
  )
}

export default Hero
import Button from "../../Button/Button.jsx";
import SocialButton from "../../Button/SocialButton.jsx";
import {socialNavs} from "../../../utils/HeroConstants.jsx";
import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero h-full w-full flex flex-col md:flex-row items-center justify-between md:p-20 p-16 md:px-44">
        <div className="headline">
            <h1 className="text-7xl mb-1">HI, I AM <br />MOHAMMAD ZAID</h1>
            <p className="mb-5">Full stack developer with a focus on web applications</p>
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
          <img src="" alt="My_Image" />
        </div>

    </section>
  )
}

export default Hero
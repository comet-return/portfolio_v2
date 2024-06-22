import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram, IoLogoReact, IoLogoNodejs, IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiMongodb, SiMysql, SiBootstrap, SiTailwindcss, SiPython } from "react-icons/si";

export const navigations = [
    {text: "Home", link: "/"},
    {text: "Projects", link: "/#projects"},
    {text: "Skills", link: "/about#skills"},
    {text: "About", link: "/about"},
    {text: "Contact", link: "#contact"},
]

export const socialNavs = [
    {link: "https://www.linkedin.com/in/mohammad-zaid-khan-dev/", icon: <TfiLinkedin />},
    {link: "https://github.com/MZaidKhan2413", icon: <BsGithub />}
]

export const socialHandles = [
    {link: "https://www.linkedin.com/in/mohammad-zaid-khan-dev/", icon: <TfiLinkedin />},
    {link: "https://github.com/MZaidKhan2413", icon: <BsGithub />},
    {link: "https://x.com/mZaidk_", icon: <BsTwitterX />},
    {link: "https://www.instagram.com/z.a.i.d__k/", icon: <IoLogoInstagram />},
]

export const skills = [
    {name: "React.js", icon: <IoLogoReact />},
    {name: "Node.js", icon: <IoLogoNodejs />},
    {name: "JavaScript", icon: <IoLogoJavascript />},
    {name: "Java", icon: <FaJava />},
    {name: "MongoDB", icon: <SiMongodb />},
    {name: "SQL", icon: <SiMysql />},
    {name: "Bootstrap", icon: <SiBootstrap />},
    {name: "Tailwind", icon: <SiTailwindcss />},
    {name: "Python", icon: <SiPython />},
]
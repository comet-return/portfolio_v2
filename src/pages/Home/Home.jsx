import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import About from "./About/About";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <>
        <Hero />
        <hr />
        <Projects />
        <hr />
        <About />
        <hr />
        <Contact />
    </>
  )
}

export default Home
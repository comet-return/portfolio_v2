import "./Contact.css";
import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm"; 
import { ContactAnimation } from "../../utils/Animation";
const Contact = () => {
  ContactAnimation();
  return (
    <section className="contact flex justify-center md:flex-row flex-col gap-10">
        <ContactDesc />
        <ContactForm />
    </section>
  )
}

export default Contact
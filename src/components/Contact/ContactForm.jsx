import Button from "../Button/Button";
import { useState } from "react";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="contact-right md:w-1/2 w-full">
      <form
        className="flex flex-col gap-10 justify-center items-start"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          value={formValues.name}
          placeholder="Name"
          id="name"
          onChange={handleOnChange}
          required
        />
        <input
          type="email"
          value={formValues.email}
          placeholder="Email"
          id="email"
          onChange={handleOnChange}
          required
        />
        <input
          type="text"
          value={formValues.subject}
          placeholder="Subject"
          id="subject"
          onChange={handleOnChange}
          required
        />
        <textarea
          id="message"
          value={formValues.message}
          cols="30"
          rows="6"
          placeholder="Message"
          onChange={handleOnChange}
          required
        ></textarea>
        <span>
          <Button text={"Submit"} />
        </span>
      </form>
    </div>
  );
};

export default ContactForm;

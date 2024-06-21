import { socialHandles } from "../../utils/ContactConstants";

const ContactDesc = () => {
  return (
    <div className="contact-left space-y-3 md:w-1/2 w-full">
      <h1 className="mb-4">Let's Connect</h1>
      <h6 className="opacity-80 text-md text-center sm:text-start">
        Say hello at <a href="">mzaidk222@gmail.com</a>
      </h6>
      <h6 className="opacity-80 text-md text-center sm:text-start">
        For more info, here's my <a href="">resume</a>
      </h6>
      <div className="contact-socials flex gap-5 text-xl pt-6">
        {socialHandles.map((socialHandle, idx) => (
          <a href={socialHandle.link} key={idx} target="_blank">
            {socialHandle.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactDesc;

import "./SocialButton.css";

const SocialButton = ({ link, children }) => {
  return (
    <a href={link} target="_blank">
      <button className="social-btn flex items-center justify-center p-3">
        {children}
      </button>
    </a>
  );
};

export default SocialButton;

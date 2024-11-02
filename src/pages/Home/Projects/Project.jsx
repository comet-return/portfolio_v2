import { truncateString } from "../../../utils/truncateString";

const Project = ({
  img = "",
  name = "Project",
  description = "",
  links = {},
}) => {
  return (
    <div className="project p-3 rounded-xl">
      <div className="project-img">
        <img
          src={img}
          alt="project"
          className="object-cover overflow-hidden rounded-md"
        />
      </div>
      <div className="project-info px-1">
        <h2 className="sm:text-2xl text-xl py-3 font-semibold">{name}</h2>
        <hr />
        <p className="py-3 text-sm opacity-60">{truncateString(description)}</p>
        <hr />
      </div>
      <div className="project-links flex gap-x-5 sm:text-sm text-xs px-1 pb-2 pt-3">
        <a href={links.live} target="_blank">
          LIVE DEMO
        </a>
        <a href={links.github} target="_blank">
          SEE ON GITHUB
        </a>
        <a href={links?.info} target="_blank">
          INFO
        </a>
      </div>
    </div>
  );
};

export default Project;

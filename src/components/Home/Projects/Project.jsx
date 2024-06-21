    const Project = ({img = "", name="Project", description="", links = {}}) => {
  return (
    <div className="project bg-slate-00 p-5 rounded-2xl space-y-3">
      <div className="project-img">
        <img
          src="https://projectimg.com/hs-fs/hubfs/TI%20-%20MED%20ED%20Platform.jpg?width=750&height=459&name=TI%20-%20MED%20ED%20Platform.jpg"
          alt="project-1"
          className="rounded-lg w-100 object-cover overflow-hidden"
        />
      </div>
      <div className="project-info ps-1">
        <h2 className="sm:text-3xl text-xl mb-2">{name}</h2>
        <hr />
        <p className="py-2">{description} dfhidshfiduhfiuh</p>
        <hr />
      </div>
      <div className="project-links flex gap-4 sm:text-sm text-xs ps-1">
        <a href={links.live}>LIVE DEMO</a>
        <a href={links.github}>SEE ON GITHUB</a>
      </div>
    </div>
  );
};

export default Project;

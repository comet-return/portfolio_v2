const Skill = ({name, icon}) => {
  return (
    <div className="px-5 py-2 rounded-3xl flex items-center gap-x-3 opacity-85">
        <span>{name}</span>
        <span className="text-xl">{icon}</span>
    </div>
  )
}

export default Skill
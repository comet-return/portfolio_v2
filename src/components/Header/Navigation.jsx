import { NavLink } from "react-router-dom"

const Navigation = ({nav}) => {
  return (
    <li className="navigations"><NavLink to={nav.link} >{nav.text}</NavLink></li>
  )
}

export default Navigation
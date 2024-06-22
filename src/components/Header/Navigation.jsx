import { Link } from "react-router-dom"

const Navigation = ({nav}) => {
  return (
    <li className="navigations"><Link to={nav.link}>{nav.text}</Link></li>
  )
}

export default Navigation
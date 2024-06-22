const Navigation = ({nav}) => {
  return (
    <li className="navigations"><a href={nav.link}>{nav.text}</a></li>
  )
}

export default Navigation
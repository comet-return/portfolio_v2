const Navigation = ({nav}) => {
  return (
    <li><a href={nav.link}>{nav.text}</a></li>
  )
}

export default Navigation
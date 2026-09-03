import { Link } from "react-router-dom"


export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home|</Link>
      <Link to="/about">About|</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/albums">Albums|</Link>
      <Link to="/album/:id">Album</Link>
    </nav>
  )
}
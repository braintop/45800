import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
export default function Navbar() {
    const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie)
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter | </Link>
            <Link to="/language">Language |</Link>
            <Link to="/movie">Movie |</Link>
            <Link to="/stam">Stam |</Link>
            <Link to="/user">User |</Link>
            <span>selected movie: {selectedMovie}</span>
        </nav>
    )
}
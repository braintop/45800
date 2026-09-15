import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
export default function Navbar() {
    const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie)
    const selectedCity = useSelector((state: RootState) => state.city.cityValue)
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter | </Link>
            <Link to="/language">Language |</Link>
            <Link to="/movie">Movie |</Link>
            <Link to="/stam">Stam |</Link>
            <Link to="/user">User |</Link>
            <Link to="/city">City |</Link>
            <Link to="/user2">User2 |</Link>
            <Link to="/displayuser">Display User |</Link>
            <span>selected movie: {selectedMovie} | selected city: {selectedCity}</span>
        </nav>
    )
}
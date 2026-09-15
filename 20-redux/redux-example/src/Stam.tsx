import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
export default function Stam() {
    const language = useSelector((state: RootState) => state.language.languageValue)
    const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie)
    const firstname = useSelector((state: RootState) => state.user.firstname)
    const lastname = useSelector((state: RootState) => state.user.lastname)
        return (
            <div>
                <h1>Stam</h1>
                <p>Stam: {language}</p>
                <p>Selected Movie: {selectedMovie}</p>
                <p>Firstname: {firstname}</p>
                <p>Lastname: {lastname}</p>
            </div>
        )
    }
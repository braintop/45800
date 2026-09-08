import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export default function MoviesList() {
    const { movies } = useContext(MovieContext);
    return (
        <div>
            <h1>Movies List</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie}>{movie}</li>
                ))}
            </ul>
        </div>
    )
}
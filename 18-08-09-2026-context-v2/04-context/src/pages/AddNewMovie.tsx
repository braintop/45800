import { useContext, useState } from "react";
import { MovieContext    } from "../contexts/MovieContext";
export default function AddNewMovie() {
    const {addMovie} = useContext(MovieContext);
    const [movie, setMovie] = useState<string>("");
    const handleAddMovie = () => {
        addMovie(movie);
        setMovie("");
    }
    return (
        <div>
            <h1>Add Movie</h1>
            <input type="text" placeholder="Enter movie name" value={movie} onChange={(e) => setMovie(e.target.value)} />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    )
}
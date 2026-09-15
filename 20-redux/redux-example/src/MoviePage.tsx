import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store/store'
import { selectSpiderman, selectBatman, selectSuperman, resetMovie } from './slices/movieSlice'
export default function MoviePage() {
    const dispatch = useDispatch()
    const selectedMovie = useSelector((state: RootState) => state.movie.selectedMovie)
    return (
        <div>
            <h1>Movie Page</h1>
            <p>Selected Movie: {selectedMovie}</p>
            <button onClick={() => dispatch(selectSpiderman())}>Select Spiderman</button>
            <button onClick={() => dispatch(selectBatman())}>Select Batman</button>
            <button onClick={() => dispatch(selectSuperman())}>Select Superman</button>
            <button onClick={() => dispatch(resetMovie())}>Reset Movie</button>
        </div>
    )
}

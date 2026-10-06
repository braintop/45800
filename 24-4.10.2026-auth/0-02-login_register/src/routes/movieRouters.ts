import { Router } from 'express';
import { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } from '../conrollers/movieController';
import { authMiddleware } from '../middleWare/authMiddleware';
import { adminMiddleware } from '../middleWare/authMiddleware';
const router = Router();

router.get('/', authMiddleware, adminMiddleware, getMovies);
router.get('/:id', getMovieById);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id',authMiddleware, deleteMovie);

export default router;
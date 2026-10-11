import { Router } from 'express';
import {deleteUser,getUserById,updateUser, createUser, getUsers,login } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.post('/login', login);
export default router;
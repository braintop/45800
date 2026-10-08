import { Router } from 'express';
import {deleteUser,getUserById,updateUser, createUser, getUsers } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;
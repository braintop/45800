import { Router } from 'express';
import Task from '../model/TaskModel';
const router = Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const task = await Task.create({ title: req.body.title });
    res.status(201).json(task);
});

export default router;
